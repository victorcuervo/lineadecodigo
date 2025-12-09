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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VASYCVCI%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T061312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRrodRMxyfso7EY%2FcKwkKxJN4QfECp4Gzt5p5IL3RQpQIhANwJqB5hXZ05kCSAE94VmYSeK5WtQbHQDejPPPXHjzguKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx9xWinUIFdypLEmIYq3AMZq6kEqzoATcHWm1IB%2BncRN7Zf%2FrFDT1rWOkRlXTz1WfyvsHhrENE80o6iRDL2SIzOU1TrlIqhaLO8reuh7befM4kS0F%2BmxXpyM%2BSCiZhdU0bLXcFPj1w2rn%2BneORYU9M5IYIIxm9FMyRjHcJxgvDfSEkzKhR4HJvd0lJFfZGho501WSziQDe6PyfvAXG8MJvSU2TiX%2Fw3Wh2nvxpYODVFi8JPbTgmG5IsGXCnwQltxu0SGiqfQP1etnlF9hgv8hET2YMDL%2Bm6fP4Bn9sn%2F4puECZx52W6CsO7WW0%2FB71LMtZCOkP8SBtzPyIsEEJGcma24tQcGnxa8T49We%2BCSkiRt67NcTROCm1e6odIdZ%2Fl4xXGkVEkjCDaEW6sZGHRWmqZlIHHDBr9uL5iabdtV%2B6yFBPPBVpsXIStCBySUWSUg3EeRHs8jkxDO4mubXQvDPhWu4MoA4Uc2K0039RMhitYtaC4OPb5J%2F7nM5exT7qVsDLcG%2FIDfv1MbjbSYR0GDMjJCAUAzK8OBBf%2BQkHrVxcqDDYuPrNmhme%2BlDhxUF0OhO1oQc8VsM65Q2B5LeUpSbJLwGGAfg5dZJDx7iBNmsRh67xcMHv1IXbm27GbK0EDxUFblszbJ2foIr5KITC15d7JBjqkAc4fjckFkSuuVJ%2BygSxazezVKuf%2F48RFSPmgPUQ5EJCs84%2Fy1%2FKSM%2Fayi4PAkxW8qstWQ1Xb47GqrC6CWmjY6rdJSKNvJIa4YhUsNYJ7aC6zSzeRFHO81mP%2B23BPAHHYk0qqJWKczkh09YcUqtm6ieM1BiXxh%2FgzdhSMYq6GpHiCxZdb3zTNAkqXU7NOuBWyO96cxHle8VOTxxNdE1hJPWNmdV4X&X-Amz-Signature=93a7041c72155646b3c5788302279d03b23a2d4f07d0733019b226aade684209&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHJJ4NN6%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T061311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbnA3ZDVao30wAjQUXIOCObvszkVK8NQ5TjUW2SSCgcQIgJlnPkJ%2Bvy6ByTCPecDp%2BU3eol%2FmHlu3k6TSHNQgmsfAqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGxzunU%2BXfRURXFQbyrcA1ZGFWc2m4C%2F0UXNIHHLa7hrbqnIVmXKbUn%2Fs84BSGI68KX%2FlaYGbeZTz6q6b7uis68ohz9UU2ZF1eMITup1P68opcGqRqDktT9y0Cwk4iIlK6vwUGMLJ6fdpQpOx4YmINMJwYVuDjUC74fk3XAjEu1C44qXP8yLCrLX7X1%2BQpQelSUHgcqJQsT1R6W1gH05%2FSFMbsrwNbI63SP4ei6uIXFAbPj7U3qHTPZn7fW5f5R1D2qkuo235FW4ZykKkUJHB%2Bs2Ib4LkG1k9T%2BXAM1CWCu63jw19man0MdDWIQrqh%2BKofoItyzYaoOqudILjRog%2F91Dyo4RTP9VzyiW92ilG3SaY%2FSr5KQHKK%2BqcLVwc16hMeMicXmosdO6wkqXDw0Z%2BvWWsDKwbyuybNPOAueKJXj3aHcrhYQYFpFymMtCCA%2FQ4v3Zbpmqb8STLz4pQ9vianJWw9HCNfHgb7mE58k5daPLVo7uuobOocg4ehQRXklP%2FjfEn%2B1egs9kmviZ6Rvf3X%2BH2aqU6YoprMHbU0IJ3ARkhL%2FvvN3XuwCI%2BVNXiUQ2nV%2BYJLV736WQ%2BxA8ZhQPKKuz4o8SHORExycDiqqPwHCU4F6ufHrZC9zITFV%2Ff2%2FZji4E%2Fk%2BUVhLyQfTrMKHl3skGOqUBUByTCugLcDNrYDFZQ4mpO2m0033lGMAwuft0gYenQ2W9u%2FqgRuLgZHVlJY8HDv7mIe%2FE7qRuCKzP7bP1pHCBP%2BirWj8QRtxnoz40yEaU%2Br7yCkifH0NZHKLbJR0%2FvJvKp9Y5ckolnPMzpzIfaFz%2FmZ%2BFVtu5AAGdZ2E3VyjyAGEV%2FSUfFyeYIhfME7uBvo8Wmk3cU1gWMxvq2FmFXjLMnf5c6Uic&X-Amz-Signature=44bfebf5d3e49092bbb492716903e1cb6e5b76ace5b3b13e8a39f12dfe60c1b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

