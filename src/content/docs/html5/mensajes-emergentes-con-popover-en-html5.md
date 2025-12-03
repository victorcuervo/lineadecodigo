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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XW2DQ5UL%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T225119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQCN249%2BeOdOPoD5YY5vHrmrf9gJSFxKl%2FGlNJJD7gBmkgIhAPhoPRuqQrLm9zInRHP2bdzftmtkv%2F7%2BH43eadAKB86jKv8DCDgQABoMNjM3NDIzMTgzODA1IgzGrEYzl6EaWXC7zt4q3AOOZK6jkN4FhKdg2L2jyMo%2FCIPSwJyQhgOmrCBn95Q%2FJrvEOEK8Tn09frF75bIiNysH1LfoYC14LTZzFGepNqUWNMKsDBbPXVWRLCU3SrmC3Wt%2B3emwMHeYvXpEytfa4LcnSCHSk4Iqw05rHebglnniG81z6pPEy6C8VnvfbD50OD8q9QlN0MElNmGqr8cUgLl5IexXQ6X%2FlYUitA7pIkLC6gIUcaTWOVvuoZs3m8v%2FZZ0OvmHvz%2BrEu2S9IuM1GaGwJbeJc5CUG8J1%2BqYTNUK%2BiLwUmbkiZ2fYGK1WJ0Gp7Chij8JHUd8AnRt7XeyW356GmN95ju1jz7OSVO0vBC9VzZYiJTterluTKznSb0PCjkNV6IZQO8TK3x0Y6M%2BKWvPzrvvUV%2FTdEc3eRBfRYONQ6IiB2pEmbnyLZZsylrIAgAlxups7RelczvmY38r1m1nWjJCTcvFkwOuPCnHPg4cnMQBY7EsLZbkkeLNU2sjh5GBLii9h5EyIUncNnen97sAgM9IG5gbxHxtkUQfXkj62rCVdPisvA0zKICpEbqME7fsChvhxzVd%2BQcHwhFLy02NdAa57PCAqtnbIzjGm089y858tIoxo3G%2F%2FArCAUh%2BrIFbNZdf6BzOWugmaZTC2%2BMLJBjqkAcCO5qDd38grZuVbfL%2BN8o4V9KQKtDVbbdRWk27pIu7ygroRO3JUr7kR3nZkdIde5jf%2FXp2TdD%2FVEffkp9YuXZZXUPARTf82bv14cHRkmviaUZh9L2V5idGhQQrh44L%2BcgSBeMZCw%2FI5soXZSstPrLWcXky%2FpEJ3lY0%2BgRtgjZhSpVuTGksVqU1WuoGcHqzA2Z4L4FTOqiq%2FR9lHrQloZ%2BidnEOz&X-Amz-Signature=d50cd6b14e2aa55dbff30daf0dab1486a1fc0d66487873b707c892d7405ffef9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IWQGQAM%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T225118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCIDNpzldJ9UsokVlTwCWBHuaS1YdxLh108N94DlDMcednAiBUBjS64oOywmjvHjSoCdXu1NCeIfkRTE8WDqHoOKeg3ir%2FAwg4EAAaDDYzNzQyMzE4MzgwNSIMQy4F3ztDtme%2B60%2FFKtwDLIlEN2WkWg6p%2F0wE5CXiG4VPxNxTR1QIJAjXSnLakwpRppcJA%2Fw5CwPJY71wKBbFLe6ugVFIhis3OiWx9JRw1So6tRe6JB0aj%2B9ejy9zSLnYeS4l6mTwjffHpP0yHepBP%2BQYOqSlFuPRZgh1IeRZk2QiA%2FKMdfH%2BHFXS8RqYpv0EDc0VMuLMjOeB6nic9Y7xgIKtSiRWMPMgOTrsUWTyz9b3pOjyyf2iXOWN6i1g%2BUOSQWkCRhhs6dPEjlV2ag%2FDMPXZjdPmo3uY%2FBgu8uGaSMBWWVos3%2BsPwTGOKZAn8UyfEf9V544xrhj5R5tD3qGyOiRldD%2B4BoxyeEAssjrzQa8y6mTXdXvLy7TLDlnW2lrlgr9aCHq%2B94jHkEhJFAbJsHpzhX7akeQLsvo3VhvSIAJc%2FE3oPsFXjTPwnAU2zVzIwT2RaVFeqvA69fSc%2BBx%2B4dcIZPs1VGt0IeL4cBhQHG3xfw%2FscY%2FjujCov%2Fg1Bkq9FCTLR%2B%2F%2BT%2BvEp5lzOLS%2B%2BWizjhhsg4TvGA0sDbYlADvonTqGIXHiTYdualfpruH26O2R9IqGBXSorrKVaXb25MF%2Fqw%2FDLfUrPKMJSow%2Fc50ERcgjMblVAC98E3SRQgqTObEAZxphcGjx%2BWYwgfjCyQY6pgEcigQz4Ju6T5oQB%2Faj3oP0XPQHIHBSQc81xtIjXiMjHt8N7lhOiE4IFQP%2FD02ylkbOEhuK%2FohaUX3hYtE9DhWPEQgNjVBcokYwCjgQ5OmzAYiB7625THVzUulRgEGJIyqYeM5B%2FW3nKv1E0Qcf5HjMkGZQstQYK18gghbyGGuvyRk8NbiRz6UItcM4%2F%2BT7UnG3Kvs4rXdxMKgQyJw94u2qkywTFcfl&X-Amz-Signature=3ee028406ebee778d17b8e1db78b97673c60f464253b4e3562867d589fd30f85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

