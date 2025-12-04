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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5UNTIEG%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T170853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPB0fj51VcKd%2FwT9PY%2Bz9lTTk3BvR7PpujNVauBYvcawIhAKntm8x6ntxjy7H6S%2F4RB8mIIeRwbZy14r4SfMJRbsDJKv8DCEoQABoMNjM3NDIzMTgzODA1IgzpTC6hYEMclJZZpFIq3APnYKL%2BpC0DAwoWMIcN0gzCHYdIHKtQiioFSxdjOY68rnqUY%2FFtXzGppWCssrxUb3Is79%2Ffb9H%2B517wCPw8Kg9xoacmETery%2BM4Ujp545%2Bl7qCt0l2yYD4rt%2F%2BnES07t1mXNvxBiA22Gd8YOvDi8OIZ7w4c5A2ARxKxTHL4cgSCr%2BXsclfNPXDLRcmYiLqjYqyyyHVwhqCbBRaSDmJIG%2FIfaIQv2txsxFNm6VgUk7DEf5IBHRBzGPp4fVeePvkIt52jJqYVPSk%2Bq7nJbkNcUA%2Fkf7TlE%2B1Tf3Mq8fIdYGoopJ4qNAHECrm0eaWwwS0jCFpDrCjNN98ncY16G9A2yZClnra9ayL%2B%2BLuCvGevlyJGreFUb62lfFy%2FubJICjnBrIPxzqOnGMq7SaJPnoZgOPZaav8jDi54oSck6FWnn8SO%2FqfsTChrud%2FjCJ0axOtAK8LyKnXJK2GtIluel6IzDCJG0VEEgaqd6yNS1UR%2BCXxVggqaiCM4oVW9%2Ffz48KsAWSMq2Xxl1e40%2FYyJftVLJkYw7VJLAEGePMTFoacrmFV70EGn56ZvEsu%2BI3yU%2FyUSGcr3cHC4ZsEB3jkWZsrNExb1gu5UDYOyYqo%2Fit2LcbI9yjwX8KyfQUdJgj1eyTCo%2BcbJBjqkAef%2B%2FxslSxEBefdMSKuUyhV7dW0zh3gXnkl2l6juOrrea9mr4j95Udn2G7BF3PTe%2FtIe1SOoEcXKBKhxJIDDGa%2BBCOUuVD6mvuoE11kJ38aiKtV5FEy8JYip1yl8KJUez1cFpywiFXjTPAbxPeMLoS7L9WjLXwyxAyrdjYvMBeT9hF4dWZYAb31BV%2BWETQA5Xm8V0tOrB9wZdtznNixgCm2axJ55&X-Amz-Signature=b90d6e114a25c25a02ae75dbdbc3920a1359ad2bd64a0fe9fa4d53b9cb2e3c65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636T36VFT%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T170853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCojN3%2B0MoLwH%2BiVjPFhwBO2bzQo3kN5bx%2FEDVDXMEwtwIgYZp0BMBKFdD%2BOTFcWW7lB13NdzXASjpnB5pNKNSsgfEq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDNgKC4DpsLenzc0MVircAxCXUZLujykTVL4Pc3Z9oBMDflz%2BnLjNqEsqV6%2F5haj0oAAd6NvWGhEnNcSqbwiSd2l9CG1EiycRP5AHXWkQJ879G0tNIvQl9UyuDDafcGccmZjgW%2Fbw8Ahrz56JYJK05pwKOZhki4R7Zob98Q6St%2Bd0mQ4Unizoqjp5f2ge%2Ff%2BTnMi8qxtIf9mB6JajQZdqs0kKVusNSXYSrsXkJSTw969y6WBGK5IT5MMLqSI4J2np%2FSZJ3M1BgTXpsu%2B3G7dn3gxufPu9uv0rvU65Yeen6AU3NBGgaMfkEcvcRWMFEiVCX5AS9yXQVSN1FOp6c3oLwt4mndFwHCvofLD4J7zr6SaF91P4eGXCJK2eiAqnOHYCfKuDvo5BNrL%2F5cM0aJuCqwK%2BlM3ERsEjxaM3gIpgCtkM9yHRBSevaYTX86nY%2B03n6gqCKXGXvuLBdyW02pDEwRFvo1uarKKxeNVGgxkSBsN9wMq%2BWT76oBe3Sh6fnWiviAbN9pze1Kif5KG2XrJAwwdnL%2BKb45Ydo9PvBe1DMgoWyZhExvbAbVGTRj5lebr%2FgyeYNxaNWRDVa00pa2yMFfOFBNiL79uk4Aif%2F5zs5BY5tpCLudMapTcVwhKtHGbgQLNO7OqivbkMb9BTMJ36xskGOqUB9YQk3UrB3zSi3sNOtEo5Rt2HMO8TgojKtB14szlGjwTTUiUFamRLmEcNe017DVqKErueX8dfY50Z%2B9FNfeB354nyCH%2Fn83slqFtnAGjl85gUnBdBgF6cX7jtEct%2BA4lirI%2F%2Fkj45wGqMDiWVvOVw5aB%2FSBDo7F4co7ika1AhtCVD2BcLfvZE97IQQyJHLNphIDi5huT3Q1ib3Ttnsq5cbkE2bDaw&X-Amz-Signature=872e296058dbfba870b56b1577d44d8ec4695570c3cd50f1541b574e96ad1241&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

