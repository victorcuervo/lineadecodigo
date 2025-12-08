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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMEFU7UM%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T041448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDBvpfx%2FSfEDNOW3SDa3TpIEBB6xyxE0eWsuhU8ieWr0AiAncFNb5sX%2FhKDfH0lSEvKjOlWXQKg8AmxeDr6snJHPWyqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOODqaNttrvbxH%2BX4KtwDldwgGX36kUT536I9agFbRYMXk4QMmui9A9vxxxx4W%2FUPlBhFSNCYtqaQx%2B1GyklKSki8E%2FqNKxj8xyULzh60LkyVAvoqd6g810sDJYW2aVBi2MaiT4l5o4UWyadi1P%2Bj8i5wohTl874OcaRg7TAVdjXakD9uuvMgdZ7X0SWIAHjvVVF7Y5VTaypmzVZ3gt6SOcNULuP7hpm5VUW2wmNgU2mwFoTKzSjo%2B35hGwiRZ%2FaRAbc1Q1cyvkwfls2%2Fu0aSo%2BH1s5FP%2BcL9a7V%2BHTqMk8FC3AWQjFlcwf%2BJ3I8Xt4SgswczQeX%2FV0oABjSXqK43kHkzDSleJGxumJzngyge2qxFk6JLBXzUmhFKopU3gQao3QGiuovhkawMJCPzj0%2BXYJwhxzNWiJlxmduq%2BUyNz7yMlCJKJEpzq2%2F%2FV1mskuNzqUxt20EjnnhcSG17L9BfDNYBh2vkyr71JkegrmSZqf5fNQ%2BGxnsZUHEsIPX8ZFvf9nnMG1BxkYHjy3lC51Hw7Vz7gfGOVavZhWIj8pxn8QVU6Up87K%2FDtn1oTUq%2BwSDZ0NY9BalM2TgLZw%2BlTuS80UnutskHMSYO4cwVxugcfb2zuweURRqmfsg5KoR%2Fn09iwtqVxFsYvXSKVbkw5ZTZyQY6pgEjYDzxZilSSPT8caS5zd3s3dJ%2B1R7N%2B8WQcWMEn9J6X%2Fd4vc1BRBVBDz3cbxBsixNLKq8LGAHrXLp7j1XsOiYU3txs4FTld6Z8JjbCTufRpy1Oo59FhOUNj1HBJqsIZ3PjpMv0zeqIaokD6kCFQYjXFoxwBnk7IdgOB1p0Hz%2BJt4q%2BEju1BaDLyc14Vwz3x5KbYuvjRO6hQ%2Fa4%2B2z%2Bld%2FBooRgk3t%2B&X-Amz-Signature=235b1f878d61d588a1ee2505ecf0b21b17a57328bb00d381a181f8e2719d856f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZIN42VL%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T041448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXXu7cpXSmRohmr7nBSrGAWQTTqFV3L9Z%2F3Gh8qxASKwIgJVyQIkm4FGyeFxkn2uSQiVufe23rEui2xjmJe5YUpdcqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN2Hnd8tSCSzsojpSSrcA1ZdRjfquhvzYRjshhD7%2FCGUWfxNNAB8ozrmhSQzi1OSBGgk3ey1ZYYQHt0ONOBL3X5ONTe2QbfvCRHk2NwcvO6y2YKfryUIDgQjlWeAUCMBXqSnuApFVFpQuJLAWSBdyl4zPvvUZgkxYAa%2FxUeb%2FCS5%2BSuSvzys6vejlFuPazIBncKONGsyK8j4lYha2tiITi97EgEq8hxjtAofquKCaAkh%2FcFOuyy2sAtbvPzbGZwo4uCoGhdgjpcTWMtSkXTlrJ45DyREbv4HEdHZF383Pgiugqqhv%2BVkYgw1NNAhGnfdOqsa4yy93AMLoRWiEGLnn%2BOpwMIT9GVkiRwTbFYGScOCXQEjoCw0QppVa9OU0AdRrtOZhitApPzPaHUH6UqzADNbEmyJjuPlENIk89%2FuXZmGPAZGdcGVgHAVFPye6oUdx4o7W8cPgqPstti3JuTOiiXDJs1ilUg5HE5jvj4XHr0asVbb7AkXhoP0nyl6%2FHOzcX7fDhssFgYdzmJMwN%2FWdHuH%2FS5C5%2F9Nh8PDolhsUA20W2Yhr1t0JOMoCvSys24y8oR%2Bv%2FtNX%2F%2BaTpw23igPNhAB0TO5%2FZ%2B%2F8ReeH8mePqanDWJMCMdWUIJ1BCMhOoxZmOqzxA5mWosWKgSmMOaU2ckGOqUBaIh6obN3Py5ltO3bVjJByS0M4kl4XrKVb3RoDdiF7THezRJcu2tInv9%2BJcryJgsL3u2VAEgxByGO90si7IS%2FrQn6NNgaMZPxSAoLa08ULEBC%2BpRF9I5QZ6YLJlmvE2UbJHUTU7L1waTgT%2FLVzLAh6BVmcaGiisZWPA5%2Bq8DQS%2B9mZpbT5I2x5r6ueLdE2mwMY%2FfZzJG47zjHnEx6tFK8OHl%2B6Kp3&X-Amz-Signature=7abe29eb94fce1a59bdab44cd33f531fc60c765d9668c9ed67dbf59ee3b49eee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

