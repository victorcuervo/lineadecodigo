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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QNEP57Z%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T003943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDf8jPNyyKaAbvOvUjQDkFa968zEbDhpu%2FDHAIl8c1e3AiBoOkvPUq7FXs22U%2BUVYPlfrtg8pHMGDS%2FGfXNzD0ZKaSqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlk6uFwRxiarJF7dmKtwDUbOF5JiEYitkrzT9R2uUsoIjSV2%2Fh8Xz%2FgIB%2B6Ui43UbSjgPtietK5ol0Vs3gPS9zjUTm3Xwhgko2EQDSof4a0rjOz67byf%2FpTKdlOakf%2FoK0qv3YJsMMvcRBpY4Q8e4oiliF6eyXR5lROiGtUm%2FpukGRgTe9UCz%2B6CpfFmS37QBNP9lhmSh%2F7Q2EkDyCoRD4bpW3G6WuszSVGTnGbtw%2Bhg4U6Nuj7Mr4F0aNHimdDvXDSukzkx7ZRNmQ9YWaw81O1XcRGweWPP0Lwaeq5a%2Bo1WAENnq8dBJUujV3NjNEuGgDvgaMOL2KgYNaN3EOG%2BxmHhXHbXyhjI5caSUWv1BSfABYzKkASeK3ljpUfi%2FoC8z1FtUaPVTQoIhhLn4wsi4%2BKOW7kmAKbZkgqDJ2yBUIxM3hwhXzWKuH9xTcX7DkrfbCuFLor%2F%2FtiT%2Fr1w6xkh2LPNZ6bhRk37hqAyFxmnRqiAP6MszMiZqnOcTBLb9gBTwFu1zKFMwOAPSBXZN9c2fOs4UKg1qQxo4Pe%2Fc1y%2F23AYJn7p9nbIjzrxE4gH714kqkYmBpKcOf9SOqALhElulTM%2Fp8ozHFPu2e2sKkyYF8hCw4ipXLheK%2F%2FhbwlbnMr4QfpL2cTnHJatQlPAw56HYyQY6pgHzi9FzEPmof6TJOYE483A%2BiASHGgsc%2FLqyBxscCcwmoyhfQWTJI%2F9BsWOAI26xec2Sf8MqsxenNB2Y252HgusagpV6%2F%2BEzFNi%2F08%2FLV2KmseAEhOfcIWTkg6hmDlnsHYhw6NvJ1WVRNAotToxyMthxgHntdKbfVIIC%2B%2BoHCvuT4M5VNAM%2BWoFdO3xGTx2XK0KZxRbCpoHqNXeWNTiTsbgvRVBmbmiN&X-Amz-Signature=89741acb2389187256174e3cc69b343cd394bfeaa3b5eb263eb5554badf52c55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664I3AGCFB%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T003942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHYS3caU8uE24hzEOlBAEtU0olBtj9Bgvkqj1wGpAjUqAiEAvKgGQVN3hz9kvTuQrvlqKdi9aR2sFEifglLDlLg818MqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIEn9eywrhIciJ5WoCrcA%2BbjRa5UwzHYRlVRvlxTNZzmf%2F0L3IFTgKUL6H4xsLSFg%2F4%2Fgy2iFasEw9p3tDxW7ywmZByOZYoFkZa4dGAS6pKMraCS5rAl0enBrZ9djc7p%2FmIEjtodJrjfnZxR4bYa1UA6hLrd3%2FFFaXz2odQgZ6hppaLGZ%2F81z6teBy8%2FdllWm7iMd2jppQdWY6Bohp407G%2F%2Fa4ZmTFufL0%2B6VgnDqtZIFggo51icPSitUTCbs4kOK1N2eddPcfszgPsriICPwiZylS%2BBGEXzjO%2B5RSHR3kcs%2Fe7JYL97Rza%2BTiOGXgRgCgmHJZk4g7QC0mAaxBONrjdjjoXjwa7GSHR4KOQaSZYFNJcBCAGL0Ef8Y21UNwohsEU90AVZkB7gMheDhMc7MYPl7ooon9dR7SpAG6EWq2Fwkdy521k3eeCtrVpI%2BEeqGDfQd60mSNYZUdB%2FZtudgNlqL5a8f%2FO2iPj9CNs5DXFC4jPDyBUNiJ9uxagkHKNDwk06BbmGvtiZYHKR2PmZ3L3jDc3FGlvc5w0EnmkJjOhhZL4kxNX%2FDG5NFEigtZXfeNZj49mhvRX9xkj4Xo9WVfNwjlpAaAs0x3pCBfm8xp3X7kEShqcJhTvw34tteXEq2rJ1obcd74DmpLDnMLCi2MkGOqUBkzxnUC4MZcCABZOHoFMbrNhl1JehS%2B9ey0QlLDBvD3vzWIzZiOFZ3i3i7C0eAmoFcNUzr4YbaOgnK%2F7w%2BHQTbjfvPQt7we1UsIcPmIgD3FDJkccZTclISeoXe9Suoj5dnrtiYop2QKb%2BOow0sC4GkUC3uIxcEzb7iNnMJuXiuwtJ%2FXTwMrQjgCOakP8lfwo8IXMIKFrElgBgQmoEEfvY905j24Jp&X-Amz-Signature=cb52793c99c9069a7e838b2a2d4cd7514b2fc1aabf8c41c02090edd56733fd65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

