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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6YASLPP%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T135638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6GdfkF8uybrJ9Q7Ch21oX5Dp9xGuzWlVeWGt6efrsKgIhAIMKpouUUYZ56%2BSiXx2RhkdIj7%2Bxpy5Rl%2FQC3YJ40eUuKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxFCdKlPPHCAZLvihkq3APCj5ly3t8Emp%2BE464WMa8xrdvgqa8HJXoP9jZQYN3ZsowQ94qGOECvZxbtYBiS1UTt9OSsGrClC5eN9kYrSBbaAwN73e%2Fefou4b47tf3VFqf2jyioTRdIYT%2BkhT7jO%2F0xrk%2FjFBeMFKZwRbwiO5jkLFEt8nfjD%2FxykJldlxLwUwaM%2BipxsORB4cnJbTE5Xpxn0ukD99P2thEJcQMSeGAWRV%2FB%2FvJfCXlidT33WnH6%2B6JN8AREYFeyGc2rWDRddeCjPnwnZvsxr2IaNrpHMw3dKI019twh59cYz%2FLLGHz%2BYcoWvV2hf5KRajYCFB5MySdR1O4tdx1O%2Fd0R2MDKq2Z4wEb2MQjvUXJhuFWP4oL05cv9%2BVebxDAbYeksJamZAWbgcGv1m%2BgyAwIeLCF3UsiYz%2Bzd%2Fuyb3l425bIsCnddV9O6XDsq2u8VbM3gv8IQ8SrEWHNBwZdavWkP9%2FbGejeJcTwpRTqro6QgyCx9FRqNPUmX115%2BlIROZ2pSMu%2Bxehg8gbgF%2FyXvJ%2F%2FNfG5%2Bia6HZ2z%2F8hX5RYasQauY9rd3E3A9vGsbhDKq1poOSbLDajHsMGvHDgKbcuF8%2FgviB1DY0ideXjIQkcOwippIAEkPVGCNJ7acvz7C0AyvuVzDImdXJBjqkARxAx4ySiBW92fMdWQyOAE5JBgOFNLO9mKAPF20zDS7E4lj4W2Sb7cjqYrV0fH%2FtiwY0o%2FfoD8e8vaMrgcwt8XuLzKlNCoT%2BVDKM8aJSouK4ilDIv8l9EdrrB75pHwgNR0Yo1DhGZjhurt3giFrqL9bjncdWt9K%2B7e1U3b3r2BcB4zPFPOXxjCsgke%2FFcYX4qn4bkRnvRBI2iIKtmlvpTorST%2FKY&X-Amz-Signature=fbaaad9256aaf010098a0de18dcedb82dfaba72182c4119678221de9e045c249&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWEQYQTY%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T135636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA%2BD%2FB8xCOBDWNPEzfoDO5j22SluRyG%2B5sMvzufrb6THAiEAsSRMaOPOb4GkSFpV4mrUTc2SCj7SBNVh8vwGNv4qo7sqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC9QsC2thRBbcyyB8yrcA45wL5fNs%2BdmmyqAVt%2BzxHwwmTUhfDSi3m5L8PAwS047Gsy42sw%2FJBIM1jiRfrXL3t0b%2FkVBBOG5MJHOLBjl12NpJ%2ByJgEQmpj4vhdWf3Ffc64BQJSGYLl5rZp43%2BqZg3xmlKiovbZPE2QviVmLvA%2BFda4FiRI13ex%2B2PUQz2gMuvdh%2B5ojZYQM91wegS51apynK1crKX2BvPvpLnC3Y%2FXqGd46SpWS2czOTBJsWgaN6H8qvLV7Bl%2B42m%2BV0rmgyIS3xG%2B%2FGht4OQSQUi9Guv00cq1adV4ehKI%2BOhfbYxNe4M%2FQeOQZs%2B5KhqlPPGVjy79iez8auM4nrRahj78dMKAquw9j5%2Bg8SUT%2BUtdQIGTB7i7Uh9ETyXqIErTBotEQ3PX8ppNivMYrdrfajXC5tq2T8oEEUu89MQf0%2FFR5ihT0pjzlBdPcRYtaqAkh5RiuPUG8ItomwpgAjPNkxv0M59E4MNoL8uDAUWePg8IXYQEw4k365D8%2F0UTEn0SV3rgBGf0af7ULi1CbybAXgxt8FJRjOd5YmXsoqUyf92VdZPlDKFuP8J7Oc2hrg3Z%2FVJCeXI05Po3bWComhtuQ9TOfXlEDWqz1WYPuNvhL3WouXtYzDkHq7vu1bs%2FEm0xfpMMqZ1ckGOqUBStAOEo1DD3JZVYMHCOnxb9fCOkcsRf8bhOi%2Fl9gOcdEL3LLYsP7O4xRMk5CNM0lCeO5YgePS62h1UznDM039GNLy8i37xMbThuvA4yMvfoy2djPkkGFeuw2YHiOADypBUT3gCLN%2FMSmIyQGsufz46OBj0MtQEbEG3om9sffzgocWJBMk6vWsYwPfdJ8xLHM23SsXNJ7RdFtgJpx1mE5%2Fcq4mrCFS&X-Amz-Signature=a7d7a49c64c403dfd3d7557929b49c6af3cd6acc0f25bc9e17c1f272059440b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

