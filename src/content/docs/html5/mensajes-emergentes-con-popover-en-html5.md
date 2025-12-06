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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BNMCMLG%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T043441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH0pgI5Uvvedk%2BYv2XJOJ%2Bnit%2BULGcpLtReahtfVDDy%2FAiBl1HwIGrQj0HMSbq0Plips%2BhbXQE96WwyiO409Rv6StCr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMQI7OfvPPdIvgFmA%2BKtwD85hTNokQ%2BpswxYqRtJChnxDJ1JDyquUJy38lMNFdkKqZSDaDWFeQSpy3HPQsYttghbpCH24BWHvdjS1wwIHye9XQRMP%2Fh6PJnCtocPJrPJaeKB%2BqHB5BHiiz6rIfMj0bW0zVz0q5QTZuXJ1GbEwJPIDO0Aexi8AvLg%2BRx0%2FClQsl3pGNwamIB57T745PkALEvOxyp0lkeicsUOJDYxtDoNtpzWxeRv%2FA18mb1QvLuJKODLeQdDyZZDkQnxRjM8mVocTBqzMt2Eaph8Fle%2Bs3x6y8JTvjZsPFpzpCETaCtdi1VLLiHXENSaAuR6ed%2BMUSTPQI1hocpGY2Rkw0uTKYRxfHswST4lUyws%2Bvpj1FI9Sp9Va8ZHj0yGDCoop7G7MBF%2FLI6QNtvKW7%2FBT%2FV8lbSqR3L6K%2Fo1lq83F%2FKV2hCigEWYV9xGCB3KhnwdtnywdCAyzTpYUi5Q%2Bc%2FGSBrJDHymBmgWZlxzqumbwFRHL1Sqk5hpTKeBWFYurtMEAvYO0XwodlWt3hO%2FE3pC7x6OQgww5VQr9QQn7WO8aGnfOzO6yAXqmGLqBcViPjguTv2SIQuQAmyR%2FfiPy5oEuCQISehIqfg%2Fx6qgiHhhDAVbGldttJ9CiEhvdXJTIIvMIwxd7OyQY6pgHEvVlWc0%2B4biFD8r8lR9Vq2ve2K6G3%2FDhVd%2B5P6QDhqOiFX1js5t1HAPLTpjwN%2BgAfW%2FCO8BYXRTc9kq%2BXDEVAIHGXFVENVLdEnQvfighTxckWK%2FmJcVoFjbbRMmfElMhVBzWhxs%2FO%2FBr5kXeGzR0DMs5ehZpKv413%2FLmoLKieG%2FDTd8ln6zWtgTc8vmeZ5thfs8jNfr94fNcbFBYnCc3hE0Is4bKw&X-Amz-Signature=013870f96c6bc1a35bf0b89a11bd607e3dcda1c0c3d3207ac36069ab27fb7dee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFEBHXX4%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T043439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFVTA1u%2B14MwPMtreg6ZJv6gJIHT2LeADU7ohjH1Q5G2AiBstJRc5BDBZHvfdCPe5%2FdxhRvqQix1YLvfLhnTeAkEHyr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMAl2XAVjfS4u1cZ%2FDKtwD0xUQxZSCFS9a6n9JQwEzUWYISjWmzKoQ7uRUJY6MfumN3XfXb6qvjmVtf8SvlHoxAR12i1Q47cHiwSmd%2BB9FcHd74qTE0OaoYIpY3umN%2BqKKt%2F9c40XLoy3D3DsI%2FpD5xF5hcL3CWZeDMEJZySTjOdpyG5P%2FPU1JsrlvzTPQjOSOHcMd7ePf%2FxmJ4jJqDK44XXLqkK7YZ3t33oxoQilsG9cLWtl65u6Pnxo78o6qDrokDdb0lJV4sugYB1RTiUmnwul91Sk%2FqsCd8CRNrYPmjl9rX4W%2FQndvvKLC%2BHX0dL%2FNbM95dQexNAeWcNrEApTU5zxLdJxi5BOufkrmbmyImCmTnfN4Bt8Ar1NUQl%2BAEa%2FRFBNZNH%2BAz2f6JnqCGwHYgzQlKIhSQDbatoZcCzF5XRL4VIfG6jUSwSwpJlZlqR9NUMHIIcRxstrln0L2WuSnrVwdyybeSahf%2FBmiuGyMg9mQ71RFzxY9aZ6qlBghuQRZtU1GSCdaQHEIJw%2FBAvCk%2BeVHsKox9WYFQIkHt6daelI8udYRl8ILWDutfPyE%2Fekjv%2F61n2lrPcAGR031QK91F%2FYIaqSl5UJ0TfEcM%2B7cjDXM9wfp631vyJXB6RAZibjIjv1zB6XY4pfdWKcw6t3OyQY6pgFGSxF6%2FM4XPgXDvAEuB2Y8vD8rcSLD362fC22CwdHBRqbQ2Ja2%2FzyTnX0i4qzVOvVDOikxOuFdS%2FPisvQ2DfR%2BfHlJvC2nYOvRDCW5iTOtMbKRFFTXEmahgkahjDV5l2t4bReqLtHrzDLJzgZtx3PAJcjEcadQRx9YvpiYEeeKWWYhGl7ixj8ReB3dGVba2E9PBeRp8Zo9RsvPBlX4hdt%2FZY9ywMeR&X-Amz-Signature=ca41bef4f30d4c1d54133a8fc4372be407aee3c4811bfd516394aa77170954c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

