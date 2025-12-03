---
title: Mensajes emergentes con popover en HTML5
description: "Uso del atributo popover para poder generar mensajes emergentes con popover en HTML5 en los que se pueda incluir cualquier contenido."
lastupdates: 2024-01-30
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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DBYTPMK%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T210511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDwEsUmdeV8onwtvUwQt2h5wzIENUZpKehla8cz7RYIagIgNETd8O4gJyYRkv9sM7uP7sg1qvABK3YDOOIx531XK1Aq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDJWVjwTdktbU1unWmircA0AHZOtDHlWmzqht1%2B72icnj7G%2BffBhso%2F0AfEpdF9Qy4YgscrpFazs96PW3YGw2T4XRki7XXSJg4H%2FnB4kcfJA3Q6EGp58q%2Bv3mBz1YBkLmGJqUZT5U7M0kP2LPb72NNMk25XmGj2h8KmY2fdcq5%2BH%2B6N7Ruiix0bLUmmH3HVLHQDSLhiAVsZxicpJWxXFp%2Fwq9AaueSgZOFh3Z4PHgcd1MFEQE2KnpIGyQcyHQ53HzGVv3NV6NQAxxJaej24TjuLxPDE7p3IQecZCZZYs2ykIce9U0on%2FYpwzzuIMHg1a%2FpfbL4AG1V0f8h9IKc2Dgij2HvpR4c1qYu2jdbQUYXCtrD6zo8h8ZlPOj4xCzYTUd%2BxRODaiv2jIDkKixTy0pziDPyJdZAq43J%2FdSHVX%2BoCZpGU0aH8gMe3iElLkmUfWzmgof6BPoMCnbA7y0L%2Bq9fcn%2Fhtors39xnvQCk58w%2F938My2uvA80OLoxXewKba4tbF6iVc%2F9AWYks53jCNxZnnjmuQ%2FCTqcPUiiayKsWwBHBCiFeV%2FjxkBsv%2Bov0Wb11SNFcgEEIZLEiFGU%2BTrAG36tPrgyYJ%2FL5zpNnE3bJmmegxKF9kPH3KKOLuSnDXZCWA1Hz7Zl0hiJcYzX6MMW9wskGOqUBi%2BXRlBypuUUFrjTfGAxA6GTWU8x9UmecJ0oUhNmbXLorJBGAAbsp7HEnXM9jm5xvkh0sm3CTD6mvGfCKDe9zF2hPvLdwPcA0PNNeTTU0RhSL52Fg%2F5p6ubXA%2BIUazti6VYPyojvrzMGokaf1z21UZpuuE9cEaAzbXM1kz6NAL6xvYrMvI20ABEbc12BzVGs1aH3VG5%2B4hMVUjXOLG%2B0gOr1zVBKA&X-Amz-Signature=fe05b916be8618de910c2d6c26b33c6387f581897790d45fd650de9c31a64d4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKP33TYC%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T210509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQCJF3Z5s7MW%2BtChy2NTzvuS%2FcrfOry0t8anYj%2FGZv%2FDcAIhAOXE8KpMxREetiy7G2AREURXnpzPxhyGJTNKXHeK3Nv5Kv8DCDYQABoMNjM3NDIzMTgzODA1IgzFfTCgq4sW%2FSiTK6Yq3ANby7H2cOzHOKhGebCJ8iztoUSr%2FhzFcKwdF0C%2BThXxFcrgr9WOwwiYb3NWJIgoPOOnesQYR3tdyUXnDqZ9YiaH5vDJEeLe4DGrNYm5no7%2BPAJZxtm%2FqbZ%2BIVQhfkHLC0Da47LVTeH%2Btw2YvtS8zIZ%2BBaW3lknm76xnh7pry83YD1B6ZDSOY0v6UH6R05JPa7yTfcfeA12GzUJFq8rRstNL5Iud0ggmmNUsi1T7AsF6eWL7NIN%2F7hpf0Fc70FUv32ScgW8yybGbl6dZlhL3DRAxUaxnmC5uqwZQL1rWr8d%2BsMx%2BVt676Bk8NR26lgWpk1nIZNJo9tuDZd%2BfPtj8YjuAN5F2Wnxc4Pd4VgShY%2B0h1SPS%2B7z9LbzkTj%2B543%2BAjNEcq0IfFBEZXIxTryACD7g%2FjR%2B74J8S5LbM3PvOHLPs1YhKNckhXewu%2FW0vbmFbRq2R6mdfYqZWJwPf%2BLwgMGi7e1X0dmnij93h%2Fnr6S6%2FrVM2eO5RQiZSId5xqJbHPQF4SX2PhB4mIo%2Bzkw7F9apMHY35TqeHBnBUPDt347PUJsuV%2BHEXY86xfu2E6jRHZTxGzez%2FqRiYCapgGZT8sH8tJELDBU%2FgVMxKwx1EePRpD6JAx2fgln6xmLX1x4TCcvcLJBjqkAe76MVrGRjaPTa96qiwBFYoL9cCunOHIsk%2BmVzPZK%2FJoSan8zJEdydMaJ2A%2B%2FSQwynz8EtnJ48Ot6k6E3GpenGNPyK7Kh6jx%2FFFgG8JOsRlho%2F%2B1D9hkWZbZGYaK2DrMG028pB3Mp%2F49%2FpgdCYJKzqEGy4EaYZxw7ACFiVMamEhsea9Y6mWvWFfyfuOQwdxJrQJRgic3vJOrWl33HyppiBEnJf%2FL&X-Amz-Signature=0fc70c5871d27e8c6b05144f8313096f42339c123909c630bf78881d429a45ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

