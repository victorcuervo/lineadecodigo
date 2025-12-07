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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653FCKLVE%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T171117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgeKVENs1QBAXwEusiUxKJyvJFBSVokWzGK2C%2BqXp0pAIhAKxnsm%2BMFsC92B0jEUvO0Xi0kTo6d5QxdUXNGgEHFpWYKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxWGsHV%2ByOLcyxMRy4q3AMQCv9AxIygrlWr6cL3hUzEMbL%2FQPYNQ4kemNXP4jSdhtleNou0VhP7oHA4UMDDXT%2BMZG4LKtfiQojFYOHqAI7%2BlyBIOzt2pIl8olFdPF4Nygb38qQp1Po1NyJY%2By7z3RZQMOoABPYRY1sCa2NXnLt0IVNOzu7jEnauWJoAqD4dZHFJsK2D0N8aFTlrL8pwSq%2F69guSnOaJnSxVt1Du2yklvxlc0N94R%2BuDzahakTZGnbY9jyz6LU7sYR5pb1KDWBQ6WDmLnOQN856XaqU9AxHJawTAJvHFKnp%2FH7jo9S12%2BQcSmyAOq0wG%2B%2FQEDIcEvf1KCVTz4edvMXw9nR%2B0H7h%2By1PKMY6C9%2FybLMTBrt9wD8wYMqG3RmgmZFrVl47B%2Be6LcEwTNbSDCoPlyJKzViARjywwBNCRoDGR23bMOvDApx9bKn9MzGz8CApL7yRHwMbN3km9B8dWkTajfvCK0TMusk%2FqmxoQJgJKXcYHwxgX%2BBdBlZj5PIvRpMPOCcy3xjyB7cIfnSqUStIguhJpNlQS9WuVg5eIfOO7Q6Rua9q16CQHIGs%2BZPHILH0XQBxk5fbpgvH0%2BQwxGp7hhBp5V%2BEMjczYbPSqTSWVNdPWvA0Kpg7JKVfuPpjpHJgJyTC8t9bJBjqkAfMYnpjdhLJRP7O66s2EJnJvOtwlK5LWNpnxKiuU3LXfULiTSyiXBYta1kyMaqTUxnb6e5m6kFdKL1p1opvn%2B41TlxeZrmx%2B%2FqQmpDtSnjFhmAZDpRw6mJU4zJgMQCopEXEI49FCVoph48rcJ%2FsOl2uhoRLx9F4LQz1GAtLqpUHTVRGeXIHkSbn3GeADBy%2B87dgFkESqy4SBBLzZwIxwTuJ%2B%2F0E6&X-Amz-Signature=69118bef4de9943da951cc106743abb7dfd54f4efe3c9ec5651a0d59a2c7546a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RKPTBT6%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T171115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZA1cBumDT%2Bvhc28cEyEfzDRp1IQWBpmXlPuS2LFTAyAIhAKaRMOaGxET3EySVGtUs19AswIAQ9XqzEEkfxYzS0YpNKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2FT5eZYRGLEzW%2B3ecq3APoj9te1JUIU3NbP1XY4VIY1f5Wn%2F967hFVV%2FzgPfMAZ2FQk32dJ%2FT0Cgvhq9gR5t8h9rJpEln3m15gyhe%2F7KV386RHEkNE3hofiwhLlRTXHamKL60L2%2FBfU5mboNW8dIvO%2F5F6eBaUEIQxy%2BpQTz8AGwX6vUCnNFbQNos0aQrEQ%2F85zsPRx4C7wSB8CXNt%2BfTCyVFpef5HDuhfjJaqwcnsX%2F5cZ%2Bpjq2cDQQOtFcp45M%2F6UbrgkkL8L7ZSi8YlB8zdcMkLTLJ6dvF0X4a6bUaIoaTmb3zuMXGEH9bNdgFFtNkZibTRV4saMzvFbqb%2FiTphTJN9OKcsriKP7UsTh81o6AFB8mw5XwJT2VgLcx5CYCdI%2BJiwg2SY%2BX22Mxr3VAP6fwoy7RxhlFwXEYGB5sLXR%2BtPl1deb4cgsgA5mA3PA6MeXDSwn0NyJOTE9J%2BemQIh9h%2B0PCuxUJHzUsxMnYNs2jEdj7%2FQZxotKZstUTyM95ADdH%2FgoS%2Bgeu4O774bSrE0bD32yT1eSjaFG2iauUuKStkAQmVeQlkog3mvD%2BCqDRyHPk28wFUrGZp5YP76gFhRrbzTvzVW1ICz0E85pxRDdO0BXdvsMSnQszCmtjlWOCnT%2BV2FYv%2BuDZOpAjCIv9bJBjqkAeK7yP6eCWajpKBkwbXUnssBzvTNqZrSZZAEwkBsALN5kK6YVnVJfRD56Aq3D%2FY5dTIiWRXwNM0U1yBQ%2FYS%2B5jl7VfhDSLhrWqYAkndPjCNGtEpEJPwSsCA1s3UZjpNE0SRnjqEurFEdF26QV1EAHqj3QdnvU8vFAGQNKLNB5OnC2CZsVw2l5Gyyyb0xNHdaBuJIpgM7ZvK0kkNE4UCY%2F1y5X74D&X-Amz-Signature=28950f9d42b44b56a1236c882e0ed945d2c031976cceee83aee53d4d32a32a96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

