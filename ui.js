class UI {
    constructor() {
        // let profile;
        this.profile = document.getElementById('profile');
    }

    showProfile(user) {
        console.log(user);
        this.profile.innerHTML = `
    <div class="container mb-3">
        <div class = "row">
            <div class = "col-sm-3  ">
                <img class = "img-fluid d-block mb-2 rounded-circle mx-auto" src = "${user.avatar_url}">
                <a href = "${user.html_url}" target = "_blank" class = "btn btn-secondary btn-block mb-4">View Profile</a>
             </div>
            <div class = "col-sm-9">
            <div class = "">    
                <span class= "badge badge-info">Public Repos: ${user.public_repos}</span> 
                <span class= "badge badge-info">Public Gists: ${user.public_gists}</span> 
                <span class= "badge badge-info">Public Followers: ${user.followers}</span> 
                <span class= "badge badge-info">Public Following: ${user.folowing}</span>
            </div>
                <br>
                <ul class = "list-group">
                    <li class = "list-group-item">Company: ${user.company}</li> 
                    <li class = "list-group-item">Website/blog: ${user.blog}</li> 
                    <li class = "list-group-item">Location: ${user.location}</li> 
                    <li class = "list-group-item">Member Since: ${user.created_at}</li> 
                </ul>
                <div id = "repos"></div>
            </div>
        </div>
        <div id = "repos"><div>
    </div>
    `;
    }
}