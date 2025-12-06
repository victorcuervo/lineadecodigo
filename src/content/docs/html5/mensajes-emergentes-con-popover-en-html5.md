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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DP5IPRH%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T223501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6c%2B2YJ5fpMrGFv9p2bKSw0P1s%2BXFNthxOp7T4N%2Ba7cQIgMpDE%2FEZw%2FA8AMH9%2Fl1MeQvl66wP4X9bfP930oKlgebkq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDF%2Byqx52dzCVHMGaLCrcAxKCwl6z8ryuuNf%2B7cG3VDxBeOMEoE%2F7urfkpPkKG7LtdQGOjwj20ye9eozn1zH3F2KrX%2Fk2AZjIvYtIbqmzDRy1AmRd2hc9UXH6T4a9Eim6suH2n15krA6a9MyIC9XoqOMzk6VQ%2BTBFnaQJ9XYEesJgnlR8nCtdfJ7Vgw20IKXmv4xvHNXqYHNc%2BQAaX7mtcFl1gzHVdjhi%2BwGid0GhbcT321vDhmYEi37gMpB6K3rr2sbPDuoYkqPzPbiuPgGWvZvTL7Uj3rxUlDntaokDKFeNaVuC9h2KPVzSNXLgomQLhNWZLX%2F13%2BuxRv1EwTwX%2FRlzPPanbzmFzMfUhb2s2R%2BDbSAghn1shMP6IH4sjFNO3dkG9XW%2BhMu0zJ2qWi9vtDSTXIczsPggZlNnN%2BkIchpW798lwdF3OKAbKwQi2VI7FcA6zt7c2wxB0y7iDHHbMFlRjS9Jo4McTzqDb2pPfQkOCDXtRO4kZZfcsAjcFJ%2FdfPlO3TParKkyI3m2CP9BJ2KW8ySgdoCsNxqNiAk1EeHNc%2F5CunQB1rfuwVOo84Au2Px9J6Gvo0Ht%2FqDLq187oSi1t7n%2FdzjcxsVu7L60%2FyvWAG70ZPUsOi2Qpq3oR57VG3b0YNWUBdmAzJZpMOzT0skGOqUBdatQcyE2kUbjec8s%2BRmoQp5Tt6HnV1sjNcGfyTGqd9dTcqdPXGZg2Slmy0IaxVVq%2FKyHkKcVW7nDQFLieqdJfl1Gno61%2Bk7zkymK77lEBBHusrZ4nURs97eQv0YI21B8mdNZQbadWUkMwmb1Dn5Wub7v4AinafGDGY5zMrlQOLMmQ13AE8r5gB%2F73cGrDx%2FcI2RswwAV%2FG2APxlOpnfMaUnqRFpv&X-Amz-Signature=e16749a6b950a37fe6f4569097f706c36fddf179aea06fd4795742c673b36a33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTFO3JVZ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T223500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPWcALMbcyrc%2BvC22XTXAh5GjY78n8T%2BLCBzi8drjvqQIhAPHaPlIRxu2UnGGuKXQXW0ZuOB8ptYNXw%2F30hlTrlSqOKv8DCH8QABoMNjM3NDIzMTgzODA1Igyz3m%2F88P2FbfZgGdoq3APKuNzZBjw8nv1vWuMpm6BIFSYuMNG0YLvMitkwouvxdd13r2Sj4VlJJ9XbFurDwxr20IuJ3A2Hr%2FGgzhNHB8Hdicx%2BjLXXI5z1iNoO6XIgVjmPi93MEZpfw1Dj%2FK5d6soUgqZGld3WHkCZZ7M3L%2Fq7p3PuiERU4xVgo7%2FXcwqSFkhLLiQ6zOuP8Js3xE1lAFiojAFz46UHlUS5LL8AIB8FIKSKdG8ram8%2BZQh8zUHyDmXn0G%2F595G1BzFkgZB75HNohu2cwkZv3qa9QCfZ4KaVwlT3qfOlpb5CR71jkFOBNWsoE6OFK5DYRktdyPIi%2F7fe5X3U7N8qhjZtUUSG9cHK5KGcrcbUWY84HIRGPGhtSYlDyWJbSWhAmIpDGTDCRJgHOnPmPJbO8dIlT%2BXt8LIG7KPYhMfpZYEM65oKlZ0XwljbZjVGar5EIb%2BbOkly01VK1JcXqwXT1y3B8hpznVYwlNiLVF6RB1nZzohJPI6Jszx8T87rTP4%2FLZSGpb4WYeFr%2B3Rf3BYE66ljpu9QhN2xNf1lTWhXN1WIEpOZNty7RLalS4BSlLt%2BNDcTYwTnidFSXOLws2E%2BwfjcCReKNo%2BfW%2FFrU04yvT7gOb534krzeWQINkuxQcZjV%2BeObzCM09LJBjqkAZoUBk%2FfO1Mo62fCwZkf0lRyPPjgfs4ZAKvYShMhf9bTOAzMYPd%2FxXg1rFuTvTwSvEf20R6AtfMeEi5hOhUXi7OhjcrDALr7S%2BgHOdyNSJTYKDgoFqCXa9qh5G0YAKcPbudAGlp33W07XSfnhh8C%2Bq2vwDDqkCpZ8rRhbLPPmN1%2Brv4%2BgJp%2Fwt9HQGVsLtWx7jNNhFnC5wOhrqxBWAAL%2Btfh8LTi&X-Amz-Signature=504a3930fe02dabf56adeda363b5ac4b019737b64323932d432e290561df90b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

