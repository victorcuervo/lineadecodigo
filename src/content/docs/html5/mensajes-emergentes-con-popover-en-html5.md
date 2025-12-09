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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2IYNQV3%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T010431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH5HOkuwLkZFa3HPjGidacjfZ4dBc4cv%2BqUHnxQxIjbQAiEAo1C0awLKKyoh8s5S6t1drGjOSf2EF1oZiMIA0TBamIIqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIlgimcKkJdw1PVq3SrcA9wZ%2FH%2Ba5JqWf%2BTE4v2q1G%2BqtpOA8WKtyKUtwpPDqMne9aETeyGx7tw0BVEmoeM%2FeBiOAsw0q%2BaFxkD4%2FSIMpyCTJCNAXOKf3AOHK%2F1WRWK%2FPRGA7keLlGI9BqTqrEwN19c9Al3hC7VHaNcaKlRxp6dHCuXnB84UP5VpRR%2BEygV8OHCAHkj0XhqPVIJoOwI144syUmWJ5eoB2Dvq5i%2FO%2BsBs2A%2F%2BF%2B8VrQlYQjm2JWSXtnopf7SyD3hVcAO8xZAur0ehb6cg2vECH7KPYNNxiImynHP6xVEZKHE94yR67vLTV6uJ4Qt7z5Xqyb1dLBqd%2FRanL0ueYliZMgyDy3JFGH2mmb5Pi8y%2FM3oGwlKT8mcLN0od55Q4A%2BMKXTcizzSBfW75Fiq%2BJJMBX4qbyV3Ib7hoYz3c6AoV5S1UVxzSqnd8SisI0kygzxEDcNAbrRP%2FSEDWLBBdXdb8U%2Bqipa5jnMXPpeNsnZUKvTw0mxx2nK1G0liCYc6TjgWAiEjwCYO7bWaupm7fLhJj3UeG6FNiVK4G5icScxC%2BbNAupp8444tgcvBmcQ9q45g1ocreS66MERT3G0H%2BLHiiXMuwy%2FPi%2Bdbc6jVTbXHqZ48KWEROKC9T980vFYpgyzR%2BXRTfMJzq3ckGOqUB%2BFtYxcbE%2FVOWiRjf%2B8WypXjpu0NGqBPwlwTE0art2VHo%2Fm4lI4AoaJP1gGZXh0SQ9ZJ3K1%2BM%2FxKju31BDMuv%2FwawB1Bx%2FqFOjz%2BSvkGbfV2nfr%2Fzlu8m9RB%2FLjRaBMBofbq%2BJ1RO%2B7CJ33BGdpBF3AzMPgyYYdQHlLZ1stmZpvLbUQILRSrjd2q6eau1omLcvV4a%2Bn%2BZa7XAAIFSZ66L%2Fja8f6vI&X-Amz-Signature=dc5e126341840caaf0748587f5bb5f8ebd005c0ef39a207f13695836ccf7bde3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VL5IOXAW%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T010431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAwsKcAhS%2FcH5bU%2FjRf2NKewsXzxvDuT1ddgFzmvmkFuAiEA3U%2FfAoWWYGWVpAn70bGEbfJjuGHeSWrsK8piC2icUPgqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI9Q8ouVR2RovMO4EyrcA8TBvXD%2FcXmx5zgdbNb33se69tq3yWfqcxmhmNPkT3sLUcloX136R3hVpqZQ%2B5tW3Gu0yHmT%2F3Ku4AAhbj0wLVQm6fgcB12uGvWq18%2Bunhl6WS9u0ajni1zS4obTohS7%2BaRiro167Qqpkh0vCQTb8Eni7JOvwnxZVlnZLwKRTcbR2ISpIMIvV%2FRbWzHDPzdio0gbJphj9Kp4zZ1JB7mlSQbZgG5yr9sU%2B5VIIEiK3qBBoxHGCF%2BbyKzn%2Bo4jWlnA8C6qYDAViVkLe5dH4vhXtTW3NXUptPL97wW6dELwv1EjcMNDSIozxTwMhwAlL5%2BOYrdG7z1ZX0yfuN94iuVJr9yxteyEkO4LLypiWgXhygg7Io3LQyq9PVjw0mjxHqP1%2BQZS71V%2BlJ2TBf15oMCqX0fLrrxAzdVYS5MgwUWsnanw5UHaw5O5mcFfs5m7nol0dELuXMZb%2BtQC0XE6fyYNLR7K9drt1fYv75kTuUjqhS%2Bf8PZmqcm9CGiNDkAOIlSP6xPFhosou6IC4Vj8ELAvyLv7Lo%2F%2BvlM5g2ShZ3rb8RfMO17O3qRlf5%2Bxku7tIwc05LgA%2FuXRt3Io9ixyPGpz6MXabUulAFL5myUnHx4Q5MK7Gxis%2FBdKLZ12Pi%2F3MMbp3ckGOqUBwT0TEPB4MIeg9PCkzz2zu0c%2FeYoy9yytCo2pu1labo2CmGOlvlQ8kw2HajTtMpknWAVk8OR9yZs%2BWN2Kf4onpdWtkJRmsHUPG6tGHUYiJsRCIdi5J461wkIGhkhd0iiOQpW8XnH8gDuox031c4tKIWwl9YRAbqEhockswJ5c5hlTfv19c0%2B%2F3Tr4NnbAR69WpPSzTgI1cxe4MqskcOVTmwP5ebFD&X-Amz-Signature=8e39418aaa2fde91a14b9107979ccaed59d91d9e3036e8d98a2d113cba61515f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

