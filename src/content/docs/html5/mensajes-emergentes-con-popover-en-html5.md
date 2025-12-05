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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WWPKRC3%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T141641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBRzh8ad1EwBhXb8PBhPEi8Vk7FJwuuXXLZGmmfmywnAIgfqwOKUXMwyE8%2FwRRpzenWi8EU15amtJHA7kd6IW0Bcwq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDLF2pm2CRzyqUgBM6ircAxM38WrxUqNWK7SgJixgHB3OvgEmZHvRvpjD%2FVY0dTRYcBleRcrm00jxuP9OmkSrH0xhcGxOWyHnaqvLONefExp%2Brc0DBjlMwBy%2Ff5gkuNLjoAhc8vG7NZhkdrPyM3sQUp5SPdOiEF5F%2FiMn2Wyvy9e3fP%2BgzH%2FSb%2B5%2BporfNZst%2FCosNDfj9W7zKKWDTH6r3%2BcMLLQzZ3UgcztzXYGbC2cEY8riGaTDAkOGasde5SwaQOioGh7xGmeIpgquZpyxGDv5OuRl7Ub18tur7gNB1%2BbT2ksaXuvP7H0GzmMe1iXjYjz6TYoIzut1TB6C8UcKaA4rGPV556De9W9Yd%2BTdHH55rdZtsg2beIZW5tkI5og8F0ty6gqVvWOB%2Fu5jHhmL5I1XKgnP9TxlXj6zEHIWXVGVZ8GZF6IUcwPdyBjY8iMRH%2FqAyG5ZF6g24bYYeVYDVbjDzf7OrUN5VgX%2FdqE8HBoPOu3O8KekwftWUQzEVUDq%2BlEuPvFeYJ7eYSZTVLi2rzSBKRIqyYJ2bpvC4h4DY7drjiaQOjCks%2BxR8qbltGkvpVwkPdkcPHXIcGRyXxsnmBsiHCFlwRlumvkVn4tq%2BNG5%2Bsl79VPje5NnbibBqIWsbwJtr217UXi5RsPbMNvGyskGOqUBT0452gycpBoEtq3A3c3I9k458JHzM%2Bu5%2BLAmjbEe7ysqH4%2F7DJ8zLzOK523sXvELsLoxmaxLDeucWP0DFE6cnjZmj5ykNyBpinoMtbosEc0B6NS9cjSMWUj0%2B%2Bw9WrgT7CPSRN%2BW2yD5a6yP3gv%2BSUkXtEKr2fPh%2FZ8VGswltd6AdDxWoShc2knb4IAU09L8FnJEIAZU8R8UbS9Ic%2BdxssQsVRlu&X-Amz-Signature=c075b175cddfa72b04dd56986b11f6445477a23bffcc33feb79dc4e1ceea1b2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TW35ZGQ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T141640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG8xpThJHLwD5Za9fAduog4mz246q9uWk%2BeacBPFdcGQAiEAoGpiemeHdCNgh6X9zkfns0S8UGc9nITkRxgzIGwgV5kq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDJ8dtrHobirsPiLMGyrcA8vJPYJNZ9dGEgJzSekNj7r5WT4YitNHG7Sg9J8DbsayEExYvjSsYxiQ6%2FvLp7Fka%2BGi6lpRnB7%2BT6a56tcvcvbbahLlGa5H78z4yRQ%2Fbv0n%2BXqo9ko7Eo7FZIZFr2WHMdjv91aWH11NYaNngco18ujH83SXHerFFsHv91yVTQn4EaB8mmAMMUiQMO6R4Ocw549al0mkLteJi8u7FXE1N1rgv%2BxjtAbHj7BLsAU65mgPY9aeKTgKkEacSHX6g9cSt%2FhVVIemcfbvALDs2PivvBTyh%2FcPCvpGqVsJ%2B0TJtGzoxOUgYKJuRVF%2BR1EDMaBkmuI9x4Rc9sYZR3ixtArbH5F8bmwDIML%2FWzRLElsafUuDvKgB3lBZvcJ4LAHFmSwHPIf6CeCJuLBC6fOitySEQPp8dzi4Y1lzYf%2BLk1XWz9Iy6In6qwJdz%2F9rgjdbd9bHCtLxh4%2F8%2BpnwMBDmYPc8gvpWx6KvX6u6v0VAEZQim5XnU093ZqJN56fCPVVzvOxc%2FgMXpG6MvaB%2BcWhEEC2TLggX%2FRhtZ0gCz61F16mL2xWNK%2FBiRvlszj5KrGpHWcGNtr8g%2FX7z2fuOojNACQw0vYb4X4TmYZkZE32DmxbnwAUzD6ie7yTqgs%2BvS9cQMODWyskGOqUBVmsjW%2FSOfTNjo9nspZiYKBkSd0AQ%2Fr4c3jb8Ja3vnebgRwSvd02CjHFLRrBJyWuyIiCTwc%2BrDrDzWH0oosbaeQ4ZUjAAT4YKKToGdB98nKvbQc%2F5TUz0lYdLaqZqEfbxyG3560RuKyhWTjLJME%2B2%2FBIn%2BBhazDlO6Z4vgkwq%2FsLvhALxEXR6d%2BnC6nFdG35NEsaeOYUkvk6Bnfmy9Z6ms%2BkkJ5S3&X-Amz-Signature=e665ba45dcba57eb65cc14bf20228ce92ce61a5f217aa5c2579e1b275f33e26c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

