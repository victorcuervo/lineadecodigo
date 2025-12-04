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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RITCW76%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T122252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIEHtXdMbKuEyM1VGHxKStXkHwvF4URvYF17hHnJzLyQoAiEA%2B4ReXBCpGYm0w%2FE0Vi1GRrlZff1hx1wYrP1pS0Uo2n4q%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDAiU2EbcVUgnyEf%2BfCrcAwHtBJJIsH%2BkNkFRme0KflNs3G0asY4kr2auUN9RD2Q3QHOjSKqmotjlWY08kirdoSxWkZDHKp0VNa13fF4%2FEUuvd1ABa4qoceDzBswsMPZmC6jHMDFueI%2BuI0LmQYYltTVY8eMpymVD8G7T6ghTQAKBzS7WtTbfPcQO9iIvQMXcvNbhEFxN59gHlMDBMqmjXmMOMvcgzihCo6vhZmx16ivm8aGEDE4Ckc%2BYP1O7S1AlNKZwr%2B7XTDh5Y5HAFZHJ6jw%2FuALATgPaniFe4zM5WcADJiuwtoZ50cbQa7Ijl5cIseiT16%2BRvS6vrWfffcSbWLABDu7rSzo7yNHoEp2ITQsfetIC6LqPYmEEXB2Wi0CdQH84QwvLtL9BXyGuk6TvDg2tr2po%2BbLkqCv1FhjWBG11U36Hz7Z93mDdakImKkdmrmiTUvyA8yhpwJ1X69jdyvXLYGnyT6FUDjJMxGTrz2hklxKIGFc1Jn51kXSmO%2FZ4zWB%2FdZcEYufk74cqLPZS8OssuD0w5B05KgVNyhFdslwvU1RNzmraRpUfXkE67PH5LdkU4jRiyDjz8Qes1xMA1n0L9j0eqqg3KI2CgjHQu8DWStSO0sFjU4Au0JOi3nhmqXevbiN7WS4ALuzgMLvmxckGOqUB2ymvCO0aaopkfw3auWmKjKeR67ndf0eZrwfcAxDUzl5O%2FI4CT6%2Fn2knClkL2IaE8eT8GAgo9HgXxrIzuZA%2F2Iphh%2B3qTA1RxLJTA4eq5X%2FFDzKgGiZuJMdByMN%2F8mUg7SwYj1DTsrVNxNLJD2CmLEGnI5eY%2BMthr3gpYWJ8OktNx4B%2BTXlwkecIHSk73kc041k%2FWk9TnoC0AH1FLLfDugbW%2FY1xN&X-Amz-Signature=40fe1d56dff9d02de76fa1646ce548571a1fc3422e853c9b511e4f94ace6000e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QWSYS6H%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T122251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQDaSQZlaQTmlxzpmE4IZxiE5z65tWOZjqao6fHoqYcxUAIgd20RPWG2a7gNcy9w2BbX%2FlTQVWWtHq4%2Bxb9HEm86dqMq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDEPaCYV4G2drNa6rTCrcA19WYCZ4DZ9dPxRyJSROKVz5kunS52sHpM9cPmTOC5vy9uksyrMiaJzpViNcffmj%2Blg75zBYhs9M7WyXYuvFqHyvkswoYtWF9AKkzpNrqSpsUzj08DrXwoQplLHeHOdUQb0H7lf8ptFrAdXqhRtVNphnaMcPtG9Gl3aSHTfAnzIhS7BsHgBXcDTVHKFLmAw4UY8oILf2U%2F%2FIuQIWs7TeKHpAojxVsb7s%2F9QVmTV2VnMv4cuo1Aspp0jY%2FO1%2BGw%2Bx%2FUjb4d5eaiQqpg0z4lchD9VuKhRA6l2SxRoPfY4quEHOCJn6u1%2F7J61XfLw8S9OWZjL09pQ6EL9dkg4l3gXHiv8aWlt5G9Yb5%2FisYf1TfQof1M2G%2BF8yU9E3NDk5FV%2B6TJsC6uoX3yQqSRhOtAl7Tbtc%2BpRNn0wcKFQGte9VbqVXQ5kKbvETeiWiiUNbJ2zOhsC%2BreolZuvPxPcRh8PrDY14ovUG7L7Z%2BnlcaBRi9mOZ0qJLVyvGfqZ0AUsGA8%2FjgHRig9KpQXJJXxIiHX2tRdkucGuT%2F%2Bi%2BUtTWl%2BGT3PzK0adkE0Yb3Sbj1LLu9kl33zUulzPJwSoLOIsdlBpUkoZJalFq2QhxSQlI62a9V1nxaTbVQCIyxXR7zT6GMOPmxckGOqUBmU4TTUUOFjiPEti8v2b%2BciSnl0ufGdcn%2BgkoZiMnckcgliKXTWlnDBxOPVvZ364U11RjbkfU1xWUMuWFbsH%2Fmosy7427Vtr%2F7Ml9lI%2FFjERW5rIpNF%2BvL8QI7IVgEKJiipQR52JApL3Yz5ImhjqJL9Efaa22B%2BAGmdQSD3I9tYBif5LyTJhQK6UpV3dGY%2BKClp7U1w5wz0nUiMS1On1ELP5YMM2K&X-Amz-Signature=cc8e54f6df4ed44ff914445f562959dd07de063787bb92431e09a513bdeef6d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

