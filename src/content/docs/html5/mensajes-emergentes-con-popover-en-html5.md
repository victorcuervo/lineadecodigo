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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663D6M65MS%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T023827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWX0yNuv7ts%2BysIV4RM9d0aia%2BK0jqt9H6IiXohtwaTgIgDzuBk%2BMlV53CKmKxI9PE972ZPSDyIqb9aglmUYt2WJwq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDIpn8RlbuKcMiUs6tyrcA9mw75TMvXh1oO93Qio7zZseKktHSOt5gK55cESm4%2FfJy0tEbXXk9wS%2FG1tl1W48n2aRJTt9qi%2FpOiuE%2BDHqIXAqHhZDAkvvHj6ERLVSic08p2OUG89%2FijxsVlUjdwlz3E4TWAm8LpDg1JF3aFFSbSefKE8H0AMwtBOAsZmpkldnIw%2BurbXMlYMNcsv3b9MbeXwIpgDX7T7IyAfIs8XNrjvF91C9Uj5t4UJlrky7uNG3ug8a0epvDGhPS8Wgw7ZkSBFoZbRqDiq4nwceAARzccY7M%2BC4phMaqSqu%2BE0mUt%2FMDxffhNYsZqcmsY%2F7%2BAk2CGepWw%2FDz6ORVPakslp0sRJsaBVx0nSuGckzeIW75cDLjKuiq259ynvRdQ7xw96eW11uywLQAxBX23csUse2FlqPYo%2FbJ%2BTTqOdLcmeg4jsD8e%2Bx7xywwOlyK5qp1aEPy0EHBDujtNiCw2o19o4m70KRFpUoK%2FR1Y68mkRUqAeDQrr8F2We7fQI7ZYMBT%2BXDYzY3%2BA2Yt%2FRNaJYPNV1uCJFVFV2yye0mBEDdBDyG53Wys8xOk8Uwt%2FTtD1NDiiTjDxl4r9%2Bsvs6nxGk9I0dJsCZZoJzanEjacVt532niKM4km0lsr%2B0In4LwNzmlMLSMyMkGOqUBUDmohPVEVrtQ9ddnGrJ7DgRD90%2BTz3RHERqPVnNTK7OgmoeVXDW2kmB37xmhYgUUcnmiveCKvmwPjpyj%2FGtPPfkVk4Cp6oNxBoKDiJZsFAeXJ2UEzlauVkjl8VNIoPY5pE3xisPgIRbTV%2F496k5zqLoFL8FXLfh4k7edMI9ObXUDrK2EwsZWJ624qfEriNcPFEI0pVaBLEbQu41tAZpoCV3QgILb&X-Amz-Signature=abac67856f174b89049a8b75d9707508fdf1c6ab988285fcc629b1c5d899bceb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667B4SM3JX%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T023827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnQ7wR7al2b9v%2FTGd%2Fl%2FMqIK7%2F6wckjymqrqgZK9ov6wIhAO%2FS1qOkkuIB5ybUPTJAkbmCsqHN4BZdMdwsR2StCk4bKv8DCE8QABoMNjM3NDIzMTgzODA1Igxj%2F6V%2Fg5%2By48V5GpEq3APLIkx09BjgqiqO2DTRPmLx1EPUpIr0mrinv%2FAIeS%2BJucNC7mJov6dkH6fOHTS7udU3g5IsIXX6pTf99MwSHWlnh5wGYkwYflyXo0YhkWKI7jIS9HMEC4kTdYbRTPpCJSvxNnZXK1eMjGVxnxT1K3nlbVgS7fBnizQxKlKtYoTrLmUAfq8uXJH2ynUikj1qYvZcVBlNCEWejVN73RqNXJBKygBM4H0jmM3YW9KXQKxnI0s3834i0WlSM1HLM9aoCNRxbTeB7HtWv%2Bed%2FFh2%2FVQw6DnluIWhhvWtskyR1bQXkVCY7qXjXJWBwqoH%2Few7l7wBmWhyoFA7BBUc73XsMwIqrRXzjg57aGxHPthN1JG9DZl8iGRP%2FSCDqOFoBmdM0cOTEU7IHAhh1HUnVMgoU5Rx5IxFE8aulWAXSknHPS8e1ba2KtW0PSKocTck5hudEBa5hcWT8meB1Ghqz1L%2FKEkTlvsnpNbjbyYVRQDCawXe3JqcQgpwNIAK5G6GjHSuC%2FM%2Bvr6Xx8Xd32uysJ0gKsK4W88e7anCdAwBg7yQw0M1SgFXjPjOVGhVCCfAx9nK0HnnIjfXhTGibh6Qrm7UObZMlO5iEiWEfWe0SYj2XXkt60NnUhjsOGuk91ZqGzDUjMjJBjqkAYOIbVC5tOKm5mMZqTrFzng5m8unLBu%2BJp5wJi%2FixuDhpajjVLWmsgA6Uc3WY3JW2HOTwuzbhUixpESZDLp46uEmlbnLu4%2B6UagrGtSrUePqrR5usMpTELWh%2FO%2FK%2BIKHUpELmy%2BSIlpGPa8fIQk6zVUsAA8JgmIGq9z3T50t75ZZ3oWZrzivUHEFjblORF1CH%2BvrwFu0tnXYHwAqR1rFlGNj%2BVDs&X-Amz-Signature=bf04b252964d23d0c51efe2891b5dd96144a9cc178cc1ad66ab2ec7f47386d9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

