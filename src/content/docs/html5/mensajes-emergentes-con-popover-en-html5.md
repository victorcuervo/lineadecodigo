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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GHFKZPA%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T091943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC99UApdbJ9ahuy9lyXV1igIcCdX8suf3n72Mj47CtXrAiB2I6pjzme3tU4xcfbNiPjWSthnwctDRBbw%2BZAhBJdTSSqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1u0Tkvn7jfhufxBDKtwDmRQuNwaKBcdj4%2Fj1kd9Yn6Gn%2BFbjToiG%2BWxB176h4mOikJWsrRopEl93C9Twp1gR9nvvBaZCaiQgGjavTaWjskVlezSiTjoult5KvgX6x742TpfX4gNnfQB%2BaP1NxdiFvvRsL9V5wz%2F40tZzbp4qB9cBMZalGy5HLWnSGvHatQX8HdJNFZp323yRgGTbYS2D6wG5bkCAJWeOIs47ho251kL28pmZkcTO9E6hrdl%2BKgTr5PrteFnTIDjHsgGRyxltVlc3WgyRCenHsxwp6FBZ%2BClG47L89QMMzQ5ulyOU9Q0Dy4wx1QlTnC91c8J3Mr4Y%2BgSwdRc7sORtI4HInAjaqkgIeaxIwb8DCc70hf5Aco8fCaS3Roqq03PLJl2ANWo6DEWlZFinWGV4Hl20oMeC1vz%2Be%2BFDp%2BCKx6n%2Bk9Na7%2BwppORqwqMjHZohfituOQt2UfZ9ZfJ9FqIideRy95YyCiNKZ2RKsuL2kzfx0f5F9Zpbt0mhx7gz1qjwj6Y4AQs5ihHTw3WcaejlxDy%2BFKAZSw097gYj%2FYJB38gaWJ1l3yLnXlwcWVFtTm9HFEf1Y1Du%2FLbJe%2FfO%2BLwmT6Ty9ipthBOlPu7aXIdaOl4DJAC4IS5fthIElBBavkUhRcEw2p3UyQY6pgGktTG19MJ%2BhAg0v1%2BnvnhpYOPH09rqsb3ghwyWmgbAX%2FjFfCu8bY6pv8DPkM9kMXrs1aJ9me9JaMwFkNKd8PM%2FXWmIf2DhyZU6vHLVobDAEupVwT%2FgMDXcBlwra20PQlstDoqvC%2BeqQITOkynXGnYWJCL1UYvnTZxRaozfx0kOmOjY0LGRuNgHUtCf7D1J%2B4wO1Q19ErAGzOyhw7Hf8cuB9BkHfOP1&X-Amz-Signature=3e5e35d2301922a8289994568fb995216c5164edf4a91f8589dc54178fa259f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFAA6YZM%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T091942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHwU8NAecF2f5CeHRWag2lGxQU0N8Hrg5FM34lc6rWMFAiAJwnFg2%2FN4%2Bt%2Fhd4tc4QF4jYuxZsm44adKdGJLKO1QQiqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoxuh6WeEfokT0bMfKtwDn7CbRf6ulQto%2Bm9gJ5Utiuhip8UR8y70%2Bl%2Bn0VAILcU8396TqD8aNI4wS%2F8gxh9UaVZp5r4pspk1vJnKxA93IeGBUXyQADA1lW0qAM%2Bhab5RO84VWhGpyDjng%2BoHnLCVkNi6fFkqV0V3SQMiOSsKCIsHwvK8KMbaUuZppoY8rgkr13J3x8ZjeZDIiWDUv%2Ff%2BEnELg12e1ki5zspQ4Xim7cDBl67vNW311dMwuHKtTqTsvHWe81xk7jdL3QFkTQnRHMwxs3Q7rW1QhmqpASbf3s663xDwCHRooUb%2F2bKzbQsY897zIIvB5MUiO4gxU95y80elSWfdRvMRvQzoNzOlSLtgsoobqAwHRB2U2Vh4%2BwpQeNFzio7XXbcxDUJu7%2F7ZG0onp8o9SloiVS7Eb8%2BOZLawzF%2B6dTuen91kFJk8xIoLjgdjf0Pp%2Fv9eRD38ojIBDDYzOLC%2BVEn%2FLVGTCgd5emnslUWUPDIwPND%2BubFHFMuh%2BeLRpD6NkPEhsud0PtV%2FYQzBdTegrgdOoXlUaGAS%2B6ptVE8WdFOmZWr9upamfd8cvqG80h%2FmYNMxHZYpYh6qIAvwoerJOoQkuWy6qm1ovkOM01Z0jxkULL4Bc9IafWKQUjrXSimcU1qh%2FUswxJnUyQY6pgGTSLMxOyG6ep7PVKrkwF1%2Bc4zSN%2FQQ0y12NCaSULXrMQBn9qmL7YpP8KnXl7x4zS46Wfsp6lj5N1EG62Xf2181uOE8%2FyghAKElnULBXQHgDBsAgIB2PijSM9H4oNGKFSjEImzZiP50d%2FSQNkL%2B17SFmeoAgbhUevS4w%2BoBbN48ahp2iLo6JSc4Buaqx%2BN0PSvXK6LcmEjpA4b1hsXYWzSR6vWnygis&X-Amz-Signature=45771f11f95bda7823429bd8a707d43e6800abe8900c6ce9e2f000347f2d31db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

