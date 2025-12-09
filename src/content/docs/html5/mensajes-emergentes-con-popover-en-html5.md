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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGQBZEHV%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T033133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEr%2FgoOe91Yy03hUmWkTMT1zHY%2BINhOD48Z%2BnhTPsjPQIgEAZBO2HSURLNHg3SXqqQB6lqcV4ani0GIBYS3Vi6E7wqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDLVqdCISu9IrI20oCrcA05jw%2FI%2FxTXq83vkqYeWtRyJnD03UKooAqdK9yQDDo%2BkL5j80Zb4d9W7U8A0ACv%2B3oaIlQzIMAdodDFK19%2F5F1XD%2BsbaGC0KIcm3uy7l8Yn3zWfaTJ5I%2FI8Z%2BA4LDUeV1EhdxxWStxAtYg3E7OlsWZPl%2FrGfM17ZtJ0F8KnNRovjzXzvdJtnIFYYMZXqEBrECfPfXUJRoAYOqE9dnrgKobD1e6EmtnusdV3CI4z4flRUIpupoPAlNcd%2BwB6rxtdMkn3XwqBtCVBJxZa6cfNqJxnIi7c4zVuxUeWy0fd5zImJF83daiSBEFnWwjUEjhvMex0D5Ik%2F8%2FgHONW9qAdEfnJ%2BAyF0N%2Fju6VuBXmaNmax72sin5WEd1sFPipltPirpo208sFdypG%2B6Cj9YcbnrOOWFCaNS7xKx90SG7%2FybXGRmIbYyXgesmUeJMR3N%2BWVRqzq6Fr1fe5FOkCx6KheqEuDzqq98a2bP8NaXY%2Bm1lJ0Qve9wsae%2FmHKRjxwHZyqp8abdpV9Er8YYyJO5BMXvwHr7JB22FovQR%2BzsgW8%2BTVvur0s89jdrn8ITt%2Ft73k1GEH0HcN4BCdMClTBOpD6Ldg0UpvQ%2Fp7BsO6VpgZtXG9e7lZkv9IxxSpiZdapaMKuu3skGOqUBNy5ovTOAwDmQTpPHDe4rnkLhRN%2BD2kvnkG5uzuhbGNiwoBNImbMCrifb2JOT4%2BLbtuLKuF%2B9EOHI1vN2K7WZ7r65DI5sTAo0%2BDFCeeUIH3t1GqFkBCMgZoKMsQmzvT7q%2FqO57bJIgab0vqSZEiQVqRsZQBGdzXH%2BHnMucGsjq7fCEg%2FCDAK7ZX2tf2l%2F2FxdXyr4bzJa0v2%2B%2FIAd%2FdTFnHw8iGSR&X-Amz-Signature=c1288a7e4965cb440601d5b0e961c0289b64a016ef7abfbf375ea708bdcdb749&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMDK6Q6A%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T033132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEJEde6q0kYKShIH%2Bg0bWEDtTlz6v%2FpjywY%2Btxp6olKlAiEAyaffQVkHgwLUnjWdc7zHy70EQrid7%2BrgKkFcYP2NtpAqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLGchooTrn3dd%2FoRYSrcAwHxhjtjQfb3Wss6KPRMnLJEkvEFOKsvxyjHRj9s7pRtHzVVedpmaG5iXsbHm%2BA3VExNrrqCJwLZouiL%2Bg2yuJO8A3nxyACCiOaqesqjdLZCF4MNOeUPzSG%2BKdWGIFQwlV1kNOSKn5%2BoPoOlcBdVaOuuuaW89huRXt%2F2Q04H8lj%2Fy1KKr2gmqSbFfRPA9tmIWh9V5qHo0iC7ZC%2BTN08wihVm7VP2es2K7pHnDJbz%2FqDQCGTbt590klGIwozf6dh4Bh3a3PvLgWvgGrrODZHlhDl%2BHEvVBdC2Cpij2DFBqLTcmqnQoSGoTCwRJHU3sRZeIcQVayvdE1bztCK%2Bo9Vojg4PbpHCgGlCWRvpW10afv1BJErdKsnmIzjCCsIsL0drPQDdAOnh5hAEY%2B0K05fGuM%2BbNDK2%2FpA7VXmhqHLjRRuny3ra5kOW%2Fmh%2BFYXbuDoX3SQt8DAXYBDeZz%2F0BZT5CLWUwLxa1BJouXGJHasH3wa1dOlLeigKWdMgJzWlIv9IwVFeL5Tkf0ECncnuTEeW9YgDhRk3pCrfqjyIs4s5uKZpnShgo9a%2FsbdZFr%2BlKxDKT5Sbe3xAA8epz0wz5sfGQOLT09dDn%2BaecCLkfTvF0L9pNiiL4z9POgJmNVdCMIau3skGOqUBGmX1yJipkQIZLhwDV8Q%2BDQxMlySj7YxqfQEED%2Bz%2FOxicWRti0dSYJ7Y%2FIMS4sBkp8kI%2BgZClPS3nUhs2a2FvY4oEDdxrMRvUdtUulw2LrJf3Yw0wv2fM3QuHfINVmgYD6BbzTQw3xlNygu%2BplOf0rYHUxW9F%2BaGhyzlgHo6QNslRDuqlRhAGlZEF4dJkPflevJXIrEOH%2F3bdYs0CjB8vvU3a9FDM&X-Amz-Signature=7242bc1e6af6c9071854fc370602ba3fa850e06a7e4aa3be67fd96cbf3f8b939&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

