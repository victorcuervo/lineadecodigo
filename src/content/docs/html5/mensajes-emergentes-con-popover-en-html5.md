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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNTEBR73%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T092304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7yGsAmfJsTsyBhT2KUop0YgIU0iLNNhDuWFyj4g8seQIgLuYE99oDXiqHj27ZXK68tLu1p%2FjMac2kUmDtTsyIYYAqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB97hb1k924RpJauUCrcAwKevtPXHS3tn3o6cp%2FrbWzVLxuMj4dY%2B%2FpelTUgX0aCvDfN0sUMZDASXJMiKmKh2FWT4efBenLBFrg3rA%2Fk4YyGB2rL7eItU3yJXk2WlbicW8L3plmQIqwksPM1lcBQOjLs%2Bwqor40LbNt3Z6NqoriMC3TD8nYecfTVz6lpYinyPTkcS9nQcjNUxlPFQrHAIMAjWeZFBoIn7x7VaRA2%2FosyZWOLYlOyA89S5KYyRPjfepJsBXLeRMB%2FzRc4m5qEru86n7qBMXBboUM52GgWa6FY%2BCKv8KkxrmejOwzTRh6vCgQEDYs%2BhqH%2Byz6SPUlI6rATqoNf3JY9ovKDLAKry0R2FvwipD90aubTvoiBidyuh9MwRifyQGMQlRfhdaAMQe1KeIyLEf5%2BcHv9G9NdmsjrR%2BgkaIWvWEQOxtH2xvEL92IFf92VXzK8HDHwXVvfaUGDMTitkarER92n5BuL2odmxpmXR4RaPH4WM4yrZiZ0kNfUgxNc7o%2FGjzOSNSuhJZ8Z3yrnrXx1jLUSPL%2Fr%2FVXIPALYyrBmANs1RMWz4GCmnpbogynM6aiQLoSvh3CUVdHuiugwzk%2BBzHKBYdqwo4yzsGaYEuMwUL6WsmYCKOalfc7hSq1z%2FCSrxEnmMK%2Ft2ckGOqUBy6%2F06KVU%2FbWYyBj8RWEz5LoMKDQo3UDQxIywwazGjln5Ro%2B0nkOrLtf80zYt5Vzu%2B4Ic2aXtN0a8PEyOaSrBB7gxsgwipcjfNh4rNabr3BC%2BRdH%2BTTB5ViZlUwtRjJYpn5Ni1zoTFkedmUC%2F0t045hXKWbg%2BPYjCVmkXr6rSP1K33bLlIFyRe0T%2B57urJtZrzcQSyCvX6GOnrEHDTpuTz2TPNaUE&X-Amz-Signature=c22ef984a13a4a67f7cf7477fee705e7cef50236ecae4592668d79a9f6f8cb53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3V3H6RO%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T092303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICTKYtAyZnjmTWb6ULgz6c2FTCZ6S35hzqZpu8ssUQZKAiEApJQiDdozrSG%2F8jOmDIa6OduY9e7Uz7wc5SdevSjUWFoqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKkOFWOQ9mIAiNt8CircA7ry%2BzTiTbfFNZTAIWd5hh2Jb%2BPGCYbHgW96A5qdBuP3t4B4I9uhQACrPgvZe3DZOAvNd5OyH8VyaHKx3VA70thUegKmnsHHjTnOauyOOKSeYosC6uqry9x0fsmzBwjoUG4EyaJaNuc%2FFNBAvxcw7VvlgdiErGbFEN52T%2FdwE7NKt868tBTUIWT1V8DuT3pDr2SD2VpJs4UFEA2V39H4owUMhB4zFWh9RQ1vHFv6a%2BofkZBMmUnhzIg6%2FwEwHhc%2FCQpkxMvzcM7prMcQerqhT7fRRRxVivLH1K%2FwDHo1eiaKpnk6Hgth7ZBkrsglLRoo0sZXKDpLDesrBSeS3bXw%2Bpw0grY4EEyWd92owP99pmr8QrPPS8DgH1bwTDGohJeaFD0gM%2B3XoPoCXmOesFIoOWACsI3y3JtDq5Js2GxfugTx7iXU%2FXQwUb9PniFmewej3ktuYY2KIpOoHhQEnsfX%2Fj3JbzUoRBEp6%2B%2BUTFt1Mbee4U8g9FC9NSXPGKVMSrTakQXnYVhmE0rtglDi6ZqrK0vHIwqTnsV9X7EBzd8a6Z1AsW2FIgVnZ4n9Y88lkaoQTew5mzfBYn8FASYYBrSMvV4xYvlwSutCkMN9wqrm9djN3eNekZ%2BiQ1P29e6uMPzt2ckGOqUByIwYsB4ji6QX%2Fa3fzJeQLqfioAPPY3muKhbFaIga4LtybVP%2B8e40Ba8M0hwPwojQeYbuG4MfSkD%2B6loFj8GOmEpiEWNjOKbuc%2FX%2Fu5woXvEGSIuLN0zhy%2FToLH%2FS6xuZJ9Bosf%2BlVTgTD6vHtYLTlXIKY16fY4BTe%2FxZ362%2Ft%2BUiCXyeOMMjUJrmfsVpjkx9IhpNp5%2F1A1yB7kSJxgkE37pUXItB&X-Amz-Signature=ebae455145eeb987f7c64215c137dc7b5795e5a00884af82925eceb3dca3521e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

