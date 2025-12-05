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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUDOFEM7%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T132626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCATOMVbblWOSrc6LIU1i8QeytkD2XCNwtj%2FBzej0NZwIgCJ%2F81vr5i4%2FxP8Hv056b2Asso91ZA%2BfGkJsxzlzukEgq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDIxj6rRtBJKNYQ6wuSrcA387EQXQo3Oyscrb%2BHXhHp6fBrJ%2BenalD%2B%2BmvGBq6bePXOubzG64pDXG5txGsx74Q2kELn19K4Lpzn0T2h9a6LJaCFCr56MNSsjhsjSZQfcQcIotuMIs4zGh44k9ITpzXvnxQndWcSUrqWreg7dkKg1h1wXI91W4RSvycI84U0ttrh8zF%2BkPRpzdojz0p00RGgpE9DbguPoamN22I7MFZx9LbYrchPSH5FTUIzgBmB3dDA8%2FhAx2mfJjBdPPk7BZaqQWg%2FuKAK926oI%2BLHwlDYdblmbrAKyASnBIlZAOvnWs7XOnDG%2BOp5DWWkoDwTRTpd6laKv5w80%2FWJ4hlouGB7zvge%2Buk%2B1VyZGuCVzSi41hWXptgS3Xfu9TQ7zp3S717L%2F1PE5feG7H8OeAmodjILq4SLABDKshhUpwUzOfVCm%2FDaG0uCIzZFQbh4cZoE92m6BSMASTN%2BzYBzBT3FRuEx2al3W9waAyQo6xMWGDiSIl2%2F4HcWNzRZxVRjz%2BUI3TeXklryrWcpP6HuE%2FUku6b%2BnzLH4YLibQNpag76ywBZSfvgtBDW4onWOltpnWK2oBjrIqtdsogSQZILvpvqxD6FAn3L4JV6mgKIJSdTiMCA9WQE37tX7wBH5zR%2BfpMK3UyskGOqUBSgRO9Rc3nrLEYriOskrs93Xjpsd9iLHEZqQYzzrh2sQ8w%2BTxwBUMtLFVZOiwam9XpRnFgx%2F75gZqnrnL6Ug4%2BUpqgR8OtLNQO6xpk91XbicPhMGyJ8l0frpCHjZdp8dVxN9oPy3sd6I0EBBTlnLPmNLJjWMlrC3PBs3tBP749URImAARqJF5k%2FUKGDOOkjdq6OEo7j7xUORWPFooidilrbHzN4yA&X-Amz-Signature=d6c3f8fda24ac4772c21d070bd3ac64745a9132d7196933386ef32d6aa592c66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6TFNN3K%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T132626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCum6i1O5djoLQdGqVUQkdhZGmlEOL%2Bot6FX0UxqSKoywIhAJOvPzFPkwTzg2FTcHUsqrYCEn00G7MOn9a9dLkOH3TOKv8DCFsQABoMNjM3NDIzMTgzODA1Igz6CshQlTrSFtOndNkq3ANkB5EHiqLkD1usa53oI6w9HZD%2FG%2B4I1e8g0ZwcFF7zlk2XDxfB0TL0HI9b2E2YaWjLlBEvI6VACrjynrpxTmcq4UghkIzI9O%2FPsihfiDhND0lYqU9NNZHokyGE4pzELv7ly3F6K%2BGCcsugLKkeyV8A8jIlDB3k3wupbkVMbaJLkYzACfxe%2BFiWEuFLnLz4q7wT0%2FjbcqRTmG5rvBWSe1WrZ81ol2fk%2BToFrnpzND43A9qohD1FYnSqg0QXZjSnNNMrPC5wwLuG1W4UOH5kr75eEAI0Ui7ERfXSx9JoRgCa4L%2F4pNpeZEhFrCVpx704mXgWIgrFc76eGDuIvr306EMXVqyrUzKcwcJKnwjinFjg%2FQoq2MuPogsSnAH9a%2FHirExz3JnMPoRNtxIEqIMLzdH9w85mjpDy4H6l5Nkw5px9lOC92xF2ghhDSFVgF%2FX6FFKXEtw3XS1mkTtLg1KOfqHYEntcCSMH7jNZbcndYI%2FIJyb9EZbd03It01REtNjHmjxB5q597jwBD3%2BD9HQvfP%2B%2BtnTNd5faWNG4lCkA0h1jyXP9lG4%2FHHK2rEwHH5m9f4I2bf0Iv5YOecqIrl7CirqY7kbs9QDXF%2BWVlFK2vMT2vU4e3ywvgRy1EhacyTCEy8rJBjqkASAvEKElHSLEJvLn7vCVn8M8Mp2CebUbLf30wUrRjiPPbqK6PKPvMnOooVsVSsVBaNAHarsupVus6IqyOxQJvHkQYTQUrCeAhzgKsd9EeyBqqAht1Buq8DHEStYpHayOAqiEoH6KItz7s6MBowOf%2FIODprEtg0ycZR6OzLQ4Ckko8%2BnekWfO%2Fm8WJLiC4D0vfcMEouTXkVXDG5vfDj9yTw1sleUJ&X-Amz-Signature=f99bc5bcc393382371e3ce5ec0418e42c668212e9aad2dab4243216614073e7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

