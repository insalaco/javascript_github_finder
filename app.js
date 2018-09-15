// instantiate new github
const github = new Github;

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

        }
      });
  } else {
    // clear profile
  }

});