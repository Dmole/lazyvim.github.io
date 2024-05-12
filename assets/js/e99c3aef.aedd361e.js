"use strict";(self.webpackChunklazyvim=self.webpackChunklazyvim||[]).push([[5150],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var a=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=c(t),m=l,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||r;return t?a.createElement(f,i(i({ref:n},u),{},{components:t})):a.createElement(f,i({ref:n},u))}));function f(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,i=new Array(r);i[0]=m;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[d]="string"==typeof e?e:l,i[1]=o;for(var c=2;c<r;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5162:(e,n,t)=>{t.d(n,{Z:()=>i});var a=t(7294),l=t(6010);const r="tabItem_Ymn6";function i(e){let{children:n,hidden:t,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,l.Z)(r,i),hidden:t},n)}},4866:(e,n,t)=>{t.d(n,{Z:()=>w});var a=t(7462),l=t(7294),r=t(6010),i=t(2466),o=t(6550),s=t(1980),c=t(7392),u=t(12);function d(e){return function(e){return l.Children.map(e,(e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:l}}=e;return{value:n,label:t,attributes:a,default:l}}))}function p(e){const{values:n,children:t}=e;return(0,l.useMemo)((()=>{const e=n??d(t);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:t}=e;const a=(0,o.k6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,s._X)(r),(0,l.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(a.location.search);n.set(r,e),a.replace({...a.location,search:n.toString()})}),[r,a])]}function g(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,r=p(e),[i,o]=(0,l.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:r}))),[s,c]=f({queryString:t,groupId:a}),[d,g]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,r]=(0,u.Nk)(t);return[a,(0,l.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:a}),h=(()=>{const e=s??d;return m({value:e,tabValues:r})?e:null})();(0,l.useLayoutEffect)((()=>{h&&o(h)}),[h]);return{selectedValue:i,selectValue:(0,l.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);o(e),c(e),g(e)}),[c,g,r]),tabValues:r}}var h=t(2389);const v="tabList__CuJ",b="tabItem_LNqP";function _(e){let{className:n,block:t,selectedValue:o,selectValue:s,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),p=e=>{const n=e.currentTarget,t=u.indexOf(n),a=c[t].value;a!==o&&(d(n),s(a))},m=e=>{let n=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const t=u.indexOf(e.currentTarget)+1;n=u[t]??u[0];break}case"ArrowLeft":{const t=u.indexOf(e.currentTarget)-1;n=u[t]??u[u.length-1];break}}n?.focus()};return l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},n)},c.map((e=>{let{value:n,label:t,attributes:i}=e;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:o===n?0:-1,"aria-selected":o===n,key:n,ref:e=>u.push(e),onKeyDown:m,onClick:p},i,{className:(0,r.Z)("tabs__item",b,i?.className,{"tabs__item--active":o===n})}),t??n)})))}function k(e){let{lazy:n,children:t,selectedValue:a}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===a));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return l.createElement("div",{className:"margin-top--md"},r.map(((e,n)=>(0,l.cloneElement)(e,{key:n,hidden:e.props.value!==a}))))}function y(e){const n=g(e);return l.createElement("div",{className:(0,r.Z)("tabs-container",v)},l.createElement(_,(0,a.Z)({},e,n)),l.createElement(k,(0,a.Z)({},e,n)))}function w(e){const n=(0,h.Z)();return l.createElement(y,(0,a.Z)({key:String(n)},e))}},6897:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var a=t(7462),l=(t(7294),t(3905)),r=t(4866),i=t(5162);const o={},s="Editor",c={unversionedId:"plugins/editor",id:"plugins/editor",title:"Editor",description:"neo-tree.nvim",source:"@site/docs/plugins/editor.md",sourceDirName:"plugins",slug:"/plugins/editor",permalink:"/plugins/editor",draft:!1,editUrl:"https://github.com/LazyVim/lazyvim.github.io/tree/master/docs/plugins/editor.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Colorscheme",permalink:"/plugins/colorscheme"},next:{title:"Formatting",permalink:"/plugins/formatting"}},u={},d=[{value:"neo-tree.nvim",id:"neo-treenvim",level:2},{value:"nvim-spectre",id:"nvim-spectre",level:2},{value:"telescope-fzf-native.nvim",id:"telescope-fzf-nativenvim",level:2},{value:"flash.nvim",id:"flashnvim",level:2},{value:"which-key.nvim",id:"which-keynvim",level:2},{value:"gitsigns.nvim",id:"gitsignsnvim",level:2},{value:"vim-illuminate",id:"vim-illuminate",level:2},{value:"mini.bufremove",id:"minibufremove",level:2},{value:"trouble.nvim",id:"troublenvim",level:2},{value:"todo-comments.nvim",id:"todo-commentsnvim",level:2},{value:"telescope.nvim <em>(optional)</em>",id:"telescopenvim-optional",level:2},{value:"telescope.nvim <em>(optional)</em>",id:"telescopenvim-optional-1",level:2}],p={toc:d};function m(e){let{components:n,...t}=e;return(0,l.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"editor"},"Editor"),(0,l.kt)("h2",{id:"neo-treenvim"},(0,l.kt)("a",{parentName:"h2",href:"https://github.com/nvim-neo-tree/neo-tree.nvim"},"neo-tree.nvim")),(0,l.kt)("p",null," file explorer"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'opts = {\n  sources = { "filesystem", "buffers", "git_status", "document_symbols" },\n  open_files_do_not_replace_types = { "terminal", "Trouble", "trouble", "qf", "Outline" },\n  filesystem = {\n    bind_to_cwd = false,\n    follow_current_file = { enabled = true },\n    use_libuv_file_watcher = true,\n  },\n  window = {\n    mappings = {\n      ["<space>"] = "none",\n      ["Y"] = {\n        function(state)\n          local node = state.tree:get_node()\n          local path = node:get_id()\n          vim.fn.setreg("+", path, "c")\n        end,\n        desc = "Copy Path to Clipboard",\n      },\n      ["O"] = {\n        function(state)\n          require("lazy.util").open(state.tree:get_node().path, { system = true })\n        end,\n        desc = "Open with System Application",\n      },\n    },\n  },\n  default_component_configs = {\n    indent = {\n      with_expanders = true, -- if nil and file nesting is enabled, will enable expanders\n      expander_collapsed = "\uf460",\n      expander_expanded = "\uf47c",\n      expander_highlight = "NeoTreeExpander",\n    },\n  },\n}\n'))),(0,l.kt)(i.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "nvim-neo-tree/neo-tree.nvim",\n  branch = "v3.x",\n  cmd = "Neotree",\n  keys = {\n    {\n      "<leader>fe",\n      function()\n        require("neo-tree.command").execute({ toggle = true, dir = LazyVim.root() })\n      end,\n      desc = "Explorer NeoTree (Root Dir)",\n    },\n    {\n      "<leader>fE",\n      function()\n        require("neo-tree.command").execute({ toggle = true, dir = vim.uv.cwd() })\n      end,\n      desc = "Explorer NeoTree (cwd)",\n    },\n    { "<leader>e", "<leader>fe", desc = "Explorer NeoTree (Root Dir)", remap = true },\n    { "<leader>E", "<leader>fE", desc = "Explorer NeoTree (cwd)", remap = true },\n    {\n      "<leader>ge",\n      function()\n        require("neo-tree.command").execute({ source = "git_status", toggle = true })\n      end,\n      desc = "Git Explorer",\n    },\n    {\n      "<leader>be",\n      function()\n        require("neo-tree.command").execute({ source = "buffers", toggle = true })\n      end,\n      desc = "Buffer Explorer",\n    },\n  },\n  deactivate = function()\n    vim.cmd([[Neotree close]])\n  end,\n  init = function()\n    -- FIX: use `autocmd` for lazy-loading neo-tree instead of directly requiring it,\n    -- because `cwd` is not set up properly.\n    vim.api.nvim_create_autocmd("BufEnter", {\n      group = vim.api.nvim_create_augroup("Neotree_start_directory", { clear = true }),\n      desc = "Start Neo-tree with directory",\n      once = true,\n      callback = function()\n        if package.loaded["neo-tree"] then\n          return\n        else\n          local stats = vim.uv.fs_stat(vim.fn.argv(0))\n          if stats and stats.type == "directory" then\n            require("neo-tree")\n          end\n        end\n      end,\n    })\n  end,\n  opts = {\n    sources = { "filesystem", "buffers", "git_status", "document_symbols" },\n    open_files_do_not_replace_types = { "terminal", "Trouble", "trouble", "qf", "Outline" },\n    filesystem = {\n      bind_to_cwd = false,\n      follow_current_file = { enabled = true },\n      use_libuv_file_watcher = true,\n    },\n    window = {\n      mappings = {\n        ["<space>"] = "none",\n        ["Y"] = {\n          function(state)\n            local node = state.tree:get_node()\n            local path = node:get_id()\n            vim.fn.setreg("+", path, "c")\n          end,\n          desc = "Copy Path to Clipboard",\n        },\n        ["O"] = {\n          function(state)\n            require("lazy.util").open(state.tree:get_node().path, { system = true })\n          end,\n          desc = "Open with System Application",\n        },\n      },\n    },\n    default_component_configs = {\n      indent = {\n        with_expanders = true, -- if nil and file nesting is enabled, will enable expanders\n        expander_collapsed = "\uf460",\n        expander_expanded = "\uf47c",\n        expander_highlight = "NeoTreeExpander",\n      },\n    },\n  },\n  config = function(_, opts)\n    local function on_move(data)\n      LazyVim.lsp.on_rename(data.source, data.destination)\n    end\n\n    local events = require("neo-tree.events")\n    opts.event_handlers = opts.event_handlers or {}\n    vim.list_extend(opts.event_handlers, {\n      { event = events.FILE_MOVED, handler = on_move },\n      { event = events.FILE_RENAMED, handler = on_move },\n    })\n    require("neo-tree").setup(opts)\n    vim.api.nvim_create_autocmd("TermClose", {\n      pattern = "*lazygit",\n      callback = function()\n        if package.loaded["neo-tree.sources.git_status"] then\n          require("neo-tree.sources.git_status").refresh()\n        end\n      end,\n    })\n  end,\n}\n')))),(0,l.kt)("h2",{id:"nvim-spectre"},(0,l.kt)("a",{parentName:"h2",href:"https://github.com/nvim-pack/nvim-spectre"},"nvim-spectre")),(0,l.kt)("p",null," search/replace in multiple files"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'opts = { open_cmd = "noswapfile vnew" }\n'))),(0,l.kt)(i.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "nvim-pack/nvim-spectre",\n  build = false,\n  cmd = "Spectre",\n  opts = { open_cmd = "noswapfile vnew" },\n  -- stylua: ignore\n  keys = {\n    { "<leader>sr", function() require("spectre").open() end, desc = "Replace in Files (Spectre)" },\n  },\n}\n')))),(0,l.kt)("h2",{id:"telescope-fzf-nativenvim"},(0,l.kt)("a",{parentName:"h2",href:"https://github.com/nvim-telescope/telescope-fzf-native.nvim"},"telescope-fzf-native.nvim")),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"opts = {}\n"))),(0,l.kt)(i.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "nvim-telescope/telescope-fzf-native.nvim",\n  build = vim.fn.executable("make") == 1 and "make"\n    or "cmake -S. -Bbuild -DCMAKE_BUILD_TYPE=Release && cmake --build build --config Release && cmake --install build --prefix build",\n  enabled = vim.fn.executable("make") == 1 or vim.fn.executable("cmake") == 1,\n  config = function()\n    LazyVim.on_load("telescope.nvim", function()\n      require("telescope").load_extension("fzf")\n    end)\n  end,\n}\n')))),(0,l.kt)("h2",{id:"flashnvim"},(0,l.kt)("a",{parentName:"h2",href:"https://github.com/folke/flash.nvim"},"flash.nvim")),(0,l.kt)("p",null," Flash enhances the built-in search functionality by showing labels\nat the end of each match, letting you quickly jump to a specific\nlocation."),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"opts = {}\n"))),(0,l.kt)(i.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "folke/flash.nvim",\n  event = "VeryLazy",\n  vscode = true,\n  ---@type Flash.Config\n  opts = {},\n  -- stylua: ignore\n  keys = {\n    { "s", mode = { "n", "x", "o" }, function() require("flash").jump() end, desc = "Flash" },\n    { "S", mode = { "n", "o", "x" }, function() require("flash").treesitter() end, desc = "Flash Treesitter" },\n    { "r", mode = "o", function() require("flash").remote() end, desc = "Remote Flash" },\n    { "R", mode = { "o", "x" }, function() require("flash").treesitter_search() end, desc = "Treesitter Search" },\n    { "<c-s>", mode = { "c" }, function() require("flash").toggle() end, desc = "Toggle Flash Search" },\n  },\n}\n')))),(0,l.kt)("h2",{id:"which-keynvim"},(0,l.kt)("a",{parentName:"h2",href:"https://github.com/folke/which-key.nvim"},"which-key.nvim")),(0,l.kt)("p",null," which-key helps you remember key bindings by showing a popup\nwith the active keybindings of the command you started typing."),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'opts = {\n  plugins = { spelling = true },\n  defaults = {\n    mode = { "n", "v" },\n    ["g"] = { name = "+goto" },\n    ["gs"] = { name = "+surround" },\n    ["z"] = { name = "+fold" },\n    ["]"] = { name = "+next" },\n    ["["] = { name = "+prev" },\n    ["<leader><tab>"] = { name = "+tabs" },\n    ["<leader>b"] = { name = "+buffer" },\n    ["<leader>c"] = { name = "+code" },\n    ["<leader>f"] = { name = "+file/find" },\n    ["<leader>g"] = { name = "+git" },\n    ["<leader>gh"] = { name = "+hunks" },\n    ["<leader>q"] = { name = "+quit/session" },\n    ["<leader>s"] = { name = "+search" },\n    ["<leader>u"] = { name = "+ui" },\n    ["<leader>w"] = { name = "+windows" },\n    ["<leader>x"] = { name = "+diagnostics/quickfix" },\n  },\n}\n'))),(0,l.kt)(i.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "folke/which-key.nvim",\n  event = "VeryLazy",\n  opts = {\n    plugins = { spelling = true },\n    defaults = {\n      mode = { "n", "v" },\n      ["g"] = { name = "+goto" },\n      ["gs"] = { name = "+surround" },\n      ["z"] = { name = "+fold" },\n      ["]"] = { name = "+next" },\n      ["["] = { name = "+prev" },\n      ["<leader><tab>"] = { name = "+tabs" },\n      ["<leader>b"] = { name = "+buffer" },\n      ["<leader>c"] = { name = "+code" },\n      ["<leader>f"] = { name = "+file/find" },\n      ["<leader>g"] = { name = "+git" },\n      ["<leader>gh"] = { name = "+hunks" },\n      ["<leader>q"] = { name = "+quit/session" },\n      ["<leader>s"] = { name = "+search" },\n      ["<leader>u"] = { name = "+ui" },\n      ["<leader>w"] = { name = "+windows" },\n      ["<leader>x"] = { name = "+diagnostics/quickfix" },\n    },\n  },\n  config = function(_, opts)\n    local wk = require("which-key")\n    wk.setup(opts)\n    wk.register(opts.defaults)\n  end,\n}\n')))),(0,l.kt)("h2",{id:"gitsignsnvim"},(0,l.kt)("a",{parentName:"h2",href:"https://github.com/lewis6991/gitsigns.nvim"},"gitsigns.nvim")),(0,l.kt)("p",null," git signs highlights text that has changed since the list\ngit commit, and also lets you interactively stage & unstage\nhunks in a commit."),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'opts = {\n  signs = {\n    add = { text = "\u258e" },\n    change = { text = "\u258e" },\n    delete = { text = "\uf0da" },\n    topdelete = { text = "\uf0da" },\n    changedelete = { text = "\u258e" },\n    untracked = { text = "\u258e" },\n  },\n  on_attach = function(buffer)\n    local gs = package.loaded.gitsigns\n\n    local function map(mode, l, r, desc)\n      vim.keymap.set(mode, l, r, { buffer = buffer, desc = desc })\n    end\n\n    -- stylua: ignore start\n    map("n", "]h", gs.next_hunk, "Next Hunk")\n    map("n", "[h", gs.prev_hunk, "Prev Hunk")\n    map({ "n", "v" }, "<leader>ghs", ":Gitsigns stage_hunk<CR>", "Stage Hunk")\n    map({ "n", "v" }, "<leader>ghr", ":Gitsigns reset_hunk<CR>", "Reset Hunk")\n    map("n", "<leader>ghS", gs.stage_buffer, "Stage Buffer")\n    map("n", "<leader>ghu", gs.undo_stage_hunk, "Undo Stage Hunk")\n    map("n", "<leader>ghR", gs.reset_buffer, "Reset Buffer")\n    map("n", "<leader>ghp", gs.preview_hunk_inline, "Preview Hunk Inline")\n    map("n", "<leader>ghb", function() gs.blame_line({ full = true }) end, "Blame Line")\n    map("n", "<leader>ghd", gs.diffthis, "Diff This")\n    map("n", "<leader>ghD", function() gs.diffthis("~") end, "Diff This ~")\n    map({ "o", "x" }, "ih", ":<C-U>Gitsigns select_hunk<CR>", "GitSigns Select Hunk")\n  end,\n}\n'))),(0,l.kt)(i.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "lewis6991/gitsigns.nvim",\n  event = "LazyFile",\n  opts = {\n    signs = {\n      add = { text = "\u258e" },\n      change = { text = "\u258e" },\n      delete = { text = "\uf0da" },\n      topdelete = { text = "\uf0da" },\n      changedelete = { text = "\u258e" },\n      untracked = { text = "\u258e" },\n    },\n    on_attach = function(buffer)\n      local gs = package.loaded.gitsigns\n\n      local function map(mode, l, r, desc)\n        vim.keymap.set(mode, l, r, { buffer = buffer, desc = desc })\n      end\n\n      -- stylua: ignore start\n      map("n", "]h", gs.next_hunk, "Next Hunk")\n      map("n", "[h", gs.prev_hunk, "Prev Hunk")\n      map({ "n", "v" }, "<leader>ghs", ":Gitsigns stage_hunk<CR>", "Stage Hunk")\n      map({ "n", "v" }, "<leader>ghr", ":Gitsigns reset_hunk<CR>", "Reset Hunk")\n      map("n", "<leader>ghS", gs.stage_buffer, "Stage Buffer")\n      map("n", "<leader>ghu", gs.undo_stage_hunk, "Undo Stage Hunk")\n      map("n", "<leader>ghR", gs.reset_buffer, "Reset Buffer")\n      map("n", "<leader>ghp", gs.preview_hunk_inline, "Preview Hunk Inline")\n      map("n", "<leader>ghb", function() gs.blame_line({ full = true }) end, "Blame Line")\n      map("n", "<leader>ghd", gs.diffthis, "Diff This")\n      map("n", "<leader>ghD", function() gs.diffthis("~") end, "Diff This ~")\n      map({ "o", "x" }, "ih", ":<C-U>Gitsigns select_hunk<CR>", "GitSigns Select Hunk")\n    end,\n  },\n}\n')))),(0,l.kt)("h2",{id:"vim-illuminate"},(0,l.kt)("a",{parentName:"h2",href:"https://github.com/RRethy/vim-illuminate"},"vim-illuminate")),(0,l.kt)("p",null," Automatically highlights other instances of the word under your cursor.\nThis works with LSP, Treesitter, and regexp matching to find the other\ninstances."),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'opts = {\n  delay = 200,\n  large_file_cutoff = 2000,\n  large_file_overrides = {\n    providers = { "lsp" },\n  },\n}\n'))),(0,l.kt)(i.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "RRethy/vim-illuminate",\n  event = "LazyFile",\n  opts = {\n    delay = 200,\n    large_file_cutoff = 2000,\n    large_file_overrides = {\n      providers = { "lsp" },\n    },\n  },\n  config = function(_, opts)\n    require("illuminate").configure(opts)\n\n    local function map(key, dir, buffer)\n      vim.keymap.set("n", key, function()\n        require("illuminate")["goto_" .. dir .. "_reference"](false)\n      end, { desc = dir:sub(1, 1):upper() .. dir:sub(2) .. " Reference", buffer = buffer })\n    end\n\n    map("]]", "next")\n    map("[[", "prev")\n\n    -- also set it after loading ftplugins, since a lot overwrite [[ and ]]\n    vim.api.nvim_create_autocmd("FileType", {\n      callback = function()\n        local buffer = vim.api.nvim_get_current_buf()\n        map("]]", "next", buffer)\n        map("[[", "prev", buffer)\n      end,\n    })\n  end,\n  keys = {\n    { "]]", desc = "Next Reference" },\n    { "[[", desc = "Prev Reference" },\n  },\n}\n')))),(0,l.kt)("h2",{id:"minibufremove"},(0,l.kt)("a",{parentName:"h2",href:"https://github.com/echasnovski/mini.bufremove"},"mini.bufremove")),(0,l.kt)("p",null," buffer remove"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"opts = nil\n"))),(0,l.kt)(i.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "echasnovski/mini.bufremove",\n\n  keys = {\n    {\n      "<leader>bd",\n      function()\n        local bd = require("mini.bufremove").delete\n        if vim.bo.modified then\n          local choice = vim.fn.confirm(("Save changes to %q?"):format(vim.fn.bufname()), "&Yes\\n&No\\n&Cancel")\n          if choice == 1 then -- Yes\n            vim.cmd.write()\n            bd(0)\n          elseif choice == 2 then -- No\n            bd(0, true)\n          end\n        else\n          bd(0)\n        end\n      end,\n      desc = "Delete Buffer",\n    },\n    -- stylua: ignore\n    { "<leader>bD", function() require("mini.bufremove").delete(0, true) end, desc = "Delete Buffer (Force)" },\n  },\n}\n')))),(0,l.kt)("h2",{id:"troublenvim"},(0,l.kt)("a",{parentName:"h2",href:"https://github.com/folke/trouble.nvim"},"trouble.nvim")),(0,l.kt)("p",null," better diagnostics list and others"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"opts = { use_diagnostic_signs = true }\n"))),(0,l.kt)(i.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "folke/trouble.nvim",\n  cmd = { "TroubleToggle", "Trouble" },\n  opts = { use_diagnostic_signs = true },\n  keys = {\n    { "<leader>xx", "<cmd>TroubleToggle document_diagnostics<cr>", desc = "Document Diagnostics (Trouble)" },\n    { "<leader>xX", "<cmd>TroubleToggle workspace_diagnostics<cr>", desc = "Workspace Diagnostics (Trouble)" },\n    { "<leader>xL", "<cmd>TroubleToggle loclist<cr>", desc = "Location List (Trouble)" },\n    { "<leader>xQ", "<cmd>TroubleToggle quickfix<cr>", desc = "Quickfix List (Trouble)" },\n    {\n      "[q",\n      function()\n        if require("trouble").is_open() then\n          require("trouble").previous({ skip_groups = true, jump = true })\n        else\n          local ok, err = pcall(vim.cmd.cprev)\n          if not ok then\n            vim.notify(err, vim.log.levels.ERROR)\n          end\n        end\n      end,\n      desc = "Previous Trouble/Quickfix Item",\n    },\n    {\n      "]q",\n      function()\n        if require("trouble").is_open() then\n          require("trouble").next({ skip_groups = true, jump = true })\n        else\n          local ok, err = pcall(vim.cmd.cnext)\n          if not ok then\n            vim.notify(err, vim.log.levels.ERROR)\n          end\n        end\n      end,\n      desc = "Next Trouble/Quickfix Item",\n    },\n  },\n}\n')))),(0,l.kt)("h2",{id:"todo-commentsnvim"},(0,l.kt)("a",{parentName:"h2",href:"https://github.com/folke/todo-comments.nvim"},"todo-comments.nvim")),(0,l.kt)("p",null," Finds and lists all of the TODO, HACK, BUG, etc comment\nin your project and loads them into a browsable list."),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"opts = {}\n"))),(0,l.kt)(i.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "folke/todo-comments.nvim",\n  cmd = { "TodoTrouble", "TodoTelescope" },\n  event = "LazyFile",\n  config = true,\n  -- stylua: ignore\n  keys = {\n    { "]t", function() require("todo-comments").jump_next() end, desc = "Next Todo Comment" },\n    { "[t", function() require("todo-comments").jump_prev() end, desc = "Previous Todo Comment" },\n    { "<leader>xt", "<cmd>TodoTrouble<cr>", desc = "Todo (Trouble)" },\n    { "<leader>xT", "<cmd>TodoTrouble keywords=TODO,FIX,FIXME<cr>", desc = "Todo/Fix/Fixme (Trouble)" },\n    { "<leader>st", "<cmd>TodoTelescope<cr>", desc = "Todo" },\n    { "<leader>sT", "<cmd>TodoTelescope keywords=TODO,FIX,FIXME<cr>", desc = "Todo/Fix/Fixme" },\n  },\n}\n')))),(0,l.kt)("h2",{id:"telescopenvim-optional"},(0,l.kt)("a",{parentName:"h2",href:"https://github.com/nvim-telescope/telescope.nvim"},"telescope.nvim")," ",(0,l.kt)("em",{parentName:"h2"},"(optional)")),(0,l.kt)("p",null," Fuzzy finder.\nThe default key bindings to find files will use Telescope's\n",(0,l.kt)("inlineCode",{parentName:"p"},"find_files")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"git_files")," depending on whether the\ndirectory is a git repo."),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'opts = function()\n  local actions = require("telescope.actions")\n\n  local open_with_trouble = function(...)\n    return require("trouble.providers.telescope").open_with_trouble(...)\n  end\n  local open_selected_with_trouble = function(...)\n    return require("trouble.providers.telescope").open_selected_with_trouble(...)\n  end\n  local find_files_no_ignore = function()\n    local action_state = require("telescope.actions.state")\n    local line = action_state.get_current_line()\n    LazyVim.telescope("find_files", { no_ignore = true, default_text = line })()\n  end\n  local find_files_with_hidden = function()\n    local action_state = require("telescope.actions.state")\n    local line = action_state.get_current_line()\n    LazyVim.telescope("find_files", { hidden = true, default_text = line })()\n  end\n\n  return {\n    defaults = {\n      prompt_prefix = "\uf054 ",\n      selection_caret = "\uf44a ",\n      -- open files in the first window that is an actual file.\n      -- use the current window if no other window is available.\n      get_selection_window = function()\n        local wins = vim.api.nvim_list_wins()\n        table.insert(wins, 1, vim.api.nvim_get_current_win())\n        for _, win in ipairs(wins) do\n          local buf = vim.api.nvim_win_get_buf(win)\n          if vim.bo[buf].buftype == "" then\n            return win\n          end\n        end\n        return 0\n      end,\n      mappings = {\n        i = {\n          ["<c-t>"] = open_with_trouble,\n          ["<a-t>"] = open_selected_with_trouble,\n          ["<a-i>"] = find_files_no_ignore,\n          ["<a-h>"] = find_files_with_hidden,\n          ["<C-Down>"] = actions.cycle_history_next,\n          ["<C-Up>"] = actions.cycle_history_prev,\n          ["<C-f>"] = actions.preview_scrolling_down,\n          ["<C-b>"] = actions.preview_scrolling_up,\n        },\n        n = {\n          ["q"] = actions.close,\n        },\n      },\n    },\n  }\nend\n'))),(0,l.kt)(i.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "nvim-telescope/telescope.nvim",\n  cmd = "Telescope",\n  version = false, -- telescope did only one release, so use HEAD for now\n  dependencies = {\n    {\n      "nvim-telescope/telescope-fzf-native.nvim",\n      build = vim.fn.executable("make") == 1 and "make"\n        or "cmake -S. -Bbuild -DCMAKE_BUILD_TYPE=Release && cmake --build build --config Release && cmake --install build --prefix build",\n      enabled = vim.fn.executable("make") == 1 or vim.fn.executable("cmake") == 1,\n      config = function()\n        LazyVim.on_load("telescope.nvim", function()\n          require("telescope").load_extension("fzf")\n        end)\n      end,\n    },\n  },\n  keys = {\n    {\n      "<leader>,",\n      "<cmd>Telescope buffers sort_mru=true sort_lastused=true<cr>",\n      desc = "Switch Buffer",\n    },\n    { "<leader>/", LazyVim.telescope("live_grep"), desc = "Grep (Root Dir)" },\n    { "<leader>:", "<cmd>Telescope command_history<cr>", desc = "Command History" },\n    { "<leader><space>", LazyVim.telescope("files"), desc = "Find Files (Root Dir)" },\n    -- find\n    { "<leader>fb", "<cmd>Telescope buffers sort_mru=true sort_lastused=true<cr>", desc = "Buffers" },\n    { "<leader>fc", LazyVim.telescope.config_files(), desc = "Find Config File" },\n    { "<leader>ff", LazyVim.telescope("files"), desc = "Find Files (Root Dir)" },\n    { "<leader>fF", LazyVim.telescope("files", { cwd = false }), desc = "Find Files (cwd)" },\n    { "<leader>fg", "<cmd>Telescope git_files<cr>", desc = "Find Files (git-files)" },\n    { "<leader>fr", "<cmd>Telescope oldfiles<cr>", desc = "Recent" },\n    { "<leader>fR", LazyVim.telescope("oldfiles", { cwd = vim.uv.cwd() }), desc = "Recent (cwd)" },\n    -- git\n    { "<leader>gc", "<cmd>Telescope git_commits<CR>", desc = "Commits" },\n    { "<leader>gs", "<cmd>Telescope git_status<CR>", desc = "Status" },\n    -- search\n    { \'<leader>s"\', "<cmd>Telescope registers<cr>", desc = "Registers" },\n    { "<leader>sa", "<cmd>Telescope autocommands<cr>", desc = "Auto Commands" },\n    { "<leader>sb", "<cmd>Telescope current_buffer_fuzzy_find<cr>", desc = "Buffer" },\n    { "<leader>sc", "<cmd>Telescope command_history<cr>", desc = "Command History" },\n    { "<leader>sC", "<cmd>Telescope commands<cr>", desc = "Commands" },\n    { "<leader>sd", "<cmd>Telescope diagnostics bufnr=0<cr>", desc = "Document Diagnostics" },\n    { "<leader>sD", "<cmd>Telescope diagnostics<cr>", desc = "Workspace Diagnostics" },\n    { "<leader>sg", LazyVim.telescope("live_grep"), desc = "Grep (Root Dir)" },\n    { "<leader>sG", LazyVim.telescope("live_grep", { cwd = false }), desc = "Grep (cwd)" },\n    { "<leader>sh", "<cmd>Telescope help_tags<cr>", desc = "Help Pages" },\n    { "<leader>sH", "<cmd>Telescope highlights<cr>", desc = "Search Highlight Groups" },\n    { "<leader>sk", "<cmd>Telescope keymaps<cr>", desc = "Key Maps" },\n    { "<leader>sM", "<cmd>Telescope man_pages<cr>", desc = "Man Pages" },\n    { "<leader>sm", "<cmd>Telescope marks<cr>", desc = "Jump to Mark" },\n    { "<leader>so", "<cmd>Telescope vim_options<cr>", desc = "Options" },\n    { "<leader>sR", "<cmd>Telescope resume<cr>", desc = "Resume" },\n    { "<leader>sw", LazyVim.telescope("grep_string", { word_match = "-w" }), desc = "Word (Root Dir)" },\n    { "<leader>sW", LazyVim.telescope("grep_string", { cwd = false, word_match = "-w" }), desc = "Word (cwd)" },\n    { "<leader>sw", LazyVim.telescope("grep_string"), mode = "v", desc = "Selection (Root Dir)" },\n    { "<leader>sW", LazyVim.telescope("grep_string", { cwd = false }), mode = "v", desc = "Selection (cwd)" },\n    { "<leader>uC", LazyVim.telescope("colorscheme", { enable_preview = true }), desc = "Colorscheme with Preview" },\n    {\n      "<leader>ss",\n      function()\n        require("telescope.builtin").lsp_document_symbols({\n          symbols = require("lazyvim.config").get_kind_filter(),\n        })\n      end,\n      desc = "Goto Symbol",\n    },\n    {\n      "<leader>sS",\n      function()\n        require("telescope.builtin").lsp_dynamic_workspace_symbols({\n          symbols = require("lazyvim.config").get_kind_filter(),\n        })\n      end,\n      desc = "Goto Symbol (Workspace)",\n    },\n  },\n  opts = function()\n    local actions = require("telescope.actions")\n\n    local open_with_trouble = function(...)\n      return require("trouble.providers.telescope").open_with_trouble(...)\n    end\n    local open_selected_with_trouble = function(...)\n      return require("trouble.providers.telescope").open_selected_with_trouble(...)\n    end\n    local find_files_no_ignore = function()\n      local action_state = require("telescope.actions.state")\n      local line = action_state.get_current_line()\n      LazyVim.telescope("find_files", { no_ignore = true, default_text = line })()\n    end\n    local find_files_with_hidden = function()\n      local action_state = require("telescope.actions.state")\n      local line = action_state.get_current_line()\n      LazyVim.telescope("find_files", { hidden = true, default_text = line })()\n    end\n\n    return {\n      defaults = {\n        prompt_prefix = "\uf054 ",\n        selection_caret = "\uf44a ",\n        -- open files in the first window that is an actual file.\n        -- use the current window if no other window is available.\n        get_selection_window = function()\n          local wins = vim.api.nvim_list_wins()\n          table.insert(wins, 1, vim.api.nvim_get_current_win())\n          for _, win in ipairs(wins) do\n            local buf = vim.api.nvim_win_get_buf(win)\n            if vim.bo[buf].buftype == "" then\n              return win\n            end\n          end\n          return 0\n        end,\n        mappings = {\n          i = {\n            ["<c-t>"] = open_with_trouble,\n            ["<a-t>"] = open_selected_with_trouble,\n            ["<a-i>"] = find_files_no_ignore,\n            ["<a-h>"] = find_files_with_hidden,\n            ["<C-Down>"] = actions.cycle_history_next,\n            ["<C-Up>"] = actions.cycle_history_prev,\n            ["<C-f>"] = actions.preview_scrolling_down,\n            ["<C-b>"] = actions.preview_scrolling_up,\n          },\n          n = {\n            ["q"] = actions.close,\n          },\n        },\n      },\n    }\n  end,\n}\n')))),(0,l.kt)("h2",{id:"telescopenvim-optional-1"},(0,l.kt)("a",{parentName:"h2",href:"https://github.com/nvim-telescope/telescope.nvim"},"telescope.nvim")," ",(0,l.kt)("em",{parentName:"h2"},"(optional)")),(0,l.kt)("p",null," Flash Telescope config"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'opts = function(_, opts)\n  if not LazyVim.has("flash.nvim") then\n    return\n  end\n  local function flash(prompt_bufnr)\n    require("flash").jump({\n      pattern = "^",\n      label = { after = { 0, 0 } },\n      search = {\n        mode = "search",\n        exclude = {\n          function(win)\n            return vim.bo[vim.api.nvim_win_get_buf(win)].filetype ~= "TelescopeResults"\n          end,\n        },\n      },\n      action = function(match)\n        local picker = require("telescope.actions.state").get_current_picker(prompt_bufnr)\n        picker:set_selection(match.pos[1] - 1)\n      end,\n    })\n  end\n  opts.defaults = vim.tbl_deep_extend("force", opts.defaults or {}, {\n    mappings = { n = { s = flash }, i = { ["<c-s>"] = flash } },\n  })\nend\n'))),(0,l.kt)(i.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "nvim-telescope/telescope.nvim",\n  optional = true,\n  opts = function(_, opts)\n    if not LazyVim.has("flash.nvim") then\n      return\n    end\n    local function flash(prompt_bufnr)\n      require("flash").jump({\n        pattern = "^",\n        label = { after = { 0, 0 } },\n        search = {\n          mode = "search",\n          exclude = {\n            function(win)\n              return vim.bo[vim.api.nvim_win_get_buf(win)].filetype ~= "TelescopeResults"\n            end,\n          },\n        },\n        action = function(match)\n          local picker = require("telescope.actions.state").get_current_picker(prompt_bufnr)\n          picker:set_selection(match.pos[1] - 1)\n        end,\n      })\n    end\n    opts.defaults = vim.tbl_deep_extend("force", opts.defaults or {}, {\n      mappings = { n = { s = flash }, i = { ["<c-s>"] = flash } },\n    })\n  end,\n}\n')))))}m.isMDXComponent=!0}}]);