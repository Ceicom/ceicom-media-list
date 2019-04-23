(function () {
    "use strict";

    class CeicomMediaList {
        constructor(mediaList, isVideo = false) {
            this._mediaList = mediaList;
            this.isVideo = isVideo;
            this._wrapper = $('.cml-music-list');

            this.init();
        }

        init() {
            if (!this._mediaList.length) return;

            const html = this._mediaList.map((item, index) => {
                if (item.typemedia === 'comercial' || item.typemedia === 'vinheta') return;

                return `<li class="music-item ${index === 0 ? 'active' : ''}" 
                            data-music="${index}">${this.isVideo ? item.title : item.track}</li>`;
            }).join('');

            $(document).on('cmp-media-end', (e, index, error) => {
                if (error) this._wrapper.find('.music-item.active').addClass('error');

                this._wrapper.find('.music-item').removeClass('active');
                this._wrapper.find(`.music-item[data-music=${index}]`).addClass('active');

                this._scrollToMusic();
            });

            this._wrapper.html(html);
        }

        _scrollToMusic() {
            const activeMusic = this._wrapper.find('.music-item.active');

            if (!activeMusic.length) return;

            const first = activeMusic.offset().top;
            const second = this._wrapper.offset().top;
            const distance = Number(first) - Number(second);

            this._wrapper.animate({ scrollTop: distance }, 'slow');
        }
    }

    /**********************************/

    // commonjs
    if (typeof exports !== "undefined")
        exports.CeicomMediaList = CeicomMediaList;
    else
        window.CeicomMediaList = CeicomMediaList;

}(typeof global !== "undefined" ? global : this));