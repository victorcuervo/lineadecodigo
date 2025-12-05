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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RY3RDO6A%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T125019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHBLmGlDDhgAoXrbC%2FS6C%2F6fQa%2BqruOmRwm2VulMlVgnAiAdBqQy0liYBi7dDmNMWBbgr7GLoMBfvHtz6AlyhfUB2ir%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIMYqhkd6npExuZlaTEKtwDHUdkJ5yfcvdM5DdPkLFxS7865q7bskgvZdCZ1bagDf9Bzkv%2F2%2BRYrhzy9IJtfTc%2BqcboFoyophqrs6kAanA7w%2FkHwtYhXIjyZ2i2soO9YwVZlZvh10Wpow4PFDBZbMfmsKgQqXq6SXY%2BNSUvW9h%2BcQsMg9nY5ahPUmZ9n6FjbgvRu2%2FR9nopzvEzQxWBhCvBO1JCnpL4Rpxe12%2FN9bKgmKd3m6cROX0aKfi84M%2Bwe0k8IXZQg99RSiCjl32x6bT5t85uWC67r%2BAA8xalCRnD5Yz0%2B6oJw5qq6FwyDwuFX4%2Ft2NBpucZ8VESlTlhhFw5AGMWZQizBXh3r3mcVky5aRPVUvATA7AoYtFczCzo6vbs1%2FzQUxaMSbkMWu6wZuLSkS4icBsw%2BHFoFV766zAg%2FSNt%2F24plmFY3l1Tg4%2FYAzPNJWGpE07K2rriCJg4ru38QrtsXMOeVS8SFaKRkmc%2F3BohKfKWURHbqpeB8fdFZNQiGWBYINapG48%2F%2Fmy32CtZfFV60czx0Y1rRlYnyCI5S36L4l8EZknwx%2FX8QuGEEgr1s%2Bj2fI5CflNgyWT46O%2BF9gB2thschvXqMt2AvNEUGj4YIFlwXQv%2F%2FGBaKOsXz3p1LlcjcsnxKOi6KNZww7ajKyQY6pgFtFAsCYeXTdr8ud6IIk%2FkE3PI0yMxakrWOr66sN%2BFQT7vhROr54wqg1h4aF0z0ck1iukg%2F0yQ8tBzH2kCeAMA83XtrYuLI891FNy0ypbdR3P3K866YOX1vTQxsMOjvw%2BvwpmC6cdr90IxymZ8XYkf79SzIZphaXD3ahP7QzM4PHnr6EDHl0iIa5QImlFXRzVHlzkzGdSgpJmHenV41BueYfxhCDnp3&X-Amz-Signature=3c5b1fed2264b6181c7d341d56b70ec80a8d8d88ac89332c6b0b7f8a575a35df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZC55CMQ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T125019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDoUKO%2BfQyCk0uhuafG3s5ciKiudMiMbXGr5gcQq1mE5AIhAI7%2F3j3WqdAe%2B0W0PsSHwOmCGIcq9Gj%2BMxShOIiNIY%2FAKv8DCFsQABoMNjM3NDIzMTgzODA1Igz6QkJl%2Fi%2FLjqCgrUwq3ANWxbrlFF7D2PHpG0PyYvjwgUbfAB3rwS6yYzZC441m8tYMoV%2FzpQMlP9pADy9MOiqiCWzYVMnZZz8z0LNNXHMBC1sUuGn1I7rfqgekMD5W2LbkS2NygH1b9xJVrQfFtCOirDSP%2FqmNYXm14%2BjYgBmjFDOSp5OS5w1GmlEfYuszUKfQd6h%2BWFQrlMIEoA7ohjNWv%2F%2FhbERLzD%2BccD5PgKE2J2p4N5H7fCkXxWCy0Jj7z2ZRn4%2F%2BtRIowBk0qhbm0Gql9JOH5dZ%2FerJ8JcuPf3WQdtCq15d3MKBiHPuyzOHn64IzxEdTKGrcmVtzTvfFVLjme92rlhnDM3rTLqi1Mz9zwuwcEmBwhRkDD1iaWOkdhkR1I8DG6kdq6dRAOqgdfoWCmSAUWGia4HObeeIM4qzEiDIxogA%2BhaxwkDapOFcr6T2xLxmMiHhXeHMNzS2HQ4F60qPy0m47VXMwCg%2BHO3iBYFUImy7w%2BijmvkE7MN2oPChmCSGbamAYCMw3D%2B3merMm6KWsOQbXphcm4ch8nvNpvsCPCB6l7dBAeQ%2FGBkAXZd8Rt%2BNqwnm9N9R3ESF0Jb5I5MWJMG5eahD3Ruzpw8NmoXRRtecefLzitA8yCi%2BkviGwb9QYKjNB8B8BfTCmzsrJBjqkAXr1sCMVbcxD%2BKasTTOdQb9iEwWYb2DkJ6QQhVER%2BOflqyWEot8FJqeXHXRL6ZmnLPkvD7jyIahxFox0RpQEShvus9ymmJmaYQgHEZkq2osEnwnG3UA5Eg3HIgOTYRdPmAlPAlIH8fhlr%2BdZ1PQRZ1cwGIZEOI46f1JROkpNF7lfA%2BQq8LXwS%2B8%2Fc463zF6%2BOnGq6NX6I3q0tHNFsET71E0ApmIq&X-Amz-Signature=03dc7695966e0e744179da88c19334d719a22ab7269ac31a74c0d974a139e1bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

