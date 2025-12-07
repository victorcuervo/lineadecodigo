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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DGKBP4F%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T224459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEA7kDHL1VyOSoWjTMFazdv4aS5U%2BeDDWI8KxrSfbTjhAiAJQttxe4dXVQ27wmn9M%2FKZcXYo%2FHaYqEHJF7Ew0WGR1yqIBAiY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJAEj%2FNg%2FrDKVRd%2B6KtwDCDQGV2hbg3T0Lpi3LngzrDuGLip%2Bqx7xmp1hQBJFS%2FCaM9xEGNZB%2BEvCH9tNSj8r0JEKVYlRxNq%2FIWzT5vQtW5bClUgKUjKmAZ%2BrD5nCQ9GhiPpBXmPc1l%2FNTOu5GDQFli34rV0rZTNuif%2BnJAii1aD3Dd6WePEVC6sOVjVqiM8tb645Kry1V0mfeRMGq2LaPO5naP2qpE7SrPJ3W%2F%2FVBbJd3t7%2FmddFP0ehqVlme69ORrA%2FRty1xxEvfU0%2FMBrliL9sxByC16Etk9ZRAnAt61rtXITj2NiWEvdC1jl2fYvq%2BEo8KnZCgUn07LJ8KcSKXzULEDhMYhT%2F%2F822xC72rLhYLawTMkAc534p8162G8aBdDByHJY6hr7QOLGpCicNSmTvc5zQW6NhV5i9COHb7t2XpX136esRl1l8JRmRpCpXurXN4QAwrDqMwB%2FA9sbCANR0KJuay3BdpWy5vcHxNhrM7%2FFI8PhfKS6KTeEycYeMmPXI8bKm%2FUOcFui4zpCbmvvSAvHlTvgWumdXQojTW19XpapyM2yVHObc5qJJABnAXOveVmHHYNLcZO%2BUop8JPE5%2FSuWTcqs0N4w5agUP%2F2NByemUYvu7YmPFpGP29O020WD2mzkhh7awjZMwgYXYyQY6pgHEFCoTW9tQIYwSU9cd%2FRQ%2F63qnCYGDwjyYsk%2BMhPc5%2FPY%2B3N%2Fou8eiROGreiOZxVMUfgUMSZAmLHjQMm95ZrHDPSfjEjPCx%2FBIO1uA%2FYgXXrlcLFBbfB%2B%2FWwkaMEKE7r8%2FrtqNWmysugJReLOKR4%2FdogofLYDw1%2BEwodIGhYMJEgLypjrg7p6ZyJ27Yi8D5jNATOUlKseiNITr3tWKouyoWum4I%2F6U&X-Amz-Signature=a598466afadc9fc63393bf57441ee1b243ecba98ccd110259f8673d65e6bd1ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662I5AXQXI%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T224455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDHLT5XDIcLCVPyjhFKTM3veU%2FLHe9aAzP3WZxdkLhSjQIgCFlGhgFiznD1Cme57zXcM1j6DJNhTZxj4c1409sr%2BpMqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFbC38RKKKJuREd5bCrcAxKglFjN8yXmOJgsAtjJ%2FmARo4o1JfkLOUUpuc2UnYdZT0ZzRQjNILJPvFOpHqobvnwFUStUdTq7nt%2FEaoGMkhjEX7U%2FOhoJ74jCs%2BBtoHY870sYDMupMOmR79BRQdUxOwQlbzM5%2FMr4e3%2Fz18pY9PrA1NJ2j3fWDqpNFCya129ghAF3ub1jYxw5b7ce%2By%2Bju2RE0%2BOuGk3OiDlEeWhCwx3DrxRc3sXp%2FkZuaL1ckpluRjlPfkvIcVEW7BW7OICZ2X2nKLy03Rf30Kc0HVTUzEi2vn3%2FU%2FL5VLKBsDzQiJFZNlO%2FCm6gRIIbaX2pHDnB0QqAMCMNHal6uTpJH9GgiL2jpi6QF65o3HicDaFqDknjiO6HT86Q3S7Of7SoM4wDSnHSc0f4RupuUjUD7Fl9TuMPV6xfp33m%2FR2%2BKv5M600zb3Vyt9X%2FtnjPXVGU%2Bre68YDwfoxd5S6Jc9ZnqM1qtTOFjI4ne8xXnsCD%2BCp1mf9PlWjB%2FNLJa6ZNMGnprCgQkZYFN6CBy17q21C2HsDAv3i%2FCvq%2BqZ%2BTkfBlgjDvqXA6%2FlhAps7bCRRLUMZgWvmc8O1ygiGy5SqxfS8BXbOjFUfShQawVi7FGcrj1LdkZsYrAOE593jrsPL7bpidMNCE2MkGOqUBwAnmjGnS5%2BuPl3Ei%2Ffj%2FWibztIcGsopDU%2F6npIlmkz3cpqnm%2BWfflvvVGsrE7s9GImWtPR%2B7VfAEWtgzQ5WCjLDg%2BoRbIyM46JiKtkSBmKYlwR59SS6eOhH5U2sL6HbCC2QaCuZESpiJ2a%2FmqsiBUnavmBjUc6%2BdXb6ZLJGkhxxAELOHRYbgmbuM%2F4F8tR%2Bf0HazxiA4zR08ZBlNeOLBSQWguj0V&X-Amz-Signature=ac33faf441afef26f75f7d07224452d13b4d28d27bc3efdc1ee8b0516c559b40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

