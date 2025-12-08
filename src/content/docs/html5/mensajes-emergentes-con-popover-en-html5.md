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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666IWP2X3%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T165508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDEvCwzCKqTtZTGyth29B5bQvsfWth9UYR7UkU2CRvyKAIhAOyEWlgFoAXrSOqmnD16BIVJwlbRZ9cJebRwAgj28a2LKogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxVim4Ogbu%2Fp7OvPmsq3AO1RgNpDMvBewcVPxJdAkThImc0VqAid3%2BX%2BCRec0T2nhO%2BQFNTWkQubbi8zSmHFT%2FIddeimZsQg9KObBrR9LLd56HME5V1XM37kRWVzYnJOhNcdtQ3SJOe3%2B8QC%2BQDLGSo7Ge8YS5dlW3xQyDvZDURZEtzUskw5sTqz%2B%2BeRBOKelZRJUyihSZ%2BR8S8cH6JpFQvBew6YL%2FyBoRIhNynRsOmUon0bpztV1cHtnCE4xLskiQ6fcMfTikB1WKP%2FerHLiFUCOnTgDeK369ql5WZvnTR54yXhCC2VT7qV79i2nkCE4E2sY6V2IpB4S761wDxBTOu%2BzH5BGkbX0V54qmAKFptvUbUEoqe7yV9bUlENR694WAekMvYbidf7ElXi0NzapixLZnv%2B6%2FBqhq%2FjZi4jylOA5p7SG05rct3xx9fhBVhB3aMAblPj05i2hlK1Z%2FgGPx6wO54VbUaadaoCX1kzQbcN5SlHNwC0tdIU1%2BUvjJe6EMs5FsSPbvFRfoM%2FgYY9Y%2BhJOJPI5k8iQdILnMX7fr75ush5LnxlY%2FxHfPR0mypGGoDu2u5UdM8j57qq%2Bberh2aoGlBM72pLqnqPaGFxicwHVWtO0T3%2BeS4%2FqMqVL%2FGv4ep0KkUwnCsCowdADDB5NvJBjqkAV1U0nRBsnvjFxSktpBKkozUz70slK9ERA6OgnsvAy2fQNm7%2BXtGsz%2BMakmRX4kOJMv3p69DWxJcv5T2tX4SFmfWjgXb6%2BXAZLzsywvmq6S6Lann56HuRctNGMplWZRUSfdQRWa5RzVWwyTxHHyhepzVk5mpGAZEngBmAo9bMPfvz177e3OPy7OvWRO0nlNxgK%2Bw%2F%2FwjFryP%2F9LKCyYoUAnJL6Pv&X-Amz-Signature=a3f3d0655bda776cf4e11268918315ae4716515787850dcd62c9b2bb8632e46c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HYCRBYP%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T165508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCkmi7hrSF%2F1wXVLM8FKJRhg9oK8b8M8aZDPXYFSlOTSAIgIONVJ4ZttaDXDLpN4Wc7JwmN1N4o46GHCa7mNS5ELqQqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAR7kl1w87n0iw%2BjxircAymf3laMKs2lNeABxh%2FfQnLnN7pzF5Ycg%2F%2FiSnaOYLEDl2F%2FuYs%2Fs5k79SdOlbCFphcq1RPbxhKLOE%2BxLLlTQBSObrRjp4UsS4OSph7yiSx8AR7yEP7cm8SkSQ2FMfZEXeir1cu4QwWRca9cZ9QNYIFa6CjQbcj2uHLltj5r4jAX5B4OWpYRLqzdZxPJ%2B6yi7Xx3zDqh6cePcG5UkgkVqJEq94wKqJNdgNeOVX2IG%2F28PWuO4bqM3Uy95X22yLdWVYfX0EHw%2FrFsuSYK66y8S99jenvf8pM2rmYOqixeba0nPD0i9AN0QCpLWO25JIz6ADOUbhhXE7d3hEUIc1FkO%2BJd12Rr%2FLcANWZVUIGXX7Ts%2F5dtI3cOQ2NS4M7Wr%2B5wba5NPvYyBYXWbkIoYkfhk82gq3sKajg9kYgg7Sj%2BljdAk%2BlwZEWXkMLL4lqZOv8oViHFNbmJU5HWgDEfNklrQk21drHUkFOOAf3T%2F3AQgus%2B3Alu3t84seOgzjSr2tx2mnHCTbnMGE60JQ6aErHTDaGbg8VrgimGRFLZauFn3XRmXsWqPy691ePXznphbzufrnF95WH7K6fe%2BaFfQDDlwaQSqAdKZwHhVYgw1pBwBhfF3h%2FKF%2Fe8R%2FSyPYeUMIPl28kGOqUBCLBtq5KHwVkNO%2BV2hvkUWUHx0lVpCyDUYgjidSMKIciKa%2FqK6QSGpgsuL8w86ptUm%2F%2FPDIC5S6Uu5trwooaHy9xDG3z%2FW6e2P%2Bzwl2%2BBT6a65YnSHtF%2BMZWu3hkFy%2Ba8Ev%2BoKdcR4Zt4ElTjFzRb1uFBwVT9g4yaf%2BP01guocIzjgKSqr5PFeDUvG3MYcbrkmtqM%2FQOHaKgvCyUODtfjdSxlS%2BVh&X-Amz-Signature=06ccee803c22af49425245f0a8256c8a2bb3c4e1ec1ae80771fafec3da56ac43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

