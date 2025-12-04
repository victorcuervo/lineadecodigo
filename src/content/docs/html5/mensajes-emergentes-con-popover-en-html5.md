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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466262C42JM%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T011114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQCvVgTyu3bFEShHxziFcld34MXK16BYIhq3EnxJVQjf1QIgaXzSjCKb%2BEDLzmu%2FxY6fdwgS9BEyVO2ZFr5i9YcUA%2BEq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDDi%2FcpYad5qCK1ah5yrcAxQAp9y0pvIlPrYi6F5s5LFPKKnOSh1rkN%2B%2BMZIXxxb2TDMdeUsLJ3fYXi2oNa1Iia7IbBN6Hos8B6ObF8BOR%2BQUWW6kNI7dItQSAtpOOWvd3NRTr7%2FeB5KZqEtieNgD4q2B9X2VoplcQiVawMg%2FkmfT2SZC9qGQuY6pCW63zYyvLk%2Bbgo6rThUebEv%2B35RSNmhs7%2B98k95QmNCiH8GsnriBi7XapLc6Qj7T1fu8iVOU3smhJhIJ6Jbs2SpMCYfvICwWNS21cvgxqC2ctAIbhdmr9gAQ%2B%2BSCDU7yzboObPY3lOxPzfw%2BlD%2Fj%2FRhl9mDZAzb9LKhLUVwBm%2B4aCaXwkFvIA8oj29MY4NlI3YQmZIflgDig3L2u6V73QCCqN3CqLGpiJ7jTis4CVO7ndyTHRSRc2dOiFTrrHsB6jDCNFO6QydzMqKKw%2FIAFQxIbD%2FgYoAMNQtz%2BCoGsbEJjmZWCOg3AqsQoaMz56lMaSDNJoCCltWuwQ%2BfldTpKU%2F6GUsywN5XmajS8m1F%2FImsj9NUvn8vD%2BxIbz0tJL9RFB3R1uU4d%2FvR9m562U51yE4g0Z68aI%2FgoFT83v31MT3Gm2ynwZqt3kpeg7yv10nGM2CZ%2Fg1YjJGt0o8Bp9eGmQ9V6MO20w8kGOqUB6vZLQMtumjzQ9qK%2BWXga0CwlYCP58WJRlcocTrWaGzANFK2VGhxx3z9bvVAZGXkoBBBprDiqq8KF0kTURqSyHNT%2Bl35wHwXKdtoI%2BV%2BAZyd6Y7XC%2BsvZeElpaDDjIhLtEjVm3Hjxjds5NBZK654k33U2nRtoFVnKZF1s1HExg382a6gSuloBV5soWvv7Nb%2B%2B0xjXX69OtwZ%2ByAOfakbtBfi76lDv&X-Amz-Signature=4ed3bb0bf86e54196680d098e0aebf7225d4821110856fe87b77f40f0f4aebf7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HDGMVMB%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T011114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIAMckA6ftI7Wcv9iZiF9gAvphcdMTrwgbPP6ffLZh1BIAiEAy4wwlxn%2FZ%2BHu4AYc0kVMFJ1Wqgwpn3yO3LTV3Wtlc4oq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDMYU1yEm6AQta52WTSrcAzg7al5NscCDf9uppGRoHVmvw3VXT2RXbhs5DDS2ED024JtxnE7eSYiS7rftPLrV7LHkcq81urOOCBAd1FfXX9rwTWOepBUYCHzhqtfTmy%2FjpFQHmly9q1iETwGU%2BuCz1tvQuFk236SBeVVyNHEwLb9e46Deq7c7ig0PJoLuRckPbqdBO2MJ5jrdQqdLK7axSMSP9fmaQWKsSGnAHLrVrcOSMtaxwxUwyILItbTsnLSccf5Zzjy1WtY8tG2MmgVyTAHV7aS8zStWOB0LTSK5W5zetPqBpwJykwY%2FM2BbIaR42BEV33ZqYvN%2Bu%2FiviAEDk1GCGvQCdu0eBUEhznDlHzSNK2F%2BxVOoz7S3NEgOEr%2BQYqXFlOCb9LqUmS2WHffhwwdlTCSO%2BRKsU4vlPpB9jy3MbHLOmvu7aBUGUsCx8qOyXprZNlDz%2B6cjauzltjWvfz9N4Z7u%2Ft13N862bv6b%2BQagq6BM91puyM%2FBBai93tBb3HeCxto%2FgSrSynsqYl9Uf39ezAZpsOtoXRq%2BtF0iyGAUbJL9g7DNnv5uOrd7SXKeEOuo8coJt9VzHXbsw5eyQm%2BJXOztOqrdOQydX1Ew7xEeUg0DWD5mfjK8WNjZ2DU1ZirW2erG%2B%2F4QquKhMLm1w8kGOqUBNdO34UjTYxLWv3WuLhrzS5v3JqJR16K4xzNRqACp8fjsvwb5OUvthc%2FcnM7HjdL7hF%2FJ5sOQuwoPZ0MjJZ0CTopnbrcAI3iMMFXP8K5sPj0KoDDTA%2FfhpjHqcAdmfwVFmIEavOtgjjg%2FMUNqGBUYs5K4ny6%2BahUNFqCAwMUdz4uKlMa3xSXTK9ZU366bIbs2a7695aX8ZHlAP8isJSbUojwy1XBH&X-Amz-Signature=f911a58e0698ccf8f5ad2cbf1378df0688ef6d614d9b47a55fd0039214a76c8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

