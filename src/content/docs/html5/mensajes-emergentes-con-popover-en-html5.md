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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGO4P53U%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T053205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCICee5iDHetEgrj2fWo2cQOW9LB1udwaIrVJbpi2TCSEpAiEAoIhp%2FitSBtdmUu27nDTuImw5TO0PxprItVqJywQ6E3kq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDOUXqhvPSKTej19HcCrcA8moQWY0HyOOsQxA%2BIxfi9jRdgw%2Fyt5RHrnEIPqu49CxRrLHAvHu%2BLc7EfkU7ohzlRIt9RYDIu91xhuHYH7HgGK4NXf%2BOimPul3utPiYBq%2B3ElRMxU37tpxhkK1Hs63fbbABiI9W0xbO%2Fmowy5FkQmvAmmavUSdyYw5c1jq5chWj47oezyiDwZvzBLqSYmFdtYR%2B9kVVtlgwZ00l2rqJ3BV%2FpBgPVS3KjBaare5yJlPzc%2FKkHVpPOAtokQZT9hHyNS5%2BQT837FkJNOqZSK%2BoE%2FM8uA4CEUhRbuQ8a1WQAHeDv28oGrYMq8ULPfRImHNwOFugx%2F8cOeBJ4siM0o2fkDBsOCcf8D54EHLk1BOhWeWo%2B4K48V1sY7wHb1Wu7JtwRKRPh0fbVoHPza2U75LQAzbgO5F6kfHhyBJ1P4tWO5r3fTv2Zm9WyHLXFfKJtU46Ma3zIVtK6m6OAZdDOINT%2BcBWG3%2BF5dBSqYLxgRUgGlU75%2Bb0ZYigd%2F%2BLUEd1szeS65q8RmaPw969MNQ34vGD%2FbHfs28rnnE3GMBJ%2FxSdfd%2Bku4xr9Zu9KNwOyCVfEFv7Ocm5H7nGEo%2BK8VWP8ac7RAZcsjB04hvW5yjp3rwPyNB4Npb8QeOW5sfEG4pAMJOuxMkGOqUB6t%2BJ7YeEeyBIShDy5HnbABy8S4vSJXN1%2B96IM9%2FFZvnw6QXCc6hXGUOAeU8U1LAogc9DNrd6b%2BGxbL7ZGioRSj3C1dbN3IgKrg%2Bj341GimZa3ixKws05enVQ4vDIECV6ZK6qo7SusyzROUUoxkm17FcePTipCkkFJY%2F9ze8cDdLngeHz0wLgbYOa8nRh7PGZGQUhe9mOc9LGkotAWXibleDR5wxU&X-Amz-Signature=8cf850ed67125a1204e1be74d839fa4c03c7fc6993d557a62b5651857a205396&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NRJBNSR%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T053205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCICJX2xDnuqadwVhKFKoroEMzWVHH8zCjdLmbMNZVgXXSAiAl9t8iVmoHXiZqUhA0EqZPaKEDimrZ8rioCRHUhp2ymir%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMPfhX7oM1J0sWbEKLKtwDemOs5cZCQPiiMtH1NdSu7jbVQWw3ZM4ci%2FY3jb2I0NL%2B%2B0Lupjpq07pOZAObJLH2AqvNCvAZnBLLDfNiJ5%2FGyU0d8FxCEMWP8589oNKog0szoGbemYlfhFRIWJEdPhtdHL%2FveMuXdnFY%2Fj54VzXIb29ufV2WdRa06LCIqXl4JNUJdfh1VS2M85BXmUqwf73%2B4dAKpRi1uD2e1qbv08tQej%2F%2BBJtyP9Ib%2BBbNJjEe2DBx1wsW4yecBnfysGQbJPBjq8w1EQSCS5KQ%2Bb9SZVOl%2BttMQSfiJ4blG99IKU18fpHE8Tb%2BVdc0gaSDG3I%2FT%2FLyDSvR2RgaJR2DiqZbU%2F9lUs%2Fq0sM5FOAbHhziycHp7xuiNkGDl1iOzA7AARCVVTJj4u3BNSx%2B0huIIPfb5UaLnMrDkCal2WgEMuSjY%2FKO3B1tQyTOSJb3whq0rkonjpa6ZG%2B%2BRMsP%2BBA2Nrx7kf%2F2d5s8Cwjrw0bWYpTzGIaF62YnpuJ52TNFVG%2B36VY9ucobzZ4Wkbz1RRfCgLlymOEVPvJ0Vd%2FWyXIG8W2SfD7ZKwRuQtZs8TJ2ZCOCWeuItTcfSECJQovkp76XC3RAfoJ4EzQFIhB7VT12%2BmRElFoxFJsp%2B5Gp5oX142p02a0wp67EyQY6pgG1M8xq1ZgmN41a27JEj0pi4jU6yt9JKBULpgTSCVlElu88mc45e%2FaCvkvrAoQNHv8L%2BTfUA3NGMVXL5Id6fulM8eH9JtyE42FrjZ%2Bjliha9CIxl%2FDGRw%2BklvdxI6ToRJC2BrnWogKVj%2BFMieU2HC3mifldL36XJ1mSjJfwYso%2FYuYtJva82r3D%2FIHATGsmd%2Bta8zrkoIyVFEvtijwgjchU3QTZzCZN&X-Amz-Signature=e16515018876c614ffd12ecba19c4bbb66cd4b41aa1a34f95387273b864464eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

