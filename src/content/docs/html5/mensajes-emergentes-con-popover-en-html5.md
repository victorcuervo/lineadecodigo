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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7UHPHSX%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T065434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDizHd6kyPzRUx4SO3qCXlkL%2BDPjoZnrGuS0Kw5LMHA%2FAiEAyAtiFMPyING9VGWOjkp4%2B4oopx4lPTvqWDaxTV34cBcq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDPAO716bDqmnNs0vUSrcA1pUr76SGEoP4kjLHhItoYTNRmx9tCt0qyfLozcun2QviIkXK%2FizWHKc2KIzY7GT0P8LHVZHnM%2FeXDMWuiB%2BX3ajWH8eSF8l%2BfXv4yqPFxkDNcfYX7QJPqcXqhoMZcV6Bollc2X%2FCwk4V6tqeTXRBmQy%2B4QrSkAG1mzGuIoS65f4Xl6E58HfQodp2WHKwt%2Bdjh7MBAh1UShHbaaGkwPjUeee4ZmSyrUFf3oMlkWBPD%2BkudLvj%2BqtR8xzdgFkA0FNXKuYTZT%2BG2sv%2FL0V5z3j0%2FDaHU87T0Rm6xHOZUsQfwGK04ZaICEnDOlfGH1kKwPEv4eiSb1MCERgyfxF1XA9nvxGiJyfeC48Jt8eh7AgM4zTE8F92MTVE4eIxIn6dYjgFU%2Bt%2FzJiU8rqUqsda0PgTx7rByOZ3zmYB9lsgitN9cxUd1axoBrt9KzC2n4UhpXGfETmn9NjuLaZWPy2vwexnU0T1W6P7rwO606%2BfR9c51UKQ5IuZsGyxJtDbGs9SVDV6L%2FJJHcbNnMBGP2Q%2BYssO%2FLwQXyY%2F2iWcUnLk3Q2Ow0aB7orM3wSAyaV1sRrWHwCcDs8H6Ph1keoJrlpNoufBLHNDcaV9WHwj8PLL7UuSrnfJH7qYVcIjoL%2BmVPjMOGez8kGOqUB28zmJVtMv%2BurDdwIQ3APXBHwaYpKfRtfWa1UE6mBv1MPuDEygs8sCUsrXaWW0CKmvjOqSGP02Pdug5AkOOzJWOi7nbPTJYOQJinQ%2FiEU7ZDDJGdYSOkHrXxvoQ0HK%2BFctABKFUoYeqkq2j1TBUGvNEWVEcjKbnL67mZuTMYAW28auSrAOLcecTjyPSNFqTfJ5FPwQt%2BRyHJnISP22Lp%2FH%2BH9vRD0&X-Amz-Signature=a899ff851c098aa081910fd9ad77f881e4c6f4df09f7fcfe0cd1081a2a473680&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BO72QCH%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T065434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgwt5K1JfraiVCFOvQWaEDAmsxQw7%2F%2Fo4Ql2IyNv55oAIhALQ60Q%2FKO7WIYsTW4bBVY9kfYewdGI1bEUuK52xYrh9eKv8DCHAQABoMNjM3NDIzMTgzODA1IgxkHayTVTCPtSe6Cjcq3AOK8XV4FX1DLts%2FcDGXtbHNnH9ihnATpn86EMWyUDf9sIsjzWb3uuqq7ITfv2tsmuI2ViHvuejCdc1q9QzbHDcTnbAFRyLFv8fbUa0XKzisbch0vQv2Yp%2Bv6YgX0%2F7F8ThT4dqfl8wAMJYUVcqcvIMxcwBn4eWhJ2V7WxUiVpXAMInnSOuHV0uIbxKspA%2F4rCOZSosDmze4fjB5y4TnF7WBCr7TK%2BIsjWc3qNuwA9LhWMIyXWeodAMm4US%2FUV22Qi5aXyiOTFyilwHMfzHiPFfMOuxvNN5oyRZiS%2B8EnAr1NKY%2F2BEkdI4o6oizfRfzTLAXpfYZPCT3w2UkjeORmhQg60OTxa8U9bOQQE9Q3RIIt7xy%2FTC32DTTzIA6PeIEBVQgyK%2FT5vPkUeAGvh9nvSEedktNPcpM%2F%2BZGRf5%2Fb5bXje3ILX7UFaj27ok13Mg2AYSVl150SxAXdYTYG4i5ws596Wy6GzBLVUb1kQ9eA4Lsz6kMJVKQRSlMD2OiSYIRHZ04U7PcrJLFF%2F1pmcbf3srV%2B6M2PzW8jeCYfKn00021C%2BUcMrOgGsM%2BrW%2BsolNefjb6SvpIO1%2B2yGEb5wZ8Uly9J3wFaByjdbp%2BmKJ8O69%2FT1t75jmhNaAY%2BgxafzD1ns%2FJBjqkAay2AIG%2FW5H2BsDSJH5k8FdCeeyiu1kuAhZfsc94yK8ev21BEZMeNtkuPiDM%2FjfswBqFEl21DoPpBAD4Y2dFoqSabtW1DmxjiFH%2FUAvwjyDqkXpYbnq3ATzsmZ4XDe244iB9%2FMzsi6jfMckoNRvupHk5jJc42zKbq0zGNr4u0Ip891TMuxpxLz7vgIJO7LwY7RoWMC7ouGVcbWHqRs6TvYhlZtQG&X-Amz-Signature=0cdb5fb93d0f4ecc049bb31a0847599acbb1c37aa6f130d5aab59a63299a919c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

