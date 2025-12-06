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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7Z4MDW4%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T102944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHzzi8CF4MtrbNPJZrOPZAzYARgrownTbCJCcUejfLyLAiEAm6iezze4gpYksA2GbqMucRjGiBrzUO9x98RMCBCPLXAq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDGeCDKA%2BoPLTFEukKyrcA%2BauSMXgWq2F03wX8Xod6xaSN6s9sSkS%2FmP3XCOEOUyDN4lBgYMRrVRi4Hhfx4iDXl4Bt%2FghIgU5mnV8R5Om%2BSxTfrJ8wybEQkWwE%2FzJxttvm2YgawRCzXlRh8IHC7oqkPvRe7kYzTGH0a8MZk4rHuT9CqWQQDuT95w8FXEWEh6FMRiFsuA5WgszhGkQQ%2FCQVE0jN5jNNoGa2I9S8auFO%2BTEZv3VIzc4nsfYRo40B7c0mFrxygCN2H%2BFVTt9%2FKI3rbs4AGKXGWaVA3v4rLNB%2FiLZSdeFILlCvHODQXUrZ1bkJBqehDDbQ5KirHEQayBgSK7QkHeil1%2FmTjHYyfAlqeYVLHHEcza6HRF5f3GjTH5TQZAUVK0hVAAfIr2lIZFmfgXJx7%2BWwGnQrJCAT4e3CfN2XTsPOOxIVCKGZOynqFW%2F%2FNOamyAKMnb0fc9WHQinRuwuzP4drE2QnQ78jI2ZjmEqT77bFzRhivAsRYFAXtOpMRLbQ6PBEXE17urJ6G3mlu8S0%2F7o%2BHEyPxa63EGgBc887jYvRA9xQyLvGMWSli7hHTNI2aWzdGz6Ed8qmlr7jdEmrbJJ3JYDSS8GTmyWNZgcz64TMLcT6BsO9hQ%2BSpU9tzAY%2BEeXY62db6M4MLiJ0MkGOqUBI4MoXkJmgaNhBO9NuBIAoE%2FdtuO2tCYFHPy7lM2MR2buEsIgs%2FU6rPfwTpT5OZveKTGoRe9SRDl3nCb8c9%2BJ3kDR3mXYE8Rfd%2BhG8y6iaXJv7uo4AVVxSyzlQq40EeLy%2Bvs3qxy%2BuXJQRS6zLLp5%2Fe%2BhXPF4rVUw4fAHU%2Fo4OJqKH6VCk4goq5LIySAtpTGigUAymet48jAFoDzgyHZ5tgxf1Ze%2F&X-Amz-Signature=8c52f0ca4dff81de3247e34e06b677cb61cb66f86deeb7d9037caa71947de054&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WY6QTFVM%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T102944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCeRTrl14FkafR0Dk09rwPwe1wVnJc9xYv4EXaKYQWMZgIgM7ZO7vvXMfSpkXRW%2BR4anE%2FaiiaY1x5bmBmdx8JksRoq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDH1y%2BUwM67es3IlUECrcA0%2B9YIy1TVXBzoSFa%2BPdElPcK4PrvUSRMhaPXX%2BpM9tIBvhbCJGE3eFX5k84hbzXgwb0jEbR2l%2FCZudzT1sb8vHTuGiDlLtM25tQogwa0qlCIRnqPmBQCgJShfCJChut0a%2FrOl%2F949tmL%2BN%2BTjjRfvpGt1AE9xr4vtYYoSI0MZvGN6K7%2BqXRbpQTR7bno9rbfFl3HNl%2BD68bVUXNsUTnLN1s3kDcQhnTEoHdV88jbruQq9DzPukUws2gdltT9eAqsSq%2BEiiWECmbuDdji4biofM76aVKDFxPKI9n4rbC8qVXBDxUnM8Zcza5Wyo6Bkg9u5RGPXmkICiXzmn7cN3KPbIppSg85gIATWtKLGLwFR3%2Bzekd2KunNaylkqjBUItFCGHK6%2BDdfrs9OmcBSC%2BaBgGFm4WOpoXE%2BD4%2FX41yk5F1cy8bBA%2BRTW7YSGaLTGnESirvcUlGe%2BX7%2FNveniV6EzTfWe%2BIYcoe8k55AaaHLX%2BIvXu1QgF0LmcquQj%2FvZJb04pOE5aooTRZ6FYlheAnEN56p6VpdKjIAeKEfEWrNQiEXvE9yXS0KA1ua51MYl3OJhwiPFeeMB%2FdxH7KAnJ%2Bwr8ukr8ry3l19Cro4BgqZU61HQ1m%2BCiQFCwvMrigMLuK0MkGOqUB9pnbqN2OvnNbfqzGfcM9wOJIIKI5seWLH%2FNL8RGdoUs7RIXCPxyWVa12LQrDsc2NLsNFeOlsOMJcceiGFjjUwOUADMt8JmF7gpkqPlHgFAP1tHSgw2%2B%2FV5Q7uYYl762BhBSPlN02Tvi0qHZpeFuRliCmgCjjcpsFSI67Kgha2pD7by8NI0%2B7nyD0AL6tJ%2FASAHzz6mxeN%2FOF6aSv0zvRqQryBA62&X-Amz-Signature=7a2d175961ac17c843533347a83c815f1ff404d5abf1abaf4474f67143fff0f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

