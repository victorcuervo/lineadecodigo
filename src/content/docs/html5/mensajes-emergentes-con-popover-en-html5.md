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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U34BHLHN%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T084328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGOXWijP6sDRr0RK7lVPcIapX912ftY7%2BJn5a3%2Fk5f2hAiA2k5jky21EHPvcNt%2BWecSSk1Y70%2B7oKOLHHPkphBE8xCr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMzMAAJ6EfDy2hW8tWKtwD5OOQP3OfyAMgj88YfJSqga%2FUKz832jiuEHFv268waJGwPbKHr6l9Fl3b8JNEQ5goS4ccLfs6elI7C0h7kgiB4m8m862uP9udHmYQQ4hWPTEFg3J%2BuIjoPFu43w4Jfqim%2BkAj5DTduv4I5XeDZQmDKTgRbDNL%2Bd6tqDTBsN07ra3oa2Tc4uCkKYRWMx7sj6HfYsJKvkqU%2F4wh1iy9XLKG0HILF4SoCz91sMu9l1vO3gVLLLczWENMruweTLDFmod4FD0Qy7X%2BovpHR7noRGailuqqhp4jGRlviTUwvLg7tCzE2DpStQCST5IptUpL2pNiWmP3uuG0kkkctc9QyCzGI5Jp5P%2FFd8Zdpy2j8mnVEmL7Tk0rl9%2BWe13KOV%2FOcJOjvKb%2BcILmVSUaYmtt1CWs9DiZkZHEiwtE5zAO3xDe%2B%2FIPLtzW4GIpv7Jw7gObWD3jAPzDd%2FyfmF%2FIvIZIJVl%2FR3s0g530n%2FkwihmqW9iWV5822KWMK%2BulqtSebh5obdRyid%2BA53E9f3ZFUKnpiEh%2Fqq1VsRkjfS3dPJA0UXKG4MmpoyZapleV2JmdVBEDzVUMdC%2BJXWWRU1%2FNZqmwh8pe1dCJHpku%2By2l7ZeNigP25V8N26u5saZQzpanRLEw87zPyQY6pgF7w7W5Y4QietvYXHmy3KOgxHsHn%2FJ8WBwKjOlTz9OzxaO%2BB2U7gZyNghhpGybQcxp2u%2BbJCMy1wFOBO3kHo7NHDcG5DrC9T97JB16pr5%2Frf1xro9cBXHRTEJjdMJJrE%2BYqzbCLQrtS6ZFJQyT23z42xxi4Y5R%2FKkQ65v1MQ3fx30uYQ3N0VfPWx%2FQaocrWea4t2HngKst9kF5%2FWhAugVjI17wMRIMO&X-Amz-Signature=8f71ec7c2d96f28630166bc8358267bff618ab1bc992a05b0de518d6f442a8b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663L5IBOMG%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T084327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcxC5OeWv96A%2BtcPv6l7%2FKBThPaDuDS5BCXyW9ol3L5QIgK2W0sLR4lxtppuIDzpSctkbTuF7mSk69222K3qHZGeEq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDFJhE1CBv1pkMUDehyrcAwobDG2daU6KEBomnrTUKuFA2wuKGYF9CCl2D4MYsLSlpcqZkZ%2BltGL8FMJKwvITOkTu24I7gU5nw1Tve8z6bk3jKLg4w0Ej9lhXBxMjO9s9S8TwxiHfASd1%2FmfS40CwAC4sP4yoEzcnYC2vTytlnvkvp4MUsnl8cTp4SCCrEFw48JBNcg8KZFdWC2k3zdaBQdsYRAZsLYQDnAyr%2FHt9jt%2BpOy77jNbuOExtQzAesgjdZErG5Eg8ZbVx7W0C%2FPj6aWCtY9ZTriz0oEAdioAUF%2F4a%2FrXiooPpvHrRHVhRXo887zOqa2G%2FitwQfM%2BUChvfgNYkHOHNLnmf2Mw49W7FWrVcWLlsHn6JtudEEpNabmKqzAKJL7%2BOYWVabhicIF%2BMAU2%2Fa0JoHKVpnAVICzZS0Kp28tm%2BhYdp7EJYLHSLuTO84z3KHYIRwoBbIiMoOdnLPkdRX0WxgX%2B8qlfYVREl87WhdM50MxR5CPqrwAAL0sqO5yGvekEbcdx0IGJdhHs1pCBYIzLqIdzagxTxOJf2L5yqdtIvxWAUv7RKj4ZIETjIBTsveQHHJCmYIHSK9WNOU3fIyMjD7Bx3BoW1NN78DhZp2TPPAnqIpOIrbZ%2FaJK1NNlRC7a%2FbCliIW%2B57MMa8z8kGOqUBKxeBQeUeXwmttBfSoHEAldbuAZU4g%2F77M7NwyR3FXpb5Sgx3mFZhKjBA1JVVevwCDeJIo3irIyG%2Bd59BMjVQVknvJxuKbaprfTvil81P%2Bzjgn3e6NnAahhYsddENbwm7v994EDvzbvmUQQ3g4YoOZfKGjyqQfWNlPQnb1qUhmRbO78IrpjwAqYqd4YEHnNI%2FcaT%2FPV8%2FpNfrtQiCjYZwf%2F%2FWKeKy&X-Amz-Signature=a6bf6ddd3354b9ea22367c97591e87215b78b8853baedaf0445a6ce74d2eb480&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

