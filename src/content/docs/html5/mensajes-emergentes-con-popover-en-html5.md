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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W53POX3Y%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T224751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtlpQjG62F3D3%2BLHvp3sAJN2%2FETGU%2F8jJ2AW7W9%2BFq9wIhANj09aMqfij%2F%2F7H8ev2H9YOPHlO7CtdaYvDJhyqwrSugKv8DCH8QABoMNjM3NDIzMTgzODA1Igy8zj6WHgMxK1THQK4q3AMCI8n7nQuwtMsXPNlbYCj7u5gCGLDkDCVjyvH49Oe9%2BPXfrwWtcPsdzy6nZfPxcmb9nAxj%2BSrjsznqJGpEmZdMsmN%2FSf1hO9%2F5FUYgLR%2FNuYD7bm8IXcBvQEijO6KObAv3r5dJikjCExQfG0rDgQiI2bXqti%2B8Ucg7qcpHjNGCxJ5KgwoxazlN7ApPcgj5z4Hh3SIwZo2yCzoqmohs6jdZSNozB2SZFoHj5jpnGT1XeuXs6oZQipnU88Y4VsRlBUyNYDt1W4Y%2FqTzOl5aqF3HNanjL%2B00k86Mbx0RZUTW932RdTI9Mo7LqLU1OBmItcVeeUP7dkj4C9ntM3vx7NV2PieZcv1y7Iq5pmiWQ5pG4Sw%2BZV4xsjkuPsC%2F7dJHy4PYtJypKbVaZ5fEA2KqcAE%2BH8O4SKwrBgCNURYotVdzjLcOdfHNguBWavliswmBAypzQp7ONduo%2FBzdt%2FQjVjTVIc39Oq6ZQArihjEnabORyHWrBkIEcZ5b%2BR78QQxMBVPRa5SAnfKMOR7QFzjLg%2BP5FiRNoeDU1L3GLHM0oaQqOujNUHFvuY7%2BS27GfgzRJmMPadDtRBpL3OXkd1QVgkbr87R8mJX97fJhlyucXP7zO7lMHF2D6yf%2BPdwdCSjDN09LJBjqkAbKrQPi0W%2FUwzA6MMpe1LUC%2BoxigzKDWoEOLN2ZtqvNIr3Dk%2FXzyw2sDjtac%2F1iIwospOUdx%2Fx3krfdBPpBEvVRwOfuKwtBUXy%2Bowr1if5iLqFBGE2q1Qzuovc%2BSy4tJjpCpR1fSW%2F3o0pDBxrxUI79wgUxOoLm%2Bz1FLTZzGyHQ3WEbPYGyZeXZEBxo8IqmfWgBnPbqjhj1SWHGJKK%2FSfIqYibUV&X-Amz-Signature=b0df41e0d4ddca01031006f8ac2f285dbfd13487d66ae49d87cd93a285719b1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYDSOBDW%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T224750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDBhtxAvPPGW5pciEXjg%2FvWG1xRglCfE7FkMd1X7a8S%2FAIhAP%2Fxn6GalBfuVSy%2FpzumRRWxqRXOxXkvMc4jbVzUsp94Kv8DCH8QABoMNjM3NDIzMTgzODA1IgzSx91azrFPMrbHzqgq3ANGbHoSAP9sPgG2M5KsvDNH%2BD9C%2FoLV9XAkRrx3bU43lau7tAQgB7VVuorkNumzWgWz6bB%2BiU4a%2F6VMUqzbCh9Luc%2Bv0bmXt42wZBGonJnMpgYR%2Fbnf21K5EGMKPGj5ksH9xu3zMNZiHz2VlBUDuwx4%2BlaWIlkQyXhMWfSyargVV3RpDVSe4UHK3qEpnoBa7gLXb7sTxs8qUnUpCw3Xd64DUWytQfAWWZXwNsaPLsyVWb3%2Bxpv3TsZt24F6U87LCbsdjbG4VcvxBCk1oO7OTIPNIMdaCycCitoxBm4nqjTRtOyX46moAfTHXDkCMEKNY8ot49TOZ7RoDRGXE5mE42spEdxWANWStbgj6%2FDcHLvDt4gVZN1H2EOxbxUEvrc%2FQrlpUfBU1Tdpqb5dyy90CBjh1d7yAU0mFJCC9gXNvxw%2BKDq0BGL71fnzZrgLhNMSU7abIabsk5wLo97Y%2Fz6rnI17S54NO%2FmerLWwiQxzSDhTguswGZ%2FX0xzp7IWLLHU6z2wzzg8r8UIgW%2F4BY89lVSE5GkvGlU6kpiUr%2B%2FhEZwRs7pO0z0vgeROX9GfiHMIHXhNZx6jNidFiCijnEQxDuaHd689rHzS1gkNgYhJlKA93flSgMW4Mc6nOk%2B2JJDCc1NLJBjqkAWUS1OuXgzkY3uOMy0NYVQb%2FA61fFu6ehhZVDlvSCSkKR4rQs4uv3P7YvleYFaerTwDHKpUDgWhqreiIwjhRPmIEKQo608GTzjzMqT8r4H3FTztpWJc7hp6ULW6RF5%2B2rtjcF6YjHbYM%2BLSgmtLAxLI2O8zjy03vHoVD9E4VgRAmMHSIlKcS3AXwtZZ%2BvFssSX46m9a%2BytANm1QDWBuh6pMQibnA&X-Amz-Signature=0016579961c7a4e6df6601778436933e1cf8c756f4affb883945a5bf0be5e04e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

