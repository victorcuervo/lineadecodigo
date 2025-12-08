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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3VT5IQM%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T021129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDYsmUHVnGOKQuWbLKI%2FTm%2FvAxIMp7gIFqBpelXbXlA9gIgAWFsNMaQQchNqRB5yjoR7Qhw3MCBsTQCbFRDhncroHgqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLU8%2FETS%2BKWQ8o4LZSrcA2paSroVvtbJKy60RStYccBm0WcPk4Fujrfu49gsi1m5nGTB8i1rYBxl8ilz1JfHx%2FASbB6FtE50wKof68JqUO1UN9n%2FsAeO9tlfV8Lhi0Sn5Iji2Td4qjMNp%2FfLNUYI8TrmJml5TTWw5%2BdBVqp1c9WGZ3qRFIyImGMnZqBC1D%2FUSideGFIA4Ujn9zhQrgUrZBThwmnO8euvGRWiYW%2FD3P2qR1B61VELm4mo0x8a0XvCqks67AQLM9GQLMsgvZshaDBME3GQ46RC3835mB31oSPSqq1BqziIALOcO4zi4qpgzNn820x%2BUzTQkIccYdt7gZim1s6qBnm9wZ9BViIBtL92O6Tfs8%2BJSSyYdpfmmMNKOUoQ5%2FaZCncssIa1ii8oLN%2BBbDCQe%2BfMr8DBbqID2ByoHW4kcD%2FEG3Aiy7ZEeK13Ky%2B%2BPKXWm0FZp%2Bh1dvs6zzSK2eRSZkakuBjxLYXZJtoYiTS2FTvJD4MWz56AaXHMRHvhR9VE0ovunb2GWN5jNcqIbPUggKwu9iYXoT3XS1eka3EVwaMvTQ45rRM1qWpN1eVyDt1ifZNVK3KnDvOlcK1%2FGoYYmXk8v7VCqx7IjVCu8e7OCRQSkUEN5AYS3Sh6lJ1anG1BoadsVtm7MMDR2MkGOqUBWdK%2BBZ080GqZBZ7LK6g%2BvotbgR%2FjmslTEw0%2BfhYqtqvrkO8wbZiVSVbizKg%2BLNf%2FKvzf8CKcbJMIUVyuRWkFSGjCklkwR2fPKX0y2DPIsGW3LFoaZmi0MSAdT6frR4ou9jSZKxMv2usklKsZ%2BhJu9AdlNqoIsh3GcqWhXjHE6pVygQmXq7L3OHdJSMvSK3mdTdZLDjUEbLK1gJFE%2FE6HwwV3pvXY&X-Amz-Signature=0d4bb6d979b1893174c5b3cc9ecf8e2c0f76f56a7f1e694c3e24143a06ef207e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AZL4MPE%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T021128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICD8pNBqbdkCCMiU6CVRFNjxXrH%2Fq5LJRnAdLZS0iLwwAiAPzadOxVEUOip%2FhZxP4H%2F3xe7rtmJCUEpL1CnTT6VI0yqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNx9U7ZsEnyKW3YiSKtwDtnLiiWmM2JNuV44bo9DkbKOHHOG%2BRHFaQA0mHD042WvGf10B55%2FDZoZqjvTkuu%2FKjb4DP4ppWhnz5ZlpoIHDaBFf1lpeik2sdTJaw7xmva64X70qRemg4wIAaLNGVNwJI3xcsK%2F2T19RI4ue7cbJKs1yqyTfLFcJS3f7tnkCUNlUxYKVPmPV7t41jllJhnkYcMiZ3Fpm%2FOprwrgVVZED1ajPT3%2F1s9rdnar7wVscJiGeCsveDx0d5hvjwVc2OAestlJNczXRXqNXH2f0s3VHJrjEg15paxVNaG5tZVETk%2F3gwknpgow0veEdVWFHM4MshX84w8UzufydAd0qokUWMmRrC5opEQmOBMZnROaab63tzPcpDsEG5Vl6FKWlllcWQPouy650jsjh4ydjJov6h7NX%2BzABtu0omEzjItHs%2BhgsiX3RJ1LTRCRVm4uFsbjy9mT%2F1WyVAyDoHVdHiaj7TdqZw64dKwZW7aTTi3JN%2FQ6QsCAf5GuR0h0T4%2BqjtlLEHwSYEps%2F%2BfCLL4ywYxpd6py3lgka2PxZERGaZ8qbYnXc7litNqHgBCFFcf8lp%2F5dFldylhwwR3ZFGV2dILwFDQg7ehL2FAq%2FO3rPqvvKS2D9r7D2fsj%2FrOMBwAUwt9HYyQY6pgFHPR7h11yGQ3jjFAnl%2FDSEUC6Mem4TQicFxNOEH3tei5ZE8LU2Sc0ZU%2Bfp7PIEHs59%2BaSCH9DisGNJ6km5hH955%2FX62JBalmx%2B6%2BkWKudjtcE6qGqD7J6xjWkgDr5EShH8Y9I8kC1JV8OsVsVXS4cNPjyE9kM0og94jAeTA2MsTSFSVYwLdpmxI33ttcFCmZQQ748e0qzUGAlX5HCpGB1YZwjKgTvo&X-Amz-Signature=39aa13d8871c8c17a520958045b988f701a92e5693fd4d073ff437f405f19942&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

