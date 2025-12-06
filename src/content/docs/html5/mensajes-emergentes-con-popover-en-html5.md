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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQA4FXJZ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T195253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBEUrcpkZxrUD8a1a4ESIGT3F6wGvp0rF3XhVhCsh4F2AiAoXkhOfp%2BhIvXMpb5c8StU%2FrxqzZwDYFN78Z0aHONvkyr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMDhfr1GlYtEqrY9JPKtwDU8S6ZaqWMkutguCcNJn3ne4a%2Bq60u6J6rlQmdEtgOnN8IIebXQDlPL3QQXFEWf22xPvzlJH1hq%2BQ%2FdhWYwvo2d83ZmvaymugjSHcZ5p%2FoZEKiZoUZaP8ADx2SVWr15XDRpDz%2BwNdeJ0fq3NXw8Tz5wJYgu8XsgkTq2YSRUBddiIN4lzHSxM3n86czHO6lJvx7KIERhvAvsdhgwdOUiSfyqjSxGT%2BS9OfqK%2FfPs8JnBXAajnqgyqGNsCLOXECbc%2BTl6HQyZD1QozAgbxBAzmmwIGwegTASnRSmn3QNKyPD4%2BJ8DphKAlSacHRqq3iJ9AORQJx8bCpM0bzZ3MwE5I3NLzgNWjWhyLsdG8eCfTJ413sTDQXppbjIK1XbVEmj5yzE7qp8Xx9w2JsuN997cQs18axB0HwWjFkC5yqxS%2FiqwgB%2B0LXm2rNfEw1rr02p0djV6qx4VQ%2F6MTV6McCTTuqE4gJ9ldNaiedEmGCQECx6dIfKYOc8DOQwY1T%2F%2FOHgKd0LREUYVVmxGjqALm%2Fl6WLSre%2FK%2BtwyjwNOlwciXgco5AVYcwljeY6EZA3HlnU95nNbaTMaas2tjnsMEfBJGvACIQRyAKBOaYxQwQ1A0NJa%2Bta7U6S556c9ecc%2BrEw8YbSyQY6pgFeDw242u1Gc3n6MmpsmpNu2rpgt7Z%2FMTOYWZkB9YakvBFVuPKxf2Yl%2BbeBdwKO4%2FJkykswshqguU%2FnhUi0O292pczn8nlJqPYYSe2bam39C4rtPD5MFyD%2BAul%2BeLlz8JhT2WcAnRiwFR%2BUv9kDPTfMsHwNCD9EtMR%2B%2BY6VLHcxGF7WJHYO5Sy028QK4YybTUrF8vh6sUgx%2BRFk%2F81MJq8eVswflP3o&X-Amz-Signature=dc1bf30e799e20d1ace087a506ea9beef36e75eb961a47c33cbeebb093a27ffd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VL2B4JHO%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T195253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTKSvwsM%2Bz2tz5yxX4NDgGMSJYcb4Z50IPofeav5qtBQIhAK%2FFh%2FBZd97dojXCGa0VbIb9n2BJccUMEijGHNEz1xIfKv8DCHoQABoMNjM3NDIzMTgzODA1IgyO6ism0bxdSyQTEOkq3APjrdA4r%2Fu44xWQbyWLPPxhWgwTOHB73D%2FjYHwIKobGkt0H4WL6EwnWpJ3o%2FlyWnvGSwgiWusiCHQZHVsfl6Mzz33GNb%2BS0aZKn0JfYWmrvEgKeOKfM0oGpAvhFxkZAkyxaG1%2F6f0Ig4FOAfdKBppxmeoZE72rA9AR4Ky%2FQ1u%2Bw39hrX6so9L7XXMZIHwIPoUwg3%2FdnZV0GzBZQ9xvu08HfoWSb%2B5s%2BOhtNbqfG4m8aIQi55YsF5XgkzmYwsoTGcW6o%2FdkSqd%2FkeNCoDB758sUEElQd4%2F2yOi4Vqd2VmvU0lDXm0BwOHz2iAJIW1rSyBQfgecrWCuQdeIoZh%2BQa9hegurH7NyfWicPPj09uuyYXLFgYjFDLqEEXb%2F6zSqaQzCr9t%2BMpI3v%2BG72b1p2IB8Eh5gKh5DcFJGOGqUMcpkpiROjIngbQY5OMgss9jgOKGDk74lNW9rY8jQJFCD64yK3qYfh9%2FH%2BDjfKSFE6ZlgescvN79QVu1Yc5eDVcaA7Z6jCZ%2Fvi6ulOLIzQrnou6qCsRGD%2Bfel8GNavDx%2FYWoX6HqiwYxRKMqmJC%2BA9jkSbW%2B1WPKBod4rN2SOZUDmF%2FOiNZTBvB821n1GNqDV19Yx%2Fi1nmLDqcNhcR7VBPd2DCyx9HJBjqkAWetZ8Rv09PyJXkD7nePN%2Bhso8cMOwHZZ7SXxmSp1NeNbLWfW2bW8SUa9lhvQYHgQfsrPHch5IO%2FHsaaJI5dniyCnv1A6q5FW6j69p3Ett%2B6qtpGlPSaTAEtPfMgv%2BKliB25EFEXQVwSN%2F6pwbv5q8CdN5hsGeUyWx%2BiT7wmrCn2rsKTX%2BELcj8llA6bKEi5TPadcxh2629ya4n8seOGIW8HIe7x&X-Amz-Signature=ff715821d4632ceffa100e172d272685057e8cefc17733ce31c4c3eb1421e5aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

