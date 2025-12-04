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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSDFMSPX%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T060208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIEbFDStr6jQyUYeEuIoylwDdj35BgDCY2NgcjH1Gr9TQAiEAv8LUYM%2FM4J27oxfNLbjabjIMNBpzZxkeSQU1TSczLWkq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDD4m2p9WEkg%2BKGTMfyrcA%2BpTRNmEqyeHkoSAXrJW2NytUK%2FE%2BHy%2FmRlYk%2FSnVFWDWW9F0ti1WwllZJ1nPHco%2BnYL%2FO6ERlHjK5KRryLDnM0%2FFjNtar64x9huJeymgbQMKZOH8srDmlRjEh%2FKDyWWR7IKPWHpQ%2BTGsHlEdh7GESFxofx9h7RkEd7rT1Xl82a06CNwU80jAiP813srRi%2FTUBnykQqqb%2B462ay3RUlXRw%2FRs2Cgb%2BVRrE4cKvK%2BXJz%2FBsbKHmS7jGes9mQIBiD3RRRmV0coNLrd6HZU8BSHLEW1r%2F3kGTJ5P8GO9pOmj7U%2BIiI4vf0zONVQhrX7nCLjWoabZfaKIhLGepCoORE%2BNT%2B7q%2FdLr69q%2F%2B%2Fd9c9dItQTP8xaUu%2FclOvj7nZ42moS2%2BIGuthskb1g7MvG6W4SlcmMl%2F%2BvwTp8MkVIeG%2FbR2FeitJNAvlDx2nKsdFuItxapCtmbrimf%2FwbcET1dYKg1nS%2BvGvCeeaYRcIEWLidji0AooC4HlT3Pd1gRWbw7AFkCkQ5sH5OQAPYVLlMLaeynSlQX%2BRQyHmhdTMIfqHAu%2B8S2w8yyTfmdT6aAM%2BmHEog9mbfqZm8JxJHDyF3fLVbEyTMI298k6TswzzTjt%2BS8pEQ5z6ZVqY7Ab5n1ZlwMMyuxMkGOqUBfIfeYlqELw7JKNefNkNg0T9yVLv2BBlDHATaD%2Bjdx2oJRj20E3WOqE7OV%2BeD3RiVF7d7j8x6URO0klHJHeQVuXc90G4BIc2zL9xQ8a75bS2LlIfVzHKCQbde%2BYoOuT2cJdnwAz0ZWk%2BWnkK3gLuimlio14%2BvoZreFm79sLj1INOnCqlTRcp0%2BBx%2BeqApNz7Uch9zhuTcOtT6XdjaqFawJO%2BW6DrY&X-Amz-Signature=1e4cbde65f7feaa2e49fcbb7898a3732169f2d1e02cdf5401d30838e0acc64b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZ7DWF2U%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T060207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQCVJjGhZgIB6LBSy1NRBZ7nG4FO4an1YwEgQRKNSxzpBgIgGKS9E5rt5aenQTD%2B%2BSuQQt%2BzqgUFbes%2BvR%2Fqgtry2mcq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDPvW20Era6ve5mCKICrcAzOfttAm27DfjkSI26Dgcn0QT7JLvQ%2BwLk33zL8VAyhJoaOrz8%2BtlxUjQBAkEMqLzDbCFh%2FxEzxjYoP6ibxOirU0pjFHVc%2BIKsK68kRuxPFq6OLM%2BPezrYg9gujOHIDdD0s0yrZ8mSFRaOVwtt%2FMnRKzDLLsNOcodlohgAJ6ggULQ2B8sQfd1qo8hONrpHx0nFI5VCUF80vdaW8Yb9HXT8IukxGBqH1TTZqkshvirndbD3X1Uxi0z7EO%2BA9ydfRoaq31tMDBZBb8VktY33gCJ15XKgMijldy%2FAIIzuZC1tKjHI5GKWfFW6C%2B5o4AtZenUpK3nrJrB7pjwtYxUvIs9J8nl9THCvNjP%2BRVThk9KpkHKQrYEojjOrOuMH2LKBarIPgEsffUj8SfxMg4ebNJlGp0T9W5VDjP0jLph8KLOISGr%2F9hu%2B22DNbmdphEiJ4er4R9UCpR8e5fDMvQLYhXXBu%2FrmZbUAViMbZeINPoqz9%2BQD5JIOsTi20bh4eLbYQKPAAQ3aIyFs%2Bsy0oKAtfhx9iAMR%2BLbXJICaMCSV2pttjo3tvz7AzdH4SgygJ1pkcV2R2NEt20HDbruPjc1GqeEbmM92XmZ%2FTLfIVWV5kvDCXGwDgMxwtaSJkczzg3MJ%2BuxMkGOqUBSE%2BSTJDgMoo0WSU7t%2Ftth9pFWXd2H6eq%2BPYDIc5jN6MXRSACusDO30KQRa28CZEeAOTwDpxdWYPhuDQbFSkBA0qGX5QIOMgkUimLuXxEdN3fILs8BVdTbqIu16AM3b1YhS5wc8P1xmKN81ZrCe4VmCkdYNCRqmoiKPcyeWQdhpXX2JcFVOl4dCtS%2Ba%2FE6IzR8b3yGUkVT8ft6yc%2FQRNboIbgqqny&X-Amz-Signature=fb5d0efb199e7e85a1cb751a4c64622ab8a77d7e4ecaa46a8e35a343e06401e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

