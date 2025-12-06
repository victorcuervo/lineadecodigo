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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVFER2DG%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T144219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFFfEHZJcIDRHd%2BzQ%2BlefpAxs94euVB3NgRfwjPXbTkLAiB5ip5iYLhbpWoZQL9w%2F2Uji8E779kRejCiZN1aThOUMSr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMSioWI1AKmppqFXmkKtwDcEBtbwbevobUS9CBQRPnh5s9g%2F5rkd3ENiO%2F6uVpsFvGo1xfEY%2FwP6aZJaIq2qk9KG%2FLQOjjon7LJYsPnnGvK0JSyoArWMUL4uymdqWL1e1%2Bmo0fj7jspsaI8ItkJiDsF8VlbX%2FyFSw4DEFTLqe1j622vAKSpOq0jxCu5GYT55RzBXFjci7HoMA64CFgUuMv3saJsgkoCj6QgtblMFdBBIlycVSlEKjnJAT8Uw9VJqkaIVsPkaOCs0%2FWgopNgJhjJI9YzKyUXb7H9K643zzafqdXCZs4QWaTXGfTTxiDjgX1ywNRKedGq5TEeYqKx2aiEIxK5JGTTf%2Fzxy480WH4hRPBtNYyGC0gmBIzGZpJBq%2BrOIsBeFv1pzDUmTHvxNRVuW1ahg36AIzbVME5ly5GbHgz9rKe%2F83HacVYIutI%2BtXdd2RRoNsJq979NscG6TJbhVw4cOaiqu0uaGcSilYj%2BGApnKK%2B1dC4FTepjXRHi6f82jo%2BWJH5pC9K0I3X2cgV8ytKUE2rlC3tHHmb7A5QSyXK9eeF55M0gGOf%2FDizRv5LdJ7hm7L3R8r8sO2HnffWwbGnoOMCO9nIedEn4r9GLzDkpdLjxVfCUg5hH6gDUv7KImAkc3mW8QxWgWEwvabQyQY6pgEuODGTBfRF%2BGj9ERRwtWpOmEYiZ3KufZ8674NFHJ5zuXVXKcnNEKNZS3efuH18u%2BNb2o7q6R2VQdEJpeI7nSEbP9gTrWVkHTFCJjWrgMBBEHeNeB2JNWlMG0LAx6FJ7lO03xARHpNU3jMvOhDx5EtOF5%2B9Qy3natr5ngepGJSfp5jmxpUB%2BHI56lKDRmPQp%2F58uqSPgqm8yQeHUB6UfJzb5P954EXk&X-Amz-Signature=6a456101464d70becfc4d8052bcd02e656cb3f3146c536b2440d186df366c7c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UK4MQ4UE%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T144219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHWcQM%2Bbbhd%2FghZP23RVPTWOP2x6nuXlhJ%2Ff01Ps%2BjRFAiEA6u1oa8NLRemSGIe57Xg61o78P3cMKIFyzvoC26Sxn4Mq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDGFwm1it6UvfMS34ayrcA3C%2FBWksP6a6kNTx%2B%2BI2TKLz0zT%2Bizq02%2Ff2%2BR19dScU%2Fa1mKmrcg2%2BYIV9Nit%2FS8WVXkbltGUB6152YqmHFJoCVH8yLL8AHn6SkbqLw6Ck8%2BTn2zYWMHUqnODO%2BHZQXrpqTNsL55j4zslhnmomoW2NMjXeFdOTf5qVppnHBMya7%2B6i1s8jGqfBsDcZg1xJ59eaHpwv7NCjrlXE3uZvCDq4RPEgP6hZrTJ3TJH2W4L1O3iOQTUYlQFu4P%2BCb7krfTa2YhnMwWVHEDElkeZ2X9lxEA9vb%2FjfIz50x0iQHvaAA2ApGCom0ntc50WeBtFbmqlWyrPl0JCay%2FwyCd3RCJ15XPp71nO5d%2BF2%2BWXolGGIQT5Z6ShwdAC20vUN3ety8B8Ju1i2LnR2MNDy127FACbaWADKAwyLtFGjzp7nyQa%2BemDOL5D%2BhYEPRFR%2FoZ%2B4KXs5JVnrt9dgQKvt2E8HjA7WvQaJ%2BMF9mTXmW59Iegw3gfFWQMi3DgXxbcL2HIBKgBfMs4CB93SKKz9%2BP2xFwE71YTBuiU6kUT0tDhju5PZ63WKFGqxPEuIoSIRGEUBNitwS3oTRpqYKkprHyiwsyZu%2BgvmLU77vmfy9MkP8KxnrUiBiEpevA2hlnasMuMNam0MkGOqUBJyD8PkLVF2GKhfNI5m0WBuE1tpCVzSdF5WvxL2n0vHmlq0RPXM4bHaQmL%2By6AKUoyaYzF3MmhLXSeHCg5FNDoE6MuE694FyylU6pYa3PskOG28c3y3iOh9Gnl81GR3COsQbaK3xFXzxcUWsll%2F2HBxlhLUonuS2gOPKfjxqLRpm6mrdou1QU1watqEf7wVccLf%2F1X6UexUo64yqAhe7r21eSICif&X-Amz-Signature=105bbfbead83f228f883d80b8828d7ab495cf3412c99a027ca41ab80ed84e178&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

