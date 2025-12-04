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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFTTNVQH%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T151135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJGMEQCIHPYi7JmcZPiWK1qFoZiynmHhj6JiordrMHl%2BZOXqGTwAiBa5K%2Fg19M9yJ0VVkLmZJepqN73t382FzUszbHEp0qx%2BCr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMwWBesKGqxSfE950UKtwDpMvY4g0CWpdDXBkaGBTp5MbV5fKEs%2BNlKTkWLr31EVEQ9AAF1R%2BIT5sEeyo%2Fihpr9wJpAVBeJ%2FMAMvGC8rkpj5BlyhBb0dE%2Fi5%2Fv7jfu82lH0m49iuFtUpYoWHPCUgFEfISEwo3Kp%2B2wFTq%2B9ewqxKGWfhiNJA2zQjRvwEUPN0v3yNf67oldD%2Bgca6W0QnBcDDZt%2FhY1K4GIO%2Bcr7M122LoFkIO0aNW52hY%2Bw9Js8x1OKYazBJ82s1%2BnWyQSDmRVdDpgHv6zZkyc06NP2Pa4DYwpTDnWs7Wgq1ppKMmUL7Qw2%2Bo8l7ZO0QLIrFY6mUfaTRK%2BXlqEg%2Bapea26TnKGicuwpyNigBZW86BSHuyEeZFq5X0Fl7iH1JPBVpyZYHoB7oWjRzOcXZBeYgyYfbNCg6QfnRBLbRAibJhnFj9zD%2BlY538X%2BDBwNUwUQwwStGQqmSFp4R2pB4820il64%2BNrlR1BmgyQn5VDGKri8E1zIk59n%2FQaewdv3ndiM7CNQYhliQ9WYGlDpzI9UeL4kk3gZR9ujhIgVuoanZfvoSyYHPcLN46n9FcoYE7WlF0ysPFFB5Z%2FdM1gpIPU8%2BM%2Fu4SNgDpd0SEjR2Kh7ioEBIUdFfi7aySw%2F%2F%2BIY37pzoowxb7GyQY6pgHh2JK7m5bMKhRGhXAJBgvev5chnpD%2BaBIyU2szuHr1UGTfk%2Ftngdqq3ODqdh5c2JIkyHwJEoAziJ4ZsiQoC5J2NU%2BhNvL2eLo4Ebt6CpigdkYT2NZ5obC8hWKxPClegkfaeJgU%2Ft%2BjiQVHPG0pmUqnisKeqJWVzfz78cXLHRvGFnwatBYUsyJXLTVIMzYU%2B%2BjfyBKyt4UWjKTGlHNDdJUjbtXB0LIP&X-Amz-Signature=530dc250e75157766cb51d781b7a813e38f80668c730049c85076b98808f8b17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466727YVQRR%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T151134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQDiuiczmfkSSr7I8DLJZaqsLN1fB76wgTMpo3P1W8jhOwIhAO1hKfuCYasBCS9OCRzstBkn8yYWxi3UHDklUwi2U%2FT5Kv8DCEgQABoMNjM3NDIzMTgzODA1Igzlzcvki8Undi4R1agq3AMoDGJ4vyK1Uh83BZrIX0lTekzq22ZsaT1EQ1kC9CoDMb3G1dG4gBacKPgdIEZbDr0HnezIJJ%2FRnRbq%2BxifQF8XLp08%2Fl1iv0wUicD5FgGYPG6jBioYQBAZaFyVYX1Xhe9fXzXjELlWZa%2FI4QCWIy0MLZYPNk13hjPiWv7iRNknZEnSNW3Oc202Gnnou%2Fnuq9blfXKmjGVIpI3W9L2neYMH89nnYv54fKbJio%2FL8aMaF1aemkE13VgKF59SzHqTldHQdS8OMaNNqimmImnEthTN5HQEF3S5a7Ju5YR5bA8z1gGW4PTxT%2FhF0KE0JFfpcSR1YShlB%2F950ADBhHIcMmN%2B8RhNZ4aABUresLpmMNIGEztAKnVIjsxv0AnyDsxuEkqnFe%2F4N9FD4JGRvJIZS7ZHFxGyhGpCR%2FxpLQWZ6lnl1m8kha2HokOvP8asZAM8ptN3D2Sq3ObadrGGWE34cId18pF8Un2V%2BWIhAUh7Y%2B3gwHITy7FA0K%2F5d6nvEpSzVcBdygcvCnBKU4Mahda3sBUgnpW3Qq6Q4U%2F1urownjhF%2BO2ZNmK%2B5OTLtbaS08GCQCAAftU%2Fay%2FBtHp4E9Qi5dvzqPVBeH0Oru5JOcjX%2FNfidh2UjCrpSSvWwXW07zDZvsbJBjqkATVGkEwzq11dx115R7ngiRhWUkLdV0H5w9M0PjBh6fi1AVN%2F8vb8S1gF9JLWQQmf3Jg0h9esLUKdAKGLW5nqBfA1qD%2FNK463vgHassx054emqLhvMqoUdYwl9iXVAljrqtFdV2dNok51SPCigoIFsapwoX%2BRNqdvmCEPDNlWzTMdkUSHxfzf5%2F%2BK9cLnvRj1l17OuPcBqj9%2BJjCRiJfHWujh4Qfw&X-Amz-Signature=1655fbf9737f9bd1d6b64ad496f5a88c874b011b55976647cd2eac28845cab0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

