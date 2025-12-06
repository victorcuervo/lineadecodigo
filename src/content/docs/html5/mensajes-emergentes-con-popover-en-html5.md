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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZN7KHVP%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T104008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHl6c1VKdxVwK48RPR%2ByYJDLieSzjWtTjNzFl7%2FFlYK9AiEAhjLABqozGwQd9vx5IfFQeyxxmfQomH%2BHpmyRTKHok7Uq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDHWutmjGHJXAaRyErircA8QB1Z%2Fg2roJ3tXKKaOMCHpLamreHeH4g7D%2BvqBGnLMKQeyxCX9DLZH10RY%2BFk%2FUF9%2B%2BHtXPJ142FJq8IREqrVn%2BgL%2BdpGaWluOzAy43N5auE576zTH8tg6LforJC4w5PXNxEFJnsZw2v6i6mVm9LmkMmRjSjuTpQm5pf5pPlLSexJ3gxUWjcuhPKLUs4yw3j8aZIycuShnDcypErjRIP9MZM08u7UcPa9qITpAAGrTIqAno7iMl%2FFtlVmQ0K5XQGN5m0dZeKKzila8DNSR%2ByBfSTby709P32DrLFtKpConWJ1qA6VLnHlDJz%2By1%2FbTWcpJYaS64rdc7MDkp1%2FZxCUT9jzqGH%2FfVeDZ3i5ZJcfnt%2BZTliMmP0UqzGgfVlUwt9XU7QFn6uS1BCRFNdDXU5s7H9lgIXW46bcaXuyN4cJSwwRlMJwUD2hFHgm8%2B5CYpUiHHFsUezibcPJRIXFkc%2FRvM6QYUkwYXBHFULE2gBib13ryOCUwoKyJYihNNHdTq0KhLeLBrfNRSaOydhJFLm2EjZlFTrhAmasXxSCkQCoVLY8K0kOtpCX%2FakeFRVJp4QAnnyi%2B%2BNNodwu2Eq%2B%2FIIXHLKEKsKiflOIIMJpb7J2kNZ1q%2F8QouldW4X%2BXqMIOK0MkGOqUBin94c%2FJe2SwTmkE%2F47ERTNa19%2FnOY%2Fs3enBBSWFKxBYD5Rj38VXWDCZwRBlvB0wRKK42C%2B75baCSgLCRE6mnd0n90mSIAVsoiUGVld0eZRRHttcIq%2F2kCgwDJ4piWP6eHUZVqUPkCA9Hd6BdrbmaTsvtCntqGO7qYEVlXtO3E9irtiMaHCjF7ouW4dkrrUa16a9G0JOZL1LTI5f3L0RL57izEMPv&X-Amz-Signature=23cc3b0e858004740787cab2fc1c2b1e2857f51bb77422cd91b7743c4d4b3bbd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDAV5LOY%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T104008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICpruZDIOabNILbEAGF1gO4VZQhOQ3O1%2F0Y04SlYCozPAiEA7%2B%2BsL878vMDuMxWG26b3sspw%2BvuzgaBHjB5KHSbRLDAq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDD%2FwzZStpPOSrZqAHyrcAzlUKE%2Fsv7y5tpyruLrYcRUBXK3Dcp6oFQv9iTXOZpTyMqaN6%2BbRclz8K4xB%2BQaWHDCKf8wMnBqHYmFwnJeeg2FGoWTNGxVizpnS7iXj0AtRAuu7luPhYtbNu046SAx9ICYHgDLGgUFp5L%2ByLluH%2F%2FE4Vnp7uVHPnd9t8EpY994Tlkt3Qd86mNiNMLgOY1dXFr4Qsa7JI4IHMiJhbd1wePaNsUZXDoqX2iUFIL1DWKSqEqI7TUFlZ0tY%2FDE8EObaPFk5JPYtOZoM3kwcsyWxBOn4XPpVjEFtg8ALxe7%2BPdNiYeYGb3tq2aSTX1zxxo9lo40UDZdrCpcvejJcd68U9l%2F7FFUmyEv3stZrjTYVCNboh5EtYOqcHE62t%2FvxyduyYy2BgPhIERCXy1zJqqqo39DVM8sC%2F%2Fgf%2Ffig2rzE987p7QogZQfbcfhAct9Ja5%2BvHgZmY8enWd7%2FG1gPOZI8N4ioX0l02fI4%2FQ8RJwpkjNO7AwEN8NZuW5N%2FjG92I%2F2eeXLg%2F3y98zxt1EhHaRHG6PGwUKzaeSKzpqTWCbUdCTrc0bFf2teiXdliOGlHD%2FZFxAfviGxIp87B5Sig%2BKyaFDqX8J685RpwhTugfraSbhVIMqu11HyurexEfKnvMLiJ0MkGOqUBN5svmtQPFKfH3BbuWkmNvB7kisa3Q44RjCkgwpXJQuq6u3XEMzmwo6TzdApOF%2Fl3vBpasQSh6gFKRGUYBjM9TPdQJHUjeqKT9mL1nBBj2TsuLZ%2Brb3HvsJlvK24mYQP5UrvH8POA9t0eWErHygAsUDW6LPU8hU25eQroJHb6%2BCQqQ%2F%2F5G2gXbiJQcgxCJEcaW6MJ%2F9y0%2F8Wwd1%2FjKJwZpK7dOCQR&X-Amz-Signature=0612881425b04e387b63a92fc7c16732b561707bf3ed3a172f8a4648877e6a9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

