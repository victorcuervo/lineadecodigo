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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7YTYPGH%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T173720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwivCJfn%2BEbbSARKpA6QA0uLjxZS6dOBbUalS%2Bfk0EVwIgOhbIVtKZs3vM0uF%2BYQpxEVBEfCybuzOGNPfqPVgqUq4qiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIXdRcql%2F5Sb%2Fq2sgircA0KhmTXddydExq7nWdDQZjvrdLf%2FqjoWXPdEFxTvrrm%2FD6cZYj9pS8NJQ2NEpjZ6BE%2FXAHhCCy7D%2FAvKv0TJIZ4R2WTjAOI1pWBAIbfDYC5fIE1RT6u5DOYtZTz%2FFIpiOOyiElPz4lfw2AqG9Dsn%2B%2B3jlS4JpVVxZ%2B3vKNpBmvKJuMsuo24dLqzteg2eGxQDOkw%2FM1uxeWmO0cRgt0mze26%2FBPny19%2BgCt6Vyk3R4fXCC%2BjQaTkL%2Be3iroNlOeg%2BBVAOR01f7gKfmpiPIXZnTFuDhVt3Cben5It9sw%2FsVurPqha1ahrYKrcL%2FpD2NdUU3YorWZey0sVvAdml2bcA8kgmDBs%2Fob81v2e1lraNziP4Hs5%2BohuQOGm3W1YnySF%2BBkQXXOGDytwLnRv0oet3kMbBnJsIfHQ%2BHjRXI%2BnozOja9f5qJDVACivsD2Q5ruSXCsyzTe6hbIkO89HSAny4%2BLa09xPxAgQEqoAfC7CS%2FGpar84AUnOw2oSBK0q45VcKZNNPfgJyTi39ZeULDj%2F5zceEzu5P%2BQtdX0PtSHyjzhAjDfDDg8YcJ3FnVfR9gc2I9FimN8JKEhZa6LM%2BVgl%2Bbz0Fh7OHeFt8I8dJqvyYWJYPc6aHs7yrO7szQ5I4MPmG3MkGOqUB7LWaMBLGdxWHM6DQvC%2Bn26BAOmtoiG%2BlOSbrqbJR9GJh2EtFRVfBX4xBaGBy%2B3l5Wi2gdD7slCcI3vLFWvIztsM%2FdpN%2BeOboar3eKY5BNOb%2FhJjJ379N7WpmqDAkyFgnTm0IwnCCcKiJCE%2Bl6oiOgpdqlaEM1B2JdsPjVZvcdsBmT35FlclNvrZS622Wk0PGiBK2HF%2F99UsobmdrWPlixIVkY%2Bbf&X-Amz-Signature=3c996231b31f8127cd312d110e1fd4fafe6ba40eae0e3dc8cfaeb1ba436649ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGRBQEPZ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T173720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDshfy9%2FCkjpeVHsWaaNeGgSiiOpP4EJg2v5Grsac%2BYOgIgBGQQ9swV3i6%2FE9yqaj%2B51SePclI4EiQDoURigxE9bM4qiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPj1EP77Q3Jtk6sULSrcA5zV5sgAuPobCQfytgZNOa6aChDjD%2F06QHE2AHsdsGrigC1pYuJOFpqv6UXxAAQJgY7VQ9O8xt7RBKdjtPcgiOLPhSYlpCn2B6%2BbRzwqDY8fyCFoljMDTrMi41TqXWka1yDTDnmvxctGtgN5WOAD9mjZyZ22R3JoQvsDM3tyiG1PsiGIw9kxj%2BENFug9878a0hWDDiDbOlPgClnpc75IKnBmXNmH7RybDPvXCJCczdBBSBgVcg%2BydRfdl7%2BkVn%2F7IQ4Ak4hexLCr3j5aET5iLNYdfFJ5mHCPjl%2BQ7C4ItBRcehPLdR4HvazxvU1wqaTglGiBTXGkFldewCk55Svo%2B3Ek5Ss8edr6AJJG5rafeAVWylYIiSxuPEFy7AvWRhUIMjQvp75XiB7FT1b7AhIbqEJgxU%2FH9qm7igPEchs88GW2f%2BTu0yhhEtnts2Gbduo3E5dBoFzbm7XLsmLz7Ey6PGmTj8dRhE5bgjKI0kq90yXM3yk1RHWu131%2FJwZbuOmZxS2Qs8d%2F%2FtsA0Rgkjak1eDRuJUeIHITD6Bn2dv445Cesvx5%2BxgCTPIz0XRnO4Zr26tyc9U6qozTJVOq%2BHOv4JO2GoI7dMZbwHFnmIbH7gJSmqdx6ije%2B4Yry9D0lMMCH3MkGOqUBgtqckM3kipS09pRV%2BT%2BxgUlX02P%2FQ%2B6a4GnrvM%2BJvw4Uu4SDET%2FQUyTIe64aPYJTdSo27Qz%2FO8RFoEIxx%2FNYaS1c8%2FuFnW4yl0dEhXIwD3BmbrBEZ4Vps621TvXX0DBOpdT6EWuSbTuKa%2BQaUsHDIL4WcZrdluh6nUPdB%2BoD%2BbbcL07wv7dy%2FNI6%2BbWE8mmy9fNvcccH%2FOOVmZHOb4ZcfpeTTopy&X-Amz-Signature=f312a3009d326261405aa00f0246316948223906dd8b27ab0392527e0acd0e3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

