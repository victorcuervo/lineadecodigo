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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663W44AYEF%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T212004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICBno6L8lUSSlB3S%2BQSfm4Xe6zU6GWC4S0B6V%2FFcdD66AiEA4gqZEggtc3dLq1XIusYgWFjn5EGfycEHJaRT6jAUDJEq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDAB3AxyA2n2nEGNXRyrcA7J3ypXwwpcVinSBunia4TaVwDEqrAktyRNEXKsUX%2BzAH8wxH1OcpzYQiqQrACd5%2FhsCL%2B9Wh%2BAr2JMaSkz%2BeXoirvUKzEap%2Ftl60wD7w5EpGE2vlH%2Bb3pdZh1N0%2FKXCTvVrDJEtgocZV5m36KQk%2FwRuIIHAMEDFwMYURpRufv0tuDwYCL8dPgXlDT01eVjrCr0s%2FC0gRAMb8HikGOGfvfix4PI5EgWeTdIt6bPqz6b%2BU1SndDBqpBVKsOXyUQO%2FaV%2F0LCL0lqLcxaAMu0b9AZADeTXDUKwUSx8yAJuouoWk6D7A8xDL4LwX4RNy7vnnk1DZ3dzJazAclvlnYn8NAk6ADlLSnm%2B0lzYifOhCLmsx6oU8I%2BzRkSQQy11NkyKgEjOPPDeUPwtrTHS6p0vxF%2FOrBcOkd8oxEmUN0Pie1Sms5w5vXtdnMHRsqRWIvMbaG4K5SNH1JP85V9sSl7fWgVpFU8s%2FzVL6ZbJ%2BZNswNPVoQKJvEdSlVgyWwGTjD0nPBjnvznFrLDy81OEpDU%2Fi2Uc%2FVKC4mZmzaIaqxz6KXATaNW%2BVPaQ9lmARDI6kZDPfpTvVbdi6Ku9AWTBEtyUj%2BtwfeOIZfmMGfRA%2FaiHpAipy6MP%2BtFtXkcmgwxW%2BMPHM0ckGOqUBxtrkYzf1nz2%2BuiiXnmzf6KBiCc%2FZrZTckMjxd5mQr4OdjWVRQ50EeIsoGfdfDEGs7seyOqMvO6WrE8H54KeV583JzDiKqIalCe%2FBHjGFqK%2FEAPPNszHPTkDB4Ap1imVDIyJ7MLosaOP62U01Hqs9JXOJAVc%2FxKCHZ%2BKkLqukC%2FykwKHtvOhZ3i5MGXNsHRMqIVI98ZOkHa1ZrRZfSv0ylb89KyoY&X-Amz-Signature=733ff06361b12fc4a1372043500f55f747e5662e20334790f74dd0c04609b31a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WX2SYIQS%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T212004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC67dKZCddMcdO7VW1QdU9%2F0RoAxljfpvtbJ3aDV1ukvAIgZssO2gdhujJlL2tiKjDZ9SaZqZyTPzo4rD3RgQg0XPgq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDMzKNvS%2FDz5qgR8HMCrcAzCBQcAli%2FnBdHoqW3xS2SH4gb3V8PSI4J%2BvQ9UBoe1ZDxYzYM2x9J4f76IST%2FxYLbxIvoTa7uAQB7%2B8epdkPAZ3SOX%2FqEpW7Cf6lA1MA8jYo3SExtsGOWc92Eou6%2BtWCZI2NzrCJ73ZhXLVXjLHqRypB%2FxCsj7KI%2FZT%2Ft3YL0A7sIWMmCxwxwvnbbHaWqKKL0X2NUUo4mmDOcbidJs4vjUCpcqpZivY1N9CJwhlGXtQZpEFgYRTaflQFU3CLob9%2B6GCWzoi%2FZedPvfoP%2FZi2ifx%2BFXqxleRDE5FOjcGFztwkGlZOH1%2BLpdXm3xmw8RxflZ3FytDLkNg3H5tqmmmrewtzTPf8QS1Y2%2BXFoikgEdrTo1gRO%2BAFb3FDTb8JzMoo3UDxczHGG%2Fna7I1%2FFTChBLDxG3p%2FKVrAUlcNZP1%2FtoH3C6F%2FeyJfdl%2BvdIfQGzSbzhIQZfnLYLmVOM5bceR2jzs8qWZ8a9fRiNSXwqQq%2BbUy%2BJveHnCB2Caxpw5nmNK5cPxz3skeH4VUWM8vhTW5AWHQ3iebYATwB%2Bs9nd1BW7BRoItTYHgxGJ3ZxQdfhWuHI6BOgSW1fnHtfDhYxCRMoSiGWXfVePBI3QJUf6QHtOSIRtS8fEUrheBLbPoMNPG0ckGOqUBWvTwG0HbhFBppa%2BU6giZZMT%2Bj4RJ%2FspOLNhHGfmYuJn%2FDA8MUX%2FMCf9bgfktKtuXGruSrFHZpvlwLiwPFAAJTn6xzXRmRMdvW2jAaEXp3XRd1zls5NZAIgFttm0baEI4wgB8%2FYJi0PDQ%2BUsEUIlR69rO0yUftqSsKQJ9ivuEP0kQrvXLFKQfkaD6uF%2FoprwwunDHsI9ZiDFZxkcIl%2B3MzvtYhiyo&X-Amz-Signature=21a4686ff427227564345b2cc814e7bc1b653ae0694afea4717e176c7d31c30f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

