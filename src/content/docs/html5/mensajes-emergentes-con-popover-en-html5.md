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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623TSMHOK%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T234457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJ7NfbjjSJROwuwaNCGe2fNgbXM2BwvhBIMKpmEF4BMwIhAIKShyLEZJroZjM4F%2FZ9MCaF8MJ7lXLm6IzWxuWaQloLKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwO7pBI%2BMWufspO%2BLkq3APPZP%2BDC5FfZ5JgbykV3y0cYP7jI26z%2F2lGCUWmh%2FYYKdz80eqtBBxfKku%2BiKxPw8N%2BCnKN7uM7KlWmyFeD9Eu0p3NCn9Ataf8y3I7%2FhXhq2xpm20giO7xmHyhkoNUvzyU8P5Qfd%2BUEnIstB9YBu8Wh062zR%2BkCzb6JnGgePvd9gAs6AgHu6YSMYJjjIcTnbTLMZyDu2HPg5wXt2ghYlKz4eKZmrz74HsGewNG%2FOx5Xw9D%2B1xlCpouUkYId3gRZmunDFC%2BbBM9Y6Tg7rVemJJBFlhi%2FjI6W56ekyUN%2Bk0a4SwmoW4jB0znXvN6H0Gt9CV%2FwdliYseDcGhxReJugkxrmWrE%2F%2BWjFrkp3%2FiIS9pmETC99j785jE5Q2qJABWgs4pDFvNjQISyXf6h1ZAuIWkCoGa3jFm8PTXdaUack44FVqQc4i1OOiBVhstXPubVSlqjlTvLUED0H5TsiI6r4ObJh7djFtI4na42eU5xlOnoKm3aksD9uMwyM84rDYSo7znaVJNYO87B4bZv70Db7XrZSetMXOLriexPqbY7lxsJ0T9o87USkFbHxtJ6tF4bPyZKfNSCrnliUN%2BSPoP7IsCxeAYA8bBQ7e%2BgzRAdPt5uRymCdgyEWvcZy1aQyrzCqw93JBjqkAYMbiRMvAeyQdKhInb%2BVTYf6udU8EBV22ljP6OaDUdUwsFRd7JSlBJwqE52G37EG7lCp%2Bwzdk9%2BuZzAYFyq2UfuNt6K13DFymhgofBmbD%2BuMzPVyVwZ07mENDYu3yIOjCcPjMHbwgVvdp2pV7ojWLrgp7Of4RQ84sRzkZ%2B%2BpjDeyDg%2FKb1Q82y%2FPjkn6nc2npTkwVBGyRr%2FI4c1QysGBKM4H%2BiSp&X-Amz-Signature=5319d22be665a576df364b0c4bf67a5ae22f565d5fc17b231e29ff25a195a1c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YQQZGI6%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T234457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH4p3bspjm9wwMl4mp0jBbSAV0K4%2B2nJNnqmnQscqx8ZAiA0oJUTcHpkHPHwhSHkYCD0BX5Yfv49qEOUx4ZUND62cyqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsfeLTr%2FaIDR8RQqrKtwDYvr8Cjq8H0iCfLy1c7qytJmQDsIAVqinBwFvGJWZDqZJYL0R1paDdNLsPCoH2SB%2FR4%2FthIlTC8%2FPHvG8oGzXSe1zc1a7jS%2B8g0%2BK4d%2FfvmsEughM%2FNXo%2FnpG4zVg13H65YqkhgWcU3tvsZznJn1b%2B68zmz9DOAwNfzVpwfHr2G6Xp7ItJRq1LPbgHuxf%2FQBqH7%2F2IfrbqyCPXUtedCVBsGfc1L3ROA15KXmmdgFMtVNkx6CN8uKfCnKcjKcCWXYuJ349gcIww4LJMajkhRp6yQPV0ubTaHa2AALhtPkk7baB5vWM5g%2FWzklQQFxrvxxuzLHwnabRmh6gYdLn9BBaORfmJ9GbUyeLNv9WDCaYZ2VnUc%2B4aiXo9Kv3ZtrJYRtwz616jRZzgz%2FQqK6e0xZ2%2BoJDesQqFGi97S1b101AILcBtOe6YPz8Ax%2F3oKsq5dn7lsrzT5%2BED70ic2YWBUvNgtWMPlfA7S2zDkb1Hqns9fixRfWVD9u8t25ClXSmeS8NDmA2gFORdeewtIfOtduiNoRCyGP19mMmP9JOQF6AcHmYk05wCxII0f3totLusd66fTPVA1XYmtiwyt4CrIb5MeMZiXj2a2MRBDAMRWdnaJheVOA2NHgkjaa9s4Aw18LdyQY6pgHvHmSkrhmL7n0o5SVClwyWitxBO8vVtEAgQknzqvQy8ozeaoC8Bq9gpRn%2BQcAaPQawOt%2FfwX02%2BS5k5UqVbcI%2BP1%2FCBHelmO2Jbq1BKbDXX2iIynHkmgu%2FxKMeNY27iwNCcZulYdelMn75ni5LJoPHxCAaez3PWmcxJANy8IZcKTYMuDfMhc3l84dQokPU2ydlirGrcrcbSxWgcp0j2WlkGHWwO2vo&X-Amz-Signature=b16d80b8cdc046ce0008ccc4ed5c7cf777ae2a7aa497b3bc9ea3868d8b1e6e71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

