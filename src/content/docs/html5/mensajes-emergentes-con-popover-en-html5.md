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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XECZ5A2O%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T232222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKx8pN2n4587ruuW2Dpuj6ivRWwmrcFGViJJHM37utugIhAO3%2FxPnC9QL77wn6RnR9iz2%2BK7RbdU%2FEgYW9Bqg4YhfhKv8DCGgQABoMNjM3NDIzMTgzODA1Igz0dwVaabDnHIYL8jEq3APtltKNnOxn9OchS3PIzlyadaufQ2ZeLpRLTe0125820tx3PE1qna0crMR4Gt9%2FrqMMZ%2Fk4IZYen30iPXILFva6m%2FqRUYEJP7lQ%2F6dZmxyebB15MLVzsjolojVyMvKYUKbx7dxl79P4bNJ5QiQczBsVebimT4aNQgzteCvHB1%2BkAy8qg7VnIBCtMSqX4ElLstXB%2BPmRy0xd01faxBR1snK8OfQsLwYTKA8BDSRe7v0kU60I8VwXscCxXGvvcdFVgW89ah7YuWU7neTRMTiTJJNp3V6xzYSTopx4MbWx7CMjRHV5ET37FuDy8RGpB1WP62X6nbEIMQ6MANGINkM3wCqzxRdvAuh4oP3%2FnY1eg17o7RZR2E41pVwYsUK6IFLZCyN2Km83eBSQ3WIn0hZ4tX0N7LDQMwoU1TI0olognPsMcH4X7MXqETtL24MJeza0jt7OpFCyWPgJMmbnmPAjPgOjpL%2BltNH5bUQU5nLfgWoN25JOoisF6D61cl%2BTDTlHL3Xg9zGorh36kdTigXbCqYN5PWbTtHWPT%2FNQQH6jiJlLLQ%2BNC9h3jPb6tOFr7fyl3HTZxwKuUwFWMgnjPugAGCwu%2BcsD6e1rH8f8M2iruYAWkb%2BXtHNmDbn%2FzWz8%2BjC0xs3JBjqkASh0%2BTAs9rWqUiEjFuJtCXR2FiF6SfxQIm36oeEWmax6CAKIVLgQHA5ZwD3HjNGzExWlmxZnyDUIbxjWPlW8a2%2B09ebSZwtbXcns6yJr2ya8MYO2DvtqFVR%2BHPtF8ir%2B%2BjdEU3xzwCSI%2BapYZdxWEOvyTSEAo%2B%2F3ywoc417jGj1kfhPhXFpWLJA1yuN5k%2B32eEKzp9ER2j6XWSFnu6vtZtrYJGf5&X-Amz-Signature=6d7a539ae2c6a40709ab05284222ce5a9e695f9cbfe20981ceda195cedda7e92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4A2KDST%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T232222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG3%2BZ2hu6AxoAbzUaT9SyKGJ0QXXWSx%2BQ477cJnMC1dpAiEAtDmFxBzAYxtECB2wznsdXnBqvW3XbbVwd6QxX4X0Mqcq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDLzJIJhJ%2BdrYfSdjsyrcA%2FqpeAfrZVJICWCK%2FdOf9oqAAPfjcwVIv3BANg7rWrsC4buKFNGIROFjXjy3SEKSJwo1YPZxIdhpS283I3OF9Hex1dKltkjTDa2OD2VdQ%2Fbmxp%2BS3JE09gmuFwhR341s8k7UKrlCrLN6I0RMoZPL4b17IEltvYqdS5XwBkbbeb6%2Bk337AE5%2FsbzfQCktXct3teTWtxZyx3YxgpclzddTbCtjif4KCHAHfwU6Qo6K78ZToqaQ2wu1ThYcLjmu4R6kVMH8RZCqSgAsAG2zyS8T9ykuYitXf%2BylzlgOqR0qCEQigvmBvKHLdhne%2FMpQcid3gdloPqlfyFpQsbARzU37Sjk0becb4AurHL1Jr4SCEGr6KBLx62B35OHl98SQ8dZiu6A2d%2FLDfX%2BQfsq3UvTra3N%2BecdwiFrtY5qbOEocrirB8sbVwtCEQbsEE6eKyEAAcxSmkCTyVngMBXnSnGPbpTygX3a3lYR0OMb6avLuyP8KQEjEVWkmSUdCVt%2B1rQZBmj%2FwJwJ4ZgLkrqZ6y6BXWh%2FJ9VTRl3Ja7cgS3eoOBWgvdEnkuPIVN5SRBRjldWgMhytXznQXpPFAEvAu%2BiGE4bTvX5KWHcSF%2Bv5Jq%2FtPd%2BXGOFo%2Ff2Hqaq7wN%2BjPMLLGzckGOqUB4vI5P4qZYTdXMPWpb1gZ3VH6RmPudqLrUthCBZ4tcS5xtZdmaLIVIQIBA%2FVxe7cYtx0ip%2BxgJhL5CbczAMm3tfvzoMywkMn2C8DIQCouxTp7fkeIBkIl6h4ZBs%2Fc%2BhkIgegB0dV329aWxifDGv6djLNuUSV6HmGlAzzEuV4SHQJKOKA290LhQaXAeI4yDnroN48zlKnSgpq%2BWX5rT5eSu%2BQuzr4Q&X-Amz-Signature=c26aef04ba44e9d8ae63a260a1497b198a8383d99d7488ada953fc4c335b0639&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

