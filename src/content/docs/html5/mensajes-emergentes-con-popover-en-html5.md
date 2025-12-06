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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXBQMP4J%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T150908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB5yUFJ9HP%2B%2FrfYnXDtDGz3186DPL6ty%2FLHLuoOxdiq5AiEAo5kVVvaIFkC1aKRO%2BSVk1%2F1uClbVf%2FKjlg4vdVYcbyoq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDOApdkdIo2jciFew%2FCrcA2qQAq2rCH5yl7E0EAy9EeLc9z8ydLlkE3vLtCZUVPDqHcDg9tW%2FFVR9rObJcJTDMlLrWvUErbNqvp3sblPkNDLZPJWttVb65COuPUam33vTGWXyU34F7LCPo3tzskQkAoNC7ic2QzCwH%2FX1LNe9SXQADmV8hEkfhvQ9nujm0NyflZnCdR8Fhs5JlRMZTFNDiI4AWlF%2B%2FGgIcqHxidpx%2BhMPMSpMZOTd35WeuZrspBQ%2BAcVhmcn%2BhVIfAM60hcdVAvt3r64x8poIP4N4RRJ6HE10uwwAX7rsj3NY3Qa5m5bzOFzYsVyIfq6hqa7uqmw9ZGPx%2FqFOXqgJRHDJ5%2B79wAG4ZsJAGUw6TIb8ihDuwDXasZM0ivon8X3rmJW56saw5RqjJgfWRXex9vzMgmZ5i5QMtaKNaW7gDgOs%2BA88JyTg8jhzGpWnSBMbZQm%2FiJGQyPLJ%2Bl3ETi1dd%2FsuRyRP31aUNqpH9JvyBTMtKKuk%2Bh%2FBRPOyXhrCv7XFAhvsIcgSdXtPMQ%2BuZDm5%2FkdtwGddtVo2e%2FW5L8Jf%2BZ9%2FnlxxAF9FEYedq1Ofwe206wKR1CHge0fL5txqdftFruJ1UmuTjic9Q0dDGHX4Nv1VJ1Zv4FFbOCzNpUKif1dMUsBNMNem0MkGOqUBb7Y6sTfF9pt6l5BXFY513Rlpp67v0iDPfF7qIQ0N8iB3vwLafH2ncvo9gO0aqvPbwUbvfuaWccCiEOR8S3KbkrTyRcz2fA1dN0mmuYsUYJZBpJ4HE0XEaNtTAQegxwXXr85UrAK8fwZEvZXWAcpC3GHNkJDMO07895vTXssgP3Jh7y8V21Gt8gnVND10mmvQ%2Btj1vH1Q%2BbcxTavJlpUXTLAeArZU&X-Amz-Signature=05ff9661be4416bd778b87185fbd1d3e80c0a8fcf889962e7e2d1de106a47a60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663C7ITHFO%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T150907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBu%2FYVf%2B4cf%2FjQW3CuCH8c8zpXS0LimFvM7BnHpJPTjDAiEAzB0DnbEnHVgeS%2F%2FOH%2BkH%2BtK6dBFLjDUA6KRpeokMzVkq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDLwKdLHsAuQhqq%2BG%2BCrcAw7%2Bh8x4BuoqTSQxchKMRhdhGu%2FAuHWxR28xtfXkjY5VqoB7yiG6hlWQY3M%2B2GR3zt6r45csx42npih%2FyMA5rHifJLZQ7s8T0Cnmvd5KZDA%2FS1qF3ZmBLr58r5Fh%2FNV93BdTIOpIRN%2BRq7DKdw%2BvZMDZRy8x8OBl%2BBxOaY46zrH5KpHbUyhW9yt30Hzky7X%2BN1eEs3353BzmyWcufuULveN2sAUrOiuCa%2B6hVHLcXNj%2FP8sKEXPly3gsAShShhcFDZl%2Bu4gvHnNn3QEG%2FIt%2BfaZbjOThfPPsLDr31YYM6MhPfJ%2F67jPyW6udfsFvy4KQLjI49wF7d%2BfgbVEzRjLjYVtp%2F5tZnGM1jTE3c8nu8piMZw6J0X%2FKo5e0bpcCBqLj3SVTM5ni6DfZkr4KysfeRBSWH3IsONlN2jFIUwlM2MvS3GX3jHuylpKCLHXRfbvzctr8ut4htqhI7%2FKnbLYEMtqdfro3fiIA1tJQYNREegPF0YD8n5VEvEdy3S8swnMf8NJxnIEj1dXZqpKU4Fyt%2FMEEvF%2FeWXoRpUDlcPO5HoDkziG7s9mu%2F0aJU886gGFAlfMv7ujoq%2FykftjFQd%2Bu3oiZ3kFgvuLc2MOmxao5bzdNWQtrQ8EhEKKHJCQ8MKem0MkGOqUBnmYkT6CmzIp2SB9zmeiSct2Ek41tz8L885RNPV5taJfxcEauSMSBriqF%2BNjPOkkZy9gfo2L75fIQaHgrzovwVK4ctbES1Dm3vP5KtHN318Nhk6PgHnpzdz10UYOzvxPm6JK3PtWvjW1i36WGP9xZSM9nqY4J3RREHSmv4YpvkFTyyHuG1kN14rutZ6mBj0aTQYaaJw2%2BnEqWDEkKteWewNDfsv8b&X-Amz-Signature=692789e057d4b3efd44517774492445f8cf20c7053853ebeffb5b36e3d650caa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

