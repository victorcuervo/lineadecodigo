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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5FYKJOL%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T033347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLtPiwu5Emn2imA34odULQVZG7suQfKgJUQaxgSdTxcAIgZcXGi7Wd9Qz41yEdWstPmV%2FzfSU2V0wZEklCqgI%2FrvcqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEep0Sp6jw8CZWnCvSrcA57sTTIR%2FeRWL%2BJTRcj98ds1Ft6uIdQpbvMZkmP3kWkFAUtMduX7t48e%2BHXy8Z741keavr7dYIwBt%2BamnF0qcDsIQpkktTU%2FG%2BXSMK8NDR1GmvIoyGLwnfWN29hKHXGTOkprwuOzwJqLrOCJn3EtFppnLrheFJjgY%2FK8%2FzomEd2697Frk4rj%2BfdtfcX116aC5KpwjUt5kB5XLQDKN%2BeLlYDxLxv6PdSlOengvd08fzHzSfJASWoBeRbrViLrDRGM1NOgFW57VPxIvclzi%2FQ0ClK6cQirdqT8oIotQI77ao%2ByQ6pZgygWSlK7nWbzQvYlneUKHhz9JAWbz7oeeX5Ra9ICLiEmGnnT6IKOqsyosbUj0G6uvVnlQySrCJbGr5cU1wek1BJjjMr1gzRcfcQKQGh05Zb%2BT2NJK2kgcZD9leqibCC%2FwACBTlavwyoxet7ZYF%2FCfQhDmkUAbh%2FDmnifhAHAPt9zZZb2FWUjZnnvnpLZBfUXwxOkUPY1O9PpqHUYbmFI9sGLpeJ3uv%2BlM%2BhGRJgi0DfAXB8StguA3NrkHqtwUG5VEGEk46HjdzojJTLr7a4P6aAT3fsseKsQ%2BsLPvdoRJyNdR93%2FxQ6bW%2BfpzbCMKvGzHC6h9QkZH8ngMJTv2MkGOqUBwOJHnpSM8o4oXIqIdVXXVwM3fB8yS4O4qnr8Ytz6VDyqWw05qhFkuNp2FEUCftDbyEUXH0Ll1yfWlpzwA%2FnIFRNIahOU9bWPZ%2BGKNLfUxraH3fbcvv6eLbGrPuYq1bH7abwO9LUDtOACzYd3%2BPe2R3L0ycwlqnsjodTUbZS95VmVR1e3NBGwG14MVAkI9CtGd8IjHj6lkEFxHqvt8qnpn%2FEAgHMv&X-Amz-Signature=a49cf5d599e9ae1b3e1e89bcfeee1f8be4f0af241eac5f361a4b2f99acda0102&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ILSIHNE%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T033346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPNqEOLDnla%2BpcanpQSH1kASlykLwjegb%2F8Asnn73GsgIhAMjdWK0nbmiOqsVkCn%2Fg%2B2c2fdIwtO3rcLnNgGV63xSKKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyLG6ILjWUfjBJiE18q3ANNxgt7iQTOewgdekWTQzWvTwF7iYRrdtj1X%2BCB4%2FVOpNAF3Ms0mbk3hbMz9%2Bfjsu5y%2BCcScQTvJ2QEFP6duoOCfOuAHe1gkQiHr8e%2BoG9vRViXZgOqniJBES8PmwxUoWmD6fFwJu%2BLzs3f44AKLaYSo178s2gNzvY7N%2FTIhp7WmmA5Cj3bKYUSWC6NeNuZYfyMq8uiVdqL5ZFF3seVdKZhaa4x98WFThcgFZp3i32yJ%2B396265QGarHLsJBU5FkZdPiST4tBqAmSONkD0T%2Bh0Dowm8wV6K22yIuYYjUvKe1gVxUhJw6AuX86oQc6y7aJaE8hU4WF8ntxgtvhi9xzHaqElkLpqghgDSMRoWfv5Uv6iCvanng0%2B%2FRmn7SjzV%2BNftRMGrfkwnHAmg%2F9Qvd%2BxWB6sKUi2TQX8QCNW923w4mt0v%2Bhv8xtCSRgLwqmQ4zdqkj%2BVwpgoYjatOLl9CiYUnG3W93BifuS2OR5O6tMNnJvssDH1fRX97NO99b%2BrcSrBUbsemXx38ihay9jMSABRo%2F%2Bvvm6WVwE9%2F55A9huLzZeIZQUfYfv9fx7xtD4NroGRrds6Mnp8NhNELYKNDIOWiG6GyCEjZEHOzoXlSSUp83Ipo%2FH909PqBDgOspjCf79jJBjqkAR3RwIqK%2B8Mr7ZQ6cjXQAq30R7amGez44gFDQwbTf2vmfNhJStuLhItlFifxqkd4dHQuVmj2TQfGST3YkeoMVuDwATwqjwuHArWkn6csXnG0ehRnVYAHqmF9KbFA6C4cwu6jaooBB3L%2BQyEiwZyDz0zeJtfS6GBXEBtHK41a6BhxJuia7L%2F9EsRu%2BY5JYgo7wu9mTsoxpbeoR4DtcxBCnEnZj%2BFr&X-Amz-Signature=6347e6836743e1221fe7f7f9349569b2cb83fe9e4f7402b44c8dd2e64027f9fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

