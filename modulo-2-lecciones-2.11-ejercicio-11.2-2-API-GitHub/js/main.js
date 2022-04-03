'use strict';

const userGithub = document.querySelector('.js_userGithub');
const buttonSearch = document.querySelector('.js_buttonSearch');

function getUserGithub() {
  fetch(`https://api.github.com/users/${userGithub.value}`)
    .then((response) => response.json())
    .then((data) => {
      const userName = document.querySelector('.js_name');
      userName.innerHTML = data.name;
      const userPhoto = document.querySelector('.js_image');
      userPhoto.src = data.avatar_url;
      const userRepos = document.querySelector('.js_repos');
      userRepos.innerHTML = data.public_repos;
      const userFollowers = document.querySelector('.js_followers');
      userFollowers.innerHTML = data.followers;
    });
}

buttonSearch.addEventListener('click', getUserGithub);
