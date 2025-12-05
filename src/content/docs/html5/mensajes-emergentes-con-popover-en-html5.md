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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAHG7XOY%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T103310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDKk2rkPpOaEyDwfofAyT%2BtPbapBMIqUjv9gMxaGoI%2B8AiEApc4IcymbopP%2BpguwW%2Fa0A8N3Hv9sLg0F3suPwg61mKwq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDEXskOGlvi%2FDk7m1%2BSrcA%2FuuDxrnqvggODjziAJFQ4CzzDf31XHBXVR73c1fag4UBkK9ZEFd8VznqMFUl6%2Fff53e7tIZSwKx3FePwLgf2S1%2BR50sYZ9nPoRiuE2UNnYgaN6510ASLMsbmnQw%2B1r4LvShELERRlYUji0KfEBxkv5WpL%2B5Xb2JUJlAiwROyB0SXq1JpLCK%2F1bcdO2Y2vzebTpwH3lfmVI5xmwaA1ymLI050awVwio8a8AsTosU0Li32w0aaDGyoMZJCZxyHhPJgyS7WWZzDgnnIKJ%2FghQ5Mo1mYADHIf8P2mvLV16Wlqb2aYP2i5lr0DX%2F5HcO0P1rVXwm%2BYaW8SBrPhQLUsVzrxvNQ5vvy4AhbvYX5q9p7jpEQ2XWD74oCs5AJSpHfRKs6gXSB94te9uRw5PDlVXRnJHiALlWdKoLq%2F3ZmeRTxqVZgVNK82AeEqWPDSMwK1ScQPB8qWF%2FWp1v8M9tyRjDRi9aJ92UYs1OWs5yEycxW973ZytDv8arhVUPgUSiOajZAwUv6PjjTYPBG2lwtaaJajwU42tOBgYtJCImivDr9OpPavCISzpMyRkKCq1ec1Qs4kIu80raH4pF7vJmW%2B0JT2NN%2BgDbRpTieb4wv2B7lCNphzOei2cYIVfk%2B8UNMPTPyskGOqUBssPApD1XkPC5jHpK4rbdeCdzZW3V6JP7uGpi98vSmtd1eJwzOn%2FGYSscD1CopOptIzG7kgFUdmTQQzftHVfHvlJlOZz9JpiDRG4Iy%2BNfIzsv0IijZ7tvEwZWNldp8M3plBmDFY67Db0qvE0P3b9tH%2BsRYAig%2FVKppgnK1uhVaoj7uk4EM9pXmeh1SXEn8R%2Be95D%2BAEHSfQdvBpnAXZPGnGPH%2BSAi&X-Amz-Signature=5edc86eb50d0d3191d8c348cad825e6031da6eaf11f22df6fe8d9a2f3fab9761&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NNFS4WM%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T103310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7TYCiGHghwe6kfReon%2B7ey2mt5QeNl6wmCglhkAoy0wIhAN1Zl0qpeQZS23JKH7Y3FqGhcufKt2xMaoov1R1Got1IKv8DCFsQABoMNjM3NDIzMTgzODA1Igz4fIJ4qstAUcgelXQq3ANTk2BCiX%2BgQSQ7GV3nofQfzt4sIGFDjDtzTFvN9g0HS5%2FmH4j2t3EcDxXlpCgdJLaOdTHS%2FO4u9kvaiPMCv5%2FyCzKHB84jE%2FlR4AkHD9GYiHibTC3aYAjKn4VdiIrfsvy7yNnpzAS2ZuDu1rJ4IUxOZ0c5S%2F3jQ1QOpyVBRITIVbh3Q6Di3VjBQzZfEGkxaSXItUc95VHU757wlDqWIOMWwUWwx9wxcOx%2FXxECw%2BZTodkVwEvO7B4i1XaL3U%2B8KnSev49rkepVv0efvDvOcjWY0qn0jdeJ%2F7dQGB6HesxbKT8YJ9UUV5UBZCGXGbfosPUX9Za0SioQgKMsXiWWQJlPsQ6vyNE3srrB2h0Ga1LODO73grCDPhUnC%2BJlZ9JVScs2OcjWM%2B9pSTB7y%2B30xNK99Z9UfqeXf7IIwv8F41G74h8paSsWqNC1JLxNKe9%2FJrc1Oie8yZFufbUypz%2Fu7b4ilQe4LQnX68NtK6R1epIyPQ60ZzyhrRCvrgBCZRnaFF5CTwMCtvpxdbFQo02JivZhx42XmefVjUOiXxViRQ3%2BQ2xyvQ9qVFFL8aRx4kpV8MZ1BF3uvSXg0pOp7uBBgUMKWiLJrHsvCfIccw98yWsikk4Gb2kWfeX4zxxKWDCKy8rJBjqkAbi0h6PvjOKNZ4BWc%2FfbtdEdD%2BzgJ8z2Roze4pD18efIqvOgVCUzoUazkJqjdHmN9vUjVxpKWczb1poPxTodCl%2BdgQejkxF335Ps%2BDIAG7XGmhPAa8DXKbvV%2FpK8RO6s63OSEX2f7nxMmM0dcxPiTF06%2Bwh7T1dflyDSaDqcXeFfLnV%2F8NB56haM%2BDz%2BHAyOb2%2FhlVmltlH%2Bgtb3s%2BlaNKslbTCA&X-Amz-Signature=c0d51c276175be92dca2eb01def8eb5d011b9ccd8a03c07c44f54ea42be438dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

