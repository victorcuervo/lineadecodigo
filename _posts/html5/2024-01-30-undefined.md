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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662M5KTLUQ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T001918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQCKtJb%2FvVg8qnmhhpf%2BWPGJnog1kflEWpEFMUC4cTcMxQIhAKf%2FQOBMDFEi7S3B5xrcG0w1FKmdATiLoS98PuKxBgWnKv8DCCEQABoMNjM3NDIzMTgzODA1IgxsEXJpGDbwvjcOFu0q3AO9dx%2B17I6kESS0Y805f%2F0pOdtvNU6o%2BYjQDPJHuB%2BXHS4x31nH%2FxnqqbZEiFBE3yxUDl3XpeeiqcO7UcJB47As29XchTHPtjQPQhdLlbBAm7OpejyyVu5D%2BTZaAZFjSxCQqzuNsD5QdT9FZ4bSyzasDUb38amb8ZEqv4Xh06Lsj0d6aNAitaw5xNqvBzMe0nA%2F6CPAay5DtKnyiIr8gsmEQQ6hcJA%2B8qQskVKrZLnd0TnP3QMo8abGj2XlWGitmr04jB84h3WWi2XNHEjY%2BicMoKwUn7g9gTQBPZyeaBq8FuLh2ubv0hpZwmdygHlmscMCtpXXKFdf7v%2F2PVsyHOKtksTOxlWYjW%2F1VWNkk55g%2BnPXgC7UmvSIAbh07dO%2F%2FU5bL%2BYBh4KFs7sv7SHbZotog27EOrRug9huQ8zrcHUok9RcLHLYYGU%2BASqt9m5YiQ9M1PEHqJ4t2B65okobWCquyEPj0QcbTR2TgctvEixtW8gh4LdSjDrMqLJvFz33v2ZUt3pD3lX1SJHbeCt%2BhWe%2B1rsqAspBSBqZYgAZbJZVNx1URFToCjieG1wi1Eh8TIFkwF6O1GpXcU1dXETRv%2FNmxQv6XTVX80zl7BvIBXbbEMHxcViADcluQgGuNzD%2B%2Fr3JBjqkAeREz3ogOb63NkvGqatkTFklgOAyJG%2B1myG%2F4vDQmbbkiN3EAmINQe%2FITuSj2%2BYAS288h8u04YVGZlfiZQysfVYpn5G4dVEb25XBLiUeNWlHsNkGFWd9L1EOraRacnhjqqY1lNQ1wfheYX4tAfi%2FAU28pnXwSFVUznuk%2FUT%2B%2Bqnj4dVHibqKF1KyDeyyuz2pKGBj6EPHanM76cxwCMH1y2L7Kd%2F0&X-Amz-Signature=95a959944f66a16263a3d82bf25b4fdfea46a765040177a04e34c5046eafba5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626O7CMLT%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T001918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIAx02rJcXVijnX5KNMTmAwGGYdQEb%2FKDOtAMonhnVUk2AiBuXii11uAcb8NsaZQKYsUKnDjiR%2FnzSYC0pPkZYhOy%2FCr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMMTPkwWJuILwy5CJjKtwDlVqmx3kuyO1qGn3oIEZSCr2Mk2LnZWWbfq6OvfzxkpeTc%2FeUugun1jE2OsHXdvU%2Bxf0WJZFH%2B2fKDDGIfKNpCVOm7bj1EEru4sAYv2kTzR%2BTytLQxxeBPkASVPt4YKkGDtu%2FY4stG9ea3xy4IZ4LAYNA0xbtLorNisTS%2Fl6H3Wv7cMuDsDpRHgm6B%2B9376U4Fil1L%2B23pU9rutKCE7Xg0rhmBKtTpdXToWfl%2FnbLB76Y7PNTNwRCRMlMHZHPAbc6cEmRjtZ%2F21y5sTgRbV2japuvMAU8kcKF%2F%2FysXvBZZpun9BqeMpKoIFjMRuTFVREM%2BxC5lUYQYvHN0tSj7jiIqU6rNB4KmfLfLjZTBusP57GdVEPJ0tBWOebDw9wq2Zcg5QDw6IyOTtngRx7kuhRQ9Kwq9xxf5qkZ7wjjcjDXL7IQqWDsbNO7ssMb%2F%2FfnfwKUHZa8%2BZV2DfxHW%2Fhuq8ieHRgBt8Y%2BbZFNCzvJUdCfl4JUKL50BHPvYnXJurtvIB7xiljU%2B%2BpE9vRa0pe%2BWCCoER3J8CysXNl%2B2Q1ss91%2Fvc%2Bx1t4cFZ%2F3Jl44%2BYxTMaBuaLUMfsIXuwqtNg6MxyQnlwQnCBqrnNci4hLp649nLcOTKFqC5d53jzm8sJswiv%2B9yQY6pgEuPFxJaxi5u3B9TvSfw3bRhMzdwWnYn6WdYIBWELl7da%2F2qEM40NplNqVSSF%2Bv4zdx1MEOnZ0eaUkMXYGuIRbU7aVTDK3U7gvCZmC3MqzBLDNcjK0bGu2F8n4skiLy1YNsVlm%2BBPZa%2F%2FvEblcPQBQVoa0XURel1%2Br%2Bw1A%2ByszXjoOdsjnsP0Gj0wDLtbnDlV5gYPy4Y2TohXac481uGxjckIJWE1Bl&X-Amz-Signature=01aa362cb13499c3efe6ea1862b334d80d8464fe427f96bf8be837bbaf9e1628&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

