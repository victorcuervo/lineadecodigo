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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EBVCXGW%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T194422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAo%2Bvy%2FGynFHoIlDUOkM6md8YkqeF5H%2BYxMNnbe%2FRT%2FhAiBErfyOvlNmf8SgDSfkW%2BV%2BWtn0%2FFcSaD7FbyNZcuG4uCqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMS7wTxugkVSMRPj%2FHKtwDHwx1KH5yCOSI3Yl3UpLUATjEkI6eB9nagfAJ8ornHOCHhdZV%2B9CkyBjQHNwVstBToTiBi7%2FjtQey9VbPTQt5cZ79%2FYzC3F9wPORZ8PYQZConGLcqdRUzkGynbQzGu8jrgzl6TSffpC6S9ZKSwsbrZ9weU6nyFDimFx9p5Nbhw9wGcg7oRew7ywnKBNrr7KAyaN3XMZZ769P7Y7vus%2BcpHvGv0Tab3M877QBMK8wRVe8Jq3QLE3P2sAs4R%2B1v%2FA9FAo%2FynhNtZ59UkIVi8V53eD2rTiif9pN9eh4J80M%2Bp5LabmkECL9wMRrDA%2BAPm0yb0TAuBhDjixiI89ZdOthTxtAENYaQOF9LdSwZ1ZwWMxkm14xFjc%2FjrQIAaqgbj74e8vc7eV7ljLTgdzk9AFHceexztf0aQvIHhCA6C%2Fs%2FxEzTNqtVcaygUG%2F4Iq2ZqcPJzpBkhNElCBCfTeN16YeiIDT95E965UZziTHYyC4QtoR7Hd3gCCgwyLeagovp4rZ6UVy7ibgJuEL1orPmn3tyoiPjiD4cLPS7pBMEWbTe9cpWf2ODicGSwRCsXiHdOmYajk7YvBV%2F7HbBei5otzdilH0f94nmPBl7EOqtbo39p4RaztAsyPxke8V9Z00wzLPcyQY6pgHgsiIUfpO1rGXfwBG1cHiFQFIz%2FUpHLVdrElDcyFqd00IBkMRdvtTXBvLVq2rQR9BkGH6z5AW1ABKeecRnWPsr4js73mfuIEDqnHimNqELeuc%2BQeUQve7He1AZ3ViIfy1j%2F7JnHJ9Sy7VWpqab6ZH0U5oSIpMpSsNefsjXcZXHH3KuxHJBhEJwY%2BuvHqfNxkwUbvTETRYhBCuuIVduqCrRbBjQmZSd&X-Amz-Signature=7b30ad8f58107e8e29208a808d175ae09852cdaf47182282965bedd6741586b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667H25W7KK%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T194422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDstkBB0KNoRUWFT0%2BR5VXTDvlVwSDWQxEHcAkEhF%2FqIAIhAIuwImkDpxD3b9zoNrBxiGGXZSNXaq%2BRZbJtVElVmQvAKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzWr03r1OJTrpuAX6oq3ANp9EWx9QRJRcnITPv8xrVSkxcmXHmeiK%2F9o9POH6Oa%2BrDFkQJMg6kfo0y7s%2F1hU3rATVY%2BdTm81qDCW6bH6ZoYkmXa%2BWz%2Bf%2BXVBpJfLJGc9qN7Mwf0x6X754N9kkOKD0NxuvqfuW%2F8ShyNjOM76usj%2Bw6c%2B6lY0KMxSdUFPmPkUUUewtPJCE5Y3cUnWnchsNfKSfNX28JfxOryjHRIUcAS3%2BlCnCW%2BvIRBps%2FPKrId%2BqweXHV4H2JM5Z2BR49CQCuaDHZMNs70hKoZUlXRUvPiGF%2F%2Fy2Oy00jWV89ylCNktbuZRGGsiW3tFKtlVH4VFpnJI0OyGAeIHk%2FzhSseoLjRlrmVmbleuRLer345%2FW3o0SA%2Fp%2F0PUIPvocDugdZwZn%2BPT1WQCu1eCcNIlrw%2Ba%2BUBXu%2FblIoTPSFzb4UaHXyUs4O2Dp0VfBTlj3QIPAiX3SFNhgOZN7w5WXCkzXZFXvvxaFFfLI3MIMWoSp9hYXfljC4sOQb8D5l6woEc9nIliwZw0t5NXwvgdiAjvWGYQ02YNp4hcABNgw%2BmBq79yAgiDx4kXaWKAJ%2F%2BXcPTNl1zhpLxVw9FD5D4jLtKCQ9OQFLAiIrvJKdhfVWjYmk5tsdDBGr04PwlFbr7N%2BWO6DCitNzJBjqkAXfL37N0uUI0Tdfga82fcsB7pLXu%2BzYJmTkhmywzRge7nYdrpo8%2BwuxxZDs5GhQj%2Fr8CoR48zB%2FYrhIqWCMXVUBYMzv069%2Fn%2Fu%2Ftnq78JKVIii5ilzA%2Fs09Q2YGZ9BbQwM%2BXNDOkpun6n5LN3SYP4REey7jfhVdpcnlwZ7FIaRXWjW4bTRP5%2FIVrUZC4mTC6aeze73kMSYLDrbwueCOhFxsyctyb&X-Amz-Signature=321f8f7be2476699af16ed557052f2ae01e8bb55b064348d0a91b53ef2591427&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

