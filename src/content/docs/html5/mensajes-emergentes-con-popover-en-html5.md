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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRGLGSLF%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T171544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAvqze%2FuEhklsrxoqCj6p1Ni%2BSpdjWthSsSCgOD7s8IPAiEAsy%2FsDfop%2F87dHEjLAz0o0ecCLKirbebP5%2BHNmxs4e8QqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEaGAXM9vclGloJzQircAyJIvL7Ktw3U184%2FQ%2Fce%2BrYgYIvL7RqMfhpwZdzLdrMX2uvugYAEfSseO5iuDXT6ZK4cFPbtAETbjAVlOii%2F5AKeJJqeMgcdzb5sb7ryudl6dikfHLLcnpc4YcNwx8XAlIHzkTWmQDp7XG%2B7g1e3mFZb6lr98wvQdL8nlGyaCRqCLzkqtA%2BCmDpLIiv4jITpEETuZsSZZhSw5%2BwzaHlijQ%2BCAQJWU90VHu%2FIk6KZuUi3mvvtgzAVmJRx2PQxxr2P36c%2BU1JSyoidkjlIxtnpJPmzMNbdQZpfknwTAdW1Nr4hiHaXpOjhBiK8A7Tvbsl%2FX6cRRSTlmIpUagiX7J3eI1wx4oApuJLJn%2Fz2SOR3gN1pVsAtGU1eRDkLT9%2B%2FfEHTX7qamQbZMGkLmRmjCkXclS%2BxIGK4%2FxwkHAp9nYmCKYpECmJ75TfYGdGC5Pr11rl%2Fj7Ng95L7dT%2FzgFf68ufQfHSl6Bxjr%2FyGKnkXllYAXtkPZYTa2SWxB8axRRqL3wGMiGaNWEM5gVOLhmO5NMGVwrQtWehRUbfPApfqNY5S2fA9mWfO0SG60n8O%2FcXjaTaZrh7pWS8IZ7gpjE4WveKSWWW6cCZcuz%2B21RFa7uoYEe7Llb7lQ2pTR33z1DjQMLaH3MkGOqUB5amUKJmCpG6a3JmKDTX3MBLLhfS%2FdQYuAb2NnmOe3y1MM%2FdfYgdSrUK2qAl4z%2BEeGM7EBbuIJcjc9oAfU64t%2FI2A%2BJCPake7qgGm2Wnl3CTSvZ8mYpcj%2Bq%2BLvEhase65xvNY%2BEiHcwI5xBpqiybivrzwB0ADO69p4cE1tX3WVSRuM1XHv9YAAYVrKhUjetCMmlQ9SVkjIuiYrbYcyXbz6iXnpU9I&X-Amz-Signature=fd0633f201c61051ba40275984372c13e50f995b1df3670b139ca2b07dddac19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664J3RQ2WX%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T171543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDg8sUmnpikKEH%2BtVa2SthP63DjkKdbNJopOvo966RUeAiEAqHPYFi69qsWIsjHtLXgOJKK%2Bm2cNaoQTKsAQfQCOsn4qiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMNVpKejm%2F8lpTXfiCrcA%2FuFWaHXldXnZQbryPKsqpxqH4wiRrPe0yUodqxPt0JQ8qg2jZFilDt7VC48nApsWZZYxhFGZq%2BC7fL3HsCqMdHi2EgKPjdfWOxuzvJveCdpJabHHB33M4mBCneOJmFJtVRaKBpFh2eDxhgB5oq7vca5xWzD00Je90NrKj0Iw%2F9%2BxJw9ecMMpoIJ2G7Wo26rElz9cQrOFoQ2y38TqOjHEBiK4HvMVTZbjBNQ5sT9zrmfd6XmRCrwp8TEymPTD7jt9Veqc4k2OtInJmK4TJMB7olq6sni%2FiMWbm0wd9V6Xl%2BII0%2BJmhumqk1Z9JPD7CbTXJi7Ykvo1MPtd4cH6QUWfX0zwQhBffTGIs2mJkViZYvXQM4rZfgg4ZABLjhOGO8g9tGNY7GMObBwKpaONCvup1JfPaypbGfIrS8ItzoJ9F4hKwUs3WZkVD4LIdf8Jxmh86zzz5g%2FaB1QQpHg4WQFpnyahzk8ofuRPYxjK%2BaLjR9WtcRtEnspOQlGm%2BG3EtxvPTYnhkXX4%2BIrk%2FS1Z7ehe6GtLmXR84La9UBW1e3EKdSLWxkQyhUEiMA5yQ9Fq%2FvA4wf%2F8P4EzgQ1RFAEGBXzLctl5OaeI%2Flc9U0k7ou%2FsAekPhDfT%2BmnvZotM4aNMPiG3MkGOqUBvIIfH%2FiBYiITB7rNkbOwTVRCkzmVT0Jvy2WVUelLi%2FuAol15TMvSiPYyUeHZbbVxCx3o0ob%2FOj7S916oQbTy6K9mIoTQr%2BSk6Wi6Gss6aEiC8KLCeZvMBCOGU7NyrcNQwL9FP0FOp3IdaNcTcuXniiQaVuW8JtqPO7KIvN0nxYUfUqtslckHFM43KhYPlLHuAv3iAx1PvtnnSOpKzKylVt8GY%2BYo&X-Amz-Signature=3f4c1e1aa8da931c3b6b704e937756d88e0681dd1cdd42d152026477cb275fc7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

