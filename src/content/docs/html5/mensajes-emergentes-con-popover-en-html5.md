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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IDWWVXM%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T042729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQDDIShPMNWkZhen2oXWc2%2FSmVm8tN9z9JS%2B0v0y2DMO6wIgFOLzMzTsD21XJ3p5BRTrvW2ifSr4apsxtm86mL9IWQ0q%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDDpbXIcJAoB3Bih5tCrcAyeTVn4q2WPVOzONyfBp6cA%2B%2FXUw5MomhElI1VJGNFC5v87%2F2yxEfJzEHxozA64lSJqfSGXph5JadUwcibugyPrdHZ61flbXshjOs%2FGt873pn7dEqL2o4Ra8XaCSbPxmpzV7dcyPACUJvFA0JGcyb9KqHfxU8u2S5Deu2cKCDwbGOwsKt8S7U5dxIdGFuBoeNSYQ93bG8XcSuw%2FR6ICjvhFUfwtLNTQRc4wihnzS0x0W7rhBisT6NEaCG64252UoIUqBm7PQ%2FaZd%2FhcwpJCD9Bje7BkmVjD%2BvKsMvDijQQWtJsxiyKm9C01Be9AHUKnRZCmo56uM3ffnDZFCXdcxTR%2FiFo4olvwiKBppEXq6Exa%2Bddn%2FO1f%2B6%2Fjq8i1dkZz%2FqEfTrhizXAZAom2ZNPxoYG8H1cB1STGrw0IqmU%2BixZWcAs6eNAu7fgGIdW9qmmEm%2BjvHn5GUOK2n7JX6QjzpKberHgO58Y6j1uTVmvnfWShm509reVfl%2BhH9QsDLtVR4j2wLsLlUhhanzLuOjzJ%2FuDUbiosAAlr1Kh%2BVnjCbta0BpfdqJJa2V7osqYo4fhibZcAePsJCHYRfDWVdAnvx9k54V8pC%2F5gIQwAjZN2jUVr87uPaftu%2FUUbiWj4oMJ%2BRxMkGOqUBONRWbAqFmg17zsTaUEUfaYoNU8DoPoTFtwRczpYNWR%2F%2F4rnQ60r4TshWRmpliZMSZwOocZLTcfmQmjxhqwCf6CMmRz9QCmVA1wYL%2F%2BQzHNBLD6EUj65iUwLmtQREAQP9IvE%2F%2BdoOhMJwNWJk%2FIAndMDRmCaL79JyYEuLWeDunuR9VXt9Nre%2BhKdWxp7tJ4Qn0Z13VMmL9P%2BnQcY9jvI43LcXOgYz&X-Amz-Signature=e7dbff4e31fa3e43ac61994582e4a8c723af88001f3a72bbdc9a8bd68f0efd6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPVLJ6EO%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T042729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQDbQDInrxdu72ACsJSdH6OKU5R71h%2FzGR34MU%2F3SuqIaQIgUU1BsWJs0B5D%2Bocg7tHcdV9Now3dlCVmVJePEnRuKagq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDHkNdT9qbxRSdhvdkircA8Vkrjgxx5OYzF5MBXvL%2BqgA%2B4D7y%2BJObIQzfq8vIVNdMwYxEfbP7uxne4VX12OvJduBOYSu4FEU6OXLWoUKBymKqFhCmNIlymnx86hqWyviO9kVyKHRoCU%2FNlAdlfOQVdgqPChyCDHySdRBsCcxoNZsYcZaaSygKwQEEMv347eXxbkkXk%2F6%2FzREQ4y4YpLwc9bIDPJ2kA08cTeOa1GgYi78KWiBFbyqrb5dpOQtXIXqDspDcbrIGXOeiCN2l7fv52kaBAYK%2BELXwJJuvN5iyBUPcy1MpyQujg5P8bo0edSR4UZbnG47FriFxDLF5KW3f9tKmOc8RGMAOOMo29IgUgxtEmvNd2%2BkDOps45%2B6ax4f2sHAdZE2zyUg%2BBWQmbPVB4lMOGNsvPkTw19c%2FnWNSzhCnBSH6LQGOwwpgrzZSg676kCO%2FXpG2WmEsVQyreMvs8wW1NmS7cdthWaG%2BSL0Uz3zQ0llTLYcgsh6KnZxZrOuLioVD8AjMjfrz1aNtFOv3gvvm3SUsH8peV%2FIU4LNJdcomX9pAJuYdbVKwNZNJy1dNtYkbWkm2m8p8juHlf66KommT7CdZW1AksfZ4a%2F4%2BlC3%2FyRhZIsQ5n%2FFEDJqr3dWrO3ALRAftsL82gcmMNSQxMkGOqUBJuODS54qIkRD3dUZXPZcDx6YbWhcGqe50fCvkTY55c8byV%2FBtAcYdZRqh1JHXqd42PrIynSvxxdhtfxDOdGIn0IW7%2F4ZUmx%2FDGf%2FRFgmNFKxkIlYg%2B5AsQhRn0wbSKBZK9are9DCa74EDKEBChkUXLZt9Ok2AKDUhEBwPqCVb3fFLiEDAjjqDa4SBYG3ZV1IGAjdqXt3jfOC64yh6uzXOXmPvgi6&X-Amz-Signature=3ca757827b7fb81708d5be99063ad97c4b14faacb36e96a992a92fe72431ddcb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

