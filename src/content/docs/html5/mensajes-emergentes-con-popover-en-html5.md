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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IKX653I%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T205702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuN1Qu2bi8e%2BqjC1by6jCqekguAAoZ2SqtKmLNDdtZDwIhANnF0ZD9NJNk6SJZmGaDrSwQcYWlaanhxzJdt5dFFYSOKv8DCHoQABoMNjM3NDIzMTgzODA1IgyTfNv1PQnrGdJyqgAq3AOTcEcunjWC6YlxkDM%2BkEH3zzMZY9agO%2FiobtRfmPcxpWskuY8zWt5s7Gy4MhZp%2F4FDhFC%2BvrgRuk46MFl8Ke3iXe2B0xaVeioX6L%2BF0mNp447CCw%2B5yMdeSe3B%2FtfYw64bQAZDjQ18OEm1yad1X8XlC9RmC0MXq%2BScbGanmsA7Kce%2FBZo27rr8SKz7MAZCdcouB0pNzGAoeRNnb2sdhUZNAZu82Q4k1gO06CKLjgiP5zTgtmKfG8XwXAQcPuFl6%2FI8HROnkJBKfEgxV0dN4E9sdmLR0xRRSmv5Dio%2F9gXsOrT8ydvZ1PnB9%2Bw2ABbS5JpKOHscF%2FHxln3ufXeS4XgU2%2FV1TEJLlkfRUJh5dHrFqAdZdOkI2ZOXL3rcUR4E%2BzLyVHduLDFOMc9Ef%2F8qm44E3A2xuRlB%2Fq5HVkXxAFMCnGOD8YxWC8%2FHpUhwHFVU3NLT3f733T9VNJedlYk2NU0N%2BAGiOx2tNLHnG0qP6HKVnlMltBouIHkFTm4r7qGUvqkN9QUVuAcrxzVd24otdCH2019NOJWzEwj6%2BAbVQq7SVqsBI33dEbTAvtjqikmZHRH22fWTrxfkItuGfY1GTM7DJQBZgMxBOYcB%2F49hYX8VoVMOyZm0m6MFhfgsCjD5wNHJBjqkAdVsC08aNs%2Fwx6tcj40KBBaRhGWQj5jDTi6%2FkEK29iiL2T1xNWYP24S1Vm818hCxDpPKhsleG2TowUnd2kX6qKpUfcxSf8N7LIn7edM%2FUJqhl8EvKiyDK%2B1a1p%2Bx%2BHJiVwdegT6w58tZZLTK5nLAEhy9%2F2vd3FyA2TZa5yPVHb3pp6RbKxiY5wJRKYK0g4sGq%2Brsr%2FXSk82fBt30MqxCOG%2FKomQ3&X-Amz-Signature=abd8c9a651f6ad595c3e198db040dc07f07c286a9a48b109071c72a5488c222e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NAJOIBQ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T205701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHef5TggnxMhrCLJWnmg0fEfmektdYPZHGwYymC64BIGAiAqDNQAgm3seGO6Sh2yHMALOjsn9velmqOMgCYxwGkYeir%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMb%2B%2FEkBL1kEtw2f7YKtwDXxhXaURlENJuwEztgfYuJn0WFjzUP%2FSyBX9o5U5pGjhl1agCHzpDi55RvsuskUf0NC3qtXUug7qaaC7%2ByZV1Ya3q2oh66sDphxBOyed%2BdhK1fWCdxo%2Fq8IibeTnLIe0hCd80dFLDaSmPlQ1S4pP%2BFj%2BNr%2Fnd%2FxLjRVwzlyXc05T6ihdZdC%2Bag9zhh8i69Gl42ULa5HInjRE0jZKXqqMXWzjCXk4A%2BIb4501eREDFz35rP5I%2B7vqX%2BrFLZWbpgZWRtf%2B626M7o0fZ7ZwRLunAuDLTsGgXyYvkPkI%2BGMtgh%2FfZOHPTX2Uz82wqpRMdufJSMJs2IOWwW4roihZz3nqc%2Flag%2FK%2BkVcouhdtAgt2U8XV%2F6cXJDkvOop3Kuzwz6zxkw7Vs1mg6HSmPXMT572Ir0j0RvZ5qlsW1zp3%2FFE8vp%2FAyqNRoLpgHIfTmtsp2fky5abFQ2O2qVAnd973CsLyuxPeoJql21N9958bquR9LYaNzAUnTWOTTitQs%2BgOBwdd5lxU72PpJuiFDuZaPC4DEqWI0OLZYr%2BZGyQrV4PiVI45%2BGR2Kd8OtepLjlAlJFN4BhwX9bF0OyrFphhRHqIAPWioLXvQ7j1csGglHWYsem5djOf1qshsNmQVpJtMwxMzRyQY6pgElGkIYkBIgitsqld1LCkh4Zmt36v3FJAvG%2Fx%2BLlDKsBw6gfsoUMssowhqrnxKrukiX0pGA81ThHPeF41rklC%2FdAlS8RbAsGfcrLT28USIgmU2H73vo2G9uFc0TygJesqhltP78MJFSuYuMAjMmclZ29qxCQX8901Uygbl8M03hMK1vLIe%2Fxuthqy%2Faq72GrUS1cf6YHA%2BjEOgXeTWbCvtDBeQxz962&X-Amz-Signature=31013ba5be0bdfbe0a2896ad4f54115f384ca1bbcc4724a2d9ccce2d88becafe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

