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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4QNG6CJ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T153009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQCInmFk%2ByfX%2FksczWHgYnJDSFp6XWuOzcYLozLVQq8HDgIhANgEeSeWsqX6Qhs1MJ1sO4wGmXxTGyukDPLrMIHim5nGKv8DCEgQABoMNjM3NDIzMTgzODA1IgyRKKkeXVhGuqarwb0q3AOeQNBnxsTn0M2La8ayPaNzwZT0KArQ0E3K5mV0SDtQPlmzCfSr8YwDBVMA0pHnvRsnbE2vd9CYm4a06u9FoeomlzyNV5O%2FwM9ohiYJT29OQ%2BzG1qAt1qxDLH1DKotzXG71NsSE%2BkFIEON4fK1AxG2Esc0rAgDQBj1vnwGlY%2F5dCso6pzBf8AdLUj8KPjQtjBNzVkedI%2FPqA6nrg17zCmJsXfVc3%2F2jwpuVFNzkdxwmDxfiEYHooJT6SuFv1jPUH%2ByA88xA0MBrbj9n0Of8%2F7PDLDOgAo1WXOAxeCUjd42XFmBuZOX%2F2c3v%2BErMa61HuUE5Y7hHUJKCDLmqNcU%2BbtmgS4w7z3Fvtl%2Bma%2BL3yL%2F7%2Bdmq1RTHwxc1uzKa%2Bog74RXXpPNRHK56ASSdtbXlRWQxaCi5WdesaRs3dwZO%2FKGBm2v0L7mjyHcxi%2FHfmA41ThW5MSxhs%2Bpitb6%2FbD9Hqw0hKsSLnVil0b2q62Lb8TVkPQCNjR9OKAbVCeQdNDC9x1RvNypPXHc%2FgnBpzfyGbK6ZWgr6n%2FGvdA8pwUkg%2BCz49a7jDNUImhFTSCQ%2B6jz06FYRqoCB%2BPTefnMQC%2B57NQx%2FNnkvb9Py5IUeAfoh8HmuHpzzBD7sgID74X3xeDCZv8bJBjqkAZRZ1PC1XZ2cQ74Z3%2B%2Ftae%2FaeWluNw3HD4CJslybIEFS4u6Xk2gFoIBKp6kOeid5xTFouGsljzYFIXZ35i6lDpOE7UQHi%2BjIGUC9v2LOvhlTAhEQQ2JeJkLFcDCPf6UMbToRWYnDuDTqMJptbZKz6D6q6%2BcdrOF3lH%2BjbWOhrolBR3OFalmlffFXN%2FadPyhDkTBLuay75RvV2VSogYTwbJZ0jBvj&X-Amz-Signature=0689249d978bc672f83fc5a0f374e74bf6f972d28bfca07ca54b9080120a8f43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPRKBXLM%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T153009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQD9ujbQactN2vIgWEiNKdVYC9n%2F%2FMGe15gyQvaL2%2BXhkgIhAPpoQkHu0dBeYxUCUehjzN%2BiwynfCSqd%2Bjs%2B%2BET%2Fb07hKv8DCEgQABoMNjM3NDIzMTgzODA1Igw%2FRCsk5sGLsmxjNjsq3AM6bKGYFOVXsWfzEXK6uJa5XVFFzxTIICNnAvj3rGUAFMc2jT2bWpiJZWUKhx7wHHdZ0T9XAF5QFGqvt650aUzcDFWQogimHhJbxhbM%2BFKG5xE8dSg4FsH4GVQ8pz0DcfE6fOQMnWZRJ%2FkgA9Cu8rBC9yJg1JtuEgFb3wSIXyWy5pZeBmZm%2BUDA7u0wRysdPBnknvKW9N%2B%2FKxDZTIh%2BvnYPnVy1O0migzb%2FMa3ghnrOMEuBNpEg9L67io8Y%2BM56PLy62LuCRQB79sKIy%2B0JDZCuPSKMZdi4EMzrXlURXptal%2BP7whc%2BhXgcdK7OqKJtOtgY8duKLtRoystAqfp%2FZaSXSZAzcDvJd7%2B4Ppg7Z5JHDE4c6%2B5ZPRCB8vvyrNVdZm2UaDko%2BgO6qaRkMkmJj9z2za19j0LhkFntUUCY9VcAv%2B3aC890lh0nWTjmYG9XbQ%2B1bxfapzrMY9Oz48bfzoVyI%2BpOrOOUuyfGZSbpcS2bC3ohExCtEGXdSvrUonCkPGTottIgljY3%2BdjOj7DMV5R0YcFusSmZUosQN7LFOekW1ka7e99c996HGDuvyEyWcPFnYWHNlJUJDF3wk%2FSbScDjlfhv7WmqsjRKZCF8loTXqnubXkBk7Nw5eRmMFjCLv8bJBjqkAcmQFSEx2tAnDaYkurttrcmxsszaI%2FwR3QvdFkYWfYqfBDBr7%2BlB6cBBzzTAi0WvMij7afHqkD%2Fe2fCSIjxk0EpxvhMjLgX6pgcQ8zlkxJRMzlkOJgBx8uFuxbvo8QHS%2FAQ4GhcVE20WP5kT%2BDIbTBkYHk4FCaX4wo0ye6J6msoxyYi1v4O3%2BUtKL30rkeqajJBRyqCMCwOWS2jrLpfQC7KbJ270&X-Amz-Signature=5db87744aa24014f9798877f46952fd15a6ce5a439f35a4340b1f6fbb964d0da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

