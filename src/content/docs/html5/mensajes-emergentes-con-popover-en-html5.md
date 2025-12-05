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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DTRRGEE%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T072915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAFG%2FP7JuQqAihjqnD5x9gizUdrRTHHDqR67NWwDnnPdAiEAzD3KY2D7pHbZiN3rLi01I2JtVgqTikXwsRp4oTxCIiEq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDMx29ZVlhB2AYaMNRSrcAx0ZxA5uYLrhTyG5q9vwkGUT%2FMauuDFRH%2FlPZ%2FJRMmgrLxBFXdlc%2FoGJwnT5m7msnSKbeioFVEecMLmFSoTPJM867Q0RdwOALdsca84wLsIVxEiX8BJc%2BEpv4LyskHVYQcnntg8gbTFzj7tNgodfhGkG7x7dlwInMORUaL6x%2FYkGb80cCTH5TnPlTA5XDQN3%2BPqdzOQPr%2FhyVeEfEKWPpQJ3oWL8nO8Vfc40HfTShjmH4HUll9ggqAB6k%2Bke6eQIcqbqNH9x%2FreLIRBgw1OFpGWI0gtzHCRDSVOwotr43SOV9Ui%2FDhGWCE5xIR52SSAYxcvzcL7zZyugvbSkO2mdfUrHdZR1fqHy8BSPYLwh%2BTg2o3N7pNKbqUK7dtWaEBbJH%2FYEVV%2BrRmvMKA3YNIJzZ6cv6UlAFX9iZ8%2FAne5UqNYdRCP2Bvetcv2z%2F2%2BlEsB2xc2TVplHXSHTwEVJp%2Bo0i9O5LX9NP3hpgUd%2BQaqV6TPx7mRQAYytNpXlyqo4jxO4MUeD12q2E8CXdnu9zHuLaM%2B6GPCP7E5EnedJi3qgmpEj2B%2BXm54nWanmr8aiDQurW11yvGVnWqyO6ir6MicP%2BzvSp5rbm6vl47mduPzYbbo%2BEM2TQYh8ghsKXduXMNetyckGOqUBX519B22q6RXZR9Pm7bvemSMh6vYTftvG0YUG57O58gi%2FTQWRI8%2B8wcaEvISdrw13%2B6SR1heb7EKY%2F9L3TPI7dEje1GV5H41%2FTs0eDYDw4xOC3S0m7UDqpcJldClzl5LZVb2I19EwlcxDZOqfj8DCCLNysmoN7fOSMXCFXHUXC%2B2WTZ8x%2Bn12uYnc5JORhDmI6xXbr9GoEwO2FeMG5PH%2BhNcEC2fa&X-Amz-Signature=ce746e4b4f0f479e328bea3c85f258de579a8aba6db6306602c2679eb2d21bb1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WATADJFU%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T072914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtfAmqQGDsneT%2F8XxOgGLxErS0RRBKLBoo9HFF3NE%2BZwIhAIlomBCjuxPJnf7GFK%2FBHzxpQ%2FYxV1oBrQ073Iyin7rnKv8DCFUQABoMNjM3NDIzMTgzODA1IgwFSJg%2BoFoRh8QjPFUq3AOypjo6aEkzNwl8Ti9GQOcjqTW0JSW2VDaGR7p4sf4Od9IdYMffUTX6zoDxaYg1keYHfq4BXZa9bJqZODh77KG7aXiTsKisFpHxNSziC8DQDTttNz7wfo4%2BlnElWIOjFUoqhDiGlvPjqxkKwfvazwwjSv1Gdt3B7mOeSAYaCBa3P7PbynBJSvLKfOhGdV%2F0jqStwsaaqj79q08OfDvRRXC76o58u02m3HVHZfybeXAwew%2FmnJz%2F1eFxoPBa6NrajDi8eLtoCW1nB5Uvlg8rRivxOgr0CObkBaGn8NWH8y6klIE3itf0aT1yMrR4mRh2xTb3yNP%2F5ZVS9TGuS4RKmTk%2FtG4k87ptbQ3tAlv7VJEKbiVUe5ABuvl0Hlnxulmmwe7X2%2Fq8nx6Az%2F4C%2BL9MzHgqoOYDwzRJO%2BS9GiOZLJr1w2wqG4BQ6E8F2VaDGgpTnl0iojodFHOx96hkKB035OcPeRZFi4dE1bASSJQa%2F1xjRAuZXC7cXCwNf9SIil1BHmKDhcFseidz4y3mtcLCgnF1jr9nWLGddPzsATkrw86H%2FYewKLVrEskP5UUbRkVTxp9KKQUs5ZyHKmgnSncjwCYEBDpEBsixOVxkEHouoJLfusJ4yKo1goLFRx2MxDDoqcnJBjqkAadRq2SV3dsii5FVlcmVijulUzlI9YlpZsho%2BD81oYXURpM7w0TRCuF%2BAf112TL0W4OgPe6bCmVokWm0s0S37K8Oq97BDMLO%2BhVdvrY1eZpMg%2Fr%2Fa6G0G3X%2F6uLmkBgLnwol5LSq9TLmnApgQ7jSpbyFr5I2OqNOlSu0uieGtrIJFA8W8eCUhSuuHJ2OhhrKo6kg%2FB%2Fc2cSSIeqWtQ3QSts1E1MY&X-Amz-Signature=7e5880c49517314ba19387bb9af6accd0150fb258fd0313011cd576e428f00e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

