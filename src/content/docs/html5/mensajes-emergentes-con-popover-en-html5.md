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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BCKMDLU%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T213930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2BJJuLTkcZPKbN576Xc18gk3ueSH8nU19NOo%2BuCXDI6gIgeU3fDTuevrYf2OWRevMO9uB0fucSzVapyHRLMSd3d3gq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDDLVAemM5%2BFtxB1FFSrcA7heulla3tKRM736JVvm5LM5kPNT%2FFbD%2Bj%2FbmYbGcR19%2BlUzr1t9mUyj26C8xZqW96nco9phNcei3fG9uyOhu05wNCtmhm%2B8xcKpLxXLAwCzo9kW7%2FxZh6p6AR15l89UjwW1VacKFptadGfGHWoFW08ftj6Iob8SR9paxNlYPfU0Srbd%2B0q7mpqXjADhklUvVGuoEAikBwQNfr1IChhb3e2kRpO7OJpqPvnWEsCuKEvzlKyIZ3GABaXGlDSN7zVSczxnm%2F1VvSHEkzrVrl%2FJwrwabsw4GMx6%2FkG2iOjPMNluOxi1KwVmdDhZHk5IpATGXhFRm79gZSgb0bemhg%2BwYsVw01gYHbiU9kVJXZ7JElaCgCKsydrMzwENA7SrNbEthAdWVKT0LNcAROkCf5tcSX7tmDzrO18FmTcNwEf5G62ZxIdHvjZZSaVRp049kLSkr5G3qhz4xkqGNZmDmJZv%2BlzVKabQGzsPRQ7mD5Gl2Yg2lXZkd4smDKcnhwqtdvYLPX%2FsgU%2FBH7dqQcNihNKla1cpcpcJrhrXtDwUfBDSsTwJfQpvCRJSOrhgdZ5BZWz1sqlz3UO5MrblacVlEgq42EuqXFq%2Fqdj1GNoZlqFpxI9GBAP2vZ8z7IcgcGyVMKPN0ckGOqUBU6x14%2BBGhPXQ4JbCTLaqQp%2BbXP%2Bo0L8lfo0wS8bKyZe3MF7zGm0kyM9cIwM3PEBQIPGIBeHjUPnFKdPPzx%2BD5J4K%2BI23G3Eu8kCx0LHe5KC3XK3u8XoJ7vh%2FCG4Hu9J6pbqDCqFpTN9kPxI0Ko79ebGqtMMjB61zWjv2RJT%2F2uojz8Avy8uWMMYjHD7767gvJ0w0luW1tBkfVr1akqeOodw%2BbwH1&X-Amz-Signature=db38d9628b52732315fc37a115fe49cd3d1bd91c1c191445c2179ee67ff68e31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IOANUTQ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T213929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcKG2%2BQ%2F26J%2BkChXD8JOxrAqP6a4QtXWr7ZOQwfM8YNgIhALHVYgbCHzqFtZaSb39bTC4QS9vmCB79Vd4gFI8AM%2FiBKv8DCHoQABoMNjM3NDIzMTgzODA1IgyCRdof2sJ8cPL%2Bf2Eq3ANFXn%2BWm2gYaYH4J0V%2F1fmr3RbdRNbnhq3rQWY%2Fe6xI2KpiH0vJjQfgLNxqF5tkjdP%2BXzCeCsISbC2S%2BRk2a7QFETAx2wJUyW8EgnKBfO4CrskCY4CAAG3izYcP7PSSHReQcrLZqO7xBIk24tvKBxeqCCFHeGIOT7%2BQcEchp3RYJyuogpuzZOwmviELhmax%2F89DVG3Sz03%2BpBpfkk%2B%2FHyMt1weZk25XbZveMgS5vk6wEqlobfJm3enFYXy%2Bcipr6uWeHFshVqDStAvWGiCSoG8tKh0pz0%2BBpaYrZcuz%2Fgv9rwm68aTvOpcJ48MOgyzFv12ZiC5Dtbn79VTCk59SNGYyeDqDkL7CO%2BtaVmlk2xw6KWrhscOScqSjrSuhdw0Cw1pU0ps4NVIlcPP62j5LE6jspn8tGi7Oe4ujAiHGmxEITOZ4RIhBNSL9gwmUVdbMHXLZjj5ztrzUq0XLiU5sy%2F3mlQmoQ%2FiH0MaQ1nzAqqeAB84giClMG85lJkEbZnk958CYddzYv3Edo%2FE7GT%2FkvEfH%2BGIRlLELN9UzeuQaLWkdMAmVIYv%2Boet9kcSMmBQQaYXkcWQW%2B8uLagbSLQ%2BrBxa3%2BQwQ1u8R8yPFBETV71IWFTj2yeTovmoylRQhjTDlwdHJBjqkAWh%2BU4Nx3ghzFpZJ78Wx%2F5O5t%2FtH9jvl58UysJ7kh%2FX0KaSE2WI%2Fb8cltyvaVqVFvlisJ4cQtDKMsNMfidkc76cXRb4kyhRvGOvMo4Rw4qe5bwysedScR4W8%2FqrfTj84iYeNim%2F8M%2F1I%2Btz%2BVD8n2yOlvNphbuyxYTscy6tS83%2FIeMgakKwY7FnFlm4jdA%2Fdsdh2tpWOxDid3rVVvYbUwosnsIJq&X-Amz-Signature=61fa9f2fe2bb9887cc349d2db49c31d1a159615769b0d0f22159e74bd2c0afec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

