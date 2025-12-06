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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667X3O7DXI%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T091453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDh1CPbkbt%2BRxKGjLfBfyfRn%2FMRHHdX45xsnNlOUiElPQIhAIUw89OOUVcHWT4eRktX9QBHfEyJPJy0siSx7iSN1%2FirKv8DCHEQABoMNjM3NDIzMTgzODA1IgwpAldXF32Mtk1aVZYq3AN8DpMsYBsVdhLAoehAjvfNZ0zZaQfVTBOH2jqXDnl3xCuqkRTb8a9MsBRUYA1BvZH%2FoIy7VguF4WhfA2RgUoSq%2BHDEfubpjR7QVJcDiajlAPG5vAUv5826es5XETCQFkTF5SMKebUHi0%2FqGf%2Fgvu2YNVxV6pYoW9Oz9FKq3vtH7xPTAGyDaKSXXOw7%2FtbAZgkDSic7n2Di1kiGdZVCsvw4QamwFzp3JHAYnJNyDyvg%2BFRJoWT9aSD85yqD6H2Wyh9lYafE9y20ESQtFyTrkEBtZ0yDICFfGMdgwI4zYob1IyTnC1SWp6C40y5r6UxBZKI5IjcFXMUmnsceXKlmDpiCdtSjdWFJKGkoXNCp9Tg%2BAw74xCvt%2FSwMe2AEnwDGLMuH4gaYUnQ8Hzxo4Pf%2BcuurQH9IyVReTJzY1lWlRP1ZpOJMRcVakhrbX7ozHSMPdwqynfeSy7UsjpPMWFiztfGprHUZxyKYvhScdJFmRyhBOuHlJ4PKq82NMrktSg9fT7WWTMeen0eePmpAs4RUNKL5EUT592se9H%2FzR5J%2BPRa7LC9fmjXIekf6si%2BUsTKbK34v54i%2FVtzgIGUQuWelRm%2B%2F5rULLUwCv4JJYyD0BZDaLITlHfpLAjCgguPb1DCCvc%2FJBjqkARS%2BPopoFkliYK87MjsANh%2BSPSnzLGLQdV1fgOrnyE5%2FGvuU3DpYBqAAJgE0m9ikmuZkEfjKwaVfNSgDfZwFHEFuPVfzBIHwglZgFK2a9m%2Fxoiu2ayIhtIU9H1W%2Bzfn1gxzPFsJ3yz1KvbgRQSiETTpoYwVWgoB7YeTM2Dws2wJXtnAEPGff6GxgNYFbJ8u3Br7Z%2FyTf87QMF3azSgoF%2BOLVQ3s%2B&X-Amz-Signature=a6c3bd6eb11a7558af7bc84e8dfd1c86e0d05980026f5ebe36a9591529539bb2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRFCG3R3%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T091452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7N9tgFDUTP52GmEMvHtW1UtdG5adNANxKLnEdRdZHNAIhANE0q9KAuP5ubat5uGmYPcMhIN5FkAuQv7h5Xavmv2%2BaKv8DCHEQABoMNjM3NDIzMTgzODA1IgzfeenlYvxx%2BQ1Lle8q3AOQux%2BS%2BTuZxXWZEKLZ9cS5QltMYRGSqV0ekX7lSWCFHDXRWfMQT0cXkzkFvI2WG5U8%2FSOEthvhatvueZslmTzOfiYOxQjRJF7OnZUAECs57RsBcOQEifQzSnqK%2FvSg0leLy57i1%2Fv0pSvixUV%2FTa1rXHarZRp7BDF3p8eeSCj7U2fSK4OWXz7jzgQXB4AX5SRMzUMgpppXPPeuAMzMIiP7QacxqalDum1cirw84BihJLVBfwAI366PgYAXRnIdaWZ232wwx0440rPLkFXlZL7sq5CaykgFGKUZfB0687L%2FMrcdCxC1XM4l6Bj3F4Vdp4wEpp6ZYN9IRQ49X714c01Fw2kOnUwYdk%2FmDRDSmPe3lxpF8hVNISHOkGrqrsCjCv4P4v%2BAF6RS2%2Fp%2BrH2UqqGeaMN4xxNgkGuA3qFl4%2B4HXxoRYNmkH0YG21LRwBkIagMTldgmOPhp7VD9wCbsxJPL6tBiKRhrFpnSYmiuSBkl284XHdWJHQ4fL7nOvZj5iKhRQwzslX7NWyg02qqxMviOFx7alfKDtSv1NRNNP4Hbr6yW4xtp4ZqsSeLOpiDEj7lJCO%2BouwBy9HP%2BiHrt1IgBq3soy%2B4Deu8TZoAuDfePcOjypTzc25lZULwcizCMvM%2FJBjqkAWFk23pEN4QtJ87p1o%2Fw1yBaUZ%2B7Qy3hLKpzFPV2T7%2BRpnq3GdrrhoHkj2%2F2oMALjl3fs6HlJYlBgQ2zP959ZTFnXdx80xny4u4tjdVByUk3P5%2FWw%2BQXnnT1sHkBbpL96YgmSZ3QaQihLA8oVnX%2BEa6qmuhJFXHMOGoEjE5pc2PXMe2HSLvoyTlws93s4%2FaRSWkkV0%2FU5NqC%2B%2FcjbNAhc2e6x%2FRP&X-Amz-Signature=910ce969ad951c13bc4c3b55ac5c1966a12045b68da97065bc19279c226629d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

