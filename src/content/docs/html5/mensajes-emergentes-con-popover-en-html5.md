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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7SPYMVC%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T045912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDr24ZjwRq13pIDinJUcuxbbawhRxOs%2BcK26%2BK5UGoEdgIgaIJUju8p8926Enph6H1vkt7LtKzUzvAmVwDjJmgH2Ykq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDHcliYFbSp%2FEiXRjeyrcAz%2BB7RPLnGfQlJRnYC%2FasQCScCMWfOWxNhYLmysjwyKKV34Y83TLtnsXSAag5jlLrQ9k0tMh5VVoyYOHEbr3X373px%2BphHWqhap8Va0TCYSp0GlWZB31gEmO%2B%2Flcpca7226RvGZH0s%2FFIhGix68wX07qfKswugYaQgF5XlyT%2BaMpBy2sT7wk%2BXAup5LZURyNGJEw%2BPyk%2BS3IY5eQ%2FBgwy35JQc12xW%2BMbHMlVUwGbTB7ZuCIlnDwF3z2MLZjDhqu%2FPVBL8LRLLj0iO9psIBLe3y96FltJDZzvYXHXWb2mIJ%2BS9%2BxK6T1i%2B%2BzuWfYJBy6B%2FJdbPF91FPQ2aXXMGVZUFnIKKFVSQi4M%2FTIbACMgZ5tJh8BkgFdcAyV8IGCvBrLnEujvD41Wx99Un95aHLdwfAT7chztPSaH1HRcoA%2Fe%2FuTdKKKN6BiwBAOtyfeiQ8%2BDvK5KP%2FhupDRDmBWP9EfEHJWioxRqeS0UnoMVxnXaYGttuafq%2FgTDAlJB98Xg8xRifacxG%2F0sORIWWFQOSBKLNs4yHjs7E%2FwoiDs9cvVG0GE3pqNU%2B88uP1FKVzVfaaUNaHV2RxjVtbw5fyV4UA440RRPcK068imSVaf7%2FFwyFaULe8p8M1j%2B8KAyABfMP%2BryckGOqUB0bImPYCUE8mCYfGBELk%2BQK2dg0%2B%2BvJvskkHmcRc4Ohq65qfW9yHhj8FVXuTsWDHdf5fc4Rb70EB%2FT0ijc3fhQMYeUTGh8kIzlZMcQcnlT8CrW%2Bq2MJkISS8JXbBzjtcV6%2FIx36lMX74ldCeuTbxr%2F5BLMnZYobR5EaxibGaF1ojfg6NAU3VFhx05aS3q13Q4NSxLFwX2nWyA%2B0x5y9aZnK0TQM6w&X-Amz-Signature=9861e30af765c72d72ba6bb095bb82e5fb0e498b231dc9b8a6425e415fa5c3be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQVWV6M4%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T045911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC8JZct8bsljjkzbls8FmbQJM7%2Bik0fVnS8IVvW8D32EQIgRN4jheKP1uU%2FeS2TD16V06bLlJt%2BqfJHbZ38ioUgizIq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDHRGYTd7pC1Iko4ayircA2%2FLZvtY5xemMnkzw2EW740dtNrhIyRlVCkBWQJ09pzyXu0nEkHNpDe9NCvtAakyhI9AC1gYH8uFSyO1ydYJfAd34ko8VrcMfnPTcas60sCOuZoRm12HT0JeSjenNG0WCBIHbKQblmj6yxqPcrHkZt8i0cmUrgc9wKqUD4NaNFMM0WAplaPr24vHaH%2BRJ6%2FfxJeaa9xbUlm4%2F%2B6WHbjOzYvH5bxfeNIGAzDfXaZ2zdSptVvwV0yG1LFZt17%2BFx3za4KmRCd7LmBDBqxn4cb1SQkCM6waTe52fIP8oBy3VZZa7QQFvSXAWRIH1oEA6Cy7wt%2BPTe8v6%2F85fTJVaZR4FMDxoAChwHLb1lVJknGMz%2FG%2BqJaV3IkG9%2BW8z1FuWIwYJjWuU0%2FKRQeTF96BW%2Bh4RTsofaH53elv5bwobTLCAfh%2FGSp2ygNYxQdVH6i4CEjXx0oWydTJtlriJXC37Kpzmbns21IXVo5dhfi4mWG4wYZzy%2BrnEbNAaMrlzC9GIup1mnge8%2Fl%2FWa8KtgNpVpWUAEBgOeiNd8fADkQCZEZDgtj26Z%2FvTjJWyLz3j3JDpTir2FcGw1FSRPfNvO41jn0LHOLH8j7lwTiETDXq8u46AQTCzaqdOYB62UER3Ez8MJWryckGOqUBrk0KdfQQUIC2AiKRnxLWjcRxjEA6JTOWyVgL68S6pwgV5AGc%2BX6%2BGwy1U%2BkdWAbtbP4NrjV8qkDwZ5im00Gc2nL43DHs53qTeeW5KxLYHSMXciOgKeCjDLMo%2BiTIbun3nQhGJkHkw%2BS%2FhAk3cv953jMCFZjJZe%2F6LMCNAe5FEq9gZ9JMPjlM2CCCwehsybjbKLt88PnXOkKxqdFgUAJwgVaRbfGr&X-Amz-Signature=f2894a3f6b8aea605abbb865a30bd6df2d165587eb58367a57b84d58f234d877&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

