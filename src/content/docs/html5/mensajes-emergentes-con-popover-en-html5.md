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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAVBQJKY%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T013520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDeWE46ijfIU0eTbKJer4kn%2Fpf4WwgN%2FFFmWn0UvHXqwwIgQk1vTAEQxHX%2FJTiXqI%2BapQgWpLNGQ6gUZCNiPGxQYokqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO4fU1cGDa8wO8D61SrcAyXngKOfqnF6mi21%2FOM77tKd6tSnggxGuwX2nXOnD5vQ%2FHjV5m3D8qNSIJFwhCDtMSBmXmpBTSMxlCTkxi4jggCLYvstHF1VVD1iO0iklzuaq%2F8gt96UOAJS3Q2rx2clL0v28mKEFlDQwRwzSW7gs%2BZoPNSZHV35fqfTUgLegLTnGucQ1XcTki5f0LSh2Kd1HZ2eILy0IuKiEcoQgVQK7DyHfMhBxlYttAiPVVHLM1%2BJskZeI2dIYBsi1MhpOuu7avGwLwrP%2FhioPUt4%2Fu70Kavc7Gn6da3rw8LcGz8k3ebEjlRg6DkGkefuQfUzv0JXIGhmO96XlOE2bpGB4Dmpsa7u9dEuwXRYBwko46PeUx7eEp0B1wTsS5F%2FSM7hh6LtqoErGhE1w%2Fa7PszGwATqWdpBJxuFlYixrF4sPQ6guqC5aPEZ7R2EUJNE2rAAD4TYghktWsdr%2Fk586Bf%2B3TQ1r5FF1fUMGkguDQy%2Fu9Xdh2ClBCtfp1pojrTZc2DBR0zQmdSyL5SYDDpzH8AtWvWRPRj29QoCNxAPrgU1MLCNqeTjiI4u%2FrhDPz%2FvM0xWBFYtnM%2F8KUnUUyt6YJSoMvS%2BLffIb60SCh48DSxwT3EKdpZ6le72WIoiTCA2ImPqMIHq3ckGOqUBBi8ZiIRJFK9dXo%2FesdPNTiiPTOLV%2FseCOjjTA80sY4boxDojpGel2265NvaH5FPn7ukn%2Fm48%2FbBthloZBYKwYgC0ozaS87l6N2eGWW2jfaZO7nE8RAd6TNmIj%2BQ6FqK57LhjOfMiskPE%2BIarduga5c6f438GrfQ8HMXC7hFo7ZAswm2w%2Fb8WdYSvxG0rLV20p5wDGmU%2Fouh4EYBWLmQ3sOAyIfyT&X-Amz-Signature=438e73417d5ad4c77f2c6cf09e2c4a38f35789f0f19822aef4148211d364d600&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBSNUP6S%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T013519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FP5FGfWyOf6%2BnyeTEqdl4uHryCPoFHXCYuY0sges3GQIhAK%2BIfNQV2v1%2FHP9Dwbxwi%2BlAtODtiVUJw9QyWIbTPARyKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyl%2BGXQ%2F1DNwCHtgaUq3AObt1JyN9NalXVSjXwoq3buaEf1SG1G1kzbM4%2FfnOpR%2BDoTJPxu5rSJkRYNXD%2BlidR5aRrO7HV5qJ73flGV3l5mChK%2BHZZAgxaWBFH1yP5%2FE8cKrZD7htlnA7tAuMbZN6CPEW%2BpBtn%2BJZIVka2LtbfvqK9aZJ%2BGM0uetB9Vgwz%2Bk3Aww0dA04lxROBrLHFCgcXmKFPWjzZzK0imT3hPpXUOVbbNqzib5V%2FjNn7Q%2BIb2hSA0XUyND6Px834I5XmO70dX%2BC2cUo14KD01OFgTC5S8jxsZiymqTe%2BsFm7cBxiWapsGHK1%2BK7X9jAyH0xcV2DFkYdMQj7igw6EMAWcR4IVnDSc6%2Bs0XLdeohoi11OVJHlQ9bhNHChvQkeK2Edx9Ui%2BSVb8Jer4CpZ3QZNETha6bQbThXS2X8z%2FoKe2WuPnhKVzLJFAhGKEOUHFPai6dbyjhbsozGATwnTKFzcG3VehDG7tDACh2wwBya1ckyymOrWzhfqidvRfVDEJotRjVV0ZGFndQO1F%2F2H3IgWFI%2B0p4bzslx9wZWg%2FjDxzCkd722ZLQny5Wak80tK8%2FjUJuJA1yJr2vkItCWpiO9jDumeSGFw8mkR9HvCrRDDiz5lidnf33d5BBPMuezadCMjC88t3JBjqkATQnbsDamt%2BxhoB1goEmsvjp3Lz%2BJz8RBPoLwaaL8GF4ZiO1K9TT6KAPR55K0OqMgqSC5%2BRfBccOHID1U0zT48gXeqv0xCADoZS0XS%2B3qz7xt%2BPd3wQQd1C5X53VYcpv%2FKfiR9w41gvyMhMmfGXV7%2B9Qz5NnAEpClZbwNqwWJQwNM4Q%2FXCNMzIUQ9rduTgIRD4YeZ65KWMZttj8TZTjOju5hr3ll&X-Amz-Signature=ec2e68f1fb4d01bfac4cfb80a0f463088de0e3b7a0507fd7794e04408fc621a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

