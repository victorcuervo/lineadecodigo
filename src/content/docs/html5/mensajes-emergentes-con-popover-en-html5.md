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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R776KQ6P%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T085320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIHoQWGeQNdlH%2BfrbozUTgKJ8NzkDBitW4iwSrAKnxepxAiAEmqC8qAChaRB1cdXaJfzMKnlHwHol6q25PryD8S2Vnyr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMrYT0%2FomSyAwqM5oLKtwDeQUxI7fKWXC%2B4a9l%2BsJn4IUrErde3iR8Vr8LmfSyZ%2Fx35LV85BH6Lrsp09vV%2F%2Fqqs9Ld6sRJJ6rgspiIC%2FKFtP7koeHQuqfTiOaL2Jv8Pbw%2FfRzQSovh%2BS3YFQ24nkE5COW1%2FyysTtmdZtVBVcUTIdkzHErRDAwUZPHaqBl7a6bFRTD1BzGLIF7WULV%2BGgi7vwNNPHoEU3wmyAyANO%2B%2BMgegV%2BSb6vpMkghqDVEpwNOXRe25xqcndaHA%2Btkk2vg91JXOh2%2BQrn0ToYDBgZYGQOsPkhL0PGa6tth6awJFYXJFGMqgrkImAHbWSqpKMqH3fCR9eZ7W0TrM5X%2FFRssyBR9dJjVsuo88lJfSA%2BrxzO1fW9ZTTppr2IdyMrkYq0NN1i40QzbbMA7HsOiMyZiGEsyM9KqUNFTgs3h8MyoLolwdd3mypsAFUfT6xt2dAChli6zoVYu%2FegHYlsKuZgRa6LzJ51eUap3THzhDMR5rYXk%2FJ%2FOw07jmpyO5NPRop8KLs05o0i39xwcFdKc9jJOdJbvSiDb1w4rtAFyqgDsNAUiVD9jE%2F4pjXpr3KACOkss9Y%2BegEBB3z6kKnwnQPU2nXGYc2JcV5aUprkF3o8uYXj5ySJ%2FE%2BHNRH%2FG%2F%2B0EwnojFyQY6pgEkhoXsOSaf5Dv3vQ5rMOXI2XejYRw7RYZijmAWedvUOkYUErpm%2Flk9gL3pgOYvIOlBaZWLeOiF6q42WZlpR162hPduvC0EUdvodfclLCTadA8IGMtqN43jlbt%2Bpo%2F9h7W8PQ6WdTpmg9x4fii7GqzUzHT7yW0QrvynqhddsFBR3RGO95Y%2FmF5UqAdkRxTLkq9AbUfwOOF3ClulWoXLwnBqUWV89U1e&X-Amz-Signature=20c62dea434daff240bb5cac4d3131afce0641b6652344eaa6e4cb542f7f607b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3QIFS3N%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T085320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIEmoePN2ZfOwfhOw2XBB%2BSKtlSd4ediK2JgCVq3PUS2RAiEAljKsIizpHFd8gyGiHp5wUdsaN9jpQ%2FrOJmwSeLdLR5wq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDBaDNGlqYgmFnxYmrSrcAzTzkx1RvgMBzsjbOjZ1fAVrB50Iinq0OZFtW%2BzA6Uby%2F1sEWIebSkNYmQN1QQrGGbpvEjggqbzTxsnyOwDTUWAuK8bXs5VnxiVUtcra0VlZWStusN4KCFlXJHtMzL7ZwGkvunVWUGz81oM6r5cJYIaWsV8661S2T7QZ5Q%2FQnScTBfCL1leWvpd5rR3Yz6Nmni5nLk2H%2Fxpa8qqy4T1cOfzBue5fAcGuYU1JHAxZ1%2BwOgWsUxPOcKiHqxnhrjpm2ujVPLQVmiCb5jRSCO4R9keFs9xrnBNmqlQHfaTv3S0KMVH9ZRqbZfBphfaCDRViZJdQBo%2BhLEYzcsW%2FRLtTxPiO6r6q%2B9h92bfneESiR1D%2B8UJwIG4G9H1wYG05Ap35pKb3uQJ01tjkrbrJNvIHsmlNTLP7ZtQRIWmLqYE0nyLedAkNOpWPqe3P1bI5yAdXdOeG8sosaZ%2BzhK5apziP9Ib%2FdUEGndRxFk4d8dH20PhZxb6bbycQ5vcqFXWLhm8fLcfiR3EpCfoHannDcAg5lOcbG9f%2FXNfoj5Lv87mTMvVb2jNshXwin6DYtNq0%2B2%2BC4ZG59urgBQCrzc15lb6Hp7IhDiFXjdr5FhknWluFcGToJ5BqH1U3QbSukao3cMP2FxckGOqUBxOyhU6N6sqJPvLIz83fUCQK7jKnGG%2BkFLynyHxtsEwoBzQR0v08EXogtW%2BXSCb3ESb69f8RO6CjQklNodYY26sF3dM%2F%2BvLvAE%2BVYdepHZ0OdF8UKO2tjEbrz7DtXFCOyCjG1Pe7Tz1XlZ%2FeOuysjiS9FNTvXIpMxOPFe3G2B1ymEtBJcUgS%2BTNURSEhHCBi7HxaoWE%2Ba%2FfGM8OViOTz09bvS0AuS&X-Amz-Signature=276fbe05c3cab4a57f2c1929e1e306fe5a4a7493a67b31c466d3ed74979c07d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

