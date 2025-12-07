---
title: Mensajes emergentes con popover en HTML5
description: "Uso del atributo popover para poder generar mensajes emergentes con popover en HTML5 en los que se pueda incluir cualquier contenido."
lastUpdated: 2024-01-30
slug: /html5/mensajes-emergentes-con-popover-en-html5/
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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUKIZMET%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T214237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHqEAckuL0KtpTFQuUStq26xRuxn2Do8AdpFmXNMjlWiAiB5FnJO8%2F5e4Y7LC3T7gacZ8LOLMOtLvlKtw1f7InthpiqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqBA%2Bw7wwSPsNtif7KtwDjly17WH5QaPdVVodySe5WaYMAeLPWVJSyhQrCBDwPr4uHAOYnwEBRS0KUxqMi%2BU46V66ShO%2FJiTUcMuzcqplccizeb7%2BvH8qIYKg5y5HIa5%2F9WhSxYnqKTyX5NqS102CG%2BQG1hK7Ci%2FMac3O7v9TAcYD%2BcWokDyFqI%2F1FnMe6uUso14WkB5lY2tF0Yb2VVq4zgSBPhmlRrLgc%2FlijEWJAvLThfYD%2FTzhRj4AsB1DgNmzz8QtjiFd051lf1Jk6kTr3QEgM6B4kUNeZmLPdySCahL9f0%2B72azkqvyPn7LezWsYJqbwRyY6nGNYzIGp9iJ2%2Fe6YxOU7TDCNi2lQ%2BrfTKgrWYImdnS%2BnE10R4KPSbDgpZiXrASVBprGuX%2FDommVnhZJBZQa6tAC4xIc0ayZWW%2FqLmf36yfKHVd8s0ziz9ran719FtpiLsdS0wzI7S5FrkiyERTC5noSGCX%2FAvQerqUSBYYDuJ7XG6Q4hSWzzybUfjrZxRhymijseBQkmXnEPdBINMnCjlIdi1i0uwjbJBdOz4%2F2ZzOCImRFJ3%2Bbr9r6oEBedz%2BN2yZauP0FmGkckZyU5IAt0FAV4UEbyEfzX5rinfj7Oq4iD%2FOy8p13kVYyixMTj6km0XQYUeHIwhMjXyQY6pgE3x11BuiOQIp%2BgpCHHSwtLXVMj07nTQHMhOl6glKLty5V6WQellnxe7sEFhnopsSAFi3OYETcqYNU6vZOC%2BxEvokLpm%2Fa4gnP9VI%2FuGd4ZyvTLbu6qAn5H8TnUadvhJesFwX0TUTy%2FYZYudP9JZ2aDhaJeJ6bg%2Bo9jIWvmWLmG7N51ZU%2FH7AxuQm87OTwLfuC%2BWxuNnIipKh0CusBkVl6g0ejpVQB2&X-Amz-Signature=325ed40daff850b20666525f07a3564ccf3252ef5c88823a0465cd965bc5ae85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4TLWXSM%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T214237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBnRkuZdU5FlBJN22LWaK4nXfsAyTNp%2B0G1UnMTsaszvAiEA1NxO5GbcoEiQQVsTbSK2vXS9cOPy9veClhSVUeGKT1gqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMWHbCq9Ag7Y6dTiZCrcAy2SCCDAbTgWPE%2FZBr%2F2NY6euo5PnY8Nd%2FdlO8aOtHAbTn09e%2FSw8gTSgnMlC4GtDjzobTc2a3FLvIhxb0TRaNptK9shuu5APr12qYgR4TnRLMO6guWP0LVCZ7pr3pcQG7PFcnJQY%2BYXjjJdhxyErFo3S502e7gn%2BnjSIWtTn%2FJBcCJqDID5kv5VfaOxrJWo0zQXM8LwMQ4Fg3RHzBElv%2Fp9rMt8%2FpsSQ9DcGEcnAE3vvpfCaHVVRSoGRTg91tXjGP0YwCUamEvxZfuJ9mayLbsopeocTI0giiAnORIFnTVL6STHXE6wDpPTHJMezEfg9mrXwJ6WG4%2B8tZ8bz5mKTdHSVgfwxTiUP3XoZ6mKG68c1scUDVdFOfD3nn0g0%2F1GAsj9bQbp6Vk0tNXmnFJV14Qlc9qW3GGz3yXRodsi3ShKeXSHvRkUy4aXlvmtNo2CfcwCgGqTlVD8incwFTBRuAbap8Jdrh4LdWFYbiJiDoipPKncNvtsUKeRvrp8g9FuOr8CsL29ecyxMhS7pd5ZO4EKBQf24eluCFlOOIfH7iKovvpSzQLjJIZcqlaCp8aVazQuyuDwf0%2BvftPSOZLdlWm%2B%2FYJv%2BiCO2PHe9El33sjHztFoUF4PPzh8bULLMKjH18kGOqUB741roYf0QI8qoHaCmSAeLZXWSd6P%2Bem8TK8yHatZ9v3I0%2BXhy2BTYBykxoBf%2FwCGu43G%2Bz4kDRQzVR9LZ%2FQr%2Fs8R71WJsKgozHxzfjgIH0z810edwoZlBeC%2BWpSFU4srstKLPqG61ofwAK0OIsHIPdCs1RItsPyVMcfkOZx%2BTzFpAEjFsGD%2BFXTXLXRDCbRaOitKlyzL%2BvoD29R47VzpPOraoerx&X-Amz-Signature=fe81b59934e6cd3a3a0577964f1237e2aa80dbc9acb70bfbb7ac6881a1d2b341&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

