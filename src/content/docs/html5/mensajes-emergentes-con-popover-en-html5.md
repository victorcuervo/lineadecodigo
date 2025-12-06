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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RP3NLJV%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T180141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGwf9hWMfL0mrYlOmZpiw0fPIkqiw6Dw5rkV3I8NxqkZAiBxLXDPxD9VmtkCsrRPf9DRCOpEMeqB6F7FsYZuETtwbCr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMvQRFSFYC6Kox7kW8KtwDusr7263qdZWB%2FkoOvWEntcJ4wUthRjzDakoVL5ydO8%2F%2B71pjqAvHqIp8G8Ri2xvskvuQIJ9K0MKtEzUMQdhPuJNF9nwW67V%2FIemNR3r%2FAfQkRQnblCn6TwaskRlNtUOq%2BPvhEqO8ftq%2FPC23lHrbCJgmAHCRSD7FeAUNwT9v2J%2Fndq3rBVpu0LNcf1ewVtWGjyZFaGGk9mRXDFyXb2YlcdXyIH4WOQcj2c3ueb4J6j7okp7shWfhrVYOLw9lHcqrew8vWZCnfpW6jHRaTcvzHyU8DYyszNRXsIRYwrk8O%2BCIU9SZioOhjaap6b8CNko%2FWJHIapLoDDJHPHkpeJCEXPslihTFWG1%2FKMLhnb6sRgzDXityFF%2BfNZRcSujSMXfCDPaPKf%2FyxP0bIX%2Bz5gHWQjLg3jDOKXoY8uIv01y31yna6ad1kTGLqo7SO7ml9%2Baddl5uvwYZ7dLZDw%2FCJLevYFzHAsQBs%2BJkRs8AOkxfqs9%2FyxlwOKaQfFTz%2FTkJ72Wkg0g95vz72fvZv0VG2OHBL%2F%2F%2BjfEZFfpajKvoQ1DvAgzxCPHOoHHsCGzKSI2tG0dljrmcX1ndQ9%2B0SFl0K2Oc7J2RDYZdUGnqEqiHCKA4CjKQJSLiPCNzv0d7DQsw9sPRyQY6pgHyi88PwXTwAH%2FNzFQza815qrfwAGgrc7Nf%2B01G7bFlftcX%2BohQb6b8IP4XvJg5OqIRx6X9D1P9qYyA%2BIjZ%2FACaqp2u89SVY8N7nXTHNL1SvL7pfAbo7rkUc62TFRoxg2Iq2jcBXO36JkwwtVuQEfWmWqem32TbXTR0q5%2FheEkaVOzNFXQTU9kPjRWvZjUX%2FxznmrRkEuU7ziiLo%2FpertSmkWDABvaN&X-Amz-Signature=3cedc38f5b680ea6b0711a20a5a756e622eff8ee459055ff4cc8188d05df8f0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CDZ2O7O%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T180138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAxwNNvi5%2FCtL7nFsPPGNVMh1f5NTxgPF1ScEjPQWzNgIgO4MPPqsgpYRbLkrxaBIQ3ZGp9CR1fPj8L6fYTcZxBBQq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDCas8Zd25Z6h0IufXyrcAxj%2BS%2FxWd9R6L4bI0tZYCicfb8f%2BIQVVbh8KJ7SaoZ0Qg3Zn%2FOGdXeF5T6EGR9fb%2FwcHk%2FtTooaIwqYmBrrg5YypM%2FD0kNbkVCtjYSqRW6V4vdsc5ND8ugy1krkVi%2FU16R71I3qZ2W2qmti6m3hmj2T2moDVI8gMYtGNtI97SiLDw71snEzQOz%2FWeusGgPxn1OMMXBVymiva%2F0q5tiDB0opFDK70TwFdZhQb5390sRhX1rXing5eiXTlNpI9DDFgaodtrVi7Ax67fteBuXAhrHyi60Y80ewbGVAtG2lT05DfzmD8%2FANbVC7k1pddgihMkvof3mNex%2BWH3rTzdyUVWDiVMK%2BXc6%2FZ%2BpgQyZA%2BGJ8Zyn6IUgFI147yib7OicHtY39sCPWJo2KfMSxOoZoGd8jWbXGBvCG50CD7ZZy7Cgwq0sKcwNwYGz5kUXPqK4c70qV0Eqhus8%2Fo8B%2BVMsUaxGN0LQktn%2Bmcx6VGcyM7IG3l0vuYYNxpcJfEXiSHryJpsCSkHJmOMTDNBn5v%2FNGzcQvi0cbeLLOoAjEJSmw9VS0LEA46dlmtFkGziamV2OcmVmtkQNnT5x%2FmaZMhM5mwrHcIkoIOubUko%2FHP9oa1Ps%2F7POtkW22jca4p%2BG9gMLLJ0ckGOqUBuca5Li2zkfaK6rYAPHMbLu9nr%2BtwE%2Bf%2FkGEvnR9C4jJ8hh0d4kuha7TV%2B1Fjv%2F8Y3xcaCN8z1eQ7L%2BIr8VkeqL3ZEk31YN9e6Wx4k0TWiDdsF%2FiqK%2FgqV7VWA2QH3Ujw%2FvryMFm47YVXlN1Zd1ehgK7DvoABSS6iHYxfdk5BjT5Js7mcu8pop%2Blnpc5qODD%2FBsEw%2FYk8fB68A8Exmr%2BtEAQdTzlt&X-Amz-Signature=66275de76ba5d01dec1fa6202b60d732a3e18fde9ceff7519cbd01712a0f3736&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

