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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEYUSXI7%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T135507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICrqizbb2cD985BBJJJE9rQPCAb%2F5m8K1NNo4rG9zW7FAiEA7vUAZYHyjLb2aBZRBJvx%2BIyORHBst2rziii2JDIYRl8qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF68WMLRMtkNplVTRircA2Ti7yK3OCAlAX%2B%2Bx%2BRXTL7doFySk0gZvCIJLv4DA99q4BSiy5zpNVgjuWHdnMWntJjXFkvXwCRivuImofCzhwGcmEP%2B5pFagCUrEKsTtfD04jB9VKWPWpMx0Uq9XoJHvjsTgjZcSARdLcuPaS4FmKrVPk1NmdKeQsOOOa2WqW5lcISid6s0X5YclqqG8ZTvCqWWWEQdwLj60fN%2FhAdFC2qxUQT2bAIRKGITz5ZosCa19KLNj27on5stke83EP3zOiMDHp7gSzFY0YOrLqJDpy1uPPFYkgplqNpEL0dSwGNk1PwrlsG8m3NUJJG002F5%2Bn3u1K7XIjCh79oKyKx4AyUBL2UStAp9qiYYrZmnzHmk1fXBZragrpVLR4yhznaeM3VKzxH0LHfL2UHuk%2FnNF1AGPy61M4uX4TdV7tIP8al4dqg%2FokvyMv4AA9JDvkdm2z%2BiZg0AuRDR2yJ3y50ZHmc4AVJeCCELzG1FDCrmCGLDZ9FeOJuf1ujvlx9qU%2BMINCvXzjrYyhsht3rXazyKw1Rwuoru1VVvulFSnjhgiOD0QHMUZP5FJrhmgDpLvS%2B6fdYQ6vObHGEBVRPJHNSXSvf8AhSA0%2Fvwby%2BdN3gWKiBT1oRiPOBWqQTkqlKVMMiZ1ckGOqUBIuNNcdoC84FMExGicTmW7erU6CxjUhRiFGuIlehyBU8qAnzUp53%2BUAMmm8kELFllbM6vXAOEbEJlf69ou1zOr5C%2BKad%2FED%2BC1zolupRq%2B8qaRrfO3zYgWmg9YSI2kCdaMeDuvg8LwroZxedVVkTPM7l7ZIQgtY2ViIA7uEhPLGWn29KhqUeMYIXudipNvpkZsLcN8lz9voi5A%2FbdFK%2FyOT5ygdU2&X-Amz-Signature=2387b32cb965df691a274f14ecc1b5fa2f7a5293f1af5613f843656c9eaf0bfc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDIZ4PNY%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T135507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoXbBkZlzTpGde4j1eHzsU%2FjHWpT4varR4Lr4EIWxuhAIhANVqTPD%2Ba2hA2viGNy6CFhQm3I3BKVE%2F9Q7H%2FrhK8gv2KogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxBhYcDKVQW%2BjQ93fAq3AMIJ2jTKzKWozJo9plkJFllCxkIhd0ZUbxj1pVUqAbN%2BwxSpLAHaRi3U4kD23h2RbotV%2FGdQyFNUKGmnopMpfxo5mfeg0xoLv5Pc8V0VnRKsetoNdPMau1gXvE3%2B1HrV%2F3ibiYmcXKdi%2Bf0PUNq5M8KVzyao%2Ffaj21RqbqdB97O11W3%2FpbHKMA2aTfEG4Z%2BD1Csht7pJiJb1widWiECxP5eXuc6BDO2Kp4BbNrZEt9PC63kVAbQ%2F06gAg2XS8429s3rt0JXJoVdkHX0Dl0NWV05py6THgd1tN2EU4Phz%2B%2BGqYwd%2FJBtjDgBkvAZX0xizITuIsC4pwAvy6Q2QvC7C93AH3xXeg2sgoNQd3CoY28Z6%2FABAArotNUkzgK%2Fs2%2FuJEgricM3JlYu%2FAwRa0kSJ8904LorWO6kUTeU773iu%2BND26QDKX8B%2F4o7%2Fo18Daznocl00R%2FRM4xDt0aO%2FSnwjQoKA5GLnApWnPILCHPwOUdwNIxuE9ubRDT1IB%2BUpp8GsB1KxgV9UZ%2Bq61nnHcHlXpGfWpVx39gzGj5Kn6X%2FkRDkkoOi3frOowoiloVsSF9c7ZijQNfy75bQpih7ALpx%2FG497SF2dr3qYMKw%2FHXPUZjNqFVOq50xiLghVqXSMjDImdXJBjqkAZ0HApY2bcY%2BObD4FypfnPW8Pw%2Fmzw97d%2BuF7ZqPro6xUJHSgdZZFmc6VsJ85%2FccPSWB%2B2dsxY6K1aVS3ZRPFAfPsIYPOVGOwTZ9naf4ogrhUP3XflnV8ZHxsRglOcUt9jEhAExKjl3BKKvmENx%2B0ZTTXENEhsL%2BeAbo3pC3eD2cjp3VNc8PsLx3%2B3JN8twWBSwywtdC0UE9F6wddlhN0eyB70%2BM&X-Amz-Signature=4280ecebfdea756b05b522411ea288bb0970128ee90afbc479445daef6a9c26a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

