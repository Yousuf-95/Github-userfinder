class Github{
    constructor(){
        this.client_id= 123;
    }

    async getUser(user){
        const response = await fetch(`https://api.github.com/users/${user}`);
        // console.log(response);

        let profile = response.json();

        return profile;
    }

}