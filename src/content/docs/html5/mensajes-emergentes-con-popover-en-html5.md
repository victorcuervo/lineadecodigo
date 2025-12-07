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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPECN43O%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T051922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQClvX3Bbv%2B3CjPfFIKqZxC1kYQl2opLZspAgxmwNHXBoQIhAJ5HZaaWXXEtG6IsHC6MaZWPbNB2WsrjhFnQdFTHr%2FHkKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxnpG2rzsR%2F45MWBLEq3AOESymo9EFmimyt0XKw5JrD4L5wrr7XFuPXrDvrIE3Zr20sNZnCo0y0slUUYCjXxPWLIkqECQgOdTsXg3e8zg6oRyXrMyIFFgaJzadw1Y7FbJBW60%2FoDmCjJNyI9rTImmvBlqycKO69aNsdXZOA%2BQSpbX9F%2FQl%2Bb9tk3NKdDqadL%2BdF2TA8DzXwQn%2BE5c22vqJ%2FQQTRDLDDxEsGx6Ic6YxrhL0Uv0rk6Ce%2Fq65x54GPSj1%2By9LkUMA37v90h3dxQt6lf8zy4Q4kXl1bCfTE2wpPamUPyPw9aiWUjFmZmVbCzQpDSAMXWph3W1GgIX7BFDi7pWmNMNfJV22IUFG4zVbf%2FjncyxZpIJlp30Ruk%2FEmiXK4EwZ4YNkiPNWYIBLMl8%2Frp2CuN52iUbKPJJKmdjWYAmGjDym%2Bplscqjz4APqoLZFfb2DqY18pRlcgQ7GheKdIQMF8Vb%2FLFZhPFnIjjNfm8D9ufUPbcJ984GHkZrGv4Wt6Jjmm4HE%2FqoFn7xkV7S0zPrUPtAYXNagLY7fjowIz7w8eTMIFJfCUimhmsp1at7pxglKcFS5b2n%2BG4B%2BDYPllvm92I9aX1joymI4kHwZxFd%2BSTgwFIWkTWFZLaqB8gyR6lsGdUufhczr0gTDK%2FdLJBjqkAY9mS3aobOVqhqA0QjgkZsb3Jnh%2B1ecFx2JmuXpTiENLliaYsTZq%2F%2BOfl%2BJYESc9%2FK%2FqrWcsLGN8PImx%2BV6%2F5WxGSFokIe6OTCOwDUGDeZOXDhpisKN8bBSnJuPuZB9UaskZNUG9%2FZbMlTR%2B6ilSB1jLch8hp1GtkMdwcFG%2FKky5DN5VFSJUxjl8wAoYZb%2F46351fp%2BnDYO1txBF5YGyGF8j%2FHaV&X-Amz-Signature=2c556cafd1584e3ab44a822f271a5fe9a3e3e20d002e6c52dc98e697b6d850ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYR65XIX%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T051922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBTkA92k8ofeARfS9RBYj38mKDGtwZWNOClSxdJGxhCCAiBiqQ6AhWCqfWgchZ6IMJOOUQmzXjPkTL%2FimyO2k7ryLiqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWOZN8KAruPvZ6Cq1KtwDiyY99%2FlahcRwmvwl4JMiFsGw37kTxyYeXSRXc0oEfdLd3nGM73SkpqW0ZGgx9SddOjIoUtaSeUclQtkqmjdwygkw5gu5XlLhYGu0PuwTpYxZn9hRvX1hqJAow3An2GvhJ2VVPvVo6G3ZftyD5VgNnQUb7m9M%2FQG6%2FkgjqhCz91dp5T150ZIwdRGXYGex%2F8aeXMUIgY3tdU94cwYVPzVb1JROvA%2BsikiA1c8wTzLpkA4OU8tCoLacfqwbV9ckVRyKEyG9XZfkRDU1TMcC%2BxulNJsHr%2F5q57hcGw6kT7qekPkmfIeXu0Wko9dfIASlRyhEZt6bzjl3%2BhwKYv8DL1puWcaQZpR0hNDCNwqhneXEwWduaCoxvzLZPveM134opZANodJ5MN324Sg8a%2Bn7D%2BEqS1O7xH4oVSb4LLu%2Bw8%2BKWRSL8kYJUFwrxxiPtWf9CQxyHcsc404i0vsZJBqW6UCTuAEccNrlibSCXYC9zx9RIaVFkp3PmvnaQ3qvHFLkbKZ37j3glosN63dwFuQX65AAhuzWbz5YPrauFtBylpnpq1NXHFjsvE14SoS9UkF5fJKYnUN42gOig07eAz%2F2WVtKYz1ZAYR%2BXEJh4hhlxnoEs6w5sj7tI3I0MB7DyV4w8v3SyQY6pgFMTeEhiAaCb09IKun3%2BgkgVfRvTP1OAAHASxXe2d1L3tjY81UvAatFj4TflgH6LGLlP38%2BylVNzOJNudAWeiHa1d55lhlMrfjgu3GKzziOrw6EudDavbq8v9wExV%2FrRa8QgDp1z8gqezA8yahojdPHaoELCagEknLomUQ8noKJC3fhgCJ1iFq1trDu3LPmVJOfBwimS1wvPzwslQDWlvVFIx9P9c%2BC&X-Amz-Signature=51036c30f6a45deb8626dacf971eaa6e26103d119753cc020c035888ca5b94ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

