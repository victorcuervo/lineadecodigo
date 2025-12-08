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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2BXO4GD%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T232322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDENtFYlk2UOL2ZFVAta3t2EKHHqD9%2BslQ8PKqMXy1zRgIgaIB2uutcJyhpZfunuwoXMJ6IyT6tDU%2BKVPKTXlGbaMkqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIxqGpECczwFVCmjECrcA4vLXqfqU4xy1rspm689Hq1wa1li4O37POm3bMCImtxlXxpNmg4xIY7vBrak84Slo5Dj0Dl9d%2BpgPxST0cd5pZtmy%2F%2F7zd%2F7Uz%2F3XJZ0q4%2BUcYzZ8CCOW4ldlqdSybGr3JgWCN1gvAGFAwUR7hH2xpldwCiCkPIGrPofyfMZF%2BvV5RKxoZ2dRj30Z%2Bl11Ky6aZ2BsSXtfQuIJTk1iyzxNd1gCBUqNs8k1%2FtlXa2eJd42xqnusGqNta409teTY8GR87cvfu48%2BJCVMq4WbAOB2AfDOVDGpBkF1SjlsvkiuqzjBNfAg4mYcTnruJHbilWYnUys8BCKZiIWcOsJm%2B82FhhqkDdu8i%2B%2FqVCuhTNwo6RG9tnoPfExuPYJva0IgOpFdNGG%2FhpVf8oEhm076GixRz0XIDY1rmlm1G9OI9lSuO84IRNUZOON%2Buergnn3qKWbWDNnZY6kNrIHdzMfqajjLMqheI56a7mJ5D1wbfkdi2CxI0jD6YFsSNcyKXs9%2FxwSNgQ22D7OhSsc13DLQSHwwN4io2TprZAEohbir75sSvxwIjc7L%2Fsr4nRwbDC9%2BntYYgpGfFLPwuXTgSQ0IQoilpZxKZcM%2BhGXbh9ibSzUrncJoV8v%2F2qNO2uu85RiMI%2Bi3ckGOqUBNG8WAuoYvBH7tio8NhVqw8dqcyJxRHzd73jfzUr6lum8ZZZYVUZqvHtJeTaePMmX0B4f6aTKHeV%2FEphz2pikslvsTpy38W6b%2BmwyQOWJ4iOqQ31nYx6J8LKV1X18ikbM6%2Fd83%2FroCOUa9WeccAZVPyGxsn7K5zE0UvW9hlUkH2I4Y6YVIJcKR7%2FywoWDeIOCGdED86QICFKrke0p%2F4VUuEhoJA13&X-Amz-Signature=c7564eee03c2d9702cfef102dffbfa90e9c98b1dae3ed45f48fc875c5859f967&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VENX5AXI%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T232321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICivpkZxVPFa8R5hGX89Sy9Lmc5B%2F7Du2qnFtuXnzOLXAiAO3gJh6aOwymxDJ3%2B9KA2Rmu%2BGFHxt6mcLe%2FZ7SArqHyqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcAGv5fcdBdnFli4ZKtwDVjhvYxf2J%2FQgdyydUNaCCmNRM8fhBp4OTLIC5nX1ny2EBMQNv6azSL08WJeZPVsJyRfe%2BNvJrKzPQ9H3asZj15x0jhJfa8wkeUaa3tsyP7bnpm%2Ft%2B0vsZW3Cpgc5iXPBly2uJ0r2bzKlBtHoN5QlF2XH1eED5KBRyEPXeX3zG7barCNBLJOQzbgWUIhJVpuICCePppky8GAk3EruVsaYtqLunNExIhgz1YLCIYiMqjLOWLI2brxnk%2BcO6jVyghv51y%2FuYgake7HbQSxSCb12In0Ts%2FUxCSXfdbUtO8T5Ee%2BBYMTAbaJ9jhAVvPYLRHpfYAnFQWJT4bXDH9%2B%2B%2By9UIjJ8QI2bS81hqkVisZFxlxbTjvv8lRVFV31jZPoh3fI%2F28GNgObTSJ7NHfe%2BRDMmrG%2Fhy6HDQhhookjwn45z4BzaHcRi21Ro5TslD9OP8hmnum8OiOAtp6fsCIclJtUwuHt27FVjaY%2Bcm7%2FVv2TZy73OFUsCN%2BKqjraJ%2FIiQK4tV4Pb6RZCi5Hs58enugiy1hTN6yJoZI8e9mQ8uzte%2BA68AiV%2Fx%2BFziw0uXfdlCQev9sezH%2F%2FdwyIAJ2yy7Cg8XKJ2wkCRbWQ9OWLSqbYBqqJI%2FKuA96mrpJLCBC%2FQwiaLdyQY6pgEeN%2Bzdtvl2auTi2AThR70Uz1WXpffRI6ZLMxE%2FfQvmoQGGvYFDmwqZGBWCI0IzDdDaCgo8gmNx8H1uzY206VFbLuswjSyU%2B71TcWoXI9LrXkxQczRqDdym6QHg8vlj536xwBfULxa1%2B98NXlPY7%2F3vn9PVHI4nRxdv2xGbJE3xCriyDhNmjgt9q4o26XZr%2FvK9v%2BYEoZQBMdN6%2F2L6FFC%2BefkGYg7t&X-Amz-Signature=b02c66b6f1808fb68310d8d924b9e254d1abf84237dad9ff80726af5e4985b68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

