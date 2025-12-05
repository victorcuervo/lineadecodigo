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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDGALG4A%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T181320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQQywvNt3rJvic%2Fo%2BPesY3Defho7MfRSuSV9CYdbqQWwIgHHQ2oz%2BC3OlkjksNJpsvWbub8067w9gNmJfPp41Df6oq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDDmT1WPZ9fvayOhtTCrcA4gdrS%2B%2BPaHUloR6WZZed73%2F45yYSNg%2FuvdO14tb4089rr%2BQaTWojpAO01cAx6IDne3KYDiU5%2Fjcw%2Bbb2dEDz7DaXSG4V1YnzeXkUglNb3Zp08Us56x3XEMhfXYXHTcX6Jj74cGMdqZsfHiwCHYxRigkvpEjXxZg5YEIuBFIOhp6Haf7ROfTMwJl3B9XQUtHMEbN3bSUsrBa0DNv3kHIVB4axDi0MwFHVdffW4G54ZpSiKliaz%2FBv2yXAohqxYQsa6wfVMGBn70SBtcUoETn8Z5VDrKX8ACbYMG4ckfP08aYCPBHZzTkQOokLpI21378a%2BEI%2FVnOy2%2F9sOgJjoeXKnB9AY5E%2B4i4SIJKKaqA%2FvMnCV0wMqMHVgZQ6YL69m6p2F34w6smLZ%2FkjTF01vf8FIE87ppKoBcAux91269uFBqBsdRN8iS9ksh%2BWNqra6XkueAe6JUgs9V08Vq4Lmi9jLSpmu%2Bwaeu86g9nCPPEd%2BYJx3QCwWGH6gLICp%2BymFtkLmoJ4bd0TeJkMTgwQ05BjBJcv8cBcv7EUVjsVAbc2w4qu81lQ4XmzAL9TYUBQG5pAqUhkUfV40DYeQzaZ4BL8KbT7gem43aX8oQrSQjJ3wgD8syYtr%2BjC1yZ79VvMJ7ty8kGOqUBig9NqFw0n7%2F%2B17CHKN7%2BeoRpNWh%2B0UTubxGOB6JhHxb0ZEtZ%2Bq3x9YFbkkdPvnkUh5GE6E79ltSjMpCO6uE8%2FDRa%2FsI3vGEh0UiwuGMpfR25Y0rk7T5CVP2khQj2yr07EWcuBE4N%2Fho%2BJV4FJuEjoM2HcD1U5HkDPYohowFKc3ergN8HxzmXZheq%2B2q2BAMu05jrE%2B00NTV49tvHOfOpfo%2FGXnR8&X-Amz-Signature=39aae7964c35a7199006c3fbee9476a7d8fa962c9e2e15747c10769e5bf16f91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZB63VIU%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T181319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGiGLWuQrYJXEnG9wSgbWUJBEb5fjGqilzgPB3CdHMFwIhAOlMBHTwIFprI4IaYkQB%2FNAxYtGy7GhgjFv2Um8i2Tw1Kv8DCGAQABoMNjM3NDIzMTgzODA1IgwweMOpOO3lxt4ENNYq3AMGcFRz%2FhOmXwIW8lknIVgtNtKIoAFD1I5w62hH5kp%2BuW3wiZc3U3YWZPAKCq%2F86Kk10rBsG7ZoLCSw8Tl2OGqCELmtO7f%2BOeYiWpISg2PCo4Hwl2%2F3kfnoIBxQMge1UZlXkAL5BYHWLP9Td%2FMCff7XovdFVuIn0YX0XPwDTuQYNsAHLrS%2FK2rRjJOnB4x48Ei3MJK03gkjaNRjwDUv%2F295Vzu4Siw73TWGLVGVarTOQCqC2HBj0Lg2f3feOFjsP6It%2F4QDbkC0narI1NKZKX7b8NpuDDdZK3VnWAoRzDtl1dF5siZU97dUCxOaU0OPPco0zSt%2BV6Yzm4Xtx8rxyGsHdynXcZfgh1YL5bS%2BmqtaEVpRLp99Dh8oSrHa69rZ7wBCSdBQfWLiut6CZLolRJSuxijN0ebWV9huCP46iVi16Qnpv8KraYwvtSOUvqlic4YBLTjZP5%2F06O5IaCt%2BLGtuXCc6dhTj8FLcHItulqCZXlaHXSwoLlJVVW3IQhIPk0NHobLLoTnEK%2B3SDV3LPnOEdHfnszSZE1nrT7H3szoZXYnpeKFvnylfbbZc5VadIzkTo0B0d1HCQzG7MdUamRuMfYN2wgg3EIP86%2BwflpJdwG045R4nmODJst6pbjCN7cvJBjqkASePS67FxT2TT9TE3CbuwZERmHmlFcv%2F3n6Yy1zxrCIaI%2FIi7wVfrfX22K5BQkSVeSZv8Q3c20%2FZGdwr6Mle1PY%2BszLXmjKsuEOnZthwhQ5HmV6NyvDCt0p6KO6pUKipqP0w%2FBZ65qA60iMQLRYqm7njafqz22uiaL5TUvZ6GPqXnAg6g9xy%2F8%2BYbOuE8wE36%2B2u6RX6XZ30lJEEhc9un8Q0z%2Baa&X-Amz-Signature=3afa2d89709aef77a9e82e77bfc3934801754f477aebf87a57aa2b916d7c184a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

