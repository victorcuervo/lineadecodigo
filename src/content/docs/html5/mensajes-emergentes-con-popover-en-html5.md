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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQIVW3QW%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T005435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzSUphJrTc3AcBQflfBe3tjfK0lW%2Be9AkUzeB8AuwtSgIgIs0HAbMOsrE5FGmhHpe%2FZnETS0zpVMdW9B1ZqxDL5J0qiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBJ5wQ2qpT%2FXyyPhBircAwkDoRhk7Y6lzGnm0%2Fu7dYfOy55FU58Krq7YiziDrxPSguSSXQLLHDko42t9xIzV%2Byy72k8iz1MClekjQnpmskn8%2BjjaBf9yFG33BtyYGr8uD6FVcLMNX9cuFgcuF%2B7rjawQFr4NIbNjSDJorOMBkyuq9QDg%2BywZpyLhGhNZE7UHuIbtLC0Axwb3jzze2dJk9FEgkvag19hyKnseVKGmY7ndzTKbZ%2BOh78hcZpoGSw971yWGV5%2FXnQ8hVpKXlQey%2B%2Fe0y4t%2B1vQU2QqlgwGk%2BzY1u22JJ%2B2jEyoDpjJf5xSi6K7WuAoaF%2F60dyi4fyDUEYV4hsGQ%2F6gA4A0Te%2F4hQYpzx5CsRrARHkUv2p%2FjlYKEAmX5urs5Su8XOJsTnWvXp6pT1jC7Lobyk8VAinvfp8YhW1m8iDlOsPrx17rjHrv%2BHBSTn3bhfrZIHhP2%2Ftwlc2bldjY03JrMhjbgwMWfJqXKmAjn9Psfjb4H8SMk%2BDiL14D485vdHun%2BG0bdHkWxmUf%2FC4F3LbQsFXZ%2Bepfv7TfmutgLfjDuUQLsSgVDNblIbMWv%2B6Wvfrynxfqofz4wiu4NcDEaz8R05UCaiCwr%2FgITJa4ZJvy9NGrXe7iayXwnVlJZVjPPMEOg55SIMOuh2MkGOqUBCJZ896Uw%2B4dK%2Fm4YJPH3WQoN4AsLhv2q15pqI7LSa5n3mwQvViBy7gSL4nfYPH%2FiirOjQ%2FVkEBgEGItz3pa5iHPB0AHTiYeLwBGqXuOK90hplD9YyZlNsiEtA2mYYr2Nx8CWkRYjtksoolcpG0ixk1uMJUnLcoZLMSQaV7dg%2FQAlUPJNt7zdFp5vt7TLPmyo4oWFT2H2ak1riu4lGzW%2BtY7fzVFX&X-Amz-Signature=385730673310ed7f5953b88b8f95bd3c1de9ec434159f27f0400d992b5109833&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWS7VNQK%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T005434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCICEkY6qA7g3NF95gPDXPV6gU5NXZeFdtcZv7Q7ll%2BLytAh99SKHR8ff1cAUtxmQllUCRI%2F38kOOtltiCKqtFQb%2BLKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzwI7QV9vAbLH%2B%2FD8Eq3ANToOPAyH4PrPP93zcbGOl1C%2B5wAHVQch7Dm8Ge6OLAguvYPHQoJh23AFkao8QFsrG1ntjvOLjuYRZd61imVat9EXfEb6x0xUq%2Fn7uUhX1JroFjQmCygYhWQB5KQQ1j%2FAyOaqT5El1%2FhJZtQyiUr9L1n%2Bzf1xZ21U8t2Ld1xJGUiWFKIwoydgTNIg3UwNrOyfHS2OQdjdck2M85yX8TStOT0yYXdtWusy9A42mr%2B9rxlYTHSP8NaEF8aWx6kaCzVGt1xl5gXh%2FKxcu4gpccYaSIjIzoAAkUd98vGUWXT5fIEo98PA8gEi6PJTs7rJVXB5g8VcoZURezUq2Pr3GURp1GL9L68BaFac6qP2FHo4582Snj2H9rVRvzdG2tlKNf7jtopmsIqqGEwXF5LDmKEqBiUTj5UmG7BMR%2B2FCI5vTOXoakeVupvZ52KBYSw60a7G%2BZm5nKb9hb0DzjfxkcJdWSzJzsJUViX0EJi9392XbGTUkgQwuInCrvqzEhk2fQIpn7LJmuqeGwnDRxIW3FuP3S8eNcoB5AjrGRVcDVMBTz718YFsJwRX7fvUPFOpJh0OCYqArEyulFFnRqE4sChqlrB24zbumc5hSZsy%2B%2FKDhJl30V9dvvHvIByCHRxDCcodjJBjqnAS6uNG89GmijNNVjp0NOR1igexIj8SIJYxcw4E0QuHB9lmN0v886KSw7Ub%2F7ZmQmq%2BKSAJPDYsKAfDOgg%2BeYxNMbib9oNh3g5TRfrj9bDpAFT%2BbWBmw4KMKgHFXCJrp5Ol%2BWxkehuRMZf%2Fm369TeIaxn3J3goXn6MvY1PB0CM0LYoKimVFIIpHBKdi30n7inrpUZ7tm2wMk6X7TOCkn4qKMlLwxajPHa&X-Amz-Signature=5629b25bdfdfba60909cf383502d32ace9e07aca2fe36f3e411c76af44061ad7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

