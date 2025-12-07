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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DFP25QD%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T112913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEH%2FQxssTuJlB4wFhzRBovBnJgtCQveHfLY2t0kLPqnFAiBEgNaQaoO2%2BUtViVtZECCoKlK70lC6zFDL1rJDOcxufyqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMViDiAyn3e6O%2BYwugKtwDHaWHbi%2FYMzJ0PgkUuuyV4kyGY1uQnhCFxnfFS4tHeUaSjzU3YTv76jWvzGuQ0TzY988UrXsvG4jBwCPhgvPKp%2FnfX7kWVuKvJ1geqFEep3Jkb1qmRW%2B6UcHC0v%2BmYagkx%2BPMtVJBkY1aF%2FI8AbJHISpvsz0AFqDDqnJyWlwkOl3vpE6wBSFFpn%2FmBTMk8Q6QzwJQMUOndM%2BIWQxDwzhY%2Bdq90XbLVBixdXkD%2BsOeM4AxCIBIOjhhs4aNKl%2FL56xArJYB17KlxEMyRp4tn56507%2Bs89hJDb09Htt7rq0p2AnKcvO9HRwRWJpMTZFzh3GBeyLV8uVdpm7joR0OSTAGkH3gNVl8O6zqkLbRzh7zpwdpbqlaShCQ5aWKRpRTQulwDQlDVzzHGEEmUeg0zkJ0pU6ZmTKtfEQgjZcj2FmqnucKLwHlgokgy7zHJuTtR3IeRXVM5SiKbTiKPDli5BZOlxwT9EhyiHq0HLDdqprrlqAegZ0f%2FzWHgAeCGy%2BEwVKdO%2BBpQoaw05LSQKpuGLUAJTRgyezmE2hlnTpE3lGFfwMTPNxnMfHPpnhjZpJtX6Mb8PXAYSqhMW10eHv6O1TfPNso3MdQTJ1k1mkJ9EVSoiQfMn9KM76RUoSihWYwxJrVyQY6pgFFhJkwfj51NgszIFfr88fDg2bXkBlVzO2JSFKhNqr%2B2PQNoAh3Ux0%2FwK3Wk%2BNPznGjE%2Bc%2Bc%2FQaBxacH2ddwXaqGtTMuT%2BuT7iYS9Va%2Fot8IPcK9iFyMNOLmJFCYYH6uk6fxY3D%2BTmBsj7LpMh3pBCg7ShI4AbpeyD%2BR7hhFSZUuwkPeZJ9v26DfAQs%2B314WQi6WgYKxIw7RQw1TDPv3Lc273A%2BEjPm&X-Amz-Signature=2197e80da97cf6b26542a5994c580526e82c93df99b9fe06a16c4072caabafb2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X746SJR7%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T112910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGEGu0CFa%2B0gFFMbnx7zcxbMdcaV7ZBDDo14qh5%2FCD%2BYAiEAkEUVcOE5Ya%2ByR2GOMTN5xLd1lLWVC3wYN%2FJwcvUZKykqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNwnpx80Zdbrwk2RoircA8f3DJSNy6OiEhxblpLLsLdZ5qmyaY9pPsdwFhoG8MUeuvs0swJFwP3Sf6EmeBXs9veoVvbFSovFISXAxlNHXkCwSqJsPH3VXhuN1KtPXdSBjSZtvTRq%2F%2FZhswbkZ2aMm0Q8qAnDvHpIyF815nxS6Eq%2F36Fxxh0p4c0n3hCt8sTGGfz%2BNHsu1%2FTcNVV0m2mLFWo4wabAiD5N%2BqSK4vzOi9BFRGqJ5rMizDA93LyY7u7OftzAVQh2n%2F53H0Wyk5tsx1V53IGc%2FK31D5z5qPvM11hmHPMAnbR4yvd%2BSBHCo%2FHpZm%2F1eNdyY5VresXgz7THUP4UBYAAP8bfv1rR6nMu2BTuizEh%2FjcZMHALSQy%2FPoCmx6kUaMXDmy8EwfIMNR9dbRu9Y4dBYqitIdrQ4PFMdZ4ucOWuumWjTEFIGMh4QkudGx06mPINxKN31jaKpwc4sFG2vquxM3IBL%2Fqe3UPc6M2SmNYnd3Jm6Onkihfm8K6eWgpegK8mvpiUOMXzPfCEHTbh6j1ka4LJrQifGkovixblddBukPEpoXTU2Ma1%2F04p8xK2PNIaXGO%2B43lWn2k1coGuf08f%2FUsVeKLMHqJWL8u7Z4U0JoZ1yr%2Bn0J3h1yLl%2F0XHkjlk9dInKUDoMMqa1ckGOqUBujf38FvVHPvIdWet0SPs6UuD6liesgFQ%2BIIm1%2FShl5x9oRDsbhWvwk9hKqu258Gn8GpAKslZJD5HGjovD7mgIKtMFwVvT5t8e5ZeCRLcgX%2Bj7%2F%2BYn0ENIaarztj%2FSxJSGqcee3z7tr2OnPWzZI0sYomNiFiQrfJtcNNVg6uTunPXqfgIHecN%2FIDOZjqMwH1lejFYbm2LGrg7tW7Siq%2FlkBKqaies&X-Amz-Signature=45d69f1b89b07e3776fecb0bcf5c046c3804d69a43644eb3e06296185173aeb3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

