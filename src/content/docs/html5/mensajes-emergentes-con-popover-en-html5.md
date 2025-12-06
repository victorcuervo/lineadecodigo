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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663W677SSK%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T075211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDai4G15w3J9T65HnBOyE3W0tsnwi%2B6Wl8%2B9tofNufadgIhALn%2ByXfVN1r5kjKs%2BcdvS03tqheS9szKmGgBNPaw8RGBKv8DCHEQABoMNjM3NDIzMTgzODA1Igx8MGxOzk%2FDorB2Ygkq3AOKsGX4x%2BjQquHKdNW0VkoxoalX8mf6%2FJ7848eFeMUzYI8BD1ISt0aNSYYs1j%2F3zPvGE%2FU%2BJmLughUefxrq%2Bzb5UuPrXgslmAbPOxqTVFB1KAxAGbTrbSiYVLUdMFYo2c3tJGP%2B6SWWBDjuiGfnXSxR46G5Zyb4uZXGfaQxWrXPLYd8DUficfIHyq4w7MqYbOtGaAFa9YR3CabY1zwy1qCxs0nwoSR8bEHFOWSj0nSn4sQpygBGmQXXjrCj2%2BzIVj9SXNW6poF2V906l6CmArFAUlCHnfdBVfkahT9XZ7du%2FCDvTuM%2FiXxdP21mAvBqyOY1HOtNQQnsVPip0LciDRXOWW4xSDmyoFvHkvjNwNeE%2FwEiQ5nvTaTTeT5Y7ACYKWodcoyxMdkRhAyEnS9cxPARrXLyaIMlSVADP1Bs6a1VSKt%2FPILuw9CNC75tDrQ%2FFLp3Wxcza1KMMICZNL4sk%2BMAfLlslCon9RaFhCmzxgCLISQCA1RfhrAo%2FWgrNE8PWd2AaMCbTZlXTfMA4CW2tiZOV1nSGeM9ZMF9w2y%2Fm6fQvgugfCvSQTXOmZqv12ugX5%2Blc%2FravS807iiDiREJN9MlEdhC7LOBkhzqMAHwyI0%2FHvLvPpOtEk5GLoGbWDDhvM%2FJBjqkAS%2FS0paLp0W%2BzuuA4LmO2QYM%2BBI5xO9wOZC5OXzjzEsqU7Sy3YdlY62nmXvN8e7SZRnz8D%2BKWwNx%2F8TA6L%2FFnMeo6%2FhjGD1YEAbKKSr5FmKif0%2Fn18qO7sNqQlu6unF8D3Ed9zF0Zsr7eIzAPWVZsjAWw22b%2FoCyRyu59eYCi0HLWMhx82QsLzKh5JwHlHxzFATQa0l%2Fuh11MohaigVAXAyPeNFJ&X-Amz-Signature=a5890c4744f213c40c02399a0dc2d17ce714ecdff6aab257ec44a0e50f92c300&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6VZVXAW%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T075211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXeH4PEpnXZl3p2jOJn%2F9MPeKSeoIHp%2F6q7ztmV71zwwIhAIJnlGejWQOAv55Q08%2FpWGWQVkbVLpeFm9bamdtRckbRKv8DCHEQABoMNjM3NDIzMTgzODA1IgzO%2B4vIwSvbmAeJLugq3APC8oNQhj1xT7ICmYAeEC%2F0k5THlw26V8G4yi1prG0tBPo96Dlqcmqn9CC0ER3M1Sj1%2BiYpfxEtajRCDUhPsM5kL29%2BXSsZx2geJ%2FPeJ7I%2FjZ47QD2Y%2BWBxuWvdZpC9WpIX8pF9YtpDSVI%2Bu3PHWO99%2BlA%2Fn8ZquqgRUMAZV4jham%2Feq1r%2BLBKCDXLb2Nb0XJ8WpolKSyfQxWJGw36bj9ZkrS5ADl3gPm7jWVUEARNG9DL9%2BOLtLdDiPK2pRckkrnwndIpSC7%2FFOMTQTA%2FP%2BQLH%2BsxbvU%2Fj2ImOnBZbF42YxFypp6lRUxJNL4bExtcJnlOLATc%2BuGK3c6axKqpfuhrXdO4hgefyD8iU%2FYMAfSBHvTjxJ3QD%2Fnd%2BcN0LauxYJOG6gwYMHPfrSgvdEf8KMNqyeq%2BNo4rHSFdS9%2F%2F9vaaiAhK%2BvkG3G1vxGZFlmobM1eduDWPQbz68naqycOcnHBhetzruaVcVTTrVadKOuxVxPruPpqTey%2Bs1VTLIi6572%2FZdu8iATXaoThVPPCH2Zlbp7%2B3kC38LuIEAJv6%2BJyVlBYcZWqfY7qjqRHr%2F%2BTaALFBXNQejj8u43bjLgVzUW%2Bo8zIO4J8I1oeMPDtXeOkap3bxruJwPoV%2Fpu9fCYDCnvM%2FJBjqkAUCKFZIGd0UCUB1Jc2pB2pz14ObBN8qdGnL7ecF08Q2NJVsFiYFPXq%2BlFPiR%2BKyyGUT1FbE1AmsdcfpQ3TZ2PyKYspu24C2L%2BxU%2Bpi4WXojOHikoOzkbAOgTWO4EwsrdbYju6JDtP8AHT4MKgaJsb0D9QINdImcmZ5hfF7Okw2B0bjtxy4ZdJkxtC9K1X5DDXFqbH71z3GTUX%2BIzy5qvDMLuZoB9&X-Amz-Signature=b3ee1f0969c40072796af5f08c54d0c903da2812a42e94b65f4fc27f56d95a3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

