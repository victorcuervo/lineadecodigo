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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGWXC3Z4%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T013611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG4idyH2tPvGOQ1C90wqLG2p8vMqWxVZAXwU5K0Wz%2BaPAiEAmYYnVow059V9gxt%2BLsxIqkrNXNsh37iV8BAxA10qUWMq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDPJgiZ2IK3iRUuSJ%2BircA6s1YmwoWNn5W7Ou6i%2FQH%2B9LFz4pgZ9DDWC2z9uwLvCdv2JwvVjaZbMOnUBie9%2BmWZVSwONo5H1vS%2BLwjjnBT6Vb2EfuxRwnSAwlMH8prcV6M0JQ5W2GzbOne7yksFuiUKzKCe0FhZ9s9Krl3vOcQohdCqZcuryF1qxjyU%2FjLI7ZeR%2FIaX6LD8KCn5VnjlI0hlLRDZLBqNYF3E5zMjIQBU4eLNBbcm5fsDf9uuJ86vIpxkD2ci6Ue9K%2FlUc807x%2BBJN%2B4R79IAQtVcW4oO37VYBUEDTHsvaetvVakar1b4mX06oOsAvQqhtldjLQpovuDv9ho3sYr79BTTRISQfvHi90%2F6YoqnNaRoX%2F6KowyV7IyKbR5CCcoP%2BUZ7RGJPKc8DaobqUj%2B1jaYzHwnqqI%2BayppcbT%2FB6rncfv0Rnz3LKHEixYjg1379Xqdd0SOdrpT1xqedUwtfD1dI1%2BG2vhC9JClAvgP%2BTHnu2hNd2psFy6XvB8criSnUmks6u8bz9BsenwzLz%2BZiPvYMn85BkBI7ifvAWeM5IynCzzh1LaIAes%2B3rkZN2LSYpgZMf9fGvBU7xPlrMP5GK5mDDlq91exzX8dN8af8xLiXMnWup%2B32e1ouV6krvLETRl61JSMKCMyMkGOqUB%2Bd3j8tZD6%2BewtZcGrvnBNKG0Tq9W3AwVUIBbFUpDJy5W3GIYxLUjYPr2WJnuCVUeE1XSu7JwJdOBfM15IKa5JBr3WD74toZuvDNrwutussoVlJvoU7Ovuz4h410uyWiUYRUXjzgwTGW7pXQKfgyU5JLWGanudSpj2%2BIPquPTRDiMzarjJpttb%2BBKuFrHkvWz7EAVaTgzPBnotGfN15iSv88rVT4A&X-Amz-Signature=e22433ffa43c1295092df221b8e09ea806dfcac5bb754e01d389f5d270ce95eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X63KLDYA%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T013610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHgPErsDOKnzyV2Nd0rU8o2KiUHQC%2BFhQAkVDXwl9q1tAiAb%2B%2BK7cspQZ6wIGsqqtIk4eEm1MD3LJVcaV5sLFqU9Lir%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIM3ULuuosQ9auHuh%2BBKtwD1fof%2FDZoCp3dvgnJ27oEB5kCLnVGCWuR5NAmsc4uTHNlcNqoH8TF26VhiyZzAachmE5ulsuzbaQJDlhK91dmLNAxYPKiUvgk6jg8EXQGLtXXlvb3QJupJfY7%2FnQxPOdNL%2BfoMI8pWijAJKLNgqMT1c7Xq6ofyRzdQU18pieb8%2Fh86LLznmNMo5oa%2Byhd4XBmjAvK7R5Nza5YD1g1KA9flGNwxQMEfE2FXcPwQRtcEGPgkNl8d7yk9zTi1fhtUje2eJgIZIHMIz5rd9MKRo0jIJg8OmV8TBBr2sDGTPzT85i9QHM0A6ZRkVwCQ0S7OiCfCha%2BACxWKBeSk%2BIN0cZKFCW40Ynm5hWqO7Id6LcpgDM0d9M1fjJ3oiK8Jx7Dj1YTAgOOZQ0UDnEMNuh74%2BdlMdszm7JXm6TKpMcpprho%2F6t9y4pdSUIollej9%2Bu8yVwNVuTxl61g2FxPAIJczmIrR3aSkPbOD6LxtRKTdrARy1RkAyi4RVoaWCnFPh8JvnBUyZnVFwMsfSEJLBEotsnFiISb1OIVVaqlMWMp7mP6oCYR%2B2rlsHaOXEc3T7mFYpaTFX0RYII9FRnvARnmAa8GOGnR7xk8ygAk8nL7PAYIbepiEcB0Ujbr0cLh5MQwgIzIyQY6pgFnOV0z7n6rNdpgQ8AraPHGcJsGHJjG9%2BEKJvoUQCgNk3qPi7nUjFE1JNv5VB85W17iHOVyVBWZblYD7WL5tZk2pJjlKYywikc3pG7RNyLR8E4xoYCDpgArDDia6%2BOJElufnYNFC1SXz0t%2FUN45K8WDqKFWyvab6ZrS%2Fn7836gTScRi2qQkBNCmy195uRy4GxtvfajofMs6dT3wwOwveNIQJRyjGSe9&X-Amz-Signature=ec350bad182c9d985784d25cdb293429d202aef8ad07adb87d557e0949ecf2da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

