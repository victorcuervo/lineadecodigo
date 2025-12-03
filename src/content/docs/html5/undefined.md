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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOXSRNJO%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T201328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIDRqmv64IIoruYvSJIQq5JOQ27LRXGdHn7iVZsJwGvZ2AiANGovMQWPlcyz5CgviXE33n7Zz0O0yUCVY25ip2OflmSr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMax9kqWbUoVyZ0CnxKtwDki8Cmd4%2Bu3%2BMRDI9d4nYLQ0qw3IzZsAB90Yt6OETjzpnSsVXyNcuReqb0kLpwDqQq0lPyu9%2BPq6PSg7VXQNC5Ij7joSY8gumVN1s%2Fqy1oIZiFJsmAtah6ivXe3wYcwfsRqmVVpgY%2Fh%2FeK7CjchuFpeUzAs0Yl5rWQZ48SbTjNh2f9aQoZhGXd0XZzEvhTct%2BR1Dx9148WH1QI61MJaZmSo3Oe3kloRpuYIvmcK1D8JpbNHiGCfPOZUNIGw7csjsedM8KPYCvMQu8HaLNhwV%2FEATOk573f9YBtg5XvSx9SHzrrXCYMcVzgIAF1sAoK81tSaNgR5KPwWECoaFo99uoET9CLyec5MRkhAunQ6X1RShmZeTH4AjitTLLb47Xqhqlm7TMkMgkJl7LoIdpEhS4X47j1nUSqz737T%2BWVIzSzc5jgGwJ7iTpl948PgrW%2F%2FUuHtluVvfsU6h1WqBFmwSwxMG9wLS0uuBfJvOivByHgcapjj4bzqPZ2watP2R4uWt1AQiy8KqntZdhkRLzzv%2FRIHW44bNURdaIahpG4D3qYkJ5FySVOFUOW2eY7XdYufkUl%2BipJoKh7Nm9wzS7xUxNkySDw43m7CoKcYvscvxwfKYt%2F0vsSZtJij6EzHowsZHCyQY6pgHyVbE1XuynOw0piuvB%2BAeCfavsR3luJiiFxEZKgrVSU%2FqXkOttigvB1CGK9zvpkteokmDQbY407t1Uf2bi99wG80OTtBrfLpIvpKaUAXchwjDQfJdFcJ8K%2FNq6ACpv6338GVIMtJ5MaeBoV3ynESiTWqbeH%2FXLMyt%2FEnPPL%2B1Iq1wlNIQt49bQIQ2UybmB%2BSHuyqPtfGXQlnl5T1O5u8gBkzpH7L8B&X-Amz-Signature=3b6929f63fd2fafcec1ff6edbd72ca39c15d9378166524895ad596d32b7b742a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2TCDVQV%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T201328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIGlzQix%2BbbaHn4C7EykZq9gcY3jDhIHpA1tJMt8Oz1bcAiAuBBXqUO67BBpAU5WV8%2B6BoiJi%2B%2FxUc1GhDXswB8ZThCr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMTiyPz2y6mMcglZYrKtwD%2FEU9zwCubfZ8kHzCnW5MRDNOldMWV7LjUkINQwZB3KwYN%2BTa%2FBhXYxEI4DqFDfcfDSnWLJZj2sVIefgCGcWGKkqD%2B1oOVgHrbuIxdQvOi9qYVcdgY8o4J7FofRyNmQPjI7z5uHhS%2Fd%2Fz%2BTs4XAVDCGBTBj%2FnGJ7sFIKL2sCxuoXdJWzZiL2eF91aRdaa7tlUvZwHsMLPGj6soKKfyE0Hvwtatucf79iumuR1IrjeJU3ENLWu7a%2F8ErZz0sgPT93Ybsz9ZajuV2TMprwmhHPgWjzrERrAzVjUtXG1gYhf5fGat2%2Fxo2tOaEFuONf2xc6uvCssOwKmHEDxdCFc2%2FJPg6Oz%2Bq%2B5LYFviXUG30257I%2Fc9di%2F4%2FRKZ9qzkhDgLLhUGK7j7UpVyK6iwmhZ8QtRGN0Snk7hiWF8sl9aggQv93ktDfGQdZlBA1H40j1QORvwP%2FjLRPsCcgPfCm3Jbk1mZsUFCBuX0QYYLjXQV1zrq4YbVDn3xEk5guRu1sS%2FuRvhQopE8K1oLxcQ0gJvKHkGCmSlkUQmhuI1bkXEleg38oeXfdfurbJAHQefJSY7rQV%2FpqUq5MkR9jZMs0aev5j01NeJdBrNNj22YRf9e8njd8VYdkdZ%2BfxL7L63DUgwiJLCyQY6pgG2HKgHNEaf2FGXlZpuJcLNb6H3YeunGLlLredOnQayj8DFCjYNBpnfqgB%2Buw7bgaqObSelaaThM6N4BZzvNstVZ0XabbJYvhCCUGABQzi7g%2BcNTuvX2%2BoJdmswy0VuWvAzcdFVLObujqWqRUsr1GxWcDUmCzyhfGmkfyU9dxyMfgR9kukbKN9m3yq2ZeE1KNLUSQSgu20zTGoG96Mn9xK46NRjfPM2&X-Amz-Signature=53e4c5f9bc6b6315ae1391cb06ab63c501cbe96319527f15075e1fd181c8016c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

