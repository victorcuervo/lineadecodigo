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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SV3CHD3A%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T021417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICX2COCxCom8TaEJBsFWD9ce1JyAn1IC%2F6b63nuj5yIBAiAi2pEEHnjHMCJ5gQ5tVLOEazHDA%2BUnIAm3P8U1yDHepiqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1zMPY2lFu15%2B4o%2F6KtwD4kCMlmYb4mrl%2FZlr1ad2ZiR4LGQLcDRKa4KXemWHOtMjuh9cBF8kYJyDvLVqIFUWhDSfmXvPaO6pYj6Tn9dgaPJqvTCmCvNQwSHMVwOpWg6GsUkvXxYfzhdzZSJ5Mz0aVsZIPy4DK3LcceVvcPcWABSqhvfNllU7bJeLGxUlcZJKj21JMV6D3mW%2Fg4JcjKNqE%2B0pcp4FjvLE7kPrI5M0kZZVFVVd6Eikg5K8d25oC7w8pyuIAjmTigMCfaQAEhopqmDWs5EOJKS7E2MqjQQ9m%2FoXm%2BvNQdq%2F4dOfTFkG3zvQx%2BClU0dI9YmaGu0pfwE7NYzNgoblm0%2BMlf39QxyAYFlMlCUxhl0%2B371xRAFYwTHq1jwKQy%2FXDXR9jCDlzB%2BlkI%2BIAGQwyNjhiLgJcO9L2JOe6c6gWaTUohhzX7nw8ZpqGxLRo7uqFSE5At8VC22xlp%2FELzb44nkhE4YXK0Ny6CnQvPg5BLWT2l28Hm%2Fe4LShAKz1Wgu4MS5C%2BbQOdCHC89qOnn7DuDwFpLO%2FAHEkDtnbpHRGQH0Hbh7%2BM5cqUFU%2BUc6wN37pdLUDzsGvRykElKCtqawCh2VRleXtAbRTayyheBitGB5Y2N87PLrBjCqSQpvEg96rgzI8T98w7tDYyQY6pgGFB2MC3FtKt7i03%2BJ0BYVRd%2F%2BPA4neQE21gGAseRAJpm03TGLT8XVXQaNpaWit6wDEvrZIUSj4RUuufnpK5A%2BoeQcrfBvYjX2G6P%2FgbqqGuwCVDEl2ZnjSmwe65q7wmmS%2F3ILZZnMcLoN0KCf5%2Be%2Bm%2B%2BX3LUIgT8lUt5XggHNu8%2BNTISFkiI7%2FDehZ0oy4e9sE5LHpYgrcRAVgyEZfJLma%2BeKbVEgR&X-Amz-Signature=4089d58312b127ecbe79108a01662834318544b8332ee3a9a5477063341e1c03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3NRWOHE%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T021417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAYjBWRTQNRKSd5Kqm9EDCV5ZftIwp8XT2a3zxyJiDTCAiEAn15cd42BzFT0z3dDC7fZDX5UZ9uriD5YPfwsTWvu4l8qiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGuZLE8XgIo3fwa15SrcAycMhNxB7E5kPPZYRlsUeTxtU5uw1wDkqn7JzBHOmMHvtjERk8CnUpjOLMCvJ28uRVknkAI4Fh6wB47Q1mIXtjiFCL3WLsrcUNYu7RGyLx%2F6xzdblo7ZgutT1yb%2FXDL2cAYww4wG0J4IDMsn2kwW3N%2FFAaFC8QiKU5XV6yEJv6Jc6me7XQfucydfU0%2Fifm3JlT%2BHT%2BzxfRfpXYfhgLWjsd66TRjWsxKPF9RQnzTYcz5ygG6crc9ExJDnsdw9jtkdG0ZF6hGJwnoRmCzQ1zsUINGnCmHjK6fsGBXZWH%2FZPEfi6ZIWUcS6uxKicJlrDv9dXM6SpwLbHORs%2BLcfaLU45y9MpsDcJwsZzvcHdHBHK927GTMsTd5KdAAHB5gm3bzUzO89wVYaf2ZiROvkXCSB7ED6SMoYp8He0I3H0UrZYo8ISkHxebJDxsRdxEsTRoejHlNQ1SpxYweYnB36AHtauoswXrt3eUwhXG%2BEoz5Wf7fHt0VblCxNJC89zOuk5ZIq%2BYmZ1aClpLFw%2BphEymwuFpf9KVdwvtb%2BDX1bWo7NjQ3syAA2q8bal70PB5ND85mfDmSK0ZGlqBciYnn7ElU2HBGjKzUmOca6RISiy%2FQui3OYUlZrIinImYfaBzwtMKrR2MkGOqUBjxjm59huqu9czFk91au%2BycsUFL4JtLT59YPSO78No6i4DgxaAGorKPWH0dtKyQCr5jTWqDYPUdtQWuBbIfU%2BTynfTd6SpM0t0dxqHLj2qvby%2BjwAmSVNGPgza2NiS%2BG7%2FO4ckZxPjbjxZIrFuwTCpWA6Sc0PH5tb3D7v9A5dM6Eo4GaQkQHfNJpJTjXqPQvK9OBfzF6cj%2Fyi3jZHTQFYH3JJHwPu&X-Amz-Signature=30cf796bfb4cb959cd0069ffe2fa965028b5bc5abec6a4c1c4a045083c126477&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

