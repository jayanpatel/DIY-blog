console.log("linked");

$(function(){
	$("#signup").click(function(){ renderSignupForm() });

	var renderSignupForm = function()
	{
		var $container = $('#container');

		$container.empty();
		$container.show();
		$('.form').empty();
		var template = Handlebars.compile($('#signup-form').html());

		$container.append(template);

		$('#signup-button').click(function() 
		{
			if($("#username").val() === "" || $("#password").val() === "")
			{
				alert("Please input the information.");
			}
			else
			{
				createUser();
			}
		})
	}

	var renderLoginForm = function()
	{
		var $container = $('#container');

		$container.show();
		$('.form').empty();
		var template = Handlebars.compile($('#login-form').html());

		$container.append(template);

		$('#login-button').click(function() {
			// createUser();
			if($("#username").val() === "" || $("#password").val() === "")
			{
				alert("Please input username and password");
			}
			else
			{
				getUser();
			}
		})
	}

	var createUser = function()
	{
		console.log("creating user");
	}

	var getUser = function()
	{

	}

	renderLoginForm();
});