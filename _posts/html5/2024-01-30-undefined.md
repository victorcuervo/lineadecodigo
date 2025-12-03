---
layout: post
title: Mensajes emergentes con popover en HTML5
excerpt: "Uso del atributo popover para poder generar mensajes emergentes con popover en HTML5 en los que se pueda incluir cualquier contenido."
categories: HTML5
tags: [html5 popover]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQY2QL7V%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T140554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQDBWqvurHl6udn%2BcH0SeKBn6TXG%2BYWea0nnjJDfotZtswIhAJP%2FN1LR2a2kzhqgmxru4n%2FQ%2BGabNhDbFA7hjpCiWGteKv8DCC4QABoMNjM3NDIzMTgzODA1IgyNxn5W%2FE5FSYgwOAEq3AM7y5wJaqPX7QHjw%2Fu9zUedOQhHBRgLofFEU5Ceojg1am4w8jXnpQtCA%2BH5cf9b%2Fc7sVzhnjeFFejow1t6S64MWHTJTrMfyHLy%2B%2BlqCN%2FeDlZh37A4DaN5VlYQ34hUCahyi5PMyHWtAwmxCFLYSdyZwdtmZCnLSHMdqxHBtHl5IjB9ov3xNND4a3sC4ynjOosoYwpy%2FGz4cK9MpGxqehriaUGAdLnxnYFbGwpQWCyXijpWeO0U9kZkTwYh62iRXZ9bSwfB2jIn3phTlToPoy9ZBVJ6wCWDTUbK7%2BFcqgOrS%2FR1dE3tCFrYLu0sQNP66WTGfoTvx943IVclTl0ZSHk529Lp%2BajkEuaLDMu3oxHwKZ7A%2Bj1pJT12g9DTytbbwUnU%2BYTAh9e20kq44FkIe3un1uhjozewkYI46GxMTsLrY5b5lcq6EKTGi6%2FFPnlqP95eqSmWMsNYMsotXfLfp0oOTC8jMyNrW6j%2BELNffWEI0B5cHx%2FF6iQj6q%2FRt24t2Tp75xfo8fTbN7ddFJ42b0LXgPxlmF2K%2FgQ%2B4qHiRDcyrtjSRqzAwyU0ajL16ZsoGw3CKN1m29edbg4cDwlAoP%2BU7EVJrveGxllI2oWAVDkRJw7UVL4jD5%2BUtxKFbPTCa6cDJBjqkAZwQK6ebLP%2BWruTXtysCZtn%2FGSSN0r8g61PMqes%2FZb1ZCx9%2BcO7YhL4OBH0jrGc4cPK7TPZz%2BMNaanvN78AcqcijOztx2OicE85aV5jS%2BDECAqDStuCvsjPrXGSF91FHEkBoF1Ejf4mIYe%2FzXZOScpKLt2yRsHrLaj6p2GNbE4tG%2BmvF0ITzlp9AdOUYOpxqOUlINParICbSXae7S60Dv9i%2BmFha&X-Amz-Signature=07c68a61435d7f00784c5f70fcd859c25fadac3f811fab32b7017f5b14d5f4cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VB3GXHCC%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T140553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIGpkNgf2MuMlwC%2BUsNGcUeWy58rcG09TnDlvevUJGvO9AiEAr1SxNZoAdMvV7YhyRmhaxkLRDolHgjsEdD84D8TiJ%2FAq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDLwD7UuE1now2kXGHyrcA8SeMXfjuMHry9pprz5jC504JzX4pMRQe%2FtPbb%2BXSjFMEwMcsKTGy5tRcJAPY7U0ycwStgFqRHQ%2BrL%2FtiZuQGKAFtbzNHjkdg5jc%2F8SB0vrwLFFVmjM0kRU5UQZ6Q1xvY2WWyoo3jUhapTijec8xEzbM7q7%2BR18ISW70ss%2Bd5Jitw4iI414rwUve8e5yakQa0UFhzlmZqzZ9Nd3xDk9JDprwHkpUzG%2BVnnTbDzXNAbp8XP%2BSDGG%2F1GZmNuR%2FBFHkH3dDdhrCPV91C4B6V3nKkpGNqD5z%2B%2Fc%2BKv2TKNERlgLqWtYCJm3D5UVtiQ9o5RQx2fjeFhWNIvm%2F02kBrUELyDqx9SZd9%2F7re6ny%2B%2Fwcg4gbubOx21cUagxG0%2Fm0%2BDsp4%2F8EM31iso8LuMUU3%2BEjLBPfnCLO21Q6N6m667u2ipJnkk2IVa8i%2FLtzdVg6xRq7lJPiQw52GXKF0spxJNrcHEN65UOKijon0Bht7bdjmq%2F%2FT8oM1LoykaeiSkwGQRNoXSv960yXEaIwu%2B8EMKWAVcEJkXU2e4m4JqIg58Ot%2F6lN5FHfzBr0ko4%2BZntw%2FBHe9oyQ16Pb2CfvK0HBDFxiiEfPmr4%2Fyafn4bDjATt7E49cBaQjAlidWoFbUg%2BFMLXpwMkGOqUBV2bgqZvTgv6osneP6u6IHQbq8qscgmdU0fCSRgKw5YSvuZjFvSLah0PHYOO79OBw0NdUvozAtQIXi9443bm92%2BtmOMbmhNIOwc0BqB3nGzAI7pGhVcBTCaAlEhVWQQrpOetXoRg1unqoWdOhICl6RLkaYw08pZrHB0XZaBlNR7Y28NUJSpfFgRx%2FHDyl%2BP%2FWLgRRYRjybGGD2n8MPdH60XXuqpAM&X-Amz-Signature=b7c4ef3fe7dc7366c2ff1337f7fd1814861161d6983f5c34ffc119e9275a5164&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

