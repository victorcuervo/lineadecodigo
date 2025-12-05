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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666N5STXML%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T184608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG3ysUt%2Bef%2BcE4hT60NBr%2FWv%2FHdTQJaG%2Fn%2BQsV18xLGAAiEA1FN2GbeV%2BxVfPASTNcMEO5y9MgnDrTj7yKY6VVboev4q%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDPZxIYhv3Lx2%2B4DkuSrcAzGF%2F6ieomjumbrIxgX9vdXdYhc%2BfaVDk1DYpwr6Ph8nKyNIQxHaq7HR9UqkwTBDZkuinqNzuLQRJ0P2XJzzftF04Cjq7KkG7Xy85WiUrvPTG2yvBPfvqpQgXFRQKIhmasINSCzo30s5fFaFOi6je4GgJQV00mMwCALSGbspl62j1M96gjOz2tM8IQTLY%2BUa%2FSBp0bAxjHldsm7fn0rJDrKHY3UkmgnHADk8DfPibQ5toRX6oLOSSDB3e0Tsm8YS63qgcJb8XJ089G%2BY5gHmT8yNc%2BwQR%2F7PW0wXYLbdZSGbmrJxFxMIVF2AGzTQfBixOcmS6FWaCIL%2FVH7FNfOnN3c1%2BWlqbOH6TWz4Ph%2B%2BjvLaL6tIagI1npc3B%2FHdnwxMLE4gyurpMAI5e6fYJgZYI3PGs7WM3LCjK2Gn7ouqqdPAq7EPIeQt78K8l%2BZPT5paTib3U41M3B0nynIRLk6GwhFfxgBkBpU%2FguVZ4dkJF9wh6%2F2xo6IZFpTrrbXlSXymyMzh77BYnR4IFLM8ER3sHghNrxQjkvO7Tr0aWhv5YmfDOFkW4lQBIemySGTQClyawKIRezMdaXXYVpqEmXcV7hg4DAvmmAW6ib%2FNqsZF%2FRjX9V9FSIvnJZnmmWWYML%2Fhy8kGOqUB%2FJLodFtneWxtRdeS8qA7lN%2FgV%2BBi87%2F%2BbrRHHEAJLjFL2IPi1B0xA3S2vL%2FRBpf%2FEonBhhJTm%2F%2BZhjjJzgCQFDFJa%2BACyKIem2MvMhbRmk%2BmbIWnxBKA7ZPsIqDyDIBVv8lUa%2BSBK4%2BJvXmkkYxgum3xj%2FcE4DVwtNL%2FxtOiM05oa0RrVPyA%2F4%2Bk%2BOV3NXpWX96UL78VWfpADdbHZo5MPQ0gYxIC&X-Amz-Signature=e65809afb3d7afb89b26fce4d6e7c6f6e6bc7c452114e39d54a3f46c37642d71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RSWKPZG%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T184608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1XNoORWjPJrQ5M%2BGSIxqFLXb0bCN%2Ba%2FXWXoKNZEioOAIhAL2ihhSEpJ2EDvrxn2jeH3g6%2F1DxEQ5%2F7LAH2idyf3DjKv8DCGEQABoMNjM3NDIzMTgzODA1Igz2284pPzGoDFU4JQkq3ANDKg%2B2GbOouDLYe5Rk%2BYFYWP%2FEPXHaZGay%2FhJzzFE5MZsZMf%2Fbk%2B0UlFttVZ0rhluep61AztWF2FPb43y6bHdEWcp6zMy2p97mFRa7QBMEo6Gd0Sqw%2Fxx0Qr3A%2BCX9cTZZj6dVB%2Fb2xdLv890MNChx0K3GN9pqPjoroLeyLRZOjKEEE9wmlkGPg7mjuJKXfu8JpyicLbjk6Y9NYEeMpHiXdbUeWHkrx8dBPkyxl1Z4dbKxVYpY1NCwyX8LaUVwvRrH1JQPfxpIJk%2BfVj0ZUON4Y%2FlAEnyHo%2FMuR70TlKyxe7zhi4UDayVerMx63aM2GDL4TASDz86beAH3vAP0c1wEkV2b46kIxEBMiVUSB56szbJJ9mBmSpw5wJWUmpGbo3m7A%2BL7GaY91Hj1d%2FdW4JelODfcLedImzKFHMEJkSv%2FqB5mwpQAIaZT9OvKXMTEPA9fVP7dmbppw64lbnNxXxMcT9tAdY1C23yROD%2FsLUvtsE1FLI0gb1QvepO%2FUGTVspctCBkJ4z9ragI174EojdNaKN2zJ8NJmp7CZCDM9e%2Bd6GxEDH5mwqIC2sddfDdaa60UYYJqpN3pzbvmVq1am1rXd04YaNhASU1dqFW9tyNtsyE6jco2HBl0kfjNJzCr88vJBjqkAcEaL%2FdqoOZOUMwDmXGQipf6XGP06KvmHomiQL%2Bb%2FtGTWvHXpX%2BfZPLCYVfyr5XGaoAAlFxTouxb%2B%2BCY%2BqVCng2h3bEmcpaicOfZpxDf7o9VsJvmkyCTUHM2iHKjwKi2BeS5WBIMLpesIAB3R5li02i2v5TTCwmW%2FxNSUuY1IuBE7eMkAIjHqwnq58BDSz4%2F8wGUL46ZhyE6NAI8ECADfz5aSd0A&X-Amz-Signature=416ace519dea9a9cb7048763cb611d45e8f579fcef142269fcb6be0d5bcbffc2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

