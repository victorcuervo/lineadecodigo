---
layout: post
title: Mensajes emergentes con popover en HTML5
excerpt: "Uso del atributo popover para poder generar mensajes emergentes con popover en HTML5 en los que se pueda incluir cualquier contenido."
categories: HTML5
tags: [html5 popover]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBFMMYC3%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T103018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIG6ZQVEMwdeZ%2BQpACKlpI6r53Xy7LB7Ing7roTzRSMTsAiB1HZxUOJ2gYHvOhwSb1i7BqO%2BhFjazCwrbr9nLW%2FdX5Sr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIM2YOg%2BSL7weT5zPNDKtwDV0hrNPR3oYpBD7i1BvN3Kk%2BRUe7jrIboIybDPP0xKQkt%2BTp2Ga9jxbgfiiiZdsAgNbHYSW4QXhmHxL2bk7xpRVDzwewhRVXZ6MrmUD6K95CylPNuLZW%2BPy%2BcvFEpf7ZCRdr7Xzj3onMkltbyQdh%2Bd%2BLvPI9Lc2djynyzqM4h1LE6D5Z3x4JR9lRQ9vTeTRd3qjq3Wj3Hlr5uIxWrJDS%2BUihPDuVxWpj36wZL5xXmZFESqruIdlq2Y%2FjgIJgR7N01sa3LkNNxUEyQJErPkDaQbP4CWzltfMOMn1AWWzKEMW2Av2NAiGMtzonTa4ANoVZEyOayx%2FGBdsJYGGDt5vh83rkUH2wVK4FvTp%2F%2BdkvKMDOBL1NxgR1BSMw5K1sfeN0wzUH8o7VoO%2FCpKdmMu%2F1iLOJhhLuU10UQFOj48RUXN4AjEjqYs09ZC%2F1pP6Alm48nZ7cqOg8jIay3uYFuDI5AOAoNHCP%2BcF%2FfcQxRqr%2FNmr7roh5WHhizlrXWryXABqNW%2FeijR1MBT1bng1MAvqqbFDUCOIEiHPOZOALavqZzDXC%2FK7jWOhsPTgfyO8D88SZ%2F20g%2FqF2m8seqamHVr%2Bc2pMUU61g6lDTRG4TJFK1NibXGqjdFlak0BcHDXi0wz5LAyQY6pgFIYKXIJYLm9grfVG76rke%2BYcniVJhnluNYqgWiqqpZnlD04fyn%2F26YuolVE3QZ9g%2BpjNH5S2NIxhaypnIOGLPNCefrwLn80yMhASAWIPTC1sY147VT6Iq3shO5radTcqnM24O8MojIzT8oWkLivMq%2FLD%2BKlOfdkKQ8HTsTYofY4wJdhGp4TxYUOC4gfg9rwQb6i%2FnsZNjv1Y0%2BdIkpjPgwemTTJlTH&X-Amz-Signature=f7c6f7c9e5a177cd47ba54039aed078ac2c2bad788e7b5007a8948591ba755a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WB2CTXO2%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T103018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIBonDUpaF38hXeYWfXW9CUNi3vovzg%2Bo%2BSfJbnWVwcMyAiEA1AZHfOpF0YZGQN2CPyUdLJ6lzFyr6wKCanWp8Mwphscq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDBgBy8XrZ8cXgbiAKircA3pFBhvCYOVceFemETqPMD5QsYOMkwB1KN4aixMwDh3qy4JxDxksic0GBVVirgWBOc5QYzal4PHyqh2QyEiFp2ehUYTRrTZRMpsKNcW5AzFD5XOVIIbXsIRtJXPilPf2aIwrVg1lretUoYgMnXteYm7d8eNlfL1fWEYzncmiV0W3CrMJ%2F0hmAlVEntNTHBF5vUchuj1fdBG1FGo7o%2Benx4E3Ib3cBrRCVmy0MMbViWqASkUwGbNUXUrT43dwRWkPzsgb2yja%2FxLpKX1fmyGU0Nbk6R0p6m1uirT%2FsQ8LbWknzhWKQHCNWHJKRgNPUXSOdn%2F0m9MRkNq6cMJTtdW2nO6PPtb8%2BOW6IyuTid8TOQ5CTNN0tilC%2FTAvSfcUoAKwhns1oAWctbipjGraPPTl6Eof%2BGhvUabZkEhpE8FYr80JObWnVoq4jskzRxgjldg%2BMfi2vH%2BWQPVmZJkHtqtNKg40s3IOzKW1UaYGCU3xX2FoHTPGlsKB2cyl2OLa2ob73ObVOGOp9PIirnGFECjXGo98qhS4WJLKbqpcLU%2B7o7xqB4lPUOFqP86aFv%2FcRsbyXo1jyHgIoFwNdFd9nszaO%2BDP8MtCatNYjpV%2FDUwhP1e3%2BLYp2DpxjGzbzY2eMMuTwMkGOqUBmsjq1tsDDGp740bnvImc%2FmstaIhvGvtOM1Zp2%2B4UxPNgVkYhloXlqufCzb09otc4wnDH84Bd5S%2BOrCvBb2KnLvZ91WxBiC4rR928vokps4ExA2Q7wXST0wBKAM6zYXEjY9NXHZZIqHVqbn45a59saYMCGlC304PFRTeGGtL%2BcNHEHT8ERJSVRHYT%2B1520O3ScXvjz37tqw72tjJw5AbWwqY3k7Em&X-Amz-Signature=7d06c87385066afa104d509765467ce0643eca0f69a620275cdbc017ab07abb0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

