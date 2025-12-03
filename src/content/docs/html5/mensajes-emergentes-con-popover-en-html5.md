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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466356XBFXQ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T231902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQDi9h5huJhvhkSrwzw%2Fuj9VSzci4RJVyObyP3vDkQQr3QIgZj2u20FYWXApRwhcHM5eThzfgSr7HAQL5owJ2NBqQMwq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDNhn6V6m03pJrWrmnyrcA30VfMndVfmwNhmkD151ytsj8KCpyU4BCdrP1jrmUqRh2l%2BjQAad8%2F8snp4N%2BEop9L3QhWVA7g1qnuryQzJZTqzettCw8vXnRACdjsprLZmvzjXkkE8HNTsJvCaKwYTOm2XvQebphRpcdScq%2BORI3ee7iGnSubXqiydzn5Nn25Dsf0rF8nnpA3uW3o2A8rO4eqzBZ6B8Shdk5EFKENovK6KWH1x%2FiTVBHOmUAhWdHIvoXudwlmN%2BzL7R618xpjHSSTlUxpSBQ3OAhuvuE2ISW306UjhLIQZZ%2BioxI1tBYTcZfhYR34U%2BDSnhz%2BmZS7AD1LgJDh%2BddBpqji3itZZf%2BY2YuNkA5G45%2FEB5cgWcwfWN%2BEzymCKMj4gnRxNJ%2Fpe3bMzQEPyUtyt1gFDpfHG5%2F9bRLcQX99hRswpEQna95SRzbGNd0nU%2FCfZDNQJbHoQZ26GoQRpEqeIMSCnI3jv0lszRU7WwZayzoqRvZVlOJMHs0exHGKy%2FFxmxlK62l935wICiZIadal9bUH69b5Yb%2FFUJvUf1F18pGOoWELFaIo9l5Ukgy3PMptltC97Kgmf5DPCVDYhVJ3N5RAEuts8LtXTtlmNn6FOaHcpZz8iJ6%2FQx2HBd2bGIlEGvZzZ0MNf4wskGOqUBLR5RNPW%2Fgyg0zhRnPPwF66mPzIblfs7wg8iqlaV6CLmejgZ0B6G5TCE43h81tkwPFYfRyJcoyd8qapdkHwnE2hb9Ktp8pg5dngjfEl0QOyW1us52mENXCRZXEsrkpK%2FmpNDeir5lmFwt9DqG68LAe1XvRTUtqZE4%2FhkFK9uoSxFhQezI4Xc%2FI82W0MbCh0fcIMkBOuY51EQUt%2BiBpVwZ53qeVsNG&X-Amz-Signature=d285570c0475c682de317ec102ffc88e36b21fe254b736c1e8c9f5e4b3854107&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXHI3O4D%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T231902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQDnHvRqgCk8Xr20OTVDG1ZM1c89AMfQmVvB3qCduePnJAIhAOhYv%2BOKk%2ByaNsyxXQAnOXQUKRZr%2FU2UCEZsVI1ML6UYKv8DCDgQABoMNjM3NDIzMTgzODA1Igx5%2F9B%2FxU70RemFHQsq3AP5FmOdgz26h8WRigaD0QeAFKrALbl7zp3%2BwyEzLoI5IKy0MkmNJfbBY1CEI6qYgepgvrI%2B5gKh6B%2BjAJfFK%2FnPzgWmTIXK1DpdiOI0stvbVRFad2bn2qX05FTP1u92s9GNte5Sl45XqCOcNy90PBc4BSajGf3%2BEcc5AdBbwN8gpTze5FlvWJkSK0eJ2%2B%2B1Ah7pRpJDsMn0qr4dGFoMQyCHxwBuxqFkQd%2BRe0zANKBKD1ypvGe8hOPUNbKg6lIxSQdG2bhg5OOUFF%2B5IFpL0JJa3TKD087XzWm%2B1SbpqcImaN1P4gPb3KHJhsHvGsEArzO1d4IPmaLCmAuxGFatJt%2Fbmbnt7nYBG8jMIwr9m3sJZcZqY%2B4zHE2cXWAaBWkDLOkIRJY8hrHDkSBaQRFx56Wjuvt0gV%2F1TAMnXBbk7g5Pp1iqfHr5XcVgiI0XgEZLGRK8vc%2FSDZ9WzFbCP6aVao1vO8NbcujzRMgBuIpxuSoSFLnSkoZMWVWLfDDvdZ7QrYv5W3TUTjcceK05LrGFNeSrbzFxYy6WI01pb16RPSu%2FTeXKoAfDIrhrYFNnlrT1B3Rw2xnc46CeG%2FBrfFJrNbqDh4fCW9tMsXH7lDH%2FkyStFVu0Ehf7ZR8%2FPAuyLTDG98LJBjqkAT8qAcnCHG1BrYaTTSeD0sIDlM0%2FlEWOLKVZf71XzGcwRWY7AXCOn%2BP2iYA3J%2B5m37oRAO%2FwPgvyPz9maegjQXXYiOM9YaEYwkndd%2BRVXMo9rPn1Y0ylGrCM7VRpIwvTlk%2BDyIUDHV3kG45zHsHFASoFPylR1CWRX0o0THkgphA1%2FLH26TYESa0ty0EOhQW%2Bj4CTyPKgmR3fz9CzpfQC1S2U6n4u&X-Amz-Signature=12ba54fcef39c6458564b2fa4fbe06ff690c3f219838c09ab5e8e1646dbcb674&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

