---
title: Mensajes emergentes con popover en HTML5
description: "Uso del atributo popover para poder generar mensajes emergentes con popover en HTML5 en los que se pueda incluir cualquier contenido."
lastUpdated: 2024-01-30
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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XXWJQP7%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T084101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIGvL03KKmZQtUKzyP2pkXbYLieOBkCB%2Fa0OA9%2F1vUQ1kAiEAhuj73wypogeezGdJnZl%2B149VEHa8zdd%2FaWyM8LuJXHMq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDGcCtlPebn1kShH50SrcAzKS9Ny%2Fe8Zu2JfFQMmt0bQBUoLvvOJIQ%2FaU5R9bJQ4gtJSUUSCtOafOhHLGmU%2B7BUP7CcwITZujR3vLA6izv7fxtRSNut2UFM8hSYRs2VczrirN41VSps%2F6iJQmG5jt8E0vyPyeqFeWtfOUpyBoHwZKuJaaeKR5UGtk%2BIAE5%2Bv4oucXaH6I%2BHl%2FV4JmAjMv7MlGuBUh2eoN1etNN9gCbaiAUmtO7BLI0JcAZACDT%2FTBDNUUC1r4zyCcnleGIgBwtnhjzyGgKQGASa8SU2ifARX2Q3j0OwgSY22sGOIwC9OLMInth0nV668H8posxm%2FYOwQGgvuphpXP1W27EiU2rOtvnIf06FEatHnaN0H4wbyqns1gaw%2FOKn%2BzSJlg6Cdu3LCnZLuOEZwChluF3YDf5K6ytQcouQdPw8pi4T80eGcr6MfMYq6iE1VW3ymXArmCxlARjCh15bICcHCmjiBcZqEf783c1qRvLWu1AWyiFsKsUidyeTivsq%2B7pRa8rPXKdOZJy1UiO5SQclRoKxgcVFbpCOcNYkeqwnxahAgg3tE%2FjXllvwz2RA2thnNw7yxKNE3RXEhJvF84G9%2BKVAo7ME50pZT3Skr3oqZkVE9vYK9i%2FQhYmlOkWZOJAH4KMI%2BGxckGOqUBLw2tfZwKbFtUEbU4liBl4dqhOdvaWXk6fXMCrlWvZi8lzH54KF5pQf3T4QKrNO1scnHnXtSTMNpuM2gU6JxWTjpSu2W1Kr6U3QlFBGjIQawZwX6r1xvBC24kbcRoru2vsF80TJp4jgeneQwsUPJBjghVd8a9MHcg5NuJiVOp1r%2FhjEVtDAxzSDGTbUm8TG%2FNn4mjfJqSDSvdLJPOonOaEmYdzpaf&X-Amz-Signature=81552121ec4a351ff71b18fbf7641220d393fca51afbc14d60339ae6c6b123d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ILJ5XUH%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T084100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQDP3Uvdc%2FZV%2BdiWm6kGu3z%2FofwyUIAPL5MYTX6cbaHr7wIgHZ3uL9rEf0d%2BS0Tz0oq3mTGv1R9uzPb3fR29%2F0EfeV0q%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDP1%2BZVmrXvPK9b9szyrcA1PNJPnKkzjwp%2BDt%2FuLReqmimXOatn2V19XcRlKdMsSp%2BjYcrdtcXk8%2FBEF%2F1mlR3AKIVCN%2F2Orx7yBGn1CkYIlisFfHyxQKseV91e80fGpyKtQoNy7F%2F42zq%2B6tG2k11dMym14Iio9Li%2BKf463QTFbeRCR2rCDO4x1V07SwN0A0UqXeuGGBWsF1oDfR%2Fthg9PURv%2BdRJAzC7AdmJIyS0nHFNJMWp8CDHCGhY7gzhM0mDcYRWhV0xkdGsGfNzSRm2UMyNPYUfGfMII89tnNn7PKycYCiGflMliSRZQSBy%2Bec1vBPEjZuZXBK0eKdXacvr4%2BkULejP8xcrouSiBAqZHVA9PJexP06UjpxVid7n1mBuc3PPVm8BsLRJNFh5LNIlapHvVCGUQuTKOA2Ebl4LpyjpsrAWbz%2BfA1UB6FAroDrl1nj6ImxWb3NvC5yuZEHmJx8zR7CWl7Heh0Qcqd7%2BWXKqtlueRpfZu2aKbEbU%2FEE7zliHD%2Bru6B0Yt9ZtKpRddyHKzUKWhpDgeI5isi%2BW2wPnMY51DLggd1tB%2FR0nFBqOt8AcDzwlqpiahz4UeeVgdwgokcB5W21ssYC%2FFkD864tGA7H5fdKeuW4W4FIek7yOaH16GgY0FSDgApYMMqFxckGOqUBeUGXzIHHh%2FAGm3CUIiMVg8gcQhPU76O6i%2Bt4M7iXoJfu4w%2BrfsTtoAOgbHyaFNAc4lCsb3lpUIIjOEqZc3l%2B9isFqwBX%2BEACjwUf39erAgyCSsZ5rwW1e8%2FFH3M%2FLU5kxCGoArsTs2TH7%2BtsuFkYV9cBnuUZucGJ4mvVDVhZLzRWYYJzyt4%2F%2FRNU5%2FnNMWQDg0W6AK1W0mw%2F7sFqGh9cMNY%2Fdpfp&X-Amz-Signature=c58756e840fe5b78e137c91b665788e6accee998b5e3a7a21cbbfa312d4db785&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

