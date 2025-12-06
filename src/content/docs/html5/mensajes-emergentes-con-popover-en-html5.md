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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJFYFICM%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T044456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD44Em9kx2X2S4ENlD2fvrPRlnALzXScV2uPACbK907WQIgefpLfUepttk2BiRotaqWen6FKEORyP8XcMx1baPxqQAq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDPQ%2F7fFQ4SHpMQZnhyrcA3UkJ0xJZSTph%2FOtkdubH5gg%2FJrfwXkAR0GUY8Bl6n9Rf2e4bAa%2B4GJN1O%2BVDYWqw%2BDe4b%2FXJ6xMWGa8gG%2FtXZ6omnHBc1wfRn3o3V%2FqWb2W7k55Vu%2F1%2Fl44LUWaYHYc33g4bKSOE2iESoxLISnHL4il4sxPwIiEJ8NCniYBQJ%2BM1yzfe77q41osDqBAAYSfQp4nnS1rUIHjh%2BxRbEh0SKlTOFQi2yzHZM77yWg0F03%2FFOaUozemju%2BFyEDw6ufQlh2acAUCsp%2BsD1XdiJVHUXnBe8pZSlmVf08fkAzYcVomBjow4eZuUxfpOSPt9ew19gjAa4ppX0qOFRf9V1bwRkcHmh0AYuJDuqMPeAB00T%2Bp70IGWw3yaRUBSnFYsbWKoK2bY90f1ySlmaMEsTXLXKgreTq9PS%2B2ky%2Fc9vBtvMPvgka0X1WN3xZl%2F7lFPE83xcKRsoIBSjJ6aMmi89wq2tOx7mmoIw3DHDchqUBzAbuG73hom8Wj43JN6QjpgfyYxqsy4K7hPkHE7PrQa3FI%2Bp1owhjNqiU2H4QZAO44zkcBoFlQAcuaHJSUpYrO6HOWzAFH2AMSq0VrEY2vH5IMdK4NHo3CRA2haZ2QQIyTbIFs6wlmdtEWAqZ9h33kMKfezskGOqUBXTvcaIWL%2B6tYAcdBswEfAij10giqTHHRFb2QggpZd7okvHix5vJHW8Nzv44kJw%2BgfvC0Vj7P%2Bn6G88TfwUJS6NB6r6lEhIqJ8lYexV%2F6rOJ95DS566VmvD%2B61rnKaEPWEQlcOjXrFyWtyKjPjcz6zhd7IAS1NNLKscyD9VZDV2OTcHLXiaWy6CBc3lBTRL1QufSwrcD6oZiQUfXO4sEGtghRHho9&X-Amz-Signature=1f8fb745dfcef2e9b8e3472128f1b9bf91afdf67a0ee18a9268dbbb8721de8f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSY7V44A%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T044456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLq8V8wAu3xVH1S3nNvVu1abUO5sTMP4p9RXlKy25jSQIhAJmxJU7%2FArjT%2B9YXuYqYjnjh%2F0pww4YrlG66Ww7in37mKv8DCG0QABoMNjM3NDIzMTgzODA1Igz5GZ%2BtRpgECGFVXrMq3ANLC%2FxjNyKDi%2Fm8%2BMAaLUr8hEWP4rK67cQAw4maYSQateU5r3seqYzIo%2FJh5xmhYIzDvw3YM2dH9V3UPszSO3EG%2Febie3ZAQ566oXVkjcJrFs5N%2BSYu9DQCnzuONHPS4q%2Fw4kM55a3LQtbCnBLGLMq6KLeg5c7XtTFTX6VcEiF4EEg%2FFRc9F%2Fp%2Bli0woNajrx4o%2FhkTPN21iuTqgnh%2BDaLcQBT%2BCUDSQIJLNmFJ8jVUu1VakC6Oq0AxplYXJggL93nCYadTsITH%2B%2FxmxWMdevu43drn4IhbbLiJMV6fXbaJuaFLa3tEJOQQ6LMXsAb2E8Zj9azVxMRys23UIOrqw0vB1RI7M%2FRLjwYqOLLRHLJmiXdGiVsxYKDxM3ol%2BOLcytdLqkaGfmti53dpPcQMTOXEcZSoVrSlB6BThiFlUCX7sKX5vItWAdNFWmCLoCOK12heTm%2FEbXZMZsF12Toi2e4wnytubZO%2BWWNAM8CoFNHEABM3u6ks4omYvl%2FrQABgtF7mj46oxwWyDdFM%2Fj3oPxN7zZGnqHHQmNVHy9bvPuapDIp3rqJei2svCkJaGZDzQtHAZTYhVrh8MKBNInrkKahhb1JXC9lQHyvEyoskKM4oErN18IpPSVp6U9hMHjDU3s7JBjqkARKYF5vSd0WotMEjXkeQQIHemC45h4szMBW0BsmaSmmp2L%2BOdcF7DBACg6%2BZZl3uo719GFGUUb0gac7yBno%2BfBYiegreR3G9B4rBKUQ8YCl%2F6sKhzCUfIlqledTvcFTW2lpH8tJqeUv4OF6%2FcBB69qvKirNK%2B8xuRiSpaTpY0D%2BgJeHY68MjFmwBDcmQnPsP7dg4S%2BpotquoCSPg8dxUZPIDKcs8&X-Amz-Signature=3d7ef7671aff02953b4836281b2a70366ae22219f846b6e942512c12cba93480&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

