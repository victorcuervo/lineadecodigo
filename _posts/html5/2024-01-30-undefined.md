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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Y2QG4UF%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T072201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIGI9mIxfhR3C2yeoziVLfvQSdjh90RMSKamo%2BCKQfWPIAiEA6PzVsY%2BNgc7XlO5Ae0HRMwf199IbzH8slCn8kja%2FFMAq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDO%2BRGETfrnx%2FZ9xcXCrcA5S211EPGagYkJKe6ArHC1noof94DWnK3NCSa%2Bthg7Aj2LGPXfYaw1OVxpfFtZh3mhtn5MWkb5aLSExKMhw7F4tSaZtuvO2exqu54RfyVyW%2BczxNR01fE4zJ4EDvAlbjf8QDFNFuLTn2H28RsrgG2z67f9Ke358f73LN5chHd6uF7OF%2FjOZesq30Dfsa0bxsZrTZu3znMygoHRu2AQVjhKSDrGyQuFIk8N%2F0Ycha8k2b7OXhXyKXx%2FkPtJoESB79AAWV7hR5CFdsun7Xo%2F%2BwDWChOJaNgVv2vLBD%2BqJedT%2Bo6zTsPE5EyqhFErlE7jSC%2FJRQbYed8jTlgeMw%2FOc0BuigJ8j4YTGvMZXfyQYvI8SSB0cZ%2Btvya52oew5KMNjyDpjhVYtYXFzCQL3HcO43kUvaEsV6xHhfYoHYcvjKL%2FwqShGjXwdVh%2FpjVuV1HZE6Cc9eP9dZwMfWM4kAyc1h2gmtRep%2BPE3cFX5dqRJ71d880xn6qVTu78rMrkx4G8JUkjVqKkkDfgd0tdQaqIcsqmJnTf5lCDaSuVkA9NF7d6ne4S7JoUK0dO%2B1HyIlCYPzK41m5oQh0ShZIIvlehghyBLQlkf7MHC2nkIidz5VJX4zcEsiN%2Bc5UdSy4QwDMKG6v8kGOqUBbpZ0vSkmiNIX6a6Bno9JZmaZWVOFu7kRbpt7dWd%2B%2BqyknCh%2FErNADzkCbwIATa1PfIn00R47v4bVFeXUsxuIgn9eW6fA9hmXZt6aVtBA4j9csa7kPMAh%2BvMRQkx9vCfiNiJz9c9M4YJE2%2FWvU8T%2BOaLyUpKkmFHi7pI1FzoelbNpcJRTF4r6PtlNEc%2Bnys%2FuYj5wCXeS3m3hFbM%2B6AKMblpYiITX&X-Amz-Signature=9b016486423c2318e21087f3dc664be3a4a43b54ca21affeeb3dfb827882906e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMU5UIQ6%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T072200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJGMEQCIGhfpRxh0NiLbKodcHudVbf6B9i8%2FVLwsi6BlaIv4c6SAiAllQ26Go1FVdNapHT150dC0NNbjy6val8S1MGC3gTCmir%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIM8Hfc3IxmrASP4qsfKtwDBPghepQLiolFaASg0Yt1BKbWd8iqHH0Bml9omkxyQVaYojKHwhQcTIyr7q93MVKsdhHoURJdBzSZ05PnJSRH37zYzJjy5qpVb4p%2FbwgQYmLK04jtHYav5EowGzclMjz3gaPEaTMSSPFtJvnvpoucGOmsl16KrnaiKI9hGtET4Sl7GU3jFhWG1pFrNXLxHECLRPKsamkoWURYLo18hqYSmxgiwnLXyy7Rbdb4%2BAE6uZF2ranubaAA9zr0GMJ%2F8qdAL5M6kn%2FDkfaWvpJv9%2BVCjHKKf9Ii43wpSUgI%2BXkxfXMGaO8AT2EsYWZwtIMdBpJJpQvPlotYAwrht%2Bz046dSpdrhpQzF7%2BIFt5Y96R4TyoJLvey1T6yczspqJSa2ysFsCY%2FPWJ1m%2BxErEdpRxOItn75IiL3Hu%2FF9uxxGWd9ol9XstjwHBStalg8wXDFKRZVuFybubKT5D7fVz3PUalfagkoOt1riYmGWHwzIwUyIg0zqSTT6mtjpzjpYZq1p7CQl36P6sYxsaYxVqQjLPhDCW3TfbVIxhKg7VACvDkhslDKsHV6Iojyu8rKNjHyvrNSp61CoDOm8MkwBLDfYbx2%2BF%2FCBHXJp7ZLIayoHUzPcGE86%2BWAw%2BksJfV3TRZgw1Lm%2FyQY6pgHf0Usg5aTqJcEVyVvvFQ3fHUfs54sTw0fJ5pxHT9o0LVrUpwArpNr9xmFdLpkp7KcEgzcwr6qVibSEKC2UNNe%2BjDVoGrnFmJygGmk82sag778H7wG8WXHQwkMamPappZom7SyWqHwYEU5WgOReNxGab%2FZZwQe9KgTOXzQh3mWaMSbSj%2By3VxrOZ2Hg04261QbgPEZO%2F15GY2AlzI5hUcOuih0oLdhv&X-Amz-Signature=29948041f9f9b2a24b05b07464647955b960352773c5f778ed71bd44cd02bd01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

