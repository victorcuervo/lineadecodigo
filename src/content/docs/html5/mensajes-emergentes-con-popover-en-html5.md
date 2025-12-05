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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQKS3MD2%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T212856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGjm72lQECUVzuGDNT%2BcSVc4IHRsRgimVeaEbpyrbg75AiEAgqGtQ3fetrenIY5aFGX7Os8fX7NS37WeHAxrN9mkzZgq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDPYF6zLPg6qiUMniTSrcAxVr0BbAc%2BF8B6ZsOZWmPg%2FJO%2BpkX5nEXOnhAibiqZZrvMQupq1PQHs0sTtkBwWIVT8saZ1pICIeCi3KzsowbpFowD%2Bw7gmaK0%2BlIN7%2FHqoKcESDtmdN%2F%2B8kvOkQow0dUxj%2FKQVA6hI42rmKEUZ7iP2d2N%2B1UJmbXUPgIDwI6Z0McFK3FJdjYTuSuDmIbos1YfIWcs6K1yWEKBdJVRqyQRFPAhNR1kFrk0XiobyJz%2BJ%2BgN50J7dZ7riMWut72ivESDSJ6ja%2BK7xzW0h6sSlsfv1%2FG3d0vSiOQRcuY1jGiThQfBsktSVyWESGWBTk8kzRFPX9mzEbB1W7Cchq0y2ZIqoF4XpEAxKOpH3YbHVd9%2BjtT6zzkOqRWMFmbWZ2ySbQXl7NPkuOdd9lzjtqqTHM8SC%2FF3OZY6e8vsHDJUZzU6XjdpUCkU92fv47kJFc4FyPHDYD%2FAbazhQ%2BmJCdayNfIrKBPyhTUcBjVVG7GgSCvDuWXB23CkmNjfeHqYbYl8r0y%2BBUrOYZWRJfuY0wVtloESEw6D2MiugK0u%2F%2Bv4IZnEKeYrPhiVncQL3nqiP%2B17IweN9jW5%2Bmb%2BiWn%2BznZftyyw5GoIdYOb%2BF87KH9AZOGAkAdfmUYzCQ2GEBAz2MMNmLzckGOqUBcgxOv6CwRJb8gkTguogTRlG7SnPnMKngdP4%2FGG5Lr4hxAp6Syh%2F3z3KMSUaAA7%2FLmg9%2FVUTRFV0TdLtH4RzPl5F4XW82Gr3VsICFamwHs971kN6Lmow54QsdutAF8yH8EWcm4TwM26MlXpqrls9PUBZDnJb6MXqU%2Bs1L%2Booso3OdjFR3a7x6HpoxRJr6URSAWAqG4cD3fH5PisXQwSRRe3gYYDCK&X-Amz-Signature=64947f919e2ba8525f4ca2371131c05901bcd183d83553198b2d3d1a891037c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OBALQY3%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T212855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCteVi8IFQXho%2Fg%2B%2BatWsseuzELYBxW%2B5HE28MIwf3ElgIgFyQqB7lH2qWHZkKpgyxRToWscSNUOI373RDDaNmCe2Yq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDN5e6LD%2B5UWhqMBc%2FCrcA0rvjI5fbmvBXqW9BdO5zRh7QwxTsfsKn8Vvw1s%2FUba7wNRRJfcUvMZc4ulCKBW67ut1930%2Bm9ZF7u4fb1irPxsOYNjIVn5y4UhiFXwCr1Nvz%2BC36Ao9nKyFAo1wCajwsMZpBbA1ZmXEZ6ZOF%2FUmA2j54iA%2FIpqd6ojinfgaZzpJwd52tuNrXctxoGSedG1%2BVAJHo%2FK%2BEjA2K%2BqowB%2FuL4y2mCgL9EOk0Ko5BIbOAY7gkwG5r6Xrw2VhkwGf3LSgSdYzsDNoc9b8nutFt6bYuNY6nEZm1CaNfWtkUVfthCn6UuzHJFLyxWOPjvEmH68A8WNL%2FVhYMugYlKsSqNU%2BJgqE8t7h71ENCKYv9eq5INiV8aK8jHLGDXUXcF3yYxC0PGFGK5phPHFyDOl3dNLiqskhAo9Zy8ApkPM9VnPoUih%2F8NYfzVZQLiC9iL%2FlV3mES84ktuQmWsYK6Vgd011Noa0Qie6l46TPvenpj5rNVuOoQwBGTD1QmbxF4xNz%2BsOpriPJ2WmiC6BoA6RunhV2BND0s2%2F4sKTZaotVA%2BnJgs3PGv%2Fw%2FBvfIn6RLjsxxCSTuJvx7BGkPucy9SgsCnUgMq6aIVkhQdOUR%2BQ5X%2FsQtIOkQ2KUxP7vTwxZGU2IMOiGzckGOqUBnLiGclVvKrMOJVU7RsCmyYBzQFw%2B5r4pQPQnV8obu7hsdFM%2BwLu9Mzh4wkCg%2FjbnVe0vrjoDnpFVUYGq5IjveoIQ4l6gUPeWma2j5gjmp6L1Z1bVd9xD1SlRH6ZGU4dzf06yZwMDibScljPgUlUGUVPNLG5LfvV17PV1P3N6BJ4ul45jtb9t1J7Vbe%2FIo5xx4dthYecTmXttuteuDFSrQ1UglK2U&X-Amz-Signature=05805a35650904ad0fc929b9a9770e1aa01a1e8056cbd48244ebaa031ee800c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

