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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664H5FWJ52%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T215828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPnU1XZaR%2Fbgov%2BszgI2rJWXS7zj4VooRRM5XXiuwsFgIhAKVpMa2OXkOPCNacqJNBtDWzzUDF0EWFFtZJ3SzuNKDZKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxR4wSUpK1DrZ8KbuYq3AMtAiFz0aMrzcHxj1jL0b3DkwFdESxSWP9P85vPC7l5T7NEKK8DLhJp0hTaFWZyfT9CVK7uoeBhjJJC3Ckxa9dReVAW093hCJznsKNPpS75NlkNNdApNr371yeitSBUdvbsC2t4WwQIpUdxmxDBAtTeZfrY3UpCNsLeJM83DVCuwt1cOmqMB3ozC5TWs5Vx0DFJecr5znsWnfJKOEyGFm3OUqhwMA1lQTDbMTRnL91nYvT57Ep5%2Fy6S6zAzJJzqLqH2ONXqMH8u%2F1eIQ2DwGX4i%2Bt9cLsstBpCLFePE96810VU3TNb3ApvLxILS16TMggXP42TzXlsP89XRuXDn7rP4O0FNQOnvQ56lEHJXz2XJ5BsgZbfFl0fJ6UzOekPC9CWuAHfBSOaQcYeqvNx2Yuei68z1rMlfgcLyKwHD8URt1h4ao3msTDrNYFfYz1IjH%2FLNc%2BgRKopt9doPyMc1kD1xMpX4DB7fkuPL0fMZ3KAH06oSs1acpdjVx3z%2BxeQ0lXB7avCAvQ6dSY2N%2BMyGqd%2BBgkw7vyNRjn5zDEEzIyKfD3oJjsLDwxKu5x%2BqAYd2HY4cnSTeW69Kth2U5ud%2FYyfUlYgK%2Fcu6BhDtofzbb7gR0DJW9o7TpD51960mdzC9gN3JBjqkAe1UpAKvtLXaZhUfTOM%2BDEAPWRqz4ItRltHKVyUwo6rx0SnZDeDArm3gCLATx1LQHboXfLhX1UovlVKyrDqMttErQ6xC5g3%2FgWxgMiGi366oCpQ6G2to4fRqBoyVj1L9Bp5dfK5RiKyTkyQhN9Al%2FQhQ4kOL7CmCVDcHmYmghFbqywXZgWO1kYJBviU%2F8CtBWDQB08i8r7s1pgaYWRra1RZajRZz&X-Amz-Signature=27de4aefb4467df3134c85c326aa4e9edac3b0bb572fe27f5058564db1ed1e00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UI6EU2F5%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T215828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH7WiHKv2eg5a6uED8gpHXsAwRIAls9wF6QFMm8dwoo%2BAiAPZkJd4k%2BeH3nWvh93pov5G0C02r6itiRtrmZYYJDyySqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeOD2Ztiz0t%2FAjlA4KtwDA2yty1ncBpX8XhJUkrLIqIg4y4Bhdu4NRdCOVGdPyZj9IVC7tH8zNUPbUEZw6k4EfteqyakRGv04MiGUz164h%2BqCg13V9ix%2Bd0FS4fINPFBPjvl2PnDgQoXPVsAgBKC6gSV9TLF5Vf9Vs0KR9NXRiamPxFq4vy8NxX5xI1JMbfjYt1PL3ESye5LZT87VUgw9L0zH0fnmAKW9e5TKScLgNGxDXENGkVmLlW167tQFoQVVkMBnlR9wG0IBy0E7I2c4j33MqPDPV3At8L6c8gcA2FcScv173DwgOs5IV4BoxWA0OUpv%2Fr24hWsAZVdzw0MkLqwesjiWg4LWiYZb35BkfFwdrCEUhiqlxjMaWpuHSRtz7OXOdHwNxOgRnoGiQo6puYD%2FHfOQdUxYSR%2Bf7dfQoYCkr2gHYDVdBh5bBJX0SAFe4ULZ5O65sKuiHMcSv3C9AT3Sk2%2BikAI%2B6GlotuaghhbHs%2BBkDy7lL6xuZ9TvXzeV0OfRw23HykzjaW%2BaOFrdkjpX6c1%2B%2BZ0IIUMKkWRlqj%2FSCrB5skAxprFOqorBdVdeKQcTfv54Z5dp7oVfNa2mvjeUZG6g2bcN8Db3bQNBla%2Fo%2BZrDYlNYJgsPe6cO9k5pWePOjcmQ8cjVUmcw6%2F%2FcyQY6pgFQt6wz0%2FecTKxjexWL43ufqgFEFsMf5mUkLVmwsVCaN5noa7vAa2MO2%2B%2FV2EWHjnAOWHxevfeLIU0h%2FnP31WWMWJhO1M%2F%2F8aQ3zoSJMCMx6ryvqBTZBjl5yCjnU5P0lj615GQk4ULOaPXwkmQ2sxHnbZx9%2FXKhvZQEnI5C69DtWNeE6TLMWd1Zgw00rnOSsvhwMBivwxYyZHyJD1IonDxZvZl8r7fR&X-Amz-Signature=8d15ff8f421e84797f02af4ceff54d0c80acfab6874f11ea82b1da524e4c8010&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

