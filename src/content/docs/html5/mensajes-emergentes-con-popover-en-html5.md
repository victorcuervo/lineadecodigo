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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJTT2Z53%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T184204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDeiuLH4jC6mBHGV8XXhSXsQdqWOhyTcRb0tZs05nzpwIgc83r4TK3Umpu6PTpG9wu%2BoOffeJNDA9lQRH4JYed9jsqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDItrI5t49YRmGbOnJircA6YqB2CVbtjPMqywwCnaSFjMtSo7lafEIDyoY0%2BQruQdbyNMTy2OtWc%2BIBM81SVAFz5zC3I4DRliEIue%2FbnAXR7HClN%2BXakuencekrWBMuBmnLXDij2N5v524jna%2FZoVxhJOtm6%2BZvkEEnrogBVJiiYFlQZSU4DyUfITchj6HdpxXVsjmmtgg1Ti42DUtWA6NPnJDCyeDKcULNocgccXb96lKAEoxbKTEl0mZdcSDj5wWaLoUJ%2FlqbrqfpEcN3WnYySnmV0%2FJxZs%2FQt9WECfzUW1PKk5NRZqsO%2FffiWSPGLiX9umg44sn5w83KvNbnbc0iT96vBIga2%2FE0O7GP%2Fka%2FX%2BRyRHl5xdLmT4umr8qQo7iFhLRoIZghDBh22IFti7UxjyRSpoiFj4UKlYB%2Ba2ggTx7IWrG0h364cfWYCyKCjxwVy02541fdmw814blnrrE0YS3dWI38yLk9NfGDQIzRsDdTPEIYcMZfqwVwaYOwFa%2F5enk7fZS5ohNvA0pNAhFZvt4uK5yR7BtbIiWL7HucOWBsiptz%2FVPBv2zfOpQYah3oY4oEFlLJBjh%2Blde1els%2FY%2BfbB7oQw7t%2FaykmJtccB%2BJpvxmx3b3nIqBqwdXv%2BlYTT2Pyjsh3zHZwQ1MKe03MkGOqUBBD71qeivF7WX1SleAKR%2BMd2P9VykCHtwvyDJwt3WtfvXSXI3JuyLXoM1oIsLRhJeO8c40pRb5Ll2eBeV26qAJvZsAkt20l82EGwbzFhWtoTi3m%2Bs57YeFC6cfauzTvfK3EnmNksMWucXgDkvgcYXV%2BHJgkIsPsz1Ezi0MLOb%2B6e1opfLWGGc1IVLZu1QwG%2B8P7DxQn8eAiI5m4a0bCufGjpPtwPS&X-Amz-Signature=4785009c33baba0a09addccbe3b0503e64d0c3060dffa67ac813fdd14e8749a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJTPFATR%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T184204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBTQXosX3rIPnxXqmdAshM8qxsiPHW8Drrgi4fnVA3Q4AiEA7Z8sZns4NIZDSWe%2FGx3iqDoJZNKOXwmhLpWvSnIGWpAqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMiwcwDahjF8YSzqkircAylYemn6sDUdyFI%2B27VBztFPl3yPTgF4Jq%2B2w4%2FGRP3Ohgv03FveSRYzmvb18mAhOFlutgmA5XVO2bVS7CDkqtlMC%2FMkyaupSZClnEnoswoXKONsMd4%2FQS4MiaCddheGDHur331XqTQ72pVKjJxDqcpWv%2BFcIJBj%2BKTFEDnZg3pQ7NTyv9ws1waEofaqdhvrkQ6c1QTJLPehvORL1K8xjJ6FBbb2L5mUzE2CH7e0ILE3Nj6FJPVMdcK%2FjxycHPenkDqpqFX1DiCXhtmsA2UN%2FpntBAXrP8dm75Q12sDhsfDWH7xJgWVoJWATfcH1Q%2Bj%2BEgIAU4v2Ff0Gjzw%2Bhpxy9yayk%2FK9bnuUwqV7bIM4myjVV%2BuYa%2F9uxnuZfbTDSdCPwQK%2B4vS4HLdleuZ4%2FgR0%2FwqUCBC7PAyWT8EmbVuDC0Hg1poCcV%2Fe7x0dydRtPadXHqfE%2FDUOnv9W%2B7IMF1oI7UGN6j8uF%2BPXy8GtbExypTk8U8q35ocTnEp3uoqya89nzvNcNQRGfJlCrdAm68ZlwK2RYr%2FXNF9EvtQaBAHAhQ0Zukj7PavPYd1fwiJsiMHPTDwnfAuHAb%2FXK72eBHMEY2ENMLR7Fw2gBYW3jWCU8%2FGAPFUsp6GWObpgh5dbMIO03MkGOqUBtUOEFrQV8as%2BJ1qMt%2FIoBJmEvv7JpOwrhyw2n0I37MrpUB5hiHQVFXdqrFlPN2n3cvmDDRFHQPHUVR%2FLfNtDmB5ssReoCKjiElUX7gFSxjZ9fCdsJGeF3Lv%2BxuqMLEJu39ACGDxP6WZvtHBMVs1kK665taH3Vlz49yMDrI641KHJX%2BCoZqXXWSi7m3mFnoMx8gFdIFPw8cWrxyZjIAIndlpPURWp&X-Amz-Signature=2561fc35286a59b924aefce60d79497ff4933f711e69a18ff0ba2f3b53ecd151&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

