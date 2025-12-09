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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663R2MAS4S%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T084730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuwqSmHj4bUFG12s1b8spAqaUEU0NzxaINLxfAwl85dAIhANowR2sgHfgXYQ7qqiu8aedWysjEjGz6kb9DajKwHAbtKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyJDoDTWRznpFrA%2FO8q3ANOdQViFzLKl37p8%2BmBnFN6lNM1AhFNSI2ExciZQnCo%2FfpZb2JGzGJCyfJF5HlRMcFFiZ6UPOjGy36jx88pPfBvgZaqnaUMc%2Frd2WsKmMRJCNrhXt7uUB4cRk%2BzqTtCNNfEetmp%2BjDFTN4SwdVgK6GZO%2FGqPlJvq7VA88R9Nemu1W%2BM9yYhB4%2Bz%2BywMwYlps%2FhFl2pDv3tu58YN0zAK1MMJEuCZH6%2FnBCwiBU%2FspQdLrIV7kzkJrpn9EID2LjaUdakpT71J5roCL3U4B1JcrmfUo6WUBItr2hz2t6MasTubInjvJMCWxzT0R8YOzGIVK%2FLhFHxymvjEFIIHNzAz%2Foj7nIX8rTNjzN%2FmZqCEs6jqiTQXQKCltfXcmlgp%2BGOdrJitFoz%2BFcmKB6XK9cq8sv75FPMXXQraeuyZzY596KBImZKn01r4txiQhySflXa3nTzH8oF7Ms2fhS%2FVlxCXn8CZPP7101fDgHM0EIcwvcYLRoah2ViiCHCFG%2F6T6L5gPmk5kX9xp4fVOqa3UBHG5RI4IFTQIltzsNFPp6UZPCTlGvcuCgBANw4RkEgejhbmN8UjFziaVRGDXH0C20LyDrbAfY8qB6dixvYwJCNDlqY5wQaXzCeT1NFF2OjINDCspN%2FJBjqkAds3kKWVQazp4xQ5U74R1gAaTKZBDW62bbiavffzf%2F1fOXKUXHDrAM367yByyRdfyop8h8RZxXG6sXRx8vxO3Vy22VYg2M922wgk3RMKIlI%2FTylPCtrywWlSYXpsOoXgxJV2GPHMeS4qfOgstFBFlqz5VO49COsT5ZJAU8t6KboXD9O7h9cibt2HcPyD6p1cYs0z13RXqzgn0VcaBaQiDYrw%2FOCF&X-Amz-Signature=c1d2fd1ef8e1e477204b7080c72bb7168b7cfe6c3bb0cf5c9fdab9d073c272c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SH2NUAG%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T084729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXyVVyOWHCB6L61dR5FgfZyZbfM4JBjxcN21lrMwiawwIhAMyY1OaB2s76tuMSClO8Rklx%2F9i6ELR82STpHKpG%2B8vBKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxERrSz0dxpQQMGR0Eq3ANvF1oKGYaYuFQe%2FMC9Bv1fwiz7hr%2FCsGr4tIVOH3cdW0baE%2BMbA7xJdikBou32mS5DHRuiGH8DUVZ9nhRTSxNpXGJvlBFkRoJYQE4Z4UY0QatK4n1dpcfOsUgaEH%2BQbbeBaRlJegKJcaDXb6qfOoNiuZWJecBv2E%2BuD%2FhIn0UMEgsVpnj3lmcqthf1ZE%2BLhtolB1ZySNnIq2bquqfUufS7HNrOMb1VxGzrQ5DDFANdLD8NoNtFcFc6qc5g7CcFMxcKzOsViFEwTNMvuVafwRMsNzE9J5y0mhvT8n324KWukRPX2VWHdJbMMP7QRt2eww9JZnSU4QhI7iMMuFD1RWnfB9OMLfqYyKZ8UpCdqQQNVWIGST9Ai4PpQPwGDt%2BCD1iLyAEKq9uUxLjUYt1TX%2FptSp4BYEgiYJ%2FiRn2wH7BK1glEgDUDikMC5oxWsBhwA%2Fp9%2Fa7Tl5%2BnkO9u35oHf8dwwnzihR3l41V2UEiFPWqhr2mg9fuOh1WP99cJ%2FNPhBghCg9aOCaOl4haMGILCQQoS48YVFy0%2BKqWxebd%2Fp1bXx3KEt6lIA0GxUk49ZsT1%2BZTfHwWr5mTnOaGS5iklkhSwRvydRc3kY1kYxxkuEyuxiDMexw3SljhmGBR8YDDRpN%2FJBjqkAV9ympwB2kK0dww%2Bu2w%2FbdETa5fWclBQewded8h%2FrhL9y8q6qUKlRcrOy30ltWj4lewc6xP6jmDgiTz7YgxzvCh1tVmkNcHuRfPHAbRLLime0aAkmFYjHSfYCDnvKHB0l6j3pDUIS2mgahUHmcXv5fOc5YsI2Un8PYjMzl2sWskibtxZx%2FqkTLILYUETseBk05qSxHVk%2Frj7XsFc%2Fhoz7O5cwN0p&X-Amz-Signature=98ffa890132581609ef83ad007ea9b193190bd65903edf986ffb9ad5fb65b39b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

