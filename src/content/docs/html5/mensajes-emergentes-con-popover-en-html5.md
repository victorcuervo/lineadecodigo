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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZI53SXT%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T002525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyBl2XZmwda2g%2F%2B%2BITRiXmtFWfMiuVhGlI4zqufiv8pQIhANscYkFyNzOWOi65JpS2vwCYsdNC%2Bc7GNUT31gPmcQyYKv8DCGkQABoMNjM3NDIzMTgzODA1IgyO0wrlxWittOxsv04q3AMaxuDj%2BB0qLn9x6xxf8YK%2BkMRxQN%2BnRi77QK2j9htbVhr0qCNDzq4L%2Bs%2BJ3stX0%2BdPzzQWA%2BTISJ69OP6%2BssH8y1N%2BksIjqB8scC2UdO78TY8x6uFqTuBtEG4G1tFI2qIgGVhivCx5f2RudzOKY98qEkJBJpF36MdQVb6Q4ROE9GVARtOXVIU%2FVlObmouasLkM0AYnr6AEQT8pv2oWih2u6zCnNI%2BkYT2jw0dDvCN0aMOG33d5qntZiRKGv1NSwbs1fWR%2F0wtDBtJ0BdGk275s%2FBU7vNDMAs3jPZQTG%2BAvjeDuA2IWKmjoliD8h%2BAW3xWH91l%2FmF1MnLovoFIl03RLwU5e1PVKOVB6%2FfCYWELuSvnpFGg6E%2Bnf%2FFNWHVwZZlLXS6JF%2B7fhPgO%2F8%2BotRbuUQ9t%2Bn3HTaBUXOncZVjG54%2B9OeOpoOlpiLqtRdl64gtQaWvUABCzLmn3RalilE4iuA8%2FsOtnRRzrJyjjvgoSKfJgRgaOYkfb9gE8cNW8u7Nx5Y6yVJ%2F7h2JeKgMAacty%2BxtSdLF%2BXvIkUR3kV%2BIQzI9VDVM%2FooXlFpwysckexLfY%2FuJQIoT1OnQo8SoTs%2FKLvYe8di1PUubKe3%2BZ6Z8Lpo7dOdb%2BoiW3AQBm%2FpzDP6M3JBjqkAQNI3igjtIIxBagu54%2BXlyBXtUlyjNVyzlJ9eh0R6%2FcB1dP5CEctDOz7tmPeSwNvySiqEEIK14ixDS%2Bi5q%2FvVfF2pDUc%2BZCC388cwH%2BSfdyWvO2sD57aFD6axsoqz5cOxo6oupm7DiEsRkQ8lZNAJ1z5c%2F2Rk4LedP6amjlXzSZjnyW1FzsW8ARJXUjjYqey%2FEzYAts3V32A9yYQeE49mOZrElwm&X-Amz-Signature=7ad15e6b2d6644394da460ab351b480cab81d25895aa738d46b0af32c58fa8f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMBZE2DV%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T002525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8ib4u8fOrEFLlQ8sw4wu%2FpOSwp25mMRbtahmA4mK8XAIhAIAujhCP48JZ97I%2F6VHyfyOU5HB2eth1iImsvmM1QqdJKv8DCGkQABoMNjM3NDIzMTgzODA1IgzfW37CaNR17i911Akq3APxTpPUOq7rM6id7EYNOEzdZqpVyYPDsg480WJFGl%2B72zX5D76Q7lVlCbXVCFdjWLOKRZSmvd5EDRgElkcJZqMhto3k2%2BxDAK9Teoo0tCMuTF6ZVR7yj%2BwIRCVKg9YH1XQurHJ9ib7N0%2F8i4yDJtqF2gB2t0vcAXPgxXIk0mf5q0hUPpubdtMeaV887YfhM4d%2BVgHYqO1GzxrO6WcPvRj8MSwsPLyiR%2FJzEIJi1JXHaqXZBWZcOI9iv0uDixKhj9rrx8HbLFaW3H5raqNgXlN5f1eK1E6nW4SeRGWOT5UP68dXuoTuGbFHXJmeZnqKS1pK7MxsncEamB2sZTmwBms8duuP2ozeOnPm5UqZc7izTwvwQl8EJYVszmwUbV8Ms8VSQbfCsFG%2FiUzAA9XsjKZc%2FpVBiz1kaa%2BTYXiGF96iJVOGWHAT%2B1tA3pMD0BhonyzB16xSC%2FZ7ODIei2eFSkJ%2Bc30dMYM9tiDPVsLyB7167Qc0opHHaIQa4FzESbsxqUnE7bVPQ7th4MJjcPicKkKxnNe8vGTiUr0TK%2FKO9m921qO0avxFScAKGxxXH1RGR06fFXKV05e3m3yYmX8Lpbrk8RPGAPTd7G0iZtYUsvWOajPQ%2FrgRXgk%2FUFeiTOzDp6M3JBjqkAXonaDcGsbt1PZq6Wq8Dmx6rZhS3i0Di5KQBif9%2BhZplTCrFWvldnpyx2a%2FYZ7K7Xn3d8obf%2BIsy%2BufdzNOMFkupQm%2B521M3XBOmHrRnbt1GKR0N3fgHRVlMJNQOxNSHoIHLhj7PuCZF%2B0ht3aaqpaMX2VLV251jUaTwWLgC%2FxiVdihC7YjSs3W1oFsuPTPBfzFCFqd2l%2B8FtdiQOYudy39mWOCR&X-Amz-Signature=59d7d76bd815532cf5f59cb3c50f298e1d2f9e94ad8af58b34c55431b6bbcf9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

