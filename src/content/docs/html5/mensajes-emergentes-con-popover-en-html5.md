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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZTRPUOO%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T233632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH7deyiUFeozgImC4pC8bnW6F3sha5jsrWBI%2F2wXG9%2BMAiAUJsOoQZOHayR0n%2F4Yz7JyZNZa1W71LqCjvMxPrxyB4yqIBAiY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQf8EIi6FbJy3L%2F0KKtwDm9G5gS63eWykRh7UYEHit9v0049CYCeDkQbW3CPoSRBf8ZNQfh6mXjge%2FQcG1DP58q2n0iRaTf%2FYkuEDWacOGWNFGwJtq%2FweZPreQwtU6CTywpMP5O1KEDXl36uz%2BwGHgdTaXH9tM5XkNNvePsKx6YOvaL0ntXqWH1eSpnFHyFd2POm1DDSsjr6l9G5yOO3%2BvOh5FbJ7ehFSNiRsSIQkiWjz1dOoIUsW28UwxOeMjL%2BdSptMBCX2vfbqjRdmeRFsmVojBYP4LG6jH2SD76pYmKPW0IroYNn4T2HVF0r2iyaf9vzdql2GFvjWqd9mJ%2F5vs984ihZY2xpeQyxI9zGOXmAx7GuCUwCu8zozR7HotWyppmIF1X8Is%2Fu%2B5gz0fPa3NwGg8N90kNq%2B8CTWE6HYPs1YHFXc%2BdaFxANHSrp%2BbgvtwBDqWBssQMvI1n85MUgsOl7Me0cr32bu8gXXfE%2BnojQCkYIZzmgl7VrHR4F2Mh1XC4P7r%2FK0bJvtvUFLBZSvnakaWbNfEC%2FUU%2BL%2BlSfLvqXPxuhftje5osgHZHwakdLOTiBCj%2Fit%2Fa6xdgTNxMoOKuZhlaxsC28xZSVdKftvTVt1NbDcgyAsjq85zpiiHZHmxN%2FqGAqHW7Hq0SMw2YTYyQY6pgEVyQWcppuC9Ta%2B5BiEQnptNK6TNWYO4RAeQIc5e8mWydhc%2BnR5WABaxxLIslRXUOL8HIzLDbzV4ezk7YeNjM5CeJ8nrCdyqdVh7EbSrytzFEryAo%2BankUY%2Fs0Gz9dczbUcljHhc5U3OzlKn5QvzX32%2FFr29lXKlkGnZPGNjai2KuUmS2qbK1456Re%2FsP6Ypo6qt5hq8hMOHnjRUn7YyupTlx9AQdNQ&X-Amz-Signature=af0d57ff71072c73b6166ed1d5bbac0d7f5d51e8936d0b00b856e19d2c1fb6f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYBRGYFG%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T233632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFy%2FXjkTLMCsDP83DtgqQdnrYqEgF0Pe8AKO8jIkFxS3AiEAxS8dRfpv1CAStdtxOEmG%2F7YXTV%2BojtOZmN01tpR60HUqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHXo7P27Ct%2Bg3hogMCrcA91bBzUv9DMIxncbqxZ1Kq4%2B0BGdHB6W0kcloq8t8Ej979qtviWbQHnfwxn41gUYYx9oc6gQp6DYlXr55XJsoT4ZSsQC6QceXTh4stcJz3ZYYQDNlGN8od%2FFhRG3BECc3AjJ4e13O%2FgWi5NUSwUFA8EEb%2Bksc1yewEs9%2BLbfodk3KqDptg0lIBIul2zfK4nGe3Hqy7oVIeNxGwOvlB8K19MO863YhkqaPXq8VxuMvIkTW38wOGUs%2F8Fc081YO%2FTKODVCBszoR1hZcsFnjLSj%2BL6pJV3o%2Btz7WtVSlpVt1tFxLlUX8GGJ5lkQu%2FCoiLeh9gYeXGGpGGsRnNQNKw%2Fqo5JvW4QQsAdynEO1IxQD2k4SgNva9vsRiqhqDteq%2Bn2r6GUwVHSUydUXN6G2hXk3zltXGy0J9x%2F3w6FAeit7iC8RwsJ44kukmcg%2FzBon63Pu3RIKoIh4Njz2%2FQf7m1Nx8vkouikrPpCR5DdUK6gkT%2FKmzQ%2BBY4nBgu5cug%2BitXnfXx%2FS0%2FvKfAUGPshFqbj%2FRY9BAxYwGX8%2FoaMLqlSleBk873Lta3joUs7AsVrhEgp0Y7uIH6ntnfg9yaRNz7TJFoiBKZcw4785Rwj1BjHNu0%2BngqqaMWyJ4aTrr11vMOKE2MkGOqUBKMff7dTo0J0tRxNLxYxG6IAYyiSNUjwyDSR8Z4rm%2BMLD6xu47KNbD0XOm359CzVOb%2F%2FuzhiAwmnsF67cF7vEzmJ96PYPV3pLXwUHjsY8GukpKhNkm%2BfgR2RbKEzms7R%2BJT%2FYwMJXBE5vZsU8z8pcgqGnk7H%2FLJ8WSBW43wh78Ua81Zca4rafBKfDWhTXf%2FCU0n9ZqpStFkWFn0moSvAvycr2tnJQ&X-Amz-Signature=5b73d10478ff8864a97d6de3d1aefd3f138dfbf0c8adf319737a2ee589cd5856&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

