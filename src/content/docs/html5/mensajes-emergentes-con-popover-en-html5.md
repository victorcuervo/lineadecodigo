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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RCTULV3%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T165836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCsw1R0VcFQNHxQWG1MLuBQIUu308FF0SveKDau0Z9d5AIgZmiWGVSu6EatuvX95q3UmPTPRvdFhs7Gbj4Z6JHUXqIqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMnNNRKlo2%2F71pkR0SrcA0Ckk%2FDiOAWTAMHWyBl6URNny2M%2BY6SRBILNwmCk%2BGxYBEnTOihQ%2FnRzSlclBCgBjYWaq62RWlPv6DmvvwgjQMk59G%2F1b1voNmO0VjsJmrKZdn3P3FD%2BLiAEYF9zIF7AqOyXSODrUGJY9q6FzsRDwqp2AWfuTUZBye%2BdZhOkdh8KMgrJOhrZ%2BO%2FP28FKdOvA%2FhdrW%2BFyeqLu01N0zZDKzff%2BKKukdYoncVZJt6776A9GnIgfitjhA%2B15zQdJE6gnSKYLrnwOz9KNatkhoFJx40Tg8ox5qlNTdXbfRZqHjXi6Xmq8iDRq53%2FtdogdFE8nfz3Ce6%2FeiOfHgqEO6j%2BsmOrUF6keq24Cye1PX5pEr0Cq9%2Fkl8i2v2Uw0chB1nZXMyTm6UsFBC9a%2F3hR4CXtqrXthZBB1C5PlkXZelZgNyNlkwCe41CvtdrooYv%2Bco7kLjlRgfD4ZRPGubVGUMtCPxT%2FSyn5FfSBFtadDplVojtJCDvDdbiVTEwS0%2FQDnQjU2W7oPBI4FAn2vCr%2FR%2F7Ql02TE7GGPx3u7VE6YKnD%2FeLu38bvhUVSN4IXRkHLdLAK%2Fq9aexkT25l%2FPjrzVmPpqKJufRTHcV%2B9gCN1MesLZgl29a70HS0D8AJ54P4AlMInl28kGOqUBPtPRSCqhcz%2BdFazWnWth7XJsCRK92XJ%2BhIZCSSAShvAZu4nPqZPEtn0Xq9e27vJQGsy3mg0%2FkFWxkg7ndduYXtvXE0HI2Y7PLglPxgc8D9wg57PQifOcvAJuAiHipMB5GRR1EJDQ0k%2Fs2VsUqUQiMDkevRPuFf%2BpG7KUFX5vXcO8EvvJ66hxjkkO1W0kq6XhJZFgUYO9pvNoEJzJbJpUWAfu%2Bt5T&X-Amz-Signature=43bc9e71c57552d523844c825c053b1b689723ccec96820aed73e2558b7ff092&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667E5SWE35%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T165836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIExztc1XaJyoMjpr7%2FZO9VwtoFj49%2BHWN9bBia%2FePmn2AiEAzy1bYR6xh5DX4d1c5SBErch9I%2BKLyAOq5XiateUkjpgqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGRJNnRhHd3SCHMjmSrcA8g26kIGNZ8%2BsvhlS%2FHTwVMoyk7Jo602mAYxwnUGFqCkidQgGvr1kV9F3Fo%2B%2BakOp1%2BXBGkrXJ8MXTDMq8CiMfHnw9%2FI2Pss9JHIUXtNaRmnI%2F8FQV0aCJE0Ny0S79QUFCxdify7dzGmt7CPBtzcOY%2FFf%2B9BMxRWkzJgNdo%2FPZqGwrzQDteHawePcLmkz4oPKnhyTkIKdW9OzWFWOjIXmDGBXwkYXCqS6CnNAxy8mRmHpMN3OMGlL%2BYak4r2OVvwH5vkRPppc0V9FE7IRHtVtnuvHHYNg5poA%2BdM7KWLTHyTE5Z6ZZI9vpR1f17wFOqkQewCAMoWtgbWFngFSj2wbFGwSnRMseqplTU%2FKzCskdaeQV%2BCSxZRjOakdkzMHb8CLCkkDTB4eo4%2FnWh6snlaG7JS8RpN4mrsS%2F%2F8lMvHcYWQA1KXPufs8mpO%2FPyA98b0vIiRaE1jf3QfE0oE%2FwTOeiimLO46p73apK88p4xRG65k0hdNSAZQxKTunwexmHoSEV6zzyVF2H0O6iJD8CsOl%2BqQERjcsceu7%2F57TVdVEUrb5RQsRD3t%2B34otu2nMCiplC3HqigCDGIxIp7K4h9ZCi7RcZitMwfUukJgb6RvMQepYaL3y0LK%2BRIx6m3tMKzl28kGOqUBhq7H40f13QviGW6GJGOcOVpKvMrVmBy5r4Ip2WkCbTm9FWESgPLo3ZH8phwLBqPJh%2Fo%2FMoan8oFNgkKTHbE92pQw%2B%2FWwq8JgKs1%2BqdnJ5n2Hagj16CyhJ9JssHotSR%2F59d5FSWre51IseYWB9dXlsTpZz96nuCY51lxOJMjyF2NSDhgDjD1J6zq1WLrNDRwTeV9rp1kAh9Sfzr36Oo5d8zBaQIcI&X-Amz-Signature=b18e14a37f761750a00fb7c2b28843a10198fc3d1b01e1b778946918c89a6cf4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

