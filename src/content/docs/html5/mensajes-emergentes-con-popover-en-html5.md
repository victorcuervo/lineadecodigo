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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TFZXD6I%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T004711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGdH%2F6N%2FpmxtmGAUl9rIgPzUkz7tT12acKFTZM6qwe%2F9AiB7gSlTgIhwKDatznfCeP5z9RnDxZHcGVJ3SbhVu5xKJSqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpwzOCdWto4f50sr8KtwDuHW72fNrli0wyf%2FIgabC7AbZ1HmceeEbf5hKN9hK6XT7p7QjAR3k0AX0xkby7Jzyou4qhnyts2P5sxIVpY39oczNIhiKl3h5PAzW5RJ4vBIubr4zwK6l7lxiH8Ku1IIvoXDGF5Wwkzw57YuLmYm674CLKeY9CZYWIpl8twB2%2B9YPytA49WEzd63ZItvRkKPyhxpre0kR4voUoYEKHjoiS2mmPDTO6sPI%2FmKHn2KI%2Fk%2BMG99mCymbGB2KeiBDCArPF5bdpIUi1CrysesHYdrI%2Fr8R6PA%2B7WF9aMXuNU8pz%2FbROG69UM3%2BKfO8z8LPKJAlhxH%2BBxM50QkVh82j8fD%2Fl1%2F5NS5si2JIiJmrnDMjDjGgo02pwLxJN5BvOQgjv2oVCKfWgyx87SA49Geq03y7%2FFJ17tSP7%2FkNtb%2FaNZUjOOw4MQYfOqbpbSmCxYxJ8QprlZh%2BI1qWQ5z9gM3I%2Bef7w9YvTtjgBNwzn0%2B98XYIZLR1FgNMJHFq1lhKyX0R0dDe3T0Vb9HNWzMNkkcWw7xTQ0sje1wPGTTI7g7L3s7OKhgktQNud7Jnnre6K%2Bg5pr8%2FKhW3Nf%2Bzn1xdLHdttBb5VDi8If4Ba2rWNJrextQo3z3HcyoUM0G7nFwUMl8w5MLdyQY6pgHPIrZvlJ82ciojo0g2qxHNXzYzLy0cCOyoQ%2FH3BlUx3UC%2BIbqYNOw%2B2sjPFlpO4Ri8WP7XAIbtS10fYTUPtdYwtx53lQfkNmxhwF1h%2FcgXKkmrb4EC0Nnq2aZy2mTU3pWDi3BKAKbmIjn%2FolI%2FbBD5BVVXlGLFJKXMbc5nJJILbCvA1zUhMHYzjDo2ukEBAUf%2BGRJtb3NnKdz91%2Btdyj0xpNH33ai4&X-Amz-Signature=f7829b5e7746c3c28d4141d61659eb30ee9caa5d32fcf1bbe5f1514b05bc6932&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLXHPGSY%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T004711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWAPSiJ23N5mvsohvL6dXjU%2Fz5OcblWPonHMb885hJfwIhAI%2FFuF6%2BbHe%2Bsy84fRV1U6RTpQMxmySTLfIvfFfT7Nm3KogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyLMntJpLKMoPiTsg8q3AMLSnE1LUn8xSLmqhS2JfOUf0RZAdkD%2FuihXSkYhzUtIZauhtYJEhYTXAdUK78%2BxK2MuWfVSPxJITYa9j0724FyczDk4fWJvaIt7fCnhg414mCuS%2FszyGa5NXkKh5X6NQmkqu5lZ2oESsNFJ9Doy3jW30HDCQWdn7PHpBz5YYEqw1Z0uqxRfTaD%2BNK%2FeB0W137e9g2aaSy29B0ZtQ3lAOmtvp%2BNJ6HwdaSmrC6uoNKxwjXEDmDzduF6gBU2Sdk3fT0u9iLPBpmD4TLgrD02lU61O83TUdvx4n3Zey7e6iPsZbOUZO4dwJA4T4JAa0%2BFSYpWek1yLeE7aG3X7EzpividtGUEJvTOr%2FKX7Wkuc419RtWidCw%2Bq%2Fsb0z1SkxMiahKcgFPjpTtgFZljIwgdchqQyAFgR51Rasdsy44D31BKgF%2FR2MbKVXOOdBI2OzX%2FhadokFYYidnacjpXyTYOInyTsfLcwVK2Ul1lwsi39Ixm0qDqZu5zZaIiZOR0GMhIRmK6tQAPy%2Fn19iPShoOoQDwWUwSQ6Qgq%2BwxnfNt%2BGh21K4wP8%2FyxD4YS84%2BmtwIbm%2BYeYu6C1UuibblhSqIBhIVVhcG46qkHK8NbeRRMo%2BqNgxYJZVF9NyktXq8JazCjwt3JBjqkAZY%2FakQeRCCO6UEintMf9qRWjPF2FjUPqDH7GVv5yxYNNagUM5aIbjEoHb9U60h1d1jI%2B3LHJk2gclmpaPVloFbJ4WDLqp3EIk7%2FaFz0EO4ketcbDMgmnMOE6EhEFrJmn9hdlBDTolCyaPj%2FetXUR4X7YCUIIHJR8YRTgsk1CAbbLneByDzJc0Jgl2jgTavv8cEKeVj1qi1GusHNtD3u%2BcVlnX%2FW&X-Amz-Signature=5e1b4ce1e60092e2d8313e3860030dcab97c20a0f36ede9e20e2bd98fdf7c4da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

