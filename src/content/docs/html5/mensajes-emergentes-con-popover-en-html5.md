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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJJRRTEX%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T135556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIDIXMnd4YnpdCsVYUC9vF3i7ZZca9IWzoDHuQf9mad3SAiBj8z6lPGPIELBKYxer%2FHPU1UE0sHxR8zOI6sNlbNFopir%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMS%2B9iEWKjK4qpSWyxKtwD280gE8PmuTG2g3wyQrLAA9NY7TYlB%2BsYgtGZMdGePshJoQn78wQ2gwlCBtP6akGDe5%2BqGYcKQ1DylrWjzh0CTGI4TqgU1vDsfMqLDj7KZmcr%2FLsNSuR7D1twHsJx4o0ORnzWske4%2BNlVKPxTq6wTOtVbxAnhyUkwrD5SC9lqSex%2FKcd%2BGrM7zVq%2F7INr6E1TeR8G6e%2BBtNYuHli4Y2RuPIM3TSSXb5BVJ5roB2q2qd666w1u%2BEFmEpIpEc2i%2FznZ5ezz%2FlXoMA4GzkulDlfOktRsZI1tGKpZrXQ7ebahnpdc1IYY1E9zW8koY3Y0iLjfI7rho%2FyS%2Fhz388fpo264A0ck4%2F4vVhqbx31Yvo7uLAhetZl9tIFmlWAFRY%2BrP2sLfRdoazdbGJoZ5QiWRDqUWOuc5TJiksXCjSxr7BFn64nLYG%2BcOuz81jMddjLVZf5zPelshLLx8eDYlNSLNQUZodZzzxFHEmmcqTteDeF2pofOtPaWthHRcnwDAr986WP01YvVJXckACoQzSZnqsACSxXKdoiOOvE4tL6yMxpkGzBvfySBVirmo%2BOG%2F28ScACgEler0ULwxAWnmy%2FYp5OmcVk%2BvgVrE5W76DtJywhwRJufNgQ8t7XwSLIltVUwoKHGyQY6pgGFWLR5U5iVcrAT6U16ENdjfT5v2wkWnRj3IZa0GzUS1%2Bs0d7i%2B3uyGh9GptQ224uc40w9VHgtOVd5%2BZXQWud1nf2VsDeasHeLvh2pa94LxKfyD7Rfv9vzfKup3omwn4QOt9RObIEpLFV0FHB%2FAtp4ZkWSjzuOzAR5%2FB5Ob%2BT1y8O%2FrSRe4ulgL5PIhAU2Yy9o5bKyVBShZqIzF76weWb1O6uXr3E4w&X-Amz-Signature=38dd2933244077c1d018472dc4e733c084e8984325ad1d713a8cfdd60d65d1fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3TY3BP6%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T135556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDS8J4hk5eOxmcZ8U1YBiRF8J%2BApkWsVQNd29v%2FKGEvowIhANxqaPFkhBow81FV4%2B88qton0urmPugI0vJ2VcNdnMMHKv8DCEcQABoMNjM3NDIzMTgzODA1IgwBU1DTPAA9Nd5p6aEq3AMeGUEemLHd9297w%2F80ZwoW3YScQlIMYPDsMGYP75b%2BQUTfLzfBn%2BNIkfo5yHJaYXscXp2MuxkhpBXKgl7GUgi1FZwveEvm%2FVGLvY0gz%2Fs1TFDiLfLHjmcQCPRA4rDGPnPfFmKq6s9WuQuIuN1Cbh1awFo6ohbCc0yvc24K1yqE1aO55RHYd8ZBK4GqYiaopo%2BP7Lxlgo845EuuZt5s4qxB1DLO0t1INXL4qdtrL%2BdQQk7ypYIs8kJ6iLlX5jq8UTRDn27vQ88Ufw4hafPzdnmluJ6LSBMzYU9VWJmhS5ZMa9oXvcQbOox0Mus4RIQJ%2Fvf5Bwdm1WI4R5ZGDWFr%2BEEf5CMG2nE2%2FiDdCdBVDIlPBddloDq5wKfrB3bluvv3DgLMit2U51WXGfC73mShaAtKQf0ytfrgRvYKqIIB5PjBquG2cuckjSQYCDW9B21gAq%2FF4pO6MO0afLqTGLFGMXiFeWERd1vf%2BXzIqB6IOQk1VxUf1C1epD4cgnw76g5JjLqCFvSZ6UvZrkcISf8Wmqf21AqXfpEC4ZnQgL0Ea4CFq5LcfV8r7qAez2pyRNdMW10YyWflii7VQZCwxWcYbm6WJ3Kxo%2FSor56qSKCe4WLtVx1jWCldVVjKO1cxVjDNocbJBjqkAUVsQBFN72jyB0OGDH1DneMKaltPciVHOUlh%2BXyEqAbMfgBOBLdrsBRknGaIDtSDDMVUjYgxCBuMnM1mJxm8B0HacIDPEFhZCYLIIPwYFtvqqYepmgOxD5%2BswI6zZCzRxlSWkYCqJo7WNIZ1H4mByrieegfItyYT3n4vBr6AC3bS79GLjACB6RkGxxRuFCe0%2Fv66xPzZs6YholOuAbywnSedhZyT&X-Amz-Signature=731b345bf9560fbc2e7d135272bc1dd7fd80ade00974abefb7ce3623970af6d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

