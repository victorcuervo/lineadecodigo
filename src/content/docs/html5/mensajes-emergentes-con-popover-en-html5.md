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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHZ25LIF%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T224959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCICtnEey5tZv0oLEBEVr2wD5s5IKO3EoT%2FKz5VsTfogUHAiEAoiWv7B7HbsTz%2Bx%2BldZjmwhCd4LaZrO1yP%2FOhS5qsf0wq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDGY9nNDMP%2F3nh4VXHyrcA%2BQ6Do86GxcSuB%2F1%2Bmc4%2FQTz%2BALkolXPh5slScMHuiBFcMCUpGvMtvlsjCYgMD3W1TguLDcypOU2bxmb%2FXHSwc5P2NoDb8XfElAz24iK2eD8%2Bxmq4Q4SQJBWGhM%2BknFyG6Oupptn26hpH8MmnGT5Qt3Otut2tcPOzUUun4A04pqodz3x1olDwbKtnBO9kya463wTB1VuosWnRT1A1OzRsqo%2FAaUJ6q97JoJanCBIkuYyabDYPVRZSiBGXIeM6KI2%2BDzmbC2kIEsH9bw%2BDYMc64WmdfnJBsfR4U68J0Hp75sWUs6BDja%2BgG1hI%2FtrQY9ethz92OKnG%2F1QYwleEPbZ6Qdr1qYflw0dNc0hXWEkMJncTFbowvpKs5TNr17OXnij8yqbAu39j17Rr48ke3dS4u4xfJlvNFjWYh3%2BRzGHEbEPHWCEitlYwcnBvm9ePRtynY78fFyllELT4FeJiAYB6RRRH9sE59TjJkuC2AJvsJMSl8LBYDuhu2QfNNMzYL8xLjH0dc6pIBpJfaCKLew2wA5SkPbO8LU62nMhiYweaBpk2j4qzG4BDii6G8%2FdjzoSFnOfSfhm4TijyeEOAM9qiBv%2B1OXiuo7LYweES8c18wvAGvgK4xuXs0a0x2MVMNX4wskGOqUBTlFGJ28nquiETkZaUzXJI4fG0RQE2MBbxf1uEdn8doQzAN2b2YLlY8lB41fZNX%2FfvRJhvGpb40LKjA79bLyVxrH%2B%2BuqaDGm1tcw8YOkVlUBDD7n9YFHRvbOUceh8XwJXKuOaiMmDaZhDahcf%2BgzY5bul3EhRBuNQhzCEArLKE1qMQ2iaSK41LngkZ5Kv7J8ej4p5gxr4wQCZGsI1v8U7ao8fGuIV&X-Amz-Signature=c8eec03e5982a621756790c2d5888e9277c15ce936bd02c51a28c9384636358b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNNTIA33%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T224959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCIFR6v4xX2HQxRLFXFKDRg%2Br1qw1xFMu83N4A5rEI7D3jAiAQTLco6VnsO4e6dN%2BJyNngdS4OkE8VkPF2Sj62XvkZhCr%2FAwg4EAAaDDYzNzQyMzE4MzgwNSIMRV2UqrCbgkGc%2Fyc6KtwDZOJGgPAJ7DlY1IDUrhJKTUB9qB2ujP1K2X6bnl0SwsRaOrT%2FRrfC5AZ9gYHWDMxZxDPD%2BFC6Sxhl9Xq1rzGl2J8UX2XaE%2BWE2Bc%2BgvqKxaNdXtCmpaMoavJNfY%2F2UssRJV2%2BYvb91366zvpYFvGJNL5oRQYP0A6hIkNeHgYNAT3aGOrAy%2FMMLzw7x2V5jBa0Fne0RWZGtw9BkorQ0NEOF6bGCF8%2BplexFCRtvFo3xAfXbzGzz0DyhOMEdp%2BNK42NBJHXd%2B3%2Ba64rfqNVNLmdngtvNVfHegkbAa5Rqxzzz5Sxms5X6fWoZZxNRw8U2QDW4NqoDVlmmWMj5YOtf8Vk%2BfuNB7EJYswbF5s5hNOvnWHe3OCRbzZXjam4kKfnN3qpApav3vIZjeLO%2F1VQrvk630V6bPUq5jFmdTfxb51leVB7GdBwuxng98BCqw48VRJKzDXad8DbF6P9%2BmvYWfB8YAT7jHqkGQI11QZGTuw954rUJmKTROS1o1Q9Q02eLxcTzZyAlodJPIdBjbHJwLOahcpEefC2FbTAYtAjA7k6CLjfos7fWUg6tmZDVxpLbXpLjylPlmOfKxdXaoZePUFG7gV0Dz3aKySZweOTEAD5paKaXJtWY%2BJ6Gx8briAwqPjCyQY6pgF%2Fa8zFIUBXbbmlObsrBNXlWcwEUUcjyWYgU4%2FxEC60j9%2FXrdNrVZ6WLALXNFhReMQVxaexVim8rfGGY3a18f2zV0vrGE%2FVj8JAvhhyZ1327AK7e9Yg7OccLAnlkLkBsfrXnIj5dlCY9yosSFb%2Bfe1Wd%2Fl%2BZyyR30cF%2FzUBQN1dRlYuDA82ptDsubaD%2Br7kJuzgMVEU9rxkhahgffiUHVX5HBSnOEry&X-Amz-Signature=633008fca47e26194cf2d7770e7ff7d7867161b335293ad924d0cdca5fdce18d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

