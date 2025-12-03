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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TG2DBIE%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T111115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIBxLTImipCqfk%2BF7w8SkpxotyhQBk0iuVGxo6FsY%2BFc%2FAiEAnJ6gToF8Ix0O6euegGgIjMxYqS95%2BYsZtZ%2FQXZ75tPIq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDLN8dcqp356BUmuwDSrcA0Ln9ebFMmKmmnK%2FlX7A0hkT3UpDrYZJvBFRU0ISo9E0bsX0xeuhUb1ngA7UhIJLy4iUR%2F1u3XYEIafWIIS6tqRLl4QLIbeO%2FU804nGWl84eCZzQWJ3%2BPlPOZZhmkv4H3c5kWkS5FVmU2DhyJlwlUkz9gPAw6skAVl4bIoH0ZzSaLzXd4UmPesoG3ldBKBugkJ8vharXUSsnjxxytRSKqe7AN6OHkcl1r%2FShJhhVu7GbZoop8h3pjbbX4QYdDEdQDvxYcYXxFGMpebK8ds7d8VszYG17bxs1uQueJeI5%2Fix%2FzjLXCelUx5uFE%2Bqou2Spty%2FwVQrrJPmLAeuUd2Ax8DEf%2BZYXo88ZW3AnDNKLdKMgsMo6obdFWllnRUC9clQ8oGgtK%2BEaJQ%2BNt5Ny5nXhmLZNLFPYjo0ftz7zBz0FkvvVZoVjv4k%2FoPJUCpo0K5cDwqIT4nXacEyq5M5jfVDc9MQfiaNpVruMxVK3G%2FC%2FS8Y9yp7e69ijnbR1ZSjQfldGrQqec4JnpyyywtsRGeX7sy1uX3prt2t4rgKZN7xiBGeRFT7JT5wtJ9eWNu48zbOPu62BqkrQ4gnQdxHGvQ16QmE3J7reZOQPBBA725TuWUlBhJD82cgfakfUVJawML2uwMkGOqUBztAwNwjWNZV1nWWcfNoUNL9hGqTrvRPvOSaEzgW8XmdftPZYpHGS6qKXJhRYqrGvxlXE1Rb4UvzorHUr%2BFYask12PxjFOedIl%2B8le7iiPDbJ1u94VoBnSDl7KApRDkaLceqpccPYisNXuMcU4IOlLB8xcD2B2%2FQ2NfWXTva0q3DuJtJwEK1TGTMz5zYrya7sFImru8zOUsh1pF6FNUUp7RRAmi%2FN&X-Amz-Signature=e69fe2efd16be6d9e3388f4b837006e6d731550f48ef6d1bd08e815821c8c5bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2ENCWJD%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T111113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIEEdzryXiyWN23pPdG1bYSSLdEghAqk%2B%2FUZJMs00Zc15AiEAlgqB4Dyxy66M1iw0vrF8wufbw4frJpspq4rD%2FIi2OH0q%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDOcn%2B%2FgcH5gbeHoXCyrcA3YDMbsZhJmLfY%2BdB8YAotXy0eLLCN4uGHrQzow3B%2BtjwqmEummfhxOYQEmTM6EoyfabLh9VCb%2F2Ub1Yz5LqHQzEu2jxJQH7EgdxK9yZmhScQ%2Ba%2B4RKahIDEqkj54hjwbHdnYt97Yf7HhC%2BtzU8ZBNxpqgQrLlUjsi4pa0MYLNTR1U45DA%2BOe8l%2BsEOTRKrzT9qIql0zYkAuvYzwy4Pd7NrbeWvooXsh4laEReddU5egIuhecdFkO%2F4QNyaH1v5JC%2F4ZkYqx03zN3U0VVfZuhqHS0BYi1ckz2SJriLW%2FCdxtQVP6LDED5DV3OhiqdfcTN2arc%2BJ5uRMGi4ljzsaYiF7dfQjOvb7ZnLBfkJ8TT5FgXgZQxAPlLhx9cxGn70kQORpTXUywk%2FtNS0SpWL47G2bxDNgfN1zYK18cT706AhwT3zxhSr4vLqEB4%2BTe%2FvW%2FQX8ya76c7lhfYOnkdFPie5tiz7mfecFjHHWebSbVDPQjirmr1voSsz9NEQeK7UiYFBXQbqiLAxsWJGPoF5ZpYEGPQM6ZcZ29M2dHATEYokvOGY5qcVoTbcfoCd5yd13y%2BwjbkRpJFiI25%2BYLZe5VhLPpMQySSaRJskccXrP%2FDm1dm8r1aMXZALop5OFJMJOuwMkGOqUBr0r3%2FGob4c0Bj3j0SD%2Fzfh98hsqcDvSstBkX21poF4kPW7Mh%2BGRSdnh6GWkxjjZY8brDETkktA4UtGT6PV6ikrp23bnCgsJxk5VMIXqcuyVTa%2BypS5CiiUs9xZdLru4lCiU3%2F%2B6PCzxrLh9VGgpik%2FsXggOkYZbIgHKx1zn4PJojf%2BN%2BQf07H5ySTsndcpOdhTvtIsrRVMruv5i6tVXR5RAzc2Pk&X-Amz-Signature=c405b87565d5231ae36083693c2d852c10ac97b279f8140957964f7e8ad52bb2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

