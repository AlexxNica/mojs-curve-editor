webpackHotUpdatemojs_curve_editor(0,{42:function(t,e,o){(function(t){o(82),o(47),o(48),o(52),o(78),t.tag2("curve-editor",'<icons></icons> <div class="{this.CLASSES[\'curve-editor__left\']}"> <icon-button shape="code"></icon-button> <a href="https://github.com/legomushroom/mojs-curve-editor" target="_blank" class="{this.CLASSES[\'curve-editor__mojs-logo\']}"> <icon shape="mojs-logo"></icon> </a> </div> <div class="{this.CLASSES[\'curve-editor__right\']}"> <curve></curve> <resize-handle type="top"></resize-handle> <resize-handle type="right"></resize-handle> <resize-handle type="bottom"></resize-handle> </div>',"",'class="{this.CLASSES[\'curve-editor\']}" riot-style="{this.getStyle()}"',function(t){"use strict";function e(t){return t&&t.__esModule?t:{"default":t}}var i=this,s=o(77),r=e(s),a=o(87),n=e(a),c=o(92),d=e(c);o(43),this.CLASSES=o(56);var u=t,l=u.store;l.subscribe(this.update.bind(this)),this.on("mount",function(){(0,n["default"])(new r["default"](i.root)).on("pan",function(t){i.x=t.deltaX,i.y=t.deltaY,i.update()}).on("panend",function(t){var e=t.deltaX,o=t.deltaY,s=l.getState().present.translate;i.x=i.y=0,l.dispatch({type:"EDITOR_TRANSLATE",data:{x:s.x+e,y:s.y+o}})})}),this.getStyle=function(){var t=l.getState().present,e=t.tempResize_top,o=t.tempResize_bottom;e+=t.resize_top,o+=t.resize_bottom,378-e<378&&(e=0),e=(0,d["default"])(e);var s=t.translate,r="height: "+(378-e)+"px",a=(i.x||0)+s.x,n=(i.y||0)+s.y,c="transform: translate("+a+"px, "+(n+e)+"px)";return""+mojs.h.prefix.css+c+"; "+c+"; "+r}})}).call(e,o(2))}});