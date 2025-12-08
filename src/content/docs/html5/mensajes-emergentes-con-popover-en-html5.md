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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SD2UW74G%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T024628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvX2C3uLudyDOMYJpR4zMRpuxLvrVKq%2BGx2b8v4LtgeQIgIgCTH3Jeq7k04cEs3ZMXtRHolN8AZHXtaYdLb7RReEAqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLeuIOXxhhp6O9hsTyrcA%2Fa5kq6CwVY7gwqSG7Td%2F%2FeewkMxcWZxCidZOkr2q2GwCjnziWrbkfpjKdIxXovpBbFrgG%2FQxYiyfhvKttXOV%2Bl2TlIenNeTHkhWcH4P8QYKDWB9x6IVzMdLCQy4GHsRlpnkrd9lOzOwodx%2BI9CkC08ic93M1NZz%2Bflwyik%2BH%2Fc7qAUIlEg7H8Q1zw2BOR3sJe96F%2FrTb2hK9zOMgGfXOxHdsLWzekWwNLF%2FJmqh7gj4k67uVjQRwa1gTPjGWcY2qYZCLBV0bujaQlVnf2tj1BeXM9YifyzGl6JRCXuEhwlxe8w%2BNgU9EQ%2FOq7lQ61DOmm4PQo765voJ3kI3s2dE0kta9TUPLOXLZG3Jwk0p%2FbARwTEKsIM5KlYCalHWH3zWJ3QyTYDsd%2B76PDgPzGA%2Fo2eUf%2B0LxuIgzT6v%2BifB0416CuGbPqH1Mr6kuVBLaZDjL%2BoopUGSr%2Fu3w5idEmFj3uq8u%2FNCTR42bTkFWwwcLNDy3RH4xBeexRD9umvvGHKAFSiRX167HqWSMnJZneZiXAIR%2BpS%2BjNZ78Wqeu3bSYu0GUhbw6vOEUn8H0YZwIOE47VSmWdigGXvcY86YAXdXFQ1OFVsIR0xPgZTfLA4mZbq308Z8Dk60%2F6OOo2spMIfv2MkGOqUBCLxanqK6sMBQZHVheR7%2FQgeQwme834BcnGluQOqu0zTZasGhe%2BolGXUWdTTVgAp1UnOZFkeVpUmdgjVDD%2Fh7ZXbtLmBeQcSwGaE2amjLG92ft%2BcBt4Yn%2Fkz3c5WIVeMHBic6CpmiNRELJefompp%2FhhU%2BR2XcwsjTd%2Fm2QiPdEJ1kYdV%2BeU%2BoWKut6QlSNl19HxXwW4uG8Fnn2h2QkLawqTN2S1QO&X-Amz-Signature=f77fe213276024633143b9a110848d617c8190fb1eb35fb49d009bd4f99ff2c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665X7NXC4R%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T024628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbIBpnko4bfPnJQdVc4KlcaXE7S7HHJ0gOFzeWztfVPwIgJrwCJOfr4%2BQtiAbARD4XwYXuN2eQ6TDCIk2QflqhueIqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKMxnrVHE5BTReuIUyrcA%2FpIveP%2FLn3upy2QJCVeOBSjdAKML7V%2FX%2FyTbtkdJOIDTWQn3WHh5nDSke2gJP3ww2qLBBzBVYPVhAiI1rbaZCIK0%2F1XwU5lbSr2lPWxX%2FBzP8XJGvTWj6I2dvQfjnIX7jANMat9wxUv3BvXtj0fR0sunbs9hOGthNulN0CeODVCTVBUMh9CItPl%2F3Yk%2BPSig7CZWyF5rHvTZtqjvNH58I5VpQLOBsT5OaABF%2FapKISf9zAZv1QVU3m7RmXK1IlRKm2H%2Fwy1c2L324DpZVn8fOjgsZJfrynE4LJZ4uEGSXs%2FqRdvHJkzD%2FMHbJrddY%2B%2BYdskLUvMzzx2NmJUO5I4Jny4SVPnvCI%2BHVa9rO%2FGZkBhEb%2Bfzuovt%2F3pnwlajovOncFX7lV6GiND5ZuMglKd3MnTgR%2FTbJEzppBwysAx1WpxjuXpiCd3K8iZg%2B7XOL14PRbVpw8a9NQ%2FSKVOFB58ZzCHEnF0M4xGqVA522bz0Wlwjcxu8nqI1PLdPUvqPLGlfxNE4hcvwfq92uK9j2D49E4got3uG93bSOvwsifdnJSfli8ERMjF5wqRSkiWYThQJXSFh%2FP3%2FgvmZ2UEYxmnylr1vDrWawrMsQimWopHbQwN3hdxstAs2BkD7decMJ3u2MkGOqUBT6vqlxxAqR4LbL2LsF9goPcQT1rehyAx6QXG%2Bj434uz5lUGv3jUvY9tBQHbQu4rwcOPY6331pTyrUK76K1reU7uGLAYwTyVkrRNG7PswQanRkEjo60mP%2FukWPzl0OZbg2VZXc97DHs4Ma1g%2FIvkxwW%2Biigux%2FUyCQyQudcQaOADQ4WrYep6BjoEV9DO4QOSwP3KflBbvRYxCjyijlU4pofYWtRxF&X-Amz-Signature=1ddb00b462e221a744395aa456ebe391991c08b7b7781d7abb3f1a6f2b0fa121&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

