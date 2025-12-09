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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667C6PNM2T%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T101119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHBIpCLEYcRGPTasOb6SbU3juLm%2FDoRCK3W1kJMOUh85AiAX9hDNxhybW5wwz4kqFfZjxe9H2TnyC2lO1hR7fabC1iqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEASBgLSgztrGs9hSKtwDaKZGm12e%2BIWC39kqpJimNV18ML3Gew6XdwZPz7PlRrvMwncM6JC4Ap96m%2FbcZZkkRqIEF3qy7DgDJqFhGIHcOHkg9WcXJF0qagZI3NiD3t8Xo8EJ44QJs3HablLC%2Fot6T9EWOVP%2Bngw5fzg5%2BJirIYwe2H6vzUW0pEv862RO%2FqIdFIDwREV%2Bj5mMTV8wswrA9hldF0ICowNQQedNX2AJSGWgkJUgAzt5MS%2Flcw2wtJTg6h6betB4ImAQXNbZSh9rriHaOEeibeRvJV9g3oJ5A4Nz0xmHsSWvJR71d8DbybIJ3%2FSDYBTqmav5jY7plPMlV6LCjxn5XG2g4Vq1rkDufd0JMKkpBoSPc0HbTuHdv0SChdfRricmg0DjhVAeCGtPEr8HR4V13akeULAhKxK0IQlrgfQNgEeHLf%2B4xIJ8xlozCdChxCoOVL0RVMTm4A9v19Ekk6Jv5y%2BqSmVxL1msLIkYzlRzbuMFjMiWA3NvD3zjoqGJ96TFZKpt6oNnCkkFaKI4Rk0oKfbGCWOdry9Ei50Nc1y17pHy%2B4vJb0sb96kCVyNH8BHxFiwKksR08SITXmy%2FTtcX0BqKC41RiZ0uI1K3YkKPiIoTrCsUeF5kIrY4u8U%2FQ0VIX1z%2FKJowvMTfyQY6pgERazLfJEwI0woVLTKU9SSUmufm0rh1sAklhnD%2BCMu2nKUvEzj5nQTNxrabkeeHSsIfU%2B1HDE6GopD%2BZ5aEFRvM%2F%2BIzMOYzAYxWWj0wb3fKmvhzWVjgppHc%2BmDk3f3TxyIv4nd7TGoGyiYRzoIuqv9BuCyIXXJsakR%2B0hPtQTPwFX%2B9qVQhMxDYDFioZvq%2F%2F82UssX%2F5XUeY90YH%2FQ04uSmU6r2BSQx&X-Amz-Signature=e53e27b7b72109221b429be031741106aeae349677a083bfe6a39c30d43ccc4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BK3IVW2%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T101119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVAqMj38Y5D8Im8T2HdDT2T45xf%2BiyiFJZ6PuSWLyy8AIhAPIsk5kCUI7e%2BBxz%2FmsjnCG2OqQev0Nwx%2F6YFPYCj97VKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzGedFXW4A%2FRYX2xskq3AOEo9c25suweefVw3XaKhPGHZcvINs3bRGY7L2kp3InLHCxyaYjJd7EyF1uid%2BkVJ6YKiwGrMfsC%2B4TZZPVEGREx3T73KmfM69ioVrn4uHgrgrtuUQ8W0Du7QU4kCHIwqW7lD5ljI0%2FCNCi5l4cS70xJkuHipBXhkeEzmvu2ZOc%2FYp86MM59D5eDvp9aqaPK2BWROiAomPhQUdZ185bfNJtjeguEY3CV%2FbZ1Au8%2FVWbzIhH2c7e80uF63y81BKPsgwUnuKbEROvKhjyxXOJFawvSQ%2BLDHgyBC09o3t55XHkBwlPvhoozoDXB2%2BpB6bXzFscPcrpjo7%2BlhF00tJMsMggH7o9T2R7WMIPktDZ3ADi4kLicnzY0Zv6dgvKIW71WK%2FSH8%2F5ujIXQlqcD2zNEbXZjg0t4liJ3Ia9P2%2B17OakgBmhSX4OdTOHlzXbQncrOSINX66myCF6RdAhS1v5KlpxCf0CmPQ%2FzLw61xdZu4H1aiO6WGJkYS7bwvrU68Jnz6T9H%2BU3ud6sqbf9yYaUs8srfDr6rSi88RKk2uxpTPbt6MnM8FNpxf7KKaszsDcxlf4MS01AcXS4uq8VOqmAhKfCUEuOnm%2B%2BPVF%2BiKH9BkU3ln99okuxXYXcfXdv2TCOxN%2FJBjqkAYiXB3I%2BlbSFQl%2BCLJHCr%2BQSa26bBh9lnbK%2Bxf%2FP9DStp0Go3tECHylAWTPWHEK%2B0WwLNUOxFAf8NnwckXDyN%2FuGexJbCfmcuiMF%2BUuBAQ8RcXj9c3RmyeIBn%2FWu5eahldk3E0pNxKbJGneKE1NN4xmFOpKEwYcAO5vJGumh1YEezhtFoodn9s11JqntxP1mSToGZWUpDMBtEE%2F%2FuJ1giCTzeYF7&X-Amz-Signature=b3a2f095d42b41cda7049bfbdeb086a50ec3003cb23d986e03e93deb62939eca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

