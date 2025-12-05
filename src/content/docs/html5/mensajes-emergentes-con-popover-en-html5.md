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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BCOZV3C%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T074923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAw5%2BR2p4u%2BbD4UJErE3YQTcxNCLvQcL0hpJwDJu878DAiBa4gmCUbdHmeWUFYGbdnelgZA3O1%2FFD7%2BIfiyTgRU%2B9yr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMsnRTuQIfIQ0vW7%2FhKtwD87pE5GGNHiENqPI%2BOzR5ea7x1xFyNwsW7GfPuU%2FWEZQ1wFHhvtYKW9Y93l7B7e1qvjBz1se%2FhTD1MXI%2B2AWdBagbtNWDt7oPspkpeTRDvOdhEkfBWR8TjOkh%2F0WWkkzDRtYU%2BEb%2BHRWSZNcNGf1hODGxz18kDjfENkdXExwHwhmiULHcq2awum8vQ3PCkL00%2B9YB8%2FeHKc6jUz2BMszRY86bmKe33PsLwqHMlkQ5GTf5viGVYVkKVQq%2Fam0tN%2FYPn7Sy35Vq02J0Ue4gTC9Pz0T5Uv6HP3bB9IVMZ%2BTM4MICGpWRSHXGjnkoN6kvMXzL1Lk%2BCo8N84jLAMlJCqHBIMthkjuouXdE97IA4tna4rVi4eajVRl0VGcVlPZBSMaibRyU9yjbifpcoRbv%2BXntvrTteXtZ4%2BiFHVAtz4e3vWHTownJYhYcmRUHBY08j401VvUiXVtAFqPerysUzFqI7hldDxEZD%2FAD3gReY%2FpMj%2FK2lf5DhB8T4Z3axLvJHuliT1ffcadKlD0G%2B6HKGA0OU5bA1pKeDJENTBiUz1SjFAfqAsHzwWFe674DnItmidqJViv%2BP2UKOIb4XQaJCTAOyaADZPMKOsljmRyXaS1ZHN3Hhb5WEIdTyJpXYuAw%2Fa%2FJyQY6pgG4%2BfU58X%2FFHYcnBTf7ukRaMfsKWDnNijagUL%2FwTEGQDg1cImpvsdNvsP5466%2BbX2Xd%2FWpnAOFd%2FuffQNriKlZhaM32wfgkhxIVKCcAHs4jCi1p2j1AdBPMfozw1EAqLQDc8SPcdXGSCAH0SXjFwOLsS2PmrVCMQclpLqI0Qu0IzHnuUPwr%2Fs1ww6qKDlaXHTq322pLFdo%2FIJOC9i%2BX3Vmr%2BkJXHOi%2B&X-Amz-Signature=b41671ed735c17f357eaad115bd2986aaf23dd0625bbbfd5ad186111181d0186&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PVIJY6E%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T074920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAYvQ8xk84KUoR6LooXuzWJxcai9aJm9YTcVyHdgQKagIhALlaazbMA%2FCle1wFRi%2B1ao6%2FbatSdzY3dGMajSTfbp3BKv8DCFUQABoMNjM3NDIzMTgzODA1IgyoMQ8uNCwS2tK9h%2BAq3APfZiEr91uZG7APpnYtOQkdKbhay47xvoSxmjp68NBXdLzQrujCfMbVK86kxpLvjBXcxzlJn1gXn6SiFI97UQ5SdBhLbyjbCiR4qY%2BINQ5EdvrDhYjxUUmTNSGYTDh9e7PhjZqar2VHlMU4ITwTlxK9CPaVWpKDvucBnvUaRpxetKUVmdoImIg%2BpprLo1sO%2FG16WRDIXke6JHEMW23zqf9YmjnSWVHrVNtFElQ8rOi8hYbeJ0Jg3Iiv6S7FAzc%2F4dZ0mJwcfW9dGpOgoyrKvq%2Bz7suNBpXoIPJ57oOIvVWoVTN%2Bzkal2LSM0YsudVFXTgr18uCp1mSo0%2BdivwsB1YINMjFVJWV7MqAutMmFVVwViGn863J33vX12CqPPFWI1ZGlOAJb8zYUfm98HpHTBZrGVavv9Vha5f40IVOcS%2F4AOrNKRdMVcnvKqbQV1g9j6PROw2Kdl%2B6mqdvMoNNs%2B2P6GfDGYBWU%2BfnkeU05OsYeTLcxdMdq18NGTiRvb5ilBxOJES3ZybOQwgRvjCmwvce5K4xT4PL3XNQtMBZBy4LZzXI6m3RijvbBylHgrf5TGnlYqh9u1Oh8nbYyo2NuRxny3KFQ3b%2FTwrA3asgqg0TdRBiXPMXI23KALt5EizCBqsnJBjqkAbfMqlu4geFAxNrA4U1f9qQ7fDC5GqVnHU5s5dLLZls9GD%2B63G9pjiQTidAG5NzXr21iJno%2F31VwskpowQ32sxBLHn4p0Z6QwneO0I%2BhfiWrgHyDl02Mcc7GqEQerxGuy3KqDtAcNYxrErSzwiMYqeK%2FUQ3vKEkFc%2BVQcIZC5W%2Fm6kf8GY8bA5kbXRvDbeVpNc7qgyQ%2FJlwIb2rTxQKKQMTcUkv2&X-Amz-Signature=b1ccfa64e13d1fada2c8b1cd1f265cfde838ee7193131193e14837ee2484e687&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

