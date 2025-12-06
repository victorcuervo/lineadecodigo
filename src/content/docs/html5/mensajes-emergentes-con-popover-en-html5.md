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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHSMBA5P%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T230100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIErEhaWuWN3RtrM50CM39XbJ1xaqVqtyXbGeatFEKCaLAiEAgS3c8IVjN6CgVeD5wA51H%2BJhHrPQMMF3KwHA1adM4zYq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDLvjpWBYYJ0I0ELIGircA81KLCkzdvVcyW7unzn0Fko8IvPvZ%2FLu54%2BDV6vlHXGLEGAJ1gEM4iggZnsp5NZVM7QE7nz0koxFGKlWBr7V4r2Dvz%2FdRxnCFiNg%2FzsgPRcRQRmOst24rJYhyrH0O2iFyyLeoc%2Bf4FbrNYYBAtDKOySV0QGCFXF2UjYCLMNGBip9au0%2FTzVDKb8ltUDsPtiFYPUHrKYtT9O%2B5sICO4EJla%2F5rHoCVhVhPhZA%2B54POrXjEo6vO3RdnpE9xNB%2BtcKzYBaGx%2BZ8byzWVI1I8gIxfmD1zUBdYbuuQoQEJsY%2Bvde5lYb%2Fivw%2FJAbGHmWWoM9iOfr7%2FYvQv%2BQ4xp19FeCSFSDdL6miVzzLzqgEXJiwryMr%2F0XJ%2BApVIpih%2Bo%2F9xBN46Q%2FzDNd9r%2B4thrNOHvr5Z%2FtKengHbWeo3ucBzTpHsLmsGV2WpDC%2Br9euU243Flj2hdJ12PSgBcKvGY60EKlZyK4upaZiRR%2BqU5PfW64zSp5PtDQs6qbRYLAUlcLwlzaa0CS46mAXpF3n5C6PY0ZOHp9VmtvdV3SPNAKEPio4Gyk5A5evANGYSQsC4KmxTA5DbpKFQn3berYZNlwuhYTe91VCk7r1cT9O8l804SpEGJ9Ys8UZt9UHNtqVmPeAMLLT0skGOqUBjdP%2BM12LIELpHucrFPd5uBlKmIVnXK0N16w6yhe5OtKXRCh9CtNK3n1jIxkChhJX920IDCfTIIBFBJpSBe2zuFs5dG0Mx7WpJYUZe1iMpm5kYunP4rMZ0qJd9dE9U9Vrg%2FTdSH%2Bs6CiMLNq4DkBOIY03%2FVbsLNg%2B7OQXvM1eus5sBf%2BeiSi5Igz%2BUirZ7d%2B2rcPm9Y%2F0FHaThFNX%2FAT5YzxO%2F71w&X-Amz-Signature=1f25e2865709c8b9fbc80e7decc9355614dc765848827aeea2ae20ac4cd781ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWRKRYEV%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T230059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHp2srQFWGw7VdHAydift5h3TCBQmZW5mYGuh3otiY3gIhAMGQguv7ykp6STdIKM25SSUuk%2BlnLuR4JN2WuWpXlPgzKv8DCH8QABoMNjM3NDIzMTgzODA1Igx8B5a7rUpHWTFc9gQq3APKKL3Z4cm7q4JOFuXlUZnN0jt5IRGP6hbWrCCnYB78DexAgwM0gsCjtbY5f1qB1bWoGzIhlvVNXIQIw4aEK93VT%2Ba6fqz4hy3oAy%2FZy6TSoHL7%2FtEZHweO6LDLTN0orfew9CtKvfQFR9LeNpbC9TZ%2BhtvVDFv9js39v4EdlHgMA8m%2BnM0tyXjIhEdIYqhQPA94w0afn5yQ9ejhh1YHHS%2FRICu7O%2B9yzjtSxMUCDl6MlTgpiZ1Jgluj%2Fkx%2FOuy6MwsIFmF8eMcin5vbOy2Ns52s8%2Fd3wfsYm49iJZUtCHCYNKtk6ZMxP5DrPbF6Wpgm1%2B7%2BeLK%2BxxhyQutIc%2BYQybXHoTAoerdVItmhcosyFb6OCJEbEVBKcoAv7MwlcJ4V7sEur6dOv6BZO9zMFSZgjtLA69U01EtqeYt5spEdlV7mVkxAEH3C65R%2BTHHbsJzsja9ZPf8wJlPvJTpAUWugpgxuRpCr6BycuFGWD9IzzSq1bE6x401zK%2BNX3BDe2Sn86fEcQLTXlzV5mHMmBao3s3o9taK9nUREXOgxZ4%2Fggsbe8Ovu6vje8SDq33v5jP5lVvGO2f72esoufsXwVgU7prAmKeD5QgS8BurSKly2GYDax3hw2mMKustpc6NPQjDT1NLJBjqkAa%2FrPC4pPoPAoOzxMZj%2F2gcqyLwDGY%2BzAgeKF0c%2BT9MpBULgo8Mq8ch7Hq1uqVyNmD4lU7tppPwHGaGSE8TsPl9hT6wVgkUx7QJ8C1hxpUgv82B9tOtt6arC7OBKdbkFKeBGYc0kQeIgWGxZGQaaaeYV3AaUtRLhT7CJ02K3Mz8EkWr%2BcJ%2F9rv6RAahJyvEApoMUk5%2FLats0ug7c7EUfC%2BYwCpib&X-Amz-Signature=1919345d27d1de6a9a3f5cf517e0ea8d8c7cf8a2ac8aa5f4fbf2fa0f1f2ec907&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

