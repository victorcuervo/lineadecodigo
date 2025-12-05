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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OR3BRH4%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T211509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFstIhK7KtEdJsV34MZVMKl%2FeitKGrsYCTwhJh%2FDUgoVAiANekkSo50ZbLIgbuQeCfjQPkDTd5z2ScXf3SVnGLh1Qir%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMPF6me8mBqHGj7KYbKtwDzbJ3eWYguHIbZvWQAhoMkjI9KG30Tol9kLpozxrOiDkewgPTAKxUwWBhOYMndTQ7bdZbdzPRTXUmjClyqqj%2BM7t%2BXDk7U27c5VeS456FSohOfoDjrrtYjr9N0a9hSwTxM%2Bs1ojaRIjACfBJpK7m7LZrZZeSO%2F7m13N1%2Fg4n1fd7ALpV0zoTkQhFkTOPbFyaW7KS8XLIdfPSQNzQi%2FK3edo3WixqgjuJAeOuzIo1cW74w9Aii%2BCghZv6suG2HjvDo84%2BHmnzL6lyw31gsy2o0qhhDLj%2BUgdeW9LZlkrzj8nURjBXCEhdnzqvDHYll57Xuo7GocIWnahuUEdA%2BDD9SOMt8fBbWFxeKWCOukUMQdKQ4dqo90XQFXAEi0PxJAMFyNr3lDbScbww2fB3nR9nXz0Gk%2Fcr54qfQndu%2Bgw6D6IBEeff%2BASYGH70Hx9G9WY5e6Cn8vGiKS%2BlyYAiYwE9cCXvv%2BMDJfXuYmEgJH5KXlHIwp3WETKDI6yhcd1Kkyn%2BJ4yIpsZqhy2x2pm3cJ5G2dPbc9aKn3yelGvCSFh9TqKLTCZat6Rn2PC%2FCOKi%2BMezgSomP1bctBMk0hvZ4tx81iVxeDdRMr0Zl6yJBGBThiAaR%2Bv5FYVjmzVm%2Bf24w9fPLyQY6pgGtm5o5xfTh76L45k%2FyLdOf22vDMDQSCrHdXwVHkAOT%2BitoBZ0cAkPgqQiOcTnxVqiVmdHIBr4Ev%2FCxy%2Fa0c4yKT8risYRSvOnXGnLwds3QM7RECXPchwv0BPYPnGfmlKy92kb1L0Vr%2BbtdD8vB9rL6GPza90iGtbkFuRSMQxBnP2szATvfxAmPosdqOQECZpkZ6LXLSNTqNuTX33tb%2FrNK4lIxbe1b&X-Amz-Signature=9acf50cbd5083e5f0fe94764d282af140bde9d52140b51e942420bc27dfea540&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSBDS4KZ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T211509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCRSCwM0h8c8He%2B7zXM2yaEeZN5HfOIi2ZlOf19xglh3wIgGlv3Zx7BXaojRKMbvjvYboPWb5R50Bx8AR1%2FxALcwRkq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDGmrr7SuNYumvi%2Bz6ircA2nyB%2FNzKpmJBbq7tJkQEqT00EuDAzyJ3kTsOx7QsRbkq2L%2BW8%2FMwmjkhHgQuQyLiNKgIz9woOQP61N64VcFWpsWL5TM3Ffbpj%2BwAfv5fS%2FRIHoxU6L3xoH4LmAiXfqK80IFMru9hbPg5N5mFGgWKeqYg%2BtojSHydEMuJYrJ6dq%2BuZ6T0yyKCwh%2BdCNZsUZZZMiI%2BbDNE8B8i6%2BWncPhKkb5UQj2%2F11BrF0TigQYa6%2BBCYKtoGXVZ1T%2FuWql4ueHLHqN6uXqz3WBaYJ%2BgCfESY8leTk6h346LmUvxxQyjtaF8Sq7yw9vrnZZf7%2Bc82UKXzcFx2WOEGE8szLWyPjgoF9Q3jhdo%2B1SGek%2Bo2a%2BePKpIYzbu4WTrECB6Ah5xQ2Zf1koYEz%2FT%2BLU4hookVBZ6dopOLVZakTrVWZyDetw1fLIVPSAdc6UkMkGeLhdjCwlUkgD6%2Bn0MrFMRMhETUz%2BZ%2FoXdR%2FXudb6UqT1tD%2Bp7pFrw1aqtBP0Vbn5rsKoVoDHpL%2BrSyTqyzqRc8wPKWmMbNLv0Pa%2F0NCdrY4pMzRd99%2FZ7DexWQqea7WMzlwHmFvnLDoizz46U6sXszWwGIrnp2aJkavRnTSuZzXoiEqdR7PmeOzUQ%2Bzys5NHkzHUMJH0y8kGOqUBmPTYNgZ898PSsNDvFq%2FilpPTAQIQAd1R8Ho0nfKOBz66G9Xy5lamHE6YWvY7lNJufV6O3zQ6AtC%2B0sqZz6DCV5h666x5aH0DVKcJZQD6D7ELiZd1qqdBPKLQQPcWqA%2FQ%2F1IlOgbUoj0tSdpysK3ms%2BNTaAis0bkgIMbeeIzcqtW%2Bk9MDOGgcqF9uf1nLpdipxbl6Cxu0vZ9bom3%2B2CfcZUVDO5Ny&X-Amz-Signature=47ab1b681cda249a7184f48e3cd559b3de2b85fecdefdf8237bc573c3b9e7363&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

