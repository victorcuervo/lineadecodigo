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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664AY74QT%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T232753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEFihispYL%2BEztBMTttus2mUnqyPJazF6Yi2EX%2Btn49dAiAukP2KMNM1gRLM9gurgprV%2FxNSpwwaNVufalj1Ygi%2Bayr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMVnwlZI%2BvTcBLP4VZKtwD%2BS0cVDzFSYpHCIGQCDbrLg8pYIDXkAMdAFGybFGb3hKzC7xc3N2fEBXf5uc8cg6gIg%2Bcwnq00ikw0rSGn%2F5h%2BQxP7o%2FwPZDequfvaUj2SJAAay5xu4MCmP1h9uNX6u7DsTe13FhYARrLLabLq2B6msBFnf3Y8XQH5cmJkucthfTw2t8iFV9PyKbMBH12ylOUyyapTUdsDrOl4G4g5b7Kz3O2woO0%2BfrW6cLVpG84mN4pqryyVLmrDyV92%2FQlnagG4HdOe3ybCXBV7pNH6CEVSAC7qTraT6lOyeTN2TUXiH%2BpVJKLVo%2Fklgk4wtf0T9Y3cQdkzeT0Z9UuegVRcGnfsfwucbJxMfQkt3oKv9Uf%2BSJQFMQn1ST4llBDPOleWZRP9ZKRnSwcojlxhyzPh9l0f0FUnqiLLhTCrw1HsDdMbEPcQFCbP1f5Ay%2Ffep85hCu7riweLefq0FlkvQGW4ar%2F8kCcbPnWHFA2n8uBRmJPPQs5ASelbFXJjBQhtXueCp3qNK9CD5Nyr2Fbb1OdSrnV6NavQ2oKZFPVKLobW1BTTlx60UpyIxTxTvqz1MXgrNQ4YOzsiNu2a7vovYLRy5bBqrgw3C%2BoGrpiU6u%2BIOZwY3uXXbYgZoqvZOzigoMwlNPSyQY6pgF%2FMThOREML1ECfQEAlV0K4gT9GcxfuWSFEYx%2B%2BNJ0XnrsK7q5jPlUXBRSisbnsWVNxn15xdbP9Gn9%2Fp6d7F0K8ao4CTPwF0MNQLGvNnIV1QeE1ZgKblE4Wr%2FVHv7PTLMSScTD%2FW%2Fp8Z1BBqwASG6Q18IPfxntZ1arGlZmXnOu6w2M1qr%2FimJBfFO9PWdMjxGYPQ000tCZ2WupwPI5x0tU80RvduJ%2FD&X-Amz-Signature=bfdab01c8dd95eac6531b25fdb409fc4ff525614270331576c0574b5180a2db1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SO375TKC%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T232753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCF5GE4KPRahxufGknd7YQqNWhfH6bf4nsvWIPQSCyBvAIhANMhvKFaXUjrTGBF63AqBTouWi%2BkvMH4iRb1OI34tCYRKv8DCH8QABoMNjM3NDIzMTgzODA1IgzwAKS2G%2FSu0mnp4U4q3APdgsJTNxq2MoJLjuyR8YAYGkjtsHOlfuvqRVu18VrH816XdmIZm%2BoVYBfc%2BY7tunCEb3jwiXjQPAA8KhU2GRkS6yZGMSgf8BhG2x%2BYEIvQo8h1kyGo8gxYJyJDeaE3a5xsBrro4dgJuSEKYMntDWjMZff0DDYJC7Sv47MvsV5fHWJTWCpDESpF72AdKc8hfxJz5PQ0v8YKuZQxejPYkAURmw7ywEj%2BT06UPd4ZXFy2wHLT7vBvnzu3oJLYkN6%2FftvZ8Mi8UvMxn2tF52zwyHDEHz3Q10ncG7FeaFyD59ib1f3pkKwBrcF05DQ%2BmeIbKdngGWkYwt8VRf0UeRI7enRfoWKLZ5nc63uEpnJEGck8d2ovQWTHbd8b6W36P37tFNR1bhFEsECGS75Ds8TT4YvwaiJzZeaPR5ThVLvgZsZVLfUWtNjz%2BOQmYWqB%2BwYkbyycuKwv5GGqbBUXM7Xn%2BQ7ZvbMV4LRWbzUk3Lkh4e2Ah4mDeubB0SqeTGepWbvj9%2Bu%2FrhiIY2tG7ELYYskwHCc9FcJBkcDszjb0L9FytPbAlotecWXkLG4tcXAnhv%2B0iRgPRG1UPRweDqETilawVuhSR86lujjLBsElL1wJxXlPQeS5%2BpeqbbrdAIZSrjCV1NLJBjqkAUqn5qB9ne4iRdYZeJti4uu0wKGKFL6hUg6kbPX3bKqRdGEJ8SRb3LxmA6yUzYgpfJ4GJqRaypMjJmTuY3G8gCnZAQA%2FDKGAnuIE0hn5IuzyHVN1ufIJosWUiWmiXrPL0%2FhxcLaFskZED9Uf0yEDI5q2OoJdXPzaBtcyTIt8mb%2FdGtqlCUcaQk%2BQU%2Fk8m7PqZHHAj8ZP%2F%2FoPKvTtoUKYehyvN%2BVH&X-Amz-Signature=22ae34e87f1f264f598a8a8e20f1c2abdd7fec694efcd1412950781d62f93381&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

