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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MXM4HKW%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T235756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuzSZkmcT2prwEvNuO%2FLTXyeRlmQmA0ZrdMKMeqvK2yAIhAPrg7I%2B%2FOSTLVT8%2FKNgmfsNZQmUi5YMmBSmVp1JJ%2BZmuKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwwMTJpp%2BIBwuYGoakq3APdth1ZsQTk3ln8fiaVcE6YxV99MFl%2FIyt1oFOpCRpm1MdxBYIqvP%2Bo5N1ItypbofxbJ0VVkZnCoBgipbGL8J4%2Bwou5H2Xx%2BFK38x4fv7vfR5%2BvP2E%2BUUOm8xOExSe4ZNk8npvM2f6yjyOdEcH1jNeMNyLTq3UqpUcLB675I1QSMilailIVUM9v5jeNBAviqJGQzIMCk%2FxT%2F0MDBc%2Bw3tSHG3FYb7y0FkwVJibSOHbqVNG2fHc33v8VC%2BGyXadZ6F%2BJkJSaZSmQHcAZiyaPkYiaDyLmLx2Y3MvXsNWYRsv6qGywrewKSDWbAFsDK5nIBcs18NXTMXHRWT%2BqT7pUEzwcepH8uXlxlYkx4GFapmU3Sm4BepeEfnTab0efIDMw8U4bpkjN95PCirS9WvNi0tS7xdnQLfRneR42Dc0iPfHoHKCC4nPv18JyM6At13wJw8JEBZQzCam1wfiqycaIYLDm5Gdrf5%2Fu%2BMo10MeYQWBKRQ%2Be1f7WqaL%2FL4R8XksJuFhFM2sANuSGI2%2FtvA%2FiFOHtyEi3zgAgFeYfSXx9eswS3omoTaTWhAqIX7gxbcDu5wTuZMxsfOSMzuko05Y1pYJHGG17BLlfdtMksZTitC3GFeJ8iVXre2DU%2F931fDCJw93JBjqkAVsagvloBrT4jawx11kjH%2BXZQROR%2FdXgP9ixVH5s3L4DmQXcUavYHG1de7lNbMB8LeRfCEBxTqY8GAefsEn7%2BKda0uP%2BHvK%2F9uIA5l3h%2B5nN%2BLsQ9hqEyJcAl650wkOwkllAH42Lgbcz1T4xLloGqtGhf4mM6M3riB65%2FGslrgUqGpAQnA83f944kjCV0p7afFLNjFM2WbR1h%2Bb7KbTg65yuh15h&X-Amz-Signature=271a1991530d0f51abbeb69f4f32c9be3a08500b103950bdd2c8aa4ee445987a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4CBWREO%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T235756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBvP2eJ1W6ZeuqcxpZuR9XRGzUNqv4YCfqYoPH%2BcGQxMAiAOBmgE1Rh%2B6AfHqf28WqV8iylXrbjGDEZD3ySJ7dlXBSqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMN40oXZKYzwRxgeFNKtwDKKWSzlJwmtdl15%2BZyjHa5viJDMgAPEEZbbR%2B8A8%2Fxd%2FoaT6uCWbihgTPVFyLnMa5klYlENP5PUGoAdjgWukT0TaNunwvmjmmHPKAPti%2FRNjq0ffgeNpEgP7jXTIssesF6kxrzqtRWgueN4slnqGYEl3FoIbEN%2FEwIKXVu3DhQER8sgIynnO7tAj%2FWxmuvjZDkRYB9nl03hEqAhljtALZHwyMav9HT9OGOw5d1H99fL1C%2BBamUCbpv8HILIb7wHuaYzc%2BeEzU5x3CzQ%2BoAHOTwHKRVfYJ9%2Bg5yn%2B0tLI9wwfDU%2B7K3Sih7Xsw9W13ylXypNxbNvo%2FpACbqJJNlfacL%2FuyVTTTXb5Ibdxrosx2ewa1p9KLiYDyZNk7y%2FNEVNYhBOMVNaviiC8Z9VXqQIIb1KyNBl5uiZ3HN3poZjN70pM%2Fec6LL07Lsp9zuSKiC5z%2BkyJluMfbSgQAFGZjEdlYabHQ15iPX9Cno2W50JmtaB5yKS4DgZnyVIxUCy5xVYECrnsWnCQ7dRrrl6fjFGMrWik8dsnuPT6wf4kzoCTkFh07HdIJN%2FXRi8jlkqtXJ7E9KCqG6y5BROutWclFa%2BtONIX66UHt2rblDUJEinj7CAWsrxVsuP%2F5BoXfWGIwicPdyQY6pgFoJ8Tugga5Mz4Z7SFosn7dWoRqXJIBWl1UCRdehlwW2UpXflIXNXPjPTe3i8lQv%2FHXlq8yRjv5Y4jVAH660TtG71Y0PzTWozWZX18CB3IOkO%2FujEMNRq9qah%2BPCt3sbnxNdz2VydN5eHLFo4j92r12j3XxnFge%2BpiZ%2Bj2dPqwDAwVzikGNrotihw%2FBNZfew1CVNYcOqeEe9jT6t%2By8OKs%2BjG2kl%2BI3&X-Amz-Signature=0fd39999f5a8eb20ce8e2ebaed405578f577740a49150600eda8620f9723fcd7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

