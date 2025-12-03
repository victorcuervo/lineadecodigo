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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662627AI72%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T073518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIGw7PRmEdRTMnvZPnqgMe6BBHADTOnD6Tefgydogy1uCAiEAvSo7JvqKM2fK0FKyHRQOuo4VRhRgRJgwI1Ek%2FNArZpIq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDFz5xrZsrSp72u%2BDCircA2JI76f7Vc%2FEo%2BvHhfX2YW92e1qPrmkmQiK9CQaKpSgnhmstmTF4gvDbPR425WC6XqDlQsNLgZayYQ46vA1Ok2pextjjF3RlDx%2BCBhlY3NUZpzK2R6xlUDO56ShAIhJDIXscBMa%2BmNoD9AHbVtoaOOo3zRiyISsdMq%2Bug62pX0I2IA9RZMOgGjD5xyQ%2F%2FRYUtlRHheAZxsFPtL4armzv2VC2Kryg8ydh%2FVMeAV5RS7fklJKEZjsBlzH%2BzSrX4SV1WRrg4EzDrxz4ApuDwxA%2BdeBbcpR4z11meI6PnO9nyWWkvAe%2BJ363gfBCRNDjBZ9q2Ls0XHxYfVV4fpZVz2Ajy4ZiwNV69Bhx2LZm%2Buhox9o7BLkDsgt0lawMPJiluvzfzfm8glbeiiNmPhAP3fMM8HQ2awPJ4zkHDXls96eV089cEP2SNzVaHYpx0yjjV9St1a8zKYMCoqcOFcxPOxXKmwk2Zgn201nsoMeUjkM3QEmTOsvcmOpYsRi6635bGUDwVzDOqgDdmgVKymGgi%2BIdi6M3QgWESPHbf2QhwZIYSZT%2BqnzMKV6MoNb2X7l81WcBElFlH78koevgA1qS%2FGJuUK7bA93gHff%2F09bCuVZwwxWse6PCWLregVX5T4nmMNi5v8kGOqUBgLz6ch2mTj1N8Kj6fywIumykbOAHNSPtIqDu4hVGH2%2BCsjKsEoIkT4t3KkVxOK3oPlkBnbbnQzU4T7lqDkW6HCNJHvqZgQW%2FCJx2MEvsnKBV8fvTWFgj3H%2F1QQ3Ef%2BL%2BBFsnEyBSBh1Xes0sL0Qvw0h%2Flu2G3bagCmkDvDC6muB21cBhvHEkQXM6aC6kyewpCMrIBL5v5us%2FIRtnx52HJa0uUdnk&X-Amz-Signature=416378922c3bf77f4a6edf48f5d545288c5922ce65c05fd4152e7809eb98ad5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466333XUXIR%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T073518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIH6bhvEr65YPwBjOvnu7JzoCXOHTULaNFuK7OcWTmYYdAiEA%2BbkFPr5JHwweAQyqeYaExdQnFzIeRSvqCLSGYesPUDcq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDIMxW9z%2BUf2dv5gS5CrcAyaEXfvZGLvmie70reBGFMlDFCRlMD6dP%2F4ZM%2FGpsi5qK3dsFWsI5WZgygL9wC8%2FpVJd8TjHMdQYeh%2Bj%2Fyw53BGHG13zF%2FZuWTrj2MtjNoaIMNChOlAwMEnyH4wVTsOjarsejnvowCDhmVgC5hJTQ0sHRJ0LmIXWDT3oXT%2B%2FXB4qvVC8XL2VOCpVSEFWpmE6ofiE7nXUiyOZ59cbb6DzikG4cqgdix3OyQjU1%2B%2FIicm1VwME7jxK1zxZyHUEjqNq8DuIPldiDQxcT8HVHWI72%2Bp%2BSfamAJoSgVlwEf7zy99cjdIAK5%2FjtP%2FnmCN2BJcWnbglADfkaDWuNOKEIHbZ7p1MXzKSiZZEGPPjQud91PeXA3UUQ3RAmv1K%2B1JR%2F9TH56CEJXzMAnLoSnsfH469A9N2WYDxT4KZeOyJb4jMfKG4ziDE8SMdzn9xB32qZCpgv8p7IoDJyaI1Sp96ddaDuqb8RnZC497Wm8l2GX02%2FhAGHzKfFHJRmfYIqrY2%2BKPOXF%2B%2By3V9mUeOOUZU%2B%2FV6cwbe358oqs5eUWvTEPhpk5Eyi4nIfUlmIZlwdMKP6SY4RPLKsJ8qXlN0OYu%2Fln%2F5U9kT2vb2Y87P%2Fq72IdAsSmUmz%2B6FwckhJUH5582%2BMOO4v8kGOqUBlLra1UV%2F308WBEecetmgOfHMHB6JVgJJHRQC86lkgd3y%2BSKXTPv4TbXLsfWu9kiLEXzbpGe92D8Z25wUHJi1Kx3d8i%2F6eXoWp92JdWfVyGpRC2PSIvSz7bqmeyQoWOs2H9IrW4ba4luaoMl4cPoGpnQkkQSESeAiEaw7uuZ%2FaIN9Gzeleyn7GnPQK5ZJUFtAgQzCBV27MWPFrtElxGLDKCOZ6zic&X-Amz-Signature=51b6422a4ed373080ea6ba341a8a8b204473c093add2a146a50b968a7cb02c87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

