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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLFWO4WS%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T131954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCujQz4qnEfB0sLWtIVr5KUd9H6%2BedDsY%2FzBaSMoshmawIhAIXzjDDhQ7LJIp98cnLlF%2FQEqg%2Fke5yTHbsFVwcMf8B9KogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwjDVDMvZbd3Dcw8sIq3ANjBPPRpuJkKI5aeUeuR8jSCSZFiT8QfpAsJxNnpmbUSEWm3Y%2F0iJYRZ8jETaE1zqkW3X3R6UGtivR3WCAwm%2B%2F6L5yskpz3h%2FlbcZVDAKCRAsWxq8OpX%2BYKDgGksO%2BowGcaVJtQ%2FOLIbmMtHxxc9qr1KVYsqXKKJ09BktdwaI9kiilScjct9XadGFS3eGFOKjIkwx92msD6J%2FH8o3%2Fa%2FQyNE9LVwWSCrAq24w5x7IJwkHXGFjbYd%2BFO9FPpi2BRDFkVomTY4kUanifu88Ua65ibVPCensuXsppzn0YGnNzJl%2Faj4aFpHsFS5qXKuAbW1FuNCZTJyo3S1v%2B7J3AWO7HrsoU9pm3p%2BkC3RDcNDmFdnbYRNz0fvr7dMyykEjFCOrkK71KJroeECrwI6akgtbGNZCTykC6Ysr2OER2zL5jutFwYrD2AYZdC%2B5uN3k2vCl4vlAGRC6SQdpLHXnp2R0hAZvx8THiQ2weoxICHrQfcxolbmvb1%2BLcfs4BTQXF3dG9eX2bCOulAlvuwS%2Fc8JzMyTEnX%2FmE%2FAreC2pR4EfG4Afvm4rvo7DtkRRhzfT85YKOf0H6DG3ka4eUEpPHjYTmReJWwtFK8WKOKCS%2F%2F34CpdXYI3HE01hOZ3wq%2FITCLmtXJBjqkAUn6VE%2BRaOi739xpCcyKIxtXJl7w6g3ETiF8qJ24fJPq024H7lHXCwEf2Es6MKLFyaaAb3kjS%2F6%2FJfihFFpTkIlKdHlCjVB5i7SMj%2FBCPHb4lxXXT0IQ%2FsVTZwLRtjOBSS8ThzeLfGV%2FxIoSD3BjnguAuBU%2FJ2B8R16e7jtw2B0AwcSPYYXZS85cs3d75CWrsRcjGM88%2BzXPsUce6WOTgrp3Fpi0&X-Amz-Signature=4694d7c7afc1a403a50577206e6554cdece584897d2a7ac65996b9b821455a7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S55XMV5L%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T131954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCoSvIY2V0TXHlUdY%2FBcdMRhyMPenf1SLjuM2BXtWqEQIhAIuyxqS%2FBHWuIuGM6A0jV8QQkmyvQaFPL79ySzxuaKMhKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxiUO89O6PqyE5FsC4q3AMlDp9wni09U4RBSX9JYtLlHZyvgo3O9PcleYWoyo2%2BoIVhpq7BdjM73NNuc1yDFPyE1O75avsSn2lM1eFT0qg8cbCnC61LcbiOymLBSD9W7nRfhyBzWtRR0D9Aaz5a2zF8cdZszyUGiHy0ZLmmjfnMGqTdUJu3eSkuFgjLJJPayNR64XGnaYnhDcpPJmSqAOD57aRnQACd5mgQQyXDUsxM4oX%2BX%2FEKTH%2Fn0g6xLzxKsO%2By7UyraaatuwUEYenSW99Ei7kDE0nZdKhNeQG16Q5N%2BjCY2x%2FWChHjWjVnnUPVxRETUxwtKi5aC7LkdWlb76CLIYkhMGrFsNSZu14ys6kpF%2BS22GdPQY7BGp8mwvpv%2Fu15J4WK5r3OQJVUIv0GLtKPcoEKUUPIPoGnjleHfHJkC0GOtN8rds59s%2FRZTAwseMa0X%2FY1cdiSIF6faeThDvWE9u1gqvex9lcQRiTmelTGLzLjopbI0kRummq7DciQPvhg8yZ8D4yW19hzze7eDoytAaocA5SHtDFDGA6BbMuLiD9yocgPTXwRrtBCXEQzS0GkxPetnK2NVoBa98K6Ks9PQNg5D2KAdMyuj04ecdRojbH3FY6%2BJrWZJtyUwavXJL2VrTt6p%2FYFJ80ZtDDMmtXJBjqkAY9Kl35LlX4ihxb29%2BvpmHmHxSpvJEv0b3md4PxidZNjc8vT0zJ0COKU5Khv6UDGnkKxwroNOxfuKuIEC3rMapcqfz3%2FY0jDdVPyEMsCeqaBYoPMGg2NCDVHYXcQ4woDPwBx8SipLFcrMXWWBtpekGoqMoVgAEY6g52%2BFLdNv70H%2BJ9GbccAleO72uZa8ostldGXcxHFqRSXLP21YVVSonhyClS%2F&X-Amz-Signature=ca11c7172bae18e237f9a36e2b711ee922c2e0c21e43b6f79aa3f6a576b6e4cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

