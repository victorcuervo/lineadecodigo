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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZH6AKB2%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T080638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHGsNLOaJvE0oiuqNN66L2VOev4Rqz%2BxSAWkxcyyXR7wIgGw2B8rk4arl%2F%2FBw06wRv9bTQLbaeAE6HDvdXCnCB2REq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDCKAmJLqzSQt2zIjJircA4E6AYhWZhZ8jtzMJBEvY%2Fe0cAlJ5nYJ3ETWLKNpA72rAaDjIRNZ16FUKo8%2F%2BV8C%2Byxc9RC4JNGQcFrPKTMMtUvVQa20WDd7w%2B01zI1czYph9WQYtEnazpfodv2JNA6BcZ4ue9hxjODAdvi%2F0fzVwUEJPF2RDw83hEQkUFCa4y%2ByvOuaq4k20F019zuXL8n87z5DqXxQbtGnLw2ASCnWERGKv8r9hBu8bsEHdYB9l4AzvnvkCQYddbDBW6ODeCJVBueMfuQ%2BOuW2AO7ktuYy9eoZaloCLdW7oYhExCQeBAJwRh8pcm2vXp2%2BZ3kG6XhN3H2wu4ykAz%2BQGhCktW41ejHYoFc3wWNSOzWdfYhs6Qo9PxPx2k3FGz1SV1Tx6KTURxAJuDYh3cz%2F6NpsytwiXfz2vVxKoMpRroV1JvDLn%2B03vV%2BlgUIkPN%2B1xcvMjSW5T5WEn55ltoL%2BBvTa7xW7H6fQgYI3gvM0%2BsIFIQnMOlO9hrUdA2rU%2F0qfHqj6d0PF236qAXqzqtFxxj8V7A%2Bb4yKKSUve9uFt9zAItELnuKE7f0EkeJg8xGHbIFsqnyAbrC%2BwSnl3XbdzLjuGMIPaKHyHWL5Y263Ke%2BrhBS652zeol0p3b9tJRbHIDNoEMPO8z8kGOqUBR8797iBv1KbkJdmcflXDgJZFPkgTERzkhV2CBQbdBgJoahufo34CQ9fPY1Vzh9eG0IeBj11K1BjORJtdjcaA3kKUDI0uYAirHrVSjCnFK9vgSj8bTuLGsx0n%2BH4lZkgIYL3knLgfSAeAj%2FiXYoMopIIh5m1%2B%2F1AFj2KZ8WxughG%2BBMcyRBqvR4U%2Fhc%2FTeas3Gng%2BB7aXf1Oh0S2BgxquvWvALNp4&X-Amz-Signature=13cdabe999318fd21117dd34de507b5a59cfbadcf53aeb811e960ebf1f34def6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637NW5HRC%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T080638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEcLOhFWr7g0dh8q85q5jSVFgmhuYXkQuMt1cTSKrgM4AiAf7Cz0jYtO8BxCBvxNscQAsL69MIf0yQ%2FhVUhJLLC3xir%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMru8ezE9Ol8I7X0lWKtwDFaJ7Sc%2Fdx2Zjgsm3P3dUGg17%2Fi8XD3rYfGCnBiQjVTAEr4%2BuF3weK0vD6QdcnyOChWPQmoFOPbSvaUpKEyGkPDG0cMoeL8mtGDKUAlB3mgJprzPb8lNb1jRCWxkp3nhIb%2F1gF5iREU4BD17pAKxy8JPmU93VT03XGWcFwAFbbhEnYx10TNC3jW4HDZHpc%2Bflru8SuLEZI80SQU2AjrywPehn6QVMz5skj%2Fs%2F9dAGBv7WhBlBshuKp1BdkAEDYIWZYrhHpehe1z7lm41WCjlAowWjrln4kGpqlv2f0XF7ITkUtE9nfqNcEx%2Blzz8SLl2eE5uH3t3JPShjNW7RZWeuhyAWIZFWzKzDNcj1lvu1y%2BEvbXAcYWSkuHWSeez7vfcOtD4tl35FZiGyKyDMEkzc6TipDF5v2DTSS0MXkQPm90Zubh%2BbWfLVjULW6guV3WiL8429ckoWprnf9hM680Vx5K54JPqWy2tqXKuEOWUCWCU9Lp3qp9bfV85qmwauvOZORMGwnD7I0NJNWdesFJziEkbUcxhtFjsaKVEgdNerK%2FZ2wR2Ow3r3cm7diTDF0ewSPDw3dGiqXQzulcgV4uWCr6PPAzMYWjW4eJw08Mkhlpq6GhTLaHv1DKbFvdUw37zPyQY6pgHXLwXq92k5QL6coHH0SxtZvHi7Dj5r8t6Rayo8T0OaFU1dKlGjydP73di5ueaZiNwSnY55fJy7asbHIFN3scm7lhIDI3%2BVE2aL8mCVbSKwueuzgoZbTIbkU7xaA5v5UkJAGMOA5ktIN96SJU0mAMK94RTRQQIYWzXY2nMhhXuO4DRkLGw%2BROCYllpNNasO2ioLJaqTK%2B5Qlq7sm31H9xHbGR5ZDCGI&X-Amz-Signature=11ed35c748acdd353453caf2378bb8c56f22c9a55face780edf31417a518523b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

