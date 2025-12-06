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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZQPUZZH%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T085113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDLdrSLBoLH%2FLV%2FvY1v%2BO9eilRRpU%2FKj%2B%2BOgh7iIp1SzAiEA%2BZsF28S%2BTru%2BkQx9kiKjQehCb9pkuKqsgih%2BgJvSSEsq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDLx5HuGE6cwaqM3tRircA3eX0zr6b2T8cl6OiHZkNRZSi6dm%2Fuon40PI3OcrUypEkvXUE%2FY3FOVRazpHpko4btGmtR%2BIhnv0G%2BiohI6kogjjh2kvCBrbzGwaZeXrTXGdW0%2B9ArSZiwfkBbCy2tsR1O%2BKXLyMfSZh7izJdz5tKUcHr3jW7yb2VxsAM98blLYL2YP0EFceSgx4voGU4RK3T7%2B%2B79IYL8bYznRF2l4ds2%2FY5Rg38hG9UB2oV57J9nMtfUkmr3Ow51%2BjbdicYzqQwBY%2FL3FW0etyEmDiYxS6cXg8BVEGUxEBXExrtnUtKLBglsFwtaUJLAGckHK%2F14SWw49Xf5tq7xhApodbebj3PUjyx%2F1FZvyFqt9rN9ZVYnXK2%2FvTvnMQGMmKA%2BRVenNtDikUU54SGloeFhBWXFdPnjPifMM3LDMj0pMNcjm5TZq%2F0Rav3082tdP3kuRe97UU5WC5HHPkgaZl5zjlY3gci3Yeia14VHREeq01HM9YDcnfj3j9e6LHi4WOu%2FxNgxdYuXKRFci3ltb14AqcFdZ8ecz0mnh6%2BrVUz8EVhfjvrEnemUKjvR%2FJBVUdNTKgeGJC9jDt7YlbQIEAGOq%2BxAk4TG6k0AOzYtplCdFyv%2BSN6tYoDSuVnQlA79hE4uLUMM%2B8z8kGOqUBI2giUZFlW7ByytNwFBhb37nvaazsqicRgvgBls6qPv7Dw8ePUS%2BwV6gZkwg%2Bu6GJtsRZB0yWxvcHb2QLIp3NPUAqtuYfeLYSbfcC6eIC4owzDiDTucd4xFRp4ftkL3MQ4uRWobLw9ht03PHoDv0WXKYTMFU62UqPRd5nDJifruWqwFYuddssTrikJfXRbtRdY1evTavoKGYCT65AZkoaYvFqTU1e&X-Amz-Signature=a5c92b9092224913eecfb58dc5fa1ce869d551348fd47e4d3894de33ea82cc1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBJW7XPZ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T085113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCOntLCLwd6SZJOthrhKSGGybY1TWwHtLpzV0FcUZPsQAIgLLNMWsr3fEr69IRPlaWoyTSN9ppPDs4iCsgHq9PX5A4q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDIGjRVHr3yfQGgZveircA7b4drBPSQHqVbhpJL5DiKAK9mXhvfkYgLr%2F%2BJRgcub7Y67zbE4bcp1%2BiaBFkHScuBz4yiJ52HnRFSsrNqeOeDyulRRkQFRi9ofy8NG5f3E4Q%2BpN9yCE1o0BC0XamtGBiAfykJCSQygyuI4iGfAarGUGAGI%2FXJC6XRlMXmZmzPVlA0yQ%2BWQtp8J3RuWO2y3Z7U26oB3Z4RtBkuvuYcQ5SwncVQb8%2FqXtBd7UFgYZg%2BXw8M0iuKjzpVECcTR5F7Ifvhr2%2B%2B0oWdFa55NEKaEIbkIVrgQuLpwwBwuobH%2BZ%2B9LFs58BYpdshREO7UnRSwzjqZ5sAo%2FfHJgEMaD2dUuekNxKjl0uJCrmxh%2FX63PNWItPn7G6S20i8Hp%2Bw%2Fvzo32P0rXFvw5LucdlhEjAxwoBT9WZ7u3XEUGvy%2FKtQ8m6XOoM1FQHS2pRjt%2FGlPq5CboIHpqqexy62Wdv207qj4ZyOEZGYRCnDh2Kbv%2BkJSIzn%2FUmKyhNxLgIYEcrCYQEDnhbrPv55K8Aw343Us6OWfHbrebeNLTG2bwwmaElOZT67y1T8IlGYMvA%2FiZKrvusBKKPfl5VcQ%2BNL2%2F37d1qS%2FgEZo%2BEt8h5F60qDMud5SLocwf4jADlP0dmQ0ApmUf1MKu8z8kGOqUB%2F15M5K0tX2LLqeoa4KQol9bKQJw0TlTyirXCLKyZGWLydTAgQdrqh8A7wsiLbJFKP4wAA7CyPyQdX4SGZIZ44KPTK%2FUvUFOryIiX9HPqTERj5nvRLrv8L1IndCHqoAx6ve0XB%2BUlnLBLyeOgI9GsaT1Qkz%2FlKfULm8A4ktXFvJiSa7graoUMw00zakpESB1B6RU7hrtmKj42eBZ%2Fb%2FVzyatOYFTu&X-Amz-Signature=69b5db535267ee867cef6de558e76db1ead5b8376920ba70ffc898d898b4bf35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

