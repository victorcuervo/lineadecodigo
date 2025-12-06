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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXTBLG5Z%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T023905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCefMJvGAvk8zanO3wA1BZIGyWejQDqFYyxyaZUBVd0LgIgH2%2Fl1pbAjMqIbl1kLT5DHiKDk0j7FuU3cTbVHqG9mAAq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDF725uiPIt2MkCYtyircAyfh2x9mg6b%2B8i37zgIdLlY%2Bi3Y1UsTWi%2BRTfe323k0kTQS%2Fy3DJgVRtROCCZA9B621ntEfevRuDAhJowvHBwQ0AqLkw12Fd3MrEJfhkds4M%2B2TPCxkwtjUjICMlLW5XApTXH3lqNbfvW2EJGaiu5QuuCG8awxz%2B1f24vEG1PqUMyjmcUczE6BZhDhm1ClmPC6qNs30u3PcclWTPD5PFWUpT2b4hPDZBR%2BiUopimGf2Au%2B%2FTOzp3zBWtVZ5jeikYobbE9P4N59gMlk4SuWdhKjp9y%2F8DduHrUfEz43a%2FBlbbYjs%2FIzVsWe48u8T2%2BZeUzhF5m9fxUDlJnNxoKgauZMeqpQ6DixpO68sNQvYUsGyiwN8i5JA5r4Fp3OR%2Fn%2BPKpYAKLUO6jviTSFdeoTwOWmd2xaDo8pSElVhS930gUdCP%2FlApLCz8G7pwq947AzdvShC7iyP%2FWVPkeym4iUmHN7UMCoL4Xlgk4K56kcPzM0aB3KLgyl8F3IGrnOW%2BLeXTabp10oA28INSkIa21OeNMWQ3u7GgWRcATO%2BUf4CvhonMVoitESHXl1cRK9kZpDxPWH3V3iiIIWklqbwwnY336pdvnGXlVe7xOLp%2B0npUnbmVRja7u%2Blxt6r7qe7%2BMP6nzskGOqUBsIbfbD0PXJdFoGcoKA3J0zhU0KYK6ASdCNjojEvKtBVDNYTfgniBTAUEYU7R%2FbNNonCIHL62DMCq9AR%2Fflj7ytVUR2tL8o78AovtsZvxmvdB8%2B6QiwjIl8Tzp0xCiVIr7OoOcvflo5wUN3J65AdPMfHnjXj%2Fzw6R8v%2BJLVkvVei2EM5NInfXDfwj%2BaKeJKhr3WWrvQ6sSPf4%2F2zNA4pKuIQ8lwoM&X-Amz-Signature=68db6a5b78c915664b46deaa2d0d4ee8960737413f7e02667dc0524dda65fa19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RVMTFUI%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T023904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpp674RnMVVK9TEABK0PhVnOkbtL981eF2Ntri8pTucgIhALR6Sa1teaFufQNOrFkQ7go66MYV%2Bkagk3cZUqLsZkjtKv8DCGwQABoMNjM3NDIzMTgzODA1Igy2oQprfmEmcXicA4Qq3ANh4C%2BLRms9xZub3fHmUwlA2avhqXKcvKHv4mpAAp4efFkwsHAiaC4AyALvLwijd20L3yuUZtxcf2dQnyKDIhs1tW05Btx4TQgFp1tm%2FSi2ou4x1%2B2mTS%2FVdjO34GjYJ1SXhSYCBfq%2BAvx1%2FNYtb4ZSV647UomYfwC7ya5PDtm4RD9DrNTTW1CUNGBhhOQLQn1uUUkdafcqXmmHi95R%2B54wWUN%2FG2riImg7JBL9FpPRgDOqHOfl04iSzN8bi1nW2FhER0Ci0Y2W7uo7cStb82Wz%2BrW4gtaaYnDbD7toyDCMe1u66B7hxQcAX76U7fWzIY7xzgQFWDaf3hzxzROVnJ6mAEHYBY6qTPYx3mViiCWulKUal3WAYKILVHRRcUruMeOWIC0sULRzrVV0yWgQNLSruShawCHdWApZdaxr9hRIQqgiSfi4ssXg1dAHaFUPFQ97wlyQeDeM8BqUI%2FmxNn9uWnAidXRGxnrInDRo2AfdebHfKJXoyM8TgrZ0%2BHqB8GKg2dyiFQRtTUREHJXwgJGoON6PavGHqhLXTUdtpOwkzbEmDn9vDsO9Hk5joLL8dN08XRyBY2d11epFnKZ0Qw3OFb5KY6WtAK1DGwWgWsbiU5chN0zysmbaGHU25jDAp87JBjqkASIiUqWUQrffd57X02%2BEP%2BaOWZPsIkU3GPdUuSzp7%2FaWX7QRpgjmM6ZJohYY6WZWzRSExKyf5VM4ZPiMNquVkV%2Fff320oiU7mrOLuir4KtHAFEWRi1BZiwPHcJZHns2qQtXJNXLqjpAExvJ5vx%2B6QpG1RMiK51Zffv18xAYHWytDyL5P8c%2FbHq9V9WubAG2qigP%2B4q7doypBr07OmegGV5HuVKwu&X-Amz-Signature=80c2c4ecd94155e08194e9f08fee0e8adff40bae6e1d8c660afcf48e3bf4d0b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

