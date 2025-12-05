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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S23NP34Y%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T184316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHfxb0FvPyY3lP32X277s8pqYHcXNSwQzT2maeSDnvlxAiACBqd8k1GRunyfRdjk3xGr%2B17M9ufuY3klsUm%2B6K8Qmir%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMmHZOQQK%2BKc%2BPWckmKtwDF%2BuQP62tB%2BeGUUAWxcPQi%2F3KyabbSgnp6kLlaTDutO%2B5yMlTp1%2BgvVq5%2FcngDhzDGtwUsE0ElqCa%2BJiUA4CueiWVXOQD%2BVD%2BefV8LVPkYkwxom68Ebll%2F2e86Pgx15gN8sE8yUxv32Colb6z8Zjlr0QX%2F7EgzkKy%2FUFN7U0VMiYHR0Ss99eclAkqWTgjkfc50AnkpzIzAMLdaoDvxWu6T%2FvPym5ssk7b421Y64acd4%2Bnqp9msXpg7iT7ilbAUC1XHqmlCjJoSGhVJGmqulPdWgiT7k7ppNy7cmcihRwmaqepb0SCiWmrsj1l2XnXtsj1jVCVO9NX8crUeZvhRq8eHkoRoaJRFReANDNdZuE0Sqx9AKVTkhqjc6tbOofHunqQxoRCgFqfrISwerrs3fznqEV2OTdSZYsUH64fYj551D3Sl7BZSvw4zXr38tpqc%2BXvCHibLDIO0EMk8yyUkdOuGnGj%2B4fM%2FTbmwJlx2WikxTHfSADNzd5nK5xUNxzHe9bjv6OOa3oc%2B88wPEjrm3AnQabz%2Fmh3SvVhY9XuZEVF6UybfvRJyYHe551LdlGbgifPt8iEHeK0lmW1XnI6STh3nWnhdMpkCRJqeOdHwN1g8ypbO4Lfi%2FkEMszcB%2Fww3PbLyQY6pgGB1bJgulFH1tNk%2Fjl1u487VjPu2X2rfFyv1visqAAIElggvoh1WYXBatw804hp8j6lsAmeCLeFaoVMxz1caYT391qNDaEkjMkytE0g%2BEMVPkmD%2BcRy17XseV0Alquy5g3%2F6qzNfoIaL6U%2FV4dJ3sn5p2u7vH4vYt6LojO4bqMDNNWeJfbX0ZwPHO5ygienGsuWfQudkN4MSyNlMuE36FGAhoV4UkPx&X-Amz-Signature=8df75fafe6af29f47ecb75a611abb723fbdb7b703da7efc2bec975683248e5f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHXGMWCZ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T184316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCW1Viy6QxBXPiL37S8Vc1nmu%2FVomgqWKzCWDcsTAcF3wIgE18DfcPmLnQk0T%2B9IfYUu9t86u6tnzHuqYtqLr4c82Iq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDNgz1p7VXc2eJQ7kKircA6oX0FVB3I0cwnpE1oOm4lCKFXMtt13G8FVLZxqBmil%2FkGjwRT%2BHZ2Kztb4MyVBb7PMzVL%2FOoTpj8sVWaFTb1wxBr0VT1YAmPsZWgmAFDFEiRQf0%2BO9yidhptZFjwDh5qbW4Meh1YQnQ2Txs8awep%2FqcmPZqFUfUD1AjexBzMraLXVL1MexOX%2BeKBQz7jxhkakLyKvAudNdVS3UarHlpP40u0JdFmMJVS5y9cjeRkgNoSwd2O6gNnISlOPVu%2F6hFuLXwm1zjx4ES7LnzNhE7CUuALg9ERWHFQqH4jfq7QtR7fh%2FYnyCp5XGOjmYTv2QkTkR9TOto5imKPtjnv9VzdHBdcxGop%2BVXPsxgwEZlMlIr9dAu5HI%2BEiLtp6SYbvajx8%2BkGiO6m8O8ND1rOsHVJOg35QjfrnqCdwgAkNGVNep246JvhY01QemX8SMdzGJwKg1XfAvAf1k9%2FpbPgSL0G%2BQBSQiRo%2FKsRlVcYHKh%2B%2Fsi0pdxk%2F%2FHF1sJRPFewhvW9Jhqhdzp%2FoUWpf3fBU247%2B6%2BQ5ega2VMiDXEwtOjwYyt20sM671B84u%2F7WuRqJr5kx7vg15QULYFOVD0vvNmbtgGgOgYMJUuf4AyOuOTWOwYfYZK5%2FxDEFPKFIUUMPLKy8kGOqUBfZ6INgWoCucAWQKJ5evVd2gjggoaEih7NSCNcFleCIth6rIXF0%2FehYcuWTMifb86GXl%2Bca7hYMeIqi1eHc%2BqII%2BmLC%2Ff5FmRwKRZcJu7GwMZs60B9TUWUyxFMws6Eo7MkVWbigYOFiczGKmWK8KfKkMuwPUClXSaFzlEr7VGRSfY%2B1T4d3%2FuEEpTXwkF7TEYc%2FkYACu9LnL%2BZrhVq6B0%2FFqPV9UF&X-Amz-Signature=81af62338e300109fbd95e11f51926ad5d6509840d18e4fa53ee7603c9121085&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

