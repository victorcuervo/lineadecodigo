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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WB234ACM%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T090920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQDJLvLCNpeqMuhWBDlkblg6vmXpZnKn9e6LXB%2Bo7ojUhgIga75Pp2jwXBgzfEpE%2BbVAHe%2F%2B%2FscJeUMdAKLOCZyYPVUq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDGNh%2FJ3CfXw0GxD8tSrcA7Q0nhptL7dsyjMFywV7WDfC49AMrsEeuW2npeE4U4o2hXQTE7zYC6NvhYSayRYTvsvlPs%2Fuv7PM%2FU6UCF7O7%2BNhYPouyDJvr%2FVoH%2B18qdJVPNLUv6%2BN6tS4ouqla3wv5EvSr2BSdalZOQ%2B8zOwSUmxFMofJTl46p3v2qyNX4hYRN7iYyJrYjL0oObCGEcbPi2VfjHbTtbjnLVJ7Y%2BCe%2BFwKn4Y84coLQFyheT3X2VHjsBxQGPXfG7PXjp5kDS%2FRZ4g8i8BWsxrXuJEU0s6ijSGcjTmhUDUD7wyuKue8XeYJ3EGnVaFYC76TwPIKnoa7C%2B6o6zRrnSQO92GUrS6IQ00NAIrHbaOgtSktbYJ9VA%2BPzCNcJQouLxS1EaQ0CnSIcNiEH1%2BsxpHNAgvrkVp9doRxKwEJLeaKX9TzmzBqnFffg6E5ldAehFJRw9cGoVmm8ceo%2B6ZvxFu4ZGx%2FqjohtQI66iPKS02NffwZLF9I%2BeQnHfOYvf6NIGy62mJ2PLyqzPrXL8QTNJBQ%2FtIv6A5Iq3uQnyojWwFTrJxbPzG3IR6MlsZdD3DMil1yom4E2JWkNuXjmodupwM9owuCBBqYjjTziZeFKG7CzYy8FoV%2Ba4jwk4rGEOb15nEFmr75MMn1v8kGOqUBcYwDhePKvbEToeK8zU7l0UiFTJyv3H0nM73PTTx01WKz4cZ4mZKMsSEXudzSrW2lC48xqRdPyOzAMkKH%2BFJfydEcSjiYohDRuzVRtwobGHK%2BYGT%2FKS%2Fd47DTJfYz5NwBJJzpFA8KQXDRG1OrVPKOOkZ9%2Bl1qEb42qbk%2FSCp7GYzXYGen8vvrRSlT%2B5C0iysv0fav183Tu5VwJXDO7LuQYBUNMjTK&X-Amz-Signature=b99446fbd3eb377e23f19b7d49b62e440dee2de5b0f5feefacfe71cc4e372a6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6EKWZ4H%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T090920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIAnsZ%2BYPGaLgnMzKewT5MAxHlEhKcA7XJGpmYuMRO25MAiB%2FGRszHuLSothAWZnj4ZQAIug1DbQO3QKSrHTFCHViWyr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMWyxsmlqMQZTUTn%2BDKtwDMv3kj4uA2PVyp5ZogRJqpc1kBFPBats%2FvwU5wraH0jUJuttXsKAS%2FXprVNRl6QLokvbGkffXnNtoMHdFQt2sR7ixKHB53QVCYmMwn4rD%2FyfH8QZCBZAAyRPU%2FEpAXIe8mRKPhMHpNE5wUW7LHmgse3%2FsX4TX%2FL%2B%2FpYiFC476yPcM4QBzCV2EJQaZs5DwhgMF2PEOMm7HIz1%2B6GfNPnmAk%2FfvWmxXSI6M9E5gw%2BHTdB0vUS933deqheoA%2ByZdZ2FeK4Kii3bBX9%2F%2BTkuQzXgIkSRy2UY1tzaDb3CiIgGfzllmvkRtzXg2TvKr%2FEN6zy%2FGPcRs13Qx2En3H7VjWqXwdGkcHHJMo7h8AUl4k9bchwjx9iVePVcrLp85KP9l2UjVc6vZFtfCx7byN5cg0SU0Zvbq8v2%2BQixYpgyDwlg3EASeIW%2Ba%2BakNSRaaK%2FnSKquQOeLrwE1AeM01yTSVOKEBx7ZvHWTzyZ6x7a2mNeLo%2FHmV5FlCFe0NZFZnCbDcRlxPQX4DtOaDCT0irDR0q795iKvrHpzqzPrE%2FqmKp5QFUndge35iG%2BM8oL6wuEZOMKsjJsP4i2eQ9TNKHlXz%2BuQRojReFLbcQ%2BoHjAyCglugm3wZCUdtE%2F473QC%2FCzEw9Pa%2FyQY6pgFQEXb%2FxXLlvSl3ueQMJnwbHPWFRLm4rcmJsEwNovbjB12FdCFebtDAkC03%2BFODjdZJ%2B7ke3qZD10LTPREnHxcMYaoUtNtSKC1G6hqXgKT7gcQQzlsSiK%2Fj3NViPoGwtJGWJcpKN4MrFoHEc7mkSNHvwNQ%2F7Ch4T1Ez3A2M%2Bv4915F9fGrD8hTvBUBShQZbQ5GodbQpW6dT1ok908RtrVR7HmTzOgql&X-Amz-Signature=ba63f9c405c4d3eb1b817462f8005b96e24f84edcbc7d563c5d96e6063db7dee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

