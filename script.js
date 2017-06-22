	
	var link = document.querySelector(".user-block a");
	var popup = document.querySelector(".modal-content");
	var close = document.querySelector(".modal-content-close");
	var form = popup.querySelector("form");
	var login = popup.querySelector("[name=login]");
	var password = popup.querySelector("[name=password]");
	var storage = localStorage.getItem("login");

	link.addEventListener("click", function(e){
		e.preventDefault();
		popup.classList.add("modal-active");


		if (storage) {
			login.value = storage;
			password.focus();
		} else {
			login.focus();
		}

	});

	close.addEventListener("click", function(e){
		e.preventDefault();
		popup.classList.remove("modal-active");

	});

	form.addEventListener("submit", function(e){
		if (!login.value || !password.value) {
			e.preventDefault();
			console.log('Данные отсутствуют');
		} else {
			e.preventDefault();
			localStorage.setItem("login", login.value);
			console.log("Thanks");
		}
	});