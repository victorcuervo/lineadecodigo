---
layout: post
title: Mensajes emergentes con popover en HTML5
excerpt: "Uso del atributo popover para poder generar mensajes emergentes con popover en HTML5 en los que se pueda incluir cualquier contenido."
categories: HTML5
tags: [html5 popover]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KR7HPYM%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T113436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIDiqDQlzqkA52UhdUq7qdQEUAhw04UyNHwR44ShWKXZtAiAkn8aoZVKpW8cOP60ajDUXYQD6tFT4SqwPuq0ifpUX5Cr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMcZojfMet6I8U%2FOJ%2FKtwDoJDKgAMXLr7HpdNQG3xQoyIjtDu%2BzPOBgf%2BRUxaIv3lI0qmHNRINfgh8RaLeZqW9OVA6l6ky7dTjwV1%2FSZWpA0M0pjcrt9yWDXFvnu84F7%2FnzaTtJQJeEwc9gsqz5bGu%2B4JgWZ7P4Wc4NZi%2B7JNRYuUVz8DL4suTXhRFPCIVs7974EzF3xMlZoiyU8kx0scgXH59Xpn9fZ22T1XqRzznDLAcBSfVEHXS2tZ9e4bZ8DhVTKaIFHi%2FSgsf2NIiUwT3Rz9oxRAffKeiN%2FkBLM7RfgQlh5yXP4wcqrlIfU9GGaMvJQmOtObzjTeumd4dAczuw4J0VthnJKUTv4uKXG5FImvEHdyLfq8rphzJpxB5yYwZKWYRM8dDd1yXfMdVN0grz7iCPf3oxhS8XYC6TCnmLyai8Ld7T87sAt9o6kEL95%2B1IdmSRh5BB%2BZjpYi%2BNCc5%2FgQGX%2F0eu8VBw%2FAQSri4c6Fo%2FSuVAM%2B9Kij5PDHQ6dtCe7K1Ub2FgUdaa4%2FsiXG7MIMPe1Ew2QPEraUAXeEg0mh8gPV%2F5oi1FAzsYeRvLs9L0YI80D3t02%2FtJnaDWAJK4CQrYQMP%2Bb17k%2BFn4d3wHwfuz4tky2%2BAHeGbF2cdMD57evSIpTJjWDaqFF0wva7AyQY6pgF1rO%2Bcia8kfnXtX5m6UX4O3Jt0IF2JOu7wvRG%2FyKG5dkrc2yjxkXPumTpDXMb4GShXviTumPH4dX8w11Efz3h1XE38NxqlGcXqt8BJ3x8lGTbW2Ic8ieHdxWjPhhhE9HwVBBGXuRNQpvs9j%2BSlAC8z8T6aKET4hf%2FUh9iw8DmlPgMX83RaG3fdvVS9dwHMS%2F8nSaOgQGjot2ye2dDAy9LEn2GDc8XQ&X-Amz-Signature=2117839e34c12372f59822b5c7fa900258ba1db4f707ad2975459fd486c22402&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YQY4YFQ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T113435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIHvPdfY7AeV%2FsNPy77h7E6A5yikvMx7A0Zs8o%2FCK1VKyAiEA%2FyKYeb3WiX6HI7RZxsIMMjqXAa%2Bup5R3RAroKmmgwsQq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDDZzRasODB053G%2F7VCrcA1XW51s0ORGsJHmnpzgKi%2FddmakhkOGRujEUyCRQ5%2F16irYl4fWwV4N6Xhcakje2Y3B45CGpzHw7mnU1r6n3ZIK713X2FkMwq7uHau2BzFPQr1714CB2LVck%2BVuQQCBG20Nx9CTHgrPVF1hOO9KMl7tZfCoHw7I0nOF9wZUiukifhIVzIPEbQFZTtvxnttM%2F6mFvo6Y3X%2FUEmTaeB1oLiahgD%2FNI2kDYOWnQHhURXJxc66ae1SUaACGEMpbnGw6pOVSVh%2Bc8z19SkOEoEZppL6wkJwQM1uU9XTw6momj8iVpkv%2Fg%2B%2Fo3Jlnc6kPtZebWE%2B%2BsUnLtAbG8wu26ezWOEbR2TJjEnpxBKxqgxBLjsTrjpfDh%2Fhv63gIzzIq9hgFaWPP79ceJUMyaqhZ7PLQXgZVnO14%2FIrvcFGPDcOKXAsA%2B9oy%2FVlPpO6JXhlJHkfOs5JWwi3TBBPNFurIH%2FDNP46%2BtMa2lNkv0kB2A2ExZ%2Bz8TzbH81DeGj3xXwNH14hFUTI1aoSAfVF5WOCuWpuJzwW1Htij23V%2BzuVHckb6b%2BiwTZSjJLgVEOCXRb2ARkFXZcB5%2FN43kZX6njakARsbspI2sHLv3fjxBVBEvu28lUt%2BzF6gOovU5hdYV8tebMPitwMkGOqUB3z43HeRZkOZOvOxZ2nOuJ0sU6V6s9R%2FjpqWwFcs4grYYEZcRdqERYWwz2%2F4COwZnaEbdK0PfR0bYPxyHNbP%2BKYFQ3Cx3KsRuew3bp7ehyVkOZyc2TxBgdSqoVJGxbAuytOEF1ymS0LN%2FAwqleA4tFze4v9FsQSyaB41jqVBRIDO40U%2BpXck5lvFd5JXkaO8mmWZ99SNxXcKD2dy9BFVf02MzbR%2Fn&X-Amz-Signature=2dfe8c1524e5bc25039d913eb50f6f43ea6d5505fb776ff53eb51e55d9bff924&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

