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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Q22MJ6V%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T160523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHtgDLQrm%2BjectfDpf5IbSm23dqjxZ76Rj6b8GhMMJSSAiEAomsYyDyD6A%2B20bzfZCr5s0eiuyVojDFTKkCrw%2BUvtYcq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDBtwbNtF8LpLf%2F14AyrcA2HMxYxXjh0xyg0Ie3Y1Y53i3TydqdmWjH238SN230yYuZ7CNV5NvFNpMYqE8qihctEIOZgMEwtlatM7OrXuMKR7EwBjOR9Q13mbcqvalft815febmI2UKNBqU%2FlTBBhjl307QExdPKhf7PqYmyduEfU4Bnqb3aXQmgqBYqL2uHB0oiCGbNXCqZm7xK2%2BpWDCBT3C2Z5dDMSxPLOhEcQM0otc9HyEtKb1BYchNkP3%2Bk9iapD%2Bsf5c5wXODUhMZxrwzjGCJ0w7LmSdNCUrx2k2kNQchywIS8cQG0ZqezMvgKN4lrLT%2FkefdD4E3B9FDL0u%2FQtMOJv1xU80YmKJO41DhsaJEOobrZpqSGs2gLExz8XTLFTk4%2BSWaDjWjxzdxB0R8xXrgdbN%2FU1YlRA4uCT0AfiXY0E1u3eWTfHrW22N3saCqGzLfjQOJ8IzitTtby%2FqO1TaswvmtUh5ClSnIJuXaR7kJo61MNrMXr2Je0Pw0erFG1W0jiaAZmUXjXGp6jEhC9SN13hm2b80%2Fet5cXd4cMPut8TracZMfRyyRShR3xOpabysgaxel90KQp11PwSn14txmRXeT83q0NWggyU7ruMORsB%2FKSgdklHPPaUxxp%2BtSz9n4vQ%2B35hz2VWMPfbxskGOqUBJVTsbq8X162wF8Lk8fMixCOZNefTZNkSncv6h%2FKAn3i585p6w8YgbkhqAqfAstcAMB2luZFbmYwKK%2BMllIEvi%2BeqY1jkZLOb%2Fti8hLj2lVAGEBbS4KtpIOYAyYCfZN07n1HTmwmbfxwbBgxziGTtfs87Z7Hp1PaLL7BgQELMiM5F6bN%2Fg096cGRokKH%2BF8FT7esxpuFp5%2B8wDx%2FtaxDUlVcdRvhJ&X-Amz-Signature=0fdd02ebcd6b535e1e040070599d51deb0824655700a1034c7fe4f67c362afbc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJ57AFNX%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T160523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG4%2FCKNmcuoLEjNzoUm1jRn2DBx44asBXXXRjrUJ66VQAiEAzB%2BIc%2BF6RAhjGmbttRUCgbCzbg2DRmp9EHoDebFNkmgq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDFP5%2Fqg07dMCS2krHyrcA%2BV%2FNrqAx%2BAsgLn4%2FwY8favbhaVR7qW2tw0CHatLax1LB97JM1RHMNpebqvAQDP%2FS8AhZOZT8GMYbOQBHcqz1TYnQSU31vp27l58g3dvnsgCe5IujcIn6ILy6EswdLFJJpeyQzSXuKd5HF%2FI1G03DKEewqqtOczItvZRpGnqAmMkCx3WXa0nlnc8wVcqNce3oJu0t8mKXl7kh6JbZemal2YMYS93kODz6kzNyTA%2BSolxgU2vdH7mbPegRnWKqNLOipUoemvrwQh7BqpVDPSUEPb%2FH%2BkwTJs1h%2FlymlD278RIVe11R%2B9XHcjD%2BV7aTwrXJXNJ3LoxSABAoBAzu8KN8TygAL6InA28ngm%2FZeak%2FW7CxY31AqXI2IEJqhl4eO%2BQJUM1lA%2FufQm8fjpUD8mG9V6OnC56n6h%2BMq0dEGmkkQeCE4nkCmhEgWKZ5UMZ5FKoj%2FoljKGro5%2BJzKDKynKUfstaUbjhkCMo75R9qMxy5Ln6VpCuqOoxOxND%2F4w57MZBEGLeEGM%2F0LwzinMOlDcyNa6M%2BKI6mO63CkSmvh1Q5uzD02og5CRN04v9oyehuwE1WzDCdMnd7M%2FHwjUqV0VX2itf7b6lUP495AHvTzSQ7vZaRb8veZrdKwK%2BU1boMM3cxskGOqUB8epefJkJWcAmMFVYkwEJ1cqtD%2F7QIs1EF5qamZDGRApMG9EG5m7A7L3KNaEVPn2bIzrfcTtJAPkMPpnueHK1Tj4WgWYhcwh%2FUOpn%2BwaBQzOc1s07ImBKAjuMxEFNM%2FXdRAnrqqQub29HjqFyV%2Ff87bvUPmUTlnbodV%2FK3jZ1n8U2KIX736x34rRJwGwykWjvlSlFAzi2vw2ZBcRLlSAy%2FdUsS8dr&X-Amz-Signature=fa8a3ea33f86c8bdd13fb967462c14e89e625c1cfa9e0a2f003610b8de6feac4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

