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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPEFMJJG%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T010349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEDvEAuvdD5uP%2FjKaQyL2ZncRM827CINIgqZ%2FI%2FUSty2AiAc25nq1IXR2gwWXUPP8IHyfImz0bC4eeAbFp0cfI73jCqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZ9ooK9s4FBDt1QNbKtwDtExA0ncgxFxDHxO1%2F%2Fud1NwE1mB4kYRIh7y908twqPXW0J3s7vHdBCh282L%2FgLxK7ADfVLVQtyLIoeCYWc19YigKAdPr%2FTQnaLbEJgBtAeJ39sm%2FX7ErXGM0c7MB1MmpYYLo%2FUlW8Qg6u0CaBHAZt5aIM7foEJ0XVwJEKvnw0m4D0AE0%2F92RE23qNfUO5rwVCv%2B8znhRlqoTXeKBxCXuTS%2BEmgdxQ09SZUn5lwt09BPm43zzYajTWm8WB7xqdZOm5mqyZe5UbNWsjSPlxytXMvV5dSzjgkjPJy5mqCs4VWD9HRCXqJB8g5nWopuAkDJ%2Fgbk4rF29VM9UcPxR9hwO7oxzZO%2B%2By9JQmYGGtVldbt%2FvVSbTg0Q2dX5KiuZhyCkfF5xcSrL995gBy0KiCE4D0nAjhQ6cO7mw4MMWzcGmfbNdJRjc6GalEW74XApo7V%2F1%2FUMCJ21CeLLW5nBS8MmaSpVJVsUrvRSLIt%2BHd%2BmVmg64B8xx4nGOz57B1W0FwUilIFp039fkcqeyrJ%2BA21a4l849BTH%2BFH1DcRvZG4QwmRQg5TG4j015J%2BV%2FPw7yA3UBmnulNSvjSVAsCX5uXwnXBF0Y1a5gT4yipX5U8YHY%2B2dUpv1JiwLi%2BEOGjaIw6P3SyQY6pgGwUPfMHt%2Bsx18tE7N5fKAYmfdVMVVNa80ZDb%2BlP7y%2BS3RUCl495oKwmnGA0WpE%2FAUHeNMcN5MxpIh9tk%2BBUM5HFhhFMt3JZ2aB6KyBX2KfpTHCbrw3wgut1mDO5l5Qb4clXjydML76791ha1SJxsDDe8n4%2Fek3H6n4MJILdmF%2FXLdrIHHNYod%2Bic7U6ubA293j2lbsNWfEAssWinR4pFsG%2BnTKagQ%2F&X-Amz-Signature=8149c0e21c1eceaacce3cc032343facc6d013022c8f3c793ad5477125db439f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ESYRA7E%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T010348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA2HKFtV848xkXom0vQ7OJ%2BVH6gZ%2B8xJjKB%2BLzWvvKvQAiEAjofvdonYPWYKJjwlPDGSFk22m7IF8H59hHucKJmtaToqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCNPTXRTq5LHwi8uaCrcA6iFbKFd8Keo8glLgk%2FeDKpfbJZQAtME1X2aHSe1jQ0NShvqPtK3K5B3bsMl25ClMuZmYPNm0nUyVYuv8%2BJW0ySYfjdPlrV6hWrAedWedGu4OPFQHyYVH8jxGqoKxuPj3O4DEGyJBSa51GM3YDzaedcwzwds8yt%2F0OC%2FO8vLJ6EfEADy5pVLs3q1SHznL080lC5xIrbrNOaqzb8ZV6bUf7y9%2BaaugM%2FLvkP5MIxVrVRgbY9Y2fLP1J7OTNX85QeJPbxBBVEkxWH%2FxvrARx9w540%2FvG3PJFLGvwCEo9R84%2BBG6gFo9Jhh06VKOdQxlmJ%2BNkSommAWu%2Bqu9yMioyb1vypfQMCtVv2JufdUIiDMRfKLFkGwLzYLBUT5VNH2lGkrWGx56MLIGqOAfMBH1dZUMuAaR9olxSm6vA0fUlTj3BogU8ar6JGn3SK82goCa5XTikyV0wi8Q3ehBKESQbZzrxLQ6cNQts72ndnN0UzHnm9K6pel36tlYQVHPckd54JTjm5zTBry05K63LRYUUoUWHqJ8gURSS34bEHVabbZ%2BiV7zhOhHEwm%2B5jF1BK34CUD1Rfsi6rrsfGNNPY4UoXcabQI%2F%2Bo1WSOFXo4lojroqL%2BO8hJYYZpO6%2BS2JXjyMJr90skGOqUBaqJXWrxtFuUPCnz9%2BbmakQaHjD2l0qdXk65POd8hkzkCaPEU4PqzHFVMzgyHkbImxvYMXbLRZpgho93afs9vGUWsIhXREDZ1PH6ZL6Wnm6hyG7KVgYuXqct6wHXLp9lo98Attz8bWPdO5hg28rBffgYHWft7olAREmUzm%2FS7ioI9dskks049P%2Ft0CbrHLGIgzFAhF0681X4uh4G1GAErrwYnw77F&X-Amz-Signature=b0a5d0e0b45aace5830da24048abc0ec9cad2609d2d60212c8d63240ecf9bbd2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

