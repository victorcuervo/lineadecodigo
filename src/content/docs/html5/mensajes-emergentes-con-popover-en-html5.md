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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q33QSXNW%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T232718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFOke%2B2LSqLVVfJGdrofqNxDe4sVz%2BJQA4HDGXX%2BsaajAiBjEKl2jApRUgJh07wJ1xtd3Hfx5qj3ITNmiU4kTL7tGCr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMLdzbiPgPQui53oyMKtwDGLnJ6RZmIgLMZAkv9yI0AhIY4IEtWEBGfxc8HQuuf%2BfarWeUtv84tY%2BB5Nr1FLmgIbvciFHftsX1mF1xb88TepN89x%2BAwH0sYMDqbjxXvctpkLe%2BIZlLEnNXpKFoK4sX0ZDImkDELx40UfqDyAtXVI1Can9ScrYeUuwi%2BN9zLimYU8KWT6BTQtziN7niP2F795fYNiddGGU6Ft7gs%2FecxcJUupHuz9XT%2Bmih%2FSkQQgMdOGPGiqnRF5NTMWCHccCm2G8jP2fVZPgufPdrEYRxK5WX7vFGkYxofLVs2iBYNU1AEnzkuD5Qr7qRV22N2qK3gYIP2ETjIhleuSb3emCAJWX6GglTTvo7lYxWvpIVPpmB%2F8fOuL5toGWm9OpELe0bJNBPeCsVD3Mla6CUVBG4Tv59Rg5C8zEgSDMZvO1Int7AgwdF%2BYLzpk2Hve96CkbJCK1nFa5PGKO47GQ%2FPtUEHeM5zlMv0W6pZVWRBTVbbFZym5b590B%2FDwNDO4GSHGBO36FmiAZu2k0doz2Q43yQiAMipWvrcElTWJDhj3iNnijk7v8pyFxZZHQHgXm%2FDP2kO2iGA64Acyr8er7R7P0Isawltc9q2vdmMREWY00xXGPLa7O4%2BfgriYEiz4Ew94vIyQY6pgHLzpzigPIBZZba9QN6AXCemgyrO9uUJQwkSXzK9g%2F4Lg5S1TfBlZRUKb59JJn%2FerOmDLBbA%2BOIvynnKJwKLztq4cRKZLtXb%2Fqdhp96wtuF9VII7zCVo3buoXqZzJiBVrUNoyFEGRKsntPFQr65Qo%2FiDBJnj2KswwtFNBhr1HCotUVhZX%2FN93SYZTURyG4fyHow9hMthdU7uZU%2Fk8S4zR60Gex7OE7y&X-Amz-Signature=820403703ce4947116bd64c01063269afa9dc45b2bf86ab27438eac3263303be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZXNYE27%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T232718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBXRilOpCVgpgolKqlal6GB1FvWBE7Vfw3vRKuZX0lnEAiEA0PzX5%2BwC7Ll0lePp1iiVCthspaSfQuBZ%2F21nKp1PKhQq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDJRrID2G5Xt868F7bircA3P4%2B4KFyN6M3QZIF%2F1SB3bj5Gc0LlpO1ul7sAVT2N%2BtUZ9tpYrRF06GgdltnehFfgRVqxLOLrfL5UEOI2RMDJnVPTs9eGiHPJQEuV%2BqUfDlgY0uWUroUQJFXHm0gVuWvpJS0Fqq6ejjibd704nGXHG6Gvm%2FJGlZ5flbcl66ITzA2dOG9aiF6m1uzwK1c67h7Rudg24hVbCnAOM85lhJ6iFsoXUwNrWTWXnEis8nlahGe41ONlrM3ruK9AiIU%2Blsll%2Ft6VUMMS9418C0wF89fTOwLA1HCYkWh2DElulWMfbqMnVaEmo8aK%2BE4V7GbAnE%2BW8PuNsMYEk5fUdkWsrx8q6djhSZQIw3OY4qTOpAcAGBdvgKtv1FaayOlTyVQL0CUiAUhBevkWSH03GBIKH%2FLMvkuDwu1bEu2NWiFEumA%2F%2F%2BZCXrRrUOuB0EkBz6QwzCgHzCN0GkxBX6XGOuQNhqCjNSvzx%2Feb8SkS%2Bx6%2F8BiRiaVxoPiqzbu5XbXuNEkqEBkNi1obvAt5IWzSTMxhrxl81Iv8oAZxSiNBEbNj3BKeBN8QpJfoHgnst%2Fqjp9iFXbE5Lu968N6bkisp1sk%2F3M%2BW3p1KnHrJh7zprW5HAeXRVq2tjQLQ1LGnVWsahVMO%2BLyMkGOqUBX6icdUGeItxKQ%2Fpga7krk3iHsO0tmBNKGzeNwqFmUJzU3%2BHO%2BeXrsockGQv1ydJWz68yl9hvYVpsYwoaILqQ6uK2L1Sy1N9Ddj3dgwPNh0MW8ZLTv8BvW%2BoxFEa3b8EOGkaS3vgRxxGIOi16rib19vbZBdiZS%2FUB3998HfRQ69rd3xH%2BE4lkdFUhWko%2BXbAzxyiHeUDnfXWGZAW%2F544uMTyqX471&X-Amz-Signature=741dc1d5f9c940e5d5e7e1b20b126b3228244483dcc89a7580ebd988db005742&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

