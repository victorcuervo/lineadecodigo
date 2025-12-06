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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TP6ZW2C5%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T112438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcvitmCyhJssyVv4CIdc%2FtPZW9rNLfjW1AczC2oP%2B40wIgNGSlWS18iMQ%2BL6HuHTMlrchvkqCE%2BynY98iodQrq%2BhUq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDOEPiRDGrcxKLR2VPSrcA90mNgC1w9jOMIEXb9vg5%2FZmQy6Be4aMQR2EQ8%2F3z7coSdA9ToAd1w512OBSVvACk9I%2FqkdTa7Wr8VTaVQx6DJpNUt16vyKuw3BUomALODQc9HzDXvgDrZidRQxrmqe4Fx%2F5mOkYHVbZrtEwQMDF%2BUeiIjJVfQr1W8RAMpgTKIlW0wCBl1zZ7jQVIFJvqICBva2XsVwyxH92zISzLA1g8zx%2BEdWT%2Fn02lWZudbMp8mpuguhm%2BRo7O8LtixdxHq5qp47l9c0pHtFDhom8icfiFJMia9IrGyUHg%2BcGXetTkG7fuI3PQLK1nh21G%2FwP%2BNZp%2FchmUVZ5n1wfbCaj%2FeRCTJdKFsXpxwapcvQc8sd0a90znvRiEYs4mvRiWrAZ0J6H6jBZFffe1FgEKY6QoM9%2FZtyFG7zAHFS0%2BTged1%2FODAtrjfYRAar%2BDRd7kvHEbsoLK77IXgkKESrAL6FI%2Fhxrrzb4Dg3mwXkia1N055ZZqjwVSFE5hpR1Ff2xITadY2Tnq%2F%2FRqGlqHzPhx7%2F3wIbY6BF5CFdF41NGwkg1Ojd0tMb7i4seS8yVoni%2Fw7GV7sAvVc61DmyCiQA%2BBMIroy3u8sKCv8dJ409N7Ruotqbl0XvAwfcJO2RhFgB9yUy1MJ6K0MkGOqUBQ8Ll35Op3cqmpS5tO98IYUtPupwQSxH%2FU%2FG6%2BuvanI8k7jQr25uXe19Z5fFD4Ex2Q0jgeK9mVuwBQE5iKJKPizI6LumXjnbT7UNzaU2%2BWteDYPJd7Tie8lbe5KXZq8ngSK59T%2BaKdnl7nMhMXATsOq2PnLMrIOsu%2BikJJ63hmw7jZ0z3upqTbplUvSTiaVVJiWTbhemh4poxzLELdOPW4qbH%2Bnim&X-Amz-Signature=4c1b6c8415aba6f886ddc3feed145f5640ef15f51448bd1d621c6ec94fd4581e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CRLW5IJ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T112437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB3jhMARK7dHH53DR9HULoQo8t5KOte2epEkW7q9vOGcAiEAsIzk%2BKFePEIACFysHcVOsUeAAvJ2qQ%2BlMW7pNcJ%2F3Sgq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDBlYo65GWS%2BeWhO5%2BircA5PjZkRuqcOpK23wfrWSBZL9da3K057QER4ePloaxIm71WGBi3H61LL4k3XZ75JgiXG8ELIn4sEIqi0rgTg%2BHEHSpjYkvgV4TxqdyAvkriJKhaV4lzB6J3gNiGsoNm863HdK%2BRxsllJxXhlLMzdGzrrb4CDtdYb5fUJLXr7dxWZ%2Bl9xNEgYk6JMWZtPHJNowjrkbCv96%2B0sdzdprbulHc573fj7%2BWgJkBQ%2FAA3Caxe%2BRlXEkaOQE6gsgJdWumxsa9UpjKdmU7ETPTqO17hIRb8NBdGj5buLzXwmTD%2Fi1mMRVkj%2FjZdS2Pc9vUmqUVHpI2c9iTylGlD18SUcL7tGGKZV2iiNxCMe6Tdx4P2mwGhjU9OiP%2B7Ps5D3NjNuniE1URmA9gZuYtWDXSbK3ng3Qi8aJMT%2BsjNmyKZSN8Gj%2Bnhq3u5N0Midaw2cfiptRZDKVP5pC30U0syk%2BJmHUaPIy%2B3uHOMwX5L1%2Bi2CRGCdavMUhptop0Dan02w4gt%2FpXhQ2QbprLg68pDrf2EPm9MdVT4g17903o3vTN3K%2BkGj0uXglLwq5QjNl%2Bp%2B2USfAk6NXH1dg7sQV8e4Q1uVsD5bEbnjbKq7QDlsuaU%2BB%2FM4AdExoA4NqowEx0V5fKFG6MIqK0MkGOqUBIbogOmVmVtjsikgvxmMzL6iMNMVOWNba6qTYT8XkleRquEDnQwzltiWnggEBpDWLjJy%2F%2BwOpOZoKupoC9Zn6zID4H4XHisLRipPFmJ34d7rZDXoBN0yskN3m7KEz5Eod67dVVD%2FLe2R4OHzmJokoevxwukNNM6i64L2VPw7T0DC7SxUtRx7Nfa0%2BNuuyrJa6PfkQIdm7xF99ZlthQ99FPxlM1YY9&X-Amz-Signature=2b2bb2119e2b9a70f1a3e3533d91dbad87227cf86c3ad69b3873f1e33c4bf15f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

