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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XCDEYPI%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T214634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHiMcAQCU5Wo09rW0sNW1d88JYm%2B4WD4ebw%2FU0xus7AdAiAk0esSpg28fAN06VNYDyN%2Fwu9EkS4mOrAdN0jYY1XkBCqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJttjOiur7%2B5eG8WHKtwDeaqVO1X6JcDyaspuP3rpFZZqIkCAtVzwI7caTZC9buXHR8GetpmULWaULKvdEH7ERmvYDo%2FYGf%2B%2BiAoTNt41Qdl2VQrLX66Qoh6fC%2FR9xd%2FH7uE42bzrR0OLdNyh9bFZqTVXxtpaItvQjdFsVfMpKz1HmQpSJUL1fOwjBvGbtnM6JY0m1KbQGqDL5767gQ1JPAs87%2BLFnq%2B%2BD70caUQ9S3gv3IXbRJZPMCvOnNg2sw%2FznYOUpSFDPD8JI6ESii%2B5IU9YX8bGLPj21U1e%2BHduWBYcA0XC0Q%2BResfvou7N0O2iDCQOoaoEh3z83DYGDNC2xiv1zvFdYUIFVMXYvjP5wzUiNQzNwayHAuD29b3rB8oqwpnXpEHf3Qg4T1R6ON039wtUgOfwfmwsdQFZQ0MOp6x9w2wutgb1tIHghxPQx13%2FwaM2nzq%2FeuVuauAFdnsPYheohLH9x0PcHK0b3YAUpHMJfwMfgn5JV6yXSG0qxi%2BozQNRWYtjLByX9SWaKCNQXqdeHmDJAEMjPVvHqpjGT6nuUempfG7hDRfwYDvJfGAYsrad5FPAPst98pYpohE65fW5YtrWKUN7ferOTSgIcRD5wMQysJBq2IpuRSgp4L5O3thpH0UX7J5CJYMws8fXyQY6pgGk1jQlcdqox3nzpOYpYMWdD02NgQ5LWX2xjl7Pz3JD14Yf8sWl6xLI55phH2Ch%2B5TsJRp4fP9guI%2FjUrAY6ura4pvqKHA%2FwfLhULzOAEOqesgcjQItY9pWxAeQJqCctPIEcTqAXERX6PbF7vFxjj65D39i7a4MMUrkEBKD2t6x6dnq93XzTR%2BEz023qjtRx1lQmJXk9B6qWoa3V%2BoNaAjk5uhID4nC&X-Amz-Signature=2190ccefd25a3cd8fe4e4175cad0fbc120941c910e2135b89d1741f8a2201a04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QT7OEZ37%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T214634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1wM66QJjIW4J2nLdbh%2BqZtHYmFIMk0u4zGl3ftLMKxQIgAiQiA6LUjD7PzFzZ4DtzsR08X8qYZjhDyP7puDoOf1AqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGEMI3aBydDX3Dv%2BZircA%2FIDWglAaZM1ehOhMWFh0jmd5Cvs%2BvbN5K4qybw4UjYsqniMDUY9dBYenzuMILKRpUBHbmSkH04xK%2FNb%2FSVADcD5EpmU5%2BJ%2BFKc5aIameHB2y2eyMv%2F4XjiZbVL7LXIc4KlLlnK4aHPwrV9%2BJUCyEE0ESh%2F2C9NvLSvkFpgk9I0oa9a1W3hiAX7q%2BLyn4EpmK16TPZct%2FKdJ2srQR9bx3pNh9CzW59CH4dUfgcuVGIIKaKXkjpZybDIIi6nz0zIW3V0JvLmxDBhWhlq2QF%2B9HzEDjtlg9ZnDmQEoyAq9S9KFv6hQ3wxaSWUfOhYg49O67ZRw8FCu%2FiOH%2FqW3NMP%2BeyG952NthmnX1nYPzC3JkTtQNAqkqZFwQy3ea33SXz50v3zpux893YtiPgf0L0WvaYicOrE8Psadp4h4vFpXQlB%2B7nphlMJ1VRNdqzyAN%2F1lmlj22LQijwudPypUMivcCBZhU8VrIuIondTMsrWx5HmVNtJXfSOG%2BEv4RoX2UkPieBOsZnS5NhSOFMu%2BUQkd2WLpEDp%2BAZlSGd2AAHpdZKk7zrX3%2BQV2gzdaO9dn6XCfDL5aTpLOKU3jTj25Pr2Otj27qD0FnV5mwyJbS%2BwxtLMTydYZIt1qvrR6mbr5MNHH18kGOqUBsZNlEij7eVmVnF1gnLMh4DTQw1EyulHV4lXJ54srzAkpyfj5AAnwZzo3PpkBmEf1DyOqBB5PdLCZDB0TDn2sgtUGDbzneDhC8g78BdVfEe%2F93taFUAVpsbfQUUV3R8ZooP3ikDOD3cU4EP110dcUOdoXjfciDsMafozs33I4igUjTID542%2FLumwF5UPYtVzqY9hhtpbj2QYjXWiLe%2FAx7G0UFxHt&X-Amz-Signature=ede80119523edf23963b7593737f759d95f80a97826709dc3463f1b7f62b36a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

