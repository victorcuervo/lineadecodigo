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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R34VMEEW%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T005811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQDqKIxNbTDhs04K6se2E3GVwOiQcq%2Bo1PlgOvGG7v61KwIgPJfkZSMCNGZx1DIAiI0JLglTBKzWd34jAT%2FCf%2FHsUYsq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDGDKTFcQGB7obNbfOSrcA8BLid%2BAx4TljGT9kAK09UDke5ZOWPUlvtvtzGBTzLSBlogsHsAYv%2BGsZToRcunheOoTH%2B%2FRvquKxwZo%2BRrNWMgb53siZKZBN9%2BUpNAuRehUdxMxzqhh4nYPqmr3p6pJCsx4pbzMTF5rwJtUFoz5orOtIUiUBAOet3BW6KBC66BtJ0Zha1wi%2B3edmbIeLWii6d3AWTXT%2BnAbKB4M6ox6%2FQsntXNBEgEbJQkYkZi4x4jPtifTmkzcHpoIW4dMAdJ%2FQqvjfKwpA0n1zR18etOHRmqBAQe%2F%2FsTB6t1KnPJ8CGAkaajaLtco2D56gNbkspw3LgG4Zs9qywstZzpuGi%2F58vcZNe%2BsJCtirIL9KvTggHGJIgs4CABHOgU28Nh%2FCP6oSUNWw1b4HsqhRo0funzIZq%2FD87huCCxJyfyp5UAbdxnQBmNqxrrnMcfSJWfatk1mVbkvE%2BXDB6aWm3PxsCLNQRoj2RN8b2Pw4qD7XKNyRjL2tybRKPhO%2Fo7LxpvftjFOc3XWEJuGvgk%2BJHBF6EUU6gDBLyyVDoezn1RduVdoonvtcJ99Nm%2BFVkq0XRCvBrlLOKvKmEMapgMqiAKtEgv%2FNs5ir0hsB1uIN32s1o%2F0arTXc1miSXjDHGA%2BTPsyMI%2B0w8kGOqUBEuK4TjM527fHgi%2Bzdp6TJx%2BZ0Fmv1KKm9vjSHOtDjCrL%2BGErZb4WjuTrbcianEx8eQA7Fk7IdzPPvRod3tOkFXtILuEwP2oFu%2BGrNbjzqSjlgqv9nym1%2FoyAVSpQB%2BRUrkjQ6GkeyQ7YT03XoMSiK74Gqd%2F53RVvM%2Bo%2F%2BuyqYhiNv4xN0lsqhNr76dZloWOtW07SCPj%2Ft2Cjt8NZN7BWmxuip58%2F&X-Amz-Signature=6064866da36e9ba48b1c8b499a8f5d9b9f8bad97402212c4fc564ed31a6f233c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5WTSNEA%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T005811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIEoQ%2BfOycMI0KoE1gA6LlVKsKCpHJ6kj68uNtOuLAVR4AiEAv4YyT7VOkVzKzqIKWqv8aSp353zXkuDPFcmOb9yo9x0q%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDKJ6Uq1W9uu%2FCpzT3ircAwqyfRVIAFxcUuyTE3kDECgommz0zZ4U6AIJjuRPRj6bHhjpzjAVuJJvFFhNgCYzXtMflGw2rqsS5dWYNCWxXDXLxQrcJV5YZu9TudqJqsdv%2B1w9J9y1QfltGqkaTbsEHcf1SXQD7JwTpvrb1N0XLDkVq7bzBQBqhfafA%2FBl0GgZz47yc%2Bud3EECkHAwYiMacOElcU%2Fsp9%2F6JNJUjN%2BVORsd2xUqStU7VJCeJrp2BpgSVhzJ%2FZTFcx4%2FshZlZ9RFc4vQYtIkXVraDdzG8iC0adbYpl1s%2FZY9npZnRojq6DhRFcDZY5wSJftVQyzO6iPNJbIcF3uIXZvocDmbUaCc5byP7NZhq%2B0WXLJmsRv0f9QHmCj4NakJK6lZUTKoKnXIsoT%2BwqyWfvIrFuoyOd3HfOcyxXnSv17umGQI04BdTHKU3S7FiDfmkXIrOmVmqY4NhcckgDTgHMb5Y2TB%2B50NJpXUDW8EoO2VCgd9PNNgvKAlBz0iwZgAGAB3c2cCoY7TLUQ2bRfAWo9C%2Ft0N34%2FcnEjrBTTbLN6rltF0Dkb5D04SRIQCEPH7o0FGob1vfle8qOOWTK4lk1mKdA2E%2F4JP4RCLsca8MnLupiGv9cMF0DyTzs122mqsAfhtHAAvMIu1w8kGOqUB1Z7hv4du59zkk0XPGIukr0Clk1Nt%2F7bUeOkYtLV0HxH50O7A9qUZ3VZIh3X%2B%2FpjX1l6D8vk1GJGmvpO%2BYSzgSZT9TV8QDHHyTRKD5hetRMgdavBm9rHqMFKaUWk7W71s2SXe4CG0EzE5zb5VWaF6I3dVb5WeNM%2FWgsGKmCOXCHGW8gxmNd5UwEBfOblczg4GD8MTRi01Py3zAKrjoapEizxi6gIu&X-Amz-Signature=c21733315cc5a2722dfae45ac07344f98a9ebcee1902cd620e8024fc15bc6412&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

