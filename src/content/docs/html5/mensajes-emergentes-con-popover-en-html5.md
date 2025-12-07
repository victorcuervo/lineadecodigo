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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6MIXGUR%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T002448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDe8ftgm%2FUvSsHsgJzyIAelQdtQ6h%2FRQJhOXBA4Qeu7oAiEA6f14YgCxDhNR1M9w0vR8QMaagxf02bVHt%2FF9LgztWvcqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP3hzMBsKoDP8YdkpircA7NEM%2B7fP4HDL7NZxRYlhGzgF8EuQ3k7Cth5wvlabYW7ctf19k8WaHbeK5g%2BbbjPh317h5wZG7ZRdPr9fAn4lWXogG0lJbJ2jmmRT2UHeLG%2Fn%2FAoSchl0bEru08Ie7p5%2F8d7PcBdcvumIpJ9Zt9tlMffpVTvGtSYVZk034%2F7ubidTuj2q0VBO2HogAD%2FWvdmHH%2B7yubmSa20XN5Nxvw27dcF2CLvfZSVelgmAtZRMpbKC%2F%2FQNOVq1e74vd0Hbpx1lexGW%2Fank%2Bv%2FLzn64%2B8hDFXG2nGyB9uH1HH5AWDl2q4oT7CGFKMNlzhAA8Na13NPaM2PR3t1bhDnmZS3uBHXFuAOIckswwnh74id6%2BtyL7%2BHInqyjwxxQum%2F%2FFpettFwvYU5BWR9GRorYxtXuIDsJAP%2FNqa2CEgV9skZxhgfF6j3pfF7A9IKTHFhTL%2FXcHGAPjNhFFZuTgeir1vUBybqzYQlUDxtwsgOAsUCPKtHKDYXn3CfF%2Fp5tVGuZ3E0FN%2BEpQs3pM0Khu7e1F9HPxKMZsbClmmUVn3mH%2B7U6WOgDRPdSbdQtFIneWfGmQSNONoRVvZzOnlioP9Bj3%2FgtwywtmokXoNRGBlKeWLG9n5UnSLvKNahngU1Tl%2FhcPr0MNP90skGOqUBWGGfyI3E%2Fz0hyWsfXLrxFIYyXw6LOZ4L1RV5%2FwOzoFg1vVdRFsNHeda%2F%2FpCIZ7uBxWCId7Fxba3lmW9C360DLtd62WIArleljFC7IYch3KtlnKfNHGhdSioOlqluHo1Cwc7OU0HildtYqQWEzTD7nGWT1Mu0Z1Ov3nKMmkYg%2BZC2TwyQkUPCifivtwmpFLstskdci3t2yaYl3TyTRX%2FgwvUCBuXK&X-Amz-Signature=f989409567b46e4acc5b39e810a1f2ff93153fb5fde0c35a2c0e3ceb1a428ce7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3OECEVO%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T002448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAFxCIkCrkVNQPC5lBcWJt2c60IQGsZsWY1bEr9nS1vkAiAZ123p3ZQwKn%2BofLcWwdL0ejKdXtYXvrK4q9znHK6AsCqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6kqrAKrKYN6DCHJUKtwDvF8datTCq9Ea1sQ2EJKt3eTI1Iir63OtXZjNKkuLgv9c05rl3Uq%2BB91IGUFTYBy%2FAzWD3NzAc8BSDoNV5j0Jvxr%2F6ttbI57PJwop6YBShAId2RZM6rOORLBrxR6c2v1d7ncUHAp4Poa1uXXqOhgH3lNxTy52NrnUrBVv7%2FPE4CDEqA7Sx%2BRCaiwYB98sFTyP0x8abj4M5i2pQitLZl6Ge4TCFzsB3d1pAQsk2SeOFQ2iUz6rvuURmzX6gJ2j3VkmHUGwJFJT4OIDNevmnFTvPme1SxtZWTEchmiiIE8v4bBVcIFuoujzXo9d9wjgJ4eF7onib%2BQc9G7juww3GAsA%2F1M9Fd42QSMn1E6uRuLLupfZO0ewv%2FP164Np7lbZAIdewjA2TS0e0yb6Tcxq1Q7wvncCz7K5KBbl3s4TTo6WG9VzJ2OXlsEJSEbmC8EWjuQZuA0zDipausLYMlN2ICEmXH1IZO6ShzkrpVyyaTYDHAIzPiHp61zpV9ug%2FmebiAQNH2srZgZVPf7Wo2cDPJ8Gc5s6HXGpfHYPjTDH%2BvUW8eU0eN8vNDZxtraW3mZMY17tOwOTZTQuA8Ew%2B0MiyOgVuPYbPoef0HakOOPrJ%2BMzQ0kO9ahkeDdlKkcqLX4wuP3SyQY6pgEObO9%2FyWfGPDiTWR%2BJHC53GkmycUPv9pBWEomoIgVgAjT%2FRFo2uy1SZoDb4YdDhSzDRjAcBQr6v%2B95QHrwkDLv2c%2FEsZVKVBPnMjZJ51lNfSyuBVUKVWXo%2ByOzHHkai1VK8IxfhhUKBqaVnxB7eHAwvG%2F%2F%2B6JvWJjFcA6J4FX7a0%2F%2BVIgnB%2BYcSsRqF0spfR%2B47Uh7FeCtwPp61g%2F5rgQl25VTF9xB&X-Amz-Signature=942962bebaf3022fdd56671dad6b2ab69a611f680549f4b52c2246f076dc77e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

