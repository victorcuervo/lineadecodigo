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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOJEFI57%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T091612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDR4%2BOhwlhIi4%2F31MhTZt1qmwmhoCvdwY399juTz5QWBQIhAIc8jqBY6P403VNRhdVcwy0RVxnTWLI9fbflSllxnvSQKv8DCHEQABoMNjM3NDIzMTgzODA1IgxPg5p%2BcE8XTyRPgRsq3ANimJnB45LiUmABcZic14p6jZX0hAnm935e%2FQ%2BlldGDZrsrgdhursixG6XLjy3FmaZ86wOIKtnQCyJK8iEt3S8LAhzrN9cDpGFJsZccBr8niRxvPIp2VghuAs86V11NB2Kpr0Gr%2B%2FZ1f1r8ftTMkfC%2FQc8gj1WxjUj77OIR8ZvY4hd3Qdi6zYB9HaayWNEczea9HOXNl7QziX%2FgeS49g1YPYq7PlciTHerpanvWA9zMsxsiKXK%2Bcpf9BSaCOXDN1yq8JgtRZAw7VMAY7hTs9uXe43TnnKXZaZpovu0zGIMVVntYGbiEyzLKazsMHIjx4CTzaKov9pJ15ZJ7%2F%2FVB8DIKfYc3U%2B5XdoUfhYMofPnJ5fEIZMIIlm98Gxvyjex3fHMfJE8BIr22Zx7JO7Gp4MJU2JGSZ7y0uSnBqrOQwMN2vjynzxh4MqjAjLhRlF3x%2FNfsVFY%2FI6Z9Q5qULCzyqOr28R6vfaTZVAuG3cW6VvwOPrI85oWHF1bOcX2Ct7srxcwSyEU42RYB0250jiDubxWV3h%2FmvkyTfHXod5BngZwxavUeYThqY%2FhsvjLYjW51e789%2BLNTnR9AtyQbBIGSz%2BI2z8pe93a9MlrwP8BZL8HkygtxIBHX5d7mAfsJHjCVvc%2FJBjqkAenRxYjjtBDh9eKcbT02jfY3VHYiArqKzQdmzvhhN4S0IIUm0i1LMtYrBLR1cPHk5IExtQOQ%2FtyU3Uc1Jdaz%2F5xOydLpw0uP3X6sMKUBDv177K%2Bt%2FUnKvQqloGBjkiM370kFYbuZZQ94jKaJ8ANC8%2BlzPylzDpCm4J3YuM1uOXPEeW3zIXVKQHHXCJ7uqZQfdCKO%2FlvaiFm0RUVdy7kZiRiJnn47&X-Amz-Signature=e352270e2982a9696338d509001289b437e91bcd90abc8caab5b14c620fe88ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WX6Y5GKL%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T091611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG6dDw2q9dH0VFpNJ7mOMH4POia5wJY7dXcM46hGmoX1AiEAoXO1aWaoo0CkSwUZr2SUFCIuSRqQwSOoTEc5Hq%2BWO8sq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDA70sQOa4d9tCiaL%2FyrcA8%2BJROaQMRix3N3JrlrFgXg2B4yzGjktpfgSkZU3Mr2BQPJaEdgw3Od7SStvk0KwIVb%2FukG38wqF61cIdWXALkvRTgX2rzCKyennRTPHfl9MNkkkguc%2Fhkjj4KMuTNRjWx8iY0roYN14aA0EuJPQ1qjR6Ky9QwctejHh3zs2%2F3lMAvWTNPdRz7vVlusLmxZe6xmGDu07DC%2BWMP5mDsptYzB%2FCT1aWh8Su5jevDtZhwYT5VE9qc1EFVXeqh32V9hZ9bI8DHd2ah9qZIaLZBNbosYKZRBbf6o2DO0RSpjrpMg3wGuIIhwXo9Xa4wUMlITujYbmmtRFXylgIWQo2OpSs81oCF5t7sRYwhShJQRi9Ncuxf31%2F14hYxvMyp2QNnZgEzLp1Ti1F%2BfZav4O3XPuYjziNgYFM6EdMPTMDaBIIaigjo5dagGrj3Fx8DgQhFUcK%2FDXaJKDjyytVJkcOu85xvjCFO4yLEq1i1jX9P8JCfSnAVZHWx1ZWUdPNpKmvDu4hBMhw3YMafM2OiAH4C0vcgkvpihPp%2FxknVH1I30f4yd5vZZULQOBRtV5dFbSNoWgImuNhhn6d3DlWNk16jM09fcC%2Bx2xf%2By6maR0o8dWjTUqCfqiYr8Bpz7q8NzXMOi8z8kGOqUBSxbPWh8GrC7lcBT51Ab1ZXE%2B1b2y%2FnP%2F9JECa%2BMmW%2F2ReAvWWhUyMCZfxUKCu77V6BHBP9bpxYQMVzxyfWHjgu62zQqGvJYnbqu%2BsRP2aWHevZ5hv9eNquHgAr1cD%2B%2FFDQA%2B9%2BuBy5UTgA%2BySqjQ0QfE%2F1u2fpPkTeZEVgYxB%2Br1pwiYXwTv0aTuHYn5RVNvFLfFtfXKbMOu726ribS6v53RzWuY&X-Amz-Signature=e54aebc90ac0bdd244635c39c50ca7796a3da17a8e10d45843b8045cb5889e72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

