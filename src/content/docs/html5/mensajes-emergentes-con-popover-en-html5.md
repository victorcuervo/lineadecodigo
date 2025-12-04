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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIYZ7QID%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T015700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIB2yk9CEi17ziA91wBzeE1bCJuiPI99LEzvvw6yOEAYDAiEAlQhxEvvLwTvY6M%2FTID1LZ8bD3HAlWfSpHSz%2BG22sjvQq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDLTm0wfNc2pN%2BBURvyrcA2Fk%2BjL7DfPenmhBoeEcHxouGko2iLjTHkTiasjn%2FKKWHIUQQa2BqDBAQHgDUHVQyUFNAYrL79T9L8dsZJYD6tWJaKDFqV8WkjycHjcRRXvLOTlQC6DttbrJijWw86tHHiLq2gC7N%2BZ2%2FPixWQhcPuQ7Wl1TdLXUmEcBmWrFq4ZFpWmITFf8JMpAU7Wz6QgdImbZxUZwMWotBICz3wG1dgDJnl7MrsBWFO33iNsth8mWu61AiCt8Q7QA322W1FaFNI9hhaAauUHgPCB8lD05cSTY4Al7o13Dmr5Gtun3wmM8zqVa3mcq6JsbCwWE2lRWjAD3RgIUlqHW4aJq0OAN00IU4LskehmJLuPsC0MO7LSjTxapnpTl%2BV8NpUItT8GD1%2F1ItLdhGW6DOy5g%2BeiTF1yMKT47geCrhdxdRviOXA%2BnbVWGLQ5mADEbzDeM2B35EHSFzp9TWDSpkMS8%2BNme5PlGbQoAJ2spAa7Czc7EHcKMMUWAIA4xvCkU05npub3yMX1cIeMXaea%2FGK0Tom3Ymt4vlO6biOZq6MWRhGmmmwkgf5Ydpu1zsMPVR8kCfMOtbzU%2FJB2dYeJxUaNW1%2Btp1bxfslp7%2FNTDeNMBeQwgbC8vJ5uUHk5gqZLEHSRYMKG1w8kGOqUB1i247QiEdvPJhj4Xcu%2F7A2WKyFgjF1q96L3rL2W0Y7WUlMZJiUq8Q2EZiwBvDKHgcVpCeeyQ6r2AT6Uf%2BB6GiR0OnZ65YYkyPf01AEU1ISJpxAUEEIyuYWFy2PaZ5P0WdkeGyqFF9hBcNzPwGjqjOD1RNvsfPynGHc6FwJ%2BSCwMqAU1iG%2BOF3IKjWnttFeISPHbVFrivQX5ZyRhHsokrLNzfzdtI&X-Amz-Signature=4ce16f571345c638fec9aa8920122c3a150f7cdd56a93756c9350b78dd38e043&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYITNF7V%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T015700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIFUVqirqDQbV9SPuxzRg04EHp5l9jYKWj7%2B77LYcnV0NAiEAxtrcAGvctNH96UMXOf8d%2BjeO3TGe90vp1BlISLx49hwq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDEluJDCdxwrWQ01fWCrcA0Uw9BOx5gyRPSbj6OMgCQn5C0iB%2F8%2FD%2FKnPYHDtzxFJlG73Ci59wCcWOQgfTK03bpae94ssNVSa1AqCy%2BDk%2F2zwnmwRo%2BHZYMilRCK9aShzORDXj46y4mn8Vp1mi7kAajUoqrCR4DR5IQ9uLtqsOu%2Fw%2B2bJWhcz%2FXy4J0Aa19gnmL0GDfGL19O0Gwi0zHWiPac0wu%2Brb6bZJ7wsEuSuOM4nLD7yzQuE9lqsEdEdGE5hj4jqlEH%2Bu%2Fu7FpgkYbBlTfHq9zl%2Fc6LwcQ%2FHI8X6y1i8U7NBt1rLJGJIw2uwOpUPOqsJ00i9dpHOHTN5yg5U1K%2FE05hcn2IOebcXjZzL7jRnOF7XyygBtUbrjRS7JTNqRiIQ5Z0A%2FyZERrcJXEenVpV4Q0A%2FiwtsCmNTFdax2ENiATnIEE0JiHFd5HvJyeLTycbdAasLBNdKGdJivUyEIQt72LU%2FmTvoXRdGyS58SFAFlsQxWql2nNxMeMolhIVXDDZtiv4GqxRXIb062joZn9VUZ9EK2gzBuLcBJoFlcg8QavePUM%2Fv49kh%2B3HN7IL70VOnoJpjCclSKr8WYsr0zMn%2Bvi14goRt3iqky9Qq9juRKTGDkyDObVom4TnwZ4Q7VovtwXbd0O6BVKFEMIa1w8kGOqUBP7iuzJapt7YsTxnZtzrv7G8xVy8EwRGmxybc1pe8f8nzU3wNvq%2FMcdNjsx2Hh2o8UyAiS%2FA7z9srbpnEKYN%2Fb5ky96VeK%2FjeMqB3FY3OvCd8wISLPOza3QIj2a3GaqltZvV9B%2FFnZBdR8f5GL9afNHh6rnBkIa71rVnNKqD2kzMHaXmtLYmKpUcXIdiPvwqAb3Wesno2WmfZc%2BYFqhBatEF9ydRX&X-Amz-Signature=770edba458c6e7320668e45ac57225431509ded8d6da922d75f812de16570846&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

