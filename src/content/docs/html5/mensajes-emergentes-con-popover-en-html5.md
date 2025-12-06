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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLGYLR6Q%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T000404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDQdZt7DYt65L3b75RkS1uanlzPvRjcIEMizaIphlo9QIhAPktVfdQH%2FY%2F7SYXqA3a00b1iVlM8uwWvYXICiIDkzuwKv8DCGgQABoMNjM3NDIzMTgzODA1Igwbm82d8rTY43XFIYwq3AMoPMg1ZOr%2BiaXCfPVr%2FmWfxvgZCcmRPhG3B7uly9B2xoFDyXwY6XMZgdYVHRUxeKq62jSdYAzpL7sCVsVf8mICyXIWdYW7jk2CtldXXMJiIQwO%2FFghKTBUzpdeZDuRVyg%2BHiga5Y%2FEOx0f%2BoFajv3CrjIYhDTHYyE4LpfKMr5cEasTygdBSlpi%2ByXSoABaIK9AjnmYeCHAgK7Pt9fE3e%2B5kZHrE%2FMPnb4KfYUkPdPr7mUfczWXYWk8qfeHTrrEBa9FLqYI%2FtYnjfjrX8D%2FjN6RJGilX0XjGk5HDC64oexu5ZwnWFAwrsaIW2Uqk8%2Bp8NeulRwK16iISyJxxhqTRKht4a0u566LWscvJJRdYEkfoCWlW0TTxOaSZkkYUQBcVvFlvxzPVDV0M4QwtsIfsfQ4tLmhT2iN8oF%2F0j%2BUOzEEP0G%2FBweAv9PXSs2n%2FXYsoshDfGh22CLAQ%2Fw0dqmp4MrrYWD86bHlqRJyqV58AP%2BKfX%2BkZH%2BdyHBJxWyZ1miOqMMqKG7l8EAa6rRNLJo6%2FETi5nnd2fvEqHQ1zx%2FcACUXnvXrvvoiTspP4ZAKVi2l01UWI3ZAId%2B8M3YoIeVleqWo6rVhrgU%2B1oDW60n3mnU%2FESXWP3Lf6xn9tq0f0jDkxc3JBjqkAQBinq%2FBfBtlVoFXj6v7EgMKzadzp%2BKSyij%2BcUfvISkRQqjuIXCvpDaOHJEpnD5Ll7%2FeEUPIJLCNqLqfbQJXqZaCV%2FQsrODgYDkDb8BoSgvKFYAtT6WpXDUy%2BIIPVDKzNphfmxdS6OsPbGpbtpV3k8Lh0vlmz5%2FjcwxdzdF8%2F%2FNP4wW3CcchX7a0D58WXVtqczEX3%2BNvbMxZ%2BARXLZumAdb0BDXe&X-Amz-Signature=35240d3b599fd6d8093b942ae2adf9a67f8b82f64fe4259a7cbf2947e84887ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6SWVYKH%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T000404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqkpnFW7INkNgY8pheBLvly9bE9v4OFqa9AubeNG%2B7%2BAIgKM84rjqf%2FFRK%2FVpIuoXsdTZdWpEwRNPGx3RBj8EVTtoq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDFEDuUMTSx2WEfRWkircA5r2vng%2BV1pU%2FqKxJ7uWSixNVGH0tthpf%2Be3rUdQU2FZCTdMnGUaPUzZGUfyTPgoThwfEc2Io1bR42o%2FlnRlnNKnVYkH7VGMyval4LDyNGegIPi36OU09u0i8BBu9%2FKQN23g4mSNMY%2BQPnhCC7k%2BRvwNj6NxjEi3PCGYIfNkGA7aoGumUMt%2FO1MAkQOQt4Y5sqarJ5gJLdz6XaJ0wgIx3SKHzpKkIxmFKsZmw71RZ6JnhKFFphsyZb1jkuThjiEUU56BLKgBPjXuOvy%2FYYNoA36tpPxgVAeirvtbhCYiqlAx7S0ThysWUbDfrrJ9uSw9vk8sBoeDQHVowddTj6i82FlAetWtGv0lmcEyxU2mN6feQ9IRWLjvKmAo%2BTSCt39zNRrRocfHBezKQPJZphgpR%2FjTeHz5xpEy%2BjFZRY0TYa6hAgmbonodgpRKcVWART0cCQ1uQ5Pj9GZ%2Brb7S5IIpT7q4dDfFnHQz7TpRersEqXRbH02QbI2dGTRnsUhBHYRhwiwclVNHAWvFMFB351CIme1TM52FU%2FxSSxCJw1A4McQSWhgC3%2Fmkk7ZyVMg2NcJvuBkjfEOB6hkICgUrLB7YaSjKIBk16uKKjG4yZAzsombEe1UQbdZzCMw%2F3H8jMKjGzckGOqUBQIQKf5s4C0ZBb8t64YIiJEgusAgHI0O7btF0I%2FOzLteHzqbPtF%2FW9Oau5P%2FLkuc54zO%2FPdnYOEphb212Tq0A8ztT4nXrldV2EcGMppMZNJdnmLLcb9G8%2Ft%2F9OoHdi8dugWlSIv4HzLs8ybM%2FJwQjU1lvImenfNcDL6vYIEUy401a3N7G%2FOZCghstptz63zMehzQtbob3RpcAYUs20StMTMNEseLZ&X-Amz-Signature=c98a14dffc21657af3e66bf627786917a8bbda81a5fb4fefd9d09086989d7b7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

