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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZG5C4555%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T083031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIFH7FipzyiVSUOKkR3ur1yRSQmvNBgpkRpu3F1eVSXlRAiEA%2B67Jo4q6Sen1iHXu5GNrSY2K9KKqCf%2BkSD%2Bv9UvM1xcq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDB%2FznV1wUKXSN9c22SrcA2uIaeJPh8tQITpX6J0YO10ipYg%2BmjzX6SptymON9bPNoqHhBRFnOpu5UPyyaA2r1%2F9gQW2syIt%2FnWdUoaW9NlV3sF0QnLk6oEhofnUbxwsbGtFzheDCDPx1XBvwl3ql1XJPkBMngdiwOLwaIZrs%2BfsELjgoDKwoV9bOauWbOFb%2BsT4Tcj3RDewc3TPeAbrDs62hnsgSjB07EOU8119AR4iEZxnYv%2F8%2BXtzeLqTUg03p%2BrJJ1JFCRN8D5ckNcyOJV%2BRRsGkTy4O%2Fl9O%2B%2BJN5liPT1EKhd8eGa7uvz1zU3pAFisD7jHvfkj102oWLcZHr0QfX1PPXZZuB9c7bJPlZFUUkAj5PT3HH6gUsY3RBzjLpfqe177pVCdO9dDN93WrZzzoz%2B7KDqOdB7rbj97nR1Du9FBdVqZFz%2BnjGExcS1OPYLMFMjXa%2BB1cQb9v%2BrPlGu%2BE54zpYPSPFzOA7jbGLTRPx%2FG1xVr8L25rlX9HiN74aH3YnNWGOt6yhUK0AHnGQ3dqlFxIl8S1hEo91U%2F3rUQiNM4wDQY5PRqFBdOSPBUxF8U1Q3OzpQ%2BwEXh98ff1moz2oK8kyftmGdXld88EoRpDXAR0kSsE7qXX7WowwvbMpIs7qvt%2FgwcOUe2wlMI2GxckGOqUB2sc8F2%2BsO6Du%2BQ3AoeuvMCmCCJaM2jbsfRTE7RxuHUTYBHnsNKhEuLa16%2BiqSJJVb8VPqiPnijSCwBk4cHaSsRL1USKCU%2FbqoYg1%2B2Cl%2BBYF2JIpctQw1U08EGK6RGJjT1uuIC1HKK0EiK9TRa5H8hvRN64rDGWkukmkP1raKv1C5y%2Fuo4GlDK6JfsDY1l1j8s0R%2FW9wp6QHI25UGOW0aBaOg%2Bf8&X-Amz-Signature=8ddbf994c9397883d591c6f76e5281a062293d8d55fa56a41fea512358e2d70c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XED4U5SK%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T083030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQDg4urRFcISMBgbJI14tu0iInyjEsR2LexkBvNX7Pi5PgIhAJqfHKJg%2FzZORCRxadDOkAEVfqoJX%2BwPI0lYCXgP%2BvnGKv8DCEEQABoMNjM3NDIzMTgzODA1Igw2gz4I%2F4xSIvGBANMq3ANaam0CiFmS2NEKxnCb9yzp5vliG5Da%2B%2BydP2U1qMw9rcQf92qG3Lcx4uUc2Wswx5MxHs1C1BxBuXJT0LE4yutdo%2FSxkw7L6yIIS9TB0TnWnHYJVCF0EtlPMpHp9zh1zK%2F4L43r0CCBb3JQ8FoKvW7B2957QQaByWiICkrcpwKBw5LVNYKaxHlPy3iS%2BhWHl10tL3f4Osap6rOlXkJa2Bq37dBSsJCfa96akAxTMp%2BupIjrReOzJfTG84f8iPGmocCfy9cGCMWHbQWt000%2BRsDdjCzi4WMLAx27fBnJMfNqPawZ6369RVTwtaJgpKQWoKg9vrs68qGmeAZOWt52bN7XWYM7BG1xkBOG9ff7sZ4H%2F4n8bmX%2B3teekzD%2F5h0YMBsPu%2BXo%2FmA9wwsigj8MV%2FTek%2ByK9sNjicCXtm3FiMoZNEG1MFLjROzBNY%2B1AIo0pbrSC6rv8nNRzJv1AdNla6ebC7mIBYfORjzuFfaa6iBDkFIXDOS4w4kwLOaA0EMCGg3A0f8vy0btF1X7mIhlK8%2FSzxlpEZPRoYG5ypP40Au4TQcnKXrfv8cOAwMLMyCbeX%2FYWml0tIYZieWo4pWY5vn6EMCsyH%2B3XjTKuED6uJ7144onGZMMkxSxA4CoIzD%2BhcXJBjqkAUxzZVdKZ78ZBuhteIUiuZMEvMnQjFPuCs492QKEqhCjSBHKm3%2FTd7JmN4yGayk%2BKB5RDQuVZJkNP%2BrBgV1OAX9ZwSuYmUdNWtZxSahyyZ7k35nIsj9xbJLNOTdXD8PfUVLI8kmIDVSCBDOVTZlxpMX1GwSDVst6nXAxQsAu5QJzhALNzEI0c5SBR5XMQKSk%2BpCJT2b0hegGkkonEadibdIDSm17&X-Amz-Signature=9761128ec5c61f22a27f0ab0b3b1108094dc37288d621d66d5f6e6155c1fa5a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

