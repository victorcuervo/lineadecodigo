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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PW63HEC%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T113624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEuoEBakltqi76JijdIDl8t%2B2MlzV5PpOOEsa8qvhFBiAiAZt1MpZ5Pv0kRKDeUgf13fC6eXAst%2Fed75meZbDpuf7iqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMP0d5T3vdFoKiMfi5KtwDfXyjR3yHh7b8EcJSk831gwQJUSrWChiRjXncQNSZEOTLtZzbH1N8KKGV71MG9DCcgOCL0Tfnl9wnJeldQX30hbscwRqG2y4GnuwogY7RatJxrYN45REeWYi6NAOVS5CaiVWy4HCz5lEoiTzRXXx6z5LcqVNuUT6NTgL3RLd7GKSkutHxQINRJdTu81YfaSSwpuelYwo9hs89ySpRaei9Shef7XDF2VAQ9kF6nPnnsJ9g9h5KW4wTbTOya5XAxG8m3vuyOtzyLpp1nB46XM8aFxta2gqh%2BDrJrYfL6efjIHc%2BHZF%2BDg%2BUGa8tqK6%2BjEPIScP7Mv4XmmX4yUDiLwggn4CvjLoCe3F03cozaSU5T7EUl0J36jL6VfjmooUWCMnefqaKNlHsyJjUhQhRoOh1sCiojk1%2Fm%2BsurGkYyhKckaXSyrWJAYxCJEGluDRa1sjMFglQsAq%2BLw%2FilNBgCotyHrFtmYQh%2Fo03Nzq8nCBSUvly4wvwHwNMCVlSAXeplMr%2Bmyrc%2BnUcIndcQyOWjN6NXPojdrhyWWMVqDd4eJ8d0JJu4QLj1LObrpyVN%2Fa8BpTZh3DwTGVjMTbEetiOU2ce4XiD927rBOsK4J6M99ukXh8P3u8y%2BgYxWosP1dUwspnVyQY6pgHTKawWJiqArit9j3%2BM90Fhb5jCUOcM5JeE%2BVm0ZyICSQOv6AmdkaeBzJeFJIgLFW1DCOcBXqzxDk1udFfkr3nR4Sa4mV4ITf1IT8MMANOlMyjiNH%2FbvGCRRFZoD1Mkwpi9zltvYZyPtrLd%2BWo01lzo20u8yH3mVgLiPc4HuDvDQj4GccM9aAEJ1RG%2BrU%2FWYKOwVP%2Fm7QDaNnLS9IG8gPZNXOs4Z2J%2F&X-Amz-Signature=adb2c39889e91a50e8c7132c507bf5d235211a803d2f91d7f53fd3344165cffc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GSOOISA%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T113624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICGofn98xUe%2BKpOB%2BjP5xSKNmsz2ZCe%2B6GtcpjTC7kXoAiEAjGB6VYcmzAz1tNWnc%2By9uabxYvLNmIpGxnUN82Jy%2F2UqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGgiIMexVotCgyu5YSrcA9HPAYRBnH4OOClVmig7EeIpYt%2FCVtC1IWGiBtQzy6BTlXc9dXuWDjEruhorKBhNBgYK0%2FRj0RnRJ5OW%2BCu5pnF7Fmx05zNEpOGGedA%2FDhNMhO%2FnND%2F1yiUCcB5nTi1Lmt3nHKmBPKGtMkmEJ33Zst4nidEZITPz%2F%2F60KMtdjEfRGvs%2F%2FbMoyB9JE5zUGGLz8b5c3232rePpmIAr8%2F1kNi2r5%2BZLkL6hLq5E%2FUWFCE5TMflb4zTQ%2FcujdIr0aTuiR6KkkqQ5hYPm6Z%2FyQV0s5TBu72Ov4lHR9cNxpv4Cj6SunN2w6UbK5nRbPXdNv4cn5zDSgBPrsHu4o0UvJrK6tI0GR9DiCp91Dd01kBpp8L8lnn1VIWc5SOCEElV7sawnFI4bZRGILqLHPMTJo2xXjEw8sL7yHsyJ6Z3giyM4WjUr0wO4omWRWrJRUmHrvIkbdBl3Y23R1RhXNSOVZ0hsbhV1eHLvnyzu47UwBOwDKB2jICvZwH4SPFf85rKiUbEtEWeccnCkkKyAjbVEjZa0f2Xx1oQmFoWawaJ3v3gck150gpechx9o4iB5F2%2Bc%2BAPxus3AvKHE7iBeo2l5B3QqNCW5qXg9AzJ%2F1lKpHJCuzf8SXgJpirkc7kCEGhLlMMua1ckGOqUB6vKT2vTtha3QOmMFtgcHeoeDEzcnBycEaD3nn2gcAcaWijuWlYwBIe%2Bc2I4UseUfaF8jCtdHAJB0H8cPkAFDtUBRgFMGmJeAhozxuj%2B4EnDZTLEr8AjIqVDemrVRO90knK%2FNCoX8HD%2FEqUoLLP9LXZpX%2Fqhe5%2F5sgigZwJKiXFOf98KJf21pHOsPFooQCoZ4T%2Ftp75fDO8uz7gsyJCHD5aRhhP%2Bi&X-Amz-Signature=98e28c6a74c9e4a9e1c89385e3ea5411282e77185f0de17661de23b116699bfe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

