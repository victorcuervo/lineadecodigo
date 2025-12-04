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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T36QQNY3%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T233252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0pSdyHJuEyw0Mh6SGEdFwDw7Ta1DEREcSJcco6AjGDAIgRGnZJ%2BcyTxqnhkgYkgnsHQpWUcN8sy0idTUC46c4a1Mq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDEzfcRdzTNGfU8RVrircAw8WPHP%2BZkVz%2FPhIRqHYZXxrymcGnbRGWcX4axSLTgJzSbWQpGx%2B9OE6%2FCx1cZkxzZuiolCdAGghh%2B73bPBf1%2Fx%2FzrL70qkP%2Bm3WiKYtJJKqY6b0grJQo1iAWk%2FxxIyc9TvlWrkGPKPaz5bXuLyqnVrLUsjmRmOAQcGDCdNkBIW0Gg%2Bj%2B%2FR2pkvzS%2Fd1xzXKNwe4q7y%2BWuMfwuf47%2FuOWv8ssFW%2FBeC24C2yMVVbIFaY4x3QJgw1XZXedrNLJ7UBP1Rqh13x0v2oABZ4WiASdP%2FvVOjMH0PAYnVgSbTDvK03H0gXpyBNN%2BfFnM2oU8fJgtTyLUl13AC7wBGslM3dqLnbsJXxTZTH4Zzvwk3z6fqDAywhB6KIVjPmoBo7%2BwWbd9lXM7UCKSOUscyRmRWwHTmbtQgv5cTeJBC31FBnaozzqQvsWd%2FE2Snppl6Fk8G2XAQLMp70RJt9N3%2FovtTo4J6fycgL%2Bx7Qsek8eSd%2BmTOrc5t2WnuXJw4hwDCLkYFBpTh4RxV5lixoFVa5yC1IP6AziCzUZv%2BE2EhWlhUp1aSMwgx%2FKI%2BQrjxuuMsDolym%2Bj31W8OW0ZdXQIKenmF1Yhf9KbDRSSQcwhtlqPRB4HmuTcdtJDhx8TJZ6QWrMMOMyMkGOqUB1XLr%2F1IBJlqtsmrgwQtvaeXTbsGb3IcyQ6cAXFhWcL%2BW9DWwra2O7NZqlwJNAkVuG5ciU7AQQql%2Fgjfq2TU7jWBZVsNVkd8hSmmR0Eh7VlDpzte8lPio%2Bdla09p%2BhNyAHwJGCRoMwc54jkgh9tJIwrkXQ8scCZQ2ATUgPe1ICFJ2zoi4CbBIJCl9e6RkgAXjxcjEbonrN4Bq2pkGyB%2FPVXZ5AzPd&X-Amz-Signature=132fdf011a2f38e4f20c7bf65a8866aa1c21f6f6e2b2da401ff97698aec72e81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZ6BJ7LR%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T233252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICDNC6QI1dvMketbUn81Vr%2Foba4uaBmzZUC4UtKMO1MlAiA8Xr5RzxahqITa9ZxdYXHdOnKUL72wFPLbEE%2Bt5rjF8Cr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIM4eRKXuZ2EEDraxdhKtwDBtbyVMugTicnoXd3omiwrd8dHf6ic8U%2Far59%2BUZ9DcmUcSm1bC9ZE%2BEgjtMJkQXIg4I15mU5us2clFI6jEz8idcNTqaVo4Mp6RvzcVsWLNUCkgxOuW6muKYT%2F2Azob4FcpsQoqQflewV9Z8pDHlxrMhDv7cN5C3wNuJNVC7asKBzYl2FS3YvUVq3AKpF3Jwt2s0eEr%2Bpa2b%2BiOaNURgWUNB7KNafEQskB957y4MLPZLqgQtnK9LG5zOEmhl5Lr8hB2588w8OmqdbPP6RxPKH1afH92BPkvZdaLD9vn2BdJ1ZwYBNq5g%2BTZrjkqrxxlXmIvDMtJUSxEBU%2BHVKNqJUEjplz617wWjTvjfIUf17OjXtK52H0%2BllX5sFZE0i06rdUjVmYHQF72krhvJUTgMDRp6XKoD9fKoQnK6Z9gMjPgrcxMTCFMogc4ygPsNppdPwm3zGgLnDCJMw5MQIPpmAnIEBp%2FfIknMag0rbyEX%2BEPOiUI%2F8qvlUruB4FaW4qBxmgJErZ9091IEeRQQ6vrtHTgM7pbhGOb5buoIpbQ%2B5DjNZGN86TkWuwq7hmkl5yHU%2Fmw6lZVpWGoXOpyAgM01vae5tgjDlczdLPAbGgkSGBqtvMtwgV7GY8dqXt0EwqozIyQY6pgE4T65AD3krsyKf7EqIJ0LClsFKD9%2BEK6QNQuPWwOTh5cFr83Ndx66cMxk0ibszQ38ltRSMvY0mMvetOjAUZyY0g3sq4H8lL%2Fi1JRCMd7mTyy8olElK9x%2BHqWkUNRFaTWmhdvOj4Ct9o59dybCWNRVySHymsb%2BOSsPTu1uPNnbgCnBPA21DBc%2BwvABMII5RRzL1O5OpgScKfhcnJ3f8B7IRRjGwwAS3&X-Amz-Signature=9ab471f5cdf04781ca0d4e2fd8e367ca29cb52e64d601ea5189f20451d551754&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

