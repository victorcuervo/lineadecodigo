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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AVSBHGZ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T012716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDV7YDkgZe4R0DopNeaVxGMogjTfAwfyKXD4l6YPDDKiAiEA5xukeIHnsXkyjwOPeB22MI4pW9wY1OxTtcviwByAulYq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDCv2Caw4FulAzCX%2BbCrcA%2Ba5oNI1Y12Tdl8Bic7GSp94MBOJWlRxJHZ9hARR8umbgr1s1daAlWx9I7X58E%2B36iD4C%2F6aVYWCrg7OfxVOHnlqIaNqomljpZsaapwgqJIDkY7gDB3ErE%2FkSaHkGPk6KJ7td8ViHXD5gRC7X3nbzjZ6X1Cg4%2B1TNq24xXnpockhiHgXzoXraNJrBhaUZRmMxCq0DSOypYits82ILT186G0neGtN1x%2BWxb0y3KZz5PV1KS14YgKBD%2Bsej4eC%2Fn3z%2FAMiUMaNIhX0nUvJerbxVHdtikLcssQDhPT9Nl3MiXzwEZ9suYuTzV2PzSv9IM13nEu6nsNbF8RoGxO0bsIswg%2BHHGFlQtcgqt3Sp716Mkw5iTGkOgtR8HgNlmF4n5pJ9R9TdW%2ByKd3UewW1%2BDc4Pl3Amhnfs0nDN4Vv3WQjqqqVVQfag5SZAe2NRvLJ2fgeySHm8Cv9acULRwO87syY4sHG1PsVgbDIOaJSOhN%2B9PzehVzmn0aYNNN9Uyh5zrQxb1PFOYxHIOvLDJzX%2B%2Fbc33S%2FuB%2BzK1qYxuiB1zB5mbClx%2BDWB6oVQSiHdOfpqdRPsMQ4k7GXmZPze7mQ3mCUbG42Bxfm32XliT7dCm9sxfUt7eY17t6210GBplt%2FMPWLyMkGOqUBB2XO0dZAucdN7y7S56VYZxbmUcnOTrvLBDpldAA13vknx0NrkGyWwBfM57imDudJThfxxy8oDaZlfXHqnyUvfS5azG0V0%2FOMb%2B8X%2FMD07Wpg%2BBu9sS7FoWEOt0AblvgEjDKl4F3SMa%2FXayvGEmqqAdQjsQjDrDyjOsH6bOxA2lwyvy0tEP0VIx8JfPo09IaQgqixH28AVnd7JUcRO31CCCJAFdqj&X-Amz-Signature=42d7a77abb79f6533fd408d42dda7b97afb68723e6778e4d1f3b3db851b449ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYXR7526%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T012715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCdbql0eFfrBYUohkINGw4dAKnIp1PnnCb7zi9OXx9DMwIhAIf%2BmB46jUPcZUarBAElaCnNHEjtROibSoE04rmQ52NoKv8DCE8QABoMNjM3NDIzMTgzODA1Igzxbs%2B1U0uCKv8kP6cq3AMt7vJQGKpncEyJ7plfknGi%2Bu4ZfYONfwEyol%2FSLSI96t7c0vVufO0ipsExVLYAV20QPTdOS1k0ZzPKv2AdaK86El%2BM%2B0eV19UBS1bs2kmMAGrh7eMADtzAUW%2B0GAJhSIil%2Feitb5vIkfCuNlsMcby1EWyH8MFvyMnqOv7aC%2FzFmwQ8tZrKGKyuaCoEK4FwcMqAqQ896VaX9TvS5CCXzNdT%2Bz4lORf9hjorQtsNpSFmxQ0ogwlcPjYyuup3SAGEvkQxnCPuZK5Fwd9pr1B2MYHCUyP1h3NkzmT1BTPPyLjMSiH09U0v%2FdyoaRETTafwUKGKyxKjbHn5B3bTWQZz6Ty%2BP%2Bie0DbCTLM6qiRHRv2kQVlHHi4%2F7tUuyFS4S8COYu9w0dEWhpkqjOOaiU5BCFOz6QRDH8y%2B%2Fb3rw0a9UERtu1n7fXj1edUW2J7%2Bn9Fyyk9eDzgji%2Ff9Rn%2FhVZ%2FDfwQkalMXCNY1cOgLjCalb8d8NmyyvNSJiCD2Y8%2BonwDOP4UTmgwaEGWX6VD71992anQUZBHS4CFy7WV74rtb%2F5SJRTAZs%2FrmXelJ2G57fn%2FytQPJaRzFqr5pm1oHb83GqeXiQcjKDwtM7yNE1TijrS6TtrrR6kLfPGxSsMv4pzDyjMjJBjqkAZCySznnAWBBNU9TyMz34SYWWuvO1oo5Qn9B9yMlNzXbUwICR43tBGllYpRnqz%2FsYNY5o2nyN9QSzJ3qqQ9EOh6y3qzF8uxnNL6M00dIhRkyOPoO1XNH0w77eGnYkgf4vawAHau4C5Kc1v8cErfOcLeuEGsK6ezxP7cKLyO85EcqscuQ%2FpO%2BaQaPLD2uw3VuzSmSQaUvQa%2FnVsogbh5YRb8nlR9%2B&X-Amz-Signature=010e26711329dee3df1ccd87e2a765e4f03cf05d3764a46caf9c504820176fa2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

