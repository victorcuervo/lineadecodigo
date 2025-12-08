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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y77UZY5M%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T082029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICBozqfrkjSq%2FUDpt7lKNpeIttIXqxjTrgAOFCBFDwy6AiB%2BKT%2BkEVlAiEwHlrYgN85Bwz1thkwEsLddVCPwrMMMPyqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmVt5F9nzTuIzVHStKtwDpuDoywttveD2%2BToR6RI2DetjdkNo6aeGzT7D%2F2Z1y0fxkYzFeIdTuSHGXqqdxQ36cCk9umj%2BjXpN0yLoIPA%2B0jbeLQD2i30PaRi9LqbHBQmi8jwraYVAyLLPZ5IaKIttWeKR%2BK%2FpgjF0ZuIPUd5a1ffV57GLQvlK%2B9f6eyno8cTVuAS4c4mqnNgzRTf4A5pbNiGNpVrK6gNWYJ08nBZfaxK%2Bn0QG4E3cMkO5P1sXDhkSC9WngQxjNX9LfFsiAF0I9fgGu5FtWsOqPYCSMlhQgln%2FmzQnGri4MYLFmqOWAEMPePK30RsG48oHyKZNO6uF1oK7pQXS0v0Y%2FB5krtDiSEgd1wtCpRYjclaCXskM%2BZhnJCwSDNZkoqob9U0OCksu6gQzZhTL%2FFax%2FjOLyIikJl91CzD%2BUf1OIIqRmTITLiKVVS4rD%2Fky2hYBZxutE8Z8qRdTZ1ku4djCs3GfVXvSuwcB0A9ueaD0FVEBfrB7suLmWw3gAN7BD6Pttz%2Fm5hhiDs%2FGIUMnP0Dv6iI7dh2i%2FisrX81G9ElJU2hmBPel8%2FU9EsOvKwvf2p4rhPKot4RT77dvEusJGrej67j4vJBQPkIV%2FQ1NN%2FL3MLc1SLoeGkzLA%2Bcx3s2%2FWe5jSJswmO3ZyQY6pgF6lmmhQ7IdkA4w2gzRjVvtt3hfIV4KqKYg99WU9J39aNga61K8vajDZxdSXYJ2Gmgj9sFCkz8Z7ZYrBn1cfRbt21r3X8Gpo%2BWJwZY1KqNUGmZfU88qcwbwnaVMi33t9IPgnB0%2FLE48liyBCPklxk8usA3hX%2BHKgSJHEjGK2uDEk3sphIprqsQ%2BEvgThMt87CbvuDjPWH8uydyjFiS5c262sckkIb95&X-Amz-Signature=0a5def94b183f7b3bf809483ec8ff18379cf69eccc35fb3ebea78a8b4ccbfd45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDECNCM7%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T082028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFh7NIdKCoxtEA%2FX0JUCOcC%2FWc7l4Jtuhiq77oTLhZV7AiAZiQvMZ85HflRSw%2BQjNg0%2F4bqpYARgDxNSbQ3uXBCYCCqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsHXNdO52Y%2BEqitO1KtwDp9wrdSdAZb%2FbQwzkLuLiWyC2oMArSHJXs75bCD3CDT4pn3wtFMfPn5FzRQx2mnzEdS3b7RJw1CoyalCJ8Q4BMKhG6ABU1Wez0lM6Mpj6%2BmB12W2Y4FWaZx1sBKAPiVoM1uEP6zLlmAkj9YtS0s%2B1UuJNiqpuLAGvQvxFiopqDhVu0W1F1Vv6IQ%2FOcIFd37QfEGcdjnfNiQ2McyNlkVj61WMk4UewWGRNijrurrl1tVkoZTdvaTQccNe4x0xp7PfIG8%2BQ6aMQCI7rvnzm1RIMzn9EHweRrjCz7haIrKsUzZM1eklZBvhy2f3rUAzwNViPizDUcq26MoQvkImwMSg35McC67vU%2FySfLzJOG8UWlBGyMshzDCQif%2FWv5ijlFluIz8eFLgDkSo40NlEwtVRFVUilgC%2B0a6wsg%2B%2F1BStHb%2FJoKTp%2BFHbR6mZY2yetDVxqzWR8EVbbcd45fjypZoKSKz6mxflrhQCb9HpSHA5kjKeL0cNol400FiFex2SJJ2AmoFDIUr88lru2LHiqPmK%2BvkQ9uZ1ROUCtG%2BubgU%2FJT8ltl1aKcIFfMF1FezHNWgTyLlAyBNpNoyUOXPnySus%2FsaZ8G0s26u7nGE4QF64gZwthSan8J%2FDwXYQkhFow8%2BzZyQY6pgEf64RIrrsqJH1oOvt8u2fCIyEOK%2FRPAOr6BMqKpBcpdS%2BOn1ZBS%2BOKqNfN%2FGUiJq29v%2BY9XLdZBjVQP3HmqX%2FcpkY6lSZBFC6ZbvsBGlSxUDLDZDHPEiwEExD6IYHNfFOEcRSuN8G8pDzkcPPvbdysE9C%2F5ChdwxMZ70KwFSqVZ03ub%2BPw47hKUxGcNNInYC6LEYkXnqMMN3x24zMbzfSUGdJTB%2BVY&X-Amz-Signature=cb67a157de276cf5e8029d13fbe28ee9635ac5c7ed6b9dee68dc3ab1123f3009&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

