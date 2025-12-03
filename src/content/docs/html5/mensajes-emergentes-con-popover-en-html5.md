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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SH4NC7QF%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T224209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIAJeOJPjMtLkFZhEscv7syVehJfmpQY6gmUcKq2WJwAiAiBOqU7o5TSQhnFgd3zsfeel9fyj96DKPv2wHOwg8ZCfNCr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMqeCpQp5cA4PslPS3KtwDHO4TNhRAfAr94qdR%2BFAZPc%2B6cnq%2BYGl5Ii5gZ%2FJBrZPHEPE4Ej%2BbQS4rDbFB7eyaAk2YqfhtJa2T8rM%2FdubcItnTXCE%2Fqbv7ZZePdHTR%2BIB2GQ3Cp%2FhhuIeCtDQT53JxZDhwz1DIUOcHCxxizdAKvLBsQyQYIq1iQXTOB%2FGmY%2FB%2FfLH2zZOl9%2Boemf%2FQdVmxOWoLSoWNnUWkNt41FmxCl1jP6zrrK72KYW%2F1mkbWmVODI8D%2FxLLuwJn%2BjgyKewYMPssxZ2mLHDwn07%2Bu9e%2BZoWTA6hOUKb3aPH5iEoqLG5bKEbPvstPDpDPsad3jeA9mPBN6Mh6xdvDQW4LChdbkKTsUUc%2FQzMpkj8TarvTqkb0Q29QXF%2F4hFe6YvNvpHEgGKhS23qgFxPTCLSJgViFEk9Zudo92DftUBpD9D34LZMHh70vG%2BQNAb1wCPvcIWDviknedQphAhaH8T8A%2F7hfDnP1x86P7dOVNewEvofyGPyoMxEXU7WQflz38qOKNCLa8AZtHDoS7q3qy%2FnD%2F%2FNnZDB7RPJYgO30S7FxW2JcuZM2eNoyMddz%2FYBffraGYbKESBQ7zQuOCCTudAcC0k%2FDcE%2BFgf0KN6E85DHHEgHmG0eV02KqvbC0%2BZZ10tjAwqt3CyQY6pgFF7Q6%2Fz%2FC69%2BQsA26UvDCI1VvFesRMne8kcTAxfM9Ba9SzJvqpRnukFv1AaiAMDFYCTl8UCqQeyXkZXtMdMWEqnjMovDyVvba2tPGfylbO8SN6RU4AeayGanr42rywYMwjkSg9LiiTzlNBVBgBuBLhx%2BAzEmV7vNG3Grnd5sCuFbPBlp64hIFUhklXF3Y6L5vhZoH7UVSkQ%2BMXEDAGnO5AQJ4CYe6A&X-Amz-Signature=8ac3bdf7e2eed53c177a60d0dec388d6d6c3729b444144f7628e3f1a7633259c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDW63HLF%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T224209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIFn%2BxPZMb4l6YjT%2FkBk7hPDTFyLSX4UZHC%2BcURXUiXhxAiEAqEUnnL0szd8nxVYKUG6zt2kb2JpyAqT7gWUPZr7VCD0q%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDKDnDLdAbZ%2BrBRFkTyrcA71JEY71NO74uHU%2FYocx7RsCedfzs9wkiW5%2FWchtB9BaoS9%2F1%2FH4LCKFqoSBkgKi%2FLieOiRiTC9JNa4gdzA14RTTGhi8G5eu4oxOHtC2ChQ20M6iRfWqQ57CLf65PpPgyOHb8rwhSONduQukhfWe4QThqvhrcHpVUy%2B5HbKboOlC2W1jR6%2FiIFeuAhteVz1w51Fb%2FFUzpKCJESz9Ms5UZ4ODPLi3sH3KBWkWbXnN1L8L7d2r3BkDD4ym8OU0jHd%2Fe4jdauoDsftj3p3datdB%2F8qX1IGA9BRttS4SBwZWS2r7aMFVLeaLd8fNouYRvWxnZbKlbPZ7aaisRQ3dwshAesin9Jv%2BE9SwpbOIMvDLc0ZRaHJQ9nkH73I2J%2BOntetRQX7RZbOP3%2FhUwQbesjTVa%2BhfX%2BDwdRJ3xh6G%2Fcy20Fnrb6c%2FZNNcKG%2BWKCIe8ImSYRqwV2HhWmdKcyTS9jHdp4p%2B8MiyEkhp9ZgHstWdpKrJa%2Fp16l6RLw9vqQgDJXrn0xUoTsXThcos3GjacRuz3C8tYnKjLn3GvqXo9o2uoP97GHxsaUALgFv4RP1f0cF%2F82%2BPTQqGh64G5Dfmol0YjTIDZ1efiBMZs6Lqc7ZiJKdvShhJ7kdlo93AKUToMNv3wskGOqUBM0UCon2T%2F7tx9wO%2B5yi2YcrjIkcAB2QlWEzG3q%2FlSrYRfsAEPdn1GzKSC7rQVDR93eRUcpWuSoB9v8n0wor6GgB8%2BHtrkVq9GfycC65Fa7sGNCHGbnUqeYO2bws7F2bq03ehY6bx0v8dIyOtNPJshpvMrXN2SEJRTqXqKiCBX5OV3QmgIAObLxe87wGGBUiB2RrbN9B5RmBESSdmogJKpnvswGEW&X-Amz-Signature=3e0a8f11e64000bdce68248d7687a5e4f49fb35cb3d87df0a64eee13ba17d859&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

