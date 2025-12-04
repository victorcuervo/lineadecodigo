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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656YPK2AT%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T015937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCW6D8D5p3rKvvkFHhmnFLJUtO4L17zEVMc1qTm9ql2UAIhAM18mCxVOSirPzGQ%2BsGWcaXwUYPswFZesayP8ofrvmfAKv8DCDsQABoMNjM3NDIzMTgzODA1IgzKPSiK5syYjdyJdJQq3AMcMktg4qNuTidsnocbJEwZX%2FUtj6ua3t9ZU%2Bf6cix817PVpiRXWXsfmKb8ncAhs7VjRzOgvyM7MDFlFq02lwYkXdXyM3CRwwUNkGD195ISJ3JUGI39E9mF7D6G96FyYLlbi8AoimK%2BL88Jdm%2FDFhziNMGdiMTlFz%2FSysuABKmSeBgHzbbRJLX%2BhdOcnrpg2NqewnPpLxlfcxgAzQeZpOu8btQ6rjfVEwBWQX%2FfyuoZ1oqwohxQAY9ZbkVZ5juf4ioiL6neHEtbvtMrKb6MS8im5l6Y4zeG%2B8lYVhXdFcRgTa%2Bgjd7GTCnozRpYSoBVS9fpxtkRC7tK%2FRZihH5R4iBWmCynsaEmWvZTHGeYP2UBWJgu8D9Eccrh7%2FsfuAfnDVOhO%2B8fsMJL6ykdKnm2uSIc2pCnZwA8FP9OjWVq1tH5B8vswvlYKRhPx7VZbECKYFxAIQWx6VB942o94Fb5%2FHfax%2FhNMxiFMTCjnOEyWaoUtJEDZw6V%2FwG1b5Hhx0%2Fpu37kQC3aFhC015IsogIEAzgCnwmqgePXXN5%2FOcHTLF0R6ZtTh3Emrl%2B75HwZRdYEhltr4%2Ba7NJO14hDniznxYZxEmf8q7zhPdssnDGsQ5DHGA6fMuUrAJ24ES4V0ETC11MPJBjqkAZRfiyTCNi%2F93NM8Nsnsde25g7bo%2B9tDLkwGkTTdlD1eijCPdxu3ZuLmjfJEyJ2r7O25ne0mVWnNBD%2FnLMkXC5sU9xvCCRJql6spNqTzRKsnRJgRfBNEH8vL23xa7yIUYwMOj%2FiFiD0m%2BzjuTvapN3IQCLYadNfAELA3sq5Aow8odq%2FfaSIGdCZt%2FDku21uCbCKkE8elzJaglFOPk1laRJQ%2FYf4o&X-Amz-Signature=30497299ddf4ae218bdb3ed05cd31f5f77203223e48b7819635483b192d74dfa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLW5M5UY%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T015937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQC0TfUQs0UrutZyYGEEc44Rxlqoz16ZORu1leUIds%2FwlwIgYXXGlvJk04AivPWICgVYZrml2weMkKl6H4zYXYNst28q%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDIL8IRvyq5XNG3TvsyrcAyu1KtK7XD8GK0fxmNb8VuC9wX%2BwRHznD6M1VBT21OTIr9k4znPssVZ7g5aUjF4A3Jr48YMqxw0XW%2BKT6KuxPD3BBOIh1FFdYYJY5OF1I%2F68CKM1lA7cubIHmld4qn%2BAdNVJL9r4zpMqN1NIc2enjsS3U79VSV7evK9HYNOfhzfpWeZa%2B7OtgrmmM%2FhdKAB4FVlgDSKQhI0BgPSYPQhsdUIjMDg62hwTq1keVRcE4Wnk0iZFJB8GYGD4jsw%2FCzeHbcMhmMAfOI%2BPFAzcRs%2F6%2FNczJ947y2iSychql32njfeotCPrNucVOSj9IxWo2mSSbMT7AQbJJz2BdOUmgH30DIp3OZX3CR4vjOjyQAxmBM7ZWzHaefFz66qX7IhdRffv8c4adsjyKGX5Z%2FvMYgJg4VcC3398V3v4RYELxdKkpQP5ToscaCyagtHLR4hRL3bWEs%2Byth4scuDAL2CYny3PjoFKwm0gmlpzMx5zLiarnS6Ev2ogDnc5LZpGtuZ7kO%2BTR7%2BUqkswM8a3xYUbH8X9e%2BvETO5AeNUwe1bRA5GqO%2BtHGMpi8bH6lbe4DwRUEFfe7wNIrA92WS%2BpdcH0fbq%2FqNFwHzWWjesmXcCHq9t8aGfbSzR%2BZH%2Fw5u4yFePJMMK1w8kGOqUBk%2FctViUxWw8W%2Faglz6u7IemzsWLex2j0sHNSWRN%2FVcguDAPfDvvby2GBsZvXWcWy4Zcaz8iqOfFqX3BZIfBh3l%2FnH9e%2FOdpkcCoQUdbE26lMN0nO7N7EI%2BSo7hLK%2BAOf31hXTu7DRacWAdVkCy%2BqekuYWtSRuzrQ7OXr9XZ5yVX1%2BDRMl65Jvxtq2eeRaX6eVmgCGZSQLSn079h11ELvBt2ODDuE&X-Amz-Signature=0eaed10804c0ffd887d031022b4433d772dbd50afa90c4be2aed9fdba2e76d38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

