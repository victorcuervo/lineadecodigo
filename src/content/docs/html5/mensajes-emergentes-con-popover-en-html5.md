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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJDO3D6M%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T034329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDxbYw7M%2FB5xP56%2F%2BHvKaDFgMIDjq05k1zRmRmVSMIVJAiBSiWY%2FU7Uh9fXN%2BAZQwFDHAZRXbqDS4Xz6Ehy3qOcryCqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPH3N8XQbEjthMHEuKtwD4auolU2oLfu8S5ESFQkHDQhnOOKkBHTxDHtAy5U8yjAYrkU%2F6ZAFGCKipoA5U2QfwEOBI7ni1e7WvQJm73gpW%2BJZP1kPALd5ZAosANQv8%2FxPT%2F3P2UnRHG0YIsUF0Vd1D6QCJ4prxxeUU3olKIMNTht%2FmlE2Qz1pEEQfLd%2FsK3w2Dw72Ynsnr0ZByrgR9a6fWEVT312BsLt5MQINAzUTydLFE0e8pbWbzLwkC8KHY7MR4GngP%2F2ZvU1taptuE4gJJe1VvH49OZl5%2FdpSGi5L1%2FODFhfmakWCYGit5EOPB6eEro44Fw%2FR7a3aCxAcuIi1lB6Jp7FYFlH7kNO6LuL%2FgugyaCbevHola5Lf4VswtOCBKoT0maz4jLXSozeaBM7%2F2KR4R6KcfEGsWp1NjJ7E0ppbGL%2FiXjIhQTLHtb3W2xITe7np6zr1%2Fff5nnv4pg7AzXCF8hL8RB8WrnRAWiPht4pPnwmnwWqDEhRxgQbH5R1ckGykmpPPkIBba83Yw6t8Z0wdC70eSWqQ%2FtS3C7c64dod1ewWx2QxL0puZ%2BHxG2FYcKylY202oaoxz4I1iy22tLFsOIqyrsJiLJhZByL8JJrVwz0v%2BsiI%2BPPjARLrLKAgAmQw16RMjGYdIwQwhu%2FYyQY6pgG3iqn1cT6agugBBDfBYqN0u0hC3e6irZAiveCOGjC819%2BRM4D5jtw5ICi5SzRp2k%2BG21FpGt9WoFZqkNB4pn6iKwvxNP7df0zLVaqAV7gZi4nOUWdMk6XOxTKQ3YvZRULwnGZuIArRln5SgF67%2BFnG0anWJdAcO4oaxi3eOX0i66mZ30uJMRbflflzreLtgZVe1WoNLdxf8xOg%2F%2BwCEaJpashHARi2&X-Amz-Signature=0a312b1e6ea6139f2b38dccf2dff9950d01b14b7a43c4b1994dfea32ecc298a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QX5NWVV%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T034328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDv%2Fk0jWqwOeX%2FOYmDNQMXf6n%2B9b7T1VlSo3%2Fy90MHXWwIhAIlr9LG%2FCM1Rf7U%2Fpys5ciyUpS5P0cH8XVO2MHPGGdW8KogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzv%2BTUcjWfBKxK6AAoq3AN10eFszQu%2B1ioHZXU6ThNrYA%2Bwzfw8aI0EXbTsaiJw2Xv%2FaUkAojYZrobtrK0U2wjdW4FMZiUp2o5DAm88vKEYJu7gCTji6okBK7SbaTWa6kKpx75YeaWhmQHk2wSWxkOecOUfoayhG1lyt0P5ByN7TdRzJsFWNqIf%2B72IUiIO5Znsk8v5oBtRxC%2Bd1e4ozfYmsvYhfaBqBadwRzUdRoWwB7Mx%2BxekKbcIgjY%2BRDp0%2BAxypB5xlgwjDRVO7FNKTigfW9w0v7XHlWC6oQN3ont2QMW8CT6iE9NPd1cbNjPsFwc32qcntBp2o8oYZLhpuc1jXBM36hsHhdnvzU34fkcApFmQ1Y4TCVLry1hsYs%2FbGQ8a4EwhX2XR7XSCMbvdm2mo9mrJs1%2BvbEV%2Bhpmcv%2B6%2B4%2FtH32WMQ7sADm1uWYv86A%2BqpR2kQMCwKYG3OqIwmSdTy7ckY6%2BIszmfPqeh5bAnOUx973p92KBaYMncyPIssH4NjyEOA9f3vLHg0MjOf3JFJMqehWWWozcPEdmnW8WpGHGdg9AO4Huq1594SnDSAUJicHzUFoWxvE4Sseaz1XaqFjSaldbpBv3NTiNP8wYFtpVjre%2Bjxg8OsQp%2Fxtci8zJpO8ngo%2FaRQea2qDCp7tjJBjqkAdVp84QhLXvJmllBN%2BFXaS9pp%2B4TeOB7Czs6DfnjVM9rblp7JfFRlEAtqjAam3sJYYC20P5UUw9MgmQSLRZAT6SxDBcd0tIgYkvaoz1yF4pgHz6KPKOL0GNFbttHQjHlyXNsNkAEfvA8613CF1Dh2gyH3PPqdvcfsI%2Bhu6KwjEZLDYrCmg%2FG37cyjAZ8dU1WP5IndfINQKrVhjnwz%2FmHvTdjXHfv&X-Amz-Signature=62563e2498ff1647ad011a5d11e5eadfb0db21d0b62d5f63840f4b72379cd630&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

