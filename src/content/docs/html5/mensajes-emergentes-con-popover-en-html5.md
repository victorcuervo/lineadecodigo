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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPULHV7V%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T135710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQC%2B81OtvY%2FTvhOzfL1cwF5uugqIIBRVx6DIHso0h%2FLMuAIgd2jJEinkmx0xsnkCA%2BknGWBJ7nL%2BcyMV9b6YdrOifdEq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDHPOexrZdF0r%2BtX%2FoSrcA%2FUb0fBgYwl4ZtN%2BG4paT9vvkix2JvvhI8jotz43ltl5xmFJTfe%2B9vk5x96VzNo530VCZpcycVDy6eb%2FEAFiMYrIulNUzTvN6im2514GlJNNGbPaYVEFXXhwJKQDiIFhF3a1ctyoR6G6T5JbHYTvyV5X%2BFTBly3C3kNJMLOR8eGBzEv5KzS0UZowJpoQZb33igS53aiIH7rJhrPBT66HVwGLphUKTFlH4UnO2pW2o7Oq1IbuD9%2BcrDl2RcTLntxfyWoWXX%2B3s8HNnYFdabh4xYIe0Rz9%2FS4yrz788uLXfg4Q9FTzC3ZCy5eVDEFoi%2Ba0r3lwbhbx0C0mGukBXstVNrfwXMYO4vCTOy2A3Pi5zfmNHBCkQWBzmw%2B%2BJIUACDoX79DoIATuI8sCuQ10%2BilfQXKaH%2B5IsFaC9VXO8ORnHpWBb4bzL%2F0FCx8LwFMiA9XRSbm6uCZ0blv6RI35iuTsq3nq1Itgq973SoEo5%2B7TUfw17DvAtXHTeKLzrHc7XHDURfgIx9auE7kiNcVtMPdwGaCNJ2WeHC3cZTi%2FjiXXUj01T%2B0GxeaQVgOGI2scyyeKT5fZaMJjK7hnwXYeC7hBh7JWf27vnYLxiNZZiejBFYoVjc2z9ErIpFLLq4CMMNyhxskGOqUBOk%2BlCKaTiPQ%2Fk3N0QnzO3m9IfIZoP0H2zcY5G9t4zoWvNpSjaoG6%2FIOieyHPnTkzLr9iIsfvuu5F7XwfXRNzdmY43B%2FZ84RQGLtRMQSVtXMm%2BOCRw%2Bc268uat90%2F7SXZVvubTe6RJ7TSPS%2BIRygyACgJ6mEzBogCOiyc6QI1hrgL5HpK6UrN%2BuBRBKXJL%2FqH5qkgl4VL4zOHkTHSQw0I1DOIywxB&X-Amz-Signature=282fd0a99732d8c64c757c1b2c59d33ae180ddcd6840292cc6418356c266d995&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXDDDPJF%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T135709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQD%2BotXeHmO%2Fy%2BVGuAvLEV8GUl55dpX6JZ4YN4sk7aUQZwIhAKy3RpmDighMrUABs980%2F7NNd5DIzcRoEXMk%2BVYBCRKJKv8DCEcQABoMNjM3NDIzMTgzODA1Igwte%2B9HUrHMtBqXzSgq3AOZB4epSHXWz799HwzbGl2i%2BJY20SZoBqN6%2F5MW1UbRLcGGUD61XmKQ7xWR16NmurfKNaJBNf54uxGLmNPX8jPZ264gSoJfy3QKBL2SiAfuGAJmzp4MK61vfMQ8w1jxUK7mDj8nvHpl5yTFVJVq0Mfi9P%2B%2FifVMIBY8ePkIAxmaYZWYXtGNGhTePq8VSH%2FtHrzQSoOIg61tGKnTIpdboXsTGaQFRYQs0ypgEuMoU8SNM9oe8P6fymd98cto3XaoEXpa57tJ90%2FpgVYQhqPD4HQKiJvOvxEAcJk242FRaPUBMrvGdjSl3OHGQGSxksjZYSa0oYrRkiiIT9aED3nPdE0e%2BJ%2BGid1OE3sl%2BPfu%2FF1Wh4%2Bj8VrWcOo6csSDK0IqLnmyBwMAcB4TUu%2B2Dbs%2FCshvA2l4wY6bupuIGJurf1j72wI2zCo74sWfj7r%2FXkTAyJiCjid2hcvq17fCisIdiH9E7YVbvTZJZT2Q7BDWgdK5iMGPUrXzVrjnINtwuPrgJJRV5EzNPYwUvHbNl8OgqdjkRYj7GsySenvrVl3QipgWUyz2YPFSNhnXAr3K0BXLyYHQE62SBW6JcxS5BaBJSfwmwYe2L9s3EUVOCdvMHd1b8XeAgeHU1kUrnD869zCZosbJBjqkAXSOVaOlikPdVBY8WC0J5AlVCC5UGlvtkRoeW64wPXQXFUJ6At0C8Z3qOxnuYUrGu6VpdCp5lMcNHkjIdtgv0xXO7W2qOM%2FmkpZ%2FN7yO6PU%2FhXcGbpcLJETYYl0cKsSq66G%2B5tT51PdROpuAjPGq70xyf7uT%2Bn5mHGD7yXqcgSX%2BspaZmF2XGBZ6pDpaNycqE%2FtYZh5MKHTW0b64RfG%2FcQ5wQyZ9&X-Amz-Signature=66c37293022d358973b0c9179700be0b5bb6afcb18aebd4d99bb329345b40b78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

