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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IUOHMJO%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T115922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXamUwmp17YD%2BuJV2fNSbT6OrntHV7vUqIFUMSL3QwkQIhAIHH6KG4QtZ%2Fyq1kT4Zwt%2BhqJNXxQ6Brbq0d8RoBLDyEKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy2xrO7VMNSa%2FB3lksq3AP8jCNd2MzABauKXijAlEO0G%2FD9wPG6%2BCKh2qAlUiFPItqV1ow3MwMOWvTvlkftSrpPVfvVy6An9ETNnIz1vJ3Za45lrWErEtZkCx31uAeu3QRbEBJNoyl6%2BcppRWoGSQ2MMC1oR6MckM80Sp9mf3S0dpJ5z0qNYAvpH6C0XP4cz7aP9bjVTqBAo2O9HD1QN30GaD71KvWCa3Cdo8l3mv%2Fkaf1W00od84%2BdhIvkGb1A4QxdZG2lobsYMRZp%2BuuGBnHftBXG0mvXm1aBrYhf0l5GSToazVtc%2Ble07sFDnwDoj5U%2BjazMX%2FlIAWRZS8leVmEdaeGpdZqAddImCHQkVb46tVRjamxsm2tOF5GFdTIBMEV2U1bRAmO4KvOpQ%2FEgldt2jcB1nJXKYBJmKYyePjYZcliKZV8x5uUXFDxMz7jSyBJNvno7yYwuQUM%2Fe91a%2FqD7%2B%2FABbPHZhMMIiDtfpwCYIk0D2JWOLzp6rNJdeFZMILE83gftp%2BAUeayFpxcsHQ6uRzJUdMfG%2BVsxKZnawfS%2B%2Ff%2Bi2oEkXurKZ7RdVGSSe8r0vhULuW80m%2FAoRl7XWqIoSCaY0U%2FmThCRquEdmdfZQ5Poss7hxXJ4ZtRIsakkbBoZKQagbfrZ1ThnUzDH89rJBjqkASApX%2B0qhpLVjz8Y5tx%2BvbxoCEE8Dkq6lxbt3cc1weh1vQL7LIOXCY7ajx1FMNxPHHpiwe3mHqJC%2Br4XP1Na0s7AdWPOMh69PzraGf4RBevgiG%2B9TJnjBQHqIFeqJi%2Brr%2FMqzCXuZ8oP6S6HKcbhMrLbOQsF%2FXajsy9jw1TZswON14GwBCNTHxuQDd4%2BXBwwGmbxY5YfhYQ5Yp0bvOPL%2BRONsa8Q&X-Amz-Signature=6a9f815169e86e6967a1636586a9577925082d17bb2e246a1b627225b2906d28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PWNSZUO%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T115921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHhD1JGYYN62CnCQ8UdvURP7AlWL2bOBVkuMYdRxDY4%2BAiEA4pvNSh0WOlyfiCdOg0DA%2Bnll71GnYBKJMlFXaZ643GwqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNqRWy3qS1wMA57MAyrcA1gQIHYjriT8Rh0jZKkJz9lZ%2FSy3k3va%2FYT1HMpi9ONs9lROkm%2F%2B%2FBQ2sSim4R4%2B5nl6CIFs5%2FmEjcr1tWfEbVKeQsQxRfgCtc63ZHUblyn4%2FD9OyO79k%2FKPwPqrlcSS12RS9wRmKDm1k36BkAFJuArcLDM5fWJAjTUsKFDtzIKvkUXYpdRQhl%2FjSIvEK0DrFQK0zh9rVv9C%2FxlLXCj7lj7iOW1%2FxY7VnWGPdXSTHDIwAcX50LgLdSP%2FEKKZh6VV2A7ET6dmMLLtiI5H9QiVrB02z5xQf0a78spCUf0oO%2BcKeEqXHUzAOrVZde%2FgvwqmCH5onuX6Y67cPKAW%2BFvnEhZaCtCldu4FnMXi7AAn16xEKuB1Uoc04c9MoC3UWnjmRWcG2N1qR7zTxfA%2BYpd5%2BSUZCE%2Byyf%2BZcqPTaSVZkT0U7cf5KB5ozgu%2BGh3O8JjenXsHOwRpid3VYBh1ZxH1NRKHonfqHOZppbztHj3d1b25inZ%2BL96IhUc%2FgvFLp0%2F1lVE1O19Jcy7Nu4U53PNVs3tTXaJKjzc0BB5jd6x29VNaSwy2cMZ1ajikUHVR%2BcTZzhmitx84o%2FAO%2BgoqpzQEqTiah8p8JVJxJijtaFYkZWpYOPl84f5OKSthlA5sMPHz2skGOqUBsqBDhHHPFeeSiRnIUI%2BP8v4W0a5zwliulYE7kmkdCXV2p%2FnYWqwc2nUu%2BYmEi7fZaK9DlUic5BmiKDTeLXqkMPNfYpeMr%2Bxk8wc5ZuOh7LhSukqBjdcUKNkOFIC0pgzhgIa%2BxP6WNs2NAyWsEAwuGYJOD17Zj8z24DSAhvQ3UqSTWCAS5XtfEoaVA617mYr%2F8enNnMd3ardD2dRre%2FhO%2Fpk9KXeN&X-Amz-Signature=75cee9d1a271ccbad45c5ae9e0c34a6b06af0d87cfc78017960368ceaf35567f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

