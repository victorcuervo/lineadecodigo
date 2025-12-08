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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643ZD5C3W%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T030043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBB%2F49ZdFMMAI786cwLPTTCnUl1OaHg7D939LTNHq0XdAiEAgRcMkkehFA9oHTczLP9Lz9HhmTu6OLy1BF5JixASDv8qiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDISdnlMdWCKHX23N2SrcA%2Fmi17yS9QOzcKlotnPydh6v%2BrZM3SZallfRxE29yAnlnszMqlDdTfXpG%2BpD2SQ0LxsEY37usP%2BvSu9WCOU7hixcQQaIsUPfMPzCHayuhWOJ0%2BOhBsBCan1rkblftlAOiBqzdKof6yRSMiM1aEHQwRhbveISG2pz8PvuyDQ7ppiKTP4goIpihTu%2BFp8VKY%2BP%2BnLyHcdUIP%2B45M3ZTa727TK6USVtrz7F0Wm1caWdoMMEcxpqVxEve7kCDuBazVj5Zw6YWZfXC6aWB3BNbfQ1ui3cfFWs9Z%2BMs9lWL4bL6rskCnXet2iDMlnThwN%2BjJTweAH18U4XQrBemQ%2FJ1W%2FlzCkJ%2FV9ilkuxeyBQlNP97Hykg65mY2%2BkeaW6Gz1qkEDZm5JQbX5h74vh%2BqBjFm%2F84srcK1VLytt49TwDab643Fsru5NfJw32VSteXrTJ6lWH287%2F9yg62g99bjEkyLPs5LUSV3bB3ydWqptiQgNnh4ZPFnqZV%2FJJSgaXFey5KtvB9Jpvb%2FZNTiM7X7OvXRdUjeDU8G0Mh%2B1I9lbmJGt21sUQImk6hb5q1brnM8KbZF5VNnxf19ipG1uqL3FAIeUD96s6fn7oqB60bGqD72SkI4FxhBPkMfyV9A9Oj8KGMI3v2MkGOqUBEANgp3MRaFJqMUNdeu8v%2FYU6KTs20e81OWIPpefOVxy9jaHzK3u75B0RQGY0iAHqis7mX1aElm4ihQv22VV58cQhUii6%2FJ%2FkTOEYqHoqNJm9%2BK8PavcWQ81WHT46lDorgg2xRTdgLDj7qixrYhPNhm7oHfwP0rotms7mJ0BVmYingRNqQnA3fvs8c8o42QSTyY15dCvVCmvB7OMjmuElNk0ksGdz&X-Amz-Signature=a03b2550bcff8acb4cf57ad6357b192f71cb713e7130a14d1fa140814bd1aa50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCSVK6RT%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T030042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkZk6Qt9SGn1gjxOvSwiH2aX0Hyl1Z41c4YH26BJNE1wIhAIjFdf0Kp%2BDsiYa%2BBvdjwuvAmIMJrvOTYfVVohmivp3fKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgygOlCch77dOdRbJ50q3AN44ZfUlk%2B53Ws%2BkRhRn8Non6grDKNUU0tHY5jyJZ%2FtK%2FRsSnNmYhkAWQ8%2F3p9JlDpYkdJWg5MZ9OjDsQYPF%2Fg5tae7bSgwWKyCmub%2Bkh5NizawbkcBumaCeq0G9dBs9dPpecvrcXhSMD%2FSkmFbe1g38LzuXvoTpMJ%2BYxZHtYMRvNKxcPeybwNzwkXpjsg21XvAU3eAiipOA7d8%2FMtnKm5SVD8W6DsM3fIXNYoKjO3ar0YqKTd04yQ3Yun%2BVFIaDwkmowxnX8Y0GjRItvhbWOGc0824GiIUbhujd7YcEVs%2F0wNnIReqQ%2FyFkdz8lp8ZH3kVQYZ%2F1RLEUcIbMcphaaFVgbM2i%2FG8f9XQ9WHtBvOWLQmDMOGcOba4JEveY2bezKPYi55rMeMRXFpHg25hPMuDM%2BMo8IPtV9hEbkHQHfE86vZ7YODF%2BmP1F0BF2eDw65s%2B6Ppj3GCfXL8ZgUhI%2FTtrIWSWNRKIIVj8G86sMcNi208SOvVK%2BFz6Os71K8szkStqRCqI8FZTWMQ2W5ovAa0Od4KWlJYERk1NUZVUS9Pu2btRHElzZpavQa7kZwHhpAfbMX6stW44vs%2Bd05kz5FUDvKcRJzrDmWK3DFTqG3T9dUHHrERRfCWe07680TCh79jJBjqkAVk8E7AumV1yIbvmJzT%2Fa1ishg43LdM%2BYcdqM0fdAc9BKZGTuFG%2F4ozo1GPxnHp%2BrX5GGKShyrBz6YXehMv9oS2mbggRPflIkCs9OAMtrMOH1W73EKlKZN3kjL%2FZ1WBXBbx6mBbl9kD1DK6x2BGO6z2OyriaetWWRT%2BhvzuA9mFVn%2Fj%2Fk0yWLGgd3sfBdSg%2FB5f%2Fa8VpYGLFmCZb57lHsCRAAEkJ&X-Amz-Signature=13da9f83999d703314b38f67038dfceb14ac1889f9f44770609dde73351d10f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

