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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WFRUXKU%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T051127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIDNhQ%2FZ4oxL516pU0ohLxwKR25Hczt3RAj%2FYm0cAMNPWAiEA0nN85W5H7zD3QP%2FmRD5F0XwoqJA5BJuiDefcsldVuyoq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDFIHzdHiGTE6p1bf3CrcA3iXzq8j2Dtm5qW3WjRYCR5axcv3d4PX7ynnnd3qCJUjlfACgCGdiqsEHF2GcnHkr3zbEwVV2MhVw3GsMOLd7K1uBmR60N6g3TII5EqAHlwDUjv2cev1ulJVZGSqAuslknab%2FF77lxCkNGCA7TkmiW3iIcWC7khIs3I03Di70KA1i%2FUhLTJaNruTOWOzNppgaNxt66Kleuo2WhSRrtN42jXdaGSpYs68wSI%2BYZp3r7Dm9jqIHFdXxJwNVEeD28cbsojJ1bufRf1yeUNs9LUT0HiRukVNA941OwGOEcW6XPVazpn%2BHBNcG6Hlxbh2OJmgmAjk2W0QX%2BR%2BSddtz%2BxjSpAJtgSCb%2F4svZYInacxWnkx3HbWx8PxjIa5r3oGf9tbqOSRDFIltwaf3SGQo2aJnq6U7npSas59Ki%2BylkJWQNTFv2Qx0ZTFJY5lfR%2FPolxkl5W1a81Lju6J7zU4hsAlfJ3J4HXXBSfqMguKAYpL9m4bMX4ruIgdNG5Nz8mreyZ0j08WnTAANgEzHjPJA4SGh0zBzVJL%2FvkkHl3v8qWLEDFleRNSJdY%2B7PxBlkOc7%2B3N7SQjyTdfdSaBdklwGgfsm6J51tSY5%2BgogLV8Dx%2BBpbZuDSefrCdT6undboibMOutxMkGOqUBM4g8EXkh4aP2k7Tr8CJmE8SYOtq4Gp3Jav3G7KNbtD1WQvvr7J7pGg2TryVOvlPuLcEcic4b9LjO%2BSb7I%2FeE3SBPOOoQwN7uW7Jx%2FjpuzGKbrlJr0HeYjDJemENYI2ZO1cWBMxrgoUdSoOSQP9pyZFV9Zp0LeJ7v7l4yFWu8l%2BALYZIowMtNyiUGZXXdsTeJfTFvkYI8JhDOL56%2BQ%2FZH2iwB714y&X-Amz-Signature=5aa47ec55241a513dd34b9463688cd634ee623f14bdce38e1e59df6155f9e2e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKCJDJL2%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T051125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQC7Sy49zVHjxy01pwHkqs9Z5CZDRqvToHch4E72DtC%2BeAIhAL5yPK3buku4bEqJ205LtVhp5oQpxZvFDcguQ%2BXve25wKv8DCD4QABoMNjM3NDIzMTgzODA1Igxd7Q4knClyKz62zH0q3APS3kg414H%2BeUGglN30IPCUXeWrmkTrGEBPNsqaC16cKtgxYDKG5MxO8t1NJi%2FjYm5fxAuqijc%2BMNh0Uk7xJ3ZXPyyxDTZXTSzxBPnTbgYfcsd0jwMW16%2BJ52PZxU3Jx3NzHLHptF8l7WEtr0K3U%2FFGQ5Rv7OQAblpvAS%2Fkn9PTGkjR8sJ4HxOLarn84jYMDYKbtowhmugDmx4LMlnKWkETFvGbXa4j8PeyRUrX9sCnzpFoRa3weEN7ttu3tzPjA4u%2Bex6AOoPdz5S87QlLXE8xinnPaSrYx9GJH8IwPiQyredy4H1DjsVQfvxmNntKRuKjfl3yQC9Lu8udwX37E0QgT1B30PJh81vYaMZdZw0%2B6cIy8gtXjHRhMc2VfU3pJNzP5xYT1ECLwD8hfEvFpG9m2i%2FUu4m3qr0wXXg9O7xalbcHL%2BcpHeV6V1ZHQImMt5Sy0l4moP3wKkhuZQ%2FIGrb87GuajTfnvfj8y9e6lEsHCFldGlKMV7kYkI9kaxr%2BlwRpjcTYh4ajISYTCFB5OJ88OiGg3ttj8UvWBjt1c4cNQGHK2uZb5wAFxDm%2FuEu9bxx5XUDD3Yy8Sx82yTcc7nHEiaXP7aIqm0F6sbgUWidXMMLfa826auwk8mgbpzD%2BrcTJBjqkAahG2g01I4pfbgtXawSEw%2B2bm6BqVyoJNtJ2JFCJ9O%2BsXmLkx5Pi%2BVLwzraRy7sHfRQw2grnFOwjJhFBL5gq5jjcJaGU15hWJrcb4gA2rJqTlGbuHLzcqLHGWqalmjVGA1MRnM2nzgb1XglXNQBDIBTjGrDKycv4bsLdCPiy%2FCT7%2F3q2JkBWArCxaRGXbZ9XIeBSft5lmX04aGR%2Bk7E4%2Fs2lz4ks&X-Amz-Signature=b3b3b26772efed93af0a7d04b82c8bfbbf5a4bb461f47545160a978251172e5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

