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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UKX37YV%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T122507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAeE2SZMA7AV6i4Y7at4bcOplv%2BxtsqmUSwePmzO2dBlAiA7UrMXggernO0urfZGUCwGZZ4e3HpU5xbPyPMADBb%2F9CqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuSY0XFslAYvUS9YuKtwDjK9W9eCOtd7JSM36SXzfsynvq0SEAnavi%2Brt57Cc4UE%2BSAspjcdoIV8kYn4CNqRT9xgZDB4z8t9VPriL8euw1Gu85AYGuflzrOD41S32y62yVWRjcQlDnn3unxjkcYmYn3WdZ%2FG1n5I2kvDBu%2FiUkl0qOoZ1LvrbXjOQqJhWNpFjaMnuCVGYScgaiL0hAxgvD8358%2FbQcimO27PgdExTTixwYBfx0dojmPrLwNjNqisf24bSiMDegZoHlZ0XRyReAkQQfTWJ9Z3Z%2FHupqHCRxPnSzwk883R7KEuEl2tkmVZ6UVGGFWmF5gOeB1NwuYsRJyZbjIJpv3UUz5znfA8ewG5Ih74Jka2UVOipmFlVfwH4a%2B2KC%2BsO%2BRxeqyqEDJAEFcHwwYY%2B0ySvSEGqoTV72rZOubSWEm1n1D2OX%2FUHxVRb2boKNDSo%2FsK%2BbDYKd6wAPaxBXHyl3g9lZREMRQ1Am5rrGzIG5e%2BgyMxz6fK8Z6KB28Ho5s71dCcNLDYH4DUmNtGxlVP%2BiZmqfghrkuq8C9xB4Xf2L1MtfAUIs8I0MfWjkYNWvezrk9L9twIfGz0z7lWGFTRpmgoRW0GhR8QglVd2fgrRiPxM0SRPwMl%2BsVO736HhHd2Xmn58brYw8fLayQY6pgEJDzV4FeV8u01XUGUK7CFEaQg18g7%2Bev0Xn6K9bf68Crhwn4RT3uVRVP9Yct%2Fjfxxde3Dkgnrvs6V94D9QDsoWLlwvApIQ7uc7hIlSKU6huYdDY9DprR4F1PFpFFu8qAqpwfyDaa48uIwcjiFfSrH7YA8vVXbdqTv5rrxoUz1KOEahlV6tR6vvogKiwCLYevSSnWQOAJmR%2Fg1dl4rLgq%2F6kbN12oVV&X-Amz-Signature=96602bf2be530ea10bc1827bdb1009111a6c86123cff106982995f1ff7874911&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VC2LYS6S%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T122507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAYKtjPqa3j9zcHAc7Uc0Ve4rn65sr58BncRFuPxyWr0AiAYIRXvz8D5%2FsoyAw4h0dYGx1jFnKes3hS1%2FegccYAswSqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPtraQOViOGnxgSrkKtwDSJ11gnQV96d7ZVxYk36FRyilXvR%2BeVHD78Ju2gmY9Fn8xEAqxIM2iZnFsIV2DXXrTrw8URnS18TM8Uy%2FrEFylGowQ5cJKPavZTrDuQ0XqWVr0HLKepsFKhdIAKw8kTDdFtc0Sz77Wrrtny4tNLDXrJJvP0Ae5BRBHa1iMNpP9JQcvNUyshIy%2B1m1mpaA8LCF4wrMc%2FJmWYSsJlcoTgc%2Fj7uU9zQxXJAnbIS6BvhfEZjHtFxmSlBKeIvf2vDzJXGWj3n4HTJULKvVNjeetPNHz8gQAho%2BUWdmZhEKX96gCar7RF%2BWtnW9lF11Wabdei7%2FcB%2FTehc3M79kWGdi3MNLZKNAX2JQBkL6Wu5zEqnCidoVh3MQ8cF0EzD0Fvtbx0cgy%2BYzUiag1TtfCGcfJyVae5GQY%2Fsrim7ytr8vYVxsGaYSwOFN3mj2cQWBvfujL2bgYxxQZw9SSxFJjDnoKjlASADONicEnxyLwqXifvJFL5DSMsPpB1N7P%2Bv3fgFAHKhV99ZQOvX1NSzOYi1sssu15QTPBB%2FPAmmibDYLwMmQYvdGBSl42nWmNm9GlZT0qK8OfGVwwqjdWAeGg%2B%2B6pMuODH%2FRG327YZNZwT73%2Bb4KolC4U23s9W4uOqipD24wkfTayQY6pgFbRxC4OTRhx5NJKi5WXEHQwSeA5nJGw%2BR%2BWBYUbJdKIJjf%2FM4vVEiITGVFBsr9B2zHCJPWHwuzQuOpMLqt7GqqnsWkuMVYyks2NMnWUWULiGqhSy0PJJsgD4IMWCy7u81MpyVjrBilXLMNXGoooz3QUolaDHH7BahC4btLfaqquzaBO1TEIe13AJeTYOQYPvhCke%2B85e7CGHvBVl1%2BuSCG9OX3gRvH&X-Amz-Signature=61393d98d6939296de513ecb5fe0c3ab3187bbefe83550bebcdc1eb333aa3c5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

