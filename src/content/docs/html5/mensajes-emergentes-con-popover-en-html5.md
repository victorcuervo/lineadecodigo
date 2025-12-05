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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KOSKB4V%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T073735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBVqYYCgzSogeTQQfr0J2JaVZJHIsQ4q4fFyg1eAPAukAiEAngRCj5HDI1wIEvsxsCDk3qsEeQPvNbPXYYiBH1UIsd4q%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDB4VMG%2Fpkf1r%2BCt25yrcA6p6RCbYzMI43QFHl7K4kLfHL67zzq4I6dyLUAU0owkg%2Bzu3JBOXoaWZl6Lp6CU4RbcGRwSIZDXeM5smGW5vv0HFWlvT%2F6QYwzb0MseDraOVzcbu8t3geWajYLZMD7P80AZNja6rA0lywriqj1RQUkuC%2BPSNxJmI9piKz8v1VkunVenLoMoKi%2FRkw1zZwZcck3fSB9%2Fyed3mc9Bp2STA1JmpxWtLn2SxaGlUKrbN%2FZZtotutZnN56T4l2KdPHOhRgVYE25d9pfnot80e5m1fsqKGMPfQOr8Vnsz5%2F2kX%2F0xKoBU06fk1CXHqP1sAn1AElC%2FwPwMKcswEc3v6K0hU4F%2FBaiVaCsckBzxwU4a6Y37CB4G1FcNN5Y9r1dKVk78Op%2FgYyD8ZCdJRhULMViXHxnEoG5GlEy3ED5wklHwR%2FFw0ovfyHv9oydYaLYzjVazG%2B825QwZRR0qpr8Pdf7KGVzFsRPKlWLJTJPDRdPkOVKcJITj4qUa2C0wgAzCuoOPm6VtrlUdSOpvrzi5MCMLrN1csiPTp1z7HPhlNJtn4raTsPcm5kf9iUJ3QsXmiC1sHyvx4GuGIB0FXutBKdjk4A60n%2F5ytWiCFue3OUmRSCVwolSsL%2BNzNrhW%2FBNwtMMqqyckGOqUBfrndff4LyAEtcR8sjEKv66%2FjI%2F0YMgAVpnPuzgPPB8nVeFFNXsiCRIdjXHmCFFysusHIIy%2BOYMCT0254arnwssqSeGqAWcRP7efo5QbiRT31SotrLgWlUJbdL4uSODXBzymgRyQl2V4AIDO3o0UwMERtwyQfM1Dduk%2B7dMH60kIy9hYP5KmBYVkvGS%2FlYDFB61xhaPmhE8qU0DxlO2wIHYYotWTA&X-Amz-Signature=ff293be82cc8e15d570d9d67e242063b059df0e2cf3359834b04c3033dc0bc98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RELKCYZ7%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T073735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1kTJLhRbvXVHjOVD%2FuErG0DuTMSmrp44e%2BFhzIG5MBQIgNiYKQNc9HV%2BCOm0BmvWI%2F6X0Ny5mTwCnK25UC0xfv%2Fsq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDDRQUli2GEgYGhhJNSrcA1wUr52RLZ%2FOPwGW9tGh1HQdhvKZ0D9zryvC6PznBz1f3vxt5uLHd8J6nOv1lLVhDmHWrMlxFPBZ30mNK2%2FkLG6nYCe4%2F0qDDjxi5cV1J2Fc7fizp86FDRrFh2rGe46Yhvn8KQWKjJt%2Blon86Bzk0DKID5zV2YBTi3QtseIPLX7o58323i8Sx9q%2B7Z4bn5KNzkbb0HNmrwXdsS1op8bAeBV8Ym3DZThAAseYVPL%2FC4sPhkyuwxr0ZAZoJomyo6ja7jScVE58zm2hidwOFuH8joPGVZ7V1QLdsRhrP11YtQJsAX2e2p%2BMDtPmhciM%2FlBxcsCXUEgAgxtlCy%2FSsP7JveRGBQVgrAIvoPk2jm7v3yE%2Bo3A5%2BmQ%2FbAb6Jxvro6iBlu4N4S%2FaLnroaMrPceFW37S1DEEBg3I8WwAhxgtoiE5oS%2B6jDMkYcfffkpYWgEPLZS%2Bvh38hP2rjEISaMb9fCgsc8yd39jM7ve47KlJfjpgJ%2BxaVogusFS08FN4FNjrJgCN1Lrbb5jZ4a1gkvCBZc4k91lxdO2XCwTATWr27VGEMUOAQp8wwm3fsteypQQgu1i6T%2BvWVavXCphPT0PrkwL3jjlgcgcFBp%2Flx7OjUKOUVShiDM4EJYDkBS5ACMJusyckGOqUB7Iq1m2zPkPsZ3RQhwr4XSSc%2B%2BU%2BDg%2FmCBdgH1KuZ3Yy0s2GUvzU5m2tOaXTxcfaEqlQjXl7TgbyTJLzo7i34uQK3bAV1TtL1IEOWoggkZGPgu8fZeIiBK21tUsRMx9rc45Vihcm7T98wDC6HZKpK4Hu%2FQRyDr%2BjLwmi5D0SR%2FJJrzH7DRFtZC4s4TTleU6zO%2FQmBuMpko0XcSM8u2ZELXPr%2F14eU&X-Amz-Signature=ee317c077f85f417d96e7b4e9c979366d65d1c68236a5a45ff2439ab295d6d30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

