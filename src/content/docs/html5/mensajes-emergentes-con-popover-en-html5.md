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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWMCISSH%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T085419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA9sjw5z1iOQWQvAOaPVyL6wRiIEppd3AIpxy1k%2BwRQPAiEAycHAop48B%2BAVwUPlrv5DT38BeK4FD%2Bfph%2FL5v5suYe0qiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEqvjMBcWj%2B1VjqeFSrcA4YfrfaFJDnBKeFZghuqhI4Ba%2FJxsNgb0OlK2Uiqf6P%2FK5lM%2FJJnLc2DlEGGCL5mZ%2FzeT8RhKi%2FGEaHPYyJ2LzkXiYdWLBwNqAslr6trlAYoTAciPBLqsnyw%2FJWKqf5bYQdZiUTPoeUZQpViGPtcDFRFEalorF5rw7HW3sIbCEaTh5fopmLdAcBloWSFTCJfig9nEyT9ZCPp2gOCwIW%2B6za0dsWe%2Fu%2FXaWp1O8GlL574e8p2B0%2BXMGhUVLBkZGlJuBOvC3jAJbFzVQB8cJDuor3Dl9dWnbSJPSt1XYwaKiDmmMaDIIvaJy1E5kGCFbNUuYM%2F%2FcdoDzCagb5RBE6yCUVcvG4NYeKqDhTTDtcK6HRBYTnWsLMW3%2B%2B2%2BPIp0Etii9jm5RuqNGDqbhfKz5ZBJugh8h%2FXbcKlIQxq%2BCQmxpY%2B5xPtBq86LKQ7kiAszmQ0k%2BI%2Fc88Nl7M413SmXc6kbMsN3Y16xLYjez4IX5uzetnNP48vOCN2M%2BwJdL6YlvH7s0YVSCgvaQbe74St3Xp2IYk%2B0KAHVr5jo4bNXJQfIoL8%2FtCZzUyTlWvDaQIuGph9lOvy4o84D0XHfYrmXKxoS7DiVz8vflZ7CcxRvkceoL43UpRiiVo3bkfnc0U6MJHE38kGOqUBAh7xnSVHmc3q3YNdKPFwOX%2BJ%2FTejaAdowAxDezx99ftGEIfHI4%2BJUpLxMc1KuOfP8u2DbDVXOj9uAE8WAhDKStyCbeXtBrKzWtWTsPGVDiK3soZKVy%2BiOUeXvGoWX28z22c33LOgsERLX1kI7AG3FHlsfCCPkMQITZgfgGZdNV659YHmVyjwUQHtsegvkjsbjtjjacjSu7Ruqx4Z4QKnWwmNKf2l&X-Amz-Signature=57afc9a4e724b3cc466733e2276dba9e0bb9d06499fd1dd5478608f152c505c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNU34LPH%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T085418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVpaAdYReSHpT9hXXE9M4lYEV3QLP8VxN5926hNI3N3AIhAKO0wXk%2Ffk6mAPYdxTMjO5HArg0yWiLFXEVEsSGtkrkzKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxWP0wTmDEOsCfzzL0q3APhuR9VqEmqzByh6bYLaqshnlIWAO7dpgGnffPC1gkHpYHR5bAJSOYBaf8INEXSywch4S5rlGpb0WejAAQ0cuv59Q6iiUYMvznqDQEL3JPi6pHgyRR3HCossSy1Rf2TFwk5VNs0lnyZqdPft8mTq5x5nOqQ4RmigZLTqf3q9pdHlVzw3jJT4%2Buij20%2FhOo0ffTgVkw5%2Bqn3%2BhWnsO29yLmNz0nhvAU1Li9nVQ8B9DFu8AdKHgZVUEHBzMrbJQG2yi7roZiRtAanDUFmk8LzRp6QUKkwJEIAg3L9zpfDsStrrPH06qsoIlIt1%2B3HTNI1HqLjWqupa0RubNBm58LzP033V%2FUkMIZJpEENZCeWqtTSDQMDzK0Qufsl7081%2FSjEe%2FDfFt1qPL9p4fQw%2FJV4%2FlzitFTeBhXAZ5Ml4rFwvfIz0LRofMc8KkyQYyRfgavjs2KdK5PMzg3bZnSwi5pwxW3Zfe%2B7JKqXgwUryfnRNtobZDzL%2F6eFUp5d5ktHCgi2FeD1By6D3thz%2BCJeuXwvZ%2FL0n8%2FJdxqfr7td4eWZXof26je%2B49SVQuttzuyXfL1zn3lzyNlm4R00aLqzt7KHXqwkq94BLZJJPaOn9kt4VLWPl%2B4Z%2FXBIubqDlkEjijCFxN%2FJBjqkAbQ6cE9E7%2FAI%2Bh2VLM37TY%2FoMPjCrjbNdwD2poUCYLGXY0mNFZO4v%2FR0b9UcqktBpLBE%2BGIXkeusJHgSyRtVqvRaFPf85Ofl5UoUZDIbqA6i1VZmlpQvYwbKJ32DFR7m4OsDovM5yLAjVyNBAGrdUYxk5CY2ViIXucIREWcI%2BG1sI0li5%2Bbi4qgtBleuD13wQ6LKI7UPWbGAlYAzDJKM59FBQ2pd&X-Amz-Signature=86c4ed7940ecf3fc51cf59a948aa13031ec688e24028bef7b694839da32c039f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

