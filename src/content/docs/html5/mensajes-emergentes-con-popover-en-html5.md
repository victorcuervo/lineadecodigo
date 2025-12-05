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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVO3FZIR%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T130342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD2lefUSq04U05mgXLKFhMfbKnw%2FhxMr0CEsSI9VLzaiQIhAM9G%2BC40yhMpdqsYP7NqkPJsmANFV4%2FzwVXxKFiGqZdTKv8DCFsQABoMNjM3NDIzMTgzODA1IgzhVpcivAtdZ2PK5kcq3APhwZDCxnaO2F%2FS%2B%2F9j3HIsfud8zByZEpjTH3euO2Wwl0FQgf4wNfnZesEcSG%2Fah5Z78IeDu2PCGRuYoXJURzGJ4TCE6uHolWs%2B0NM%2BtuKVC9bKfHlO2Fh5SM7iiGSTeKK6yMRyoQisBkRaZXPYt53T2%2BWgmcMUfgNPY3xvR%2F7dmSLENvB66qcTKILz%2Fy%2F1vqzMeK0l%2F2CF%2BQskN4L28CiZxzOJQFg%2FyaqNbGpnhOB2D%2BFreBQBUp5tRrws81y8qofiBmpgzt5QqdQfYfNJJI4vO5oBFtZHWax07W38Cekcl5pQeHtnvDusUoow1nMppAbCMH%2F52p9en9j%2BJkCiSSbscyvYB2QniuKtN8T7N%2FQu%2BPCDBPsPny%2FTWzcky7yT4sSDw0pxv%2BlbM0NN0U4PAt%2BJJpxP3RB3bk9D8yZ2XUBwLZ%2BwkMjqZV3pcBkkV%2BqMZof3wWaamYSVJTqir8fnU4sxu3mCP0XktIzAsoKDfX%2FGfAcipYH%2F4LuDi0ObYj6OX2lNTEwIkuaDsRCqUtEVoB010fFxdSjQ2x6YGk8fUs%2BOpAVJcv%2FAJhChMLniTbzTz%2B7CDlIFoOMZNKfvkYwCCW%2BM5oTnUpAT0G7HLa4TtcGK%2B2VbRk3Lu%2FUdczH0jDCx0MrJBjqkAbBRdpBGkQNivPHyUEAWZg841Ddp30MYgXHpDaVO1prpB0uI2R%2Baeg%2BE%2FWOibl1bZFh3SiTIdqvlv4pxBSmNfjHtS139otBnP0Cq2QYqiXkpZ%2F0dSV6%2BC5Vm8cz%2BDiIHIQL2MZKeQIo3PGTzOYG5R3Lx6FRK5LcdD0j%2Bu5BxL8LTkjoqWpSsWfWzPehrnEg4YfByiY1kNQ%2FoGebfjQDCmJHS80PG&X-Amz-Signature=852e8b239bbb477cb77482fdfe93f6571612330b6854752cc4f8f5488e19c3c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFQ7ZB5N%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T130342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHUomzhGxtuHlwowLlSmm80i1ZNuFDdWusPP5S4XhAmXAiA6USx6FdtmzQVQBl9LJ4CKKb8YGJyfSoNXn5FI3%2FpZtyr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMqrgOFQDi4dZ82%2BqRKtwDByxQRFJJUuiZss4i4CH42eN%2FtSjGK6ojD8l%2BTfo2u3hrdwfkEDQK90%2FYITkIvn%2FwkJRxOfwHanWDFvCewsOPLHPS6ofvkFHN%2FMVJaoeS%2F9dmuR5k%2BUfBfWMfTA6WMz9NxRn1NPVhNM00itTkkmWUMw9Yhh0W8Cj%2FrOAHdN3rCH5uXSkIx5aeY8x8csMh8sI17VWnFxIXYYS1KXvR3f3%2FFdjVZ8Mbdmp9QGMQn2aUsVXmKpFKLub%2B7eXJJvvtUoVcDADjWZy3iHBXymZlwCWDmK7ovQ7XIY6bO%2FT3ZRA9ebLwqoxjV7bWlJ65kVTFxsQCxCi6p9i1zUc8zqjwMqNvNPBLmO5GmkWPYmfbqIowNJ%2Bm%2FW%2BtNXc%2FLAk8R1NoJ3RBwry7Zi%2BWYIIBWsMAXbaC9k73H646pSE1aeAVNYjnBvyAhxtLK%2FJnKzvXBxCaccGPmOudWj3sW6dD5Okyts0vrkFpwwRpFPSMT4F%2FufPixja1xCWzbhQUOAcZxEIsMHbmszIPz7B34kR7RxA8f5tEez2V6cku259IxQBBLq%2BSMw%2BkC1ETNcn0fvszsNpBIrkEa2jN0i4aZEKNLsIRbLRavlv10RVH3Kiv%2FOzs84c6Gaj5kZdw9xKoiQ6tUpwwvcbKyQY6pgFeiWsnqvmtQLYtyzawFVQoQVrzW%2F%2BlCkVGxNKuUzOT8A5Qv8WrbndQcQpFViy9pnR4%2F8HCG0KpHiTrye%2F9Ih2V6kkvno1CMj8zFCvMws97J8TkRQqKz%2FOlCCXIN4Bw0ngRBVGmFZUWfyPbET%2FtMWLYiG33W7t77D8kJvyl574c2efmEU9vTi4DkxZ6YS8HR42QAwnLZ07mbKjpN1rH9ZsqTCeTeGGA&X-Amz-Signature=3f2646b0477462410dc16514749f7b5994a42bbd4844ec2732456b2ba68c9f7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

