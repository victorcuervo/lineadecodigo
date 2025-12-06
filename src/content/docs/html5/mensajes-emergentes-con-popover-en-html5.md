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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RR5XUHHD%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T111616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDAJ9zT%2BdTwc40RHdHgAdDOP%2BpsJGN57YnJNInMf02svAIhAIk7PY8PhzHJSVUJqyeE7lgTy6xdHm0uFGIxOUPWl7FZKv8DCHQQABoMNjM3NDIzMTgzODA1Igw%2FSUA8xswlpfPAEccq3AMAp9zvJXumu7DB2Wao8ELBbtLxaqpz7ibMoIdpDCO1tdlVPGaxjI3KDoi4QsgDM5oAaATGnotL4%2BBUD46Fx3SFR%2FMLVXAgXQovSmaeABzXPLaDPlnPkm1piRgyOxJWdcUAVriyHeeVpmTL7Um9%2BZE0J6aFLKr22w4g0d1NH%2Bwrfnf3Pl71fS0Sl87UnIxAkdwozHppIm4fekp8wizFXdPSEayD%2Bj3O7MPqcO%2FX1HhVa0NcA4oqlyzkxbAT1mKAuXByDJdashShnpU0fLJ%2B%2B7RmvVvEqLSewa%2FGjme9YW4SVlKDmkJQ6QWT1lzT2rSrrhjU5TptQMPrlHLvIfaM7AXioc7%2FdYdW5JPF1fsdyKXqID4DilJhmwM9FPWSq%2F0pXNvyBVhiFp4Ie1hKDoZav1WoJRssJkVnfbcVQJjCnxRoKG5PNVmzuk0biT8t1niR%2BN9TKRQlEbVIQijyvb87bpFVL79IzIPPYVbLtjeXn5XQ0uONs4%2FjhigzPBS8sd82lyVuaN4%2BNYBv%2FZeKB9%2FcODJYgCJdaIJj2dQ5xzBOjwYYHepUPax1L7ZgPBmtejsZOSoj%2FBQ9QV%2BqT9p4kdhsPsBab9Yw07uIVu3caFDSxAPSQMgUKjjkphLpNp2A0jCEidDJBjqkATChukWJp6Nww97eAbreEdjFPczydm73PPkuw5jNgewnclebWk%2BUm1f4or%2Bh290bqYVoXmwe8vb6C60jx9XrkWsZvTnzmll9lJMrU%2FVHIGB1DBd20LMZbFEPx7Dg%2F8v%2BvC3ljiX%2FYWgCgXRAFuqPn2k4W5qVvPgpCKpKg%2FvS%2BgLIuCt3bukmtK%2Fzzdtn0sMONGp1mTOgwSJzgKTR7ixevuucYLeP&X-Amz-Signature=7c75161e7c65b6dd6c1db3c02973a6b34d17bede695a606e4f4b9e58390d3f85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCBSLUGA%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T111616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIALI5lHBrhzgslbWN69O6ILiutx%2FGTTeG%2FmNofbiLSxxAiAKgOt2%2FCA%2Bx4%2BWPwYWDEM1Zqwl0Tjk8MVFtrwiTfvU3yr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIM65%2BrO4UO7o7OwmfAKtwDfXgYdkrJf4yAUJuppKQXTtYTWlKw5OrqVYQZHrxYYYqgJxQ%2Fox6jHEjMVXq3%2BRBTPBd%2FGO7iI1B86u2fSldG8hrlyuExkZqEvi1c1KoYO6uqx5d1xzLrGcXitTWUBb6zNKvZRR3zXcnMjLfkprsWsz%2FBYso1dyMnpJFDoVzhsFPVs9aay%2FdD7WIODJSc7FqUgBEbuH27ymvJ6IH8yGN1UH5imrvh%2BMK7B68H4urSX9jNxAdbsBq9uT3znPPBww4ipEhRen872kRtbSFIT8RqtNLDtbj37pNKdefEbiO3DTBxBO4AxaVDWVCqcelZjszHT4PMm9zG9EbDis4WMxMYr6qZt%2FXRhAhLPZOwPZmsghEanPEmNL8%2FH8dOy4%2BlCD78%2BiW%2FvVVZD%2FtF569HlQpThcY%2Bkttp%2B32Fi2vtDsXWvv7dAQp5GSCKSZ2oUqtRMloq2eh6wOi%2FYdn5jxeZ2TmLowCIDSKZtVu5Jmyaf9LuIqshS0%2Fje2QA0j7%2FNMFd7xVeC1Ei407NWq22CDUA8bYNSvc6ydMhuPopIcyxp6yGj1oM3BUpZ%2BA8OiEUh4ODEzi%2BX0BkeGMWulmKqIoW5HZ4SWGlE1JUhhsRIXb74wZt%2Bhu4Q35Hqzlz7ZLEUvUwuYrQyQY6pgE6PWQGl3XEBBn684vX5iBoSEY2%2BODyqPHBk0uglUO06y3KGz8Apjsp4Xn70lBHsyIEpImmJxcXPYe%2B03oAAcIhfykmxl6qgvBGg%2BJWmfovKwP4a2Eu%2F6RAaDeH%2FT%2FMB1u40pzTmkiEPXJiM%2FSesenIYKPsEan1e%2FnJxUXeryDbP%2FgNuj4n5B845F0fJGQ9G0UcM9mOfgCubv30i%2B%2FQvTnXZKXOfxfh&X-Amz-Signature=7ba743c222702ca2c4d478b464a38dc14f401723626fa7f935796c78ff2295c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

