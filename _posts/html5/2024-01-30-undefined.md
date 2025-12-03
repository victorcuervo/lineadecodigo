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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUMRS4IH%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T121006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQD67j9q3aMiopQ%2FyhyOJhsSwLSs5m9hbzA2LzjctfnS8gIgaO4pByu9JAstVV4Vkpie9EyI%2BmwO39SoApotWfHNllcq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDMqblyjPBTc6mHCVPSrcA5QstvzAAkY2ydpCcvlaAdrLj%2BNnmSGPn6%2F141ael%2BB4KCxo%2FasS7hzv2bWU7UFZpfDuiPGrUGzl%2BX2wBHyFpfKCUsi9upF4smQHGaT6TwpNX1RgGYOkb2isHQeXI6v8sHPu%2Bxm47fIjHj8f4MvzQZ6fGLCzexmXtwqnHw0nBi3nVY3YX%2B%2F9c8m3cyGtIaRFwPVr9VND3RpnMK2iRqmp3zViNWNo4XqkwI7TdYaRqTubIYXEgRldXXrNRrDBVFn5wJJDt30pW0IZIl2KLcHzP%2BVhzUQoEQWU%2FsWKhf6PBgNv9MEbTrMdnWJ9JI%2FDsg5Vu1mZh5b1Xw2ou9pAOkl1ufwsT9AwHSF8DQcYMFW1Ap%2FVWaj0%2BatWmBbjT9GU5KKiXkjmo0d00qO48PIfFndaMKRI1QHxbe9Hs6M9Xb%2BQUZ%2F%2BmQGsUODZUYgMq3B5Wy4w3kQflDQ%2Bsw9wAKlPyjI4WtHKDxchQ22K79bD0kcaD6O7jJ4KS%2FFslMYHoTsTeMjobTKVM4sf2Ki4rUWPp8ifowgJ%2FKTiSCuAY9gEvvw57DzXwrO%2BnlUAppwl5iDQ7QuDtu%2FKvxY%2Bq4UtGL0Kfu0WubXejTyyQ5hnHstq%2FZQOvhd%2Fyri6acnJjs1xob54MK7MwMkGOqUBOCrcK%2BrqzO3vTENNAzvu%2BOVlBHmrx6%2BhS1KS%2FmyTnDr2tFv96A8M4WWVbpGD7u8KV3ns6rZepyDcASgabTnUN0hdNHooA3I6s1F%2FjuYybcyn4XSOqQk2KglLShAJexR9tDzEiwFxm5A6hikj7yIivDgVgN2y6ngjjcNrSrSvsuGflp8uJnOe5OfV6pfRFn%2FL%2F4nlWVUtC1hMzg87GDXKKGyHqNlV&X-Amz-Signature=61407b2ec401d9dd4b72c2a4cfa0342a945faf50ca074054362963f4b5bd04b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4VJZUUF%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T121005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCID5BR2xf73f9%2FmqGo1E%2FyVOzUsbdp8nEXu35pZkM7H0OAiBAVEaxFTekVFh619bjiaAW%2FPbH9oCqhmwzzBYm0IRA%2FSr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMfDuO%2FTjpQQBYEI%2BhKtwDN12%2BZvaKLs414PF5eh0WJnmyqbYF4NVbV%2F90Kl06gun0l2U624%2BgDX7iAOZrn9ix0Ets6vwhxENVIyziTuZgzPOtwE%2FnKPUgMF3uHCpea9Uvw1G2WTLCprPnlkbAB%2Bu2N2864qspFvyeOBmiP1Z8HYD2imbgRYG0YlavVN8Q22CKxmq7itiC6q0Mp3M%2BBlr3KYXHW9hH3fLnLXgF%2BZD8%2BBYgpcjw3Xl6SLq2KQnMrt8LR3UCT%2BhmKE%2B8LCtXKqywaP06vgzrpKgP%2FHcXTSPVn9xayHICBaYf3IveTEYDUlf7egwaEEwmR42qthZ0pebk67OQIm4sPQ8xavnZsdP6QolaV5NOSto1cKC2uj20wSwlWu0FaiAg0VLarUSx9vKBIpz7tpy70PQ2QCON8ZcRZ9Jf5CIKIeg2U4FxKgOMm%2FPhcrpzR0uPEDArgrPIr2fGLcJ2XZBebGxxB4ZkTFmk9BK1%2Fn1gAkZnbOqRpSSPlbyRgabDOsdUH1jkrly%2Bff0m%2BOVkv9iPboL2N2zyodDoWVhOspWP7gaf51e5oOsXOvJwWz0ehkXPgip9wtuvl6%2BQe9%2BH4iwlzbK4Uek4g4Mc%2BY%2B3Ju0c4WekmmOy0TFpgK2h%2FujndVMH5WFt6MYwkc3AyQY6pgH1f6J7OFgG%2FIajyuaBLBVgLn5fVFDFxTQnck65yBzC054k9ov4kgxIxoZNBhxLfGH8%2BEcp0hwy36gTZKP7qFNXFWNgkd09xbDllgFmLSmvQAEzpJ%2BHbgSqo3syB7t86Tf3438muQfc3%2FuQndynpfyTwPM9MhimUtmp4soMF3OoB3e5ZWj%2BqHP1ooDHIMUMkHKfQ1MofAcSdH3j6QWkVPYaVq3reT%2Fb&X-Amz-Signature=5c20123ab9cfbdb7c7af189ce283e35592cf6f5b3f3bf323417fbc8e89937ffa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

