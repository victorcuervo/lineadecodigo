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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UYSP7J6%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T221732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIARZ3BiL67tUta2XbA4YgexJeag%2Fr4XCNg%2BdClPvcsJWAiA7X%2FKPIqa%2F0sW9y1HltOwBFZ9wSTVK6zpmyDQKrRoUnCqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FuGP6b5Pnl7d7rx%2BKtwDuqzYO0gBzgK0DGK0Sce3LwrMk3Ylt4hpuGGmtB%2BHB9EqPRS83CfyDGYQJ7mJWurPS8%2FuvCDlD%2Bp%2BcE0TIYQN3vPuCwz7iQ10lXkM1d0KZtxZrHkYGJ5s%2BiltAn7BPKEoAWXfgzi6EpCNBc1qfToz4FCyFwoZBH6dUZK9wdm%2BaCUP6pv042iGa2yeeDFHbvOHq621DmMZjrc8yVZezcmIUlkrsnyvExputcce5iAUtFHJRQeQBExxHQx53B5l899%2FrUTLeb15vVvmNcQ6Q1H1H1yCHqLmHSswBvBAUQn65No%2BuVfo8GHxAaeRe6H80MwL6tT%2FIV7%2BH9FfJ87Yk5rjlzef1LoHm2XvqLfhv8nvsbsTY5R2%2Fw49Rqo2S1KmDCqDByGBlSCQPTQZ%2FRs85MZq%2FJtf8ua4X9Er5AyWZpLdQdxrdX%2FQEs0gNKxm7l%2FF7u0NZxg%2F0uhD3JvgNmUxdNxrchIxGflMVGh8H2Mplt2Iam0MxkSfLKfBO5q5FM1K37EqMRzzLDDwPpM2aUlXCja%2BE0HIeMgfn%2Fg%2BH%2F1FNDQbYhZEN1ZT0TAyFw%2BIpb%2BBT%2BnF8Flnot%2Bmy2dtT80FvkBf2w8pxnhGrXgxEG6ysYIwKjgbl%2FwBv7ocYuh8yEAw08fXyQY6pgF3DLqH5eLSMncRoPVXkgBN7G%2B%2FXXI%2B0L8XMIwR51g13KJ73%2FFMHIUmzeQp9ZqBEK7IMNZZUM%2F3nPuwXXWdTHTOixqWwiOVl%2BS2ssNjyUkvqD%2BkXixVDbm1zo9Fccwg%2BcsicQAgi3bGb76S%2BTfcI59iq%2BQLeuPsKuPpRSI6gmeEv5KLUZPVzPDyy1In3OE5dT7mQwGxYDCaAAEagudc%2Bt1v%2BB4WBuSq&X-Amz-Signature=50a7a748d8e0c9e379ef7fdafeedafe42e58a4fd1575a940b3187bd93c1d032c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XB557MRC%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T221732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCa%2FBYiq5EJKQJU9CcLi3hmhUeM4kti7aO2hLqB1Gx76gIhAK3C9M8%2BZU86wieL%2F%2BeB5h03YnGfhYjAbsDqrVR50jxMKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxu8ATdHAnllTrB5Icq3AOcxgByt%2BPFBQ3oll%2Fwea%2F6wdbddEoeRgwXpQ4jbhKOMSIUZOabVktuxpvjOAfE%2BhqUNre%2FdAEJNpUZfRfWYjsQoVk%2Fso5Pu%2Fbi%2BUpVrrQcW9z5sYB0vPGPTuHi9rqx6H%2FoODPACjg6d3%2BvXjyQazAyGVv7wWsGWJvlf0ycvo3eAG62wDKAjehDJJw37%2FLjKw2fkmSBvmNzDxzZlgnRvxJ%2F5k%2BU9ym3HX%2B%2BxkkIptxYRxVtE80XQwzeoY4O4cbv0E9v1AG3K%2BsYrjkCR%2B1YpjwoPz17eCIOwKG%2BM2i0loB3PRhY6Bq4ZHDgupqANiHUZdI%2BcUhYzOPlH0YQXiSkugP19ZnTzNEIQvXA4Gva4jo%2BJb7Yj0heKoYR9Q9JcSgAC5Bzy6cY5R5zIljtHZfMv1RDjw40Q%2B3dAKaZpHXyoNV9OpjbcpF9iOySMwI1X%2FfZDnGCzQRzXZnfdFgwdYOkw7%2BQ5G6IIV%2BXuj6jg1VYa%2FGhHc0bFpv%2FDZun1Wu5YoAx0MjfC%2FfZXOOWCsX8%2F5m48s1pYL%2B12XTGwPVyK0lX39dNEndeY%2FKa8ghLRB6xZKKBWq%2FNo%2BEZ8dsg88ZV2V2uVN1V9PDkCFpuuiQHZMODQ7yq4uXsY4vsJi5I2fXhRzCAyNfJBjqkAcacDzb9h9VzTqEK2Zwejhob6HcEVCouYC13%2Frw067USgfJ9khCRw3Q6SQfDHy5oIwOZUtAJWUoQvF8bKSqxdSiaQVLBI8yoKRvqdFBudQYruBFtnuL9BzkyKd49J30cJpg1fQ%2BOuZd9h0XQIus8faG0VcqwcT0LtfmrOEh3NHTdoPkCzlRctms%2FIUxBGTDoo7AkC9LAK%2B6w4LxsfyDsYyrLXFMI&X-Amz-Signature=a16c851336d44704f54eae618a372846d3b629ae09208e6bb4eba79bd15e98e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

