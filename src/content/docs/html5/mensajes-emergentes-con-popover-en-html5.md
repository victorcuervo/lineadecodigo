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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDO4FSY6%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T070428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBffJCwzqnnB5LNl5hy2kUxQvUeWSOIvUUw2Km%2Fnhnq7AiEAjzVq8ZJNqs6odbLPOkl1%2F7fhmSUYav6jZyWKtABOAisqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH5qQQSegCHG7Dm2aircAxSAafPzmJ%2BjKzg%2FVozKBFL%2FLNutxdAHscT7L6%2BFkrnE3CNldUqku7o3z6b4pLkk6hzhWSLCrybm4MaErP1BCXUKxM2iagHV%2BNqkKGJZhTmGpmSnsU5lo4CoVf09x0KqgmIkrzyuHzi1yD0aILlMHDLkX8o8GReXo3z5mWmRCXBloyrinvum0B%2BdYxxRHpgAKw90OAYqmjj2H86UERaRNQdend8SWM3DP0kv72s4RFIHkGUhthI%2FdSzOUDfhyfsP3el54sLLURf3vLE4GSAkA5c0ztG2wdAf3SkHJ6xOonrNHSNrB6JwR3nONkaEhO1hYejH9ebOWvu%2F2gy%2Fh%2Bkh1f74msYiQioWs958S3u%2ByPRYs4JJT7TdpKzMNKqCRgER1KwAmU6ycK9ix7GZIKpXv5qP5ypJuQUL3VNstzqhCW9JyIZn%2FUbPP9y8kbj4u3GP59VEklD6Apz1vIRdyLJphlswZ3ej5f9jnT3m2ywVPcjay3pF5nM0vnvxr9pzed9p1ykwnb33yUs4GNXkGqkMZMpGSJxtHMalfhJHDXpXpLmwGDjW0eTvnql4Z%2FG1oecnWys5gmahy%2FLUQQH4wtuNh7flxCx0HaGXpDtcplozPktXcsfpo5o%2BrwzhDlG7MOui1MkGOqUBThHDtBUHJedVmZzAWMTJboSMrLsgow%2FqDcRoUr2J%2Bql8tkLDrYAatKaGkBN3pDAv8tA9KB5SoqFxxCsTSef5yTMvrzWgG4l%2BrPdPabRMGHt5Mc74P1JYxXJXU1RredDvSmrlacmp8KCTA1t%2F1sHeob3jW86XbIfdTUXi%2FB4Hd3ZYxo4nDF7u1gYUYY5w6kqaqyjHhUy4NPc4xoTa%2F89YBBbO6kSD&X-Amz-Signature=cc356601fde1943e1d547b0448f3a043999383e3e9219c78c5da0b4026d613a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QJPOQDU%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T070428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGCI%2Fvw5DvNEj60Gw2h3qIzjyuRn9hRNiIj9F48UVHH1AiAEQkaf1QVqunZC4ls8WIOk3uO4O3M7RNQAeiaC%2BQ%2FhmCqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAXb3foUHlJgnw9SrKtwDDfLe7KX3ag8I4DyBITS%2BLoKoOvF0gnbZTrEjaG92JkNU2mPkXSXcPTfnrUKSuS32nvI6Ne%2BrvkJnnfo3WNCXz86Eg87qbUt38kabdVvqlgQYPyRpQ7O4xzFOc3ZAAyXssRxaYEBptFZMJrZAxrC62Ic%2Fxm3ZuU84dDrorO7vF3BzI9K5%2Bum1NEbq9SAdcKRMGYz0ekxYtRENhcKirN0bFTqP2hRhbKpHjPBC%2Bmy02AZQ%2FLZ5mVnR87Tw7BfE4PoeTfMKGpiS%2FrYKFAGQINR4EWRK%2B%2F9fdV43JuGBzfPmZ35spWSKwrujMDd4Qzap9H16lW%2FIP5nn3cQ7kq%2BgOEZPE0QhhSJsXblYK6X5Nr7wbqAR3boGSMRM6q9To0AIXJ0y7Y8a9wCUEAZQLk7Jwl2je4H6W0D4kzy5r7KjIN8jSoWKN64u%2B4M9h74609bij1Bd26vR9EQUibHw35moCl%2BkdUMWGZjuk3qap7SCUNF1vivyS1juJwVNH925uCfPyCEqufYM6uPWXFgp4qH7mHLQuNvNlwKOonu%2FuduQzmaA5daWiRZAGkOJ7EK3XKZbske%2Fm84TpGLB0Q1SKTYWSk5gYA2q7ot3fynwB%2FSfuT5Avysbo47avTx2%2FW%2Bd5UAw16DUyQY6pgHYCaq1yTMMG9wfqyV7DHi3vkfYM%2FF8VaFGONjUT0R8IUO0KUFZyEj6eM42glBohaH3ncXvqlyEyuSl2Cq18etaYRyezT1VKblvvttXnyXssxasWptckChySmWVi%2FE4d0QnlfrkPDPPuCmqtaxncHcuWdA%2FFwicLSv7X95GHe9PIEnuowubyiOpMyrvKQaU6TnWozsVZQwyf4V3UdK7OZCILEUsSZRF&X-Amz-Signature=7a428efd2ad18a28dcb129535efce773cc0dbd7c1b994c5fd8efeddb5c0e3e56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

