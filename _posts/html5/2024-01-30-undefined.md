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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYFITDWY%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T101251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCICgutMmc4JSinL2m%2FINOXBOJQWIhJlgX2bkPqu4esVx1AiEA7jvU6CXJmzy68dzJ2ZcigccHscpNWTiMpID%2FcihPassq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDIbC9%2BPf9tLI3dvUSyrcA1sPcOilqDbJLpL%2BdS%2Bdj%2BoNV4gMXKhxiA0dREyAECz2Qt8skNSW1D4poJW5v%2BNcZ7LgxZgdCAQKzgmvVufPEsJlj62j4AAJY%2FeJ653yyLLwkpa7RxG2hQGOSUdTgvYLDATavGChUFUlTmxX0pLGjW7zTtO1OJop%2BSB7kuhwj%2B6%2B%2BHgJh%2BPwkXXQl8kgdxEw8FFUH2QAFV9TGyJDQUsLRQEYh4o0Sipf42Ov7tcGUQ3htlPNFQzFcWZrsy52h7dinZrk6D7ZN2TZAASS3pUyogNI7V7i5UOWo%2B7nIePKq6dIgHCKTL6NSz%2BktqcDmX4f%2BMBpuphKmHvqSAJgaxiH7kBKxyU48FHhaKTpXBqEEWlaL00nlJPtwGH%2Bj1YzqQ1svUd97SDb%2BnoZyGcrHg3pko1LyOdU3zZY5ly9C8GvK%2BSd373tRA6JoqHpP0AZZWiHCqyJgnoQQivNKs6nhHu3X96G%2BID0Ur0LlwV%2FWj9IxYFuasLiAhscbvV9FT5GOdVDFHCGYdeO77uGAdyJbqfkafKmusZoqBVpUZ4x%2FUz1HzjUaY%2FNRt3hpWQ2r9rfYdu0knDFsKpEg6KhxNmZ1SIZk241cuOILVyEYBbuqgeyYTDjY68hsayWoC7x8rmbMPSSwMkGOqUBeelImOKCWRqoDWg%2F1O4nGnKiE2ePd2FlbOoQgBhxPg6tD1%2FTJyOLqp87qZ9jo%2BX4ThiLUQGR%2BRfREBfjGmnHliUsSUhg5nLeJphdpIuja8mAOny7I1LgtIyOQnLhY7CujE5pTSBhYhUaeHdX0%2FG%2FlVe1l2DJuccMf9HweDx2bbF%2BPvPlQlg6PYo%2FfMze%2F65S9AXQTNZx12VVScUp7wXUs%2FoEwOSy&X-Amz-Signature=b2e57ad68e24b3fd93e504b261848185b57fdf0d5a51f8fd85fd612083bb8d6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466356NODE6%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T101251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIAdhCo6Uv9xXIyMzqcJTbm3MzkE805jknCeQnjCGqdAOAiAPi56Pg49VsoWMc7m1APNyZ%2Bp90pq23HTXlpHEFxD%2Bdyr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIM91gsl08LUwxEabQ3KtwDYBfY6uZX9r0FrkcOtjpzS1zrTQ56LUwWxN8m6GanHuXZ8C5%2B4ugn7vYjecfXW3lwuLvLx4khCp6zVWXE51F0wW0A6%2BOLNMmgJbh3kE1TaRva%2FodtKP0bPd04l7sI8lV49sKSAVMfb%2FuFmsRvxxdimPrh9G6qzAufMkFs6gh62i%2FpxdhjRRj4tYMiZxEyOfl%2F1WrJZuURtNF4uSXjldE4FIp8VdTPCK2M8HlF8kQJAzPZl7%2FkynscZZnYYO9GDRpdIl%2BQX4tvPsnL9pLgQRXHu1zweXmb9Q1hSSOqsfVH2FB%2BpQuzqaQD%2BBVFcgonvBbfXwKQ6qUUzI%2F2mKp74JC%2FgNBtFZTyix1oKNCfDlU%2FAcCL4tw0rNWiVfvL6BZ%2BQEf6zB%2FYENJrU1mMBvjdSDBfjI5OyqXF8Nx7Dh9PiFtRnDd6tQUD0OBMVtVRNK8nsEqpdy6rOuf%2FNNWFLpQIKgn%2Fy03Bhyz%2BRaS2cwXyHLy8c%2BcZA1SzC8HtClJvC%2BfrQgjqZqjPYvwKAJZE9w6rhQhNnnvmjwajCHARZ6WosywdRhBLf1UZv8A%2BXlHWh4LlT%2BpBekdG4KuN%2FSajxyd9yh3duRvRqqRJAXI7F%2BQVCTX2PqaF%2FgPdoDxIPADXJQcwh5TAyQY6pgH%2B7Jixl7pwW2d59lSvnnexCwPBkxsmRg7nzJSOKLoOwUkQWO4A9ry%2BU%2BxabrCNeq4tfTh3cRPmxyPQgOPKNl8TIBzRUULysuzfxGKYMtSCoIOni1Lh8QBTpGmryhzl6DVXG5fEA8wPZgBBg%2FNGmWrj84ZxDZtAvsu2LlyYp%2BT9Fk1BAzjFCsQVnuOSuwLivdO63d3FTQTEl345%2Bjd79LtFnpl0jAKa&X-Amz-Signature=8bdaa2abf0d7f3555bfd3055605dd27b960549b3592b9bea9eefe838ca42719b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

