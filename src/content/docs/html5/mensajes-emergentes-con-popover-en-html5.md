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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTSGBIOT%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T140826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGspDQBePBaJq2twJHFEJZar6JxRiY3RkRw1Nsd4z6nxAiBvqNHcj03kxWWnDprkTG7Uys%2F4rmvDIT4EbDJCFx7G7Sr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMXKVX3cHf4ZZuleC6KtwDyWMyvslF%2FnCEtuKIs%2FIHuC5GmjDLtvCrR7EBZ8ap9oiSkUHD44hW%2FqyqT2QKW79tc2cMIECL%2FMIz8d0RmW9OCs%2FVszc8fgiGKRc8HT9LMZjl6Q8nZyeUDDRUABzY1jCjCkw2kfaaXnOTr2iyQTKQuhCrgFmUWejf3fS%2BoJIjzGRbdPycyPIwuNh06edvZCsdUQErqcd21E1seHJggt7EQHqUyogio3lpUrq7H5m%2BewoJpSe1abt3ZpuieMDT23jvKcqIiQNW%2FLub57wz%2BL7te8eHcmINEJq9Ha0WvwvyAf0IHwhj1Lq4WQyDK084ytCMkCQpLaF0Qd3nfYKhpTffcCef6%2FGWA%2F%2BbLRMqe1Ck%2BRUX44%2F%2FFoLVYS6%2Be8bK6Wv41IF8h13ojtAkD25FnwSwduMFSYKooQFJUWI0y4%2F39MEfQ40N3gzvmPDqm18k3O9GA2QYJZS3KzU31QA2%2Bbqi2yyTot4YiLZqX2c4RQs3w6DwXM2PTP2KTUR5Vtwje2YbBtZ6RLEr9ZVd7OlvcBF5tcetIMSwQS5H03hMxg0Y7ZnhmXz03BR3gTRKgaSJzRp%2FlwNYgBRoqftpx3yxUnyi3c01anxZhm%2Fz87xDNhoHttAoltprpG56J6KQkO8w0KbQyQY6pgEyFfO6eNA1OQd1wOAnD10T1ytM96siajI4aUiHtl%2FnBAWrQyv2B8kfhxdvGq610fY5ARmjdpQXkHtJGSRZAIttGC%2FepBN2JSq4beQ%2BYTEbVhCxPVoWhzlYaex9milmn7O6sUlLp2nYgmYcQOAjq71U7nI%2FGTuy7FQC%2FDXkfOUJyvsMSUZ6nihuW3gD3hsU4JciBeLi96894y%2F1sgRWSmC4ArfNranQ&X-Amz-Signature=35be6616097faefb990e2b2595d9a831ad64a65e153f47f9d4e2e871b559cdeb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MAMAOCL%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T140826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIfCA6H1l136KiSAYGwrX3X2lscmfkTC7sj7E%2Bm%2BejcwIgdvdlFDAzCbuQIBC1BbIMFUAKaVBk94bZ1RYpHT1XxMIq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDDPr8c3dlAfXSeWMiyrcA00Kq5SUYnYq8P8zhFMvQ6qK5UxRV3mluDO8I81h3UCODTwaJHhdoq2taoT8JnHKBHvw1MSpJ2cSxwUPGTML3ZZ6s2BgfmWlIqnBFJq3teds5AtmU2GU8hGyXXldjvQuObBqeN4qI3ixYdMU3PSQkQsOQPTkthSqt9CUUR20oHoiLhUHXty2jc0OSClZEmQhztduexWPinzwK6Zmai75jeerS3lLhA8i9t0RIdagoLreANcikRBRxaUn2SM5RfGR6JK6Rg5bw%2ByI7GtUIxPFdCz9igFjvrYdQyO0Z7BTXux%2FaP2i%2BQRzh2%2F9e4mHQ5nDUGNw%2FBIhksV%2FHNjVVLyTnTG4c52aPPCFXfdWvzwrq7KjCijUBtvTLZx4CuH02zjLj40fILg4l5ku8soWPD4rYu%2FEo1y2NTALU%2Fg3%2Bo2LEh6mUjyep9a3PiRDnJWtU9mMtrdDW7fWIOXYfhyszu1eRomsJpkeG42T2IL96T4yhpupB9enqjx8MRoAGbq54APsgw%2B4UXn2MCMgRF2fBuc04ZakTSCQ%2Fa958JzCGwG9CcVqws7N6vuMBazuBvlzqpftqbdyin2BN09Xm3wfGHt6tIqfoSsCijc64XwW0iLBCZGP6prhCQHGCTMMW%2BGDMM6m0MkGOqUBPCnQkBeAvmGZyb%2FcS0wXdlLdfmvtC5vxvaVXwMaNjYrzTey0ITF7Q4%2F4MvFj7%2F5hyWBDP2%2BB53ejsxv1TMdwKICsPZLxCxazjKznFHUFpKdwb0jE0wFpQZJicIEqnVY%2BPYPsJ3BhWUj23amoi%2BOv5eQVsTOwF5fE9fzjl2LB9thAwnvVg2RdxjpL7R7g%2FheZX7WD3%2BKhQNVUa5P8PvkOi%2BcJL6wY&X-Amz-Signature=0aa6e32556e130a44f91d658912e67c421e0f07a13a5568a059977225167d488&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

