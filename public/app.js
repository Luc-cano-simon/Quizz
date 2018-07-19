var tab = [];
var quest ;
// var next ;
var reponse ;


$.ajax(
{
	type: "GET",
	url: "/question"

}).done(function(arraQ)
{
	
	for (var i = 0; i < arraQ.length; i++) 
	{
		tab.push(arraQ[i]);
	};
	console.log(tab);
});


$('#btnQues').on('click','.start', function ()

{
	quest = parseInt($(this).val());
	console.log(quest);

	$('#btnQues').empty();
	$('#btnQues').append('<table><thead><tr><th> Question : '+tab[quest].ID+'</th></tr><tr><th>'+tab[quest].Question+'</th></tr></thead><tbody id="answer"></tbody>');

	$('#answer').append('<tr><td><button  class="rep btn btn-outline-dark btn-block" id="test">'+tab[quest].reponse_1+'</button></td><td><button class="rep btn btn-outline-dark btn-block" id="test2">'+tab[quest].reponse_2+'</button></td></tr>');
	$('#answer').append('<tr><td><button  class="rep btn btn-outline-dark btn-block">'+tab[quest].reponse_3+'</button></td><td><button  class="rep btn btn-outline-dark btn-block" id="test3">'+tab[quest].reponse_4+'</button></td></tr>');



	$('#btnQues').on('click', '.rep', function()
	{

		reponse = $(this).html();
		$('.rep').prop('disabled', true);

		if (reponse == 'Du sel') {

			$(this).css('background-color', 'green');
		}else if (reponse == "Escrime") {
			$(this).css('background-color', 'green');
		}else if (reponse == 'Au rugby') {
			$(this).css('background-color', 'green');
		}else if (reponse == 'Bleue') {
			$(this).css('background-color', 'green');
		}else if (reponse == 'Birdie') {
			$(this).css('background-color', 'green');
		}else if (reponse == 'Au bowling') {
			$(this).css('background-color', 'green');
		}else if (reponse == 'Un touchdown'){
			$(this).css('background-color', 'green');
		}else if (reponse == '5') {
			$(this).css('background-color', 'green');
		}else if (reponse == 'Ecosse') {
			$(this).css('background-color', 'green');
		}else if (reponse == '3') {
			$(this).css('background-color', 'green');
		}else if (reponse == '7,32m') {
			$(this).css('background-color', 'green');
		}else{
			$(this).css('background-color', 'red');
		}

	});

		$('#btnQues').append('<button id="moins" class="start btn btn-outline-dark btn" value="'+(quest-1)+'" >Question précédente</button>');
		$('#btnQues').append('<button id="plus" class="start btn btn-outline-dark btn" value="'+(quest+1)+'"  >Question suivante</button>');

});



