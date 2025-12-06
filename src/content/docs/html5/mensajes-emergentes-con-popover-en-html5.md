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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZP46HOK%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T103547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDUwevyDejX2nKM5RTTNVpFSVTJqaY5bRpvOl70w3m2BAiB%2FHAxfrkRcZeX6lpKgLyVtMX%2BC%2BB5vNFOYhTIijlSgXyr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIM0gLemHGGpsOQYwKUKtwDEGOJvV6HWF4sNjnpTc81uBqKctrQ%2Bbb9VFAi2QekqfAc6%2BlUBmZXtixqtBpqNTRODLeRF7fPduQ5alzLQdZt7zBBRO6McBoFRLBeIIVN%2F3yR3MVZEeoCVpNQifxef8laTSPwTsc1DoL29jMz9aOD8UXngnwvqYebakAl%2BF0jVw824YzKGbXXz%2FqYCpM31vU8Vrf%2B%2FaPzxzCYr6Nk906M5sqzMzVtzLOZGhMPrG8BtXurFc%2FznbK5jlTvf6ZegOVD8DkIfz3jeBHSyPf2sRdWgcgp6uWyWUnCjidI2XpBt3Ny182PPjre18phTBu3eXuW8xQwNNSDcD7dEdof4g4QiGQEsJiUuJlf6CGBAw39HLG9XA700VoC69Tv4XBZ4d15f%2B1ziFGZIjJXe0g3Z5pf1l%2FkRxQ3ufa%2BBVvx1wSXrxfLeQ%2FUp7CEfFa3obk5WmUd8gMYQjA7kdY3xqTVpeZ6a4aHwg7Zl8ByeG4a82BbUIkC0E7nQ7Inw2BfbSaMNVhYdocbauGQToYV%2BvVhSFiRHmmB2JWAH57a2hf0qCUnq637C4ZabN1IVlPOCc%2BmzqXWUG%2BLsjZoNB%2FL93SqRwTS7MUiSzV3hhp3Tw6nLx%2FXUlW9h6nqETT7AupWJqIwoonQyQY6pgFkVwRW6i3DnmwVUnAYu6U%2BqkY2WjjT47LMetXE1cR1I%2Fwd6kJrVmtVcU%2BOpHawOiS882F8R%2F%2FmPt7r4Tqps0I2GyB0%2Bb2qOqef5U7lNjW8gZlcaPEEV6UMtxaUZB6FZvBR%2FVDLzDa3qCSytqS6h5Fpf979rET%2F0QozmamMZXr8FY%2BWzWlBMY1aqv46CMwCutJjQ8ijIHxmBlbq%2FPMiN1Anj4YrZgU3&X-Amz-Signature=20fd26cb67483e1de765f666adc35d89a2a913f4f7e49559c9e4622d6ea08d63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXQ36U5Q%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T103547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE6HQpXapcp6H6wdY3fhCgZo8pwwN3TIeneJWKD29AOkAiAjiFjLjL1RHzglj55ZDxEaC8p4m42QCO7nUF8iWkgcTyr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIMeT3VfxozAwIbAE1DKtwDeWtSthVp%2BYpMNbcNbKwOgzYEIvYBZXUmlXi142AvH%2Bdsz2BCaTWNgFyvSMALq0lbF6up2aWBJSN83TuY4gVm7Ib58PszWwfkpn73CXfBeTVFPXSm4OwoPU94h8ERRLvd6p7NbD7mUJ2pf9QjbFm%2FCYhnqmhqs2Vj8bRfMBXs%2BRwa3mth3ufhvI9Dpbry7Nc%2FVmtnD142eyH6yAPA0JJSHw%2BLXTPGGRUCBT13oPwCVIoeRSZ4VYvtoR1YaOTekY%2FY1iWo2D2qmgjdn%2FzvzKx6ZDBAU5KujHhbWnJ56DaoiZgbnwJoB6BK2DpbtrwYFy4BJB00RHpupSZyqPIUrctVhk0YWNMQCDPlwMwc%2FsEV5EsFDZKE1MPZiCWpn8hsX0d2FT0b6zndMG0HR756Ft2NCIxr811dfG%2FKY2Z9B3b4KF5jfsnKmuK2PIaUp%2BullRNTTnAhNGh8UAXkyAACf0VRbEh1wj%2BChNiKgckxwSKoqWZbWrG7%2Fy5OuHlB55yUYLTKSenq4KjkcWYbq14w96dsOmC3ylPXa5ATMi83jzT9%2BTxc%2BSVldiLGRqlV8MuTO3dlwbMpY%2BISX%2BbR6RCrwQIsnxpyVKc12wZCnl7%2Fyf6zHWx50%2BFHSyFmMU72uH0wi4rQyQY6pgHrxf%2Fod5bOwxAMqvwEiT4lMypScwpgkJyiWUbd1Pn5BTFMvD4dYG%2FTqHvexRQcx%2F2YeCUdWqF0XQdLmiWl%2B6ab1HL7uDfP4dS07gMtFrnZ5Yt6Fr4aQITZWuBGSSw3bJXscI%2Fx7lqM2t%2Fj3gfprvDrBfkfYYBrv6RAj8EG6N5SPPRCsMj1GV0esLPy7r3J3%2BH7sAQUGwy86XuedVqOH0NoyA2zq9bl&X-Amz-Signature=47c2607251c06cde97ff1980e8ce41113e15f01fb5116fd0523e271c0c8e9dac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

