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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QPBNUBK%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T224153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDCBTG0nBq57RON8vzQS2DBdHCg7NFZ0l4MSALFx8kqmAiB4o0iacPASFtD9sve%2FJ1yShK9A5ThWjlK6TUZCwBrauir%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMsDFsnbjw9NNrErGOKtwDumIcfFrqrXsKUazcOeDwb5n%2Bdk3gciM6aWGTZrnpw24MChT8%2FZeZAeqKKxkYE8uBt78bME3xbB%2FXed0uKWSDA81SAxL3auUWtE4T0kV12RxHno0K0VDgUK3ayvw4Unepl5Q8rs6SQGHP8o%2BTYnXpwn5YLEaYFnz4qV4SuLSYnZ0%2BM0hsoLJWHHKbsMWZnm%2BgePUqO7gR9C%2Bma6n99emJha5ZWuN197%2BN0TAz8Gksm5jsT5JsrPfCZTpweilNt7Zuerb13M0M6YfgnIArIZAMv5qw720Ke6kbabEt%2BF0T%2BNw9w%2BPjLKyPi%2FEnFFM%2BR7uleS3UVi25FezS09KdOhTVc0Q2y6VB5stKCoLKlNwSuXvkineZWuhtpxiCIP8bV7YZb1htHYDbT3%2FjdHazEjgQn8i8Sg44oIJpQ48D5rKBfOqkRP%2BRmNKJ91Rd1WpZt3qZPbL8roQ455oomnF0E2tejCB8%2BZ%2Ba1EP%2BdCZz9q48IxfExP46cg1lWO5BSRMzIHLn9yQDSdjfWOTV1bcGg4%2FAQxbR7v%2FHvr5dn12Cq5hLEiez3YZKs4h%2Fsnql%2Ff74m8HZ17o0BD%2BMjYRnt9zog14GyrreuYGvjb5MOykpE12wtLkdb7Z0DQxZEy0zS80wpdTSyQY6pgHoVzLaHpAhY%2FFZ8Gse3BgFH07tFYbE%2Buiao6%2Fybqe23GfH47a7oho24YdYWfNLh%2B0gjdLQr2Yr4cKf%2BhVhPMKVgCQe5ILiBPQ0GeM5zVzKThopYqDRLzU5i74LbDt15FZht%2Bli5jbedC1wpXHlHUK%2B%2BJ4nj2kfOdWULdS3HSjR7AqvlGD3YDC5DWL42WgCVEURRVT%2FF2%2FJVCGJPqjiolsA4Q5zbd%2Fv&X-Amz-Signature=51ad93a791955d7eeece38353180b88145af49c0d2a8ac11a534a4b2fd2553d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HM45IEM%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T224152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGsyEmbeJUSk%2BlGeEomLggKIFnwsnj%2FYJSmkWyx0kGk0AiBgH3bdtW0KNnCW5G4vfyJVA2HKcrRemYwkOO6vYivmoSr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIM9ZsVtzTU4bCDYACfKtwDghDeDrXM4dW1VDV9Gmu3Ual%2BNDP9OYHQFyNIcNlQ4eW0Bn1%2BIvITQU%2FYxqUjoT1gZoeMHmN5GnyZ%2BaA0U%2BAWfXAIYfw%2FNDDlR0naaOW6uw2ytH8RjIQRY75vbgfFow25m8EjdxP7U9eFF%2Bcycf0SLTyjaRyD0UcB0L8IvZkQuXBN%2F%2Fh2gtuLeHlmDgLKhjca2qFoM0gwze3ewXyybJHm1ChJQzlucO10W%2B2HReRtjKZs1n1psnK3mZDJyvACvidaaHdUk1Th5UJabdOQzg5%2FDTs8fxdMtzYkmnWUU7oU12TFV7J7JhBAz1HV0bHjDJUF4sV45FT6hBIORT0M3m7f2RXVBLAWxFhRDGGKOdDEmEiebR1guRBVge%2FE1%2FLhW21G4soB8GXAa5DlcnE8okeW%2FWvrJJAVuWvKG4%2F78tq7o5A4HpU7vxuImlXnLEyiOL7A85%2BllNjeM%2FwwIqflXXknKswJ1SukKxbLi3gfYJkn8h3s0Uu%2F1uH1Yu2hR%2F3bPzTwrwzfXxEkfia0wbwFEWiFkIeUEVmkwr8tKZxxVC8LwxthetX1sEd45Db39DlzEcj8X%2Bjy9LLp4KsPoaeVYLpxdD2dL8sg2PmmcWfg9LYaIepQ72o47XmxJgLuHoUwu9PSyQY6pgFEUjNdzJiXWK%2BDcmUvV3nLKbcdB50u35%2BehH0O5ODhvg6sjCygGheqRFLqubs2L%2B4H3F6yIoJCVBcVCXwE7uKdVqdyzzSTI5jb3XTIsbcK4J%2F%2B74eYn8k1rRjHd3a3Z3haaPP15LprxOcLeTpBY0dSHkpMTQYmIYnVOv3guOnOgGgAdQCiK8Apq8XKu5XOA8ZUnE%2BnpUGb1GOXrN9t%2FRIGpt3u6XYG&X-Amz-Signature=c0c469d4def0299c8fa9b6e7161663d54f31dcf9a486e6d0d1fe2d5e8b5b0c22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

