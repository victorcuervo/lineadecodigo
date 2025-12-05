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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQWZVEZE%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T204441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC%2BtM6WGvtzB00b5wAxDqqaVZY%2BskLNdZPvk2rRZhh4ZAiEAw86DkI2jU%2BBCw%2Fophs%2FBFr40Atpc7mCuKfrQYCCLRjgq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDOpoYDUwE0tmisbI6CrcAxzV9dUHfleYx7a%2BSGyqCyi2Pp0voEPE%2Bdx04ijmTiaR2fX3zLNUZbsHt7umlYMzIPJuNhcr4YuFNKHnhXAvXkhVLvpNuzUQJK5MIzji%2BFnYDBVon6LFJeLrbsS%2FVJvTaw6qvoTo8AuCcCN1xFr%2BShHbVXeB5IRMI6609scL11XsyK1XeGQB95VfsQdWrvgD87vahpWVu0v%2F4%2BBGlW%2BEXqE1aOMdQpEvh%2Btq%2B1AxExcRGVZPN8Ki46Lj20P7DETCTVszjvQm9LOMLQb0HUKn3P9f7KWnhB9sQq3ryNAPFWKPWSx%2Bmd2Trz7DsEs6Qkt6ducIUlR3Ps0NkaPliqIK0tZIOGQv791hag5mamULGgQC1n9QugDnKmU79BthuetrFbXNnUjN7Rtr1pCcIY5nl%2ByiNiooeNrZKfsPxEh4D2bJslEbyufnwsWZLpy%2FubRY0LF21XDtBxZ1Zui5Ai4lbMC%2BajWdY1%2FEgMZqnA1vcNIWLuoGipuX5jripn12DFfgcLExQjyARAfrS3OPoVGHqDJQhPmtUX3R1uy%2B4sOZwlpCTt%2Bhh3lwdPnRsLBxCczQZix2V3v2w3Id%2BLd%2F7R4PhkVyOEekoPuUtWfQhE%2BiaURqcGYpXnaqlnP6yUYKMP7py8kGOqUB0ho4VX8vDrtdyFTy10MwYy7Yx6ou0gZyi4EpQFb58e98XqPK4L%2FlyLOm4QM0sO2RTALFCOmHuuIPxvMUMqff5M%2FyNCOENADGrqWsg1vUexjKCQstBpqqOyfxFxtlZtXFsqEtwbbO5Q8I4%2BWjU11xgPL0flKrohTQR58PFLvfjND77flcJs4vimaBlpV4I3pms5WFe26i4mZwaehW4Mc2%2F2sE5Rx7&X-Amz-Signature=a893a8cd499a137b44520e0652e5fc80f0925182da7d6b5d536a930c4cba9488&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7RDNFXB%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T204441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTzmrz4A0u9PBm9cfU5QXpSbIbY%2FZXjSMZeXjpCAybNgIhALKFuosSjlUQaw4C0oRC3wiBYY3TmM5HABIyxXNi%2BpHyKv8DCGUQABoMNjM3NDIzMTgzODA1Igw%2FYxepZFkm0M%2FzBzMq3APQzd6guC8BfTtNIXm9eMWqKyXJsdWIVdwKPPyZzRaEvaKxrGim2bKL3awd0m6j2WfDBsjxojeKgD6xM1L7hGhfym%2F%2BZrotjwDetqw2kGHaMps4fh%2BQSeCM6XiwcChRuzUy3Mv7J7YbiTcUWJsL2vD16ygQ5tYfVluRgkBnWFsq6Hk0GAX8O8q9S33xgt4yQKGRi%2BKA8vE5pt7jt3pa%2F8w%2FZgsHxT8ZYP3m0mC8Rh3oduidfJ5MU72zC9KwWxFDR143%2FIX1oZ85OniucK%2FpV3orgYGlbi%2FFJr8hsBsLfeMyOeTmBG9cinCO%2FdGI34JwLJm4aGXx5Az8poi%2BorJH1Y%2Bygx8JnCKe8vrQBfNhnj5vusovB9L18PZKqtBLQ85Ph02IOSQll1HruWKb3kgR0VEUoPk1VY3FUZTRjAydzKwEEZps6bRiLFQxg8H4VRs0hWO%2Fp1%2FopXNsapEOyf2KSFZCehCcFNianppz6ulDoBc4OXIVD%2FYB5NcnIDLx7C%2B8pxunXaGBmDYvxS9C307KV9nhBfgpk0fbU%2FKPmSAF%2BYkEHqCNiUdXiwdnXvWtJ0lsFSlVNggoJj2TTkfwC%2FSutLscTIKi1a3TsQLn9pGLzKwl8KWob7xhe5LiC1JqszCx7szJBjqkAaTEIB2yU0xgEQFf3n6txVDVdrbfLOu3cxhM95OitOryVHKjjEsb0rwCAPSOw2QBvJEYOQfil9QK5AnRDIn596FFqHmcSsJ3CxOb0qR2wDbpP%2F9LGrhbQPReohMe8b6xHGXDBukZQV%2BjB54aErspbJiLo6vaB%2BKNBpfFhiDDshmE3K%2F075nrx7ac8zArOX28lyfbAFpiGAZNGUTobS35geGQRnHM&X-Amz-Signature=59468f071c9e0492b6c84752afbd8f72a2664ed53b7605b8fa91cd3b88b72e2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

