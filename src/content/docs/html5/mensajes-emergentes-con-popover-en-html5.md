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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMPCZ7VK%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T171638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFlFfz8khzsFzFxsmB0uvj7o6lfggY8dDOh9jjyjKdrtAiEArG0scKGiqbcnRswlw%2B9ze1Z9s1Bf6Rdy9BJ6KHHSPtoq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDDJKfiCBwsmxNJ5%2BoSrcA8XPHOP7EYfYRQvpppiJNdz5CWZpmLfBk0%2FWTww3Ap%2BGpzshHvDDhOrC8qGHeuCSBAfS4%2BHTie4HYHb9UAbFjWPxrG3e197ezVYrdauEclrkQKmFXZrrgVxV56iFJX8dyIYQSJARNP7iPXKXfwG%2BTtsnf9BQu25Se2BO7EmFQIngdkNUHzNAQPgXngFV1D8NsXiVBu5wtpficJvNn2%2F08uGcW%2B3pbkwOkfvLttdUe2ltpKyOEXILgkH29q0V9zFg%2BHSzCIkA3aUhpvRQdpApfVq%2Fi6D7gkkxCjP9XKm%2Fj8BQ7sgRskPoc3nHUqQmNXm7sgGms1oSwrO%2FN1xUfK8VdowkFge7jrKeGzrxwHkAFZPYCV7chI%2BHbTednrC2ZBFhUknOltBU8FY8wg4bsOhDxfBDbfy3G5h5X4Li94U0jYeCl0tdWKPbQ%2FQ3h%2Btz3jmYtn%2BDkRg2WZXkyxx2Ejh1silHiDMd9q%2Bc0ZLISpOR89KBKFqxXazIFzMObwhiVt1nylODo13Zz7HRGAi4r2N1khnBLJ80SD3XxOz%2FKw%2F1KFAj8gzBWar1k63qYeDOX0NDWwx%2FhX2nLVuj6Dl1j08ipCtrsZUN7oDNpLf4mVur%2FF4HKSB8MtSNAo9Zr04cMKv6xskGOqUBO8o7viVXzc%2FjvxUWLe9eqOMafkWLIFeQFxefTBKbdHYQ%2BRzk1LOCFNouA71K2i9uZPHfZMR8BdK9QwsftP%2FSeqVor6PRPY34KEZbUDBa%2BYq0S8YnS5tQZ5b5drmKo4RBe8W1GmHJ7hwXxRB8CX%2BOjFX0suFm76v83K210gDJILfQYvdz9z6UInvE4DEpqhd9DZCu%2Be0cAP78VE2%2Fq5%2BwiFqJC5yd&X-Amz-Signature=ff1beb146aa0bdc8eebd074890890f5ff45f0af57460edcb0308807ef63445e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGK7HGOA%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T171637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBfC1kVO7L9PspGQlyeXvL%2BxPK4Ogd6Fm9EpoZ4Jly0FAiAlaGMEUIYelhsLmPOtDjM0zT%2FPncAnqAK2aH8B685ZtSr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMDu45Nrr6UEvbURbOKtwDE5b1cC0liD9Xtwp0XcHxjwYILhYFKt7xjf3AEONJuvlwpjvKSvD9eHaZSEsrRM7b9FD33%2F32gtFe%2BumKBXdR38ErZ0jg8sAXyg5HnobD9uGm6irYZ5AZT3eQBvwB9hfL33FbiXeyBnfac8oPi7l1XLp8Yaeb%2Bttiqw%2Fks9eUmolWiGjqGcgHx1HKF%2F4PuWgX7UiThkg7kHWE1wmAGo2zwbkYeR4ykGp2G%2FTe3b5VRQUg6gdanyIqXoLx2xoPnURn9emJqOGe5nlmCaj9nPY5ew3xgBLbn%2BPfvF8PHju1CzK6KxAf4zAIiFjiBJnAzE4D%2Bfb%2FpsZzaNeKgVaEgz%2FEXVdm2LtfjlPrrVnyGYGQPlKu8Z3nWKGXGXQWCH98ESsmQBPwTvEV110AKr5hPRyER9FE%2BuXdj54mK45HlUOXFzT2MWn%2BLClJC2Ji9KIF3w7w1FmM6VT5y417xL08ykFY2AeMR2U%2FBO0jFzg7vSGQTUMRwNREAUECutR7Eon7zfHoQl0BlicEZrtugJ4mLX1O%2FGFL5mQ1Xsc7Bm7jXWPCQ9OxINRbo%2FSqzmFNeKWh2F9CrYDX7Tf6VjyxmIMZBRRlM1KVHy6Lt6O3vJD66Zi3tcJno55Dm6mSUkdcf8UwtPrGyQY6pgE1xnyOoEXTVfRdSGHge0SMcEjPPLx4Kqw1sl082ApiqSIaDqkrdQtm4DCwFsKCYjo89VatX3tikiAg%2BxmVUiSpFrg5rBPc0TLy9%2B1M8u8gpDP5LED2GvxkBovxZq4lLiCtbuCZXaRdKWZJ5vzFxE80ZkZSMuX7O6E4tfOfpuc62pjLxTQcPdrPND94iQpI2Cdox%2Fe5ASzifXIU0mXGsB2J1kAoaCXH&X-Amz-Signature=6f58b5fc40fe16e12f4321b4e923b0a8d5d2b3c1244129bbdc1a3404f78a3a74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

