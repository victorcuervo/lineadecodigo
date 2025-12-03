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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVHSNS5Z%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T143853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQCdXLcoJ%2BL5ixsHLd0wHp793g1Tkqg%2FyDaPyYuba%2BE%2FugIhAK4LRCdlBSl6%2Bltf46Li5Iq7c%2BAvcRriz%2BbmSCEUJIV3Kv8DCC8QABoMNjM3NDIzMTgzODA1IgzL8RiYHsUVqabpKwwq3AMSYEmvsBdH702rCOT5GSSymltTTsUwf77eIXdQWuScCJU5vTDNqN7AyQBLmBuK1fx9mY%2FFNju9gNF8xDFY0WfSWBkw2YItT3f%2FoSL%2B4MCZNfv9aPFhbpyOam9tecY%2BUxtI2zavCnhDwz74mCdRJrDAEx6lQ0XZ6n3uIl0Io%2B2jOCv8QLMbrincW2q%2BZDLlixoUxC%2BcLDr1YaNtp3UBLeW9yCBINVEHmI%2B7uQd%2BO8SzZCpGq7h5zCXQt23KU9K%2Bgt2vr9G7E8d%2BtePJlaIQxFzKzu07oiNQEdLmO9QZvOWY9uGdg5VL4RQKimtNhPDUy4hs8HcpDEeKBq2JYEo%2BVoqxzYaivKa%2F0cPRuNINP1ZiKgPbzvxqxsjWZjFfwrjaM%2FNFxS2F2amxRAVBjDyTgtiEyBxg3X8SIZ5UwqPBeMy87ZWbOLzI9A%2BKyBLk%2BzV1ybFXSQmC5MlxOKk5WnVhxTm5RVqXHafjDdyIwrpKh15rt%2Bn4BsZJ%2B2xyqgdJsFkcuuktmm3eUqg4aJ5PrMjFXlr6Y7OTHPRuOigS%2FVC60vwdvgLZUMEr%2B26N%2F8HPz7TzFJKoi1n6psAxyOLr4%2B9et3vSC6OfPbcz19izsgUeGNqS7fREA%2BUvHveZNOrW7zCah8HJBjqkAVFVXlSf0QSMFB3X%2FzZxftqLtoW4%2BQ6FQLsDo85hLMuYWhABGYvymtOUihvcvQbTDiPSkmX4MmW99RK78WgJv5xTlq9r2cOHCR6yo9MFHC5Eq6X2JZM4McLvUSmv6QuXxSCfVunmUeOYSt2CsVZv1SKE30v79VUK06%2FdsUmIJ1kd22oUwL8UgAhrpbcE1GhkUq61mTshT3NhINXV5Asr5HS%2BscvV&X-Amz-Signature=43739a8dbbb28fa356a81b67b76cd26020f8209a1efcd43b91de948cc2990f90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6WXHFPR%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T143852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQCKu1SQNRUzmSD75i9WljuRVS3fr%2BkWaXySJlA4aV3yZAIhAOhZ7u70%2F6BDmAUEk6gw6DGmEmPjRQ1gvxzvAk7Oy4vrKv8DCC8QABoMNjM3NDIzMTgzODA1IgydkYTt%2FI7KNg4507Iq3AOVVZAoPrSyYHnvYKqSmm7FIsEAkKCLqTJBcRtSYrym7uLLGeeAuIgRsxv1kckBlOqdbHgoLUZxJpRHwN9w90ja6Qf7Ivg6wTLMWZyCHb8hS%2F%2FS%2Bd3Lva7myI6glQtCCwYCkrE26tnEn9xEez4zmSXqlMnBQWdM7hS8SnODi9YPnrcZ7J%2F%2FBxzAL8Oy4LWB35e0n3eysuk%2F1vmTTvcstR8vT1GARIcng3t12NAcOtDt6jjisVoMeS1s4393mkCTFaAs%2BFuUiDyH9YSoMJCGKJFX2AGQjC%2FAvJMnaOmbgjpyzHWOWLrCOtRIITQtlmpIaTW6ho01hKnoONE%2B%2FDm%2FgH0XKOPo%2BV56TZ5R6BkFMNi6YWEdcl%2FwvutyfIlH3beVhB9YM4hHo6iJrRqO3W4952KIcewa%2BSKq7AU73%2F3xBIcW66aDLAbX%2BdafPsRRjwTabs5st4Bgl1b%2BAhLEawdMeyZGY2xA6NdhXvV5ydA%2FnYKn5qKF7TYSx5jvNFZ1wvwV%2BGIru5stuMv8Q2mV%2B2x%2FIcbgz7QouyMhuyac8bMjiuTFh9x1e%2B87DHRiqlZthMLsKn8d25g4vkVhnxgeXBOsuNo68AudJ8T6EHkVtGUArkvnLf2Wf5QoPoXOGti5szCPh8HJBjqkAVMZM8y7ZwIWnPbw2Ugz%2BebIZAiKwzJXxVv6XQDiG4YJ0au1YkGlGSAqMLtD58OpoJccKOyRSJyzYsrvzAxA5gMPflYMxQ1bBLk4KqgwhChbN%2BMqhktlKZdy2KmOsD%2F2Fg%2FCTWJW8G2PVjw%2FP%2BVVTWef6wFsg9c%2Fn3OXenH49ycFfq8PyFv61l0yc%2Bu1Ea7oAkWYhKdeEvyw5bJumkoemwGfH%2FaY&X-Amz-Signature=19da297c2a343319bd827d75f8e0b89103987d2dec13dfb9bbffa8b4ea3b06cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

