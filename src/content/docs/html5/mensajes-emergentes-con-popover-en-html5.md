---
title: Mensajes emergentes con popover en HTML5
description: "Uso del atributo popover para poder generar mensajes emergentes con popover en HTML5 en los que se pueda incluir cualquier contenido."
lastUpdated: 2024-01-30
author: victor_cuervo
---

Los que hemos trabajado en el desarrollo web desde sus principios hemos vivido lo complejo que era gestionar una ventana emergente en una web. En este artículo vamos a ver lo sencillo que es crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/) siguiendo un estándar.


### Un poco de historia de los mensajes emergentes


Y es que antes de que se estandarizase, y pudiésemos crear [código en HTML5](https://lineadecodigo.com/categoria/html5/) para poder crear mensajes emergentes, hemos pasado por muchas épocas y alternativas diferentes.


En primer lugar teníamos las **ventanas emergentes o pop-ups** que se abrían mediante JavaScript. Y se podían mandar mensajes mediante funciones como [`alert()`](https://www.w3api.com/DOM/Window/alert/) o [`prompt()`](https://www.w3api.com/DOM/Window/prompt/). Incluso se lanzaban ventanas emergente que se ponían en primer plano y que acababan bloqueando la ventana padre. Estas ventanas eran muy intrusivas, no cumplían ningún estándar de accesibilidad y acabaron siendo bloqueadas por los navegadores.


Después llegaron las librerías [JavaScript](https://www.manualweb.net/javascript/), como el caso de [desarrollos en jQuery](https://lineadecodigo.com/categoria/jquery/), que nos permitían crear ventanas modales, popovers o lightboxes de una forma más elegante, pero seguían siendo soluciones propietarias que no seguían ningún estándar.


Finalmente, con [HTML5](https://www.manualweb.net/html5/) se ha introducido el atributo [`popover`](https://w3api.com/HTML/popover/) que nos permite crear mensajes emergentes de una forma nativa y estandarizada. Esta nueva característica nos ofrece una solución integrada directamente en el [lenguaje HTML](https://lineadecodigo.com/categoria/html5/), sin necesidad de depender de librerías externas. Lo que nos facilita enormemente la creación de mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/).


Además ha introducido otros elementos en [HTML5](https://www.manualweb.net/html5/) como [`dialog`](https://w3api.com/HTML/dialog/) que también nos permiten crean ventanas emergentes de dialogo.


### Casos de uso del elemento popover en HTML5


Antes de crear mensajes emergentes con [`popover`](https://w3api.com/HTML/popover/) en [HTML5](https://www.manualweb.net/html5/) vamos a ver qué casos de usos tenemos para poder aplicar esta solución. Los casos de uso más comunes para utilizar el elemento [`popover`](https://w3api.com/HTML/popover/) en [HTML5](https://www.manualweb.net/html5/) son múltiples y variados, permitiendo mejorar significativamente la experiencia del usuario en diferentes situaciones de interacción con la página web.

- **Menús contextuales** - Ideales para mostrar opciones adicionales o acciones específicas relacionadas con un elemento de la página cuando el usuario interactúa con él. Estos menús pueden contener enlaces, botones o cualquier otro elemento interactivo que permita al usuario realizar acciones contextuales de manera eficiente y natural.
- **Ayuda contextual** - Perfectos para proporcionar información adicional o explicaciones detalladas sobre elementos específicos sin interrumpir el flujo principal de la página. Esta funcionalidad es especialmente útil para mostrar definiciones, consejos o instrucciones paso a paso que ayuden al usuario a comprender mejor el contenido o la funcionalidad de la página.
- **Formularios flotantes** - Útiles para presentar formularios secundarios o campos de entrada adicionales que no necesitan estar siempre visibles en la interfaz principal. Esta aproximación mejora significativamente la experiencia del usuario al mantener la interfaz limpia y ordenada, mostrando información adicional solo cuando es necesaria.
- **Paneles de configuración** - Excelentes para mostrar opciones de configuración o preferencias que el usuario puede ajustar sin necesidad de navegar a otra página. Estos paneles pueden incluir múltiples controles y opciones de personalización, permitiendo a los usuarios modificar sus preferencias de manera rápida y conveniente mientras mantienen el contexto de su actividad principal.

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663GE54XY%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T043903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIDIqJR%2FV3aOrWN0w%2FdK8DEQ0eLlscvI0713Z87huqaxjAiEA7ac6xuaPieut5zbm4g5if%2BaEgovalmHnlrmivvZJB3Uq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDOlc%2FvUM8SPLq9oJaSrcA5QfkNAsl6mRLQJIA%2BFzVuJBWGZD3qkbh6vWLKOjt4h8cY5sAB9SSYNqUvzQojlErSxSctlah8WnTt2N0xS2KlVMt9PXSn3UBrlVqFhaFsSHRPZEIv9ukeCIAS11jfP0jMbXVxD%2FbALAUaQq061%2FEJDx7cEbobra7iSc4DOIrjqCcVdwNtBVxNFKUgSbiZZqq7Bs2NNQZlo1HWoySraHGNJRtRxNZ8bbKiIr83%2F%2BRwJTMfV3rilVKqAP%2BdOCVkNvOMAne%2BQuhK6dO1P1HEbSwMxsvUPrBYV6Wc6fp%2FmZHwo%2F792t%2BkYyAGgU1RnueYIpAYLcxMw8MURq40qiAOhcNAzJJYVzoVa3Uuc%2FJXIuAS4XQZ8KqjGEVcCuc%2BpKPXjCpxhdTI8jMTKrINxVmsT%2BmtrdMyjFtKkuhrSiRsBYvlTLH4vVbX%2FnSIOKlTK%2FUXKkLvE0R0RpEeCKBv%2FJ%2FvO%2FpXiuF9%2FCbogejXEfIARdjNbQJa46UkIzd%2Fe59WF59fyLdQCUyui45ShH4tjy%2FE4Xni5gYtM4AXOTAkAK9yfbfMVN0UVExPWxjm6NjIxP%2BvWx%2BKKO37zW0R0EU%2BlxKQzJKi%2Fb2JBl1GLonyk%2BTgitsfz2SvqoPJa4ONcuYtCzMLOQxMkGOqUBHO16R96hflIn90gwSn10uq4MxWhbb9xB8h%2B52FksfdBNyii2o%2BJm5qW15X%2FkQswfeN8s1LwnB7Ci9Z2yF4jofUSskBOQrjvN8UOilNop7E%2FGQfG6F9t9LVT2XWVgCIXZprJMCMnskxt4gAUSyUz05ey%2BGkPvWedsrtgpj%2FKaeYycPWSoRkJzdhZNzJGOYuDtm4UDiowkpdsjLzvtlaQen6A6U8l8&X-Amz-Signature=376b1c40c68c18483fc765969e17388c845a8a2f819aff4b0c60a9cb792e6f90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Crear mensajes emergentes con popover en HTML5


Ahora ya nos vamos a poner a codificar para poder crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/). Para ello, en [HTML5](https://www.manualweb.net/html5/), aparece el atributo general [`popover`](https://w3api.com/HTML/popover/) que nos sirve para poder crear mensajes emergentes. El funcionamiento de los popover en [HTML5](https://www.manualweb.net/html5/) tienes dos partes: por un lado la forma en la que definimos el contenido del popover y por otro cómo asociamos a un elemento la capacidad de mostrar el popover.


Para poder definir cual es el elemento popover dentro de nuestra [página web en HTML5](https://lineadecodigo.com/categoria/html5/) lo que hacemos es asignarle el atributo global [`popover`](https://w3api.com/HTML/popover/):


```html
<elemento popover="auto|manual|hint" id="identificador"></elemento>
```


Es muy importante que este elemento que tiene el atributo [`popover`](https://w3api.com/HTML/popover/) también tenga informado el atributo [`id`](https://www.w3api.com/HTML/id/) dándole un identificador único en la página. Esto es debido a que el elemento que muestre el popover deberá de indicar el id del elemento que contiene el popover.


Así, podemos crear una capa mediante un elemento [`div`](https://www.w3api.com/HTML/div/) que nos permita el mostrar un contenido con una imagen de la siguiente forma:


```html
<div popover id="pop1">
  <h2>Este es un popover de HTML5</h2>
  <img src="imagen.png" alt="Imagen en Popover">
</div>
```


La siguiente parte para crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/) será el asociar a un elemento la capacidad de mostrar el popover cuando se interactue con dicho elemento. Por lo cual tiene que ser un elemento de acción como puede ser un [`button`](https://www.w3api.com/HTML/button/) o un elemento [`input`](https://www.w3api.com/HTML/input/). O bien asociar un comportamiento de interacción a un elemento mediante algún tipo de evento como [`onclick`](https://www.w3api.com/HTML/onclick/), [`onmouseover`](https://www.w3api.com/HTML/onmouseover/),…


En el caso que tengamos un elemento de acción vamos a utilizar el atributo popovertarget. Mediante el atributo [`popovertarget`](https://www.w3api.com/HTML/button/popovertarget/) asociamos el [`id`](https://www.w3api.com/HTML/id/) que contiene el elemento [`popover`](https://w3api.com/HTML/popover/).


```html
<elemento popovertarget="idpopover"></elemento>
```


Por lo que en nuestro caso vamos a asignar a un elemento [`button`](https://www.w3api.com/HTML/button/) la capa que acabamos de crear:


```html
<button popovertarget="pop1">Haz click aquí</button>
```


Vemos que utilizamos el id `“pop1”` que es el id que le habíamos asignado a nuestro elemento [`popover`](https://w3api.com/HTML/popover/).


Otra forma de poder crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/) sería mostrar el popover sería mediante [código en Javascript](https://lineadecodigo.com/categoria/javascript/). En este caso tendremos que asociar a un elemento un evento y en dicho evento mostrar el popover mediante el método [`.showPopover()`](https://w3api.com/HTMLDOM/HTMLElement/showPopover/) del elemento [`HTMLElement`](https://w3api.com/HTMLDOM/HTMLElement/).


```javascript
let boton2 = document.getElementById("boton2");
let pop1 = document.getElementById("pop1");

boton2.onclick = function () {            
    pop1.showPopover();
}
```


En ambos casos, al pulsar sobre el botón, se mostrará el popover a pantalla completa.


### Diferencia entre popover y dialog


Ahora que hemos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/) mediante el atributo [`popover`](https://w3api.com/HTML/popover/) y que sabemos cómo [gestionar las ventanas emergentes mediante un elemento dialog](https://lineadecodigo.com/html5/mostrar-una-ventana-dialogo-en-html5/), vamos a ver sus diferencias y cuándo utilizar cada uno de ellos.


Las principales diferencias entre el atributo [`popover`](https://w3api.com/HTML/popover/) y el elemento [`dialog`](https://w3api.com/HTML/dialog/) radican en su propósito y comportamiento.


**¿Cuándo utilizar dialog?**


El elemento [`dialog`](https://w3api.com/HTML/dialog/) está diseñado específicamente para interacciones modales que requieren una respuesta explícita del usuario. Es ideal para situaciones donde necesitamos que el usuario tome una decisión importante o complete una acción crítica, como confirmaciones de acciones irreversibles, formularios de registro importantes o ventanas de configuración esenciales. El elemento [`dialog`](https://w3api.com/HTML/dialog/) bloquea intencionadamente la interacción con el resto de la página para asegurar que el usuario se centre en la tarea actual y proporcione la respuesta necesaria antes de continuar.


**¿Cuándo utilizar popover?**


El atributo [`popover`](https://w3api.com/HTML/popover/) está optimizado para presentar contenido informativo o contextual de manera más ligera y flexible. Es la opción perfecta cuando queremos mostrar información adicional, sugerencias, ayuda contextual o menús secundarios sin interrumpir significativamente la experiencia del usuario. A diferencia del [`dialog`](https://w3api.com/HTML/dialog/), el popover mantiene una interacción más natural y fluida con la página principal, permitiendo que el usuario pueda ignorarlo fácilmente si así lo desea y continuar con su actividad principal sin obstáculos. Esta característica lo hace especialmente útil para mejorar la experiencia del usuario sin crear interrupciones innecesarias en el flujo de trabajo.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQG3JUP4%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T043902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQD50fPM4zcXtrFrPTq4f2SC44hxnlVM8E%2FKmoxQBx0PsQIgewnlDZx%2BSUuFNc5K5Z42vu0habWtJqrZHuq%2BP9gPvQ8q%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDMhF%2Bk%2BCDA9Dh3WuuSrcA0Ol0TOC4GuzIfS5FGyWy3c9VLUk79vCyly9KWWjcBZGu4O101r%2BsY4mw3EII3K6l%2FpanuBVtckr1RBtAftF6zSOgHy1fKKKoo84iYJC5%2FUjV8huiJ4HrCMrhJZie%2F%2FmVNSpDNQMXfaT2pfcj8vjJ%2FbCYbpj2rl91TJwVZs6iPCVbzQ94y%2F7iOviYGbvpNnE9wU8NiQOHA7tzlYAagkGfA%2Fs277u2ZRqaVUE%2BFSS5P8pmxnENgspNlFQxQUL5K2M8M8JusHovPkviwATjWwry%2BWhoaL1s1RQcDEQBFizOtcePBfVd%2FswhUf4uVbufsPxJTkArfN%2FYgI%2B4XkPmr%2BqXXjmB%2BQuGBak1yqx0EoIMuaCrrp%2F25Ask5qKu%2FGw7jIw3AoCyPpJdZ%2FZJmjqGb05RqmTjbRC4msbELLLSGljCrysUDxmPSG47co4I6BW2rFnORdqeCV6XV8SY31r%2FDLOR4imI%2Ftxjs79cDQ1EbRGwCIv7ZHNpfCRB%2Fy7Fz0yW%2BHPEGY6k39RC8AoJM%2F4isx7uE3LYeOLsJsv54%2FJAdE2RyAdFabUtUawSpXWPOYcZYye%2Fs7zyTPdqrV6t6qmGmHgfDlFweF%2Bi4u1ofr1tkZqMh29s6fGHofL7ayKTosZMIqQxMkGOqUBh%2BgLTSUvImKSJTS%2FVi5svgWBvrnI4rHUQGWk1rSUoExnEbn24DnQCvINmegrt%2FEymcIivgal8afwtIegn7k7R5p95Zjkl64WBvR9Xxz7%2BRG5vjEEm2VQRprWFgofgVy0OrMpH7rSJdS%2Bd16VvxtUoAp4%2BMnAuCdHRVGUjfVSjYE%2BsOjKn49wZIyCoVYLModrfqHfFheGDVERwJZSD7ZkswFQQFQE&X-Amz-Signature=287fd1216bb091283be35fd8d6e59fafb40988952e9f005a5d1d7baaec25f046&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

