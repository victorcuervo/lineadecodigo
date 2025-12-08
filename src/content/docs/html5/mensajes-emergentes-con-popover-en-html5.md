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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NIDQARH%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T125708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG6i%2BsOrbQpny%2B7xxpZwo%2F9KUFuOj%2FHL08AlQw%2BEcSJ6AiEAqvBGzLbL4p%2F484pBFuRoef%2F%2BDh3qtW%2FoS5dKIN117usqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFgvwphwVeA3gDTnwyrcA4e2v6PEXDnNVVi5DVcpCPW%2BZMt5Bjovz2X6jkzTF6eLMCZJyjvJpdfq8e16E02zPSLeN1vnB2MuHPbLwCb1q7hwhr7n%2FEJ25yqLeki%2BwL8254xit1YQ8l9DejnFMkp23%2BF%2FuPo0F3H9qU2m%2F%2ButeltHt8ZX9IztaMdUWUPEunv5Ch9DnZ%2BQvTWvH2f9mrF8%2FjWo4nhUxKRb447ZJV9V2%2B4p7bW1eV2FYMj7XBki9FhiLVp5QpeCSGdIDGKJjPISjlbzE%2B6vRK%2FV6IS3hTqhBzeKh00kWhAl1mMYhtF99oH4VIN6Igof%2B5RN%2FeV3fM5awjoIKkE3rlD4EwOSovrPa4HiOeNyekbvXr%2F2QCB144TlxDamgEIRVoP50Rsf4PX4fPnlVmiMIXcAXmJpwu87BnddmOE2rH%2B4CgQMvHNuiLAEOxL6YTe%2Fx31n7lFHv6nVQClLdXQUdQzi6PCeCIbZ18LiNhCQv3kE0N1SmrSCQaAhDQmBMH9RW92iSMxIZJM8BY3qiQ6kwX6PIZFHh3Fyq2QlwxgFI6P7qDv1GVXfiFC%2FMVw5YHgp%2FZvu5gVytGrMvRudDesKWZBYcFeYvg3Cu%2FLMT3W2g8eT31NLon3LFaLKmxP7PxiGXtVKCb5sMLCQ28kGOqUBDPZDSgj64QmAEHpSMtP4dVcsXsYz0hpewvg9H5aeQvC25KMkoqBAWKd8M8U35HyZ6H%2B1puUT2NhVXrwYPS4tCNVquqHBVSrby7uZQY5Ucs7M5sDj7n3DUganzPIeXfesYl8C3EIbQgrBfDyzzEd6tsr6sWHLDHoacPP20LY0shpHcQvGLC93dctVxK9fYUOYi0PYt7gEql7BP6FP97jf53nah7GL&X-Amz-Signature=c741a8dfa8787a09cb983eb4e55b495f0cf027236edee7d1f038d205e14ef8d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AHNB3LC%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T125708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDo75bI5oUH2L6p0rz56T47A5o7XOzpvG9CEQh2DsNRygIhAPBI8cnIW5nCjfvl8zCCyGzqTECtx5cAy6LLSO9mKowtKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyVppI813ASQPFnPVIq3ANtQcr5WRzkUiBM7mNqBF8Z0L6hK8Rkz9Az5fwu2LXETqO9cdyGHpptRhsn1bhZy33UpROvYqA6jSMwBz0j676arts59MKYZmho%2Bb48S%2FEYPbrh%2FgoOt%2FjryoA9Dv0fgdqXxn0YqEZanEle6L%2FTmlHTnQjVKHFNeWEiqhuS572z3iljATzvb%2BB2wdDJMXS03AapXCmmqKIYU2Hb1lwNtT7RgAgtHQtPOftmkQmOcXj5FGR%2Fb%2FLq1JRlP%2Ff%2FLQtMdI0Zfa7t5ESEJHzOOtLqObcZI%2F9IlVmjycz2JjFOfAe3shTE7TTfV%2BPqZ1jBPWUvqeK2gSNBAYRR9sNCafAR5tt2wtlaOdP63Hhzi86IEpnClCTfKUMiY%2FZQmsDqAXUhOvSlG47zbMFC%2FrZRBKTbjvHX9ltalsxaeRXigFikgXX1BGos4WYUZUBljCtwL5LLjnB9NNv7f0NbUjqJA4YPmWSyBKwhiOMYVwska6IkVC0OYmQfAT2koivA8CTWCmqT6j%2F%2BI7g%2BmIrens1O%2FoLQ6Xhmkv%2FHkkcWr6NIqt%2BLEvWsiTg5WSLS8i5KiVOkirDKeAuJ9E6jp7XXmrZ9nls5udCyjZ5js7hl8jEN1iF%2FC35N%2BHCANd7m1bKbCiMwGzCekNvJBjqkAe7eu5X4%2Fa9Nbcd2Irji1jSDuevecncyekEl2ulz0wHx50TffXrpXZwMVCOKjQQTy7TRVhuj3sZ8kwkZVvUI8%2BacsEmkwxoWLEnCBza3gwfdTIdnztW4LqX0eYuszVLdpUD2uKjs5Qmxp9W7HRGGcPNhC9aNevbI4ZUwfSVX63ZUoDczXOVFlvBo9yduhpfN72NQ7GS6xR9fc12tsHOnndvMf4Rr&X-Amz-Signature=1ef9fe5a4507b024ab841e0ab5f2dad278a368a29902ad3f78e05227107143a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

