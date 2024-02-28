(function ($) {
	$(document).ready(function () {
		if ($('.owl-carousel').length)
			$('.owl-carousel').each((i, obj) => {
				$(obj).owlCarousel({
					loop: true,
					center: true,
					margin: 150,
					autoWidth: true,
				});
			});

		$('.burger').click(e => {
			$('.burger').toggleClass('active');
			$('.mobile_menu').toggleClass('active');
		});
	});
})(jQuery);

/* ************************************************************** */
/* ************************ SELECT INPUT ************************ */
/* ************************************************************** */
/*
var x, i, j, l, selElement, a, b, c;

x = document.getElementsByClassName('select_controller');
l = x.length;
for (i = 0; i < l; i++) {
	selElement = x[i].getElementsByTagName('select')[0];
	a = document.createElement('DIV');
	x[i].listMultiSelect = [];
	selElement.multiple
		? a.setAttribute('class', 'select-selected multi preholder')
		: a.setAttribute('class', 'select-selected preholder');
	a.innerHTML = selElement.options[selElement.selectedIndex].innerHTML;
	x[i].appendChild(a);
	b = document.createElement('DIV');
	b.setAttribute('class', 'select-items select-hide');

	const createElement = children => {
		c = document.createElement('DIV');
		c.innerHTML = children.innerHTML;
		c.addEventListener('click', function (e) {
			var y, i, k, s, h, sl, yl, m;
			s = this.parentNode.parentNode.getElementsByTagName('select')[0];
			sl = s.length;
			h = this.parentNode.previousSibling;
			m = s.multiple;
			if (!m) {
				for (i = 0; i < sl; i++) {
					if (s.options[i].innerHTML == this.innerHTML) {
						s.selectedIndex = i;
						h.innerHTML = this.innerHTML;
						y = this.parentNode.getElementsByClassName('same-as-selected');
						yl = y.length;
						for (k = 0; k < yl; k++) {
							y[k].removeAttribute('class');
						}
						this.setAttribute('class', 'same-as-selected');
						this.parentNode.parentNode
							.getElementsByClassName('select-selected')[0]
							.setAttribute('class', 'select-selected');
						break;
					}
				}
			} else {
				if (!this.classList.contains('same-as-selected')) {
					let comp = document.createElement('span');
					comp.innerHTML = this.innerHTML;
					var pa = this.parentNode.parentNode;

					comp.addEventListener('click', e => {
						e.target.remove();
						this.setAttribute('class', '');
						pa.listMultiSelect.splice(pa.listMultiSelect.indexOf(this.innerHTML), 1);
						for (i = 0; i < sl; i++)
							s.options[i].selected = pa.listMultiSelect.includes(s.options[i].innerHTML)
								? true
								: false;
						if (pa.listMultiSelect.length < 1) {
							h.innerHTML = s.options[0].innerHTML;
							pa.getElementsByClassName('select-selected')[0].setAttribute(
								'class',
								'select-selected multi preholder'
							);
						}
					});

					if (h.innerHTML === s.options[0].innerHTML) h.innerHTML = '';
					h.appendChild(comp);
					this.setAttribute('class', 'same-as-selected');

					pa.listMultiSelect.push(this.innerHTML);
					for (i = 0; i < sl; i++)
						s.options[i].selected = pa.listMultiSelect.includes(s.options[i].innerHTML)
							? true
							: false;

					if (pa.listMultiSelect.length !== 0) {
						pa.getElementsByClassName('select-selected')[0].setAttribute(
							'class',
							'select-selected multi'
						);
					}
				}
			}

			h.click();
		});
		b.appendChild(c);
	};

	var sc, scl;
	sc = selElement.children;
	scl = sc.length;

	for (var v = 1; v < scl; v++) {
		if (sc[v].nodeName === 'OPTGROUP') {
			c = document.createElement('DIV');
			c.innerHTML = sc[v].label;
			c.setAttribute('class', 'opt_label');
			b.appendChild(c);

			for (var p in sc[v].children) {
				if (sc[v].children[p].nodeName === 'OPTION') createElement(sc[v].children[p]);
			}
		} else createElement(sc[v]);
	}

	x[i].appendChild(b);
	a.addEventListener('click', function (e) {
		if (e.target.nodeName !== 'SPAN') {
			e.stopPropagation();
			closeAllSelect(this);
			this.nextSibling.classList.toggle('select-hide');
			this.classList.toggle('select-arrow-active');
		}
	});
}
*/
/* A function that will close all select boxes in the document,
  except the current select box: */
/*
function closeAllSelect(element) {
	var x,
		y,
		i,
		xl,
		yl,
		arrNo = [];
	x = document.getElementsByClassName('select-items');
	y = document.getElementsByClassName('select-selected');
	xl = x.length;
	yl = y.length;
	for (i = 0; i < yl; i++) {
		if (element == y[i]) {
			arrNo.push(i);
		} else {
			y[i].classList.remove('select-arrow-active');
		}
	}
	for (i = 0; i < xl; i++) {
		if (arrNo.indexOf(i)) {
			x[i].classList.add('select-hide');
		}
	}
}

document.addEventListener('click', closeAllSelect);
*/
/**************************/
/* **** RESET BUTTON **** */
/**************************/
/*
let rb = document.getElementsByClassName('reset');
if (rb.length) {
	rb[0].addEventListener('click', e => {
		e.preventDefault();
		let x = document.getElementsByTagName('form')[0].getElementsByClassName('select_controller');
		let l = x.length;
		for (let i = 0; i < l; i++) {
			let pn = x[i].getElementsByClassName('select-selected')[0];
			let selElement = x[i].getElementsByTagName('select')[0];
			let itemsList = x[i]
				.getElementsByClassName('select-items')[0]
				.getElementsByClassName('same-as-selected');
			let yl = itemsList.length;
			for (let k = 0; k < yl; k++) {
				itemsList[k].removeAttribute('class');
			}

			pn.innerHTML = selElement.options[0].innerHTML;
			selElement.selectedIndex = 0;
			if (selElement.multiple) x[i].listMultiSelect = [];

			pn.className.includes('multi')
				? pn.setAttribute('class', 'select-selected multi preholder')
				: pn.setAttribute('class', 'select-selected preholder');
		}
	});
}
*/
/************************/
/* **** FILE INPUT **** */
/************************/
/*
let fu = document.getElementsByClassName('upload');
let ful = fu.length;
for (let i = 0; i < ful; i++) {
	let input = fu[i].getElementsByTagName('input')[0];
	input.addEventListener('input', e => {
		let thisInput = e.target;
		let label = thisInput.parentNode.getElementsByTagName('label')[0];
		if (thisInput.files.length)
			label.innerHTML = 'Pièce jointe <span>' + thisInput.files[0].name + '</span>';
		else label.innerHTML = 'Pièce jointe <span>Sélectionner votre pièce jointe</span>';
	});
}
*/
