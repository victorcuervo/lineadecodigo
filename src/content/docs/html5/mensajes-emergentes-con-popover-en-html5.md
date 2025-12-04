---
title: Mensajes emergentes con popover en HTML5
description: "Uso del atributo popover para poder generar mensajes emergentes con popover en HTML5 en los que se pueda incluir cualquier contenido."
lastUpdated: 2024-01-30
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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBM22LSN%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T145907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJGMEQCIA1QdzCWeLc%2BCvZQ1zgtqUUvP7SMV2s57PZKsVzouN5pAiAmTkmopvQYEmN2g62vljKFONdR72Eq3MsAVIcVyBgLNyr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMFZUT4HCnfnBBv0epKtwDPQ6V%2B2rz4EH2E2VmRMB8Y88mCd6n1Hnvv1wcH7%2FB7EKR%2Fkgq4CkuiOWEeb%2BjQmF%2Fe5eQ6Wvxh9dWQX%2F3g7qCqdPldv2no%2Ft8wmAHyd%2Bae79ocfDlHNm4Z0zekpYtY02XT0PrsBUdAQCzzbaS3R13JS3cczx3thokszzuEzGlu%2FU98wShCT4bPGU9yB82er9f66CdmZeX%2FvcogMsWWZQh7pTJUeYwZZYJOxkcLrPEgSY2LRj0DLvZdVADWq%2BNz7Izk%2BXCcyprmPvmpfQ6K769A9CXvGRZcAf156jYPYqK59aPit%2FGpkDtjFD5kWymo1b2ROGttbSLZxNpD65R0ZO25Va4pCXjmPcUlMjgS5k2lFbazcaIN5opzlM%2B6GtJbdpQJQVl6p29AyxoUagooMxfflqVRbQH4b8Q4%2B2HpYsZCjmLWdhDqWKG1ifLGumgfw3xsPqs%2BxnKqcixWPsGsQ5gmi0ToXwO%2BPx4%2FGaZcR7PfKxioEOhGqh6X59utRIdsNC75KAOEn0HJLuQ3g1uRZhkcpTnF5aCZeWydppqd6vlVymVsfmRxFGwuS%2BRrfM0VpkxyBazgKZQEQT%2FloCpTxDbilLU%2FZeT4VR1q%2FNZoAkSkBUlXBFiokWUgIwq6aowpL7GyQY6pgEfee3iUJkhoCmH3XcW7MHrdwYx73a23B4H5r2UyZlgFI7R3uiHTWdhDf6MZ%2BQPOcEX5snJ%2F2R6Ncb4GliL41SRrjDdjjiBpiOgGQBDWtiFVo54MQkQqF7qmig82hp0ROsRdCXqZO9%2FIkunL%2Fsm3jt%2Fn9mLUEQFXVCUmCNOxcmPQ%2BKkfakSGzmRo4yDC9GC4O9tPZeFMlARNxpGMOadMVeMQlC8HzFd&X-Amz-Signature=3db48b5974870c9d97e6e005eb9af7e081ff76ee929795ae4b4399d42e4218a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MNDUZ3D%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T145907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJGMEQCIEF%2BSrTxr2hgoaqLrhoeSnmRGd0i%2F43fYfKd6gLHk3yiAiAE5f0aWbTpJikxilUgUQ86518Wzj1uHvSR7KcfoCGSQir%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMxGkfCQFhZD0b2xDkKtwDUkosUR5vYYCl9D27z%2FFrk2dvR0fvZ6xmdxWCw%2B%2FVbf9MluOE%2ByAHHu13ZYpFx7ZaYDaTtOu3A6WkpUJa4mIZxqWQszTsm5lR7i9TIyl7G5EJiLCFbDDPs0exlI4Fz2ETkQVtx8fnzHxQZq7BDaA7TzW29%2BFuFi1wmWxxREdKF6tevN5BaL5Jw1yqOMm4IHGAcKXKxi%2FCxZLH8m7lFh4IBJSEccc78ePTe1d2WNcsaJqzkqWHdZnKiyGn7p1DF4zVG6U3KVmLeKf8B92TuHQYDueQJdstrmwZ3WSggC3iCZQM6H2L4YdkMS91Tj%2B2YqwWWpLvDyBfoDY0Je1BmbCE4jdNXjy0fCRaL%2B3iqgZ%2FhVjG6jOcdOEW%2BmluD%2BkBhL6X8QOPpmsMnFMiQpJNw8Zx4JTmCCW9xlw%2BjhVXjclhztBNzvPnScXdopp61eTcRvJAyR0GUSsEY0QA51VjhzGCP%2FCFIJ0wXRzXsCKkpVsH9wpemk8Ax32bR1HFnJ%2FS0OozjOn6AoKCW3OFCv9KufejZZBcYF4BjCFSfsX2GAc6M8sZr2Sl6j2HvgqhOpnSoAQdoPsLg8f0eMSbHnzTvnQMuf40j0G2G9O%2Bg%2FW3yWWq6tW7ZG%2F4NNmxLp6xwTAwgb%2FGyQY6pgGbjZqZ%2FqQyQu%2BwT%2Bz40gWsGD5vyvtXOT2j7Jj1dEYQlYe2A6lk%2Fj3wTdXWmUZTq8OGdRvsXvrH31oo0GvOa2fqm9POG66xC9a8qjbicKWm5B5rOrD4UDvtjwYs%2BbhuV9a09LzUhSslHeJ7j1xgMCpjNBWERj%2Bv9OZNNG0oQ8J%2BqJgxyeqJWV9E%2BpRcrSjxdGe5z2KdV7v9OP1gRRQBSnmR00o7t52l&X-Amz-Signature=c0e8ef123a2c4cebdbdeac92a5e63f28959459233165b602f956f97b6cec25cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

