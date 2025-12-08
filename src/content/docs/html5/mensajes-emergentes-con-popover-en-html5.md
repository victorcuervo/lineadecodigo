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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7YY6TE7%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T125208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfzNdHvEs098N%2BgJHbfDHxajrrjXLqiL5uf1qoYPmn%2FgIhAP3cNHKzvR6JPojM3msd6JH7rX9oe552fmbvaU9tvRnkKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgziT9a%2Fe9hF%2FEhnST8q3AMTesqBUewINOQtG0iFS7ioRtPklBNmfshE0q9%2F9pjBZYuho9oSWZEqCM5fu%2FlsQusMJkWcfEsaAt79f3TO3gYxWKqx6Ku3Y4UlTDx2QLH85m4Nfdb6MgNvlPj3O%2F6EBgJfJFzomb%2Fm5iIegr4%2BznEtsD1wIptsXb8LQSsIeX%2FAPGQeN4aIxZ%2Fr7Eh1xY4kyNigl7DFabkm6SIA16ejcURttI3V%2BXz6y5A8T%2FdnbY5ZQ0NKr2TlPDLKP%2FiZVEP4dHzh0ShMBccia0Ffn%2FmI7UOyy5jtUx1lE8nLUANHbZ6tZdl%2BIqS66L%2B%2BAhSzQ7shzARopbvQYj38bBE4C8tcTnGC2haRb4KJj3Puub2u3WonO5ew7h8JVT1oP%2F3pguUps%2FOcvRh7hIogqfqOCzLTYkV1x1d5CEup4hY6BqlHZMUIFaBI0IF6dissrUnvIHoErqcHc3RN5adTRQTVKETj9%2FJG0iEJbOqTkqeREc4SplllJ9umWjPsselwqdMa5ztTdDJ2qV%2FjBU2hOiB8tOcZTNJMueyvVi%2Bze%2BKVpwEdQWYEFjoZxss2uJZKavhKDTPUvLbkw1wh6df2pgIafg9Gd%2FDTNRTq0NH5fe%2BrmrYcP8bT6%2BOdSqJ3nFpyae4tojDTj9vJBjqkAdwH2bXei92JyOdL2a1PTV4ZjMdm9MsKUH3uyxEk5klRcmV0kOWCwfsATGfIta033yqvqh02zHWVZLk4j3l2mNg13%2Bpljs%2Bmss1X4FnOzpaFdM88hDzW77sCmQXnvOkZCxkKQI4pCOlkfC7jM0UT7LsWDAwg6Lhrwm%2BUu72bUdVdN4lifcPiSVs9O1oyFnpCFLPpgDRFbndSq%2F%2BHemPFnLcnsDTc&X-Amz-Signature=4c1bfde8956ee4b4935f5f0bc7a59e6745db9895b795b168434d8289ff940968&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWOKD2MD%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T125208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDn2FlfNm%2FitycE%2B15rKFbk1XEy8oh0XAxPzACUHjbcCQIhAKpj1V6%2FDV%2FnO01F1LqCNr0%2B95oNI6%2FHhhPJ2Xyz0GxiKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz0pPx%2BYx0BwmW0d84q3AOYzTt6p6ksSboT6kAxVLCzB1V7k5qWNZ6J3L6AeGj%2BoErKecg9Dm1bjvD055t5IC9itwCoBrPPLp27JTASh2kVG8bRzTv%2B17W8quUQPffj%2FV5XiaoRoO%2BFMZp83cd87I47gIHpCqgNALfwWpZ7UKIG8r8T8mLDeHjKtR1LKKjkCZR0j8dVSLi4K%2FA7HGcQqqRU4sEFo4u7J5oVlFrys6wjC4JQyEFLB6yBAU30koQwrELO8FsN2Ls%2B1i1ZumtSbg6MQieLhoRpTpzZnST%2F2gK70WUqYxAV60TtB8sDQROsSEbV2fjIPDNM04%2FrDvVYII%2BoNTl9WC7tfA67WmbzgbO4JXco0TN%2FH1sUYgvpSzn8XrmYW34pbrEB6ISw5xkZxfwqNGm4q34t%2BWnc%2Bm453MT2zzboouXumFT42RijgtA%2FkAGBYFFwmp8KQGZKJu%2Ff7QO2plS2YTCTWrFgl0gTq4v%2FsVUBurnmBqwNY5WwMY0WJGjUwACZYerMQXZ9gM8T%2Bmeg04e9aRyLt05qXuJH6uVSP35Kp8ifR%2Fmt1RvY3vA7zFBuuKZbTmfRw%2FDMIeBHn0xDgcxV4JkFR2dNpBRdNBx6V5WEornbyb5vwal8nGCG9Po4HF0d0I927YTrizDGj9vJBjqkAb%2FXEFUa6WvrAYRP3K%2BhaEYz902h%2Bghzmzg%2F2em99uzc3QqGyBuUygkdawyxs87BuNXR%2FWBnaZ%2F5GH5rqLjkNQawyHffV%2FnBKWsSXLSOxT8c86lh5v0Bk2pR7bvhsyGAmlxgBKgoag2iCAJA%2BfllJE%2BT%2FYyoa6JkpMswjDXK0Rt9%2F26%2FAnc7Retfq1isPcPzvmqn%2F%2BvLwac4p3SBLzfBW3Iw%2BKBv&X-Amz-Signature=73510b8bffb512184bb6015fa8e1efb616cd46d995acbbc0c13e63967ba1fd84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

