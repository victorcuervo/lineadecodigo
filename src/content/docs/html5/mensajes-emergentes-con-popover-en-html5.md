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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666S24D6XM%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T195806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDsYIDvCttcH%2FdtYL9ZmLJeLhdbeZNn2%2FM2X9qum0cI%2FQIhAM7OcSS28BV4c0gmO4seLoMIixJEKh0FaujPA1xhXlzYKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyBDmSJT3d5p0CTcR0q3AOmJUh%2BJ2XSEj1Avr3mIYwGGQrrC40dBf3ez7T%2B%2Bjf9RNo9HiwzwUVWUbqOAmaLHdfUgg0GTutS3bdc1q43K1c%2BfwF%2BvcGAnj10fxvdB6fwcAK%2BRjNxfkeRU%2BKe2zag6WzUkGyQqrJCy9XpCLkfaKhh8RsrXUoU%2BSE7BjDJIoJppLiuDOnAHmzJzhMpsT37l6Lyc5fmU0y9ba57pRXibam02Ss5vPYL2VJwIRUZc9crKBX%2F5bSUtl3ZIzZWiAAL8Y0qLUqukTgQcAKpbOP%2BFCJPSNSILTe5%2FHlNNqaBmIKgGiNJqWOUe3%2FIJv5eV4H3ucmscCoQ91id7jwCnWOCGl9MIlW5roeA03LesG7svBkdIDHXKyH4bM0%2FcTUprkG%2BqbutwQb5V5%2BU8QywdJ49dasfbML30q%2BQayInx5n1AldPyiKyAUD%2Bn4TUhSf4d0BIsgeeXEwAjWlilDcEwEzyg8cTvm2i0xcmK29cMYxKn2EPsYeU4xGfYXjWw%2BOeeFVTfA3sef%2FDmFmaYUdBtXLKpN7M0OL%2F0sHILorOJ7BofdYv5BMc8MGgMiw2lLeMsyE0U%2FAqiqJnmnvn6Ot2UBHShYET%2B4c0RZvRgsWaOluoQE6%2FNTehVVKxyoIX05NR3jCBqdfJBjqkAfd6%2F6j5tiatoFPGPaP4rOg7OSmxXU9qwcvm9JkOdzpQOhHEHIzB0zuu6E96HUt%2Ff7TDdPZZqoUuS0i0fWJz5qIeprJC4z%2BJn3y6gZh%2FWl%2BFk%2BK6l4z3ey7cOtEocnVE%2FgSf4ikfGrkhPCe3g7xAhxiKLIPgNrK33UUE2a%2FwEQiyoJSkxxFl6QLvOwIMun6CKa9Jlltdq%2Bo4VyyamzluyOiVoE3c&X-Amz-Signature=22d8f9cf2dab0e8c655db4a4ee040d30feb32af53332f755526cd2bc28bac3fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624IVRQDC%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T195806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7pVxvfzHYhYlM%2Fkp9qqwIRg21KbRdw5TsgYTGoLG9HAIhAL4glAZ7Jk5K3L7DsC%2B%2Fvs1ZLr%2BjR1FBCDON3hJS3JhdKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyGKJcvn8Qac1X%2BJYgq3AOoOEViFlFhAc85%2FjAd7uNhRpzyS5eOPXxBJ98XaJQvUZvIDLxqk82zhz5ywW20VnlMUXzE6SjMBCT6KV5CWAYoI6QPmLXs0dVAAumNiLuje%2B0EJa5l0OAWxkJw%2B00FyGkauzQ2vlqtKCGvGlpTsNaP%2Bp0Ke%2Blxas1T5pefaXVm9A4zhDUlxgIKiPZVxYAto5mh8vx%2B9z%2F5Pe6p1yZOprL7N0G%2FCAOGiYGWy44d%2FuY2TffBTMx7MSRKyS3tSXCf7zCB6OZNrdTOnc6jZ3ThUOgMmueu8PBnvdT%2FtsHq6%2FS3dHpANSYcbQbmk6Wipf8Sq%2FCPlv18ycdqxUiNm6WVm6ZY%2FE06fPtRgX3pqEhFj9hRvxQjxPaOpyCl9JICjPBBRP2eslbfpRDlyPwMHquKY4MfiXhIMIL3K%2FqKIn%2BkjyzSsg3PeEDx2264ypWr8zbDZyUDNm5DvRxKoBSYvzPeax8zPqoOx4R2UuUFVlHQ49GG9Bati%2Fe2Qbrr%2FVwgwAbDyBgm8YbxzVhdRrgR%2Ff%2FEEXPXhQVlNPhNW5VazV%2FLOMt8Ji9rwjUdiBpi8TQ9o%2FMhwDmhhACQTS0XaFqxuWND0XvC3AGZI%2BD7iLNdC0uoY%2BC3i%2Fsz30PAywwQJdSSRTCLqNfJBjqkAVxk9412rqXjjK99sOyonKrUF6wHHKLCn6NyESWwAmFiies0RD9qi2tmAqJkdcnhG7xnRQuf02jLb2oPVd9TwuGp7qnX7i%2Fsb%2Bcj0lKjPoWpFGt1obNxIvd1UPi%2FW2qNMMJQA%2BW53dwNOIbRmfCPaacarkN%2BrYpuJ1jgJtB24mYD9dspCMkcsWjwB%2BRQVjUf6eVF0osde8G2RPJrkc%2FZlUxttJYz&X-Amz-Signature=449be952b22652f86c1d61c992a3a87d7c36a8e8f43493b4ccf46166d4601958&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

