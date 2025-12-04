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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKTNKSDM%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T154454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIBuiBslfNYFYQIXVfC%2BNXxxg7IxHMGVNO948VzO8KEdaAiEA0Q3TulXE1I6PE3CKnibbLQBCWTISL%2BnrGa4F85aOaL8q%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDBgY2LUlthJ6XNW7hCrcAxho2rr7XpdbrSVr2h8jSz%2BskwwpSh%2BL9pmVZlwMJoTPNCum3VxhpT4Ev8o4TcqK1bn%2F8MuxokX9qp2H443aqaYYEL3vX%2B%2FH95%2Fb6HAcs2kMsKGCPmw1I12w4fDjT4mCo97%2Ba8nLf80lOzMTgUokLUw61tDQj1KYwcxmSM%2Fb4cLUzGu41uMPZaUNKYZz%2FV%2F67XSjmLNxZ0jqMJLytQKOiNe8PEvehcy0TAamNEO%2FR1Me4V73Iy5e9TA1GSaZ3besYrYIpnRnhKlbhVFaQCeTX68pVAPS4KKxty%2BC9O3Sv9ginnoXiwnIKR0QZVET7bo%2F6N3lVqKrfVsz%2B67MqUFTjY7iuvY7epaUcXVnJmu2mEU%2BoxfB4oyDUnT96P43DbVr%2Fg4qp12QIbL2mxwl2O1vQJ3cqaJ8G73oSph%2B%2Fl9SKHW9W13xjcwhi0AK52hWVtuJZSKCio0EOnUz8ZURdqH9sQUVTXu3fTM47YGFfkzCfjhTt7wuDhJ06u%2FbNf9PlmVDbu66tg5hkHpM9%2FSodu0hwqkq%2FytfUXb9zBFaKOeDcc8efGcUukzs7OVtbVaJkzRqWst2be9DzM%2F8qLzxT21kdFMIfnG%2B50wXNy9vp8LRHLQ3bDGjtHpPSX4RTUo1MLu%2FxskGOqUBPTHCE1HszmMrcQys5x0a%2BjlPK3un81JmxV1V1ELThPB8CXneUdmPyt%2Bd6SmJAToF%2B8%2BXyKuI2nfJhp5kYrTMS2nfkciECqbI9cQCnQRP7ZADAUk%2BJdJOCxPee8XQQ0F%2F48EqppRb6h7EDfRgqVF6dm3NkNsOVV2dE%2BOKn4y7e9lWgQyOnXk5rVataPHgv5q%2F%2FWXvGI25qY49SWEzxsZVnHSjWgd2&X-Amz-Signature=a024afa7d204117b3841b4e1f2cdc97cd6c508f36d6b69584cc55aca7382dcf9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDTKLEB4%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T154454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIBzZAyg6aZO5s2ySRcTZ3bnIXRy9X8yCngIruibf2HAPAiEAtiQMEYtxjhPHqe%2F8cyC2pUqcOMLGyaqahwy5lABmzVYq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDGNoVaqhaa3ztYeRmyrcAw3mJrxVuTMK3Nd%2BU8%2BagnBcml07xDnG7qW7dQk59PpxxD5G%2BV%2FHkxi9Mm5NdXQV7z3%2BsxLSnZdN%2F4cTLRAJEUJP9%2BAwZdY%2B1KROuukLKCXLnpqF1E3rdKf4YAIVZbz3yaaV7Lw0PJt4VEc3PabF%2F6SvZziuCSNAJOSnp2X7msKWWqQNd4VU1iVQiNtvljKX72iZiNXciKP%2FX3c0F8vzNlGSk92RwLlZwCg1MqKK8JhJ9uTIs5W9nOQj1FYjjhyHkv7hZaiys8GIryGmarAwhs9%2FhWohkca2W%2Fl7q6mrydZjdrwb23htWW2v45Aj19Z7lrkBXpOuI%2Fvpj17D%2BPhYVRRmEJcM63bagHuleA%2FhPoBkm39df5PWEaymH6%2BZ5QTvRvYtHB2tPVIANtlPCPuGHPBmjUGG22upoMShyVT0LHWGuRORoX7aj4h2WEnJAIyaWgHsvQOsmk4OO94mzGGq8M%2BDtxYadhcnSpQcXrRt5hbpYww5PSPVyDSHT7BX9O315AxAGbfw6Wt712Q5kbx2BBYUqChZL3aav8n81hrNaKa0rIAFpGy2ywInxUew2p0LT9PPwMeHCoQu1PbZTTdccO%2FPO4M2RXCWz1yukuBkDlh9hDltZgnQIhFxFflpMKi%2BxskGOqUBs9sGLPykmUgWojNoJQALBfMrWQd1KEmcEEzNJge5tIFDO5fYqbg3PtHoVOGxUMmznTO1Psn9%2BAj440NTHOFuUpoIfhM9295%2B6zJ%2Bu%2FJG8JAea1bzQlLvBQQAVptpJMkWf1LE9A7IqwKVQIGLQY%2BpS067ENYY4UlLICUCS%2BRLi4PNLWKK7s8yndrLHjtshA8pSGtdHN1mKxHG5uTKQa%2BP9G9kCifC&X-Amz-Signature=2d3ebc8ca2d6eb2bd0f168b37d8f851909583ecb31d6299a0190b4b689d092e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

