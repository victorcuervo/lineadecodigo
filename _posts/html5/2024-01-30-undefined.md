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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEM4H4C5%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T084214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJIMEYCIQCrAEhh8zF5EGX4kVaFzWGgya2wso7gZsnfeXRFFVdTJgIhAK9qk0FEt7d8zCtuDdZhRMVYfqFy9Q49diwS%2BIep13nUKv8DCCkQABoMNjM3NDIzMTgzODA1IgyJck3CXBCCxkI3mDYq3AMgSYXTazLVjS8xV%2FjqhSDaPxsoBBRSyZdXKsLg3RXwQjEwwaohvkMkWtRHdbqifSmvoVT%2BNsPcgVveaoyI6yGttxPIwYxV3gQ7ElaUow6w6gvkRwitQ4vegFzlMPQCrFdzeHlZV2f9E%2Bvvbas5qsB9SOXWf%2BvV4fUaMElu9h%2FrcPtx%2B70mLekkzleXUpe1ljNcnKslDBJ3XrVuZbStDHN8CeHrB5ficiDrO9mghJvRQadyvUM8PIcgHauvSp1LTV1QK%2Fl%2FoXvcER52rccA7K4H4HhL6uVW9UXtwtKOP877H3TEEtJnKjq%2BTx2kk%2F%2FVB4rVfeiOc6Z5XxBM7%2F282t87I70TebvvN5TLCjpeL27zfJwdkZTfq9iGww8xjl4C2VAINpM7a37nGTn2NH5n2py%2Bs5lOPrlb%2FxvUvYhlFPlUmSge9dRXw7J8T9UWmrtjSDwoH9YkjZSB5i1khfPF7Ybq%2Fw9V%2Fa8yqRiEXJy39N3GAl9584WQBJy%2BVLsBJAfttJW7zgyUKhSL1Lwkj1rgx9tDt1rmAT1yzSFq%2BtGN5LUKPvIafjWRn4k5eEc9eQrBUIez%2FZjOroM2f%2Bg67RInBzm1mQhhlT%2BFc%2Fi%2FeLT84RUdDr4O59qgWU4fVWt7cDDe1b%2FJBjqkAV5bTxh1GClYbh0HQ1oKRwOD78rbCAAA0z%2Frln9ZVKcXIurUkWE80IUmwEd6ZlFT5MFXXcSMC0SlB9F3tBPZ6wiJcZtD7yUlh3rPHu%2Fqndyt7DgLPG%2Buy1y8cjmuLBDIZXn3ZFFXZaqX3%2Fk%2BpIGim00zMumjN%2FppoC24%2BbSnzHoOqQPsrmpdsEtnUhjxCc9QUy0ynD2EPViY1whVIKzgKC7o9BMF&X-Amz-Signature=d06f87a422a1778dffa1be4909ec19a8a8741c483972d890738229ba70fda4d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T43BE3F4%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T084214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJIMEYCIQDSQTsCPU5njymEDAkD7tApFh22tnhEyVYnkt3G8IAfugIhAN2G6PdZCl%2FvBUmFFE2Wxl891oYcr%2FGXypm1mcXKg1%2FqKv8DCCkQABoMNjM3NDIzMTgzODA1IgyP6%2Bhx5%2BGmt3ZcGJQq3APVOq7yK6rR63xvlE0Smc7bnIvLOl9yRU6U3kKK6mY%2FrYEr1W5ehhAWEzO5ygLLMYUxviPZxT6ZeN9l9N%2F37x5kVA%2BkIMteip1ZRJcSWKNfztdTruoYb2fzSXQJ3AuBSUTzlf5F7XkUdxVnRztz0KXpWxs9mNE2Nt8Lld9tKIGUpxpsiDTw8rA7xmrbt6TkXPBFQ%2BEH3ZV9ziZByv8umSl%2BXi%2F0A4D7GR2CVUlHtlD%2Bct3P28Kpfs5cJAifmOkh546M0Pe0IZCBtBB8WDOW11Gk4aDSKd5GBQNLXH1gNY542Ho%2FCMZJmJKgxiQciG6SvB7L2DkmaE%2FE1P5hd4D2PnUpxfu%2BXNhAxo3123YeAbGQSZCVXJ3lYrjRDzUVq%2BiCbz9cxtiP5XVBTvpxJS3Z7ENOZnTshC2%2FqadQAKKYcksbFD3kqiNqJBTwXZPKchpRO0TcL9B0kdglCqByaNvDLa85lJLpgKDtpEF87aMcABbW5uFZQts8n2noEVGBkr3FaYgqBh4VH%2Belnv499BMaVULUfVNgV%2FphpjH4tJDNb%2Fkrmpn%2FAkE6iYNA8qrqr7OgFDDgBIbE4SU88FTzhP4cRP1HLH5VMEaPGUgP0L1n61Fbd0NKN9N3aT0QLrPOKDD%2B1L%2FJBjqkAdWkb536NmIRulbmZAn8IlzeMOGo6uK7oR0yhjJj43Oih07SibswsHJFyX1Iy5gR0WwO18SwZeOdYE08e%2FyYGeTq6CNUWpFSvI%2BZ%2BVuzeGa3mxOe3dh265iE9CMrnchJYslSDNVVJqW1pMEzzZeme3TpIuKGc%2FBGBi53ugJeVgJs91MJ3a%2BMYkHkl0%2B3tw5unsY5HsyN1yxkek%2F7BGd%2BQ%2F%2Fad%2F%2Bn&X-Amz-Signature=be5e90188f96f317347238efb7f963dd241254389a95c75b0441404be8477708&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

