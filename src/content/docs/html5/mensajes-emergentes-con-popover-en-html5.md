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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQ2W5FBX%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T143602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKC6nAjRJgSc1hLNhDIewz%2BKmwFh4djWR0GzYp4pzmzAIhAI2HUpV3rgSEvREsw%2FPZMtj%2BedujmdNyTYiAPBOTltiVKv8DCFsQABoMNjM3NDIzMTgzODA1IgwVVLpxjxU8ja1kxyYq3AN%2BAguc7dhXmKIxjEz4qFqVH0rlX5PmQ8JYChVZWh%2F0EDO1MirJlrxggcP8gT4gMKz6I8oE2ypIb6XM1lQo4A8JdSLF54MAYEuXZaUwCc3bn1%2FMUqvt6aBKLAXtL5AyKANyVZ3hL29cNSL8y4%2By%2F03beuQegqGJGMDSPhPhUXEjUcX8ZF98GO3CeBixFBmy%2B92Zx5Tb%2Fg45242AHR45yq%2BrhCPlYNJK3HGbcYoZX8X6B70XVQfaGz%2Bg3kOxFsLinKJmqOdtWKXdGLhSjgnWgBT0OokLb7Q06tPC4QN2U60bQbzASR2WMIKg3OWSAYCbVifsmxcWBZjOsSMybeFMpC1roYroVl7NdWC8aGDeR0eSkAw1PU9K0qr1AX7oKOxQkwXq6zCxCMRLYL8LMcmht2ph12i4P7kAl0PtftBwiviZ66uv74MGN%2BEWxXysFweuDNUbqOpA05ytgX73BM0y4TQa6%2ByTfhyOXpQhtfWy8BNz%2FtPiskTC3ErZH6%2BXaVCwky2qItAmYEUvNTQPPo3TgGMUC%2B09iXatgwod4EScVZiJMia4NSOYKmgl8VlQmdLXxu6ytusMPwlEtnlVrWCrTd%2BVfb26tvuTNcRgdRgqqwC03xSREvQozw8984VdLDDezMrJBjqkAaNBxSs0pcCV299zD5cT%2FRo0pl2HQigC%2F9NKhlER9sLZdjW8liz%2F5wzZFkc11JeySr%2FsVQ62cuqaBYm%2F7cWlUqcHP38ekb%2BYPbMAEgfVByGD1CICfmABDCDDtCDr0wNUrLQZAH6daUVAFKyHJPjrsRkzsMOMdnhnO0YPtdY5R3WgtZnKuczl83dR0oBb%2B69zojb4SV%2FifodmKbwpQcVZWblMKQBi&X-Amz-Signature=568f355dbc5dbff6540bc26f575b450d4993cc8bc7ccf01e7f973d81d6343f80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WG5MYRP%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T143602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA5kXscn63yZVEOEIKwfqtaIDWO%2Bg1BBKIYGAzixwqjjAiA5PjBpKtvwuJ7uL1Mjg9noEKw1cgjD5UIhmrjzWgW1RSr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMhKrL0I%2B9JgMurBEzKtwDjP9q2FjYu7xCwf73Ob7CYqOEqy1wpPUFLaYefGzKCpWN7OqbHITjLCoS%2BfIln0Opjnxw9ZhjOmxEnxWHUeUZOetxhP7VQmGASq8Lttgpa2N4MxKH41T2YB2bZP%2BMUIzSnuPpZG6xSLR9CTZ%2FUZ93dN%2Fy03sFWxKB7VTc3B0ispsVo5DxVmG1H4uSEmW0k1HzKOaEt3kQrzgTgohQuYpWZXX3ILcDYpInMB34yMchh9VYJp5IbTdzRkgXklcCoX3JANQt%2Ff%2Bhb49S0ezJqT1VyH7P9zkluhhOHBBcsqgbS90Ajy7X9FwAtufq4e88WJXqt1C7mC9ubQvMZm20iZUB5Qx%2B9jJKiKuPxAUlyZSZEYbaFjY2E7s0s9GTREQNH7euT9CgVxF6dj3QtxhI1K%2FI7FcH44lGmu6oyB0Vfxnp2Nbnj8ctnzOVKSzfcItJkaDYo3Jsk3IHRAkYFLRZ00H64s6HjE%2Fu4RtsHrv0XwB4i%2BqUv2YS7GV24NXRq2CaiCkWu3T4XplEe%2FLbTTKyGHo49ID%2Bkp7piy9pJVHv%2F2wOu0yrAD79Qd2TwS5V1UjSPrrXnm3yzNM5tZT77vlNd16JGGNuuskJoc%2BAJjPlGpO3yh5Vkg8TgFE1DAsMnOYwks%2FKyQY6pgHjHiwQkhjd6ISwr8TH%2F2u1BKY7u1Jc%2FMV%2FCrCxjx2TxADfFYauMm1ne%2FXt5vfe2v1KGJdiAJX1vIUsOL34ZSnLLL8adpND6Y1VqXLOPxD5hJk16rr1PcQuwVrLUTLrQlUUK3gA%2F8JwPXpyA6xKOFnSQ%2FKepd%2FEN2GE%2BhnzdlpisFINPzRo2s5l%2Fx68n6vaUEAxU1V0Dv8a6HIsaNanOOgynEaqdM1l&X-Amz-Signature=0086415fd45fef3bd0b298cb96569f0dd794ddda12f59232da8bc6a8acbd4ca0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

