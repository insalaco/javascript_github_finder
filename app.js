// instantiate new github
const github = new Github;
const ui = new UI;
// search input
const searchUser = document.getElementById('searchUser');

// add event listener to input
searchUser.addEventListener('keyup', (e) => {
  const userText = e.target.value;

  if(userText !== '') {
    // make http call
    github.getUser(userText)
      .then(data => {
        if(data.profile.message === '') {
          // show alert
          

        } else {
          // show profile
          ui.showProfile(data.profile);
          
        }
      });
  } else {
    // clear profile
    ui.clearProfile();
  }

});