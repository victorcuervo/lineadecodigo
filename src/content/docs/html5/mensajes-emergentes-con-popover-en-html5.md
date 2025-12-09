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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYGOUTCZ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T010111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICMrWIIHbFw45xt5GAe0DAavECS30qNstH0em5OC1Gn%2FAiBJ5O96OyaomqpPQucvqip%2F2%2Btpm0iNhkWFWgxu7W84uiqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlQBJizY2GEIdz9UTKtwDDMX%2Fw1PMQPNp8t7J1KMfCdq4yFT7hmT%2FjwwJNMy5%2FKxEP5ujz1jRQi%2FGMd8IW5j%2Bw5or1vEfF8EGbXPtdIhOx15I19NqYCWUjnNMMGPKgWBL5bHAhGwUlXtC1LCVk7n5cd4mC2TAhOk%2BBxyMKw3Zfooh6Sht9QRdYFfEcDojsfgveE%2FILpix6lyoZ5H1KTU%2FfffzFSt1bG9GaBAHwVRRx7%2Fpozk7eJqcgkmReGSc99%2BPyHRs%2Blz0GSZKmMRr88WjC1SkUcUkKfSQgrY33FwxhyFN4xCV%2BjvQaMa3h88JF8Ug8Q1ce21pJxjgJXznjYfmYG8fAWgtW2d%2Bq6xIgKV8eGhuz6BhVYyay5ByXa6gBBQzZTjGm6l11tzLsF0V6tjZ9Myof5kipwgdeTF55NZVW%2F0prYQ9wGMYb%2FKQBNVfbTRvNC1WvZnkr8KAMxMpzjxALBcCGWUt0nceXisAiqHS%2FjEnv8nxVK0KkJl51sFwvM5SfVTV%2FgHlik0huoyFEWUmP12wIwN4TXdX5yN9sYaGkqx%2FNXBO1PS%2BE5M8kiqf2fwmzHoI8%2FIdm7qEH%2FLgPKzOwprGZ3ozd71%2BwzoTxL68aeVXs27sqX7%2FDfjpdsCO3%2BZKPs3pyNBsyRdtuq4wo8LdyQY6pgFUskendFzg4pJypJoMUfgUTRp4W1dCCD%2F78TtGBng6fe%2FDezMmOBgi3BWnS9buMypCz5LZv1xpUmUgfJtoYy5NNY7SNUhsjqr1iZTspxIga9gEFdGYzVGSP%2FwrG33Y1sNt5tRZbldmi6a6umHuKCbSGbqBfKe4TZhAdoONalYSD72rkbwSbjtlKA3NPC5h%2Bw5YGt7U0rHWOzSwIgkEkGdFyGB5%2FILj&X-Amz-Signature=ba2e87e44ea6c2c0f77c1794d47e7b3d7b9ba7bfc4fd07f5dc1af85208f25a20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QSPS2HV%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T010110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEwwpypNfLg20TUCbOhBBCd81FRD3nd6MDmvLHxhts9QIgb%2BwvIxhmFyZ7XNWr8byuzaQHb1CeCZWpJoloR2%2BlDjUqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHJsLELWSCsFAr1Y8SrcA053klxgchiYWBGVANmbI426NDCVutSmFWwl6gMql4QQqkrKhW1PcKRKmzcNZikQFJkzykXaQc6Lj1g7BpbzKa6%2BnKnYK%2FYIXGBc%2FmAWYT4vzm5ZPNGop3N%2FruUlbowXf%2F9YxLoCxbWmIQl3rO94QO61aburKjNfyXgz1kYPSRA3qhqqM7YIdHpbaldggmNiP2MsWIZb%2BkFdWZJE1F%2BntThVGPoMSNTJNPtCe5h3Bzw4zwa12cyp1UeZp%2BSh8oEb2CsA%2FhQJf9AiANSNCK%2F%2Fcei69Xf3aVd6%2Fq9%2BJcemlQ89L9QZkusiRI44LhTjeY7gfmyKzxAqy1YierVNT2uqRStULyObrQ%2BPshylCp21VN6V8cLCPcRsOC%2Bc4%2BrZSbl2I6yOcTbL6v9dP8PGVcdtYuGUS0EQUYYXO8jJAijg51O%2FMJeU2%2BzzpFtMDj0NodAwFXeN2FTXk6oZdPPmgowHL9pQZnyWgcyIQP6L1eOgq%2FTTZ8lsq9PZ16edkQY23DWw8i6LQytdP0aRVR%2Fz1iDS0jBbPA3X5zA%2Bz8pFYpL7vc8IoU5M3TM7dqR5QiEMkHM4whhAhkAkMPNNl9VJ2VO8hEPvJm6WiDlp28eMCEgp%2Bc%2FC1H2pUUg3GuHa8PHnMPzC3ckGOqUBi4Nsc4rcJ%2BZUiKJDCWRCMNiEn3aFfcEO95Yeg8m2tRWD7rM25Hh8jC%2B7Wz2ceN4kmvCyv4bcnhpSn6bXMa6ms%2FbENDFOIk82YHsdzA33vIbwHmOvdP7XB6NUxrg%2BDFVBoGSJB9s4gtKA%2ByfAaFS10rfJb60%2B4IVemcZKUB6Wq6Ijk2LHISr4X3Vx%2B4FuUjM5yQ1Q%2BRLE%2FW5qto1OwIljK0mHqPNb&X-Amz-Signature=fd4ee322ac0c97d8201e295920708b466774baa9bdb0e36d1425cee4f5590f4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

