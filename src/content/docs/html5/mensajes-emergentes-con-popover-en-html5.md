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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WF3Q2G3W%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T230143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE6oolobkOqSw1jOKenKX%2FACyPo51ZOtQ9mlFGA03UPXAiBtjemW09wjeV3si3%2FH51xSd9RbHNp6RvaaiyH%2Ff3%2FFCSqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJdo2wFWtYiZtS1MJKtwDwKh9YlxYEytiXvoWNXcAbro8s2HpsyHJNlyhtdM%2FQpcpk86k3WhnV7%2BdkVIqSzW37We1WeGMBxAqzl%2Bp0EuO4m9sp%2F6JZO%2B0c%2FLDRrXxE5c7JVie8KLOPHp1dxaZiJCjzz4ZSi4jwGIs32xe4vYPgQUvWKMnWHFBHnhhlAzvESmj20RC5qLGSvew92lq21y5jK33pkw1V6%2Fs7QAQDJyIVijXm67cl%2BR2YSwZhKBn%2F25dyF40ZtL6Iua23fLkjb3w27Cw1iegO1Rjrt9GOZmor0y%2FaXjbqVIFISoM3DpK14wGd6faLvXB8uGmzC3tT4%2FsIaEQpZsL%2BFjLioOH506w9DlN0J84ek6i2GDEnxMbL640ExMqsVTcJ4f%2Bfbo01XBJ3QagELKm9GUIY3n1CI%2BOL5SzF0b75j%2BOMfNnNFCMPPLQBMtfVJxoEgKB3hrh0JUXuai0q7oskoFm7VJtMlucCVsTlApr1KOvJBtEdhbkRUqde9yPrBo2KKKPwLRdaV%2FNL8SeEqeQ9UsL2FP74IUC1%2B7d1%2Bt%2B%2BAWesf%2FdAD3uOGdyjq0SU7lGsPEsrqjwsdNEu3A713m3oKlAVqGIT671TAjQyEIkvTi1RaXRp%2BjDrytoEi0W0%2FTaYYLsCdIww6HdyQY6pgGGfU3Nse9j1CM2aqQnGRh7EIe6lKp%2FGsH31WM%2F%2Bvd7fOyU9AIAsK68eBDWvXCiWKQ04HSRJBYmZYuHixO1UBGop%2Bi6rZrrJSyhnCDe4x%2B7UEf3EO6VzxrlDtLxQdhYIAkntylcDEoq4toVcVbMhgmK5mJRdJ5JH2aetr37ZB6j9VRGCZVRpLa%2Fq8uNaac3uOWLzhk8DX5vhK7jzm6bBHbKh%2FjXDPsF&X-Amz-Signature=6b7d4f322251f86abf2cc51ea277316f05d7940050c971b10234b9ecaeaa4003&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WS6VZR5H%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T230142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH6kFsT0jlpvNIeoLozjkZBMGyn7nM7P8aJSMtH3L2ABAiAtpMKN5bXKHwzq3eVfYWg%2FRYXDxdeqzQABDsnfdLP1CCqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQw2v1%2FCWCz%2BmY4J%2FKtwDAjBWvKPi8njhytRydY8v595MjMkknvDznIWDfVUBBlXfOKiDgwtcyi6wytiR0RbBJGRWr18yAJbBoPFlS0znwGvKhYOKRUMy9ggMlz5ZCRDk55eYjVA53Y6f0zCSzjaLCbHUhHgBcIJ50zhUW9iJsp3OniMMxjNG7u7GYSm0TrIGUPJx795Xl8a5hCewHeZOOAjcanfimVVcYXJCQB1zPHPq6j4CrZHCEcT3oq4TwVQHbxMyDFoE9TuyLnzjLaU6gG%2BGMQhJf1MncxGaiBo5xohPXU6SMP9re%2Fi4O265ikRS%2FaVGKsh6JnqQiI2cASEe7e9d7aoOYxEUBFGhZ4nzyh2%2FFw5CPnBML4JFqCOJTpMpd%2F5OPtmPxCQjkvc2lsu3wSd74dWBOx5trjA0Mv9KO8y0E0PIoXlEj7rsE%2F6%2BXNpmsU8EP7wCVYRch0ZY9NEbKOhQy%2BZOyuKO9HQ4XK1ChyQ2ZFtNnO1yOAvm3z%2BnetDzhhIGSw02zLnbCW%2BwEfyqIqULikseZxYtZIutpg%2FSWrBNu1oHy6iTiptSzuE6Cv0WlKHlXD0oIYlNJorjhxEk1%2FcsgQm4c7T9zoo%2FaA0q3xmtTgA3Df9LGWT3fKGK9S7W52DS9VGqLtvqex8whKLdyQY6pgEoFI13IUK6%2F3mBOVYbwBFhvD6q6qzwZxAt26Fhq8Pq5OPPoS%2FBDgNzV0W%2FjSegLungwrN3ks8EUo7Yv%2BMXeGFI50YyyYuSaH3DkFvZby0cCuSyor5mKjzfbTwqGzHt%2B0JebVvcxTPRl1jBifgqw1tR%2FMN7qAxi9YEcxvMPFOhdifFYNHBVWnP0MAbSyhnden2ZivEE3MMTkD8ecbYmr52c89qUKrYl&X-Amz-Signature=b12c5d071e479585be9e46bcd89f91939e828889b3e0a0e0cb438f3889d1d7a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

