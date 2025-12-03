---
title: Mensajes emergentes con popover en HTML5
description: "Uso del atributo popover para poder generar mensajes emergentes con popover en HTML5 en los que se pueda incluir cualquier contenido."
lastUpdated: 2024-01-30
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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VI2G4KY2%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T234856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIHHrD%2BXnAWCSVj%2B%2B5rQHVohBpum%2FUxrxgl91lniPw6dcAiAazIpwPhUMPJ2E7ah4zOF8rUJHgjEBlA1C2PzHuPY8hir%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIM6zBi7eOUWM3cdfqpKtwDIEO%2F0AaC18V8JXrzeUsb%2F5AJX8VsB8c2wT2eoOTZSZtdVTSP9sqcxDnCnCD8sTEq7Xr5JOEXPxm2vt0jhX%2BL3DBrXpV6ix817Id%2BdxFf1mojKHBMToN7HpwHG6ohI%2FsmUZFTUAIACftZDTnk7h%2FZuKATzg7HSxjMaklQ%2FdHWlO6%2B59a5tfZ28WPXJ8HTRcernO8NcJcPob3jWRxTq0IIrraqOUw4J2K7ItfQqFmF%2B7hyVzB6cvbFlMZ8wJonvzyGJfW1gASIT8A7RHFqtbq5DXyG%2BK8stltAYsPWv9Wxbh0T2fW%2F2GfNNtadD0DR7WZEaDQiCLhsS59TEwD%2FsG2KTIfFzN09cg3iKEUdk%2Fxdb7BnArnKk%2BxWr5M4sehUTca2Y1JUNhDE3hkWzaKqGewSOc7MIaw%2BgsueHAWK%2BdnZ%2B9QllhYUqno7AV3LDv9qJlmav2p%2FmDCAsoqqLtUx%2FJfayI07zMNgKY4Bzca0677Tuc0zHOedA4v02N8aiS%2FMAUvoaW37Lv8gZeWwP3Icbjw6ti2npwselUdTtf8Pik6DmxRpCordn89lRi7LmyHXykfR7haMiii12hYRDSEvtTre0rDdlWn7IlcglPAV3fP8I42UuBGYVVYql78sghYwk5XDyQY6pgEgKPasMcxGNwmljMCGnMg%2Bq6VGUWG0gizHhlsJCormsuc3Bos4fWFgXOd%2FSrlTLzQ3LfNAdPhJmA4brl6RUUHyhPtYd5uks0wy0CKA8WDHkx6JYK56tZ4FEk94EmYi2%2FiyaQ8%2FFtgEzobAF9xykvM3qGGPVQCV9KfCAy5%2FtlC3byzMTqAho25nywWSZU0PwCvtrNqyGCqU7B5FmN3F4EP6SFR5gCn0&X-Amz-Signature=3ddfb25d415ddb356ed160a422b3cb7065175b8ae634975f3f89326b41d4484f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LIXYIYG%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T234856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIHRMP2rZeX1rcMjmXeb5WZfK1tua5noVvOTl5abkYmf0AiBtSFNbTriycLanWnqPZs8sgMYop66gX%2BsZDhqASJWCFir%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIM604sdMDmm0OhGHnXKtwD%2FNWWJ2Zgg3tTlmaLnOuAzKJY5tazxFSB7%2BBDuBlSp7OlhLpKvrQlvSOaOhnxGfVKlqtqNqjpcK5UGSnOGzlhHxaClIDvDBIepmFwFVMky10j3wtnBXRsmmCqXavOYF3DeHYJhZYFNpXsQpvwEm2n3akwr0sbo5mNjGkop2FKy5lSFKMaEHsy5ZZGU5nruNOLqUap%2BdoXQ27WX56o7pDjS5yT83h7uDoETh4FrTtK4Yy6OpHetPkg8Vdfgqrz9%2FcIT3sSEM2mGdkugVu%2BTreAxdDhS5J4yVqcEo56edwAvUkJWv6iCRALCX%2FmZaInlkiDhyQYsI2ORulk7A51UpK8f2l1GNw3LtjNz0N8q8oO5qQcVuECHE4Q9BCg0mdjpuVdxG%2BlPnE1ctR2xcznoaicaQw9jE%2B6L%2B2i0In6WiM8CWsIgYx9YHUxYrnwjxfYIzfD44f2Zq2gvEcPV3KwsRkld7zsi%2Bz65ytFDUsnM6AZlX6K2LMkT8qK4Q3vpF1zsWqtqlDS5UpGbnJqxa757isHev5lauWADuHCJjBAqO%2FwUvXOooA6UnUNAkU3wZd3kJXm1KobXlA4X4YL51iQLKlAjYhAFwwz%2BkKKCqG8e5zhAUrwc7oE9TTc%2BdkwkKIwkZXDyQY6pgHsvNMDByzc9HYlXw%2BHvvD8gIzqBxO94ShokrpcmEo%2FXrp17Px5cv8pNQZOmZFY6%2Bhhvs9x6ebtS8P9iUWwfeDQiFoigZ1cO7Vk6b1KQBCVcu7E80U43KVVMZhw9zDSPQszJgdsZiQ%2Bw6rUjyWg1QjzujkF3EibMSwLooCvUxUekhoss6%2F7vrBG5TLMHJzLyxrkjy6SAkmpLBgSA8UZI6zAaKYx4t9h&X-Amz-Signature=098da38e0ce074e7440b7f6f89623d2bbe8330d97cbd4cbad3bedb1e28960a1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

