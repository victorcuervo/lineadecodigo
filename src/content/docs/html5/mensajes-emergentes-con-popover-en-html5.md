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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3YBW7QN%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T162209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICXF3o%2F1ZhJKvLZ0M2LGG0jUcOMh8S%2BUgiYy1jkbzsHeAiAkq5siTs9RhxVZ3u7Eq5ejXL%2FjzWNTyLTWSIn4eEw7QCr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMYIW9s7eZPYJvhmFFKtwD%2BCkp2MOWiJy%2FOZheYpoDGtJ%2Femc%2BUWbGiuXlP3sQXKWA5EJjzVb86Ou6IcFu4e%2FsxsWnhZt1SLmYZi%2BjPRXVwPdBZIlDLXu%2FyRnxa7aN02tGTgwiTou6OXwnxlp5RdZ0N63ClsFs0mGY2X%2FPLvX1VluZUwiKLVyLLUWHGb3dBKIFXEHMfHJV2eDvh%2Fn85R0qeo0Qhq65uApOtthlD3PMAo1GvlROyDnkG%2Bwhieq7N4rcOkMku9YAi6%2BlEimKm0LnrFtfiQDU0yjzEZRQAbPAF8rNDFLgewZk4LHlz1FVQybHbyWgba3n%2B%2BWUvxLCp%2Bg507aznYPolFP5FjG54alPiKmHDzthpIy%2BAkO70obMPDIBH502KNQm0j2H3J5WhBAZ5gMsZPrdw8cQxdlqai7hMJ6JEjDxo426snb7IOMgbF01QcrLSmlON%2F9VM1HsUbxxCUltUwU2qPAWUf2NDoG02XjOQuOxeth4QmmphSNHwAHYcT0iCmuVlnDQNmYrzsGpjuC22kxGMZGZatZ5cl3jRnpKlQkLpojmncq7i0UYu89%2FKiuDZeo0ytaWRXEV7kcayyxm1d3H8A5rr8wIkqWCFCkaUaZc9ThcE7c%2FTTh2NLNXPn1rYYTXSntj7tAw7KbQyQY6pgE9OYmzhWGbz7YWu0%2FrfScSsqKZEJkyyNrN6A%2Be7v8n5yAn61LuCwmvde2AOt1LMr5dGht5QpUc9TILrqT%2FHuO2s6kc1bNeBx2q3s21znJds4RhQAfRQGdOhF58VopyWah3gos5ya3CAk53w5hVde121AgjKfD1ofC6hy16qg7IKwuqJE8soNo4a9H40aV4QW90YEBWK3e%2Bmybgsx1aJwCUZdhEMurp&X-Amz-Signature=1fafe37313b7d1e603b1aa1a5ac6b95d45eda8bc9c3c81920822382e96113edf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKPQEDC3%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T162209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCM%2BQE0%2FixvdMRvUymuYIt4tTnqDRlQ3nonpcmPBOO9mQIhAKhmTZCeBpPF%2FMeCh4NP8jjuyumDxvlN%2FkJ%2Fn6%2FQIaufKv8DCHUQABoMNjM3NDIzMTgzODA1IgxgyskwEHdbykKlYZcq3AOk6Wim1u4jfJi1xLwdGEdOnxHI9ogRHop8p5A%2BTihzNOtyOJgYdmHtPFLWMNIyNH3uOx4q%2Fci26eWwQoFtR6ycTPaMPo9bm6CVGbRqvJZ%2Bp9uW1%2FYMaSFxVdxjJYAgAzrf1OBha6VOGITw%2Bd0b8%2FtN1zBjZB%2FFlob4n15Ak%2BkMkicQhjWqtIJF1kYzEN9VkZoNku1JoOzvDSgwNHotNFQ05f%2Fb5MAEabv%2FmF9DFvfkjQBTNT1newJDYa9J3VnD4mZCJBJB%2Bt4t6Z%2FHCRKXVMLMAU%2Bxd7Mq6mdKZnqXr%2F6aJC71Lm3g%2B0EE5T4RPFsTQNj5iR5Se8h4VLngV2Y2aspiTar7wllOxS5E5BGFnudqAyTqRLebMljy9ugICOmnRdDtzVBqbhd3KIZuqzNGvk4ldKtcfLLcts%2B8uo77EYmCZ9uNIAQTSkMb5t7sMV2b4kiadkewTZTprKCr%2BZCU9%2BpC7C5gfQn7N7pYoXn4SXBz3X5HGKwIX30KfPy9%2FC1UDIOVdSOaUizuIq2e3P8jgug%2Fd3U0ElR6fxdE1LTwesbrcRgDZl%2FxV9juUrR0ojeDbotmObOlpVyf1oMsP7juLkyx3VUIAxgJAv00cvXgKIbwgn1wQXGDci%2BJ%2BrwsCzDJptDJBjqkAaaNGLgjeBVUQrltYukWnHfGJod1g4dgB5xO7tEmZkunKuQywKnTNmk8K2Tc%2ByJll0iZ7%2FJJkLqOlRy0s5QYc0mXYLd2hIk3HoFI5PF11YTvz2uWeAZXel%2Bc3Y1pz6GtJOVtePp32hldYm2cmsglUqMkok2bt%2B0fOrQUjLz2Myz41rcmJaMX5fQnlmsmEpUAdN80AmzeLhcWmPGDqufQbdicoSp6&X-Amz-Signature=c5ca90aaa1614bd903ea2e6d570c2cfc1f0d791b3eeaf2db5f90a3e42ab3781a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

