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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPOW23YM%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T015410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4lKmjolftwp3KzxqQ%2BigYISJIYG3GfQc%2BOcVJCNkl9gIhAIsHlMNtX4dTNtTaZH%2BMItBIqcPmDp2kbP9xrjOt512OKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyGfV965u6MijYo7X4q3APnFIqFBIwwTSDBZpiZ9wDBDRlxjbWlj%2BhY3%2BYfgEK13wMWJBPNbLIuPFdgen9oo2Vax54%2BxfPJjUY%2B4N8LcIjJ%2Fb0fVcjHMivm2FpIIpOHhPB3Pdn%2BOh7%2BfQTb%2Bgx9gkXAgyEx5w2bQzhMQrauG2urTBUi8GfZAA31xLVeI0h4s%2FNM4COV5cZIOBn22QsvPyy1fx%2Bij8CMFnRWykwaZYE52reLcgW4L9cRE8Btr1uzx8K2sXvFAzFonjtyue0B9qYVfFpOHGb1ne0zJN2KV6BGClVlQBe%2ByluX0pCkXeIbaONAvMLisizJDNCS6HfT8WKY6PEouZPnpczrtCwEf08yrx4RdS9xpJUiACPmioDCOOOtQD1ja6k5n%2Bp4pTAyxlpqtwI7W6UCt1F73k3e0PgeY3f0G%2FqjwzDPUGKIRrL98Yaq9fgQoeKwBg2LxfBS0mdkkorzc8TX8GB7unUNrY%2F7PBpmVhqdR8IE3%2F8sDTYMtSvE7NvQDWeuDY%2FsfEs365b%2BMvzqK9Sfiw8KVVgL6ZiAJzGPAjRdhVemX%2By4itzkh%2FqpzW3pgx0vegIOxTwn%2BGgZ5Q93yrgJtsB78jJCtwkeAZzODYYKTHzKUPgnewoilHsFvLFy8oNNRdEi7DDG6d3JBjqkAbxRDUA%2FjDBfeDMu3Pqzr1K9ACObbf%2Bp10rs7sxubEqwXcMLTcnCF0clAEkOD1LiLZPz0c1dBOydEzNduWNfbykjaoVmQRjOHUl6SjsDyJo5%2FZiXBT%2FcLCLOrJIYa4Am3z9Q298iTFe2NvGqv8gY%2BVesmXWduWs%2FJuY3O%2FKIJgAhPR42Fe00sjniWuqKZZcBf1E6CEqmDnlPZMhuj%2F5yX%2Fg7RtOB&X-Amz-Signature=96b476b664948e7831474af772fc4db4c659023669e7cd26fd408e90b1353953&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XMQMJTM%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T015409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH9jzgp1CpURAgQNXaMh5dxGWLsrpOfdDp9PI6O%2FUullAiAtTNCElrQ4M7downMIHCG2JcWIcplKG1%2BEjIOOKJypoCqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJs6XVkhO2Am1PrWxKtwD9Nvm%2FWPQFIWpVcHHR0nAl%2Fnb8XNtVVP2zTs9eJM7CIG6RGrrSkqc51D2DBTAvN4EusKNGPgXfxRrJXEa0az1LFMwLZ01UgkRiJMlaIpwYkN9xQ2s17x6syqbjeWIWCAa6mEOBM%2BJ0nwwvb0ALQ28M4Oqh70BDEFLuJx2H7SpNY4nAnRVQc8yjt2ph3%2BCU9r%2B%2BF9TOCwYKxYrMpxc7VuD2%2FEnaWDr22T1cWrfBp%2FqkbynQ5SdjwmZFdo0XNvJERuaey6zo1aCFuEBzfBY2TGM6MVURl1XNwRki6JANLEYRtbG7w%2FNLoSKVG1GVLyWfHzj053CY1HXG5%2FgcckMUYyEEqyJlcOnaDXZwARuCJQkFAnluh9XOd5Rgi%2BIihgITusCRB23C15xiWrSAduCnn5wWTX01lfH7%2BMOblO4Dx7KjVAwNPAK47Pla09KXwKGaHAmWs0MVguBgx%2B5rCDeeybV8F7ANTwhzx4lZrdYH1Fc4eDs8ypZgrm1QHFeGOtgPsS9a3kOJdSEONFVyVBOfpSyMnJ8MEAiK7TVzXkQp9ZFJBcAsnuTjB4Ysp8r3i8BdLZiPcLRog1EBDrNz3s0VzJzrPKeMfarxDek8IXGFarbE%2Flw2u%2B%2Br57hcQ%2B0K3sw8ejdyQY6pgE09YByRSi6sjS%2B2pH9nCsdd76pA0jbofAaV8VxwPsCwJ9Oot4zDvATu9EGcXyuLt7LVsu6K82GsWuwS4jaWdkVwwaDWq2ed7WXaAGtCcGfgtwhr%2F30mn2WvwwHKGuI1GatqfaEy5iFTTDhWPl6TN3NgQGGViSLfq91l3j38lMIDe9Sh27Ep8B2b6IERD14nP4c643dXiPdEtWX5%2BoT0focsspsG0qo&X-Amz-Signature=1f2b167f90a1e051c6e3bea710f3af38da1afb68cea2876dfb903b6df235ba7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

