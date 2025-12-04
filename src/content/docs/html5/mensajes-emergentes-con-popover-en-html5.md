---
title: Mensajes emergentes con popover en HTML5
description: "Uso del atributo popover para poder generar mensajes emergentes con popover en HTML5 en los que se pueda incluir cualquier contenido."
lastUpdated: 2024-01-30
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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JZLWJTR%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T053746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQCCGxy3uA76LRhsMFMXC9if6tg0RKNagbO0XAgb8lGE5wIhAJvny9xVmedcduK1lnlwAiFNaEPVshnNA3KLrliiZTf5Kv8DCD4QABoMNjM3NDIzMTgzODA1Igy8ZiXnykZ8ONYRsTQq3AOV1hsIoiVr662fXSCLY%2Fc1dhXGeYds7UXVkYb372CxdPnNwVNITxDQkZdo7pb1BIzT6O1dF%2BndQ%2BTI99L4PbT5nzQpM%2FNMusmo5X7bXW00BPhbN5VTI7ttDBg85DZS%2FOF9kPDUf1YnEYJvaHaKPnxfac00JSw5X1Q1v6EVTg6ZmzC82fHXR6chC5kENQy4dHxFk9zTPXNnhZmBhq74e0vjW0FFLHK6fVV6Owrc%2FyQOvLq1tf7AxnShvBtpVFJ1ntHilw5Uug26%2FINGT01%2FdXNCN%2BKDfcuYUTbK607HregZ4226j1rhANEEpCkR54DnqaLmJPtavJC3EhQqQYZYGRr7J62hM3iLskC7AUn3iLXjM0hZXz26J4JQFcVlQ%2B0jgdTNlG4YK5wOqo7zg3%2Bxhcg%2FgLmPOXqcVduDDZIo5nknltzGW1SoUW%2BgI4fDVOZx%2Bl%2F38rhgzaTyipyDxWaqcD2M7Rl72ESEmZW6c7JkPMpn5idltPdgdhkaA68JFzzgPzUv8mk1fCXgegMkl%2BcFdc4jFBG%2BtaVjP%2BV%2BZswlqNTrHPqdH9khGUju%2FQgfx0e116Ke6hAWzviOEoLFVMwX32ULqWTZr6H%2BYw5Cl9%2FWT%2Fo8LoQVcpLRHN0A%2FhviQTDarsTJBjqkAaHzpdpY2WyWd1xKMHnYm%2F5mELaeJQt8oXGfuhZHpKINLkCAeOA4Ok0YjwuY6NTCI79l0F7w7xUyLGVhtgEZkR9Xq6QcfYKxOwC%2BKFSHPBdVfnkZfCTL3SE6jYjYr6509wqvbPxwWqhKKLEt1B1N2QP%2BySVU6JLRtRikVzl0k6ldFEzlebFjQPgALS%2FcYdxIiZxL3UBIComO5Bbmysgj%2FZ%2BqrP9T&X-Amz-Signature=8c5c160032b67ca43f514e08fa67acf247bcdbd5aeeb361e71f69edf9bac2c5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UJR5SP7%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T053746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQDp%2FxNq2p7aMRZrvXY5S9nzzzMyn0bZk2RDcEBqleVjewIgHkYgX9U5Nlici%2FF%2FwD8SQoniuCFtCFu4R3PqZwUiL5Yq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDGIeqcgoYvPes7FJqyrcA0t2kiKiu%2FDKTb5lXOrlU2zvzs9jRQ7jRs6SDEiOMVM7w7%2B1Co2iz%2BH46chCoo8lTSZGlG6I9W4Qz5JFuZb%2BN3PxZ%2FerI%2BZw5srBPsHAEKt1PTFWjK6LBiD1AceJpVf9CQsRyO4CvuRtUAumN6OQw%2BRJZabUKXhZ%2BdvwJUxZmkO8AhXcX3%2BK%2BnT2b6WAolSy1gislB3ezna7YAG%2FDJExqbZZWaAkTNXYbkSQx0bCN73b5iBzqs24mq%2BVs8tZ15t5z1hPstGzH11bEnYflIS9pzLooHBbwzDzZGOAJUltlclbyG%2BxqJA11JTzR21q%2FcXsHYLoCNrMoWYTD%2BPV1oiww3D1%2Bqs%2Bg4ZGO1%2B8VmqubQ7Bo4gsK5dyrPeTU4MXtI%2F3Qr2A%2Bz9i7Q6aItiXjKRGby%2BdtX4CXUG35SP1dUxONi1oqFJqSnlzCEz2YCef4RkuaMpaL%2BdevahsuJwVwzI3oFYSoPPkHgRAjOlNh8BXGKrEaQaPEPpiA1hExqDDBMg8XXKL2C0VoY9WbBE58oq5AhkD9MbLg%2B7ytZ65pMXs6OkcqB5WlY68nbQUG7ByM2HdIxOSDHS%2F4Obss7yD07IlFKiYv%2B6lej3r8NuxmNaxlKo7HcFd%2BwTLj9ZGmGsgMK2uxMkGOqUB9ptKIUmv4fSSkC%2FhcToUqdyyQfa3%2FyF3tvpRKxi%2BnfwcZ8EEKkK9%2BnmEZ%2FyLZ4hk06ppL6QwQQLchK2urozUY4EiGHhxEFeqqRFWwQ%2FheuA8Oa09RRiJxMkfpMT%2FLiCf5bw%2FlCBEk80n0DbrWwKLTdWp92fccDxWJdvxK1fLD6FHSW1wg2ZHf0BOUJ4F%2FwU6DAeih5PKpVNjH8%2F5g9%2FG0qxZ5nJ8&X-Amz-Signature=fd047a61a62ab89e48f399e638b7fa081eebe0bdcd6383daad2c395001626c19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

