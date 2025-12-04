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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRALIBEP%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T095848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQCKAXHW7FsxFwOTFMvEpg72eT%2FzD8elWhtGxzD5AzIepAIgW8eudXmtS1%2BIU%2B9K6wlGONaw27cfiZ5ZC5z3XiWZjscq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDFTCXSdnidqUKIWQgCrcA1TrWTZHTMnt3aV%2BhJBD7mD4qhBM7nFHd%2BVf640vT1jljQUMrX6j4h%2FtBnKyoQOvvIL%2B%2FWTsGTsUxW3gVr916MJuAoYm7256Jbd2JwsZWoNMy0KVuGt%2B%2Bf4YgrJS19b3n8FflYQE1vn3CyFvIQY9d2Zo3rCJJA00H4B0jQjFBHi6bTpWMp%2BegLQe6CZTW8DIUiqj%2BOXaaqrfGX9kw5a%2B55mU7Sk%2Fad%2B69Rj8LbcRsCNBPP87KB7B79YNgCMUCr4Y4C0UZJ0kF7UmgrcEBMw2bHk4Rl%2BtKfOp8R51%2F4rDpoZutfE%2FwnGEMrfEvF63Dn0j4aK0PqwOosQpY%2Ff8RDyzdUQ4jdmGo7kXMGpqzjjpOECRcXLHqxwWL19LCiCt5zQpA5rVhDb7dqrqtA%2BbFY8cQHjwoVfM5gaj7sEyIGRRPEPa4UAO40sIAQ8gxZRpx%2BjZvmneKK39siUaXKasrHIpCmISU%2FaTS418rVmzkaDFQzZ09towFZ7doqawCbs5xXC73O1hlyrJoJoR2PT5kbho76JBdHwNry6R0jg%2BxnkJSPkiZvNWohGHzNbzb%2Ba6IbH9dk8YxsJI5ZiZyYbIQTdwgj%2FAfh0vyisN9dnHKudAj3wbufs9FlhKTGflNCpRMMCrxckGOqUBSXRuZtHj8mko%2FeY2UdbcqwkmrgvNi54OKo5Wrq8J3%2BhQEVeUflqji8cjWRBMRkHHx3g1cw5hJGa8eBAoC8gzdMxDFRE5KFpCfVe1R4IYTHsAxxgd%2FevmQQjy7v%2BT1XS2b0pcZJgUd7jYcWoK1aOAvB73LbEd9iIsmFvIyk%2FUSnXxrFSt3wkOjsK2cohK4SPkvJ0rnb0fkiqNv9pQhu44609%2BhSkG&X-Amz-Signature=6f7fd140b9e89795382c1d410236a3bacb880d5e69d9843ed8558b75f8f714f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662D35BRQW%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T095847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQD%2FRGmrFco7Vrk5vBzjeI6GdrZPJcI4J2kNwbluYsstvQIhAP290OwUyE7gHmdEzUEO9tSViuhkHB2pgEKE%2FbeI7QbkKv8DCEMQABoMNjM3NDIzMTgzODA1IgwHBXL6aNtT4bJILaEq3AMalZtueoGylMokzeGQhO%2FPPQPmQooOnNN1EChFc%2F78kM5tAeeorZcEoltQUQ0yyyUdHZvzfxu4TRx9VjhkLJaIGMPZAjr961kuIN%2F2Q2w0ZwDo7cUVHa5PpYfOfsRDBjnkS9Gyt6%2BaYVgB0w8t25uTHPtsAvcep1N5CamqFGyR9knZMEci1VLn%2Fh3MZBuKVJdu0tReju7jL%2B1mcL0SQzyZfQbDrkpNCMr4ZvLfbfhbtWdRUEegrUGNR0rdtYjZ%2FikInTnw9Y7Er%2BhtvOFB19B%2F2nnpnk7dXVGUwfpnZgGyaSKzXBQNdsbR4Mj47KYbVesln4EKzEAWAhpo2l3sawaD2NBa0j6w5v1OBTdbQyg2VQhqCWNqaNjnoVGrucGC6qSCR4EGtd3EreK1MkXiaN8cc354E02j8ImdfxEF5KLH9ZcXl97fVbUtB%2FVEJ4KmF62mDHxj7YKhuVNYWop6X9S%2BeyobXBD471JCjyhiJvWi20lkLq5FioqvFDTA43miVVyulEuVNzeYQN%2Fsk%2F%2BOKyE1MdDNCmVQButSA%2BKqFpeCOleKuJDM76f%2BOMdGihnQlSKzWA6AOLmNxh85K9y7ryPh8Oeq9eP3TptoG9zH9s8P5vkrlD5zq5%2BEYXBnfTCkqsXJBjqkAfpuqFL8Tm9v%2F4CWRMN0rTWzcHU6TrMd0efrF9VfckrHqPRZjHCbuQx4g09cauJ6vy8cYFcaFaoGdew1ZVsgzRk2xqTOkT9iL6R1aIthTNKgD8XZA%2F5YJL%2Fftcjl1DDuWHKcnhxuUZaqwhR9XbJS4xqk9fxGq06dGUAIEIwj%2BPu1u45M12YLSVURrvGMuUFdajfd%2F15dxiwyXhsbpV%2BLb83OxNoe&X-Amz-Signature=52bf4cf13878be894fa38cf37dd0365b2dbbecaf56dabcc965822210f507e1ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

