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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LV5S6OD%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T082510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICDQLFxNU%2F5AiLtGYD6qzWqFhp9bd%2BO%2FJfcWc4KisdJvAiEAh7ziSJBbuBL29x9a0m2%2BcEz5xXYrIEfmmoOUWxVKp%2Foq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDFo%2FKiaFY0TxU2IErCrcA%2FKmFfYu1pTTqHKGNBC9Ay0%2FHhhjdbEVEgP304Q9f%2Fvns%2BR0FpVF93d6iDuVsX9DX%2BK1kExDKRnCW%2FfIzqMUOiTYgomQmAqiIz72yXJoOCOCcsJKdtvUiGTKsfkrXaEv3tjO2gGBN8UMPPk%2BmDiRk%2FKhTgtjzuNBXGZRf2oj7wOP6VqP3kGOfILnwQcJvJzrnhDxF2fOH37v2XKHS7xqa14RNZopCZm3%2BnyZM1PH0hIl2BcCkLbPmApR7Hmkx%2B4BnCzpDUQaWckkbxm35qUWvujq5BQfQN9ndhnaVA%2FPePs74BuAxgmvAKtqCP9Komukhf2CY35yVCgR%2FwfwfIGi%2Ffe5ex5Lmm7dxH4M%2BlDExh8fjKkcRVJRBTzGXikv9eP4gbdypHPAoVlxhW33QcEcbnbgbWNYE94LcI2FZqFZIgUfJWUoMuTOA6wWh83hh9449LnTaK8%2FNZ6LtHa9LCtN1%2BJ3eKkUWbPcX%2F25q6VoZpKuZrpsng0uuiXArQq7grk5RzAtKJhEZW5Q%2BhbvGOpHjgt5XXfphinCx1z2TEGi8g6w0G8XNcvfpEAUX9aKEZRbUHPAj73Zt0g6rBRfvmO2p7Npwlmkg8tlToOPU9RlYNWTC%2FbZi5eCAau51dSnMNS8z8kGOqUB7%2FZ078DRPWmehMVZueJ7KWG8N8kbuXtBSo%2F6TMXrXerdfN%2FXMKn02OjFjR9cVPXzhnmNcpyK9S9w%2FEqxgSlhTagBagg80hUTggDOzgE1Invn%2F83WckQVLRn4bg%2BUtQFIskflEKZcRcLinga1onUQwXKKnyxktAek7VdjXdfPYEVHuMbYn3RuHzmF6T1a9l2x95TMt8wn2aOD23IPsITP%2Fvf0X2Tf&X-Amz-Signature=f7c88e4ff199eac8a7fb5114a97f06f32d6fddb32fda94c824ef10abc85907ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZGHLVZI%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T082509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDe8EHNfF32VGH%2FLPIjavoEsmMCrazmFt1T7jxNHaneoAIgVuIEKAFDb9Kd6Wh2yjdFKVESz4KbtxGTdErPBDFetrMq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDD39BXO7w8VkhrVN0CrcA%2FlZgv0FbVm50fDXOE2mzUEU%2BX7E7iaFmqum%2ByhHcUtPYK%2ByWV9RjoFU8hYFBz7qMEValmGarZVH91Sp4od5EnEF9ylPXl%2BH%2F%2BN0J%2Fw0yfIhmz1MmiT8oGjs002avaV1VzRSA9gMzVLY6vxvDDHnUZjPW2aoZfcd1xEUUoaJR2548XLwEOOoJuGbFS7oLnE8VoIcDVlAnHZiHjkc2G5nYcUTNj4KnSNIrsbJCzdKtbrQA1VLfQ5wZfyILfQgoGgXKxIJXmC4hz5b5hPzAFJ02ifXaGoS4iuFohv%2BrYs3TexCJWJ7wBVFtdPlp0gnsx3xAo6cBSk2RSwTFNba9rkO%2BgGfcFTyFsVmE2rqrnq10X6yEwDYMHTVJ5uBe0mereVHbbXdqXuDg7BQvOTDtoWrPBxf3eiOo7hfMtnze3TpdEHLTUMowMIFj37PJsK%2FUCuBVXZuWt0OY%2BP9ucWSwBbSgoYQb%2Fta1oBH%2FaTz2os8i3Y9EBOXR1QODw3XhqWGYPBh2i7fee0rISV9VG5gfGKgrfLMTt42pBplKlqHYqkfxTtYpZt0CMK52wn6TTs09GV4Fy1g2h8waodfXqBrNX6BT333lf%2BBbkSZ2Q8SlXMjJUFODYEQmceaimxsYLYoMN%2B8z8kGOqUBmyl%2BT1AXFW%2Bo55Frkphr0nxDzbVCf%2FR%2F61ltvVkgA%2FKQ5Qv4oaCLnrxBxOC%2FQDNdLUszIKRGD7IPJ301%2BYRt6QU%2FJa%2B2J4JlrgoZIEAdtHF7JLy6voVNFfbiBxlsIlJqNh%2B%2FCBpf7ynfM6f%2Blend2myNtFm0rSydGEv2mJ%2FU1hAD0Ff9JUgSoj3%2FlRDhQ07rL%2FJEicQq2oBG%2BlJcSXM0HwXXJ39F&X-Amz-Signature=5b37374fb270178b6024eece1d3c724cecaac5ff5293844b6b9f1367f8c3e885&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

