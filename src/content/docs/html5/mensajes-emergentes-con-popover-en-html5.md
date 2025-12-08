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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q22Z4S4P%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T051350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBPvN7Z4%2BNbOtyAWcOm0QrWu10ryTxFtaeXouiL2OUpqAiAyZkkCsek7jX6dvRAXhr0rBNuYKFHvECUmYDf8GUGa3yqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlFLJdvLTXqOkXGDfKtwDfZR2N44dYcd6WDKQdx2jBy4PotGxbRIdBBzSGgZOhXT3LzSOK85j%2B715ofooTVYegz0vlLEBoL%2BPuLf8jY%2FVLSuQx0f1nHWIJh3WhCYoVhh%2F5iTmoRU6UkdAUMxpDg8smUhJyYSJrbM%2BoimSZO7MQUBmpEVG3g3aPWtBecxhWwMrT2Rd5X23aPu6yfNft3Zih76nG0GQYpumm8c9fpCUMi0Z9ovLRmNCYfxznnokna%2Bnxs6qLjH32EQzP0h%2BfqPo38xyW%2B3kJqd6vIs2J60DUQDNV6P%2BDEX%2BZtaO%2BttY%2Bp%2Fz26AWeG%2FK2rfQHfdRUWug%2B6%2BmuAp%2FTCEMiKjII%2FMD7dBIiEl5tB%2BpIEGRNHZhUzJA85HfdXK0EeVS%2FtsWkqT3ZHOyH%2Bfs5VhB9KYOP%2BxDl%2B1vK3K0OaXgUrtN4bH8rmDTB4quh0tDBg1Fy3ne%2F5lxly8iEIWsNfloWOAmF5keqj0NxrKzfvfs14kcZsGit0b3gitu01ef%2B3mIJTZyJyDLS0cSUHOpNKLEuV5mDUwgJ358R7s6JWaarDq1cFH00JKEHrJ1SA3B1CflfFUuYGs1j8r3YlM03hmht7ecA3FlisGu%2BprmZcFPDhAsnDhcTvsZTJnV8aAAg%2FNwRgAwzrTZyQY6pgEwJxEs93MRg7KPONtEeEWT1nLlwI8rim1Xk8zCbL%2FkRQQwDzWohc5jJGj8wAFUa1vMBcVCm43GSyOVmzzF%2B7N8b%2BRXcr5CGDuLxAktrNOpS8g7O3rcjraAxSXni%2BaJkzJ5%2BTBaXL3%2Fathu2ExwCP3nwS4%2FDitUAo2ueA3T1uUGRsX3%2FrZq951XBgc1%2FyA31ycpTVkT44%2BNZLe2CSSjP8EFSV4MaZ8v&X-Amz-Signature=81b4819542f87b1ad29ec6ecc78c9ff4aae6d625f1c31a8146134da4d12820c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZCGKVIA%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T051349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA4WIBmnKP5oFkG3XJHkJ%2B5ep8PFoJXsNLgc345seqwIAiEA2BYfBeev%2Btct0vMTO5SymoGwmYjcDf4Ew70TLUTjSPMqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMtETIC9vZEFzEO5vCrcAwGu9sTIVq3CM5bWMigFJzpDr1ey0NxqYlxNHeYZEU5c3%2Bg5O9id7BOySyWqJh4%2B37Ctxz2xt2mgTa172cceIXGsD0szddfZzMqcwC7J5Q%2BKOmsFhfTrXW1misRN%2BpWKy2L93oqGTvrNO0CowQtLUrezFkL23tMbDFt5FB34glmR5FJX3flhHYbU4fsfbtD3Nw%2B7aO21tt0KiNwh1Tpcqpq%2FQpE8rZizwKop7XlWGM%2FPRpBucNsMRfPV3fhscGizojoUVLybMAasNEwAVz9SUHRasVzx9nQYH%2Ffp0Q49OPI68lY1WPS53%2FA3Mpb%2B%2FGm1pHDwIIk5jKeyVdf7M6bppueMQW7aq%2BM62l4oF7QAgNZPM4DijczyRYGhIrIBM9ZCBys7R7ZxwnIoPBaCSazzw8S9L6jZ0tCqVaIBUiO7ydXVuIVBewocQnzopSLywHzMh6u1xqOlwgvyimd0iopgfwSIAlbEWQZds96abBybX6wphBvyEStxCjZ87im4nRg96v%2Bfzqi3NWS8VgH%2Bspqf71rIlJijjsun7fJWCN13Ht5y2at5zL%2FiTUTB9o916Td6Q1lPRoz7NEhoK933BjetfKVdd8qfos7%2FLOzYhOnwhgjX4S4oPy0hwZ5QnmapMLu02ckGOqUBUVvQ1yQskTCQXFWsKGvpAuqXvBKc%2FSRBsbr9L7YcWHScPIET9DpYGV6fIIzYHO8C%2BteaCgDw6gdYvbW3CGdCODChWnozilIVhiWXIHNOK5B1SkS%2Bf7WHxjq3I3NZXQkNz3SBjlKWr5djDrs%2FIDNrN84%2FDZRWr3QAou4IQaN024fx3ed7PkacAfGHnRTMGpfBBmSe58PKYFm%2BBzoChDAYJ3ZpPj6F&X-Amz-Signature=137f54b9ea9282be3583373727b780f6646112c49b146e1608c8628de8c3bce0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

