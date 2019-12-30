// Initialize Github object
const github = new Github;

//Initialize UI object
const ui = new UI;

//Get search input element
const searchUser = document.getElementById('searchUser');


//Add event listener to input.
searchUser.addEventListener('keyup', (event) => {
    
    //Get input text
    const userText = event.target.value;
    // console.log(userText);
    if(userText !== ''){
        github.getUser(userText)
        .then(data => {
            // console.log(data);
            if(data.message === 'Not Found'){
                console.log('user doesnot exist');
            }
            else{
                //Display profile
                ui.showProfile(data);
                // console.log(data.url);

            }
        })
    }
    else{
        //If input space is empty or deleted, clear the UI.
        
    }
});