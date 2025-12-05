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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645APJQNG%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T102850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXMHUpLBu9FSb7Fv7yon19fKHqplGj332gbsD%2BLxknbwIhANXUtDoA3Xo6Zyhql1gQqyQmV9o2lzRBooitxk7%2BR2iJKv8DCFsQABoMNjM3NDIzMTgzODA1Igw87MninmdgiOqnkN4q3ANOWfpIwuHaRz4dtI2bJdrlLoDh4dqhA%2FwrpHvN1xVEwFTRZ5Y3uzQxef8RcYyPG6NMWbGar6sFS5X0HQNveRKt0LYzmJNIZe8XGrYkurAUeMdbD%2BNc0HezicIIVwqMB6YF05%2Bz2mZCOZdp8zkIg%2FN%2BAYWiotMZGNvQBHOEP%2F8XfgU7yQ4nBnCKbELzQWKifILAhUe0PnO3pzU21FA0Z9rTVJuRslCiFQNjKMaDYO1T1b2JABIE5hRNeZwEF27uDEy7ddCGJ%2BHn7t4eQWar1HyAjFIdCBYNNTAgxer3%2F97Rj3yW94sPf2%2B5KLeUHYCmUKNz9wGQcLaDbtPAkheYHVG91cxB9ZcZmSSvQICBnkQ8O9ERd5hqcwxz2foVvbF3Jz1hda5qFbWqVuA8rniVb8zEvMNgehYBUgnb5ce5eq66wzaDlTs7Q4eQKoX9iXGlG4dQ2T3N6AbITywxf2%2BFPjUhAQTq5Vp9ItIHev8Vrh%2FJLwqFp7H1x8oOTwyETdOJt3ufLFXPyzLywJiPf%2FpqV%2FF5bU3WL26JTyO2vtC3i3vfAy1Nsubu3QLzLITVLKlWqrufyRh56HJbSXxK6PB0UOX0ro7UJ5yyOkJITW7z39aDKANcf4I4jb35Pw%2Bc8TCe1MrJBjqkATmTPr0MjYf4JaKombsXS%2BP8iVBXFmCHxVSSGXislrZOhkAy7nmyRjO7DS8OBsznjvgIp1C%2Fy2YWyCm8AhQXqq08MCuNzIWw5G3xVz8gcZuN3j74tFAzpmiq6%2Flxt%2FXCAOuldOVU0g3uEV9U6UXrTnuPi%2F%2FG19CocRdBl9qoBohJPWikf7wuU%2BLunf5cMBCgzjEU5fqkPVc0cs5Zh%2BqyQSQjxpH1&X-Amz-Signature=596e253701adb6adc4f90f3b5031fa140855300da8f75de799a626af79e8bce0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQ54UG5N%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T102850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFymKlUFTlvHCxVP8cmajpmZpnILJ2Gxv3edfuwFg4L%2FAiEA4I0npCYXDHdS422J1ELPuVGLyyX0BTna1hkyRAXvAogq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDH7LElM4kTvVy813cSrcA5ehxfhmFwosvxu4YzYNYVtqITqNUXwb1kz8mVRozIuCPFeYtk8ZEwWkEja5lH4FYIDanRlBizDfC8kBaU57FmO%2BX32S1Xy5D4XP8uKjb%2FHO2nvHu8QQBVEVWKRQofVuCfgsXZ4c%2FURrk6eVjulkvzOF4bx48RdJCc1ZZ6iL7%2BdSuqxUUCN1frCsrc7UzMsT5jUq7TzfGwpNicnRSs%2Bo65B%2FbYIjIr733jATLNhZ2uboM2NYJY7wINcU1MSOa59vK1v9cL0sltQdOy1aLUQFx3XQ40tTofUwtA5%2BT5QwU6RF9cUf2Onh4zHHjgqVn%2B6FCYGg1vjdb%2FGTSUajfNi2PKin9k%2Bw7wAg5aENh4LU0Y%2FE%2F1zkhMjstG2xALR3ojMTxoXyYAUxQLiawdIAdX57Z17ZHvkqlIFagX19CRF4myr4Nj3Rt9Ts0dC%2FRLcT76LQfLAf0sRi07thrdIr2MdFynO3IJVDhWridvYRTn1EN88oF6mZbRa5Kc%2Bob6mIALUzIdPDQXcmH%2BQSSc83fNGHFtTt53gKrOiWmfhUSrai7Ydbqw4wHNyIiVgWjasY8yDtCU5ibc4vtZee0TV2Agy7sDSGpTCS%2FmoErNsQwQv6SCiSOAM7NrQGngE9K%2Fj7MNvJyskGOqUBjQX1IlzwWcK1NeP0GZqHKnvPOXFq29ZZih3h19RU9dckv3SMy7pEEzvD7wAalXgxB99vyHHe0qV7kD%2BLS4ctnr1hMyw6ymDAFjCgA87wdrd7TrWCyvKU69Mx7h%2BRg5dVs9D%2FKGKtTvM%2Bcy629jRCNvAFAep9vU7ZTxWk6TCjU5GQ9aVq3XkjhK%2BsRbpHSj63Tet8rGFrqmRWXQB3ns68UPvF5QP2&X-Amz-Signature=7f5ee7afc8fca308c4c37e54824d90612e73a3bcc966e1872aabcab7c8e09855&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

