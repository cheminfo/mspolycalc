"use strict";define(["modules/default/defaultmodel","src/util/datatraversing"],function(a,b){"use strict";function c(){}return $.extend(!0,c.prototype,a,{getjPath:function(a){return"nodeData"===a&&this._objectModel?b.getJPathsFromElement(this.module.model._objectModel):[]}}),c});
