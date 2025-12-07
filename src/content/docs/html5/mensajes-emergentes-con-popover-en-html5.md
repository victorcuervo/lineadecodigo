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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAYD3CVH%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T185028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQU36%2FdFueiVolfYpLMTtdsnIGPmVjOAg6ZzvrwQ%2FbEwIhANq4iOpFV1vXxQM86b9CeuOY3AzgfWUVNcU2QwXYLODbKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzF%2FvVYwNq0EXs3Gc4q3AOAFGZk8Cz72GOQOxc0BRcaSnt1HuZDP2Yi7FNBaNl%2BIQdiiZcrd67xmXUUAuYpR2MhdiI3pteK7KDBlQuZpuy%2FlivJkEK86FbnYAOqDP%2BcdbSx0LrS66w1pKC7Li%2F2CtDKHEEwLaraEYV0emSfJCyCj%2FK5OcBkEJDYwx9AYUWM%2F8oWzIib4l4lhKqUYg%2FItQ9hIjLiyJuO3ZHOYQ%2Bm23Tyak1QEqPuYt3kZZUnWq0oFr23Mn9ISRt6kr4F%2BHnnjngVQbxlH9DJNs%2FycaWNHpi09CqU66j2VFLXugm9dyn6dbM8KYYt1t2NZMoZt1tiIc4h0pC4SR5lUq6iGLGfpnTurkYBkvjdpPNLe%2Bs1j9ihjeeU5Pwrh5NqZzHtaNOzWUG9UdtpGlN%2FdGDbiKCUQj4ZvnpzpofgyiY2A0K3%2FRMnasA5Owh7d0KqtvDt7JyYRS6aoiKymKPbtvNwNRJx7nKweKhut8CC42tEmYbsnrBNnU1o%2B%2FwqL02Jwoe2gIl3wMFu0qjAI1VeBX%2BgiKaebQOHuO0e4SDe4k%2BBo83qKCGwDNtMjvnpiQQAuN7VS%2BciT4zLBAnu4m50Iw%2FhKn5lFwDPy6a0ZAHWpSn4%2FPOZB8sHYVQsxr2d9VqriQfvTjDovtbJBjqkAZ8%2BwqZDH%2Bu8T%2B%2FKzBM%2FqzTQnmAM26lOnU2m6fDzGIqzzquOyS6LGdzFBFM4gc%2F%2Fkm5CntJDfrQWU93MYoRn%2ByuEcRi9FP1DHNL78LZfRqs0XzttlgyVe9bTCW3lqJizq0Rj9811DmTdF9NhAOJ02fpDxaE6pO%2FF%2BLkbuIi6f%2Fi6pGRLW29LSbJOP%2BqpmrIFQutkZVfAso1a0iQFrxTEmM0r%2Ft1V&X-Amz-Signature=e4bf6907519078c54c55a28edad326a565eb31e0a6c3a46c6da9dfe147f34b1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5RFNEYF%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T185027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEdWG4%2F8tsJjKHF%2FVuhuGSWn8wayH4IKe%2FZDJuqF5qs2AiEAkMwemj1rKlzb5O3dXQL7t70XQ9pucDptp0ywtWeTY2oqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL8Sud7dCD2X2qpfpCrcA5bV6%2Bn%2BBG75YTvwYgCW5VASkWtyxPRF%2B1mRK7R4a6gbFniLYvAH2fHAjtGvqKAhxuBvh9VEKeSVc%2F0pyzXZIkrMu7NE0nKqiITPT4Orud8n2Vu9fb9gitygdKePOdxqotxHNvDbv5VZvvd%2BhZ%2BhOwxtmN01LQBr0hZzaOxQ0u4c0t3bBpdyRnjFAlbx56z%2F0MzifYgD8%2BcGiQThT2tW3kcRqVSi%2B8m5%2FPNrs1TapNRidkB83J3VpGMZ0gzMkxY0mwyZwPHVze0EMDzBXmOxOscAR0YfUaOb8IOAEVdvU%2FzHvOJ3Cr7pdENK%2FsVrQlhM8JodwJU3S81YIQ96JWLiph0K9B4IJwz%2FAxL1NFnLVATwyXc5%2BDnAGa%2BYT5x0aqBS6GoUSCHxxWGvkQ8JD1q1pB%2Fy9Y2S4h9HaR%2FHV6pzoLLgpsfnIeQbL8CACMh3ArsnxOvkGxq3fOCHbGCnCMVdrekxCz2o0gp%2FwkcK8janb6vZgy6EaUhnkyRvwYxU9Zh800JN4F2u78SiaiglNRoUXEC7nTtXXECrHwS4ZXrA8riHJB7xFkv1jrNMVCGHFhMg5Get6P%2BHrFoLMmIX0byl2m%2Bs6%2FpVSfRulZ4kL7z5xNMPi24KGHV0%2FVqvQ5TcMKu71skGOqUBsRqAtzIAEK1VzpacqEJeewicmqr2z3JC7WmAoGwRVXZ%2BhUhQCXW45HxpuZxfoN1iZ9lzDgYq2KzOzSGP7zo64gSuiwOnDPK1cjeSNQk4R2bJb70mODJ2vDxPlAYxVlmD2Mf53PiGP2JNNZv%2FxDKslpenIi0rBAvDix1PX62zErcYrwYZ9bOteIv97KyP26dO6Iat7thla8YcVOW7%2B1OmVb0iqEun&X-Amz-Signature=20efa2ec28a9008fa548c80afa69073704ac214834c053514b1628f4645789cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

