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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BX66MNA%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T033223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIENFboQm7H7ubhVwY%2F3%2Bck4RmF8NHwO8AN60fNIJ5YKoAiEAinjUSkUXiWndV5nccMjDdwxNqa%2FvJr4UgykWs0Bcumsq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDPObS8O7eS%2BQs%2BjLCCrcAzpAPvKCqS2rDXlL%2F9mpNM3Np3jTVnnFbNV3To3jbvJOap28duzVYgNMZoYkcyeMqDDx5c0kxs6TY1DMrniQSKkMclO%2Ft2bTUbVJi0FvjA0n6ZFhVz%2F%2F3Kl%2FJntaj%2BGPkMmQehT6eTMwaAOCXr9RGWfF9CaAKXstiOP9RCCInYNQq%2F52J0q4nKzJePBI6arWxs41esdWzYChqmf2OD5wq%2B7gFcqRE%2FTsjai1VqOG%2F4BaUgr0XY8bJtfDW4WYy4tgXLLZBaDjvnwmalPTLBFxivnkixV3awQ8F1hwvUOv3jdxIRCgKUL3yP1IxDrS8YKgJZY%2BY%2BiVC2HewVTTAXgTiKdf6tVeU6HpaJad1AveAv1C%2FJ0xs%2Fc6D%2FZB%2BMjDzvCM3IMO64uJRmPqI%2BhqfQQ0o32vS4Q0xt2Xf%2F2ESvbswuGoItr5R%2F4p6SllwIEnApMeE5%2Bn1q9zEew%2FGBmMAlqRg4zXFQQJqyXTsSMgd9MxoaN3wRfJbGSF7Mxa5FEWjVxOmvmiBc1zeazCR6vi5JDygDampS%2F5Unje4NYORceehtdMNTfGJeuKE2LdTP1cHBFD27TyfB1yB5nQvU3fPmUvVULTfZI6aptcbceOF7%2F%2Fsb76vqRorTJCUQ48XYX5MJOMyMkGOqUBycQpch4jW%2Fntr0Cy08qngjfYLc9JakafFTCP2RJV6QL6g6ef6ubq2%2BMcWRioAwFALBzV7hCwf7PPnVYKSXXt3PDLIcibbhP6Yk%2F1giRUHF95eOHMhjSkXIZzLshGvUqQ7hj0h%2FtBDm6BBoPrPRR5oY8Q3or3l81fZJ%2FocfIkq0Y1QbBe11Es7POjSg%2F%2BEH08fGV9thRWAXapx8mk8UEuvaZRKIAb&X-Amz-Signature=41eb29e8de08936968aa4f768ef58f42d1a8cc0816d568b2fdb0cdf46185c205&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XH4V57WY%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T033223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCW3F%2F2ggUcuD4CUuHK70VPFjmDp7F08cHfHOzmkCsQ3gIhAIzTensJ1Psqrw0MpfdDkinHxSe25XFPmaj9ZcuqbnaLKv8DCE8QABoMNjM3NDIzMTgzODA1IgzCuPHcA1KsNCP0VlIq3AMp84aWIah5krq8k1upTJCSmVvKbS%2BWzsCZabUHW5pGPNp7bCIzZnagCbE73TpqX1%2FkjsF0Z4%2BDnx7QZaZwYyJzOgXUCoLDXEX9%2FRqWNnfENP3Wat9jraMU4msYTwTjb9wuPW4G6%2BXqFl6qsfNakRCjIyvU6r%2FbkraP96AZV8aJHJOBw97Cme9y0XupW3IOgvX8A0l3MOppfM%2FBB7K%2FpYRDX4E9PBeBEUcJ4VPi%2Be6Q4vAWA33wMKZ2WP9G1399kmuT7rIgvdTzRCK3dIWmiJ%2F%2FmK7z9Ui8bkr7VDd33fllPv%2FFJs5J2kJ6IFHOOQiVHFlojfOZPVmOx9Krcq6hXqxLFxugasHcyYVJXg9hxIkphO4oxy1Vk3QtXonyfVdFWMvWsRO1ewzmdR%2FqAZkib4a9hoq%2B%2FUxlr%2BYb%2Fq%2FhDOMKjJBsnhqOoI4qrUOr5%2FMfyemDCkQMpvfdb9Q4wKWi5zYiUXg6D9IpEzxmIxL2R8Vw%2FGOE1mG6J5uUev1x1zNjW03ypmmnq5Io3lTkUQSZxyk18G4Vonbo8%2BbdgMqNf%2FMy86jHlkdwhEVesOC08ABVSW1WNzJxW%2FFoboa2TVVsWyBBaJpIdPkve8tzMiXxerCkiDeKCJQ457TbaR8lXzCKjcjJBjqkAcDwrDbHpLYJjIA%2B%2BV6RgBIqYmGNG9oOGettqt6i6oHfRWWwnV4JLg%2FA78Uy%2BYffMGPm6oLMaligcUWTZMPAttocqRkt6ZP2CuTnKniTjpNSdxnYTZChH%2F6UyfQ9Ah1TT2NJaoFhkKG%2B7%2F2mE7dAt9qpw9gPLXHodUdQakYbNw%2FRn04kJW25mZViCrCbZ%2B4%2BEDNKhQkWuCTaP7RNOFy121hIAYDX&X-Amz-Signature=5ff28f8db9af4f184e03ec8563d4b3989a3a37fdd8315d1059ef770c39dca846&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

