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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q55MW4VR%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T042149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDA54c%2FgHFz38BhGxU3w8lXRrq21m2xm%2FtgiYuniwNUTgIhAKxmvbNgyXWq%2B9hOro65kKRWsWz6lkxdlK7q4s4WnvmgKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyAMrcmuVPx6g1qxY4q3AO%2FZ6Rn5ibTfTBrFOX2xMLZ8hvEFtP7EKis1fXV05tcere7uhW03jCP1oWLNrY7DC%2FObg2Tgz3TfS%2BdD3A2JIU%2B1M8bVU7HMy9eulR1%2FP05uIKNC%2BbnQZOHEbXtJZPjRvLKGyIvA%2Bxbi2N2gtYw1PzhYBat3Pwd5gIa7PzKOpvV1PjGAO771HCw2yj%2FyYNGO3IvNB1YqhYK22KyQ2N6U4UxBYBEMhMiYi0k3Wm4NKie3k0obGIYYyYAmFeQ1GPbVU1UbVGWIxIdNAoQxK6O%2FqNTSdnEcyDg%2FeXMHxM67JaQhfRquIq%2BM0cpwgVN6xl2lTkLWAftEzN%2BL9veBt8PhiZ5sxrEHNKHrSz6RPqyKtb3tfi5%2FzfGL%2BeUF%2FJ%2FjSWm7MDpBjkDYfeR8pFIdq1my2tThrrPE4Qoez%2F58F1Bn2hOsnstB3vtz2ZCAtnxOWWKmGy8LCOxu78%2FefVASBMTovfgUpPnzNj8BCO4UVANKzoRTLpSV5df5%2BCKjudi4%2BgDB7c6LC6ah8GByXa6F1555IvkSMZ5qsFhuF3yw5ZyogqX5UGm6NvheDfbrXqVoRsAa%2FNwpDQUNHmInpHyE628hCnDJUXRrQj50twRUrjEAf4nAjKW1aWKE1zPqy0gRzCW%2FdLJBjqkAXB%2F0HmZAWha6xtjCTS5XStfhmcQOy6IoDd%2FoDBxC4HTnEc8rLblNt6GfP59Y%2FAPpXwLBlKdyqLXSimIcGbMLtbH%2F1v95ZdAvOG9qYsnEmjcgfQtqvy4cG%2BGuu69RdQc7jwvKTaB8RO0Ata0q9zeyqKS9Zw2MbzvKYD2PHeINmM2GZhbCzBUXr5laMA%2BfIXYGc9j4tQNkENlKPI%2FoVMHuZ8QEBBl&X-Amz-Signature=07252ea8ba9631bf839dd921bd93f4d5a04097795fc6b716ffa02d04c2a91783&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CIXGHUS%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T042149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA0EO%2F0EhPJYeSlnDVPPlCVOZjjrIKcaHVCtMO9FspLcAiBTi7q5cjV9dRz3t%2FaLRK5byyqn7XcU9UOPNXfOo1zs3CqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMx%2Fogr9o6fua692LJKtwDiRxfRYqWt53oqSyZlBWR8SUeC%2B8U29%2FivnbeEQO5DheAJlrxgQJ7T4GQbrUhxpvHw1uiQKPYjzn8%2B61Gkkm3uZBwMES4qBMSIQG%2Bdv79Iuhf08Oj%2B6BO9em1qilDlsmHlZlxECPTuYJmzMpd4unuOt9GsYD8GjlrHtE77fg8WVkgAnNP5gP8l6T1pRB7jl6vm8m2RNXX0wnl%2FYKFmWbeWo3cDdUNCsYa4Bu4fnnVT8mWNYzULj2ZK15l3%2BQKvlhM7dLNXsKLs6As0qZlbCzp8%2Bbv4gMasNbl7Ce4POJMv3WRh4BxXW56pDUaxGWH5PG2SuELkzyBggD5YYkkKPqoDqxpF6%2B1rh0XChcSNwsxMZPJ5OPDUxRZo%2FrwvVpIsfj6wlan922de%2FwlzRwhGToI3oaK%2BQjc9NJ3brRTKUH68TbJZeBxNmlKIQ7THsyiFEXwy0vfwT2BaDBVvtQ6lFHls0Oyr6kOyo1gzG9ir73MuqvLLxsQAIJWz4O4CkR3pkvlE2N990eLCv%2FulDnl7321eNiVgiCmZghsatMiiv82ImaZFzoy1GecMDUOv%2FJ1ve60yNmFVTayWhuGim2QsC1b8XllrzVhk1BGTmYRg5rBA%2F1KfybmVXVhjEUVsoww4P3SyQY6pgECxjKxcVFUFbvHLYEuNyG7fOq7qZ8uTHLuX055hzCNqIh9rjW0Djy1DOcbRFuZF%2FXRCjfBGgCx9PfDCZuVcV8mHyV%2BA33OAMoV3z%2BIH0qehy2AR%2FVGXpNkRwm7qYhT5BD%2BUzWaGOSEXc9OqMKaJ4FNLcMHg68NooHoGA%2FLVaefXSLGoRO6gfJkzLrclLe3DwHcY6JOAupWwZIKDdLerEruyg72Z6hO&X-Amz-Signature=7b85a5fd23ddc2f861472fdfe74b2cf67e828d007f1b97b80cf4f498812d7ef5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

