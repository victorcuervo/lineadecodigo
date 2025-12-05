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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665W2ECMIQ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T203344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEfocBMf0ZUwaionrw9si5ukvARs26TNZXYSUYZweAylAiBczhxkPF3VPlAKyOaQzItQQtNU73xXar%2FQcSYjHYiBKSr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMpG5S2Jt%2FQ3dP%2Bs5mKtwDwrQeQmCdZLv3oGRsu1rYm1E9exz2Xgd4oRxEB2OfG2NFJy73mvWyKvfIM7z%2FA0m0t%2F%2F51pQ%2FQaHpYQ6YvSsByowxKEOgSSCM3wmGsW8GhcqBbrrFs2x4rZQ3DfmUlidCZJyvvUE7vBNdmTZaFb8%2Bq9ZM9kCkCkzP9xH8yz26S5T2YVtucGq8JWaNdAfMreGn3pNSvcENZY3RF8yZR2yoRCIVdc9BnHwPGMGLbVignPe%2Ba%2B4yJ8fsN5rc551ouaregggBsjuxz77DZd3xIEwX1pLXuKv%2BW%2ByryU8N5Ryc19JVnO%2FSuOE%2FgN859be28KOL3MsoUvhM4nYEAE8CaBypsLLrf3UvhsUAszkyybUEZmuL9mHjYEHaAWsA0aYlsg5PB0aKeOlwAfPX7z5BmnBjOrdDPPN6YzrwXuXneX5%2B4MJdcDZD6sW5GK93%2FRBj778owLMD5k3v8pNfzqMCPDbO4oAlrTOVsjI8R%2FcB7N2rNjgHoAXu571ArPN4wrU4E9yvlsS6nPY%2FROFMu1HpMYNCcAPr1wXmsBSsbhtPlMdKSUH00z5IRXTRuXIDNDA0T409CyaM%2F3QtEKTpeu%2BX%2BzQtjFj7rd5J9vKiYu%2BCfhovwTItNdZFtE6Sc%2FrSH%2BIwqvPLyQY6pgHk6UYElm%2FWTGkOrAt6e%2BsuOgZ4H7VCJr9aw4ZSV1jfgldg1f2cNinF92MFRM%2F382fXmRL7dEWiPruC6T1MxQXahcXckwSBkj0qs3e60X8U3o2Oy6QMKsZPSmqBTuwmu8uAdKwQ%2BGdzVy6SeksmiElmKq1RBpGmkbf3jWSJhY42K8RT%2BHSE%2FV1I%2BhIxD1vk1vs2mPkyHTuXxydPxpXy6%2BdZ0Cu8afWa&X-Amz-Signature=12059a02bfe41cd77ff84f10fd0235b01c687fedc01ab4ff5f1042cdc3634b14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q72HT6XM%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T203343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjltWLun%2BabeBgSLI3Nz6CT1ONl6GBnXtewV58AQLVUAIhAL8il8zVjcmfLR%2Bs1HzBdigSTRsVOkz1SzGiKBjThHZvKv8DCGAQABoMNjM3NDIzMTgzODA1IgxCl4C51Zuw2j3pGssq3AOSz6DxO5ZV8UEZEGSIp61trGzkfHnvaj30RepG7N6ilb1ZSsGPWo2qjT5x3%2F9lhGK2plE26dRGlKkkQPC%2F6IFC1LZes5JdGMT%2BlVLZFY9NiO%2FKAO7%2BOt9DF0NaaGteazmIzL81qIUyd3hwpipVDKcyWr5BNX3TMpuF1z1J9Y3LY4QhEINPqOfC88xrEY95d2%2BsgaEdT3N%2BAkoFBrNNlm25SizotwM0iGQ3P60AMtmNTvEgfpDeqej%2FWCOsgOM44QGy421p359rDu2C4z3BTiAjLaapo8dI2UVv7lH53dTomVT8mML%2FGRlp22q5UKGOiYGBkQsYAnR%2B3kjlD%2BkCZOnzfoTHFPDmehd5fCSxofFEKvw3yKIOvUSVm36XENcPqCgtPzu8kFRXjy63%2F15BjuwuRjL50RL0r4e1UEkptDDyp6NXq4HMe1JRWwIe1rUbXjKR1y%2BHsfby0gAA9uOIqK%2Fjd4fXpxwJd%2ByRnVF%2BypqHA2E5HHibtKuu76R0Lndz7t7lqGZNQqvE8c%2BwbCk5K1UuZp95ZhHDdi8jU5kUo6myych3ImJ%2FFrPFNm6bFoPiz6RH4rsxGFnk1SKAVNPBP0i1oZxUEEGfbmUlw5YqPRiKzeW0xe35AJiEQedCFzC%2B4cvJBjqkAd1HzkfNck%2FPVp0%2Fqe9mjc8t3DFneXPyBk2XuCC%2B5kMFEyfrWU32s96hHyW5yJCBh6LMp5IV0z%2F8L0uVDBJoAea1QM4nUwo5ZQC8RpPFLZrHV2dSsW5C4eZIjAm2bM1f5YKmXpQdW0d0s1vBDIQdK21b8O4esEY%2BBDVNN1%2B5dyRGGY8BGaB8bUdRvyThGeZTKLVSonUIQEQXS4mnz8YOd9GLTbMs&X-Amz-Signature=289cf4ed853d69eadd783f04c89f07d596dcf50f67e318fbdcd34c3eb7da8d33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

