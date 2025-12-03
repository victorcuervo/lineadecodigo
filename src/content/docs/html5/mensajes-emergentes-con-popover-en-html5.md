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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625A5PR56%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T203339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQCfRMLPq1QTMAA%2BVO%2BIjkCHeGZBC9s77LFm%2FdQXZfmQHwIgYj5nI6VK7BiadO7S6MFkoF%2BAuRQLkjQMpfOxLOJ33ucq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDIdYAUBwMRDYVmotZircA0us1uUh9QFxW5Kilpi%2FRWDZ5QXPAAv4042kMfYkJ3kw%2BP9zP%2F%2FAeo3eyqyfYscj2NQFy11Y7WygrPBpUpt%2BieB2fz9ONHCSE7Fhll%2BKqcnTach2Y%2FGaN%2FfPwhjRxheZnhT7QpsgVeE2e%2FCEGKjITrJJVYeHnpKsVxDofGHr%2BGzLUFfwwNKuzgeYGa84y2RE%2FMSwhKW9QoiWBZZo%2F%2FzKiS5gpD6y1zoIMelTrhGXSapux6INGOsCW4j%2FgQKhNAfL3fIo2nW57O3M5g%2FwFt%2B1QR0pDMQmLY1%2F2Rd71z0V5mKyO1ZeZ97bxx7QIbWdaKSBsFKnLi9NFc3kwhCzmZofndyehFVe%2BC9m5S3v972g3RhVjBe%2FJoy3Fi0mHLIzHdLNLYUJ6VNzit2tQlvm8DXgQx96n3aJbN8E2BkhxBbwy6vBDSBFI%2BSZ9WsSyEzJefLTbi2J8y9Bfxn%2BVxN%2B36UhQqJQ745Ju3Fr0X7RKUhJebmwGpxNk%2Bk0JqbCJ4KYD19R4oRNyMuvpQJ6gNSFrd4k7eJcYufqaN383fadVEOA0%2BY7b%2FDc1qepREeWx7CAea51E%2BHLsFL7aGCKnE2b5ud5x4rqk9clkHDFCMHDW5A9BPLHTWIJy%2FoEkn834u2vMLCSwskGOqUBM79ww%2F%2B737iRKLEBB4oCj8SNfacGH29xt4f%2BAcO%2BjGzEHCCRggwIDQ7qJW78ui7OUWa%2BJqQ%2FmyuOEXSQuAahNC2EVNHjiMUEQ4WT2Z8HOMydwVUf4NQqSyqkF7s5D97py%2Bk9joN2NN7VVYCRjdan9Z0nqgMPystAF5XLyexhAM9hdLgNsncbYaraQoVrrdqx36pe5lqstcoXqspMHlHKq%2FkWrYXj&X-Amz-Signature=62c5bcaeac369e5c23a7ac31591a7e110041e38bc68d26293277d692759f38e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657S4IFBS%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T203338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIGf7aW2zHg1QlWsGAhJx%2F3O8ujXkiYLEuYZaVrjjmIklAiA6NOMk%2FFlLiGV3UOi09%2Ba%2BcVuB1Anhe8gefREWPLTsgir%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMz5QYDf7kBsT%2BfolvKtwD6g0vrSjfyXOSSfBAjvrt%2FdzbYnOi2eVnCL8ic%2Bc3XmbdCJ6sFGJ9DngV3muOZkrBmbmAMo4T%2FofrJNlh2eoMEB3rpIoJWcxpIGPXqoXkrE%2BBirb8OM7E9tZ5lksVuopNSptRQt3c0j%2BLNKYN4MFD36uq8HOmEG2VbSFhPoH64sSz5eVx%2BH4TEXgzRiMFJAPonlFhKroR%2BXyx0YhGj%2FXzsntes4IMCdIN42GFozd4H5DV%2Fc%2FixVFsiqbemv970duPKx4Se1qb%2FcxiFWvykZzEOQXxk0pLqTqvPKd9HMQ22h4sQZAWe5VR4LqXo4Q7lxJJk6F5ktZU8SNoXsXGNVtmSY40BGy2g4MH5GV90k8FliMvz75JyJjWBV0iqZjybYUAMjINXSihJbviCp6cyTR5%2BGYTyB85L6jZydR0L9GgMbpiSFSCIgHgFEBmTCxMCrAXSsxo3jQShpsW6Ok3gEPn5Hhv2BFNL%2FSB7KXJdJM5Y31A%2Fu%2Fdup%2BBQPivD2%2FRVi4hDQIW4Z0dMUI56j6R%2BN0RcU1XIQMAdQIAChcQGqAzrJD0A4sSxqT3mZAe0LN%2FaR9E71JBGmpwqRAc2lGdMi%2FwjOBm%2F7DgS80jevCjaqs8WShC2hMn4Um907NjDRYwnZHCyQY6pgGhjCP4Y5QLGi5lRPBEWuATXi9tSWU%2F1vsQwJuY9vZBJQE2D5wDbqZDNxzDAW24dXF6TjSLkVRt10P%2BczwZBKQlM2QG4Tgu0E%2BfdtUr7RqZAitRdYg7iOaIPDr6bbjeEStl4Zx5yHSRwJVMuvMQ1iia4A3p5kT%2F456PPX2AqQGkIq3%2F1%2F%2FDx3WgNNT7ePhWLi5qTYWBTGXK1%2Fc%2FsLwDP4y2DV%2BB3t9Y&X-Amz-Signature=4bf7a4bccf68c1a0795479dc58075bf1c6546fdffbb6e4e4f73a7c37aacc8e19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

