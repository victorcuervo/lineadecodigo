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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTOWEOKO%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T090741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQD8D9FBQIse%2FCEz7hLTNPKvvW49uBfX0jg90Za6uF5AIQIhAMj9KOWRiSD7qWpzp5AMpIeCe2cAXBluC%2BDQaYZAEtIuKv8DCEEQABoMNjM3NDIzMTgzODA1Igy%2F0qYD0ucS%2FttITroq3ANuC90IqAuhcSwGqKZpdjX4Ugu%2FpGWU6BMYM97vdwYmPV8PwdbyWIsaPv0RtD7hUPKAdk0F1OOabOF4f%2FVjW36JSL0OUAz%2BXvLftmQzISn0Ct7c%2BVo940L3uBZijgDkU85D1XCFsdqTIWSUFtMHFqdTJmhgpvURrBMuvX2vx0G3jfqF5b1i7nuxJkHxdGtBU38tnXVjXHeJMNhudEW28Xw8yg65ZKBtWqW1aBTupnDKsur4igZjkNZdMPoXgD3tDLvwKkKYFRA7CzwwnoxKZx4pexqE0dO%2Bk2FpQvckc52PtQHIBLgmjpe11zpBkeEKuv9RQiWknv6VCp4tYaagUi%2FwnnrdI3neRc1YYLDMaaIyumXaznyFo7rZ52rIN%2BfLila5%2FSN6pCFjzvCKjOz1r7AsDzQtPNPWxN%2FwK%2BXQp9i0ZFYwLcuzjSad%2FLIiRheWqwgUQt88oYCXzjtSioDxw9XoVjNsR5IDS4E8v5o8LeHpIdyn%2FXBRk20VNRQsDeSPA8%2Bp1jTDL%2BVteDSLMPwA68DrzEHYoAIWH4EthLS8ocsk1P2o5LCF%2FXPZ63Z82T8PD7DmBcQ66hMZXb0tiRYP%2FJQ%2FzY7USO9nVOifxyrepLQ6LrPqJrJJIX1fxE2kWDDkhcXJBjqkAWeTHaMoQ%2BiBWOtcUOMSW6ZIDKxgmQ6rG5AHQOBc56zUO7jAGpgjP%2Bsip7%2F4z9r2Lph9h2AzHW88qrmxBHezjyP9QStJW93EiTkNvUIOH89vqUs31OiD5XIYrZBnobDAJLaWwB3qxS6J9guN2Nf%2BD3dsCwpZTzm3%2FfWV7wsk19Go5qEyrmE12eUT9t3DLeagay31Y8o5V7tEPJN%2Ffkf57hCNWpqt&X-Amz-Signature=642f90e94e267ba70fec3a5800617c8f70a442dbfd30731283c34c9b094d1383&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PAWNY3P%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T090741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIAC9c5XG4r2NsgXemIWznnxcHi4RXAgL%2BFKjvCUZpTetAiEAquos5wOtV1YkkTS1YxYtS3EASlXYuTvl%2F%2FkF606DcPgq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDBU%2F4jDWkQrKnyTR3SrcA5eiXWU2NzAVr7Z%2BLDr8%2FUQ%2F21sqXvPThLCKC4SzVkFdj4KTWDrKlyzoqOn1qdzeokK9ZbO40Ip1UelxCBDbpEAC2UiEUAFkFFy69G2B9fKAipqIpmwtesVfO%2BtzEBGHyBjIFefa%2FBZ1LBmliZujLJRfRM%2BjrVqUd1I%2FsCM7F8rBtdo9VwemtBcfxSMXcc3DtIW83zDbnZM2HHwxUoZpOYmkafW2dTSbOqh2iWi0FvT1S3IVk0tfjegbGFHj0JDYdCftHUiCwJMron3IH4SCvgw8GabTNp%2BPK5U5MJkD2eQvimGlAHv61kGfufv3ovqY4UtPMomn0isfUH2rWA0KtF4i3Fj1lWjgvO4gAh3KnuNPsUarvYk7EpZDL5buHSZ%2BlH5hjHF2LpXXejzQum6kkVTak5lwPMVO3bHbs3UtlmCbXlxab93a5n8wPJz8zAhrX%2FfWLS3wwwPmh9QgwxSMo1rdU5oFR%2FgbVjNXvdhcsJu%2Boce0Etc44x7l8fOL6srgQiYhQjzaPA%2F0vf9YDns1ZCehrMo571FNKr30e3Jb%2F1eITnNbtg1lJyhrRs6SOej%2BS4OZY2Z0fJFH93bYj5cCzN35GjyA6dYUy2mv9A7v8%2F0xY2JBolZ%2FwuiZktDZMOGExckGOqUBsc6QmKT8aUz6YlRGYLODZr7qn2iJXj%2FfQfTWoA%2F86l%2FbhmpWXjmHHHZVFIoGDJzw%2BM3AvZH9G1IWFnisYJkZDgo6bSw7Izl8rifz36lz7LaxerWQUx0s%2B6%2BaK6VtLjU5KYy%2FBk7B0A7c0cgZjKQMNbojATAmz6Zbqap2Hzt0M4WFw%2FJ0Iy8FEH0STH9Qva47xm%2BAaNe%2FgLaPETSXGO3PBJ48Jsq5&X-Amz-Signature=60ac6b3a1046894b96b1c887685e5fc3fad536bc0e742aa00ea51f9464b5df9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

