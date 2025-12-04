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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBNNRO7Z%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T125142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIAsrGbAISTn6inAB4KkhFr94vEaBy2rw%2BooNmEgcIjHbAiAG0VRE3elURiXbWyuL3UAt2DvO1AP1Zgjs1Mp5GtE8hCr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMeWBpgTmYmiEfa0cnKtwDF3tK%2Bzdy1kMmoBxtOPrIbxr2%2BwKUVZzYD1Z%2B0%2Ff32KcpBQj6J52HGb0XJrqmkAtXxFFMnUS7tttGrc3GO8ZQT%2BihDHtZnf412%2BiwvODs%2FJggTi%2BXYsmBAqdLt%2FDg1Rxca7jwjjzc4p0gKO2rxABCaae92D4TRQmZUDO1EOCOEQ9DOmLjedUJo0q9DVZVVRX%2F%2Bo2nvsU%2F%2F3wlN42%2FNWq4lQZ8mUbtKDI07nMmpjx3DufVimcW8yOOEmlDVZxF66MBKAjQGtIre9o6eBjb6O11SkLxAtI3aau4xkoJHdUdj474veffzIRbj9wh1LG0zdNZerBJVmGTY8RAUJ6gCnb3GopIfuhNIlqx3ml0tQaL%2FI8Pl8gGsNCQ8EDzq13wjszd9YLWAi3sKahM1%2FGCxq9S6537L26ubDhkk1ug%2FyjSqvobw7d8TslmyDE5kgdDOuDvM%2Fdelh8AI01nfEyQugm8Bs%2Bt1B0Nkd2yj8Zg5wcIY2WfOB0IahsyyvpDvyxnoL5Tx4LErZ5b%2BjiivjFH9TfQKYwoUTARdmgWZF1gD5XxmVDLv7nprmPpt1715IxJbSTbpK7DXDZANkLqyKkxmp%2FFdKm2VNu%2Fc7xYYDW2hCNY57CtKn0CRqHKlm9%2F6g0w6IPGyQY6pgHGUscHo2pARIE9LHlvpDfyDgz80Itws3S87EBaaS7LGhI2Tf01uMEqIYOSww9ZUKa0d%2FK1SU7pBMQJ2X1F2Ykn4HtRg3T3Xr%2BI4OWhFm0TK%2FGzdDwwUSuR%2FhCChpSW40HVD%2BQYvloiMxiU4INXyVuklKK4xZx0Qu950y7Mik%2FV2cZPSzTAnKihRM33rgHqfZqiWMPHki7V74I50IAL6itvBDsDdDDz&X-Amz-Signature=882e97528e13ec88082aab2391fc2712c712acf994500b77e242bd94a1c0ec65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMCKXS7A%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T125141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQCFs%2BASE8MHT%2F7fA2t7CLzH63ALvu7WndznQAYMju%2B3kAIhAJb%2B%2BdC7wusYnAnjUPCjbSc00Vansq9GhUHfGVDAOlHtKv8DCEYQABoMNjM3NDIzMTgzODA1IgxuSjOkMDK4GFAxc5Eq3AMvsolgXSDoUpNjeqMkCa24i3%2B9erSOxNleYV4sdWtSVef8CGO1jUgg9g7uUjGxEXAwrOmPCsA39%2FUxdoX9hYhol1v24iOdGxpHehfkCWdrF2RK2t2JvoENiostgbCNAlhL0VOtEr%2BCvpcUGCbG7RBtsxJyncKpicboo5pB9nKaeN9%2FRkslTWMJVkl2PELpWKOY1jImTX499yfDbGqAFCkeFOLqe5kMnG7qIHJxjG6tzKWk%2B6nm5yngXohb%2Ft%2F8gtS3m%2B3%2FAWwZbOJxJfgX5ymKEnGN3%2FudPhd%2FUzAUmBMp0EyheNdXYVlBPXtFQWN4cxCpVRNB%2FuAsG7d6ZH0Z279Z6lTUb5t2LSZBAj7PIhgWBEcPAab93NQrL6nq0Hxuz0n3csGvkJyljd%2BpCPW7cyib6TxRdjVVnefBlFUYPoT7HGby7ECJFaNvmi%2BiPoLxPH%2B9Sblwd51ufM9UIRJE80Q3L8mio4prrcY3daNwum9lnx0akjyjVBIM3S1D5L7HBvV0V0hjI6XAPXplPwqKP2gDfzrNYUjyqitY1B0tcSTshunTNZzUpSIuLHt%2FnW8bD7NjECZJcYt0b4fovqOi6gG2MhLsguRemFNhkLs5hyWxJ2waP37saUaj5EcHYTDCg8bJBjqkAeZ4N8kgTZRvfB7NfGW2PMPt6FCxz%2F4%2FQ66HK7IglTF%2FyDDzt9%2Bj5ocEaaNOWRRa44ncaeiCykWDZUeBMeGLWzpj9ib%2FGqcAEE3Bi5EgYpOp7U1veNYDMI%2BdqNJAYURvtRNqC0zDp9Z9ZmiVHAR%2B1k83Qrpykt%2FnCD9ny7rSNwKqndmo1j4FIv1EXMJ%2BAcJmIp%2BPqDhp4B%2BgzYYVYKounBaJEleM&X-Amz-Signature=8e2c75064f1e418d3a0891660854ebc9aebbf8663a9b4b155ad210ff03a41bec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

