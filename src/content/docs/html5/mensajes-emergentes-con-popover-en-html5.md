---
title: Mensajes emergentes con popover en HTML5
description: "Uso del atributo popover para poder generar mensajes emergentes con popover en HTML5 en los que se pueda incluir cualquier contenido."
lastUpdated: 2024-01-30
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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJFH4TFJ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T111713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQCpn%2F6V9W%2FM5Tny2TushvhLxv6Q2yrDRFcQAdNDKGMutwIhANkPywBnMvN6qitj5TksCD%2FLksWJkLBa4%2FmUlimOEHWQKv8DCEQQABoMNjM3NDIzMTgzODA1IgyJPg7C0NL5d%2FoL5bkq3AN6lUi7eJCCnRlICZfhn5On5pVZ4UhRYhExCvAcF3Urdd305AhYdWSpzRyF12GH3bF2OaNyUDyHvf9trrRSfO%2BTJpAmz7ZkAyB2dKq9X4WTetkY1MajE7NGiwd%2Fzs5Sx8Xs5N7570jztwKp%2F3aFiOQmRZK0UgOFCSdScKEbzzaAMCdJtAn7EWiRKcWhxLRyNJz5ftxhJkZSXyEwGbCt5ggNNwHM9%2F0bJkWkagf8wwJfqRbdgKLX8VH9cy8U59BBwVkGYWjcR%2BtcgKkalU%2FC9Derst1gdt%2Bh1FCL9gXB4TURCeFgZQHANB4Dt8qYdbA2V%2Fs%2B%2BHkIx%2FRZ6GKizgYlKsWZYZ6LKRdyuZ93uG0%2BF6Evm4gie6hvAdjnNh7mYleP0sOviGWB%2F76ZV%2BCX92PqDV2RFVBafvlfVjntle4xPY5lluS3XwckbGUWmJtbQ4ujOcognIiw04wKSoMGGh5ZXL9JXa0xycB9fAoxoq7nYeNczKHwK5Qw4ciVGQPuUmd6GMCgxcKEN1RXFU5k%2BVmw1NZGPBWsmOfLei98ChG%2B7aUnp4ewes67ya8%2B9PtV69TrHNNzKo2POv%2FpTIHyeKirUvkXp3Id4DluiXKqc5xBMufJ7691J9qgf90ec3eP5TDHysXJBjqkAWOODvUe16jIin1gn0f%2B%2BzN%2BqLec6hYLpaDnKQttHCGhqEL6cSOyAsSDZFP9eMMIDoUICWMMhs0ri3UvAyQ3L82JqXoUUBcmst9Rb646S6N%2FLLrJSaoeOjxTKuwVdWHOlTj73x95mHZNwQGaLaBj0dACv1QP8yexV%2BWnKkT4CqgF0QhOtoH4DWGtQKXYEtl138hgOsYndYIBd1cWMlE4MbnfA0fC&X-Amz-Signature=3552d6f6eabffae1b7e29c5b0a2e75df50e65d4a8c0c1f5029fbb94767005737&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYDZQ46B%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T111713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQCYgNeav9seV6Of3d9IfSxHSL%2BoC6N13JLwMlkA1GeQMAIgP6Du3ELSEU3XIZ1s4ETzeHaAnVf6D2xNne6AbVRmeLUq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDPdPc9PuvZFt7Wb1aCrcA6GHwQeCm1blWNhni3Iz2LifvGZ54ehtWsn2PUzAlMt2BM3n2%2FUecJmMtH%2B5n5V9SnolnPvM%2BWYKfmtylhTGWlPrhy6wRPJqb8J68CD89kaO5Y75XwB6PEOQ7LYdhK4o%2BDbSLI2QjUgGOyjPucUVSCmxKcUx6Z%2Bgorw82mjmgNP9SfJyYQl2PTXdl4f%2FIE5Sp1fgVjOlgcq9EdExtmUd7naBIuK%2BcrVcyYgX%2Bx%2FFfsMbidlnYku5bJ5KmLE1Us0W32G%2F%2FcBaxFeGmPg%2FCGB1O64AsjxSU%2B6yrkep9cK1Xe0aKgLsoKHicndLcagb%2BfEjW2%2FvizoBkmP4z7vJkkRqFfxRCpLo%2BPxP07kYnJLNIaj0xxnH27uUzU4%2BbkN0r6RphYiuQ3S9dRlWcw90BZ0MZYhlnBwnXsnqqBzqqIywYCD8IBSgP5YxL%2BehItU4q%2BBZwd0L4x2Kyyqs5jPtAEMjixi4abA6cc1x9MKnrzLtpk7ELmHT5WN4en9bwyS0PZIIhPHJ8hWu6X%2BIyUW8lasOyx%2FG%2Bov4uv7zzVKemmMtkgwnlcUzZu5dLFi32UXR3Na7IuErdj1KWHKe%2B56EpcftExtBpVroECBu6UZKtY3cmGX4P2K1qzsDGM8oFqUIMMHJxckGOqUBEVzlWUZPGFjcDMx%2BMgquJiVt%2B7ueUzZzd09bilBxSfewXEFiNQn1vJ1s5l0o6KpY%2F2tJZrvfkJbw1PU9fSTZrnMrDbIKhoYeOPO73fKA70y7hz1%2BAnPYAUQJj8DRUnhW5vniRH6f%2B2M2XoP5dPIwubJHobli8eKo%2FhyxFsFZSMTC1ASzZ%2BhFjzbd4Q5CbawRLNpmPfY1sKhuC4umF%2BIhkQceQDHZ&X-Amz-Signature=043e3ddc49958e0328e84ce25299db54e7555e04a2bdadda5bb218d3320a42a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

