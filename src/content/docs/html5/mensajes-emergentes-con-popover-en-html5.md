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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQ6RF46K%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T060737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGaM%2BEJqiwsZcJvV8Fl3fYYcXSr1iPbVot%2FnXJKDBYQUAiEAxBEj8tdQs%2Fd%2BjxFAGto97kwp%2B4SDGqahaW8RHZ1powMq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDJS4eAwSIgnXmpyrzCrcA2rsrg0WCfR2fUjlv3yT6eAWE3%2FcklyKGFSzyV%2BmjuxgGfWZfH1S06RJs09w9uXAmB%2FnM%2BftFx11vQr9D0XcDOd%2FideKIfgxmwGegXOGjH29ZjekBc6%2F3DTvUn%2B9a8nvFRI1BZUANeaFmdR0SJVRIiWdVBk5U6ozobWv9rILETZJAqGTNPUua3cw7eQa2UGCFwhWNxKlge9GXJmt7ic9%2F7rYceB%2FeOpsi6aQC4Cjv0MmBROxMzaLfXa3e%2FXQ51Isyt8mATljvJnrAaS3aKePSbJTF%2F1cOsZSAuvxIY98QDURJOYNYKCMCOYyaM%2FFLuIe5wgtlFOn%2ByU4GUzdSINa4PdCVQerR%2BtqKds5UocP6Zp%2BaHZtLbkPvynBgUnwbb%2BmNY455IlvkLs3Wm8u7rr2uQA%2FUT93EBSp9M7rmNBO%2BwvsAoemrMbtQcWh354rDTnkIrINoRt2xBkgEAdQ0%2FnUXOOzWunyYWnHvqehTqV9PuVBlfoWpXwh05AuxZ66IxjdOnA069lA20ATtYdq1%2BJeuCjdW7h36yrWrSGRRiRvKfsqBM1zdqdPslz6MSPLO1cIl28ILPkcLNkIyyKbmFI06NlifSXen2cClrcGGbm4f%2FAUlMj4IEW2ghihdvd6MLOxyckGOqUBr8%2BRGIbkQKj8wF6PKLz5Qb%2FnDy9daOya3QBz5TeIZNrbBgmTI4Tc6TUUpvuRIwzyXKk7jet39qEXo6gLwa7OeTewlqu9lzWrVTEIKJFVsCGEDSVIgIF56Yf3TZ12H3pdrBCCRlw8RFXNJNOrDgzviAA1vMV2Ss2Dw6V9ZzifG3L%2FKjvxH0lYY6g9Bl9KE25DEQzTeSi0dbOXO7ARc1LuGgOV2hnU&X-Amz-Signature=c820d4648f6893ec0b94b58bd0522102855ae381cc32e5f2f317d7efa125f6e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSFX55V6%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T060736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbxHA0%2FEq%2F2F2lo9TtghREW%2B%2FQRgjwT%2BMYlCeEhuPN5gIgG%2F53VzNeVNENlERvjlj5l2wyDUGMNzT2d1XcKQOrDZUq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDOvlHGZ8WW1qBsL6vircA%2FxXqfbN3JKJ4xbFIgB72nRZlKiEvPj0jt6J%2FfbRUZrsCGw7hvP%2F0Ta7RZIg%2FeHYTI0bcWRPDv4tbDRLqV6dG%2F61qHKAMb9l9pCQfCHsRfyUpAQByE0qOZXlvDQ%2FptJgtPoMR%2F2nzxDbYhdejnFpa5RS6HfGCYX6Gkzv7hJyCl8fJOtqXsf64YpKtIWagQCbJaIhvfQMQM9hjH6wsMDfpIYt7%2F4KClbKbTaRypmHK9tMF8jNUpsz2ZFT%2B7Do55HjEk3UnNUlFyGbx8ojjnYQ96xpvNkj%2FyD1Oq9YKNtWgOBekiZ%2B9jd6kWgwJ52rFxHWdV83izx%2FKofuYNYm6KJilKlRZtX%2B8hoyq6UIWj5qqzTzHHCr1vSN%2FM%2FoKt4MDXIW4KEFZJ%2BiS7pFhYGl1ELYsjN6Ywv8qv%2BTzX7ElZayeV08HiP1Bf24%2BzkjNaizLfOhqUZniINV8j9fHsVUpkRT8%2B76jrFCvTw%2FZxbHAdA85cAPo%2Bogd1Pqu08nTJ%2FJlam9pCmsEClOJrwqdkvc%2FKsSpNL3eJ%2F%2Fc1V2heG1EFny7EKANM6l4otqW04v9DISBD1wdgtqPckowkKh4j85UX8wXGkcxSI%2BpJqHkmLc4gcmKlHOcipDjcfqUYcfusVzMJmtyckGOqUBySpY4LQxydutG%2BtTZ5XeJNXdkF03o62xQKbc7ETTW6bz%2BiCbf7XMjeE3GknnJsnqZfll1G9Fn9MdoOHuaFJNQkgcbeZ%2Bz53wpCR4%2FYhUzAetYrm%2FfCgQRk%2FaShgCczNKH18Z1DUwvI9n0Ll1El1Oipo8OLe3IzoEL9kD%2BrFbdK%2BWwNhgm24z49%2FnbUAeu2Mw6aCgbsz0Vjy5%2FYHCAZmiJzNfXq5Z&X-Amz-Signature=2a4efeb549a642d0e942452a21651ca8b4545576ccea5cf6003c22b61e8619d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

