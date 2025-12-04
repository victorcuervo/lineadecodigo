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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663B63XGNQ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T171522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGssbPpMRFY7YI%2F57WXzh0Pie3W9WQ7AzpzPawanbGdaAiEAs2pSq35yibp623LPMMfC0tibY52agjmIZXk%2B0n3sRMwq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDCKi%2FPMmJQoUBWGt4ircA1YOG8LUbyK2MBL0wTju86dANIBeOU3CMQeBd5V3vB6j%2BSpU6JHOuTnEUtXvAAttOZBa%2BE6UzL2%2BrdKUnCrh0moqPUYftGvVPqYkxkYXS2vvup2WE4%2BivHYa%2FrLoONjuWCsTys3sk8tDFk1JzvZevEDdATD10%2BklsheKyNMCnfr1jo5X40mMQKj1d17jWYcLza56hWqGE%2FfIrM%2FMcDHsgTWfPKm%2FBICI811h83QInyO9MFsVm8rKeztDovqNRClbVr0TRy%2FK6wxUxn%2BQuOEu4TV4nQl6fk1dFSp3qonF%2FsxTNNCnQ4Z87KQm3eheqgEx0V91M2ZAPNDcgV0W9CRbF76t7%2BRaLbuo0wiu3kxTWN4Ef6D%2BuIY6V7hUhKk1%2FAVz%2FCMVZCQbNZGejNqt1rL0SKjx5VWBuq2K4H%2BfH9v3Vj4heEitkeoQRAKIEDKN%2FPTJF%2FgjSFri%2FrCacaEMtvKszjqCb3Z8RTO0vcipNHgTffCulaLzMcwWiPhaH3uvi1lDlE1Dd8LM69Uld46PWT8XJMzyfapfIH5jrkICS1WyjehQ6FYnWO%2B%2BUGQY6btbkLn4VL0caMQK%2BLM5ZZxEHARk8bwrZ11wC1dcwk1NmfojylOImJrJkTxuIqoj6NJDMIj6xskGOqUBoCpAJSz1RV6hysoN0luC6bpyfu7HIk02IYr73ovVixUShugH%2FInbx8Vcy6FXCw4Ff7Vvw6krJp7HA%2BNXBRGMAM3%2FYBQ5MOVEAECI%2FsWK3pT1ZI0LBkbkpJ17AZ9SGryVuZB9gD1ggMuLEpOwQQzP2WVBdLm%2FCfJtPqlBtQfrG5%2FMMJ1pfMpQXj6EmbHK9eiEu1Bn1TqUeJCXKH0g4YiD8p%2Bqtng8&X-Amz-Signature=34f83aa312e50ed1296887f99c998c488aa9323322acb7118b04d70e085dd6c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNI7HG5P%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T171521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgNN%2BS1zGJ8c0vGDnEAMl3Dv4LlR6LMzWlNyzSgUPy6AIgdTthy0R5FryIxT4zLcX%2BpOtCOjwIqfEouFlX3x3f5K0q%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDAW4J3kbDclJMNYYUyrcAyzUZUqqa2B66cCz1kAf6QLKC8HF4qOa%2FLUy7vF9QIk1rXBy3%2B%2B42PWyP1W%2FHvZi0IilFijMSyqkuwQHND%2B5GMVOS0Ngvfaa1Y4cBWTeVug1ZI28NzXEQLXx1Zr7e7A0XZqWdVEgZyZ6Yxodq90dLEApIjy6dKt7fL7S3H2Vcly5RAYhNuj2tLZfPWZjQTHWKkAgKeQKUrBoXQcqJAS11yw9Zhopma4mNIoMjupCBZE8p%2BVZI9LVmtKO26oIJsNITz2bUX8WkBfnIvCFz9%2B0FJLTTbqNpZ2Jy48wFLGOKN6PocOEPHt5GHGrD9NXVtNaI0Rg7aqsA9ADb75tylPME%2BA09%2FYXeSOQA2nKiLKw1LivpVPFe5S7yTfJOD%2FZiVdURO4l8GLwRh9LI%2FNB2YohlpXKiAgoP3ig2oDZebF%2FSaeNktVv1TR5HOuX%2BAV9CPCFDo31HDWFELbUiubp6DOn7C78dTLyGAxx8pvbFuqa0IbOpVJADSE%2B51rfsTrjjPpFQTJYguZsDJmzudMcWxH1D%2FGO9hz%2FM%2Bx7%2F2iObg%2F0SSR4NJyzaWSGrGx%2BbpA3SbYknotL0F%2BYj5E%2FdUwy4jgENlsAU5OT5VZrHagnkfFvkLmG6dIYRtEmFJUsNqE5MLr5xskGOqUBZxJp1lGu6Aat3MLK8FfMLw0%2FX5kKm5FK88KSYK09CM2E6LvKUphv4XISm3sExh0CHnkHYhvd3z%2F%2FoUuGyNzSjFvLHhPwGHojGAwZn7FmmU9gCMhwUdCF1utKd%2BpGVTjDWbvou80NYBuFg910voYWiqn2y%2FkmgDhEvKPnW2JYymg37oKvV4IRoz4JXF2fVD8h1gDbgurVgEzSyzC7Vq13mxEseC8Z&X-Amz-Signature=622bc4131278eaf2481a64a3e15469992c1ab0debefc349ed2b51f7d17a1887f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

