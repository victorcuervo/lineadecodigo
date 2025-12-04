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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZV43GW7O%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T100215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIDqOaKM%2F%2Bxy0KNaNUWj9tH0reSVLJFr2l4EyOMREA8jrAiEAwRSgwqwEBjTusXbyWqLWKhecb6ORtl7LJHCzLeiPsbwq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDOaVF%2BdDze0OVOzLJyrcA5l1%2BzhoQ2eyzPtVwkNm9YhILUxHQcTZ5aem%2BJzrICGe1Di0mtDPiEFAmdQyxk%2Flyht%2B9C4ejEvleCqUwrpLKM1QGnOPcmNBTsSx8rZa19pNEfTXZ6dY388iECh01JXFZXezwrYXyT5o8hV18mjQlE1EwnSSRyS53ZSgMrwf8rvoh%2FacbUpko6tIGT79QI1icgJQtJPWuKUR2Aup7wyo7Rg4hEwZgnubgn5R7zlewia0h9uRuNkmorbkDXaxYlTBbM4N48%2Bm9G0e43chylFYPpxJZStgD63xCbpzDhJ3rUc%2FvB6XWIPYU0kDasgbL5k0Ljm2Gt9zfowR33HgR2%2Ff56jDnOmqay5kHYPNOwjq3u%2B8U8EgfaQUUe7jj9fckiYZj4VeSfIgf%2FaNcthAt7j2uNgPnPSLJE6uebkKbvKzpwgYloIFryPKZYHZHTMJToV%2BPKmktJ3pVjX3%2BXQI%2FBIRARobcdxaHy7m%2B47JbstdqiGYucTUBCBtsgbURGY8ZTmygd1ezBwyAiWwPTBI7yIxziHLs47gQXpzmtnIeKsUGRNwOiKWPvcFhAr%2Fn5AuukL1Brjbq5seHrQlSRTxlB9LbokhW7Igm6P50j5ZjBS8AkjEOg1WwfnJaZT%2Fgk60MJeqxckGOqUB14QbiLtNIlDR3BBkjGI4aNx4EHRQ4lxTIQW8UZrkRwPjM5GAFkvvh9hDGsq2jSbqI7L3cpdHKJ8CaAI7rRaXr1jXSEtVUq3xtTtVBy0yiTXeWNa%2Bakg5s0SC8Ch0Z6TQycsss9oOr6HR9KnirXE9tFt6%2FXWm0ZBcXk53wUT7iF3Kpva61LcDFapLI85KTqJg9T79820fhopNx06mb9g6oiBH2p20&X-Amz-Signature=3eee67aa375f6459dd99c3dbc965b453eb2d7b49959a6e84ca6e2d0ebfdd6de7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667R7RVUSP%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T100215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQCKTK5OipORD8bgyr%2Fdnmyt%2FfkTQpmwCVDbliZ1oYZtjAIhAO6eaxNNH2mytpWhMejIDuAr8o0SEy6jRAmM7TGnJV9BKv8DCEMQABoMNjM3NDIzMTgzODA1Igx%2BaDs1nL%2B0ZG4nZfwq3APJ0E1%2BSC%2BEJxM6MfbzbImp8ZBiTQjsyGjmlrWsvCZLelebCOwgTa1l8%2BzHu3ctuxvSFlZ4nom4RMZIl%2B90iuxTbrYhDyV%2FMe6OYg01aSnqzUF%2FVqmVYA%2BMItKG1zL08T%2BcVA3SAXnBuF3qcQXY2hjbNZ7HMVlDD9jE8WObivP3UEsMwLQcwQuzXcdC8WkDMBhORJgJhevg1LdTr4w05R2fgR9ZfL4HikxCp0FTERkpTQNtfpdKNS7JZXyk%2FLrIs7G1xpo%2BfzLsjil4A%2FeMYtY4ojJn5cofQuD%2Fy5I9IpWp49uJTipSk2%2FekAhWdZQN8BD%2Fd31Erier7jbOOg%2B6eMFUn52DL%2B%2Fn3IqpYX6vnOXbsmC91SmqePGdVvZlgLoHKMYqT1U3S4CrHChH%2FvkhaCSe2p1jlHLKZ4I1NGUdhPB3jZDs4tka6MO%2Baex4KBoIu6pj8MrvXKD2hpkuwR3qriy8WZfLuKEFv09FI1v8jgwT5lty4SZwk0yZ4cyId7C7y3Ly4HwbEzimnblZt7g9wPLHANIVpyKrLsOKT7BlXtKkHe7%2FRwH9GpgsxRTr8O6P4QvB6c1ptok9WM9Aw95a8zXeVmrOXMjZ5Tkh4Jo4vo3643OI6HaYq7GLF6LpSjDGqsXJBjqkAem0%2Fasuilxr%2FRvveb%2FQR9M544%2F2M%2FY5cB6eoU%2BotuJNbuteDS3c0QfSHkrK2l7Slho9Qx3TpEwmHXM5V11A9IqxgTb7Bb7ZzPR7Z%2By6FWvX4IB0NdLyC%2F8cJ6u3jVgwHzds9Uk6oya0phlghsc8cdRVkkX7HL7XLx3oaLVk9l7OzKqDHDiMDCo%2BqXo07XmrgSJZDEDv55dS04GQNXPS%2FKwodEHn&X-Amz-Signature=fae5bd8ffe52107b652f5beda78aaa07844ca5ee43ce80d255aca9689d627539&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

