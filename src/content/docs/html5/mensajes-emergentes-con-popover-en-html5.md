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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6SYCZ5H%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T150234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQC63OcBVUFM%2F%2FaXfm%2B%2FdR4CC64gy6kia9H2d3lNCi%2F4AgIhAMz6aeSzW03g4p5KUYXIZQ76xq8aaTt2vCiQmCUJ2jWKKv8DCEgQABoMNjM3NDIzMTgzODA1IgxMUhqmd24c8%2FiCtKQq3AO2C5q5OA7IE%2FbqbA29AZAW4mTOPRNRb9HhFvMFFMmKVcSfXiAe6hbziLKRUhY6ZKRNvPCP%2FiGHohFY1MewfsNbQjHJ0XAh%2F27dsE5giYE7U0qJSyLFIqZp44Bt4TbIUONh1jqkefFRjNF7dWkEeiIsP3z6dTUL0WX30U%2FXNP1fC8fGYpzDnT0m5gdukevZHbWjMyNRfWnABWIViFf%2BAKM1yajt8by7BT6SCxzm2aH0YbNTWGh5ylk4Y5JCROci9DY5lRl23%2BQHkif6bw0bIC6Xp24GH7tyAIpL4lgcXyfp4HKx%2FMunadxRYTgNEGDF%2FSPCzmyRsFVckqeORq3vnI1Pv2jAY04Gaiakuly08UcY7thFK4jnyCYYVz1ANjXp7Qa0eCCPPeKKQTM%2BuwQoq4iRfB4BbCl7Re0mKqmaqYXmVSHL9%2BFhzdbyzKes03%2FNvDag6szaMoARAajyEKpyAAh6Djb%2FQiYWgbgAb2xuspQOZrVwwOl6zALsdDzJmaZ8ciY7eMVOTU0SNHvFdVVuG9SFwthpWJvCtZLSu62zt%2FxmKdxjjHU1Do70gBvGjS%2Bng8dHIfhD2mTpBJYG9OcPQFZMnLg9wgyx50vlrUEowZVM43s84qQihnzEmpR%2FiDDCvsbJBjqkAZ2a5hnt%2FZP%2FZ8YyNmStkwcEICDr8k5%2FZVOiOCMFLSPO%2B%2B18D8F%2Bpw4O36dLaNPvtNMRb2oo%2FiPMABYkXvGh7dyGS4u3gLWlLDv%2Fskj5pcDogszr0QEIHVtysx1XxXBArf0grhhcR59r56%2F5cBpP2V0RMxW%2FnpSyfUJ3JHTUIm3U6Z1ST%2FEoJcZFk1afAM0tXFsvIX%2FMYgjAKSB0kyI2f3Zu9HsK&X-Amz-Signature=ca21cd5fcd57d2a309afb8c6f1c7132131494520837c238e9b05451d569cdb23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SAH42BT%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T150233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQDEIgZaixp5CPIOLuE3O%2FMTbzL77d%2B2RPvjz%2BYqE5oYWgIhAL%2BGr%2Bw9%2F%2Ft56Aemuhua4aaOz0fd4V2W%2FDHNDSx8sEMCKv8DCEgQABoMNjM3NDIzMTgzODA1Igw5ZuPCd7S6ZXUBPysq3ANkxELIY58pyIF669iRlDE9s%2BncRp022n%2Bc4KFqrWsYtWaRxcVCPRP%2Bp8o5al63BKi0BCyzOsPmLRXsGocGbrujsBKaHaWjL%2BpnwUt9Xt3ELGLrlltlcLfzD05xEupaU2Igy3p7sKauggmLJDdqTK%2Bj6rj7zev6x3m6Wxo50dPnPDfyiz35%2FIrJXauAfhetk6OfpZZ9SnTgbBWx1iJixM9lbiE2Ev%2B%2BMfldW%2BZ5b4O9RWXYiQmtXiFrg3PQoRiUj6sQryWpTACgQDnRb6lr%2BumhyTGacJ1FBVRhFsVTNeTZXun%2Fmg9BupEzFXnroUxfnUS4XVWR0864lnV7cVlnrAGQrlJ5rzBEphhH%2FJ%2FA5nTm3DBYrIG3rnA7eXcUYVLNqlkpZsQDAWjK%2FhRoNvZJdDmXzubSgUNjApim7II9QmrgQa8voRhiR%2FITNcOTsEqGSa2kE5w2HqTQCVeCVm9df2LQiyumKM5g3TOOHxKM%2FI8YT4rMj6beIX%2FutYsS1t2RPtWYaxDZxer1kSpQ7FT9gh9F%2Bd6YZWSnoY5zuR7TeQ3uRoxd5vTaROEgHEhFj7QqPozTGI0SisRY%2FvuJRmhnD%2BsBIh89MA5yRCqcLT9d5ZKUhKIWUaz0VrUZM5K7RDD1vsbJBjqkAeCTfnpZ3VlBP%2BwgSck84J%2FhH3qSBR5n%2B9ZT6dvZue40bTDr9z2RxKpcp2PkVhQiITzSQuujSBKHTxbD%2BXbQntk0nI9JRyPrmXVqsi0hwqKV0IBvSYU2e0wxcqeel3RfkB3nv3brmvlxQ8%2B4%2BjF9K1fj8AWlGJVKlTmjhTYQMOPJ8c59Tu1rrpmvUIHMuuveT5RO957PUgcF%2BlRUUZtlBAbWDcK0&X-Amz-Signature=a0ed835915e759e68d5e1db140a0afe30f7477e1ebd6568cfa7acb0a98395a73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

