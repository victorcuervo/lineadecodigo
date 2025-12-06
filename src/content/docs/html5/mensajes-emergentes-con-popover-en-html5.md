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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XH7KHVF%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T092506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDnigbydzrPzwRTXEjHfSVzBAhJF5pwunRM3pXAP1BQzAIhAKMefnqKs5kmvRro4IMXa9how8OefQpAQ%2B67EE7yr99GKv8DCHIQABoMNjM3NDIzMTgzODA1IgxLekDYMV34VCMhAVgq3AP4Rvwn4H9B8j53ju%2Ftfdm6VQizbmC%2B47ED09TNUTV0IfxZUO%2BM%2FZCvPPp2GLNhzAgv7L%2FQkbvOsZ0955JK0qQAEyuO0YUFQ0KUQsBBPnzKsTXYps%2FZ9NY0SUrqkTcpvPv72KRM2eVCmN2fYYwwautIFVMAY%2FODOAnj%2B6kpkfvY51R2m4MrMVYeu526hMQ04TR6SPkP7SxJQz6inB12HLqDhCuBkZycrGmej5pzdYzLiZLUcvnL8aQV1nLj4bL4ki3Fnjfm4NgiPYlfZhxZuI6QmEj9k4cOHI2mt%2BEtk5w%2BrbXDlNc%2BAnVx8crI3OQT1bvkG5Wk2lIGkchrf3GfOqao7V4YSwyeY7bE%2FSZHi06%2B3Yatr1rkg7sTyvP%2BEl%2FE0ulEf83Ud7kC06oqQPW%2BOlW6SbWw8fd3cjarRKuj3WoA4Qmqa9whfTQuizXy3V8TQ5d6snGI4Or6c%2By%2F90xZTNcuV0M3VS60e9%2BxvWQbXPny3NrTsJpmjrNkxiYho2On1ziSVr%2Bo4QHgL4Ku6pDQ7UN5GoSxeWvuE7ePAlRtU7T3YeEBnOVX%2FhZm%2BYKNhHiyEzpa8f5c8ak7s21sRMltom1EdUEkXhiFRtJhvcWxeYLxHmCOGs5y840IvZL4dDCQ68%2FJBjqkAT2er2rf%2BhJ%2BEz9yyf0JqQISUncWUQ9PkLicoKhiySe7YGwutDkGTlY%2FRblx9Rl653iTRMwgANnr%2BFqwF1DyWrCne5phfSjuwmT1POX9Ox5CW8uOxNsP%2FE2GBebIayTH9KwaFCdrdT3Zy1GlePMWQAhkr54nqeF%2FWEcNLpR3cJboaKzx7gy5sjTE%2FmAegANmWf7UL3n7SKi4%2FPQfIZY%2BlQKf6USI&X-Amz-Signature=3edd234283d35dae9719a1696957d467ee9fbdf57fae2bdd1d94d6d61b01c74e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7OJKKOQ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T092505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJ0tdFCTn8i4AIyAC5A%2FCOJb0Ue%2FsDdCZI9Lty%2B%2FzCogIhAOJ7ak0yZEHjHRYlapRmrBGKmTjl1Wl%2FeTmnYivMucx%2FKv8DCHIQABoMNjM3NDIzMTgzODA1IgxWZrHya4Ma%2FJzwHpIq3AN9WRvsPj1oGeCM8UGYfZ2pWzIZo8KWQKatwbwvuoEcYTnEN0dH2enLJfHzlF0XSL1vGPUZK0O0A%2BQzWAKdjowgOiODYMiYqfKwoSnDJNrph4S%2FCL7qMz%2FiuJ84%2Bw6wopY89JEdcMJ7JeJ8yetKGSBSZ4%2B1j1PJzjnl%2BESdhqodkPluqroOuAdcDb2TEZ8Sd%2B3DSf%2BfsZ0mY7Xr65mJNUuvFGTJ7qkcaUElA8jCxF4569PNS25Z%2FbaNfqDyEIEKvpH0iohf8%2FCynaAuYmOAzgwc6Unv8Itg4%2B%2Bt3ceJ0BDKdulyE1rP%2BGYHIVUj%2BPJNENgup1HdGBlUoNs3mQoApysWa6m%2B2tPPLg%2BL%2F9kcBNOd9ZwRFKG9%2FDwjSWPcSt83w1dsspFLXTmVO2ilZD7hGR%2BM9XUYrnxT5bs9inkHWPe7y7tRGUVefp7mRvv5jEsk7q7lfYS%2FpaGmzFD32Gn1TCq2n8d6Ho%2FKZfqOoP7adWAM5FTnZPn1JFuoceTJAZzUgrGnEDSuHeYvsGlT%2B5lGyNQu97VPlbmYN0NzN%2BBH%2Fcoq%2F2CGiKtrhF0nU6KRlHLjFGoacIGU4AqvRsr0pkK8Qpe%2FSJZ2GdbkDpP9OCZtQ9jcOnJpPV40UCglMYUZ9TD96s%2FJBjqkAVxVLMUzpqY6JUekPtK6WUsv4FCHIK5eGsFdkzgeN43nMGq49mTQkDW%2BWPJLC%2FadrkuSGwreSGBVU7mMmDjwIsgq2nf169NRKGONV8I08rgRYvz%2BVMDYhnpefcrON9x%2BnTheyOgOhGwgq7iHWtjhfSQyTYhzQkB57SkFP5HtGa1rxBeAD9jOkZ3v7lNhdRlH0dQYHta%2B9jhbyTSYpcmxrRk9MP%2Fo&X-Amz-Signature=44c3db268593e831917d8515a29317b4397833fc341337c4aee4c7b600eeaf30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

