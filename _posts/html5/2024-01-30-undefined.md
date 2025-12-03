---
layout: post
title: Mensajes emergentes con popover en HTML5
excerpt: "Uso del atributo popover para poder generar mensajes emergentes con popover en HTML5 en los que se pueda incluir cualquier contenido."
categories: HTML5
tags: [html5 popover]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQMKMDU5%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T141307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQDhNn1l2MfBnWjBf3OMWBzBZCig0tyrGZ1poO%2FodusZ8QIgZIMar1RnpzUdZY9Vyy2G7C%2F%2Bbf7ce%2FLMjyc2jMbZuF8q%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDK1%2BTMjMxxH4BrYiRircA518qIcjs2MQhK0cWf3LYwAWsnA81HqK8cp7XTMabqBXjsBjB3lGS6Xux6VF2PsueeVxTAj2R00Ys82pPGQlUq0ZHzsSjsk1CBgK97iG5ylZKbKKV4JfTjb7C4BZfYllRjGPcCcnZqEJxT1Zt8fNrc5dZ7v7cDzCW%2BMql8h5J4IMKE2fX5Al%2B0cp5Au454d1jhjmORlMb0uG9Vfbad1Oa7LT7MbZZicB5ZKhtNw7VQwzGKMb1paVgNDqPjzPGsT4D%2FqCDaIjqEHhPc2qZ1JOlg9mzc7T8OTp5GDy4w5dXozgun%2BKUltYXrDdwpB7JTJ7ndyfl9Qq%2B%2BRL2dMpF4MeHT2LpASaju5NaN8P6yEaXX%2FRU9TG4SQCEA6%2FleQbP19skdRJSaWuYjR1wSLJOZWhpd4s%2BFmsYShTGsc%2BQ%2BrXZJyLvgzQgM0laX59arcILgvPeXG7v11si%2Fb%2FStJ3CIWxRbJmn7TRRZ4lNl9dGxuZEYYsDi6k0t0IuVyoNYmfrRCNhPVvQuLBM%2BHcnTAT%2FPaRNArjgXrWBbStuvhKLbYC2YKkpmvsy6YTrPhgf0mKUn3uiwfBZW4zO2SbGK1XIfKuxfPSDs9Iw4xcTKGZsEzLsbXsEZ51Ju4HyJrBlSSkMJSKwckGOqUB8i6tuwlvom9vtKhR0M7LVFqbELYUNLsiyC7RTdpsulwmG23b1gj6iyrzP5x2jO2lr4x5Da%2FRJL2D0W%2BkjSlNBf36Uaax61izn2XhRakjvblXHPsgiF4pAOXdGVqwOphIKBa9uyeMaihT81TQfCdVMyNDEBpyO9Ug53Ex%2BWhzbU%2FubBCzihZCFIftZ3uyzxJB5cdrxPmuczruNPUCp7O0x2LP909l&X-Amz-Signature=56a6c787ace40b2d48ba1aeb00a96754f9f3303ee69c4a06ff416564c1bd5362&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVZBAKNN%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T141307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQDTDqNrYN0pWrKGlw1Qmq%2F3tr%2FFxYbxsQaoqtpQnpN79AIhALjBsWDMVPtT8JQIa8z%2FaBkcg0GGiIeJq%2BDQ8g4P2NkuKv8DCC8QABoMNjM3NDIzMTgzODA1Igx0F3GXrIT0ioc3OQYq3AO9B99y2uGLtWlhH9rzH4Q3DoXDkv8e79TgcE0hh2V%2FqaaF%2Fg4LEgmAY3Gb5W1v0S8bpEBu4gOu%2BXCRQbkQKWEuWK4W6ACnPI4nKcJuU7JD5O%2FB9eu0sgI4Jyo8Jj04Ik5r35LiwYL5W1BCQyMKBhJHEp3g3IXeG6fG6LAi6tEWZhs5SHuo5uozT5mvhQGxnXa%2Bu4PgYudtVwf%2BeLWc%2BS%2F5Vx2tMhce2nQ5v7m4ItZwIxI8d3VHwGgKWMi%2FZWOD8jJc%2BJiZCHA6TH6vdmicrG8ovc%2FjrrhPBn%2BEVnoTj6vlwpzTGRaXWv%2FMbwmr5JFXZxyr0tYWv8TQ0EXLcHMnhBSH9pF1Qj9WKKtDoc3bgU6gk0pZq2iwFTvcPS3dksoK0ZSvGmQA%2B8fqBaaFv3ph4W1hzFjBmi714DxOMHbjkvIGNJmtzp7tbZFcbA9lWGqPzqJKqoSzmMV2HoZFBS3zsQG88umMc6SyfU0VeWF8IKBnI3NH70FzbIAuvwCdrxEom2DHGg7FNFu94%2F6jsWlS5EKC7JOqiRZJm6MbXSL9SLTGzSI1pLTA25hMoZfa87K2LnpmN3z6oD4I0t%2FxuKWpitwcAj1FRVaQwtSz4uV6MJm55LDBBERFwVqph%2BbzvzCaiMHJBjqkAQpJON%2F8h2lz0ztoyEUz6UcM7YLZzxryYgaixk5tX3U%2BOHKE%2FAIvYZWb6yKsw9x1feDOVBeJI4eoaDQi2%2Fa%2FDJHrcDip3VxaqUhytEjD5ZdqPpnQgXKLLDx8gYt5gfJInFXBK%2F6nWJcTrTY6Z7G31KpeCyVGyeLriUtQKA2R50W2tjllUjMPFLawDrsZgOPcc3m%2FxborIsQqg3EJ9LUjstxJ7jqN&X-Amz-Signature=7b1271b0ebc73414cd86be2820e55169d1bae934d74b341d462881fd14249b78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

