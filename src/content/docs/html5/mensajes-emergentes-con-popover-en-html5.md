---
title: Mensajes emergentes con popover en HTML5
description: "Uso del atributo popover para poder generar mensajes emergentes con popover en HTML5 en los que se pueda incluir cualquier contenido."
lastupdates: 2024-01-30
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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCLIVUYU%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T220315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIBa0o1ZK1OIpzR%2F0MVrLtkJ1xPxHaXUHhLv7y7aU2jM8AiEAgU6JBVFM1BbfSKkBUB9u8kfwT9CzBWuEJY63ZaCXu4Qq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDAu8BSzhXGb25oXGWCrcA3D17cLoWwLDs6m1XM5BfXCP4Zhj11WxHZiHuZvQiVdhuudzixu%2FBIAVuoQ9O0nQIJeYGXzlOXcFAA2ophh6Awqc%2FKIoj%2BKyWib6l8orNuWGYp2h3HNC0dC3ImiR04ISe%2BmDtXaRiPixQro3KZneZtoISSBp8TsjgdhljzBmS2MXGaB8xjGgi2ktfsoKiVy66x2aJPVBp%2BlXbHXlLwu1fSbiZbjzvf5FX9LlzpN%2Fy17HLWZW9Axx3YQ3PuBEquxB9X8ftUHX9LciBuS0NfOxpTXMK6NiVhLQKveYgby1ey8z%2ByzxBIsm7N0zFKcNCswDBZx%2BhWCMA8sd1jzOQ%2FNThgjNflohTLv2DGC%2BTmdmoXQICkWPEUPeOOCOb2109VX%2FsiB2V8GJNS9ALGKDi9%2F67fnlGyapR%2BcWTGoCqbqaT8I8d90cIFjAUVJx6o%2BCXlP1sqv%2F0JeD%2BHwGmVltzdQyRZAjMqouoisfSUnBRZ%2FGWNn2lEEuZapOkW5zq7oyKSgbWU%2Fi8ljXGYQvedn9cee%2BvBg36LhzufA07%2F5O611Kz92%2FhOUEU1s9ZRFUkqzH75QqjJWI6A0HvsjQrYhQQCa%2FEYi6iEKQzmtc5GYkelVvR3CWnUt6MZSLzVHYVQm7MKvcwskGOqUB2Siu98eqxgfQMFvjR9rmb87cedtPRlSVjFzbKpEn8aVybzZzYwyk5gkV7QxJDx5A7Sya8pSasrp%2FCanHdOZ3tIT2gVdmZ1P0nXGynpPnLl0Qrb%2FUqCyUA8lMC8%2BPGSte36SSvQBpjjDXPBesR%2BXKYQLEwvc3pBdWdj4D4kbdHxELdKOszrzJIUcFV8Nua6SyyryT2ufb8qJxqhUh0eIIvfcaDysb&X-Amz-Signature=edea352658cb192053af7c85284927b519748e10fb8a7de88940bbb309932167&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V23MJSXE%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T220311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIEL%2BJL3k%2FRl6nUVS2IdMLxvBF4rcUsA8ORCiT%2BODe0%2FKAiB%2BD%2B5tpTyInysev3ecF0NJM6v7HLojv%2FxETWU%2BTvF6Ayr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIM76B%2BieThKaRnds0KKtwDOg0MculXNj5HfHY2tY0sb4Wq5Beo4BRZ9y31tfc2q9q2W6YSF24ZmYfy7tRO4fS2zvllcVGCBglOaTE1Ajt3r5DcQ%2FJufdvfm7RyTDrXa1D9wJQR9WVks%2B9%2FLyosxrnVPGUjZWD5ZM%2FUcu4g29BV8ls2u2WcWjZFvMOYbMcHYjQxZlWd9xIDiresSG%2Bo1oX5bM8rRXsgEgTJNtvuwsPXn2%2Fb7yHLHqphuNSCBcBYOnaxN7Sql7c1nll%2FgWbdtYZZGE3J35x2w7dBMQxf6uvhxj%2Bt05oQqh1dxKD%2Bwr3aleNnXaAlW06qCYpyY7KUOsSKHsKuAfjStm%2BQCPHxXZaLwt569f0aYw93hx793ftXEdb5LNcIlhfJFUSE%2B4K0X6UhMcEqCcFYsthYcfTdzAaI9IhtbuSuG9CFcn4IaRYjMuBYRznxWqhVyXkImkskJ6cQvRUwazXPyHv4o7vrIMzxZbzQUzoO6Ui%2F72R%2BKQ%2FQcOwt7Jk4kGNh2UNDHJ%2B6du07Qa4gOuY3pOyDQFYVcM4CLLr9qaNikcOkpnmF9eVzowVLyXfj7LVujY4zg13bAhXwIZoFxcrknmfF4zrB8i3zgR4MlIjgTloShawRe%2B00myC0avoZ1tNJLfcZBZUwptzCyQY6pgEQEyozpyB0ejGuS3hTUxlQCEWlCfUDNVP3A%2FznXZk%2BnnQyz2Zkr3uOENrT%2B5CzqcxqXM0D2BCTSC%2B5BiMZ899PwSRhpis3F1CdtsCFf2c2G8RQ7QIovztkTxiygmZP9JFCEo3RUUgdvhqgLGfbXS%2FJHlYOGey8XSxAKWy%2F6LtkfcGGB05N1S%2ByJUWqHeFqmizkBiyJ1ri4%2F2It2uD7sHzoQxas9zBo&X-Amz-Signature=0282c570cfee5dcdbf5e97de1489aa6933055bdfaafecdecbe8975bb359389f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

