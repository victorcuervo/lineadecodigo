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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIUQGCSZ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T134245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVKShx83tvifqUqA7En6cIdyr9GotekODmQymlr12mIgIhAIoWLtP%2FFizofBWlWkbIrja1qXpivlf0OYKP96%2BPnszWKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz2FfwMMwnnOro%2BiOEq3AP4F3l5p%2Fnj2wJOHG49%2Foad0BzvU3iyGOKQ3Y7H98pNrJU9bcqjFHyTmNXXlkV9RUn83%2F8BvuQRZxsQQXI8DhA1pqtO2hQHPla1%2F82m1Ng18s7FGvS66oDssWmhC5gDsYpoOEV1GeFBwc55gOEzM53gOtU%2FqKBeuifJ%2B60B3klUmMBi06e6IAY0auqSSOF%2F0bd2tudFnmWUByf4%2FqbM9gZjzhaoB6QYFkfdAFI0ZIbBi5ixzJt%2F8wUeZvRIfgVFVPr0wjWqDpWb%2FIukQoHr00OUdiR%2Bk0ONf6gLBs5KaKPK8CQKRKJaJl1m7BKPQGu2S%2BjHIAwqb41EOdjuEAjL8wH5%2BcWm6xs%2BrKwQbMvqqVs8SkDfMpMj2r4hS0D9aWFe7jmxTS78mLJUlliuZI%2FP8SUhrJ968ZpkofTJuiSaWvTuowZOV5xBNzb%2Fm3l8AjdsKwC9TczNGsTgO6Et6ulJNpqe4r37AmStPzhTl2js1bJc%2BSLOaSRdLnfWEuWu6IpcSg5yFbm6DtEebKUudE8Z22FZXFuIpgCArmJZbEIR%2FUoxmv6l%2B7Qu3%2FIdSSNA0%2FX2TgpTwa2g5i8OFkSOSMAqL2lqS8qvRO8g80rkuJgpAsb52OEfsctmMPGWu68jczCcmdXJBjqkARIt%2B5XsjRHSjYUPmimxsvTnN%2FEbv6jsWn4HaLq9QI0Pmzd7SHTqjQ%2FB9nj%2B11UAvGlc7HqmCqcZo02BuFI%2B8PLOywtYi3derc2tWqR5oFg%2FqWQneMl865XbqZQh%2BMyGcBWcbBV%2FaKHIILoW2P4ra1TEBnM3XB9FDYr%2FO41%2BgJ1f1HxrF6jOKRFOWeK7cD6Oeh4BP1sowEI%2FQxw%2BKRKIzoXw11bO&X-Amz-Signature=fff38ce1c939a4c05f98a00a14b46a558d11e8ac435dac6ff91d375a3b7a1b88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYXSQSPO%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T134245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGRitjN4Zt%2Bip5zmP7IWiBIUT%2BxboovP2qd%2FDGx19pgEAiEA3VvN33aVfzXgkGW0t7yZdeI91Zo8gfXnOL1sFm%2FnJSAqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPusM9RMrjA5MMpKUSrcA07Pz1uRVdml%2BlkCQ%2BUvFsZ315mLw3cVF11uv%2FzFYCCbwdiO1%2Boxp4ZXgH8kieDrrS9VNlQrhcG2BdYW03GtrTIPltPNssVWZXlVpeCdZX1Q%2FyTtI0MO5UdMDW5qi93%2Bse1HHEgqBVDFDcFjinrzATfrDO5X%2FB%2BnljeAs8YjKMNBHqa7wskzuGDCCxPIg95VQjmA%2B%2BE9CY2qMb1DAlEklXXgoJ9t%2B5xZ%2FE76TGEE5IM6tbU85SPfdl6uWnF9zzqx8JxjsXaPNvMtPo%2F4Iv%2BSl1%2B71RxflhXGMkXR8ULmN0KerCaQYvTLw%2BlPSi%2BhD6lY3sUvlsD4MT%2BjixLfgu%2B%2F6BWATqTaKvLxAaMKzfpFYKJ10nKnl8kn74MYsJ%2B1M60JGT%2FNild4qKG%2FoW6ShJLzadAmHOE5HK0Q9r2vDKls9X1oSP84NX6aAGZIwv7J5cbqteYpGwdDzzabyngDvdkpeNxQPzuckWZG3FEm8RDmpHZwXc4iWuuxkxApAjckAWv3wpkJsblDMyjEAi7qfTcnxwGAIVWK4bYPGi4DiSYa8zZYNTgmpLiIyIz9eu90Bg%2BER8jjSL018fWFvedh17z%2FkZQNVFExQki%2Ft8zuRT7c82Xq%2Bh7xyELy9UvXTT88MKOZ1ckGOqUBAqScabQgEp1%2B1%2FjvvXWeXTMq0wK5HC9In9F2jhztEcRNst%2Fj0T8kmtH9TOCMVhwiwNFtpiqMJONkK6rL7SS9Rvfqd2blM2uzP%2FQLKde%2FsT7J3m8LVYG106XvX3vgWzCzdsyXxrcNZrEcxRIZWBe0%2FZC5xckLnESvnDMw6gXn2%2FZEsSHRNNHWJY%2FNRqh5MyrzFJ4oJhJxuZiDzsGBDvaLuUz5Unsu&X-Amz-Signature=f374ca80fa9c57bd4ffb3ff35696af404bfd3d67e9222718751fec827bd6d94a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

