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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQFRZNFQ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T162100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIQDg3cwWfEcd1Bl0CZqNHL8BB3wkUpJmxBfQC4nwO54NVwIgQbYZBqSbzq5llTH6QJcGDi5QGZyXfNRJbraqSu8x%2FXgq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDFHjB3Tk%2BbgWB0X1QCrcA1uQvViaADUd0hHdcQVf%2FuvMHq7Z45tvuXdKXuagGrlBxhCcDzokP6HJciIRpm6oH4A9cpj54pJow8OdKhpgBi3YC1VsdXb57s1KtnBBu0A7x0ExvPrgsfxDHhEmzgSIgMVI9g5zftumoGn6BdIYEQJ7NRdMCm6XzHZBIdDAFFczdBxjR0L0ALMWt7TbXUtY6%2FQCL91TOJxXYZ7wdPCTMLbxBQEZ1lsmpCzShk7Vt8DzRE8AN2Pd2Z%2Bao5Zj7de0BZQwOawGyT8l5gSAclhhn9OITNeBAkz6CoK4RavVU5Up9rbt4Yn4Kg%2FAvhw8Y56UjcHggDj2qPzWMQ5rw2MDZQvLitVvkvY8J2cVU7zD2EdFzgYgCjNDcu9%2FIJUkgXN9xfB4Df5SkZ5YoNAKfabOHK5ULG8lvX0KVa3kA29Z7hIFWVNw40ZWbITFAraODF2Iu7fe8UalhjpKYHtLBYm2f%2BSulr376cUaTenLrNYxvVasJ1q5ezPFfv6%2FGjZL9mTxfYaFwjTBrulIMjrlY6UR%2FXU%2BMRBdhUgCnbmG6cLFp7ASeBLkN%2BFujg2PMvWwCSXGIfFP7kHaI7DzquqHfDOhgAC9S2eeHMrk5JUTLED%2FXUc4x4fcUAlndTYLPgHAMPzAwckGOqUB9atpPfy4%2F%2FTmnRpix2Y80zg%2Ft6D1WG%2BO1%2Bz5NjpcdTA89ubH3usAn2OBOoqIkT05%2FvopGk1M4Pu05tG0gzzOucw6dZKrhPicgHSUirtVI6Kyu0gDxXpE4Nu4cyav%2FsCYc%2FxMd%2F32fMqLH%2BL7879Bglxg06u45G%2FTJlWAkcFfTtRcm%2FMpEsQVSRG0ualj4KGuaoYnql0c9Dj08B59hXFTLo8vOk%2FP&X-Amz-Signature=1a37dca3d1d7883767bfa8bedc748bfcaca600a97523df539b3767cd94f8aa96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOIYVGAL%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T162059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJGMEQCIBVOng0GUbcJx9pvdAudxeH6Qq12N6GOxSM0fW77e2e3AiApu6H5MKkUZ9w3fgOWYaWdXQHDX%2FBr%2FCkBeRdry1T5Fyr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIM4OO9pWd5mSouc0ZRKtwD%2FbXMBKXRFoW5qi9nqSOSPplg0B%2F0GZzb7X9UkE%2Bn7XxNknwPDtfztNTtkgEdVEpPxAGJ%2FVGgpCFb9GLur2D7H81VASND2nHFCLPQHSmRaxj7o8NuCWtqXxH9kcln1D322UHm7xvuxI7D0QUg%2BR2Zda0oGGTp59cCoyDM5W%2FBTHoTwgA43ME%2FrYBB3MQlfd3l%2BwmEQIGL1gjyMVBXnBdxuskoVRnWucgjFe6teBR4BEXpoL%2FvBU9spPyIcqxgcPDcJyyKnfRilJcWuxTp0neHOZvBmO%2Fo5S0SGPpGGyiMK%2FUHavbgU%2BB0XW7FbfklaZWjdOpxGiQFzUXIRQR4OjizV8%2BmpYxI0D2VEFJJLX8a2Tlx2Eu6CNkVH71XIU5cbj5Po6aDlWdT%2B64yP1ufKYncS5E8NKSq4bHvKXQBFM1p2YQ5cz6MlaGdjaUtcSv0msnWyJU%2FbsTmfWf%2BT8lzeLahj4SgS6LHu2vuAzDmCAM4mi9D4XoPkqejJnt8DF6TmCgyRtJyjS3Tlyt%2F5jnsqC%2BnTNnbOYO0rlPuIBO72fy96to%2BUxDpnwKSkE%2FbbRnqBHGm8bmJYt9nxYI8nBv6hj16Um%2F9iHaWsxAVNByLzhmU8bdvGJEpiJnD1ig3VOEwocHByQY6pgGHfAE94p793E%2FLxBTz5kOCb5hHSLtqv3Wwxqp%2FaFnMuxyMkqXrL%2BKq3kBfxFLHtWyAJtzurErB31q9xGmcF7MydbGXbDcY2%2FhxLnHhFjK5Sixz3YtC%2BP0LS2x5PcW8dg8f3geK4XcXTEYkzmIV3uBWeCv1ekdXFX9nZjAKfLmKJliraqZXFhRodg4iQwJ8q72rY2baL4jqAMJVOCZE9NllvGhM1Bx0&X-Amz-Signature=eb7b3399d432059b04f5ba709332b53ddc08d947eef462e02ed9cd824d043c5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

