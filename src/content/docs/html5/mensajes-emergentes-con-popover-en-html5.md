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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OHQ6NNI%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T132556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5kMDCTPLxn1U0SwpOjZkDTeUZmWIZfKW9%2FGEV110NpwIhANZq%2FGjSXPQjvAagjGMmJN3LPhAio0NudY5YUn0W%2FGstKv8DCHUQABoMNjM3NDIzMTgzODA1Igyiwcd9TM%2BqKyFgOpIq3APyY0QeanHcExENapYOyd%2FUsseRee38dUCDV0TxCWrUQbOg3eEe2mfIjbBjJ6vNUNd2otLtV%2FJoMg8OHoyvB08ZHOn8Ic%2Bo2kbShNHaf9CABhUL4obxYzbrepzsWEy0j2E7ibTKZzy4cB9kNgbUkn3R%2B0ijYs53N0z7ap0LDrc5RHxdrUnEF0J5AqHDQS0Ww6O6AhAvYiV06LKyg0cv7Oqi2j9t1gw8zLCYhNO%2FNfOgbPzqwGDbMdhkeZmA4A1yDdKxq%2BfUwutAc2Rh3x29JGLkzwoj3%2FueU5flbWIRpF0K%2FcblxS2ZPS5Zj%2F1i9pY8arXlKqYsSEkIto3KwNKwVnSum3iqKKU1lqG91H8wDBNVUYzuj1Une3PKYEO3oTKXz2PYAXX%2F0J087UeCUOaJmhf%2Fpa4Ct93NTwUspQlBBb0tlLwq%2FEf%2Btq6%2BWhwz%2Bf3q9CMt%2FjLvdNMuzgXw7%2BN1EAhHM5m3KZiDtJTN3mcwWqxMePnH80LdCk1D71Y2IbvAaKm%2BDQ2wsTL2oR9zs0mYpnWkunJQTWP2d0hv2zFeO7PFOMf1x3bkW0b7locZRyOoA5qgXb3UQ1NTl6WJvGchPqRa4zYGJ%2F0Fz6DN2QjYICi%2BminY7mrtG7HoBJbZqzCxptDJBjqkAQgcpCg%2Fs6%2B6YLPCOjb3rLmRG3LQodQmtluhYQRl07VPkB2Csd1KZIZ%2BV89SG%2FSYWTL8qUEPq8d37c2kNTl%2FaAeA%2F5B5cD9njxjSu7Y01yniAhjllk6AC8UMySf1fwuNMIRzP3cfOCQqIo9Le%2B4PI%2BUPUtdokCVRGV1WgTZ0gV9Jub6rf2Z6iQiikZznQQWAltmf9D3%2BVynpq5giZCp%2Bm2E3sqbK&X-Amz-Signature=6b3d1835aa20d231d832e4d5f4f7f21e1de7e521215f6492e1faa37b102bd7e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLS5SPZW%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T132556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDiD2n5is7jMX9yfph%2BW8w9EF%2FUy7xvPmWa7ZOoxsrprwIhAPr4pNcojbujIhR4jviSHjPPKbfAeqOJi7vTCre%2BdZ%2BCKv8DCHUQABoMNjM3NDIzMTgzODA1IgyDHWMQRu3%2BRbVSklsq3APJMSd7oU6146mcQDJxvNjBx904WVvzFPtn6vre8mSWuGZLPyDky%2F6q7iREewNeLG6ElyudXanJsWMTEkEXrNO%2F3qM0s5dN2ndQh0xz8iU99T%2F8fJugQ%2Blr%2B%2BsGJ3vcqOvlYZEsFuxjYKPmOXflBn6Fz8aJLyar%2B7Gcj2Yzr47TQzDZra4R3mGC8pSLyac%2FCz%2F19niIDngOHDOcuv2FuFK85DkyauuuAjSpAsxOwsHNy%2Bx0Xog%2FBk%2BhTOIIvMi35uEeZdOYAY8cgEfyohggccM0l%2F%2BRbdDz2e8P3Mof3iIRrF9VZLThc7fer%2BhV%2FtmhizSojMhf0na3jIQ4uC2CDm75sqNXbezhk53oZK2Xz2JC%2Bht5tyxZqUh6FTKYxWJiYDNVvGCu%2BW44Dysv3gE5TosEui%2FX8lv8p86D5zeQNXZxnbN%2FJd7STkWFFfQu47djhcu2XAQruFDFJ2ly0esg3VLujuyrBNsAaWYrgpIb6nqNefYExq20wyJLLTjO8kz3TDN426WlHqJauPyKWr8QkIXe3udNHYP7eyjAzJxkSIczebos3QbS3cim2A1WPS7nhO%2BI4V67WcKJiTpI81kg9KboLa8WL5AE68tPmTGs%2FAnmrA%2FeSiLejx9qJR5CRjDOptDJBjqkARrFXqyCYD4VmRGyCUYOiKiTntrL6mtG2cJn%2BbJ1HqFIdeU5eddAduEoa6MAN2b1GTbvQ%2B15EegtLJ4kTwFKQXB5i0N9XCO94KSy42XQZ6MdTSSkmMkeKnpHI3QglZdHSO%2F8PEUC7q8w4rGJPEhUJKMnqkkQH7Nww%2BYFtcEC1VkouIeIawcaJGwYwsPTRynff2vNQY6vV14g33SeKJsxobLb9LuL&X-Amz-Signature=16f66b3961b579c7798a81fe3aad349d736babcb11e9dc0e4bea57cf7bfe8da3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

