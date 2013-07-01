/**
 * Module adding additional functionalities to the base Input class of Impact.
 *
 * @author
 * sasklacz : kuba@virtualdesign.pl
 * github.com/siemiatj
 * 
 **/
ig.module(
    //you need to rename the module name to fit your naming pattern
    'input'
)
.requires(
    'impact.input'
).
defines(function() {

    ig.Input.inject({
        /**
         * Function additionally checks if any key is currently pressed
         **/
        state: function( action ) {
            if (!action){
                return this.anyKeyPressed();
            }
            return this.parent(action);
        },

        /**
         * Helper function checking if object holding pressed keys is empty
         **/
        anyKeyPressed: function() {
            var obj = this.locks,
                hasOwnProperty = Object.prototype.hasOwnProperty;

            for (var key in obj) {
                if (obj[key]) return true;
            }

            return false;
        }
    });
});