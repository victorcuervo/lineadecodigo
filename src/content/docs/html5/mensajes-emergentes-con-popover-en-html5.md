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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEOJHRZL%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T053641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH08p9CLdD0JLInDoiFS94Q%2FGUBQqwW%2FHdsgzeXZZs2bAiAQLRyk5AYLU5IHZuwFbDz%2BAll9YqdFlAFkI5rljNbCkir%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMC7PdyIWBZoBFP89wKtwDHy%2F1OOWUkI6Ba2aIywM7GB0crtvzklvVsY9jjuTOgoeFBFkqFnNHFAqQO4ta5UBwpkmjsMqJ1RMFD1pBz9%2F5zwGClk2DbJl3v7AJaCTmASMaEQqwzaDDW2qEF6Wtc8xDNlPXTPIZSKYjlgsxQ5IqU6DMmWm6qkbMhQAP01K2mtvqVg%2F7Y5mLM4%2FfkEoC2Rl1UqDV72Dd1L4k5KesPAUCjg8ytdHu%2F4blV4FTqDJ45A4K3mxnOIyjshpEPOcDzlyj1%2BAcWRBpOkn9A7czH7VLFR57CYlVxmknmW298M36C%2BCxP7EooQExky4g1zZykJF6MhC6AF2%2F0Vm%2FrsLLWpCVS1FAcBfCqZ6kgq9Ad48q4Aft263h2GmMhvKnB%2BV8DzINH5A7Xo9zbLT9jF1t8aUHbGk7sFr99OMN3Jv9PhZ61PR%2F6CVEZ2ankq%2FnpqcI8c26WgUsRKeUkxcZyUu6gpb9ov3MdPIziNShijiRv67WfIh6Re%2Btsox6LZQtTeH0q%2BDL%2BAVVrqAcC%2BRRTtCuYVA9xF%2BpJsz1sBTfVjxkh8lJcSTprxj0LFrDTO3Fa1L5RAm4uMkHnLe7HurP%2B0JkhI0ReuF%2FKsUdASxeM4jkOpQm%2FvBLaLNcjQqvPwQeeb8wm6zJyQY6pgGsljJ6WEscLwGR2lCtRn1%2FhpmU9zEQ5ZuOLCFvwDf1zBrb60JVCybVkjvFKaTQMv6JI4CwJfJlj3%2FpUcpB8TdrpJNZwSEeQtDQ3WC60o6pqcN2AK3%2FCH%2Bk7L9RapKivLPH75LN9hxaE2CGIkvPsBXOTUaG6mddPRBnTYeTdSEsCdPNB3idWn62pfHb4yp3eiPLP4Y3qZJ3gYe2cH3oQUBwrY30viKF&X-Amz-Signature=0237a927625bd6ac2bb3caec81af2f286372f57ef52d1cd65307ca8b2af7ff99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NOCT6CW%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T053641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2fCoze0UGG4mr8p9sMfD%2Fji1LnMlWpX2i6aI46rZNvgIhAOF6gy4kozTf%2F1rEDZz4xhS3EOB%2FUao8N0LqlJNB9dXhKv8DCFUQABoMNjM3NDIzMTgzODA1IgyoH4ifZ%2FZcYlCjuIAq3ANpL9DFs%2BkVzDtR6HBNhJy%2BJzHDJeoPWdAhGl1eFza3%2BZ0YhejniHtVQi2CSbc1ZD5LQxXXYYfeJt2o9w%2BgiTB%2BAAY9VkZNYnJNuoaCTh4EkPaPS8NNEtL2T5CXBnlqyr%2BAZ3w34gr38NxVJRx0Yhu2shrF%2B9j77co9E%2BDEDMeNB5dhHlLQYnqUx3FdClrIR%2B%2FBFub%2BgI4QXQd59uHIYTxiDL8AvcKZbDjGqS0h4q6n0oVFPWJ8MnqYKN8rACumoBfSXCxXE4OvLmA4jSCdn%2B0cKoIVWn%2F6Z92TlRG7wGV5GKSVYBsvveaSGAA%2FVj8cQE%2FokHhVBxSEcDqVckD3q71nv5%2BwBLXCYJQqw7g2%2FuY0aZCSVPYSyk%2BZIm6bSitnLei7MbOFPHtlHv9MxWC8AhGPwjQm%2BgrY8naz5tBafVU2pWLjsaWyE4Z%2FBxzrsNzm90JoXaafy3swQl2nG4apwE0xAADq0bC1A1j0BTzSCKmQlB%2F6erFRaAMBPgk%2BUhGTB05wP2iw%2B0v4AvvaKB7mV%2FdNDtInBdkAB2w8f4%2FdVaBT50g3YEXGnu82uMxNKq3hyflBjeEp%2BXyLpGlECE9uToq9nW6%2FN7Qc77rYsTA4w3bjCEd3x7yx6WR0u%2F5zvDD7sMnJBjqkAZRjPfHlPIW1z4Zoq4bvfbHgm1u95FhL2f%2BOg6GlcPasOJmYtbUervFOEg07OI3JmmZyMRVszsYqZUDu%2B820mzruTP0pCcZX4%2FuLtV6%2FO6hIgiKdttUkFFE2goCVfU9R5eNXyOKCkPvMUkIcRbsD%2FN5d0vO5U9abVqTBQpwpgPTKmoTtILfhfzQTGxGycVfEWKRkXuxwJGKGlkvzp4GN%2FtUvOm4F&X-Amz-Signature=aeef6a3d8e0a39ef90ed121942b95a4784cb0e0d5b254047448601276bb38c94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

