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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PNAD6O6%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T024557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSIETtddvIK6sIu0FxEafQpy%2FCrf2ihRUJCGv0RYLdfwIgLHpN03rSIzIxYd4b%2ByC1yukKqOTH9KvhXx2Nri9G%2FTIq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDP%2FUiCDwNAPnwbF9gyrcAwY40S8OzzwMYIELcNc8lYJ9lqE%2BwIYePKnSd3mf4FoOAXwnRtPy8jwJNwPIdTXfKbUAtePFws7NzoKU4car8ymNB0%2BsfhkeHbrEO3V5LAPSfEU2%2FMWz%2FyoeUFZr%2FYo4ylDLc30V3q4mS3wZqxxg6bBtFsJwyuMxhjpDSAa6Dsa%2BmOlAzAzJKVWUAuGLwOoBrwTnwi9q3SpE1%2FCzYzG6hKwv%2FfhXmao5WRvIAtEDvJSh7lYTvR0eb3b7XpM7IWfLHgkfkCqVho9HzUutEP3PycZhZGvWxFT4AuFA33lUvJjWySdai5RjuRomyJwNRJAjci4qKTnnk7hEyJA9B9SNmUW9lIML%2BvQ2Gz4xTSivK%2FRzO8E6ZzKbA5u4wJCfB97jTqOlZiATCMIhU%2BZsnUJwy%2BX6LLxTgYwzzdhAXm%2BsNOycHF94is5P%2FJm7azWfndTsEPGUSqIp5vmfAJAI6d%2BdwspxmalB%2Bk68w5Bp9kdAwVOjX248yTd%2Bk87ow8CCw2X1%2FIXmkfUaUU0WyOZV1yfwcFe8TSmQxTGcFoaWcxT4P%2FtvUomfr4tgqw63qXaNRPttFK%2BhO4gp3KJ1RsPhsF4CBp%2BrQLXL%2FumVa41Vi8ZJv06XGgaAplvuOYeFPZ58MPKMyMkGOqUBO6LHJuV6u9gR9JOjmDNUqPp%2F26mCFtQtNlM%2BnRwbn%2F46xxmpIrdX%2BsnPBpHi5IJovsmBzIMagRw08FIsm4Dkr2phlXa7aMI8xZS42EHAd7Hz7QH2ZxS9FTHyyiYhgY2aOBTuG%2FS3DIMcBeKCo29eXlKq%2BdDZyY6t0DrHCM%2Bkkn26EoFNFxzSaWAGmPQYIgg8nDmOC1ZP68jiWiISB8S8r0WD3c%2Fz&X-Amz-Signature=9cf9d3ce73c5ae060c52fb97cf520539c4239da0df208e7b4ac55fec9393dd14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UROY6H2N%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T024556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICeFX8jlLOPLZO%2BCtqS8NHFvF48ipFrqT8Tdv7ct2%2FHFAiBJVfTZ69mu8s56q2EKzjTcVb3legcuBd%2FdK6nkeHuJxSr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIM2QQoNl%2FgumBL4%2BFyKtwDENaJorhZ%2BfKAsZk%2FtqJDKYTrejZQUO2ZAtT61i9jvfs%2FDiEXlFuEl99M5rQqFfk2P8TrMvDt%2Fo%2Bf7zOOkM8gbUCmtGd7RCSZDvoLFH0zBMT3UcIw0GqaB56EyMPWBB%2Busqg%2FPRkvfPUcjyBvWy10tItP3Mj%2F0MNEa0DDhDyh%2FoTmMe5Zc1yqfsjphyLMapO5zO5HtEnmYt%2BKCBIPIUsWIX3GjzlcqwV7VIr2Dkz2sLmI6ny7a2EJgcWk4WprClROy0BzIn0%2FAR2%2Bfnn6ZuKzXkwMFpFe7iYeiL11NFMMm4WHjWJpZUFfgt2zQuYGsfKZ%2F1p7ha%2FkQeX8z19tFpIgun7aLN0THDkpblL9rolrcGEpv3y7%2FGnsYREpO8fwRgkHqOHXHNumNqlpzOGLSmoXCzCNBWwNLEAkSgFWBp51%2Feruo6gi61RaHUCeYx9zVr93sRPNsYWBcH6bTVP39aih4%2B1q8f7yzdf5V%2BmXO%2BmO0Gcax%2FhPqz6z5cZ04ESppV5lVB0Ygxh9Y%2FXN5e6O86ZiBbrAbmPbOVkVQEtQS4LZbY3AkQPxcxkpFfeUCDYRMnMgQFJI5TzP6U0xn02XYAvYIfPXGglCeCvCSmgAEa%2FTdlbmK%2FQWkrVh%2FXHNzeIwqIzIyQY6pgESuW5srQe%2BwhugIZ9GakBbuC8ogaQTd7dl3Q3nEXNmnV6YeTAtrYYeMY6GBxgo8P2AxDGl1d5QhAxs8dZVoLpAs4BTruxKrXrEVAFKQxT%2BAbyq7019Ikbdqi%2FCz7QCgSKjltUWmbu2WAuQg9pAfX5jN3s4G2WH%2FZMAdWO%2BP4KON2PRxOQjuSvZ6fjsFkzBEe%2FNZWi3ntIt5Wi1uAR9W7n8EMi%2FHloj&X-Amz-Signature=3092d34cf743883a11d525145e5f8a404a7288a7fadc907d4fa6c36b641a3bdb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

