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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2L5YIVN%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T143531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBCVMtbqxlVtflWRYi6tAcvUXT8%2BkbhcAQyQDuJp6IX4AiA4iKbB3%2FpKNP9DIrQL8g%2BHm3mKzAmcvqDb0WNKDHVXpCqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5%2BFpk2GymJap64o3KtwDdc2lHiUR22j3NldJVugbeVZnaToXeVuvXjs09bwXxQYMGb9vHcA8c%2BRJgRBWdBEsKc5lv5WQ9usk3OT%2BMlUWstRSfsCEInXerGtvDpdxC8Z2PY70sVqP%2B2dTB7pAXgHP58aOXOvTK4kVWR8Ibnt%2BSgQPb5l8eDad7TIQvTxNUfHOsACPpMVigWZcp6tVDTRRGIxaLSOz03MkvBIjA0WSbv7voFeTDWUTSOMfavViLwicHz4kb5YkUhKbQjTJ2qSa6h7fvtWuS0i1wDrjun03shm9mNk8YS1WUYTygncdNEoQFWCK%2F3X0n6StLW4byHG1LbGxjVHI1lEkM%2B%2BnkZbOedfC96usI98R4Tzqew5kEpN%2FMdQORJcxK5ZlaZs0OTJVwYI68wBsjLEdTYh%2FEsBEFylXI%2Bm8XAoCKPfML%2FgULvgfgIYNICQathRp0ItWqsCzMfQcrQpZNoFP%2FslDTU5Ev0PJmOImiruYgs5ok0qhG3MLTWrmNDl5Y2IVkawSNlcI%2Bp03QhIzPh3MNF0N%2B%2FR5lJDj1X36Q8xS14VUZqwmQjn0ERl3sDfJfHbsQTo7MDWOZX7vfuO7B5wFNTdJUbl%2FzqxCWhF3HlAgEs%2BW4AMg976lyRmpI%2F1RX6Xvyj8wmcLbyQY6pgGh7HML7cUH5wzu4bW5H6GD5GoMuAVlVwIv8MM2T%2FIop%2FiypKIStDexsdhD%2BQTJMR8Ix%2F3CtW69JDDX14qh4y16IWQvuymdPHkkQZFoGY0UYJHkG%2FJj0%2B0uvJgweR9pQQjfUAFUO3%2FJ%2FPf4tBp7a6ZUD4rz8Pw5883f6TUrRi2Gf5NYJCFvTR4KSh0wrh6X%2Fq3dO58IDSEO5d3H2ZBO%2BswfOIGA9he2&X-Amz-Signature=3d1f651ded8a082e6114a12c9dd24a17a220d224621d253246e6d85cc46df196&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXFZEFHA%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T143531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAWDf6ygNWHZhtes6oKyVA%2FvwOJrxxbWjPFjLTd4koyYAiEAiBgtSG1%2F9BJWE0JDZ53u3kE0UJ6aEbxRkBLu0ge5qEYqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPMTJqvmSuSV9sqSLircAymki9LmdqRMUHVfStx5vB6YgqUcYvijXB8x%2Fobi3XD6oL%2FLCkHXwTQgTZwF2Nh31ZAnp5%2Fs1Yqnby8oeE7IXHw%2BMMSah%2F0INmuaW8zOqsCo7JaFA3IT9PrejvAI%2B8QWIjwU%2BvsN3qEnJsJB400WNeQKaUY0quABvb%2BYLqm6%2BcGRxLbI9ezxedloEIITA1W0mJHCm1SHASOcBu7ztQq9I4jC4144PRb7rarPRh5Sxi483kERtAMUfQj0fJVFnqeiHB2Y3cOqvPvnNJ%2F3j%2BMJz2DDBrt5rGEC31q%2B5Pr8TfyUWY%2BJRPzD0N0IwfUx372NO2%2B9wo%2BMxjl7z0KN7Z%2BEdk0AXgBDxLaaYbFUqFekvd4MKAo57kEl0hyvWKtGSW9XPHNII14%2BriyKayTTtDzFh0WZKtwm97zRcX%2BnPJtLSWeJYsYW8mRgxClTXEJPXiH0xI1E7q1OuDeKfocGjv5e2RhweKqYqyboq1onlTTQ5bYQFjrbBtOAP1k4tNRY8Iy8Hoh33LTkk660Eu4VWVvyx9NcpWzgQ%2F0yTIY4EdDzzFBypNmcbrmaM%2BIYekAg9u%2F35bp%2FL36rJvpmQJ2Nz%2FBQb00WE7cTaZ5RmCH1zQH7q51d%2BLlQ1e%2BCG2qFd3h%2BMI3C28kGOqUB1ixTm9GktF7viJffErD9iG5O7ixthziPiMrLzIZ8Wkz9GhECqmWjivpn7QVNee0Y3oH3Nz7INQ8Q%2FKee5MnWAMWmxPDt4YRLRe%2FcbOP%2BgLEsbBe15aBiMIEiwMncjg%2BVxLdaRQHdnKn6r7MWio1t3QKfWxpUGdUbaSLys021qUSi4Wn%2FDbKVxzs24lB2g9TVSgccuwedcyp8ipELHRFn5otxxXjs&X-Amz-Signature=40f21162df55bfe6a5cdd4297dc39566d7d62b02bc410753731169eb4b2f2683&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

