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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5IFISD5%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T160833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICz4qtdp%2BMACJWmLpOjZvwBZBQ2gMwClnxyr%2Fdl03%2FAbAiEA34ohGe5CsvFZuGSp24qXu9BKSQ0eCzic6swvnD%2FUFnsq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDHbx5ZU26bcTpclL7yrcA1VTc37KdcuOqqTIgZ61HpS1UYOJJS3On6D57w9HO0%2FJnC95JJnY5v6U3DQYVQCK2Dfr%2B3tlEoyl%2FrpFCVQaQlXIAYeugGnbkR9ZUxy6zgAIBMwvlQp%2BL8nElLVBYBkfZu31GKCNRJTtdamgA7Vas6TiXCIpu7tdoyhABTf4Sx4uWMFwoeAR7UtDyTKaUHSNgwczD3SEvXwNHCP%2F3CEZnZJ%2FmRb%2FfkxrfckNxrH1JBi92Pjf9CN15l%2FLL9%2B1FQ2imjCxUuQ7udM79arlxQMBY1L%2By6b46D8tL%2Fn0pfVrtE7hg6whJ8n8iEQGoE4cLCSCYGjT82OEn05bf5iwE0GldPETvi%2FonA29BpzbYA5qGVdYEScYWcqTqMpWVlMW2j%2By5KaPAZmDpxbIyx3dnRf17Yd8%2BGImr4e0Y3FXV9ioiSxmAAaV7OCeXGBamuU5qgexLWgstgNW2xUj%2FtXzxKOKQW345DhD3fih13b0nwoBM135XNrnPM1tS%2FRuDorsWYXa96cwNj7T8XZpFyS6s0RQi0Kcjws6Ilsso%2BshjSXDbY3ZWEqwP8oB%2Bp9pRh%2FKF4ZbZOu%2Bsab0JOzEpieWNSpxZhcQVSFZf%2FIEfLwxbQ4sO%2F2Z4npEvZXnV6ru3%2BA2MKrcxskGOqUBFVkM5Lh0QvprFCrsPB%2BVpvI9tYM12jcujHaDNz%2BG4OB2emirfEUxBSLr3fKTIqwQhhr9%2BCmLSnGgnJpZuRghkr5QvbQEx9kZiTA6kBjNxaKlARXahsrLdEaUsr0H6l9bZqxqsEsw1AWaufmQ8mN%2FM3AMh4baoS83Lb4ILLboOLLyqzWjYifB77IxW7xTGEEH301bJRZgL8EDyaH5yV3KT%2BJ8dam3&X-Amz-Signature=1e5e4a97f4177521ff9b3ee307486c0830db27aeb28c8c1811e0d4e1e5933b8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RVZBP2V%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T160833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCihHyAwQx%2Bawvv6%2F1JofKa2GDd0bYsnFKSpfuZiHPWwQIgX5P0QXd95kvcQVH%2FZoycsQP0xxFO%2BM8OXHuJoYgsoyMq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDAfSocVysuUETgjQZircA2mlo8fZDn4%2FrSE%2FytuQDlXu%2BH7baIfYNZv4u%2F%2FGtWtVikc%2B6dOPZK2MzQQY5PYoHpX8rZPJGUAxK6ZM0m4SJBKdnmHQVrOH7NkOG%2BUOGjAJpdroXW%2BqFGkXqBdQ3zZOH1jpVvir99LvyBSIKEW6LhKBLEdEUs4c%2BaB25fiiVRF8Q1blbZfOD23HwNbyeAEgmC4UtlDZVTAmhQWkvexv5uzrOuUt0A5ts3nMuH1yXG369ERiJtM7KL0IWwN3rJqCyqEuu3HfNa0L98ZTcTzy2j2ASqtP%2BPhEQsCQ2kPjA%2FehgBGC6%2F%2Fl%2BM12JgI3DfRESrasDJOcl%2Bw%2FksHiQQS7306BGLOp61e0uO%2FOPFDkeHMgikdPaLvm0fWqjLpXghh7X3ST9ScpBftv5yO6cT9HhQpHl1VUN9mmW0GOBh8ioBDUfXJ7C6zRQmzkPH99UcaXL7PQdcvXA%2FUhgLGngDf287eHBdRoGAMsYBwde946yfcbzXd4%2FvnKDqbiKQOLjj%2BDETpNxr1%2F1NT7YUYDxcAU0EFp3sm9U9XEr%2F4aoMs5zJFeS1p6RHDGZVkrWwX9KzFz8xoQdbeLD8GbT7lloFtgEskFNEyfrf5vPJ1HHtJFk6325KVHKJv%2Feb4DRK4iMOHbxskGOqUBBF7lrHkdhkGqBAAmXYvgfZhGA%2FuIUsupOyfTy%2FKX9OgTvW%2BGqWXWizV5WV9y6iJNVnSBEUZiWYOYWztl2mM32bLtcYxflh0cK83a4Afwy0G7SWHvj0euuwHI956wt3uMnoDeXh9vxDl0ygCpPLifmb2F068UNNCYjiS1MiG%2FgyLFJmJNGMVCZjgkZESX8esC5x4JCz8qH6%2FEN0JHWuUd%2F8Pk5K54&X-Amz-Signature=ef728fcd736db96add9af5c353defb4f6ad6fcf06161bfbc38e3049ff9b105f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

