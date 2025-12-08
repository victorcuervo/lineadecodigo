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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAEPTJ6N%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T150403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD2R2PsUOWfFY53%2BtaUurMt1frctqrGusXwuItE%2BS3ikAIhAMBuSr2goIY9ryfQ1GoowmWVnXeccznrrkmR2zD4b7iCKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgydME%2FdqrA%2F2I4RXNUq3AMGZeErYeH0PrpgFTP7r9wMx1oL6kDvOJfvv8%2FV8%2BuVPi%2B92e771N1Ui37hhplI5oTbAoNBheBUOEM0jdX2ZH%2BWz74ZADVOD6fzMVxpn5kseC5u9pS%2FYMLxFllSuaYZvM%2FNckUxaqYgWYHvsd5k8L6hOH3n6QJ4yzNkKRu%2FFnU8pE7AZ84sG0UI2OdN%2BpFAx13OOThxXGLemOijX%2BAzQDP8n61jcprZMoJqHCOCixo7kNkP8%2BhLk7OMPPx3D4whhMA4%2F48PTo6lwIBtECqNzGsuuOIkM%2FFPm3h9DEOSKqahlvgk%2FwmzEILclsY1E5DP2JKBK6B4KUCTgDIQZuM%2BRer2cUVZdiHB1fJlusvRT5Ju5QwrccDJ87ryyBU8s0CbkzShmDKclRM6r7dDl7mP88nLxtXypO3Yo0fdfrpk8rHW7p7M25ULHoEmbda%2BxncDH%2FQr3XiRI1TMTU%2BhNIumXdPlfPqxKKkkquXF8bJbrB0ot1d8CRwG8zJHV2dM0mLQCCZ5VvAujA27L6YwIef4pvtzIqtmaMK2%2FucWaJwB67O3ca%2Fv0a6AbD3fX1PZ9n7h1MelmrqE%2FFb8D72Zpd0v02RRFyZYAwb4ykyZ3wWjBQAflqD2mTgzEbbGbiv4cjDfw9vJBjqkARMePtVNjF5Q34Bk9aE8og0%2BMN97eaOzVYVgRil1CJCo68PEaw62t35LDF6PCK65S3Ag8jdVTi2xzfp4Z0NHDevo%2FL5SUXYKzQlTGTL64ZRt1PlKtX4u0svDPJpEB1rSFJiTTzmcw7YSlr15luolCOsnz61N%2Ff6F6Pq%2FjwQxVgBK9ab2sSdeDImXjZKwRP7yhUSBlIosSRWICXDTzvCgzRG0qn4Z&X-Amz-Signature=603cbf864121fbe4b08bea9da93dd43e1417c671478aa5b69e66ba1a492620a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AW5BY33%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T150402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtjtt1T7S67du2mmHdNRMan%2FPC0BsJGbQ5FkShuzlGKAIhAIoB30r3FXpGVYgFWzxm3lqOE2vSza74ViozLnfxKaZbKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzCHRYvP7%2BlkzVMO3sq3ANeg0x4C9a6A8%2FsqL9O2c%2BYmCFJODPmKTXlRIdNRNgMxzp1tFTC9I%2BkrnxPBnOyibwke5XrQdCqCeXAgXCB5j7GL1U99mX%2F%2F6eC4PY2HWONDQi0OUCQR22DflWfoIoPX9Bg%2BqfUog7aYXcr0ZIv6oFmkXLUy9k02SZRsr%2FpATNm64v80XW%2FnXKuWMh7SDmHLqzFuL7bNWFTXkLeABg2E7oc%2BpNjWLK7WZx0I2jfdPrt5L7ZGOw6IYiKW1ay7M96%2BE2sR3FWkrXDDRHkglRv7x%2F24i2%2F8F7%2BejSKveAn4A0KSmZ3%2FtStO%2FP3lMcUOPZlgpNEpigza90cIpu85%2BL2k2lr%2FQ3yTVapC2b1%2FYXGmMXSJ5UNCC2qJSIMoPfI3QbCiBu4Xl9qiaxuq9C0ffzuQjr9i0zRa35H9o%2F%2FCBT2u9b%2BWzNRm%2FIwRYlpHgsSeUv%2FXwzm5%2BgVtSpKEG9SYrpvPziPQZKbuSxnQ6y1EB1BiEqO31Dbel6xEjj6X%2BF2rr34QnR%2FiwMKNyB1jQuvEZC97kVFrhwsMHYF2sp9lKtGFj403g2%2Bpzx3pXBw4UbCPrvE%2BD9Tkn0pmsQ%2BCcRkyPiPlvAkGDUerXV9uXLe4mIi3mrg78m25cgpnimnRqUvnzCMwdvJBjqkAWv%2F0lQYnIkE4puLaPbZVD0go%2BXBHIx23uPLcenjoOeuO5QSsZAQ7m4xmN%2B10YWnfn96TkFtxb3T9v1SNr1BXRF4q4yCujeW9YHR7FFQ%2FXHe%2BLdAeng38N%2BCqD43bQdzqFKUwKhrM9fqEU%2FbbVgzpQMHmKBOo8xU9OEXTPHOt95VB3P%2B6pOPcvOugtTZQETJWzApiDtdKRNUVec3wn2qp7LnyJgM&X-Amz-Signature=f2e798c5e767a7718d6148f2455387b7d74320b4e15e99ef19fcdd762b1c95d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

