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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633INLUUN%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T172841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2Br0Txukq0MV6Bbh%2Fy%2BIKeGuXB%2Ba0VRRtwmcXJszyBAIhAPf65DRI6jDdlWNjZu1WeaOPLvQ0KksSD7FZ6bBPqy6pKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzrd9MIGyiM4%2BvudGMq3AOcIuXjLn62x3lB%2FMkRfTyp%2BF4dlFd7C4PmN73Ma66wRg4XeoOSBqixbvCLLYmJRjIWtd6wFwq%2F3s%2Br%2FS%2BbQW6qW6HBqpa9WuQ6TWmNw3wk5fG9TZYaNqyaX8kqGbbZU338fwz0jZTEYgKftZlgIySceh2YYQh1a6X%2BdLaLVRIyKrvzMdI647BBJnctKxtZCYxl%2B1mpQ1y4tKxqJjqD2tVe6mKmQqz7C0Kn%2F1om5ju0TR4Wvw3zFemnwGFyWflZYQrF5r8c8N96nuARnJiDqTqaTrXXxKRnYzjE2Ne%2FpXyh0ZK%2FTonnnBTASaKS1mqEiwqEwVaHrCtaihrwyws1vQzFg7BsY0Xg4JJRnAELsEUrqgr9zlpUgNpcHP3zQtENVjh1OnKoAu34WOZYeEmWsCDOBrhzSJC9XfZsnCYUxFYTrjFvevRYK9hsRYd%2BkZwbWj7rRvAnLktqoK4T4zFjebgAdKIAzYlBRQM0EotSzP2ueXn%2Bax%2FQoXtgRhOwC3l%2F%2BHpn8RfMqHi2b2oOTJtA3EI0J3fxYmYbh0nccFmTEih9C%2BIQmhoxM4uVFGkqJuSS59OfQk30uSj931PkODFnbMPerfPB0L0PveMjGuUOps0tw4v7lWHI86XeFxI5LDC2htzJBjqkATBR%2F6YmTzPsALPJo9rxSJQIc754iMMRim6CLbd04w2QfIoGhFF2dkHqJYhNXlj4Uab%2B%2FujLCniPF6pu7Hm0e32Nv8pOU3GyUJbc6fpA1fJx0MFVIiezLtNDxTIE4x6SjDJ6LatD5jr%2Bp0gREaMiFdgQEMkIoHYEFPJPDrqZyzAULkkYlWhMp%2BxPxyfI95BDfxxJOOjQiub%2F8ecP2mS7UEkEaq3H&X-Amz-Signature=90358955afb3849c992e0341d1adb84bb943db5f799e7339efb8d636bfedfc4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666F4YP3WM%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T172841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDezWpkh2TG0LIGSwcrF9REPL1%2BSE8d8OhRrqy6fyY1CAIge51LRh7aFv%2BWkdC90fWUK8jd5PIPyKZqlGTy%2FXA8fEwqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIYC%2FuvP2YrNffu5ECrcA0S78VZKO1jP0rjLrOu2THQzpVpBAkpoBP8jgIM8mhurrzRf8lasKl1h%2BrEl8zMLuLuNOdVUBm3SVEK%2FO9CDE4SIEt%2BkpIYzbHsnYJtzrQsOya%2Bkn%2F4SzZ%2BYIUkVPKs3DF%2BOysID191KzNx6aa%2FB3X%2FVizmOiZ46W0gGuNCIanPZ3oIgig3lPlG0cukRHdf8t2wEZx26OLPyzi%2FjpTVYzbi%2FoEFCEHs1PT9PqsjkMU5OX25SBLOk3lbi0w5WJLekk44iaECPZLbAQxd9%2FpS6wpQndOLvOxA9oZcAbkjIDm8%2BmtCfsKNdRATYyii2IafqTe7SWlvPsr1KX%2BhK%2BWlZgt6BwbudxjVcI75x3OaE2aNRcQjnTOHR0Cq6VB2TXHB3wVrPVE8aQczikxzfcjhb8H7vHtyWY59mcSjZP3ALrnRA%2Bo%2FiKAJ%2B%2FXe4fRRX%2FCGEY%2BtfRPHiw4xTW2VPjhFuAecB8I6csoylTtPRCVe01Bf2Ro22zRQE8IMm7ZT%2FYRzNo1l149qLqPTI%2FBq67jyXcyYTcWMUCVXmvVIl6zE0L7hlQa5%2BrLGsjxHGT9W9cSfuimTiWuUhYE5HDSkds9AV4f2SfI%2B0Xwn6UzXzV2sQFUCrtr4a1Fdd2URMHxo8MI2H3MkGOqUBNOj4FZmzwedHMLhygDQQSdBcyQMdpnZdUdwIbr3wFcpYGgF1oTp2MEGpkW8ldSWL%2FSWmynbeLq%2BgzwbnYjYHamAqPv1obotjOZ567UP%2BjrjiPYc3QGczo3YcE1u%2BKiiWXdCnuzO8A4XKfditT%2FDKwYjTgzI0%2FoxlZf2qNh9rksAx02UYgUxPTSvsq1Ijr9zBfu81Tqtr8bZ%2FIp7MJG%2BuvTt7eE4x&X-Amz-Signature=d8b4bd48119215184ec69bcf6e41c039649de717a11cc48cad4408d7d89ec53f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

