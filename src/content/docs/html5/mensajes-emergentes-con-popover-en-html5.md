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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZOOXLOV%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T164939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICj6gtvlrGV6Fo4MWHfZaMpY4b%2BDjyEXSLjetGjSaowWAiEA5uh%2BAurUUcmihipPK1okjw4S2D3TlC3fduWFR5J18Y8q%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDKQ2aY2kZCTtPKn72ircA0DUhddjJObECzfOuj3WOovmzSH3IKc0KTT49Ytggb7dk2eXwmOOnzvGHOlsqps5r1PwIhxRhyWv54dsVEdQMjL3DE3XK8Un7FaN%2Fq4QfZAc9taSO8xhIaqp0fr5hhlVo9P5VcplscE%2FtciKpzyZvHZUKW0crqKlZeio8s%2B3Q3HX%2BXwOVVEusQK%2BFLAACXKl9s%2B1ix2TobL%2FDRVig4wvDsvy8B5KCVucwCl9ljQCbgZl5eKQlM26LisjvJ0Xhl8I3KOL13lpz%2Be2qByTnKFhAWq5WCyoG4aXyWbnzQO%2BhN3YzDbHxoUATn8w7iQDynSqtFChX4QRTN9FFnx1pnn6fhSCmy9d6rjDW1yJUpl9uX%2FRvcHD6PTmWrj%2F80d4ePYv%2FgySSX5dOr0gUZP7vfGd7L6kaKeBZUcQMMLvMg%2F%2FKKHLGJR6UMjMLHjJIZZxsYsA%2BJNREYOlWsTrdWiVyy%2BfVRGxv5uAewxxIOxISV2TdQENlHbwoOeoQhxo1OorGJzcsMGVCtIuhw97CPdQfa%2BnscjNY3bsYZRmHBoe7sOkbE%2BpP%2FC5W153DBfiC389InVM%2Bkc0ix4GmtFm5oQVqsssh1pAMIBy4octP8DpN4N8kp1Kuj0ikqmbw35GPwKWMPn0y8kGOqUBkM5sbGXIdxFNfW6cVl7kPEYgksCZi2UB2ViIDUPF44kVvPyLG2KjokyK77UZ2foM8tegz2jBQFV7h%2BOChdTVqeGMntyoEWvWyy%2B%2BKg7dPyi5Ju1J7%2BDrkdVRIVJ6ka094JfqMaCzmvQXnYbZEdMFlnq%2B6vuKQEYdu18C4iT0ffvo696XgCfKIWWgdEnlFmKthkncc3zQvsyIQ6I%2BlJJIBsJdX2LA&X-Amz-Signature=9fd86e207acc3ec3cc09371a9ec55c69943bee64c482e436edd292f1c8584aba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FXRFF2D%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T164938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEZomu52C%2FME8BTm7tzV21D276xvbhRmJQ6N2%2FK%2F322TAiAtAoNom9BkWJman0T8PgdaDc58xu295upq7pzyMx2L8yr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMspfSOni%2F7Zmg9goUKtwDYCieBuxX7DW%2FWj8FtJS%2BOZYY5xMGMB1oRuv%2FDpb%2BzokUSy6itXSwDX5egx9UGSMS36d45%2Bi4GwWt9jAnPSl5WLe4yOJsrmYLej4669YKtLKhm5ugX02TGZ6zf%2BHMt1uSQZKjyeB3EEtWLeOkdoMSyj1fN2YLl42tKPidkx5tZEjSCB%2FsqQ2UwUYctYHyZjhpXmlHl8v8ABXCnnQupGay%2B3VBAYTjGZorPdQSN9fsq0o2yJsmxuzrcrgWy2sbeo9oDPAiG2wuuDGQAsyZRQ3s0jTrQanho%2BZkdbPEryi9t%2BSs1X77waplJKDs8meJ6OcclLhKTQOOc1cjKuJLI9BtbaNaW9akZE3U1iC4fDmHUYnV6ufENvJdfD4x63mc1YC9Uqc59SQ6sYJlaqd7fhypUf0NuDKwaGFIkD7%2FZRoKlppf2AKPAt3C9ttJHyK7fKDHm1W4LSh0eoBy2XId%2Fs10iwz%2FElr2hIdO5ZuvKCe3hYjP7NLxtzEgSxuC4O6ib1yHItsvvBlFY8OoGaLA8EQC1qcdLgBTY6JOeH%2FZ2svBR7YpajPtwbyFfdqvkUmJZ3HSDipCMt%2B4lFD9spsdohle0MfkFhFySDcm20k%2Bak44hpN0y1Eh3yQAz%2BuD8yUwnu3LyQY6pgFo03gKE1BPVpCptFdyW8MbZ2VFDXxmPSsYTdsc63%2FgxwRTPcuOAwUluUIa6364TSNpoc65SAGeWOiM5WXYAeO%2Fxl%2BJXQApuneRyo5FtrMmK%2FhHqjYf97DnxmyYso8UlEHU6YBIZtX24bypE8fGB1IfFrEF0CBGUTKd2KXC6jm8zLkQYIKP1KM%2BIH8UvFSLDQauaZTTs9YiITFDs7fNdOg8%2BUNmfWJt&X-Amz-Signature=4b95bedb21042cc6691fb4817043e53f758a8fa7f7e55e67d426df5863686d6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

