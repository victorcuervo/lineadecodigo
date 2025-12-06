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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AAC4DBU%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T173218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQClC8Agp7pU2cVWTE3sNwy%2FQOZ0aVxtATC5hkl4LDwumAIhAP8Ell4Pkh5oLi7ZUJssZmbT3drrJSj7%2B%2BVdojYM7rgQKv8DCHoQABoMNjM3NDIzMTgzODA1Igw0ArkNNvWcMoI4mKoq3AOpiemVMKHTDbSM6pi0q7OrHcjrtwqfNUREONFIJvAQo1s5Xv4D%2FUn1vvnTq%2BY%2BFGcwHrmKgLSPExwbGXPj1iKkYbK0gG%2Fm8gdzoREqV01MH1yAeu8V1fxsv2HAQ3aUtVcFPpbNqFtqlYKYlRK2bQDz8YigM0q5VE1tt0hXyXauywCxQQDBL%2FOD2EG3PyHvXnMpCRjGtXEWVk79P816OrD4%2FNsryvJHwNocavMjSNBmArobQpv6MAFRR8IpM0Z0p2BLRhIa2GbO4gmgsoDsbV2mB0ruYXuAU%2BNUmGa27DJRwXGfxqpbrrbBtFb%2B0YY%2F88MkPnYesX7nyGdJzzxxm0DkgSiZ0HYeHf17F%2B%2FvnJq7EADVqb5I8hWJUk9gRXYHOpy1bdlO3IIOg6U5TP4%2BlSFWWcnB60%2BuhZifehcG3oEwQ6PIvaDgiBOUgU4bY72AbnhAFzWkagHWWFTpOpgsbScNIBRzsFiLaDKlDhC74pgkdIfZLVXHhTJnKXdD%2FO6TX1FIC%2BuNv1q%2By6aFKBQf%2F0jnosYnbS3m26xKcUM8iXjfdIfATXcnu5tPpBZD5pibujT5xfTuPm9w39dieeizKC%2F8zI31L0FLlqymlR5Am4oPfiHAIIcHjWQblRLIEzCgy9HJBjqkAegOaJbV1HaZj0%2FU6jptu5R57z1UwxASZzkMZ1Kcb0azg9r%2FTYsa89wDrSJXUyISYx7u0grJ%2F0MaEYOlEe45FhnmKEPfVFPlgczLdkmQdyVESteYd5%2BTIcYtJ6F3U%2BSeUY%2FdEapRZV%2BREKCq1XIuFVA082xlC6%2BCcHa8zaiJnnIbHcYQdP2B4nd7c4WUylmgiG72osZD4wyg7cAuMwu6o9dF5LgY&X-Amz-Signature=ee556480a597b18e2119a7642eab2115067aece80a59183e4952d51ce7b43e08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632A6GUGJ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T173218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKWU3ILRkWGsc2hpTp5mRovyaHKfUbgLcfYzMUkK6J0wIgBTgvtM0xwv%2BysZZsGgI%2FHAKOtSMokGTMdSUHUS4Ht7wq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDCNKzCbyDWxlj%2BmvnCrcAz2lRe1WbwDsnCeJh3ZxEtq66dGsZhAHcVESJs2OY1%2B01y4nJfWezcKvlUMGvEmd7HYRCM3vvW%2BSz6EFEa%2BcO%2FYjMysGyg9jL7dp%2FIgGA391cyGnNUSWh8GkhvleGFneTUSABNuzJWYrK5%2Bf6z2DaKR2WSPAlEa%2B5qRyPxpWj2NY4yl5EV%2FlnxBaUtiBGYpWeGxHi5b5AKEH2crWhnCq9Qarcf3RTDmpyFkH1%2F%2BflbvtBEMtZe0RUeN8QE0KPNvKIjJ7YnUjLVMkt%2F6lkZgqRiXRMxgiZx3K9UFs9Kde%2F0SuRMKK5E40UXNXy5nj2rjEtjLhqNQEkVi1%2FT2wV%2Fac72PoRox1W83sxGQc2iO%2BnBJDiEameP8h776UvFGUDJq7K%2BC0INx6%2BdGmr3X6D0lY24UxEpN%2FFlLAZfnvtGdNe8SukitfFr50d%2BmKSLymOtcV1MfVhWCza2l5d5%2B0juevRJzlrx35ZjdmfA8hsT3Tdz%2BhsETHJ5LmEQB7%2Fqjj2tFZkDIsbVSiq0y1jfPPZKUEQDhWV4bhbwD2%2BC7GxqGdU7uylDzfm3P7aTRUJy1P99iCg8iPsC%2BTkWLYxbMFSi4qFC1Lai3P9dqTjmFRga2BNmHfDWJ9DGBN4%2FccqabyMITH0ckGOqUBfiM2wft5DJZTSkRBo7VLGY4Jt3ya63SDcJn%2Fe938DSFd1e0RFzY5aVYyl8WGYjwZBNP4UvEP%2FRy6re2qkA55zh5i%2F0QlaJjpi9UJe82b4zyL1lgm1V%2FMud2pVNUWQllYgfXdZZBx%2FrEA8cBprZrBr%2BfLPt5YsUl2G7M%2Bslooyj5BBWqmt4%2Bhm8mkUbT008DtPoiQVQsMTKpw9raOwHDJu7N3Vu9p&X-Amz-Signature=0a7b00a2cadd56634190cd80bebfc201586a1bd96e8c682f36636d52d8ee9fed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

