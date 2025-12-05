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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YV2HUL4F%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T041941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID%2F5Eym6fQFpvatr4hL2IBb9ZhXaUQLkHk%2BKK5Arb328AiEAqFIR8zQRWSbRcSFQ1ll3ewRijrVYAXWDVaLjouKrW4Eq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDJ%2FL83sEYOrqwy3AsCrcA%2BqoFe3%2BM2G5eFGxE1dR36tXmg4k%2BbpvcQpSSVeSFz%2FlK%2BY2hOr9J7SGjVD5NbIfYajkiK%2F0MDHcyPeJX6lUcAs5E7flrSs8vMYw%2BcUsVSYcBOIe%2BS%2BiHQlANG6wU0rHjd6QZ5z4fpdvUrLrAuHqLM5wXCPDE0MBohFeIbBGp2%2FkaNnKP002vvyrajRNj%2B%2BTiOibKwygFR3YARge0ikwF1OiaAYtvmWdtAKuve0kFu6g1%2FvHEiIKSBQ5fIL04mnMjb4PN9zAvtldL4ZvfHHnKTouEPapoAgRe5YTbojJ01g6OSsm7QNpw%2FlGkvtW2qlCJdmznm1qeDZoKAWs8QiySWQ%2FFfwYxqwyziGwWFQk7Axj9pjbd97SCzCYMXlHYqJEJKgX8PPJ2au7%2FGAJUw26Q5Acs1ezTcS6z7TZopTrPjubpBSFJri0Je8fLRuN6TcB%2BasQeLxDI8Zdb%2B0S0QHr3utgxVYSNaEBb7MJtkduWSQ4VTQfU1DB0%2FIhfsMVrb8NPHF7o3w1kH%2BlqXAmP42f3H86MrCe%2FVxjUpgAQmdtWOJCSn%2BOC0i9z7q%2B%2FAtHFMv49UE%2F09nFsUKBBwo9XFPLa2%2FVshhKKiWRuxzytOol3E7a3xraG%2BPakEs9AiX9MJGwyckGOqUB059MNK7%2BZifFI5DAV32WRYIDTlOuhVQPtutZoUmdiR%2Fh6%2FYAROmB5Es4%2FfCqQA8dhZhw8X%2FZn301GWFh941ZMYg%2FxX3tgZm8DnvxZslV5xRI5JuBFi6vX5bltfz1A4seJ7oozLuiEBMMcOcvufSG%2FY3yzee9ynAkGW%2FoLirnvrpJWAIHlAyK3%2FeUFnVD3qBukXfiHCjfA1hrGOOSMvOOQQx%2Fr0T0&X-Amz-Signature=54f6df97e85da494927636d6844ef8d3d149685882c1ea8f346fc5417ea25fab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YT2577TO%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T041940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID2QNFTLux4L%2BNnwr5c4L3J34%2FI%2B3ldnDsGeYTn8BKU3AiBsoZf0v0RBOaMPDEQm%2F197VuJGbP%2F8sW6c160MFLle%2Bir%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMt8n1dc%2F%2FbyEpIPPRKtwDXDc7I6A8odhlKA9M1sNi7azjuvDgh46QWVohDi3JSpHJ6NjoGNm6ac63m9oL2qM1h4tVvuBebIeytkcwoncGCta%2BhOmUYuL%2F496coC9GvG9ppemk60Q61Agl%2BgR76ObklE5RqSjeXy41OJihI2vMoEFRvAPKN6lpM6%2B1bRDPadK7dHAf1YEALIE3NhNgXV%2BnfzigxQ0dhnlIOoCuNLYcILoJzJ1Edreom8zwGB8aUjsp%2BHiWYcoUoaKfDy2E2COlvPEL%2FVh3eIhrd5lPfcS5lM6qkKBmXkT2ephe%2B0dJzMMuq9ffsNKO3CvlcJYGuytMCsu5FYk0OUE1jgJ0NG3WQFd4Ho93TdUQrR4kPyR6Pybz5s85GydbbvXExwZ0XKRHfu43KxoynqAHPXz4BR6sdMi6%2Bom%2FA2ejHOw5x5dSuRruH8YWOZfgyUd3WoFGXOl%2B8QaczrLA2halPr2VTLo0ZvPwccHiXycIf1arjLXrFJhIPh8cJVHApgDC4iJQ1t88oserUMpSlO9qWbndn6ZDUiHVdHJSt9oEPERYTtwWa3YhAXZr2obCoBKBNXmgUL6yiVHLWfCKVhGb9y0jF7E6xCYLibMlY5HnNOrd7zucA5WE7OHExsuILcVKfr0wlKjJyQY6pgG1HFPWnu1FAUWNC50w9A7DGyONSALhRBLR3weo3gtb%2FNc3D1fk8iJQeg7%2Bqnft%2FKpKcR8YcB%2FuFrOWFAktbJCtbfjALbpqA9XehBiMdujRKz7rGo74M9Ok11AIejI34z%2FCBBb4FXx7wtbWPeaL%2FH3WzuvO%2FwOlCEdcA7bZPIpc2bZYSloEDpcYnGbfsFCuWHW4%2FQuJL%2FgndreYI82CR3i8P5%2BJoIyx&X-Amz-Signature=748503f61ce8df4cfc629d75b4af19714c2ebc4b56b8ad405a5db00cce6819e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

