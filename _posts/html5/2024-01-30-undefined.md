---
layout: post
title: Mensajes emergentes con popover en HTML5
excerpt: "Uso del atributo popover para poder generar mensajes emergentes con popover en HTML5 en los que se pueda incluir cualquier contenido."
categories: HTML5
tags: [html5 popover]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UG32UYJR%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T005313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIBZH2hgSW8IKCl%2BLCmX5CW4K596CGDW1vK%2FgnahlakRzAiEAvunUn4B7r9595C8zvz0eOkQE75N6NyuvVH2GPSL%2FdJYq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDBKie3bsXSLfTC2vXircA8Z3STN2r9lfiVyKpw7ZQo8oiUkrGcVDA1zE18X3zlHJuWO6qOz27OCTISIubhjR7kG4atb%2FOtVSpk7%2Bji7jbAgFJ5YSZHZOYK7OyMGRWKCw%2BaM8FxuZ751bDXvYVKSpeyimNBbeN60uOBfEbHwCDP2Ql8kG5nCExFmorTd1WFwM0sC%2FWXHOVbtq0b8ELtAFQLI5ciPlmwyS0OAmo5GgB2PPVcBbuD43aUrT9SBqjkw2dNxo4uUOjgXGVFxFgqBEzZ3TFU%2Ffb0qATLSMz5aClc6c0%2F6xp%2B5aDt52DUZ%2BiEZOzV%2FXmNxpXSzKG%2BAs%2FG6%2BS3QExCaci0vNtJAsP1K2HCrMMOcGscVSZrRVg9L%2Bg5GICfvzZGSzdIqm9zj228f0eCKCjS68N6owcyVjXhix3DG%2FUc6a8Ci9GUWr7a6IcHZUJSoqJI6yI6QgoQMoiBOOCb8sDU6EuBKTFFWnNj1J15Duzpl9lZQ%2BROhPWy4ByjjB9lJo8ri0%2BdT9%2F0Ss0lUg1iBdzAK3FwIJmGpF35CT4qGGngKBv0AwQjj73HSrF5mz%2FabM06YV7wxFogEXk%2Bjd33wlnmDYaFKwOW3zXbvA1zpom0NhuMNBeExP2WeOSTV%2FZOwt2MV4teI%2FC2aIMJ%2F%2FvckGOqUBWTpZcQIfHx9eMy7ShES4ZNoDdLfP%2BoFG5aeqGCqAMY01f8GIWxE1nirNqGJfotNI86l28A94mm41XdFN6R3PAfXVNjFIXUw9dE%2BtJCIzIUZBfaHyBG2U4bH8xuwOLnxr89sCV8%2FuLjWWGRU0LyqONkFMl4N7BMwa2%2FgptI8vTbojDSJoZoyV3jX8K3a5p4oVAsSB5jV4xZXRMMMGDQ%2FxFnYm%2Fx2O&X-Amz-Signature=d758bde948edce650a2376cb2888a3e30751501f005ec4532468624a171ea4e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676AMWXVI%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T005313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQCWT14ducihFaoKwcO9%2BWWm9QUSwLwlbD3PAvnyaF2qOAIhALu8%2BCCcPXZ7s5f7zQkEPOnrArvP%2FTXWgQa5lbrhnVFuKv8DCCEQABoMNjM3NDIzMTgzODA1IgxCk4BABKs8jzQZ0asq3AOQylY3GUU7DKkYeAizuQDbKXnbagcG1my9O7GXsL1pnsgQH0PK1zjbKTLdPW83ujPRDfV%2B9R87EMX7G3msdXWqwCp1X69MUqvVaeUdGg5ZZt%2FqdlaEg4bctHdjnDWNufwlZ0GboxvQYfSkZOjB2EAqf378d5OyQFaWJWzzVpRdA%2BRSiGLBgXrE%2BTuRkARamaJ582VXIi4oEcPGMn49AMIRLtB7eNSRIfkRvE6ql2DVZHq33zqYYuGxcMrApX8VHN4CTeUlp4D8g%2BQIMpEYNYLDP4H3ZZfEHrQ3Ll4mk0DKKRCH8Q3cez1foJ%2FyticVcyzQCmhlsY8uHApxEQYQYB%2FOR3IzMbo%2BtbW8qRQeTN8Ce7bxx%2FL1Y8enlFAzQauSLwLU6ioJsVkBZSwANpS%2F%2BdBU6WfUWx0b4XRPDe8G%2BEv2ytRo%2BO7ZRPy%2FLCkYDDrwMJKTIpHh0LrJc%2Fs1ysAekCPU5JcE2Eq94Yf26kD9%2BA5v6ZEZVDYvpQITafh5Ofvg3YEVtndM%2FbUvOEnaF%2F4peoR6R%2FLb2lStDy5jH8fKdMem9sZpxWgEvHh5AVaOOm7V1CjFyTRyIouP8cxQKY9Nrue1RYWA49M%2FsKUUf9WD3JaoJFFzNSbUP4Q%2FUDEtBzDt%2Fr3JBjqkAeSY1A2TZaJWUrH4FYPPri8q5QDv%2BP8%2Fv3EmB2UsMIpOZO5jufeRPHg%2FiCofCANq4Q51Cscltg0KKOhma7UAiQGLomq1gtZxxMkuZ9jc9Lytd3YQi%2Byyr5x%2B9VAJioljReoJcamuP2K2pZ1TYRoynlz04D6wmzB%2Fux9KLGcj60Lq%2BtMkc%2FQJAc76ao0DgbMbrRqEq4WHfXrX0GrlZDnsNmsDzx2x&X-Amz-Signature=505c46fbb7c83a0974df64325726e52242f9114e2bff0653e7bc8308090a8de7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

