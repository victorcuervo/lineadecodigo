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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QA3UUBJK%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T141523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHaqX9KH%2BZ4k9c9C2F%2FSE4rAYnhYoogwV%2BtSs9cpei9wIgP2jYFC5AyzOeP9Ylg5cReCqr7W7ls55u3GsrAnmcj14qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLJ7LIjYiebY5jQzzSrcA6WD2jvPn4to%2Fyhj5zslwy6vQaxD%2FIlJSX230xRG4ItDuVas0BzOhWXL0UbGUTwiw3YbKKo24mkzMGhNHtI7wbanGnVVSUrpfnmHRHjJELABFmFaN%2FxpUjOhR2NCflPWNBu0YlwlDDPphbWsSvf7sODSNztG%2F8Q1a77%2F9tyGl%2FRi2eNqbMMTEik%2FuGqcBNYLy2xa3ts%2BcQOrR7IJWWIHufPMMHTRuSwTAEdPSqo%2BEA7FpIewTrza96SPHWU20Si5C7vDiB5lMYiEZ9pGxamuvAbU5Svq0v%2FNJPCSvlVPF41ZvxBc9GXUCm5iE7IjbrR4DoMDY1wBpNQHtZf6CIGJvxe7A7tCmPpsGWB2mScc54LAktXIVXRtfRLrwjiqAdkwVlkk2HYEjf6Lb46I55PdcnXTNYnArWQYNoDCfszusUL%2FHxP7McJk0Wn1E0YgNfIeKHuanxHwuBHl2SvgQjRCUtXzSh8tdbLWDP%2BGVK5FKJhkrEzL%2FgiYvdvwP%2F5f3BlSW9n%2Fe%2BvRF5K2JF9uhoQTgAfXR1Ni2wkXOInDvwumxaZfV0MqPai1jvRvN1LIxPzdrYSwMKByo4DWmPtiD5QPhmkLBzkHFGzZypTHu%2FQ1Mlbckd3gaAYwnsIXXiKKMMuZ1ckGOqUBruPwqJcLvDAzsvl9Z9jsGGaES%2FVkp4JnpenThcEGB%2BBT1MpID6GztkxbTpunVgwldBPrIIdbzHF7IrIfON%2FQSkWg0XaFaEra1sQRfPZLTarX9kwi3Padl9uM3kW5oe7S3ACCqOH0ci9nKGFHRH8PLckynEKIhgZFT1DBc187p9TXBXWL%2FZ%2Fu878odgsYn1Iai0%2FbAVSgco0MoZ7%2Fyd5F%2BW94uoWD&X-Amz-Signature=b8ebb328edc9c78eb0e910e117516d733910f5795cc67ac45dde8d19f940dce7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULJLIOAC%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T141523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDsfbF0I6KObuCUXmKQ%2F5KYpZ%2F6D%2BIT%2FVz23TwM1Wv7aAiEAikWQB1nDzvYpGxeM9RH7dEi%2F1vaMW%2BO7%2BIHRCK7TftkqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP6X26waySGU%2BTXfSyrcA9JN9Gp%2BdHpCkacbINSesNenU74yLOzcUJonWWWnfzairUvwmRRds6glD2biN0F8wCHJ%2Bst4CXcBBd1L2qhl4n77Ck8pBA%2BwCr5T32RQ83EdO6bYZ4gAhFIrM5DPf5kjtbuPcXNU%2FDUC7ws0jmVCsbi4VBnTEWMoOVd4Kd2B3wZJ%2BRyXnyse14bu64HFBQ2qaHKkA7X2QY7z5P%2FX61SFVN%2Bvymsj3PYMU9fxldJwjHVCQN3t3j2XTnDme%2BwZ9mGS15LCXEGgDIa%2BgWWlRfF7d7rn5Tyyks4fMl3xy%2BEhzGCHzKTZprqpO8yz4ZD4cXMjvwuLye%2BBUWiozs2Ey8espkm%2FzLkCoqau43aNvZdFbq%2FbL8lqPUaKcm9H%2BbgFPxGPZYRIGXfn0Be6NmwmhVR7bCDkKFs9xfKDi2W6GXNAFdajTgwv7fygFMPRKc%2FTOB1jpjlq4vD5dibU4ki5rWo7LcUwxg4ZlWIA6AiIaYj5I3awulvNCeH67bS4OdKi2fxpk%2F22M%2B6drU%2FsqpKI0vB8XtRVXEVEJClKKGIV8pHcrJjYRJGd6iHDgcTHTf9%2BEs1FGUnNRq9M5UWkYfqB8Er6JiqkfFKWB%2F5Dloq7dZ7rHcs1%2BF58iayyRKQAnsdfMMGa1ckGOqUBI%2Fvp4%2BPx8%2FUmJUsMVt7lEqf53XMw%2F9%2BUPb%2F57a6pLtncPZjbbz%2Fmu2%2BycoZfwPvTUzX%2FRtMTHGjyIRgiVg6ZXLwBZTb20APUrrDQ18O35drf1hWnmnNdxg9o%2FHA9%2FAeTvgkgZb255JjtZxeM069NyH2j1okXfLvHhWOPpOA5BxoBtl%2BkAl4G1XRq%2BG7AEJw1G1na32rtyhi5mo3dqjpPWSRbe6LS&X-Amz-Signature=9d5a82aa2dcc58ae06eb48c787476c1a4a4cebd1d005745da70c910bf24e694d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

