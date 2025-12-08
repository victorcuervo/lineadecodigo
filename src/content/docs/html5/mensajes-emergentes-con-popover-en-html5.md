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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662V2LGEGD%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T181748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFmNHSJ2uigG8ldPYKJVmQ6J7c1JmbD8IQjaA8Z%2FBOkqAiB3%2FLzZTVfSqdLZs9FcvWBeIFF%2FcTu2KPELTKZ60z7tjyqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhrVjA%2BDIl1Bz%2FMq6KtwDYrvte6LqUJt0oIqpDWYBDzC9d6aRRBGMJxc4MbdAMXNqhc2BUdV53JOohoUT18t0%2BVBe5r5GBJpXkZWYHg7CCJGh%2Bd8VhIu%2F8%2Bczl%2BOT5y9y%2Fw7Dls08vvct3jbRErcCxP%2BQu4mJ83dlA8mugNiSOWWMskOWKM7aehmuu7Zsd7O4PFKUOIg3wZeyZGm02CwOI90oBWfXJfI6XpPC1Al5CqDFfUyCcuG%2FofjCWNS9E7sbjORRTiNQ6EdhfxZ%2BPLoZ2c1AzJ8arLc4I9%2F9atih31ORKgGTOGee01OkYYxMEkd2lV9A5%2BUYFAJPvb79hPwW01dnZlVPq%2Bb8bKuI2Sx9WtUPSUqTaSzV%2FMEHtIRV49KSn%2Bux5WR1WFlwlQjwpLQnllFT6o1cVfQysYQ1m79wmZ91sWnrnUDGPnkmGT3puL%2BbVbXhUQeZJmLxrIhqmg%2FVZ%2FLNDnp8dv3aYKHDphS%2FZePxjn0GbwYJ8yrkN8pl31J6SAFslsmNIdYu9qhi%2FJY4moF9rJSZ3sDv1%2B79UATNQCIo0qfvQmR7h8gEH%2FfSkWrKv8pfcxwIP3DYTNUP6QUxY1qztqOe65W16Hj3VmaGck6WnAgwCTNaiL3x1fy1j3MZ%2FXqXDpW0jesEBVAw4obcyQY6pgFS%2FXMWTSdFAqea7%2BQFKdoJxeyOdZtlvF%2Fvri6H%2BYAwocWLqx3%2B09CXLUR6F7y4Za6cyvPQp%2B3ZNpXOe9dRRUO0%2B3UnIMVD%2FhswYM8OiCOTTyyr7iBw5BNyzgtCJIsgxAUUb3hyX%2B8P%2FdbCwDlLxyYtxsvQNWggI4%2B2ahYaMTsz%2FR9OccNx8y78DrqkC9UoxlZdq522LOj%2BwBve%2BWEoG9%2FQzQPf3jlW&X-Amz-Signature=510ca189545874602a74edc98117746d7db326a841f4e774da8a2fb794a1f3ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZIPOJAO%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T181748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB9cvOV0aYKSofh4gmzL3YSZ1WJvuZ97oYbooER2%2FpPZAiEA%2BlbT5S5LoVVVywV6PJYqD18dtCHmIPHPHgkuaT%2BGFwcqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN%2BJ7fNlJY5BHJN9AircA2PASmzLH5oYJNrrJOK5R6shzE8oZOB%2FISeVmFzypmhO7kb%2FQg%2F6wKzgR41mESwg1rFA9%2B44xUW%2BYTvKinZ4FN1NDNnI8RKBdA0JPmngR28p7ULMfNzi6EZXZHBa%2B7mt3vjJCifyvCPe8EiiiO88VU6MUMw1oYztca7L8cKt8GLccRVGskyzGUTTCRgJq7dTrxOnFVKvOCKmBip4polA7g0U%2FP6zaOmcKwwQrASN5ZXf5MS6hFtQRyxuJZS%2BoUoVBNchZkhpT%2BvpBHkTFvtWW0Ts94VDObUHNpTGvs6AhlUhQ%2FC4M9M3taxJ8M8XipT%2BzzbxkI4JKBGPxXAIS3E7BEEU5VtEmk25BXWrzvo1Nj6q9ai5zQDjboZYNJ7a9bna7Jtx3woBK1FjRBF4faIH6e4PPE833XYUABXO%2BhsuAwo7pHUHPrp%2BZIJnHBxK50ac6D1dpgyU94YuFj3nlWpfISx9d3tuKRwXJA4gKPI4lUabPkB%2BjQSuL5DZ5sd1FxcRiDWSZFlUufuvdnoVFSRAUrpOeydqgX2LPhN%2FcaSNdq5Fk2sqyjKsDP1ikBW%2BvWoYZtE%2F6HR%2FA9aRlS8SF7LOsr4shAgYi37KOVO3s8i2yvLJ53DhPYLotDhHRl1uMIGH3MkGOqUBrz%2BzQTvCI7D%2FRG2NHajOZ0JFOT%2F7Pwrj3WZXAS8SreuVmXDUFc4nR3fUIEpvsbwmhbHZf4L1U5JULgE6%2BvgMZ9givy80ycBMcngIAi8NPnwdeHZCpBBpq53SFrzblXzNqdFX0Ou3T7e5aRuO%2FfJmRnMm4VNaBcPxaWN9d%2Bo4502ZKMm3v6zCeyZhX7iO5Zi2CjngaZ1kKvQIgtcCrYtrlkcvr3y4&X-Amz-Signature=0f268fb6fe066b55379c59eff54b7f6c074546ca215fa49064b010edd81fef20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

