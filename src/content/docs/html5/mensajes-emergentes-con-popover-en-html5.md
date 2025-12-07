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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SACDNCXO%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T140851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfR1wnEqFl5%2FI8VBvzovKdbvYi%2Fnwmw5gPGnjY8u1sBAIgWojtvsb0rwztCFeuQtRJ5Rsh7RbceOi8SNOBXN9givQqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDILvkrY%2BOTzayBMJuircA6pENDfprM76RKcAvMcGMoIxSwGnNzdZLnFm7Tip8s%2BYz19eowuTWdhA2EXHn5%2BjiyFjcSQdactHe7aPCeXf1h1L7nYo5ECm5ciG%2FlYd86KdhLjb2H7BmDqc4CEJ7ygUCjl86OXTt3TyAgivWC181wxvBAX5YV33b9qTfMEAlnaR7nRKsxxABFjdhmbqn1soS9L1b%2FLsHRtxuiF0y3viVtZRKOhX37qTU1JM5oG%2BnpkTJLlIsWeKN0JJvp1gXZjEhNbRZZT2W69iOjYxLiXyDFDmYnQHpH3RxAqSJDnN%2FhyB2YDwQi%2B7bOBkr3TQfAnOQCQRVinyE3aY1iWbJ5Lt8GPGMU2n3dOBa1BD7i80q4uXxWtUolUNc%2FczdawsrFygib5qfRSJ2zLaUucK7OPZ3idAnC0zJDNaVdial4tfZLH4eeyqBurLWHziVI9YTOzaSYo6eCg5HzkM%2BWAUTRWwNT%2FICwZRZPH1dmW%2BbcF7iJAaA4D%2FAu9n9CUpfQHNZ4o372kGPOI179G4CmMRR4TjLDRsGxbcn7M5WQjgsTXqqEqctA%2FG01FnSae5zgqgMqJQkNXch%2Bt8qlYEpuIP4wYezhIYl4oF%2FuYXNdSHtlX1A5QpGSkONYY5z2qrH7t3MPqZ1ckGOqUB9pdac35jzaWMcdPTAFtfM%2B%2FLLnuOR%2FmNN5Z%2F8VvJTPV9lUa35CutCuMYJYIC9I3yQ6h6DQ48HbwLN29FjfguQyhLP9630AEftGCRP3ElsJrLzoSaOJf2O9PYuZMDK0uz%2BVcMw%2F7lFDfpC6ah8bSGaKAJYP4cqOVNrvm0Ty9ZDoMjtTWsrpW2gG3%2FfH3%2B%2B2hGLlF3B5K6fPDWNJGFdfYC0AQ8beBE&X-Amz-Signature=2f7ae75be08d5f2a6d44ea19985dfdaf19d7e22aeedb99eb6b2a271de08cb116&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TYHMVPX%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T140851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC5IONRVce1o1%2FmjPiln3gV2TmRdU1fndYim5NzLOAp9AiAwnRrN%2BSQJ6c1aKQ1kqF1CD8ajXoaXVELYx7QB2yOM3SqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYRZFKxqAsU1Lve5XKtwDv3cVwHg8FNLbwgO34V%2FbSJZrJyfEg4jc7hcaEC2kY6AHFSxgl%2BGHoy4vPtxLoDXo9Nf2e1RPRdTprYuIjM8Pj8ccKD%2BHQo2v9O%2F1Qybk1b66uiSp3eLP2OxsBV2AoVS0LpA7NaI8vh%2BBN2GYRgxFhWAeH769dzPDFBWMurVlb%2FJ4awkTMY4%2FLth2jhR9TGbL%2BH%2BpMWAiPX4BPXaiaCNvneGhW6yjgdtnRR86UFSBGR5zki%2FtpjLMM9lVorCbny5CeJQXVQR86IF68rUapOWN5%2FDo3ECOeLUeyNsi%2FQrB%2FCXlEzokxdaGGQuzwtIoMa176eG3nEbpHqZHrEYDOwksJOR0o3izQAMUulASPxuxMoq1kXOFuQbET00hCrsUlJPvNPuavyNpkH0msI%2Fyv4%2FCShbgL5DEKrdd2u05CGRK7zsjE5eGp5aeYzMP7%2Fb3GCYpi6RliK77r%2BxK0rrZUKe5HNad%2BvdWN3nBJihuhJ6NHSyFtA9yZ4VVf%2F91tDgVOQgcLUyzxTiEVPue%2BsfOEO6HhvJBaPtG3gP%2FjFJ1ZsTKsCAPt8UpRSVF%2BkItkPzAxXnZNz4cqFzQOHcQWKd%2BUQXmzHsdrBHsaKjUjkpYJ3ciBTuE8khFKrSiRw53z%2F8wv5nVyQY6pgFY0K8rfkcmzCJWNoIG8TYjNg0t%2B1DiojWS6Z3W0gsqP2bPtPn8oEmJzJWkQ4pS0Jp%2BMFxa07IsqAXMwSY11ThqSumHsuaeMh6m0b2tElCbiX825e2%2BKQfsjJt63%2Fs2aZwaw6Yx76VnXHJwAmpiWVbZ3x8bBjWFi2xMFoc5fUhmTVgqt2flv3D1OzGpYlD8OpPT8bqmJzWWFtKW9m8ngCAa81JtR6Jj&X-Amz-Signature=daba0f5dbb67f29168ead9009a17d88dcb51c2c709ba03218c136dc7b9184e04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

