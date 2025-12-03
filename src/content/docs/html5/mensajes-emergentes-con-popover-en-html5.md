---
title: Mensajes emergentes con popover en HTML5
description: "Uso del atributo popover para poder generar mensajes emergentes con popover en HTML5 en los que se pueda incluir cualquier contenido."
lastupdates: 2024-01-30
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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RF7O7POC%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T202425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQDAc%2FbFviZQ3eBYiLOfCG5aLACqIMW6Mp9mirMCAQY2lwIgDAKzFiH0QuYSB3JhW0B1ooPT9WqOoDjAEOHafEFWzRsq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDNMQRohCjaUXF6nDaCrcAyIsHJLMvoNWR9OpZMkW55S4kNh1n0QKQf6%2FfOi4jEuD24MMLIN8fxLaIIwSmOkDKIdybFS1EaZpzVNG8wnIiXxLjHCkQ492A5UReYFpoQH9MCNaI%2BRnlekyatGV1cRxM6F2dQkBGmgN%2B6OfqLDzhMCqw5Ls%2FFwDoz6WrZSyWeSnJL%2F%2FKGXhLlqhTTV7IUU50kM5H9XUUlyGkyXHRuB7J3euwmxmsohRTgew1oBLGriaODnWiIa1ZECiulELXCcLUDoBdhz7A4GuhoLLfAkkN0BAb58ysKdH%2F3jQMxmHVcMPZE3iPWbMlLqGOs6G7Mv9sOXV0plOeLLDrzFmchQwhliHLm5HovzNx9D1hvis5PbabYL%2BtU0oVpd4XtaIu7yXqJKqZpjRW4VWiALSANjLXyGfBjjFnBPYPw%2FAyveZ8O9GMCYgsVlsjtnGAgro0QE8QhaTaXhTRI%2FBOj7iCVYVusV6F0W%2FpUxk0oKrIk4FgAb96dI%2FpaoRe0lVjR9fujsbPkUeaoBXf4oQ8k%2BAEpFNuKpaMYBYdDp0oDYZan9DizUnJ2%2FNIsR9Lh67TGPWWtMZ8fQN65qxXIOYHOcEXm8kCUtC5xFg%2FmgXnpehOd1y3lbbD7IzaL9NTRkY8UviMJiSwskGOqUBUslmmxXg0O2EV0cgLRpUckEhXmxw%2FL%2B1KlSbkXVVlISG1pYr7X3cwqL0%2BnZfGWeIaNKF1St%2B6Qh0eKhya%2BRL%2FJ3ATZlUsPLLpQmQ4PTVJISvW5VB23JUG1tb1j0u8QvAOcs5GjQJIBvvDv0ezqyMLYxrThHVYTG8rdXWCjz0OTUoqi3vHQJYxqZd3mvxi0lEK%2FbNagYnHthTVZoFn7ZZYTlv3puh&X-Amz-Signature=d52a2f64b82f5df37d63ee48fc7f58efca0d5aa58c535342909b0e4a9460d66d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAR3AKZL%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T202425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIGXqyd1uJEUWvuos9dlS7ScWxZO6HkKLsOwM9mWGaauNAiEA%2BvyxaQG95Mje1tW1ZLqihaAXr9aqp8D9yteROTcdp2Eq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDNZe4wnmp%2F2iWBmTgCrcAzglbNk1%2BqInm516uOuEO6hzTKy76014MalIFCIPf%2B9SxgbeQFrsou%2FIlXGOD7Aur1lcJGVdMVE7a1DUKUyiVstOXP1YQcdk0re%2BCiQ%2FDAvmptgwhyBHZjdwrbfdBtcjUpI%2FDfC2ga6%2FVlv8eIFskRWeqOjPClu5PSK8SoRXxsRoQ7Ade1V60jBRIQZn8dRZaU%2B3QhqJ2eYNaaI%2BUmQsY3oL7433jDNpTwe46K84L5umvjoFn7D2G3%2FFc4d9f3fR4Z%2F8%2BauW3tvnYhRC8jLK4VJCaGLOfQlzHl6%2BmVZZlMh%2BtrE%2BvvDiT3uwho0vafuu3t27WO7zM9qVFUsfKxYnQAIguZRJZhH6i07e3L5j%2BHQp%2F%2B30udt%2FA4I35CusRCtL59YY563TvUj61Pns4Up8%2FeUmIm0XsLLKWW0F6ywTxIcuHl%2F6Q8z8ryNY0i4mWaeStVHX1Cgw5MKunIvFymON5Hry%2FeQgwLkXeLSuihVpey600GD9Lev%2BL%2FlO8nGP1NEG2yjAZHmN4jf%2FXKLCUltgvnBJc3PDn%2F72SHW4sTwihEGjcYYQa3oNlnw83ZQwu0Bc5AsIVDMvql1g5WespPKfcPFyZWYfr6x9%2BK7S1yaL4NJm6gbKA%2FQq3YLb4zMIMOqRwskGOqUBtIQJuhch9SkoFLyQuPXFgnjGfB%2Be68u2m30dHs2IVPRqEf4RAwlGlVpoEiM1HmQIMBHsUN4IIvgAzJmIGsCPShdqIp4lKPcdEZMECVQvyIpNWA6vXldz5GzMRL8sCxcx9vq4R%2FRD3ooJ7nv%2FX3Dp7jQEHWhbPyuEEP2FXkwkS%2F%2Be6opG1dQ9UswgzSoD0LY3in%2BWFoV2t7bg9uK9sTJOi%2BJ1szZ3&X-Amz-Signature=fec80051856c5f90016a33f3df19872107fabe1fbc3c5e2a4882a84726876b21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

