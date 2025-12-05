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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TTMWFY2%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T031213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBRw8Rf8OgTYHTMgWF9pBsLN7LSsw5ngu3%2BN0aDquw9QAiEA5YR2lndLAKlQrd6mwhcLG55gnQBfeLH0M%2FotqGpXp1sq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDDj0BfWrv2p7UQxpzSrcAy722dFKbvGku0Ou1%2FF%2B9dh6yUlrQx5gOFQ90IpB0ga%2F8D%2F7Wm9HvNApS8S91YOrln10W1%2FAosbqvXmWCOIfC8NR10gMiHlSRtkF14ZT%2BoZZ5G5oOU9ld%2B0PWZu1ZNKPdj9AwLQinr4x7EfYGQZmKZmtL7opQp%2FyHHbdw9fCjkiZfzxXp2q1IG0Na8uw1UD22a0djzvnKcdCbKnwHNqeB1UIDFblek5n7hJCRt%2Fr0CNBEYbqv2zCmRrni0qLcbAbvvkhTAFs4YUA42ib4EABCnBlHJU0qJPeQPY37EqsxU8pDsvVZLSokYV2gH%2BLIo3ADcDB%2BPsqt%2BqeWonVULJVEwA5aV4%2FZ2qQCEzVM9u%2FaeGTlXp%2FZMI1zs9zA%2BAHLEv8JTWPl1EHVgk05JstZbeqPeg4JLM1hdq3Har%2B3EdmcA%2BE4XaKJH1vnTHIKzQu8FxuFcXIGOE8mnMkWu2ucTQ6CjI3hhtrAfyxH6GRQ7TziXFkpQKiQojGX%2FXEgf4qB0zkpKswpXkl8M8UBHrv71BN8FoJCmno%2FJ0D%2Fa%2BU3yHFDgx9KVcewRsTrQLZgbljr4oCMY%2FHNjEhvWxnveLT7Wze8j8VmX60MUoMo5cS3dSZu82%2FtRkySJr9DcXHQ6yJMN6MyMkGOqUB34s28C9t3PAWouFYAYIlFkrxBmvWTO02gMwVUv%2BnV0JG718Eu4Hc8Gbr1kmfikqT%2Ba7KwEDslNgA3CrndSOsKbnRAZol8U57147Hdih1rEPQ4pxG7%2BEMEOPFtOy5g%2FWaTyzkYfWSer0%2BLPmRqQVhxQnzA8rLZU4gWGOfQr5qcqy9EKotK%2BbG%2BjMMtTwA%2BwTZWgoonN2DAklPdQd9GG8HRaxNoIW8&X-Amz-Signature=f21fe4872a9c0c6c8a2735eb14fe8ea7a262270e589b4fc3a48a1efc9420500c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Z2746GM%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T031213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJO2s18pAa%2FiDLYstafPxYlWbNK3AZrMd%2FG%2FNfhkPz8wIhAJHz54fzs8IvDRGgwLS9VaDYV3IiOTgTu6dcUL7TAnwdKv8DCE8QABoMNjM3NDIzMTgzODA1IgwY7rK20GvSu3zLGUwq3AMd4PabknP%2BYm1PigrzQnENS4q6UCYYg2jtMhN2AES0e%2BZSpMMn1awI6AFywV5AN9LQvBT9H%2BdWVYU1zELfmhdVfenvvlfzIipUE4UpB%2BgA2lOuzAzg4u8ibMVyzqPDgySikkxF%2BIHyjQfM9LnSdWhdtr4IHzJZ%2F9e6eZajm3bctDrc1Kesd7j4HOqgzy4SqxfAIV6vruEtCauk0KwwCXHlL%2FJ1PHvVn16x%2B9x14uiy3bLhkoasHqBrveUyYcQQxsVwwzi%2Bt6v1RbViMpg1h70fImN%2FPNDVhTpQj94VhYA7IF%2F1zpXcdGKmHct%2BUsKoP6pt2aeIFkNNqPJVrsE%2BStzG95oQ9wBpIH8j52cVLdP0NkqfmbtWH2g3vh%2FOXv3kscqWFpS3ZAdAk6Y8DRmhWdH%2BXt2JAOUj4hCee9yAGoLGu9MO19TbBD1GpLJRLn0yLm6%2FmzoCrCASKLjbtcfpUvaQCa1nBqBSvo2TVa3o64d%2F0rci4BUp66QsU4sM42PWU1IOHH1yjnVtMAwxvsoPQRGuPp2KOgAIka4eWp%2Fga7aw7iRLvUAoyYRLrX75A21LpJUKY59T7%2F4tWa2LYaSknFLEErUoKNc91920JNodpn7TEvD7JAv4BWdD%2B8qsaDDxi8jJBjqkAeH04gPmrtY1IMBNfWapV5BXCuG7L0rN89SrXdzl9jE2WQv%2FHKQVXwBpdCy64MJQr1am4Nuq5DqVtgLIBukVUbY2dfzg%2B28UmGp3KK%2FcX22VT9IRtITxMGbF%2BIXvOxZQe7vEyueBE61YbjwKAV5ehK3%2Blk8ld%2F9KN7G2nSYrxQ3zd%2FUKjvm%2FUUJV6RW4hotjxSKn4%2FnDXJxzUh12cinNFcCDsvTC&X-Amz-Signature=c21868ce6d3e916dba9c5ad84cf39add76de8f7d65407116a4193bbc1bc1b5fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

