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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656TJUDFQ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T103151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnDHZaZAG1ETW7zs3cJFRwjhxGLUHcMRki3g072WlpxAIgK78Gb7Z4pE%2BJi7L1%2FydRhMqbilcW%2B2nCtJNOF2YcISgq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDH6RKOqOdDGTjGbB9ircA4%2BfHR7ntEys8wfxn%2BO5Z4q47%2FzOm1xdm%2Bll0IhMicawmX98gPumMcIEbl6VoyFIMtYPVv0jpICo9xr5j2N7Tg%2F%2FAvKVMROU9NXQpCumIarkeYj41Ad2ybVtiKSaLIX%2FummypaK1CVzyj%2F4rngPbvQdHMw%2FSDZMGcQONwtX6tRgNsaBtan9vs%2Bm6JXdEVZMKNzb23UHPnjmIj2vIm%2BEMiDPdq3dbOdZsPSeH6dAKnLmBEmBR9kRvoa7BRDI9t5qKxPCpj%2FhUOODjBwn7vEWLzes8uo2GSj%2B5WVGGoyh72pSuKd2ReQBeaCghzQo4At81K%2FIsRV9qhSvOrcwHjbi1racbkTBYRTgLOyqCE9%2BkcNFFu%2BEgS1i1wODNZv1okNI6bQxQS%2FdcsHo9ItgH3NspT4CBTjFE1GZC9oxxuoMHkimQLxckehBFG0osYjH9WL%2FcqJdqwTf9Q6%2FHGkmno20U53Oel9d0vwO8WRCJat0m2o2MGnj126%2FfNlZD5SitYmkS25h3qzyJPpKriuu%2F9flPgW%2BbJ3tJvoPWsCLWv5Vi0hlKKMLIe%2Fb9grC0fYtfmMVNadatDURHhioCiegsMvGPpE02%2B0NFxsVRinHRCw3bq22rg6uyXgeES5MzzbP4MO2oyskGOqUBj48ttkTU7%2Fj71Q1Mr4SofkvURfUghwvWARzWe9R2DWIy%2BoAAXn2P6hoh6sBwGBTTZRZHzI6vxSWgSNjrAnOErrOToFy3zxyNyL4TVK8yK4ymAY7%2B9MbtvmvROT0vaOIH4Gy0C4jSFWlhhfNMkUAsgMmnPpA3O%2FH%2F8fR0G4EQ6X5p3Y%2FgegDcvpjsuWNxHYES9nDvjlSg0YRoaNbHwYxkxbFsrbvE&X-Amz-Signature=7241904df7e167147f44f5d1da378e0f642d9330a27d0b1ffd433144b9ebdcf9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JXDRZQR%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T103151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1HOtIjdrzry0robtPWGHMEQIDem6BQofbjx2D0oTMvAIgXE7njIrnqDcWYgWal%2BfyrhdithJZiHU0I0%2FCRTaLM3Qq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDJfK1LNLi%2BtQNaDKUSrcA%2FIuRIUQyHFTVKe8wLvJe3vf2Rl6bZZ79BMtwe97A%2BxkXLXa35kwLnQayAj4gHttehLmjG%2FPadsYcDTD%2FgD%2Fp6SPhGHV%2BGS2oSyKJnMQIAHsErGlPP386CphdYDhG%2F3t%2BNn8heXWJjhMhqBmr%2F1WH6KcesuPL5xWsPcFoatJvik%2BGa7%2FTweVmMP2IhdEVmk%2F3rhueJENj3rGcpVGlVWuiTrTtGokRVo40vIlQSysEuVD7RGLjBtKhDtZa%2BSYtV%2BU86IVGKQT%2FzSPNmbJJtZcr71g0Ff2krXwVdHwQuzSMSYCQUZtK5zbMMTu9M%2BrCUluEQZXQnjIjkD8jKWlT%2BSDEFFtz%2Bu0tdLseNajFsN%2BJZCdXJ5nXyxAn%2BnWtubMjqe59oXMmTw8JMCqt5UxGe6hJ6xPMaOssxcDj%2B2WOpOeUf0yQxsiZK32c%2B8TxQa%2FPC193ddaDfFLu%2FiwH22oZDFWb3xXlYp%2BH3Yp6KuIUyJ5sRDCORDudjJPd9%2BUKGDChWxX1kYhKS9OcUmChhgAWak4LvkRl030a2YvMplcKYUYT9asHNNqw%2FJR0XLG952M2ph6KZSy%2B1jZq5hb0SeKVJ9ywm5%2Beo4GHp95D%2FGASk0xEIQj42KPYCN%2Fu2nO6%2FlQMObTyskGOqUBu7OSxsCbU0wHCmjXGPlEXE1tj%2FWeQlCFL6LgN416dRTCE3q04loOUA2tu%2FQP%2FviDq8yh%2BPTUkSSANMvAi9aVr3Vs2cbEauZwLXSq1hsuDWOys8%2B6Kf6CtLpC7kwYxeqxkH%2Fqw1kVp86sUV0j4gCEHUgZgd3mioKBV3LxmL1CiZOS0oOGGAG%2BmfypbYjtbTPT7p8lBoKJq4%2B1rFd85XT%2BhSkc%2F0Tl&X-Amz-Signature=6d4924f95ef6f431c4935f99b09ae34e932c2baaf37c02658bd8f5054e7b57fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

