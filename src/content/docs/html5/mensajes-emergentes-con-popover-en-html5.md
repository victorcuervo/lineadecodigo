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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665SJ54EE%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T083907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF5M%2FesDslk%2FhfyPOBi5ef7MjfI8Pf4%2BBfC%2FoiQP02kDAiBXOPxTfLfmMPNksWqRQ1ARxAAc0mcZ5s81t1t4i56%2FCSr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMfymMjB0BnNoPNja%2FKtwDIGSvP7uE43F3R3kuRQka6Uayz%2BVzSp8OBLSGk8LLNupY0h5ELfDMOInwnzBQypt8J%2FbrVNumCPEWnw9WQOBuTFfByECRa2TsDS%2F6tzr83PpjiuKyJcvL33ibmR4nRapRotzdYEFDahV51MJWVpFs%2BJBWCq10E6tGWir0b1A%2F6EEWnoYIWSTwFS6pVRjhtYxCzJRgO1uLAVpsvNAUezwaUy%2F1cIfLgpwCVmK2Q%2B5zaC9nHpM4BODAwI9GmEX2XREaFBvNy%2Btn7vFWSPnmXvLfqt34qctmzvpfF6fcLbWOJwmUcS%2BVgDOdFRCzAkU6jhbqEzcfH8n8CnT7e3%2F9dox2FwxM3oCRbUzw2xTFfRPpvZE8TXCafbiuda%2FdpzdvN4tcsgNiiWRn9%2BoWNee1xqfmaGbvjpraDqvVqfCYaUaW%2FVX7X9LJC4igIA1zdkmum3Z1PsKA56cQEsfwur1NqSNMaL7QTpl3xUnM0%2FGhx5CgoOjUe%2BhCJ9nbRjIitzYSoSsdcwzoDCS77M6sVjarTH4p%2Fp%2ByjOSoMTOcK860k2dXIJiTMp1mYeA%2BME441u7aWKvIoLG6RBj%2F8nIVQY4zVommX71sYVh5B4bgU42nwjKvDxM%2BzJIDMjqcGfiT0p8wv7zPyQY6pgG9nwqGg4O1mSYfJ8n9PZ54M77xTzPwy0vOBMIKo%2FXYKgJig2ToR3gaoGEmbKTHJf672ySE4iDfl9VhroAL0ZBhGepN1UHgQK4vRKQ6vZ%2F4AozC7dKgQzm1lQHTGxuVqd%2BG%2BawrqnCUtnXLDsKSxVAn43tt%2BlK%2F6C8pkaIZgSxI1NqxcEn7OD5H04qqDfWgoOZFIh6lw7ZgPiq37QU281MpRO%2Bv%2F8TF&X-Amz-Signature=eea5e52dd38eda0f1c5f973e31a8e563b85b510f5f7344103f45b570badd2a0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFW2VF3G%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T083907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDckXuV8V%2BGYMj6q3%2B3WfYWyVdiLPcMu%2BjCwaPiFoc25wIgTkVGBkdPFbMG%2BGnZoh6N9Qt%2FX2QxXMeUi9EyTeJGoEsq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDHwWCp1azJ60uyOHsircA1yPq1PRLmwWZahXWyWjFlIwym10Wv08ceJt2i%2FC5wHhXJzSxd6F9HsRjxIqsbGsrFJxklz818IUs4AX525MrXZSxlWKe3%2B2r0nKKtCSyVVheP6oMjAa2hwJllSu1a8wiCkt2J8EWGbfIZMhR0IXiZKcvfNixxiL7nPtXhzH4LLLJ7V%2BHDh5KBseU9KGS%2FSaUnbPaMmeBk20dnhmmLVFedDK3T11wpZU%2BoU3Z51AaDpbRS%2FsaHd%2BDQ9NrgNrVqqBsC09%2BtX3NXwEyhl0wByCk4YdnuZ2LYDxxiLcgWDh7ExqhVu72s3LiAMoo%2BkfY6eIiZi7lrpla7FjNtPDgBAJLwYiLDyHMcAPy09gGPdTPogrlvugQRw7Dme0c3x5CV9DCFeU8J49IqusDK2g95eXkB3YQnOOAiee4J2jwVU0z7lSNqS3KXd4hSRyM0yb1p4C541Ye4XH7MLh3nG3i3Tj0dTg2%2B92WibJamrb3LL1OV7HcVl6tfjNCKAFBptTs%2BCVmzmwcPCrykVTro%2FkUwO1yLi%2FBN0AjDnudqFeUBt8P02dJ7tKRYNEINKGUzECHz2%2BxoIK3H%2BcXaoK446PLlGrY4shRBE7GkhfXcAqWl2pT74UzA8ip4h0eA%2Bhw5ZKMIu8z8kGOqUBEa4uq9vHoSN4%2BnOLrl38%2FLPs4ZKQyxtTdltyoZhBoSou26H56XniPyOE76gKWYLQ4UJm7jOUE6eF2iKVulWo0w3%2BidGpHz2auI67tV6BzboaYzm8lxDrt3XWZdgWs%2BJCGp8JoeVib9PHis0nC8HjCqUaGwh%2Bva48C8tBXRGvf%2BQcKI9hRePjiPxzvOIGYu8SHm%2BIG694HuxYElbY9Zfr0Wrychxf&X-Amz-Signature=bf599b32117ed085d4a7c50515101ddd9b4d58178059d210482ba7d699c74e06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

