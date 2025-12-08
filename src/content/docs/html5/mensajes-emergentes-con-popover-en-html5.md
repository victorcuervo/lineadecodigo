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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6GQGSE3%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T021846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7zsVgQEc4ABWWn27yy0b3kJ44pbGWhkrew9qn4SvNnAIhAMYsLTSkC7vl41la4BfyeG2ujuF9ud%2Fnf%2F4fOHx9OfHsKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx1Vki6PJ3IytAomecq3APFJi9rFNHHB2gkCuWnJlrqqTdsdd3YRv%2F8FijPfRHtxSSO7sIsaxKL6sv7dwkL41MLNt72xcGe07OI7Cb4KKs2tClsSxa9qtuu9CGDkWDzxIEDPJixax3yvajF92AdA%2FDLJBa2bbF1bsTq9qTRpOOloQ22eBPbNXmO8qxGYvBkmftF0tqj%2Fvy6RReNyTHjHOX7wmhwI3ULTJCr4Zg%2FFQQPo6vPFqrkMzuF6o1kiEeaGL6FmCG6ue9Ku30qQDsBuEH5mmAVIraHgwrE7l1ZEPxHxp4hLAoApjkKV5tyZFFX5OtbDcVHiT8TmmQ2m1rbSXRQvogbhseYwY3JiMvFSWGZyaJuqX27YalbKosSdddA9TocbOSJkDxpNpsRGiwnbLi1TZCB9JwtOper1gHa06FfkcaDqr9vX0V%2BetEpFlB4Cu7FZOLsezVRvuk%2ByJVUgwAnc4NEJeKg6PRM0YR%2BPz%2FqLndy%2F%2BjK0n9H8ZMLp19M1GIF51oAoiF1jT7%2FhbGdMPr%2Fd1zc%2B9YU2hjVLUh1N%2BsePBCPHLRbLssQaDuoudNtM8W%2BzEV5yMkle9XkFKzQuE%2BGgDUrsT%2FzYRMww3oVIRnpQEBH5Ao7MGuQRP%2BvN76gljVnoGsj%2B0kTeqW72zCG0djJBjqkAfYCWMxWmf728jGvBcLczmlghoTeiaZzAjxShD%2FZr%2BWF2asxNb36v7cb7Chehq1plUUQWtzg8g%2FDvTfm8OPkVdioR8O2R8vLErZ1TEOb3TX%2BdxeUClf1VCZtGpWZpWDDSItYG1Zs8DfieohGemBRoKzmsYuBgy1CDkhIQT3hOkjAmg7waXKw6nQAh3TbMg0cDtJckdgu7BA43jYlUVRzpADGNXcY&X-Amz-Signature=c3d7592da064fafed68ee59a87fc691fc697ce5bfea27f590094cc85b28abe2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFESNSVF%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T021846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEXuCOYsLuUzoK%2BoYIQ2vH%2BAMwqriWkF8i9GjpFaqjGMAiEAsXlxjUn2lJEH8PJrCdK1z3JFw7ULFVUJOn%2Bo6Wo60Z8qiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJxiY2GffGvbjVJoSCrcA2Av9B48iTDdzS4llW%2FrETRb0iS6Oepx%2F%2BUflEE7gL7OOVCHneLGnJL3kBX9pPF7PXp8YP60Igu2YFClCaWmnfp0Z48AHb7Sel1YCen3MVgY%2BBtQ4lX%2FZuQtCLcTYzrBJMzPxkB%2FAHPgNBHUib57HW4pMVnuiNqACuSs0o%2Fi5Z3iuOM7TjKtN%2FUrNWVY%2BYy4zUzCES8z9%2BbXJgp37HnXDcViJ20rVdwu%2Fx1VVSKPbr5HPjJhOSKh0uoHbWtawBZUjEWqPoNObs6x7d39BFRksYIAS6UCo3FmHfanta1ZxqgcoobGAmRvyMP0%2F3gbJKU5dAKcqk7dXTr5Jzf3BvyCkzxyjhHjBnWqSeEY2pm2nf4CwHH5siYcd6SYVg1adM7hERwFFRXqtVmbcbraJrdzUEqT7HW3CSeOMPXWcHVc46NTtUVtQdDIWuiaOad3mevVS%2FHQzRwsDBpg%2B5%2BonpnxCU7zyjA%2FmrD%2FQx9CddXlj9h%2BKz1RI9yWs27CxXP6c43gCqFGVuB4pxRHWbBxIDkeMnYX1CtUYzhnhLRqtNrbagNZJy%2F%2Fwp%2BQhdT7afnizu2ofl3ZP6XF5XH2zrLD2MPBqIzJZ8%2BW8jWapevQ6im9j3PWa0xFYaCKYMutVJV2MNzR2MkGOqUBARex5tIQ%2BL7B91my4v42g3JPun32VPYBsmjNAYFgyDmFybTTTBexsekqSP3%2BpP%2BkN7bYaTKP8u5uWcJrjT%2F0dDZ%2BdYJM43rB%2F5hWTsKvp2zyYqDzLkHUHWRztKwcwOXx2MmIDh3%2BKKFaxAYYoMVm3kYknklZnraxkp9tO8XHbZSdo%2FZBtgJB19bTdQWehszWHH8rZ4ieF55xqd00wcXzb6xMMbdZ&X-Amz-Signature=30e0fce6ecf705c2b923fe95916b9977ee2103d41074339bad2b6548e548590f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

