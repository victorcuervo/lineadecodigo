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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VD5UORKL%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T031544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQCR7cYLpllAnvX5lWIvaith7LqTGl0D%2FPVBiMDplNH38gIgbF%2B507zbgQG6bOaVgoBMus%2BOyjLxT%2FbWoWuWyyYLKHkq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDJj0EGzfiFBBNBoY6yrcA4qNY99u1fmuLYypp7aFwoveYpWcEDTXs8yUm6tdM8P57d%2FdSJ6ZUYdKeI0BiFjTNC6Iqrf0iimKAMOamTQPA3D7MSc%2FhzLSBgxCOXI1FD%2BqfnaTMQZFExq33DY74pK17f2qWdKPENPNu5vi1dWL8UPCJpbsKhwlbeoVuy2UVaszUr3sQBE7kyrBi%2F%2BVKQ7X%2Bvs3uZTkU41%2Fwf6XZD%2B5eE2prTAVJ2nD1MajgATciwfJW%2F%2F31Wn0ZzH2Kg8pqTFOkfMK0GSy0s%2F9pDXoqHAONIPTNi4zKytDv0mTc91u%2BnxM%2B8E2XTiq06NUeb2h7kX4AZd%2FZcus0HKmK7VPOE2VmbO4oi6ZkORI7YNBnkB2JzcK%2BsLTp71Y4IjWVV0loed7NTirFdJlWuIEnbQn13OlLnM834EQeqEXB8sQ0f1n8fHM4l7YjY6xthA2cbmPZ0OUPXTpR1mv97hLLbh8qgFTDd5BaE8Z%2FjJSHlUCYycdAdDx94Scmxpn%2FXGi7JEXZj3ZzX07BW5KsoQsIU%2FVgRy3fz1M7Av7udFBdfeRRC2d2BFtYLMMYg34jjcF35LdGkZYLq95K63f0%2BXLcCyWrya41u9w2S7iI4c85ug4g%2FlJ46rNeRwPTU1VfFtlX%2FWgMNSUvskGOqUB4fl6nP84F0by66p%2Bq1%2BIDrWz4OwPGVcmib25bh2N89glNNZtOwfwPG7Q5SZl9vGBxbwjXcWeljJbZqlSBPIHMGuLnUF%2BW9OeohknUANblk68%2B9LKkEhStBzPO2PmxndAgEPWjXqRC2l3rL8JMuAKVZQ3RCZLvCPytOLBuK8MtrAZXS3qJx%2FVEoyml47ivLgqyAdWIMFKkMKOyY0c91PPqVLMkcVi&X-Amz-Signature=409c66c2710395337638640e5ba8eb53b85bcb8d04ef60563f59cb8a2745a218&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQMI36EG%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T031541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIH%2BgCvF67cdSJ9X2n5Y7f4sfQRVbo%2FTPpQIW0xhqb31NAiBiGJyiOPEvXUa0V%2BM%2F8rS8aD9ZX9yQgCFDqNPwRShOZir%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMkVSotE9rlmY3zHHTKtwDfjdbkl0x0SABbFIcAJntWnXD2E5wIXnq%2FvAjF%2BLUFGd%2FqcErkjalpaImULDxWUBBYvJo7s0s9aeYL6%2FVAHhVJW4HtmKTboKnnunZ6uXcRtRos6iuYnJ1eySaFiFhW66kHhktUZM5DxKvIHNBKKVH9znLm2C3he9%2Ba1mSMGRVHJrgHcUB%2FrlZa4As%2FgbYAxZIbKhu%2FcFKtRxC99OFuE9q5k%2BX9ck7n8%2FwKKpinaSsdA%2FklswT%2FLYrJApXhXixYVW2ART7nktMStlFt04xYhZxvL9X3lgUkqvfsD1jsLfyMXff7ujqMkftO2ZcOWwCT0B%2BtmUk9cSu9yGStIMY32wtTRUTf%2FheH6xF77cFD3coWzSZw9BoQ7yoQHRVUmKH%2FsNsldm7CR3EiepMb8KyxECD6w7GjhwlLuvWwZ0UmdNYvKA9fjnO4M3QVkKK7nQ5DOPuaxlrCMhwcOrhoQ7yxxbu4D8uNvVpcJhkpgReM9SkhWSbiaHQ9lLFPcZH3aIcuJD5FiG41wkQQ6UtvwZnTPT9C8oWGdA1CEs4J7t89bpXMpfjZ0z25VD9UUz%2Ft4G33BrOtjAhdOd8B6538WAaFRN%2BsEXiX%2F1XTrqqgb9o%2BCp5btk5vrLFNR%2F0mN2rfhcwj5y%2ByQY6pgECgjfBIzVIpzdUc%2BMvGMCro4Z%2FRPmtZypyfKQD8dx1Fxz9a%2BXicCm%2FOS4kUsaKruphgPl3eYbAcCn%2FJtnZ6gmaAQqudcWvoDqP41fF3ws1iHr%2BP7gYUlloftJMQJ3%2FagG1z%2B3kEXPxYoeJE9C8lw8tFV9eFqlXLRvpWGHjNLWimuE2Y6Tni4hJl8AHXRqMY8v7PUUBPjpntcT3RjapHpkrNOGnHBeg&X-Amz-Signature=6235eb87f31eb3b07e322ed332e9db555c722f3422beb28d9a13f9721e1ea50d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

