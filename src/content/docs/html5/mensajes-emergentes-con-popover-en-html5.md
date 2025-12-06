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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDMHV7LQ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T022536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtvseksXCoUfzrLNCFgOdE0qLlp8mfR6bt7I59qWWOywIgN6JGYF%2BEXgg%2BsQKp3OrpEpq5sdG7K2qZvHiM0UVRZ9wq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDC9XXTOlQfmzrEjdYCrcA74SkSxI0x96toZM4CSJg9sL1EDpAPojOkGG02PSBj%2F1GIJ3vTeSTMAKI8%2BsfkjeK4sqcHViNl7j60OeWU3j4hKzQRaEE0xbBetFR2mUIo2B%2FRo6jiHn%2FvmdBoCreSw48pLuXpS5xa9r1xQ%2FlJ9zmk3YVuZIaI1y%2BdEYtc9o%2Fd3uuXFwDVO2uRpxTCvOrmgclyUmYnt35%2F3OkCzQS2uuxh1o6IPVMLErdcNVyoUlccJ%2FXFsmcfHH%2Fr35pvUS3ZEkdbV%2B2iY5p7L8E4pEb8u0JDklxXbsj7nkWCHdXbLPYXErKdiYxPdJdeBtb3KQHstx4zEqkNbhUt%2FzG%2Bro2IooZ9g%2F%2BVVovfo5XKDdihQNtXWppj7wsuixjGC6kTIoMPld6DJF%2Bz6LAAYyvyCB7fivTz1EAcS%2F67V6spCcQIqZrZhBxQmv6R8Y5hv6KF%2FwwVmymNQOlVKHR3wywVrYHLOhqQBMP97g%2FwblBmuNpVB8PIuz4ToMxElpu3hGnkoWTSkj18zQ%2Fx4V42IPt%2Fy%2BO99cRc5Piza9os6Pbvh6u7V0lPYP9gVqqaaWE6Ku82n4xLWLEeSUi%2FXlazsNl3JSBuJYUPeo9j1ePB0Xw8skf8a7CQZbqUgdPduwE%2BVgfzCzMKiKzskGOqUBTHah584OssLVsUNSVdN4H1o2n7%2BOZLC3B6UUJhI%2F873Xj%2BKthNjzbNZurUjiqU78ciboxnNxmBtVrbHKZFC07DC1%2Bv3qGCH4qG7TsoBCoS8NskqPoxNJpuNqOuh05P%2B%2FVfb1jHY4SETVBSDPS9zAcDa%2BzP28laL8zN2KHmfgUZ7bcBzWB8RdSq4EW0Ftk9x%2B0fHEvMUuvEHI7pIZ%2Bf9dMMLw8Wk9&X-Amz-Signature=a8608195254f1a91791dfa6a05315449809b764b9e970426bc2e439d373031d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667H7JOEOK%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T022533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtgQSxlMxuTD8D1GFJ2CqorRSSYFTNUFaTN%2Bn3qdp%2FrQIgXjiakc3iF6nYJ9L1lS%2FjFy7dzAW6CpHUfL7loEHSaacq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDDOIaH2a1bL%2Fu4fgRircA2iEvedIUO4HOMKK8tg%2FavNT0ZeZFnuBDHAfR2sXH1%2FyoUVhgMadZ6dJIKopVZyP6%2BPrtxfFGsDv18xu4rKpG8UxBwQfVcBbibeYVynrZzvEA%2FCFyhqCVEL48gSNNpbsMuaSXx9xZZVxDLDpWdddRE6kufxbFMcOH1kCZcYisA1f2R6%2FO63HHnldn1UtLf6pYbY50SXnreecVYr2%2B65dqiZEyCq16ZSQhWemnSSUKJI%2B7ebYOB1WVNgTS1CIDr%2B5zdJA%2Fpa%2FJR4AnKHMhG1wFKh1n6rhKW%2F8Eidxw8ajuhgwiuprc7Jt2UfjLQUF8TwZfDnxXlR1OCkXIAXi8y2HGt%2FLcuJmkIVnyn0PUwvaVq0GB0oKM1QQGMhLvMWP7hzScCv7iTk9B2vC5%2Fr%2FAFI9ygE6lL5lIZSGd%2FRL0w6Hsd5ohh69m%2BEBQygZrzThNpvl9cBva%2BhdZ0n5%2FCoxlCLLgf9no8ovk5EpVyunClc5RYiW2SG8vLhoKLwRBJmQ20CkL9rTZ7HkCok3ciNMViBw1Folo6APLsJ1P18oYctnUqyPWf8MVylsIICPaL5W5XKjWL%2ByRu%2F3TQs1wicH8WA4Q%2FXtsRwgjAurH5husF1Mcgth3%2Faxb1Obd8Ep%2F2dqMNaKzskGOqUBHYw5ajk8wD%2Bip8qESCPrLDLQmKQMJwOGEYAo921cBZqe1frNVz6ymy93yVVavPGfo7zu6Yggvp2OFAFuNauEUdqATEaGKKZzQ0Ut5wF%2BlcFSwqMGjvMYfE%2FJ6mocj5xhxdGnfRz8lD6YgCTRUBYnACW3VPk7T61s8EoAeOwWrplr0mYYEiZ6wXCrXGcKD2JdclVuV4yOH3KzHjIWg6LcmjFh9k0H&X-Amz-Signature=6a7c1b7ff28f5f6d8f1e83b48e5e15917c469245f6d5c1cea2f6eea55bc9828c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

