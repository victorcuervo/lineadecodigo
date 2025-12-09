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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4LXF6CI%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T074721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHDbWIFMG3lZ6EALxnEIgPjTn0KO4s2er7YYX4CLkvrAIhAJsBnItYn4Sg%2FA8oXcwnCvAoiwJaLrZpVjgu7KvTy9bNKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzadrU4nL8T5t03p24q3APcIquhP3JgT1dsCPT9tzSlugfdhpOpadY06D2hIj1iTmUqV0K%2BGaCIoNxn%2BONMu6CQ2ZS2Mvc4XCt97BmV5sOGnUFsoMG1IRYik9YP2o%2BXvQUEzioZYFwEJfg%2BOfzDacOJGvPHZzRu0Pxsoh1WkbRao09YoRkoK8TyUHY3PLTeqyLXYFbQYXn7s%2BbI9xnuJLbfxi8IJI%2B5wTjUb2t6dDgalEs1XjBhS%2FPCLv51ua4AXdcFK3q36BcV%2Fp8OkQHa0IrFhg28JthEqbuHgap2M5owjdiCOaYXr2EhEcsWSlLPw1fyw8Cnf7Lf4P6lttPoiWK8ePE5YSOCCb4L%2BVFRGX8mo5fk6MHtQOvZJx%2BgHYhyBRLgkQGIGUJQVUXyfOqueIsfAmmCgDsKCRjv61G40hDDk4d7R3vL47Ut83ORIcrGRWBTQ%2FjBKVRGWXKwlXwHePzCIiy1984euEnckXWPQGYvd1mCet5Y0t9dwkMfcFVHmQtUaLfmNVo1rC9PMSXtyXoVfz%2FmAdmA4EojiBRP5NaUOhNSUo5cU9cdd4OnUiMauuVjpVIX8cFI6RdH2qwVP2Q%2FDMArRqdkpE2DveWZUMtommYu5Xk6luub2QyIir8%2FVHUFdpPQMSyfwmTBRjDJpN%2FJBjqkAdtFeH4RM%2FL5B9x7ZGGNhn3ke8N1ds6EPgTI%2FmkL%2FjjegGH%2BEOkdFJ85Bb8iqEwr%2FOSAx91i5bhtGS2DwG5djJ2%2BIexxR62lSHaaOmQcOywsNqz9ZC1T6Ik8OB%2B647iSkSD23cq01Ma4kwW7LbHNXAMiuJGRemmRO%2FN6NbXYjMoPF%2FmX2TyiNzq%2Bqu4nCtfUKgWMgb2L1mAafn88V0vNoR87W6C2&X-Amz-Signature=37fbedaa6cd8da494e3fbd3af74a6eae84e4acb920cda4ffcaa3cb79ea719a30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646RU7RAT%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T074720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF1up2ARozJZEqASju2%2FVNPQXx1fViNi3p3K4Gwv65eXAiEA0lhFtIyihkCa2BQd8vQ1OYkD3XlQ42ic6BlPDZt82doqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPclY4gztVVEu9%2BCzSrcA7hQfgWfTzoJlYGIXHDKOkOfFCeRdsSLRPyaIcNKXLx%2B1xBgyi2YaVI%2FlqzjDdtbBo%2FGDOm3f45a1edLSAzfhJfruBOhT%2BrZWDyuUazKe9KBIJtYokUITA0POnH5TkfNCeFW%2Bn53a1DQN9Xxd9UHbviVuhPYX4unIidYNLd%2BttFtKMG6tEguTH9Aq0ewVf0VDykJhEWIJsDkMi3Hi8%2FUopvWflApwang1q4yIBreRLb6WnrUNsVBqD6%2BCCV1nUh7cSVw99hNzozr%2BpH2dq5V0m%2BVC9Q76vaEi%2FfRvpJ5bWEbOW78rDu9vn91MmEVdyWI9Akl0InDpmSoNBQtV35%2BzlQbF%2BlGzXVWvrkJuIFL2ZrFxLGL1ClIS4yV0Oxg7tjeDfcUeuwYK5XWq65IOg7uOoJVKljjlu5Ld92JkIv2dOFIViak%2F9r4yoWBzezl4ZpKh4aw5sT%2BbDuHuVmei8p5nYwKsTzTTH3ZilzfLykK0yaXdZ4VmlMiYMZizqiok%2FbKw5qFkhXsqptQ8EwQP8O%2BQCJJ5K8lzabXX7j33ejIAjIqexMgh7M3fZ8yLKjJLUe0CrMxNXBk%2FpZcC1zUQFsupofXzAsP3FXstYweeCn%2FJynrx058Ta93zb3x71zMMO%2Bk38kGOqUBQmndroiHlV0wPZmMcIpWb9LFUPhCIdkBMOPHBoharnbylWzrl3TNWR3KqPYfMYYXlmQDSVh%2F%2BpH41ig6Ujy5XyfN1nk1ryi7XxPnYxQnMPiOzZBxWWNFAYhb1I%2FU2d7Xqeh0pLgU5chVBPZY5TBl6eb%2B72sqyPxS9l%2F5ideOv3CDgO8a0jhyez2Czivbo3kGrQXZJJEjMZgGnnbRj%2B%2BUIoceuIpw&X-Amz-Signature=ba4a36d711be66b553d9d5a82ceab6bddd7adc78269aae6e9f4b828ec288c155&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

