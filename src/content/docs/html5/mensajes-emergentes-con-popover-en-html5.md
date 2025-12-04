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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZDT3MZL%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T080652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQD052TAAcGpKARla8chZCagzuWrUxPj8gYIj91Ro%2BxGxgIhAIklvEhtVDDwil90V7XXTn8%2BPKsgBDKqc9frMPVSuFtBKv8DCEAQABoMNjM3NDIzMTgzODA1Igxf%2BM%2BxDOgEotWfJPYq3AO6lX8wUcAZ5tMrYzViSXvFtTR4Cah4giNF2Jb5Dmzyhgqu%2Bw5L3A1gJhVQlIdBdbs9Fs3wzZovyZ%2FmsoDCos%2F9Cs7PnfHEDE%2BWGvv%2FMZ8f%2BQQvuYZoK%2BYHX8JTyX629LYpLaa03rlTEUv8kHXBktLJl6JjnavMxiyjB9wHSvHN7dvxe3OlQPc3gdEWvbMVEEfUJxaCOGLTTQv4Np6RnXZvAqMx98TIa8qMTsxXiZQmVINlkLQN2jyeXcE5sTQ6ysPr90a%2FxH21VHiK4r7DcTybjpyece3UOyMhS%2Bsm9sqz2y999T6yeBivr2MEQKB%2BjY8KW2TeqywXkPFfyBGulrk5Xyt%2Fim0fFPGJ4yaaCcBoISH1vq84ylo2GlE82EbhpDhr83AzFb2kLB%2F1aQQ%2FtT55vS4j2eAdhPbvVuy7Q06M%2BYZc8vSScVJLL7ntw%2FbT0stuERk3J%2BljK9FNkrrbSQxVHprebal%2FDB4HjXa0YXqnGAYsPzS8rSnkRZ6FCKlbKS633GXQnZrrG0vnHbWQ7kuLSPnPzMQ%2FKzZdTyeu660SbgFs8pk4yRMUCGnBMFzFvzkF%2FOqEJEgPScKwxnqtqZD%2F1D7RQ1OWMKHCj2eeSpHJ30mgWhHd%2B8cBXJI%2BIjDH58TJBjqkAUjVIMN2piao3PSe1JXWaPd8dj2JbqkoBol3%2BtJfl4YRGseF79u1P1AiKUp4U5jVOpyX6H5Sa8YmD21NaVRZtENaZLgsYWjU5IKgMFKO%2BloeX6gC%2FZOm37dzLkM6Y6RvnxTHpeyTOkgun%2BgEgKKtk290Rr%2FxMGJvvRrHZ6AHBXR1vYChe7BtFKbJe1EFtfoF9TmGxjKx9wPo9Qx%2FASsKat9UYTM8&X-Amz-Signature=bfc3aec7384174025446753b1d3568c77dc9de2ffe76756451826ee8fadf6e89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZJKHI55%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T080651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQCPWB6t%2FAfhSIbl3RS%2BLmOscc4tgmpA8jeJs6izcycwDAIgAiI3SHkrcJXpLA4bXnF%2F%2Br%2ByYi4HVsb3B5%2FPJPACfd4q%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDFu4W7KmQ%2Ft3J0bxqircA9qd1De%2FyQtYp3KTPIZA0DQ8s1QoU7PKX%2B57f%2FZ8Nfo0%2FQCSkqCEOQWY3Ht%2Bj6eVYSw95ovCCAGWkfkXIqgXhb2BzilwIt%2BroSCMeUpEG1NFjS5j9%2FbFUWjATVoWmL82zav7OhVQ7SmUnq5%2F1Ic0FO5L87X%2FLJof85pYYNU7CM6U0XNzknc6fJNTMD2jTCPAZ4eWzu1TFLNwq1eOsFfbqa%2F2GY2beq5jl7Ppr%2BU5M74%2BTRKGtgBCjIRPMDaK5mqNk%2Ffi47u7b2kUglWLMnZ1mO0iv7wUsfAQU5QPI8U3xtY%2B8TAmzRfqbkpwqcZPwbLyePf4BhtJg0RRh%2FH8duQstyKHBpm5uiw%2BiF7k8GpE8sXzszr7rZJ9d8wNgRktKUe1aD%2BeagNJdmR9dteA12CFcMLjD8Hh2Ygn0%2BsP9qNLPZA9XSjF8uqJgaPywHbKu8fpCZbdmZq0mJgHsMAlQ3YdnTgHMGoOJ4B9Hamq5gpXU%2BN9LZXi0UjfkrFl8xBZr18Up75eFKljnW8MnDZhrEo0YGuR7%2FkBW45fMNBCIenS5fMf3m%2FkK21IiZiayBYomvYtrpEW2KpOSY3kiabhK8q1GOCM0SihpaHpU%2Faihp%2F%2F390o24rLNk1W48Q6BE2OMNbnxMkGOqUBBoPGBXPpSz8Dhb8C4Mg4dc3mYukVecGm2OKt02gi0NIXD6uRp2NknCqSNB1R1t6XUJEYjgzhKlw%2FGnkZzxd%2BL3IC6X6pkGRXM80CJxBmFPLh%2FOixod4y8ISkjzydK6ghsdO1uL%2Bqb5wkgdgE6nqgLbAKSvLKmo0UTqQZSUjL%2B1iH7a62bfiGu9XmnzNG6tAF%2BEusQxHgYIhdgpJRFO6PsBbAkJ5x&X-Amz-Signature=eac0620ae28c25d73f7d3b1ae2e0d94e97ed08bbdf25de026edf51dc8439fc32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

