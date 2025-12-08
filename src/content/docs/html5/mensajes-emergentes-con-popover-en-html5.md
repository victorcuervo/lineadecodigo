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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSJRVNS4%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T081509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDSxq8K6NnFI2sr3QtrPIqWpqjjFy2VZUjBb90pTv4hWAiBcKCNjQglZqKynh2DFl%2FltsiMtW7%2BR1v1r7TE2Lli0zSqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMU8Mux85lzzMI%2BM8aKtwDxkT2PjdOsONKo9%2B5h80Gfaeon6RHnmpJrGs5cAmAWMXJ5ZDTRZW3Gzjt7WNI4L%2B%2B7AZW%2FQ7PqxMGvqJSvizRmpjZKeayeL3B7d7sGuUO4mamWAByDeop%2FYiUT6x7J8WEdkhSOXpx51ScC2KXTEFUw4n0yOR5ZAvFcwOUx%2BTDiBaQY15wqMKuacPsQZB8NxfBu3jm8wLY5LQCpXHJiq9igG%2BE3ARLKAqguS10t56UEpKtGwbEk94qCnNxJpeujy4vlJwmYRbXqwDU7Jm1u5Ni08E9q%2BlFsqhN3WksRqTxC6QTm15RxUqms7eEYQuWsEfsfIu0s7MoFMzIL11kvAAQv9nXaRtTBpECQNvFFQReZYvnT6GUdQPLeKE7nKL0mGpeWSJ8SVF%2Bm%2FGd03k7kl5iOK7VhkOuGUk9QQW29CnOp79cKuuaTgiWsWB%2BM5A0GqYIQEBikYkj%2BAFOLQW54umsaarh0qWWgEJ9wSz4gWWN2L7ZOJlfV1SCmATivyADZLTnyx3FSgHDLU0%2BU5XPh8qJyZuGJo8vO5dpzQmLHE8B4XsC2DW%2BC61k2FiKYGCVbGLfTsDPlMqeTUd82g31U6NjEcF8KW2H%2FY1Kx%2Blg5XldqNO4foG006DdqBBGG7UwrO7ZyQY6pgHqlzs50piW%2BUZHMabmuaR%2BChOpT35pDNizJTsYyBlsO1vvy3WO0grnuk%2Fdi1P2mNcJururcFuQgjMvoitzWxItECsRTqC%2F%2FqU%2F%2F%2BpZ2fArxWZ8TwDHGZCw6aT4MR%2BQ2trlHkijZT6QwEiq5eq3A6GBobJTEiNNOPhJMs5lONhlUxrvk6lkc0tBgtkN34JkYfqzbzQ4yrnoGSCBwpUDrjUyCDYZNPc%2B&X-Amz-Signature=065280de0e445a5e1ce9c5110471a6df349f649163beb7cec579205afd208a1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BBYWFBV%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T081508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBom%2FZfd46lgdldwVktwnBo2LN%2FkqnNpkSVQ%2FGgkQshCAiAmefvnQbTKGLrrzXi87%2FeZ%2FS1Ve5c1yAG6GqqvbVhuAiqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvA4mAABMBRSrGWthKtwDp80cjIbZ%2FvGPD96e8Uh7gJf7q7td1pgLxcAen0s6Qv4y%2Boohp5uGA6JWIgbwl%2FnZS%2BXw1ziVucect5sf1gGMdQUNPKBX8R1gVTVWCg1X6PJ75i0Z%2FhnYMqZZixB7Thkgh8QO94uGNBDYeBoXLvjk7RPfe838tmtYJFt8picBxs%2B%2BK1Qb87Qzy5tZxisyVA63OXIzAq%2BgxbjxwKfegI1diRT5ma%2Bz9Z61KUiQusc0Gjoshq1o81XGHb8ET9oBL0Nrwg9M5gnMjylHFnubRIwiAu%2BRHjLpV9Zf2Kjb8OTVD9SrdC57zjcPcmsWw6PNoiM8jTrruUt5Aoa%2BlYkygHibx7gQzyL%2Bzv1TnVxCSsw9mM0LUHLx07k4scN%2F%2FqUv8S%2BpM5188POioVEt7QtiskDXgEpOYT0b6oARzih7v17Xv6Dx6QjlmREpxfaHLpkBd2DaIQ4KY%2BnSGGYXWh4wSNqkUOteYub8AH%2BEoUSy2%2FmjQeWBNjvGRa6xnspupDXJli5bb2r4VOnkC6KWEGeBCyk8moInsrzTowtP2reYsGGt3LLFT7zQNk3AyyKO539MAUgJ5eB6%2B6Dt17WNesxomu6zAt6YOr3%2F9VPmVWPImCrIUqyG5%2BQwJheF7sqCZKUwm%2B7ZyQY6pgF1lAeXV84e6MuYPcNO6Et%2FTl8sCqoDybUwb4WTPB2fYw1dX7v4sn9CeKDXDCvsSYQvZncn2LKLz%2Bbx967IWQbRFXX2KYLxmlQI6p1YFNE%2FiHKI5amPxqeciniHteSgMaoO7ZCBJkjM%2Fa0sfUa5qQF3mxjK0uR%2FL8AT1VjLn8ggaIhMzdmvYu54dtkeNooYY3%2BCqyRvbk2vEwoHW5N2HLEpUGHdDTyD&X-Amz-Signature=848389c36a6e99000ad9fe3dd07c0d34cc699502ee730ecfa9817d149574f7b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

