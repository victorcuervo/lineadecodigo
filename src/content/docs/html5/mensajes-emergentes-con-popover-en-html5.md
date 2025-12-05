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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DZUGZJA%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T220333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICCqUVyt%2BkOZh%2FRXhvbvAt7lJ8wdpbZdAgFpJCnZ5CkNAiAS29MIj16%2B%2FML8cW%2FgR33sJ0oJIZFqGsnyL75IWJ0gzCr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMa0RzHLP4%2FEnnjLvoKtwDOnxUmR9yTDLWgHLWU7wJz1s3M6MQzmKJuW0KpqqDIsU%2Frqg5a4KJEv2H3QJHLdC%2BTIROVzZWk8g7eEgw15LKSWM26W6IqTu%2B6pjXqLjI%2FUOGQOkU0YEknRs41BdJRzXTw3uRHYloE2aOfxTvvaQ2%2Brji6wR6CUi8CUgPCjzRV6EFu97oXIqLoxy9F%2F8XbAkg2672f6FyrD%2BwIP8mPFs0OkMmFnwewzCDsXLR8Z8aVimiOha8IMezWoghNaJfghhpqiut5l2AmAKfudH4EgMx4%2B17p7zX34MqvRlUyt8Zl5pKYB97xptFxb99hypgo%2BdkuYPZj1zGFSENNzGup0so1AJD0g%2F%2BbNu37b39dpAvxm%2FZzmL3u4eKJSgp3mphErLilJgAahDsB34vWHYQQ73UHWAo9dQnuyREHqaQKRgNTWYvlsE8XRotC%2F1rhSPvY7AmNuD7fQb%2BK97Algz003NVdzuCM98tQBcbJOM4Ehm6FDHSRY5uGCR%2F9%2F0r5RIgEFM2UrtTzVMZHHVA%2Bq246sSDazQ57l55akAE9kqqGxvR1IqbiAagE%2BtjjePh9rMSic%2FmJuhTIrg%2BfYwH35rFuU4%2B7GYHaWNEaaMDIKe41UdtUq%2FXrbxAKT9%2B8iZMgsQwpY3NyQY6pgF8nDz8gQ0KBHQ%2FZ1bbSRUlk01qkpkeuUU59iNLsUEvO8%2Bnzu63xZxnhP6tCpIbtAxWGyuBBRsUoYBl0ArMUNBABN7QZfbCasZX8uuUaHxK8MVnLYOX%2FUXaBDTTd9QckoNT7WvLsvdQr%2BcNp5rGc1QFi5A6AxBUBIgrwwL1aa0%2FoEblDOYw2V92kg2a3yIwKBwheotoNYE%2Bf%2Ful00%2BqI4slOwBYZSZD&X-Amz-Signature=592b412b829f1c37dcf2dd8bd767e5540741537e8439723437878223c11ddc88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFZDM2MC%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T220330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCq2nQMN2cNoykE9GzoQ2I4PtqquLX5kBfZycvovyDZzQIgJclxj0oO3iYc0vV7AMiRO%2FjWV00fxeMn67Z8QZq9n7gq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDKqN2lyp7hpeWsMRgSrcA5hhoAn2ZcKgvH9ulLDRh%2FchbArXW5uRsEhrVzgGBuIxauMe%2BALJUq5UKobgAmEk%2FNwf5Knybe3Ax%2Bbx45BO6KHrejmWGjtqvkdFbUTy5LgQ2jPQyEk0XytLJ8x1zZdWm3Ev8F4pTG9FjS5lBCuENIy7U%2FJIeEL0Drs%2BkGObNj44NMxcxj0sSmhTjPkejcwm7j5S5RJsQTf4Zp4rne3HmHZoRJ%2FPh65UYyvMFxF5nHseL8pIv%2F74K7hJuJr6pIy4e5w3STB9FlYwVBhUH0J967M%2FcWWbAZoo3xNU0x4H74bjL2UyHDg1ZoeJdTbVfYVUYeaLHXVCQXa8HClDzVg1AVh5%2FrsHGRgvPTKQTDMHZ3RZKUku1IxntE7RgeN44VAF0ogbPmKGFWAABcCrg6KX5BvZARIuiiDrjbDNlhQHhT4o1jY6p9LnVT3u8i0lSyaFreMKbenr%2BTOTz53KrtS6fBsicUhfwAsS81EA95Rz6HmSzfcQW98FWkYeRFZULy8S2rUyrrTYC%2BwhAmqGrBzF9idBs6vctfe7BNiNRLZuX1bPeVReDn%2F7zpKU1SXBPLfPUt10r7%2BbMj%2B62bhXPCY6OnqGutJvl%2B17XUu7AZDsiBy2kPBDAw4Qv3PQejfbMMeQzckGOqUB5qBoB5mPIXfOV5Il5WP8kZ2CycA20jFTDA4uH24k5lq324uxkTsN32m8y%2Fw4uycWZVCUj4MhwvRtqn5Cd4OhOx%2BLyUI9a6tclb%2BgLYwm8b6nycAomZJTKDItQUTMqtZ%2BlCZxTHoSJnc4G0kbPoRR3HanmesWOKaZgTzgZE1pkamDanqy498Iynp4hl1FY53KL2WIex5oAkwP9IJk2J4pD3T5ry3J&X-Amz-Signature=f5addb05ec8f663c267a6260084929a437277020ffedfb3acbbb3d18da0e1a9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

