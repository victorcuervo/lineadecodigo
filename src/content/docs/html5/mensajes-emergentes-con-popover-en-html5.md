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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGLWBXA2%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T151255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCO1jkAvl3AiUnjH2llQxBaN3%2Bat2vHxtky31uMS71G3QIhAINZ3LFk6Pb8wlGLGMN63cAvFs05p%2BzTFl4MH2vg7ISoKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwPrVnkgGTWWBsnBBsq3AOPy8HGBcmTITCQcHq%2FCautxGfQ08Fir0jH7lXNaQsn%2FLfCHA5IdLx3aDFAiLguL%2FgeiF%2FwlankqqEN%2B7E02ZfQe2muwELNa1BEzdQhZ1FMm3L3BXhCZz2bL8MA22C4S0kZivbh%2BlwxO3Q%2F4cnwRfdJ%2F8jcba1ywGrClaCK6HzPgMeKRWEWJ9xy2QTHHcaLS8wuy%2FP%2BJ6uBcGEzlKXuY6u3GxXfdCb5%2Bai3Pek1j1XA4W%2Bz4aTS%2FB5YcSwh9C8TwgXGpno2LSGagdmwg2Pw%2F8ZVejyzK2dnDSy0TlYPolQ3zDObpygII0SC7%2BUeeP%2BkI15cItMJkxae1JSUobNT%2FQWcR2uS9U%2FyFvMxathIStEgbzkHPvJuycudmXVK9XSFlsKZ%2FTkb%2BAsROJHnh7zgvMPgdtN8OqB43W6uEUdlk1ebTzVrrBp8y4EI90DcM070DlwXuQhsKg31ctK47bz1mTHCn5CcY0mXtN4e49ikMASndZ2rzeEa8frhiKFqcZS2WvLvs38qw7TzydHzgZTxlp8vcHrh5fqHkjbaKuBw9gkd0fus9274qrgWU9kLfrB32N1udhJRR0ZEAl8oOTidSViy2mjpRnVljJUECCHTznesqOgv1Qs2QhmXDlwurTCtmdXJBjqkATVsKYXpWti3xpPrx%2FgAR%2BObJwudp1LAIeBu3o63guC7uu5HeIcYWhSJ8Pi7ulWx%2F4Frw%2FeQTav9gaHb5pGNQ0EuexJ1Udit1amf2%2B3y9tY2NTWJzMrzczIKMGUU4eRPoxSaQjFluMUdD4VHOlPwD4yZfe1zGLfQ2d73Gr98%2Bu2tOKltEqFBuKLubG42a9sG3VvKVmdIUfj5Qo4gyACc7p6Kt4Do&X-Amz-Signature=1117ab5ca2ff014c03926c6cd3705d53371bf435382c0bb1615e3520b9ccc75d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAHL6TY3%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T151254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGyS%2BgmukzlWuH1IrbYpHnxyfvV17EW89L7GTKBKnGbhAiBSZB5W8FvNboWk5VfuDgY%2Fp79wBEbnp9IIddDr4wLY0SqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7ansC%2FZQ25upx3%2BrKtwDuFivzDBxKxy4dvvkumR9omJGrBy10WD4r5%2BKR4FgTlti%2FqCrfG3Loy86UOgWgze5cKRA7DHLaNJWsL3qpAxS%2Bfj18JSFM7L1TnNwUk8JManCqOs2xhsnGfVv7jB9rpPS5gGlo6atWPNFn%2BpagMkLwDzvyTb63IFuHjDqHGAbw4MbiyDo6TrG6UgwsfHdApok3x3TjC9MAVduA2qoP289fHcqrHIRIUINHpDWXBc5QHOTFgR9MovyfXijkeGh2uNx6HZB5qEP8MxG8M7Ys2n7CEngUbzQLN5T0KrchYpPnzufcM4y0X9uXvy%2FKbfNYYVN2bSAVjFw3yqzNPe7saEdg1bKUB3CWDaIDQIYX23C2lb7lC%2BxgFXPb3MVPszOcFW7LXSFOYXy%2Fsb978ulGqNAvtoZZE49bDkY3a9GYC1LdtHdrcT1USvgZM4NqO7LjP7tVW1VHsqqwIW6CBMGjnkQrdYYYVG7W%2BMj6YKa2a%2BeHkni%2BshHmeqGQU4SYonPUXaqM8XeWzUx4WA8qGACpoctxTNJExjPLkecYmeqPUaitTBkQ1wQMs89slDWadCCTWlDoRcCWFGf12hCUEkYRZGfy75J8RVevDnvkXjSDUZQ%2BdNro57vcs1XRSW5WtQwwJrVyQY6pgHlh6cSL%2FO9%2BUEsOvC0a%2BBNrnsnFDhLIeKAp840t9qEHLXNkZ4S29rwM5WNknpMnTc%2FyqscFtj0IR%2BIDI2zgVKCBbZvue9T0s8J0M25lMV9olGQQhm2zSeU6eytbq94ZjHy1Q4Wp554dvw4Q0h%2FMFv8tveMWprCUM5jcmaHlBGdBkiYd%2B8X4n4chv6%2Bv%2BZBdACWeCTCYLf%2FT4DFQr%2BN5OUlzZ%2FgbyDP&X-Amz-Signature=5863d1e78c87da2350df6702026dea2a47bd7066c97dca1690cb25fa917e2eed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

