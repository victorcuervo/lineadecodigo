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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCT6AT44%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T102304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCICAUDC7RETh%2FaaNgNRlaikXZOWnK26sbpIKTuAs%2Fi5VJAiBNmt7Nm52gp1nqozJKOMIklpVBjcG78yaQo0z%2B%2FZU6bir%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMIQ3pX5qh%2FFCaGGA9KtwDoluGCvJ%2BMQ1M4gwL9T8G9FNQVlAJSvs%2FQ8A7UsG3KuZDxj7rLGY6sxbkCbq9ny7DwdREJjCX8PeZGg6ENaJVZubdw6PPpXvlrd2ddfbKW99s0VESWDgwks1WLjMMg65Hjl%2Bo3ghA1T%2BKRenpx9u%2FiPQZC05oPSI2JQ%2BcGJIup8N2mcQ8ctthhBjjiVNSiA1CuWNQkxf4qCiddmBTugN3vhacTqajxKnPLw%2B1ax7Zj5c2mmOapYClyB2MgB59K4vwCEQ5MZxUyI8HP0iQZ83wqXPATByJYYAybd%2BKTpNKfBBE5AWAXa3JgohnuKHSr5DJ2pKor5D7a9boJIo7gQDbm%2BIqN8%2B2QCgTP4TDE7DfY05VIKHp6TNrmDyhENGVH8EW3Ofve1TJ46AsoWQDiv%2FwJGC%2FbIdr2N6Zu%2FfwAS7TKKhZIOfmMf%2BkTVg94wwOujLlpJoFw3vKcKipjQz2KZ705e8Dhz56VepVdqKpOnzD5r4oBxwKx1bxR8TU8SPhD77LjqV%2BEa8rhq57HpK7LMYobJCI8szEDECKsqB4s1gpmWyjHs057MT%2Fm71UW78tnm3fEShrSgV2sTXtENnKEGTobL%2BD8DYQvzUrtcBz1mDRnJJ5mJFYy6Y%2FByUbyy0w2JPAyQY6pgE%2By34MKJIdLbgVkYEYQyhjjTk99vNVEq9uCfPGzGB3pajdxgv%2BbLVzfdYmIwn04mxX%2FHBEP%2F78RqT1pd8%2BC9bwzGUnjRwzZ9xshfFKsODHEc%2FA8X3P874HwPSdbrPHCui2pPvbZ3nBEFJ33oo44V5uo4qs9tCE4D8gWLI4BvDmZDNZCXvIL9Eh0M4SeIGXfhlAFhpctU00pFWvQIHSOjuum5TutngE&X-Amz-Signature=33cc50f9bb3e4a6f59b547261f1dfd27edca05a21ef700497a55117261aa27aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMT7SUCH%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T102303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCID72pb0u%2ByLe8EKC%2BT2j1BBFvFTYZI%2BoFbbkO24SQ8CDAiEA2tbfm%2FfzjpxlqhPtWPWvA6XzrUNndUhC0UiDes5Hx%2Fkq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDNe3on4yZtUDb%2FWhdircA%2FVFBcDCLp1EQBWPHNoAWz70Tur6FesthcsUW8OKxQWll7QfhtUfMuFxXZYbfBHU2SS6a4pzs3lIlaDiz9UhYzZWuV6NJJCEb%2Bh4R12trQ%2Fl5DyIAKeJ0tK40g2vfjJ4hOPrN93MkNeZxHZAQKziEpyyn4HKhYIdz8vFbQBOnZ7z%2BzsJIq8ihH6Y2VmwuDzu6QhfMEe65A9ngtjQP6To8gTJVVz4cNitqvpD4lTAJAGtVOKyKsD%2FbMxX%2Fy62xJPBWeWSkVft0a7sCQhpASiHo%2BTsowzyeoOYrjdmAWuEvR%2FFBeFCvSTe05vPmZixirZUkVl50uWp8Glm0UPJ6Rt9tXLaaYHMrwCrJN8QqvFwICg1Ih7wLYlS36UQucp8ZSVp6qdCqxY%2F4HDaDyBS7VuDifAO%2BbkU0MiXPDrm3xVMGN%2Bc2JcWQ1hvEZ%2Ftwnvpf3UnRp5HOy2htCqm19VJfT%2Bjn7zcxlA1tHsRqNKq0%2FhpztWhDQgP9VjPS%2FnLZoTS9aB5TvSxZGcrDk8%2FcJRHitsMCQnitN248XGFlevizBZadyNlD7OAvwCYZrzkQF9ZuX4ncc8Y5%2Fhr9KHeS1gb7rOaHXobENqrFv8iHasO9tHj6hNtTNrfY4eiXZ1GvnqPMM2TwMkGOqUBlgVbXSPG5sBT8AeCgR3vZWrcHFF2XH2PMRnGxS59u73LOTt88OR3NIBL8r66vlKXYA455UPAnk25uBkhBDfRvPFiSZWCCwdpuRm37cw75Uaz%2FQy%2FiyL%2BZBhz2%2BzMZv%2BPZKCCeQ8CTYIW56pN24piBTUC5OrZo0dIVeQU8y%2B%2BeVoZVgdnCCjIqevGgDP%2BqVA985znrtTSAPoZeR9PBEoGJjQ191z4&X-Amz-Signature=cc7db89d3d669f5fa0e34e644f622d25242562b606bf1a097844e3b704c7e296&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

