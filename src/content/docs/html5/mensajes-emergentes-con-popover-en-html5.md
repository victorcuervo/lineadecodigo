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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UUFE34O%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T014312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIDHJFcKktTPmLidrHj7aMQGzi5mZwxelmOWcKesGc8W%2BAiEAt1prWTTpznBaKLFqMVPvbX5pa%2Bt75Nd54c0%2FMHW7B%2F4q%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDNGkNRhkG9FcRizJOCrcA7H3vV1%2F204rH6Ja6dCjhLIW8nnAKLZav6sGBKr8NgoMn0Uht7OjvzPGE4KccJPi87fl9fs%2BsJ2RxJe7DaUgy6nJCrpcDQYo8kN2x0ShgwTIeTjWALoJZLs3pVOYnSmljFsLywwb8Tf4cgKDokBBhmHq5xa13uVd3VLEpJR12kfJd3uNVKEU7tLHmgxg0NSIABAB3KmAO24tY6f9qp11lHaGQGeLw2DE41Qpvctie9RjVZWJnv%2BJr%2BmLwZVTF0BBdiOb58u6UtF4ew464xO0dSsJszBRkDueDbU83toFkhiGOZLc4QCaSP5w%2Bngsh1kG9ORZFA8NdYaZXdpIH2MZiUic9CzQbIBvgehDMbli48sULZyJU05FAFGIM9SK%2Fj7Ne%2FCPGdYew1feJQtTMU3g6hOXXtMyNvDkpStFS7mgecTYnFT2n%2FYUpW9V7c7reQVIk%2BZ0tO1juOZikwO%2FgjDejkZ%2F1YGMywFY0bqUzV03%2Fpci3lPfIY84m5eFRXQwGmcZqDSPAGkUDDaT9FsX2u3GFGCCM6euc4aRqxZSvXKsbiOBfu2RNsfkg6vP4pSuvYBctLingr1JcgKR5ZFN3sxPdgQkraxgsqW5hZDDb7JH3c%2BiE9shOM2tCrA8WuqvMJG1w8kGOqUBt0J73sDOuJsm8FCvxiMcN6UoVuXMNcFpCEVoXGasPdQ45jIMrDZX3FR9h5hFQYsk%2FQcBXwSiO5klgjnab5aOdhxb5u860qD0I%2BjGYZiTQt267uZgOwnivX9twFfp4tUe0wEKRxZ3WHYga9muD3d6WGfa5RVtWQ9WefUh%2FYJR4Cbu%2F1qomJILLdnVrhHx0ml97ry4q%2BtR1jRPnQlqDhG2A61dW1SR&X-Amz-Signature=5322e399689e623c6532d5658a68ca6d5aa0a89a1f2d68b40658888bf3494760&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PWUURTS%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T014310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIHp4JLrwl7o1NxWoPSNp1C4jxjDl%2F0hOBtq6bdMSUaYRAiEAqjw73px5XnVN1Q3K5bTLn2nr5uxeuc53KsGEEYuiHhgq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDMuIs8kyxUxIvsJX6ircA4s8MA9d8a7pIxjL9CsHCMTClPoeo9O3474deRRpZfnj6K6x%2BORLQPmA0DRQXmG1WbohcEzGh%2BUM%2F9vF158fNUPCbhkuRzFdvLXeID9q6aY2hzOBNgll%2BNZpsdECjeB9NskO80vxR5teOeJXp02E07GvbKA5UYn8GA6UsfWri5vyAzTbx%2BI9Z1oJ%2FT28kUBba3OZIlI%2By39EELLqLkflA74J2wdmMbTwhFySzhxHCQp2W5J%2BAb0qKvkqbxieu6RboTVbvDlA4dvkiguCq3LEOrVAPlVS5oo7GjZUr61xT5sXV2Rt84%2FUeO%2FhCi8tiF00MX9E%2ByxObXYe%2BohGb0h5RXUL5iRhRHCB4lBWG60VQCQmPn3P64qS%2Bta9Y0%2FARZhjVHt6o8b7cHS%2Bk1UD%2FKrUei0Iv69B0Dq5wGxbF5jmmni%2Bjmm4%2FUfvqhCAs4Pl6lmcpEIJm701DlPhZ3BpYzILEViYfxLROEmaLayRUzh30vL7GSdlaCTlPDhUK0nQamP3DtBMds9R25p9%2Fhj1E%2FVgpvkcGUD5gdDTkJjQ9tRxNz%2B5D5K1AzvCdTcQnhPEcldkRY8KA87mWCpF6cwPiUYp1Bfkce9hgTRkIMyWJ0j1Su1gCoONxJ4E%2FnEEWWgqMP%2B0w8kGOqUBlPSC%2F1n%2F25rdEwSxbwaYfOoPzL6RoQKE1x1Ch85%2B5WxJpF6e5SWPaea06fKsFQ5WbYvG3lyQhjeL71znWeT7qllzG7LvysHBvol7Uyq%2BkzBfS%2FyNMkGkzhUItqhtirP%2FiWEuqZ0zyWHOfCJBdVlsitVqR4NO2V98EWkGE%2BWDDScqU35m%2BFax5EMPwE96Ziqhv3TyrVT89%2FwAcVnEsb4hHQ7F0QrF&X-Amz-Signature=35c1d385abb461f4b49662b91c7b6011bf69ae36abc740e6532f79be6d87d606&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

