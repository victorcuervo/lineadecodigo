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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ED2IZWA%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T022620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjXuo7V%2FEF%2FHe9Y6xkHnJ5eckMAizBGyFf%2FZnWck6t%2FQIgCAUIcbdX4HI%2B2aB4r1oYQSRyjg2qIKgnCH%2FtqUBi%2BZMqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ45lYJIqxyGiHrMgCrcA7aOTcflVBLsEnis3lp9MlCMpjldfRVpLq7rCGhukRDUv26D1OMzJIW%2BhFzwjDZK5L40%2Ftazc5fE6tfsmPjcSGcgeb15EnOEt1lMAAq6dGNNEqlsZSk6jUOunh44Nc0Hv3tQugQYtnhC8Z65eL8IiJC649MgEB9jS4GFNmvXXNibJZRjXHTj6uX6WFvZbxuQ5yoinQ%2BVMq2mElqoaKg03Trr%2B9pG6JrPEFCXc8qDYZslc%2BcbbI%2BojCWgi%2FCu3RCQYKoZnHg6IgYgz3HXI5yyzjz488wzN2e%2FJRxXMmIIO%2F%2FDQ9NwB14W7Pf8cHiqnauf785Xcgur3U442lbjse8Y2rLTDHm0g8AjU4pDaZg8zKk6pCS%2Fic4wd5yezQnxzGXS6%2BliOzFeeCHLYUbI8BtRq4vgVMeSfGdJdLSdGZNnPFeUsusNSYcV%2FdA%2B%2BYCYYxZnrWF432%2FnJ%2BbDwfVQRm%2B7%2Fw2O7bVNgq0zUoKNsWacH5gfeZ%2BoRIxF0K7WXqDSD%2B6sPoQ2lreA%2BIkMXo3rozd%2B%2FRgG2nClPBoKfmK8GQHxXQpR1zrjQ9X9nrCa1aY%2FNMVLzOy4b39qAfyIMCBcceMps7MFuA0yqGaBKotEDx8fIWCs5lFBR8lssOmFDlXjMNL90skGOqUBbK8obMlFLnMMgAE7VItScZURzlCt2HlmQgU2w4BHunFPTU71f3Vpl8R45StowiUMmYa%2FckWamNpTxUHRXIAaoN8Xg1nhBXCVUArxMx%2BEjhjn%2BvOcvx1lDs1qItibJeIlfZ%2BW8wmRvLV8XM9LXiFm%2FE5vSJ6A6Qg43mD9s%2FJBaZyic6pMxbbChesWDiIImKWYNZgfK7Ae2uuzTwMdOqLsaCK8%2FnYP&X-Amz-Signature=9efb51019d124c966158afd4331f918123adf964668988c5e5144acd31e62dba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SY5IQ6CK%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T022618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkZ%2BPhsh2PSpJH39ATLhtii%2FFKwsBUewdnOaMzT%2FSgOAIhALaZvHgYKAwDfqMom%2BBhwH1icKKkdkSnapUr%2Fes3UmusKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxSt83vkDGl%2FmvniEgq3ANUz1Vue0oG5YXo1doUgOd%2BzePyXuMLZW4BE2MRgIGCeNqpVGSPMrJk6nGJkyRuz2DEjX4oqV4AVTR2waizTHVaKQcEPHbgUEDwkKIcx3MN555L8rSHyfu39PzT6LMkRd%2FT1wjmX6ua3DctrMXsagqBthiovWmnfj3fEN6GU8M6mMply4aNZ3orNXSGfxVaUOHnqBOmWEqsqFVzPhPU5GCHYcjQpvZhVaPZ4q0gKlqxijeY1yCUIQiW4yQhGVaFomFFrAwq9df1abogqOMAFiUZHoPkz4DUtLnvIt%2BkdRMJyVapFddC6JaaDnDGWT3GAbm17BNzkBZd%2Bvu64HpTYzGBx8tgUmTu5YTIuDcYD8jE3K0un4i9WM0e8GVir4T5WHSh%2F0SB4JZMcwduYjCAOq47%2FaYbw%2FxUWfvaklUIrncQPY1SPIgu3fLzYXMB0RTNmAWersMHSdaiEF9Azh2tIKgo7a9sJnbHcDfoua0yc%2FdAM0CYiFJAbgYs%2F3YBTpHmZuCa0YX%2BO5CHztTuNNNAEzWnV3O9TWB3g%2B4GLrZ8VB3oJvvw%2F0LPYt%2BjjXOOu2RD%2B2WBQ5pbNLusmxZIvGP%2FTh%2ByQpHjL3VV59fNtQonz4ax%2FcCQv%2Fa%2FC8pndNBRPzCO%2FdLJBjqkAVLGetrWCD%2FTeKUeZpMnhdZWeFjiYWMV0MW9D3nelSW%2B8Sja661iuCyeMKyKXSPth65%2F68Ry1RjIRKR4PwR24l93qAX0DsBwqpZaxWlWQ3olDgvnqzjVkJeaY6PtiXmXBNCbg06ABB1thRIXBT32ytYRCN7vpjwuBrvNASFnS%2BHpkcw3uH9gTCaCgWQ2kGK87jBmqRYbHCEUL0D%2B%2BD%2FdYT8twLfE&X-Amz-Signature=0783f315bfe7d66617612a0929905fab7de4769d1dff63043ff647c6f91ecd43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

