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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTEOXWFW%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T145556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBu88BaXPNi5pNxx0190ZR2DQzIZ33AbmBp0Vfx%2FjJOOAiBY3v0oJw5i8bWrbpqU%2FG3018myjgjv7i8uWf3cCPfpdCqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPZ3aYNw8L%2BC1csivKtwDvrPCRVyhgExpXsyGxlFwVUEGf6F75nWwW1vsUPFRobmOn4rea4XTQJdvMS3CNtci0KTVSIaYwUI1pX%2Bmz2FuD2HQncgAC0gJSn2MAA1yxCnitdNDHu6HFDSt%2FTkpjZs8QvQA5nIeinUeciFDgfihmrGnyO83VF%2FAO6701QNQEU%2F%2BTwby0W4QvdMnYjN2JQd6yvVeyLI9vHYsUlBQSK1QHWq98iJ2Wg%2FtBmiILMHRs9eaPKMRN1wJ6N1FgJWEsFMMKMSi3mQzXMjhg%2F5v2FnBGRQ3Q2JUhugvIYzc7PmRHJ60Ax6OhX0W6jGF3Jjb68jdb0LsC3%2F1DM%2FVuRQjxJleFmorIirlT0EXglNBMn0YT%2Bn7%2FXp2MdElHDU2czAS1UH0lBBWrgamG7Y6DJ2SKxupdPygpnVA8QytSofImv%2BpHD3xcMeeaOwiCclnCiwAWF%2FYP3XjTc6WyjVolpYcJ5ke%2F%2BppN07LOxmV8V0WIBCnn9i9IaDCFdZVjxgEB1CD%2BICaUk3mFhqJOuFOS2g8DgwJTz9JMQt%2BZLsbG%2BVt9MwOVbNHjCH2srgK9%2FipDb1xpHWVXTKKwHx5HxTr6dKyEPN8C2kazxYY2JZyJQEfPfSUOwmqn4G0XGlENUqn4Qgw3cLbyQY6pgHxo2GM%2B0q3TYXE9%2FnCKlaNwXJ1id%2FseTR%2FZ2t8yEhH6cBsYm4jeQpqcFfovbUBb%2FbHU2wPQkMiEllvc1HYqFFLjbQ5a3%2FD%2FF5bLZz5P%2BcnyY9wgMOlVedhZmHGcciIccmeLN4qmFJ1x4eiOnbncaJZi9xzAXhbk%2Fp4LkrhDsd7jLUNTak%2B8kJpMLu20N3i%2B%2BUcYQwHFCUPMEWc6zKhnn3psoVhuF7j&X-Amz-Signature=0d8fec67bb141b4014b512850c3d7920f4017446edf85ebe12de10a5f5ff7c8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DNXC6FB%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T145556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCBPbWL8o1eEpqdBqwzESNOo1%2BN9b6Ilj3Q30N8pjzKgIhAOD2WsI1NWDSasMyHsVJK9NUv3dtyFzOFJ6xR6qdVh5aKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwB0oQuRKJyDA%2BCw9oq3AOOND8eJ2QgmcFuGyL5L%2FNU4l2IyXTOPFmG6F6VHTy7OY0qkvCrNH4EOTaPwTYRrbPBJKVKoA1n1pMPNgINGHuRJHzBPbGP2PGU893P3T00HRDhv%2FB7Oc2mRp8zfL8sAtSKzaSXeO%2Bq3GB1LSwpPoZny72YytgMh7ZT%2FQO%2B16FFgpqNIPr9BV3f2SstKiB5Ew1lf5iqJDWzog0Qit813eJaFaLAUqSxxRphp%2BS9t%2BO0d4E0KxaDD8d3qE4z2kwLPLkh24bAj52hffdnI%2BzPb5ULR3T8h%2Bn6tgm8XkSlhmf%2FSiXfJfQGQEiCkzygAHKUQlZUlPntaWFbS3IIv7Yw5amcyoxfb0M8mVyDXLXOPYRVfcBWL%2Fb0CZ%2BNoTiZFQMZL0PNDO9c4lsXJqE3o%2FQaydbUvFXmly5xDJ%2F2BtN%2F%2BJ%2F0mvaB46zj88KwR%2FHCuVYiSTRbbkJM9x6pR9mm2MqHpgbSfp9YE%2FbnHao2WZ9KDlvlqUxEPFH2QORDLAZf6rQQplEdXlfR4UnqSFL89FD588982KJcWMmqS8Q%2FUgCmuJrEBs9bSA0J6TjyHy4XWMjhRb8ObUroCQ88sytWwjr0XN2vHN5TOCqDXeLJf3rsX93jGT2KkJHLL376V6ygwDC2wdvJBjqkAW0I6DddU4GimyUeaGHUnr519eUV7qUWY3ca0h5%2FOhRjsBBNDDc3hx4aCiNUTC6SLDAhcCvBU3J%2FAjDuqQ%2F%2BKO%2BDoW%2BfGbRetPSN%2FMp5tUc3zVlYL6nNhLr4H3hoP8OIGypw7sO3m0ggQaCAvnHD36oFAMydRiECcu6jVjHHlqRaPTuo%2BDFQxBySeARkUTV%2FsUTxYTIT%2BhtSPYgT4olNo7l3%2Bemf&X-Amz-Signature=809c21f48936bf14d1d72698ee2f8675641d6d0bc6cc5d9b70c89f8c96572912&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

