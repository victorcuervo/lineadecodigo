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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBG6MOA2%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T154724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbgPmieaPTksbcCrUyCxGLHcY1Gs2s0On0yJSmFN0WTAIhAKMmqmE076MSk8b7meTnF%2Fw2xwkWEz9hsnvcQyo7jw4VKv8DCFsQABoMNjM3NDIzMTgzODA1Igz7cic6P0r%2BF3FSlTkq3ANbBjixB8rbZHx4bCuLQ0WATGAo8H2FkmfBC1Ltwv7ApBos3TbcGbEcN8vW%2FM3o8YeCt4B3LFb3NbsSiMH92nWBpeIB46skR7SL8KSWsPxX8l8oQOx8M4h9ctsMCrat3G70bM2nAHj7fQtnAslDQyywQL7T723oVbrCjd%2Bg7%2B6GJG89lbneq9%2FzFSJEKSLF5IwhBnDVNoSpuLahA1mFlR8KgPtm863cbEcd%2BFv8bT3p%2B%2FD7ulsA3AlZvdIS%2Bh%2BsRzudVQRO5jKTxcvmhlR%2FC8DafmMm2cYmpp%2FBbZcpnPyFIDKmYBZJl2ztM1VoYuS07mjJoASz%2BkvQF1%2Bfk9%2F%2FG3tKJ%2Fj62LQXuRbn1jwM3sI95dTr6y45VUuiip658Yc%2FLa6OEmBDtZBbIMHZtkJn5ZJD1%2Fqv27tfsav%2B3PkFCuDf4cm99ERc3Uda8BcJh3OBgcTEus%2F51zCRhzY%2BXcyhlylsJptoLvyBKKqKozt5MD6Ng32NoiNLb7Rg6vIQVTj88j%2BjPw%2Bt4wgEHvaihy0a%2Fl4PfumM9RInKxVZA%2Fs3%2Fgb73ECxRBkVpBcV8CdUZFWbOwuofjTYqYQiMMfyYQvVeo8vgu0VMTxNmKChJFrxvDzidDgmf0FlB419sDimKTD81srJBjqkARzCyVINYtDZj%2BwdCwHRvFzLkZ545yeMHn0t5a1zlOBB5n3FmMfCAn6%2Fl%2B9w%2BSGqyCcIzK2hcl1qfpXYIcjAUxFVmHxV51Z4aIOdy7IUYdHsCvi0xMBEPQsEeqIWel%2BwUQBY4YVbAJO2hipW7AO3u856%2Fy059GiVmeIFXh0tIpXaKCYcZBQQJxEKtJo0Gdka5gz8xmsUHz2%2FRkmbYs5aVumhxL8h&X-Amz-Signature=7d421fc2b827b8c15040bede07227d00de41f5f1c807fdba2af9c5e5c70e88ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROLFGLOY%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T154722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDog5FHEaL4Y2S%2FkcNFuXFjTRF4VivCihg8fkayEDFtJQIhAMZrfJ4lGAKTa482qC7pSVQpIMo%2FyuBaykg4u8KtcHVCKv8DCF4QABoMNjM3NDIzMTgzODA1Igwsc0WHnHjBvFlKDSQq3AMc2bwpEm0zrmjUyKTjOQcRBjlZkaU0f8IYF16taFCPtLTkddLoyUgr6jto4sWHBKBLWhFjgSgfr%2BHCIo0kfNVpDF%2BWg7PMPNgEm8%2BYgdjS1kgCmIQNbNjNVETh7%2Ff7hT6PUNOrjsEAOmWPpG1HbNu45eOYqSdRvuv1W3aeILhMZX08bonOT9UIwflBtR8MFv7NjYPrcEELgM1hXMoywCIk6ahz0i759jhWqUkZcAqb8bl0IA8K9xjqEUx8fC4tmVMlP%2FkoecL7xNHdHnK84MpsJmihd1fWBJGK4hT0HU9rK6AnPZmrF6BVQiAnlbPmXZmmc11WVDfPIoJ8PasJtq8abxl%2B3PZpCja%2BIpLWeEGwG%2FDK%2FkWs2%2BFcs%2B0BOGx3rKHpe08K4Joh%2B3EJEidCiXE7FGJcXqTzxewmV1AV3uEb6cDpDfvf8n0hZzR5k6uXZEkyFK%2BszVlsFGJN9TBTbgcxHAWY9%2BBDNpsQOOC%2B3iK8sLu3F5R0wVXdBWhESgufUjTNgXJVsE%2BCvACcorAwRHAFy41SN5%2BQxlH6iEV3PzuJtQdCssSjvSJRxRt2bE%2BS%2FZp78MzQurAXlAjJ8I6s3FqEyxC6qEsS%2FU8eyi%2Bojhat8X3%2FlGoHEWmzbQXTUjDRssvJBjqkAfpZplk%2BDtvgdqoMvQAYyrUm8cGJwKMj2d6HpURhsKj9yzeiXyhsJY5%2B5puUbkURM1Y7L7a1AYQrzlW4EnkyxnyvX3WBmkOHmWinNO4Vr2Exj2%2F7MykI%2F4kV5w61uuUqj%2FM5V9X5jRPz6rTSrhM2VIQdmJ0g0BODk0nVKrXeIIYw90cHbMcYPFE4rmKfkqskSM6ETl53mwSYIjSnI2SvRW10wpU2&X-Amz-Signature=cb9d4e6460697669a7af29f442e1f1e99747780f564eb470e484093e8341fe27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

