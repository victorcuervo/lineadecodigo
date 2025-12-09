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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R23U2HMA%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T100507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDf%2Bqc8YoJreJ6WGUORk4rFd9cV3zXYhY%2BlPnimpJ7n5AIhAJY10x1%2Fs3oHeHF6kJR6NI1%2BcLPc36gFajAsXLmWLVu6KogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxoUNr%2BGIpwZQdm%2Bucq3AOMcPYi60l3aUUvZEysexrqpuZAib3tb5fGDCXpzvpEW3oGB8%2Fm8uE7hUd24EQ74j5HpANvSrVUFBQXxobyi4zpnZDDeMqUSRL7wc72krwJ5FlfRvIa91azE1CYWlGLhSbnOKmm9%2BgUhudX6LTmEH%2FFgCe%2Fk8bVr%2BLBOnKmk7g2ZAROHuS1jrBSq1kCoCrXBDr1Vzuuh4o9GXPRwQtDM4lDRV4bk4jZ9gO3hHjntM8DBHWIlN0J4tdGFSHU0M4j7S8hLKE%2FDD1Wme2PfSkEMyP9K5WfbHVFtRQUpcnoWAms515ehKsHLYVlUJ2JHHAChpBbG94ATDaS11x7gJOQsZzNEZeuXntufqvR7MYpsumT8JhOvgW9sUfgYRBamF5HarCk2l%2FI6xzgScF28MPFxfdqWavnQ2HDeYZSXk1GJWOZ7oBej9v%2F5ZRKLfBORYcY1TBrMedkyKBlauMc7ZmTl0ZxQJn5jPbKWsmFR7DN9m5NGEuXSisDdLyVqMmuJ3jgLGb03n98JOVy5gYXJxyMv7suDKxtFOEeRazU1rMBjdqiTlJDmeBpfHRHkQcfrhYUd6j9HBbeoaj748barfn6pz3r9Et04gV985P8Vgts0xTldjCgHb3ADFT6GDY0lTDgxN%2FJBjqkAfsFGDwpyCgorh%2BKF%2Fhb84FjAR1JM%2FNKZgN1WK9lH1MZpPR2Wtikd5MP4Ab6Prejue2fpmxf7%2FnDh4R8ERYtI1PujQyQm4XUWievqXFbQhir4%2FIpwVVPsC8ZUkTqAmDoh22OB2ADfbz9vYCz%2BfIQgdbBKVwmsJEMWn9nTTS2lAv4ZPwXrVmH9W3Pw9gQhgNYK%2BEuUrd8q3CPr4Q%2FVREPxMu12l79&X-Amz-Signature=51dceca6453e02ffe9466316f58e0813e3132f64058708856f6880a68c4adbbb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VCAU4YA%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T100507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA9kg3R%2FUagJixQ5AD9Jbd3PnjZ7x%2FOmKKIqeZwUGrR1AiEAie7c%2B%2FKHFfe0KLm9v51%2FwLTVaWryVBkBgeyzpM0QzGgqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI0kj5rSPc3Thq3QdCrcA1H%2BwEL%2FGiUwkMRN4WUFp4L%2FAvN8yYtMXktH2qZZxsy%2FOBDehVBFi0N0s%2BIoTPIsUQQJnE6WJxY5bprGJ%2FRVM9qmQfrJrpE%2FJnRu51jrVTEdi6%2FIXttHU%2BUSSmVrM%2BfTpQ6agVNCtTHac90eYJCA04gLmfnchGF%2B%2FlvYFXCg56Y6tQWObcZ0Lbls8Vc%2B7RaEIGhPGbK%2BYrd3jkWfk2gJvsGgWD9yATk6D7Rdhb%2Ft%2FvUBAgtoUNDSqFWy535YXSdVxi%2FFS6RrkfvLeT%2BQlmdaN5%2F%2F5KD62v91gus%2BsA0LCP4Nk33rhEY48ajASsh3domGJApJADupk1xhMFeqCh3kbkRq4EoJgsztVyIVc08rvMNIAqD8UxaYzV40B9fuZkc%2FSOOO1oiEEyZDm97dnE0%2BQtINfIAgsO7Mhufv3pqtBnYFzkBS0wcYcpM2IBDNPtDK6QfHrVnKsg2UV%2BdhC6WSfLy8ybI1zS2ennjQgWtAbz1aELt8YnODrOSAlOb5rUEPlAIPdXz%2F1ep8bAcfkTUXfQuQj2cBLLIFdaLr47k1Ym7isEX4Pj9lRklp12m7XdxE%2FjS%2F6sJUoBrmVfzSV61lRHrRQf6k3FppJ5%2Fsb3xuOxzsEoda%2B20h4KsQ77KkMO%2FD38kGOqUBd%2B8euYGY5lL0inXAY6L2MrqWGLSldAscMKqR7%2FwKGBpOIQp%2BqWijl5fLxvjWK70uS8b%2BeA58y6yTfVXe5xaSqgTsDGX3CIH5%2BbTLMUDyHt%2BLFrUzA9iDyT7w%2F3bs6suEKvBY2005z6aeNim%2FoNuUFO5%2FpJb3qhOMz6iisdzfa18YCcLxktfnhJCKYsveVyl2irSaZiZg6wwIeoKLbpbE%2BdDTspa5&X-Amz-Signature=f6bab25630845dbf26c065940702c9fd07ed30747751d1cbcd14228e664b33d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

