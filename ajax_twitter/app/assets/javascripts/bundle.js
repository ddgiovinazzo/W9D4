/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./frontend/follow_toggle.js":
/*!***********************************!*\
  !*** ./frontend/follow_toggle.js ***!
  \***********************************/
/***/ ((module) => {

class FollowToggle{
    constructor(el){
        this.$el = $(el)
        this.userId = this.$el.data('user-id')
        this.followState = this.$el.data('initial-follow-state')
        this.render()
    }

    render(){
        if (this.followState === "unfollowed") {
            this.$el.text("Follow!")
        } else if(this.followState === "followed") {
            this.$el.text("Unfollow!")
        }
    }

    handleClick(){
        this.$el.on('submit', e => {e.preventDefault();})

       const ajaxObject = $.ajax({
            method: this.followState === "unfollowed" ? "POST" : "DELETE",
            url: '/users/:id/follow',
            dataType: 'json'
        })

        if (this.followState === "unfollowed") {
            this.$el.text("Follow!")
        } else if(this.followState === "followed") {
            this.$el.text("Unfollow!")
        }

    }
}

module.exports = FollowToggle;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
(() => {
/*!*****************************!*\
  !*** ./frontend/twitter.js ***!
  \*****************************/
const FollowToggle = __webpack_require__(/*! ./follow_toggle */ "./frontend/follow_toggle.js");

$(function(){
    $('button.follow-toggle').each((i, btn)=>{new FollowToggle(btn)})
})

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map