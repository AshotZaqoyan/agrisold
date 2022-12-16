const auth = firebase.auth();
document.querySelector("#show-register").addEventListener("click", () => {
	showRegistration();
});

const showRegistration = () => {
	document.querySelector("#registration-page").classList.remove("hide");
	document.querySelector("#login-page").classList.add("hide");
};

document.querySelector("#show-login").addEventListener("click", () => {
	showLogin();
});

const showLogin = () => {
	document.querySelector("#registration-page").classList.add("hide");
	document.querySelector("#login-page").classList.remove("hide");
};

document.querySelector("#signout").addEventListener("click", () => {
	signOut();
});


const database = firebase.database();

const register = () => {

	const email = document.querySelector("#registration-email").value;
	const reemail = document.querySelector("#registration-reemail").value;
	const password = document.querySelector("#registration-password").value;
	const name = document.querySelector("#name").value;
	const lastname = document.querySelector("#lastname").value;

	if (email.trim() == "") {
		alert("Մուտքագրեք էլ Հասցե");
	} else if (password.trim().length < 7) {
		alert("Գաղտնաբառը պետք է լինի առնվազն 7 նիշ");
	} else if (email != reemail) {

		alert("Էլ հասցեներ չեն համընկնում");
	} else {
		if (email == "") {
			alert("Լրացնել բոլեր դաշտերը");
			return;
		}
		if (reemail == "") {
			alert("Լրացնել բոլեր դաշտերը");
			return;
		}
		if (password == "") {
			alert("Լրացնել բոլեր դաշտերը");
			return;
		}
		if (name == "") {
			alert("Լրացնել բոլեր դաշտերը");
			return;
		}
		if (lastname == "") {
			alert("Լրացնել բոլեր դաշտերը");
			return;
		}
		auth
			.createUserWithEmailAndPassword(email, password).then(function () {
				// Declare user variable
				var user = auth.currentUser;

				// Add this user to Firebase Database
				var database_ref = database.ref();

				// Create User data
				var user_data = {
					email: email,
					password: password,
					name: name,
					lastname: lastname,
				};

				// Push to Firebase Database
				database_ref.child('users/' + user.uid).set(user_data);
			})
			.catch(function (error) {
				// Handle Errors here.
				var errorCode = error.code;
				var errorMessage = error.message;
				alert(errorMessage);
				// ...
			});
	}
};

document.querySelector("#register").addEventListener("click", () => {
	register();
});

//register when you hit the enter key
document
	.querySelector("#registration-password")
	.addEventListener("keyup", (e) => {
		if (event.keyCode === 13) {
			e.preventDefault();

			register();
		}
	});

const login = () => {
	const email = document.querySelector("#login-email").value;
	const password = document.querySelector("#login-password").value;

	if (email.trim() == "") {
		alert("Մուտքագրեք էլ Հասցե");
	} else if (password.trim() == "") {
		alert("Մուտքագրեք գաղտնաբառը");
	} else {
		authenticate(email, password);
	}
};

document.querySelector("#login").addEventListener("click", () => {
	login();
});

//sign in when you hit enter
document
	.querySelector("#login-password")
	.addEventListener("keyup", (e) => {
		if (event.keyCode === 13) {
			e.preventDefault();

			login();
		}
	});

const authenticate = (email, password) => {
//	const auth = firebase.auth();
//	auth.signInWithEmailAndPassword(email, password);
	firebase
		.auth()
		.signInWithEmailAndPassword(email, password)
		.catch(function (error) {
			// Handle Errors here.
			var errorCode = error.code;
			var errorMessage = error.message;
			alert(errorMessage);
		});
};

const showHomepage = () => {
	document.querySelector("#registration-page").classList.add("hide");
	document.querySelector("#login-page").classList.add("hide");
	document.querySelector("#snip1336").classList.remove("hide");
};

const signOut = () => {
	firebase
		.auth()
		.signOut()
		.then(function () {
			location.reload();
		})
		.catch(function (error) {
			alert("Չհաջողվեց դուրս գալ, ստուգեք ցանցային կապը");
		});
};

auth.onAuthStateChanged((firebaseUser) => {
	if (firebaseUser) {
		showHomepage();
		//profile
		var user = auth.currentUser.uid;
		var useremail = auth.currentUser.email;
		document.getElementById("usermailh2").innerHTML = useremail;

		var storageRef = firebase.storage().ref('images/' + user);
		//1. Try:
		storageRef.getDownloadURL().then(function (url) {
			var edit_save = document.getElementById("edit-save");
			edit_save.src = url;
		});


		var user_ref = database.ref('users/' + user);
		user_ref.on('value', function (snapshot) {
			var data = snapshot.val();
			document.getElementById("myfirstname").innerHTML = data.name;
			document.getElementById("mylastname").innerHTML = data.lastname;
		});


	}
});

document
	.querySelector("#forgot-password")
	.addEventListener("click", () => {
		const email = document.querySelector("#login-email").value;
		if (email.trim() == "") {
			alert("Մուտքագրեք էլ Հասցե");
		} else {
			forgotPassword(email);
		}
	});

const forgotPassword = (email) => {
	auth
		.sendPasswordResetEmail(email)
		.then(function () {
			alert("Էլ հասցեին ուղարկվել է նամակ");
		})
		.catch(function (error) {
			alert("Անվավեր էլփոստ կամ վատ ցանցային կապ");
		});
};



/*img*/

function upload() {
	//get your image
	var image = document.getElementById('file-upload').files[0];
	//get your blog text
	//var post=document.getElementById('post').value;
	//get image name
	var imageName = auth.currentUser.uid;
	//firebase storage reference
	//it is the path where your image will be stored
	var storageRef = firebase.storage().ref('images/' + imageName);
	//upload image to selected storage reference
	//make sure you pass image here
	var uploadTask = storageRef.put(image);
	//to get the state of image uploading....
	uploadTask.on('state_changed', function (snapshot) {
		//get task progress by following code
		var progress = ((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
		console.log("upload is " + progress + " done");

	}, function (error) {
		//handle error here
		console.log(error.message);
	}, function () {
		//handle successfull upload here..
	});
}


var input = document.getElementById('file-upload');
var infoArea = document.getElementById('file-upload-filename');
input.addEventListener('change', showFileName);
function showFileName(event) {
	var input = event.srcElement;
	var fileName = input.files[0].name;
	infoArea.textContent = 'Ձեր ֆայլի անունը: ' + fileName;
}

function upshow() {
	document.getElementById("upcontainer").classList.add("upshow");
}
function upclose() {
	document.getElementById("upcontainer").classList.remove("upshow");
}