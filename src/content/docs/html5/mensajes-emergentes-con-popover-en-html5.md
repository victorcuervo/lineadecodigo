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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QP76DKI2%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T084646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIBZpIPsLG20P2%2BtjmaVsCv4049lMjZ7JdZ77t8NOJegFAiEApFoC6mr6qVUAchU9W5r3qPXxwKRbfTsh5XAlzLS9eqgq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDNL6Onex5W6%2FTx3q6ircA4MhH7PlC2jx8ksW4i7M4HeWuT6BXx7mixAtYLG5t0PJImPCCh6x%2FARUNX2YCavgNY5ndpFKdbAnmjDl1HAz8s8bM3Kcgi%2Fn9DwnBhg%2Fh4nq3nMmtuFa4nnqj8YjCKIVTvsoRXKnxmc2Z%2FrPyZFZaux2YhrHxUikdSjShYZeIPdrfiQDw6WiT9T7bUP45uEF8fcSKPJTxeLdBP5gw7DNx8DCkVFaeIWMKc8OAGuPtft6VqwSXfkynBRyp9WVj%2Fx8CKbDiQ6weCL2H6V%2BLQ4PuKa%2Bvq%2FGCW1Bpc%2B87UCDC0vasbYfEXU4mfAuz8HhgT0XeI7mtMViqs1lblXHupeV4%2FS20L93ozQkSTmZgg%2F30jDH94ytSQob0y15IlMdSndxXLE0RicXa57aEK66pHS8g%2BA1flvJwfnbtcw77qSQXNv0BMyu247cMHhVv8683ERUAuo5XMx6rZ%2BAzB56NiBDPOxH7R%2FhWFKENxvH10%2FuBBkfkm77r8mrorOFSRhb%2BFsnj36qDpqrIKf%2FquwTCZ2avL%2F%2FxeIkS%2FPLQlLmdzM6FabZ3t0W30sGcRzSNtJkK5lHbp6fAEzMN2GjGZ49pHcg4P7MylicwKhVCiH%2BVhaOOOKRov5RY8eOh6y5uG2UMOGHxckGOqUBWD0b555JzrYb3UPsGcsZnfHSj7USn0n6eBpkgoBD322tPQKjHkW0YyCmet6AiO3aaTrZqDhp6PN0Alk4sDNK9FzozLnjYV2Ne8Um8es%2BjrwnWy7RyZfETqzVl0tJdDO6wn8JmIkasUqtFwJRTqJknwP%2FuHnpg%2B6XIMuxjk38wGYJnctBMby4nLqgfwjXUluv57w9V7oIBejKhfpc8CeqIwSA1W8Q&X-Amz-Signature=9f956391ce2b281d9f00000c2eaf5a1fd14ebb1b93c76b873fc61785a200b25a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGMTDSS7%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T084646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQDr4Xww9GBy76eMEzLFiyTDKl8wMIYJBVvUfR148KXXvwIhAP749MR4KV3tpcQgKRJy%2BhUNFGf0iuw9NdM49bJlLCJoKv8DCEEQABoMNjM3NDIzMTgzODA1IgyukqHDgkMhq%2Feyfhcq3AOKumXTsRndJZhXp03hfTkXtLLExwEYBc7coe%2Bqk3gxjyqJflFYHMM4dmnkm3YGznGcy62HAUqVFU6X180eEVuAUQ9KgY6BgHWHpL8u58ofMfY%2FrCbu3rzycy1DrQkBPC11bPQbw8VVSwYPzdw6OYbWpgjmU8achKGTREhGvQD%2FlywT0B2JH4FbqMzCQu%2FWZd13w32AtPE0dL2BKLW3M1StpDhUA%2BmAmTGqYNfrI3XbA22InPRP7zwT9jYR74jjdhSEnjuWgBvjnxQBlUGyiHbs7%2BlmPXG1Axmhfm656K9rzBUXigI8pUm2W2gWdNOc640KAJQmVmTF1LAbGOaJGgqPlf%2BAdBtl6PObKCQu3gbU9aQEkESYysSGo3%2Be%2Bf0VwlcRnoArdI9mTut7wj%2F7SRaHpWr6E3Tu2yNy6juBV1%2FveygKFwzHgC9CHF862ngz8CMHoRqn2DSwwnfEberNAAn%2FkJnIsCDUiiQk%2FW%2F%2B1KauLVhwvCzPDDGrfDw26Jt7%2F13m2AaTowuU16KByHQ3wLp9x37VElrDrqTiISHsVxlNgAYNOoXD5FlGROGLQeRD%2BtFRjak61aeWeYpo93X%2FuFZ%2Fg54p13vBXzJ4JjAElnraILkS%2B2zhaB8xqXxYFjC7hcXJBjqkAYhGRsn2e7cUgXKKSWMW2yg0LH%2FGS8cYtecC4sd%2FiyDP5hGxJPDfG8dQJw8v%2B051HOXIiX7mCgRnva%2Bd8kiRojLPlC8G1PBADk1aZhU5YisIzgUE2011Z0CCSTDiXeU%2FrZRUPsd7o%2FnxU2CTNCVMbczgG36qyn8ZtRMmr29jEVtDi0fI969C2dMkGdx%2Fqri%2FVR7VN4hnu7xK3FbxcIO2PaX0IUFb&X-Amz-Signature=16050253523ea86738e4494f48810c2e1d1fc81cc8818cb7a242347caf7ee36e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

