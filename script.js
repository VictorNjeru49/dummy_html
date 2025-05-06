const themeToggleButton = document.getElementById('theme-toggle-button');
        const body = document.body;

        // themeToggleButton.addEventListener('click', toggleTheme);
        let darktheme = false;
        function toggleTheme() {
            darktheme = !darktheme;
            if(darktheme){
            document.body.style.backgroundColor ='rgb(0, 0, 0)';
            document.body.style.color = 'rgb(255, 255, 255)';
            }else{
            document.body.style.backgroundColor ='rgb(255, 255, 255)';
            document.body.style.color = 'rgb(0, 0, 0)';
            }
        }

       

        document.querySelector('.logout button').addEventListener('click', function() {
            alert('You have logged out!');
        });
        document.querySelector('.notifications button').addEventListener('click', function() {
            alert('You have viewed your notifications!');
        });
        document.querySelector('.settings button').addEventListener('click', function() {
            alert('Settings functionality is under construction!');
        });
        document.querySelectorAll('.profile-picture').addEventListener('click', function() {
            alert('Profile picture clicked!');
        });
        document.querySelector('.search-bar button').addEventListener('click', function() {
            alert('Search functionality is under construction!');
        });
        document.querySelector('.language-selector select').addEventListener('change', function() {
            alert('Language changed to ' + this.value);
        });
        document.querySelector('.help button').addEventListener('click', function() {
            alert('Help section is under construction!');
        });
        document.querySelector('.feedback button').addEventListener('click', function() {
            alert('Feedback section is under construction!');
        });