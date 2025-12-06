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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKXQ3JFM%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T100511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzQRcdnk7ibbAsSncE%2BdbN4s72W6LyCJKhZCv8dNp%2BEwIgF8psTYq3K4pG0N03dSHqbnm1N7bBmpPmIxwqrDmLQ1cq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDGbXmxrIwaL1Qzt2uCrcA1J%2BrVOK9RkLOPmbXvK%2FKHIVZqj%2F9J8xTUvwhx9G3%2BZtrdnR5qbyzLTY%2FdL2Hu6MDmDxjg%2FWmQ8ZI6P9TEhqpq%2F1vaeRdV7jIUd4CohsshCPsLpsX7p6Mxp%2FWvLr07aPdpWw3twcTz2s7pNA%2FNfqba7Im7KVGy47EJka2Qx1HZjFgzDS7DSHS9hp5dRIHk2CN1FQqbiMtPNZkPouRdyrP26efERh6H52lBy7BoJZ2V9bEPhb2XujypPh2cTNlLnNCiPkAZh5iMZLlohU%2FuicYrTX49vV9pRhBstsgnSpYAm127Zi%2FalTbUQbr4HciuSmkUqSKicnDlzPGsUeQSYvXV5JiJK1%2FFtrjtgWPBDzuGW%2FQwvECB8vINREwMOTlhgeuzz%2BQTXlBTpVFlHH8%2BDQuOtfQTCLFvVKnjchZ09K42A3eqvkzw8hmQ%2FiQWp2q6BvTM4MEq66hhwKFdlGojJrm3U48398k2Cx2L%2F2sgDE3tiFR6NJ1MeqoHTnqZNjUOqm5mncjBrgPrbYevPh%2B5WrvHzCRoxF7E8V2l%2F4a2e%2BUhoinszc5YoYHwaHe62aJA3Nk4D%2Fv82o6O6BlAinAHzEyytYd0xFVRkl8%2BDL0C8nAT0gVp1764yD0XyrbxzBMPTrz8kGOqUBuAlPQ7WppS9U4qTpCkPVeSnqKizyWYI0EnODcOthL2Fd8iZQ%2Bk1KpN%2FwUTHX%2FOkOeqFASBBClzFAQGc1qTaLOP3rkh6W9PPrcL5LrYKA5HKRhDgdEGX7m6z5i6f2iMYXXMuscrbCLwCFE32DHztwSRLKJVE%2B4RjxDh8SfSHebKdffOGJDmfGHriWXjdA8Kz27Tb3%2Fr8Bs6sWEridKKNhsIhnEOlX&X-Amz-Signature=1a9b4088d60af4b759c00beabbf89d56cece881fec83ded0081749e3edf4c1ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVLA3K2Z%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T100511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2KYys5bcK5p0SKLJVMbguM9kzpYWdTgO%2FN89oLVMg5AIgBILgLhaLtBTNB5Teb4KJnUO38D9M0tu9eRriexA7V04q%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDO8DxiavpR76lZKaAyrcA8pQqRDLI7525guTu26HBK1JTNCiLGazFcD2Q8aPB05fM%2B3OKINdlM8GWKJwkefM476JtNWpnxzlXqmAeF4PLI%2B%2BMquQTq7A4OP38HtF63PTy1QIGvvRC7ti5L%2BjnlbFiitMt2VMov8Na2pBarBiWBn%2F0Ltq7ZFMzJTxweLEoFSWy8UZa5sOLpUiVTe0NPMatZAUjovVNldTFKzr61dp7svLDA1UGm23rU5RhoN1aeSR6siQvJteh%2BtT2ujsUgmj6yVCv2uZzrpNdWfGpizC8g7g%2BCnW8nw9onqrBG%2FinxgAUJcNeoIk8ysZkmhh6WeSbDw3vGehSoT7ALkRZvKc29X58WQxNi221UlHfSMO69ihCUMgsa%2BVi8ETPB5yiRjahvAsZV%2FawyDXdQ%2BaQV8mjN8G9FC49jCfGWB9Wh5AqsYzgB5pP5EDQDLjb5iYjyzft7b5rVg0iOCKc8XuRevUAfkcYg16eKk87REv0GC8mytqJSddU0e40N9TRk3kAvyQLWdoe3bS5XCR30HiSdf66gdyzPbAEin9G%2F%2BEzM2Erfob8QxlCPPyh7TbWdQTsHflszH3ElwDbG6Y%2BUwErFJWU3PaU7YJx6G%2FJ3xrXRdVaWD%2BoQDk99DE9UdT5CkFMJ%2Frz8kGOqUB3I5Ogqi7hhkldu%2Be7k6QEWDy5Qg2mvYwR8zFfo6XotvlvrK1lFWauxD44AfA0byGOM0%2BjyAN6eApnDv4Fhf%2FfvHmNQQJDd0f35OUWYzwen%2BmPVPDy9BXEarJlEucoNwsORsJHDAhMTsO9l%2FS8IM3RHt5HrVI4k4L4o6Ba4a8dLwi2fB5bf395pP1p5JQtI4zIJ5VdGm6EiLWLpzcHEUYDUjHsOHJ&X-Amz-Signature=9e96ede73376d94a64df6706ea2c28eed09d160fc80f48ae4e6b715c0a37d0fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

