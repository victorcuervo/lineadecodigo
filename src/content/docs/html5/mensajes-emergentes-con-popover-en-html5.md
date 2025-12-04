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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YJ3KSUW%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T134844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQCkfficyEdMYz1XJwlw3xw5heWKYCD0BKMnF%2Fa0xP2SvgIhAKjwlPVWpFgCRIVbluCqpVqJV%2Fp8PEs%2Bd4SW0Hyk4hl9Kv8DCEYQABoMNjM3NDIzMTgzODA1IgySZypaGMSWmpaQJdMq3ANzNuOm7Qrcq7FoxoNxHHiU2lb07C43h9S4RDxMwSS3tK4jJs74H4hoN2dLi72tK6RzzC545J1YogDyx073DuQM2jXvKD1Ju9rMNPWjehAiz0ckRWR07LtAsQgJuGczwyFqRHYoj6XA13eNC%2BflfSIFqW6Iv%2BujUasoAVWS1D86jpVUrn%2Blyffc2flazxbY7RwWJePWzmeWrzHI%2BPt1ZVsoIkcu0qD0BOEZM7ABt%2FqR%2FIb0rOfwEruQU7DdtpRJPPm4WNaLDB2k7sxwRjQPBjpm8Yf9oJ4SwOHhbk2ni%2BbKjtxBTYuRbjzXwrefRs1D4cp61dZ7vAWK0M9mAN8Zr%2F5677S1MzHqFWclsY0SqxnKbNiBZnLW0MJXWY2RjCwqGKv762qsF5a6m0rI1w2Ckbh8Yv7vfXQpFBWVN%2Fb88zXoJ%2Fy1UE8LKn8slKPLtzuntUWG1S2j73SpipnfLGjwh%2BKMFCAzrSqK2swlg%2BLquBUyuWG22Sk3iv1NVwrPdkqKsSvoZ1dnyOMMdL0Hvs%2FQObnJOF%2BDWubDzUH9bcKv6jFTHuwOIEoEvaszdzkgLBbn%2BcDY70y6sw2gVakB0n3Qu%2FSe%2FrRRQyg9sghj7y%2BTwxG%2FnCn%2FokCaiQwDF2mFaTC5g8bJBjqkAc8AqQZfuu3MaVHlDHeRFPUl6HzFMgZi1OGFs16SZ2u62sbj%2BnUbvp9JmWB8f%2BZAO7KJdYf57I6gAQtfdCj6ciIeIVQmOh4Dipkt5HXCPu0Yl1WO5StcvXYEheaLgtVRZUEKzoKZiqLfsDhjqiVbeM3A5kOPOtZE3KEXwoEEPd3V8mBt%2BKLFMoVpbCxI0E3Y3y1ZsZTZXcTVzbUrdEL24NuEsZnB&X-Amz-Signature=4807a090cc37d2bf514bbdbf2eb617f91a7be2477c627f138f1e54f958784fda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IO6F6AG%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T134843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCfCxdPvawo51OdKSJn5uGljXX1sPGZFqnN8SssRQ%2BJQAIge9lHMM269fqCWhN6t6Ry8OzdHgSeGi%2F2WMZpcpoe%2BKcq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDCbjfu6OoxoJKuMlJircA9%2BG7GnaV8FGfMb2D%2F62ta1R9Vom4tvFUnXhxC99WF26BsyeVf9LMJXuC2u8uRyfaSwjKxy1OQ0ZjmpbkXHn31CAWv3Xa4GYkptTQdRwC4N3ZXcq226kEMw6jOSWXqY9QKtz4qgoI%2F7ywNYw6el8XKCzEkv42Ht7%2FFMqGVclKQ3pJ2l1q%2BcWHnNjhuciQ1aAW4ABIxjNr06fO2YCV5xh73kZbo%2FjAhh1p1HSWDWf9aCSXFmRpcQ2hpsbmIXHzi5qGldF%2FuP3mcjcpUAE5vpL3drfRycZJU87X7mxHQDouxuzeqlMkW7Yw4Uf5NTylAIpSpLlFXK10nWkdj4qUr75W5EP0Txqyl7C3ngBD0e3xNVKWol1Ad9CoLMgcV5JgsgeXKBOLuAAg39Fj5hJbgruycST3lUdNpd8b4gvBRWugSsAwclCj9sNr10bdN%2BwA3uyCZIpKI%2BS341PTEU76QCuCu8lzt2JvrNlI4yhWZM3nGUZyRFTt0eqSdaRp7rhQEo534n%2F4VsMNT8g3bqFXdE7ad980533aYsC%2Bsdky4iZnp6agURv3c9iZo71%2F3R3cJvOtuWBuhe0XJyWnNUi79dat4RS7zpUq3uSCGX77yQxNvFRvvG9zj0tYCi%2B9D11MM%2BgxskGOqUBe4elWI74K%2BDLrSrTOO9WZ1OhfngppU9IqO%2F%2B2jMD4DRKq%2BgyO%2FvyvyJLmJkIpGpD9rWZaerdQxCWuGMvB9Qa3yoak4F5UmOhN8iSCtQzFa%2BHEuTOOeuA7szqcHNkCuAipok9tEp5a5GSzBQI8TR3idgk9%2BHJ9XbovLUwOo6Uidn1IVm1zKs9WATXvdzBLTJwFTLYML0krIWzuO%2BDOaUYpp%2FQnjHJ&X-Amz-Signature=7643b48416aec589f13c9dc7836acf21df34ce6211a64d31c8fd71880b553dae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

