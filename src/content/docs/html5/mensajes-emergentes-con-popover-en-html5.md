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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TU5WCNNS%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T121914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCIDg3PXUe96pocjQfoSvbOX3CoLtsNNsbthGzeoR%2F1f0pAh9fd%2F%2FDD%2BuN3wMS0Y%2BRGI11c%2BwghMaXV9sjK8PaNVsEKv8DCFoQABoMNjM3NDIzMTgzODA1IgwKLcZAXI17vbArBsgq3APS7XgZD1ATDAomDIPaagMpDmVguS7lorJtM4PKmiQ4sdUtmflRJDqz4ltFZosfGTmDzWKbnyokUJo43P0gHk6RQOBF%2F7Kee7gKgPWJOECUBGZEciHPA8oPycLAxi%2BbLMUkeL4QN2RihOytvcid755fDZ%2BzwbUdR3sCr8zQ9JY9pA5pRiShy2%2F%2Fg3og44E4l0BgwQYR8M3pJRu4SLX77QhJu2nwKbQ5qjYk4ODs902YvoUPk0IINgJneuKEKpLhKBwpadM5RxpVpPfIcSsSNqpbsSoBjPOpa12HUR9axqCdUMaN0TA4m5i%2FeVxBnwZFZUXGg07lpR6vVjdJd%2F2Q2XrX0QnPegPbW6pAs1S%2Bu5I2bib0MzMikU1Uyk0WyOT4y4f3in9XD0U6xHxSBqGuSwc2oDc81Pa7QgZgjEuF4xMngP88mlGqkHtWOOBA9uS0MyNRwHke8IuE4BsNMmMsdRray1fBvBOw7BGFj4ANg3DpjZ4Tq9GC5fmYgSd11P7RRkgpCgW0CeyPpOPqN8EfaNEhIIkzu%2FsP4YUTOVEckfj%2Fuh8TC5zovZ8LkvZgZLsqEbJ7z6NOpJ4D%2FuiAn6YxjYDnexNhmam1YkeXS8Mbl4r%2BNCiYoxGWOXITDAQ4cjC9xsrJBjqnASKduI5SwYpJCjjjttlS5yJa6JpWanxoDCQO3R5icCPLRmcslSgODj56T2cfPec6vdQsJkKpKQ0QmR2Nkzvi4Khj%2Bi7SXe17qDM7T%2BKCcP6XaV8INWJCJFzQqqHL8M6Wa1yBv3g9cS5uZioQt9rPRQznNT%2BitxhlB4wfz1HHNaiaeiDVhEDINZx7kXdTXGC9q9VWhTE6VwKv3zV3FrSVX2Cz0pl8qSSv&X-Amz-Signature=636eef0c7aef6e6954b4c5a5c64d88a9e5283e36aba13b9a86b5f2a34259d369&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KX2FR3W%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T121914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEfXsNId3IMurivFopMyFKxCRwY3YGJyMBirKk2nV1QgIgDmb6AMz7CiKz2I9eI6sMzYXsaz1UWOsPVYqwGg8r1hUq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDPLToHQLGZPz9OnTVSrcA7lwfbZM2ksAjfoVUUhTjU%2B0DETIkLAh1g1jZ1NGXqk8MRk8NtBUQSVAPazI8nrKi1N8eQhV%2BL9BQyI1MGsCQBK3SSJpPAjgzfPvu7ZkaMSP6Ktn4XqywkXHcptqcPMeSYkeZJJccNPDT9tBOYqMnC%2BRaRbbPloBoIJgx%2BKWpVMMmo%2BJnYGSYXfelmzOSoJhaCKN3XOXp1%2FRrto3CHRtElW3H0cczQ37wM1fwrKTTc325vjefkh2t5k9S5%2FffOlmpKY%2FzmA111JaNna8vNlzRmy3jiVu9MfRkKTyrCww9pYge%2BX2Zt0pwoyf3tTrII%2BqSVdcmUqDDK5%2FSaDeOceQKj%2B6cuDoLx3LZcvCrOY3bQyT6AxDsJoZqXBYt23b1%2BhOgOfadS73gwBo7nzr2DbUorjAUu6Lm8yBnAWGZNWSZjQxRLdJMQr79ySbjsO67vuA1w%2FNU2AHgxWPa2FNuYujtI6q5mxg%2BS%2F1QIr6mVKga%2F13nsh5ABf7o9%2BethQa3cydszarwfPb65icg58xBU1Ub9riP7AqSLPSvA4GGsvJZmSsTb%2BGmoV89aa32ueL4EfxD3bES4g481L9LUhmqOB2a%2BHi6ChwRz6ksNOy1w3GORroMOaBJaLuHX9jNN8QMPzWyskGOqUB9vs%2FbCr7dLF6eHVSHPGHmKfmewxnGEj70leSiwu90lrZpBfu5qG4Q0Q5BeiQS6XKTGzapYcfRByx47ojZ2mrNqBtvRIZULYxkjYoG1yQViJN45Er0pldnLOq7cXQpiMUx5mqwWGXpqxQPO9GfQnSqlV29R8R5agz1icwDHBmOEZmxfVfplZt56UbB1AAb54EIRw%2FS2uCdxPIW0dNMB9FfaCLaswk&X-Amz-Signature=760b382b5315a8c6ec4ef7f809c18063bcd485d1a16902ac50691dc2789e1c9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

