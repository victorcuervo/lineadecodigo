---
title: Mensajes emergentes con popover en HTML5
description: "Uso del atributo popover para poder generar mensajes emergentes con popover en HTML5 en los que se pueda incluir cualquier contenido."
lastUpdated: 2024-01-30
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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EU2EKTN%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T024837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQC5Nvw5tcdoLQTtME9hFvE6HpZ9eGE6WIGJT5S%2B7awvDQIhALGvTkga7aQpvDLv4hAbJMcxxXcjJLgnG3Zqblz2JNgGKv8DCDsQABoMNjM3NDIzMTgzODA1IgzScjWFrJfLhVPPqU4q3APHU5XkwlZdKXC7tiC2nbg28Lkl55XUtGJOwtJ0UmRv60mjzFJrdEVNVFrk4RwMP06BwG%2BmATFxUtuhnuoj7AkCaag1v9CaUckI8jTz%2B20z60OVuQczOAx6ylCRD8AncywoCz%2BQ6klkB9J04HIdRpFHbnwG7Q5tcYzjjMItDAgobMYE8p9rn%2BPx%2BrDmGhiljq%2B%2FSoemeKCPvdNbZs9gP%2FpxR%2FEoyZiZv4jKzqVtkfDciJRyfAXlXCodDmWbVl6nXIZ8TGT97cJRAyyq5rc8od7t2J3Cdyft6WkrVJ7n6qxWfSoMs5EumZwprcMerYEXP5U2PfwoTIYDgFIIntXzxm4I7ZXNUwZb2GOytF05xbj6ZXhq8e7XRoVtldPTemxW2cYvNeE1R0Ovz%2FKPLxHnpNTY4I5PqfQlt0bX8%2BOyxetczZlQhGJHqoSDt1Qgq8tGFwd6apkxUARUDt2%2FWH22oIrv%2BeC1RgtDDSlLx1RCNT10bbOqoMqTDDxCuUIpKWGKxSzM2F3Woq0Ntbr5Uh5yA7QtzD9Cn5Q2Mw75II2QtIZWPKMvDz4WPQ7nffKnF6xr93Z9LlpwxCeJZ12mc8PSaHyEP2O3eX%2BienhBRoKjY8JC%2FbiryZzv3orlaf1X1DCG1cPJBjqkAT0dY%2FxvUu9EE8u8h5Z6vc3WipCN2A5lyzpDNGG%2BCD%2Fdqu63%2BHoZ%2FYC%2FFjv5piniqmyZ6LzeDcsGFRFim43SDQOG8UL0JCaMyGy7xhvwtkbuA1yiXs%2FUzwFx%2BwiLSa7VZfDmHuhXbMAsiE5IailuC5otEijX3FYquyBGhe6vjP0hys8ZQPqQ%2BBRcbdpc7j8iI4k7CDDKAht8JCfOMVtCYJwriHTg&X-Amz-Signature=b4980a7897145aa04a0d89fd5baff89b7f4cbfbc57dbd93e3a1f66e4062bcfcf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBEYEWLG%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T024837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIHf2y3RhKiOfJvsL8V%2BUQZ2asm2x3lxG8TxgYufsTBPEAiBSyFENoVd6qPPrOlydmsFi79KJNumqH0FegxBeFJ6Zoir%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMtjdfNl0RZwiGsniIKtwDJJLz4MNOKpeZeOeDpoiarfjgVYQ8qKMNc7j8v4FVE0Moqfafl98%2BrM%2BG4muInQR%2FTPvgDq0xHp%2FL0HhXmstzljC1zGSCBHk8BGStyW6VaOOO1ZC3a6Q0w1U0qNa63EJzEJVzhBtkSs4ISFHIzZ1QW3wElPF0hQ7oPqCZoa5zQNoXuiKB4MdK8%2BoJDtGpCXptZ9KpwBgraF1iuqAPG8xjV384sKA%2BTKsEtp9UTZ5n5xDd8rQV9UjxiR1TDnwrs6LpHoHw6MqUTL1QTwOI591E6XRpwJh0MpJOdnnkSdfFVrCf9yEnDkrbty8Ftg2w1gODofLdZ%2B2F6GeRE%2FArPJgCRZIUH6dFQ1HIJJuyHLfeAS%2BrQ53anmWF3L%2FZpjHuLriUEb16m63EaCUdLx70cP0ZpLvK82TLhy8N4Cn%2FYq7g2zGeanWctl7SMt55s5MRq8nHPQpudHg5EaBc4%2BXXmoSP0%2F6ca31uYd8DXq51WzssJIp408ADjTR%2FfHxxFzxH2%2FVWpcrtuay2Ylv6OpjgLRPqFN%2BZRXSIGqCPerk33tJzeiiigMw1a%2Fp8tl7tQWYwnlRRRmN4WQ%2Bl7d7rVhhuZZ5eDgS0lsKnwZrWT7%2BbUxzYSwTbVQ7JNaUYky8iq5AwqtTDyQY6pgGFRqAf%2Fl0GtPolwU8EuO8zOBwTmUtmN3nzrBQjMfE%2FvhMrPjHYgfDLPXnEa21%2FSg0PT9GBqtr%2Bu%2BpVoHAciRMENUrxkCW2jrMS8zjAqQEnDvfGUa5QZjPwVoNDx6zPSjvwNTgXh6eP9EZ8nL8WrZBzpGp0YGw22wA0VHisJ%2F1tA9RQN31%2FeBB76kjXymmfG2jhH6r39DSmcIr%2Fjk5wTF4tclG%2FdDt2&X-Amz-Signature=3436fea6b6466400483956842fc01f7b14a35c93872d0e2cfd60b0ce1417273e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

