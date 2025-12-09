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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BNID2KN%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T011656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5lR2qcqpCeDA42XyUQ5voZt4B3vxbNsoTnzmCjjmoQwIhAJVCOGKQw7%2FoGkjMW3M%2BMHH1q61VNqUJ7duTwg2bub3SKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzD5fbX6QbFQfjWmpkq3ANVEv8df3BUJRjY5aPt4yRs1BxDEGD5JByVazUd5DSleETIEYAfO3GrMxFLP4Am%2BNdmLHm0SDaC%2BdGeH0RUy5gfC6U5w3E6gSxVbV2kRy4qgi8irPkEb1owJPiXeIrCjmr1KFxR68JFCWMW9Zg5tX7Jwyv2ktPpwfbusGAHOuiyLCJNvVFxuAyj%2B9Kz7037KR5OltIlVV%2Fbf6PAS6wKzlyfTg8%2FZPavM8%2F%2F1Dj83FpyA9UGsriRN3T0o%2BDHfV4ysI9GNKEXRv5FO2g5fRHv%2F3dOmm7g0bIrHC7SaXTGAWp62GRP%2FGl%2Fa1rM1nvqxrLYgV5ZGhwlKIvtD8Z%2BHN%2FrhXcTyM40Ukl2GGa2qnSiz6eGkPgsQh%2FARd6nuHSV9OX5oNq2opT2U6C3eKShV3T2uaL11nrizibS2bOOTBG%2Fco8pK17HxP0ymJCDWo844bQ6E7ILJaxyFsPr27S%2BhDoRKZcI89UL0mKU%2BEx%2FoDuWj%2Bu0vggxyeZCirE6Sc0VOBi2PbpkAGMfBYYnG9jr%2FOwF7Nge%2FG8ZoYzQ5ACLl0IDgn%2FnoPktn1thh6B3EpV4EEpQvLywduCbq2eEKgJXKr1OHykxoA0biuSJqVW6dmSayWAbWHoygQq2ClEhDu7eRzD86d3JBjqkAVUv%2FgSvVRNX0voYtqgE0ISpGughQfYjZAJrPpfBTvjeHWXPwvT34CKp9nugiJeTAN%2FGgYX%2BCtid2QYZhPE7iVoLKtg%2FrMbsPv6CfqWM%2BK%2Fc%2BVLbwyMUyvBarxB71d6Vwsfj3eXzjPmSTWpx9HNCmJ3TCiiLFVqUkU1sdDYUJ%2BYqJeWogZAqky6KZ2V0%2FsBq6NnKtFlO%2Fe7uU3sVy1G549UpnLmZ&X-Amz-Signature=ed6e378929794c2a63c02f1135cfb2321bf4df2276981e87ecf48b72c717b25c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOQ6UKJU%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T011656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEEkNSsyCzT9hl%2BFhYgxImP%2FURwMrbp3qywrkc4TbB47AiEAm%2BJO7PCLfZZ1jxm6bhDqDcRCt3GxS5NVz%2Bu6%2FY2XhpMqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE4%2FVIanyWwcHEX2XCrcAxnSB5FufsKGf3I8AXICXhq0QIGIr58Os%2F%2FAdbfi9B4FCmZeXkP7QFABK2UBCcAc5GKfbnqZUW4yc9N0U%2FvLymtU3sPWYCdKovQMCufGhwNfAMlA58EsrHtZbpbSHydCM5VUpzKW%2FBU%2BpubtJPHkopRdbzWe2hy1rW%2B8VFWsBy5bJuSH%2FPSs4v0cmeGWtrzEm%2FvchUCU9EHp6FtHm1bAQBdXMWNmftn%2FeXTWowt5xXiuvxuzHCk0XQNF%2BnH4kAoVD51xwVUuKWI%2FOzxndgYblNKR9fQUXAazdVsCJKk6xVTiBUlrvXgEYStaqW9jkhqdm3dXxy60UBxx3bO3ZoFuDXgy91G6RZLY5Pz0YxoC3fGeKPdxlWVPDMhr3JLhWR8RhxZR8T9sR8D2ryFJDlsuOtJdpdZsh7j6L7Wmfhxn9fV%2F5Fsu%2Bnt8xU26MNb0BCJ6WPdb%2FgngYbqx1k5HPR4671SU0fXuNIDWeObz5z544GzEmMejpIbOadbF%2BW4dbrhUSlry4KmJQ4qmFAYvtyhgK%2FuQaapVTAvE3K9ImiuxHfgKHBX%2B9J07Lq6nhWInQvkGPFsziVDXTMZemOcK7AQmlHDHvu1YJve8iiES%2F2joP94WxsukK0AHyvwfmM2MMJPp3ckGOqUBbWK5zgCwpkPtQkWTvUAlcglgULN06JDV3zkhlhrFlQ9EKhOm6da8xyK12WohOcKzMYQLlSu6gUpDrkiC5oYFJc0vA4Dh9en6lD0iVsiwHZHsF40Z0CAmCKynZzJuhgWrr%2BYUOGdty272oHEx1JZ1VnRXM0puGuJPSR0N44NzZ1cdQGU93Sa5PSVyNwhJ3xaRAR3KvgHtJngnkyGEwfnY%2BZtKPx2E&X-Amz-Signature=59fa66fcf378f65099ce7e34865d2b28837e16234f1a64f22560befeb0bf044a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

