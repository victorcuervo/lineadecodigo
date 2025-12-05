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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYDW6RFY%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T223756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyQwxPzEhRodGdSH7UvLm%2FGYxJvPvMI8Hgwm2kc8a%2BKQIgRxbVbtad2a%2Bx0RkIRgi41A7oZ%2BFmtvUUM9a0dgRbEk0q%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDDRZxJbsO1eQsxn5jCrcAyF6JHDJt9sfk86B6FU%2Fn02fqp5g5etUrW2taFVucZJ57zLdaMHlrmvQwjM6Gul%2BAg3fCLz4kQ7phYVzSlIN01gO4tWiTr9t5CEQWcsol0VCQOqVnlhccjdgmQH1%2B%2BBLx1k3ZnOqdgsstKkRdXVFsfnI5AhYTbPKQCe0%2BSt%2FRUZb8VyISjilxLDVVE9sGnKQbWBLyYRpnFsT99RWsnL5jSZgYYP87x5OW1NqwGxQh6t947Vz50c5OhGWYEYEgwkNX97AcCBNtlJzVegRhLNsYr8iasDWM5K%2BSFrYgyoubOJEhVJUQixCl%2BlM0bEO5jIVJfDMegKhmYgfwgej0OQ%2B%2Ffw9dyO9t39LPYs8mTul6l0CGqFv4l%2FK3gfoZ1gQ7i2t5I0YxThkjY5z8Mdj6yVifxn0vBiDWUAaThdfLxvan59lMAZz0wRbTPfrbuNDKNpA95Y2%2BUlMUvU8U0%2FFbRtNhs83kwDVtwQubRrreUaEaFjhP91XfJkiLTyC3kHWG4JX5WUJ1Mx6VTiaOZUrmTIlqvYIPMN9OV8Unp3jP9I%2BeoGNQUgHaZlgN66hSmQT0S3IstMrDeSgLdai2AUs1fMKocEFGC89avZT8h4sgWvUurpnm%2FeoN%2BJfV3cZ54w6MMSHzckGOqUBLJOPtLQhZ363mteiPP%2FTYsi9xaD8Bue3GbT7bQgvfT8upIie0%2BQap0r3bs1pwPZVS41EogrLXw0iIosNisXLVUEuqeT76V%2FSEZ7uowl2sxdpZXkI%2FR%2B2E5WQxj7LqmhCT6aQl%2BWipQzxERTXEIrDhBVQQPd1s8HcJHXrBxwZ24DT51w7JPXnOVu8J6FbFZEtYEojUF977V7gdBIg1PieGkAxZ2w5&X-Amz-Signature=0170fcb1f43458673cc311c64e2bafda0ec4983fdd119fb2b5c96a3c7af36360&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUWRNBSN%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T223756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDO2Hm7AdmwaevaEDJc379FBnvorgDvtSUJH8zOY6hKlgIhAJs%2FO4JlHPT1Pk4%2BSr6RF%2BYOlVxoikWOIMcSi9Zc8KhfKv8DCGYQABoMNjM3NDIzMTgzODA1Igz8Eof4wX2Mq0VVFhMq3AML16ZY1D6NqFuU3PjwOO3%2ByWlbZvA28025IP6qXKjZQb4x8V4lGRAPaiUxwg%2Fsm2ZPnxfd%2FsaE9Hp788BGyX3gqJ%2BnOf5rBd%2FppUO64EddJ2w%2FvuCDr2lfy8W19VhBg66Dyd6uNn58FL0dZhtxsersyzDA9fuPp3RpDnPSgo2jTYals0JXlGXhMhqeRuxT3uLaML%2FzuiaHlEQmaxIgug%2BZKS%2BxjybikUjXnXl8O6PqJpXklkqGtaGdmsuVRrmblwcEl7BSllgR5%2BdGjxTNKnd3bDcnSMWaIz23CmGSU0e3uHxptao5zpvN%2BLjVujkUgrHgHxXmS4Rjd0L0Fqj7QFNuhdvY2TL9LlqNRyTjG116L6f85Wy5IX1HnNIQYmbmIAs8CHBkUaRhXFNAzs6iHvjj%2F%2B5B6ORiZT0%2BKoQJr%2BF4GwShiJTQwV7OOncYwiXVdUfe2ubCVykH21e7UZ%2Bx%2BZnaqGDA9yGOtpA8WSbsY84z9E8vQGFTW8h4UtPaE05XXPLCSIdCCdds9NF0YLI%2FcCnaDdPZA1GUcIb%2FxeUu97uVOGG2g%2B2h8RMbU0Ek%2F5R27pwE%2FszrwcSCCTUNyXfWhuZdcnhBaLDoAJgEGWc726HV8tDa4n8Czpx3EoMDQzD3j83JBjqkAaXKtA3%2BLaaX7F%2FQqo1QJGpY7JVVCaBqWMMJwVG9rOP71mq0Bp73BeGujUdfbDiEuWodUcryVGgVsaJoqeMffHPMQ1Ueg0ZQ0wccZWu00x0oSs1fOgQ%2Bn9nw%2B5maYzgYx6iuXoXI6zVohGd5pIGWUSIDWEWxTGPbHCi8A%2Fky77xt7sx%2BpqP5frgb0QXFmIOn5TqQc7UPgzNXc5ICasoj9ClDG7Eo&X-Amz-Signature=548b44e258153ba1527464b7ef4e0a7f5d5a7f9877b9d8ad95252a076671cb5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

