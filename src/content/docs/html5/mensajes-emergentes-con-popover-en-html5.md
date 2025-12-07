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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3QOQTAS%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T211929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFyzBZa4VK0xLeTJuvgIVFBjH70U2JNXpFsMvmQqyM7gAiEAlxCAW%2BWz76fVAttu4FO5vX8CtNHdpUs0ZFzu2KuQotUqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC8EzhRdtWxTDW1xDyrcA9ZacwKjhRiUyaU5iQO4BKA3vUdKE8t4GuWGMFwxjBLtUs0EZzjdF0XK5DBYAU1TciCFFxWiO5s7isHd%2BT1Ph0AokbkNC2fmYHDI1On%2BmKFuPQ1dS3PZbGJ2GddpTRpmHZLQRk7oJXrlJI5EpOcRDEGKp3z0NzqBXd9Z9%2FyaJ3fTL2XsVUJBjifndH3Hpbej2m3Kiq1IYVnIyqv5dZNdEQ7yzw2oiqGejYkXPhvlwNlIJKunomK3d7CGTjK2c1crWSbnzDaWpUQrs3Jutg8%2B3Fi3SIm6cHACHiDxzSIaeebRYs4vNh9YTbAbEeuYp%2F4si%2B7juUCJSKftJZIXeR03sIggvDgfSjFZehr%2F1oYpde2KfhTItMy%2B6Q4K8pg67sD3643fgFzpaU5LS4deH0bkUYnANq8X4DNAlf8MSwiawuCcmXyOF6kwVxEddkuTyxLi4w7jIyTzQ6Rvw9pzyy6qZlBehJEg3xJKZPX%2BrObvfR%2BjNL1DepW2kjxEQoh1TGq3TQWkpJBT%2BlfTkmESQb0I9t3%2FG1sPonYfpFjfOSUIV1BRs9Ia1kJ9MCxnqkG1Wv9nhAo%2BE6ae8qodxxejNWBRZazRCv6O8cSLGehY%2Fj%2FXLCi610746Q1K5VNfvHFvMPXH18kGOqUBw9EhadM%2BEhaTIwS5YE6pjBsBx1%2BWjpiyZN0u0b6NpacFmtaMruzAvmVh%2FLy846AXA1%2BL7LvxfGybh68h7GKKvXq7gxcVyvBfiFrlWSWoWQ1dbkNkhWA4mk%2FikNslRKqLKHl6xOkoPgoTuuBQWKFogeOR3cFFfwLXdtuHRFYlLwz5Ez7i9nHjPcutWq1N%2Fk26WFY%2FaoE64Lp0y4LWYHnrrmdXKXoh&X-Amz-Signature=1038c402aab84166e375f6f72aa759b18b8942c2b14b6382b59ca637273931df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYXMJ2GX%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T211928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFgGFN2SpyudKlPt6bcnyJmm7O2yUyso22h1sKRvZHM0AiANY1LFAlWpP7UdWtY63EeNTuz%2FEBPPjKveoFDvRaQgdyqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtEv90ZO7TLSlDt%2F9KtwDPBIskkn54O4lztMa23PQdFwgjp1RABJ3%2Fi2QGUZ%2BzchQYJ9hlE1MCqa47qlNpzOOo2v2fjyEJXMFCah77BoVj%2BLTbWgqFsZ31%2F77accFifDY%2BLsn%2Fpu27Ku8BycrPdbPOEgs8VLE0xFFaQgG3a1gjCJ0Czd%2BknrhdmFmzTDWHUQgaFjUADqF79qQtqFdRFYPr%2BPdpmoWoW5%2BY16l4Lioti75s5O65Au3BBwqspLxb%2FB30f%2FdF01w1b8SZPLubM9%2BoxyKWGAH%2BdQB2QPcothdM2E8IhkqvY%2FBQlsFOt7RlvsQ%2BgNq2s5y%2BhEBqDT2gzeKTtB4OJgS1bkuFAlAC3qR45HdNaWqGCjbis3VsYYVrmU3uEAwqVDgj6TB%2Fo2abl7QYJ2ovsg7g%2FUhZlZ6b%2BfveSTKJ%2BOj207P3Bo%2B7j3bgf7PLBOl8679Pkqvt6pXgcs%2BYw9q6ZVknRbFekZr7Xeu9LJqHeylCsQjv0vPFgDcW%2FW%2B7JtVolnbtxkoNL%2FhnYyjBZdW2NaROP5yWfFTMWkISafk5JqnP%2BVezOlv%2BYCXHbX3QEX%2FfNrv%2BIElJuyofwrVf6YJpGXyXGj%2Bxu67QYS%2F8HjgS2RLO9Yvw8K4SpNde62%2FCk7X3Ccwwunwn8kw6cfXyQY6pgFGrtCg0RtR9wBLpb6oZlcYTINSla5udVzX%2FHH1srpA3EAhpRx4x6KnBGQqzrdURlj9T0CUAP5YMtJqCEgm6udRORQBF6OI%2BTmsqhGTQHmEkWZBMC5KR9UGL4XIZ8Ht30SALRLtudD88lB3TnnOGPDF%2FOx4x8c5NRa2eeVI9fgv9EPOranEZUUBpLcYmsZWv1uT1InplePV%2F8G2UoFPFM44JYw6MVaP&X-Amz-Signature=b358a0309bb1d823ff1fdf6e38936220010c769a50542ad66568e4637b5d2156&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

