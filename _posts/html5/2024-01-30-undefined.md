---
layout: post
title: Mensajes emergentes con popover en HTML5
excerpt: "Uso del atributo popover para poder generar mensajes emergentes con popover en HTML5 en los que se pueda incluir cualquier contenido."
categories: HTML5
tags: [html5 popover]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIST7SPE%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T023703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIDrvhfMu9F2RuWRW4eQA%2Bf%2BB%2FGLc1vfhwV56zzEk3i7NAiEAzUfj8vAdSZ2PEG%2BVrC%2F1dmKeG%2F5SSK6tQEO25WBnbCsq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDD3k%2FeY1MBk%2BmGbhVSrcAwqvyZPufm2LJch2tUWREqDF%2Fql%2BYl92qDnyoKQbZJmK3Nv2anF%2BH3rWr8MCEt4vxWqWRxFmKKlcsg2XPRCJ4xEswQIApFFExwXdp%2FiS3Ti1XGajYjqpemhio%2FFNhH%2BWmfk%2Fadj0Yd7LEeXIjLAlCxwrhsVX4wSPyAzWsic5hB7e4r3ogf0fwwJb%2FsxgaEBXzQVexwct1ulAeO2WpMz8InwxVmBy3gcF8JzptDhVv%2FboSy%2BQemEWwfFweKS2MsAGojHp8L%2BQML8aAmNsNX5HMMKN%2B%2Bz6uF4DVvMFPWLESoY2t7MoQdoGaAppnL3X0dnONvc58ZiEw5TVVnfmDX0eNGN3O%2BrNXMJo49BXCjaRNELGpbOzejBf2WywRrZCbPHPl6zUe0eqMA17L4Pt91eeTNYQA%2FvUphlAGt4H6HA7ibMXH1mB6Obtic%2F4Ih93vEj2K83x7n9CBiywRFWDdXqmKJ5v817wr8mvCrzZpIr24fsQTHak9zjvM6MvKDjJZj4%2F5FFWdRv2aW29ODgsqzaDBHZldHDlMrWM2SFN5YTJGPc9V%2B8lZx5wSw1%2BVwRsjq9%2BUQB6DqoyPIvByc9ero8URNQ%2FLlqymKHzDz3nEfqmeWIfkk32FGPE%2F9r%2Fn2UUMLOUvskGOqUBZqV4SmQK0qqB9TksPe%2BD4gZac0xSWIq1tSFiIe5UpUPgGbrUzRCRJ6BMF9rRDflrzfiYeQzD0cO0cGMtB6Hgd4aV5IVaMtOngHuW2kGgKScnM7JXRnAzaP3%2B90pLGsfqQaxQXVaTL9QBh3dCo4kV2CVjXlXSRI56I0FCzaoBnxROzegZ1PPrGRxQxFHwVyOh6pQuJe6QW5Eux%2FrmdUT461%2BlHdX9&X-Amz-Signature=a0fd6f14ab3b0fcf44086eab749ecad2242f7b1e8e108662447a1ea938d58a69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6O5WN52%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T023703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIDP2YMu3D3gFj0qQ7lOKpP7fCDMRaafGNVg6ot%2FNsoVRAiASsPlvU9YE9nOVF9QHPgcp%2FD0eeL1YFPUoZLYUsKe6Gyr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMBZncjLaMpmojAvg4KtwDV7c%2F%2FKA%2FW7%2BVwHw%2FgpmY8N5HlJ5FspcO7Geui7Hi6cvjYdM1lrhI7K4xrtXfMU98jtRlFsbyZapFEW2t3tmIx6%2B5jV69TV0%2BBY3OSCq0SgYe9ntPKk93%2FcKVIu5zp%2FbDWtp0NjdU5poftwPw0iVz0O2RH3rsLn5e1pEOFAVY%2FvojR0DjBBRRQS17EM5cQ4Aap6fVxQEtHQk%2F3tQizX2S56uaOEcD%2BNckewrorFK7sAzURXfZ9DA2b0YrcZrHE0uhIpP4cXlUGMB5zVlm5YYY%2FH2bQe40o6Nl5dbUuKVcYOLTUA3BwBrZ01v1WFflD3T0zyXPYjCWfV0GECTA%2B7Zu%2F59VGcjunQgD8%2B60LrZRo2EQh13ILyMun9BT1ZYywWq0%2FcAJ8qirSsAbEhtWUWX%2BDt%2BbN5iZlEL2363jxrVf%2BzaS3dGZ9Yy4x%2BTre1dGY0RfjpPpnW7%2F2Vn58BJAx9%2BQo4KlyjhE7KJ%2Bwt75xBtPz%2FB%2FJVhReR48HsBn6EHeCWsZympvxdxG1WNb9vitIdDtCbE2f1bNakAY9NCoQlFVODuWmwLBsmnYKSj2lS2z1Utx9NxM5so%2BY956m6q7M5NoGSFPRj2VJX0cNtN6K3rT9MHDQaH%2F6gPvSTbMTrMw4Ze%2ByQY6pgG7QCug%2FFrZWFdYtd%2BNOVSZ6KxDypGQ7z9qZiyUiETq2ZYvo1taKVszLHESzPeALbUJAJY2RvwNm%2B%2B7Oplmj7QG5dvPr4NDOzjknukkLwZ%2FifV1hL7STNPFQrPY0wC2eIUW1dKSiNGM%2BUeVUgo0DmyL1d%2BY5ahpP4IieQSXmmI97We8%2B5kKL0B30S2jIFZv22E5d3iyCUkMTzNtSAkZYvOvUVTXQpIf&X-Amz-Signature=f397cb2e95ec5df7a32b4cae3d9a6cdbc0675ff199f295f251178b9ad869fdc0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

