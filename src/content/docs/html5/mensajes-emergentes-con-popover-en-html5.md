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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIHDE5IN%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T215342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfolH9sU6KhmM0BFciDLSm7x51%2B6PXvbc1Oj2m%2FAukegIgJ1nx9XZe04s9%2F3ISyor9Tp2X8pBqPSXBVouiHWbnHIgq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDCnRp%2BzNgg2pc%2F7z7yrcA5%2BBOXTR3Arhu1WiQZAgwPodLcSEJ4TuUf3OPzUHo6C1I6jLf7OYVobG9VGTNuBcQ6cbuK6WFK5QeQ8JU9NTWEQol7LjUilr3COUqefLDGPIVWo9eLaMZ5d7DSVlKOzUZcwCXST4pOV5DsPLNyTA2GkypVzTTG9Uz0cakUsvk0HnPQYy3lU1yKAXl8tH22VpnL7ar%2BWLPOAAQvZO1%2FRBwxYl8rtAKZQfc7JI%2BPb%2FO1sCKrRiJGqqu0RhNWiV1X6BeNoJPlc17Ru0CebkQ09wzfa2Bk%2FeFS%2BkNnfDfrBo0GfzDm07fmCZTLtXK3YkVT15X6FHArJEGGp5Q2Q9PObjRoP32KnT9WDeY7vbF9NuZIOyw%2FuSliUGMgTnHXen9F3APh%2BzrGkyppSOVU%2FFc0SHDaLclp82Ia8L24TpBNNBAKNmzI8VBx4Q%2Bz3YWjwT9eLH7QCbj%2BCB%2BPdZd8F6hUSZB%2F7HNZtiQO4XCDManEntRs6kM8nvGJsid35mKP%2BpkksTqry135wUCop6irGYqXwrMVhJDggP%2B8hk0PM3tropyihMYHdhcC7uLThrY80p2y6xATAMBbK0n7R4uZ5wyldrYLcEY6Q3dofyJi2LuENOtLLlBHUKaVr4iT396m1%2FMK%2BLzckGOqUBcOPRvXGvMjXfuN09H4hsC7%2BY%2Fw%2FiPtjG5q7WoUtuxBdOI7qDs4rmBEb4hj03hAkf9LjL%2F3DQ8ioGlcpWt%2FDLbLI6ui5Ay%2BF%2BkTdzQHvkYN6ZnQTAOAxsoTTDCigiKNK3XKHrprLwIvhMIK8sZx7fBc5GUmqj6lakb8qZjWRpR3kMtFv3WwHTbmMMCS1x7y45Wm7fT94nKdN9AHf8dfmL5w806ZUg&X-Amz-Signature=ae5c92667c6cb3a6e6b5cb2ab187b1314342f2b982a914b403f0a73541d04361&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4643LIU%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T215342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHx0cMNHMvftd%2BRpmKYaqwTqaHXw2rIVwZl%2F90k662%2FTAiEA4H9g36sdQUBBWAX9q2YXebjMRPmGF%2BplkPiPgsebJyQq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDMirj4YNrI0%2BMybIpSrcAwEN9M4b2lLI3whLUrohtuuC1UZCvWmJ5acKfjtcH8cV9oezGatzomipkhBkieiggKPGj1sSBNFLn14%2BlGcO6nps%2F5Abhi%2FHtYKkJKDvzKGuM%2FWTj1BIZyWMXSNqmpObQ62aIZOM8Q9TdHPLBa7V4j1GjAhnZlZi0At2iJrd4xUcFKUtv7vJf0Xac2o0XEuSqLV%2BEVSnFKmWyLMzF269aNU3vgF8qSWHSINGsUI5OfXIv4lwIu0GuAQ03mhAQwpKUKqnZ051hMnzDSVCZ5JSKr1ft2FRbiQPAffe5p2%2B5DLgD4iC%2FRrA8YI9RN859un5oBDJnfG%2BQuDOxzh0%2BZGdAGbIXXNP6IlcEkqvD%2FXC9xI%2BJ3xJOZvg9ozrh4KXknYukmxFSyow1otr2U%2FoxGlH6o5uY2WH%2FxDm53GHAVtCduo12NUtxwzt1pmSEi2Bnz3xfnN%2BxbakNTd7nZKY7%2FGXOjTE1eOC4x4vLzNq41fQd3hDJi001q2a2dqwMgAzYIA5tKmxiVEiLIYazB8sAZSwjwNGoVEuv4uQjKwX21%2B5HJ0adiNYQRpeG4cFajollEuXaVEHtr%2B366%2F5Uk0FZleFQdO9LQKwJ2MtOQUBQoLgr%2FqppxM4jh0vbPml5V03MIuJzckGOqUBTlzLhWwJ0pSYlIp%2Ba63PB0J0fUBGnDLIueTU17YAzHCaLXFZRE5wRLzEbCzeGO%2BIuDANIC%2BdGVJmPHJqgptVKEGDMGy%2Bm1qSfv5aeD7bnvx3CCflN%2Fqms4kCmjOpoKj9n9%2BTIw9G4%2Fq7Ll5%2FVCy2X5biFwd61nSqg%2BOxPSISFWxM7lNuD%2B8ZQVg9hvTYYlQtDg6%2FktsaTFctF9MMXSXkV5I3PJhM&X-Amz-Signature=8354a3c01b706cd20be5e7255c20c671f644be9716aae6d9843b0ab5c1d759dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

