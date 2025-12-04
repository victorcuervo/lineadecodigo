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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3XI3NUI%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T073054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQDggLTjQLYQv4bz%2FxbxD6kr5eCcPKtUBEi0hN4IedvY%2BAIgfEQEbgjjchh2eW90pvDTlRLgS73XhXn6dzAga8gcPh0q%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDBJyfcHBHDFiy0ndoSrcA9F5kmic%2BxXqzUGGrz4G9WyoXpoMAnczIuU1Faso35RF84o%2Ff4aNxGdVR1ewdWCa9YxiutbQd4BcLfN1g3Eyx1oke5Iizwon34oPCJNLz2olCMbl2zR05wPVAlCcGs4MwJSukzN1qmSbh2bROyFuloMJGaV9X20OeZtdTKeQPVzD3WLAV9o1CjoYxYg66fSLbP%2F8unQNYWsg4RqAiM4%2FlTARxIUOGNy1KNadoz%2F4cXQzexlnKoVFa502uLqB3lCbQq2vBJkCHVkNWgY%2BRb7I7VNFvCQFyXcIXAc9lmBHccBgN3AcYJGgbwFltpPqqzzj3%2Bs7w3AeCpip%2FcPUNqE%2BtIK1o4EGlx994w0TWHvustu6f0V3BYdkEZlIVdiheuJPldkHiYW0Xk%2FfIwnhOPe7iqxPBU4OZLoWcfKFkwbTaZUqUgvUR0Sse8N7sErrAg1R6Q4cLdBg5UmwUQPKRYI4ehDCCeqQYcl8wEfGNahAwO1ZJoFEMOIvrtExVhupn9JnFqanpzlHr2nNDYVvCg9joiVpfGG%2FnJTV75Kt150ZMu5bePjaIrfIOZ0m9x7Ep%2BgiGqqPJ%2FdkqE70hKMUV8E7k0DRuliMQJ1hl2jHpBa4ZyfoGDz4CBdgaf4Mak2qMIrpxMkGOqUBBhXZfVXcM4yUQoXTFG8n8CnLSQ3l9bJRMqRkU%2FV%2BB1ceMrdSv1gppCA9iyz8lXlqxAWJj5%2B2c6i167YYuAmyxTBFQEJlL8YPGL0TbVQYGtV1AOEvJfONWSTkh02nC0nUmjEQOCvp1k1Hxmo0S12yJjQZN5g7l2nJoW30RK870JP20E4H0FibIzpnyfU19CjJpOqQdVLAXQTOrMyx19WFDYwizLQ%2F&X-Amz-Signature=546ad56c2d92106e3beae8bc7350aff2059dae800089e595a051b152b75ad8a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AQ3BFAW%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T073054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQDyeWZJ%2BUMexNXuzuHDPowtovoYy1G10gp%2FRd2beQca1QIgOuNMAWjsAuC4h%2FNuMMk7ICMFbFqBGMjXXVUEUIPb4sEq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDCW33PIA2nNmblEwVSrcA%2FKFDNNotIh%2BXOuB4G99CBwy0LE24x%2Fxe0tO%2FGpOEehGJU6KrKKxCHrCygqAr5az4Yvf7iIBRCyYa4ZUJrcRkXwXqmAh8u0%2FpAQfJOuzER5hqaFi4blL%2B3B%2BWyDWGfWFnUVe647jecqB0w%2By7rthNpZsZ6bd1cEeHm99VnATu0PlC3EuQ1TzkMQsUnGI4470QGLuO5pwHr%2FE%2BVYl7r48hPl9ND0daf6KhJcVsGYYAbCq8Sy3nrplzEyDqObu3GFcthLvV3jgtwB0LUjdyMKYjHeqLHEvnLujftRdp3HAoQCpJChPIZ%2BinjIffoQMFTj4LcHq7t2PPwcME93E2xdsOaFQW8QnAt4rGe1x3sF3o2adskWJ6rKrtsyuJhKMUgPJw%2BxsPWcUtBEX3eEEJuIBblk5geC%2BHox2NtYIe3v53bZSZdxpJmowkgQpQjrsT8sVOjR2WZIlhF4WGxtYcmfak409pjFF%2FEjn3fkx4Cvq1lfkZY4RRLYKqWDr9WBuXZdV9BySqiQdgGI%2F%2BpdQHPJJfgh5L8NUTpmFSDV%2FIo%2FCUsBZenl0JwPeFaRtRDgYqhsleQK9wEgAivQo%2FMwLY38eiAR5D6KqKXVHEbIPOOg0%2Bcb2BLapwLTllqEueIyCMPLoxMkGOqUBDELlhB1ch5Dds74VZ6h4g1NI%2B52Vjc4SW0tpJozdXnAgwGEMr6h%2F3JyYPROyGlqAn3Uti0cmO77%2FWKIRiFxfYSH0TE7HsbJ3bjWqt%2FsztlibtHiinRdz6e5V%2BBDF0TPvY9%2FdzYA3rH2eWeOtnEjiNem%2BqqtXYQ5e5EqF2cU%2BiQWz1stQdFXFjxv1M1OhRBVhDVGr3YgfvmwxZEgAVWLgASoyc3i8&X-Amz-Signature=73437662500ddf8d670f2ffc9a0335f5020a9711627e0f4b6a2cea0e11c5baba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

