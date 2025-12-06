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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Z7U4FH3%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T113023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDV8Gb6RtP6rVhaGH0nz5zQua0GA%2BM%2Bae54mJUuvV9lOAIgAPRrrmh1TgjEg3uX8VM4Uj9D60XwMezqDaOInkb%2Bkqsq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDLU%2B7oB8n5%2F1EEjJmyrcAwlIsT6JCYxJJgmMO5bEvv1q47NDxy0Y60us8QZV%2FaqkFEcytEXZd%2FT9UYGpoz2AQZkIJejzV36wPytv8dyLXTNOOgV28RK5VcGPn4PeFO4Gsb0vHpEEdhGCdGH%2BGjx%2B%2FuekhvpprDbfdfBM3JLeKHzJXRN2Dn5ApfnKB%2BAKh9Bdku2M6vt6kaXUXfZGR1SjXFOlLl7inI9WKY6uEmt%2Fspw%2BHZ9fVUtIdUv5uJXbc9fnqlO631p43%2FrK3Wjf%2FOnZTPl1ErYLpqye%2F5wkpP2AMsX39%2BzkVpUu12yWV4TvvdjRtCR0%2BmcbVKIm%2BSZDCY%2ByC4n7Y01UyqBid6AzI4R5bRk%2FRP0QMigkQQu4GNuZsLn8gfU6as0yIt3a1Dlbjd%2BGzDeYWWp%2Fnx4IwknrZtvI1eKsCAwa1twv2xLPMoO32spdxhPhhyELNwGTfxTWQ2FS3oRHQkFEhxMlATKx2lKbDSWeqHCxBvnw%2BvxRMqM48yNMklL4WVTN3CRcKf98mYHfbMhNhbQjVAtfSu2BtYxkq7%2FRT2%2FTSmA6aqQYN5e3oAc2%2BDejvI2d7UpN0e6%2Fa47gvYtTbSWd35LgSB%2B8ryTv8GPUdHfoOoJgu%2BblwUKh9EW68jz5K9Q87agiP5XdMNim0MkGOqUB%2B%2Br7qRKyHOkxrpt1K0rinnUAiP%2FM7EGTXGyTJJwPQ939dGsKfRyfzaIYq4Kjwi%2BMNMILwl1oQviW8pHCyXtWHDtmR8DMOA3QSb6dLxpqgEEGIHPt1O%2F3ejqZMXSZ%2BlxDvBOadJiXDkqYq4qoO8HaSPyrn8m%2FHfYxkUoRSDTUqzRVdVYInAhclHXH%2BFTpujpnvRxHj3d2Uo3NefCaVx1Q8ywSTTt4&X-Amz-Signature=948fd676c5fa611b9e49244bce78927b12ed98af5e82b1d93fd26dadecac5a3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XUJ4X3H%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T113022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEvFWnBiZTvl2YNLe5%2FeDYD2yi5s37Ah91sxwypWpCwxAiATpvUcwuXxyFwUN%2B8nd4N5FgWY3NLZOSayw5RGlohguCr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIM962VNCpJG%2Fu7KVRYKtwDBGkRhomy90Hg%2FcyRBUmCJFvj5K1KfErDmotdV9VSJ0AEkMYQiLvPgvs1%2BXMhRXBAdS1pmurl2zPy3%2FtX1jMEya7s94gi1MVrE%2FyQ6hBv3FEWBufvqdVfV53MlTh%2FF4yHCKE6ivEfLrISOY0gV%2FKPYyD6ANrJjBLKa%2BlPYZDb6XXTzIMEUwqZhofNaKAvwJY3zJpVn3tcveq%2BWuBLru5Z23gDEp3pSAAS%2BlRTInckwX64gFgUSIqffCV0JmM9hExot6vsMfmNF5PFSd7tZSO8EpYdihVLE%2Fa8u%2BBk2neONAhA0s3YrsTY5Z%2FsB5Mzem3BpveVt26iL1mNKDV8moNEiayJJJ28RnW2RahIJSRE1ISUI%2Bg9bPeXFCv5dDVhcG4xD0qaQPdQYy9Z23Msslr54ApCroTP3zZkuD8HA21vEHFIEqy9S1I%2BPF8Rve5hRmUgyR8Dg2cruvNh9G3Yfh6nsjSAO0xb3quqU%2FLbxVCTzix4LI%2BW85WUYy%2FKfFVzzX4IdsJQdLBcUBuOMWYscJi71W7qT7NZJQS9HuZ7WsQJwHqS1bU2sq7nxkSBPBaraiB0hPMpSfQKDmkURXrwJO4MtYiveLhH%2FxyiV%2Fc8CA%2Fa%2BfaIhbZDmxEMWAfwECswuYrQyQY6pgFFCxS0%2FJoBitsv7eLlya70Ya%2B91X9LObANGpV85U3XIZoB%2B2c%2F33XI5XsY7PD4OTj7Vb6Te0iEQbbCrf25KI9qCYiwOKHaltioeOMIESR2BehfgdYX3gUqSErYA8TbFxw0oOlazDrULAIgvWRiPLZWXIpeeHhv3fAo6FJZcarr9XUa6hnemIoQPRQtEY%2F%2FLJbNSLdJG269XWIqfVBkAiLG2PFD8EHz&X-Amz-Signature=b1bfb495cf33c9b8ef3a5e38f08cc1ed6eec28e57813de508a741f74dff526b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

