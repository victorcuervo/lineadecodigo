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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WI33AGPF%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T212704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID9khPUtS0nA5NBsvmObiNN%2FGGfdcFi1xBSzVVlyzjfGAiEA%2BIFbVg6CeZXRzsm7V41aw7GuohKgP2GWiHgfKjUi6d8qiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHjZcDxIj2Yx88z1LCrcA%2BtDx8P7qka3Fz16priuQW5ebdqSlX1qkpoH16Xee8H%2Bkc7ST5cCVaMHyYdrl8U5zCgAYm4jNzrwhtQNqlXZyabqdTtq1v4DuiTOgDDMGJYsVtL7Bte0iPNm4yMl8ijMDxG059PGcyUhkVdg4IODJ%2FMthmbiewPDEw7PXkj6HWK2S76qLP5i1TemesWVdZ0k4CIcOHYAmcUNQ27DYMmcjWan6HOfza4vlA%2BF%2BFCi%2FDpTS4KYti0olhQP9qRsmXh8AjboAC%2FnCzH6G6jTY7lxe30hCu8UiatausgHfyctpUVJnPVS4m%2B9AxhsCCJ7WsLCtyf0HuwczQh00EZuNbnZwfFGU2P3PdDm3nQMdmnJ5Mi0xWOYtOHCfaYTAizIiOSPP6BpND2s9ZfU62Munwi0kcJDxfkW8xmis0kueVtcMWC1zhVQZHFY8o%2ByQn1r1SKWXJguiWBpgzx%2FbMzua2W1NzWrCMoG%2FXlALhv74ndzC%2FDd02hcaeT24A2rh2x00Qy2S9jFr%2B9rxp0wYExQILP7I%2FjZWKjOriTH0iLytusRZ5QRaOk0vpM7OoQeXgG0vpmsJM3xkKZ3PamtbWot1JtOB6YKtak15s0MhC8CE3IuESqjt2wI85ncOBbqcTuhMP7G18kGOqUB9n1Rlq3A4kfyC46gT1DgzuZDviTpfQkEBYODdNKS8jW%2F6BTRGbLIhqYtqPaDYSZ8Ib4wAC4iS11WAySLhwnJ765HP7ekvuWfWU6PuAVPBsJIORWHXwnRNoTjzLgVanupKoAa7TmEKVO7hxEu4TkB7oh1Gz%2B5W5zVRTiKc0bzxWdis%2BEu79AnNi6gUWNasfKIWH2h3eCJ0nnUwzhKdwWki%2Bia4miS&X-Amz-Signature=5fd0ef3894f1965fbf651a960328e11fdc94c0d32bba0a04a95425e0db6880dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBSBHW6T%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T212704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEVrcDlM4FmxoJDT42KauJCCCbxYfrDwVVDL6zxNXzeBAiEA4fMmpZ4J1Mh9vbfus9eXvGSuQuYdbpXPDejbeQpDLeEqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ1A%2Fgn9QRrkmgvUYircAwscSXy3%2Fqhqoupe2VMQ158133LDomiDx5Y8z6vY7RVzMpE0f1ZnA72OSmB04KnyDXZpmJrsNydmfSqE76VBQvkrje7yQtpmOBMScq3ifAphTi928NCAB2VaSMZd3TjjRz6nCW5HLbOFcDaHE5uybfNFg4nCu%2BWRIHg6LSQQWNgwX1AiOGEhnTtrxTlJfc0Gb2EjqE8znJA4sL3jrSSjaP0HctLBkaD6JJeVr4RrzXiYKO33vevo10ipUh9XHE%2BOelnseSGSxLfY%2F46DPvEMz5RCbsFf%2F07HhjffhPPc6X%2FEuj%2FZb53nblvZNIKl3xqB0xSCXXCksQQPHGci9iPCIW8%2Fcac8s0jKoDaRJrFSKw0VBW4Mx3s1xEF5ppOd6gMyoVr2O6QWQQi%2BfKpTZuZKb7ab%2F00Fi0mJUOf3oi9ohCfNtTDVdBmiJ4%2Fy6GgdpPSoskMHbyVnyhydY06bMdZk1p9pJMs%2FdylMgGo%2F0fNGJ5e57p4bN0%2B%2FCpJKXDyFcdb3T7EPKUgrfBJSfvdw006Ck596L9G8UPuiSWaJlul7lBoloQu%2BsJ3XrSBUW5iuI5S%2FQwg%2Bxg05AdWCL954WbhQsJxdGGIuHkpqABnaqSLerF0G7NbjwRLO7n34SuSfMP3G18kGOqUBnCS7hQAo6f4T2D2DeH55xwMHgKsvN96gFt9Gjr23KAXg6ceLXHuP%2FLoW14I4w1TKM1kzd4L%2FT1qeI7NffwgQ8PyAtwu0Q%2BqWvjJmuKSVWamTLEBZR4bFD9iQUwrR%2FS5QnyvFOpRqbNRid69He1A1X%2FYDqJgI6Lh0vt9YYrQkfMKeFzuM%2BbDKW6GSZfkR%2Fzpv4Dvw0VPgkktKEQPZJH14x3XoTkJN&X-Amz-Signature=127ee444982cfa348de5be01a31ed0fa6cc7ab9b518a5cc7b45db75b1d86629f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

