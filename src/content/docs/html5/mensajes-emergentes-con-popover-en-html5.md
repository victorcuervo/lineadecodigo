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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UD2B7YLK%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T063511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAtBbEPtVcmCuz4ytbgdNuK9hFVU8AmgrnOqK%2BnobOmkAiEA6hLz%2FqHrLkeNLjDiDAmggUo2KYwtBqQ9w1K%2Bryqt%2Bo8qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK9Jgungn%2FOYpAFrlSrcA0VsrfS%2FNuwIfBFiVLpfPTukA2mqEyTpW3ZyYYZOW%2BR7IMnVC6J47GMx1PP9538cf86qbXgLbcet%2F9yHTWBhQesMnYgUxk1TDe%2BZ8ofKcm6BgvQmZOP4V%2BopzojXTYEEa8vfbDhK0iNcDLAkz2fBXd7ZRcmjZKoWd6YitI%2ByzkgO0948ckEnM%2FIUO44EAm12RT4uT%2BQ2zWSk8L%2FDcvu1LtjItsm%2FfrWimMXCuwQ6D2afjXrC3Ub%2Brx6OWATiqeB9DCvjpXnGCk5rWRXLjedG3wfbewldi6JsaIK1s%2FMJRYmWqPBfp%2FgofxpObS2Zrrvyg9BnWqT9e51xChuTGJCAHG%2FchNauWeZJIWMURv4aYKda4jx5KvFrOW2jZ9x3C2ImC%2F6mYCTvpXrZMCaKL7WEXQkGdfj2GjpE06I4oDRke3QSAmuWT2inVZ%2FWHiKFOQXbNApigh%2Bep%2BeWY3D0GDKr2TH2OzrXiFYE2y8VXWyGQ8rI60kx0mx98Hyhz10tEj18s3QMpea%2FHT9tiOnzjgNFSOck9LTg34xzsL0FVUpAIxe%2BXBDlovKrmazjsSKNKBThAPCkSPKWk50nZC%2FMmT%2BQyc9Oe1m9zfA%2BXxgx60c0P1qFiDmiJI3B5YJMYY93MI7l3skGOqUBxDIk7Xt77EXsvFHUFZy6QYgFEOZtydvvqIIi0sy9ZvJWqMwU7lR4WcEOjcQpyO%2F0d9Smc2IUwkwybMwCxvTn0Jo2Vy0Z5zl1Cofp2zgqn2ih3%2FyoWZsl4pVO6X5Nx1wWLB91e6Gp5zbns1rLmrAzwjrMeq9dFH2oHpiF4C%2BEbj20AvKv1Mz77Yc7Ukg2bgenbCDV2EYT2mxM6D%2BKggsFO7mWv1Uo&X-Amz-Signature=778ca17bac9a74383471f775e6efc2205f4a44a3bbc353b2cf5ed486108796f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YECC56UJ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T063508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFWqXJS029PILQzotEJjMwJDohFC8wvi7DtKtWAcuNWJAiEA8xjp9a%2BNP7RuK3n%2ByMkcFRhARgnVxM%2BwL2wf5w%2Fzh%2BkqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFmFh9XOvmpf6KzDFCrcA5K4cF7eBL6GDZwqa9uby6Cyv1F%2FIuwVwHcQ3s0V6ouWQsu7Or23EXjrNX%2Bo7KmmDpIDzqPHHutfMLOeA94LpuMakKfX9%2BPAK6oCsb0HMhob1we68%2FSj3wqjNMsxwyx7r9xinAyLMEnqwALJYCsyk1srMZTs57677GqM1F5MvGy%2BqR%2BeMNGWKrB4AKwL7p7r4b9hru52lHgqVguVRVhh76DtZnvLRc%2FcEVNXSJQTqSosafW8Ffkl1fFrG8O%2FpfprjR0oXGT2b6mJ5EBOyNTC%2BOQ3y%2FMnZwb%2B2TsVr1rMT6a%2FQTio9ci1E2EGEcoJ39dN1eikyQbS6tBvkPmT%2Bq59kRtSnuXt8SkOx3nwdFtbQwUvw4UlQ1PQnOO5jFWkV6IWcr7iU0JTBxyT9uvOn%2BvXwQ85r3JlWf5kw9iZXn%2FMSTtZ7bsjKMd2gPJIc0pxIDIiDEd0eBrktQ8UZqnaOI1gzU%2FcVJLtiOT2NfO%2Fpt%2BSN4ATM9x2wtKeSFi20nqF%2FOVgk5NjqrKjado8jYDRzI6T2beEwD7dzq%2FTC6OesamYi%2FF4GP0hdH5Zh0PIJ%2Ft3LbCQP3jqlgc7r31U9C6%2FYj0MG6459bOt0dWE1d1gWoI%2BGgWTW5Yldqrocvr6SrCyMJfl3skGOqUBAWYDG%2FnyHPnxGSZn074uxoNHPBxnUZxaeP4Yp7bM3TKB0kEpyJxswxKWA9IIOOwn%2BO73vU66w%2BHM8yVNEZ%2BHdRD6Ba9F0dDA6%2BW3jz5U67rR%2BgZgkyALPtaVe6UHdMNNz8xne4UYAbjitd2XNvMOz3X5B2r%2FTKSXM%2F58btpSfGsIw1jnS3TxAaYsB8aE5ujz7mPidf84b%2BgKN2WXYUeLA3%2Bv36Cn&X-Amz-Signature=482adb895fc24d62e53f53105703fb25b106b5fd374cf7239f916b0fbf4b285a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

