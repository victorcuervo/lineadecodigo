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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667C4IMK3T%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T043632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIERKMHzBXhXd%2F1rUNd%2Ffaw14TBudKNEAfqS9mli8CrNzAiEA%2F%2FnCSbWLUBLuuUG5b25wFQdC2gJVqp0%2BOxRNI06NqKYq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDKDyvKkB4%2F06kltWcSrcAxQHi%2FWoLsHRKXz6s6kYBlY7I8fQ2xfyeL4Gec2%2BZHamn2UyjGckEB7S4TpuQXa6oYP2V%2BRJl2OgxCHFPdXXUfzNF5FVUFPoIG3OSv3G10elpf8vMTxv8WHxBsiXv0gEh4t0OK5NOZ%2FVp41UdQze1VOU01rv6Jj7A1FRAZSxWF%2BinfNzeTg0MbJIQVlmGINECtctpbSm3MkBw%2Bt%2BA2lj72Dx%2F6fhNtHQwZjj8zXgfMQTeeQ%2ForOUIoHRbfi7EZbRjtbXEsDz9K7J5%2FgtHeJq630NwnNx3Lll7T23Z619UruZxvf%2F466m6veJ11udubNdVF1Ag1KTzYIspz64a8XgoKGwR4O9E%2BOL60ND1fw1u2%2BtcjoZTpX9WtLZ8iVOjrb8WYPHBKakvBkQ0RLFLe%2BpvD4sIhaN1hXF4pnaciIP8rEdWA1jcYgFZbfYSA4yL%2BGBjjaIhejU4e3Na7wglqNJ9KWp%2FkDCGYsG3WFA%2F%2FB%2BXJ4PkTejf8gthcisbCDp1o8tIkR%2FZTaZC3hhAuhPoZ8Vq9I6ehvggbgb62%2FUNURLz%2BTtZFby1D7I3taxagUcpAf1O0A9ucD6QEpDnVB7nvCzM6%2FC8pQa%2FAg4OM6dbjhwOvXuhEantUl%2BqjJYcmp0MOzdzskGOqUB4EBeHNKkD%2FOvGCmPirgAX5aYdXdy0qCW05uSUpfUbcMNtS1jv7xH5BTZ4%2F9hXFteei%2FkubB3H0XDtSWPy6upuJLgWPYe1xGK77q%2BlVAVRAXogxNZtfPXQkTDqzBrWnYh5Q4fEmC6Mqq0tlnJ2FKb%2Br5xAl3Y6%2Bx%2FmtrdZuBpdBCnGuf9WKpdDkHrNEn3omz6Qu2zqX9pC6QiI5Bri2uxxsKY3flH&X-Amz-Signature=757577a882213474d7312d7ad69b011fca18b7543998d8f42a49c08a61613dc1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WESHGJHK%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T043632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0arwPjI%2FPCtcMTLALPz1UVY%2Bd%2BghfnFHQzjiFhf8GlgIhAML%2Fv7T29KZljlpnrfPdr96zxUH8uECFRvevb0nBBkFdKv8DCG0QABoMNjM3NDIzMTgzODA1IgyAa2WBPRD1YyOH284q3AM310jB%2FKu1g8OtJKIjmpeVfxMFfh42ww2%2FrGN5YcCUKjoN1n%2F98xPvYSEmP3pT2otOgeEyoU%2B9MZLOcFpxIXfriHHT3vdw6zdmZi4g8%2Fg8vYYwKGDWUyc%2FcbRoH3RS8tUpM63lRfGaEtKtPPvP3jhGPeRaWH1OJuBBakCJmjFw%2BRXRKs6hD78wAyZPz7zztRZu4rRc8UHOK0dn87fAISPJ88Y21cunf%2FBEOj4j81BKKB48cBOb8Z%2F6ZLPmzWxDOqikBPXfxe2%2FseFs3A%2Bw804ybVtzeJaJmgOtyy62LjlOycK%2B0ASNhU3JglM9rrgSZkGg8bPXZCLni3UFyflZJxWvC3AUtjxjoslFiBY7HLjyWIzdybDzE3U1DDDiGcAUOTfWN1Su5HLutLfZHfJYt4ULfPzLpYKlxabb64T2CG3hf%2BWzZ8EvD3tXTQDMYem69%2BV67PfnKDkcNu4DVx7saYFQy4kzig%2B6CKMrthgxYf%2B%2FggXu1j3VPTMBhit9MJAWEOa2GIlD3wa6aYTBCcutKdnN188JDN%2F8qSGqhk%2FjOHSlxfHAcEtiNGkhg%2FevatFkAHoI5gRwqj1Te7ZISr96JGbr0f0Jd0ezr%2FfRHufcAKVBh1YueMa8a5N%2BXFoQRTCp3s7JBjqkAWyEawdNICxpb4084Q7bptzpJ73%2FF0dOj1oGdDKdv13A3TD%2BXPQiT%2FnH7NrCXSwZSIwKiqkowTOUTYEsaOjtsa7OAqBlbghLThfFMkhNSYdSZeFQsdL35ZUD6v80VCfYq3f6nhDw6KdoRTuNKm79r%2FoZ7fJurOvFKw5X3N16Rv%2By096cVnfyR8I7g1OaX8y2%2BM5cGsVuA7MDw8PHWjB%2BeZ%2BWwouw&X-Amz-Signature=ae15f43d173ccc3adea81ba82fcfb180d53c2b794b6ad73a4305252a9dbd4baa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

