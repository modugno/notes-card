// variaveis
var $wrapCards  = document.querySelector('.wrap-card');		
var $cardColors = document.querySelectorAll('.card-options');
var $btnDisplay = document.querySelector('.header-button_display');

$wrapCards.addEventListener('click', function(e) {

	var $this = e.target;
	var $card = $this.parentNode.parentNode.parentNode;
	var $cardContent = $card.querySelector('.card-content');

	if ($this.dataset.color) {
			// muda cor do card
			$card.dataset.color = $this.dataset.color;
			// remove a class active de todos elementos
			for (var j = 0; j < $cardColors.length; j++) {
				$cardColors[j].classList.remove('active');
			}
			// seta a class active ao elemento selecionado
			$this.classList.add('active');
	}

	// acao para remoção do card
	if ($this.classList.contains('card_delete')) {
		$card.remove();			
	}

	// acao para edição do card
	if ($this.classList.contains('card_edit')) {
		if ($cardContent.getAttribute('contenteditable') == 'false') {
			$cardContent.setAttribute('contenteditable', 'true');
			$cardContent.focus();
			$this.classList.add('active');
		} else {
			$cardContent.setAttribute('contenteditable', 'false');
			$cardContent.blur();
			$this.classList.remove('active');
		}
	}

});


// muda o display dos cards

$btnDisplay.addEventListener('click', function(e) {
	e.preventDefault();
	if ($btnDisplay.textContent == "Linhas") {
		$btnDisplay.textContent = "Blocos";
	} else {
		$btnDisplay.textContent = "Linhas";
	}
	
	var $cards = document.querySelectorAll('.card');
	for (var i = 0; i < $cards.length; i++) {
		$cards[i].classList.toggle('bloco');
	}
});