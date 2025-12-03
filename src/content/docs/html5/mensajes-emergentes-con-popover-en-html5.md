---
title: Mensajes emergentes con popover en HTML5
description: "Uso del atributo popover para poder generar mensajes emergentes con popover en HTML5 en los que se pueda incluir cualquier contenido."
lastupdates: 2024-01-30
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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667N6RXKUK%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T212217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQCEbVChQduJtrFvanE%2BQSWZET4iTGhqHqYTekfTKYBi1AIhAJvs%2FBo%2B5f%2F7hWly8kIO4ja9HZA6fe6%2B6LYM8iSxEyCSKv8DCDYQABoMNjM3NDIzMTgzODA1IgzEf7Ln7B2uX7xEjhEq3AP%2BiVDEIYHrW4j5NrWgjdd0E182c%2FNncXK3Bjr7orbaJBrmrLXZSZd9BXFNj1A1tm6Tpd3PIJHV3T8yG5E5FAKEDQVh8%2BfYBVwfkUxrHlfVHTVFyVOZ3PJ9jvWZw4W1j6AIRm54zJPEzytvOVpcV7uaCY3os16iDPrA%2FjszlWCu6tesBZ6Alky4V4DN8g%2Bfco2tegkZsw1wFfY5SoOm03J2ksDEi571CzQqgC5TKNPj2iH128clJsqj1gMxxxmCXGv1%2FFJ9GoPDcF4EkTkjsHoQrVrHY4FQIo3%2FFjBJ%2Fi3H4tfvBeN7%2BFJwuHhMpW%2FF8uUxNuzet2wO90BSzQ%2BgyBtBJwwVNbJxjuM%2BvxWB494ImSkQZ4v8deDyTmSMc%2FGMNrHzvy9pQLuqhKlE3wx4Z%2FOXTgPWIqfscH8mtFrGf2S6UG1QDR7ufoUI9Tez7WRHwcsBZCWaFG93uYJsYohKznIl8bcacL5czRxk%2FOOtVL7%2FApDjrTHL2MvzCKmfqfdM2USaoeNi%2Bi9J0zY0bJZazerzqzd6JM9Eje9JMzKJXWA%2B089XKUNPJ8GqlMiqSlmgM4YfKln30eHikstTPwdN2ahB8GAvtZE%2FyEz4V2RuhWTLri6RjWE2KJmBBRHnpTC%2BvcLJBjqkAcD%2FuZotlcmcjeKbmEVaOqsxDZXf6xP0oxmc2VBDYvuxIU%2FNRiNAtnaYzNEyt5mXYUng02TZVkLeelBUz4UQOS%2FnpzA5o1HqGYDY6xL9CNAyjfBA8R3rebQN%2ByqIBZGXYSn6r6L8AKa4yywWEZTZOHbNZRRYIEuO2%2B133oo1h8npCZ3klSpzyLoc45myAwkWLGLbVUQ5h%2FUKxPoIqVvQLPYR%2BVSD&X-Amz-Signature=961f3aa5fcc6656d5a1835c96c5110c964fcefe3220db984d384ab4bb20627ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664O7M4TGK%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T212217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCICt0yrcmG0LIwD%2FE%2BMywoRekxHlzn1VpA69sjkgQEYsUAiBGhb3QChXLi0mfFvlAkYR77kxS6qSNEE0E0NKbHJ3FjCr%2FAwg2EAAaDDYzNzQyMzE4MzgwNSIMdmP12SLTb1JMpxSaKtwDo8OkmlyhrXiqEuUm8vda4365LnwCbdtMjaEVs%2BB3fjY8J74s2MinGYImlA3mFFrqbpadiqlJBS4X6QOcqKE6cQanz2Q3DeSdwzh35xSWbJJh6pd7bpvKJZgYfOm8cAUYGAuLezPnG17e52p89E0vyd5zMq3eOiZwgbxi3PgZW1XzGZYOfAkPht%2F1Jpbx3q6QI1GP7J%2B39nc21UJqUQlijoRlRRAWelh%2Fp2I0me7jfb0DYd%2BtOP0a7ib69ssjYG9xEPKw24o1dVaI5wejQMLOPXCxxCQmqsn1P045gn9T79qXCeYR21oMx%2Bgz0lE%2FjE9Rr6UYd5tsr2tNp%2FvkaIN7XrRkSMy3y8jyri7DJCJw9%2F8YB2m4jC8sH6jLOYa9QuXVOlXUSECl2K30OUstEeVfFmaDjf%2Fv00k5yMRngYsFSNm5hg%2Fw0YSGOyCnD3ZQRkueV4zYXg1hdA1pRnv7tKxxMN2phxZsjcv3VlX7dE4f3wG1k87ZDWtySHp3WNRpXN3rVnD%2F9KkNT9fVx%2FM7sAzww3RDR15mPwseCzzwDQEktKlZ2hSjz9nDaoMfiOM05bR9Nj0IiVP0LrZC7A24zCn1wFNrcVtxtym4z1BJML%2F3lAXIJfmWI%2F8CT5FgVXow0L3CyQY6pgH0SHktWelmJp9WFpqZIFiETYuk6gMMqXeYncXEmcI2yLsQfKjTWt2IpcmhFSh1WVU0bkOWA6NMI8L6aD%2Bx9mi0viwU2J1KEy9BdDjHpfX6mq%2Bv%2B2SLitPpJmGYHwLf4RCU%2BYs7Rgz8PiwwlMbBXcwoEnfLi41QalYbrn1BwV%2FvLUAwwXE8gCY7GcS59BlLHFVlj7ASi783obtPFu1kZoGNjSUSmmU9&X-Amz-Signature=a7b32b39048f207efcd5a0a960619d562a649f1ba5821534f1c80105ac956892&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

