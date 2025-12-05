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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEJQRQSH%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T185455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1cO2XA30ZqWqaGshQnBIJ8JBd020EWqqpn4cWCw%2BBcgIhAMKUb7nj3SOYuKJjy3GKimC6NAOQI6CIQ8uXiONQzH50Kv8DCGEQABoMNjM3NDIzMTgzODA1Igwmk9eNBXexufCd3vwq3ANuoMWH4Atcta0QkALOY4HhLIlfQYWiVOq0YAMAOP%2FJHrS14V%2FhRmExmsMJFpUZnHV%2Bu%2F3EyrpO4AWP%2BhTDm4KBCgy2YOmLqZtr7cMSc7bjIK%2Bi9xer7FxhHAMF%2FQB9ebplq%2FuBh%2B0EJy%2BiP5Ho95wG1eYwiUqkI1EMqax2fPUP7onir%2BB28oafOzetAYbuxkZn2foEWc3uUcMrf1dOboCcQZwHReJSzDBx77d5lp88zprfdK2KORxs86cLXouKyvxNvT6f5QSzqFki5QPIrPfEh84a9nMbGQ0LlYa%2F2Ez4ua5KhGuj0hc2j63olTgqmrXjFlKGP5bXm7K%2BytHH%2FMSIkN5y7PaOi%2F557TmLxznwS4Zxu2fjoE%2FS2mq2TCfBoaEg7yRqTkzwUKpfdvUHIpMQG43d67owa4U9os6usLPvSVcv99uJQRi5YPEsfk2FnL8Ll5avau1OgWE5MoywV0yGiSZfKl4WB8ru7zy8YW2dDYlWbAxNEthxzrvpbrlYX%2F3kpRHd1ljoIxRhhrIiA8YJu5uA0OCIISWEzDfXSflK30eBPaVEFybBEMvv51TabfNeZDSzpZxRGNXq%2BdByaRtAk3xVtChesN3fpsflJr7oomprwijKhi7xX8GYZTCv9svJBjqkAXhREshNomJYd%2BXqSXHxetxNlUGI%2FL%2B7HF9fG5tWQ62uSXrYLx0hQqbVwx9aWuHtOU%2FqSRaBiOv%2F87fqHcTlSpBlKFJpSBA9A5B5Lek65RCbiIu80w2AnGDoUJXBwiL4bpYwJ3SYlB1Bydvbr1RrUpKLMz%2Fr63bN630Aqq3OiC1IuKS5PqxAm5Lflcpjg%2F%2BlIFzyetYsD5O2CytPEHdnRqsqXJ2Q&X-Amz-Signature=581c0145c56e62179154d78b9213255a6b91fd30f26352a47a9867f46b2f5861&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRA2ST2F%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T185454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFcQchWLMLLkOQ%2BLQq1RmzGVGD4pzBnvSdrk5q0IipMWAiEA1FFnuVNyyt9CTA%2BzzWIJClqSus7qBu8BhbTxe0Kzr50q%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDAUIOjGDVL1JBPMz%2BircAw%2Bpqe10L0vfk0xvvAL4uoWi02sICtlDjoYo%2Fxes4sHt7Qh8KKa3ogDmPc5RlKEyaaLAKpLLKcRiQfXbDaZokPLjiJi8RV3aDJXxeDq42HbiK4kg9OLdmV2jo0barQKDoetVgsDMbajw1vA5mQWxMcKNrUt3oy1%2BCR0qjHhYABl0OPG%2F6u8E0aY%2BxNa7tOErJ%2F1H%2FLdtKJUIqWM1XBAkYlR8v%2BjV%2B8e97dpgsTekGreRrTy%2FvJF4ssGX4%2B7KY4S5WDGy6TG3Pb2SNbLsaLt%2Bfg%2FBx7X80XZtNdPTUE9y%2FpClPoNRsm1i9i2i0Q6iGz6pZrzsT8N%2B0pNtR6PiN5XHa1PP%2Bx0wTr%2BNyy9sAOr9TQgg6zULgnyzLLgCbWZWQ6YO7AMAQhGCZ%2F7MRYX0Gv%2B3RYUjplgT2yGXoj1pubynuLj1TvURYY0OQddR982A0E63K5Lx3w1QY1hHvz99sdsr1UUwOolQZ%2BRrGCxxpvZwNWpvWKP95xdS8PHgCcugpGqPFh67OkRlbXNftzAIPR0Q0iRyyt1qFlhLmT4fk8tpsFatX%2BiFWdZFh4sS%2BkkLd6aPNFFPjj5%2Fk3BAaksPJajRHaIdHkjg8HXETJWcQXd5R0%2FkyVaWZ%2BbxuYlPztufMNfhy8kGOqUBQlMLK04LCnzgiU7c5EUoJq4aHTtYo1LfPxWk9ye8lNkgv3XJc4RCBNwl%2Bu%2BowJfuZ9FbjVXYA%2BbBWayVCJHIHWu9d2wOWVJRrBIRVQu%2Bal%2F4mWAC8nGi3tukFkrH0FfTXi9BVsBbj83ny72lgji%2B4EJSZsNcscaxDGk5d%2BrvDK5LE%2FCyWuUITS3n%2FYIrUJuPgA1vcFf6FePx7RbGcH4dSymKrr0p&X-Amz-Signature=86de61b7f2c7e6a22544f6830c8efbcac8911f412d65ad539a9051e46c2b3b6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

