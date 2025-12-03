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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBJPIVVD%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T201224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQD7lsyNakyKrnCPyUwCERIVJjlWY9w1dmsqbEdpnbResQIhAJ6VMU6McyhkD%2BysfoaQegpG3kjjNkKv1vX1xpl%2FKgGgKv8DCDQQABoMNjM3NDIzMTgzODA1Igx%2BQnqW6PJNdW4kfE4q3AMY%2FYgkT%2Fc4pD9G6WvescPXcbt3HFeAxDelSUWVpm10Q0N4iX8zFuh3uIG2IgvbKXTuaFo0YglOQhUfIQ7C%2FpApTCwKadZJ4JxSN5%2BPCPSsQ%2FKkQvEZGEryTHI12VwZxl885B7Ydlb6fkvKbJMWf9yvjcocf1PoLq%2BIpFozPFWoATKul7BkbLsd3iZcUgePCU0M8B9rixeA8LfQsD05YSPpUzZ7kdWnm5tYbLwQpXdzJOT4XFb8IS7FVEwqQ64SDec6yeBdHjmNKU2UtLQmqAIOWFQJe4rUWlOHUfY1cU07YkP9j5X7sKjzf6g2dZIjBRgn0r%2FMIlXlSmE19IXj8fkHssFAjRq%2FT6aGU%2F0FF9IkPc%2F3nE4HpmdLZdOcNWoXmAwVhuRHnmM%2BjP%2F%2F8NsDo8ypL2V8n29iDdwCYHCX3TAWvJYyIAMtgmozyqPLTgOEWZN8Y6XsKZ%2B0qQ9mc11r6utnDbzr%2FEVgKRvVc%2F7DMhQXHrA0fyAfcxWsmyh3nXZp4zPk7FQ56xlbqa%2FGhsm3dwLK%2FEgBVoTEL%2BBTUB8l4kaP9OjZjHHmk8jjlBYevy2zixUN5L4hrZGF35dOD9pgqhDSU9k3mqwp47mEwUg5%2B2x%2BJwbWkcIbmMzH5zcmGTCIksLJBjqkAcjq3W%2F4iUVZGrZMlyVgEDs0%2Bq8lkXJsyncLl5iW403NtHjrcsIcAd9%2FrbbOMGWMqYd3U57wyf%2B%2B18198U60WHxdCsA0o8iZjKSZb6x4dTSlQeNMNEOBndqm7y03t%2FGvmE87DVz3ITxqOxFii61T8sjF16vU0P5XZVx3Zf%2B0pVjxIUAT%2B4EEU4TlYaNI87QH3c674u6dOohphce2CRydJg63n5av&X-Amz-Signature=fb3516be90df31b0fb79c45ca49c9ea8859efed5de5a65b89134c101dce7379a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNC47ICT%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T201224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIDWetQDvpBu%2BzXDeXh%2FzQRjXAZrIOddP%2FG5cnJN5UoczAiEAhkPF4pqp%2Bsv9iugOIt7pLF2O8tz0MD%2BmG7n8P3nzytAq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDPNVXynXOCMlLRGw2CrcA6vc5RDLb1JJmrxQRnZHGuJxTUYTmhWzayFvlhezeXSPRkDjqoblSHzwJP0ne0RcPEls6QJpLFNF9%2Btx%2FREU%2F2TbItF8%2FQeqIVYgZPKOvdUlB7SmiVQsUpcHYR0bP%2BWdoj%2FGc4WVRDvNS7xNF2MZ1ZSV5%2B8IuJEQH6SFksGuGtMSXP0%2BcrmfSUzczolnSgyMsCThPzL%2BgvLYCLjYF2ttIbEQkm0Xrcso9gwvPE520GQV6k9vC6pyC9birNJ%2Ba2%2F%2BEu6J7szTHEtOWh8p9m9BPTnjuP209cfjcujkNHrIpGWYTr8eRj%2FRnIiyP41%2Bp29W9oivisOoKlGYpisiu2otpYoeCJhX9TA05u52rycUSk1GZL%2FNjO1oHPbQ7l%2Bflpt1y1WNc%2FhHDh6oHWDxBrSmFpvPm3ojdk6Ks63nXsHT29yAoHLh82%2FJRgeNV6qnH%2FE%2FhktHTL5VHouUMclIGZgzapE2OWzE7K%2Frt6zkOHGgp1gTVis9qf5UP4uZTs0xQYbPCrKTGcvPpL5Xn7T1MGls9bOfYk%2FK7eGrUN4ggxZOAgWBey3W%2Bn%2BcSIpCGjZy2j%2BpsL83XXGpR3dhh%2Fycr%2B%2BxjCsINF9PQZ3JUbJbEffkt%2Fyt0DGCYotpDijbFB41MKaRwskGOqUBDRrOkAa8hnZdvBI24SNCyYfECoqkZebMQ3zUUk01BKpo481CS9Bznc9xogZk%2F2RVLsOpCbYJ4GZKMHDGmrCt8Wrq6U3jEfOXe1YI3hEZrdS045jc%2BIKZT98HI2KnZHj092CX6EVI5qcBp5zFSaovU7cf97UX2%2F4y7w5HgbUD6ijQ80rpwSSvV9Ifch14ykG38ubEmd3eXEOlfCAV38rZFCogXf7W&X-Amz-Signature=cf205bfb37525957b8238cb64c241bae28353c1e4ee8b29f6de6454846d6244b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

