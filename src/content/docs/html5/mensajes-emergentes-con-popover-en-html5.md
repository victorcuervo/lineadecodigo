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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QLRNXI4%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T231310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCSWntN5YuqNnStwt6BJ%2FmMryQ%2F3G316d8XLXPUN456zAIhAP%2Fjh%2BPb9taNdlBbRNx%2BropMat152OXilXEwPhY8Yit9Kv8DCGgQABoMNjM3NDIzMTgzODA1Igyl746j669LZZixS1kq3AM%2Flw3%2BkHk1otzY8r8jEZ0rV1CMRapjVzTOb1%2BGFZkRMAR1TSjcy6fy%2FtEFDwZV55fWpHOfgQkhNhWUO%2B33Or5XGi4lMCiCd8oHOpL9YnNuh4a34dk%2BckIlZo6uM7KA5dj7ADxYxIQpVpnpgEk8mwuI4mtxLm4d4CbF9Ul7wNhCugrvuYyL8ZfEv%2BVPXBT71OzN0AlX0UX5koYnQQ21zqBi17ImMrfD9rEg7%2FAgpoPHsnwIlpTlh6%2BJcZkSyFzwyEOV%2FWW5Is%2B%2BG7wNMgvSyJqtVIq6Cot0VEBTgq%2F3wwBmG%2BPC5wld9IgxY5iu0QG9KZX%2B8YSKIccugdTAPbYkLfMPIIkTLTQbm2X4NlfPD08ddItxTTbyqaTupSsQ9IlFMeryR0Xx2qSf%2F77TeRuqZm8KJzNaXgSDYh0nEZIBpeSG1JqBEkrH0uYJJQDTOA5qYMOf3NfNQmsaCqquWJ9jYYROuCXl8QTr%2F6eDJVag%2Fa%2B6Ma6dosCw2ahHwa8g4SIodturG1hyMTzq%2BWIte4Diz9CIW6lGdZKxA2h0v4nXwciYiu%2FiDTDV3ylTW%2FbMy9Gk7lcPK3knbO%2F2P7J7gvo%2BGsLGke%2FhbYIqqNyfs2HATCcBLch%2FTTUpHUZTE6I0TTCoxs3JBjqkAVLiMbn0XXmp5uzTSLC5IrwMQmnuumUanbcN8bpQuTdeHyR9ps6tNeDWMSsaWAtOl6dSGhKGcChjyoQQcvAHq9VFM4BP7pzaiezw766gOZ%2BoobjTx2b4cfrbpoXIsHuKXHmtw8G5zUHsAlc3b9ZJwT%2FJCiQBIMMxhYuLZfu2dXT7%2B5A01CzBYIN6%2BXKe%2FhTZNUs824aHNoMO7kN4mOZtBRpUHIv9&X-Amz-Signature=379fc3de5d6fe4ccd1fc5ff0c65c51c3298aa70a67f102dac8db380b24f21d69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662E42ZG2O%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T231309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0j0skttEvGDYuzfKa4mggz2uxky0SuEtqCFHEB%2BqgrgIgUwSNtRShdaY%2BsDzvtRAgSj5m4RudVnsnkj%2BzzjCHI3gq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDIB9h3SEeRAOuAxK8ircA7JaLvZ%2BEz%2BO8zf4suW9FZbjY3KvitD%2FN9rpo%2FNqa7N57jvoCme2dHE0qCiZFlK%2B28lyO6Z5kv7pxzQ%2BvMMulgKHZuYEJh4PiawdCsPxnz5s7vfdHeh%2Bqly%2F5tT8TCdbd19T7hAAaUlrjZh83aFF1QdWqSjJwZyf0ORXT%2B3yZgyWOdkSnBvpyrp3CfvzcOXwqITjLW9xQP%2FYcjd4wqOIexrSm%2FTmAyVwEGaexNHV5eKViuDriTIzOA2eozvi0yKopwBL6Z50kgWzQvffLROG%2FbZxjbc%2BaUSFm%2FgycgQ7083Q3JU7Cs%2F%2BkddJzNmBmuZlq7ghCb%2Fps%2FNgB1J7y%2B6NQeGiJUqVmwJnndenn8Pk26bvUQFFNCKw0P%2B0TWgoInxJEke%2Ft3FJ%2FjrNzIE%2B1rpSx5jRskVs2n0bGJE%2B7pJyeTk1zA2L%2Fu4pvu79TDJ1x7MxDb5URporSThw8Y3GkIb8VnSk08BbgSj3KyLQ4dZMN%2Bqp1bWj3YXtsGb3dnsz7B%2FeHSIP95xsV6l6YfXw2uVWFQ1QzrDtIXiOHm2RrDyaCmmiHF5HDxZom0uire0KvwMwSgplXNrZZn0TOopzAykDkCM9JH0VsEQTstIKKIq6K2r6nbdYWTUZkO10ZuokMOXFzckGOqUBtzZ2CPocpuX0nSKJw39jQGG5%2FqEzf04LcA5fMnBU255ENBNyYb09MX02aJXgHyrqs7%2BgTBzEhdMQ9strt0QoQfDlavO%2FyZNRLrmvA7MhIPuZwGFI1LY%2Bvox3RCqGZV284JC6LgTJPHfVNhU%2BD4bDyVlpCV%2BfpVPC9EhWh%2FTlmr6bohFYCISaLbCKi3cFiQ0iEZq9dh%2B%2F7KTe5XMXAbI1RxOXLXfJ&X-Amz-Signature=2ab8c38dd0af165996123e21a32d0acd9be0842830c2650e23dac74e1bf1b045&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

