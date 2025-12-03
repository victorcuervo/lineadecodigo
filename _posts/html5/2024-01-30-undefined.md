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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXLDM562%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T074421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIDR6lYtmzSUhMP8uw5QTDq7377RxUY%2FKlhF5q4U%2FDFg2AiEAmFFN3NlLGD1%2FFHtP%2B7NCrf91wuT3Vft1CTj%2F1n7Dnekq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDEx8JLrSheWm71V9xyrcA42HVxvod85al1dNKSejgpd5VcfUmBJkjw5mgkM8Ahhiogv7ctah4UKGOWkVEj5Z1i9Qe1n1kwaSZdxovff6ksuJuSRGsAnwG5qDnDIwYuvF%2FBB1JNQQ3aXnhN6bmwkdEkOm%2BqjLHZ1kplbe2Y%2BJwxsNRmfpBulIyY5dWhQVVJI3utO%2Fwm%2BvWfa81yJo591uftxbwWPno3xC%2BSe7mD9vm5OY6e%2BIqCJ%2BTeAdi8bCTor6FJUJu%2B2fBA11qb6S5Lg%2F1fFJk6tgua%2F6w5MM7OLv5oPvvewiybiWo7ymmlUQa9W6ob5%2BinLBXgW9hFxxbgHGolTYf5o6Q2qfyTR2FQB%2FfDxmwMzc%2BlShRoEqtn5Kp9%2BdgB4dlqhoKWaQOrMbRn58jhS%2F5Wk1wzUPMcTYwAXTVUd0RBq912YPx3PrUQLP5Pl8nkQ02OapcEMqtkE5mhwRQMZ3iXSZFAGfhgPvhGkI4%2F6A6gE4%2BzyAmTldwGb%2BXxh5zHEWBrqf%2BKCPlBLVDlzYm7cymZKnZxSQbkrNgOKD2c6lhQmFubWG2Ye%2B4JHVI9qjPayU%2F9l9wWd%2F822QA1EXsN4EZ5yW3YccibrXIiHALfkUal%2ByRsoV3iCVZvSgHHIjvVM6q2mdqvSFz23DMKO6v8kGOqUB2zgWtVjQMgSnHkEy2rvGAQ%2FFzFkHYKbc46T%2BteSPH%2BLV7qT8CZiYQBwBJVHCLuoKftfOITZq1AK1rLbVkB3eMywTcCPEEhlXeTlu8VPm1i5%2FFXOR52ShHBm%2Bt1iNIHIK0OUnZ0qL0s1l7Ny42%2FA2p3I4Rg%2B%2FCq9f5R4RR9g0bDLY%2BlAr4iU2TBAaVOeO6Ke648Vzq8nL6FBJGY410ofQhKa7PZll&X-Amz-Signature=ba1acdf7f99b162455948298ef0df050369fa3ef58f5cd6c94ded23f1173a9e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TS6PZR2M%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T074421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQC7CBqvB8Rf90cqyOtkNGW4pawyoZivt%2FuPncnkr3v0QQIhAMmKI%2FzqyjmRUvOYaz%2BpPEwXx12%2BH%2BSbXN7z%2BFzj%2BDS5Kv8DCCgQABoMNjM3NDIzMTgzODA1IgzYUwR0GUGTFrhn7lUq3AMsZqkf%2B8VKjVDEviRkbjGdS46XLjL5Mpzh3%2B1MkkH8OZ7wmhoslkxkvxM%2Fe0w24ywprq47XW3hkj5K1fRyAb3nsNpb2DIsVFmDoSbN557Wrprk1U7WrZRHeT6Ssut2Lk0kCaYZ71f5WjF4DvGbDPsz25zuVfU6Zo7H3dhvgInWzczerzshGqSihsoAoY3hfYA2Nt60ZXGGgwVfMFpFzZbcIqOHnr%2BLKrvbUGad0TQNWk5qMfiAggKrYrVX9pbxPvhrC9YpcrAh1cdkYYQKrTqk9mirBqxZHMUivx9WxRTNReDUNJefzIARDFvlQWOMxSUPVtH6Fjk1%2BldryL%2BtB00tmbPWYngj5dTYKVCX4CvvxYobu1FwWqHGROeYd4ShV7eKf2Zs7h95PyEzcUSF3aahUxetAaOZVBp4SJwttaFNW6qtBXJkz66AK%2FUqNqop6wNG%2Bb0CKRgdCvFk3WU7oDusMuC%2FbhIisbBGlWUjRCrleQWShebxH%2BkBWVIfak2Qzv7IQgFBHEywz3jHhUHo38dJhmtjP0lCT2wrFMhIVkYxqnieI6paKpR5QepUbOk%2FVqTSl8vjaDCXHqyZ7kfQHyDwMCC7pE6RN%2FiOoBrlU8gkDXPZRjGUpIndAUT6LzD1ub%2FJBjqkASTTuuiZHBxQnkmaYvqXyowDrhFGyj%2BsA4SjlTzfgcOuMZQ4bJstAIPEB%2B8oaRy3qS34rSSUESMB%2BM9aRl9PBep%2Btb4PVc9vCtzrIEWWmNUAcTSq%2FlLsCZYY8m8NAzTyC8O0cahCdHuLMx%2Bv91pB%2F9C686%2FP%2BP69ldlUZhFtBeULP0SHRxrY1LhQYhGUD7D2nX5wdjUcSs2P%2By1UX0RG4LmyCegn&X-Amz-Signature=4124901fa4981d226d51bcba8c7d7d611ddb72684566fa7c6ca2a92f948f3831&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

