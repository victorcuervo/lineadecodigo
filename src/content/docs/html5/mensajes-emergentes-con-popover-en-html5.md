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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBTHFTMR%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T053641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCa%2Fxv9Y26jZxSPOw%2Fdn2nzuZ2zjHY1RI1umQ%2FtyV2OhwIhAMUt3tieDui5q8XSnjhjkmMlVgZV3kl%2B3rdIaUDKoIWGKv8DCG8QABoMNjM3NDIzMTgzODA1IgyQR8zVl2jz2H%2BE5xQq3AN5NaseMuaqljsYBXTvogWhjj03DAhStTBi58HWffMR9obY6XfVAlbSt8%2BtJ7Q%2BeAzSbDoQUWz%2BayEA6ZPF7lrmNi35s%2F4fzfT1m%2BgrTDXG%2FpfSsSXGzaINWfi9huMRGQ3BckFaYzGOlpmrPPpNP1lg6O8DgTd%2FOe6NCLQz1dNGk2zFdYVLM%2FYfqbGUn4kBWbjJt3xW%2B3vYjHbzw%2BdpfkO6jdRQOZutWpo7uiRA1dw1eYy%2FBQDVvppM7oydvNPGB9hyYDS4YjJE2H1H9p4JPx4WFWEcgkWRBcpyHY4stjASz2LTaM2xGbtp362jtLDcdKriH53o1r2%2F58kkTMe0qURv1oohTYuSMaTgBa4uyfsYd7gDNAFmiagf80iNeWyPqhWkQowuk0bjhAqQXdr5Osrz4AD6H1n1uG6AoIzt8zj2Ii2BgRJCIZqo0gzOca%2Bs7Ggw0A5d28lJgz9yz2YZapAuBFxpfEm3XHxc37DM1Nl%2BT8rPkxBO7cfgcIoIF5z0usdvXrGeHhLs1c85oR0XHk1SKenH23EfgbzQdugGZ6YN8lQGjwFj6duZmXLdKcNkHKvQvuLtKT%2FwwD7IIt7TAObh0ji%2FuWeTVKuxXWaRcB0YL%2BOY8PtB5kA8WUACNzCF%2Fc7JBjqkAfB7BGWRY4LFA%2FHWD%2BfsJnBjxYXHwE%2FqfnasWcjAAPjPXl%2BdE34qNh0izMC0TaVFz%2B12oNxqcqJ7F7YI8KVkE%2BCLchblv97KITSdj52k4cF%2BDBEH4brBp5V4i2W0YCdi26ON3Mdo57FeOUp%2FrdIUCoohzhwlJUoPmEs8%2F9QCjjNWK0C%2BXy3%2BgvXMiCZgHHvI2%2Fn7boCcYDpZ7%2FDbeIZ91gWdoCra&X-Amz-Signature=f1d28e34e36fd8cb46461f76521c5cb0a049e1622e16bd8dbbe1f49f1cabe492&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TSQ3NII%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T053640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBC9HNXxTIaCSL5M8aIhrc3MjWOkVFx1ytlhqiCN%2BYGcAiEAwFgzg2ccAdX%2F3oDPBvra84oFAoDRqiPRtNDQEZJtSXYq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDO2jzIa8wF5Bm2oPYSrcA79Tls6TYTk36OIP3Iqr0sC5%2BDOXD0hWw55jQH3RzG%2FJ4SqeM5CkVToIosmysqAa6Ln%2BS9iVdgaLAF0MvCqpCUXMmjFFOaQTnsALLFrS2ufpzB694XitihfgT2%2Bgm8g1LERHoA8uh42UMrE1JkaDlrLRL5K3OAN4bbGaNeZwbrEQn0G%2BmygX0IgGfQsbehagC9esrG0pRNXLJCjChEcPkL%2FJWBnYqosU7f2rPqikcffcFnlrI3UyGAO4H%2FysUcjyVgUynNBge%2FikFY7vDjt3vybERphdsYjpEA%2BIvIlS%2BVy3MUtcPs8PXOUIzaVGx4oXcCXRtPxvJfN8eP2xpAFF2uwbOFfh7y07QpBuZ358c3SFJvTDXVt%2FKsRHgNMesn2rmZ3o8ePjzHlPyfUqwlc30G9VVep8f6v0fWzMPzgusIsdaFFUE%2BStrCHJ8nR1ukMayB5iCQGkjJfIzOW7jo4J%2Bm6J5bpSsxcAQDKaXY70P7RRAQBscpb39cwdhEq5DkjH0VA990r1Tizrz51FcfnwPBE82GO5UHIcxzhN7EyZUN5MlvMWndX40O35YNw%2BBviThLE%2F8nyrlpw5CN2VW7hcJ0jQROMMNaq%2BMwZU3aaO2eLTubL4YkNv6ox4ZhwWMOj8zskGOqUB7PuQp4ZwRazo7xyuqL%2FQ4ItaDym5obWPx0hE3DUpk7U9n45JTlxbljmB5ElF2EuAhiqAHtVfa%2FAb%2BEI1TavNkujTCuQaZExwG4TxbBAsH2m8VtA1nB047UrNUcjrnlS1Qii5L%2F7vYPGO7ByVM1vk41IjlhkHjnjqRMvxKcANPr5NJ6gTQvjwm3JuyEoCP%2BgEJZ%2BkxASVWF3Aw0wZabz6EbmGPkjw&X-Amz-Signature=b6937416526d2bd37708a98451e5bd7f793aedc979d3dd7d33b36d03f171ee07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

