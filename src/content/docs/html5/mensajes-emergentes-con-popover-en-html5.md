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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFN3U6KU%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T032618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDJmsv%2FDvfiX0%2BOEsQALS5PNgWmBjOpPKy8%2FelPGQm1IAiEA4%2Bj9eAYok3z82Em3APdF5%2F%2FdNdsBuAkdqadUDIxijzgq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDN7ErhGtUoXMM36xMircA%2BX3XCzpOVDIAk%2BCaQdGb%2ByV7KtsnIwrK8TCAWyCfJYxxz2aLhrYhWlSBlj4vSvpoyb3fzdm681Td4SNgDFHp%2BjQ98ORq5ObJr60jR42d%2FDE%2FLe00zkgKl1jsPLHdKHuWz0npolXc89g1yLz2NiJfsurjbmvO%2BBC7v6Bl5nEyz%2BARuTNe2VUrfVo%2B%2FB130DxNvXMXYTwK99ShXZ8HZo9XhcsMk7yn5U%2BUeuDNmgtSs3mvFZpjW9XJrfK%2FtBxZqIro8cM8U6ah6aSBPZAfJWgyQoD%2F2%2BS5YH0vnrmoLbFJCkYN3Du8wibd1OrHmxPpaL5H7Q497jXeQhDM40O3SB1h5aerbGzJLYL%2Fo6SZScKjo9iKYr4o5WfaiqfJQkEDie72cdWaNvrwwUiA7o7bGEPnqdN0gS9XaLCIooJrOW5cw1YGOi9juzZ094wyJTDNu3AXoncmfWAWa2Iu5Mea5aLOnJj%2BgMu85tYoLcYU22fMPzXYFGbF2VTWD%2BLEcoOF%2BBG7tcXpB1%2BGaFciDqZ7WzDARoocElx8UE7f8tOFxdsLp09BeI53UVYLgf9dDIlCnCVJaCDxGIfhR4N%2BgiZKjG8FB7MrFVn9LbuM7bMNqAOKEYaijSTmiBXgLV0mY6%2BMLSMyMkGOqUBDlC3R6joRQyt7g5NheeQEHbmVQx0otJH%2F3uBP9di9zsYzRj0xcBvxQbFe0%2FoYsexB1L4smH6a3qw9qoYfLQGVx0hcdZic92T53YJTHf37kMjQJtJh%2FA76YjgQVfa37AabUvy5GN6x8XcXPFi7FcylMiryC9vAKoq8mkX4kWVuhGglyZu3qbWptuoGj%2F%2B%2B7DZWRRag35p%2Bw%2BLXtANVPykKGkjLa20&X-Amz-Signature=0ee5bf1056262477366cb57f0fb9f12c43fac25fcc0f10b9e8123f1959063160&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TSP3R7W%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T032618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC8YPPz%2B4%2BQdJsNu7UhTkZLzn5k%2B0sau5E11vsQPrsVpgIgcJ99gWn3HttNrr3S1luBZgOXEhydYyqqs4noTz8gm2Uq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDOL2M5GBYdJrKdRbSyrcA7gXlisQ5ClyDsiWt35XIn1BtY%2FykCO9mL2qXDUibvKkw%2F1PZHjz9WgQ2UCxysGAoFFrGsDypqTw8K8eba%2FhOerSYMAqMEY7Wy6Js77a4Efs0QOyoRUjp%2FoxQgKYMkLbO0Sc1aiNWzzXaOMlq14Tjf96bpwnAvxBZhhxeAU2TQ0K8GnHvmgEaheMEIgxg0O4zw7VF3pms3CehERKUxZ86ab7C%2FZ79vE6DMDno9NEE9bcdyzbYmDhuNr0DYIz5Tv17Giv57t1NAQqhiFo2wCaH9srskWhTU3n9AnjfT4OVjev%2Ff02t9eYh%2FHaop034Eo%2FfCu8u90lcvjHCnQRFQHbqTMRUVYE%2BvlQUbl3oRcir2b4wemzU9oZEy0O4wmXQkhxfMmRwyp%2FgQk%2ByzhNelpTuwF2CWPTdo9JKsif87qk0yPs0WqWS%2FiVXBm6yIgUFie7dSecAYI59s2mG0HEnQYBhdFxwmLzkOB0xqzGjr%2BGAt5wbHKHcddsrdFvUL5YvROe4H9Tgfb80rUyow1qwS1dXy0xfmaUQN%2BQzzrA81j57JpLOXSpJKqYKynmKxALXjLpLkXptWMKKTUa8AiU9blKpUtTP0NWzWLC0Lxu%2Fbtf%2FRACSryyqyoO2ZS5kyFtMPSLyMkGOqUBfpP4b6SIVfDsbs6tQIHJQCIdJTWrfMkgPHqzHKd%2Fe1ANxwhpGN0XV12gHf7aiAxGdPS0hTwgLgHsGHtV7njwLKLb20W8lp9BKCmb6oxt%2FcCDybu%2Fy2ITEPXPAAeW8XNvG6f472Fk5Yg%2BsIrKdQTg0lI4cJEYEtveyat0JV79b9sJw3haiw2ylh3SpMauiklbvIfpm%2BgSJjGA3dSlIC71jg0V1jcW&X-Amz-Signature=febf7f54417d26a913227b9c1cc4a0a740cc4ff176c10815bdb7cb027296b967&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

