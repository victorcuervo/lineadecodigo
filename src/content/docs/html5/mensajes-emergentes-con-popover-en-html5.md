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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TU6UP5C%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T202011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIDrxmlsldPeRNbQAgRMiHc6WkOILsagVdQ%2FIGrZ2iHOzAiBFmxruu%2BvP5wtouj1v%2B7CCEXZCqua0yWltsXjw2aQCnir%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMPfYHBJOG7rA0BXbZKtwDhF3hj0VqlGQfmkuyBiPPR8G5ANRM8Kj04vp2AWDHXhXdObrIf9C%2B%2BDaOp%2F8jVVC5iSa%2F5du6xTIbhuHdY%2FiiOxqww10YkxKHvDuTUCzZbp7TURWUa3lRvhHAFuXTvyYuU2g6jRhanYAX4%2BlDE%2F4OxJWf%2FBMMz33pHclRbbAb6niIp9DgEzKbas5fWuTe1Az0ZQcjpzLQPK7EU3t1VXJW%2FtM%2FTJuenlQs6PMo%2BnKtz56whh8YTMklTgiXt6nx9e8d1GrPEIrc6CERqlGFW2%2Bij534%2BH88iq6bVOyuatOKMTCd0vjx83zWoKqza6X5zt5PlluukPMAh5EM0HShDdBZpZU1uGQyaI0otLM0LIVlNr9gdpyrrKwk%2FKPYTHtjhVeYgnKfUIF8CIqboODWStTFD6SeNzMse3BMbAm3NU8kFeZofXJtf7OKSWuh2wXPL4QP5H8uk3c3rYgjHJ0ViHeTWTlXAfs3XeuHTkAbe485g1jptdl72Oayit7qrlBWWtwv4lcc1Nn%2FpfKkhEfDOs9E9gB2AdKAHtZ3EwLpZ22yS%2Fj5hfMocgsFJGH%2ByOE2KAJkvHga%2FZy1A%2Fh4OtaCvL%2BhizHzNdBxT%2BIRsQqGkD6s25T7sNPExs9wmAKhubcw%2BZHCyQY6pgEeL1doIL2F%2BfzJUChOrIx%2FZLI%2FD0uCG95iQzzR7n%2FIF%2Bnf1fhx%2B1zhoirg5e%2BZpnR6g42WWXsidl22E3Ri%2Fp4z9X9v8HvJClPRnewt%2Baje5k5Wt4DZ9g0JG%2BIECCY2D6QH%2B1ktsdD88VDzTN%2Fve7U46gizR49KvTOZlSOOt1Am6dlLtXPUxPHzm7KLXoGUa2nr9%2F9CKJ8eQmmeonhch3QxRGkdfG7O&X-Amz-Signature=76cc9b2d2fecef6a8206121b84e8b5ad428f667a03370b9be966b2dfc4e90be3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YU4ABJQ2%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T202011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIDkk%2F5pDOH%2BAJIxS%2BGJ2%2BBwm6vlFDNgZOGS%2BoUo2hZ1%2FAiEArNYZ4JpdHm%2BH4jdB6UyNqZNihv6p2%2FxBSR%2BnxeJdIC0q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDHa1sQywdUcbAHAVMyrcAzqVsYIDUxLDpW%2Bp0vpYQuSiuJc7JlCTShZZqjd1RdbcGuRyOx%2BshvZICrPTdFEt9udkFfzBfjLjYl0TEHZo9i60z5Fupruu7LGTRUHmASQN%2BIaDLxwQdxwNleTqo4Yhsk4GHKyVV80Yem9mZ1elLmEVWfMDjap3NYllUnPEE%2BcPypLDZPX83gV5QGA405sM6lfa0sukS6ihaWbfTD9iGdWT9uqmpOWaiEbbNNe%2FXi%2FvcDLhyYO%2Fb%2BqSqmIVvKD20L9FMBuJS1oTp1tjCuR5jMnLcoFG2iS4aGxwIYCDlKIIY9Br9Y7TPeP0un22L%2BLRK3iFRvCd4RANVJ3nLdcIAuxw4D1pWKiprnZILQjOLV5suuIBee%2Bf5lTZ4cUEnIxAQaEKffaPYtWbGGjyakZLsfOmPp7n7x%2FPCQTzVvgyqej0MjEjLiwgXJcOCwcfseybiBdDZ9fZu1YxZReP4RWjZq3NhTUgIqZILaHUFuceOvydzpbAr7Oz%2B68%2FkuS38JmAieR0IgjZmjvasRYXwCRJWk7Mo3917tzqYC358%2B14jAS1yNILbhwa%2Fh9vRrrPRo%2BA8ne7uDyWY6wg%2BD%2F4BaTQztrI8S8MMWGmRe4KNrjO35GQOYZhCxcYUW5NhJiQMNGSwskGOqUBE7AtVFgVG%2FRQGR%2F6PbVCh2o3RVKi%2FO3jh50ckUqO171rKsYw59%2Fn0Ve4uA86EMWKFfnpvpQ4Bba%2BE44319SWuvYgZUy99qmUmr1FU42X4T8McmL%2BhhczG820GZFo6oBNubwvH48CYUKOQx7F4C5UNudMhux56glmTCTnJqshydtNPggpEKvFI4QkX9%2B%2BbSG8H9le6nmc04x9VDnp0DPgHK25Q0dh&X-Amz-Signature=7ea29a3057992ba3b9894ebe6de1ccaeabb5ab99e4bddf8cf8b35488b8f84b9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

