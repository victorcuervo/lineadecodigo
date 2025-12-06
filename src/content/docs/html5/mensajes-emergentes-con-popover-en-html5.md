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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBOP7HAU%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T044621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHMQSAzhRyAhjhri7zDSzVebaZl6WWqQCiT5S1lpTTXcAiEA42sFoBU0C1i3h7dvsVNDVvzEhEIu8hIy1eRMkZ1e08Eq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDOf0%2F7INq5khxYiNuCrcA0xaCFJCiCs1EwV5S11e1w8frQTSBGaJ0IfoJ920wVT7QPCQ0QeIPZUzUUQj9BBPYOxUX3wCdudLbRy%2FbS1nW0%2Fw6LTQxi%2Bt1BdZzKEErx8xzZJZFo4XIxX2d1tRXlGVTyRq63ikjGOK5v2xu%2Fj2YQ5bWtZxDU8jbf2JgzTzNZQL3Oa%2FXKulpcbIJm1uCHKBW3%2BuMm3Ebbe%2Bp9L3GISD2qKg6q91jYQ%2BGSJifNoDMwIkczsTIfPcNpswY%2BA1ltkwGD2vUbMQ%2BQJblpU7DV%2FZfUWMlsMoK4Z1iDiqjY5iFWHkRdM5x1eGhIuh0RqTHC3LwCzpd1a5hBwje3etEE6g8LM%2BFhnJQqiLSbsk9Y%2FHkJYqwm2S3Y4f9IoAy5dp2S5U6MHCRuLUtdE%2Fv%2BaYD3BaD0kXP%2F1Sh1O9iJbuP4WiPy6DHecY%2B2crOzOHaeytU3J63P2kjTnhs%2BP9CG4SJnXd2L1M5O2pUbyivMk1otqu47Iw%2Bzd3bAwByRgxsUVloNKQcCiYLiNdGvac0m7v7bpQyBe64mdaMIAbTIPxY4zSDZLnR%2B3ifiLgkELTi4fEo6nkkK644GfTwWt3k6TthlVm90dewk7OM6jY6I5FoF0dlfSuQB6z4f0YLj5sD4DyMNXezskGOqUBKADJocXw1CrozzN1T722HBqAHYVAKhsfRTJWIDtq10ZStBmkzV58vANuUV3PcYh2cKpNoFxuWWycUnmQOWf%2FvN90hjXxg7svDj9eLVqEG3r0cWt7L6QIUczhlXVjAUER2djAlnV8KJKhiac22GDYktzJvSBG9tTImhsoAYa5ygL7yHfUmbVjRr1Yj7dQeP2uV0eFyBU7reZVOpXHUIj%2BOb29vX4d&X-Amz-Signature=3050a4942738562dcee82840b7eb230261337140dc1d0c3c66af4f7b73aed199&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CQDCSHK%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T044621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3RPgxG7%2FNvv3tpAiNyqfqUJleK3bzzzbAO7JfrkATWgIhAMz5hqQjjS0krzfPgaXRqQ%2FxDlB0%2F1fhqjyIxiCVHhymKv8DCG0QABoMNjM3NDIzMTgzODA1Igxt6mbWrKjpJ2UOIK4q3AMw6B3vspWB6d1jKe89N8dKvC38ki0jEtISgUG5HosMRmCeBf4PNcclRT2Q3XPz8HCqqWyH8wpwfXN2HRQJGppteQBMBmbEtdR7%2FB2%2FsM21j0iKFkWn%2BkLYbEo7%2B3DVxnj4RLc9t6vvrYEAo9hKwbYG47hWU9z7owmCmifls4bxD0RTxeaxiyQhgXzaLmcfsKkWZqb1thO4HCLjahLqr3hcSjIkLaoEx5C9Up8dzL13DCiSLLee3HTnzPiSwR%2BxjPaKmXSP9OIc1XrNrqKp1zogVgYocxJ%2BCNvnyOduwRio%2FqkcEtcsB8WwuaCctarqjUT6KO4re9MtNc%2Fg7GZ%2FAssEdKEweEcSpnTMjCclIu8TEarhg1s7At%2FoVU0E0hYzsFMQJFjYjbme9uYRLJhVbbOAuXhv4Zghyg0hKCg0h4lF2gp9zzznMstdWfhZ8B08dR7JznJ8hFHF6wc5atwwjwA8n%2FHcp4LCStl8JUKOf2XNh83VAqlvRA4jNrX3VQ4F2aQfJRGNUsajUl7BLXkZQdH2XVWmDD7o8ngKK6m2j3C4K65xnciMDWMz6Y3k6G5n%2BemxI6zWyrGiTeLTUzZv2jEl13MxO6iA9FpBQ15xBcs1J6TIG24KvGXQ3znkozD%2F3c7JBjqkAZR3kgILHn3H475w5OTh9Og3COp4BjJwF7rFva4RLkSthl%2FGihsKgQ0oX9rC3s2Wgtxac16ZF%2BZyvIiK%2BxWLqBA%2BI6EkrcEO3yzJAeTp1JtrZYgOkbYS7ywrm%2F4EH7p9tNg0CA%2BKMraf94HUnpQHHr1gpJ0EmGWwLv%2BptaXJjkZX4E4VXcSg1rmCyuBm5Uq4EOmL7TsdV1gPhcpB0KdNUjeC052w&X-Amz-Signature=6ff9df0aff2409c49249de7ba5a4b2a34341f2be943b41ca652b91f7ca4ad49f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

