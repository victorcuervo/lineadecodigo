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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCM6EXRU%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T082517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqzpnqTXKyg3lu6u6fu7EvyvyGDPq1DgRQ3b1duExtdwIhAIV3OJyI3MUNF553fX2zOGPvsNAu5Tr3TjJOtAILBzzfKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzaJMBwNGWk5MwK51Eq3AOUxSo4HVbr4kVbh6Wrxjt6RQcstb9YqJ%2FULvyId2qL3XGoHQWO8FBbxU7jf0W%2F41g6rBMqT8dMFZiLOEvyaxVp1xJRR%2F7rta9HVINSGLMUv0Nw17Ts0Og%2BAXex7U%2FptmPLLrb80tXC94WFSZPr0uGvvbq4zTOHnfJtr0g%2F2I7fIV5YVNbrDlYZkG8WGyRug8hmGmw9fFX6FbjNw%2Fjxn22%2BAqV%2BgwQ1PCXBV59IsLhDEFSCNeyvhxvJMuzHDm44grPUx1heN2c4GLWtGG1yQ%2FImv9UhmeQIRHy1xs3nIKp59wfoD7RMgyv%2FRY39RZ96V6iuqlpFP7O0wtJrT80p5ZSL2vO6Vfz9WDlPujA%2B5YObSfsdw4ZXiIta%2FeXdHkRWZNkBxObpo0yHkezKd80Zzbe246Kb7KWBSUCfeTdHWgYicNaYw69po3yREjC8lBNuN9FQYZ1FRNc87uCIb%2FaZoRtPMXr22VEBu4F2EwQ%2BM5Y%2FizTMqf3hlt59XQSipI1PO3d3ASN9jzr7FJMVbHrOYOVqViqkt5TSdXGgzTMs35xQDjs9DzTZclwa7x6%2BL%2FHIeHUcgviKyMzFkTsXrFPm3gDucmwdKyF8Dq3yQnp%2Bm5%2FD3u3NnZy180UQNv4nezCApN%2FJBjqkAfu2fx3BUj77oKqAYM%2FS7qIGwx16B83iXhlIyD1hmACA3n4ohE8xK8Z2hT6GpBITwLFQnsEadTYKFK6fsPppq81QevBukyUuC%2Byb1XXFoCKrSaoJZ5cxiXbqHxTNJzJUoR%2BIXEqBfdIYEW0otH6Z%2FyYE6e9R74%2BKcrLN3SElIDw%2BWyEnBOpsLMY%2F7h%2B8vk3gqFCt3SmlLr7DkhwS6lHaX0poL9GA&X-Amz-Signature=aa1c8de46a42068f444167b4d440815af5a1797abdce503bd12814a8d89d79b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYABMW7A%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T082516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmYY4Y4AdabvthT8N%2FIpwxZWDYRwu5Eiyyk4FGLO17JgIgS9KRKSX4vUQ6EF%2BvLI%2Fq6UzBqiFwCBpuao6ilhVkHj8qiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEXmX5eA99on9VLhlircA7Cjvmb0HYfGxc5tBG%2Ble5TUBLNyInRGjGbq748f9jkzD8RYDyR%2FKf0KEeFaFM5Oe%2FKQOIUhoisOkReq78RAYaaVd9ePZj5GhuW%2BTwYSx12HvnbuVhcM%2BLvWaKb03sNPsC1%2FlF4%2FGNqh5Emwy9Xe3oKfvi6f0rDzKYEf9C8iFj9Trcg5LnWkbp73T7tyyZU0WsvGGEAg6EALjjmRT8QMqAD8B5LVoT8ogrL%2BzfZqNvLPGa%2F8QrZJ3WuSXdr3FbijnW3G477Bugi4sNN5l0J6l77htpBCYThfw6AUfjgv2x9SgOrt%2FWwR0%2FXVShnzBQmv7n1tk4EeomPI3xkrSaXy85mAc2fh0I34XVtCiPccRq%2BQsCzI05JUJYxykeOZXchAHXuJqCFAuZtshrNSPpYaAPCe3TLu48hv2MYUbyrh6uhJao%2FcVOTr7dnLkIOLS6S1ENJt85ADzqARqEyK12l%2FCV3ayKvDir%2BaRvvdryoLBXGOYiVJvvXXZFVABXfZd6wFeIdryx27RNEs27xp7QEUO1tcK3RQcL0X%2F2E%2BuVWQcfXR%2BFVrcQAfPFYEQGasbh9WLG1TpX7gz5tiVmf72EDOXDikrNtkvAyhke6cYmxKT5jGPMh3joEb4gpRU8wSMLuk38kGOqUBHsY5tmOOaiUQUYRZltvHvnTNaO9z6ws7Gs9QTCNx9DjthHX9O0DjU0HIbOPt0PPQf8S0i8X%2BssXg%2Bs74q8AbMI2ixUIu2Lx7jQkvOh7jhCMlXedWuOcDVsB%2BZ4evvre1bi95ZYoaNGp0YcseVL2t%2B6eLivfPRNN6OyQrj3Z7Kj8AdUXnr7OQwQKaetc%2Br9P0I5%2BsFz6zD92RThyOphZI9MwCRTX2&X-Amz-Signature=22d0097cd51b74fcb88875891df1ddb836e3fd7ddd513eba8fec0862673c17bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

