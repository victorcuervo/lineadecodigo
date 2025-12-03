---
layout: post
title: Mensajes emergentes con popover en HTML5
excerpt: "Uso del atributo popover para poder generar mensajes emergentes con popover en HTML5 en los que se pueda incluir cualquier contenido."
categories: HTML5
tags: [html5 popover]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQDDHOE2%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T135352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIAonY4Kbb0YBfRbdZN7N8bDOJW6jAqL%2F8pWn7eMWyV%2FkAiEAzU4tq1HPFs9SiMCAvl4QZgc1uiohFJXnraGf8Cxkhr0q%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDO1WioYkEC6ZqLvZICrcA24AL6COrvKxhBB9PwgPwKoJtAS7fOAQUpcaY3WgXvbt9WJ0hJ64DuReosletWlbA6QVNzo%2Fvzc5tTvLZdDd1yS7nY6GuqejgAsKYpo6RtO2a3X4Y6TlXdC%2BmDIxnLIMKTjThDgYRhlaa%2BBSPvStEElqL5fbVL64DAvngsmC8gU0%2BcQcVRC2mhyZ22TJGLs1roW9yCAk6gqcYY2wGZzvGAyCJGZDY0F4MGbR5DVp5kyOdGovwe6X6bUvVus88I8xEGJjllvLS0lhaeG7BoiKK5mhOAiWfGS6lJqD9MhdAHQy%2B6PEugtFT8NIu5hYRwhjUHuKNg4ZkSMl%2FBKwKXx7boND1j5d3ISoQg9J1aDLWtjWYpwrt5GpT1oXnCg%2Bz9aTmiHl3ZZakHkJH%2FTR7SWbDSF7G4%2Fjz8QY%2FoaaMUPkzUpn%2F8B8%2BOq4NWOWRmKGwl8Oz%2BTxt1gZ9qcmbEn0S4E%2BjUSaI5f8Xr1ueIIlaHXr%2Bmch%2Bi6wFWVa1xteCAdRXGafK17itbosv8JLP2ypVRMQ3irDy07zOJ6j1EAbO2VSuv%2FfWJAW3F%2Bya0ZIG7g%2Bx%2F59oNOIkAY%2BXxz2gnOMfvXKHQZJh%2FoSuzGDjRPbAm4pagw7hy6591T4HlpUeIRRMPzowMkGOqUB8ZmZ8W3qZEBaemhn1KLblydz0rFPsJzRDi67Fb7i4ZepD%2FvtJK8ReIA%2BIQUlPFsD%2BaYO94qVS7xTB9Fv9nUcQmVDAQ8yP5B%2B3DSOlUh5NPSUr1YPjY0hEk2oW3g8t1CA%2FNZT8%2FUxb%2BKEbuKYnu2xCSnDStXtwE%2BhLviUi9D8A%2BDgdPwfQoLwdc%2Fy1HHg3TNbE3h06Owa70VyAGZyYq3RkygR49O3&X-Amz-Signature=c09332c9e00c9851e687068aceed8d70b6f042713c5c3cc1f5b59be40c9cfd20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663J2SYY5O%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T135352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIBnMLHwxG%2FpTIJw6Z9RWVEyA%2Fa4arX6pdsTKTT8i8B%2FvAiAogRnUzln56k1VZvcFw%2BMtEvPNthJo6bt9Oz5aikURryr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMD8QXJgnPZrU6EMwLKtwDexJ70vcTliEHLS049DxIeqZHW%2BfYh5MundJqbl93n5WObkv6Z%2F40p6R8haDlvDp%2FapZLdfRHlMb%2BDfe9cXjbefQtmd2Lm0xCN1pD7%2FNvxGlV8FeCiLh3msfrRprDUpznhODp9CZwtfc77ItVpd2eM8CBqQ%2B1mqTf8aqDM5oHfhw5SWDmS%2BchChhUU9onbeN574P3BADtPAX21L1xiHvRsGEkdRPPil%2Bd1TTJVjsfZgVyPuY4HjTn0dccox8dadZJAt4TZCmkmXpheWtvASySaNDWriYWL%2F3rwgj1YMQAPhpQV2X4U%2Bv5Qyra67iSfUdF4c8fDPPvjOdRo1pDNL8YEzJ%2FbJFs1J8KcK6MhR1rOH5lg5gUnbtXwpTdRljJWHVSzc%2Bh2C1UiGUob6xDIO6Db%2FS1M%2BLsNHibPCcpDoMlZUC%2FfuDDJoEifxUPJnW4QFsBCTcBulPXBuG0YsLEWEJZC3QaIkgUejlidNfiAIDz7GsJYibIo6hScTXJsc4BoTMGqj5Zu1jkk%2BL2rMiblPvdNuOE8Noqk%2Bv2XN8SKysBZNfhqLvlS7XF6BC%2FXzoKbAF5GDLJCnu9Efaf%2F7oaEQs5iPbCNxZoZAlhEAlAmQ9QYpNBV%2BaiNX9TO2ybbagwsOvAyQY6pgEPaT6zNBCBK4dHXzcJQj9SQj7tUXUMXRfjUVSCYZ4IfQrP6zDwb0htJeUb4%2BYPx5fDo9k7X2jCtoouDBW4pW47z5JgstkTi72Z9jepTlEp5yTWHuLPgX%2F4wCsObvrN7GNGH3vmesImE%2Bxl4aKmEMTXcdQ4Mc%2FNmT9KdEafJGoWmgBkLgeYQP7%2BqwNhpPAdiqBV6RYmjKUak%2BNL0iIUZW5McyNij4mo&X-Amz-Signature=4fa752577349717eb206a71805a330dae4e46ba6564c1f9ca039cb5e8eec57b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

