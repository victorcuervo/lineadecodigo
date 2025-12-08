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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWV4JU5E%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T071640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEutDVs0FDYfEpFebH7GplFRcW8Mgq8r%2FI2lRYsD0Gf%2BAiB7TGONg0XP55xgWViRzzT9eUssj0Fqzo%2BsEq%2FpvV%2BmvSqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMATxx6SBoxDETSWYmKtwDEA3qpKa3AAkaqLFaSSWY8MsH%2Fa50TN02KoGAHcfadbTNx%2BUUtMwVeBo8ix5K9HzsTcgN%2FQLjilRRCTE8m8Int5S2FOJCkjDgj9thr7gcU2DU8gAvBSk5FSuLyL9G32FROvD1jtS4c3leBjmgJnG0X4Yv%2F7YbElvZ8w6gey%2BfblSIQk6v%2B%2FVpDohfrcy%2BU6OEeQ6zGcgEj6tVQZG2RC3dQW8qn2fQXXitTJgFXavZGbaq%2BRzWNoutm1bFZCp7FoI%2BpnbaFDajrTjMuflFscLt5C2g8TTBAL4mHj8yFZqRnwevhXOA0eZ%2FLddKF%2Fl0%2F28IQ9sXfnFpTzAmHtr86335Ct1sJdh6VTvPSuf%2FfR4VIlXo6wJFBo9DyqfmuRMGCSo9ocv7UQu0CLaFx1sUOcYpgdtJYOfJEnYWxccVMhezveukgExd3QljGgj8ue8DyHNwLEWhLR5hyurPs%2B2Z0QxhJVG51M2j9reXIysYilsqrQ%2FEisUXNVFddhwz%2FT2ua5XNOqUwK6XCyS0TSjCuuE%2F7pIJfasLHQpJMlX6TVhikmyFJMYjhZL%2F4jUFeDNhMnLn1XtqzAwpH7GriZVQqYFnGicNJ%2FYumJtRKixY%2FznoLykIXJ0an0v6MPUwLh%2BcwqO3ZyQY6pgFrC%2BJAS5ezmXgNKludtlcZRp4GNT3DSnX%2B%2FX174HSypb7G%2FhY2S4MgEE0Q047AEWb0ouRsDdTOL49RXk5uWRZRl%2F8gIt3t%2BNNvtauRFzPB4%2BeJ0uCAqMnLr8KdgxWucRcMk2st%2FUYrcyqvvKTj2dDyZyAWc6OY5Rhl7CytctmMW1aJtxf4wF%2BmZofAZjUCWQtYsFzOe6G1p1nYfctR5jqoGoCZYP2u&X-Amz-Signature=6c753ce726ae9d91c369cd783032f94ed6bc011f871eb6f918616865201f1d05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXJQGHQT%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T071640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBMdf40vhomLA3VCca8AJg8FI7cUgLzblDLsi4MfK%2FeMAiBWIGCSW1%2B1xesCQHrzIb%2BRn17Kajq3DWg0ifLLqoqlSyqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMF5BTuv7ajs1dDh7KtwDzcuyFjxCOHEjCgB5gIXWWly8yCVPLH8Nx2vJgPOKE%2FW7MRTXo7BvfR40C2OoOp2FVYcufRoj0rGSW%2F2RoP04srBPvxQlYlug2bNE%2F6VmcRcmXcH3N8VbDutTTlWogd02TEvUg5jnxIy2%2Fq5hDqaDhtrpc9TeslUX5WfvHphHPJiHLT0MTz1TUaWnkae%2B%2F9vW28MCr4a4COG9kxdAC8fgXuxVMM%2BuWaHZSuD70E27NU69eG3v3NtsRozwYXVJO5LxRYzlwzq4LWh47uFMQs%2FVUPno%2FUcTa7wSUer3XvchpZKsfQZ3soyEcH5LpP7pNKifqU0rbvvqdOjDDPXE8RqU%2FD0hRbam42WkORPp3I5XtoqwBw07btCcalwv%2BEhsY5GNb%2FSPr3UI0UFeA7jfz8%2BW3IgFPn1LpXOgpntFSRnTHPHGjN8pFxOzakBihnNvTZCn%2FVjzRtFUmEVMPoTq1JWMJOueeMSnIwsN3QcOIFwI1aaUWV37jcmbMbymNzeOtj%2F%2FTXqtYNKqLRM%2F9fkPxTjTzU33%2FargVv0VXeXSiBZLbdivk4dYP3WiHB4qhW05JqY8SyIAE36W%2BIki0GLFogxfSBTlEgvh8lFnqFwUmJ9FtIBihbdTArDvAeQd6VEw1O3ZyQY6pgExwz2gCgqHzxceaQ3GceFOH2wzQq5WfsgDPoM%2FxpEkxFZthTWKO%2F335rcdVLYXMTQj%2BWYcfYrnNffA6S%2BGkfBd5R58fKfaGdXQLYYtgxKLTxpZYJ8IhV8gGjmY%2BczCuRg%2B%2BnECnBsV7fwpzqlILAXxk%2FSLicxBddRIOZA7oSoUNaf5w1b7ruLUg0PAV%2FI%2BmWEVKrf5ykgl7XIyC0l5tB1Dd9msJEiS&X-Amz-Signature=5107e12a348b38585f8ee85e9d22fd3e0efaae91c10b47a83c749cacb1d4313a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

