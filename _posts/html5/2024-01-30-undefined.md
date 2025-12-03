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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PLJEZSV%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T112822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQD%2FNc2n%2Bv3R%2F9Bdqkd3BnQPqrUYBf7tYyNBPJkVgvqZnwIgZ0dJCQ7wX0XQ3VO3j7UKL3qHGAiqpqOPuS4SNw6oukwq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDMKBCOsRif85TQqGDircAwi6JUqWGP9IQ0YGfZYwYiz3W0X2OVbado5ORmsdc%2Br0fIBbD7iBjZXilPQlXG35G9WBwZyC%2BJNhw28jKFMaBtiBwyW2gCRMkxKsM95y8y8sAIfbma547GC8L7A%2Bo2zi0O1x1qQrAEy5ywud2qGS090jRY4vGZD3Ty9pKofwWuCrPaERiFF1Aa4ov3oe7TZoaRJ1kINVtDvLXNddYL6R4Mt6PR%2FeGdOcEigLqsJk8lZdNfFu%2B1R%2B1X20GI6bJKYQ4AkntV4dNGhHetmwKRH04ol%2F2m7FNA5wZAJa0Rha3VjDrbQHzzs86urgcYxJwmnHXB3JnzPurPuTs3DqNhhjt0GheDiWzGO8h2mCXEpykKxS59I4zZAKUdbFyVwlfAIfTNU0lbuE4%2B9UT6tcIM6GNPi67%2FUJo1axJP1z7hrh0CNoEoxDrznZD9Ba8rPUDLgrIOL2a8qhcT60zlelsvWJ0n8g0bakqST9MsJqfSDjlOCaNctyksyZsNL%2BBXc%2BoRudjBiwiPaVSg5TsCaeTREA2SJUvtISgaNvq%2FD88uUoOzFxzlCT%2FY441WfL2bzjJUwUrbwHp%2F%2FlFaTaaY2CHReqlRDgzMxhJMq5hnD2iWBOZOTHJTd8g93w7ltFSgpuMKeuwMkGOqUBUV%2FQAeQxNTQM3aw4ZQ82dhd5pmAzOgzukxFQt0u5Q%2FBfDDiHsXZBMc5rIBKRhckbMe38QuS0Q%2BjlXBYy6K4MF39X577tTXmg0va1LvTED3B0nS6MIB00t4xzcUtzI4V3Mdjbskuh1E6LE1cScFinFdjB7suNMEdCgVGD%2BuLhrPjV1HZBKG4xdb3WKMziw4ND6kdvAMAUzt50D48evzw5PGyVb68J&X-Amz-Signature=c9fddb9afc0811b74580e30b61d2c88b3989cad609f53230dd000abd565f77f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4QQJVVU%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T112822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQDQXAAAo%2B8QLOJ5lLr8CN8EP0wZK%2FHUTmNZD66hsRd2jQIgGaNK3a%2FBJIHbGl0sO%2F3NHA6B9bpEH2uav%2FA2wOCOkpQq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDPVKORsG00vXVDZQUSrcAxclkBXMT27WCN8X%2B433by6jPmGkRff2vca975k9cI1TX3c%2FwI%2FA4ouCQivSucmJeDXlsTWeYWNQlxbRbvqSV2oYf5Oli%2B18pkR4Jk%2FqsTbymcLG2v%2Fd28uU81hkYN%2BHi9uH9Ya8NB%2BIcd9Tk1Vwh%2F7jRfrDf%2FHrWvbNVHnatv5HJEAsjE1RRQr%2FMuOJkUkYD4T1mZ%2B3AUv86%2BB%2BYN%2FJkHSFRkQukyi2PfmOahiTOQ%2BamkOYJcfeMx9%2F967K893zyZsJ70uZbpjTEXxLvpE%2FC8qdeUsHUgb7kOdv8DWRObzq01B8PdDN9abg2guOLLwrqSfn5V4J%2FbSZeBXtTfTkgEczO5W6DPXWuElwUb5JXTxZapUUuFbrQDaawAMaqiOtg43XKTtVvrbO%2FB1FC5Ai00V0phGhU1kGV94fXJ2AesW2dxp389SK3Ur%2F%2B98SemgfaalqkJwxsMmCBttsqz88W2Zey%2Bw51p7%2BjGZeJ41sS42cGzkDm5GNlVIhkEd9%2FP%2BJ9V2T6k7W8LKMh50VxuQUv3LkR5HyHJFZBbx0%2FxWs4EP2M%2BVSJq98ZTmjEMqzx%2B68G6b62JEKExWTa6pywGaEq9%2FPYb6l46DtiIc%2FFQexzVjOZyrqUVWrR3wMYioLMP%2BtwMkGOqUB2UC2D%2BKY8WNds4%2FzL9GkdQM%2F%2BwROozkMW2q1w92YCoKNyT5YHLVEfMRlMrVPj8NvA1bS49Mhih4z8ObC6rAAmwP5%2FRVAgAIZi1j7n7LLje9ZAwU0rxpWV1ATP3pjANz40H4KS6HTJ%2BQEkgiD%2FV57EWh9dwcMc7DDUb%2BnyUsagfYoIzTaLtVHAtMhIGWnFrwaf3vbNe0eyE0hvc5zSA7mvWRG%2BLL0&X-Amz-Signature=1c2e08f7bbe66ba0bc5158c200cf44c5f7106e9760103363be3d1edfc7a0112e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

