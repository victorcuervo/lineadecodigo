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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X34PJXR3%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T134605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2FllSSLk6sI0%2FRo9610cUE9N%2FXQrH2306OqTVoIu6voAIhAMQVpedT9QzorHLufy5nEIXAdTjbgIVES0UsSPtHhURyKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxRBpxC51E1cQFEAAMq3APkqSQCRajf0GT34N%2FjylXj30J40tjAUwMJdSQm6fxGGv%2FvtyjvOe5iFoYUtlxOIhsyXe9Oo5mRGQL81qPhEG3k%2BFJYvbDbaLwWsjeST%2B%2Fxp%2B0mwa9eoQ6DbhxYAFkYBuPcMCasNotC6JINkQyV3dx0yYxKbdksU0AXp4wtdf7D%2BTxjWTjV4HI7Qo%2Bz3Ku6G0f8bDhOr9bgURjMS4CKGAwMiWf%2Ft2x1pR9U%2BtKZG4e8RERjlaNHwELdBkI7tJVV0o7UIhdjJB7V13xugsNy%2FyV%2FRxwonsJr4hf%2Fq9An8SvhN7RF31lHE6WTDbiO9cnnV%2B9j1DW%2FybXH2whSM6Exg9NWlU%2BevxtDXmeJ%2Be4ktW%2BYcs0b4ELosDQIEDuSA3BbaC%2BDz1E1SSHgtonfeuOA5joRVAyV5um0sCVQFr9MSCP4HPY%2BoU6yHGtUQYrnZZnDOwOmwfwrvPP2nFgBMAbIseV2%2FqobH43Dpp2gYsE6Gy19s2bRIC56%2BBHtUw4HILe8jlSdVtCJ59f6B%2FayeKzHo4U2T943cb%2B0M8qrSoU9YeZqfIWnwt%2BhxfDfRWrGExM5Sncr0MuX45AXRXcMZn9698ll6DoRyalTbr6z8Dohz8O0CkVlAqlxVyeETlstnDDGmdXJBjqkAVHkbDtblCboGpIjSwuaxIp9zM%2Bna%2BM10eG62qnYw20SqaP0BPrA5ptaWKfD3%2FzDkPmlwYXndNBqJfa0U35B0zxGuAEyXUBannii%2BnBv6zmgXGrKqODJL7S85axWuMWifLcpZArfm99bTZQaok7rN6YrkgCSJ%2BHU8kCjazocCS03mA1lJjj1tWcCLXj8%2BxeqXsLR%2BubUdRE8N5E%2B6JCSuHycZO3v&X-Amz-Signature=638b797776c4dc2f186752352b21f64590af851e8758a18f4b3701f946480567&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROAMAJ5S%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T134604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDa7qzSThiki9vVD%2FGUhZKSZAdJKGni34g1zK12e8eQuAIgBq%2B%2FH7%2BmBpL3wad%2F1Mk%2FzCsM6UqSb1FUfBqlLxq8wNwqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNSPW%2FTN0pZeyAAykSrcA4kP2Awwzh7PFe1tY9sZ8mXamxIUci8JuOn7w8USoInu%2Bo6J1rCp2kT9UYOWwEqjcYyEPxQWvC5cHoOY4Ti3Xl%2Bk7Ggt1Xh2hpo8422c4pqQFkuBOec8uucSvZ%2Fptw5MywuJ426zG79Mr%2BAktr2M29YoCNKefM2qFtsXwpkcYaAXKoHl%2FWJsjVGh7iPzAZSOZlz4tC4%2BbOEJVXz9y07ZZlRYb2W86JkPxLXb5idVGDA%2FZzN7uXErE9aE6Pa0WlyjC0PUCjWxlD5Zzr8nM0WZKJ5fBh1cDaP3IvP8IUFftoYr140b4lI%2F8xY5ow3UR5elWEdsFZvs7EiVkubL%2B9xOT0b6mlIteEeZ5ue3IsVapLiG0qieZ%2FJSUerQ8Vj01GyuZoc3n8InicC944nvehVra18EQiKA5Qw9NziQBcpEZoLnkvXdvm%2BjYaG%2BqCcZ61waZEcjNQVMHwiKb6Tf26Oi630weFWy7WG2RJzqBYKPPPn4cRm9F0veSkQv4s6cxMgBHRn78UQOYG6lYPGd45WnInTOEQ1d89KK6u%2BdOBa5DvEMrdEQ2jX4Xi1v2o%2FDRlRe3jgGmpzQJant11iPIr%2FrgEzA9TYtFdHtbQC5S8lzRZweNytdzoIWIe%2F8kudwMLaZ1ckGOqUBmmgVGaXKubmRDyelbXYtUKiiOuouwvcO4iQCIehIDRm60oUXYl4f%2Boe9yJvpklO1dFZ0Q1DxOIta2M2f0oBaSINsdj%2FApEp6ShUhUHzP4EyVA11ko3%2Fx7tkBeXLrY7g6t6CBGTfpST0br9CyqiQg3%2Fevk4zU4Y40vPS3GURJcwFyL88Lxd8%2F%2F%2BkBW%2FJcRjpQTDmg86QcHCpRW7Q088JTYJedY0j4&X-Amz-Signature=c15bc0b1201229b9da9a441792fd34f9fd30d08ff4c24a181ecbf2f34138d48f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

