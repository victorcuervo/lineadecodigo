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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623KPBW5H%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T074246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJGMEQCIGJoOhCQQs6NBVWUCCsM9CXeh5N8Sk03thU%2F3fQ0eGSbAiAA2FB5U6NtReWYxGZvj%2BIVX1NEi1nHNTAeN81NJOxmdyr%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIM3RQZh54FiBMkIB61KtwDFywVBK1rioYgtusuH1EjAE7EVrJ7kU%2F925FZ%2BUMSptxlnmxzrWlCqACITvW2yOweNcD1xI2KU7YFijec%2F64X5k9UPL94H09LW17iIH9%2FxtqAlIDPR9en0AsT9Dr8sAIDmNsV4y7b07Qc9mbtVW1Xy0VNlblWO04zwmSmYfooDjupT%2F1Z86qOBVmqqPdJg%2BF1hIQ84wtIeq%2BGqgpmbVFNVZetbcVIc8LEDYVM2cc0O6iD5RIybHqAITCCqYgG3jngkoaRL83%2BUGJeDRE23xf2trvPEbhOV3VOKcTjWMjGOQDYSeGbKl9k8L0tjZJyloZ8QN2Vi5NSvVwxRi5VoZm%2Fv8Oklaiu9JJoa0bHb4vaV5ZaGracG17U99M96HcBWDAbg1jTDH52zaVpPmzOLZNF6oUhTj5qEyCzc%2BZn3fzD%2FjkqhrALCJqMzZYFLkotAiK36Sfyxm3pkQ0B8qTTE7lNQ1bFKDNpFTSFkOftLK3s967nwZmAXujrLun9qrt78reCiHCwdL4kNaOMUl%2FM2849mPBWA2z87bjzfHyQj1%2BT%2Fojwvq2eEwTjIS2QBLqp9P32bLPp0i6bnvk5%2BR6OgDhFTj4MPff87oF2Zwd0A9AirJDToq8zfz43fozOEbcw3Lm%2FyQY6pgE1F7ljt7NADH1rFdmzjeBH%2FfG4dCCihJ8BV5gDEj5k0C%2B6AnRS65L2VxXqVdSgKwkMcS1SkYLW39jI0ZQOWU9m1107fQE3f4hjxc2mkX6A%2FIsU4SPH2LTCUIUGf3m%2BTRjVqMCWIfFzNa0%2Fm3AORAFO5gvCr5vpo5CVmwQMrHT2CblZSX4c9heP3OH0Tiq1FiEWhCwEwGxsiPcQY5UIrVah7fHum7I%2B&X-Amz-Signature=444ed28f10cc86a50c3ba308f554347c72aa0d1a67d91b8888f19852c180935c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIDUKKOJ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T074246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQCOWGizTZz0SW0EtUmPh5o5RhOsoq%2FllApIctZDM1mzmAIhAIoyWNJM1%2FXxWSxHJZy1b62lR0nKjg1MfQrXbJASV8niKv8DCCgQABoMNjM3NDIzMTgzODA1IgxQJ316mezwCZRvu10q3AM2alg3vZWPF%2FQ9MXEAgZgtEZYgq%2FsIActjymMI6cQajlXqM2%2FAL7zSw7lxBiCr5M28kcvtuxDETaJEMccomgVZX9tpldXlAQu5kC1YirA4DHEJ%2FEaOLRsQryC%2BKwyAAKLL5qjauX9pfwBLGZeLcUfIZxvTVIKOdXzyMQKM0LdS1oAOh%2Fri0PT7m3yRkMxlLCyY%2Bl98nfpEwkXqtbxTTsccfO7cXQuZTzccEdXJ1zeMesUwQ7rp8QifcxbmADDfcCriFFivrsjpeOQUcKBLNAJsH6ePB9SrY2Ubp%2FuGSaQI47jRvamnJu30FqTDRi09T9NuJv%2FuU3wUq6K%2F1vyq%2BR6MqYKqy%2B2kSwQE%2BO2umfIkNGL4F77ZWOmNM4gzV6oBRDXRe%2BucqANNDGeHwvEQtLQM7IJ3ialfRbdu4jl2cH%2FBkpsnbBtZiSomEfxwovQgY36k2%2FnqkxBowjGndqSOAHB04o9V%2F3CZPw9wTew6YFrmvM%2B2Jy6DLbgg4Jf9h0z3rJ5uhkc11jFz2NXcPKF8DFvfj6h%2B1is6JV0Qxi2XvGv7T9FmF%2BpmXjJPbEs4ocur%2B%2FGSZ41b%2BmYXZo5l3b0ys5jBvuGAF03OVhVg8XfiCr%2BupoNX%2Bw%2BIsdCQuZrMgjCxub%2FJBjqkAaHl8OHGZ2tEF3Cvj4yvxazAP6Nli4fABWoZ49PrIo3TFbC2uIcBnTUhmud3NyuGV39kSVzCMiYwZfRnwlmsuGW8%2Fs4zQNPxUFY%2FgKM5KgNqHQycZuD%2F9kE5i%2Bz4g6bhZZHe2Hba%2B10qkNOq6wvFBBhdWWj1ZF4j5ejB6mPkh%2Fx5Cd3IENQU2v9NyW90T31LDHfakavUPzokSKw8%2Ff5M6%2F%2BbXdyR&X-Amz-Signature=ec3c723191450a3e2276fc825987da54f19ac20dd46915ab8d51d7a05b46120d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

