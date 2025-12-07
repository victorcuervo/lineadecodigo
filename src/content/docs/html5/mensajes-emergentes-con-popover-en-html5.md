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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UN6D5A4J%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T233212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWi7T2%2FHK565S2D%2F0TG24F5eo%2Bm6sD1qZjB51pWzhZDgIhAMQfDW0I81qZRGz8FQS0ZHBitwA6U4I07rHnrYvERIr6KogECJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyT4MAjM9wJZvUFfFIq3APxmtNr5NkUX4gV0ETr3PVW%2FFTEb6yQCFL9sabKyCe1HkVjFVNhgkLmdya4eZNZVinB1a%2BLH1GFYKD%2BEb%2BtS%2BWwxPrUAVHBzDMgvY61YwAuOFBjaJnRggsl37O0%2FN%2Bd6alhXWsPmtNZmaJAqP5gpTftmfjdEvIfWBC4ZzoKMcwhe%2BWlI7R%2FAU4TGlllEPHpwXoM0V4J23AXv8IuaTpvJrUoIhkFaOT3qLHGnhEADVi12EunIc8%2B4Bp%2Bkf%2Ft5llxgTXs4ZNUjOdD1Zi%2Fb4VKDK1dgxrn3EJRij%2FPNOxxKvP%2BH6N1kp%2BTEjbtd3f8gb29elI0nt2TIxxpCOs018wxsk64JQ2StDWMjz8%2FkzQq6zCyVnqfL04PLfhOWsFQvUaU1lEtUuCOFmpwIjE5SgZm8dR1j9kSXzvjM1Xm72l702aNig%2B9lySkPK08JcgXSJTQlqFs9sSXfMDH69w%2Fy5iiAkrEq1KPaS%2B6wagOng3ozg0egijLmNz7TGcQ7lsL5mWc9n2VqIOAEnlg94Bz3eymyJIKg1K6wL5XW8o8YXILsvrPbTKVgtoOvJW13s4hpEkaL3hKcnE%2F25XACVmQoAyToUrWxKNBc9ib1GBAVYYqpyTmWtOzCfj7tPWdATW9uDCBhdjJBjqkAclbt4KV%2FKZrISMjo09EL1Vh3p6MjrCiAMlLCLzCbL29VcrCQz6qBNaGBAHWtjGGlhLlk5zt6cSSPwUiPgbMIvJiBBMxLkauX%2FInrXgT%2FVP%2BP7FmdAl4l8gf0%2F%2Bc94b2QODdFOZAeWgK780E%2FKjIoMdoYSyDAy22OFthznrmIHOWdPvGumRx%2BCFM1Oq7JVPfMoYgzmA6JDrXlPqkPfZNn1RCTgdB&X-Amz-Signature=cb8ffdefd828ebb763ebd6d066b27e8c4d00edb2ee8e5f0fb680884dbaac1464&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPY7RHDT%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T233211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBET6mbRnL3GMGSSl3I66yabulv5%2FgeTAAFfkDWJYoghAiEA8mzn3lPm5eqh8ge5%2BI3CLfeOBIHmIq814BUme25abMEqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOpPOFkXX2IAdu3t7CrcA4KggiPQH%2FCCOmDcsg%2FhIQI04x6%2B8eui8higQmM2nwn866Skjau0maNlokhHT7q6SIlCxS5pCLOHmNDRJwvMv%2FQFXW3yxzqKkNhxxVH%2BGVNSpnF6xbtmb1K%2Fmgi5GOoEutyoaTcHDVg%2BP6NosIeRMbwS8q1JrypBZZKxESNayE8SvDAChpgmO8zLBpXFY9GfIUvbn02qTp0s1XEtKEgAIuMuPm41491q45FR%2BKFsJIXKC60WD7kJ8eSE8ht5R3oNBkx4NWvzO33ScOYAU5X1OfC77PYMZqMryidhFE9aFOBDN8krsYB7QJwGtMo0OZWnso%2FUPOZFmg9PLwKy5Ws2QIX7rbpcGf7%2FF7SCp2uMQvO3vyxYQjobJSRyo0bQG7UN7oUCh4c8JSbFK51DiKHYADyfKOZ7G2lfH9zpYRMFU4Mu1ji69J6NXOk5uXHqLnOwvO3qfcjBqguLrZAHq2p5XvUHpeJbICv9SUCO7nEGs6Aab%2FEyZ5vhVUdWRrZ%2B%2BOB%2B6KT1pzXdwnNwjqNZyEyb6laCfzryeXfvc2UUPSlDe%2FTLoCg50rO7H5rs600mLbeJ%2BL%2Fw89sG9QTBuf8pUiVelh8CkOhckHDg2pKYQlH%2FiZgsBMnPYKGAhXMLRylqMKiF2MkGOqUBSbHOpRvAPGGXFYmk0I%2FX0WBDcR8SkWalJpBNNJE9%2FmnoBVl1LlIQjlyBAqmXaaw2jaqfJ%2BZUO%2BXkY7Lrl%2FSesE6qZaSxxusbrVDf2F4VhRx%2Fjtkz1ZHxpjr%2F6b%2BAsBW%2Bu%2Bi79e%2B4Dv5tFaLQVmSDwkXfcPAsy8eSXD6Gf%2FcHx6MeQxc9n4mK9JfvCJDEreIOAx7fioWg92UChmL3UzAJ7mmLHoy0&X-Amz-Signature=d9338a38a574e12652750e594b42dcf0ba7a9e96a255438fedfa6ae1b3998c2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

