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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OZD74Y3%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T065130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHbQVqdG6GwVk3ncOuT1rkioHvQtdeMTN51cJBKb4Z8lAiEAniH6M08cYiZ0%2B1aydHsiJKgp0lnCwdLiV%2ByqnLc99w0qiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIF6K9BZv0c%2Fojb3yircA5b7rvgCQgYpqeDRU2LTaxv8%2B%2B8ydhX496nh5phjjheqnf6hQ6tMc9kj4ZNS4UeoH%2B9GGzX%2F14Wfr79xKANup0FFEeTUAx1JqhsK9qSlsf5lAUCkT4uHpjrRH9QZ51HkOei%2Fsq61sobajlUv3ZFflx8Y2Mhem6736rDd%2BOa4KO79iK9Lh5qAcvZwhux9%2B8rDf5ZA8ROwNYY1A9r1V83s0oda%2FMznnnTMH3efiGEABRzNlr%2Fx2BMiCkZNIKbTr6AZHU4CGBazT66dtH44GxRRfxZkZ%2FsSvoELS4aN8mEiwnsiiTMz7wVbdq%2F6DA%2FJviqAqybIN%2Bi0p6%2FZlQUzDQJxvy3pmYtbgogB%2BUS8kMsYj2Oi7bxRwUHohIZqt90YFqE3m5PGQ4g73XafwukIzu6R9h03eO6nHZ4%2FrNWYMQ2y0nFHmNsAaTIhHDhueMjphDCEswwa0A6ZV%2BV5cM%2FvSQpTCNgzTMEXmJ49eqSEUg%2FHQ1o5enww%2F5U9l%2BN5VQjc5TXX6NMrS4ugG6UDlLrUFNk0RhCxhFISYBuKdC9PQUqPDwNIMqhZCHx4WmgFXVzjOyhwOMaP%2Bp0EVW2dl%2Bx4JMeVprjt2kTegItJ5q%2BF4zDKkTqm6EPkTizHva%2FDR%2BGIMP3P2ckGOqUBmYWE%2F7fHmMPXQHauhD6j8wVgdYKEp5rygnkuAzrlRH%2BzKPon1FbfKhlthbahC0EjkEUE6FTfWBrWYzFCYoNt9xgF7neasrZyKBgeifghTmT4h%2FQCZnISxz2jPbnQQPG4rXsDOwTrWGALP%2FdJJQQKWF%2BvrpyiOZrRvdNOMqHdy%2Bn8NAvymJXebuVwhYNKJc0R4INZKkTFCci9qplC%2BTekadmJEcIJ&X-Amz-Signature=326456b7985f71a8125c21a07910479a4e0f0d9c5cf4a131940c61a254b1f889&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664727LB2Y%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T065130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGySubkMYvDkz6bKTqGYAFx8ghktkjyvrEncDy4n7GmcAiA6rvlUl2h20Tn4qHhwq%2BIeR4Li2gWYvca1W9ZG5JFunyqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMO5sTDgjjEQk9jgtdKtwDYR6cSY1bLxuhTk3q3Cq7YQL75lYz77LOfXbg6MGJG9j4GXpYewongiLkQ7XXN85tykgZmYIYsUg%2B1Xp%2BjFP5HpWX4xyKN6ywBk9EBrTmk9FiHheADsBmT6JAJoX6zozWJdZ45CMpR%2FCFGeBS0tr0c56HtQZBrXySoNXmqjufi0I0EQbgOgFlRHx39hpuaO27xL2DZwsO3elNSmVJkPPUGYFDAYrT1qW4X0ZXTt5F5ZNymSlAxWyVPHb9cAoW6j1nYyUuDUcC4YsGTtCGRVdr%2BY8dUytSWqo0gqoZaj3EEdQqbsG9toS4btR0EEYoFQF3NuHxY%2Frw80cVQMrLdcFsGaCiTh3ANh%2BMYGEjXlCliNav7phNC7W4rZ1nJSeCUV5ypU%2FZ%2BkXKJPZj9X0kJdz7w8jBzwLuAWLb7fBszKe%2BrLtFi9UTFmxF%2FaeVE6Zz0IgF4EhY37jP14MnHx3EiYyo%2FM%2FU7Y0rHi%2B1i0sU15B3z0e7OuzEZLA1axoczs6SDFugThW9HTAXJyFbFItTqFE%2F9K%2Fc9O4rslzPmmAn0Xr7Ezojx7Yfp0rABLLZ%2FgWBRfyNF4CIRf7PmhfQdWeQrH7Fhl0meZM5Z2o73zKml1n8PlL79rsjE9sekbbPCGMwjtDZyQY6pgEh71X4LFPZ8Ghj5VJ0JrMDrt2nVLZeYxKsLeMCXVLq11u8cx6K%2BSyyw%2BUf8tlcQ9GA2P3JDiD%2FgBTkzWYfgGz0pY1vAwkcizsD5q%2F1Ri%2BlZU4ZudH%2Fxr4ikx4NNBTHocQMmdLx3n6m2DuJx4tWcEBdeFz8L1SEdNchxK4MZ1j0QbVEbt0M4pbc%2B%2Ffdj47LlKHnaaduWESXu31xAtmhnLLzxAKikB32&X-Amz-Signature=116987d0a83d4d694b7f83e95c1f7b2b89ceb883b9a337e4cf267ffd177d7ca6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

