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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXFYQCLU%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T115239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID5WSugMyHawhwiDFQWJnkoI%2FEy9cX1QYQhyKtqjU0JjAiB%2FZ511%2BUVAFJftirZ0jkBijmqqXVFmY68q%2FwcpMEbo1CqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVrlVins4RVRSX6KjKtwDEi2RrJx0te8mQkx%2BXvod%2Fb5Q%2B%2F4p%2BO58fxTCVe2ynXPXdHkvKhrWzto7Ye0f7HyW5QAaZhg1gNVkICfzChUyLZaGNhuACC%2Fe7ydtHc%2BCSnbOeytBvIr9D%2FhhzSrLzgf%2F1pG40quZTJNq67HkOOgIGyctfVciarl9GZ82RCBJzzaPwLepKezr9aj%2BviF7K6Rr0rQWNh397kc5gYrgkISBjDbTveUhH4ar8Z1M4zo09WY2LAq5uPEEQaFWLcVabA6QwuPxypU6dtF%2FQtVzG%2FfRFaoevh7W6HvRzXhokmiZGRGWq4McvShwxgyoOTd0PLc4CPCR78RbhFQ8bJ0MGZnecXngIp9VTWMaHkJeGknPF2pMmXqEwtPM60%2FXr54HwQIuWDzPEmvlpO913sh6B2bgZdIp1TAIwxwDuhybt%2FvAcH45eImMydIE%2FhNVXbTIqyqHJHOLd40IY2RbKtjesYbDZHclcWhc9op698CxWz0ILA0jFV9dsTkcgGVp5VmZ8dwXScgsROywCiRM29Ovgu8c0FN%2FaAU%2B%2F4XwX51HAzOSLdZz%2BzyE17WG2rpKDy0Ny34FGXwzT1KHeN2aFrDvFHdq%2BHlhy48CCiQkFlRK4Fx6GhFhi6sGe9gndTTC6RUw9%2FLayQY6pgGAyb%2Fh9e3DVl2qdXRRlrGOSLIhSTvQTW9l%2FO4wI%2FlGSzpWXk3YteqrDD2x6rv%2B%2FN%2FOTMCst5pRl7OVQ8MVB8qjN%2FZKTQaZqRjDUJw9Uv2OXjYsaNFkvPHi8jeNDE4lEOQyOp%2Bh4EzIoyA5CiNFmBosTo16Y5sITcHw1pha%2BYpCx3Gh4OsFHW3L%2FE9dKkDCE%2FcgSkVp%2BSfcTpTRSlP6t5DNSbry7nMH&X-Amz-Signature=acaf46a38c57c7e1e68acce4d1adabb2d90779dcc0f4c856abe389f20d1ab7c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULMICJ2N%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T115239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB3yNF96Dxnaj6ORC9VZG%2Bb0sK6CASut%2Fmmre0SW09GeAiEAwBn5UdZNfOd2s27cVxXEDHgcI7kcX6yJV6Mba2XGG18qiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ3CtBkf2vtbmrweKircA2BaxT4uZ%2B6LK%2FaAIhzaTIqEoI3hXPk48DPbAH5V8%2BdZzeVQIfgk2KSC2vV%2F4XmdZcMhnUxvDe6twhiau0YDWoCxzoicnMvHSZVmTZ%2FpYJ6kFXHMok9cZlpHwpxQWQDukVm%2FHdM3TicXwWLhczzqs2sSjRD0vKOchlyuR8Gcl9antYU0JYrm4OBZcBw5H6%2Ba7gYGTQXD76xJ1RRo78q3Rb%2BBBYjcPbKg6UeDMvRwNp3zU4OZHyUrgKaSlkQawMWIzxHhLtDcb2Wu9oqA19RKuiwhZiGpgCxa1QFqPUb7%2BEA1uqSXqjeTgqa5x5NrDarInsuuryh3vrO4%2Fit3g5uKRRlsA7KDwHTBHpvuLq9mLTUshJF%2BS9SSArHU1XwSJYtTqfuFJNu%2F6KijqhbYVo7Uylcepqlr%2BkldM%2BjfQGaK0rjRUqEzG36QugjghQSms1y97lRx%2BBcN5NGum%2FtVDEZW05bnb4f1Fl5CymrvjJTSTmFv6YBeUbP2XpSgKWSpeDK3sKTfUtk%2BmdKg%2Fln8%2F7QlfjeUMMaoWAt1F0jUqaXYASidNIuKVVQrdV%2BSqPlUb31iupJcet5phpZb%2FWssv6m5TwiBphTJNxSW1RCD99nx7OBSBu%2FQwXf3Ng0VjujQMIvz2skGOqUBBUWb2tm3%2FIYDu7LTtcEeh80OE%2FOSvjxgKUb6EL1mwsGnDXRfoVmWElPs5nKr%2B%2B%2BoZFQQpt52JewlvVe%2FClDVIZKhYlFzhJz5JYpsq%2FAgmXhGAkfusNtQsPVDBY12PVo4XEB7pFu9pHJjbTAd%2FDBKRelVsAk2QBHNwusBRjAa69MqbhR6JvvJSQP7qKjF8oatq3EGAD6OwzS7J%2FloPB5YXu%2FLJjvr&X-Amz-Signature=6906b7cc3dcd56a3aecbb28f7b584d9cdd7c3d7e43bcac6c37f2df2d64b4e544&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

