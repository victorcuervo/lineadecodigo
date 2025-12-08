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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EML4ZRM%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T074421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBXzktneWpTJINSYzKPPJPeybK5U7Q9vKLlcyE8z%2BCGzAiAqcTM78zvZNqmbX6kc07qZGOLppHBzb4zhy6XX5DSMwiqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMannvXfPyD3P4Z4k0KtwDoYcWafUGHtt5%2BBE7uHiq98vWUvchEWCz07bPoHqOKtcZttiI%2BYUXc9Si5Dtj3%2Fw52lU%2ByBPgoNNAvpyxhxJS6VNQQKtBPzw7%2FtS2LbmnDfr%2F4PZpIpUjctRGyCcL%2F3EZsLCBThQl%2F3ZDblx9mSI%2BAnUC53UTO7ZyhPs1%2B26VY18LuGTr6tG%2BGt3DkDMd5Swn2k%2Bxe0JGieUAPZbGuOEZ6j7a71XkXVwSDaO3Lh5RY%2F6g9v22t4RncbjtfOBiVmr96lnEnE1Dmy2tMc9qx%2BCzYOGmGDXlsRHVOWBqEVk4FEsfisOjRW%2FSKmwpb2FcXXqAYJ4TzyePYFsaWJWbPxzvLEl1%2FXMPxd9JeFEr8xED2VRgEntv92SYxW5VBzV%2Fywq1it0oXxc8L6xjIcBXuPndnQA9xxO1A6zCnAjwSPm6WhgmYOyVPQbO6%2BKclHPvbQS0Mtgv5s%2BV4kb9MgiZMcRH1C5lS%2F0xZcAx10rkhPBf1YzhwaGlWxjjGo7ODc5olKWa01p8vG5j9vMU45dslhfBWkD%2FDgCI3lg1fMsljxVsGjNkxs%2B09OtlZLCx1SQDCLNgLewyjJVGT2BuMtnEH%2FyGCbpUNFV5MYhoaUJULR41gHsgHSpvoDToS4gvP4owoO3ZyQY6pgHeHg6FtVOkkCGhAgwo3UepOGKlZyGu8x9N6lG%2B4VNJELC6XOUp2AQbnMLF6%2BmwKCmjToQ97SbRYvSnw1LMGuG%2F5Pg9t%2BvACyhgEPxgxHAljv3OnG9f0uNboiGBBI6pWup6SFTKhgmM9HcgR9vuViSFe6B5OZ3GtGs95cbU%2FP2us2meWlrxTtYHt8rvFnyVOLnNHwLqixPZbzAOMFq8QsKa7cDvl8v8&X-Amz-Signature=b77a1e4faa3e5f951930c28005a8bd89d5b6d2241bbfe7f3f0275365ad4a6b56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RL63BXPR%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T074421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuJ70xuYbTdEZNYgc3jlRDSkzxUkvcATYx9ls9Vvg9jwIhAL8hvTSpvvnsKCGoIksFav4e%2F7%2FoHhc8CzsqfNi9f4MiKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyI0OnRuKoL0T%2FuvLUq3AMH6BjNDOXN46Ngmial2JPk%2FgPifajD7LeGmBF5NTxf0PxtEnQew52Zk08Yjp%2FOgmkJ0hZ8sgioIy1x61Sx49PAvT%2F4s7rvZ%2Bhp%2B2IpHwNAQT4%2BkdB9rAcWRn%2B%2BQfgIhYQtIh6lGLHPQ9DA7AM4xmApHhDZI6fDQJwo9N7ldSuLEAbXgs35DecrAetpXGaNYbspnbWplWnnhaH6CjMiaVg%2FTGKQpj85x2EB%2FOI5wJOcEc8eM5SQex1F3wY9qbQPdhZ6btCi6ZbIgppF%2B4HwOMY7qZ4nJObHp2lEGcnOjJw4mPirs63f0jMrI4WGaXwwv6SNWLX1A74LnvkV5K0RRmj7nJ%2FRHDQZaQmGxHwoAsNWHwUsRKbqgyty4k8iurZ2NRAAJAkbEn%2FfBpYeT8LSxgoeLIucGT1WAXgb%2BRQM2Jb4N5x4m985gnlXJ50060KZaTH9GhyEkH21Gl776rX%2FHGq%2FO3mzeedqdzpyiXzPhTSWfgAQuhGD0Q9iK9pxbKuFaRFltPfideZZg6bytXQ%2FmBhbjllFgsQ7XAVQzALwZbRW%2B6bNyhGkRLkYIBhU5Utx8zDekpgI7ZREQ5U5dg9w5uxx9bx3KuCUIv907jWDptuNZK3KI3eSJsD6wFkNnTDr7dnJBjqkAes7ica%2FRn8NgYovnHLUw2WUPR0sCMwowC4XTa7iG5uBCw8vWeR9l8frNjDI%2F4IvWr6V%2Be0FFWpdU%2BJkCNhQQ8guu5aKTiqOummUwKfS%2FGbWYSXhSBB%2Bqj76tk3jyiZT8L7IAaoOuO5NxSXKhoXswDje1BM0QBI0ViLHkV54ucK3g9N9YD4azjoqU8NNfAD83Ao%2BJjLQYmWkyCa2DXKS%2F%2FHLJhDO&X-Amz-Signature=b566ffa73560764200abc996e15eacd325450e6075ee1e8deff9a1b81d17768e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

