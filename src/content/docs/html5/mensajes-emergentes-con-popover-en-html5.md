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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYI6MB2D%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T130843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDK%2BXI3ERE8vx1Ut4OLM90aB28Jw8Ij%2FUlRejJpOlco1AiEA1pj6E%2FtU5W9qaYvsAWjYOb5dMdQ%2BwFvizWEkurl0I3Yq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDMRmH55F2uev7grk%2FSrcA2%2BhRLtb5UxO4%2FmwRFrlLVpaA8KimahT1yVom%2BaQFqt%2BexeaRjh0hsrJr9uf8ClUhYnpLJ8PSmrXLaqKOoJHKOp2KC%2FmUp%2BzdoKjRjQroZLZWn7fM%2BPRsQsPzPmEl8LeGoDFdJZTZEiuTRIuAlnRc20CaJguyI9rxuZXZ161mCFI06QrrVbhtq08V7bfn7TVK2JJ6az5V3apOX4LPh3CK1IDY0RURR9fFhXeiKWWC5Id%2FI4o3jaKVsA6ZqnTei298asPTymEujcoSMtN%2BvG2DO2jpCUM81eJL0xjWoLKeOhzn54%2FjZ0K7LitUiPdSftLLln0KKmndFui842kwtVGUJ2O8cPIRgIbzQq1q5GcL6YvjTn6naLIB5rJMi9n%2FmCo%2FTe60JUYAMz8jpw0R0HAH08imh0cegN8inYUhU9QOALZMXFAB4X8s04HrnqGsuqx60XvnDMi%2FNEOg9E4rxyNOkQQnvk75DR55PyQq3rrFkz0JICOmv9B0Pm%2B%2BZ%2FvA7sXGBY%2FKsSYq70FRPZhCn19qS93fQBR1tEynVfkm4vnIXm9drWkbgkYx1XJvC7zjaOyNL3ODK7%2BwOCa95b0HK7wewVu5cnKJey3eLRpyXuW9mgCE2WN0azLIOYHJkq7MLbDyskGOqUBDls00KkLmUJ2siZVgMmZAksCHCIGIbkFJe5YuaUBDttSJjjHKvJoXEpJPPoTnXJ2DEWu%2BKIXlpnVTC9cfJ1HGf2Chq0C%2BGL0tW00HKY9Ibo476UzVOeoW6WPcLUYcq593zi6gjKUKyotBOKKDknQfSKxBxMmq12arsvWpRaJKa1FMTbeKMClu%2FQw81ZO%2BfkGdJ%2Bvvni5WvZiU54z1920AlVb7E40&X-Amz-Signature=7585dc09461dab7bd557959aa611878197abcdf71b83a1e05e739f15df8954b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673PXEXAL%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T130842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1k90SqFGHQ6lGW37Dxe7sTtEr4rE5xS%2BfDe12azsiFAIgNNc8yTQJ1qGZI4%2Fi4GeYANEdLG%2B9XUfz6n9sHxh%2BU2gq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDJhTNGqYhO5uJHpN%2BircA0lrd3Dnfa59iv3BX1wzoJWFwS61LBB%2Bu9EE5Qh%2FwhZzusLf9xbFj7jIPdHHF9ResXbSkhVReDVA6n74IAYhhg%2FHz%2BM29MM3R%2Fykep4e3bHIMaY35OGSELX9fGbaJDam2zr9scGn9fV6qzoswT2XrdvXKIQTWFjVFV8iEnyJrZfEVBbQ5mwuyLAx6RAq2KW%2BFa9iMeZdb%2BlJ5oqndVnfH0mla5ABcZy6aUoKsyWjhUpRbvOhPxybTwIU1E26XF%2BvrgCNNO0THajG%2BWG7AEusYnwneDn8v9H8229AgmsS4lAQCdVFVME87EJH%2Bd4%2FfyhNEiAVS7DffnAzK5n2%2FZU%2F2GICn%2B2r441lH9qEAEduLsvt56%2FzhMmvkzv7oBXn03BlTQqkzcx%2F4CuWkervCwklHN%2FvTnyS%2B7fCSG0JSQFpuYaYE46c05CU7UdIty%2F7fhOPzbs%2BrWuXJvKQGdXYdrlbPKMNd1iamy6%2F5sEoOwwC2YyN%2F14p3YFqiAPahAdWcTRFViLcUeQwYSlZK182Ddg0EDInqPgz3X7wpv2OoHLPCkUirZw7qNmuApFlLZ77a1WTvx8HWibTl38ACJgHn82mdJUZ2VazF9hLHkebkX1Mu5HGaZShlxRNr74bhgzfMM7LyskGOqUBVUseRkvSS6o4fLYFsggjqPSIe9MayE7cTFIlr%2BGf6jr%2BU2zIqki%2BOEc%2BhyiErjuZfnsc55l5t%2FJ34LKNbiJ5GKm%2B4e%2F9yCkwy7RnkwFFixauCamU4MygAPTX7izGibWdC5zCFkErHJ19mElx9UEQN3CY8Z8chYOXOBCU5cuhfiIC%2Bce8URdWvaJgmoXN7IgoDOpCSapLzECOCKY0ugYj98ZrI8IF&X-Amz-Signature=596ce4c91a9288bd0d767c3ed73531cd898a71d4d76db4d2ef6432db71908369&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

