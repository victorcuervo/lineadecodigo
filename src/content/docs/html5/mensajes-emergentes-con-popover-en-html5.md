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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTXU22V3%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T181827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDsnLk1Cbv9%2FM6V7nbenzjxKeZpbwsjoYJkz6rkMiCnAwIhAP%2Bq1ACybPMAQxGpSY%2F1FxzVf7K1xnyCwWGxthDuZRADKv8DCGEQABoMNjM3NDIzMTgzODA1Igxkie5MH0v3e2pRYL0q3APiNWW%2FemhWbFtcZgp3edSHtODJLoK4qpys7lgKKIriIPZlyTbEMn8%2Fg5zhvfhG%2BwLqbHV2tugpGr25FTFSokikI6o2zxzFxW%2Bc%2BoKeh425Fw%2BvZ0bqy99eVTuXjZ1OAinf029929%2BRxBEbltEGv9o%2FAK93hkbnE6bDczTkqbRCmPZqb1nFEYIzO%2BDHN80f4UEUiJYE6P33RU6IFNbUy8qONxWNDIZqNV6%2FBkfYewaioQQCyH2DWFHz03wQ5ZnL79x0nbMb56FHh4Kb05i2d0%2FvJ7HMYg8lpOOf23eGjHBMHe9XHtoLEMSHFNqec85EoynY3YESMxdhAzUiN8%2B7emCkYRk2tIDvAZ8p6BvpsabulZIzq%2FWRfZ4xTFRrFCUUSnxDN%2BmSRCk5U7M5asDPdrYvu8st23w6SA7tWLJ%2BNZvFgUHvo4IiI%2FPYf9WobvCwSfzPeE265nAGn04wqacAXt3BWCH631r9RKhgUdwMC%2Fj7WZ0qnuHFLwl2G3l8a3S%2BejsCvG8C65l9BfWAGzfJw2bGqIUbqe1lIwUrQVYpQh%2FCv1ArNDX%2BywNu7wF7cfxrcMJqsu8jK1qPay8xJx75bcCM3cwUeOZYalbgrhUyzBVs3xrAxkrt075%2BqKO44zCR9MvJBjqkAZk1Zwf5aluXhXkZr2tstjWQiQATAd0i7HqEbJPfRWpNFv8reBHr9jJgRcxzpYcPchT5g5UgXLukQ%2B%2BpXEMlFIcfqHWU2WNxqPRqe8u8Fylcq0UM7oowTZpN78I9wISx0D0NmlqfmJHLjkvFAXOor6WiR3FpyD9rZ7uFQY3tkUnoEKc%2FSasqYobV8IbmAVKLRRlDFNlmH6uJpD6VJsDqzZaq1Zza&X-Amz-Signature=0fd9af1822308e309068f00b81e09620ea16fd76cfb94b47b3fc754c4de9f765&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XAMFMDB%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T181822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHD5iD%2FTZapoFV22%2FhapUL77d4WQxoBmxSYsfxLRKWkpAiEA6p44A84ePP73YmA3Bdey3OpRKvyLY7a0ML5Qqr6ZWecq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDGX8LmCmPwo5E5peVCrcA7YdjcTPhJPfX32ARN2h4uvxiusvB%2FS9mOPMBmEn2Euv6ADa2EqPaR3dkE8Kzd4PwK8umS0oFYaiDDEC89YpPaes7MzRpcIxs9%2BsQpIp8O9sYr7SOR2UUvG6nceipvwCbwwGPqW8a4Gk7i59iS9Jjq16PvgSmDDjgmakLy6Y49Z2LemUSlCiMZ6l8tf2EX7SuHwWCUAjBTuFXzkBrP2w788IvAwdSA%2FTEKr0FbJmakIxu10bE46Z8cU7%2F6Iphj1pQbISjHpb9hPEO%2FXvfj9mGmu9EUA%2BFFDl7TpoX9enX9zror4huRZWk0L4cZR9IwBqDeUXqFW2DfvVZQzi76fQsn%2FRg1qRA%2FLCDVRald6%2BAFzlyhhPUpTGiJXNXnYvJJ%2FhmtmVSsjh8uWasaw8jLjEluXkVU5qdAalT%2Bc6VXsd2N2X%2FVLA9F%2FGw6Nu0CCMC7%2FefjYqS6np9vMvBOQ61oDIyvgTpVz7inOdN%2FflepImpdABqVOBOlw0rB5s7usUJsijP8K%2BztsFAtq2CcH9MV%2F%2FK6TfPMFEzBS1kFfp7E9%2F2rjB1LtGqmYqOzni5dnCcSnAGnqiG%2BVmNpIyWlOH8Ggpsjo8gMr4MOJHjN59lQEtNFrvA4tpXpAEZRHJOlv%2BMI3ty8kGOqUBKIsBPYhUcBibPqrPK1ms%2BDfBuoAphUBcbEx4CInyRXPDTwNCnpcHCuBrNBdMJUCxnPeFBALcj2aurAOqyclmVWbiTNq5eQmks9dl8MegadUnuhL4GTiLsnkQwIeGuysmNEUhpXkaakpR9U3QQvEVe2Z%2FtSzoSqSia2px30lN%2FmKqBAlg3f%2BPLvbOyALNOhMPMBpX0POZBmcJ3M7t%2B%2Fo%2Fij3ykJeb&X-Amz-Signature=6db81783570dcbd9b9a2bea731e26b685d162312fab1fee56511d8d91b172d58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

