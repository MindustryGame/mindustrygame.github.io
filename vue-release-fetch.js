const apiURL = 'https://api.github.com/repos/Anuken/Mindustry/releases?per_page=15';
const config = {
	el:"#git-lists",
	data:{
		releases:[],
		latest_release:"",
		latest_release_url:""
	},
	created:function(){
        this.fetchData();
	},
	filters: {
        formatDate:function (v){
            return v.replace(/T|Z/g, ' ')
		},
		truncate:function(v){
            var newline = v.indexOf('\n')
            return newline > 0 ? v.slice(0, newline) : v
        }
    },
	methods:{
        fetchData:function(){
            var xhr = new XMLHttpRequest();
            xhr.open('GET', apiURL);
            xhr.onload = ()=>{
				var releases = JSON.parse(xhr.responseText);
                return this.parse_data(releases);
            };
            xhr.send();
		},
		parse_data:function(arry){
			var returndat = [];
			for(var i in arry){
				var editions = arry[i];
				var cachedata = {};
				var asset_jayson = {};
				cachedata["Name"] = editions["name"];
				cachedata["Date"] = editions["published_at"];
				cachedata["Vertion"] = editions["tag_name"];
				cachedata["Desc"] = editions["body"];
				/* some editions uses default build name */
				for(var i in editions["assets"]){
					var assets = editions["assets"][i];
					if(assets["name"] == "Mindustry.jar"){
						asset_jayson["Mindustry.jar"] = assets["browser_download_url"];
					}else if(assets["name"] == "desktop-release.jar"){
						asset_jayson["Mindustry.jar"] = assets["browser_download_url"];
					}
					if(assets["name"] == "server-release.jar"){
						asset_jayson["Server.jar"] = assets["browser_download_url"];
					}
				}
				cachedata["Assets"] = asset_jayson;
				returndat.push(cachedata);
				console.log(cachedata);
			}
			this.releases = returndat;
			this.latest_release = returndat[0]["Name"];
			this.latest_release_url = returndat[0]["Assets"]["Mindustry.jar"];
		}
	}
}

var vonk = new Vue(config);