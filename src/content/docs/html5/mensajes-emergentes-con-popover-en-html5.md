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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6K6U7BR%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T112407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD51zsmtusYI4X1r1%2BABENeg4%2F1ymKHmp34%2FgZz5gCXBwIgT3sFT7gg%2FO7VRx8KdLwS%2FkNWIZky1Ddh%2FKngRThCFscq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDA9%2FeVJUgBblwp9iWircA4pmqT43ujJXHdvqUjkXjgOpTX9pykQaiOYIQPhciSSpAK9Dqw7p8o1FRR3Wf19NSjzqJGKgiy%2FNHmehFA2zREiycVeYqSPXVZB3gm%2Bw6GHjWP%2FMLclznhANQ9bu7jo8ze16Q0DJqgo%2BGdo5GnCD83jMI4ru6o7zgT34Uyy%2Bu4pdg6sId5wRfkD8md9pSzFxyYHpOrC3v38cRmyDjBXn9LlYaechnHqvdZm0KBOetZFEgkHVuKq7Y8AN6KePaYqb0m69wMVxRJQRT6kE85psCcjO1bZCm5DVLr9xt%2Ff9h4kssYyz7YZ1h%2Fn69zZIrLOKppkevaZHHadPlJ2ozp49Nn0VZx5vbSZbmAO1EfGSTSbiximcBYj9HxuOCggbcRjPtPsxjbF3AYu5dk4U4Y15HK6q4W%2BJhSJnQlhg3i9laaSZ3DvdEM5ZbDwDAJjs4ZzhH6w464aqBPqunPYG1akZlc7IyBCdc87r%2BAHrPibHPXGXzvgS1NdQPmuUClOaRUx%2BEA9edtkSdQdwvV%2F5Q4CvfTHOYDuUK%2F4AtDYdcRgPHUy99o2JXcUyxR0UdeqMEK9VpwA%2FlDZS5a%2FSBVRFXoBsnaAYDjfzJuSg0MkjsaCD%2Bf5qdhbb9lB9UOMfBaIpMK3KyskGOqUBYuqO1jazTFNadpFtBFEASMM3RdhPnurwZYguEqe6ipHMZAmbovnJHjrDKnpozbfbvJwI9BqVS1R7Av5hhhdPv848BLv4BO2eoPK38%2BibMRjM24MyM8m52OVm%2F0n%2FM%2BNZ7hcI%2BfIObJy%2FPpKPMurA9A9Fs%2BW2L10ivaEoRbi%2FvrpEBcomaQck9pZKPVv3VZwPrnmUNbfGQaTbGwA9xjloutJ4Z4Jc&X-Amz-Signature=c98f3f3953d0e86ebc55737075a0e4396a2d18c28fb04a8e744b2d3310b24ff1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SMY3LX4%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T112407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCRpzRfZ1c2tILfwrpgmo25zh%2BObi%2Ftw4r%2Fq9t9h%2BIoYgIgWk4ne57Hgwmnh99Zb1DI1HHL6lUPmwPhEEm4kHZu%2FC0q%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDEti9wdw5aEgqZRnmSrcA2T82Uf%2BmjIuqY3%2B6yRijr%2FWuUEKN7JH069STf%2F90vaBx9jpC%2FI0AMbBqePXqIT2xqVFTGOSuLjNGAZruqxWwTWueoXdpQR6AKWMZqOCjiz5J1pbT0s6Toze%2Ffc6uIbefw4Vv4loJY0qV1kpcNGkyFYfglhen8VMLiFNBiAz%2BWhd65ynfwdAhXyF2tQy5nZSv1sfMT%2FxBUEno2tbsT7Gpo0MsTn05NkR7Df5TVvWeLPoouMV7C8MPtqWoYhowhwy1%2FbcA8XoDntg8j6X0QHgSjH9IGRL3mqEWKWk0ZHdhdN5%2FvU5oMU%2BEpexCvG9Uu%2FYLxPQ6tkfntpK0oXA3Jfyu5MaZM%2B5kGkW%2FNCzqyD8TKw3z5zKsnsUUltpI4mf44Mzexh%2FLula%2F0trn5GeLMIsKtuVTNw9NOQYU%2FQmIOzDR2ptUbRuATofJPGPmd4eyT91Uyv7psfB0xJ5W0KNQAT56g6zMUBr7xldSRLSiHpMiNXqDR8k4XDnUoEhKp6adtGU9Wn0amVIJqRcVxLofEf4%2BI%2BNanwdFnitFYfOFOL6IPKR0kOykKR1MhRISapB2DCL31LZNLQBo%2B86vm5vnJ5R5A0iGidNXsq1YWDJFgfW58KJPl0Xsel%2BfmnTnTuCMJ%2FQyskGOqUBp2xAFzUtSygsRF20ly%2BN8c%2BAzK5oZPdaglRVep2ahYFXUJfUjvA90Rk6hqdVcYen1KwLNqcxwvB7GFGT4hUqYP3pYMM6zoU0nEswxSGLXXUfMelK7AUAsU5Gwd2j5EnuJBb1glhx0P9OTK6t28mHK12O0bNM4m1uRCv1RvwfsXjKutBy1VSY%2Fc245g8%2F1aiJNkoYaXeaSSYp4disDzM07g%2BvVpMM&X-Amz-Signature=5b091d8c734f1643a5a5545aff5cb944c02861b7567217b2628a4b64a46f1d3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

