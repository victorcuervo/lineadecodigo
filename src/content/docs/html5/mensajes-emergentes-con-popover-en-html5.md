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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKE24PBQ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T203005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIHtUWqZdUxYxgRn9z27EPssl48PmwARg21LzB%2BRBGrf2AiEA8O2bMCF05mp3FrcKxijSaRhyvfXp07wh38ThlGjJnHYq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDJyfvbicmcfQRoTTOyrcA1Zk3n928jTk9pOOClSwuU39HfKZr2dqIHRCNSVUlg9uPpCQYZ3OlrnIhqe6o%2Fs3ZK6h4bmdJu0U1PWzbRtkIvKMfNWprBoYru%2Bt6S9uvIWV1Lw66yAnOfPm8HHYm3L2MU07pFqXaG6xGJ2YY0QYp6vLJhNfNMWDTT7fSw%2BKlBY%2BTIuvgL6bA%2BsGxUz1fUgIEwyMoL%2FRmxHEjo0eXy3xVbg%2BehAQz4c3wSO7SVR5AnuwVscM%2Bi9HgxD9PpOJnqBwDhI9euo4fju4nGSiTdIbs%2BWQZ0CUSlKQAv8uI3JoS%2Bo9dksxNDNRd6TejD52Q5D4jMyCuqWreHAnObap%2BEJjy%2BwTL9D1V0fGwcSe3wXELZDwTrAQNODTxNA%2Fwh2Vd7whHk7OczfaX9l6saka3gqrm1g6SAjC%2FbzZCXB%2FThpOf40uwMa%2B00mo%2Fe835Ya19H%2Fu0dRQ8IdBqfRugwz%2F9hMiy9aQb4t2Q0japbJ%2FcZbPDw3O3JRTgdGXft0rX6a%2BNv4Eib%2BbU564sGYSf4781HLi0yM%2BgCJGhZsz3yWcpvkcp6Rmb2vfCXKiZpORFb28zR8iajGxlFjvUqT7dTmFwKUwc86sh0xDIAt9Jt6lSUEayYc7R3p9KtsYjB0wwf%2BzMOiRwskGOqUB3Q%2Bwmq%2F%2FjI6iqMkWe6Uy7RA2SQ3YoWv51l7dOkqIMzSBGKPbiuRmtCrVgbuRniaAWhQxkDOxsxcax%2Fvw3Ax2Oy%2BJ%2FQ17LDS8vL0lJ5Mf1ZMY%2FsvXwjAo%2Bq9CP4umL81UGvq3g8eqvRooI3hDNkgeKJUMYedh6w9OcTxW5hSwkfiF2UUFM7tYgR3qsx9ac4vGrPXaY22s4UxAj5wRDPVWQKPStL46&X-Amz-Signature=f84f9f85edc1889495e5d555482446d8aa28ac5aac476e8816ea05f806b9f110&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667H67FHVM%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T203005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIGiV8q8c%2FSdDaY%2Fx40wnP0Ehvck9CBdp2KjAKrxGnGCEAiEAt%2BRYQa8AOPjZu3DsLqUroZh%2FOgWGG6IWoP%2BXtJ%2Bk9hcq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDBaW184W8tg2c8NpIyrcA8qMVwEv4QKlSnV%2FFQAUjy8vH9ZHqYfWDx8MxgtTKzf2KqvD23Dk7uwAunUoDswdYk%2BSdK7vPtqHV4XpWaPg%2F2T4hRfhKFsZzas0LKzus0M4VjMMhA1JOkT4ingTXGoFdEvRU%2B6eSf%2FIqVtuWUFHosDV%2FOD7ycnWdOAUi2%2ByFU6WPCBdnsukXbqdDD0hVq1ETAvYUtXTJ973%2BzILY1oi4UwGf4Ualue24VnmrJkYBXwMcpfRvp2Up7RyxYgarFvWeKA4ix0o1sB3TZVTZ9mF68sW0ChCxmGyUQxvtAZ9npmgKygHkUiTOtquf52Chp4pJbri%2Bq3EpGUY5KPw415seur8M0GbtlkRRjw1SWNrrpBbaJgfpvfPFHAp6gxqK2%2BttSN63EOFGBsWo1QZCbU5IMSfFRMbZt07UT6qIWgSupTlKGzjdYn9YnsFR31UUQoeqRVG5bNO%2F3%2Fv01dNMe%2FeBcVWcoHaGcerFHihSOnUjIl%2FkwsrZqTmshb7DCuxtbISnN6vqXiO4DCYTUT7spCu8RcECHE6roJ1obmDXF%2FrZTcAA8JS2hh7pTvbqT2qgC98GVnxgiKdRe3j7GfOtU3FKXGPgVGhZHYfa11mQgVrQdKc0XpV9r4VSQv3cZuZMN%2BRwskGOqUB79rhwLNwRtSHwur5kjqLSmevmd%2BOZZzw4G9d2BIV4mWAzhilNp5j%2FEkZZP33udKI8cPOHU9Am0DMmzCupBsAN5ZAg5vwtcEfqG2Yj%2FHYtEewfwlMu7O0x%2BcDwylrkPcVYDsulMZRMQWyqat4V4chAmQzxX9lOAiEi2kY3a1Sskn%2BEZM9Eu1xT%2BTCCjK82nGYU5fjmbMdz%2BNwM4%2FlSoc%2BmW7kymp9&X-Amz-Signature=681073f9bac4fbe41d879d0957aeba6e32a4a8cd205283ae9da1a2a20951a826&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

