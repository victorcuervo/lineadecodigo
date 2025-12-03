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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RB2CZGLN%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T090604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQDtZ5qPE0b%2BIkh7eox3yCcWzBuogIyz0ddB2efs8KYhgwIhAPsCMmlEXn1u%2FBPFLN7ub%2FlaHEiFDuhCjQZ1B7rE1dK3Kv8DCCoQABoMNjM3NDIzMTgzODA1Igwn4IyruJ%2BRkwilVOEq3AMMovhVzUivKaQ7pok1VyIXwnDChoyspRVPZzA9iz7Bs36so2fP4KpFUHe5c0yD5hCBxwJs%2Fr6RvuKBo3pSPfqYLiOjs6KqLCdmz2BbWHgiR3TRMUr16cJS%2B0%2Ft2w%2B2ceQtT%2FuWWEGweHTiHuW%2BhLnuOfBLqhb0%2BpdKRmGv4buA3uTSe9RDB1qG8xCWM2xT%2BZoPun9bVM4zKIN%2BamdlgJpQ%2FVN%2BS1Y4rb3Iq6J5jAQMA6lgxGB9YKQUJyY0SwT6Y9pKia48lWEd1VZc%2BBPY2vqi2xl3XFmyws%2BpAc67EXbZ8evVFRJD9rSRVoR%2BoTGk4fHNmq014FZjLBrxipySmaP7zSZpwMEVBVE%2FKwo1pBUGCBJmm8mMuTUr468pAVKnZI6sL3o8roa8nc19215Lf4%2B3WPITPtYFNm%2FaVogeUX3lAE01GZ490lzk0osF9Ys7Kq6SLeJIDJs6DlPCsgaIg1lZLAyHx9tDGUqDYhmVrzaloWWcm9vn7XqUzOrs3MICGJMMQhcziaKjAO2KDJJ5XEGtcj4ZzGkFP3fksZjPnOcUrHc3iFn0PI7%2FiX9lDxiGGiG7wGQgqAmSPIQ7zeNAQv9Qn4JleoRXErX%2BwNmg06SNS5YwsKhnL7nbGqy4aDCx9r%2FJBjqkAYVxLVGxT88dm%2BcadsMgykECdrEIUapx0R5%2BhU2ePsKed7pTyJx9WHHNbxB2%2BueDMiUxWtVNHleEPYdO8pP77iTFZYTNvblHp%2BAP3I9Pv8CxmDq%2BxpWwONGNlhvCTHKS6OCW0BGeU580z0mLFUn8XXT58mx6aSrVCJ%2BM4cg4SFKqiSkE8wq1k3yavMRAP8S8RsRS6uszPfQYo1mkEe6QCJ7tdIiy&X-Amz-Signature=7f4b8c236e6612b9e57cb068c5c830838de0a5fdbd80be620cf464259aa14810&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHYDWNZ4%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T090604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIDnlU%2B6qEZVkFRc22hVRg2eG2R9B%2FK%2FXzOQGWb7bwO%2BeAiAxrNHy7L9%2FVtd29FoRKyOI9wU304sg%2FZMjws1wkK%2Fu5Sr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMix6zwGo%2FUfctV6mhKtwDF5NSkKs%2BFTJGiaLEoK4ePVHgg4%2B37Ne%2Baz4ZIGsayF6KRCT4vgm1CQxTubXVb5c2F%2BkfonOQfdffQD6BWwX6raJEWVAG4fbxYIiLh82qnBvtU6tOnoOBUei0RskPcevfds8cA1xb0pc1eXGuh63jSLdf0%2Fy%2Fra%2BoPZn1INOV1MtOTsUVFxlzhl%2Besgcee%2B6yLAxK1rycVRnyXdhNUPcZ6odSI9uNB0CUh80CwQLka9hTl8fMKzvgqGOuRtvrtbAUg6qBh261Xtpj2IjpG03QEPOjDAk0Yx5r0t%2F7R%2B1sS3BXEn4jO%2Bg3Yh9B%2Ft%2Fa0EciDVD9LeQBMBZwlBFAlOFR%2FnSNUHEHF60CVNKgHnuosU%2Be8sIsMdprVWb8%2BA2eQvBLyBZY%2BaNngUcoSmkjHpqr4LFJM6BM1wefHUusQjH0JfKg2HefarGc1wr%2FroG3yeiu%2Bd1OQPhdSwqlAPlnb7CKa1J9mXWYpkydjnGmIWHt1pJfoX8POGUA4UspyNvyuXSYcoYmYly8hP3ENUjwbynAftEon3c75nZ3zWqJ7tsREWzsZ6dST9MLy3PUfp4%2B2pEvfOtWTgu9hbSqxsMtkGakMvRT4GYrgHN1wf0C6kKA48HwFvqXxKhmUeDKNx4w0vW%2FyQY6pgGydbPuqtmwKqevfL8OratXD%2BGvlTqgP79ZfaRwGMCGMP30bUfBFHAIAFhVAeg2yjNLGl1D4QezQhVGfqXVK4TbKl5GLnAq3xc1bOxo0oxErX80Xzbg2pHMXbvtxwpydOhpQwUD76EWxtffxrNNcajQzBXucNibXxZO2qiZhmwLz99yjtexMo3V%2BwWCqPgwQNxIy0ZJLtNlHqEZNILta9d%2FHRtRfoEP&X-Amz-Signature=5c41d5175a83a7e2bf49e8666671c7a9812122312eca3f4a36051b84ff8d2786&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

