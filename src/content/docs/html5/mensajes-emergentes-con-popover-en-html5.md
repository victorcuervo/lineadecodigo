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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6DI2FXD%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T063635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDXgATuFOqe5zauLwER75qc8JJPTLSvQFVaWOFtpU2ZqgIgIE9Z4sdt%2BTjowWPAm9v0GoByVE32qdY5kKpEGrWGTF4qiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAlX%2BvnUO4hVTmCC2ircA3LuT92boR28uVn6TJf87xS8YB7bAMdDB3l5TSEkA5HoivIARVRSHvybrhVMCLhy0AiTkV7bmfR26dURqEJkCPFbvgRnPyCh0s2si%2ByhjjQG7mYdQXF%2FMtmrajBVRXPup8KSLpk%2Fka1N47w6nS8HtIOlNYKPBhCXxtgpN7vM9GybmnEg9tXkMfwIsOeLK1rYDKzOZUWk4qH9D0k5kyF2JRjsbi1nOAMwKOP0wVwDeUrRYG16wZ6G9kzQ7q3OjDMELskjOZkuP%2Bi%2Ft35mdStlyUSjxZjCYaqVgQ0FjPmmYRiM1uXLywn2LeZYejO7GyWSYj%2BCpq4u%2FzK%2FsWSmA5IFOMqBtI7eBKNYIPQIVMhuKzPnT707CAL7TbJwSKSFuX6YjzMH34w2KZTDsNugBJDWGIOywirpLfNimkBddJD%2FhPMsg6pjFRXw8NtAt3rtE0z7kC81ndbAokqgbYAE9zIK26Gwpsg1t1u7H8r5I4eWOgdDF3NfjrG6yhOSwyFr7ZNG02ElqLjDQMC5OLU3N0enxzRhaKr3aQODgpgkxowSvfqyiDZcqIJYt8ZDyTs9y1bw6IPoL%2FDzbzYaCchW2IH18HE9C9CQl58YjBdsiu7JHzD3rpTkSA8dRsP4m9s4MIjR2ckGOqUBMjwRtcIYn7DpVYwyk2Te3dCn0zZcTtZgAJy1ZwdKWV7Hlx%2FZmCP6y1VtfseBtuPstZ8dGZ9XTaDEwCekrIo6UnTVuMQiKFqR2ZMSC4ggAvMc4KogjcBV8KShMbISIbfp8b14QJN6XEjuTiAOKUHMqGM8WTVFwOhainzwG66amfnjMtvpEwF%2BH16Cmml04sjjaiorX%2BGdNlQc%2FS7iFjUK2KQB3PQI&X-Amz-Signature=bab0ec8dec3cedcc54e7e676d8fa0f9b820b63ae12227b64098a6f40f2ea9f34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UF2P23UK%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T063635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOPn%2FlgCnlc4Mc9Nnee2aLsomn7o7ynf18ZEzWISplwwIhAO%2BjCpVL8mDiCOLF4Y9DSCTCfC7d4azm%2B0dFWA2CoweaKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyyqVOj1nO5uFY%2FCKoq3AMtMPoiEF7PcZs%2FUJNxVzf4QUVK4FB%2FF9rCDxiQfufE1nTsZ02HVRCX5pATjElPITi%2FnV%2B%2BxRHW79l7FltMaCgQfz8PjZS3ZxHHAYe70HeAt8qA2gttNHtXz4o%2Fza6MLkAjzRMmOGilE1u8WXKAZew1N83yFfAVtwFsORzpRQU1nDzd3AwfYIiHQCrO8Jb%2FzTg%2Fjhft3%2BwtLaCzHuOlwuCE7mo8%2FzzEafcawUHLHKSR5OLupfKex28xzExx53%2FDYxJuhZX2X2TJGRcGfJ8E046R9qE5c98iOvdhqKvkHhuXMsfI%2BL5iPl7ncJlnxG2%2FnIr83YYuttuTGLIoosOk5rlfG1%2F9ZEC7b4ePuszVr5DpuxzjvbwQg1kun9PRovb4jXyWMRBZxmSEiYUUo7qI8fNy8MZdvFK9XQBliKqbQyWtlvj4JQhmyyOqEjz4%2BRMMEWkZeG5nM07b%2ForC4NHjecKrk6X%2BW0HGVeRSClToH1jcvUSdsGgyV4iQnw5NrN8CD%2B3m929tKI4vXcitEHHoGT13f6rFcO1VF%2FExjau8NTF%2Be13RaytNaBqqpafdb9eRmO8kmxCYBC9T5AyC3mIcXGtM%2FmxHPz2o62kffxNnLvXLrHZgdZ93ztoCYh96%2FTCX0NnJBjqkAbgqrJWylH9scsZGYhGe6sQZxEXQYF5xeNIBPheGkNOp2ADeSfylsR%2FTZg0Yrx9mbcafbqnCL5ioO4E0yZSGbBQY%2B%2BzZkWJlNc6wbGt5izRC8z0aw%2BTUqUn2mtiNinY98HqyguYjTGHiw3AniXU%2Btr9SozwRWArfbHuo8ar2KGJC9TW991FHd%2Faui77A%2BiBwBcD5z4GaGhI1KaY%2BfB1TBuMEXhME&X-Amz-Signature=eacd36aac3d51072cf7c711ff2fd63e50affbc75fe517c24ac2884f9bb892ce0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

