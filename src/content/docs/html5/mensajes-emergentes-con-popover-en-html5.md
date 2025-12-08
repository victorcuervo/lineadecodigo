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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR5NNXAH%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T175903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEB2wFF9JOLa4SdD0im3KRhSPPv9kZE5ozRq%2B8kwv5tVAiBb1wDvg%2BlZpB4FtSW9I9E8cmO08007qXbHvRYU3H68%2BSqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMj13SWtUZhlnwCJlcKtwDFqLyDfaaHUrL4y%2FoDr1iqT7i0sFbKlL%2BPKuDNsXswQ44Oz21rqPNiiTQ%2ByrEx78IIT%2FAHK%2B04%2Fyql6ITA3JHUMmySXdSlc8nKVSz%2FF9BtvYCHMC4ZT8AXgN3l96O5cbdZyCCtRwINX%2FeKp%2FlCRzKUgKdDapW%2Bha59BsIdsrjc593ZEiaCmvmvfNAXGroKA7mGxjvzP9l6UcGBvk%2B3xonBXjKRVC1M6azBeYuwB5jLFVAleLnLW4xpjTIG9z8FzP8%2BMRc0DAFILAfDFaYmv3WQVoOTx4CtwdTz4EvfiMwSt6Zup%2FGDORFWqI7KabWmO35uD%2FsSiLpQPqxPCZHmwrH2Eh9L5afgZMszGcbNcSna15NYPRotdk1CdLIC7Dm2vDIDN6X5Ji%2FAEF8MtTy44LUP1EnXAycZ8Lu93ED6lOVujc%2F4SB%2Bj%2BWVXcogdINAUEGy0u%2BxdZa5HtBVka3SHWukqVXD4vMNYRdDoE9OyQwLvquoqgDxqARvps57B2gu%2BGBGQfyR6WMciClVV0%2F4hdtv1V7F3RL8pXxb6x%2BEHzoW4IQ5a4AxhSb6aQNCTEhMJZaqU%2FX6ngm1h%2BjABYCzbMO%2BeticAUdF2EryCERRzSrCgeJtX9HdXvRm0G1%2FDZAwnYfcyQY6pgEfkD3gFUYRWXWwGbSengZKNMm4twjIjMq%2BzraaK%2Bi2G6dOb3g2W8f0P3xe1OQygJVageH5AvQriDkAgQrsHib5Yz70a0qfHmI739G2DK1qjYGe56QCblXhW%2FlKkiqs2ZUs6HcOg1iSd0jgE%2FLtwoSKgFnWrJyHEtOkuhYLCvJ1zJjv3OnVHVPSiOYWZukzpTZJ7RiDtGKyWH5lR47PpzMR5utwHeul&X-Amz-Signature=3a47c8abf4175bcc8c7e977bbdbac12956e4585ae01f0cae0dce3b5e97a58284&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBTVFXPX%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T175900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCexyod2wXbTFuIi21RnP30J36hu6XfQtzQKQfEG09%2BAQIhALVuOEP3n3Y06rv9NvCQlz%2F31r02hoO66Y0miEpzg897KogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgznFSTIgEtdzgHVVV0q3AM6iCbZiyJeZHAEU8mxpLB4abumfVTB6xy6vUgUpSdxAUnaalMHTExEqIBmQgJUJiE1SL0L9UzgPyK2M%2BcObZUx9%2Fv%2F%2FDq7wU62Zak%2BJBmVm%2FQbiy4lCy2bGseUFXrsMe%2BG36hFmJWI2XQ6EqMLz4EN2WqzRa3KjPVRJEaUQF7xAMTSmeUluRNT%2B2iqlgc%2F2Lj3ZsJNfT0XQR0gRBp1cODsaYyZQOPU4cUynoUjJ5rmXy1jcaPvGcI4VRpweA3n0yqObgLhus3l%2Bj2%2FLm%2FYKg20u1NBwkw3c4QgC4mReSIh5GYE7Gw2rFHi76hLBxwXjAMUsoxg9MwVCSvmk7nws2PInY6iWgIrvKXrBmBbC8lNcyR0OuS7usbBVgrVqfUcnnbCW0VNMcI9JxuexubxKNAJPh%2B0FXyi7k0GMI7G1SjIzzjyryQS4g1Am%2BAtscZODGFrQXNnTBEKb8cWHQfmBuCcK%2B6CJbhczmsKmOiXUO3%2Bn3mT8f5bGETa7R9af5gPjckK6zyjTqIBFlhgXDyHCuiMCG7AKZIop8%2B%2BZRUUp55CaJJpvlHD5muPTZgTGMAC9svjJQCDij0d6WefhLBYDDvHcqVuDEUonRS7%2BXKJceF6MQm1IA8HbHmS10ZFKjDbh9zJBjqkAeL34LFFVj50IkG3guFvgFB%2BAv280%2Fk7YGhAMYN7l0XrMzouy3qGhqtsFgGz11qAaHvAbrgidbKWAmfnCE9FO4i%2B3xhcs8PB1jebVxI%2Bv9LiyR6EoW5y3qfgdwhawhjupH8D1s74ByZPIr3MAfoDfSUy%2F%2BxhqNnYvoTRdL8%2Fbcz41Se6ei7MLNfP8VrADIVBAGKyxKvMLj9LxBJwYvgEFZBOC8Yl&X-Amz-Signature=49f7ceb58d4dd60548dc49d62462652a8df6c00fa7da459907601b9f1ecd162a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

