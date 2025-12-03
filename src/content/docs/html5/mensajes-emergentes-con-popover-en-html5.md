---
title: Mensajes emergentes con popover en HTML5
description: "Uso del atributo popover para poder generar mensajes emergentes con popover en HTML5 en los que se pueda incluir cualquier contenido."
lastupdates: 2024-01-30
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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2NWQHWQ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T202542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQDHlys5tIYPqHmt7t3nL0LeAVvEowHI3yoc798z3mquvgIhAJicVYP4nXwPeN%2BxytYyjV8zM5ZKRjscwEetuMWO6Z5WKv8DCDQQABoMNjM3NDIzMTgzODA1Igxak1R5blvIL8TDGw4q3AO5YGKkwjQN%2BmLedp%2FZ%2BzrR8fTg%2BuYDq1D5Ni%2FZOhL%2F75Yhc0yiBdguuhCKkkW0XAxR%2FHmpUwrUxvkCYLm0AqY3UNuEgnheOV%2FWLor%2Fsg9cL3W1oudOLoJ0Hjv6PrMeRIO8k0Q85c%2BFy8P3J9%2FxwR5eoMlBa%2BJL%2F8ZmHgTAI5B7vi%2FRqcG%2FpwdjMx7jHkmcFGzATUcp1LSOY7P6Rl8cEN%2BueOGoskJV7cL0nE6rQkH9O%2Fux%2BMXZGOPAsCSK%2B6oFVr4HGpclBMydT7hx4e9Lb7SNZg4VOJ3cck5FJ8c73q42OyI%2BBGifIyTGz6yZqEVzpk59mkfQ%2Bjj%2BuZKlV%2FXkI3fNG%2FnmYHpP%2B7jhejKk0crdbIukGhwX%2BhhZnH2HWiaNPVoW%2FDH1IW6lKDPWO0U7REr3iIvfH8xfyTRqwDhjqow1ILVGYuaR8bf9t2zAGz7T2Iz6fg9t9ZMw7tiNHuB63lUKp2nXFdrwGL%2FaBwIVvIbJzMYXfVpANzPCNJ6g%2B2j4buFjlWQBC0RTvPldZXmM5uaq2sS0NoZ3hb%2FNQOBi9cx2Lijr213s8SfQxvXXkpoLBp%2B6twnS%2FzqSDO3UHmSFYZy3AARVvZGHAf4L3BLjFtGa0BumMjuI8SrM3NAiQjCgkcLJBjqkAR4Vp1ycCqXxOwlZy9OdtHEYbVq5NXs5vz0mouEHtxfEImpk3xFiujayK9bnxeEhzuEOp5YV4fTLAtUEkSoPEHXjhLx2R6ovLPMHf0Wfa5KI1RgXyDnfQ1BpKjUNOacqW8dImq0CSfD5Keu5c4a3%2B9ZDxAU0bvoiH79IKOxXCQkY%2F8qRGHY0EDIt0MEdwq%2BzPSMRyPtHIXXi7mBG%2FQsa23KHi6R2&X-Amz-Signature=92a8966eed010e05adba27645f296b5c9d1afca3708c76ac6c198085deca1eca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2YFBLRA%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T202541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQDC5Mh5MFK6xLNfU%2FSP3X8fGVk0uSqc0yQdiRAwsirGaQIgKSdYnuf%2F%2B2txjBs5VhZ%2Bcrf8E2KJgy%2F8A0ASwgPuVqQq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDMmnsbVCvM%2BCxyqJqSrcA5CZ0l2mMRpD292iqsiitpf2g8qHLBnMg3jKj%2B3xYCmNFVE58mD6ddOim%2FubVZeP9skQ41hqV4r0Acr2zIr%2BooUBE8bUAvZVcfdIUlKivUag53w2HP5h9bV97QJXwIpuqi%2BcPyWSWxnsx9vOLRG2YeRF7ZOhiZAkxmIIzAUkxDCGCZzCidgN0OCV9wjIM%2BP6%2FLp5s0qx7e6rLvyPvpncTC1cOvNxcVvh6mhkNm9zYjchQhTzkwHiad6L2weAcVhRfGbrBVpFCCmRkpJDZlGAnM%2FFzfwuy6fwiGaEAZ8xMdGK8rTvf01fHjkOrYs3SxXRarCLZ%2FgA3k6ddDpBciG7d40xzIO4T4ZNj2lKruZuUdHfgH%2FvDSf1cZ3Fj28leZKSq%2FuL%2F4hjEAmO5NZ7b4pC3UK9Cume4UPvNMPAXuOeB8yP6ULl6yIfJavb5mPn%2F0jo8LuccE5P6V%2BCFtFu3oYOGY99%2BpXFIKlcp8MnhY8lXoW%2BpGE%2BmJVN8E9VGdhOOAe%2BCcM7SHUyVEb1qqmw7HtRpQl1z%2FjESiJcL4%2F0ZymEYLIv2qHtJQjch5HdKFUBQxNX0085zrEI5c0yxJdg0cdqZCdkMvSVSKsOLyIAirkZ4T8xqUuHZY41iH6zq67ZMJaRwskGOqUBvbrlnvnHexczAL0ROBPXKiG6%2FwYdF6fponpRQXTbEcqvxdsEMVehIJAgV6S3IKbQWOQMvEJmeM%2FRFXcq9iqiqmjuoEohI%2B7fNzpHnNpXy7P08M41SBABeuMGI4xSXzdo8lCYupLuqqJ4kK4DX1oEauM1a4KjNa5k6JC6GrphOFfxGy9PTi77%2F7huOcoEbjpcnc8AoPun92Y4yO%2FMv3UBx8Sj8pax&X-Amz-Signature=789dcf745bbf7c991e3364f89abb71dfea76e418be8a4d2b2ca7e6ac3a3de80a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

