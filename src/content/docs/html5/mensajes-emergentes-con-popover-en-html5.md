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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WAXPLZT%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T001439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1nzPr2KiZiJ4Qf9FIqCtI1OMOFrE%2FY0DmYHdSM%2FAYIQIhAMwOA2ms%2FShDLSZLkauCeuolj8tRBAfBfq2%2BkKkIS6ZeKv8DCGkQABoMNjM3NDIzMTgzODA1IgwcawI%2FSNVfZpE3BxYq3AOyrmvynFR95ZhLf%2BE3Hb9aTSwVf%2FGXhKc2ZCOSzWyhcs%2FMQaE7aQefeYLcO74%2F1ci9wmR2ZH0W2fm%2Bj5AG7N4zT%2B5Mll%2FgLAGZ3RVxeHGpRkXiLhQRJiRYJ%2BupHUBAUsi%2Bp3nKspNQRl9ZJPnqKrDPp%2FZXpKwKAWuJ1bdXKtJGoaL3eKUATRJJdNI8b5OtIgfklxg6hrLVgl0rxLyKHP%2FI3LGO2AXI9PD%2BVNIdN%2FRlPw%2FFv1nEfd2qcYdfAsqTdg%2B0fgOkWLbSJtJVLVJ%2BdWRZf2QV4v0PX%2F4RxWnDJWTYVR%2FKx1ainwLtVcTlKbg2vcdVt4UVDgOr9INxWbq24n5ervmQm991uaHE83WOFncfxw7AV%2Fpd1ZkAKUtSUOXXIIT5kVYJdSA3RVNu81QT7mBUKt%2BARTcMdgi0aLkkTl%2BqfGwMRlC6DRm%2FnJlpm%2BPHe1O3EDRt7hCZ5PfmGlPU0KRTCFu8ITqQIzjhhBrOcjrAct2I3NsvIu5ljKvUDu%2FXoqy65oAlolxmko8DjN%2F5YYpO7LGgrkdfvXZbq7TGvi%2BYiRVOQI%2FqH6qybSL0VLzKdJMvTRmDHbVPeOhJM6f435hunlCWiVycYryIrTLCuvcRBhOw20Vlo4%2FLmSv2PzDn6M3JBjqkAaZ1ZsfIEV5yy6VPHqBdd74ONJ08JAB5mixDs81EgDYJocfG75v0gqCSzQ8aYvgHFNpuo0iySoYcBtF59dHxlWQjxu5q9aYxd0HGQgP7204iw6ahNQJkQogJ5rS16Rhfzc%2BXLl7qEZDT%2FaFjmlL10TvgpZS%2Flm0W5MINIschLrHpbfQIrEAtx9spSVt1%2FKLbAo5fWz%2FhsngK4YT09Fky1AcZ1LC%2F&X-Amz-Signature=c08be459998451b089625f3199858c84ee4d7da2aa041d254bf67e04ce7ae54b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSLN7KIT%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T001436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKDVXJlS8KYJXPLjCRsrPx0PTBD3zrM%2BykRIvCxIQJqwIhAI74ErzV0LkIfAHTAo7%2BP7o27ymV69%2F2adgQYDX112UkKv8DCGkQABoMNjM3NDIzMTgzODA1Igw%2FUe2FMpbyRBHFA1kq3ANOvxTmSR6FgItZiaGJkdbOuxA7UKo8dfh1NGcoyVVPouvX%2BBPSAoFl6JJRFoO0byBV6mNY6qFBnZr8JlMIu9NPdXxMfxUdNy47O8vo9kX9pSpE0dBbLm9sSUfeSr%2Fkiho2sMPYHrwkSerMC86JAI05BcxG%2Fw60FYd8ZH8cpA4FTHranu3XEQc54FjjsJeQIBCiQ7Cs7GpsCsZZa0m3sftydFs4M%2F57FoZgrHevKP8fO%2F1e00w1OT9OrXXohmW8Xq3A2oVweie%2FZ87sZB1m%2F4eTmTorcl3FDc37H0MiHvvRlFln62Rqmpihj9B1jR%2FC3U43z%2Fo6RTNktwqkmCqmb3D8F6xzBsa8BwHXP3ZVYzFSP9BsJhzZprjtA3qcjmJDHtQqMnD24QUDHuAYPrCny7dqoZ%2BTydosJMEQBRM8NApnjxcicnWM9Vv%2B%2Fr80bP5Ngic%2BZleclH%2B51sRQ6HnYjrAeRm9oOhtopJ0s9xmfB9Ozl9PPoUmC%2BedGc2CLBX14uZljBTpP9vJtoGm7dpBolGMSJHVxaN%2B7mZNzsr1DT%2BILkvjQSkzWtXT1LjB438oojTZPoTKv6LvLd8BHf4Uu6CwrHIVaLd4QdCifj5CP2oJnhzzxqum3APc0zHknbzC%2F6M3JBjqkARPOpGtmSUeQnSXrYF2Fphi8659G6K5dIN3xnG9gn1R9Hrv37Dwzn0sTlbjKbBdw%2FcfMdpSLkLMQH9EV9lxpwdK1tpN80cfFne0JGE85obNMyz6GhEX4dZR7iaZ0Dq3bSUvJEl1rL8goVv5z659PWpVq2hDcSy49%2F7fQnpStZGLwdZP5UlFngAMVDzYutzxL6KET1pSvJ1CpXKMpJD4tt%2Beglop9&X-Amz-Signature=1856db9628f4caeba6390570612afce80bb960787017ff9940ee79395a4622c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

