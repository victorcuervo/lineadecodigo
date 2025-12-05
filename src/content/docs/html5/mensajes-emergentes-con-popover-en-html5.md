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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7TRJVUA%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T181945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHM6oXOfs1ZoUdxrrL3hW5e90Qy%2FJHTGqAwPMh0YUWpXAiEA9s3t76l9wleyG%2B457DUFtBYa%2BwZCyY67cv8K0KoDQisq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDEK217njXDSj4ov4iCrcA1zwPAhB%2FT8YsaoGKna72tlFsfqSYlicgbchYzNp0UjLN9%2F6FHjjzwym4U9vGPv6vy87CSmYtW8J93j%2FgR%2FsRNFHkyciJ5F%2BakjSKTkV9MhhGIvSru77YgT1Kgj%2BzS4UnS0V4INbEzcvZd6YoWgIVVF2F5CpcJnTjcaOKzjahdvshA196wF6DBZ5j7ZH7jHwBdY3t1KZ2aa0UIuEXzJtGcPfW3fTb7%2FZqZ0x81v19iL6CE5Qs6gBSrPiwsjFAN%2B0Oh7o0%2FyDR%2BTcm2chji7e1dFTJbmn3eBnJ8gzzopX%2BDWvxqK1YY3pPr4JMHfGF5skMJzevVZOdp%2BkzLRDHDnceTrTBYEEXw17Hz8VAdFj53HbWqto3CWuvHNCg2dZpv%2B9gYxsU5OpKsHrTWB3Phk3Hi5lYfyINhs%2BNBnKLAqqLHICwKnBaRgvos2HSg66N%2BQbxWJ16hUerUDJN8W6IHNf%2FELTlgYoGfPY67vp8MTNQHitc9VfsiqwF%2BiNjcj8MMf7D1yNsreFu2QEahuYuB9YhqcbnG3A4%2FIEMcEi5ksHy%2FffJI9E%2FhWRcnV5GNMZtDe8TGbOHQdv%2B5v9msrRgSdQuLq9fH6mgE%2B%2BSJtmzI%2FxlIdGZrq3Se3IOGmv7stAMPfpy8kGOqUBhzSjWiRsyHIfoAP5uZAramEXgF16feE5uuao4PAmp8kImSyitqTHUy%2F5Z%2BrNYqpYVaK9OgoHhA%2FSp%2BdtO1brteh6%2BYmiNPzXJ1desg8nyrqJanFwuBzZGqOZucKSHDP25MSOZVe9JT%2FFvCA5xiyC5cZAoDEuw9QL8BnXb4PoKjfFa46%2BbTaaxfLrSyc1s%2FJIyOVUHINZm1J3FIaYo3jnP0OcoWrj&X-Amz-Signature=a6d75b4f571c5bdbc960a2256bfb24bc40d383be7c48b6af6df1a4588e055dfe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZPHA2RB%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T181944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEFgejrTZY%2B2cB1xLrCTDjaHoY0TnthNYXNaO%2BYMYkewIhALKkbllrWd8FDSwi2IIjvmWfSsA%2FQ5GPU6zTuxaqA2SxKv8DCGEQABoMNjM3NDIzMTgzODA1IgwaQmBx8wJdVdam1X0q3AOxwMg5Iw3qRYlpcdlRmx1swlEyBSPj5VNQDTFgM47eiJXfYpA%2FQul%2FMHZ4o8zKNeI6g%2BMbPaxlhM9VCqCwXkUH8qadwIe9XlGeU9pYCnHfGpIAgtdBVv38rGZjdFKQh1IdUiCtl5tFXfmU5okWLmxgc2pCFA9X51QJrbYmf%2FFdZUCstknMWisugHb1hI9rY9Bx2xM1cYTkdmP8MF0PH3YNm0K8kH4WeQmICLHC3tZgThqkwYvpS3PX0c9wF2ps%2BeyacR0HauorEeDYlz1r3xChdg%2FWL0KBz%2FuDH47nrXLxnH9DIqCmby9W1JTocyoXB1HIUs7js06rTq2IXzxiJLxa1ZhKR3KFcxD1OehczasceXk%2FxeYqrgGvlIEWb2HyIVdEmOIpDltqn6f6ix75chuSmRWQ1EKdVUroxpTMxx%2B%2FPl5tQGcUJRBuY3nyOpemxp%2FjOa9u7kYEGGhfWFVwN6TDkge5s6MEWBfvN%2FdKJlhCt04A0OSrXPnkgrZWn5oPXXvtHx7OP%2BWLa7A3A0w0YHrWVTlqJEg5Phuswsf0vfHKpd%2BrTf4Ql5zIzOjmFoCazIomQ0Ab0YVP0otbvfRBZUf2K7sBy22lZpSWdxwiejiurcDkgWM0VSU3ATnO9TCR9MvJBjqkAeFPxnd5ZH%2FCecxpRFYl3hASDQQqThn955BZpvmLhtQmJBBmXRT4tUIuCLG9s6wVy%2FhHjJuoYWA5i6m32sFm5G4bjYul1jP4tk0tOjhjKA1248tzUq5JutIAqy%2FqAOEO1JH32QliGq7R0bmvjVc99FThlBWzdoZs0djwXdUtNEniaHmCaHQKQnLN19Z1tUNrexPI0lCsR55lNpUDAdlLMYa%2FY3lw&X-Amz-Signature=3206cafb1bbcda84bbba96edb4b3957de46f6b869ac4563ee78849ea8a46e2e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

