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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2JTGMMO%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T175910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDsXGbM46oALNFUQ5ylu9ctwsJ7TwezifHF1FXVKl5JEQIgVQqFxdt08vALnVLvkULzYeVHe7C6iWFvkQaHczcW1mMqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPbxg%2BgQAa7wkS6AHircA79GwuUC56kxEUGZP2JIlKz55pVbweWfir5mZhHzKmV3nDZfi4WgBhZK%2Fu82gUyp93aTbVI4fJKtLhmUOMFG1qDu4y7E6CjB5YFWX%2FLvJX0evg1VbaKiz0pIH8Ztm10MgmloAmX60rl3E91gJwXKUju7EpmygswX4n71k2fwCVAEGtU3QvYi3I97eN%2FYMYx6R2CyxOXuUGOo0CE4KnEgQPijaLN7InDcP03n3AvIb%2B2as3ZqmE27U2h7xiT%2F0hNH0IRpCym%2BSNMnYpzPYCkjgwtSXHHkI1MXVBrby%2BoSceZa%2B6y2C7CJ2YLXb8Wx86Gr3npxi8KwXzam0Y79xMsq5j7ZBG9KrgR4EfHwp4ykXKRtyVy1Vv8D1Utx4oY08ADhH3arIX%2BgWlC%2FNcmSjGJcqRC4d%2FvvaMHzVeLqUppDG93Xu4F%2FV3ujYVEQCCy1%2B6A28Xu%2BlO7IubZMUwINKD8szoTo5Ja9XjoBbak0O0P9d4enoDb%2BKNZQktiv7pxyWEx0PHXRTYZePraNg8sGdIdbl11BwKUGbXzXcDkbgCaJc4zt%2Fhbkj%2B32ycMbiU5DnFYnTGXe49vZ3g5E8xIjChN5f82jETNN%2FqGkpIM9mmZfFHERVr98rVf95gkuFV5VMNC51skGOqUBi98M30w%2Bd%2Fds%2BLznS8V307v8A2fNLKxNHX8aogFOykXswYt6JJC1fQkFxI0q46zyNQqeql3CPKUVK2KTPuGuH1Wt5fETpw5FAqwEVnAgQ6A014isEdpn4xS4NgF0se5emM%2B%2BjMhDZdpHT7iAn4lmZmSH5hXbxOYxJ5XokpOXMpNh4ByuFU8%2B3laorkYDq4YrikuhRz929SxZbYIK18wHNymJ3ZpM&X-Amz-Signature=aef85cace62bd957d84bf5fa1736e79295f3863ffedef8ea4ad1f73f0af043e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GRRV3T7%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T175910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFU3b48HUzWBcZT3N%2Fv0eICmFXcKhJ47Vh1JlioXpgJWAiB2P3qpWGRbX6WFGYKkJrL8HLvrXXRS3cvgxU16YYbZNiqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtvBkv7CRziaU4qeQKtwDVx%2FjGanMak9Nl3qOhCKX8F%2FjkmM9HWiPcGXjvJDG7X0BpNr0cjp1omNIhNK5WYAsyA2mqVpTk4DhJNhe8AFt8k2uTnRC0u73wafBqZK%2FCaSYuOpsUJBICzCt2phOzHxf8TFbWwA2ghi0hTjSEMv9IDSfQtwe0voYcjyGCaPcX2XfTD18GpUD%2Bl5e%2F%2Fkqx%2BbxECa%2FmU99f1%2BbxWrEHPeNqvIMUzHNOVwHTboMLo0XEt8%2BqsK%2F0aPPVNzqLNyx097NbNpJg2VY6R0BeRQELwSooK7dM3Ogr2GWCMaPhiEI27NH8IUw1JdQ2TfXZqZvoF7SLpNM5hgWWgVacVLTBIPndRaNBmX5VvDx%2F2LkDF4J0ZMqkiFzHmmZjeAJU%2FKlfnDqBhI28ET3YAcPusOqcMwOOEQbHXzviasOrPAhyZ0tbDEwX9SPYuTgve%2FeyqEHHkGYWk0psKRsjTiYmM1F0DOGyApA6aQLmbaCVUDyyWh3tLkI4jkMZKBt1YPJUOukBiQnwWrE6WacG1MaXs0GtvITXXYrRkkcTa%2FDpR45c51IRd8SYoExB11Osp3%2BDHj9mIIkmua6C8uCBIGx%2Fi%2BXV6Ii58FV6hx%2FRdkCzKccxU6bFrPV%2FHmFYdi1GDGeOjow07%2FWyQY6pgF5HBOILg77x9w8AwOenNCTRVV4VzgnUHivUXnTfamWAeoN9BIVzmqPeLqTwOVULK0zRaybNaZTrBZqXGUaUWTP6uvfRRfjso5kDrWbOn3s2EiDL3prdhhjkSU1kr7ypNueUkECIz7AmOSalDYE4vhDkpni1CMutSb%2FRf1i70TU6dgxWNxFV1KrdsiRd%2BHt%2BRR5c1LfYHDZCdzR9MrT2owejI5GR68e&X-Amz-Signature=01b11db182ba2627c4fe9cf90b96b081579cd257455fad19e95df3750fc7f44a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

