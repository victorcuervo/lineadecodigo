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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632FTC5Z4%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T072447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJGMEQCIDg%2F5nGDJrixnRxe5RRLh56DkVOm6YrVg7aUNo0HKRGpAiBIPixbtjTbLOFXy5kFR35f0AOwjggFFDWDTV06HxCPayr%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIM9bP3tQfYNVKqgHt6KtwDubxF16SFu7a657ygZi3a7kzbyV2bE7uO3rD4TI6XBRWdAFbRz0B7nzcN4rCGbdobc49nhwxYP%2FDC70pbeEVqawujnn9TWHCurdqRYZi3ELg93d%2BeCgrjgLw16Q6Vo1dQEk1%2B1N7yxcWw5qX7sAYNwSqZMp%2F0Kr%2BAAppZh%2Bs8ihAQocXDeJObgvEm0lTa01APOEBy6GEMuVj2YjlxLEEtHg4XbTCEoj75PeLJZf2T0%2FuORbVXgVHHGeSsZc%2Bx6HjHhkhfafF%2Bf3%2F0zq687qGDGFebVYiAGbkyJuSNA4HgCJdveBdTD9YcK2Qbz9kx92HfaP84TTWiNIuosiseccy%2BG4oO%2BuLEcC6KtVbIQYuHj5OOaHBklpyvw7qgRFKqULwmTZWHaxN0BrTYe%2FE8IScge6x94%2BujqSuSv9%2FQ7pkcNh1aEXvWoc7By16dkV0OkLgMt12WvKVCO%2FBBYdJAJRAEvHmfXg36OXI93%2F%2FPT9DtfKtdgOd2kkqWnJU3UYiCmatZiWrVorU5htyVHLpYGzSiFncmcZncf9b5NbStcFJETlRZ8VrW2FqKkOzSpb1R7JswiOCMElmHzu4YfSElPsLqsXvbw0IN7nFl2%2BpBt%2Bj9rjaUwMzLRAIURHI4sm4wori%2FyQY6pgHJx9Or8g4iWbln1SNeC4qt0OMh3Hc%2BeuUs6GlWNJC4Ahc5Qqmt2c8VE5KgQk53JY3ASoQaadyDmxooGdN6gtBjm%2BIA9hejw8r5slZExbPbfcP1r5dib5NQpkmifKfRzkkujxa1HSa5LpIq4Bxy6eMFqSs8LHaADmbj4wKkL%2Fhjucr%2FJXx8v6n8ax7TpXDjciFOjdN2iZGk%2BovkCJ124ghFS8t8LJ%2FH&X-Amz-Signature=df2f0084ad006c46ca0ab1c8518c88c11042f3e9a487c3929ed2a52b3425a7b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIWVKUND%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T072447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQDNNDgcxeHJbbgxPf4AGT2SI8sSssn2G2Z2o0u0iDfn2wIgC1dM0shuRMWNr7sLRQfx%2FV3znK4EuWdTLSeFHAF2X%2B8q%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDKbZqGyEwBpow5KhLircA9QvspHo1OERiktdWv2hzhcv1PuvLES9gXHR4ivdnHrkS6pIy7KHTIzvD7%2B6cOeinJoCFA7n2G7MlCYq5ZTo5keaa6TSfupqdZon4SuiyoktcW8YrH0UjYfH9VxBIOX5y%2BgBJVVsNRbUsZhZvp36vEB1OgTyjXW1hVmycf7BQp4oBN2hdNnKp3zais0dJyXqw57UGCaVnRaMHQzdhBmAtTPRfAEvMyNpPf0WBAPQcdZIkyJ8Sdh0wEqCNfym3PWKNaPuA2pef2fOsWJaH3GX0gDhB5KJjSbgjV2vUuxHcm857vJxWa0LhT%2BLm6%2F9vh%2B15MLe5%2FqniHgihWMF9lyDnd6lP6WSdB6h3yGNJUGBlzkC%2BXTPX91xk%2Fiafhq1IciZ3ATZiTFOWC2pXpUXj49ncV3O5qAQ7BOEow9B8dtwien%2BEgdAv64QXfpWCRP0Zw7TCFbL9LQsc5hP5fYWQW41F%2FerCFtoCAul%2B0VbiUNkupEjpFZUb6Gv4a%2BhojXP4jw43dN2xipavXVZiRKAjUstcMzodwu6rnKjevKqpzvLZRi2KlGe%2Bi5%2FzspKz9Vr6cGg9j3kxp%2BuBoRlimGLUXxOGk9kpRm8VznYZQgNbm7HoETdZuwo%2F3NdXhLaY6d%2FMNW5v8kGOqUBrPDhJYghnlB5DV1wnZK3oOtbxTmabAq2nO6OHmMBZJ4kzkhF%2F9CcKfmRNGNjlsv%2F9wKRv4SFFUqWpc%2FhrEzGEWHqtlWWR5RtQGBmUcX2Gkd7n04zZSKdHeT0hcMClS60JNjziu5B3Tis%2F4vMupxzvIYy2wsdLMbD3gb2jGlPP7mMYGSxQJPK1kswPRjbpZE89w%2B5ij1dG8dVjmVRPda5ht4yBN%2BA&X-Amz-Signature=0471bde504ad0ed34e09039730064da790f33e4d4a2f966d8177f5e476abaa92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

