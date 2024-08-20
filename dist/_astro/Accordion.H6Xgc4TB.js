import{j as r}from"./jsx-runtime.ByfLSSXT.js";import{r as m,R as p}from"./index.CVpbhN_F.js";import{b as J,f as B,g as X,P,c as ee,h as ye,i as Ne,a as Pe,e as Oe,C as Ie}from"./chevron-down.CEaaKcFC.js";import{a as ae,u as te,b as V}from"./createLucideIcon.DEUbsldL.js";import{B as I}from"./button.BxUP7X0j.js";import"./index.Byd5IL8A.js";/**
 * @license lucide-react v0.416.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Re=ae("HandHeart",[["path",{d:"M11 14h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 16",key:"1ifwr1"}],["path",{d:"m7 20 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9",key:"17abbs"}],["path",{d:"m2 15 6 6",key:"10dquu"}],["path",{d:"M19.5 8.5c.7-.7 1.5-1.6 1.5-2.7A2.73 2.73 0 0 0 16 4a2.78 2.78 0 0 0-5 1.8c0 1.2.8 2 1.5 2.8L16 12Z",key:"1h3036"}]]);/**
 * @license lucide-react v0.416.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _e=ae("HeartHandshake",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}],["path",{d:"M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66",key:"4oyue0"}],["path",{d:"m18 15-2-2",key:"60u0ii"}],["path",{d:"m15 18-2-2",key:"6p76be"}]]);var q="Collapsible",[Ee,oe]=J(q),[Se,$]=Ee(q),re=m.forwardRef((e,t)=>{const{__scopeCollapsible:a,open:o,defaultOpen:n,disabled:i,onOpenChange:s,...c}=e,[l=!1,u]=B({prop:o,defaultProp:n,onChange:s});return r.jsx(Se,{scope:a,disabled:i,contentId:X(),open:l,onOpenToggle:m.useCallback(()=>u(f=>!f),[u]),children:r.jsx(P.div,{"data-state":G(l),"data-disabled":i?"":void 0,...c,ref:t})})});re.displayName=q;var ne="CollapsibleTrigger",ie=m.forwardRef((e,t)=>{const{__scopeCollapsible:a,...o}=e,n=$(ne,a);return r.jsx(P.button,{type:"button","aria-controls":n.contentId,"aria-expanded":n.open||!1,"data-state":G(n.open),"data-disabled":n.disabled?"":void 0,disabled:n.disabled,...o,ref:t,onClick:ee(e.onClick,n.onOpenToggle)})});ie.displayName=ne;var F="CollapsibleContent",se=m.forwardRef((e,t)=>{const{forceMount:a,...o}=e,n=$(F,e.__scopeCollapsible);return r.jsx(ye,{present:a||n.open,children:({present:i})=>r.jsx(Me,{...o,ref:t,present:i})})});se.displayName=F;var Me=m.forwardRef((e,t)=>{const{__scopeCollapsible:a,present:o,children:n,...i}=e,s=$(F,a),[c,l]=m.useState(o),u=m.useRef(null),f=te(t,u),h=m.useRef(0),j=h.current,x=m.useRef(0),O=x.current,b=s.open||c,g=m.useRef(b),C=m.useRef();return m.useEffect(()=>{const d=requestAnimationFrame(()=>g.current=!1);return()=>cancelAnimationFrame(d)},[]),Ne(()=>{const d=u.current;if(d){C.current=C.current||{transitionDuration:d.style.transitionDuration,animationName:d.style.animationName},d.style.transitionDuration="0s",d.style.animationName="none";const w=d.getBoundingClientRect();h.current=w.height,x.current=w.width,g.current||(d.style.transitionDuration=C.current.transitionDuration,d.style.animationName=C.current.animationName),l(o)}},[s.open,o]),r.jsx(P.div,{"data-state":G(s.open),"data-disabled":s.disabled?"":void 0,id:s.contentId,hidden:!b,...i,ref:f,style:{"--radix-collapsible-content-height":j?`${j}px`:void 0,"--radix-collapsible-content-width":O?`${O}px`:void 0,...e.style},children:b&&n})});function G(e){return e?"open":"closed"}var ke=re,De=ie,ze=se,v="Accordion",Te=["Home","End","ArrowDown","ArrowUp","ArrowLeft","ArrowRight"],[K,Le,He]=Pe(v),[M,pa]=J(v,[He,oe]),W=oe(),ce=p.forwardRef((e,t)=>{const{type:a,...o}=e,n=o,i=o;return r.jsx(K.Provider,{scope:e.__scopeAccordion,children:a==="multiple"?r.jsx($e,{...i,ref:t}):r.jsx(qe,{...n,ref:t})})});ce.displayName=v;var[le,Be]=M(v),[de,Ve]=M(v,{collapsible:!1}),qe=p.forwardRef((e,t)=>{const{value:a,defaultValue:o,onValueChange:n=()=>{},collapsible:i=!1,...s}=e,[c,l]=B({prop:a,defaultProp:o,onChange:n});return r.jsx(le,{scope:e.__scopeAccordion,value:c?[c]:[],onItemOpen:l,onItemClose:p.useCallback(()=>i&&l(""),[i,l]),children:r.jsx(de,{scope:e.__scopeAccordion,collapsible:i,children:r.jsx(pe,{...s,ref:t})})})}),$e=p.forwardRef((e,t)=>{const{value:a,defaultValue:o,onValueChange:n=()=>{},...i}=e,[s=[],c]=B({prop:a,defaultProp:o,onChange:n}),l=p.useCallback(f=>c((h=[])=>[...h,f]),[c]),u=p.useCallback(f=>c((h=[])=>h.filter(j=>j!==f)),[c]);return r.jsx(le,{scope:e.__scopeAccordion,value:s,onItemOpen:l,onItemClose:u,children:r.jsx(de,{scope:e.__scopeAccordion,collapsible:!0,children:r.jsx(pe,{...i,ref:t})})})}),[Fe,k]=M(v),pe=p.forwardRef((e,t)=>{const{__scopeAccordion:a,disabled:o,dir:n,orientation:i="vertical",...s}=e,c=p.useRef(null),l=te(c,t),u=Le(a),h=Oe(n)==="ltr",j=ee(e.onKeyDown,x=>{if(!Te.includes(x.key))return;const O=x.target,b=u().filter(L=>!L.ref.current?.disabled),g=b.findIndex(L=>L.ref.current===O),C=b.length;if(g===-1)return;x.preventDefault();let d=g;const w=0,D=C-1,z=()=>{d=g+1,d>D&&(d=w)},T=()=>{d=g-1,d<w&&(d=D)};switch(x.key){case"Home":d=w;break;case"End":d=D;break;case"ArrowRight":i==="horizontal"&&(h?z():T());break;case"ArrowDown":i==="vertical"&&z();break;case"ArrowLeft":i==="horizontal"&&(h?T():z());break;case"ArrowUp":i==="vertical"&&T();break}const Ae=d%C;b[Ae].ref.current?.focus()});return r.jsx(Fe,{scope:a,disabled:o,direction:n,orientation:i,children:r.jsx(K.Slot,{scope:a,children:r.jsx(P.div,{...s,"data-orientation":i,ref:l,onKeyDown:o?void 0:j})})})}),_="AccordionItem",[Ge,Q]=M(_),me=p.forwardRef((e,t)=>{const{__scopeAccordion:a,value:o,...n}=e,i=k(_,a),s=Be(_,a),c=W(a),l=X(),u=o&&s.value.includes(o)||!1,f=i.disabled||e.disabled;return r.jsx(Ge,{scope:a,open:u,disabled:f,triggerId:l,children:r.jsx(ke,{"data-orientation":i.orientation,"data-state":be(u),...c,...n,ref:t,disabled:f,open:u,onOpenChange:h=>{h?s.onItemOpen(o):s.onItemClose(o)}})})});me.displayName=_;var ue="AccordionHeader",fe=p.forwardRef((e,t)=>{const{__scopeAccordion:a,...o}=e,n=k(v,a),i=Q(ue,a);return r.jsx(P.h3,{"data-orientation":n.orientation,"data-state":be(i.open),"data-disabled":i.disabled?"":void 0,...o,ref:t})});fe.displayName=ue;var H="AccordionTrigger",he=p.forwardRef((e,t)=>{const{__scopeAccordion:a,...o}=e,n=k(v,a),i=Q(H,a),s=Ve(H,a),c=W(a);return r.jsx(K.ItemSlot,{scope:a,children:r.jsx(De,{"aria-disabled":i.open&&!s.collapsible||void 0,"data-orientation":n.orientation,id:i.triggerId,...c,...o,ref:t})})});he.displayName=H;var ve="AccordionContent",xe=p.forwardRef((e,t)=>{const{__scopeAccordion:a,...o}=e,n=k(v,a),i=Q(ve,a),s=W(a);return r.jsx(ze,{role:"region","aria-labelledby":i.triggerId,"data-orientation":n.orientation,...s,...o,ref:t,style:{"--radix-accordion-content-height":"var(--radix-collapsible-content-height)","--radix-accordion-content-width":"var(--radix-collapsible-content-width)",...e.style}})});xe.displayName=ve;function be(e){return e?"open":"closed"}var Ke=ce,We=me,Qe=fe,ge=he,Ce=xe;const Ue=Ke,A=m.forwardRef(({className:e,...t},a)=>r.jsx(We,{ref:a,className:V("border-b",e),...t}));A.displayName="AccordionItem";const y=m.forwardRef(({className:e,children:t,...a},o)=>r.jsx(Qe,{className:"flex",children:r.jsxs(ge,{ref:o,className:V("flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",e),...a,children:[t,r.jsx(Ie,{className:"h-4 w-4 shrink-0 transition-transform duration-200"})]})}));y.displayName=ge.displayName;const N=m.forwardRef(({className:e,children:t,...a},o)=>r.jsx(Ce,{ref:o,className:"overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",...a,children:r.jsx("div",{className:V("pb-4 pt-0",e),children:t})}));N.displayName=Ce.displayName;var je={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Z=p.createContext&&p.createContext(je),Ze=["attr","size","title"];function Ye(e,t){if(e==null)return{};var a=Je(e,t),o,n;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],!(t.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}function Je(e,t){if(e==null)return{};var a={};for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){if(t.indexOf(o)>=0)continue;a[o]=e[o]}return a}function E(){return E=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o])}return e},E.apply(this,arguments)}function Y(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),a.push.apply(a,o)}return a}function S(e){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?arguments[t]:{};t%2?Y(Object(a),!0).forEach(function(o){Xe(e,o,a[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Y(Object(a)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(a,o))})}return e}function Xe(e,t,a){return t=ea(t),t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function ea(e){var t=aa(e,"string");return typeof t=="symbol"?t:t+""}function aa(e,t){if(typeof e!="object"||!e)return e;var a=e[Symbol.toPrimitive];if(a!==void 0){var o=a.call(e,t||"default");if(typeof o!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function we(e){return e&&e.map((t,a)=>p.createElement(t.tag,S({key:a},t.attr),we(t.child)))}function U(e){return t=>p.createElement(ta,E({attr:S({},e.attr)},t),we(e.child))}function ta(e){var t=a=>{var{attr:o,size:n,title:i}=e,s=Ye(e,Ze),c=n||a.size||"1em",l;return a.className&&(l=a.className),e.className&&(l=(l?l+" ":"")+e.className),p.createElement("svg",E({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},a.attr,o,s,{className:l,style:S(S({color:e.color||a.color},a.style),e.style),height:c,width:c,xmlns:"http://www.w3.org/2000/svg"}),i&&p.createElement("title",null,i),e.children)};return Z!==void 0?p.createElement(Z.Consumer,null,a=>t(a)):t(je)}function oa(e){return U({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M573.19 402.67l-139.79-320C428.43 71.29 417.6 64 405.68 64h-97.59l2.45 23.16c.5 4.72-3.21 8.84-7.96 8.84h-29.16c-4.75 0-8.46-4.12-7.96-8.84L267.91 64h-97.59c-11.93 0-22.76 7.29-27.73 18.67L2.8 402.67C-6.45 423.86 8.31 448 30.54 448h196.84l10.31-97.68c.86-8.14 7.72-14.32 15.91-14.32h68.8c8.19 0 15.05 6.18 15.91 14.32L348.62 448h196.84c22.23 0 36.99-24.14 27.73-45.33zM260.4 135.16a8 8 0 0 1 7.96-7.16h39.29c4.09 0 7.53 3.09 7.96 7.16l4.6 43.58c.75 7.09-4.81 13.26-11.93 13.26h-40.54c-7.13 0-12.68-6.17-11.93-13.26l4.59-43.58zM315.64 304h-55.29c-9.5 0-16.91-8.23-15.91-17.68l5.07-48c.86-8.14 7.72-14.32 15.91-14.32h45.15c8.19 0 15.05 6.18 15.91 14.32l5.07 48c1 9.45-6.41 17.68-15.91 17.68z"},child:[]}]})(e)}function ra(e){return U({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M269.4 2.9C265.2 1 260.7 0 256 0s-9.2 1-13.4 2.9L54.3 82.8c-22 9.3-38.4 31-38.3 57.2c.5 99.2 41.3 280.7 213.6 363.2c16.7 8 36.1 8 52.8 0C454.7 420.7 495.5 239.2 496 140c.1-26.2-16.3-47.9-38.3-57.2L269.4 2.9zM160.9 286.2c4.8 1.2 9.9 1.8 15.1 1.8c35.3 0 64-28.7 64-64V160h44.2c12.1 0 23.2 6.8 28.6 17.7L320 192h64c8.8 0 16 7.2 16 16v32c0 44.2-35.8 80-80 80H272v50.7c0 7.3-5.9 13.3-13.3 13.3c-1.8 0-3.6-.4-5.2-1.1l-98.7-42.3c-6.6-2.8-10.8-9.3-10.8-16.4c0-2.8 .6-5.5 1.9-8l15-30zM160 160h40 8v32 32c0 17.7-14.3 32-32 32s-32-14.3-32-32V176c0-8.8 7.2-16 16-16zm128 48a16 16 0 1 0 -32 0 16 16 0 1 0 32 0z"},child:[]}]})(e)}function R(e){return U({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M255.8 218c-21 0-38 17-38 38s17 38 38 38 38-17 38-38-17-38-38-38zM102 218c-21 0-38 17-38 38s17 38 38 38 38-17 38-38-17-38-38-38zM410 218c-21 0-38 17-38 38s17 38 38 38 38-17 38-38-17-38-38-38z"},child:[]}]})(e)}function ma(){return r.jsxs(Ue,{type:"single",collapsible:!0,children:[r.jsxs(A,{value:"item-1",children:[r.jsx(y,{children:r.jsxs("div",{className:"flex flex-row gap-2 items-center",children:[r.jsx(ra,{width:"60",height:"60",className:"block w-24 scale-150"}),"Criação de Centros de Apoio e Cuidados para Animais de Rua e de Famílias de Baixa Renda"]})}),r.jsxs(N,{children:["A proposta para a criação de Centros de Apoio e Cuidados para Animais de Rua e de Famílias de Baixa Renda visa atender às necessidades de saúde e bem-estar animal, além de auxiliar famílias de baixa renda a cuidar de seus pets. Os centros oferecerão pontos de alimentação e água para animais de rua, atendimento veterinário gratuito, exames laboratoriais, tratamentos de saúde, programas de castração, e apoio à adoção responsável. A iniciativa também incluirá campanhas educativas para conscientização sobre maus-tratos e a criação de um canal de denúncia. Através de parcerias com ONGs e empresas, os centros serão sustentáveis e eficientes, promovendo uma cidade mais justa e solidária com os direitos dos animais.",r.jsx("a",{href:"/propostas/animaisderua",children:r.jsxs(I,{variant:"outline",className:"flex flex-row justify-center items-center bg-trasnparent m-2",children:[r.jsx(R,{className:"mr-2 h-6 w-6 text-white"}),"Saiba mais"]})})]})]}),r.jsxs(A,{value:"item-2",children:[r.jsx(y,{children:r.jsxs("div",{className:"flex flex-row gap-2 items-center",children:[r.jsx(oa,{width:"24",height:"24",className:"block w-24"}),"Proposta para Pavimentação de Vias e Melhoria do Saneamento Básico em Comunidades"]})}),r.jsxs(N,{children:["A proposta para Pavimentação de Vias e Melhoria do Saneamento Básico em Comunidades busca enfrentar problemas de infraestrutura que afetam a saúde, mobilidade e segurança dos moradores. O projeto inclui o mapeamento das áreas mais necessitadas de pavimentação, execução de obras com materiais de alta qualidade, e implementação de sistemas de saneamento, como redes de esgoto e estações de tratamento. O objetivo é melhorar a qualidade de vida, reduzir doenças e acidentes, valorizar propriedades e preservar o meio ambiente. O financiamento será público, com possíveis parcerias, e a gestão será transparente e participativa, promovendo desenvolvimento social e econômico nas comunidades beneficiadas.",r.jsx("a",{href:"/propostas/pavimentacao",children:r.jsxs(I,{variant:"outline",className:"flex flex-row justify-center items-center bg-trasnparent m-2",children:[r.jsx(R,{className:"mr-2 h-6 w-6 text-white"}),"Saiba mais"]})})]})]}),r.jsxs(A,{value:"item-3",children:[r.jsx(y,{children:r.jsxs("div",{className:"flex flex-row gap-2 items-center",children:[r.jsx(Re,{width:"24",height:"24",className:"block w-24"}),"Proposta para a Criação de um Centro de Apoio Integral para Pessoas de Baixa Renda"]})}),r.jsxs(N,{children:["A proposta para a criação de um Centro de Apoio Integral para Pessoas de Baixa Renda visa fornecer serviços essenciais como assistência jurídica, suporte psicológico e orientação vocacional, com um enfoque especial em jovens. O centro, localizado em uma área central e acessível, oferecerá consultas jurídicas gratuitas, atendimento psicológico, educação e capacitação profissional. Contará com uma equipe multidisciplinar qualificada e será financiado por verbas públicas e parcerias. O objetivo é garantir acesso igualitário a serviços fundamentais, promover a inclusão social e fortalecer a comunidade, oferecendo às famílias de baixa renda as ferramentas necessárias para uma vida digna e segura.",r.jsx("a",{href:"/propostas/centrodeapoio",children:r.jsxs(I,{variant:"outline",className:"flex flex-row justify-center items-center bg-trasnparent m-2",children:[r.jsx(R,{className:"mr-2 h-6 w-6 text-white"}),"Saiba mais"]})})]})]}),r.jsxs(A,{value:"item-4",children:[r.jsx(y,{children:r.jsxs("div",{className:"flex flex-row gap-2 items-center",children:[r.jsx(_e,{width:"24",height:"24",className:"block w-24"}),"Proposta para Implantação de uma Clínica de Reabilitação para Dependentes Químicos e Alcoólicos Custeada pelo Governo"]})}),r.jsxs(N,{children:["A proposta para a implantação de uma Clínica de Reabilitação para Dependentes Químicos e Alcoólicos, totalmente custeada pelo governo, visa combater a dependência de drogas e álcool, oferecendo tratamento integral e suporte necessário para recuperação. A clínica será estrategicamente localizada e equipada com instalações modernas. Oferecerá desintoxicação segura, terapia individual e em grupo, programas de educação e capacitação para reintegração social, e suporte contínuo para os pacientes e suas famílias. Com uma equipe multidisciplinar qualificada, a clínica busca reduzir a criminalidade, melhorar a saúde pública e fortalecer a comunidade.",r.jsx("a",{href:"/propostas/clinicadereabilitacao",children:r.jsxs(I,{variant:"outline",className:"flex flex-row justify-center items-center bg-trasnparent m-2",children:[r.jsx(R,{className:"mr-2 h-6 w-6 text-white"}),"Saiba mais"]})})]})]})]})}export{ma as AccordionPropostas};
