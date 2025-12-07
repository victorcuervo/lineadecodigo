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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645SU4D6G%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T231148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLYpQyqn4cuq2ct3Syw1LUKES%2BbSWsxYarXj%2F7hvrVYAIgIkFSZDaReIWm5WSq8wVdHPiC9zp1ooXK87NHFyJajWIqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH03iRYlJ9GvgIM5EyrcA9PNa2BNrNXjr5RcNfugaKcJMGDTD1CmQ8b5hlsU6GuuV%2FF6VNtxeRgqW4hB%2BXTWSenwx7F9OSfWvymGURK%2Bx1Y0YvN9oVSLg9wt7kHLUwaJxO2n6G2KaHRXJ3L72ISzVZsE5ZhkT0Fjy6pXlzZU9rpdQK3473GTJlqaWaKAExjHidaJC154xRgHCVdAO%2B7CDROQ7VMCqpO9TaYKRG7HBgXPLclm5m7pRPC1oEYzYKRsNG%2BTwojERiKxix2EYrislZEfbCLyQXwotoCY6hCyT0V51yySj5KDhKqIL8Rt0oulC9Jv4izOyT8qxA2hRPGrV4Rw85ulk90IZDBIViq%2F6YuHmVUp%2BTrdexvrWsnOGWuxa2sPLIuwj5%2F2qWntscqelSkxtFXjIsP%2FTSmq0H6NuDIm%2Bty2yR7f6TOykZXEqZp9IZ0%2BsKJSIvKnJ5s0DJuQwGrPiYX4v0zNQrya1jWU%2FHH3YdG%2F1SDFQou6aR7%2F2nIhI1sZC8OTbbV7GuSDy8ReXsr8LE7MmiS2UTx9nvg%2F%2FyXdTWLvoCeBr47c8QvHA%2BDAsQkhrfTmaX8LS8JIsJq9Y7QpPcmRFOf%2FlX4lKzvDKdyh8d3%2BYmWklCl%2F8B8JsMO2vxExrKN%2FJFlAFiLWMOGE2MkGOqUBgBXk0e3mcPA3Cfmp5sYOq117YNlqVG3JqtYlfqBf7UjcglprTxHydmH%2FtCLkdUcUY280MGaUPQKXzWdnh%2BEcnam8aFMJmm5e%2F0Hm1gbYpVSjSDiyAY%2BhpX021MhKksKM7U9qwjt1tmumVmzMozwVqd%2BhN46MhPkeSqpWlbBkvcobFK6BGgbriHhyVr0owmoKaHv2l7CVcrYXKlO%2BJZhCy7d5qMTa&X-Amz-Signature=2b50ebe48fc58419abefa30c56a66ce3b79ffe2b713dc11a4155d588e0f73a80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJRRI6CB%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T231148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDwj3wBpN7WSwe1je%2FVEC1PJtCnSsx8Zu5TQdvdr13pSAiB%2F84JchwukrbLXpVMA1dL9vsQO8wOwGF4u%2FMQpHOo0CiqIBAiY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXm8fbknUk6hEDof0KtwDdyWMCBC%2BZNPREoFq4r%2BPl1PX6rs6GEFyxhM9RDUfvHr3dEut1IkKD2HyE79TcwPYncPrzhqoTOGkr3%2BITZQP9sYCHmEY6hJKmmI1Z49iUMPjAieCD4ZCfqFt9kRltMuBnB6Dqq1p%2Bl4hSTIb5z%2BGb0IxC9pdt88BZand%2F41gx91PcfXPfpzhKwtCtZv2vxUiJv9Kubt9M0QHtcUWenxZs3stByhquJpMisT%2BQes4BGrRTpRez0%2BCqi7yY5%2BUCEJN%2Fk43WPLsD%2BGOmmwZtk0xGG9AfOql3a4Rn1QsDsNWQzD4v%2B8Q2zN9MPvA2B6WHpouwDR0d8B%2FD8R9EojiFR%2BFRI8QKQ45lTS62UaT2W%2Bv%2Fu4HiPbfpZxM3b73p097KMZewKhnnM9v6Khus9UyvUBNMv2QE6BbbFo8bZtsHum%2FCCdtBUMazagPY5CUvjBk1qH153ze8Awa9tpRGo1nBd527Onl%2FSbC0DSoQtIo0D9UpjrN6Zkdc1jIhOe%2Bd4im0hpMhrPC4m%2B%2FC7LbRqb0yMAv0Hea3Qlfh6MCTMom5yV5ulwNJPT37DCgWue9GVQpXs2%2BU9h%2F5PdAiAUbdI5nr%2FuM7tfcnIcXazI1HhUwODAiQxYxp8gDSvZXjz5wXIkwxIXYyQY6pgEzeIdUaPHUGhZTTDtJdO5%2FIp%2BSusvvl3kc5Oe2SNrep8ub9kIBBBrAysFD8pxAyi%2Fwm%2FJ5XgINbjKfJstqCi%2F6p3u9zVOzBogb%2B27OeXlpfrDNdW4C%2BX8XrohPoD7RGltW5ykh1Yg95OO9INhsVGvAAdxnfs3zHdBmjyQC%2B8Ev680og1p2BcO9hctvTK1caieHA%2FMh8HYa2Cu0EwgjGEo4EvTcS7VS&X-Amz-Signature=66e34d70c097f2dd463986f29e643110663177fcd4fa152633d679539fcd7aeb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

