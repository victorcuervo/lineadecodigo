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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXK7WAN6%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T043650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDjwBwmHeLffezhifBN%2BUabbDo6VOgKX9CdOGqDWDYkjAiAb%2FLscqiLlK%2F1bxzI9oB2DMGDIl12DrAUT0BwVSRWsJiqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7R%2BBYPpuDFO3Pn2tKtwDeEMwt1bt3CwLFNHlpRhv01kHSsCYe%2BbVCZAwvMHG2iOXzrDc1eTM2OsiD5KVl7%2FFLDAc%2F6Zx2%2F8m6xGBBpUofPd6ivBeaLCtBvmuK9oMcFAlSMUIQWEUl%2FFQpTGsABxOCEpM0SFYVutaTc%2BsCbIJ4FevT7w52lFboM47nZbOwARAP6oUh87PXdA25NyOc9pZcGuHPMWt0etH4aq%2FPmyATXxX2sAdNAWeIup5p%2FY633BL6CEfTgO%2BDueTuK1vkbsoWmJ9HO8LrVK3jK3pTLF0kFRibBMfr6ZMbCa6zO3FnqzPY7kSs9TFyj75%2FIFw8%2FMg31MGSjP7AB3SoAjpU1AK7Wj%2F8ivLb0%2Fo1DayhYZRI4TQY0uPy8EIWtKCf0ekxeryh04AZjqDdeYtc6ZmPxq7po3Iup4OfLmB%2FpV0r4tM6x8catzCttzFhLkIl%2Fuy233HCKU%2FLAxtO8GQGdewFD3dgY4qyAAnKDk9gjwUKjjh%2Fa6AvFImmhTdWgHKvRijCvzIM4lKYVXSSfUV%2BDL1zeU3B7IHcF1NCEUCOLcM2OvGpY0g6PbhGh3QnVoWkVx9vJ7QDTXc%2Btkzb3wcIVKLk2eox0UyhWyzGlbosPn%2BHJqf4zJf7XXX3FFWXQ%2B5EPUwgpTZyQY6pgHv3uOB%2FsRTn8YhJmUeOvTTyVgcY6VuZ1Tk1CTrk5P9%2BvCjKZ4f04jhSqm1cXb2NwhiKAbbhFkrB5TI%2F8YCIFSEYEUyyhxsEceNeY0j6H7f%2BlxxXjFDvJDn2epotoW%2BemR%2Bcz4GmN2rjZQeKDvIFjsNY06eVuPYLDgon5aBtM%2FmAWP3auDECZWLwIwjaoLJwcI5E%2FZlzPXwuUMZzTt9Tr9khAkLGIOC&X-Amz-Signature=208be41f0b95ad8ee4c45187f92b228022cd916b518033292a68b86db5b8501a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDYG5P3X%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T043649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICaZFwuUOdwwq7WB7alpeHvPx2w2fsAvEOg0Wm%2FsAdyfAiBGVnbhq9y6nxP8pMXkBMKSe0Th1eIFiTCiXVwt4qHCACqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKOHSfXsTeyfgSDwGKtwDq%2FBb0jEvlMVR5M4ZkRL%2Be5YcDUVwHcOt0jREtpv9mSID7dyLmJGE3DtpVvI50b22inNyeY3yHeBW6vivg7KZ8CK2BQrHu8Xl%2FMmSO9yaY%2B0Xmo8pWCaxodb%2BzVULDjWgAV2kirkpp8jKKkKXywNsVO74ouoXB9IuSUwcMoLhUuOtZaAXBjLD0yt80w%2Bt9tklXR8ftoVF3mqvbWZSX0SpTucLYo5gFvLTaqMreQlBbIrDhPSzU7ojKWzKvFIlOjhY8d0mqgjPDUM8gZTP36bYLtxlT14B5zFTvSMgyzTb5KWWVdFGUoJXaaKBz9eZESmF0QDqMPHHxz8%2BsKdif4sKdd%2Bq3efzNTekf615JIqspO%2BY7wWauBBPuhzcCothqfrRGlY9AhpVxWTN2qkk%2Fp8QbLGvshZ8OkkdMdXa6DE8EZqZFkxyNhtrxQ10YtUfeLACGH0m2ZVjvNH2zd0ikgHOjbPD4QRU7Fe44YtbdZzkUUnpQU%2BQWc0se5m6a76nUUjYGfOiqUGm064kMtswX4n0wKLfpS2SVdf740vg7bmUIx7uyT72SRBy%2Fq28uoVCUP64aV05Sf1g9Oq8dwQftXZzUDciEknzqmIRaH5qzriBCN4v8nlGf4rI08XBP%2FkwyZTZyQY6pgHjyf3%2BJVHmLNQY%2FTMjmgaue38WO67CkcmY31tMK2dR8xddsHf%2BsWY6Kvzq5WPDG1GhqwnErVD3%2FA0ET6Sa%2FBNfDdANgau3w5oP9%2BqxIq06tYsDWzzcsliI9p5TI4Xvr4Ev5jLEpb8%2B5WbpfoyIsZ3v2e%2FZDAXTTr3gpL0jRHoKfbNX8pGhU0Q7weADgiTaFArXvLpMkTbN%2FLPTsEVfBdi0u6dyLWuI&X-Amz-Signature=bd034d8e587a637f89ef0d43751b06ea2ec02ddaaf88d9aa8b881d29ecb5f3af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

