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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EF4B2FU%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T035917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICeA81f0Iy%2FCjq310ePK30ap0SR3qvwwtT3YQVZx%2BZy5AiAjJcr415y996hjx4vUacDVfAxouLiCEQDVQVvnRMthRSr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMrkR1jl9mRBl%2BoS%2FxKtwDg%2BySySLfsbsaL7OrdNAAC03l5ySR88Ld6rQMm%2Fyl6YMiR%2FJjsF%2F3P4EukYXh%2BFAqnDiskImTaohVqe2XapAxtyHFzADIlKt2p9zN5leEyxCYU%2Fc1CiGi5WRS3h8vxHhydHZPbYJFJ33HWREwasD2fFbrKof9y5eIAGP2nZ63uuJRkYpyRUJAx6Rw8dcxJnTFe1QsnxQ%2Fuuz6vV7Kd2hv7rCin9IzCulutZnUxwBP67VRENaP97NObOBZXgdyBKaaueOai%2Bi38cmDhLNqI62iL8zEHz7QalcZUky%2FTYydSlbiGoTIFFepEB3GbOGcGSb6XWLwBAYgSoom5bfYu5TJdUv6SrkL08uG4uvm7bwSGxsHY4%2BnEBmaGQfkv15S%2BltsYbV%2B75Ai%2Fv88O8tKYhc0q8zULG%2BBstzEJaOaZXBSvNmSCsPrU869%2BOiIiltOD5PjUl0AHlxNSBciG8s26LToTYX6nMRp%2B7Zp5NoR8nU6FwiR7OaPyit0i%2F021atnqsqGVjFYczB9EvMYo1eyCBf%2BvrgsqnclaqQFSxR871pma1%2BndeDQauBtQ2mYDy4Ek1krwmWG%2FmeWelzcwn%2B%2Fy4U%2FXpEQy4dsAwY%2FpDh5iTNsiEGZMBkxxtiocK3pfCow7cPOyQY6pgF6UlBrbd5W33AQn19KcVnmt3dFRicpty65BSHoXnequldP4Hz31gHspaF8WVwnzuh8lIP3e0xwBhKUXqng01BsbpoXYQrm%2F8r0QFo0rrGZesnFa0rccqvZH3h4psoLvkjiZ9TWZTIfMK6CsIcZidIhD0YzZVEpHc%2FNqh%2FEuI3hkwVgG8WwjFxiuu2rdd%2FpS136JE806fPbhFPE0P4m%2FA%2BBMWP08skG&X-Amz-Signature=3cf569ccc66a0bc720dcd26a4c083bcf0826d023ec420624d4c0c8bca0433775&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UVOVGMC%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T035916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEtzhds3Xrt9tmATj9Pf4uCO%2FFCZIj2J9UtDk%2BbwZkibAiA3Ji71JkCwr8p4QsVPzJ9fyFgC%2Bq7nonwZjLfv%2BpAhYyr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMl%2FmVQvp34azClgQHKtwDH2ORAabh3VcXiNqOL4IrwbC3Uu315dMoZDA6qI0OKv3NI9urAKkBPmqKQsRE0Ve6IJl0y%2BwMAa5416Bmt%2BWT2OVxtCqgo3sACnzyj%2F%2FYlU3QisOeuGemxS7TzbaYSueEuRG1qja8hOIL%2FghMbe48Yv8dryYAh%2BDcTYUGwZJfWxBir1k3Tu2mTs0NCfu11aZUIO9R%2Bf1s19cBWotZ7GeUDgJkv7RHucj%2BENa5piDb%2FA%2FVgU%2B0nwDupArOXAaDiY0tyeNDWbgrsZagxr%2Bv%2FEE4SLbAdDtOxUUlgVr877EHBgdkyd88UyRmQaBsMZWy9x9N%2B1i2p2wBS0g0J4aF7kS3q8oAoYMmpSoUlojYsS8B67IyKHw0Y13vKwS0kdDJ0U%2B4pKl3sVzAV0foRKN0ucKfXv3Vld6S7gh2%2BlwFGzFQ3YRxIIWVSVm%2FtwU2DF%2FlavEnPbtPz2VOc0yzoKlragoZxPOEzKwyB2QJbm225rLaZqQ8Y0l0n7jPdI8Jo1AyCt8uv%2BCSjaG%2Fs92zLmIkeDd3w53AwwQtIGxWcRZakKRSDQkN4C2v7hl9AqxLE2AB5tUJ1ZWRVoEkwLlK4HgLDtQ69AEj%2BcoVkqHnmzBiGuNXy4dWVAIqbMZzRDtIt1wwncPOyQY6pgG%2BDVhGIWwKcq7Whjr01rQsBdOsD2YHOoNIji8th4kukh9XLowB%2Fa01NwqUjRW5HUM29Z8L%2F1QAfQhrDzm6deblDtEKZSI8d3Dv%2BtOhUZ7QtQpQaGIqK9Qrk1qCgbnUKJ62bikeVaMn0iG0Wr3Spo%2B%2BA43k54tAwc4kTfUV%2FWV4QfS4txoL02kXQ0EcJLSaaW%2BoJ510gH4PLm2Lk%2FkBQGOZAmZvBDk8&X-Amz-Signature=e6e7903f00c4fa74f62096c567794467e8f2719009396d7f20ec31dc8b30f09d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

