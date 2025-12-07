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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIFP6VUA%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T022750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCex8RL%2BrqM%2Fc1EqVsayiE5VqlBoyibLBVJXvceFOuz6AIhAOUY4SemRhMCN98tZviCysNfaLi%2BeB0I4zWOAGXwt%2BZKKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyutJSPShmqDNqHeKEq3AMnPP3T5DeGYlVPFj2b%2B52RPJCSO%2BLjw7ez5p8MUuWyPgtfqXGV9Y2AqyhyoN9Vi4eseDpMn6X%2F4YE2XRrKNhPVWCkbuG%2FUcKZ7wgpX%2B66dNHYwzkT90OnGMbFGslE4vz7%2FXxtQr28ju84ZLGB2LGP0Fbl9guGyRe8PhubPVW%2By7oIk6KNUDx3Ul35B4dj6prS%2Fwjh6hCBRR4rzucnoca2fIav60zklHi9qPfl3pjvJUkhpx3QA0AXhOaJOMrvPx0q8InKgTT8XuvUIUJ5z%2BglEqIGLwLLAZLRWKfOoqIYNSIQDP1jDq8wu8LUCJW6BMBK3cqfNCOyj%2Fir37fpq6Hg1ZiGdAPGx%2Fe4uW6Eg8ZDVxHO%2B8LNOEGWu3O5E12wmNZXL8Y55RLqUb8ehFu14D%2BYgBBSKUNB%2BxPcgRZxa%2FAGH%2FixKVESBJthGY0N5FjYemh6xaOECSHobY%2FCUVs21xAIoq%2FheMkP5dAKmFhvDUhFf3mZGf8WA0Aai4hsrMrcgN7TugJXtmo5fUCOrahI7aejRDzgO95rabVV1F1ulEshyJt7KtgZBYvz8T%2F0H1xO8Ly6ju6SRCxiN44hrixwf50iuArBMFRnMSsiOX7nUaq%2FqNxnzXPf85tikPuSLPzDw%2FdLJBjqkAUt0JkT729ifZqyGFUFd8Lg6rIRsTXTrYxay%2BNBMg5ybjt7jfJ4r9gBc9A7VA%2BugVV68h6LI23LqLIQO7nX3SDKuoTy4CiAJrPhutG7Ll4Ww19XqP1Mm2VrcoW2qKCgFS%2FS%2FsfQFHn2ZKeWPxhXIMGXHZ%2F8YNnGyXq2LIVXK4K2eMUswCRrFSduHDu0kNAqC%2FzmCuYesnnXXi%2BRDBQMgUiOwLzIN&X-Amz-Signature=1bf6c5ac78270160afcf76941dbdec3fd2c9d021076f68b0edcc4d9b9f75e22f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YY4FCNDK%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T022748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICe05g5JEVMFReM%2F4%2BaR7F%2FJRAjq935mMk3zZB%2F1japgAiBQMKSy5MrTUd%2FzfGU7AUZRkWtAgVkHdYeFMLFg%2BscYliqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMY5YCDhUjLXH1WWTKtwDzwTsDANKJLh5d5XbhebW0eUkmMi2fyjYlhWDRYNBFq4kVvH%2BitLbXg5r%2FsrX3pfzpwuCkfr4jh95Ny%2B6EB5Uv9ZO9iTRSt%2Fo6dVIHj5JPQ7sTDZ%2F9Xtozv4%2FFpz2bgj8FgiHPgM8DF8UYddpGpQzl3QANNRKEazBlzb8svbbnzMC0KrTi%2FtLpcFt4V5H1miIQxuGer%2FwZVWzqf%2FydlSzOBnXGsnXcxo9MVlSIjvXEMgpqOqgdK8%2B37u0EMOeOf7AYxx6%2BIvS6KryQ6OUvAxjhzi9lfnzhAvgu%2BoN7BzjpHuhHnCPv%2BLGcisy0jPkIRtdsn2OJr%2FSkRW05DcMLtOWOztO6U%2FUofiXRLiIrucRBZTNNeHZ0L4%2BsbGmG%2FX9johYX5xRFdbAsrPD62RANUv1pXOPLekgo0zqSxWbAKoyYSVwMgse23EJBwnYbUDtWg%2BHTC3yeCFdBi3zItoGvG2wWlCO5Y3PvpZY6NKd1iU5Iv6GutkVYucLxDRjavVxl8HLGfl6pNoFoBhw9yqFJkQ8ckGfr5YqstPLcR4n1YsGI3f9g%2Fx%2BM0r6Bi69BZlORswzIalZiUQL4%2BwZ1MpvomDAtvqAtdT681ef%2F%2FXdiUgEtd4m%2FjzsmWPKiyVT7XowsP7SyQY6pgHVOmozKYI6qnTJ5bJvAw3AM2mnm%2BaVq1UJxmurgL7QL1HDlKj8FDNPhE7Az%2BvwYE3Dc%2FxLIIfQyTl5YOjqTWTqqL1JY4OE%2BpnLb1dOTlVi5bwcjOA0wpdLd4%2Bf6WqiuQ7mE%2B666ZuFhzk8gwrEr%2FgbDZ595SuyfNzP863TVgdeV%2B2hzofqZzFYLhKhaZ4BgRhSwDq0pI2%2BYBTc250M2mXcxr2X8DoO&X-Amz-Signature=7a752a5ca65c84eb0d5bc816fff98627ed8ec7df5f52583277085dd86c7320c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

