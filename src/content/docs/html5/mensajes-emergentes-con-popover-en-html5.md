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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBYE63IO%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T140152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPvRGQY6I1GYsQczAD%2FRwVydHcS%2FxwziPBl2KLuM1IDAIgVaJXE88lLjFdJOSWiM8jSTwm8iBcSnyDW5Gs1qkQz8Aq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDMlaMr%2BoYqQ%2F0LEntyrcA%2BCFnP6qvO6CgrK9zq%2BO9dirAqK%2Fh%2F5Dula1gKebf9Ga32Y4LhSqgt%2FmlIxp6Z6F5LxzcTqQ%2BikChgBVlpUQvRXiHqycl4iY85o4LjKrr%2BhaSvqknj5tJEQWeIUDNgleFCboP8WMsGL0YXjfhcOcTc7p0iP0uzjbg4y1g%2BgwuXPP3x6dSnEOAhOq%2BAPsKot6e38ds32tBPzGMZAfJA2xPPWfQNXWi3CKVoKy0a1WbjLm%2BTDIm61TRqfVW4RBjO2oPtR3QbErFzHRf6Ce%2B2WNUPOK3YWEB%2B3g2tcChpcsIDs9nBJVtphudYIV%2FhCKaao%2B%2BtkDuqYkYOfo9B7aKk%2BdJAWXHkL%2FMKMGMq%2F46Djnv1h%2F%2BLNuEthpPj%2BS6xYW2sDR2BBn9XP14yWLMKut4ZF%2BfYXyRYyLJmEMj9sV0Uhh7vb967VlUw3A8pd0jJkILU%2FLy7vRWDGZ38A46sN4Lcnz4mKDMfTBQn3rn%2F%2FKU8D2mr89ZMXNvERDzlVgXrvGsZbOVsD5hF%2BYUqtTbYH2Cl%2Ff1KjgF%2FhDfTguDgWvLW6RlWzd5XSncmJcq8tQUA0wATUqT7kgaLqktIR06ix9nrs%2B4PBTKk2HaJOt6daJY%2Fu7RU5ZPUNvyfCPq8N8vS6lMNCm0MkGOqUBB08BGkxBy9y%2BJ69PlKGF%2BMVNqvgXAQXi7WaY3QZpuiI8XApxVUy09sYU7kdjDPGUZZMDY2ceZxFzg2UQmxDE5%2B182zCpVpNtai6gZhegFivP%2FTrEHTd8L8eoUscGCNFrDlk%2FgNIo5Tsw7VdUM9f1EOyeCTlK1HRRRgZBId1e0l6bqNSDXGedP5rUV0pJm5wiTZlu0w30jmuG%2Bv0a8djYs0fteXpj&X-Amz-Signature=9d729844016dd4121c70a742a3b0be686dca744d8b749e7122115c1d8fb530aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ODLLQY7%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T140151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHt%2BQaAhiyHVWtjFWKRkVEaQLM3dYyRfugk2g2dcYjpXAiEAp0l9Oj7ZDYggPO5KDPaR9Ri35PVy6A8Wz1FATn1Ak1Iq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDPcqiAJZnOysziEhHCrcA5X%2FH5EjqkshDnztnVXpLGDjK4s6ULklAJtYo4Sa6GuuunmxQiaobbPia1bVczANB5%2Fym2Weq5QKNgGpJuWPD0FUbGthFajluPMjJyGYJ5ipgn0499FmhIqCrnc1U8dZNIWvGYyb3KLEl%2FDzlkyi0BpANghTCD0y2XLCLhqIhNAPKGOfSsiaxCQvBA%2FIUSv1vUq%2FGbLk2NYDVqtB8TUkG8ua1f7tkdXu2GXXbwq4TrHRr6G3k6qmrP4W3dElECOvJRwdPmlv1o8Wc3ykXYEH04WBu%2BKKHMm7cjNVbeHNpfJiUda15%2FuljcG%2BS%2BLvSUQycEPZHdcp36AUn%2BtKTDjeIJk3JCGkFjR6ZSLqyqnrpIL8ecI7PO9caXOJe%2F%2FisBT3All%2B3daXLbTKbtDKlEhE5Q1mOi6FRui7ZCx1prk00j7ypKDvc3cUgbRfUU43YKrfpC6swpipujAF2DYxyhGl7nE88hWYSyPTdwAWRtz68t8Udvhd2l1E20KKOGkhw4RotgGmrP2zra3%2FhXf1pk65aWWfC7cFQiFBUokrg7PAhlxv30%2BJSuPwqBEtTzS8V2Yql9LZktuiuejHVhMI9r%2B%2FrMk1rR%2FkFv%2BapRKV%2FjS2EH4%2FkUbTBtZoxE%2B2O7tBMMOm0MkGOqUBbGusAMMuYXmhDT3RYZw36qi9k2D%2FAHjwbpq7rkpwUftBBewjJfvVIZB7DtDNshNEp1S%2BjsrYk7zNFmyWGxIKGmFN0h%2BP1v%2Fgs8GI9FRbCkiGN1hbm41csY%2B2Tmuo6qfM0dI3vzN8HNoW3pI8ksd7frtzCFADQ7JUrwnWiitMI0H62GDyJ%2BHS2kupNB0drEXuOXoR8HfZ4QVoGewxKUyZ1UP74%2FGI&X-Amz-Signature=48294725c89562cbe55090181e323d1d54fb7fbf5a9ca75b50f139bb0ad82105&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

