var $newCard        = document.querySelector('.newCard');
var $newCardContent = document.querySelector('.newCard-content');
var $newCardBtn     = document.querySelector('.newCard-btn');

$newCardContent.addEventListener('input', function() {
	var $error = document.querySelector('.error');
	if ($error != null) {
		$error.remove();
	}
});

// função para tratar o form submit
var formSubmit = function(e) {
	e.preventDefault();

	if ($newCardContent.value == '') {

		// verifica se o elemento span.error ainda não foi criado, e o cria
		if (!document.querySelector('.error')) {
			var $error = document.createElement('span');
				$error.classList.add('error');
				$error.textContent = "Por favor insira algum texto para sua nota";
				$newCard.insertBefore($error, $newCardBtn);
		}
	} else {
		// wrap que agrupa todos os cards
		var $wrapCard = document.querySelector('.wrap-card');
		// seleciona um card para ser clonado
		var $card     = document.querySelector('.card');
		// clona o card
		var $copyCard = $card.cloneNode(true);
		// adiciona o conteudo digitado ao novo card
		$copyCard.querySelector('.card-content').textContent = $newCardContent.value;
		// inseire o card no wrap
		$wrapCard.insertBefore($copyCard, $card);
	}
}

// add funcao ao evento de submit do formulario
$newCard.addEventListener('submit', formSubmit);