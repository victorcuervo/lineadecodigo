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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3A5DU65%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T081924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCI%2Bj8gMFir9lQ0p2hOJUJpkgO%2B%2BYwnWmHXv67KJrVjWwIgV%2BaAWuZ%2FGYbZZKf59rSdg8FS2%2FWgkgvd41VuqHgmUjcq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDKvz51ZP7wzPp4kIKircA3AwvCt3CrhPYxMrw4u8dQh5%2FkSIdiqFFR0iOKW92QABaoUYbzjvYd%2B%2BFTsikfeAB8K5oubJfX6ubvkv6MC1%2BzKATdBQH96ZGdBHHNK4wj6XXOztKoiR7VkJTftiY3jcu7mNnkqdpUHwruWHeT%2FhcbkeJgfvEOn4sxmGpaN5Vf8%2BQsF3JtZxj6uuORJSTimI0fU%2B1DXVnQryoeCxYioFQpr9D5TS79Y0HvAuAz5uCLP4ku9BOpPU%2BRN%2BDgcLnHPheH4Rb9v6U6P6ZjRvDPdibjkLwpA5OotnnPw8XsmlenfCvJNWSzVxwT1fHO%2B%2FA5YhccL98EcNqGvebA1gd1J4tK47DmL1hyVuO%2BqC6saKxr4%2F1Vj%2BpMjw4cpPKEY6qNqBFR0ksrbEiHK93P77XWx2sTYGqViYFrSXe7Ep0ldEIWN548hgQqjG4RkEseJ3bCnnpKQ3lfOutd%2BjiytSWJf3I0MfvaW2tnJc8lzHUbWrvtbd37qCUT%2BuMNF3HIQV8zGpHpnkhY86vpzsj%2BeF4eC53zmv%2FXZmPJUQJ0jJT3wxcFf4X9b3ARy75ULaBbWtHD%2B77JSqQhg%2F%2FH54ClircW0Gj2wIFJgqxiT3Vsn4mIekzvy%2Bhu4V76uRHw67d9mrMIm8z8kGOqUBckdM7qzFpMEmWbyIJ3M%2F2oc271V4qSIgnhBvB10%2BF1vT7GYrwi7RZOCgW0QbfCrxog5i5Y0LRcawD4gwGE2bzvjAZEgLOwHFrj5XMf64CRPCd6QhZkgo8tuI6YEqE5hL%2Be9ZTY2WuS%2FTfvbwDbSyYpcOCPxOs8c1qZdiucFLlyvkFNDxoUwopobjTtT5oufH31BHWm2iWFvDGkFNCcuGakpqgsyn&X-Amz-Signature=bc588fb0691ed3598cf5e7b74b4cb1936fb944a593e01ba85580575e98f96839&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PVX2RRM%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T081924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHe4oRtiolfXP%2F1RvpUZr%2BsKl2jbu1DBRyQmqagShxSaAiEAv6EREBs%2BZch70EWsBHUD3tURaAvUPWvil580db558DIq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDNph9v%2B60QSPSfmOOyrcAxoAHQp0SjB%2Be6%2BqXUmmsP3LHhKsAKBh8cSwzAOLu7iM2cmmuQgWJX8oeOXVAl9w1m8oop4TLmzNyBQ9rkNkQJ4pWmgCAftoaYZ7gPUONMxnULTSaLY6q9qIj6q3gDLqSfYs5ItMW0vTE7tkOU2LNIDovQp1vMUW82o7lxBqKrIIMot0biPqff1W0wWkMySJ3b7tMeeC7iZztvDhIU%2B6JRa46ATtHrlNmq3OdTqIIhTUVeMNeBIuhLyK7kKTHW33LFs6tNpdkuEepEAgoqc3rIFVcRwUrTUOO6%2FYWKO4PKsmi%2Fx8gB%2BYsPHOXQwu4uoNg1%2FPJwQAQctVKiKzpMnfht0bv0nlNq1hLpCsOkIrx5RPMJYsVRzBdu7wt3WDnvkUzurpjSLqIUpF5j%2FbxGsp3qKDcxHcOETDVv6bwV3%2FLjxP4H4t0w0IyyF%2FkZEbpuiRdjJe4Q0ujMxmrlNVxZzx0L%2FQS09HWCpOaHE46WvsVXx99wBGZmqyXx1UYFZP3oTGOhTU8vCg91LLSADqi5ohuEclDKPhLstjHHxdLk5viDxofnm1BbH%2B1473Md134TJ1kJo8q9dk8YtTGEKn68DtRjIgw9Nm8cyMfWPoR537DA%2BoDxmmZuW67X0MWpgYML68z8kGOqUB71%2FGMizeEtFxlOxyXpZvAT4nuudRONpQmEfJW8gaylIG3mj9UZtWplI0G843YS9FjeLxBDWeBXLYunnTBpMK2zaZ%2FwXHQNnb15EEDY7gYIcVcGt8IJG96Y7MRebOjRorADDwg2bNfxh3VY7%2BgcGA4aytfZjRCIFQISf1eI87YiBe%2F3NYVe5e0GTR1u9GphNe0ok9xG6PVplOb8Hsb0mXtWg9v%2Bzp&X-Amz-Signature=d93f48afecb87630b4cd9a2386586454c53ef8f6bbf9752838f90768a055f301&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

