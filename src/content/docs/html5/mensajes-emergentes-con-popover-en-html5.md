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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666III7ENC%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T062046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZVORunsLcTd7%2F5Ps5HYlAUTEE3szEQndbkKfouqHaZwIhAL1p1E31q3II6wTQ2tKgQDUR%2FW08Wh%2BIqt9sTdO2GKECKv8DCFUQABoMNjM3NDIzMTgzODA1IgyUxXe3iJPJU%2Bx7CeYq3AOlO%2BW0DRe%2B3WNaw0sMD6O69WFofo4WjgpbhU%2B%2FxFsGN%2B7S3yEVKX2m2j3%2BWCXO0AmE7C50nPuCizGNeXtjx4G7gjuzyZbk1qHLh8sjvRgQnIYs2ahGBQZW4Cgf1hUuRD8QVaBi3%2FZpU%2BObZ2F4eXieJqqoXxFf8vSYVwochlXkYfYFTsO9iDdDYpu5EWnGc3icVhYHVj5dQZ5ZqIK%2BPBMTHTmQ761ap%2BF7eP1Y7XwaEuV%2FFS5JU3XN2G7iLH26zRHoeUiFUpv4dklq%2BELzlcXIwa5Ef7kp86JYMVivQkWViH7hXCrP%2BLltVSlCpQa%2BYpLMZ3aTSbvPsrfz04Ss3Cmh9Qv8UkZ%2BJzJgVMoSCxZ%2BvvZNQ3Sjd919vWc6AuRmrhm2%2B1UT5FAT0I2F6ovuiZR3%2FLzxQAZnG2J0yH8NuDOY6So3rdYpqrX3yyDZqFx9xro9FehcC%2FPo%2BvNJ%2F%2F9M6iwDCmsikEbhlFRRB4AnuqVrata%2FT2qbUlh9xu3h1n9CghJrLa6VGXNytxMv2o6iguT79NPAKJ77y0XYn1OJTQ3%2FByCgMR5lHy6nPrhK19NULi04lZ4Ww61p8f91QR3SZLZ1uesRqlg9RzKK8u6SZF%2FzkXi7WfzU%2Fcedz7T41DCxp8nJBjqkAZ78XjQs6EBEjTVk%2BCKhwsnNLmHkOasluKeaty9cQclrwHuO8MDk54A7ldSgJbo19zuSG6yo5EVnld0gFLWeacdLSgPDWktSLxXJaA6NQaOz7x1QU87kjNJlKnl3QjDsubu0H%2B%2Bh10jVmwpY%2BAqGUQFl6pdN%2BWoauLyEU8MCDolS8umH6TRmFa1E1ULs1rsnZSI9KjteYRevDGwAa2mhyTRDVHUt&X-Amz-Signature=c8730ed34b104eea356fdc9fde73440aea6c47215e577c478e9c342b761ce01b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635GFJQFD%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T062046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDeh7dCyI%2F0Yb%2BmvkVOf0jTJsZi5o0X9zTQnIiBbWmVkwIhAJcu0Z3dInt5gJjGNNy1Jfx1UJpikKMEEBJ6OBm7Jl%2F2Kv8DCFUQABoMNjM3NDIzMTgzODA1IgxV2BefpdQ7KkB4t2Uq3APbENGEhVv3XrreDPmC00ZXBJmweusFXRf0fS6NOU8SrmrClclLLu4FkayUOF1t89tQYmhACAIKnBQ9Tjq57uceKZMFc2fbEKAUpERevXIC1QEVVqjLr5lg5n7FQrfM%2BTgKLZOkMRJj85ZksUZomkKEKKXwbPq4D98CRMK0nGIk3QhqpIrELsIvqXAx9XiV8YwCKIxlIH%2FDpGD2lKdiSwvKaHF8z4EI5o4KsMTH2wBJSiRkgZkRmJdPO%2FJcZsVxqqG1CPzrq1RMgzlrL7HMlp6mWD5f26%2BKGQSIBRB1i%2FRY2ZEj6SyypfypKKjMQJR5Z9qm3IWBs7PTOwakA%2BRBeV3C%2FUKhMfKI%2BBxo0KKMN%2BPbe8Ra50izSQGdJ5nYzUSvw5%2BTB8iV9ZqRT3THo1wgQ6PKp3ajwAuagYqB0mwXTYE5Idx%2BXBk9ZS%2BLkikeDcNUCwHW1rhPJ1jl4M1ntKHbQf%2B0W3H%2B0bb4IZcNTjNwB8mP2Hy6jzQNFCwunZ4acBlVNMnYymqcJqAJf0tTiVeQ%2FZglNAAd9X5EWGMwm6L%2FwVB3NdzmHXgPhsx8agkA18vj68trg2UcpbtZJ5clkZKRkwbFcs4IOLBCgrYLFv2CRPQDwJnOWUNlf8RmJw17kzD7psnJBjqkAfTd%2BFDkuKyCPDAMGLi4DnFsEG7AD7EcxDiYfAiIMQDHoVXXSECKjamXdlbRLda8liOpRCRvFm1CFJVPeNl61dCNU5pl3ItPq7zTbZUE4cLzyU%2BijmoWnnRoM7YQesYKX%2BM5%2FX3%2BTx6JczzJFqoZUgGyF41Ho5n%2FuFRGmfM8XzTo9I3Sh%2BCbrI%2B6zka0Xd91IAGivLmjdR8XQqNKN7s9%2FW7GBFRa&X-Amz-Signature=8cf235e7ba6e2406cf390171bd35c5fba003180a0308e2b1cc8e234704577fee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

