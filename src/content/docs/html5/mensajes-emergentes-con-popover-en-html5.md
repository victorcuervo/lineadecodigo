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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBEYOZ67%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T142604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuYA6zy8jFsgRYhPpDKLPgSStBRpYqfT50S6njfvXR4QIhAPmupbI3OiqWsGwEfqeSBWsudyZhuZDI0HPCTVcNw3qbKv8DCHUQABoMNjM3NDIzMTgzODA1IgwLHSsKT28IQkMuH9cq3AP2TSDXyDhPLqn0L18xZG08LWCai1Sv9cdgxL4j3w33TPf6GkFZqe59pPd2O%2FWq9BudYEij422Adst4Tnf3oA2sWACWcJyFRwLfrOTm4nyMnEILnICbtGHw8dUIsjl421SjZt2DFAoZ%2BKi%2FQutYumgxRkWySnzXLAgF01MRBrVSM1QbGBqnsMToMA7TVcBZzPxg0aEijkr9uh5yZNS4YBiLxsU0Zm%2Fmtxkwae%2FXQ68%2BlrItT6bZIJHqKBAbgeFdTN6c3CIP%2BKewzqsWs1OwlI%2FNPAJX%2F0XaWFAZYQu9%2BCdlCKJaTePEbI8DVVOdfPzHpGuvEa0MCbRqt0pbdnbU1h%2BKCYxTUctXXB2ezrn7Jj1JqEXib%2BxKuxflwd8QLLjJAmixVPx8JAu2K2NRrBZYl1%2BCiPP7IBjeRu%2BCQwS0PCL%2BqCX%2BD7Tb2NsoiIalYw8PfzChksl59zLAivWAipAml5mCINJSMzIzxegKevcwPNqWgcdNL1OXULzY6OvWJ%2FCtEq%2BVOAwaDIiHCrlUTgnIx2ZxG0ubOwKDXHL4UCaqSx1NWxtuzFUt4BDe8uyGYps9uBVV7kadgS6Mp1C6IZyy1sN%2FFLBgoTEaNQTBAk59ngE17%2BRZ70vlfxt8GY3BqjCEp9DJBjqkAb%2FQMsHFITZXvbkhVfqZ8TygDVcilZc5h9dJUfLWy847ccYs8CDtgpSFGhGX4%2BKfyS93iMTSyxuHgBHdO4CJXg5p5C0UxQgQyVOpi7wUD7b9ch%2FhdAA5gDCV3%2F28Q2jRqBa9uhYkTydyKvXnbo%2BI8OkAZTKGTepAOJ%2BU3b5Opk%2FTfDn7kxWdz2sVrsMjoHnm%2FXdue2khOe9YeSI%2BUu44ei4J4mKv&X-Amz-Signature=262966d1bf44a744444084c5676994d11442f1e88955904d1ee4e6f8cf2df121&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664D2DTYG2%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T142603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBPwhln89yd%2FkX6OxPXqOYQnA1eO7nYEf%2BDwS77TlYzXAiEA7d0SDp0LcDfFHsPKnWsJaV3SYtwdhv7AwJpHRmd8uqsq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDBtit%2B8lL9%2BDKttdvircA0X9rl2tRB3Qk4846sMiQLqa3fCXIkKK8H6SAg6Bf4CIBzGucAq09nmsLjIcOfryqew%2BVAxO6XejWkvBcERZnT%2F0d42fdtlYXKXBWxWzyZnxH6RQoHkNDL3FkbzJl8C4ev51baghEkhRrHSAMagI%2BA7RGchvvnkiRr5h%2FawwJk%2FY0230uCCRQumWtF4zRMAjwaZjzv9xFamlBRgaTBjM7ixS75KkiGZCSA%2B%2BehvTw2X%2FfV70Kpr0U93gXlzbUvSlwrxDQY0yUEFx5ZQj6P0yTttQH0HkgvY%2Fih1FQMWN06Umdg3H%2FaVSHFtEsSB%2Bgand9VvGRQ4rriJ3YkbK1XnGzmJhAyLcDYwHiBvcRV7gTwR%2B0Kb%2FsiMIIN2VE7KKekBe0ZsCtTq1%2FJWDKTLtgLx91PY76M7YOwQi%2B8Fq%2F01Te3WXpeyWFhVSPemajvh5WlvigxtW%2BsVs2%2BpCPGa07Bs0pMxTgtEG2xeNPkdfOnHE%2FrQjMXpaY5igOygcN9TVb1lqhoBp2jAc7%2FPfkyte61oDpc8YzO4t3L%2FEcFQUpASPo7JvBL1lpmqr%2BXp7w4nuACKZj%2Fnb14HXzgDx0c3CgqsnF7RU%2FR7wIqRO35E44ZIPiiBCzWUH1rvTFagU%2BkJbMKWm0MkGOqUBuFxjemZak%2BDRniZez9eftP3b%2Fn70OTRINNAeTETU%2BX23eb0sCRezuLDjTEu2VZ8%2FdCnT8aEEt95P9w4%2BNr245VkUofiKu0evqojmjjz8%2F8H3xjxG01vtF1pwDClDntbbqlYfMwdjNwf1dktJXC2iGdNvlhRFp1fPGEN4J82yLXwWTislu58vcSuVp3Pu4zouJJ6gpTYJnbDiBModg7FUVNR9biEi&X-Amz-Signature=1dbbf417494083aba97c7b08f917078b2fe9f3b8fc4baef57da86703c037d66c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

