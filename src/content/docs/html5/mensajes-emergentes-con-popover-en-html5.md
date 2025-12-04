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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPGQQSFH%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T072804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCIA%2Bthg3syhEAwJvSUhQCYsp0WEOedM9iVI6h1vNL91kOAiBzFES8mkDs1IvY8jcF8KQsiPnet%2Fg82sV27WIpL6vPYSr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMpTU%2F7Y80ZrSezHW4KtwDafUVl0qKa6x0RNF63zT1W67cTGd9E54Nf8FM9KXHIMfQddzdhdGnhlLRKrMLZ3B8gK7hZ6Mo%2FgGvy3WCDvdri5ANJnjTTGaqAJtkdDOBi0GUzYRUEy%2BMg2EjxfDbG%2BHgccet2WU2S1Lafjhl%2FkzBM8sgneNKwknp8f08KBcW2FShO9T35VcEg2XXvcNbiPrbCWh9BIf3jsIkEzjjrJfPI9KFkajDDYGXRQ11iZqtt7c%2F4e%2FeHHiWt5UR3B0O%2FgKuIpydy9TpUovvnmdxOst%2BjrEX0CFPugg4FHyy4%2FOak0xiEYJk0OYWDRAbZREINEZ3e2wRJJHgbOnwLy%2BHxNrNOzGxLJ2tMgaRQ7uXnTykU7GvbOY%2B9UAtMVDfNd97sJkQiW1b8xGyOQw1PrFUNR3we%2BCt9HAkxxb3Hew2VTzJ5dRbGXN67Y2kTBspxn%2BbXgUTtCZM%2B7fVAhA16CdWv4yDgUqiZxRoiGiFmyQh1fpK3HYPDmVR0ZwdDfmTcqQ6xaTMLFSZtmFWmYGiXPz4xPwxrKlAplEqAxLYg6Gyv3AFbroUkkluHClddPohsHv6799GXdal2HBXlZ7jNJKfDwK17DJlGQwh5pokBZuILu78FmjF5LQWQNF%2Bpjt3Zs4wienEyQY6pgEXHM1N1yT4%2B2jYKLWCh3uLOazpbpqj33EHNDLriPfN8sJPJa84I606IMt2X%2FQlju8Wr%2FTTbd%2FvUWcle1qCdSYKa0E7KM%2BxPszOlPQ6N51Bt5wODRrw2JB8nU1MUzqtwJ9Q9o%2Bp3uTSBEQptzj2%2B09jm4NwAuILupimvfSAbX71IphWerBsH%2FEP9ktqNcHuw6Fq78xXbOzuPohjrzLY68Anyel8CCCb&X-Amz-Signature=4ce86a3208c1f976ab7d77da0fb5bc1e535d81ffbf7b15cd2cdf718d0469bb6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WC2Q2LVT%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T072803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQCpiOGLfH3epsxSUuCmah0VUcOk7n%2B7eLraMZ%2Bsv2j6pgIgJrv1sMPbEZRyOBqYcBv%2FZCg9q2%2BAi9GJOGsKY1Bl02Yq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDO47K0i2YIZ1cr8TcyrcAyIChya8DFirTAMy4wOQ25zwTp2Hc4BUAZoSJnpEreDxd%2Bjev1JTmJg0j3aL0ZY8WpOiJqCLU8rkQd3%2Frp1Xzkwrz76UXWJuDkBkPldBVi2Ae%2B2Zq6v5ZNAyYVsaM0SYw7bplGqgMQ%2FNwxu9H8G5XFWCviKjZyI8vSFzloH%2BCw8XzKhAlRZ5yKQ6zPN9gznRlYqtI4y%2F011kxvs%2Fx91p3uZQjWh7GFNxriLAQV%2FpCYLUALKMn94y5bB1LJcehporFub1aH3cVRgMb7j2z8xBZfJ351eJ7kVEJP8dgFF41YtakxhHFFbrV68P03ESbcxCxJCEQs42yJt%2BUM1wg4lAzEQ%2BxMLbNcCHtg2yGlKErJIz9bCtH2t0k6o%2BIoahRsJWbvpKxL%2FkDcWVVXtgNPZlLn0IsFAI3S3864xPWygt31tHJyQ0cyBtZREuvOxwxLVZDyjT9BY%2FkoVOl6MHD1Zjq5tX2VZezpGR2Kcx99L3GGRkZeb0V6V68TmHCw25KB6XzLMkAv%2F29nKs58ZiS350weTedyq%2B2rqbwOmoljJnZe9yiZTw9nUSW2EhC81YPfQ8sJjn8ZeVjsQkn404mJ3JWtJxIReRHLpNLdGpXgsi8%2FFYFRVBxxi3JLgqFeDhMMroxMkGOqUBsn2pqICjg65DCPjOvG%2Badt0ALsATJ1qW6uXv8oF0tKICBqYOnOc1bjXsl8YVNGgQAgzbGMCYhf5OxiRpnmg%2FBhwqMjcH7qmyQjbtPwH2LSGAao79tsVn7wGRbt8FT7D5TjghOpnO5BbRf9HsfAJl3mdSg5Exy%2BJgi4j5OlQmIdE9Nk7Nii%2BbrJKzMVbHdx80sFN%2BDO0Bd4uyovIHmcJD%2FVpZbE2e&X-Amz-Signature=7cb8dad3cc268b058f11449bb9bb567060ec2a61e912eade1fda03a6c254bd77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

