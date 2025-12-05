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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JYKLZF2%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T232346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCx9IdJ%2FWbUfNkVvjNUME0LplAFv9tjnjFIr9SB0Vi0UgIgYERjzpqm26VXd7%2FGdx6e4opBXGqRlDjKx2nGNk4jDuoq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDH71aQ9vbIlSEbIEsyrcA0Yzl100lyliokEmFWRzNQfQBy%2BZ6db3WX4aSgJT08XJzEsI7GFu2gTEZimKzdq%2BS50%2BAf%2Fsffy7isBMADB5RKmjmkeFDNET6T%2F4SIyyiyGypRYDcCgDZFoQaRoAtP%2Foz1U%2BFrKTUESsty1v0WUHi2G%2F61MVIYTG8WB%2FwTmxRcrxBvBi0HIACUqjCruJJFyOO57p86xIFwNQXPnZ389aIX9zqFLaQ1cwlxjnGlCePXLrGFbFALy2d%2Fn3%2FRqJ%2BYUejMp8VtjkMJ3ZaUKDZKy0S6tPuxI%2Bf3ZWfuKWFTPq%2BXsAAdBn4XG4fAGMr4EVTVW7VJhQ2JA%2Bb53PDB3bkxQdUo%2FG9S7ZL%2BeErAd4Dl%2BIfcfbbZQYKpmb0Hcwet2hJc4zOW4nggtVlz9uUjLoRXB5OqukRwRHwSyEhviboOI8qqRo0BuXoVivNppT%2BcSv%2FgXOtWAzOomo9UoHA1MLbDG22eSLGCd43xvDxg6b5b%2BT1dlbtdPcB1BN1%2BL5TwvPIuLezLS%2Bs3y8Evm0niVYkMa1BS4Z8Bsk0Kp1WyqCE%2BnYfRbeGoFsYsiFX3qi0A1J0ysGx4s6VjbrQ5yfAgOaiTVhPXloPKCnAF6Bn%2BuDITYhiCveWSkRLjK4Y9LyTKifMP%2FFzckGOqUBWiDoR%2B6wdx%2FbzUkhYAVetkKN31K4mNe3qwdaH0O9iEAza1Z7ySOA18fEs6Y5ucCx08ovlBz%2F3BXkpK1ZrUTMW6cKUpM61sliC92FepuwSnzITlE8HXilXMvqrimcVcrLgkhaxdR4BK6DgHMlRtan%2FGZiAuSxCNCG0cisHV1S06Nqqik0CP5ImM14XjmxRhOgdVeC0HeoBPMimTiq7Jt5UxDgTdsM&X-Amz-Signature=0e8fd2e6d7d865071bfce44d63b77561d4bb6e30351f93bf7efa25d84a43ac4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMN5NPB4%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T232345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCiY5jForO9R51vCPumhvU7b8L8s5d5kazBHLrLi4E0qAIgZhQyN%2BMdkiqHqonrScV%2FSikZk6pGl%2BvkzF60oPI0WFYq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDBVt6bXVA88LRpO6gSrcA4Yr0jiD7bJtqvfTNALWLo%2FHRqVYcH5O1uUMSEMHO26IgoHkFXPXxj8ukaVVku348hyOeAUmeSgDNY%2BssIBy90XtZHgQBkqrxqh%2Bx8vLYLVujtFq8PvYiggZesdAJgMj8zheRS85tZe8D8qQZQhDFng4wIiHH22vqOON2rLLTJ3DPxlAZJXwuAEgjzDyvg8%2FCKtUMr3LgJV%2FBuIY5CHWql0ks6zMxckk7lULTwTxBcR2XzQ7744xVEPwybMOPxLIeaxaIrSH9m3Ko%2BffKp1%2FrCZWcM21OnSlwTc5uC0PlQ0mmOGOH7eF%2FvPATV%2FXESZbNYNp9WYeG%2BWkgdRZGBaaCpsLfV8dnCIsPvdd4DDbtyd%2F7IgMLH8%2Bmxdcf%2F6NOwqU38pGtV1TJlm52NIoS%2FVUs4CSVKT93nhaaM0LioIDGsqj1zl75QaEGAF0tCGJ79oEX4OBoAsFiaVtrmjPDNqqkR0a99SOTtqgzNAknAtfp2PTSWC2z0PqLRM5bM5uFgByfcVtV9HJctAgl6voikukA3GDgnVFUnTEZefRVwfBwxnhUeH%2B2FLRoSci2DwuBxFypAwpA%2BGTqnCrZraAGFuPWQcbOTMsvYUHhqBeEIQy5fy4cyEZjlUtA0ZveEL6MOjFzckGOqUBYJt4gt4CSSdRZdPcE6fJd5f4ZHU9693dMeFnKf8PX8H3w%2BjtYSLOQ621HcqzdtJDmpcHv8ZAYIu%2Bj2BoeZ8TTc8m01e5leS0CcjKlBIP4BAF2xxbcCXnrOM%2BQV%2BNAO8yL%2BFJxeZWTTRtYaJifZWvoLnpRJKUTXztwT%2F4y7PsZp4z8twwzfnRvfBN%2Ff0bNPfORpTCWfDTKzYgOPnVC7tYvDDahkw8&X-Amz-Signature=71a60a210ac541c4514cc8f7a7f40f171d279f0b1e596042f72331c72483c674&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

