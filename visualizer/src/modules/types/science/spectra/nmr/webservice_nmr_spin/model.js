"use strict";define(["modules/default/defaultmodel","src/util/datatraversing"],function(a,b){"use strict";function c(){}return $.extend(!0,c.prototype,a,{getjPath:function(){var a=[];return b.getJPathsFromElement(this.module.model.data||{},a),a}}),c});