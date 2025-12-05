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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGVQL7JI%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T163056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC766dqPZ%2B%2FcBW6FB3UViesMJ3YrqoidvntVhs7FSegTQIgGNOL2NgIkUQhzklLw4HDU%2BTadkFyI23SjKv95b6465Qq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDEh66MlMBE7fPQGwbSrcA6oGj1Q4GACbiNoG9Uy8afq4nIjC9SJU%2B8T6x%2BzCXMDGUwqpjTMQF4YQ3E6y9q%2F4LfaFe8e5fQuepgDmPhiwJgyVlhb8BdbA%2FuabE%2BmhmNlM37Zn30TpXI9kuddsJl%2B7x5p%2F33ZvWT0IMN1r4Mm0dcVa%2BWzoBCYKEgo1MH4S4nvpf%2B1KObdNyCrpgbgffL8Z6XmWnJ7mS8xG0V5W5y%2FtrkW6a2YZaQ2wTOduf48sBq7%2FVUX5U2TZDCZCOx1OiwOUbrukosSZ7gHcTyLTW1zTwETrKgnFltYx6jSsW%2FzHzcpja8o1HKnU5wKi%2FjrC77TfEqs5AT6kxDGybZUQhLE2lAbORK14ST7InU3kJechGyLMRcrzoI69H9UZwOw7kXV0zhzF9UC9YAzHmENmuNOxTZHPbgmCfbiP7SxON14K1tOYPk%2F%2FnyyCWSTw3kkTo%2FEqgCkviRw%2Ba85MzpqbA73pjdvuSV%2Bu5k5%2BmtBhEfT9eSDYAfW3ztDMkrHw9miOjiM0PdhWs%2BjVWb6iFMlS7Kvw6KL%2BcYHvk0AM2HWLQNsst%2FhYsaGdnHePIzFSdiKCAnbJiag9%2BWuJJQWHbCliyU6agLiGghPkeDU1d0%2B6bm25YhADT2LqwHFGSNCmLyUmMPrMy8kGOqUBzb7sAFuduzRICoZhik0uZHy71XpolDHqwbVd0qGQp0aSQnP05wYb5t%2Fge%2F6%2B62iNA8Wmj7Fs3BDO2Az088ZMIRQUWVORzYqOoujrjH%2BHoYI8yG%2FTPtLvZ3T3Ry%2BqBALdNisgGswHPGA52B9L4WVfjE8MdZj6%2FJLnEg1CHJDKciNq1oyEmXeKmV8xJoZB5lQgBjPuEpm7QVCpM%2Btj6Un9x5AaK4Xi&X-Amz-Signature=61855b27f671e87b236b5396aa4ef10e63d7069aea8188b430638f08d634c8fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4TO4EEG%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T163056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdIWmj1UC6ARO0CbdlWlCr1HifZccCSWk6D8HU6u7JyAIhAO6xRphQT3AjKxctDa15pFjTLbWFmtqopWBMZPGh3447Kv8DCGEQABoMNjM3NDIzMTgzODA1IgwJRyAfPimCSSsEeLEq3APZIvV0nuyqok8nZrnc63rwrlyWNp%2FMqUeT%2Ff%2FU94HDA1aLmXmyqd66XM1rJI4CIwl9rixD54O5deLjNwAx0JTUy58ayz70lheBAJWfLJH%2BSWt58krYBcXYJMtivSNXzpqVbDqyZIIHD3pY7lH%2B0b9bjrL77kmVdcvhLpM6mOsM9UKQczbe1zi1tJjF18BiMfk3ulnkIsqVYs5gBQvxfjzo%2BteScBn5pmJphtjF6sR9M0QnW0m%2BLu3LtKRXgGoJfpV8vdnlMV9PQsJ6svCeyRZmCcLjk4WfYnvcqKGHYeEWdvmzlWmILxEoLnKCAvp3Ag9HgTjz%2BdGmYlPAfsl%2B1hp%2FW3whnQqFq94%2B0GgSDbFVrkpw4Ip95wWbHLfNJea8gYIoKM4AEDnmNzKjCLRTyKx0BxFOzaYNOr12OgXJ70c5GMoVV9NT%2FC2raH0RjsaLXShusLIhKm89babvOWbeuJjD6%2Fruje5n%2BO%2BrnisdZWwserV4dkRti7LdFn7LfIqk2b6qSv06tHF3kodWGjxVX1TfhhfflQXbop4jkXdIvfZlYO0uiPxe7GgN1wjHCnxw4EhrgzJSVvFAOZAjMM7WmHDv9V9Uv4E1VXKNeuZWaqKJfGK3FyBeTV0f4iRVzTD19MvJBjqkAXofBfoHZM6jiMqvJU%2BG2S90VHZLeA278%2FcNRpf0NhobqpZDZEFbGY5RA6Ls9QQqdG2wlgqShu7HPCXZokUlok5E1IGpFORbj7WaobtQ%2FXdwl0P0ozdYANjiv3i87b5bkgWgYcUJEoIEUMVBOHnWGMNgU9VMp5n5rhgliq%2FnzNDTCP5V9h0axT0tbDb3kigyq9tVStxSvHz5o2j6bxo5zyr%2FuQdq&X-Amz-Signature=9a6e0777b56d4d4e5f19b3573d2ba40d971948057bd2e3486cd44353e2d6500e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

