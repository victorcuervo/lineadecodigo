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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665I5AUQ7L%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T173958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDZn3dbRxrtUX3uApI2e7olQbaNw6DruCqDA2lp4VP3iAiEAyIByGQxXP9Kd%2Brp95GBmA%2Bdl9bOKnbWQGUO35Q5f5xgq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDMbydUwajAKvJtf17ircAyKhRWC3N%2BKGuh9zcDQ2IPilPsUzwCQ4hr75PVOVJFWEQV4bVbRKaSPArFFR2UEBuoTOsOWn5fwg9VMhrsEiAXhE6GHcVQjNEU%2BGezSgd%2Bq5S1o%2F0cQFLvRpXpalCRsi99kmF%2BwVyU5zddxYG9VSaVZY4cqzBjKaZAtYHRerMYaOTob9hYudvWo0Rpgkyu5k6ktMbeOJMFw9nyvQhKSSVDv0BCp6EkgZ56Isfg4HOWOM8p2jHAffxma%2FSn7ZrQZXv7L7OHRJhaqkEGH20H82EzQqTtFttb1MKeW3CMerw51yucOX%2B9P79oGLxtjVwHDeYfWQdNOha0RPzwRixoGlXoxSPVWSeV8S%2Fih7Uz2uZ5DnHL8vkF4CAdUFpzCkkws2UZ9Erp9Ifbocst1whtAhGsCwwFbSmYUIDnQ%2FcnW%2Bh6WZF1%2BNC1mnhZDYQJvDraS%2Be9CMYasQDqNL8DvixLvXwadGu3jgWNRAiffiUON1nxbN0O5p9HN1kQwxaZjD9wnCpgpt0TSudxhZmcJpGRgL9Y1AQs6CHIQR3QONjzQmBLF8JfWMSDjJwXUdNITYPrI%2Fb6GLTUmBX2BRHZuP%2Bla3MIyMQSYbwBh21Ap%2BnTVXiiRtSvtV4POMWqsDlsINMNfly8kGOqUBi%2F2q13FD5J1BEGlNe8df5mA1RpboBnGxFYyFtWyDYAScs%2FAMyJhbGTRT33mGhZEnyhZXi0tJSpIYKlzLuLxITHfHoXWYD9Ej43Ut696c%2BK56UtwoKoJ2oTc%2FC%2F08C9PWb74C9OTD2KHdyzYWo7xPzAdWCkCkl3aQDmesEqbKqVXWEsVzHDhal8TYylf2Y0i%2Bwig%2FNhTQ8K1PNE%2FH8bo6hIYsxJ1X&X-Amz-Signature=2fb4e9bd08114c6c30cfdff502d3ad5e45a549d9124ca44599449c04d72a33e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJFHDWGI%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T173958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDDLXQNHJCECJsSvqY%2F%2B4R0LXzHs3QDuKgajWjf4XlrdAiEArqSOMo3eQlODQHA7y5z6duiL4ACpbcfb2kPNIRTB%2BR8q%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDCjRSOK69HMBX%2F9FkircA0G8I1GP3OKtSrQ%2FNcGoB%2Btm0WtMmjOHl7FV5Qfh4ncIMSgYGqBUiXdUE%2FN84nvqEndzhf8dPwRp8e6ShZgkFBwp1nTAdKNItO%2FHwzX54vqF7TXE8aL8rhrS%2Bh2X%2BigVyFYVQhRGdDMblSp7J3QTeCA7lLPn2GsEAWWZBYZUf2iSr6FuDgMbuBzGeGuFGio8PLzfnFbNspG%2B%2B2VoLHaHzMBpNAp0f82J7v6lyNWklS8aE7e1TWDvymmY8nA7RSzKRTd2N56iRUNpz%2Bha0x3ik9wZUtd01P3kCfWWZZk5Xu%2Fr34iEAMuTSUGLFcLl7qT7gyjmLAqOCa1StGvVHpAWYWmlYBNfevz1uGVv%2BYxl0%2BkZ75RwFXlxwUHE7nv03a9YHGEVOn147p6Ty5VJQTXSIs8HCCce4h%2BwuXA8PcTussnRCI%2BgRfm9tpI7VQRI9sbly3iSzxgOjC3V2xzVR8meEvGYzrzB2TWdMwW8ItdAYiivD5lBHwfj7VCX5zaNoZyXu8tUR6P8lVIMxeVNfEWvPbmt33Mt%2BuXI9iTUHVx1%2FaBQkj9bQhU0Jl4d05Ml%2Ft33p8ZdayaNXgdZM%2B1i0BFX%2FwO9l1p9tZNu5eHCl%2BM%2FjOY5M0E9L2UXtI9VT2i7MJf1y8kGOqUB8UH6LxUyaOCnBGRX7i%2BEb0TeoclfnpL0GLV4LMJVNPKyWMjAmAG7ux%2F3LCl4N8xu%2Fae3JLG6FrgIgJCVHERfoYp%2FkTASR2eTOXlTRrCgvKyJrn9xLjNEbUzbOi%2BVdbmdwhA1CGj7DX8wvaGTfid6L7EmDS419fnjwbfQWe28rhqwVoiqNGTwEc%2FgX5hOm6QxtvG4wrh%2FdFSwmY6gHnS4VD1wqU%2Bt&X-Amz-Signature=47ff97dfdc0538fcb3d46d74b8bd06ea7cfd5ce823d9e9400afca1a541942fad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

