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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ITDMOAB%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T232450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCt9G5sEZoRY1M1mM1GwwfwvPL2OGB6gSbKBixrcwjjkgIgOin5OxCyxHIfvR0MyKVqDlIe4D8Jd58Kwk3FdwKjIvcq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDBZiJcx%2FrpoKCtyw9ircA90KXbxsuu8FeLBhCTx6hfAScINVKkY4eeTMLjXpU5rBrERUJMmmA90g9c6WSTit0CDSWuP0be4VV4ZQDjHl%2Brc6dJ%2FmzBoKik03u0UUErl8ECTAq3JzSirhM0E03urIF28dGwT9eLNubGeoSLqX13f74PoTvy6ASlt8yAm4pbVBRj%2BkSIwZSsU1nux1KtPfIZe29rohLYg8r4eaNjpoW%2BpZoeZ8D3PXRRLzu6hGyWsRVknjJEdlGf0ivaQYAC8Kbz2cQb5Q62Wdh4iTYNcUCbZHmciCYj7pQDML%2FwA%2FJ6FElMuOTPOcMD3H%2BTQhXuYHuJC7K7w7%2B%2B5zGSD99DNNrHDgRwB0SM1bI0CMPNB6Gy9z49HuKj9y6U7BM1%2BL9uDS5IyOJ5dgUix%2F02UpqJyc8CxD02QuQGHtD5FgU3PfxhtUGU0CT4gAFA4Cci53Ql5miroJNNUz01h%2FWJKLDSQpguAIhVaQ9xcmrctnKfhoYeijX24T8hdgzqn61y%2FhZswo2Du%2FcdeNrOdzAujN6MC4aRX77YPRrUM7LqUfzGHL4WeKF4rpRl7GmQ5OU183CeNGMtpDQcbTB8m1g2XForNF%2BnZw6wFe%2BBI6QWyQyBrw6bOw%2BqdigrfphY3RXu%2FOMPGLyMkGOqUBtyyH2BChWkqt42tLNDq8eYl4bHsWSQdBxyEYPt7qw%2Bk0tHWpB6xiIQRTFGMmJ2OWfKViOKuEkHOj01qLxln9RdtzXpJU%2FF9GCi8XFk4%2Bz6zdZFNuoa%2BDo8iSG%2FdxnEHyU7C6PVPlwr7B0%2BUT%2FmK%2FSRGggX040g4NABVYkzoSQkE7h%2FubZGxfj%2FaAPZXzbM%2FiCbpto39FWcGCuw2lpQGZSZLm9bOh&X-Amz-Signature=dbdd048ee28b45d525b3c768ec0dd4f68bdbb128bb8deca3e630301039ec91c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGTHGXOC%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T232450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDl9XzqgYMr%2BeevkZxkd2znhkG80x9Tn3pPNGV%2BeJckSgIhAKtQq%2BzSUW0NZtxLho15Y9uG817Vfaz50znte3Q%2FVhBBKv8DCE8QABoMNjM3NDIzMTgzODA1Igze%2FMQcYRxy%2BHp%2FFMcq3AO9LdLgQn6ZFTFKum6m%2Bfc11fvrLiSZk6kkS%2Bsps86PAgcE63c%2FHGoiqvfF6JdnrAkYl2g4wtkWzY8%2Be5nfN3pFSTMPyEAgmutp52oTitl2zkNkMefVItU%2Bm%2FRwBHl1A4ncOikvW7tOKdY72Y%2BSXIGnL0m79Oht4ZSopPwGfCuXG2vQ3epaN9HZUnaK3sE5Y6TAYHZMHUUG1PDIM8NpVMJVH7MOpXj%2FbY57WQXx3cvl7tJrXAKa%2Fq%2FgzHMiE%2FLkxUNVSRlZeBOLhRe91zhiLARmInaQz9zsV%2FKq5W84IqMbnQ4G8FNRE8jLoO427hc2NxYp2%2BEZf1KW8jkO31Slj6wIP59zrxkHMJB5T7pHGyvDTkPozbQgfp%2BqwyC2jElm%2F8tBDD84DvOsjBcqTSNpzywaT8Bf%2BBgqYs0wbhPCkZAyUMv9NrLIH8OYBuZhkGjcdXqmo3M7aIcWm22js298TkWnFo%2FIglmmLYeJ%2BUGrzBCHDArJydz3qegmUyP5Z3lWfW1dfrhkb6JUrZNLgAscUu0yMjlRIoA7k4VCDs0ozNysry05w3jESd1M67IiJXCUZ6V19dYKAEEZXF9WCZRLrvmiBFVKZLh8KC4Z5VhNv9tIE1qsEnR%2BUDUemS1KCzCijMjJBjqkASoot4WabClUowNRWQnDLue74yzIjZ3PTc4%2FY%2B%2Bz5EvZ%2BuSta8ijLluZjf0KIWP4X8Te1i5aZndYsufI98sSG5jhcFwiBT0tvGJ1hGAs8vtnqgJLi4XmGsoRFvdXSY9ApTiHNgWD5RBUqmVApL7MmmLUN79j8wbijiFnojj5oOK06Br92t8sKDpnmMh8eJCY%2BCtfXDQmbLuasoc3RHRPbOTbXQFz&X-Amz-Signature=ed75f730da6483d66ba6988cb7d8e00338c87c77ca57fb95507313a9cbbf8aaa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

