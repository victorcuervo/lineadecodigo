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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QLWW2OF%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T075629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCID39gQvyvjrSJ5iZK4%2BUTkPeNoYn6WaheANyQaqXxGYBAiAjdU5fElyhejjkkojJEkQeWmr8cB95k4u%2FFuOzzBsBdSr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMwzwE089QdKoQluFhKtwDQNd%2BavvL8HFOBYpLjOeVpds972WgZWumtOI8sls4hT%2F0qeM9niF5nVQvVsSes9hHLou3E3Xxdkh7ixYuaow%2Ba%2Fac2q6erc%2FUs%2BfmYKAn%2FTCeSMHSrZXxLTLhJLHxTNPRhHhW0nJXbRgCGs0NwRhm9T0hRlNB3VghIf2YhSUkYSWEH%2FDQftfpVL2PBB67nwek3GNJ7LnNtyFOIVRFo9PuGy2uJZWSxVeStig7MJUCsCogLSJflp7qORwPYCSIeNMvST1uSJJxqHJ89J6tXLBeOHPSMfY2rQ0ooh9q%2FzXq29FbnbzpGhZlTUYlvrlRG9XR%2BqP%2F5FdiCwQfAPZS%2Fo90CHRjx0RLkd%2FHZpm6VEP3CFQQFk6LNcqoyaZTFbGwpOeNlSt6%2BvxWIu94FyB3sUk%2F807mIjVmDNbTqNLNoCB5Y2aZRuryWapkEbQK5lOf66TdM26BqyBzVPVfmRgsdG9xJD9Gu0ZfWnQ6Pxdmi3k7b2nCHfTzYThU5%2FO%2F6fM4N34MQGdTiB9fdhqeHMV7fccYpDP2OD3blOdk5t%2FQ9adLDgClSDmc4vxwgJv3MF%2Fc53YLKrcOUSAo6gyEkrfkf6KyVKTRMNMunPmnZP4LzqyCjasCHXGz4xOMVU90Q8Uw%2F%2BjEyQY6pgGYPrNUpnTwo%2B7hLpgoXu%2FiMKRUZEjbvHvOdvFlP%2FIsrB81iD1VYrYATxtjxklIeh98xzOZ6c2%2BlpuFTFkZSobT4ScETSef2joth0P5qE98mrFTeY69ygkkSjMnuaBz82jfnIQyyhKrLM7JNimXCyXObT5FsURJxuUjUiTH6COmmm1jxPoWWj9CN1n9aocKfoyQ4tXvHdTbv4C9%2FFUpArcyrszVNn1G&X-Amz-Signature=95dc0c88139fa891c2d834c2fa6848f062b30bde847317fedc23ca2c8de16736&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KSLNIYJ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T075629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQDO3PtfD%2FFdPZmaboVVan6D%2BBz6N96sDya%2FXwiXxJgHYwIgYh%2FLYp9I73oXKmNqIs%2BLJsEr9JfXFYi%2FJKylGyoeWJ4q%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDAzVYyQlL%2FxhYoV58ircAyfDlyH6wPbjG%2BDKnUr9N0V0wk6PQrLgKLwLxPC2b36ZQ6xwH03wECBXCycpzqKmGcDHPfqLMUDpv%2B6IPR3X8ZjUycuwzNMWuCz672jHE2u%2BM6g26FVd7mh%2Bf%2FRUpssHUBaKSSFwCwf%2B8waLu%2FWQZxxH%2BDrhueYfnN2yAlJa1FDF9anA4yUDPH5ChYsam7AFixlLdPDYK2WcZKrmCK3D0b%2F%2By0h3cwGxtrrB4n%2FMKAMsEeCEW%2FbfKgtPMjC7DM0ri42avwU7hlLfzmJFdsy54lEKP0gLYHyNe5tJu%2Fto6d1l4bUvRYZ4PvwbouQWgpvsrhtf79z1shLv7i0wiyIv2Ke1XnH4utPUa2Yuhbah164RYAn5d1zQWO88tFQV6Yu28JjySOSKSrOu7lmzRIqPJ37et7gokfI%2FQKZLsn6RJV5x1%2BcZ7eG6wP23bOEe0dgShKnY1dDmuJnFwjEBdl6VNQLrItUwSRw7jvVXFuJMBjpCwQOLgchFkpi3s%2Bc3GftMD%2FddAKj%2F0QW2bA1bgd%2BlBcOunl94Mjsdv3sd0nFetLx%2F7KkXE8aepMD%2FdwhQ%2FgRjNZwzDpkhoiQDYRroBBIRNU9vmav1F4wCzkxzzFGZSEVhok78i05ZWS0V6jsXMMvnxMkGOqUBXYyM6c1QzicvZrtQJoRkiAOTlXAd1rzo522A8v1eOzrg1Fivx49gsbRBAUVms%2ByWF6x5AUYfLF2uzphc2wm9UUDJFTC%2FaHVTT2%2FD0GHMWuYKlTgK2oqRNLynDgIP9NlqCYCgcd3hR1wwA3nTXBiEp2ExnlKmgxXdgcgBGUOP8IjyPKlrNRdYeEQvK2fQWNkzrq%2BRAmS10SUO6eNuHLTd53mJ25EV&X-Amz-Signature=f75cb5b16f30ffd9c81395dd6a54b747f5af058fe156c65e31b8c502a2d90ce6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

