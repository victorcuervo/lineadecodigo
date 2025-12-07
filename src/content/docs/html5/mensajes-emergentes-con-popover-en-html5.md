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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YI7ZFLSX%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T234949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDiyTx86e6%2Fe9yk%2FCiqMG2D1eFWL%2FCqKJwroynkfX%2FFkAIhALwcNC5xXWchPqpvHJ6f5Y6revpvlEWB1JyNZYURwxkpKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyw%2FFBgnCYqVs%2FlJzQq3AOqpmLc01xrxog1SMGlY8XUL1LPcbMXnxBhqf%2Be6FnUKFRwN%2BPHTEGn5oIWQhOa8VjlAUWAWT7Pac9uFTwI6OGGD7Nrq4u7vfSzszYStElR22s38grHq8FDBHHOWEoFg5qwCpyngHXJI%2F96WUbTRJ8oK34pjkJH81XRsHCDZm4PEmHIJbAYPemv6fb%2F58zK2KgEJkZsK%2FzpCnyskt3RKxzw%2F31MFJ97gUTSwls76Gst0pyWrsvaclRwfg2z%2BE67L%2BX4cZbkCwqSXxTamMdpJWbAo3hrfbnfk3NmMHZxGMKXqtfn1TxdcyEV6iav2RB5V%2FIZmQpFTAEa5nWL2ahfJDYcatUkQ2S51fn%2B6q0m5VdbwTCzm4zHUyPVtHc6KUh0DuOduP0OqtLsru4qP14cbSGpEsupZr6pkV7x3hpnRbRZfba%2BE0FtMCt1abzEVb2qA%2FxSePuE%2BJo%2Bw6J4ppGgJMsH%2BnQglFzSh05MPyr3w19KyhpeEfv0Bf8yqhLNUCTXLNZkfueFbC8MEMjbKKebD%2FmTvhBK2vxiVLbUCVziVwK8d%2BWyfD7NA7jBLGgtipz7P4aY9AMZlrE%2FmW086m2weevTIYex2C7oagf90wpl3zxhvmC4Ougno3jFd93DFDCDotjJBjqkAbuqFtEySqEIsB9aN7DPL62bPgJjQ7rgm%2FiNY1vkYDm5%2FrOmGlGHbY%2FIMw0dWgNVKpoDJNrL7%2BN%2BlzJgWQ2D1OxleRcskrVG0YhSOivfQNRVOO9A8xdrI9oaQM5WzZgRd1fsmk1UHlr7zFIeDYMzptx4pcNgmYWYlGIIWJ5omxTxMLRN5OtbnFokum54rl6g0Sp4sW9dVQOOPG1U%2FzJzW001qgyv&X-Amz-Signature=119fe8bb5d1bbd610b7121ddc58b6bb4c84cf60a19df52f3c5089f61081c0144&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHBYPQFB%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T234949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBInhdhVN0KkAysxLt27irtD8yTbd0Y71mzPDiHs094vAiA3%2Fu8oIMUx5DSREnplOHjVCCxY9QVCwct1iOu37tvm0yqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8O4Y9tPpV%2BLT4nWCKtwDAf5%2F0lRW8%2FAYyK8UqW7JOsd0zp8t9%2BrVr1NBP22GP0rphdg5c0tzUeZyTyGojuATHW1Xh2HAas6JvKuE8Zzx4Cf1ilrfFIR0Jq4u6u9C2ipZ4rXXrHBSEG%2F4Op5YUnpLdoIUW2SQPYh9f8ab9eStFuEjCiyrLTudnT0hB77%2F%2FrGOiea3NvJ5mW1jTiExAP3k0CaKPXnhGqBC%2Fi7EsLeRNm4OBmBsYFkK65TyIOhkizLd1JfJoY8npdWGQ5CDn8yBLiIWbjCkyckP9g9QnAq7yWgSS1NFnOqIGYHS%2FdLn%2BlBxINxMRd0IweImPlnIJUCuehJf85ubuEI8AsgMCuNKvVxNe99o6IA1DMa50sNh8iplgtyo0BhKbBc0ml%2FCm8fe9u06of53sMWlsVFOO1BZEXJ1pAZUBaU7o6od2j%2BXsmfURHSiExPJP%2BRyi6LNQLn2n%2FgP1iGxGuP74eMyRRIR1uqykUoCtykmSweNcKqGK3XtVcs05vZ7PyBNr4AVhNZWx9ix%2Fy6qq739RfQaiPF9m6nW3h1cUxj1lEPBVI24YXcMup7cUmLoSX0syAuhJv1%2Bc9tFdH973Xnl2EnTGglCxJBdCBhHrBiH46xZSfWS8nxBZ7IBIwu0ZW7PT3Yw1aHYyQY6pgHHJsSGsZuVvj2bgMQfJqbGA498Ia99b%2FrHBmoEumg6TxxCgwdyikc5wVWE1YB7p0aPTqWH3W9mB0h5QwkCa9zch%2F4qglJqxHxBb0MCkKll%2BJdl8hReZlZMQBUOhFVuZ36aOoggHsGt%2F%2F6S0QLE%2FOaKL%2FCUeWUyqIO6b8VYJeEc%2Bzhwi5vjZhVim6ngcKkjzVpeAIr2slFw68L9uc%2BL7kzN0Qlg0aKS&X-Amz-Signature=5380781ecc6fdf913640e9b31ba7a27ee256454fe1ab50da5b53bbd0dac82ccf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

