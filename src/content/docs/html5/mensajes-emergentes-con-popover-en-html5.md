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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBSB5VJG%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T132120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIGHHVyCh9wufm6dGm3X72AFg37AZxZs7B7wxzGomlwWRAiEAotIU99UtQL1x66gC1gdaSPvnULPcwbl%2FN1bNXf3%2FBZYq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDDIu4Ve%2BUOnNKDDIryrcA3xNv2Z9CVmXvbcCX7l7aSSyEdHngX3T24aG1ZQthnEco2%2FMDX5%2FQo1YjPVjAoVGjblhgyb9PLYaACclp2QOoDNLj2CpOztp1qipIDjJgPff1rhy3EwplIN0JPaX%2B0ruzC1KxC8uJvkSzS3mx4voJ5MpeUeTd40x5nvNXRcm4ut6JMyETBRsb9OR7U8SkyhBbOhkb5modblzUFSuonTMCA4ClWffSoK0%2B9Q7dx3QT%2FQl4z65NfNEkl1UY4gYkn29GYki0i6%2BiDGHJRK6aUDTTBhIQViKJ%2B%2Fdrq1ybGKIPk%2FKmCbAfn8xLZndR3LQ7VYWVuGZSlKZirnB2W0f4zYwOXII40Vf6%2Fu489ymdVS5lvnl1S3nWMyMv%2BOIL2%2F8joPpU3UrV4J2Uv2Guv5o67x51zOXzsOp95sZhGjVpK8RBPFh9x8eKgNIPQ2s7AEe5xNIkGytqsznyptwMmzf99qqqk0TJC5jzzBV6TR1cPyQJYin7w%2F5RxzFgwoEFTIEQKahWRf4mLA50PPWPQht4Vb%2FrnyhJ1dx3wiy3W0klBjiHVhxxsvjt817Awzd0sGClPZuJAvc1QJE0oUUwKHy3HaI893PWSWcoqSG3ZZCuCVe%2FHE77cKbG2lQhEu2fYq1MMmDxskGOqUBenxwxRWmXhcXzJQuDiIpqtqyzgmiwvTopqvZmphxUFMAE6k%2F2Zl42JnloS%2Fy7nqI4cQPlCEybZ2xOTYWfQy1hO%2Bn4kSfSSvH3aiDiMZzNFR185kmNmBbT0gDevqwXH6YQKwTbuv5vHvUQZKuiaGDwVRgt9DLXy5ZkpOHuR4LnhwD7D0m%2BogdiHyd3BXysBosmj2ip5FpnzBMbjNGd6hUnf4830Xo&X-Amz-Signature=25ac116ac39ee41a63013b384e26a7186b322061b6bb3778e3805157e1a24954&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YP5TLTY%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T132120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIB9WLVc8R3PuF8VO84uPibFbCapYxu%2FHv2pQ6Y57%2FLz6AiEA7zN6SvRK3a7Ntd138PPq34FUPrDrhy2c1NHpFS4L%2Fkwq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDKW4kp1uVRwAjdSYxCrcA7XNm%2FiWwz%2BXj84yj%2FrojVdsGKohcNVPhN9EbiVPVk7J3P%2F%2FZaYzgLyizX%2B0LUwfj49OceZFa5GFg60%2ByCUOQDrskWfxUjgXd3uEakxr1%2Fhh3tlz8zOF65XlH0DMIa9TQ3Vy8eM8Bcxq3ov7GpnoQjrHDeIED5cNNumcSzgh4aqowyuM5d9A5IZVC07eZSicXwwz3FRW0Z5Y8MASo0c6xQZRjt8kYay1pil%2FxZq9LgFAIXeR3R3ZQMvnKMA4zy4W6%2F8uQN%2FzfHqpgrNIMGJalkfeq2Y%2FDhFUGGM17LWLYCBhb3etpawdVoK4RBWKOmI%2B%2FSdIFHrKtERAWuOYwzblhsUk5%2FfMIG50BcEpfCiRCUDEuTZiLwBMUdeWUgmcAKeXOFK74qfjTRNPWLCmT%2BUFZvUSwfPSfySqWx0KdIMai5ErABUddDEBIoA3hjAvutGgGY8Jv59vH7XXBvVXDSU%2BOQBVPzLY1RK07fHtEKbZIvVqLEnnqlebJK6JVR3ECkkZM9G7fvurb4NPnfGLW7troPqClCy%2Bs%2BkfKwNRCZ6C8V4e5D2I%2B4GBGy%2B3i%2B1P%2BCXMo23yRfm63yXWKmMv1nd6ZLfBReP66451sEnD41JdKcgxmE3JaloI7fJ2fg9AMMyDxskGOqUBKVa0dmu6c9i0ekgoEPLOkxAVvlYT9%2FmKcF4mLHlG92ugd0j33we0cHFPMfBpnYRXeV0upEr8N9TYuKNG%2Bq8D6uOkpKSSJVkoAvmZ1G7hMxSQp81QmUBXToTcKhrlNIeAQVjR01BbFHnfKvmcLK9ihfPMcz50OH4KqDgw4OPrHsLx8f3Nc%2BEJwhPuk44hlNB%2BxlIHWv0K92hOoxjWnfzGDCpL9gqQ&X-Amz-Signature=ee37b4ea7c6f186976ef564c78ece4d18ebcbce5d9cd879dd648c34d14722624&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

