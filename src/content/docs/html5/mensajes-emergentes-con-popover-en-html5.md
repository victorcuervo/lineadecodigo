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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKIT4RRE%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T153405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFfjydO%2FfTtUSBODp%2FLAm2CZYcdT1AGvhJgON9DHnuGgIgBTkaOxyNXX61lqYrvBi4j4TFNBjDtcux%2ByBDGoW3Xwoq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDFprNEJknL83FdN%2FnyrcA%2Bl3owV8kDS9Euh7w8%2BJZp6py2sSKr8ANeTuvX1dAYYYeVj8AQO1EHYz2GQX2dSNtcGZYqNZqdYTFEo0gm5Y3KCCWwKpKafHKdfZjCL4PzHrGCzah5cbkenDACvkKQHGanfIbnIPmf03B1OQuUjzYgmIy4%2B9MtjSnA5LOi3z3k4l8ar8HL9EOMhZSDYtfBR%2FpQxS0swuEa664zvwvBb1Awte%2BaKI2OvJyp83%2FbRaI18AR7P6CAsncvB39FKcvzMSbTEXArhaBnT5g6ymQwFarRjt%2B%2BfMWEMw0wPQh9W1K%2BaEQ%2BKAHTcOrrQe8V2Xnw11EWEll9LO9zqZtayxiQUlpTj68DU%2FV75zQ972IFPqO2asxQlgTpH6nfd8R5IVWhQwR6%2FBCPv%2FoRtFbtzeUJeRjH4yX7nvULdEqfcgMD18IGfqclbyNeq5cOdvVltGNYzLXaV4LG1E3VDR2sSp7SG7TNHwJBsMMxWhMpX9FYr32ZQ0keKKW%2BChYIHVrBaUUMPGQdgCA0eoRj5oXUvqaVyDSMrVzz7jQtj64LJVo6L09X5G%2FszwVTwQCes1hNHuIKpXEid0kh%2B2O9fnMVuiWxj7U3BEo3T1TmBGfuvIlo296BzoGXU%2FhyAjU3nMI%2Bi0MM6m0MkGOqUBXsppU0VKT0W4Owm9wNLl81cOzIpcN4iYxeRZisKOEKCUNE96PkkFeL2z7OYzxuNYxRMP4LPFC6f2SHirvT76psxThoOxHd9xu%2FDT08RitkR01powXLUKjirt6w0CXSMCF8gjft7unC6zl3SFzTFmV8rdnKgaqSSIReIZQlZ7T8Dc2e2pZ0XBCm9eX087KpeURE4uaiTPeuJ%2Fw1lgBebf%2BgLF3yAV&X-Amz-Signature=0e9ba00c1ec4fef64fc6e41a1bfdcddc5760492f560db473714b3012120f86ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QI3EQ3F3%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T153404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGZVEjqu44TLeNctjTj2%2Bjr%2FRI2bG0487kx0NeoJt37eAiEArZ2kPoNkIrL2ppyBprv1ZFsAxLRJEiyMoBdshFDUu4kq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDPbEIqxNCNDTHwFlsSrcA3QURFU%2BFtwzbwBL03WN9qWKOJF9uKZUNvzhI8CAeYHPaekZZ6rfVmrQKDX0Gy9yu5GudcplrQapeQ7%2BdXuxyL%2B4A5XQ63kOpx7YQV2XdahCxLvOR0Mu0baTbqmtQ9PUEPMuzfsxoqo09G29J8JIAh9%2B3v7qt1P2xuOgNuX3PN4Ww4arvoQZGFbE%2FbffhRp55lv4QAbvf8vamhXnWi03UYf2CKWwXRNLBM6UQsCDUesqcsD5eenOdgr3zitoOu%2BS1RKwxvgQugMFJpYT1oB2Bla1fyy1O8ss2Gx7LmIjKrCk%2Fq8SZjJefZFM4yCJn6RsjhDCEEXikM81FOccZT6qDwCdC%2B%2BzfMoNkskCPxhKflrYYQ12OI8Pg13RWE8pts5nfKNNJV772HOyPp4V2F%2BlbvGOo8H5MmvNLabpuKZ9cFyYgP17i8YG4%2Bg6L6myk1puZkhn5Ha2SXHIH4U%2Fxfnbo2b1l1KlHeDsOTsOvtxMMlHmprmtff4itEzjgXtpZXnU4be5LoeI69pM6dQtylnYa3SCxGGI5C15%2FZ2wpk7twAQqzJ9Ll7ZiueonzYZrM1LcT%2BRGS8Tz4Q0cJeZUwLu8C%2FVbBQjVjyNjXuJKOGOynThFCqN6hIRlM2Zqp9a%2FMMWm0MkGOqUB42qQVXdOzacepeZlrHrymZRG8hXROUyAnpVzGKAFobSP1ns9go%2BEIqZYDtRW6Hp4Zd2QBJyJ8A6eHnmxq1R4yfJHaijLoc9EwbJcYxEa4WlKB%2FUFWqsV6Iafek4DUcWInrOXIYMt9MIU%2B9R2dqYmQHzD2InPMZ5Qs%2F%2Bq1qSvvh32t1Hox6QFKrsl%2B9rvE8veK8eP1NpYUQhx9%2BCRNBXZTQF6zsl%2B&X-Amz-Signature=a1d29afd039cc31af24e3f24fef6d97619342fb600bb90b38567168635eb2a42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

