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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JRSJBL5%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T063425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQDT9MwQDsHZ%2BtE59MWCdbiEdKiqEMp8qQI42prbtll3NgIgJGeidg6RECKFhDpabaZ84ZihD30Y3bpd9sUZmxqTTjUq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDKbGLtyW%2B9G4I%2Bq2ByrcA3MmbXQCO%2BiKP%2BM%2BYN5riJ4AdxBjgujkuS9yUeb8TeZpu%2Ftr7C3NFLk%2FkVHxIFThGSUgc6PMH%2FRI53BVtX4%2F1LJZOSnq%2BAx7lVqYoxjvP%2B5PBoW1Wzgh%2Fabpy29cq%2BH4nFU6DYaSu10AHDOtp1T2tiMHcYpta2FcL8kTLLmdX3lYBlqEH79ag82pPH3ao2orqCJe0TShnNUDg1XqTwKd3A9flatdR6BWpz6dbPhREVJPf9DyOvayvCRdw4goDWMx4udt6Gg%2F1HL3RdJbaUFrls4nmOS7qwSQv5MZaLFuO8RUMSiZK1prQGg1xjNvsxHcUluXFXB9SDjmi32xpFAbnsH3IamLPNA7I00CAJsvTU4570L1YaQOO1abAUAkn8QyeWzoU7YNPT4h6VujmJQvD%2FXVhtndkAGezykFCVuMUKv5IALWPOei0P8%2FdXD6wQsIvyfwxF6OUVI3KQqlMl5m67a5v7QmoUWHv0a2EdVFnERZ46jCPc3Dj5iMxxHHi%2BwXiF%2Bx1CNYYrTF9UHAvqx%2FEPnEkyxS%2FcNrxq%2FBEiDecWWGRrZ2Tc9SkNjyKf1Z8F0GS8EWsKP%2B6hS00Mf%2Fa%2BXFsy1cShhpeKKkjmLGdeSIauSbNGxaNe7D7huV0Y0fMN3MxMkGOqUBRCOyqFjcV9F%2FK5Bd3Avdlh4jTxrXbRjsBnVQ%2Bc%2Bzoje%2FofgsuXQGDuGlhqcqcans7VBsdNksxPfgbXu65A59OGAuII7NJmooj52DN48gwrjLVYrwg5FmQ1Cy6u344BnZUDfwNRAgTjCqdjHoV6tAAl%2B2F4djRy4jPIsZaam6RCBxEPIn0BTyFfddK%2FvOEO5ZJQdwrvyYVaFMA3Xx%2FSeKPQQ912Q4&X-Amz-Signature=9f9cd92ce665d725dc6ed7a614c72324bdc421aa989376a6bbb05bf8b4f835c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QZT3VON%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T063424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIEv4pCslcvKXYS9JUoxUa%2FcZo6hKz%2FokXwLDWQLtdbY%2BAiEAr%2F2MqRX20mZLcrY0euo2ndxGsqqTYJF4UUegNa4%2FjWoq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDIctiWrLL2TUC9K%2FWCrcA3NnYfXGirpy%2FQIgz50tSgrQpUhwYSYKgz7LyCDFW7dkj6WaC%2BC%2FWdZU9t3DNDKkxw6OX0xA0whmIICa2EalLDVQDYdSlZgBBHRDbNhSgz3GAh5TK5Oj53wzrzwMo4Zodcbd2QIU%2FcEjamtAilJI0kH9wd%2BLH65Tq1IdrykACBeblzGnSiO6lSJa5x0HWCDERZmz2eRkpN34URoJoTryFhC2ngNCHqkQ6LGJ5UwzW5HC1uPsQrYeCY4Yd4WTPkB0p822%2Ftg5fqz38h%2FqsLWFSh9HuRJT55a8hejbme3JNV6vVMmhMoAwX9wdqH8IZnnp%2FVLrw7MaHjDqZWaQz%2BDF%2FZU1uI2paYSsbjpFH2hiB%2FurSYkaRyk7G%2BrTbbpnFq8QmvSqwSbZbfl4OiKKP5Q1ykzoNCEMKVAyXRF2uNGjIb1jQbqRTmnjAWIVjH06X7%2FR0DGfTnGLgv5oADpm7zL4oJHDaQPk9BBzJJb6WPD5Gpa%2Fwrlp5sJuSNIjGecnbu18x%2BaSswGYc8BBpXQRGT7kaQqkGc6Dk8n5Ap3s7F5r0Fm3sElU8kFAHHoYglFO%2BccoPPZPLZ9L1Y8VL6b0B7y%2B7SxegIJWftRyZb0jekbHTIngg1VuC0LItW8xBRv8MKnKxMkGOqUB%2FUZen6UYjpz6LeZc654cBWJLV1XmMT4ihfNcLy%2B7MxNux5gs4psTk54pB0cuzuiw3ImM8yKGGHkJqeLydhLeokg86w8xibgA20x8%2B9Fb%2FzfYjS9yRShsrqQAUCTbcSASXZF9G0x%2Fg8n8qQJzj6m5nHLLO6366qyd4%2FxEOpq3YJIlwMn1DZYtj1vseaoIh4SM55H7H9v3%2FkRIUdvnHhqjLcSzJ9KU&X-Amz-Signature=5e38e49b9f75eac8fbb241a993f86805f0f8ba76714b068bc517b1995d40d886&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

