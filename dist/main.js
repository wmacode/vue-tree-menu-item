import 'vue-awesome/icons/flag';
import 'vue-awesome/icons';
import Icon from 'vue-awesome/components/Icon';

//

    var script = {
		name: 'sub-item',
		components: { 'v-icon': Icon },
        data() {
            return {

            }
        },
        props: {
            items: {
                type: Array
            },
            px: {
                type: String
            },
            opened:{
                type: Boolean
            },
            dark:{
                type: Boolean
            }
        },
        methods: {
            getAppend(children) {
                if(children.length){
                    return 'keyboard_arrow_right'
                } else {
                    return ''
                }
            },
            setItemStatus(item){
                item.opened = !item.opened;
            }
        },
        computed: {
            getPx() {
                let a = parseInt(this.px) + 30;
                return a.toString()
            },
        },
    };

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier
/* server only */
, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  if (typeof shadowMode !== 'boolean') {
    createInjectorSSR = createInjector;
    createInjector = shadowMode;
    shadowMode = false;
  } // Vue.extend constructor export interop.


  var options = typeof script === 'function' ? script.options : script; // render functions

  if (template && template.render) {
    options.render = template.render;
    options.staticRenderFns = template.staticRenderFns;
    options._compiled = true; // functional template

    if (isFunctionalTemplate) {
      options.functional = true;
    }
  } // scopedId


  if (scopeId) {
    options._scopeId = scopeId;
  }

  var hook;

  if (moduleIdentifier) {
    // server build
    hook = function hook(context) {
      // 2.3 injection
      context = context || // cached call
      this.$vnode && this.$vnode.ssrContext || // stateful
      this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext; // functional
      // 2.2 with runInNewContext: true

      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__;
      } // inject component styles


      if (style) {
        style.call(this, createInjectorSSR(context));
      } // register component module identifier for async chunk inference


      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier);
      }
    }; // used by ssr in case component is cached and beforeCreate
    // never gets called


    options._ssrRegister = hook;
  } else if (style) {
    hook = shadowMode ? function () {
      style.call(this, createInjectorShadow(this.$root.$options.shadowRoot));
    } : function (context) {
      style.call(this, createInjector(context));
    };
  }

  if (hook) {
    if (options.functional) {
      // register for functional component in vue file
      var originalRender = options.render;

      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context);
        return originalRender(h, context);
      };
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate;
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
    }
  }

  return script;
}

var normalizeComponent_1 = normalizeComponent;

var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
function createInjector(context) {
  return function (id, style) {
    return addStyle(id, style);
  };
}
var HEAD = document.head || document.getElementsByTagName('head')[0];
var styles = {};

function addStyle(id, css) {
  var group = isOldIE ? css.media || 'default' : id;
  var style = styles[group] || (styles[group] = {
    ids: new Set(),
    styles: []
  });

  if (!style.ids.has(id)) {
    style.ids.add(id);
    var code = css.source;

    if (css.map) {
      // https://developer.chrome.com/devtools/docs/javascript-debugging
      // this makes source maps inside style tags work properly in Chrome
      code += '\n/*# sourceURL=' + css.map.sources[0] + ' */'; // http://stackoverflow.com/a/26603875

      code += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) + ' */';
    }

    if (!style.element) {
      style.element = document.createElement('style');
      style.element.type = 'text/css';
      if (css.media) style.element.setAttribute('media', css.media);
      HEAD.appendChild(style.element);
    }

    if ('styleSheet' in style.element) {
      style.styles.push(code);
      style.element.styleSheet.cssText = style.styles.filter(Boolean).join('\n');
    } else {
      var index = style.ids.size - 1;
      var textNode = document.createTextNode(code);
      var nodes = style.element.childNodes;
      if (nodes[index]) style.element.removeChild(nodes[index]);
      if (nodes.length) style.element.insertBefore(textNode, nodes[index]);else style.element.appendChild(textNode);
    }
  }
}

var browser = createInjector;

/* script */
const __vue_script__ = script;

/* template */
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    { staticClass: "tree-sub-menu" },
    _vm._l(_vm.items, function(item) {
      return _c(
        "div",
        { key: item.name, staticClass: "tree-item-group" },
        [
          _c("transition", { attrs: { name: "fade" } }, [
            _c(
              "div",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.opened,
                    expression: "opened"
                  }
                ]
              },
              [
                _c(
                  "div",
                  {
                    class: {
                      "tree-item": !_vm.dark,
                      "tree-item-dark": _vm.dark
                    },
                    on: {
                      click: function($event) {
                        return _vm.setItemStatus(item)
                      }
                    }
                  },
                  [
                    _c(
                      "div",
                      {
                        staticClass: "sub-menu-item",
                        style: { "margin-left": _vm.px + "px" }
                      },
                      [
                        _c(
                          "div",
                          { staticClass: "prepend" },
                          [
                            _c("v-icon", {
                              attrs: {
                                name: item.prepend ? item.prepend : null
                              }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "label" }, [
                          _vm._v(_vm._s(item.label))
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "append" },
                          [
                            _c("v-icon", {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: item.children.length && !item.opened,
                                  expression:
                                    "item.children.length && !item.opened"
                                }
                              ],
                              attrs: { name: "angle-right" }
                            }),
                            _vm._v(" "),
                            _c("v-icon", {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: item.children.length && item.opened,
                                  expression:
                                    "item.children.length && item.opened"
                                }
                              ],
                              attrs: { name: "angle-down" }
                            }),
                            _vm._v(" "),
                            _c("v-icon", {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: !item.children.length,
                                  expression: "!item.children.length"
                                }
                              ],
                              attrs: { name: item.append ? item.append : null }
                            })
                          ],
                          1
                        )
                      ]
                    )
                  ]
                ),
                _vm._v(" "),
                item.children.length
                  ? _c("sub-item", {
                      attrs: {
                        dark: _vm.dark,
                        px: _vm.getPx,
                        opened: item.opened,
                        items: item.children
                      }
                    })
                  : _vm._e()
              ],
              1
            )
          ])
        ],
        1
      )
    }),
    0
  )
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

  /* style */
  const __vue_inject_styles__ = function (inject) {
    if (!inject) return
    inject("data-v-d6d20404_0", { source: "\n.tree-sub-menu[data-v-d6d20404]{\n    display: flex;\n    flex-direction: column;\n}\n.sub-menu-item[data-v-d6d20404]{\n    display: flex;\n    flex-direction: row;\n    height: 40px;\n    align-items: center;\n}\n.tree-item[data-v-d6d20404]:hover{\n    background: rgba(245, 245, 245, 0.8);\n    cursor: pointer;\n}\n.tree-item-dark[data-v-d6d20404]:hover{\n    background: rgba(255, 255, 255, 0.2);\n    cursor: pointer;\n}\n.sub-menu-item .prepend[data-v-d6d20404] {\n    width: 5%;\n    margin-left: 10px\n}\n.sub-menu-item .label[data-v-d6d20404]{\n    width: 80%;\n    margin-left: 25px;\n    flex-grow: 1;\n}\n.sub-menu-item .append[data-v-d6d20404] {\n    width: 10%;\n    margin-right: 10px\n}\n.fade-enter[data-v-d6d20404] {\n    opacity: 0.5;\n    transition: .5s;\n    transform: translateX(-30px);\n}\n.fade-enter-active[data-v-d6d20404] {\n    opacity: 0.9;\n    transition: .5s;\n}\n.fade-leave[data-v-d6d20404]{\n    opacity: 0;\n    transition: .2s;\n}\n.fade-leave-active[data-v-d6d20404]{\n    opacity: 0;\n    transition: .2s;\n    transform: translateX(-25px);\n}\n", map: {"version":3,"sources":["/home/wma/www/vue-js/componentes/vue-tree-menu-item/src/TreeSubMenuItem.vue"],"names":[],"mappings":";AA8EA;IACA,aAAA;IACA,sBAAA;AACA;AACA;IACA,aAAA;IACA,mBAAA;IACA,YAAA;IACA,mBAAA;AACA;AACA;IACA,oCAAA;IACA,eAAA;AACA;AACA;IACA,oCAAA;IACA,eAAA;AACA;AACA;IACA,SAAA;IACA;AACA;AACA;IACA,UAAA;IACA,iBAAA;IACA,YAAA;AACA;AACA;IACA,UAAA;IACA;AACA;AAEA;IACA,YAAA;IACA,eAAA;IACA,4BAAA;AACA;AAEA;IACA,YAAA;IACA,eAAA;AACA;AAEA;IACA,UAAA;IACA,eAAA;AACA;AAEA;IACA,UAAA;IACA,eAAA;IACA,4BAAA;AACA","file":"TreeSubMenuItem.vue","sourcesContent":["<template>\n    <div class=\"tree-sub-menu\">\n        <div class=\"tree-item-group\" v-for=\"item in items\" :key=\"item.name\">\n            <transition name=\"fade\">\n                <div v-show=\"opened\">\n                    <div :class=\"{'tree-item': !dark, 'tree-item-dark': dark}\" @click=\"setItemStatus(item)\">\n                        <div class=\"sub-menu-item\" :style=\"{'margin-left': px + 'px'}\">\n                            <div class=\"prepend\"><v-icon :name=\"(item.prepend) ? item.prepend : null\"/></div>\n                            <div class=\"label\" >{{ item.label }}</div>\n                            <div class=\"append\">\n                                <v-icon v-show=\"item.children.length && !item.opened\" name=\"angle-right\" />\n                                <v-icon v-show=\"item.children.length && item.opened\" name=\"angle-down\" />\n                                <v-icon v-show=\"!item.children.length\" :name=\"(item.append) ? item.append : null\" />\n                            </div>\n                        </div>\n                    </div>\n                    <sub-item\n                        :dark=\"dark\"\n                        :px=\"getPx\"\n                        :opened=\"item.opened\"\n                        v-if=\"item.children.length\"\n                        :items=\"item.children\">\n                    </sub-item>\n                </div>\n            </transition>\n        </div>\n    </div>\n</template>\n\n<script>\n\timport 'vue-awesome/icons/flag'\n\timport 'vue-awesome/icons'\n\timport Icon from 'vue-awesome/components/Icon'\n\n    export default {\n\t\tname: 'sub-item',\n\t\tcomponents: { 'v-icon': Icon },\n        data() {\n            return {\n\n            }\n        },\n        props: {\n            items: {\n                type: Array\n            },\n            px: {\n                type: String\n            },\n            opened:{\n                type: Boolean\n            },\n            dark:{\n                type: Boolean\n            }\n        },\n        methods: {\n            getAppend(children) {\n                if(children.length){\n                    return 'keyboard_arrow_right'\n                } else {\n                    return ''\n                }\n            },\n            setItemStatus(item){\n                item.opened = !item.opened\n            }\n        },\n        computed: {\n            getPx() {\n                let a = parseInt(this.px) + 30\n                return a.toString()\n            },\n        },\n    }\n</script>\n\n<style scoped>\n    .tree-sub-menu{\n        display: flex;\n        flex-direction: column;\n    }\n    .sub-menu-item{\n        display: flex;\n        flex-direction: row;\n        height: 40px;\n        align-items: center;\n    }\n    .tree-item:hover{\n        background: rgba(245, 245, 245, 0.8);\n        cursor: pointer;\n    }\n    .tree-item-dark:hover{\n        background: rgba(255, 255, 255, 0.2);\n        cursor: pointer;\n    }\n    .sub-menu-item .prepend {\n        width: 5%;\n        margin-left: 10px\n    }\n    .sub-menu-item .label{\n        width: 80%;\n        margin-left: 25px;\n        flex-grow: 1;\n    }\n    .sub-menu-item .append {\n        width: 10%;\n        margin-right: 10px\n    }\n\n    .fade-enter {\n        opacity: 0.5;\n        transition: .5s;\n        transform: translateX(-30px);\n    }\n\n    .fade-enter-active {\n        opacity: 0.9;\n        transition: .5s;\n    }\n\n    .fade-leave{\n        opacity: 0;\n        transition: .2s;\n    }\n\n    .fade-leave-active{\n        opacity: 0;\n        transition: .2s;\n        transform: translateX(-25px);\n    }\n</style>\n"]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__ = "data-v-d6d20404";
  /* module identifier */
  const __vue_module_identifier__ = undefined;
  /* functional template */
  const __vue_is_functional_template__ = false;
  /* style inject SSR */
  

  
  var TreeSubMenu = normalizeComponent_1(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    browser,
    undefined
  );

//

    var script$1 = {
        name: 'Tree-menu',
        components: { TreeSubMenu, 'v-icon': Icon },
        props: {
            items: {
                type: Array
            },
            dark: {
                type: Boolean
			},
			search: {
				type: Boolean
			}
        },
        data() {
            return {
                px: '30',
				filter: '',
				value: 'sitemap'
            }
        },
        methods: {
            getIcon(iconName) {
                return iconName
            },
            setItemStatus(item){
                item.opened = !item.opened;
            },
            mouseHover(){
                this.hover = !this.hover;
            }
		}
    };

/* script */
const __vue_script__$1 = script$1;

/* template */
var __vue_render__$1 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    { staticClass: "tree-menu", class: { dark: _vm.dark } },
    [
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: false,
              expression: "false"
            }
          ],
          staticClass: "search"
        },
        [_c("input", { attrs: { type: "text" } })]
      ),
      _vm._v(" "),
      _vm._l(_vm.items, function(item) {
        return _c(
          "div",
          { key: item.name, staticClass: "tree-item-group" },
          [
            _c(
              "div",
              {
                class: { "tree-item": !_vm.dark, "tree-item-dark": _vm.dark },
                on: {
                  mouseover: _vm.mouseHover,
                  click: function($event) {
                    return _vm.setItemStatus(item)
                  }
                }
              },
              [
                _c("div", { staticClass: "menu-item" }, [
                  _c(
                    "div",
                    { staticClass: "prepend" },
                    [
                      _c("v-icon", {
                        attrs: { name: item.prepend ? item.prepend : null }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "label" }, [
                    _vm._v(_vm._s(item.label))
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "append" },
                    [
                      _c("v-icon", {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: item.children.length && !item.opened,
                            expression: "item.children.length && !item.opened"
                          }
                        ],
                        attrs: { name: "angle-right" }
                      }),
                      _vm._v(" "),
                      _c("v-icon", {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: item.children.length && item.opened,
                            expression: "item.children.length && item.opened"
                          }
                        ],
                        attrs: { name: "angle-down" }
                      }),
                      _vm._v(" "),
                      _c("v-icon", {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: !item.children.length,
                            expression: "!item.children.length"
                          }
                        ],
                        attrs: { name: item.append ? item.append : null }
                      })
                    ],
                    1
                  )
                ])
              ]
            ),
            _vm._v(" "),
            item.children.length
              ? _c("tree-sub-menu", {
                  attrs: {
                    dark: _vm.dark,
                    px: _vm.px,
                    opened: item.opened,
                    items: item.children
                  }
                })
              : _vm._e()
          ],
          1
        )
      })
    ],
    2
  )
};
var __vue_staticRenderFns__$1 = [];
__vue_render__$1._withStripped = true;

  /* style */
  const __vue_inject_styles__$1 = function (inject) {
    if (!inject) return
    inject("data-v-1f121dae_0", { source: "\n.tree-menu[data-v-1f121dae]{\n        display: flex;\n        flex-direction: column;\n        width: 100%;\n        height: 100%;\n\t\tfont-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif\n}\n.dark[data-v-1f121dae]{\n        color: #fff;\n}\n.menu-item[data-v-1f121dae]{\n        display: flex;\n        flex-direction: row;\n        height: 40px;\n        /* border-bottom: 1px solid #333; */\n        align-items: center;\n}\n.tree-item[data-v-1f121dae]:hover{\n        background: rgba(245, 245, 245, 0.8);\n        cursor: pointer;\n}\n.tree-item-dark[data-v-1f121dae]:hover{\n        background: rgba(255, 255, 255, 0.2);\n        cursor: pointer;\n}\n.menu-item .prepend[data-v-1f121dae] {\n        width: 5%;\n        margin-left: 10px;\n}\n.menu-item .label[data-v-1f121dae]{\n        width: 80%;\n        margin-left: 25px;\n        flex-grow: 1;\n}\n.menu-item .append[data-v-1f121dae] {\n        width: 10%;\n        margin-right: 10px\n}\n", map: {"version":3,"sources":["/home/wma/www/vue-js/componentes/vue-tree-menu-item/src/TreeMenuItem.vue"],"names":[],"mappings":";AAsEA;QACA,aAAA;QACA,sBAAA;QACA,WAAA;QACA,YAAA;EACA;AACA;AACA;QACA,WAAA;AACA;AACA;QACA,aAAA;QACA,mBAAA;QACA,YAAA;QACA,mCAAA;QACA,mBAAA;AACA;AAEA;QACA,oCAAA;QACA,eAAA;AACA;AAEA;QACA,oCAAA;QACA,eAAA;AACA;AACA;QACA,SAAA;QACA,iBAAA;AACA;AACA;QACA,UAAA;QACA,iBAAA;QACA,YAAA;AACA;AACA;QACA,UAAA;QACA;AACA","file":"TreeMenuItem.vue","sourcesContent":["<template>\n    <div class=\"tree-menu\" :class=\"{dark: dark}\">\n        <div v-show=\"false\" class=\"search\">\n\t\t\t<input type=\"text\">\n        </div>\n        <div class=\"tree-item-group\" v-for=\"item in items\" :key=\"item.name\">\n            <div :class=\"{'tree-item': !dark, 'tree-item-dark': dark}\" @mouseover=\"mouseHover\" @click=\"setItemStatus(item)\">\n                <div class=\"menu-item\">\n                    <div class=\"prepend\"><v-icon :name=\"(item.prepend) ? item.prepend : null\"/></div>\n                    <div class=\"label\">{{ item.label }}</div>\n                    <div class=\"append\">\n                        <v-icon v-show=\"item.children.length && !item.opened\" name=\"angle-right\"/>\n                        <v-icon v-show=\"item.children.length && item.opened\" name=\"angle-down\"/>\n                        <v-icon v-show=\"!item.children.length\" :name=\"(item.append) ? item.append : null\"/>\n                    </div>\n                </div>\n            </div>\n            <tree-sub-menu\n                :dark=\"dark\"\n                :px=\"px\"\n                :opened=\"item.opened\"\n                :items=\"item.children\"\n                v-if=\"item.children.length\">\n            </tree-sub-menu>\n        </div>\n    </div>\n</template>\n\n<script>\n\timport TreeSubMenu from './TreeSubMenuItem.vue'\n\timport 'vue-awesome/icons/flag'\n\timport 'vue-awesome/icons'\n\timport Icon from 'vue-awesome/components/Icon'\n\n    export default {\n        name: 'Tree-menu',\n        components: { TreeSubMenu, 'v-icon': Icon },\n        props: {\n            items: {\n                type: Array\n            },\n            dark: {\n                type: Boolean\n\t\t\t},\n\t\t\tsearch: {\n\t\t\t\ttype: Boolean\n\t\t\t}\n        },\n        data() {\n            return {\n                px: '30',\n\t\t\t\tfilter: '',\n\t\t\t\tvalue: 'sitemap'\n            }\n        },\n        methods: {\n            getIcon(iconName) {\n                return iconName\n            },\n            setItemStatus(item){\n                item.opened = !item.opened\n            },\n            mouseHover(){\n                this.hover = !this.hover\n            }\n\t\t}\n    }\n</script>\n\n<style scoped>\n    .tree-menu{\n        display: flex;\n        flex-direction: column;\n        width: 100%;\n        height: 100%;\n\t\tfont-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif\n    }\n    .dark{\n        color: #fff;\n    }\n    .menu-item{\n        display: flex;\n        flex-direction: row;\n        height: 40px;\n        /* border-bottom: 1px solid #333; */\n        align-items: center;\n    }\n\n    .tree-item:hover{\n        background: rgba(245, 245, 245, 0.8);\n        cursor: pointer;\n    }\n\n    .tree-item-dark:hover{\n        background: rgba(255, 255, 255, 0.2);\n        cursor: pointer;\n    }\n    .menu-item .prepend {\n        width: 5%;\n        margin-left: 10px;\n    }\n    .menu-item .label{\n        width: 80%;\n        margin-left: 25px;\n        flex-grow: 1;\n    }\n    .menu-item .append {\n        width: 10%;\n        margin-right: 10px\n    }\n</style>\n"]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$1 = "data-v-1f121dae";
  /* module identifier */
  const __vue_module_identifier__$1 = undefined;
  /* functional template */
  const __vue_is_functional_template__$1 = false;
  /* style inject SSR */
  

  
  var TreeMenuItem = normalizeComponent_1(
    { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 },
    __vue_inject_styles__$1,
    __vue_script__$1,
    __vue_scope_id__$1,
    __vue_is_functional_template__$1,
    __vue_module_identifier__$1,
    browser,
    undefined
  );

export default TreeMenuItem;
