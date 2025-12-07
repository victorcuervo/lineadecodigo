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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRH5GTPQ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T102451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDAEjAwq5zPIKLklF5GfAPeIhRq6LTmjwi5i48TNOGDxAIhAOqRDHOSqhn4KA4gU5pmF%2F%2B7dOe6ImgTuEDre0AWic3PKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwQGTuuwgEw78xOTYYq3APd4PaOovjUnPCC7hQ530YKuLiml%2BxsnLyL5njOjnBYMaH727O4isFMfhvd1HNof20HzkyzN8OlY4Ogvse%2BCw1U4gEvCgvrU7Fuu30oryIK6t%2F0PEWhCfLM7STx6993S2saVSwfKIdjoFn%2BvebnOdR3aieD7Bb1rtDQilmR3zyb8g7TgmQcK%2Fw0NE6TPXo6752Ril9t240%2B9bvYIIEucpSLXzXbgunap%2Bih96%2F54%2FBqqAqR7JrbxlVRl6FdcbuRyJApvb30m6Q%2BQGrBIM7EdnGnhzIWkEjwnCfrjbrA%2Betls%2Bg07Cn5Qh7oAdM1WCzxP31uqD6PG49WMKh68qayJyft1%2FQYzkqNLHmYV9UzJU6ztCYJ6NAaW04Fck33drO5cyta4QfFU3FPPx5eYc%2FxkAx7gclF2gL4vAKfp0cbl7zw7FlWVMZSRhu9VnXeq%2BXp%2BR1eVBLdlZHGaxP961nz8fa%2B8Q7z2j%2FtyGh4ADu1up0K2jbmtREh3XOmsKvILJnbdSr5Hr6EgTAEjU1fgrSX67HZ3%2FU78W2ybLB0%2BNIxAocratA3weFxx3KRkgYnl4eRkTng2vVo4gEg%2B1DWKG7%2BiEZBWiqCCHIfi4FWVxSrl8c1YOzsocE01g543e%2FOHTDQmdXJBjqkATl1xUkHQkuMe7Uy7mIZdra8j3wDHD8uhuY1JH41dRBbQwOCxPTmVdr7quQO2xpVLD4TjQkNfureiRn9GGw%2BVh1u6YQtHz851xdCTrxyaYIzIr3Tc48iy%2Flug7uwBJ9FgHV1PST51u74I81ICcClyJzJre7xF0vEWxbHXU9PbhYOoN3wkHTeNU7C7as0oPVWkBD8DEVgQ8Q5pbSW1qm2Tfkp5Kb6&X-Amz-Signature=56db16d191fa102d8babc9a749ad4d9d97d094ac95ff62b7727f4c2b99b3a861&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEG6GWVH%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T102451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEUOgTkLgv6EtB9MsimTjE%2F05vUf%2FcBAMPVP1uMIXbAXAiEAn2vIX0XY2Mj2UfYWUk9rU3UerUWpc%2B1TGWb6t7AVuQUqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFvtomlYtiwoLt%2BlySrcAzUaNbIYCzTpuIU%2FvKDmby2Uu1D08hMvoFsBHNwIzx4DNO7%2Bvsy7CaeP5nfBZ7lvQ9mP%2BzU71ilfRIdwZiYCVdGjocnpE4xfke7MhdvAdXI8DPl5vyEytS6%2Ba9zfQuOueUeBRM%2FsSn0m9q1kPLzZK%2BVbHSlWzx%2Bhrb4P%2Bz3eNCxLGAsw%2F7V0ojtSiX1Uf4T6FdpKSdSnfR5JOOo%2BUcA5WTSX3ifpPP8Yof9CWSG0GOQlPjGFj1Jn5gEtmvgbZSFO%2BED107FeQP4kCbAPVdSJAL85r%2Ff%2Bhx6S%2BovwvEDUdk%2FfFNWIBFIi3b24vXdsgcyGEowbV8BN%2BBXMxzbsZmlW7cfQFgq5jvowI7SwWDIWP0FD59qKAnvdkESmo8hi2lWdPxRe9kC0hmkNFzSGLwRNLfUv1uVsJgbdK4KTyb8gukeFwgDMtLfyVL%2FvdIHcOSuvry3QRekBXDA30kbVnrj3IJ8KDB6nx6uYzb%2FiGdKDg3pfipld40McMcQW6XWiHFHKE6iNFisOvCTJ7yeh6RoghE8LmOwE6zAFSaFw3qZ9sGZC9Cstc%2FOeiV6BV37J0pD4rLbaEjtbqZz97SIrIO4Jp9ZT01WSSm0QtMaBGd2bgvASjksSYTsTK29la8z8MK6a1ckGOqUBovHsJSWRdYtIpQdyRwIgq556y1zWvrS9bTrCFtSP3Bipl4cN7JRfHurSQCkgJXrxhmYF1YNqTXS9x3iVERkIeIFdv5EXaq3XXBRM0YewOnbPD6WgsrPRcPo59fBmqVu5TS7m%2BgP8PQnu9vR24q7gnkxJmaU6PWNPacxHf650mIxvhqATWqGALFgV2Q8LoVcs7pjh8MS8ppp8vB7QkgWBEq1EAY3s&X-Amz-Signature=f1cd6387499929a3a2528db50d8781ebb70eb66e8174ec269350ed72d22f8830&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

