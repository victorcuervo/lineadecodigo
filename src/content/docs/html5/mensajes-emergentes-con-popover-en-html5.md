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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGDV55R7%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T034315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF0UcowW%2F71HSCWKFwQQyFvoZaOrKbXlvqLkLzSlNz1nAiALeiBUsjPJDOXMS4pjJKLYDbSgFFCyRTahwTWDb9COiyqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLhCz1jvErjhJNBRRKtwDaEnljk5WqCEKK5juu2qxtpFSpWFiEDZN4qvKeG08x6Lj%2FKE2OZ5ifU5XyA%2Ff0TePEWdbc9A70sOPBZGm%2FdDHbatHZhD%2B2OJAZsuEPCao0ZqEIlv1IwErXhik7hMcMJmoXYuomgp2yeYHaEeTJdbbjejPp9sP%2FDx%2FTTPnqY%2FKNQ5Gi5WPYAEUOekeA3krix9ABjsZH8NbO1PDGCYpqj6%2F%2B49BfxAXjuRd5%2F1G4efaBBzVQcKHpz5y9x0kYvvU%2B6Bsf5FrMr%2FA%2FZAjSzCceoIyl6xvOjOE6QfhtVRGzskgNpa7p6o%2FglNDkhiz91WppdySC%2B93qE0cERVXzBz0nmiAvbM6qaErHnDqH2LwcmkK%2FJU1aLrD1aJdaVGvQXS76dHXAIrrL5cPWiw6FuLgnrTWwSr8Ps1VE5h4JQTXY0L0XMmAEZ1B9mEVlKVamu3qFYgSUR1tdJ3duLIP4rQXM4OvjTs0%2FCQUsZt5xCTxrGZw860GXtgYIPOti5TBwhQzOo58Gr2poENeiuH6afTiBrKp4eF7KU15QdZjVvWoAhHdp1SAVPdFukRhedhTrd2GkDzla6bW1SPcHVvmOhVkil3mUapXOCN0hWCrIYp5c42kwSNwyll165pbKk9KrQgwy%2F3SyQY6pgE5j5oKk2ORbyTozZzjkzKVrQw1azoIB3owYkesFUYdnqZUgblXhgUzqWkF48CpddJEZ09KGPl3LgpaN8g5z%2BrtWL1jGMrieokHLC%2FdIZLkVKpchwA2%2Fcf09pIu70A5WjHqmvx0r5Ey8C0%2B2ZYxFsWtCYvUM%2BLLMOtGdfk45lXIyDriAYEybzsyBgm9XHGuSgGeT81Z%2BVzOBwWMceFVlr%2B3MiSvIDiq&X-Amz-Signature=1b5658c8d26a35529404300b13b0746094922634fd7c7c8fe613cce2b3ff1ca4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VT5AP5EX%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T034315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCE4Ynosy7waaC6wzayi3D%2Br4IHpaX%2FWHw%2FS6aXXu54qQIhAPjmD129l8klolN5snGeCeKAmVIgF8DdoS1YJbKtW4QLKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzeKVl%2FdGwCBy%2BHskYq3AMMjOpzK2TmvhdKgV3wp9%2F1NHisYaBCdCHv4e8Dj029PVejsg3iWDmX%2FZGtvTEeZvOmY8Rg3LaY4fFbNcQxG%2BT9y17hMiMtLqN2y%2BNuZSpDaI3Q8CNZqf3nJG5a6k%2F4533HFBAUT6PBljtvC4kc78%2Bu%2BpQy35zEwoTEulWB5sfPNYCXoo0ViY08f0i4shdpvV%2BJjMehiq66Kk9Kt8LKtaBivhNlzpkHjF%2B89aOrn2KihkzoQnT6qS%2FEZnklNqhEdOvEJ3EP7y5WAj70Q%2Bbuj9xAG6CNeoQRnTp4ftHQC0MjLYdmM3AOQOUbIXV4SnrdVib3D%2BV6Kq%2FnPHne5Y0pmvwda2Ug%2FW2%2F9blbfaXt%2BkYy064EaEnDTx1KAdSQ3oyPv%2B6Da9cpxOzoMwcyz8a7lyJt%2BMsnUY8VcfRs9XBwvoKaTKpL%2FKOa9WOQ9qdrt4032jbOVW%2BZZdjWMijdIBxq8SvMdbGlKRi0r8wowSwbI16RIfascBScPivBM%2FGkiTrLHWCjAynZMePEc4BirdOXPHjDQE0njf5yUbeeKlsQql9NHmBZ0d6HSd9j3PsA8xAj%2FKlcVg1Z0%2FweB8lekyppZPu3mr%2FqUk36pU%2ByhvX9zJM38SSzZjedMshJLYQkEzCj%2FdLJBjqkAaxoIgmuNIzmSjoNJ%2BMEvG6W%2F7vfHAq26ZOZoadh0vyR1A%2BuU2gC%2FeAw3EBsyp6WYB%2BAUzMwgTVQtzCBklqeGWNLdYLum28cIjcx6yVbTGAfLe0R9qLb6LDMavqAwR1AayCmiiAzH5t%2BVlfRSRnHnh0u05EiNCH09HnIFEPAXRXxKCdq%2B7u%2BDxbzTHUtOyjijuYYyQUIMPC5C0l9qJ0wpUHntAne&X-Amz-Signature=362c413744d1fdcd31b9c4ce3ab1afb1da9c19e1814193979d58afa5fbe71318&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

