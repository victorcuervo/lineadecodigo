---
layout: post
title: Mensajes emergentes con popover en HTML5
excerpt: "Uso del atributo popover para poder generar mensajes emergentes con popover en HTML5 en los que se pueda incluir cualquier contenido."
categories: HTML5
tags: [html5 popover]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IQMBGF2%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T165230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJIMEYCIQCWBvEpkNm9oWk10KGw%2Bmx6q4hAO7IAFC8dE3qrjQSyVQIhAO5c2%2BIjzmqkY4kKN7CD%2B1ZAzwFDQTa6J1CTtakM7fMTKv8DCDEQABoMNjM3NDIzMTgzODA1IgxhoAQlVsnhjoZZXJgq3ANwkwzyGezFNKhV4PsMjBCKD%2B58UuWkaKqGuweJ0xnwF%2FXQkmBs2b3DzcTLUaYuOLB3BYhHsghrilmKfqv21UQCovf56ANDjgq%2Fa8dQwvXzRQXVp7qNXZ%2FA8KuBGuWfQPODn4McLc2dTDQMxlU2IuvP4OKqKDCgG89ZAAd4sBVEbog2O4qm8zO1BQk7wUMvKowoUCHjcdOIMkB8bL7koiIbbAh0%2BpEGcR%2F%2FrHXR8A8Bg4mTtR0zoIhg0AD6PVT3pm24eGbb0Vv%2Ftw8Dvb%2FFXUTgAV5jBlri2AAmzAa709rriVtUVYgwNGFw9rNxGQyesBIZTRuilZhDsm7MWjj1gsIbQ2kouw1og11BsPt0FQxpuGqMKxeglYu%2BmoM92y%2FilKkg51%2BuhKAHhimPStAOe6VKCEx2w1gtt36RAHxfsydY4SfeWlBVQvW7Mg92EvDg%2FLcBXnRCmE%2BLs0K0vQRFsChpNlhyOdlcTZyeYPSrGhpDZ6IO9SrkrMjrVhtT%2FYaYRlm%2BT170ZbNlUtnEvM3cjF4C4%2BEhlTGgA70fWdnk7NBb%2FQKZzBusaj6%2FHNSdzk8GPc3SMCdduP%2F4qtap7%2BmL%2Fq9N88KjeRNdotWoPKv%2FpXhEfvrBKf5WikCaDP%2FwaTDGwcHJBjqkAXCMebuGOZ0AWvVzbjR%2BGci6DhdGukdvvCcf0vqV91TAkQQaeu6yDpnLZGyMW0fJ%2BHpcWGSl8PTL61mjCAQLOd0aeBks5UYoQcwMXm96o5bEzH9cWMWV8y6GeerU0paqKUooTU%2BtY97jDZ0QyBVrBHY8Fk5zrynQp%2FPiczk6oZ%2FIYDRdU%2BACvYeP4AQUIVjtNEbsXFGI7o9na%2BFb%2F98a9WUyCjlk&X-Amz-Signature=3a81cad51f74d7f39e11f40fc94534666065970af25fa75e41d99aff97e21b6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XW7KBGNV%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T165229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIQC09vBt73379qLKaZYs0%2BYdLlM%2FZtPnDmy8HajneeFmJQIgOzCDxuiY1jt33rLopQ825x88GAF%2Bl5diszbL4JFAKdgq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDKEq2AO0M8soiNKgKircA%2Fbb5YUSIHh3C%2B9k%2B%2ByniPWqThvCMknUfzxR3Jl96Ds1xm0HiaVIG%2FKGgkQLn7FcIkdMn3xiMx%2Bd%2BHSndS%2BCSeKfF2Diu4dLvxqazJEJBvNqDwYcaJtC2dk6eBsjZ8tHzfd4tKT4hRddPsB4pNw18VYVUAuM8gvYoHp%2BIh6Oa95UtAgEuRqZhDu1I78BODGXBhmbQK5%2BhF7ht6F0O3Jr91A1jcSrPDOa028V1UefwKbNRU5983SSuUTNI4uq8xQqvU2nm3KINlVcZTsLNeUM85gqcd2UDRF51SIHwX9J%2ByxFPumdtWEnkVkWXiBHJvzF6UK6L8oUQohM25T3OIvtdfEb2fjLCPtfOJTicS1kZJa2wnYWeb41QFttqDN4to8iZoQWvD8Ej4Nz8ARueLWbHsYL%2Bz%2FHp0ZR%2Bc2CeN%2B6HOSdnzfSCytc5yyfJxPolIa%2BMl63MNGGdGLCza4ctfx9fKwd6x%2BZV9odUMh8bZF2wQ1sm9tMA%2BwZSieLF%2FcuySoiCJTcK5nZ0yZUEtO2m3CgP0wIm4DC8aA1UzFEh9cclhA3GSL2b%2FFLfUxqcbLTiuSJ47Ovt1eFCDYZcfsD9L3%2B3LGkJN%2BdRpaa3YHyr4a0797QZ4m25o9ZFvAQsx7VMOLBwckGOqUBKelROGFvEjXQ0lvIaB7OMZHpb%2FeByaW7ZZmTc57ABpz3oJmO4ZEB1RHYR1KSCzgGpjr0MXTnoUdIGd9JKPv0r5oXAbYD51ERTEGoniBvYkpSdFDd2ei5FVAR8Lsj%2FDxj1j92wP%2B7yP9VGwsIoJxZoq7rmO78dSjESQ%2B7e0c75FdEJSIS0Mt28%2Bk0kA8v4qOZ6yF6wLB32YSYBv35XcqN0%2FxiePGk&X-Amz-Signature=9b5c2445aa89907a9688a62970c3eb90a58ce701c1987196bb08bb1d444c3955&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

