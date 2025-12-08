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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THG3HVSB%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T010815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGMg5CVMTJzHaHncmO9TtQou6zE87KtolFrr586v9J35AiBh7W%2FkIAnAHwc%2BX8DjIzkeGoeSuBZtgveGUeQixnXpSSqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIeE5qd799n8fWwoTKtwDn%2FTE3OoJ36eQRQiufXor3gM9tK5J6pHBl2Jktqht%2B8kSi5OtiPAyX2xA%2FDDyAkEmN8va%2BOeRJutbBeJlyPkbpxEDCeoS23V8mDiYCWSnOSuYB5KiRC8jGW9Q01R%2BiF7SOWoux6m20SdEx6Ov2qFeKGgtcnvCCMeGT2DLVVaf9jF1dXzuQlcb2622f8oVt%2F7Tv85IjwKzIRlHP6Zre3Z1jlW7SPaF2ANzzX9GFq4lNUGajUhdFGir4iL%2F%2FtoU4ciWQEsUE3pHdCvOWW3Y94l%2BXq2MyGt7VNJ0k%2BejyVyC9SEm%2FTMGVYYM%2B6gN6IAnaIIXLmrr%2B5FaVNfFgt4vbjtQX2hL%2FM%2FEQ6s6WBh9V1zo6%2FuQHeMudyC%2F8Z0bpzf8efGO%2FC77AnO3yAVpP%2BZhnmrVAk6d0ywcWDIbmSp5WQW6LF7fjqss6ISMLeiNuFL7HZ1P6eWGrGLp3hyqEmhpa3XjSq%2Bff7dHbRwDOR4xHO7n4b7u98tGkhUJY4Kd47QBfyxZgp8tW6%2F1%2BR4ZbmbcvXMMA1yL95H3MVQwn4V6nm6SYgW%2BN66HttOCCU5yXhT8TconE85UBwPsaAEc44oUCvYMSe8pmY%2B0wy9MIDoUSKlgl0%2Fs2EKkBoQHVJt5NfAw56HYyQY6pgGuitjjC8pwd17EnFVbynJcvIzR0oPW7JaZe8Mp0x%2FGt%2B3RSLGw8oh3YelwXFfaXBMuD4ULKsEsHMMG4WLk7sL3xuJ2D%2Fm1D0NB80GqnKfO9ty3S1iqAB2dg7%2BTxd0o7zSw%2BOR2Y87wEbQx71TV%2BGxfPzyMiczjma173Cw8M6KV%2BmydmTdUr8xMu3xKehxW6ohGHWR%2BzRCdyZV3pS7yRuVYjiQa2Xqb&X-Amz-Signature=4a58d678f0759386c2bd32024d7ce7941cbd6b79374aa462cd8b6a971a916eb1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QPVWNK6%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T010814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBDZ5%2BODREiWGsHq15h2Lx%2BPNixuNP5yw%2ByQ7kC872ULAiA9pWNrDiy9KlozK8URLoKhZ%2Fzcy2mIFu1eKjDU2THHMiqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBiQyvR0sOAO5%2BWZMKtwDvufq2pYJX7xGTAdJoQN5fQEsdoy6K1nuEiwrdX2xMYKwBJ6uBifVd%2BVFwFyBQ8CCfZpYE%2FYj6JgnzWJ9FrCIMCirDzyrN8hkonABTGA%2Bdwc%2FQR2Gl0BrBMG%2FzOQZQUwE7kI46yOwh5BFLj7Uhe52EgRtw1mGULJb%2BKMjf1%2BSa4PWVdCb99WaON%2FvEcKMPIJ3AUD4coJt3qWto2Rdp6xAKzD3IEH2Mgyy6c2ql0gsrlFdHqZWomKlNQwQT4Hd5ao7Ui2nJDDNeIodXhUJ8UoQVxZry8fKJIHamzuON3VLgCYovHf3rBTdjilTJnIzHd3kw98I2BhUt6Yu8kN13vHOgoTlPpBYHCysmBPFqnoFF6w1%2BFLkLLDqaYLS%2FX7yDf9MSQLaR7zZ6XwtDPmG4RjlNZTAI4KRt1YM6XdY1wuFRhwrxkWSX9bU7V9tJaMCIfrdUGMUuw%2BXHuNqZbJwSa1zpaX4tRYuAl6KZE45%2F0%2BZRGQHTa%2FZ9CxYwaLsr7RzvFXRde%2F8IUwB9cZPrqtcwqLMRqxh6xS43BH94KxmyalNLBnlS302llhc9HFFGozImEvAlE6a%2Bk5PBt2p2XlZrh98s%2FkdjhIeVs9Qw0oey8oTxHs7erADtwe4Xh3C3lswg6LYyQY6pgG6B6ptCHX8vS2KcT9Z9UZcT9Otw%2Bj%2BQAwzQ3LAg8y89azatXXOy5PZqOW1KV61rt8EPNAmOEF1Y%2Bm2C7dsmtPgnP9mdTGKGbaedjLe5JGMw8scLanmMGDYNBTR5G9lbHmgN8CgsW%2By2MaFMbizf5t622OFnY7BkQAI98rrb5b5micygwQIj%2BCzwogaZNyghi5AzSTPvf3kCngSyrYUGOadJtpTTdmB&X-Amz-Signature=d73929068173020f401276e586aa9a4d4d3a1aae756f5940b2ea557f264b7f80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

