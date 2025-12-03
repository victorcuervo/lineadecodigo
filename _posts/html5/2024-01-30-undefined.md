---
layout: post
title: Mensajes emergentes con popover en HTML5
excerpt: "Uso del atributo popover para poder generar mensajes emergentes con popover en HTML5 en los que se pueda incluir cualquier contenido."
categories: HTML5
tags: [html5 popover]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OAOCQVT%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T174946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIGdv0g64A81RwLfhDlL7r0gs9MLBJ%2FxXDUU7K2ibZhGEAiAWHGAwKJ%2BtclVPLcb9renQmeUZ0fXiDcIDse1%2FR6JL%2Byr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMQWV8BVbYVFxi1mtxKtwD4vi8cjFNR5CUSqdmyIDJgndCXrIiNUIeoIiuI%2BLQnQaRkoYZw4yh%2BoYbCfKJyP%2BixpeKvrrUEe64XnALVZXX3XakvBaaT87Izj9LL9He3xHax%2B7wBQWJNYNphw73LmGAAmX2VKgp7o9oq%2FJj9L8kgnharlTYVzhT%2BqQe0RkofFU5BaOhvX1dFL8enAqvOjZVrM7KMvDN%2FZ%2FklX1wn2x1ei0eHhYwVkZ2CzUIZnYANIqG%2B2QRrCtgHHol%2FpK9c1xaLlu5EBaVeRs4KG7TsG5XIYds96wtaf8wYq%2BJltYftMwWsYGYCdDDzIfdTQ0DdlpIutB%2BDev9DuWnkIT%2BrQyqsfyh20bIwq6YN15iBu0PQBD992QgHklHSN3pYLpv3an0wsCdoUnJp3E3hwMijkL%2FXq4Hw0zvmfIayBEW1llWhUvE%2BmvLFy%2Fg2VBPVHNmMnl6xMuouF%2Ba8T%2Bjm2iOM06awpRa7xflrv9plZfJBYtIVUcixXWJCTZypXtjmdmX4Gsm7URJSPggiC%2BYRY1%2BvnGfppbO7kmK5aFDUurvSPVu15truPmO99PNuw9aDQ%2BoH81oqJPKxoWhl%2BMHaFdSXDYUdkbMXPZjFzpUIqryJEmNu3SvVM8%2B3G3GqXuOFucwmdrByQY6pgEGL%2BEPbcA5YUIbOtQc1NKKVPIevEj8BT5j5FP4T3NbmxN%2Bia%2FuKpibs9meLMBpQ0qxTxuPVSqLEXU6%2FfMiIT7CnxpMQuigci6jtrHOY3op1SJOb5ys9NZ5PsuABxK65TXTJaoXny9qD7AESKIeb9jX3S2VZ91v19B%2Bn2wTAziHsALXnmCIhqUGUSFAvhrYV4E%2BOOiAJlx4gDcRRI5TTChbOOTsCrvN&X-Amz-Signature=a0d0c1bcc77eaa2e8d7217bcb3b0d9603aa9faeed69b66df81e9489a120ccd39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSQOUMQU%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T174944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQCmT7LAEMtx%2BV4hlGNu9UsbW5iUzR421Dvq74y3tWDklwIhAMZJNo%2BPFBLMQ9Le5gUmE%2FcBqudpR8bHq8c0sn%2Fa5UYuKv8DCDIQABoMNjM3NDIzMTgzODA1IgwxNSc41Xxku8S6XS0q3ANVMhNyuXoRIEEGXBJctqJ0nDLRY4ldgOCJX%2BwqwCpArZTxKfWgJLyI6TfJPOyke%2FBAVAsrgYt4aE%2BmolaFjkVqqT%2B1rLH9vd5jaFExaFlYeqJHhu3iap4u9FeU2U5zta7jU1ZVWXl2Fv0hAD4PvVE3tSXQB8oOdfFaRaOBLR3JnT2FRPnguhcZ6K4h5w6logIKB1XhsNJZpjTyXmboDar0fJN40bO3xbtsziclbn7cVg7afmmCfXgi%2Fzdb28vzj85vN5FwN%2B%2Ftqr2jlWg9d59gjN%2B8nbCJY%2FHjy2WV0a4BIA1yVFCQAzIPFQVPNCp78vndm9dV4RlmDnZAutNrZdB54CWpUCWfmCdN2ZomYJC6ULbuLxLTDkkKng0PoBYngnTlwZ8KK70Kq9aA5Vrgjlnng6IRiNX7fV4TGoswyG9K42OO47BK9R7wCcwBKN4%2BJwW8MUHvQIZ5Jcu6fNCbno6g9X7MdSijDxnmGruGtBOqqd5GSn7mp84dP4VGkZs3NkViM8NKaQQ7YTFKAQeKi6A8ZpyuC5C70jS6vEY9%2FbkrN7TDsfCVU4F1BqDTlWU%2BAvS7o3mWDKymicO%2BWo8QemYz2lt90%2Fj%2B1uAQw%2Bwv3vfi6ckGdIzH35p4I2KWHTC12sHJBjqkAUOC8Wvh6iJNr%2B%2BAcQoWbjvummehRkOOH9MVjpSYR2B%2Bjqcocu0L5WtyqLFxqKS53xm8hXk%2BpBmsxQiernRNZGqag9gg5CSJAQv4V9pqpuYT6s1DR99ze%2FwtMd0xSfhkpvljppLYW%2Bw9Ewr5DTtKBCFvcRMFkZ1amWnsQ%2FJb27JFfwoyQbULHRnToOaFd%2FY9ONXSTllG2hRf5B2Y3OUM%2BT4zHyPZ&X-Amz-Signature=acd3635f3076fcdf902c7750c517e4e4a66d192f35cfc7fdad8035d605a651bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

