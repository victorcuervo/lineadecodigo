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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JV3QQ6K%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T160320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQDwqQ60rQnNsvh7asXIXOb7ObuBmt7JMKKyNu2OnfHYMAIhAK5G85xRew67J5uRvWR1z9WX3StMR9qXTBqcY79zgbuDKv8DCDAQABoMNjM3NDIzMTgzODA1IgyZ6%2FBxoQvEsiBLw7sq3AMwn23xLTFeS8zFn8YJWWLPqMpC5PJfiE3OceldzUIhnpnBpiiQkl%2FkTGH%2FjYeoVZX1b%2FL3adyFD0%2BP0I7UXb1fuBr08qCPWNZqNF7Vocnk71HfPFai2m7aEENt%2Btk%2FlmSypefSqL5jgOdqA7MNWw2Qox4h1cnB4FUgJ%2F%2B5rp2Zu7ADMbzqt4MpTJSDvy8duBdOW7jQMMYbLJpiKI9SfDRWRW%2BSG23HAR5N8OratoQu8A1STprEQZmdPU4uW8a%2BRS4DU6MimpoiSqcZWz4fTiZ5C3DssLRMui9hwlFfoulsekq%2BBUbGHH2ZS2fVcHxXKcxNmznvCNJCWM9bPZ7yAxNiaj8WnQtu9lNslMuqYHpW27y6CjQfq1lTYlEXB5lLnwLVD7GjDhilJQqWWBFFBr0Ym2OPZ2p5bLj2BVIC7siaMbcvhh5XpdLBYoqZD9HG7xoJ2ZEbdVEQcPIMCrpo0oOli8dhZmnSHHgz7cbAx5La7T6jemDOXpiCzDG7bUqFBXxTbVjCfMy9nMCnc3lZqqVVKGAV7AKJbRNAcU0GZ96ICGk4OAM1TO%2FuqMFodHX9uOjLICBnbt1a6vEbH60NcRyiNU6z8DHeLWr3T1hnp4%2BeSHPDMlhdixn0gyl39DCFpcHJBjqkAaX2J%2BJ11AIzRWVVZw3wtAeBm1Y52lhbbzETFj76zg4ChjOaZy4JCPG9ixFK859P33pUmyYt7VMBo4ghJZl7kLSTZgzlSspRjEKpBrP9vsrKQhApLehktYukvyjUkBWMNXek%2FrT7PqdBnjdvQZEymx2AxFFgHsMoW7ONhsmdzXpUYr0IQ9MV0k1v9S9OQuL6OrmRsF7nAkXleh7KaH9mogwQ7NX1&X-Amz-Signature=e7ea6676cb1836217828534626fb10d973898c1965b2ff6139e8b6e3e208011b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5LB2UVH%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T160320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCIAHMA3JXhlF3B4GdYeLiuMHbfE7TueY%2FLuGbbZ9pVczIAiAi686%2BRZqeHsIyR6aoTuyJ89bxyE0HXbY%2FSCJQHodcoir%2FAwgwEAAaDDYzNzQyMzE4MzgwNSIM%2BGb1ykyMRfRvAPszKtwDFWb%2FyK8Sv399Fhe33IJac%2B6f7%2FSuxg1%2Bvpvanlu37rlZyMsAZFtXkV7j4eGwfqSjOQa%2Bm7JxEBT2gOgaxSls29sbzBz%2BDT07TKb25tzKi%2BEqSCjF4W0SWcCreZYDDRRmT5MjgmupzHcRJiloRTtXh%2FrGtpSW2UTGNvLPWEoOPGR0JMfznhctsvUe5fdvNoYk4Yhm8oLAjBsDUgTBp45%2FTKl4q%2Fu1ws9NtgEu%2FdqqchSRPX7NEzCwGBJHFPevkSlKxPAB8%2FqU86eWhdwXvmNiQVVA0x0ZAjlCmY0vWC7od2vpBM%2BooHemeG073wBSeiRigr6yG5jDy9xX6ezH1IfxltxXt3WUfrP4oY%2BhXkt7%2BT9yLvuileM%2B6UevOl%2FA4hkh%2FGpjjIVaKbodDLFVa2h1pKj%2BlP7WQJlgX5r2okPwH4W3ylycmtn8KDNU2%2BovKhxKbnBRXyH%2F0AwA3jg7iKFUGcHy020RPNhbDXn0iNgQUliNrNF3T2B%2BcsNOJZ0S57TKB9dP0vZ%2Fex9nGVAIJz8%2BW%2FbZMhKtfrEHAp%2FwmIIAe%2B6lAzUWqgT1XNCUfLoBoZyI%2Bw%2BhRpxHX3PR9vDG93Cy4qysSQby79t9flQCMNk1FHNUP8JHka3K2I9Z6HMw0KbByQY6pgFL7LQd05XN%2FZOV67bNzy5oP3KyVZpyIwdFTnZ3gsq829BB5cswzqSh4sX3TnNSnAOeMw3TpYSwyP7EB09Ev8Gv4IXM40uInSDS2Lj3HE5g%2FqSafAIiqBFej9WfgsF%2FeR13a3I6yShL82TlQMBRJ3hotC4ddVTve%2B7HiQFbTGANbZ6YhoiM4vcvIa2%2Bl8Y0OeHPrDYexw%2FKKYtgqmJUy5YSV%2BEv3%2Bc2&X-Amz-Signature=d20cf20ce72cc601dff45a46bc3a9c737391bea6316fc7f87f83ade78e922b06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

