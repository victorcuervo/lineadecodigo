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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VH2XJN2S%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T030603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQ4fr%2FYSxTYfbrMDC0yuGd8M4s9rmGzkidqijl7GWfNgIgA1kpPhInIwrT2uAeTkcPYejf1q%2B9jvZcUhRsxWu80twqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJOrzf7G9L2E7jbItircA3LsIs5zYK6ENdr2Tbr1n2%2BcS1Vfesj%2BeS521Y2MK%2F5l8SVvTXcO3TBRzzWft5uDa1e%2B9madfRV1R%2BLf5f7P8MGWEMgUv5hBz6BPVao2jOuXv44Np2SARE3EuiAJ4zc%2FSwhJTj8MED59gKsGwMUejrWs7Y9M%2Frae%2FWrGyvtPSWdD7z%2BMDJxt3%2B4dms0WmUKsDMO8d0%2BgsIcIYIOzHMriqgQ2hlhQ4cUIVNM493Ig7mCtQJF%2Bd57h8d11c8oMIET9uZVFLX%2B5xfB5Ze2OaB%2B%2Fy5wN4pr1GmrEv87DiiSzl69pWMZ5MgtKhFcb31XhyjhL%2BE4j1w4Gcug1qk2BJCQLREqBiNkjNFDkLjv3dU1WRHp7yNUWoIwhQx51tuK1r7L%2F7N0W2ZPfkCEn5LlaZYPJTZ0wITyMeOysvaWT52nhWJ6i9Mkx3PvXWr7yhLUiqsrAvXECbpgJXLXiZLIw6%2Fc2yErDhYm0lB5ujV8FeuIFZ0K8WYaFi0BOuUPaQf6AG0ZGRn%2BN29KNBZ0chqjy7p0waas5dMV%2BDgusHyDG1HWVB68x1oar6lEI9P583Th0r8zsqN0dIbM9nXzpET9UzF27Qv0%2FX6SpYYl7OeCO2M0Viaqq7Y0FhV6hKhKqSKUjMO7v2MkGOqUBiYD4Aavu066dUpPG35W5Em06yQuhNVVK%2FBDC9F6ABbLOMaNEjkFr3tWSwSBhi079GzHvpb2H1hoOIhduouv3X1UfMdeavwnMAkKkTyEuVd0j%2FOC%2FOqZcWophvfzWySzmlaX1oY2vfnk1iV5QKATUKKUELAW12aHvDgvr3tOIknSMK93UR7BLNNKG5%2FezngzJ6Tv5im0DsAsGxKDOU4BCAG6BTjil&X-Amz-Signature=9d7a1c0983722da3beda43fdc4c5c0be51fda1388b01839419274296036498e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZH6TNEZU%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T030603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDrd7w5eGsiDxiqhRq6TAI8tVNHCYfuohyc1a3s5I25QIgWWM2Lr9SkcI6foYRJRCCOMzTNokpiE2xo7i8FevegecqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJJBQJDE3uQh%2BBBzgyrcA8uOUnQpXyehgWwn7C0s2T%2FZvnAOh8wJDIObRdrHntXObREMIdDZz4i5mUxdCR7ZxpfGES2cCade8e%2B6atZtgEnw%2BBOch197DnGl%2B2IeXHdS3HybU8vav60aYtHQITKmswauhpcYGbWnCRDkKzpjV3Z2BKrvjT3LPY4eriMQhH91ioYKYuE6LI0SxI676wmvtdl74XAaV7i2e%2BummyaSECcin26%2FCrcGAx6wetJ8ZXQe2vH6ClHEElBjqSuo%2Bl2iKYdWZYF4d5PDmXy3J1gAQ1%2FDvFBMQerUuMyAoxuTyxDlNeTt5tU4t06SiluszefnsarHSdvR%2FHCnV%2BR3BQZ6P34maPG0LE6ZvgnzSIxCcS2kUK5swLhYVD5v3oF%2BPv3%2BgIePQ2RVJZDM8NZN1agh9bRzgx0i%2Ff5fc1qLaT8GJBOjH7fkKgvUmjtmT01Z%2FtBdDYDOON%2F3wAXVyFExfkYDr%2FEfT2MOpmwFZ7Zk2OsWmCI2YB2eMU0JsF0TWqMfDCm6ky8RiAIufhYEpJRRYAuGrScOYbB4EwV1fwWVlw0IAWGUTWbThEnxMasQYlWVmMX3aq3lpojmhJMNnd31KQDwEBZbrKkA1sjy3CFeMods4yYvOeB6UZ9uSWqPnuXRMPnu2MkGOqUBwXkzadF2butNby4t%2FFGceupF9psFwPeCh8FQtkC10N%2FNMAu3UpwiaNxp2rKZ5DNe9M%2BM%2B%2Fi%2FHlYNtURonexsByUd%2FP4Vt5hUorJ9wHK0%2B62aTQtZDvISMhtTGTcgLiJ10ZGalhwRx%2BZrbzLSC6hN6uNrA%2Btv%2BYrEYwSvhoTKexqAQA0CLN560%2B1alygzBynH0x6R5Z7LW4oiuWqEgB9R5k22PEOV&X-Amz-Signature=dd6ac926a6dcf20ba5b68936593fc0ef4a2c599a4d56bb73070968f23e3f7dde&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

