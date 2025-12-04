---
title: Mensajes emergentes con popover en HTML5
description: "Uso del atributo popover para poder generar mensajes emergentes con popover en HTML5 en los que se pueda incluir cualquier contenido."
lastUpdated: 2024-01-30
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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQGVVTAF%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T113743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIFHmWu3M2Zy1IsRZJ1VpS39dJ39ra11B%2FCDjWjsPCvQ%2FAiEArBKgSG04Ji8Y3247%2FWvVBJVBguwKVbq1QQbTazSMuGUq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDDeidPcmW%2BcHsefCgCrcAyBzWc2kZhtln%2BoVxV7KYAV%2FNmldvos0v%2FcG0%2BRSmM%2FE2QsKFYoSF7FJ8%2F97SPw5gsTw5GtsSnaRIIn2IR1vGgwgHyZqJnOQOQR0LefY2fOF6RpRF%2BqrPCfFjPdQOI9Pt6crouD%2F%2B785GUPNASL5xwZ7p5vxi77sL9%2BzpyuG9JlK9EWd7ydNepb1Dvuxuk8fLeIqemefH2RJis5m5BIDK9UPAo88Xhe3z%2BxE2xZo09Iw0o4VruM9DQcglHw0%2FMWVu19op9UYNlAyzY%2Fp1%2FYp3KNCezQOLicXv0emD4Mhf0zy0c8uKr6MfYqmnwfS2Fd3uBEZldbCkWGQy3GofO3eOF711oGzrIDaCJtX5zf%2Fy4o7zlQPweiqvq%2B5rhflTCr%2F2gOg%2B%2FsIl22nVMoD5H70SsWKfOtobi%2Bu32zGv7fT3KE5faneh3x29Q6FSROXBdoARb%2F%2BLwBUwkbevuGQ6YAENfJHfKTj4XDjRc6hp57OJSrDcL%2FcBiy6L%2BP0X2i1wZLS7F6C6TuaJKyXnuY5bWfaSYgCTlGocbKTmTqV8p0rzVtDFS5mmux3K2vSwSLBFb%2F8OWdFJJca36rGgCf1oQu0%2FwDzzwAYQiFfHQkHbIGiRvANIcITK5VLQGJd7sNkMPjJxckGOqUBlAHNOh1CcZ0g5HhuaIEcLvV76ELtCbGlwANkHgL%2BDGYKxLrDdTmMIqGiBwyGkovALKAQFLwss1qs8KtZ%2B5efHAMkKFiJzuHc2yDfqIACpy8AirOGTIBd5aSZRwo4Ytuybt9HuWv%2FazkbMvrdQGSSGEHaoV%2Ftu%2BTvmBUuiPmqSpt7HmK0TUCs%2BciBpNSpzTbIh3y2XA32M82SrwWB1oAYrCUFhcJl&X-Amz-Signature=daf906009100517ca685e6f3569a1887961c0b51232739b28deaee8fdaa5bf39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y34IS6KS%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T113742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQD0NCC1gBJHc2rjfkKNWGkJQNpwgoYDTSI7oG%2B8D8RZoQIhAKL48wy1f64QP%2FlN5Uzj78CJZI0JkhTJpIiIsgqRmK%2B%2BKv8DCEQQABoMNjM3NDIzMTgzODA1IgyXTvoZVFOdkgiXDKUq3ANGb04Mc8cb%2Fu9XeI%2BzuxgA%2Fer0%2BjhNpiQqPNNpq3S71bxowiA4um0IBnJCubrHsqc56zGHXBkV%2BmhrY1SPCodBKu7LvB4q%2FR7Gemq1SQW2cxx%2BT9xoHHZHjPIl43J1K%2BTSOVPUdrOW%2Fa3WlZ7g2yiUEOxEJsD0f%2F2ayWigGD5%2FPEj7NQybeueTdeAhjGnhwoueOm1HQJFcn3mMb8WQzJT%2BecfvrX4p4cnxFtp9t8aOzyJp8zrcFXnRXTZ4av0%2BG6QW0U4COhJ4QSQRX4JW2UT2UVeqSaxmSFzSnhDbopBgbdF0Ns4LzTzaXOP7GayojnYTAj1eTXeLYai76lkrC6O8oh0PoxPNOvdqXmm%2BouTZyy%2Buyy3xNW8YSpNgjokTmWDmk4To6hb3H%2FwhcFVNpTBoen4ZiuU5Fb22JOemwsWKuYG1nd%2BIvFWXLDEPxUaD71D1sqdvw%2B2I9dW%2F%2FloOS03COekkQsyFtNALjDSq2Scw7vxyPo1gQ2di9f5g3wLNFUX6BaFcE0rzFD3Ye1e495er5kixpkNLP9QaFr6x1bZOBTyv2KcbMMx3hnd3rq4Ww5d119ZyQe4ZbUvuSV6eLSxCFrat29JmidDCfc9tMFPZSiFiArv%2FG6l5qnEGFjCnycXJBjqkAWENR56qbAS4nRsEYuAKBH7TWn9BJ4i%2BENXgq0dQGi4QX7jyt3jKe06SVQjs6ArJKNS337qXSEPwgWtqNId3OOCzzTCBG69tqa2IZZO6y5JVEgF4dzJ2kaS5F0Vb64OMGjzM2uHd0oJd2UHyZcop5Ws2uWm1horoQMXqPbe2ICL5bx5kQVq2OAjSvTkoVqk3aWkh%2FA4POvCxAK7pqTgPhti6stbk&X-Amz-Signature=6f7832a3ec67815550e0bb6e6d6785ea87aaadfd5880a9dbb191d37c0e816e76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

