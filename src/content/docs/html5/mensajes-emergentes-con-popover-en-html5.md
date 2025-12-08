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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCQDL5LU%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T030424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBdj3lnOvKd47glRdZ1%2FHOmqN%2Bu%2BSLR4GHkfb7OVaLpwAiEA%2F7l6il%2BRXh1QOOCo%2B19Il22%2FW4dKTUHQF0rdzhUI%2FVEqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFmdQQEgflso1B7IhCrcA8I6Q937Pz7sjdQ79emQwdNvB3i81tbuP%2BJz9iW1XRqPxKb4UClf8%2BAaNioYKasjT6vlhtwZM31Gsp2ShlCjg0EoerO2ntotcXvrGeX7%2BBPyUoxKb%2BoAIybLIq2d71%2FaMTHPKB1YBRFCL2gbLjSg4lrQ%2FaUYMAAEfpqlcDGvnGNmKVKZzpVz1S0ORsx79aFu%2FnSOjX4gOIueIQFQUSaLXDaqKJzgINnQEwGXDHxRiw%2FjC9dDW5JoFt1nNmGDKH2YNiIucO%2FHbMFRJQB9Q8s7sLHtXIyvlaYYFzZFECCQs1%2B7K5pFAqa280Dt5zGrdzLb59lwTOpy%2BCT90F3BMPZPiVYbH7NPyQVOo3juB9%2BQLlg8F%2FvoJyjj1PRe0WFTBT3tA7%2Fb8YHmg9Bol43r5Ry1xI1bTppkYFr5QdGlLb%2FUygQLNffOHsx1UKymM6iWzNbnKI%2FYi4mje76FuLcJQdfbYYNc7pA3ZwNiEhYupYd6QU3xuGElL%2FatLopewN8pJa2P%2Fu3I7ygSzunpZtzqivihVJcT8Bh2tSZvdXZZwZr6865NUuSXmXSXqwGrn19dvOC%2BmounyYdybEpL4o56v1afmcozK4SEkoD6F4%2BWnc5GD33NmzxyzlFqhMpxUmwXMPnu2MkGOqUBWuJP5qt9AfB9FKbtSz%2B%2B4Z7u6VhYvGiCcCImmG0MRl8LcuefKkRJHvNMl6zvT0MTStFB5xwdx%2BZFtRQ6EXWkMJPoQkvpHbsCq9Lhc6PRVtl5BRxLn4lbF2f2PN4O3hPe%2B25bzQcY5sEBf393bTQ1jTgf700ZB86i3UUxg5BPCfHRAG7UheAOzM6WFG0p%2B3M2ZVhBZTZ795vojf%2B0zQbzWt9TtjBl&X-Amz-Signature=2147ca0b1c104c1c70bfab12e59273952ca160634d65162380d937ecb669a5f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QI4H5OZS%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T030424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID7TewplqTlwK29h2zyl7BX9gJ%2B0vT79qJpkf%2FotkhpSAiAysQ%2Bz%2FBc%2Fi2ja%2FGG%2FRwZf10YwOxoQikkSUC31pBx%2FSCqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcOkWohy2x%2FPCc%2F7jKtwD3yxijSEJA3Yxw1pxTD8sjHUCAuo7dMq3IZX%2FedPNx9vKdcrWtnE8JkvLi1ktxB%2FB2vBZnwjEQC0G5E5vJ1KLE7AZvThBW6FJC%2BakoB7WTRoXMnNuOEjZLbuHoYwkDdJssDN7LY7IN%2F7TujefcUClFfljvtOn8m2Aq20LzcjJrTuJVAsXzgqoMJLMcgdZYjFeaqhsKjLj2%2BlbjWlva9DQGJM7IBIrkjYyTZcEtFIm7ZX5rbtwYwjnLK8EzrmKbEghFRQPWOYI2bRtJ84rWFarn6h6iU9DXJ5mI%2B0S3CR%2F93oF7B7m%2BDgsfzluxtE7Q4Gnmo8%2FED4I9WiTtTjB0J0lRby49jwD15lLF%2FIu8KH6mdxB6RnJvuMoY8ze0QWyacP8Pky%2FgMOyH%2FIxgAm6V0pbUZ5IHnZgGKUDJa5eGQX%2BGlQTv43I4ZBYZpM5CnbNbll%2BtqFudHweNnmqCSdj7dhR1naot40rAbj%2FBuy2I1eO7AcaUXAJg1cBeKEUfsjE%2BMEz19lbT0VY%2FoCKY4ZHEPw7pbAvCyc9dDrHg1318dz%2FAzbG7lB6WxMknvMsIbyU%2BC%2BABVqa8qrNC%2Fcgrruq30nhSs57VPUdSaMUQ44hz5wVH9k5buQ1MpH6%2Ft011MEw2%2B7YyQY6pgHlKzJGpIpw4CcmiE3F5em7rdqfm0XL%2FNb60ANYm%2FqnCUIQN%2BltwbrhvB5lMBnTbKz%2F9gZGyOe5RVHB4yIlHqdDo6MB1SM6ywycE13o4LHmUGa661BMR4qo8UUzZfZoSvBC2SY4oMSknFZaVSgNHju5uXHiiMjlcDK1pkHNs%2FL4e5jcGxBX8k5WJLEu193lztTvE4gn7lTS4tLolST%2BMh%2FNvtFuSFA5&X-Amz-Signature=d98f8b3bcd3185edba2752d992c6ed0d6fb44a77aa1b4f1407bf58b0fbaa2744&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

