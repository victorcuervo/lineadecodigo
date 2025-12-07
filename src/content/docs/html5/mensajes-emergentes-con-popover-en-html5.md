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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NRWNMXK%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T155937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEGgWcXUX%2B86WWUcwM9U6vmP5%2FpNOw7JewfTcDyaN8WCAiEAqLMJ8BCaUesEVyTzZzGH6Mkt1U6ZScSFSawxAvoo754qiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAgCH8LITj52Tz2N9SrcA00ATcLsuzzlMFko5o4zt3GsWZZ97gPv%2Fi4GnW5KOnMt0zw0AYga8Bu8wPT1ls69kMfL%2FD8751xY0%2B5ZqlOr3jexFOdb9rhoBGAl5zd42D%2Fnc4d12ly4GHtYWzxTG%2FCUk3WqCzDswWwDXWDkEg1tsUSYcP5DcjH5EuDzkRLmU3FYg%2B4HISGB3G7iEcQS0r6NlHXO1bt3dO1ue1%2B1hqx8hAEM0%2BB3yzxm4Um7aYiHizMWPetXr8JLU5WbiwqQ8yCABIMFmYWkRCMio82ccDBqEhFWBEdIaS4Eaj3v62iTbvx8%2F%2Bm4dfYzireVVRr1fOfL4v2J8iFjY0LeO5l4XK13XDpmFOH8eo8Jqo0tzLafjU7aFi%2BKCRfKoo6VqA305tgfOJGhCif5p7jD7fbmmoRqP0%2FiJzWjmXIu%2Fvcq1OTe7xsAmd%2BSIWUNYmVVPFtHS7ViNE8bPqu%2FjVwwiUEQDkpJXJKonSNoXp2%2BfXC4k1ejcGaGUjxDSciJSmbEndDFIOPVN%2FDCqwVOiI1%2FsZ3EHdpdDd41TzALhir8%2BzWcQI39aI8Tu8Y%2FEZRgNA%2BRsJK9r7L0dPnR8y91goog%2Bn9iIx3LTE%2B9f32RiacWFr7a6hqapfsN2l3kzdwg8xim8timMIHA1skGOqUBeVPsJxHZOYFd%2FPIyjwBbN59KILrs4GB8EC8dxik%2BMdVEwQ%2B3BQMvoKBlYPMMGOc2bpSc4xAPuraNHMoVKhPOq2XLOTSlgqIofoKwtmhvJIb%2BCrMykqZoWWZYEoCA2SGYjW%2FKEIzSOWUkI1pXx%2FyH1NBRlYtGVFSKrP%2BNIczMEft9bUuxyWVXfcntcnCJEGEFehKIxCIHed0XlDSe2ET4VgNTryU5&X-Amz-Signature=d907af28dcf9a8f1f530d3c0b9b4e9d416379e974110348a8bbb78b3882dbcc0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466655SPWKG%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T155936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID6BxSD0D0bgRLYrTpx%2BKfHM5L%2Bs8Mx0fEZo0ceRKlRlAiA3uVltXKkiUVy9Duq%2FVwIdY3oMMV4sZT3OzhbjIGd%2BFiqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfmfr%2F8U2kZgH47LTKtwDhC77cmCSCjEO8Sh2H7lawQs06T12r%2BL%2FHiulXh%2BVluibn9XOEzugFEycLYUqY1qrJVwGQB%2Bs3HifzO%2B6F4oRb2eXaMf%2FXhnJrqOYRtCe%2F11KjiXqHLoQgD5lOWujmmY7o4rvkikak2vGMTLNFGvlXigmXFU33KPfKXhvHSCm5ZllAFee2XLQ4DBtQFvnVpKot%2F7ros7gH8LWJ%2FyoP%2BJ%2FsQw6DSLyZeW6iJC7lnJmOUQAfAOm7aa%2BIrVO9UUJrXGKNgla0BtyPmbFWHVpp4qczxY%2FOygQFFGy4fAYnYs0feepo3yFQbEz%2B4wH4IQdpv0N57vzw%2Fci%2FiROzvxw85ThGvk6f4j4dDwPbM%2B7MoKE7AFzZN4xpP%2F83ZCVWWi0CrxHmIzI76TyDmqJQ6xDWOWpdIGll0GqBwokE%2B8%2BxCPndOKCAY%2FY%2BvNw7rJUZ9KH3BEpPxkSs6CbbBYlRnMX7uvHbZ1%2BRcimWFVPTVuZ3i9RWvgu9C5O606Ta%2BzIcMIjnR4a9SBfJlpoks44djvk%2F92klf21qAgR4Q0YqxmQj24Sau2hMzN14DsGB3KyuPBr2ODGuts5lfj9MFj%2BgK1TG1tiP2aAIGmiwf5ObgZjDCGsUeYs0SnAAOnnT%2Fd2RFow1L%2FWyQY6pgGrvddMU2WTq2e5JonKB%2BZU%2FNeEveQgxuL3xp22%2F054ImfGmUglJb9b9D63Y4AZ0fu3WHnHJR1tFszVgFkhi3U3wlNdZGIMvLhSrXpN49sYuiKP1RD%2FL9%2FgGBbaK5AIqOwV1cNu1AQf%2BNcgDfvzLIhO0yCul7EXDndjLh%2BIoC6hFABuuTHBDAjoTdZGm1D7WlxNOwzEzL5Fsr%2FbjiDh%2BlW4huevXz9L&X-Amz-Signature=8a99a07e5d0646bbf0ec96fa911d55156c05ae20e147e74c26a07871904f95e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

