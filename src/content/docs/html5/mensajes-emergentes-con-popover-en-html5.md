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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SS3CLMR5%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T232504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQCTZVPKPmHfOI%2BYZSRJ2nAGPST54IlNBfoB9GAHF1bn3gIgI7wi%2FXenYAtFjiNIUF6kPhknFY2DyncNMQDzD6pONnwq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDGyiJm6eNQf2ydY7XCrcA5ZkH4eoVmyA19qciu2vr8S1gNIWp0yvIL5hil4Hwdsn%2Fq3VGyAZ3xRH3ntQ%2FfVCav8xKjO6gXm0DB%2F60gWjLq7PzilWwdjFzvPvsy%2BEgDLkL1L%2BdEKUKTwZlQOy8k8SSasZwkWWjAijR66DeqOnM91wgwFtvE3%2FIwD9YPBP0agyZRsHh2LTOQuJaXRL69rOjfW%2Blb1iGmEkVMitqiUECy%2FUSjF19V6BszxJBPL6jTWyq0COHiq2ATxURfqJ7U08ZvjRSpJpg7Qe7aEB9xSBlsVM0NkfMWMle8c7s9%2FkMX%2FLvQsXyxclv4hag%2FWIpDx9CB9oIkcslimG8aqjohT0TkQFQDU7Swp2qWFcSv6Bv7cbDVgIl3orG8iwwr97CxC4nwfC7Pabmwmup4CtjRXhssqBVHon1hCF5wphHoetemxxZ%2Fa5ySkOOkOZ3LEJWAtYUnSiBX4fpjXrUlHY6%2BMIejVM2kCM%2BrJ%2F0NKqx5kXSpcvopsTX0IEfWFTvPYUBtvUKQv%2BHjwxm%2BIypL3Xpho4pMZKLNO9jQDtN5aThz4r22c6H55DiFS1xe81kd0McKwOiH%2FIpKbWbHr0jmAc3ByJmz8RVN51bxoSgqu%2Brt8NOaM55mwrsY8dJnKLjutNMNb4wskGOqUB0sPMhIaMQomXuyqDPtHpetY6CmDaJEGNCO7b6xR89NR40eS1B6XAc%2Fbf9maPYHX%2Bf24JEZ2zP%2BATxTwy%2FYN%2F9X72kf5MkXZA2XTWuPcvAkR2gAw%2FQ3AlgDGS8KwCw%2Bjj6K%2BA%2F0YQpVFYrkrXoM3lBm%2BmTW7IpmxojJO4vb5%2F%2BryTxK1J95Tzznh1iUTpZBXCFDrEbqTt6wvksZpfcL0cqYJMGijb&X-Amz-Signature=2998e9a084c7474fb09842d224f3d7f08d90414cd1a4baf67ad3f97896d01431&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXEY2OGI%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T232504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIBHRfqn%2BEaKiqu04aXh%2FGI9LxvWRjuGFzjGfNn6%2ByM%2BqAiEAoAqtX%2FVDaLDi7f0363dD4Y1F4iWrDOsZqoEEE1FGcGQq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDL%2BiKZRgIYqjs8xAoCrcA36bqVY8agM6Yl6xunRoksGT0dtNJfCZFLLT%2FJqwqSgMoieMVBIS8b5zAILgUyziIAKJqiwCXOk6MN4rNN3NiBEFHo4T0D05bNzOYyhv2ACgOj%2FHK3UimB8t9m4EdFSiRYp7RrOHTEn8NMh7d2RnVnDXr8FjYPSluTk%2BCQPbNzySJ0uoKyyg%2Fs9CsdG2AYtpdZmUN7r854Gj%2F6mKSOzjStki8BjxpDUtn9gYWQawgwHQ1rlqMSmsctcLizlEJbJvHXLeJKyTov790zZU0KHER4PnKXa54iTuQBOjlqIamSRZmYKxF747ZAz1Z%2Bgu5kGhockJ79dkCNU%2FBgPDvssG%2FZ9LxMAlCxzf5p3pAAJUJhP%2FlFuAGop94OvMSFSUxpA0rt7ha0WKizyF4%2FDLs9OYbDOjs9%2FR%2Bx6U4YcZ7Aq3%2Fp71PrrhVgksnTYzAIdp%2FLCJQ53pa54CmXUO3g9SQigQ1iSM9YbG0axMatYLy5xspD8q5T7c2Qbxa%2FDx%2FjLB27AouFZp50gFUiWA59fOrRX%2Bn7SYeyG5n2fBxidPxCz1MADs8wi3MizFt68aPf1pfivZnQiP8wj0kGCuiOaiYsquvtLMV4lsRzc6St4Qx5H06mWqQc0HRdP3Ju0hs14EMND3wskGOqUBQ9xiv0js82fAvRT1G0qmD3%2F%2F9cJ4GPqSFocpdBKqZBIn6VaPbg%2F2E9%2BEithwMRLpc9wyea7jQywyeO475R%2BsjKrzOhO1xikm7SVNzw5rpe%2BUSmFokLacvlO%2F39zZ4pg5aSgtWuktnxswi6s9zBTGl%2FsSZclYJT5DhkK%2Bbr7KtE%2F3nwN27XX6ZhswAwNWikUlnBD%2BcFrLaOOXF4CRFmbQA8gTSzmV&X-Amz-Signature=92719cb91e96b09391a9e1ae8eb2d7f6c883e105938689e3f511d7f069e6d3bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

