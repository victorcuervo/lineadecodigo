---
layout: post
title: Mensajes emergentes con popover en HTML5
excerpt: "Uso del atributo popover para poder generar mensajes emergentes con popover en HTML5 en los que se pueda incluir cualquier contenido."
categories: HTML5
tags: [html5 popover]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHWZH3CT%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T075343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIBQvKC6V9r%2Bc%2B50%2FUACppHFZ9fj0sQAo33Z75FCkkggcAiEA9UNEigxxR1FxybxEIA%2BUW9p2%2Bs1Lr6CtPwRFoGTwS4Iq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDKuseJQrKDjnVJEpCCrcA%2Bfr3WwZn0GiE5w9nYADRDd%2FSWHoJyuuLXxnZg0Zur0FXjGh5WGfcDpkv2E6mym3ENUWpipqYJmy%2Fypc%2FUKiYAUpX73HXk4hgHCXnPDJLNWdvFiZKvC2cK0yHKfq2alpFT8JovAKjI2HuuyQYlsHH1CIwHvoyRH1vaLsXyDH1I%2Fydo%2FYS2t8Z0Ber%2Bbz4E%2FNMqpSwzmjdoWTsaAJdCIctXHbHlnuQiHcH8XkL0HUcRC9i6An25eISfNCeSbualJjeQH%2Bdyk7h47Pbp6Pfl7xm9pK43UJ8eeDcSSl4P621bZy%2Be%2FuMQqTOszerLjyLXep2Ov25KkRm3VQuPKBTv01ZmwVkuhu5Y%2F6ihq7kKgRfSti2iwLjLxz2i7sJnJByk3ahS%2BA%2F3noiLrxtGLie1q%2FkMbb7U5uIyVN7m7oMlL10KscmQf9EOp5BVFCC0Rg7su7SvIM2lA340f%2FjZ39gUcqdV%2Bk4Xqa00ynpMZHCw%2BF%2B%2FRcoDrYR3YpvfW7NdwxR%2Fo4k4iqZ21IUmHsA6L8tI%2B%2FCUQzaeddKltk%2BdIIM44ULvGWtfrpletnr%2Fj7xMhkcLvBZxOuj%2FwsOcjNZlvuC5o3EZn1Pm4TQrsauYn7TlEX5XgqglKHjx4b%2Bl6bNO1aMIDWv8kGOqUBPolAE6%2FMUXwv3Hj6ADcnykjaVSqPNviysOGOO1IOOMCr7dRHWy8W06uMZt79qkeZdfzo0zI%2B0Dn1fv0OiJ0PUS%2BBbIiDKjLWAThMiYYe4%2BnM8JlruvkMRZ%2BnIupa2LEdkq%2FiUVpfYE9yo9y%2BBhKEbrMsRH146GvavZsGtlww2gUBKfqyPjr2UKEUhwcbPboLXL2iakXwXeIgAUUnAqG9m%2FyB6xZE&X-Amz-Signature=2f3a41779a275cde2821f65d10140e007e4f63393a67a0685a57536cda454182&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFYFE3M7%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T075343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIQDSeiZCsvn%2Bm2D%2BCk327LnWqiHkwRif43iGfG2mcKS1NgIgZOKozp%2BMGcKa2JofTGE%2BYf2WBPUU8BInVWFjeu1BbEgq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDJiz9goc2KElJpuVJCrcAzGRwFxsMrPbKrLUYU%2BGYcWCVw6PIfejteboSHiDWkU9bzY%2BptnITdge1rOr%2BX6X5tZkwkNl%2B1FrugNKiZSLSCkoSy7Xg8nNaO3b1VZ2N2oNs%2F%2B783wWvTo%2FuEJV%2BZxwWDgi4s%2Bp9FmwXN6mWbEaV5gLBes62H5ehID3sgdyUeAID0xeFBHTg721Wlp%2BieelwU%2FTVuKRZaxstl9lSQ3DxxbAwIFNKFxT%2FIBv2MRhcZb7AkDuWIcdfgr6kAnO6SbGL6%2Fgf5W5Ey%2F%2F4%2B9FmefgjyhejiLYSrkwG5Ny9MWGYDVBUQDci1rqQFiST%2Fky3q%2FxKxacFar%2Fy66UVe4AsaEpyD9HQkdBCqg1YURgn2fjCPowEwviBahb0OoIUuBdv6Md8yK6qk5Rx5zDiTdAgXPYujyXTipeSAtE3pHfKTO5Ur8k0Dv%2F2eN7snxG%2BTp%2BFX%2FBt22ilGVcgy7WTL49GsiUcsynJRotCdiLWOv8e0XUc5ooCvrqBFVEUXN8C1jBy4sY%2Fu%2BbjEXDDJTcUK88DEkVMcgZdbOeBGKE6h1o9SwVYJqiuQwLcw1p1X4LZWETLqZoZk2EjvjfBUAmjR9i5gIi6G1NkWI9CoP7f%2BjFKwPKzsDVZdMgObW%2Fc4FPHPAjMK3Vv8kGOqUBatQBlgNK3KjQ58DMjHwT784%2FwH6HaOw9jccmwpW04%2BB83Zt%2FbAbS77Kn3qT8qEhN3b0ZziBA%2F2ksu0IH7sQkBBAXhtZbZ%2FLxNAcgUX7kmPj2GEMBvdk1M5NAmqc2wiQDOcz4ABYZcv8EKtTkeSCSGsj%2FsMim4hIxnN4U7fmFQslWYcnhYsHA3DzCPG4lLF%2Fi1mK9%2FCpbOzs5jEi7doLr2LpiBUIT&X-Amz-Signature=1758946e85cec496fe6aa27130a1dd73d336698ec29b5257ee347efb5e67792b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

