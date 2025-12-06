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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRBZUA5K%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T085852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHKl7nlqt%2Ff2urc0f5FpGI9EoIviSFCiTCPeYqfFp1QTAiEA%2FcOVN892pToBOnkyTyGX8jUL3a7uH%2FYGacNkVL%2Bmbd4q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDKBLYnuk1U1G0vyOQSrcA5DPzQ2%2FSDsClwNv4Yyze4x32UlRLfI77t1oXwAIge6GBIv8IKBmp5wls4BLJjmj4NLCp5ElrWPDruoDsdYlwhtgmR6uO06JBpisnrt7aNo9He6oFVyi9XudC1mRQ6WRidCErN%2FsE%2FF3QTYlNoYqPDZGUQ4hyBCtJxKbpR9cGz9mt2QEgT%2ByyVr%2Fsb8d%2F6VEAg8%2FdNDDWDIcB5LBZ1cxHDw91bWJP4XQrBvI9Dfl7jR0Pzh22HkdIA7tJ5qCZ2M4ZIKi1IATi74mYoTON84M3He%2FQuZF8frCfQ8kAXzwgTMOppzZ6aRARKD%2BWnMTF2bUmHyU9zbqBAOACKf0QEJ0nEQa6EXwuX%2Bu336K8hZttaDnE71sKDdVjqfaN%2Fbgdy1amR6HtmID46EgnZTOn%2FQrOVQMCoPc6DfGzw%2BC5nWaoFuNVVY4CFDfBhfNwjH7SYuRwvTcKG9t60j0PYPjPBuCLPNvPPLX7ceiRa3%2B2b%2BimfrE0fI1VUob3FdouMeGfP6Ej9A37KFBAuHq8bbgqEMIwvFTP9snrN2CzFwSmMx21FxUuGerBRJFfpltzkhwcH21AXBMLQ02NTAIruOohC0drMIphH6NEHq%2F1QIx6dTGgH%2BxuaPA5qMlmjJS0bhtMO68z8kGOqUBkRHMV2V8%2F3rhUL5UaDhpDSQtBPvjIX3%2Fs%2BUFYLYuyBy13UjnuX%2BiX3oUzMUO%2BAtb3PJAnk%2FwaBXVqaLC2w1ai%2BtQQ1tZc9nOKOvJZv0bJFxOYBJqrwu3koZtYno5TMHeOYN%2Bs%2FP%2FKIlofP3p44JO85tG8dDaBV%2B6in3XUrSy76zVQdiDNI5t9iqFwVAqiO9s4H9a0BsRoKnne8BPw9QWMqWPYfF1&X-Amz-Signature=260c61cec5e704212a4b0ec498121810a7ab7f3c2373fdab17109552b5d90732&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U74EVKZW%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T085851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHagmhEAZlVtxS%2FAaS6kwNhX9kCgCp8ekTMZSH7Mh3gdAiBBhP0Q82ORBZVdKjqYKOeOj4oV2uWMVVnQ7B4OYCMG%2BSr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMmWbWdEDwrHLLBJiJKtwDiyI7q3jgEUod%2BHMtaLbTrjY2YHJkd8%2FpU%2FYAH12bpx0OuBMjGc%2BIa8ycJ%2F1gHgknTDiK5oYLrzrNBGdWW5PXqZpyjOBCm48teznVCvDUUWfj%2BRvTadk6fJgBePz8NmI%2F5NQI5aU4xp%2FyiEJ%2FIpXSp5l7Qkf9NKSWx%2FqsDN0WPAfTPcbsqc%2F0FXqBmK8RHjLZ4VjuqDEPHUNzwj9cvCjZpfEnuzeJj5rR9POX8Xv4RTZwqbRdq%2FA8rvd1mM6%2F5FTwHetLbfO5VPK0BkA6aynx%2BvpmGvQeug5Zxzy%2B6S92ESvBS9pS5mQaCNTtG8u%2BxyBD6VakBOWVNGhmjfmreAVXrwX%2B1nj2y%2Ftv9BP0jGCgeWdwTeuyV5nbztKe%2BQSCU%2B8Cu%2FVznYblqLHoqD9829wdVCDIOkIDMFTbcCLZP4Fe%2FcVj%2FTi5e7tmG3Tftxha67fyko8bCjHj22NCKRR9tZFCafqFotPxy295%2BvKLPZxAHYXisi3bLTOoENMgU8W%2BnEVTIlNLXKJkYa%2BShXnMyBTzkO8f3c4hqrxZm2S5j3cjYYiJ4wfQnCNZrgk8NTNiUGalVriG2bnDRl5ve2XpF81IWUXujDf1v0yR7Nm%2Fp%2B7EXUJ%2BhCJ%2BpxjPRFTt6LgwyLzPyQY6pgHEtkIznLhH4CxUiBPUftF3FGPuDdO96cSc3S%2FZ%2B5%2F9c3CCM5vrXmhFG6kryMe6k89tx1ojMTDF2UBQsyNlJwL%2B6VETYfm3FF5SKPM8OkmUKtc1KL98LxCaUYgeIkQmJU3FX7RASyua6OmfGAhUFnGN3NNqRfOBinSi6DRKRun2rw7SxvCspdk6gh42upLYZh1YtWWY5P4M2NSbXGSDAttOYMHZNXUV&X-Amz-Signature=1e124b412a8f9bc9cbd7afdc2e89bd9253c1c79e19bf64de32ddd65d34721f1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

