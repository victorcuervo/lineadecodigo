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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6RFZCG7%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T052042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIH4yn5U5GWWNWscu7neR%2F7AzFrbLR4%2FOnSrdUCf3zEQIgO6ZAy%2FN4tyqpPYDrCC97wGQksHGSxNX1FKi%2Fcy%2BqNuIqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLTgG3%2BnMItu9zxgcyrcA0qGLn0kc4RcFcM87tRGcdq7iMYDGHQZ51ZYzoMtgkN%2F%2FzqdX95132CYR6VBxITMYSwd7gKsWN%2FRq2c2QqjHEYDsxVsunm3XMl9%2Fifikm%2FAhtWTKB1fMcWp21CkPEMwnDXcJcL58DP25MsWemqWMqy7XUbZNcc5ldAiReBobF9b%2FeQ6RwQSjKfM9tYk4INCiB%2FjoTmXG64JD%2BRi4VT%2BKSfhV%2BXgTFEz6qDKLe0wmm%2BPAJvg9Eo9d61gQbIAdvyWl6hoPFBLnVdGsy%2BEegR3sBbc65gFHUyKBqrp3WKfL83NlCdEPD6slwPSi9F28wtSwpiO65Uj%2B2SZ54DDIbSnmwbqWM4uaCe4gNGA2rJ9GHcbXOnjAZbOJEw6Lx9SSdjxVXY4hwOvXVqH2%2BhV8BWaaw86WNzCU18t6RIM%2BSO63h%2Bv%2BrSifyAycutcXTFU1oJfteTWHe9h9hEuYiPfn5WEmijyoM9X%2BBVHt4ji5m28%2BHc514RlxiVRYBLulSHh64MLo30TYKl7X2PvO4tGNEtxIsfgE%2FjqsuMZ1q%2FkAjkPykKo9%2FdtKiQz7HmZ1ROtwJl%2BIc5WlwWeJMBf6lA1Ly9jtwBNP9yxWdckR9mSfl1AhwJHKEW2IZLofpoCUriGGMLnK3skGOqUBO%2F%2FMPD0t%2F7tW0fgIlL%2Fow2SRmdflPQA0786SqnnCNHkpvMuoHRKdNAWxvI2MVPsTohgeG3We%2B%2BODb4Fk9IYQOk5Zkep1EV0f7hnCE2ZpFIw7kMgV0fQlSn06MzDc1xeJrbY8Agb0A4JFF%2F3G7BG5aQFqNgX4sjrHnY81ZeiQFdsl%2FjPjlEu2FjvcenlSco3vND16aHqIW6r0AvwXUhMiMkh%2F4v8K&X-Amz-Signature=4ecd2fc6206f99a200107702ee96fd5b8d25ce80fc5b3da030c39527f826d28d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YET33GTW%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T052041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQqUtlPsHYyMdHbFlnlJ%2Fjn59lbbBFsevhWh7wV%2B8hZAIgIdTCPaC7TpBI%2FAtNST3CCUR9uqDk70LJVm1ftmtK414qiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEW39a%2FfU70UsPjTEyrcAwrti132uLk08Kv2l%2F1kfXODiYHPGF%2F2%2B7IxUjGKF%2Faez01lRU8UcZVBY1I1yexlWBmKQJkp1wJPhJwjRsGlzlm1lDkz4sPZKS%2B40Q6%2FWLGGr1PDcQbY6wMzQ0FWJpHAbxofd7H2IFjiqG6PAv5Boaic0DrChXjr%2B%2BCawXWKRUr%2BwQp2Taprgrol8mlqHgXnbKgup8nYK3XwmHcdYH%2BYFl8aVDsfbveBlwjzkZwHpIPGqaPMbwMTjoKvBoEZco6ioMxRWYIXFp6XJ9AfBSy%2BTQmjC2tQus2fVR1xJznm2%2F9nd%2FiVocIE09WF%2ByRcRIm0u3giGM8BVjdTrBCahib5%2BY40qQdl1%2FjPT5kaeuJr0AzmrcmEOudUosuzf%2FWpxmsXuF0O04Xna%2FB1nSUIQyWzoDS100fbk4NSQjZEnU2eafmHtq8G1p9v72EKLu5PSQX%2BFGeyvBLFVn3hsezgDtmUvdD7TLC1pT5CrYEZmh1c5eN5TyHJjfAEovbQSlAjCleOF274EIMKUzlFUvcEEWhejIUDHTqc9dumaJw%2FE88WsJzk7hjoxo50Dk5GrMzjFMiDt1IcLZKP0XCeY9ABKCckU%2BHLgPHbZdDel5%2FMBMHJb2d7B2raLwveCNzmNf0zMLXK3skGOqUBbwcEdK%2BaiA5U6HL6Zd9EtwQ6pK2nKmxzDEAhhHmFCl1Lt1ntkjsYLMn1IRWmMBucI%2By6Wps4G5GGh1Jz0X7OVfLG2cIeeZtf1dU6V%2FBZimZMi1whsqAXBbTI4rY1JQ790G3Hu48Ei21Af4%2B0p0BqZfmZkGakSPKn%2FOF8fzcV5pWLP2s52HIG2XLrbUWBRL3LT7lYpZy3KmOSxZd6fzXKSfFm4tWY&X-Amz-Signature=bd14c73fc2b08faa5ed4069a75cb248f2614b460c2a448f2cf46ea219a6673d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

