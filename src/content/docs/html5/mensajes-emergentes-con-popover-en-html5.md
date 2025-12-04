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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNWSLXU7%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T094820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQDcAYV6iW%2FbR8N8rtjtFtF7wrMFJvyC1GpqLhCucAIyoAIhAKlVBXgLHzDvMPHwknk0%2B2cCtlCw8Eu%2BEdGMRTGClcMuKv8DCEIQABoMNjM3NDIzMTgzODA1Igxty7MtWz16aVUiT7Aq3ANm2NnBjn92fjNhr%2Fl2McyTg0Au2Qk0Gl7ckx90JlpHOH9PJgGyogthyOSS1YWBfOhH0I2mDG98jt0sAry1QxNi%2Bw0sT3d9RO5n46OrvwoQsRDEok%2FVSOaLwBlU%2FdGF8JenqkOOagjMzQIht2rBfJ5DdobdV6wr8KS52mh22DqcBA%2FH0p3L3JlnWQBrgU0sTsmKF6G%2ByLR40wlk5CuYtA3zNLXRakSf4kKKYrWDFKHKC%2Fkn5cOqRaVNBFhRvC4hlXlJUfD1cN3w8p%2FkVkemaoJR8vA8dyl6otnLtlX4%2BaCP5FRd1ZSjK6Ch7yxTNWRP9J8nplOtXhV23sG7h09VBaYBQmAvRQ7dhDcZ6GYjYT9lFlkbcJW9pUDjiOVDF8%2BtGqCNYQibEdEuvSv4KnXgFl1VZz9kVrnGXiMKQtJfVEECfksoN6XrSZxzEAYvb6LL0fFHgSIheAyplpW8ybFWTrKTBgNl7UStRRYyMPf6lA1KHPTOsyewqwNBnDUfx4%2FekIXsYeW7UcBgJ9P9ngEbn4hvAltfprexQu%2FW1y0QF7Us6XDYtkGV4f7R8Whu0E9O%2BhDg6kVafIQWU7lAlsZH2kavIKPdOG7HgaLEqK0n2VfXz%2BayFkw0KEBvNZBQpjCdqsXJBjqkAZGkkvxHq8LotccaWwGFeVV8ascd8FKEJZ4wgYXYzWLotnlLN6ZnrxIwZ6nFSzRg%2BEiljpx2pfd6NS5T2FnrJFxW3F8FtMdBbVhmbTXRezH%2BlwrwHZDGUv1iSSQT0ESSlR79Ol6qJ9mp3NlidClQclDZ%2BR0B107%2FJOIgzkKCnofHMelA3akSvlFQkghJozuFAQLCiTE%2By4g13jRbOCJ2wzKFtY9D&X-Amz-Signature=c9ffc5d25844fb803ab61c482308a5fcf385a9ed4aab4e2bd3c4b5485475bd0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TCDPDBE%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T094820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQD7nO7562YFiR09fd2S%2B1YzREgBsYnrrtBG%2BqIbM1E2xgIhALPwgD%2F59Y1fdSgxZJDs1HON8kVvFVHBexS4JOzh%2BPWKKv8DCEMQABoMNjM3NDIzMTgzODA1IgzsnTn5O89d5q5ikZMq3APFxeAnUcSxtPGisQUaKKLwclD9vPFB3fxtuSuL3hnf%2Fqr10Ecj90IL0o%2BOOrOANRtcQnus7k7WzoVLiXwO%2B4Rb7Z2a1vvOD6S1Q0m6fz0bs1%2FAiMvRm7DO0j7CDKT8RzX%2BXM8EmPFIPlfrL7RJLmxwZ9Kbd7bz33fcmcnpmXk4s1PTW26eoVfLH9F%2B4WwRvfNLTkkkFOVHKth1d5Jy%2BDt3Fib2XeBhSIILw9d8F5V4WCvJCorjdd8mN%2F60bGro8hiIVTTeiC027xgCv49ryktY0XvpNwvOUlCW%2BzKxr%2B73TlsYFWJa%2BNwI4SXPM89UoLCQmKGj8TgFlI2iWUTNR5tvya1sqmxM6Q4PcY0qgEwmaP9hY8SV8OcbQnOIzOIe6jZUg0htvTDvqmnFM0oiQdVOhGQkXYMct%2Bdg7smrp%2B7YCkcE3hFWhHvaPTKMYsK0AqyIF1ugbNdULyP028Wzp1kWkUtEQo0%2FjTo2zKVG2iN1neV5lJ4PKD4dGEcoVlsYHMaBerw9ZHSOSh4LiwsQbAumPIAWgwRN0TdfaU1o3%2BxXaBogdoWLkB9C8Q%2F2MWJBCOGsrY3v0cmY6pF5lrLMU%2FL7Ts%2FjPbU5rnT%2F%2BGrV%2BDgBKLbIRGm9pF4DYLpotDC5qsXJBjqkAYquZoYslsRyXxYXopXOyfpWh0YZKNOuf04ir99riliBcSLK7s3vXml7ThCqqjR090o9VcWU6Z8Ho7JFQurgMFYrj%2BL6uJ6Ly7KqDeVNaAONSryaTN7qZ48qOZ8Q3zSdiqwJP7b2oHOsZg3fCSgHKcgxEeFDKg%2FLKR4EdcBbNAP9q%2Fp95LaWrskarPeeUXju9t14ivQraAqSE%2BGO9o6uGfWBLx6b&X-Amz-Signature=d801eaf40faaefe76527342df1c0dd8863f0c0fc519d0efc62dad4bceeba15cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

