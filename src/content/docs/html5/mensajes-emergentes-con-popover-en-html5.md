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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDWG37Y4%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T065313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIEK2j73KHN9bfxb0kBofTJAJxadGKv3lqURVh2Rs%2BLK2AiBsL6Nn4xArlsVw8vufnpzaoo1NOpMJrV6Nm4RAaGPViCr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMflPF6VgiUEkDuhgrKtwDYE9vLHSpguqcK%2BDUA74GsU30VhOWzK4T1QSSBcjF%2BrnFSZZdUXTW95K%2FphP1htPjOgUnw5yiEzRY2RN8lTbPn4qBohfyoZTAIgJJ6yWvdGSkSp3rQcLp6qzIbQDEbTPcSASOoevfyQKBTd8bPaFBpywbGVJY6a7qYtJrpDGGxGmqDW4Y4WwQX%2Bp%2FVu42GpiZ%2BrJyXRcQW8GWu8%2Bzm4tdA%2FbDzIr1L6GC0wtA6zYQxwRrqP3%2FDGjqqgtvI3fsfbMtAbFDdSVY2ks5e3yxyB6rlOazhZtcv13Lttad8pAFEaxHJTu4f5FIzZMWlAd1ffiCL9EYFzkTRHCkQyZePK9WdZagBaRUofpQwuQ4%2BJjxztEgWPj%2FA%2Bj86aMv0iuupwo74b0ukIUlkGtbXhtUAHyNYSzHVcHIXo2nLlTUEymwBZaNY6zYHWi6HE4oaj81KVmN1VAhYfEpChQ2%2Bid59K3zp6y2IFn8dvgPU%2FqHaFyQIOB%2By5XYJrReEyRj5BVKxZBwn%2BqBEiDDXrkfmX8PbH0iIjheyDhQqcCCoaeJiFJaxmtaZM4HCWVRaTbzoXhDdHmbPwc8RSLfhP2xVZ%2BigBvkhJpgtxRYqI9EwTCD232tDXASH%2BQhiA5EPMa1bVAwycrEyQY6pgFidiTnCLGbLZNWrcbxNyHB76JAgOtmUgI5tsKpA4gnEPvnVC3i5z6IV7gXq4%2BHtFgYipNrdqfnv0v3NaQIaO0YURrszI2Hy0c8uKbp4kbHuvwgBARUITWbB8hy85MfVUxALJSQFK0CGdivS58MVMhnfeUn2%2FS5EnALunZ8hsvK6iKrxSPhBiocsl20hImXN3h7nWrBuTyK4Ch%2FBgvS11yJSPvMK9Ez&X-Amz-Signature=ffbad044bc7cdb1b30ccb3d24d09f03676f3cef43973963d5491104770891544&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662OG64K7%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T065312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQCv%2BJn5dB64FyJdglTWkvq%2BvbuFDH9X4qTPf%2FqKNvziPAIhAK4YblJQC6d%2F7jkINp%2BfigEFshY%2F2aD%2BszThfaXIIi7FKv8DCD8QABoMNjM3NDIzMTgzODA1IgzPxW1cVXLCAUP%2FgKYq3APQkEZEV8tdiXD%2BtlYcI9DXIPCbIg%2FMBr3Dcp1%2F2flmIlreQVKJ291Jyf8UfgB3UpxuNBLgsGPWZRGg%2BIGk2V4g4%2FFt1%2B1tskEEpXi26VlTLad8A%2BetjW6esK%2FqqgRUhcZQjnoYyeS4z0tazdqQWwILXvsseYhcq13aoNH2POhrQ52qzgDKoTeU5%2Bx41XYdYHQwvkvLJTaF9qZL1npQRkT19rt6Smo8mna%2B6BF0rD4r2YOznqZuag9WNdvmgzlVdm4pW07SBNKoTDRDH8y8SNzW5OKgd6ZnCUcWxo1z%2F%2FBYTkVQhYIUjKwmetjj%2F%2Bu2iXl6Gd5rqF%2BErb7rQUekustiOANCczgRs8w24UCYqCd6QpTZUWgaNZHtrNRR8uB2XhKnsbsrWU9VpugFqVq7RBCOhgLXhDfk821eB0IWhOMJIt9rFwEQCyOovJtKZu95nyQbXKmmdDNMZ9w6CUqIZvax5pK%2FLnPx%2Fj69%2BmrNIYsC9vJBVssXd25%2F3d332boRM9cQ8a7Pl7i4Cal8C03JB5rf%2FzfENKv1Kf6E3xomXml8EZhKhcNArGrRVv%2FohDobop0f%2FPXcsp0OUIZ265jwc83bq1l0K3ql%2BALSCfcxY6nEca3bKmM%2Bi8SQUdYl7jC5y8TJBjqkAYuVt2DqcfFSlUz1ulXEcDEt833bdzVn57pYEHaB9FaNs6NkcwCacM78lYskG4HKtvQvozSEUBKmODZeaFnq7q9nTOcTDZ2vqISGkexK5r4A1cFXlCGmzYQVQkz7zauezV2KVQjqzmZ2gczpg85FCri8uN%2BUa1dHxPoZRijJfnvj6rz6Fh%2BPxbhNj8bUcpzFMFoOgOkYI9E55v35mfvieqMSHkj9&X-Amz-Signature=0fd139ad600c7e435dcf6954fb1f40180c0deb990db72d1d5831c913062462ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

