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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XNJZKVV%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T184645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPma6X3LiBBoCcaSpn4fQzuhyNhUPbK4MqW8WDGJXj9wIhAML7TXsc1Ts8TeEgTutViT3y2jDxONjXbfwA9XebIXYSKv8DCHoQABoMNjM3NDIzMTgzODA1IgypVsX%2FgZsIu1CrVP8q3AMBzmLYeAFMlwWommhUgfalj8L%2B9NXfp09Clo2228mBQnuh1P3W6Soh%2FcFG1B16cukcJBhc6HLihzK1GgcqP4NQqKJBRL3eS0OD6pKe4MfzFhckyQDuJOVdaI%2BxF0yybs4K1vT%2FSHPQeZiC4KPFyntuM3lLOc08Iu42kqLXji2QIJe%2BLkh45LLYzchdczP8KmjoRe8HXO3ufrwks3GSJYBp3rbbZOEl43kZ9r1T70x47Qc6J0Sdk%2FCFBim%2BpO6nj9g1Ipylz7es6I%2F%2BG4eGIrY7G926mpaQb0Au%2Bv2k9OJznFVqf8xlNQ9hsTC%2BjF4mI9vTIn8R5QM60jAc4YVpssUQ7TIsUqvyoCb%2FLb8LfyidvOCGnX3eJEQ7lh8CBDjVrvnVdrTReADUjRUQ8UFLe69d3GKu1rVkrFzpYvaye6mVjZfTVXHCQl9GA1UKu%2BQXD3rmTWSbSfeEVoZCT34EGRQgWY94bddOUDW9QZ%2FOiYVP4PuAlEyyPHU%2BtmX3rwtKv542B%2FbRuAr4yTl1Ara%2BFoAzMa2LUDdBdeDfPWVyD5U7HN8AAb0wDkqTuyLvDd34LTGKXZrioiJivWWxypK3zfUmjtdKATZ%2Bc2EENhMAUObpLuqtPbCK901C5R0NCzDsytHJBjqkAb3lqGqBhz7FvkGCdET%2BRwdO1z64GvwdRriqnZ7A1g80UbvTfEkQ%2BSeKnzQjAAwmlYvlM7GwbBzyam4mMbGHFUc7Xj6CvAjo6ZCrYD0ORpez3UtAJUQYMSI0gYZgr0oPVYQ%2Bv21fBhEIg5g%2FjI1W19srW7Ebp7UTKmu2%2BzMmEkWtsARKFyqXflZilEMYMSNrSjzCFADQcRwXlKjZEkheo8NPrTK5&X-Amz-Signature=c1e8547b82978b14cc4d289415f9a8efce1ae0b7d65a2238cd2a363f541af9ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMQMAHF3%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T184645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLFHyDObHg%2F3j2c4reT8pCZ1cvRIqItj3YLy%2BLzpKIPAIgNjNMFPnXLZZL94%2BuVDXcJKJTSHJ%2Fb1SkC%2B5eP7fg5xAq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDJarFrk1fkOGTd21TCrcA0t%2FDzM0tZkvhPooz3nkq41U5XKHx6RxECyKnPH6eZakKLQq56d5csw%2FsSzt97gfGbA3o50OBigG0PytvSB%2F0qt%2BQf%2B0U7ur8D%2BpcfF6prAwH5kTyIAE6ZnuLJ6bN4DGhyAiWpRwOo5rlJSNeqNWtJnWqs4ui0CMVrs4Tuqktbz5sCfw3HG8xA619i%2Bcjj3A25ZC%2FuRCAgricNJ%2Ba3%2FbHW%2FYmshEmz5JvRwJT7gPB3ifu6PPtA0WApX2Ye3jNnRG%2B7mfJ3H1TAlR2MnSmVIovbDMmqGDfYR3lo%2Bj2uPsY6%2F%2F6DKlHMC0w87PWXGPowx1m95IgpFDuDOX5t%2Bf4svSb5u7WIBVY%2FBLUZ9cy6CyVeYeXH5bKVQjsAXTPW9zmz%2FlOKovxjPHi5AerH1IS5%2Bxi0XdbW05vP8M4JKyNY2Ff9mIy6ASSc1yins39HO%2Bu9vv6jZEINbrp8duO2ZdBcRq8anQkJ7GbJDQTaJCZe14WDlhWOhzPeY%2Bo3gdRppO8nRJiezaecEHcp32rf9mw7tKx%2Bb8euLscwocc%2BcHtP6aVbrdNYfrUOYSgesbRARIrGnouGnOC5Al47YEEGMraOiyrYZgjZ29%2BjL0GskzAei%2BayNroJZNEN4nbY33RiV%2FMLXD0ckGOqUB73DKTpAQzP0T8pnSLMdIK3MAzGJWuxymgAo%2BRlHbiJEwPmadkBnUX3yhUnMWIV8o9XIkpFK4bQsPqmPX69zKeE06uwrm4wzcMF8%2BaSzk1o1uts%2BoxrNwS8JMiX%2F7NGy5CYJdAKZ8Q9XQvIxXfo9HoNnFhVjxZM%2BroHgNZMDLABBswxCrsXQjNhElJAQUteOC20fyvSEB83Z1ZgvnnEXK5TvVrzjJ&X-Amz-Signature=43f290dc935f322a1c158dae234ee427c83094190880e1cee9b47dc78c51e2df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

