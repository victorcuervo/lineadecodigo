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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZINDRYZU%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T185352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGbs1XwJU9%2FDXXswB4%2BvtkdhwIG6WC9n9CZDvJ6xSfdlAiAOp2ODS%2FIzgkWz4FJiO7GeDWLcljUNMA2wpg%2FFkR%2FMLiqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhWxjoFKAqXxUJURLKtwDSD0aZmZoN8QtQ4Xd0DcXBZeUwHA3GbRbKSDmDIOSa1iM08kBSA0R8WjZIz43z7vVYC5m24jhzsFkjLbufnbQT7rNqoYRcG2TDFUx63alQoji8oMfnxTdA%2FFxJvi4W0Dpc4lkTloLOoLcT%2FB8sVOtb6NTq%2Fc0RogNum7oFUSjgb3Y54kiyc0ydbXn5a1eQhjVoRvI6MOlDFH%2BPjuVXuaYgnQKlpIG6ZrTJSGZ3ZkH0lp85WZH0OCO%2Bb7UQV9MwCn6TYt5dd4k3QJVr%2F%2BBsvsSeeuEfqLYqekRdXD8zggSwYQcQ8H94Mj9faWapcBCyX1Bn8tO1ypphmVA6qH%2FsTPGG6M007JD9aCPUK0m3%2F0dc9G5AVIIxW0pssuSqlRSeKIkJCiz1WR%2FIht4W2iFuuwPd%2F3GL1RI%2BLaNPIt4nkpTBkR%2BFWciBMnWc4YMW1aR9I0iW9eQQ2qJULPejUd8hBtwuPxbV%2BbtZGvX7tXuyQoB9f6cP0GaMUeHQ2X8JzG9AwJ%2FdAqGA7t7Qp5TbC7RCg3rUEcMQnFz0z9enapLnpL%2FIUG2RQSpWgY8vPKZYdtnULiHZCuFBpSOlc9Rpdre%2BpxjiyUo2UurArLfprwLKOE9lxdnBGTP1k8ooKw4sXMwtLPcyQY6pgHw7GfRHIBe76YIEecY3YTILPPg3W3SkFybOySFI0AkZum1tiIB1GFjfS8cX4vi9dzciAdYz2jajfHxa5GDjMPP9KNr3QvDqs4p6gNO0rv3RegpP7jTB8RUn3E2m0jt038AhAQsTPf3t1DUPnVywcnCBhPiDRh1Z3cV4s74cd%2FSvJzFf0gQm9ayUvKEalXlGE5bYERs%2FoSfMWL48jd1WA8YN9805IqN&X-Amz-Signature=cb51911933cfedaae6c6cf115afa8ca0cf278f6b6d0f7a85571f67a7c23ad6e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665I4H25ZW%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T185352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfgNa7%2B24S%2BPlu6X%2FJaqX4JvV3TcCoBTC2adiv8KYNzwIhAOx2QPHvI8e0mE5gVAw%2FpS8Hmbkx0jsRyEE10eqxb4PkKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyDupbQBBc%2BN5PWV%2FEq3AMrqqxHm%2F6cSRQVLeU6%2FpiZKf1zLP0jAOHdXlfeQenRzAeobc9P37A85ycQ%2F4V09PSSwyXP5SqrN%2BVnhUhC8IJ%2BZXwZ%2B1RW32hGz9vuqo1SHgVkcRJ8Yu9Qe0IWQbcf09ym2pRu6Pp2A3GKVx5Hj1asi0HdY6OtebS%2BflNy0XZO%2FRmlqFBgmMpH7WON7p04jaFen%2BM3s8aaueXpQWwSF7cI%2BCgVRKML%2F7SuIPT88OzbEZ3JDoDWV4rupzaOmJRn0ZJ1SQZ3Ank0gTYoqgi4ONsr41SDiI9l3JavW6vhpWBlmUNt%2FL6EkBR7FcD%2BoNPi5SlRILPSgpypqjQZ2uNUlQZ3Sh%2BErlBzZ79TpYcXhm9e%2BQ0YX1puu63McrNUgRO6TZ1sG1fq3p3jlxmIesVLbLBfWibc3EZcAXkD7gZIPG8C96mwG7mZ3UeH948T8fXgaGVMZ%2FylXmerxRKMyUv0zQOXtbioO%2BNN7i%2BLCa%2BGKF6EXUmQxJbt3l5JfB%2B3hzYkDDsr%2FvXLV90Z%2FgiCZLbcYn%2FCRkI8lTglf8SjBSKQAKaVVqK9TOw1NN4NKMp0n73p2x2wg9cZQneT4GZE%2F2Q%2FiW8TqSTgRyUQ2LDjwbfR%2BwbS37Z7Niu3LzGe5Ja2pzCutNzJBjqkAZB0yGyydw%2BqOu2giVsJzMjnifu4nYSebkMnsI0tEPf9OpR%2FPI3BGi6fNH%2Bfq9hYm1%2B%2FArOJzjyqunZ6PQfGPwxx95dn%2B9OQxNt6cXWGeOua%2BxNfFCqjGpWGVkNqLFOpqbmUt89Abf0poD%2BWB6Mbq3w2ap0EJzNUDuXbOFSgO%2FogmY3QHIuQ%2BqOyiazZh9c9Bgdlx9b8id1e1RsXdKIGFrU1Up4P&X-Amz-Signature=d6b8d61d0e319348778138c5e9ce1d1ce6ae699c12e17ca8e2ce751331efed58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

