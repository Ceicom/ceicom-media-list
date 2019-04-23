"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(function () {
  "use strict";

  var CeicomMediaList =
  /*#__PURE__*/
  function () {
    function CeicomMediaList(mediaList) {
      var isVideo = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      _classCallCheck(this, CeicomMediaList);

      this._mediaList = mediaList;
      this.isVideo = isVideo;
      this._wrapper = $('.cml-music-list');
      this.init();
    }

    _createClass(CeicomMediaList, [{
      key: "init",
      value: function init() {
        var _this = this;

        if (!this._mediaList.length) return;

        var html = this._mediaList.map(function (item, index) {
          if (item.typemedia === 'comercial' || item.typemedia === 'vinheta') return;
          return "<li class=\"music-item ".concat(index === 0 ? 'active' : '', "\" \n                            data-music=\"").concat(index, "\">").concat(_this.isVideo ? item.title : item.track, "</li>");
        }).join('');

        $(document).on('cmp-media-end', function (e, index, error) {
          if (error) _this._wrapper.find('.music-item.active').addClass('error');

          _this._wrapper.find('.music-item').removeClass('active');

          _this._wrapper.find(".music-item[data-music=".concat(index, "]")).addClass('active');

          _this._scrollToMusic();
        });

        this._wrapper.html(html);
      }
    }, {
      key: "_scrollToMusic",
      value: function _scrollToMusic() {
        var activeMusic = this._wrapper.find('.music-item.active');

        if (!activeMusic.length) return;
        var first = activeMusic.offset().top;

        var second = this._wrapper.offset().top;

        var distance = Number(first) - Number(second);

        this._wrapper.animate({
          scrollTop: distance
        }, 'slow');
      }
    }]);

    return CeicomMediaList;
  }();
  /**********************************/
  // commonjs


  if (typeof exports !== "undefined") {
    exports.CeicomMediaList = CeicomMediaList;
  } else {
    window.CeicomMediaList = CeicomMediaList;
  }
})(typeof global !== "undefined" ? global : void 0);
