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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5WPUU2K%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T124728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCICeP8W06S7xD2AGoN7%2FeahBykQOdlBlLvkmqMnxzc91YAiEAvPl10ORg2wgbKod4O676MYwMstPsEm11EIqh9YpfVZsq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDNoAfG%2BkOX80TZ2dqircAygDmmNzqVOR01OX0TOVGZuwEyVl%2BBvXfBgQqZuu%2BrSyxzl3jKXEQZxmoBS3m9bCeVPl6cGWHlChRY60qpN%2Fh7ZQB7iyqLOp4K4gj8Y5if7jV3wbrtfA%2F1rNLYl%2BZ1qPonlqfxmDXXnc0eN7hDEx8UyKSbY7AjGsaf4cN8NnhslGKU9Ih4d8Q4LaZrIJBCTPaC6NjBn8iNK%2BnTBP1tvNF5oeUf%2FgFZxfwNf4pK3fS2z5jNN3IpT2cb%2BiH2bY%2FirUGMScIEZwihqzd1854F8wYFOK8yZhy3DzZ18QP2h6VciFjd5GERxwrxuVQFkuuBA%2BlT4k0GvmtTUooNhm700BBqkWuzsd6e5E81xMKEX%2BAgd4C5XX7e9NHac%2BtTwPZ5ZjNF8PeiwDEl3QTuWySpmV73d34cSPereF9CA0Xu3iWnpFj%2BH8IhD99Ex%2BuE87s186tBa6RWa8DPb%2BaHty9Pihf8WCtPbjMSFfOBQh51%2BiSbCenUa6mxiIUJEH1W7F9oYMs3blk7pqTberkYb06O8zPmMAI8XV6fnlS8v%2FnazRcsE%2Fi5EwYy%2BbWSMwTpnry10VTv8BDOTqKuxHaaKop%2FQ7x40Bx19zeyBbOWAE4nsPdOeCjVL5JfwoNAxQAYUhMPPMwMkGOqUB6U%2FYT8Qf5GcolqCY9OPT6BS%2FpS1tEN8Vfap%2Bw0%2F35AcezFQY%2BVwjTZ8PcHpRElW1UzuakXwUm%2Bi2p9rQjwkt0g4WOZpzyri85Yvq0VgGpMBY%2B20pbSKi9LUZxFxV1tjUUFwCZTHgm8e7Xh1hIWfwIfPb1XMCN9jtwSz%2FhCNDr21JY40F2QJH%2FmhO3EmF%2BbCIN7rduJ%2FE%2BmTOBK6pWGUhK0CPvU0j&X-Amz-Signature=7221ecec9d0d1b40a4d06bd60fe1670ca8bfa439c063a91eb70cf4949ddb4338&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6Y42FOZ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T124727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQDG4jUHetjKP1AdVEEZixKLCPrEpyFcR8VtbAH35D4EXAIhAL2Tdkm4jBftfMRaOezTP9Io4m7AU3kBnf%2B4P%2Be3xD3DKv8DCC0QABoMNjM3NDIzMTgzODA1IgxLUyZgIVp9QoNVCP0q3ANXpnOsyjgEUiMezRKbu2sV36U%2BTOOqojimXsNc9d5%2F4di39TTSQyLPooQVUIMEtRET1lJJDL%2Fp1nLfP04a%2FyKWN9FoS5zyash3RReV5%2F5iDfgJgHtNKzUFkUHXYoA%2FTPIKvdWcz1zJkTP%2FEL5nkdqMJE%2Bh6uesLfKlw%2Ba6qq%2FGv37nMkxLw4CtHoNv%2BAZ8euDbaipluElR8JkMV%2FD5f1CT7pj%2B9zU7inAe%2F4nCGtUgLGj8n5Rk%2BRqLXxXPqgd0%2BeI%2Fzzve4Fku%2FUotnaho56nzfb%2FT19KHpdgx%2Bh6YNdjWNM%2BKPTGQRnDdc554zick2e2Ut03smNG2U13aBMM5zBMgLImX6M%2FHk7orcnufZuErYBw31D3V8PLlvwEPAHa1sUkBCeXu%2BPmcrAJNngRxYQt4fOzGiiVBhcRLyN4GTLXh7V0YmaXRqfV9LtAno21DBniIqgHNyDNOHyvO7eXcXUSxUMb%2Fqyln0SsY2mkrNbFnSIYjuyud9lVy4K8DwfDvYDSu9G0Ymo4F%2BTXE%2Bv3D7AvdkKIJsSMQZIOWMISM6JoNXBFlR5L%2F%2FrmI3xz0gw1g8i3Npm%2FyBUlZEUGEQNO57XQGOkbMPTu79gvdcUeE%2FYohmLxp4qGwgHatWR6FATCazcDJBjqkAXspop%2FaKUODkJ82hsvp2T3OhZzHVckC96PUXuaQNmTFt4s0fBUiJ86ENezIJrmfS2g3BLA71SoyqJ8fWe4glA2VWhFI7Pm8C3iSiExtkvMCVrETI8H3W%2BXwgjNLL%2B0F3nfzZt72ai8gbC3grAwDLdN1PucjS8axnkmsfFHPwjrHes1wvOKc2BFzDOECpW9q39IDFeVA0dQaXbbojVdC4V4Ph2Ce&X-Amz-Signature=330834388b6cc1cb7a20ce0d2457622e53991168807ec7e6987c6f2087429c1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

