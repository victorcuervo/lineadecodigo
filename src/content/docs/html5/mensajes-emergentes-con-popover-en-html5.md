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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQK2YDXA%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T082046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCj4TcIz9UvIPVTi5%2BhfHVbhD7s9Vb3Nnsc02iBL5EoiQIhAJC%2FGqv2L3dktvhUcPSj6g%2BetyrznrCBznODs4Z7wbqPKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxAOaQL6qKK6VF5sIEq3APzP4Zh39Efhx4iEF%2FUUL0r%2FMASICp%2BNFBrDuC%2FypxtuLRhIvyTDSVZt94e9hTLf1IWTOmESjIJ8a2XkfGiHVu2LrMtNxDDfm76krlKNzhag37JVh7ivUJxJYmiSEYkmm6gnsRSEzkTOa1RjtHzmKPdb%2FmRA7mO4dk0HHeEw5iFGulf4TjD4J2MaxtlVfEGK%2FM1W%2Bu0Hh7WZv5w4AeJSmBOBQovEqNhBB6c%2FYBSO8Xi5%2BVSJeeOM%2F2xowUUlSkCHh8feRFmECaw6e4mkZbF94YfHONGUM7mG6AaaN4FkHLDH%2BF%2B64FxXhz49Th%2Bou4rvx7fg3Mte1aD7MrNFIG%2B1QE8cANkifNxc1qEpJ3vbW0mpEHBvq7i6L45tlo2G%2F5hXfDtuGsbQHmn%2F8h%2BJ0MDNwXXnsZ%2FdpBNukyvOeOzt0%2FA08Frt7vEmrlupIboDSLGEYZDiS7Mh866OzQIm6Xwj%2BcLJnh1C2Nz0keXQW3LNqzlYKAWaAPVUM22jr1HTZag0qKxypkPISU71AeL1ZVkEEefD5xhO%2BUqI9b28k5P4%2BqsHDq8Nmeolof3%2F%2BrGNP96aMkrnd5Zrw1fJh%2BCAi8j52EcYCO0XiDerYxAYMI3N1wE3Yzp77%2BM1h1TNyYRsDCOpN%2FJBjqkAQqPSc78qiVR528ehwHhWOIi2ksQQEOiG9cWzjZwC%2B1wU0NXr%2Bf3ozyLPtSUi15P%2BVQCuve1B90vCw47AzdDPMndPTfsySsreMmIhRYPyincbRjvA3KwXl03AeF4GAPhvZK%2F8XaBB47%2FFcZIOVbHevXlDv7yRNuKl6maEhLkwGBA6RKspegFpcmMyMHl7Defl8kOmSp%2FtjWpVbj5DaEeGA8crmxZ&X-Amz-Signature=01110df13f4643364547b0acb8fdef3335c9b7a884c71b4b6e9a4e8f7cc91eab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIG7MHC3%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T082046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEm6FwA7mED3tdfOm%2BiSDwYdMSlqf6vFpPGTyuvGmXKpAiEAoX5e7st1sXn8Iif9pP%2BnBMEWjk04qCQpc93Qi5RixcgqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEQEkX4HLUJRGGPxEyrcA2e9mxSKOihyeHPg1aI%2FnnqfpsoTOalWZUc466hDJ7fN0PLi9oWwbbm2%2B0JGwb6kOcyfz5PPjnRKe1GBIoAC%2FuEuO6R4r1v30%2BHI2idBMceDO6BvNOeWe8qT1n1bJloUJcTQz6Igt50CRz1Ja69S0ifmZy2Jr4USESTJej4bzh9ZPsgNWlIj8XtH%2FtyNc2K8TiJ2FbseapKpk4WvkmC41Q%2BrKY5TtdbWBMBPs9kO526Ds9YRPs3ezGRx72r8M4kMkSwHR2Z%2BsdVOybEfRlz2rKRg6px8NunI9tu1yurV%2FrKMpgMbFFELjFKDKR2OjClh7gO%2FaBmA5q4w%2FTrpk5RGnbP9bP2fWbI5ki2K6hB27wcJMce%2BIevAdN4xkT%2F8Wql8f4NJ7hKhwn8M9lJMODmvGzxrRQTPYbNPbYKtwNi%2FvJZMRIRqNJl0iOzYujBJb1Ly%2BwyqiqPPEKBjz2NpxWz4nXOwoCgQpX3g8dMUzXGblbfGYaeCrHF9LJhonGKm8ZpWXRSEyJenF92JOYHGT2C2YfkFs%2BmBl6RSVMfwLCn5LTj7KFZwy8pNqeKUykUQCpQ3ZaA7xlFl%2BXS8%2BAU56HAaeStTcrwhXGrd8bhkaA1Vo0VkqaewpnHhrjvIl0dAMK2l38kGOqUBQg%2BygJyLx1onVJKluL9tMKbMBtBq2F8qpy65%2FuoqsYiHgaF%2Fw1hCvM5zuLX5mrodO3LGghD2QkXm825n5VdYGiNp1vZwNs6qoMYIQjTNCg%2FHWA44rc8nXn99ZJaEeKxv4m2YzlvveWpIiDpkzGmTFf4WEKbI8JXxrJH2K17OyRWwbpGx%2FVpnZG0n4%2F8PLp0bynQFJb%2FioAuMtywkqz8ibxS%2B%2ByrW&X-Amz-Signature=1ebdbcf99c3b181576eec3a124eaabecaea7718a4918ccfc599a5b0356745bd1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

