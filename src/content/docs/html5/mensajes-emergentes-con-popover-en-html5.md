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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XWEHHFV%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T214340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICSzsuO%2FId12dfKieW3frCIKHzbpoCfx9s7rt13TtyzdAiEA%2BvbVREua7YPLQPznsJDWkPV%2B7IWfJkPIDKGO0R42%2F5QqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO%2BbqFLjDlhnFZIaJSrcA6WP%2FPF0aDPeFL5yjY0PfFAMQ4FHHEpXzCN4%2FUl9pTL4HWlc4AdX4h8HXtZJR3XnIw04HgdFE6LvfvliyM%2BGM2I0ZhO6%2BLLD1tbx4WIWAVXl8huBvMmBNoEGUssQ23uP7McFnZ1pwCVDrGDJ1%2FCHH%2Fr2xRJCquzu4XQ7lgQMQQXBswIAp8YCCtIWKlm8ipyvPI37U8c%2BjNorYBgbiJKh8cAZVcT235iD9S4br9q5zTlNDXAb%2FY6xow%2B2utnVPHTCjdBNi7%2B%2BlcRmJjgzbHMfj1gDhewSU7FOVc7ETC04UlMY0em0gMgkKOC15%2F%2FRjMcWn7TKHFzX%2FY7xmemHyfkoG%2FAj9esWEugGMXjzjQmNliX6wt3a%2BgAvG7lq4CLMQwGCo1GB%2BlSwzbBrQQq%2Bd2xWvdnO5UVgBV0VtpKU1PECkTnd%2F61qfNPro9Ls5RNUHNBXmfTAFYdKrJ6O8CITxm4W8djYsWkPgwPgy6iDizsuX5KXHtPeT9TAVUqUa%2F9%2BlHH2e5HNXemOM5GMyz38F8MhGefTW8t9Iau1JyvoALNB5bM%2F1o%2Bx8GjVle5iY1Dusw8zssUA%2B1s0GSMcLFmCYcZSz0ggKm2OQ81PpxHyeO1x2sKVORopxGbUUbdwK2bXMO%2FG18kGOqUBGagdRFUFOqMcSdXdVxIblwVl4kjQLE43ffRbDrwC0mBulE6dqIG%2BbMZKpg9zzeDsBby10wGln0YVv1k%2BxZi05UiXnZSONXDf%2F8PFbmYV77j7cBZsCIoA7p2chi92dqsA%2FBpALrbPJUqucinHxFcKvrG1ZtbIlJZ9EEqZSPhEyXVE18zhW7TGvWp6lU9swmIX8qi8lr3a07VJt%2B%2FafuOKOgx%2FUGDY&X-Amz-Signature=93df91e3b353bbc53079dc376789f9851dad80c012903ea0b814d78f39f3275f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEVHEBVY%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T214340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEeIVqsz4us1xLsenUkpuBj2w2TbM3xEHbpNMXXQ5abcAiBRUcyWiVE%2FPU30J01Govc609PJLMw288cT82EvVeLFbiqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmexscHgtOUhXZ1TTKtwDpYZe0MkRorlzW65pfpaGNYr9SNuBCyouPnZZM28xLPBQSmgK%2BtcNuVubDwpJlrbn5K3aepxk51meItXQnjgzOdZSNd60EgH394yl6J0CrTzQXlcgiszoISfMweC%2BMsQgTXcxI%2B2T8bLd%2FGZPYjRoUVtryevXbOcdRQsir67HnFkP%2FRIhlIepNenpkPFpWlM8qifePot8xcFbQ6jzXajg%2BqeL29BCGpeudOzcioH4ZWG76QjQ1v6vDtht7XD2%2Fi2AekKkRWE0sbLh8loJi9Snd2ouOB2ZgyeSTIxaPA6Teq2qSng9%2BlWqY8nwtcWjf9Hzjl639x6woYlrJLIwTKR7PpPzI5WoQzB7beCMCrAf0SwJ6QqkI6B872UI5tKqIWJGnOINUraXo8eSmM7rj3%2FDFlm25WDY2r5Wlxjcuv9o3v10atCykHM%2BQ9MXtSgbiBW4dRFa%2FmF53vFdAmLfPdC1SCQDioMpWdZLcI9F2AN2bMAEo8V%2FgMUSgrpJz0dIiKohmqDZBmqy10r%2B1YbfHyN2Qb97JD3dOkI9cZqWpUzP1jHr3vRwxYnST6pwMuh3lofQQ%2BhTc%2FBrcI5YoPRc5MU4Wxq6gX147Xl3NWB59etYFR8t54EHW3G5avj40skw98fXyQY6pgFkAFR9EWr9ZwSdsWKAzfLtgNCITEwlm2XSrt7ssjOBBQp5UPfVzhxZPtKwsk09PxxnqHcLc14zbiOYF6Iwg%2FvIoTMfIHha7cDWTlHjP%2FpOb6kvWT%2F7l31yFO4xx46yw9nkyGNNxw%2Fv8ml1PJSOEDmfZZkw7LHt%2BHLrCw3%2Bft6GmXYRy2I8fqF8yqN4xXhW7YFhp1z3qOAzhLmsEo4XVB%2FXrZgO51wu&X-Amz-Signature=59f4846ad85cc1d063a2faab6ae02a50b403eca6b008b2bd187ee0a821c3e860&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

