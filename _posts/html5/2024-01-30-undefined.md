---
layout: post
title: Mensajes emergentes con popover en HTML5
excerpt: "Uso del atributo popover para poder generar mensajes emergentes con popover en HTML5 en los que se pueda incluir cualquier contenido."
categories: HTML5
tags: [html5 popover]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675KL2NQL%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T025626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIDeGlOT220xOzb%2FVVPhLH3MNNKqbTnS%2B0AOyVn%2FtL7JRAiAtCEBEvf69vvwIrYqp3T2%2FOfc42Nx4mYKRDriK%2F%2B4UqSr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMQ5nMHklTFAbA1JM7KtwDHyUDsa8O8ZH4%2B6NLVOiGn%2BZF6yADROSjIbNojbkVCcjCPMcRocZ61mfWDvl3El8J9vzS1VFHlRD0xiLhEXyYhsi1xLYYpFVNjowmkn5i8RRSf4Rtqz5o9aHpOs8QK6kHut7y5r%2F9sowBscyUhjyrqdvRK6pQf6Jtfg%2BEnSDN7U4SVFXSDybsN%2BC%2Fm9yhXWGOolDcfZcYLzXyJYCoFxw5Adg71%2BGEoCopAx%2BrS7VDhk8IOb%2FDQTSccSsiK6r4AGJOKPUrvxJQ%2BACzt4GIad3i6Obr2nH%2Bb1rOc5FfDq2Jbr1to0tajn7oBlly21oV02%2FsLugunFBQ6ekeY6kl4uBkzsGGKkBehaR8K9NPgulEvlDChhfqv7MoarXDgzma%2BFv7ocNHud9hRmDmoAKLPyvnignGX4JMI%2F%2FYnCAIYV%2FA7eu28gHrksznPi0UQb3wsANKGoNnlc3MQKI6%2FJnRmzMXTKTXGHuKgPIM7Gp%2B9cuUEOaA1%2BnzXXtae0wYfroMiVjKAEjTzco8Yb5yVF8PfYGq4Aj1xWkIj5TH0mcFZoU7mApb2OMVqayfSdDRhLnhhoK95TmzrYOJD0Km3WEjnxn%2FAz4t%2FyjdgW3Y6kHTf5tb8rpOnBopCfVgUAx7%2F54w%2FZS%2ByQY6pgESW9h%2FRa6mNfNbEhoW8UhEyS9jARIjk3UPrCxZTtSe8dhSGRpKunWbQ0r2M69BlHVs0DmCsGmwO2J55epfjEw48P6q80CLrArKK3U0MrvrHph%2BbUyPVeT0Wy9UnstFZXINZRU6gUQRGxTsgq3OP9PFRYispMckf%2B6svky9zah5TsxwzSdHN71LR5Ezewcg3Pwh5EAg0zEIGSnrO7jDboLlun3JMmwQ&X-Amz-Signature=31f49da9041200a64860e7455917028569917b887358e58daaccbdfaefc11dd9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653EJDG3O%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T025624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQDMaCwBmRPIbDhb9tjsiwEc0OG9e197v2Jam%2BeY%2Bh6Y9QIgUb5oC3ZDQ6lLbdYFnDbmFVHRf5Z%2F4w7ae%2BI51l%2BmcgQq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDEA%2FtcTm%2FgyRlJNmeircAzSuyLy%2FiMX4aVfV4bi1xEFy7fep17cCHxbHawg7OBC8%2BVeFOs8ChTbERfKanRe86%2FNM%2F06KKydp9exNXzCLC202iAx5ZWauPeX1PCLwALU9dZDqA97PsWSCXxFhuBjW%2BACtz5UKWisluS9TuVrdl4ecZhchvEmK10vf%2Bh%2FPo9i9Y55YBZUO3br7tRwiwcAu9YsPI6wZqLCrtOR%2B9S4h8R%2FBSCsHez4JYvcwZEqRsyHOW55ype5UkvOpiUrLnomcGUHVDV81w3y2WMNWLVL8k9r%2B%2FJaDhzpbhrUblc9I3MzvbDWnHoy35l2vQ3QjrIbzKHGEUnRgC0PoX%2BPuj4KeSMMZ%2BXwcBhsYT9%2FjvfdgAJcEu48nnx%2F2K%2FG7QacCn07o8Tf5YPzTVvODiWaE%2FLop8uDrStptB7cv85AQFIxXNuduffqaGM3j6YqT%2Bn3fwdfY%2FdX1Za1LN%2FOKQuNOLxzj0J12jT9M8gcX3rNL7dlClIbOsfk9HQ%2F5nr1GkmFMPBNW%2FGdZzJCYDFdCL6aU8q72Lo3TLNiGve9AZlPrRkdy31xmyC1OnPZssMxzCW3a1fg4Sn97yRVMxcC99f8dH59x6zykJL4Z5DdsxbCW46iQ5ZNHqjsaaAIW4R%2BhvJxvMNOUvskGOqUBh72vZ1LQuo4mhiJGEOWMGs4JgWZEXxcNhHA87Wc5pC%2F6ivF44VdxwBfHNy4s288Q5f93IgoKXKJt3s4bUuLttZyPj2IHqwBC4X8jJnpI8KWAjaNnyGOu8MrSzPa1hb9NP9w7IfrmF8OJ%2FHOqobbTKoE7FFJnlR71AVl6oThFgwI7ay6ehEIIh18Wk7wq%2F8xxqcrwGTraZSOGLCmo5YVcJVGp9kcF&X-Amz-Signature=71c2719bbaff9bbe833e0aa43f06c821848fc58ca6bf00208996ce53ae87ff45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

