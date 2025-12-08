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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636HDVBSM%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T084308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICRkEqZABPVZTBlPoj19jgyizDB6P5BQsnsr20V91TqkAiAk2c12ZSh0hlVjxuP3oSsUbykZKSThRPqQaSq5de9ypiqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHiOBAVMH9Z4rS%2F6mKtwDX9SuHEN21Do5HsoqHo%2BBqHdCv7Su7%2FMHQqsjsdGZylAoynCdn9KqPz5oUN%2Fhhmtl%2F%2B%2FiWs5cPcbau%2FDIfBoi%2FOgDyd0fA8N6zYL2%2FEOfqHxfnVF8RU3M5%2BrD5kDxn8Ih8mAJk99%2BGHngcCAzlPrqcTD8t8cImb%2Buzj64vPKyS8vqmhTztXuckke44DRj7wO1bTalrW382kwUUBzoVPNmeCjQ3jOHia2%2FYzhq4N4qySfW76skYSX3omeXf4%2F2ZFEyDOMz55UcAG4dHkFZHzxA3OknXwJuizFDRQWZQV1%2BNUzXP%2BFk7ZZvNkt%2F3cqVPgpvJPnHoPKCaLofZs4cwtgGUGm6osngylF57u4%2BIZlpex3BQX%2FIFb5geRNYs9D2Eg0g8Y4igXKEjkEBKlv2rb%2BKIvYgNB%2Fr%2FkFpmVCU57sq6aro5woVaT2e16ELdKVY0VPX%2BfgP4HZoJIX5njZHG2yb5RbCeZtfdbzEv%2FhUwKXZST%2BCzHVv9o5RxdOMfP2x3n15yjo0prHWbyO3ghkFNyBde%2BCyKVKZ%2FvvGBMjccaSO5Bp0quhFgebt1HlUu%2BxOPsMNR2849QfrHoXFCIaSH5oaoM6Z9z2OVcCjv8V9pDiGuKhRaQ%2FTeoUIf5xl2vMwsO3ZyQY6pgFn7bg83%2BJPzxFwjRymJzS2WZTTIfAGNJoSkEu%2FodzvVWvXgmbcqE4AEfzIDB9u16dRWs7Ak8s9nF7Imi2UUhxElC4n19kwkxJZzIakCoeQLX7JNfrHEHha8hXKU4G6cffMM8bEW1EKwvvhtZ6879bviz%2FBZJVHm1%2BOFBsy2z43HG2SZsfMiZSaMNx4moJLwVj52YKPRG2RcgtBHZFFlyQtEjjqaOJc&X-Amz-Signature=060e323c5978b77202480a13ffa226e367e8f9f143b25cf3b528a79ac7648526&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ETOQPER%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T084308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhAIuprS8qT%2F0D3xNyOnvyFCrgwS9lJojiTFmFmig5AwIhAIcqRpxDeEy%2BnE42s6UlW3bymF747dbUX3r9A6dji9scKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwemEvEdI95trvmN6Qq3AO57GgrtiOFSLOk8o5JUraQkrgDPJm%2FMfoc7r5MmtVj4yKnarzTffq4p2jry8Vctb%2BHqvfkp0yrmdYPCaVH9eg4i3N6Kz9Fl3b%2FkCyzxOpKl2%2BRZ3MBafjOT%2BCFcOoUhnpZJsw4OakISOaMPIT%2FCbT9lFx1SEPjrqv%2Bl2YjP7tELFYuv5iSBwDNl72xIjbJvB%2BwDyE%2FEa28vN5fQwjV2m03lDaIlUISivDEVSnls9n7XZXvpw1FQLfsSWCIDOTsDNkPIUu%2BVe2O0kvayBQd6VYKguAuUvo1357ns3%2FA3frR0drdqaJ%2B%2BUsSOIpfR6%2FUhMFjdq7t2Ev83C%2BOI5kxybCc4%2BlAhtvoxuH0IvzR5ai7AWtxZJsX1xUXvZv5csdECSlxsSGH2unUGCc6SYWqA9jxnp0kwjkR%2BnslCJiWCDNqFXz7w1O7XgsGQ4sAAsz3%2B%2BlTQKSbRvJlJ%2Fm8x6aEoMRpVMoKGxmNEiQkwBynNbzhASLpeGcx7oAoj6HP48YIiMycHPmcmOUYOw%2BlFXsvdS%2Fn0%2F5ckexyrk0wC1EidWReI44HKzouo1Q9sdXtrV4nZ892tKClakCHK9NbhAIdwT9l%2BHshSB1ncFXoX%2Bdde1iSl7JrujQsIh37%2FlNCjjD17dnJBjqkAdiBhlVqQPdmZnP0WCm%2F2NsGlA1tobvHYHXSbupg5ozazrx7dlLiEj3e7Ln80tk7ZJ1kJEnY58ZXMLhfuAzNWeY6PCf4Upeyo%2FnRWh1Q3e4j2%2B%2BlxDxethywjjewBWY0MXa%2F5AKN8rDmTsVbkL8qQLeHp%2BUJcYNnM5I7eM%2BhhlRv6SrRnQk80p%2FuCvsBhg%2BNKRUUj69hD%2B4Koj%2FoN4VhEqiWHa89&X-Amz-Signature=2f61d0a9a81bac91cfe54c606b26c8df20a969aa9ff34585d20b5f0723f4b29d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

