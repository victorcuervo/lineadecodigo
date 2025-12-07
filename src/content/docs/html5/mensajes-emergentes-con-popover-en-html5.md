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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BJARJQN%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T111450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvBI9hREfmjm2ocY42yRQWjJknfmN1f7DhE8wsVL%2FY9wIhAIGOWPWlCJ9Lk9rxON9VhrY0BADdruML%2FW44itkGJ45JKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxHsjz5TeFeRw5WSzoq3AM%2ByIpKcm9imMzwQHg3Oeryk8y1ghr56NRMdyueHKZArx1nZjS4y%2FAwN4POL%2BZLvM7ZEXqpJf7Gk7ywu1qWfFADiTSYcKBurCjCkqAziTmjuHt%2BPIBa7LurEaP7X%2FQAR63G8krwhS3SDahtcTDFL1R7ObfVqTfzu1pDKluz%2BonZxsOPj0mQ%2BN72P7tFlFrvTDstdjvhCEiScyaNY%2BYs4fm3qZc%2FNcVaGkmyrCRIu5Il3htLNz2cCcDwhfqCTrYONe2Und%2BD8Tx%2F7INROmcnZzgp9M%2F3uElw6YqT%2BNDbQQTLnFgFfeYnh0VkrQzbroLVjjltEuGSeHp%2FYRsLTzCJzFvCIJXsP0feo9SYD6lW2Dkf%2B%2FFD6ktV%2BNBaU3IFVvnI2DjWS7ESPUg4zSkT5gfPkyQvHVAsWH1P6Y18BTX9uxQZINRDRaZ1LrJWZ%2B5W3pUhF2%2BStAh%2BiIJUsDiRlaY0GOu2tflxq30%2FtrXdshSFG4vqnvd7lLYyRGlv%2Bd%2BApCcbX7YnTezAUuPiPzF8PZjpmBUYJtgPDZWiOtBKJljGbpT7KD6w0y5v64U%2FvVr5WVvSCk5cn2%2F3pt1YbRddevkZKl0C8TzFYWiPZYKVvyCujWlrCGfLKtNhHOxVIRIwhTCkmdXJBjqkASxcbRvdMaYEfkQpHLIcL25%2BnaVUB3dZjp9L9s6iddxwsHRBmDwhq%2BJ66Mf5fF5wKMFKCOWDwUZSPdRkewkcu9pNITz%2FdqYYH%2BXzRzY17S55HjgEQb0B1XfddDBsBw8t9y48RoY6psWYNdT3YUYpaomimrjfaokOh8QABPyuGdmnCkuMKn9tyTX0P660%2BUxAXueUJfjTcby4VjAD90826UJowDTU&X-Amz-Signature=856821659cf3167eb760a7cbfbb388fb68d60196c13262fd8cc9b73e78826d62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WVMHOAC%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T111450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCxJmzxaE59FGRcHliLbeLc7w34njRYVgeVb4x%2BAkahgIhAMK17fer5d9Ajre%2F1odTpUG5ulwjprmCkj7V2v9RPrIqKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyNp%2BtftW4wJZpgWewq3AOZnWGRZ2iH06MpofQtHm62Hydd9mWUcT1GpfXl7BzlmNT4bdn4Cu8ZvPyFDTFXmleTH3A10S3IATjqwJKDRTLI9dylsaQP%2FV7omZDzp91melblRreSs4BkksbGqNGJdwx0wS9WL%2Bv8z8%2FQ9VTbBhTE8zdu991RWhbCU16ccFUb%2BwXcFk8SYZRtpHl6yQbxOLsVO7m61sqdLdCAPe%2Bgl3vT9BYP%2BQmPErcB7PNGq0aPMLWBn%2FleT0C7J%2BlDR5okXHQW2MDvfAIG5UhRJGQAd6b2CrL1CBnWp2a6CzTRIOA9ASs%2FhwQ2j%2FpJpKOdxWkwqsBSLmH2f6%2ByG8qQ%2B7X8UoRQyOfjPcmq2naw3brzhf5CmY%2FFRVI2KDDyAn0T2QEjeLPpzELfxrfoK%2B3fR72HA43lD%2FMFU%2FPdTfTx6ciKLoVZM6Pc0k1i5yc4bWqL9KlQH7nhs9qdpxOVJyh9DvUWGt1%2BywzDIVRW%2FkFJ9TbL2UjdHeyQXArZ%2F55eX2maBP7hMGOIU09VXz1G9RqTQH9ztOCGJjNs9BdoT%2BYOKEk%2Frfwyyyj7KbmA9tpx68x4b6PbFzJ%2BSk4WwPVxq1WAPse0TpKrSQjMC%2BBbDciS%2FlGjvINQmJ3QBXm3bdjkY%2FymzzC4mtXJBjqkAbPr53ar9nw6elbumebp6WxTqCLtLXKZyRGg0FZeOj8N6rnQpnBR3UOMAeZhaiw8YptU86mNpYwsERvitTBOO1b79jX81lf1tAviD61qrDGIBpeyDngvoClPzPPLLA0gQaeJ4dHMkrNMCoowKkJglFUcYN09r5mh6XgjX4lcFdruDCsfgX82J2S8SD2m3Rr0rVQT8xOnW4f8ZInKT4gfyeTzjohB&X-Amz-Signature=b0916665015bff89f01efe3ed7fe85f50ff4f53ee4d52cdf35f00cc08236424a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

