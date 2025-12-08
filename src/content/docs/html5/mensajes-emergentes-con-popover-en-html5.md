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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662M66MJZ4%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T131850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAubbvONNnV5ZgAcL1b%2FBV%2FOza97tiYP5UKAumXDS%2FmCAiEA3y6w8Ao4k1F17huZD0%2FLaywiS0U4fq3zys72ZZdruRwqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL99rPI3%2BBXnlCr10CrcA7VoO0R0CgC5mBGLmCCEN%2BMAE5OLuiGkJ%2FCcqyduJQlT6Zibnw1Fh5LH3myI4vPQhIWT9v6JXYFK3Uz4VLgDggsV%2FUN4BnVX1E0b%2BU5JpjTPcA2fomUyH36ldZN%2Fy8SrLv4kQ4hOjQsptVZH4iha3OF9r8J8ZqHNuZIHzMzNLW0zbD792AYOpx3xY81kIsQfsX39f6nlM2VYIcncwasq12CzL1qDK%2FvjuTvjWg7zDHFZXXLVEuw1jM%2Fk%2BpC7TT8qrFPmE%2FdQMVf2260yWnO4mUwjKKz8xoJne1rWFQ8dU9WvJfNrA56jqnQHp%2FZPkMKwhHl40108X3Fz5H5JCy1gO7EoNfEEt4rs%2FjAUEFodEwQhnho9hYH4vImgvW040APH0tfEXdQaRm5LWKMiPbVLqgKr5JKM%2FD5wiP0BvORudfq8ksVe4G2VDTZ5GE4vegqlcwFHqbs7PJVPkBti8iArzNOtzDyCvMFAezVLiQnMSzM4e4%2FBojGAFDoweuDbT%2B0Kv15nJLCIF%2FGQX%2Ft3AibGVRMgNxyPycsWqq3DlBmykw9MOzUXoWbEB86OFE%2FW7ha1T1tBLkB%2B5IztIYQAo5kYz9j3jZwnoykJSvKX3gBoVYZh5Bsn60o79ocD7op2MKGQ28kGOqUB%2FusO0%2FcKoa7pwGQNOlmYbw%2BW%2BkvwbYPij6VZ9606%2Bn%2BLiTjMHmXZsWinz%2F%2F5TsMuWbGwvo%2FlmJosRS4cn8dmYfpoZ6zGTmXxfiAD%2BfoNYcnI4wY08Zcwq6%2FyJDuMyhA7HBLp6VF%2Bjds%2Fv%2B6dkmSPgdbeAR0l4LyQLr%2BoESbN6OyiguB3xPQvJ9PYLE0JqoJGXm%2F%2FUnLlOOZQNDc3xySNoF4YHjAm&X-Amz-Signature=481fa851062b261b5fc057af26c2b8b437c3baf60d2b3d75ed70f85af7931e9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MWS6KMC%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T131849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH1Ysfw4F01%2FHiV52LHw4NWBkcVu776z9i4e6ubiF1D6AiEAjIsmizTFQAjMHSVub9%2B2Mu5co%2BSFNO6JWsU8%2FEys%2FIoqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIQB0ZN2W%2BSHprF%2F2ircA8IJ%2BkoKYN5WTtjgax%2Fk1Et2Pf1a5jvhdt9Hv3eBwxBYAfjOJb5pHotKie366%2B%2Bq4U0DPsug03CAAambZo3AKsA5VCQhYt%2BV5FnsCfKLhU1xGDpSdcdOL3h%2FNBz7BmB2ez8USgmk8L65k5R9u7sPZL09Tcpw7meaA2J2NcrZbta3UcSLA478QcL8wR4A11gmVuw3b8hL0rFRGaMiuTTflv%2BRSODT52dJ6yqMwgR4bnt6TjbQIGi9qtoDMEzUX7oWFSBj%2BJ1HPFkW4bA9pCYPf7gqaro93ETuaF%2BhvMe0cqbre%2BmUANWVFdwAKTfar4MoPYcp9GTVe5QkuVre9u0CKVaj2EBZPc%2B%2FKqINtsNtRBxzmUugtVAQaSA8Qwh%2Bht1PW6SS4%2BFpYdio8KQsZ8cm0vMy6a2Ri6QEqkS%2FALuuCqjZi8Ol8nbKqTM5iZwXcNQpSGt5hVzal2nzkJJasPaiKdkcvNpbDOy37WExnu0Qlw5FgTduv0fCvEot0TAmXqZs4iM8TCrZ1oYAAerCTOVWOjLqmM2ciuT7Qybm6YwQO7kpnZ0%2BA0g3khqehgT%2Bx3Zd91wu%2F2ccLC3SZHENb4vMagAXsYeYUG%2FMIwH74uoCDhifZOI4rr1NusI33NE0MO%2BP28kGOqUBw2Jx9oHDvdiuEc7cb%2BGy4igaxy%2FNm8Goq4dMru13nSGufuikW2qflQBARNpkz%2BpmJLAlsCKZ81fOGapvLxHACZRqb1ZxBPoDzNWQuBN%2FXJzVhKVIhhXcO8vkSNtAXYXotDy6VgC973GDGj5kvHXhQr82g1uJcf8iUipVNERH%2Fz1cqcZwYV7I1AEaWfnxazZYXoKzv%2Ban6VmWQRWmPHGkqDm5S%2FJV&X-Amz-Signature=c6fceaf8a0e7fe125b167347a5098782ea104b703a6ab6a9cde8f7d95566ba89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

