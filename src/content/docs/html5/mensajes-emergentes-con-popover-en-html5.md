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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OUA3ZS3%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T140823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWVH65783cRVgQm3V8zqpq6f9hqLNIQ6sM5r2rusHdewIgNbe2vG167AxEDYBmQovvp6dyk%2Bge1uBqwQeaK9doPCoqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIhNGR0n5VYjoiapwCrcAw4cj82g2kLM4qYEmoQ1vf2ppeKfgR42F%2BjT3SpJr1DmVeZZaNb8LVlRsp3hqD5b1x1maLMipKfGmIsx69B2GKvQKYHXFS4HVLWnc3UnCDgRJIuSZGM%2BO1MIlRg50l3sIH2Up8nvjhcnW48ByVIkPYOF3PhaG6%2BXumO36OgRNB8EKXmDwiLACSzwh2dTyAmvuLbRRqCHmJWbfHNDJXti2Hv8ZO1C5txqDsxKHdmigKqzGgJI7iXbaTdKi14mvgYeaEFmfYXp1nC55yOGUyEIka3PfcKqUxOPltEk4DK308ZXgOrjeF0cDv6z0gUgyPXHfcm9cNMCs%2F%2BNXKUhKkvT2tDEuZR%2BXqnDVOg%2Bgqzivx7%2B5XuTAhdIzwwPSID7sPzEK5oA996o5fw%2FCU2yh7sBh3Hkq4Tv8TghNYVeNrTiR1e1fw72iNEFGCvCPyl5iRYcQ9xFf%2FaYcaemjYbkjuYUJgS6comj4nkSdaaCdOmSw3YyH6JjdiqGsrY%2BWhKZCti73ad5b3TgFjU0uGDkHGYnuxT31lxpWH6jHXAGaEAbRja2SOwc26eooVnzVsF0%2F2sbB28QeE6jmFwG1cFqh9wD3Fr0ukBEEwcdHlCZR7k32pUx1%2BZnfhM3AUQVX1O%2BMOeP28kGOqUBDOl7IUlitM0deA3v9ByAQt8TBURX09Tg9dnSfXU6YDwcldqORSEwCY7Kt9XN6fVstyr0Wdw2PXMDcnpoHqjpXOgHkwaDJBoBoBINu8VFJPBV8ZNMJQOXIFHeSYXJAfolH%2FqWD8fPUFNMfqaaniDrw6H8E8Yt2JvgwbI4AqrFvd3mCpXbPA2eDa69mE4SaVQeu7%2ByPsghgx4VyEu6hJYznA1fpRhV&X-Amz-Signature=d0f5cc74ea43d26ec2106daf895ed3d3f24aef79685a963a3be6e1aff4b23444&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3DQRL2M%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T140822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHqoSVd%2FUIBXDzjiev41e5KAgibXo0PbxtrdPbR8Vcp8AiEApAY0K6cQr%2FCW5pUd3T0VXPadmE8TSlTH0q1FqCwDphoqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHZIREK3iQewB%2BR1kSrcA2eUv7JUbeHiQqgC%2BTPpri7S0X8iRNIEvtThNTnlAvmfJyw4gK1C2rj2JemNDmtE06dKHT37VnFeN36hpdorw4bcPJlC3DIopWWHM9qjb%2BuobgXJ3hl19rmPAqUjXCXyQreMevVNfGmLjc7wqRV%2B9sCofPog79O91aBaykGdejS7tq73V%2BjuGh7FEqd%2BxMD4fCg%2F9MxPGwJOiPDnYHu%2FZ1mqR1eu%2F8hoM2gGRYE4nYU8xnPX03%2ByCQsNHPqdfUoE4mwrj15ucTvyJnHniiw2HFtp%2BXpWinlvJm4gsA%2BGNhSx4YSmOq%2FwisFABk1E9A96ciKQF%2BqtQzrS%2FZ5PUzyNHxaXB3sQa6A7534g%2Fg2adDGOwfrCj0QecHei3SHBXsLu0zeCUOQJv87ucq%2BwUO1jKlW5sdsXg3Howr5sZMM9q2PVV5bcOlveMjSXONh3FbZEtjvtFRhT%2FZxIPiv9579Ca0lcTxX3voFNUudUKqx1MLHUfQbh%2F8ACxQ0Y%2B%2FfLb5hiManuUcQ2Pv%2B9SLuCUhJD32DQJBzshfELQ3YelT03mc7%2BrBSIqV3d81sQUsSu2mQ%2BHWCmhI9KSr24NDDpLt273SCniUtOwDIQbGjMouNmsuZEBuz2RlKLMoDXl0axMNWP28kGOqUBIIEaTfsiOjj8dk45MtWXIuMJdXGHlArc5Ke3GYicgDy2RkqpovGgwJn7GNc9Q28tF33FqX%2BdueYg6x4hQScX%2F%2BKId3n23lkRYps%2BmKZVjvKe7gH3JGOTOdf9SUKC2xXODmAlk5k9dCQpHLEf6Cm7j683nx9o%2BWMajeU0l%2B2sYEMZVLKoJOyl0yDO8vOCk970V1C6d9LHF4EW3q6JrZ6K7m4xxVmn&X-Amz-Signature=2dd697373ec3d1d784a5eaf2fdd950533089ed3e55fde21457303588b89534aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

