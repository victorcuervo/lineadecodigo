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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PDTZ2QH%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T060332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGRVw7ZcGgD3pH9pzFOBr4umOj%2F2fC4QlNVu9%2F5daMagAiEA6sPkKCTlOu25YqYl0XeAQ6WgpOyS4w3GVynNf%2BDqSXAq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDLIDqPIgS6edUD4EQCrcAzU21VJcifweiqFZTkN%2BkcMVPChjA9mpT7QaNffgmPay6b5otJMUXUgCDiMDz%2BiXK75q3Vp87Kd0EpJlGMdwUJA80s2EWdn3S1G6D%2F%2BLLFWzykShkEGgs%2BxZEPMK5kKUIN1ubPXfHCUaxCy7xc%2FpKc0%2BEPlUxUkjz6ImKM8lUNJPGQNG5JyhQ1g73DLmHyIhT%2BSJoD9JLWj2UyAYJ5BC4NzPTucd4T0hVZ6jZ%2FGSgabSprwc4lESrTIh26JIrrc%2Fw%2FoNPu0%2FU81CEOkrtyd4um0i4EobiHdaH9BTPtApq3GYMzTAaS%2B4ROLB3wItJrhScETjZfbNx68z3wDAP3IOGp%2F0YpR7GBj3QInlIjCiTBJm9p%2FS%2BEkwpTEBT8yZ5gwB9iLasu1Czaoqz%2Bksxb6w75Wy%2F%2BXyV2zuZL1TJghkwUIGssG9SFLXB%2BNid1v2bSspz5561wR9t%2FuXX9n1X1gI8AsbIBywLDo8OSoU%2FvvL9zr6DcsAlCxjg%2B113psZmip%2F%2F4oyVlzJ3fG8lSZlj7bIFZr6ULZSrFQ%2BdxrGFTcMKg4uLWHyBR%2Fxu3ikm%2FaLErqVYF463ej52qy3tx2g3JF%2FmwL5t2Poqp1e7zCHzCnerVI%2F1LUZxrCN3hinHddyMNf8zskGOqUB63mxM%2FourJo%2FxxT3kGFQ33cum00KKpTUyF6D%2B8%2BIpEjI%2FdXGHSuZsxI9TOinuhdaYaIr%2FXRiSiDhxygixq7otcElbckbCSg%2FnmSbXVcKvHSPZunKYLCIYDpkwII6Nr3LxwankJA40MB2Jj6A9SLPTblHfBa3sbJG0KWZIL0wBN%2BxpMSCtlQOcsyjN%2B5Qy2dr3Y1lKzk4ed3Aleu0DHl4jneJ3UM1&X-Amz-Signature=2f1706bf4207932fdbf5930160243d36e7585e44f2688b0c7d3b95b087fbc89f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOFBLJVH%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T060332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKyAWeJFzHltWAItvGO1ZVZ8tXwUVaOhKbanqpm3ffygIhAP4ut5YXbUX3pp%2BI0TpcEU6Vayi3qSA2toLCiRVI49BRKv8DCG8QABoMNjM3NDIzMTgzODA1Igz5thxPZlP%2FUPdXkukq3AO5mR1a4f3gRXPh6dRIf0IzKYAOr9Bxl9ewXjqfF45MSCGTvYqPAO0BSgrfnqV1eZs1tRdj3bSDL6y5eKH834EbuxDmo0%2BoazhdhqWL3yG%2Bo%2FE%2B7rwn9JXDaJt5j10NTYfieFprhhfeQTUW1OY0Sn5RqUEmRtvaM2zsPI3Oo7vbj4FoO7M5gwAD3glZeesH6Q2Srej2O0wOROKF96QRddrKTGUsmxPEfQvJcx5PSuh00UtKfRDmqmpP8WNQlwV8ldcoX%2BAlGU%2FSDOpiZ3YTRnc3LxXxG6as7yO6v264AdDAAxB8TJb7mWAZ5CxACNGg3eQq20ciAeLPStN8AU2KvORosnfm3IfJSA7QS%2BHAb6NhIOoLLj6KYNZo7bNFo%2FMUd5gvTFuvZgqC%2B1lbqo6xaLjBZ%2BncgxLerg7gkwyPd%2Bgghip%2BKLAk47f%2FKWxqWgeScC%2ByOP8QP4Aniiv12nXF09U0NuOCTS3dg6w3dJxTdCp3r6tKSzfB%2Fdd598YYps8tg3Bfj%2F3laHUIn1IT3nfUJup6Jbu%2FXQbUft0OPLhWaQQy0sV1rzY2ojrlKdpr7sFQK8Og0BazwsRvzbMFXOOslVEKzf2j%2BotUrAQJ4S0Fb8WHndRBQdE6iRecmVcoSjDM%2Fc7JBjqkAS2KMfLkLozoRf%2Bpa4t4bpe8JZIWG9%2BjtCf5oacuZFQnL2nvu9sYfkQpvW2Hk4dzU6bRE1se%2BC0cIARNkiL7zCxT5IAj%2F%2FYjaj84m5lKhwAATF5erEdVtzzzflHygw0tngavesYNRBwdHudK%2FbSLVkqZ3g3dawTTgxy%2FIybq03EsdyiEhOTBJKt2Es6ZEBfdZhQ0PUY6bqGEox3raxx9Mj%2FvYYfT&X-Amz-Signature=18818b2de9ee436ecc9660f083402f5b33b34bad1d366b4e39299d542f6b2e28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

