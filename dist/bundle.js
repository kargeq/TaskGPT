(()=>{var e={187:e=>{"use strict";var t,n="object"==typeof Reflect?Reflect:null,s=n&&"function"==typeof n.apply?n.apply:function(e,t,n){return Function.prototype.apply.call(e,t,n)};t=n&&"function"==typeof n.ownKeys?n.ownKeys:Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:function(e){return Object.getOwnPropertyNames(e)};var r=Number.isNaN||function(e){return e!=e};function i(){i.init.call(this)}e.exports=i,e.exports.once=function(e,t){return new Promise((function(n,s){function r(n){e.removeListener(t,i),s(n)}function i(){"function"==typeof e.removeListener&&e.removeListener("error",r),n([].slice.call(arguments))}v(e,t,i,{once:!0}),"error"!==t&&function(e,t,n){"function"==typeof e.on&&v(e,"error",t,{once:!0})}(e,r)}))},i.EventEmitter=i,i.prototype._events=void 0,i.prototype._eventsCount=0,i.prototype._maxListeners=void 0;var o=10;function a(e){if("function"!=typeof e)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof e)}function c(e){return void 0===e._maxListeners?i.defaultMaxListeners:e._maxListeners}function h(e,t,n,s){var r,i,o,h;if(a(n),void 0===(i=e._events)?(i=e._events=Object.create(null),e._eventsCount=0):(void 0!==i.newListener&&(e.emit("newListener",t,n.listener?n.listener:n),i=e._events),o=i[t]),void 0===o)o=i[t]=n,++e._eventsCount;else if("function"==typeof o?o=i[t]=s?[n,o]:[o,n]:s?o.unshift(n):o.push(n),(r=c(e))>0&&o.length>r&&!o.warned){o.warned=!0;var l=new Error("Possible EventEmitter memory leak detected. "+o.length+" "+String(t)+" listeners added. Use emitter.setMaxListeners() to increase limit");l.name="MaxListenersExceededWarning",l.emitter=e,l.type=t,l.count=o.length,h=l,console&&console.warn&&console.warn(h)}return e}function l(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,0===arguments.length?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function u(e,t,n){var s={fired:!1,wrapFn:void 0,target:e,type:t,listener:n},r=l.bind(s);return r.listener=n,s.wrapFn=r,r}function d(e,t,n){var s=e._events;if(void 0===s)return[];var r=s[t];return void 0===r?[]:"function"==typeof r?n?[r.listener||r]:[r]:n?function(e){for(var t=new Array(e.length),n=0;n<t.length;++n)t[n]=e[n].listener||e[n];return t}(r):p(r,r.length)}function f(e){var t=this._events;if(void 0!==t){var n=t[e];if("function"==typeof n)return 1;if(void 0!==n)return n.length}return 0}function p(e,t){for(var n=new Array(t),s=0;s<t;++s)n[s]=e[s];return n}function v(e,t,n,s){if("function"==typeof e.on)s.once?e.once(t,n):e.on(t,n);else{if("function"!=typeof e.addEventListener)throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof e);e.addEventListener(t,(function r(i){s.once&&e.removeEventListener(t,r),n(i)}))}}Object.defineProperty(i,"defaultMaxListeners",{enumerable:!0,get:function(){return o},set:function(e){if("number"!=typeof e||e<0||r(e))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+e+".");o=e}}),i.init=function(){void 0!==this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},i.prototype.setMaxListeners=function(e){if("number"!=typeof e||e<0||r(e))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=e,this},i.prototype.getMaxListeners=function(){return c(this)},i.prototype.emit=function(e){for(var t=[],n=1;n<arguments.length;n++)t.push(arguments[n]);var r="error"===e,i=this._events;if(void 0!==i)r=r&&void 0===i.error;else if(!r)return!1;if(r){var o;if(t.length>0&&(o=t[0]),o instanceof Error)throw o;var a=new Error("Unhandled error."+(o?" ("+o.message+")":""));throw a.context=o,a}var c=i[e];if(void 0===c)return!1;if("function"==typeof c)s(c,this,t);else{var h=c.length,l=p(c,h);for(n=0;n<h;++n)s(l[n],this,t)}return!0},i.prototype.addListener=function(e,t){return h(this,e,t,!1)},i.prototype.on=i.prototype.addListener,i.prototype.prependListener=function(e,t){return h(this,e,t,!0)},i.prototype.once=function(e,t){return a(t),this.on(e,u(this,e,t)),this},i.prototype.prependOnceListener=function(e,t){return a(t),this.prependListener(e,u(this,e,t)),this},i.prototype.removeListener=function(e,t){var n,s,r,i,o;if(a(t),void 0===(s=this._events))return this;if(void 0===(n=s[e]))return this;if(n===t||n.listener===t)0==--this._eventsCount?this._events=Object.create(null):(delete s[e],s.removeListener&&this.emit("removeListener",e,n.listener||t));else if("function"!=typeof n){for(r=-1,i=n.length-1;i>=0;i--)if(n[i]===t||n[i].listener===t){o=n[i].listener,r=i;break}if(r<0)return this;0===r?n.shift():function(e,t){for(;t+1<e.length;t++)e[t]=e[t+1];e.pop()}(n,r),1===n.length&&(s[e]=n[0]),void 0!==s.removeListener&&this.emit("removeListener",e,o||t)}return this},i.prototype.off=i.prototype.removeListener,i.prototype.removeAllListeners=function(e){var t,n,s;if(void 0===(n=this._events))return this;if(void 0===n.removeListener)return 0===arguments.length?(this._events=Object.create(null),this._eventsCount=0):void 0!==n[e]&&(0==--this._eventsCount?this._events=Object.create(null):delete n[e]),this;if(0===arguments.length){var r,i=Object.keys(n);for(s=0;s<i.length;++s)"removeListener"!==(r=i[s])&&this.removeAllListeners(r);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if("function"==typeof(t=n[e]))this.removeListener(e,t);else if(void 0!==t)for(s=t.length-1;s>=0;s--)this.removeListener(e,t[s]);return this},i.prototype.listeners=function(e){return d(this,e,!0)},i.prototype.rawListeners=function(e){return d(this,e,!1)},i.listenerCount=function(e,t){return"function"==typeof e.listenerCount?e.listenerCount(t):f.call(e,t)},i.prototype.listenerCount=f,i.prototype.eventNames=function(){return this._eventsCount>0?t(this._events):[]}},85:(e,t)=>{t.stringify=function e(t){if(void 0===t)return t;if(t&&Buffer.isBuffer(t))return JSON.stringify(":base64:"+t.toString("base64"));if(t&&t.toJSON&&(t=t.toJSON()),t&&"object"==typeof t){var n="",s=Array.isArray(t);n=s?"[":"{";var r=!0;for(var i in t){var o="function"==typeof t[i]||!s&&void 0===t[i];Object.hasOwnProperty.call(t,i)&&!o&&(r||(n+=","),r=!1,s?null==t[i]?n+="null":n+=e(t[i]):void 0!==t[i]&&(n+=e(i)+":"+e(t[i])))}return n+(s?"]":"}")}return"string"==typeof t?JSON.stringify(/^:/.test(t)?":"+t:t):void 0===t?"null":JSON.stringify(t)},t.parse=function(e){return JSON.parse(e,(function(e,t){return"string"==typeof t?/^:base64:/.test(t)?Buffer.from(t.substring(8),"base64"):/^:/.test(t)?t.substring(1):t:t}))}},958:(e,t,n)=>{"use strict";const s=n(187),r=n(85),i=["sqlite","postgres","mysql","mongo","redis","tiered"];e.exports=class extends s{constructor(e,{emitErrors:t=!0,...s}={}){if(super(),this.opts={namespace:"keyv",serialize:r.stringify,deserialize:r.parse,..."string"==typeof e?{uri:e}:e,...s},!this.opts.store){const e={...this.opts};this.opts.store=(e=>{const t={redis:"@keyv/redis",rediss:"@keyv/redis",mongodb:"@keyv/mongo",mongo:"@keyv/mongo",sqlite:"@keyv/sqlite",postgresql:"@keyv/postgres",postgres:"@keyv/postgres",mysql:"@keyv/mysql",etcd:"@keyv/etcd",offline:"@keyv/offline",tiered:"@keyv/tiered"};if(e.adapter||e.uri){const s=e.adapter||/^[^:+]*/.exec(e.uri)[0];return new(n(196)(t[s]))(e)}return new Map})(e)}if(this.opts.compression){const e=this.opts.compression;this.opts.serialize=e.serialize.bind(e),this.opts.deserialize=e.deserialize.bind(e)}"function"==typeof this.opts.store.on&&t&&this.opts.store.on("error",(e=>this.emit("error",e))),this.opts.store.namespace=this.opts.namespace;const i=e=>async function*(){for await(const[t,n]of"function"==typeof e?e(this.opts.store.namespace):e){const e=this.opts.deserialize(n);this.opts.store.namespace&&!t.includes(this.opts.store.namespace)||("number"==typeof e.expires&&Date.now()>e.expires?this.delete(t):yield[this._getKeyUnprefix(t),e.value])}};"function"==typeof this.opts.store[Symbol.iterator]&&this.opts.store instanceof Map?this.iterator=i(this.opts.store):"function"==typeof this.opts.store.iterator&&this.opts.store.opts&&this._checkIterableAdaptar()&&(this.iterator=i(this.opts.store.iterator.bind(this.opts.store)))}_checkIterableAdaptar(){return i.includes(this.opts.store.opts.dialect)||i.findIndex((e=>this.opts.store.opts.url.includes(e)))>=0}_getKeyPrefix(e){return`${this.opts.namespace}:${e}`}_getKeyPrefixArray(e){return e.map((e=>`${this.opts.namespace}:${e}`))}_getKeyUnprefix(e){return e.split(":").splice(1).join(":")}get(e,t){const{store:n}=this.opts,s=Array.isArray(e),r=s?this._getKeyPrefixArray(e):this._getKeyPrefix(e);if(s&&void 0===n.getMany){const e=[];for(const s of r)e.push(Promise.resolve().then((()=>n.get(s))).then((e=>"string"==typeof e||this.opts.compression?this.opts.deserialize(e):e)).then((e=>{if(null!=e)return"number"==typeof e.expires&&Date.now()>e.expires?this.delete(s).then((()=>{})):t&&t.raw?e:e.value})));return Promise.allSettled(e).then((e=>{const t=[];for(const n of e)t.push(n.value);return t}))}return Promise.resolve().then((()=>s?n.getMany(r):n.get(r))).then((e=>"string"==typeof e||this.opts.compression?this.opts.deserialize(e):e)).then((n=>{if(null!=n){if(s){const s=[];for(let r of n)"string"==typeof r&&(r=this.opts.deserialize(r)),null!=r?"number"==typeof r.expires&&Date.now()>r.expires?(this.delete(e).then((()=>{})),s.push(void 0)):s.push(t&&t.raw?r:r.value):s.push(void 0);return s}return"number"==typeof n.expires&&Date.now()>n.expires?this.delete(e).then((()=>{})):t&&t.raw?n:n.value}}))}set(e,t,n){const s=this._getKeyPrefix(e);void 0===n&&(n=this.opts.ttl),0===n&&(n=void 0);const{store:r}=this.opts;return Promise.resolve().then((()=>{const e="number"==typeof n?Date.now()+n:null;return"symbol"==typeof t&&this.emit("error","symbol cannot be serialized"),t={value:t,expires:e},this.opts.serialize(t)})).then((e=>r.set(s,e,n))).then((()=>!0))}delete(e){const{store:t}=this.opts;if(Array.isArray(e)){const n=this._getKeyPrefixArray(e);if(void 0===t.deleteMany){const e=[];for(const s of n)e.push(t.delete(s));return Promise.allSettled(e).then((e=>e.every((e=>!0===e.value))))}return Promise.resolve().then((()=>t.deleteMany(n)))}const n=this._getKeyPrefix(e);return Promise.resolve().then((()=>t.delete(n)))}clear(){const{store:e}=this.opts;return Promise.resolve().then((()=>e.clear()))}has(e){const t=this._getKeyPrefix(e),{store:n}=this.opts;return Promise.resolve().then((async()=>"function"==typeof n.has?n.has(t):void 0!==await n.get(t)))}disconnect(){const{store:e}=this.opts;if("function"==typeof e.disconnect)return e.disconnect()}}},196:e=>{function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id=196,e.exports=t}},t={};function n(s){var r=t[s];if(void 0!==r)return r.exports;var i=t[s]={exports:{}};return e[s](i,i.exports,n),i.exports}n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";n(958);class e extends Error{constructor(e){super(e),this.name="TimeoutError"}}class t extends Error{constructor(e){super(),this.name="AbortError",this.message=e}}const s=e=>void 0===globalThis.DOMException?new t(e):new DOMException(e),r=e=>{const t=void 0===e.reason?s("This operation was aborted."):e.reason;return t instanceof Error?t:s(t)};class i extends Map{constructor(e={}){if(super(),!(e.maxSize&&e.maxSize>0))throw new TypeError("`maxSize` must be a number greater than 0");if("number"==typeof e.maxAge&&0===e.maxAge)throw new TypeError("`maxAge` must be a number greater than 0");this.maxSize=e.maxSize,this.maxAge=e.maxAge||Number.POSITIVE_INFINITY,this.onEviction=e.onEviction,this.cache=new Map,this.oldCache=new Map,this._size=0}_emitEvictions(e){if("function"==typeof this.onEviction)for(const[t,n]of e)this.onEviction(t,n.value)}_deleteIfExpired(e,t){return"number"==typeof t.expiry&&t.expiry<=Date.now()&&("function"==typeof this.onEviction&&this.onEviction(e,t.value),this.delete(e))}_getOrDeleteIfExpired(e,t){if(!1===this._deleteIfExpired(e,t))return t.value}_getItemValue(e,t){return t.expiry?this._getOrDeleteIfExpired(e,t):t.value}_peek(e,t){const n=t.get(e);return this._getItemValue(e,n)}_set(e,t){this.cache.set(e,t),this._size++,this._size>=this.maxSize&&(this._size=0,this._emitEvictions(this.oldCache),this.oldCache=this.cache,this.cache=new Map)}_moveToRecent(e,t){this.oldCache.delete(e),this._set(e,t)}*_entriesAscending(){for(const e of this.oldCache){const[t,n]=e;this.cache.has(t)||!1===this._deleteIfExpired(t,n)&&(yield e)}for(const e of this.cache){const[t,n]=e;!1===this._deleteIfExpired(t,n)&&(yield e)}}get(e){if(this.cache.has(e)){const t=this.cache.get(e);return this._getItemValue(e,t)}if(this.oldCache.has(e)){const t=this.oldCache.get(e);if(!1===this._deleteIfExpired(e,t))return this._moveToRecent(e,t),t.value}}set(e,t,{maxAge:n=this.maxAge}={}){const s="number"==typeof n&&n!==Number.POSITIVE_INFINITY?Date.now()+n:void 0;this.cache.has(e)?this.cache.set(e,{value:t,expiry:s}):this._set(e,{value:t,expiry:s})}has(e){return this.cache.has(e)?!this._deleteIfExpired(e,this.cache.get(e)):!!this.oldCache.has(e)&&!this._deleteIfExpired(e,this.oldCache.get(e))}peek(e){return this.cache.has(e)?this._peek(e,this.cache):this.oldCache.has(e)?this._peek(e,this.oldCache):void 0}delete(e){const t=this.cache.delete(e);return t&&this._size--,this.oldCache.delete(e)||t}clear(){this.cache.clear(),this.oldCache.clear(),this._size=0}resize(e){if(!(e&&e>0))throw new TypeError("`maxSize` must be a number greater than 0");const t=[...this._entriesAscending()],n=t.length-e;n<0?(this.cache=new Map(t),this.oldCache=new Map,this._size=t.length):(n>0&&this._emitEvictions(t.slice(0,n)),this.oldCache=new Map(t.slice(n)),this.cache=new Map,this._size=0),this.maxSize=e}*keys(){for(const[e]of this)yield e}*values(){for(const[,e]of this)yield e}*[Symbol.iterator](){for(const e of this.cache){const[t,n]=e;!1===this._deleteIfExpired(t,n)&&(yield[t,n.value])}for(const e of this.oldCache){const[t,n]=e;this.cache.has(t)||!1===this._deleteIfExpired(t,n)&&(yield[t,n.value])}}*entriesDescending(){let e=[...this.cache];for(let t=e.length-1;t>=0;--t){const n=e[t],[s,r]=n;!1===this._deleteIfExpired(s,r)&&(yield[s,r.value])}this.oldCache;for(let t=e.length-1;t>=0;--t){const n=e[t],[s,r]=n;this.cache.has(s)||!1===this._deleteIfExpired(s,r)&&(yield[s,r.value])}}*entriesAscending(){for(const[e,t]of this._entriesAscending())yield[e,t.value]}get size(){if(!this._size)return this.oldCache.size;for(const e of this.oldCache.keys())this.cache.has(e);return Math.min(this._size+0,this.maxSize)}entries(){return this.entriesAscending()}forEach(e,t=this){for(const[n,s]of this.entriesAscending())e.call(t,s,n,this)}get[Symbol.toStringTag](){return JSON.stringify([...this.entriesAscending()])}}const o=[239,187,191],a={randomUUID:"undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};let c;const h=new Uint8Array(16);function l(){if(!c&&(c="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!c))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return c(h)}const u=[];for(let e=0;e<256;++e)u.push((e+256).toString(16).slice(1));const d=function(e,t,n){if(a.randomUUID&&!t&&!e)return a.randomUUID();const s=(e=e||{}).random||(e.rng||l)();if(s[6]=15&s[6]|64,s[8]=63&s[8]|128,t){n=n||0;for(let e=0;e<16;++e)t[n+e]=s[e];return t}return function(e,t=0){return(u[e[t+0]]+u[e[t+1]]+u[e[t+2]]+u[e[t+3]]+"-"+u[e[t+4]]+u[e[t+5]]+"-"+u[e[t+6]]+u[e[t+7]]+"-"+u[e[t+8]]+u[e[t+9]]+"-"+u[e[t+10]]+u[e[t+11]]+u[e[t+12]]+u[e[t+13]]+u[e[t+14]]+u[e[t+15]]).toLowerCase()}(s)};var f,p=class extends Error{};f||(f={});var v=globalThis.fetch;var y=/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;function m(e){return e&&y.test(e)}let g=getSavedTodos();const x={searchText:"",hideCompleted:!1};renderTodos(g,x),document.querySelector("#search-text").addEventListener("input",(function(e){x.searchText=e.target.value,renderTodos(g,x)})),document.querySelector("#new-todo").addEventListener("submit",(function(e){const t=e.target.elements.text.value.trim();e.preventDefault(),t&&(g.push({id:uuid.v4(),text:t,completed:!1}),saveTodos(g),renderTodos(g,x),e.target.elements.text.value="")})),document.querySelector("#hide-completed").addEventListener("change",(function(e){x.hideCompleted=e.target.checked,renderTodos(g,x)}));const _=g.map((e=>e.text+","));document.getElementById("get-advice-btn").addEventListener("click",(async function(){console.log(_.join(", "));const t=new class{constructor(e){const{accessToken:t,apiReverseProxyUrl:n="https://bypass.duti.tech/api/conversation",model:s="text-davinci-002-render-sha",debug:r=!1,headers:i,fetch:o=v}=e;if(this._accessToken=t,this._apiReverseProxyUrl=n,this._debug=!!r,this._model=s,this._fetch=o,this._headers=i,!this._accessToken)throw new Error("ChatGPT invalid accessToken");if(!this._fetch)throw new Error("Invalid environment; fetch is not defined");if("function"!=typeof this._fetch)throw new Error('Invalid "fetch" is not a function')}get accessToken(){return this._accessToken}set accessToken(e){this._accessToken=e}async sendMessage(t,n={}){if(!!n.conversationId!=!!n.parentMessageId)throw new Error("ChatGPTUnofficialProxyAPI.sendMessage: conversationId and parentMessageId must both be set or both be undefined");if(n.conversationId&&!m(n.conversationId))throw new Error("ChatGPTUnofficialProxyAPI.sendMessage: conversationId is not a valid v4 UUID");if(n.parentMessageId&&!m(n.parentMessageId))throw new Error("ChatGPTUnofficialProxyAPI.sendMessage: parentMessageId is not a valid v4 UUID");if(n.messageId&&!m(n.messageId))throw new Error("ChatGPTUnofficialProxyAPI.sendMessage: messageId is not a valid v4 UUID");const{conversationId:s,parentMessageId:i=d(),messageId:a=d(),action:c="next",timeoutMs:h,onProgress:l}=n;let{abortSignal:u}=n,f=null;h&&!u&&(f=new AbortController,u=f.signal);const y={action:c,messages:[{id:a,role:"user",content:{content_type:"text",parts:[t]}}],model:this._model,parent_message_id:i};s&&(y.conversation_id=s);const g={role:"assistant",id:d(),parentMessageId:a,conversationId:s,text:""},x=new Promise(((e,t)=>{const n=this._apiReverseProxyUrl,s={...this._headers,Authorization:`Bearer ${this._accessToken}`,Accept:"text/event-stream","Content-Type":"application/json"};this._debug&&console.log("POST",n,{body:y,headers:s}),async function(e,t,n=v){const{onMessage:s,...r}=t,i=await n(e,r);if(!i.ok){let e;try{e=await i.text()}catch(t){e=i.statusText}const t=`ChatGPT error ${i.status}: ${e}`,n=new p(t,{cause:i});throw n.statusCode=i.status,n.statusText=i.statusText,n}const a=function(e){let t,n,s,r,i,a,c;return h(),{feed:function(e){n=n?n+e:e,t&&function(e){return o.every(((t,n)=>e.charCodeAt(n)===t))}(n)&&(n=n.slice(o.length)),t=!1;const i=n.length;let a=0,c=!1;for(;a<i;){c&&("\n"===n[a]&&++a,c=!1);let e,t=-1,o=r;for(let r=s;t<0&&r<i;++r)e=n[r],":"===e&&o<0?o=r-a:"\r"===e?(c=!0,t=r-a):"\n"===e&&(t=r-a);if(t<0){s=i-a,r=o;break}s=0,r=-1,l(n,a,o,t),a+=t+1}a===i?n="":a>0&&(n=n.slice(a))},reset:h};function h(){t=!0,n="",s=0,r=-1,i=void 0,a=void 0,c=""}function l(t,n,s,r){if(0===r)return c.length>0&&(e({type:"event",id:i,event:a||void 0,data:c.slice(0,-1)}),c="",i=void 0),void(a=void 0);const o=s<0,h=t.slice(n,n+(o?r:s));let l=0;l=o?r:" "===t[n+s+1]?s+2:s+1;const u=n+l,d=r-l,f=t.slice(u,u+d).toString();if("data"===h)c+=f?"".concat(f,"\n"):"\n";else if("event"===h)a=f;else if("id"!==h||f.includes("\0")){if("retry"===h){const t=parseInt(f,10);Number.isNaN(t)||e({type:"reconnect-interval",value:t})}}else i=f}}((e=>{"event"===e.type&&s(e.data)}));if(i.body.getReader)for await(const e of async function*(e){const t=e.getReader();try{for(;;){const{done:e,value:n}=await t.read();if(e)return;yield n}}finally{t.releaseLock()}}(i.body)){const t=(new TextDecoder).decode(e);a.feed(t)}else{const e=i.body;if(!e.on||!e.read)throw new p('unsupported "fetch" implementation');e.on("readable",(()=>{let t;for(;null!==(t=e.read());)a.feed(t.toString())}))}}(n,{method:"POST",headers:s,body:JSON.stringify(y),signal:u,onMessage:t=>{var n,s,r;if("[DONE]"===t)return e(g);try{const e=JSON.parse(t);e.conversation_id&&(g.conversationId=e.conversation_id),(null==(n=e.message)?void 0:n.id)&&(g.id=e.message.id);const i=e.message;if(i){let e=null==(r=null==(s=null==i?void 0:i.content)?void 0:s.parts)?void 0:r[0];e&&(g.text=e,l&&l(g))}}catch(e){}}},this._fetch).catch((n=>{const s=n.toString().toLowerCase();return!g.text||"error: typeerror: terminated"!==s&&"typeerror: terminated"!==s?t(n):e(g)}))}));return h?(f&&(x.cancel=()=>{f.abort()}),function(t,n){const{milliseconds:s,fallback:i,message:o,customTimers:a={setTimeout,clearTimeout}}=n;let c;const h=new Promise(((h,l)=>{if("number"!=typeof s||1!==Math.sign(s))throw new TypeError(`Expected \`milliseconds\` to be a positive number, got \`${s}\``);if(s===Number.POSITIVE_INFINITY)return void h(t);if(n.signal){const{signal:e}=n;e.aborted&&l(r(e)),e.addEventListener("abort",(()=>{l(r(e))}))}const u=new e;c=a.setTimeout.call(void 0,(()=>{if(i)try{h(i())}catch(e){l(e)}else"function"==typeof t.cancel&&t.cancel(),!1===o?h():o instanceof Error?l(o):(u.message=o??`Promise timed out after ${s} milliseconds`,l(u))}),s),(async()=>{try{h(await t)}catch(e){l(e)}finally{a.clearTimeout.call(void 0,c)}})()}));return h.clear=()=>{a.clearTimeout.call(void 0,c),c=void 0},h}(x,{milliseconds:h,message:"ChatGPT timed out waiting for response"})):x}}({accessToken:""}),n=await t.sendMessage("Hello World!"),s=document.createElement("p");s.innerHTML=`Feedback: ${n.text}`,document.body.appendChild(s)}))})()})();