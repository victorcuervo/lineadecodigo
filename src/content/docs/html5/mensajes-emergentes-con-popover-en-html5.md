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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JTTVOKS%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T202658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDNvOFifNfQkEbwMIWFOBV0RaPUyvWk46neF4El2WR2aAIgI0WY2ma6KNkIbXPCDWIk6lJElM8EEpw7AD7%2BQ%2F8NcBsqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAcmJOp6v85ayc4CbCrcA2tdTegHF2mm%2BO4g58lr8lh0J8pdzlLfcvuUTLMse3SjA8BgclXjThU5W8BJc4IoQu8vJYTXcea7210GuAZwghh3LrGcX%2BfAbQdKFTqaLV%2B82pB9aU6D1FsMsmp0rpIMYXSBhZr5Q1GzJuFoGN2iYdNwNLY6i8DF0SPupPG1QCmEjC5tT1Llbe67QEZ4DGIO5D8iqDEWQD10LljhD7BHrFF84NfqC3Bq0b8vyNDoYNQk379egfnNHKLrXqlkWZK3yjE6y%2FCkLVEau7bkZGPnibxRviFL5Ko8CUEPO%2F2S7UU6Z51rO%2By50LMi9nKzHRLGi2B%2Fi3bFxtbB0R%2Blkn6D8DV9lfkSc2nCPGPvxSVFfvwxKB3TBzo9ALrr%2FIM5Y2NaFnQdOYCwcFsau6XTEI78oqgFWMoKmRh70cvdPu0HObnwphILFvYRXLVlKUTqHmYSOROSbBxgpUGO55aGmEDSbyuf1%2F%2F8PvVHkQZryafvxRnmJpjL5H90Huj4B69HWy1gRjKFUCjTBvW%2FNc%2FFJQsVE48lcgj%2BXcqI3cWYh9jnXgCn2B7ihfafriJqDsWefov0DvNTYLl9TZgA95XK4CuCXHcY64ZFj26iGNhOuVUgh6WpiQ8%2BHWfz1dqIeMbiMIvd3MkGOqUBeioV%2F%2FdvyZHAAjjb71%2BRPyx1lEVT65nwliAqX3wYsOOakMQlSnmsW5GSfIX39Aq5Zl4BqR3g4EU%2B80IIHReQB0c%2BAm8dg08INn6BL74WzB8nGucjAVUbpkJtuLQ3wW28KY7QS0%2FRHnbIegxbxvojNwXCROYks9LSTbw%2FLGWoXvgwVyDRdeT1%2Ba%2FU%2FvIfJIWhO8VYaM8CAakp4oyhtxAxOsgx7Kfk&X-Amz-Signature=8f6aa99d05de356b4ac00d2db02473a62825f1257d581456b1a92a83bf0ab49d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WM4RUH2X%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T202654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAyL%2BmBcNkxIm95H4Vx0iu73WlqACSLR3NNfNiO0YploAiEAkQ56vBU%2FTXqGkKheQs7fIRJ2xfHHhSxqQlwI23jTrwgqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOnuO2q8u%2BIUYjgQkircA1IBCMMQWqaKX2cZEfRZ0qzHqJQ%2BPYKkUTpfiQ9fy9qgFMQXXED38UMJAgqi7dn5bro1E1TeP%2BwwE%2BGsiKTfHvb3mQlvWebb1SjUDNJqY6TjTHb%2FIUEM8zBPcscqXERjOVQmyDzWwkR1dMucSBxQA%2FnsuiiP22C0tHGOwEr706qUjLjbNfdYpWHD01oo342oN1Koao%2Be3956F26YdF4PoOwnS6NN8ie4i89m5jd9B8myH691dKDYNXX5Gv1NCjQCd6uq9p7PUQ0tLUB6a%2Blv2JFqD6QXNJZWAHYNYp%2B7uJ8OKbQPRHwrN96Xv4q2nmWtAwQkrH1qZqVTzZqj1yQG30x9siHz1tg%2FMYQWQ3S6FmFt%2BIPAJYBfZjcAwh%2F1%2BNOeI5p5N7u7mFdpK9QsVUOIiLPTnsgzokJa1CseF5L9yK7uzo%2BYLYVH8Khydi5X8%2FKs6Xy1Ux4TIk1W2nk6EBzvzdDwVrEESGZBOWeKC8Fw%2FTaT%2FcCViKQGrnCxZKvv1tncQ6hqRnPCkQhipoIyZ%2B1KCYLwxSVIrAbz1rcBXy8aQ0HmtvuOgEVALD3YkE8drJOH%2FlQlKEbaWeapv4U%2BSpZ96sUB9oQWWzUF%2Bvh%2BIwbsXdw51v3f4LtTHcq48MW9MKvd3MkGOqUBtUWY5aC%2FSDlMGAj1AfnRime2FUk1dXyNQzm04i1n5Uh136aH8tQHVdCXxCbeepf4qOn%2Fr5DUof8wWZiYfiGClmFp4SUi5IF6FURwmdayQ3mDkAeSmqPap3piKkZY6GjNiab1z8J0O91rYzThXccgady%2BaTIFjozLKkN8JcOcULPbqU0IKbT8ltKhvTo8vBfkKoK9nHlLOkEUKJiciKplSlnaqHA0&X-Amz-Signature=d530a2187784aaa3d3cdb8d5fe61a198d5beb5ee07e1790a9e1f472b764f173a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

