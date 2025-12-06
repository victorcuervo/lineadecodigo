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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZP6RBYRJ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T190706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE4NWflylbfkzI8aSt09De3PQIOQo9ykQk7gohHgJlYOAiEAmrFGXtEwFD%2ByUaytx8mwoou5qTWEgLQpxM%2FTbc1r0DEq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDFqj4POkte8HQ5mmOircA1BkT3v%2FeLygqzzYmutuS9HGXinO7nnIN2vfqX3KqdP9rZyT1y4RlmMPIExc7akcGgtRCh3wxp%2BgQJsBDXSmfjbIPUGTwy5s0tpCV4%2FxXNaUQGWdSXyBYUwiwgieczhAzIsfol1VIxf5uq60NxKbvaMqxe8%2B83azIZ9LR7aIMWyG4M3wYeSrkOVJNZH9X6nHoRLv8yu7Oe8AyCIJXCRaN1RfWw4WBLw%2BWhgVL4%2B8FSEMKQWl1Kqn%2Fdt%2BHAk3543MUg1tH4BzpZejJcz7yN3HIPdTOEMLU5Ap8D4Cq82vlDXSTzcfxp3huayPMvELQwVUMgRZituaPuiv3ABPns%2FjGGr1SzefmIIBdnSbRVtPetsKzgo0ZZ8nUeQaRkG%2BcYGTaBfxQxOmWP2Seh4dav2Ce%2B0WSYukvr2qAlpSAgklDuXnkqie4xbOP27AUVw0h1hQ5YXistaMbXXfhN45RfKrpIQ%2Bbt6cxdUjb%2F5UplgSNcZ7cOOyqR0fQwpiNCpm9iwqnf2DL9U%2BG4EC41ZGsfarK7U1xffxOLnU%2FWghNUtnlPsq9gJ0HuqaLkj4OiWhZ%2FFBfC9m3cIaucsKL14CQAPBJuRjWT%2B6%2F1iflTDJxZV%2B%2FS5W5CIvEerTVd0%2FULU8MLLH0ckGOqUBuf07RJu0qHR%2FRE5Z7GGWkBBax4tKG7VYxk44XHkK%2B2OcCjuErp%2FlLNpHpDqMHuMdNXMfSx1Ory0fD6kwVQzTOq%2F4XV%2B88e9fPIrZR%2Fb5x1fWbPHfFvgf8R%2FQyLUF3s3Vi0kc3gr8uJqArEsRJF%2F7Fqo7WvLkl5inEI5jz%2BUIF68m686UUg5C1j2%2Fady57lxEoTJTyBO8K%2BFCl3mdM%2Fgpw%2FYuPDs1&X-Amz-Signature=0b42543714255d929f541d1d44f55dbeb17eeaf90d2a253612bacb7b0b79796b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQASJQ6J%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T190706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFW7Kkgr2ZfNm0REAJZPfdT0zDMErLW%2BWgIKQkU0XCQtAiEAo3qXs9LRYGnyW3RmH6cd2KszDgT3HNVriDLQskLxX78q%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDF4Ic3qJ0CmjGWPpPyrcA5jDTOCfHTsRZrxHNOA3xulFBFAY1BHhfWf%2BTxFRZfQFhz%2FPLjVzYYw7EnrrhJzubiO4MdTpF0V%2BwkJw3%2BcDNcXaHpkLVbl4QkFH%2FRnyJuls83TGFRggzGkfYmRUuvDSEZe2ywGxyfYn%2BZmisMeOPCIBfQVAA%2BOA59BJDU7VFb%2F%2B6Q2Ampz9Fv8TKmRCQT7xjgsP3%2Fn9vmVizWPtoIvb%2FP%2B5eifDUnNkJGYc0uQIz5lAXDfEqiRj0xpLMgDDqoi1u8mLzrirylVBoBvLg%2BaAhwdHSOhzBb1FNXB6MFgZA%2FtZM3L4sY%2B0lR5sF8oW%2BPr2mJF%2F6yk8TbZnsmhsOqfB%2FsL%2FLNkUoaekIORHSdPYIxAuPtd51PsM%2BO5vE9h2ZrJFCL9Hvhgq730iV4NLx5V0yY%2FZE5vauIxHDKxx4BhittnJCdLqFhZngNosiv1kTjKjWwYHHCInxOhPnekE%2FiqfGBKFHQ%2Fpm48Dm44%2BBFjLNPLkakzNJIvP6Gar%2B3caWIekjoPu32fdI8yYmveYUKbT%2BEzh6Wg%2FJsvSUhsXzOHH2gYp02pjx5MDZboiMTvZPlFPTo5Oh%2FhiX7w%2FJCi7wFKX2%2FjWgGNHk9DK09ovU8iZtq8m1HHMU1TZDH4earE0ML%2FL0ckGOqUB9yCyTeB%2F3vnZfg%2BTrfgaVqCZcEyzlOTrcDpGPN9Qfc01%2BASHmW7vbE6%2F9B7gDL8Jwgs7S7P3otUtOUUHBd3d25QYXq6zGF%2Bc%2BtnmvM6Xd3BIdUCpBdsB%2FYDcTY7K%2BfRkJ750Ffu2v5czc%2BsxzAVZV0LS1tuKXhFtN4JrD6jPUw4WquzBCc56XCu4X6cwUsuW1gUK%2FKt2tx2bxY3mvRiWfUoKap2p&X-Amz-Signature=ccba47c30b994fb2a9d9cc44fda48053cf14e1c14585a6e570dd7eb481db07f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

