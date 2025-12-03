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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FH55TSV%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T154558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIGZ6mz0BeC%2F9QjXb0IeeW1%2FCUA1%2BrBkIv7S9vdGXnI2FAiEA9WSdvgGZTMz0Du06UU5cp8sEzN2aar4UuyEdqP%2Bch5sq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDEGroRzyaHc8SmsIHyrcA7gX0nSqr%2BfrGPXFYlIgC0Gnh4RKoXGj5YkcDBTRPZ81tNR2pthUr4p9f1tcKsyNRyC%2Fqtjd8o5F44gBIGa%2BglmEvTh10bZtkOqmhQdta6VU32LVt0EVtVuvn5irZEiN9po6B2O7p9VnCNat8JgK1BJcgbejgRqGoOmwCDmktZK5cppxobbXmU9YQrFiMCm4cnTTMDuiDXAw5FdweN9RqHSpZoc1XI49DZgMBpAoV7kTB7B96lLi%2FAzFMqLywVLmIdasSkUy88g73wrzNFH1Fr3MJMIYWx%2B1mf9Ki2ll5havj9%2FF3vYarMAmo5vTXCDbh6a2XL6oxHpY589nWBTeQMqHdrGpb4GUARxFvu5Qe6WOBJdNoO8OmjqGSH%2B5LZsLJcdB7ObcjOstSbEuIxoVB52MlTNbrsXY6faigNfHTHnHSkPTvmTweaXUtRis6b%2F5GE7ZeR9a2XSyZciEAZ%2Bjl67Sn%2Ba1jfQXt0F0%2ByDtI0AYt8a4u26eDge4tBLO50LbMBAD%2BPrG2DAdA43xxTy%2FCtFkSZe8Qk20Xd2y7ovi0fJf%2FT%2B2Li0m2UaJUSsFMIC224srYgR4jmLRpMjPXtIaCOVtGOBZYO%2B8K%2Fesiz2eaZ%2B2d2P96miKkgq8jJHcMMOlwckGOqUBnGAthE4i0Xj7ZJJqacM2fNpJPKPJIKGDhtqhHsVKJ89%2F%2BcqtI4YF6LD4dM5Yf3lzpYNafEx%2Be8nt5cI1yxfXYB9eZ2bYRLx%2Bc1%2BVTcZhcdw6Zo9zRUq7mJwFmovPvunxoObdsxaJX7%2B%2F8jjgFFR8xiAdUmZJgTkCV0hv4Pb791Pn4UssQH8hQs6LO4p1TQixOKg12Fg1KXf901cIRIYLvk8NC94V&X-Amz-Signature=b23bb626202aeedba1d0691e499c482fe701a6bba5cfed16a0f17656402261a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664I6AQGNU%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T154558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCIA6mGDmKQuXfO5SdBGIc0GNrsQX1mOUwzKXTJcCViG4zAiB624US6i7o4UPGGWqAnxpuwVgF1JlqCf1ONa5tripFqir%2FAwgwEAAaDDYzNzQyMzE4MzgwNSIMfek%2F1sCMjRuElhyBKtwD%2Bj10bPEvkH9vMjlC4QsVUEKp5Q3XYQswdZ7spEBUjwxoL4jiaDYUsvKmDv1lgHA0Xviq9J9VqgQtC3BOEXLsUIoHRA%2B0kDBdN5ffIhZyy1W%2F%2Bxh6ny%2FXKLUx%2B1YweoCl7k13QzbGkNjXkSvr%2Bwx%2BDC4LOKgkYIEN4jmliBZ78ie2RoEo%2BVkVLHHRSINqeb8bYxbt2bS%2BwLui%2ByaswIdIesV1WTF0uGk0lT7gdkIdkMJ%2FAA8rSUdCKk%2FPybqTmlCNdR3Hd22qPnyEW2h81mgDTcuTLvJFL2wjj9mKoaZjv0XEjueXIIxh%2Bd8OGEgyEPUS1YOhes34GL9SMHIIfEZvN0tjfUPwvfuWG4DOlU4f%2Fs0KpFWd8qLNwuODF52a81QLJ%2F2wWy6U%2BoX6xrenOPgVI%2BCajETrjP%2Fno8uHYRMhVL5yopVQD0AKfLNYaoxifO7Y62g8M1h4ypDbhehJJU4VeHqpQQvkLL7eVrEUPMmcGm%2Bi6vq2lDdBtzgcAYMy9b%2Fgzh4zFFuIGTkevslojXnrK8lAdXrV5aNsmPWT%2BH3aE%2FMh3s6DcSM03fKE%2BOFQEc5PEKuw3IVfygfYjq2SsD4QCwCARw39XjqhQRuAQgK3ohGzsz%2FpcMkRs%2FLScggwpKbByQY6pgHne4KGqiV8m4hgKvc10iAf%2FrEKwkzp4heoT1eXBYo1HBx7wHjHny3Vk1bIv6ulsbXf26lp8hCO%2FqPD%2FV6uNqbEt3PEW59CZTkpIXp01fxF95nu0NyPE4PSPxdKGjdb1OfTsKheceBHpBHCA3lxzrzKu3eYJ2dhmBlWqnb9dJ6y3rX3c9NJBQsdDW0qlCUc%2BzkAl4Ds3w0Xfz8POncoV%2BJpp0f9xn2x&X-Amz-Signature=b670c8d63f78212c24c2ae09858eb202d3a1f7a2b41a776013d3166904cf22d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

