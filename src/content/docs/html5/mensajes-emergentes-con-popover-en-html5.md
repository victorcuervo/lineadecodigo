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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HSCC5YD%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T225253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQDKVXAg78oufzHwusxNCSirB%2F6e1L8Hku2aobgY6uUWLQIgT%2FnvOloIaF0qceCF0R%2B9MnkST2n1GRiBF6Dnm7z3ri8q%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDMZ2fmGgGAhaubYMoSrcA4G3JPpKzeJVk3v2VGcRiEGSFAmXnmRltycDNMVYsR0YifQzcj6L576S%2BfV%2B%2FmoUlk0NodzeA1Ju6nMMCq5gZAHPSmsc%2FJFR%2F4uIfTU9I8r17y1rLAyszzd4VbFv%2B2VtFOq18jESpVtd%2FWqCxymxgHBB37QqNg0u3sBk9fZ2%2FfwpsdPt%2Brd0hiq24yQ0kLkaRFRH9uR1tm4yZxs9QM3uZRt%2FOUi%2BGKfeVjjaEju8AEk%2FS%2B6tA3EX%2FdqNxEKgtnscBhiEyMFge4ZNAALSFFoqU8Xn%2Fj2RiU%2Bcdjsnrny6L4hWoidJCwTHEO1ctFmvPTPksKnu0IgZW%2FQ0DA92Oj2l%2FdO2FYC7%2FkKXLSqFTeVVOuTJ3MrygIsM9n0EmjRjmsbFPtAX0mU5zWPFWot0ZoolskRy0VeQ15Xk%2FftaYFB1V1QLxiPKzJzZhfVu8eOzc49WIYJBm3WtaCxJVbANGn959DNhLVRxIRQQDFrPMsPNO3g4ACE%2BFoe6fjp8Z954p2gEtpX23bMPLU4o1hGMpLeSkvBuBkcI4wq5N606GmVWN6zGaamOpsW%2F1y3v3Kz36jumm9rWseDU7MueZBGddclotXvjAE4gFUqLgc23EC%2BYowB1NLBw0GQc35y%2F4kMoMKr4wskGOqUBUlhF%2F%2FJfpGl1kmNOVG5g%2BTy7E7YGTi9i8iIR7nPKUBQPR%2Ftgk074MDAB2ikubjVokhkzJ3VEDPgO1PEhWPfXEZwM%2Fs%2FUvj24fstcH9alGtihORllVM7w8w%2BsxFaxuOzVXa%2BXdyBnMjck3fNjdY7h%2BGU%2FD3XAdqveOUUln9WnxTJ%2F5QQaJYQ981NwSN9yLgMpOdlI%2BmCKdblisi72JoImTBYvui8i&X-Amz-Signature=8aca0d1eaf425b4af513c180fdf52fb3ba4842e4b0e85941c3402c972549594a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466372JVR23%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T225251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCIBzWybLHqBe2G5PW4mvMKZwJ6IPmEsPPU%2FLVfpOEUfGLAiBOZ0jp1qGA1Pwax8gHVHF1rdIlcBPICbX0U0GybKqaVCr%2FAwg4EAAaDDYzNzQyMzE4MzgwNSIMkZRgQxOBQdzkRmbJKtwD8yoGkCB4tb8bEuu84H4rqbsswk3NHbVmIFgts9zDBugDifJe4rW0Y4KkKMzqYGYl40G0EmEN%2FuzshVmNectRKOW8QGyruMaWoELaPPFzVNhkTrIOP1KF3Orva0kAZgL7Z3BF7JEUL5fanH%2FnfESaww5qSMfvNb8LKDBwhgQRDTpVBUU4MSb3Fr11cKSZb8Bv%2FPkHUqhN1Tizx%2BS%2BOCKeRXJOKZoNnfcTy8xJNG1ikI7C%2FUe20%2BRANvs3HDQ3oMcj26B7k536GvGNxiJvFd62KI8jf04hupK5iTeZirN9rlWQz619KKhITiLwkDEf6MdYbXJSsRCyOGuXEC7RS4OOido2vo46rUucXJzJsNFedmCO%2FDKE9j%2Bi%2BM2hsu3gP0Yx9RI3KU7%2BY8nLCIVGs6RalbwBTmTjUbUgS8AKfES0ehV6CQdy%2Bkk7TqLBxID8VQ06y75CJw5i5FvDDj6eDIxS7ffazVA%2BY2aItSLOthCnkrEx26eou32wuzq85%2Fzvbhyqjp%2FOHoUtzxwCtPTnj19DMRyF12f1HTEUNOXZX8LQRYzXj6E%2Bol%2FM24IhLeNttEcuF63BcJjX1rqHb3YT5wELsXqW%2B8D4qRnqdKJiNKoffVxNuKfadFiVUEW8FmAwwPjCyQY6pgEY71nUY34GWrcMCFKV3alYadODfRQOAoZBfqiAil0pWpWTUS%2FGNoATqbA6%2FtMripghqc1rcFVSlrxm0EjaUmHJxGYcDKe8Yygmj%2FWATp7U1e%2FfSTUKgM84INMNL6xhr20rDmrNcnOWZzWfPZq0ypCIQnxLuCm1yk1j4c1oxomm%2BeWG3e15mJiFzvj6Hmxkx%2FXbCHWYX7hD5roKu6adtGzcOPZOAM%2BW&X-Amz-Signature=c60c97114e3f1945a32d926a472623802d53ff3b453c9ead964aefdf8c4ee3f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

