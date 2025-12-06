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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Y5YKDM6%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T223810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQzkjT6v%2FTM6lA%2Bssd%2F%2BvRZXKWP3t8m4%2Fwd3wijsKbngIgdF9wGo5fp8H6Uc6iVQA46EoY81Eg3sJyLpjlpOuc3rYq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDKQZfqrb2VBMJP8wjircA9J0hDi%2BmIWvDgtapjjJcbrs3u%2BAbXJStDo1uVGLoFg3QmxHyT9m%2B4GgyWEAZHX61jJFy7nEvRoIyaUjp2db8WPYCDkmm62o6u6RxuhGY9xZHM9ezL%2FPXVnwFO7HhqX52eiLfrvrSz0Ztb6haR85LICprippsQQb2EoyT4Fa1sbJrgk4%2FNl8jVtiZweLw%2BL7ZeyOJT5fGxWbcgqRuEwDc2UOvxJJmZKUuwklogeVsd9YgfoSgFrpA7YM3HwUOesq3Hqjdb9GPErLPKGOiMFtmDPpwGIGnJRTZ32GgzrpfC3eDvNhEF8y9ph7GM%2FhH23tcWihV0TfDHpEUrUEqVieikqKT8C05nHi%2Fd5nXt%2FiF4jl2mo9Pjx9zH2TdGTaBzknLFRB2BNITKaV4tKwfQlHysIdFHO0Gphh1HRhMBilaHj3qtsA5RCk8yL%2BkkoMoy5yE9HhU4RLpr1CYUAVNecqUGq98q9BK68jhGhk3prknNesy0mKBcafJUTUQqAYw4Ci3yS55QShDY02ygZZWFiLdUoYOdjau0KwY5sUxzo4QfaPiisn0M75YImjweYVZcx65QJRMd3LPje%2BN1ER35S9tFWgQmBcyLFCwoXr8qNSthHlep%2By0jWPz2Js1fpQMMLT0skGOqUB74h1r%2BA%2FJweVt0e5V1W2%2BpkSbndIWn62z5F9B7q04UHwg3SMLaVkKXNuuJX2v1IC%2FcLn7FXxYLZH%2FOwuoQ6DKtC25igWl3fwJ%2B1WrczbL3Daz2guRVdargkARA7RZKehtRilQx7YOBU4qaDSxW0DZTmUQDWl448%2FLSyjJMhwpHRcd8KMsXAQQbUTbioMSQAuE4N1go4uKHErz4k%2FREqZGuBHcXHm&X-Amz-Signature=e8ced9ed6b2bac9d5f9e63ede6a6cd6630f46f8aeed6c84471de3aa797cdd43a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ISJ2BNG%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T223806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICVG%2BBNASKz3bEYBUk10LgxVPU7DvXinVnN5cOoo5HwDAiEAlypjpWdNBST2ObjpULMyzYLSWUXC1Hx1J2vIbBV9SMUq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDGziObnKU89aHPpumCrcAw83HCCz5y%2FC9h7rC%2Bol%2F%2FVq8cFfcdmdXJOZXtOcwFJGV11fW7cV90SJvGXIo56aaFlB75yZH%2B7oPgjjEyvFp8Ce5FdWv37%2BJkh6suNzbVkGZD0UhIFLaLGelM6x4rrdom4yiMp3mSdmUjAmUAQPWQSF6Xc0VmeJ53HJlIapa0kbnyKANtyDdbL6hmAM5HJWXgvnsVwBz%2BtQr%2B6y1%2FjCR72EvN678LoFq4w%2BhJKJm0Fx5jjOKCgMGuqSdKWhnyY3gl2l6%2Bz27C%2BMlKObwjvbwSHkjX2h6HW6xRtM1zqoJz8MIyUv4GIIi9KC%2Fjom%2FP2jd57JhJwKIKcyVeUQja%2BVHiurH49Ue%2Bl%2B4LECMVm%2BtW6%2F5hgtukQ3CsTj64eq1C3lptNpyGJCNjoLRHm3BWK%2BUkKltJ3mFBKu%2B6JfU17%2BHoM4AlFh%2F33oXhy6Rkk2XIhTxSyYIM5yLeyhz5qalZcoo1WmXfED3u3SisMvz69AUqdUUanTNJ0KsQaPA4d%2FyL1ylsayHD7i38Q4Pyp2Fd8A9r%2Bg1O89h1X5n6MQ7WhcUnuegNuMdGKufYLeGB5G3YMJ%2FZLuXEy3LARzxY3n12UR4rpPyOPSNFJUMBQrt%2FWrflxZAw1APWsuLlVPkb84MKzU0skGOqUBvGp3fenro5GU%2BlKCjom6wxx%2BDIytIozz1JA%2BX8ZYhdK0IPDzfQWRe%2BcfoQlRDTkFXBLjENGxPyYmi1jvza1IfYuF%2BpjZU5lamwwmzBNovhB5N7dN1cJtHHeu0ig5N43LKcIz4wdivhVGBo%2Bt3%2FGIHqEZB3aXtojZmyoyTP4%2BjiMBK8JUhXR4KOQUbzVSZ3lWuxy5B0tas8jTrI2GTePjCAUaxnnd&X-Amz-Signature=f410e2ff3679f3d6a15bc46f46c3e1715eaaf952a295d8ca367c1e7cd0a6ccad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

