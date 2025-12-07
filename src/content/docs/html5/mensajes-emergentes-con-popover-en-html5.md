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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BSWOYDF%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T201710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH5TQo6Ts%2Bs5icn%2F4LtwWJj9bImIAqlbKZzRDqbpuB90AiA6hBHaM%2FT5DjarbbpqEKWFXFEjRujlM%2BpRcZojKtl2pCqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMn0gvze%2FEN9dvW10BKtwDbffhCBEMNqvaRyZi%2B9VImwRRgvrI1S3K4Ki1qwN83hwB2qCXNHZknaPUe2Q%2FDJc5mNSH2rDIaxVaBDnIGUjs9%2FS2%2BJjScQRW1KD9FikBfRBVWCdIYTYGJ02XybSgrDqOVcEmBSCLsZ%2FjAuN5Ua6dFMRML%2F5j7TNSYgiFVB1KK6HcwqrZ63XuQr9FA0JB711Vr1DFl8Fba8W15pVSV1vxaPoxkDiazGM62inJgq0exK1nV7luknxQpiGEMrFjABliVBKkLcRJ5SdEF6ZHTTSed%2BJa%2BEH7rh%2FB0M7e%2BxWeX5ITUT4kds%2FOnAQdBbpYdMIiZWTAuxbYYhKEeB7r7TtAsAca1Vhey00J109bLfg01UB5s%2Buabjg1b73cDqK%2Fi%2BiuKVn7qZ3tQNAwrE9yb2DAewJ7I%2Fa7wuML%2FjnkNQ%2BCsqzPKWLH0wpEEP8oBiVBDxBQhd3RMp1YI1kxKP%2F%2FU4UFnQKa5oWnQ1Qg4%2BJZJRCR%2FGec3n1wWtWeEX8RVxAsvgwGeQNqVDKiF05F0LwZrmfJnTe3GeDMFByeR5NhTNULI1ybiNT8CAelmPKkg86QPnbeYXnox%2B%2Fn4bt2Qcs1wp0H9Sj3WNhURL2Kvobzcg%2BvMJCxNdeXFl3NkgzRjxow%2BKjXyQY6pgFpE1%2FhxfP6AgU8049%2BYyr5wHwmf9ic9oMnFploP1iglPk4t5gsXHNlO4nxYTdiUyRpjpsdMFpWQb8smYWmqamLjXIsVR1rGrT2H8LQzn4cCt8SOlKA4CFbs4l0T9Q6Ik%2F%2Fi%2BL8j5mOlz11rCigMp46z%2BwKibLfODsX0OngoEX2B8%2BNXSyD8NtmK3DWyUxNaTH68UABBworFkLcoZG4ZtqPEjGE0kNv&X-Amz-Signature=7fcb164bdc61df95e1f91a87c30660b64b56d47829f1235c24bbbe3d653cff87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2GXNXZC%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T201710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBL0ZIW%2B5iItleVPGS%2FzSBUAQziFwLVzf07hB9yOvjLDAiEA5E8fI%2FMCdbSF2iGJKt0GrYDO3BAxZJhLonkoejxeyWgqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCaFiey%2FID%2Bxrul7rSrcA5TpB%2BXUUIDBYAXYsm8vtSijmxVd4bBFi833Dig3VHDdnMVPDJ4ynknH8l7TW2%2F99q6e66jhYOmi8Xh1%2Fy%2Bh%2BclFXpWCYT1mLdPKTNoS0Eh4AugOvdRik29T3s%2BYyiJuCTIeMoj9S13aq99Q3ZQ0IFsbGYffKdW3Mu%2FsmS1k6Nt5ZUbI3zxyusgEjdxCr%2BZQ2cH%2B0BC7bNczzNENNDLlKffrCmsyZ8wBvJKB201OeOcSpzebaEyALS6lpQ%2FALeamrZJmOGcF3xC7nZ2H81WUlXY%2FqbqwDYpB7Q6mzipe3Vbn%2B86xGAabUq%2FqGS2129hJwziWUqzPHjlL3WHH6PeObJSDPvCN9tP4UnbdwefdnS10LzFuqrM74nZvgpDl4cs7wxepMe07laL%2FLkaGVhOoUEJOfAFKH4oXQ3%2FB1xdMS%2F5k9nwPIq43vZmZeBmZRrOtz9GKawsNCMENcKoHAUVbuQHMExxyqIQEJf2xvRMW4nLXZVECJIzKZsjESmFeJx1x0%2B1oF%2FKSgu4%2F%2FUDWZoA%2BwQyVP95LKahxJ0WE5RH2pjkz4r4Y0TxgpRCKGMwj6uV7EvhiMa%2BKdZq7DqypCtRQ5KXsXxNo01Fl%2BGogrl1TNbpuvCQYTjZlRI%2F3%2FBkDMI%2Bp18kGOqUBWMpI0zycu6yLNsWLE3fAGe7OPT0JMA5If0DJngWSnD3mM9HLC%2B9cs1y6Vvz2O05e04XkpWTMyEaunxmoRYRvvSNYVhr4SCouNMYGqSA48CL3S2c9gmDqeUITYLcRyGPq8GPPs%2BPGydGJZzmWuohQu1guYZOtARpmCA2E1gYVdkiBL1XbhQLGbrC9qE%2FLD1OXKCerZ6WLggEUgR9UOkS2M6%2FqqTjF&X-Amz-Signature=7179924bb3ab27b8bd4824fd484d53f6f4156624a223e4573f68d2ef0f11c3dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

