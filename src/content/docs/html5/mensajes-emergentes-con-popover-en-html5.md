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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AYNZWC5%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T135354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7kbA5%2Bxo4SCYQMN5jnXEJJsod2Ss8ULUvSidjlbuyGwIhAOuE4cuwxD93TBMgLhkpnpIxFey6zPBvSzpkVA5iVZOvKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyGUU8tfKxnfs8PtZEq3AOWwgQDDFo7d3UfnBUu5K9uyJ1DruMtBEUOw6n7Zao4vFdT1G1UKVJCSLp1z3%2BaQm%2F9D2t7DxBE3Zk9lxS2uUG3g7ikA6FTICLP7hqFdODyNgmpepyrrRf5BIGkr3Cg0%2FFFea%2FYgOHMy2n07jKsizjDVIsj6VjVGZa%2B7soAlf0FihF3HjrVL48WlkHeMloe%2BKU2EHTf7xCHNlUSqEoXCeIi%2BSrxe7KLcGYufen8BeiJPEVCx64vw5E93Cjh5Q%2FUx5NTFs3Xptp4ZfP5F9ycBDM1FA7oADMg4pPoJpw8%2BxUDaUiqQAokkRxw%2BeLeBjTESrapVbFuXaOsT%2FlQUTgDUX1VkItvVd8rZLNieZJ7mjwpr%2F1KDm88drv%2B5T2fplxOgFWC%2F22Ch6XsS1k6Ci4EfpLZ%2FZh9rQLn9P5kAKnAfikalKspjGiFrp8I%2F6iuiBBVF76U7q4z%2BMjHkNGIgAQYOmB%2B2%2BHEmoXIVA4k3Of4zFsiFutsThUC2rGJt0dl82obOk41O%2FikESwwvCcsR64eUBAWU1HEpIw01V39riY5Kfi6BcLoZoaew1FI9oleSIhpNk0I%2FtaggDzDFdaN5vTZ5YsF09Zh7xFGZegQv3LPULqY3AXAzTMv5u8ChdnjiDDgmdXJBjqkARUZUDFX3vri8vMfcgt2xz5aJy%2Fx4T4Vy1%2BanfHyKpoPR89A2RMunCSUgwk%2BvzgWwKGp%2FjBX4wB1K7RrbPrnEzMkNFwJxQqetGQi7DkvWya3fBbZE4Ubm%2BncCLEF932E3QGZT3%2BhgatRcThHuvwRQvyyt5znUDsqxLQfauvkYUt2vz8Of5B1kFzCRrRyXQuXtHJrMyNBcbogYScDORThup1YK2xF&X-Amz-Signature=0144086c1f5cf6394e61587ebaf3dcd25369aa067cd7348ade9307ab390f640b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642OHN73X%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T135353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCUgu8kGgmkItF6d7U4AFxoQbvMp7GXLUKHM36uGdFdYAIgZ6gnlEICTmrapPd8mbx4cyt0ESaCW2PFX3CdNY3CCBsqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJjSE3HW%2FSXEkj8JVSrcAwVSeHDLfFd9sDiiGB6HBmeO3Orv8Mp%2B71jNHtKCiw7lB0DYYlZEFHDUKm0HGGZ2ptoWuJmXlXEyzhl7yCvN5hekGUiwDQmVgb0NCAStRN3aimm1ALVaGy1LmZiSsVFMavQ%2BjgY193Az%2BWYYqC8GkMOaUyx%2FkNitZWBIXS13rRbi2OvcD5dMOEhXVoGl852U7Byz%2FiCQ%2FWqI3%2BivVdv%2B4KeAyCthP0POqWt2p4kaTmHQgC9wKkIeD69emhjlJizF38np2rZoieiVkbvoULLuhDR3IMMTLmsS%2BK%2BV7WNrpqWzfiLJ6PJOB3l9HsU7lE%2FhfPunYlVxd6U21%2BQFFZLmYt68guYG%2BfixyicLVN6T4RaGirSnyfMxgLeKEZZDE4XvDxdsOJ9sDP5GZCBiJ9G8s9Tb1RlQDDOPDD3SkHhR3u83xrIxm%2BFmaV8%2F51O2UEDtP8nsF9RBrlCGpyBRKPm2T%2B6UX7yO8tFFPF0KMSBq89MMF0%2Fdl5iiwN8jafUHcOxKi3lXjpbVo5K21V8sEDxbS1IyABytmBP0lWYVgy8uHzUNPIGjZS5nQxwPPMz54HcEydQwS3xc4nvuEsPg5v942g%2FOdJuBJxBLghnXidk4Rjqzt0S3PPB9Phb7XO7XMLya1ckGOqUBcb3gIXIAHrcnrL9I8rsK%2BxNILdHyACvJW9MutlkDAx63pUnaXRbhVeqbwvy8rReotjGEmNcnkG52wxL0pJRpxXSTzwR8KwLYBOxzZrNsZtjbGkAuFS1CKttkBIYRC%2Buwh5EjB%2FliEIOKCw9dDaADG1bcDN7iusXUEnIbn4ASibR2zCMcSvZUIbSZehpuU%2FHdVLGRycP6BUa63tIVsu5dt0n38%2BKM&X-Amz-Signature=1e81b400dd9401784f47cc048bf6999078641155f22d66526d23a3508e9e3466&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

