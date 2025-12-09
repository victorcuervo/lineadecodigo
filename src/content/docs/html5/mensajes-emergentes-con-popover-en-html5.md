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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZJSAFXO%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T090725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFRhuRtdqWu6n8YyuyZ%2BswHpmuwSriPe%2FiIZETt6hqcNAiAvNYQMY0r6Xy4%2FvYFKF1p1MbvNwh9z474IXLavqwb4hSqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1cCAimOFV8kuoaWaKtwDHmLkyCyXRu%2FJ0T6MhxUnfXDaqPTKYcgsgNp5io9VMJd2Hq5qpTQLdaAo2WjjiH%2BR2e3SKyCWW7xWfxjQRHPPHj6C0RpAeBS73LNyATypYiDNNoN6WyUaVLtWn1Av2EbOQgLH6vd0Vl8mecuIjn%2FuOP5EapdsllvxcQnq7v2Wmv8s%2FwyagrjMIrUqDJS0at%2B9K5YYA22syzPx9zFx3YR13MdjVQ77jJd1HYtHPnKCRYa2Niilf9Brt%2Bh8tREqi%2Bp%2B8omdBYjbAOJJ0HItd6Jy48tc6L0YyEhB9OhZU08%2BQngpDfHap%2BhxzxTaE5aL5TVUbDcQdZ%2FQ4Ey1pD9Gv%2Frdai2sbsntFCd8%2Ffu52qbP6EpUnUU%2BtCAvXD4ZZKFanSv9QSiBaYXuXDKOM6xZBQ2rB7C22TI5GNwk9RxZV3HTCbi7oSLLK44ayZGHnlMGzrimzNecAjnsliX%2BDdk86JHiFMJIRZHGFYO%2FfL1d7PqkcKKJLzO8PfL5Lf38RCDAmGHyM5EAMclgYfhYFAwFIKc1HdaQGiC2R%2FHP8WFwZWyoAhTQHgoJYS84%2F3Xihxf3yKnIxipUcHZ20sHa0s%2BkruHgwJL%2FvDyveUuptIj7O7aYRDuRu8yvyMxwbRCNh5swv8TfyQY6pgHadLc4QQROb8zF23J1TYg%2Fdwa0GjrCLF6%2F%2F4cln2IDmI1qAiDul4VqE%2BFcKqzb%2BB4AyeVjHxZCxnSFyUIynRNA2pTnu7IZk%2F2%2BMKi2G6TaPzmhqXDrtmEKGOlqxN6NkJJGHdLwqy1FXpOHteDmf36j0zYythXNn3cIJvFxb2ekewSxCXl1JTdd29CAmuUyq3mZIpnSvltOYOTu5enJIIHW72bS0uYC&X-Amz-Signature=6483153e4999fff920cdede74035030d7e94c5a1b3d239bf518caf5d55edb238&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAHJTRIR%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T090725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJoR4AcPw%2FFYMJ%2FzzRPQWSIk3czwhwbILsEq%2BSqAv3LQIgPbrKV9yk7%2BW%2BxdtSI0nZ8lFlFv1QR9Zl8Pdh9Uc%2B9N0qiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHuqNYqoS3pPzbYK%2FyrcA5MJPfR8JvRJtEpt54Nh6T4vUeKZn1voc4L5e%2FynYHP9fIDM2XpbKgEAGwWdQJNSuJ6wPANUwQQVmnbJ1iHUTCXIdpuvG4D2OCCaRb8U6WzsVKoKb1r918F6%2Bi3WdFCOr5CSWQxzwOcw%2B77QO7ncEMWgr8YR%2FrMbeqalp5iLj3S3Cn9E1JlugXOhO5JttIB5EnWLptvkIBYzOs943iwvTLyy060s9mN7w9lgZAqJkRZR2xTPfUUq6tkWzUkKV1%2FMLT%2BicytH9hhUUAcXWUlEHtTRiu3k02E2j%2BoWc1hNazSfpE14GsApuqbMJ5lAe%2BSMv5DF7JG3rw9%2BM1z9e697l3Y8wItddas3QonT8cWCzt%2F5yVJVnV4V7yvIRIpCDfBWy8xRkI%2FL4fZpz%2BNm4GUSHFHyiCKSY3ml%2F3kVMbQ4J8z31Eo8TL7cKVk4ewkYiK0v8r7Ol1gWPaNthkuD18yAS1wQ5rzvPBpj2RjWkYtqdAvEJCXUJWb0XpnaFuV0qhSfW%2BPb61f4LKKQUwShOwoxsyGOZ6BP3GEIGHzGnBWr3MFq7K5WkCAimuwgqyf2bHhot3ZR%2Fpv1YiLoQGCPnXEpuCgXSGKFi%2FdB3cxvdyNbPYUkgjDBU%2BMFx3HnvuW2MP7D38kGOqUBudRzt5aMYvurcffkXa%2FGCUhvrYPfdmDEiQ26gBH5iWuKtGFBy%2Fs5AHA%2BB2rrPFDZ734JmPwsjWABnFZZ0QlFpcEZBenbgPH7oNxVxmH%2BX77s6RjiPSfVYW%2FvUHxOGzYt%2F9%2FeIs0pmfpTDvd428tmAZ4tchzDqy6x3TbaIaEQuhcW3zB7MRKQS7DaoSss8NBr%2B314tfqiROcdaq6QCmykmkkoOY32&X-Amz-Signature=bf9d517363da4599e12235bb4b4f6347c8b06d42071952e6b32e444a5d2c7eb7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

