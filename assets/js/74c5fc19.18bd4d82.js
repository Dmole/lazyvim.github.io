"use strict";(self.webpackChunklazyvim=self.webpackChunklazyvim||[]).push([[8612],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),p=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=p(e.components);return a.createElement(i.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(t),m=r,f=c["".concat(i,".").concat(m)]||c[m]||d[m]||s;return t?a.createElement(f,l(l({ref:n},u),{},{components:t})):a.createElement(f,l({ref:n},u))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,l=new Array(s);l[0]=m;var o={};for(var i in n)hasOwnProperty.call(n,i)&&(o[i]=n[i]);o.originalType=e,o[c]="string"==typeof e?e:r,l[1]=o;for(var p=2;p<s;p++)l[p]=t[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5162:(e,n,t)=>{t.d(n,{Z:()=>l});var a=t(7294),r=t(6010);const s="tabItem_Ymn6";function l(e){let{children:n,hidden:t,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(s,l),hidden:t},n)}},4866:(e,n,t)=>{t.d(n,{Z:()=>w});var a=t(7462),r=t(7294),s=t(6010),l=t(2466),o=t(6550),i=t(1980),p=t(7392),u=t(12);function c(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}function d(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??c(t);return function(e){const n=(0,p.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:t}=e;const a=(0,o.k6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,i._X)(s),(0,r.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(a.location.search);n.set(s,e),a.replace({...a.location,search:n.toString()})}),[s,a])]}function g(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,s=d(e),[l,o]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:s}))),[i,p]=f({queryString:t,groupId:a}),[c,g]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,s]=(0,u.Nk)(t);return[a,(0,r.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:a}),v=(()=>{const e=i??c;return m({value:e,tabValues:s})?e:null})();(0,r.useLayoutEffect)((()=>{v&&o(v)}),[v]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),p(e),g(e)}),[p,g,s]),tabValues:s}}var v=t(2389);const b="tabList__CuJ",y="tabItem_LNqP";function h(e){let{className:n,block:t,selectedValue:o,selectValue:i,tabValues:p}=e;const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),d=e=>{const n=e.currentTarget,t=u.indexOf(n),a=p[t].value;a!==o&&(c(n),i(a))},m=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=u.indexOf(e.currentTarget)+1;n=u[t]??u[0];break}case"ArrowLeft":{const t=u.indexOf(e.currentTarget)-1;n=u[t]??u[u.length-1];break}}n?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":t},n)},p.map((e=>{let{value:n,label:t,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:o===n?0:-1,"aria-selected":o===n,key:n,ref:e=>u.push(e),onKeyDown:m,onClick:d},l,{className:(0,s.Z)("tabs__item",y,l?.className,{"tabs__item--active":o===n})}),t??n)})))}function k(e){let{lazy:n,children:t,selectedValue:a}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},s.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a}))))}function T(e){const n=g(e);return r.createElement("div",{className:(0,s.Z)("tabs-container",b)},r.createElement(h,(0,a.Z)({},e,n)),r.createElement(k,(0,a.Z)({},e,n)))}function w(e){const n=(0,v.Z)();return r.createElement(T,(0,a.Z)({key:String(n)},e))}},7007:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var a=t(7462),r=(t(7294),t(3905)),s=t(4866),l=t(5162);const o={},i="Typescript",p={unversionedId:"extras/lang/typescript",id:"extras/lang/typescript",title:"Typescript",description:"You can enable the extra with the :LazyExtras command.",source:"@site/docs/extras/lang/typescript.md",sourceDirName:"extras/lang",slug:"/extras/lang/typescript",permalink:"/extras/lang/typescript",draft:!1,editUrl:"https://github.com/LazyVim/lazyvim.github.io/tree/main/docs/extras/lang/typescript.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Toml",permalink:"/extras/lang/toml"},next:{title:"Vue",permalink:"/extras/lang/vue"}},u={},c=[{value:"nvim-vtsls",id:"nvim-vtsls",level:2},{value:"nvim-lspconfig",id:"nvim-lspconfig",level:2},{value:"nvim-lspconfig",id:"nvim-lspconfig-1",level:2},{value:"mason.nvim",id:"masonnvim",level:2},{value:"nvim-dap <em>(optional)</em>",id:"nvim-dap-optional",level:2}],d={toc:c};function m(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"typescript"},"Typescript"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"You can enable the extra with the ",(0,r.kt)("inlineCode",{parentName:"p"},":LazyExtras")," command.\nPlugins marked as optional will only be configured if they are installed.")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Alternatively, you can add it to your ",(0,r.kt)("code",null,"lazy.nvim")," imports"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="lua/config/lazy.lua" {4}',title:'"lua/config/lazy.lua"',"{4}":!0},'require("lazy").setup({\n  spec = {\n    { "LazyVim/LazyVim", import = "lazyvim.plugins" },\n    { import = "lazyvim.plugins.extras.lang.typescript" },\n    { import = "plugins" },\n  },\n})\n'))),(0,r.kt)("p",null,"Below you can find a list of included plugins and their default settings."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"You don't need to copy the default settings to your config.\nThey are only shown here for reference.")),(0,r.kt)("h2",{id:"nvim-vtsls"},(0,r.kt)("a",{parentName:"h2",href:"https://github.com/yioneko/nvim-vtsls"},"nvim-vtsls")),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"opts = {}\n"))),(0,r.kt)(l.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "yioneko/nvim-vtsls",\n  lazy = true,\n  opts = {},\n  config = function(_, opts)\n    require("vtsls").config(opts)\n  end,\n}\n')))),(0,r.kt)("h2",{id:"nvim-lspconfig"},(0,r.kt)("a",{parentName:"h2",href:"https://github.com/neovim/nvim-lspconfig"},"nvim-lspconfig")),(0,r.kt)("p",null," correctly setup lspconfig"),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'opts = {\n  -- make sure mason installs the server\n  servers = {\n    tsserver = {\n      enabled = false,\n    },\n    vtsls = {\n      settings = {\n        complete_function_calls = true,\n        typescript = {\n          updateImportsOnFileMove = { enabled = "always" },\n          enableMoveToFileCodeAction = true,\n          experimental = {\n            completion = {\n              enableServerSideFuzzyMatch = true,\n            },\n          },\n          suggest = {\n            completeFunctionCalls = true,\n          },\n          inlayHints = {\n            enumMemberValues = { enabled = true },\n            functionLikeReturnTypes = { enabled = true },\n            parameterNames = { enabled = "literals" },\n            parameterTypes = { enabled = true },\n            propertyDeclarationTypes = { enabled = true },\n            variableTypes = { enabled = false },\n          },\n        },\n      },\n      keys = {\n        {\n          "gD",\n          function()\n            require("vtsls").commands.goto_source_definition(0)\n          end,\n          desc = "Goto Source Definition",\n        },\n        {\n          "<leader>co",\n          function()\n            require("vtsls").commands.organize_imports(0)\n          end,\n          desc = "Organize Imports",\n        },\n        {\n          "<leader>cM",\n          function()\n            require("vtsls").commands.add_missing_imports(0)\n          end,\n          desc = "Add missing imports",\n        },\n        {\n          "<leader>cD",\n          function()\n            require("vtsls").commands.fix_all(0)\n          end,\n          desc = "Fix all diagnostics",\n        },\n      },\n    },\n  },\n  setup = {\n    tsserver = function()\n      -- disable tsserver\n      return true\n    end,\n  },\n}\n'))),(0,r.kt)(l.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "neovim/nvim-lspconfig",\n  opts = {\n    -- make sure mason installs the server\n    servers = {\n      tsserver = {\n        enabled = false,\n      },\n      vtsls = {\n        settings = {\n          complete_function_calls = true,\n          typescript = {\n            updateImportsOnFileMove = { enabled = "always" },\n            enableMoveToFileCodeAction = true,\n            experimental = {\n              completion = {\n                enableServerSideFuzzyMatch = true,\n              },\n            },\n            suggest = {\n              completeFunctionCalls = true,\n            },\n            inlayHints = {\n              enumMemberValues = { enabled = true },\n              functionLikeReturnTypes = { enabled = true },\n              parameterNames = { enabled = "literals" },\n              parameterTypes = { enabled = true },\n              propertyDeclarationTypes = { enabled = true },\n              variableTypes = { enabled = false },\n            },\n          },\n        },\n        keys = {\n          {\n            "gD",\n            function()\n              require("vtsls").commands.goto_source_definition(0)\n            end,\n            desc = "Goto Source Definition",\n          },\n          {\n            "<leader>co",\n            function()\n              require("vtsls").commands.organize_imports(0)\n            end,\n            desc = "Organize Imports",\n          },\n          {\n            "<leader>cM",\n            function()\n              require("vtsls").commands.add_missing_imports(0)\n            end,\n            desc = "Add missing imports",\n          },\n          {\n            "<leader>cD",\n            function()\n              require("vtsls").commands.fix_all(0)\n            end,\n            desc = "Fix all diagnostics",\n          },\n        },\n      },\n    },\n    setup = {\n      tsserver = function()\n        -- disable tsserver\n        return true\n      end,\n    },\n  },\n}\n')))),(0,r.kt)("h2",{id:"nvim-lspconfig-1"},(0,r.kt)("a",{parentName:"h2",href:"https://github.com/neovim/nvim-lspconfig"},"nvim-lspconfig")),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'opts = function(_, opts)\n  -- copy typescript settings to javascript\n  opts.servers.vtsls.settings.javascript = vim.deepcopy(opts.servers.vtsls.settings.typescript)\n\n  -- add vtsls to lspconfig\n  require("lspconfig.configs").vtsls = require("vtsls").lspconfig\nend\n'))),(0,r.kt)(l.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "neovim/nvim-lspconfig",\n  opts = function(_, opts)\n    -- copy typescript settings to javascript\n    opts.servers.vtsls.settings.javascript = vim.deepcopy(opts.servers.vtsls.settings.typescript)\n\n    -- add vtsls to lspconfig\n    require("lspconfig.configs").vtsls = require("vtsls").lspconfig\n  end,\n}\n')))),(0,r.kt)("h2",{id:"masonnvim"},(0,r.kt)("a",{parentName:"h2",href:"https://github.com/williamboman/mason.nvim"},"mason.nvim")),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'opts = function(_, opts)\n  opts.ensure_installed = opts.ensure_installed or {}\n  table.insert(opts.ensure_installed, "js-debug-adapter")\nend\n'))),(0,r.kt)(l.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "williamboman/mason.nvim",\n  opts = function(_, opts)\n    opts.ensure_installed = opts.ensure_installed or {}\n    table.insert(opts.ensure_installed, "js-debug-adapter")\n  end,\n}\n')))),(0,r.kt)("h2",{id:"nvim-dap-optional"},(0,r.kt)("a",{parentName:"h2",href:"https://github.com/mfussenegger/nvim-dap"},"nvim-dap")," ",(0,r.kt)("em",{parentName:"h2"},"(optional)")),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'opts = function()\n  local dap = require("dap")\n  if not dap.adapters["pwa-node"] then\n    require("dap").adapters["pwa-node"] = {\n      type = "server",\n      host = "localhost",\n      port = "${port}",\n      executable = {\n        command = "node",\n        -- \ud83d\udc80 Make sure to update this path to point to your installation\n        args = {\n          require("mason-registry").get_package("js-debug-adapter"):get_install_path()\n            .. "/js-debug/src/dapDebugServer.js",\n          "${port}",\n        },\n      },\n    }\n  end\n  if not dap.adapters["node"] then\n    dap.adapters["node"] = function(cb, config)\n      if config.type == "node" then\n        config.type = "pwa-node"\n      end\n      local nativeAdapter = dap.adapters["pwa-node"]\n      if type(nativeAdapter) == "function" then\n        nativeAdapter(cb, config)\n      else\n        cb(nativeAdapter)\n      end\n    end\n  end\n\n  for _, language in ipairs({ "typescript", "javascript", "typescriptreact", "javascriptreact" }) do\n    if not dap.configurations[language] then\n      dap.configurations[language] = {\n        {\n          type = "pwa-node",\n          request = "launch",\n          name = "Launch file",\n          program = "${file}",\n          cwd = "${workspaceFolder}",\n        },\n        {\n          type = "pwa-node",\n          request = "attach",\n          name = "Attach",\n          processId = require("dap.utils").pick_process,\n          cwd = "${workspaceFolder}",\n        },\n      }\n    end\n  end\nend\n'))),(0,r.kt)(l.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "mfussenegger/nvim-dap",\n  optional = true,\n  dependencies = {\n    {\n      "williamboman/mason.nvim",\n      opts = function(_, opts)\n        opts.ensure_installed = opts.ensure_installed or {}\n        table.insert(opts.ensure_installed, "js-debug-adapter")\n      end,\n    },\n  },\n  opts = function()\n    local dap = require("dap")\n    if not dap.adapters["pwa-node"] then\n      require("dap").adapters["pwa-node"] = {\n        type = "server",\n        host = "localhost",\n        port = "${port}",\n        executable = {\n          command = "node",\n          -- \ud83d\udc80 Make sure to update this path to point to your installation\n          args = {\n            require("mason-registry").get_package("js-debug-adapter"):get_install_path()\n              .. "/js-debug/src/dapDebugServer.js",\n            "${port}",\n          },\n        },\n      }\n    end\n    if not dap.adapters["node"] then\n      dap.adapters["node"] = function(cb, config)\n        if config.type == "node" then\n          config.type = "pwa-node"\n        end\n        local nativeAdapter = dap.adapters["pwa-node"]\n        if type(nativeAdapter) == "function" then\n          nativeAdapter(cb, config)\n        else\n          cb(nativeAdapter)\n        end\n      end\n    end\n\n    for _, language in ipairs({ "typescript", "javascript", "typescriptreact", "javascriptreact" }) do\n      if not dap.configurations[language] then\n        dap.configurations[language] = {\n          {\n            type = "pwa-node",\n            request = "launch",\n            name = "Launch file",\n            program = "${file}",\n            cwd = "${workspaceFolder}",\n          },\n          {\n            type = "pwa-node",\n            request = "attach",\n            name = "Attach",\n            processId = require("dap.utils").pick_process,\n            cwd = "${workspaceFolder}",\n          },\n        }\n      end\n    end\n  end,\n}\n')))))}m.isMDXComponent=!0}}]);