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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMSUTAZA%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T212410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQCQooKBY54bHDev%2Fe1DbhKpsevlUr0wRT%2FIOxsnYGvTrgIgMDdPYn6atj%2Bv8lx28GVGU0B%2ByHsFzTj46PYMPWNr0V8q%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDMw4dwMP4P251R6vdSrcA9EaYhGWtFE2FDnZxIVvk%2BFqdlVsA2uK%2Btp5I7UPl8ByDtf5VCRl6fLHplMh%2BKvCABP0exkvMj30CaYQYBl79jZjfZjN46ITs1Jl8QaiFa6OLEZkfYmuwOwEMhAW4Ch8i69V01anAnTVttajQ3m6aOxuZE4Q8Me8VwQbsLOSaNmrQXARc87nIaPIlYU%2Fe7pfP3hLn4%2Bi90K2Nzb4fySc62oQn1zXir%2FDXy3G96UJk0rdE1HSuvpP%2BCr4oHp1dnFagvl1NVBs2cfqdu5%2FtgOBEMDFagcby5npJORmTN7CNDcNb1OAfsvyy9miz7%2Fv1qnPEBW%2FkjLdylS9QbaAeod%2FctuYUQ%2FGOc0Ej751hncNsCGaz2GsFkE2lo%2BVgomJvuQps9jtFD5cboWza6NnFntaAA4aYXZWtVUA%2Fvk74CknIalQxaz60XZMVzWf31fIT4%2BL3t6lHtcLABQlC0U1n3ZtQ4kHOgkR%2Bjjyw0evVC5nM6S52qyO2Hwo2CfGi%2FeH8jo6FIG0nvhuHvao%2BFE9dXCyKa6oVE3MlkBB7vADQ%2BDcP4ut7psZYux1r3VQ35onSfZRvKbbSU5LSrd6MW92w3XQvJGVpPCfTDjvELdEz2yatyBT7b0zvotMqqEre5f5MIe9wskGOqUBCSHb7nhZiDQcrKv30vBCrh1znGNW3t7weFAHq9gXtzvgyDH9CHevRZWoIj3DGzgvfFOAz2biFe7L4tDYagbGzzGfUrSPAlvSzz1DLdXwPqUtWYQ9vBc421u%2BG8vLnKBDfWxQ3MEn1mt5AsrJFakzu6lV08FBeRJCMCsDz60EPBXtmvs3PVtNjK4fpI%2Fdqk6Tnp849sw4x45I1tFaHr1bBKFc3zk4&X-Amz-Signature=62ebf71277a5310d7d5d50b1396c7b05721a977304dc0fe64a0c1d40780d1583&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCUYPVPU%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T212410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIEbLoJxa7fYCkwz2p8CsAMQ6L4AHxdulYZs32AuqE788AiBDlE6IPSRnLRDBJsDfXT2sOhKTke1f372PYuPfloC%2Bzir%2FAwg2EAAaDDYzNzQyMzE4MzgwNSIM6FkYk2YohL8Jm9%2FvKtwD33QQNhbozaq81X6zU6ohA1SU8sTQ3NNzQzxYOsLH%2BfIQp9uGiuKL9kp0e0Y5cTewiYh8sFHKdFkfi2VAbcxhz%2FLYGlLbGqe9D29SeW574L74x9hMFcBhRN%2FNHdfKm8woH0eWCNZuxfsF6vodvfGdx%2BXYZakUwqvSFqh7Gvoxs40AVnZs8PiXunGXDuEdiWO5w63%2FISwqqLxWoouTf4vNi%2BH7b6HIaKTk6k8ixkqm8%2BbtmP4uP9srT0U%2BM6sXGVBy75cagMIk3L9oruW1wIAVbfkGgIkQbGPYUod%2BjIhpVX5RLD3HKFQLNd86xpg%2BriseNmk1%2FTVTIXCDIlG0FBdQ5MfnqA6yImSJzvPow6mRTi7603t2GlOZZi%2FUA3IejoJlLBH7rFeab2Ht7itnE%2Bn4ChlDA7oDFWjV3JAWO%2BkcaN%2BPdII%2FTegwY4KMg26dALrQcojkny%2FMpoY2YZD4fV9fPs9XP6VRzhpp2pNZ7%2BV9XmZ7yNhYnVmA04Q0SCIStZygftiIe4wPXEAV0od%2FraZtUadIfo5ffpoN%2Fm%2Fm20ZXcQcW%2FNXUotPUz4YlX09y6WnX7yx2fe26Rn8C1C881mWod9GFiUhqjIu16OXeCvRrO1vm8uuja7q9j4X7VNIwzb3CyQY6pgGUFX5jMhDnIead6l5r0Wch9j3MNSW53TQN6B4R%2FXZpsupXwVemJnSdaH8njk2sO8uP1cqT6K3oaJbRst3OXKKgdjHZdt1NYnDbLldZbvHmSfcdWQL6BxSffpumbvSynNJJAKWPiUT2VxT50yXKHWtBTu%2FK3ZUeJojTd9MBBLvfvhN5yPsCGz7R2o6YtwHviEpDxy9JlNG6edlXRQim4G3IV3uZTASL&X-Amz-Signature=49ef7bcecc82a4b3a6c13a19913f3bb6cb5b17faff88c699d203a5dcda84c505&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

