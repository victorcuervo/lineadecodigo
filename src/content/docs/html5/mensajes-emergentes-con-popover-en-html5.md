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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XWD2HFP%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T021532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIByaELgdZfEl%2BrHm8RpA2T%2BdX4YJmHehv3Q3He27rsFFAiAeyo6i31u%2Bxy3mcD%2FL%2BC4IxS3eUtLcXrn4osR1%2Fc%2BRwSqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnGyQ9%2Bqf5k2QnoTuKtwDSCk00iASFathxJZOUclzWfce9c%2BC%2BRsoGWl3h0BqZFaC4m9qbgnz5qtIqYWn%2BWKck7UKec2adlUqtspv%2BJ8XrOjy2mY3BF3RL5A307%2F6tQ6dOR9lgTx%2BMJH5pXp6ZV3qxP%2F8pGeTg4kSWcbGrk3QG2B16UaUc9gv3khL8XOp7E6cHDG%2F%2F5hJDMPKu3F6I0xnkUoSv0Ntt%2BQuGItbmDCX9SJ9HEWxurCI2yJ3rSDooDLpKQU%2B4bOIqIEYgmZVANKMy8VvgISenRdR77lFk3wi%2BLsHa1f1Ph%2BUkazefGXBRvZ5G6ZXWq0vYw7v%2Bilv8c%2FKZPEAGKpl3fK23x5glKl36RKyJPN1KFHdvb30YE7R5ZwGNlsXwNju9LLtxUPHOjHAnkGoO%2B8MfDZIq7agvdeFnEs%2B5z%2F2gcNrTz2Qr3DSj8MO1ydbS%2FcXJcOvsxP5Qxc2VzjmmrxO4pe2aye8Xjr%2BeUynNXiGdnGirt%2FBP%2BLlQsIoTWsqOjLYfmqoj%2BRO2qq%2FDJdfBtOQsxAWkXpuVtu93zSe%2BsLYD%2BsW8j5QrBTjjChOuhlW06IIMaZSgE9euP2lUNEtDLGy5tkyxCwgTUn%2BtTFYvNNt0pLT5%2FsKKGCC1uy2d%2FhY7fV81LE4KZcw79HYyQY6pgGV392j01xm4nR9hk6jMNFY%2FLIGFVqk6sqS2nINVZ7xQOCaeXtFOdCjL0CpmpoDTqfgQEnOA8Ie62lG9UzjtVzrNheg7h%2BBrHfgVKsQfH3FXchhBa1G9rNU%2BJpiyv0fWxD4fIHTG8nFciIWyl04X9IQOvIAyUlrhuBggl2%2FxsPMm6uyq3%2FwWPteMP6x%2BMLkTg4yBn2T3WTIa5suczycOQo8MEYYF6Cd&X-Amz-Signature=384da6e1f3e91e2beadab881a576eb4842e680539aa77e0aa14052ee2031b4b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBCQBBY6%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T021532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID55RkVEU5jUZjk1aLfdcXTw8l%2Bm%2FrwHduN32bhf%2FEbWAiA9bCdYEW869%2B779HTBFwFnkCocup3l%2F56aYhfiAjytlCqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRohPTNdVFfKogV5yKtwD9M0my8RTuAvEdCPz4T9VrRSJrdoaImS1128HY8gw9k25JVuZzbXp60aXioxwjnrGKDYca6jUqNdcH%2FuZsPIDl2hoFmfdd4Z8ob4gMZ3ZZRdDWEWfrhSJjmQALf5QQv2uZ7T%2BPxgtZ6mmUZ%2Fy4dPEnFEsoaLvnqX1CRtuq%2FYUFDs7sABOysY5lYfo7idIvAiKwNbaQ0tpEQhYn%2BJtp8eqja7WhBx5rIZQxOIZYBMzJWA%2Bav0QJHAm%2BMHr%2B%2FSLTZomTxNEfYfgs9%2BzQdLWUIrPQFdwuZhf7XRK%2B54iQi4fpl%2BhQhXrCKp4IMSsOCjfGZZ7kCioppyoRtJm%2BayOaYQru6z6iJaU9Jx9VotjuFptG17QPUJs9Fkx%2F5YMk682Zh7DWXei3P%2BsyviG%2BTbiV76q2BGto6V%2BmJTtziIW%2Bq7M4C7%2BbEiLPJCYGpBYkVjIuMLO5h9m6hI5X%2F8M3DhNT0GwwxNqoH4FmZBhQVJcw6R%2BKTHJyJJtaJYfxa3pmOAU%2F09iTr5er%2BiqslaiAzG%2FGeRaC7zDt10Y5G9QcVmbhMOVc8whmXDyOJnU%2BTvAYV8l0sffkYsM8A4mYb9zkrZDOG0VxAwKN1DQ6DU0BpY5O5EhIvQQqJiT55M67KQp73MwoNHYyQY6pgGNJFruwiJ3UKGMeTJT%2Ba8DtpV7DxgyvkACuOQ76REPrU5BhPH9LtQVexOlKyzC7Wy94%2BcoZFPszAm00XZ%2BHblifEyjAK%2BcJrNOqReiw4GJx3c8IUALeYWKOe6s7yGxuAtk1yCBULt54XP9cEFzsdY4u0J%2BWxyF4iysjxVmzxF7J4CMiSNuzpyY9EMTACDgVGBlzC4EYJ36w05t0BopA51GNHQ5uIL2&X-Amz-Signature=c8dd5fb175121fd9d4523cd52c8e32d35ce0814773aafa1d82b92c0653185068&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

