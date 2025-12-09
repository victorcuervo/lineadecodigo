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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBWLIAJF%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T030829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuch3d%2BZPvK86HiyYUQUnvEGQ2tMUN%2BhHjIMqcwuER2gIhAOcSWClqcoLTp6dm9qh5Feif37C95pM9yU78%2FjaqCI%2BxKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwe%2FIJjBL8elfs6EREq3AMBhbBJAgoW2jwga0qoDAjvi3pB1yY0nJleaum6moASZKehnCJuTdcw5pBRvSYGM8uwr39y4WSVfSMBmmEqwgmhk8wgBhnVvIWpEL%2F9FxtoqVLNRBg%2FezxZ%2Fo7K9pbu8EqAm4TyWJt%2Brc%2BMkkX1BVG9Ryat%2Bie2v59DWgeDSyuNcGXlEssnE9cBPxieGVCl%2FX9ZGGTq1YyLaGpsMiWbkZJ2WyIIZsRaEkwcewOYSYwF5AroSyaZddI%2FHPPr0B2fW8F5JDuD%2BgnNOjj9jyDMEBrhcHcWP1N0vlWKWA9y1LhJ1bD13Zf9H5YMdMtSG7tZVcyqeaphM1dJIKdWRt60zisYwzu0sgkm%2F%2B9%2FRHcoUuzgoUuWQIMZwFtPL5v0Oq2dFIsVvVfspY6n98X6%2Fs7pPyQF5WdCZQevPCejOSrWz0dfp5Xq9Lf5tiN0jbksYpJKJHuFowYQ%2BkKe7EVxBb7RDnPcjXXt%2BlkpEMSOgwu2jT5kG4uXGvcd9H3v40CwRBVDRCGCstx3WPYk0A0CkYH6GSwstQwBJNYb8bBmfmeVmtJk1hwwSsS14whBZtTkewzeG8eLmf1Oeth1sOphCa4bDrQl9gAA5XtA5DZv%2Bxg5F%2FeDf9yVhU04lpgHr%2BrNITC7jt7JBjqkAZTetqfwpX9pnW2QLFzm%2FhC4sW1uYp7slptWrwoTUWPTndq3BV8uGymw0Bw%2F%2FtuhcRS2SgHBCZl2uqGDt5g6ZYj2fYTFGg%2FvUUuk9UBItW9nJfjfVXqFYboSu2FZdSCFiW5aCaKWO1IZfFq6eTF6Ukz7ne93gD%2BL6WcsIPO%2Be%2F3o9XAK6vnXI1beP2U8ACGx0jyhKFrQcfwe8Hy1G2SoazyEvwO3&X-Amz-Signature=354f39c626354711748838b7b65b2fcee513bf714a8b96bdea9eb08d570c0136&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQZE6OQR%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T030829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFLMqcdolNPryunA%2B9Npl0wfUsjyVWw2vIIEcFv3o7z4AiEAvjbBQ5DKwVu8VpUIKIFan3ouuyZGkuR26bYXC%2Ff3YJAqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNPZaYDjYxOcrPHcgCrcA9TNRnx2933yRt6siM1iPeIRgBRwosiiALzD8S3GOM8%2BQaZMjpqZEYZcyRdlV5aWQEBh%2Bnub8W5adfLytXg%2FxYQpyYGLbjJ9%2BJkvNMBdzLeq8mvy7Gff0E%2FpZ3il8aLYYjVlziV5uncC6V9cfCwnXvAroLoD3VP6ZbP0ZxQnQsya%2FkxUZBeNlKmYiwOYtnoFCSk2HI77VlVAsa%2FJRMvMlHiKnb5QkyVtqYCsHsotErUsIe1oUjXnz8PmbJ3RFkkavTr5g37PNvwmknnQROL2CVGWJBHFzOdAynjEajZJ7seWEtU0xDyZmk2C47zrbEjRzdiE%2BjQb4jUIumU5UGi8iAxImrpEIsHuqiMvQcTM7FBH4RZBnCr5iK5TVS8jwCysHFaw5WdZ%2Fad63PiU8csnvmP1wZhXykt7V5rM51mHz4jhNVbmqZLViLhjCuLbet98bt%2FKJYCiNqsc6l5sr2yjoo4%2F0LahhmzCwg4scXig33L4EhfIRyGmJK6Qc8mPY5m2rcMYDz55PSrYuOJgWwLpUoTxQiSqdtnZORNTLtdI4mvdP6AfiWwxLwZpaSpLH8rDwkEm8ikYJ00MYhi42oZr15evd7HrFFgu%2FcTfqp%2FoSorGcvGF9fYaSWFkK03RMLmO3skGOqUBP9CbKE7UySSh8onkdpd8UmZN%2F3b8olv8LfK66EGzwWlfHJ0OoadSSWGt4uP28k3YUWKuSeyMG92UwBEyX6E3R2%2Barm%2FdKSMym1VhYsAV2Os9sMNJDxtuB0Y7USMpihGgcnQWmEXu9xb9Bt3qWNvwfbSkVJ4QmeNExFoHd0pXL9aOG2ahLSZw0q5xlhyDcYFONZXokXvIgIN6wmU8bHiA3jn6GSvU&X-Amz-Signature=7090b8dfef51a2a6d6de14fdd315874b22d8d8904bfc51d85cf248eca5d74fff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

