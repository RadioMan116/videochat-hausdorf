(() => {
	let widget = document.querySelector('.widget');
	if (widget) {
		if (window.innerWidth >= 1200) {
			const html = document.querySelector('html');

			class Resizer {
				constructor(elemId) {
					this._elem = document.querySelector('.widget');
					/**
					 * Stored binded context handlers for method passed to eventListeners!
					 *
					 * See: https://stackoverflow.com/questions/9720927/removing-event-listeners-as-class-prototype-functions
					 */
					this._checkBorderHandler = this._checkBorder.bind(this);
					this._doResizeHandler = this._doResize.bind(this);
					this._initResizerHandler = this.initResizer.bind(this);
					this._onResizeHandler = this._onResize.bind(this);
				}

				initResizer() {
					this.stopResizer();
					this._beginResizer();
				}

				_beginResizer() {
					this._elem.addEventListener('mousemove', this._checkBorderHandler, false);
				}

				stopResizer() {
					html.style.cursor = 'default';
					this._elem.style.cursor = 'default';

					window.removeEventListener('mousemove', this._doResizeHandler, false);
					window.removeEventListener('mouseup', this._initResizerHandler, false);
					this._elem.removeEventListener('mousedown', this._onResizeHandler, false);
					this._elem.removeEventListener('mousemove', this._checkBorderHandler, false);
				}

				_doResize(e) {
					let elem = this._elem;

					let boxSizing = getComputedStyle(elem).boxSizing;
					let borderRight = 0;
					let borderLeft = 0;
					let borderTop = 0;
					let borderBottom = 0;

					let paddingRight = 0;
					let paddingLeft = 0;
					let paddingTop = 0;
					let paddingBottom = 0;

					switch (boxSizing) {
						case 'content-box':
							paddingRight = parseInt(getComputedStyle(elem).paddingRight);
							paddingLeft = parseInt(getComputedStyle(elem).paddingLeft);
							paddingTop = parseInt(getComputedStyle(elem).paddingTop);
							paddingBottom = parseInt(getComputedStyle(elem).paddingBottom);
							break
						case 'border-box':
							borderRight = parseInt(getComputedStyle(elem).borderRight);
							borderLeft = parseInt(getComputedStyle(elem).borderLeft);
							borderTop = parseInt(getComputedStyle(elem).borderTop);
							borderBottom = parseInt(getComputedStyle(elem).borderBottom);
							break
						default:
							break
					}

					let horizontalAdjustment = (paddingRight + paddingLeft) - (borderRight + borderLeft);
					let verticalAdjustment = (paddingTop + paddingBottom) - (borderTop + borderBottom);

					let newWidth = elem.clientWidth + e.movementX - horizontalAdjustment + 'px';
					let newHeight = elem.clientHeight + e.movementY - verticalAdjustment + 'px';

					let cursorType = getComputedStyle(elem).cursor;
					switch (cursorType) {
						case 'all-scroll':
							elem.style.width = newWidth;
							elem.style.height = newHeight;
							break;
						case 'col-resize':
							elem.style.width = newWidth;
							break;
						case 'row-resize':
							elem.style.height = newHeight;
							break;
						default:
							break;
					}
				}

				_onResize(e) {
					// On resizing state!
					let elem = e.target;
					let newCursorType = undefined;
					let cursorType = getComputedStyle(elem).cursor;
					switch (cursorType) {
						case 'nwse-resize':
							newCursorType = 'all-scroll';
							break;
						case 'ew-resize':
							newCursorType = 'col-resize';
							break;
						case 'ns-resize':
							newCursorType = 'row-resize';
							break;
						default:
							break;
					}

					html.style.cursor = newCursorType; // Avoid cursor's flickering
					elem.style.cursor = newCursorType;

					// Remove what is not necessary, and could have side effects!
					elem.removeEventListener('mousemove', this._checkBorderHandler, false);

					// Events on resizing state
					/**
					 * We do not apply the mousemove event on the elem to resize it, but to the window to prevent the mousemove from slippe out of the elem to resize. This work bc we calculate things based on the mouse position
					 */
					window.addEventListener('mousemove', this._doResizeHandler, false);
					window.addEventListener('mouseup', this._initResizerHandler, false);
				}

				_checkBorder(e) {
					const elem = e.target;
					const borderSensitivity = 5;
					const coor = getCoordenatesCursor(e);
					const onRightBorder = ((coor.x + borderSensitivity) > elem.scrollWidth);
					const onBottomBorder = ((coor.y + borderSensitivity) > elem.scrollHeight);
					const onBottomRightCorner = (onRightBorder && onBottomBorder);

					if (onBottomRightCorner) {
						elem.style.cursor = 'nwse-resize';
					} else if (onRightBorder) {
						elem.style.cursor = 'ew-resize';
					}
					//   else if (onBottomBorder) {
					//     elem.style.cursor = 'ns-resize';
					//   }
					// else {
					//   elem.style.cursor = 'auto'
					// }

					if (onRightBorder || onBottomBorder) {
						elem.addEventListener('mousedown', this._onResizeHandler, false);
					} else {
						elem.removeEventListener('mousedown', this._onResizeHandler, false);
					}
				}
			}

			function getCoordenatesCursor(e) {
				let elem = e.target;

				// Get the Viewport-relative coordinates of cursor.
				let viewportX = e.clientX;
				let viewportY = e.clientY;

				// Viewport-relative position of the target element.
				let elemRectangle = elem.getBoundingClientRect();

				// The  function returns the largest integer less than or equal to a given number.
				let x = Math.floor(viewportX - elemRectangle.left); // - elem.scrollWidth
				let y = Math.floor(viewportY - elemRectangle.top); // - elem.scrollHeight

				return {
					x,
					y
				}
			}

			let resizerForCenter = new Resizer('center');
			resizerForCenter.initResizer();

			let resizerForLeft = new Resizer('left');
			resizerForLeft.initResizer();

			setTimeout(handler, 10000, true); // 10s

			function handler() {
				resizerForCenter.stopResizer();
			}
		}

	}
})();

function wgModalDrag() {
	if (window.innerWidth >= 1200) {
		var dialog = document.getElementById('ModalDialog');
		var dialogHead = document.getElementById('ModalHead');
		if (dialogHead) {
			dialogHead.style.cursor = 'grab';

			dialogHead.onmousedown = function (e) {
				var coords = getCoords(dialog);
				var shiftX = e.pageX - coords.left;
				var shiftY = e.pageY - coords.top;

				dialog.style.position = 'absolute';
				dialogHead.style.cursor = 'grabbing';
				moveAt(e);

				dialog.style.zIndex = 1000; // над другими элементами

				function moveAt(e) {
					dialog.style.left = e.pageX - shiftX + 'px';
					dialog.style.top = e.pageY - shiftY + 'px';
				}

				document.onmousemove = function (e) {
					moveAt(e);
				};

				dialogHead.onmouseup = function () {
					dialogHead.style.cursor = 'grab';
					document.onmousemove = null;
					dialogHead.onmouseup = null;
				};
			}

			dialogHead.ondragstart = function () {
				return false;
			};

			function getCoords(elem) {
				// кроме IE8-
				var box = elem.getBoundingClientRect();
				return {
					top: box.top + pageYOffset,
					left: box.left + pageXOffset
				};
			};
		}
	};
}
window.addEventListener('load', wgModalDrag);
// const position = {
//   x: 0,
//   y: 0
// };

(() => {
	const modal = document.querySelector('.videochat__modal.widget');
	if (modal) {
		const fullscreen = document.querySelector('.js-fullscreen');
		const change = document.querySelector('.js-change');
		const normal = document.querySelector('.js-normal');
		const micro = document.querySelector('.js-micro');
		const toggle = document.querySelector('.js-toggle');
		micro.addEventListener('click', () => {
			micro.classList.toggle('not');
		});
		toggle.addEventListener('click', () => {
			toggle.classList.toggle('not');
		});
		fullscreen.addEventListener('click', () => {
			modal.classList.toggle('fullscreen');
			modal.style.cssText = '';
		});
		change.addEventListener('click', () => {
			modal.classList.remove('fullscreen');
			modal.classList.add('mini');
			modal.style.cssText = '';
		});
		normal.addEventListener('click', () => {
			modal.classList.remove('mini');
			modal.style.cssText = '';
		});
	}
})();
