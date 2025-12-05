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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RHZPYKN%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T064557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF8jBzdfnf09e1vCF5%2BE70qr4VbkVmqRe2frlIIBtrS%2FAiEAgoaQYy6JGGP%2Bfe3lJNyEejJZCBkfhUi0BhS%2FrrPesYgq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDCRiJxA7Q6bQz%2Bj3kSrcA%2BO23RMUyOOqKrU4eJUnwmq3or%2B5kYnVgn96pN82V5JpolmPLzHPBGBtInXoMOFVz79xY0ITEveIiu0udRCUZWpqRt1hsKr8IkNS5xwaPKxQMNNWe2CaThvPXSjjkgdFRw5xrs2r38j2g7qcFylhFPw10Bw5WcFqrbr6pDFi1WfDVvU9y7es3DUZen6%2BNW7e6GONA4jq1H68zxK0YyBDwcDLoF7fL6UGLtkqxPwsYgCjsI3oGAtRC2saGR5GQoTOe8h7MWBaraibWStyBUuW%2BVtACR5QIvngox1sduKYj9yZk6Z96Ju%2B0Ab4WjdP2%2BGI1ZNxWc6mfaLkduwHL0OVupVEnmCpKzSZRwGUGVMyG58vBiS42%2BJnu2MhrR60kgHdP%2BnWElb%2FcTmN%2BKnjhZe67VN4rLWJXOCajpQItW5q7giCF6FM1NsS0k3AZKkHr9bxn4NRPFW%2FL6NJ0VINiHz%2BkcyEQcZemByj8s7%2B5huCZ8qvPpinNaCDd%2B4AheUydmxBj9I8KHMqPdG8xSY8yB37EOKb0hSGnfNH70QB5fnw9aIq2gq854TI%2FdOSRyBLtqoQPOYK8q%2FBvhTi2%2FfNXz%2F1WIrblUyIowpXZaWqefxbah5V2kjCZps3m9oYD4trMJWqyckGOqUBOi9BhlwHCLxtt5i7WPw7swlfhBT8Wub3%2BGW3jxiwmMpJMs2nJ1NG8aLuGcnE7fUaRJkCcLqY1fBOZfd%2BG50dRbOIIhZM6wUn7mx6c7ZX5GTrvFK1Mv6fPmtawvheFEcRBSpoYfy1ucE2x9dcMAfJErgDLyAB1iSMocnXMWFIPBNWjXnAumZfcPt9%2B%2BPueULhNgGHCPSefkmxaSDRc%2BNSSGoqhBXJ&X-Amz-Signature=cb0bcef775b041c1af171afff92a7355147bbc4a416e1695ec5c58113f917802&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBYRNQAO%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T064557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEtesqwMSK2eI%2BuGgAWCEqKWXeppmo4M5Xdmc0lAglDwIhAMs6RMBMR6gIMglIKhLtuEaOWsBF1jIB5Ri25twk1XqtKv8DCFUQABoMNjM3NDIzMTgzODA1IgxqRyoOlMSabkz6%2BQ4q3ANuGnQoYZIfLekvIABq5mZ6TU7TT%2FCmzcBbCIpqNjtjBmhNUb3ZUJHikephWmTizVJO8TF2JXB5tq1OJQAk%2BCuQ70A0Q%2F8qcgM2tnrTflblU8kDZlu92WlqtibNQ1VHMNqqUE4PjG%2BY6UbLu7ilv9pHxiyzuc8eT7jHbNEBC%2BcaUSmQCI%2BSU4uWp8KLQjGXnK9U5DLA6FgcSIiKhqdpEi0w1eaggeZmA4onlHfmtjQKeYfwPxqGlzB6UAnPJ7%2Bw5X9WvoojFAyv%2FP0yHNlCZ4KYBfNeloIlINDVuHeoYtU5rIq1yPgzgazM%2F2bMcFBAGCW2Ayzsu%2BLCQbUwjDW8OiVxrK1n%2Bgb8%2B2vcrdqwEnQw%2FrdUxjiG%2Fu1QEcGibUa%2BlasB7fJN9rBY%2FGZQGq9wDSKMEzN9OPXFz7UZde%2BUfa1DGkx0mX52YjB8zMt3luAo3o91JXwyB3Fsh0SGXrAWTbF1d7vLdaMjS5EYrYT0HbGfZhohZGgTusnghGQNVYQCM0CEDeTT1Wa5paj1pwF2bcwavM%2BI5V5oY236f3fFPmefvLJeJhynrvBWw56ZIRZ9jVZGHl%2F99hPJGzW3KAhr0GomFvArkGcFfrC6eaTb8nPW4oodSXCV4urxAQbvfjC7rMnJBjqkAcH2hPm0wBCLsDJtI6orm0q3UZ9kWx%2BvMrDSGLucYfzV3kpcCKUrfEgKoHs8%2FtGodyTyl4ip%2B0NHJQxCkqdM3d3G2ZGU4Z5uFZbk05bfvcEYSQjj8haP4DTTQ01AqnbYCWxIw1ra2bf8NF6YZN7ZZSj3qUSnEf%2BXvWHn0ATCcqQF42E26KfNUU5OjmQ%2FpF1QtnUbbfOrko4aQxEZZEnfahgwhLib&X-Amz-Signature=0899ec2af2aa7b42b24f7fc47091a1723b4041e7c262ab18e4bed5c9a4d1cfee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

