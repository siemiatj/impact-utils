/**
 * Module adding optimized canvas clearing on mobile to the base System class of Impact.
 * reference : http://jsperf.com/ctx-clearrect-vs-canvas-width-canvas-width/2
 *
 * @author
 * sasklacz : kuba@virtualdesign.pl
 * github.com/siemiatj
 * 
 **/
ig.module(
        'clearscr'
    )
    .requires(
        'impact.system'
    )
    .defines(function () {
        if (ig.ua.mobile){
            ig.System.inject({
                clear: function(color) {
                    this.context.width = this.canvas.width;
                }
            });
        } else {
            ig.System.inject({
                clear: function(color) {
                    if (color) {
                        this.context.fillStyle = color;
                        this.context.fillRect(0, 0, ig.system.realWidth, ig.system.realHeight);
                    } else {
                        this.context.clearRect(0, 0, ig.system.realWidth, ig.system.realHeight);
                    }
                }
            });
        }
    }
);