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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNAB4YZV%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T081437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFbQsQa%2FSsZ142jhkyM00wisXTgo4bD5SfLuK3jUaG5OAiACvAZd9GGMHZK%2BG2RDS0xzMdAVt1DrwxQKJaGYUt5I7SqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3UOWo3eoCsy8UeS8KtwDJslNqYkjdQUS1QFPMN9EdRwz6nyr0DHQ%2BtGQnpmdH4cn3Gz1uSJqebbntgctqBTWgPhDslaIg5vZ8turdeWrzGpQAPx0KX723bRHLPGu%2FlnmScMOL2c0jto3zAFZaLnzG1ynyOPbcn%2BA5fdDlKq1XyjbE8rJhU7%2BkDIMT%2B%2BLoMJKiOIIWpiJT5Tv2rpsI2%2FMQ%2Fv%2BhKF7aOJHUQ%2F%2BHA39TXKOE%2BWCf2jWFMexxdYHl15po9q8WxjZR%2BlgcGHaeWwo87QNlWBpiI%2FPv%2B4coVXsxVM%2B9fydTbVlfgHmF8uW8phu5dq%2FGWBVanH4F%2B8acBBuw3HlAIl5xbrxKuHp0NgTNfVJTSXpDemEYPu%2BfuX0vLk%2FLEdW4iDBFwDHLXf5Qld%2Ff4gO1KmesLyE01BhZcU%2BcX7ZI7xF%2BtMX8jlCohlIPMGhTZKigWKQwCdlUGxYI7LD%2BOfiVpR%2FaTLlroVEdabjFRvfiRRWYePJhbxqFvFUze3eI9uf34MGNm%2BAFUasG%2BE1R9owVFL1wEqh0ptYYDthLTiHlkeH0OQWiPHPnZpj7Li4k07uTwvj6wTAsW0YU6UdcIhcItO%2FDDUizVAdj7%2FBzURS26VipMBL89WsPrdQEu7X7kbSfq4sWmoobs4w5qTfyQY6pgFO2TOvOBPfDtSrtPX5%2B0TIoIZktY6l4N129TEupHvdqPzhjgPfA2oZb%2FQqkQLMS6NSjwOIgiHabz%2B2u5rXE9fQbepjTI8rFDap4%2Fwq%2BKroreX%2Fto0%2BWXoR88bgbbzEjqxtCl69ILv0E%2BDjViUErZMjZWCG%2B%2FvzKkag2jiSZKD6QfCc4eesHOR9fOJKO8KFo%2BoYt%2B%2FmaJAOmPyqgjMN7sN8Ek0CHRLQ&X-Amz-Signature=48d1b4582c6d7ea30816ccecb45a0597dba8e99fe58c9f16617f28c5d93e9b93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QFBONNS%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T081436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxpGT%2BoRY6QRP2LtFM7j3FH4pxvEvqn7n4%2BrLYoD%2FsPgIhAKH1aqF%2BTgOH8LbmkW1Sg4vW3zAbQX%2BjY3qGMUt3oy7WKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyuN7KNCnOedxm66dMq3AM%2BzV%2FkzJGdRZ9u1wsnThkHpIYnWejXoTKEHQMRF9CBBDG8hb%2FiGFEWdK6YIRFwbvfeUDKBNqeTskhfXiQquQh1BbhCsmhdx4X25cRqqmaA8vaqHo0lz6ZEsp%2BSI7fcuiKoa2S%2FqwY3l7UIARfxOLf3t2yc92rmV9QxOIBZ0j0sbfeuutdAsyriDx%2BRCBfedJenfvduKOSS75ZPCLRfeowL%2Fk%2BoUdKsQONszvziR92hPygjxQlkkDJs%2Fhlo%2BcsEjQKS5jFzfto4nI%2FiBbzgULxsXvVqeFk7Hzwi%2FTs%2FZA4lKViAfF7GV%2FV%2FocDAVqVtkSyyzFmV4wyQ1gOb6JrJLpRuRiUpVNCF189oU3HG3L%2BmraaA1t6Sn3QP3M5sUWoYnYylLDiTejmA0D4KkyjkhyUir9JNDqXcbNQyhw69uj0jT2hs4fRAvvkHouJt2rMvpG2DXqj2UhChEg47XQL6jmJg5S5%2FYV8MKTt%2B%2FzrxFbpwpWugs7YJ5BYMKZpIhUTsk5VtNDYAWa4zeFXb%2BBJcvfBFZfE%2BcLVZdK8Jjo5mAM732AVKtsRrQC6Os5Z23sIGRsAErKLQuB3bxCsos7yqsK5CZWddcD3loQwut0R53EwZb7KAOEEeiskTIomWAzDQpd%2FJBjqkAZxAj%2FqUZdodZUomnCOFEfwWQYhCGyqFyXgg%2F6xOd3Oq99G5Pc7e%2BlAGGNWblaE9L2FuzrnFwvXm1TToCCVkX13bie%2FpdRnY2xYaZgu5KK9Inpv5sXYDhpJq3T3WulpmZi6xeJqg9PahmLlKEaEFrZ45Hyu3XP0l3Pxn1ZGk1wAu5QKkUNXOk%2FnMSfcs5v4FoUIglsNw5THL0SuHWc4oZ10OQ8Ov&X-Amz-Signature=8642a2480b0daaa2274c93f0f9ee60a3cde2938433a13dcd68741a83e7b35b09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

