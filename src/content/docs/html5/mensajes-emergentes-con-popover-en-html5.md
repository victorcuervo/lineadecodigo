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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AXRI42K%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T103346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCC5Yq00efKGYQNV2G3P04ePNBknLbYyOS7Xd%2FoLCMUVgIgZrGvlSuSSVEu3hhHY%2FGtIucvrWBOksAxt1wi0iijhkkqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNa%2FkDkvEVYgZmonyircA1UT2JPvqsG8%2BeW0KXzBZiOjNMzhjzX5KZHqBdXxA4jmQlvAFZpvSFMRl6qd9oRXFmH95rb4v4NfnbM5gSbkoXKbD%2BVRtWekJSBRGEq94%2ByXVZeZmbx6O5O3kM0kzLOwJWblWVWi2deIW0cls11NHTIXDJN8DK5bb5KLCK79NikHB2CP7XZWBqOhLFuz9uLUfIyfTObGk6qA38iC7FKFLIwfsI1jgsplh8YdF682nH7af%2BcJdA0N2gJW2PNp9eL4UEZbAQFIkDJiK0bFJ58ajCy4P9395D76UMvlKTGz6GS8QQfBo56BQSXUl%2FgxDm06KL0k3pRTG%2B0obp42dHImGPMo%2BCP8WtkF4k8RF0kVxpczMX0nG8VMcieYlvt0%2FEM6kpHy5ZK82zXBFamILDKiOjQAuNud2aKehSuGgxf3IcU6Sw5Zg9SqkvacRSGLFHZGXUktfFal26CBqygO5MP1uNdZ9pK96xxMkqom1gvg%2FwpiZvvPopMTslMyfUzSIgAPBBelqMWrCQamupGrNSirPn%2F03nKyR3lPraRmVIrLP%2BxACaCaskB7eoDM09QHBlvJQtJUx84M%2BhsqeIhAxw1BEPGLEVJAsEXSq8bphpZt%2BxWyXqRsyJWDo0yMUJCuMNLt2ckGOqUBsW88ne04CbeOyRk7zszAs%2Bqis0%2Fx3EipIudocaXEPmrcgpH0kf8SGckLr5hyWmjjztDRIFLPC46MQ%2FEx%2BSnfr6OEbASPDgg19NdEsxrn5yV3oRDvBrVhn%2BQpWQCwF7N4t93t2rLh59hKqd4dq05C6SjZRWdBi2dswtWPMVuSRQfyB%2FGmg6wKy%2BPRimFQEwgai7TYXMsvFCJ1MI97bALEZXTK2sGi&X-Amz-Signature=91c6c4be8fec5757dcd6a791ed8eb125499c4073e3562b958feeb75a932b96a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDIXF4W4%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T103346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAopIGgHu%2F3Z6bcTCHUnAnjiVt1YPueyd%2BP%2F06SLm8znAiBXUESyZJ7L0vVNM6y1upcG7%2BwY80z6RTKpzab2%2B0Un5CqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMk%2F2cQx5RX2zaJcWaKtwDI09hQIlarwBw1rXJzQcWwqffUBPYs22D%2Bo063t5BP13Qv97Kw3XURImiTFHLZxsIV1zZbbr%2F37q5ojeOBxcfSEdUNobKm3vMzTxPVdSw1X6Z5%2BTexdbG9nFNcNBgEIwhqyaj33SG8ufy2HP4OGDs3uw%2BSyDK89l7BcI12dZIIQQq2uYSdMB3Bac%2FrvhYtquGT3qQ4vzixY7U0Ihn3vK%2Fe3iWqzNg%2BW2ypCh8T%2F7UorROMGdVWnVsLOKsLV4%2Fn4PHEtihWwpDn3nB8ab81rx3tiz7cCHDa5QksQhbJsPMGlhgq6EZwOP%2Fvif9PDm8Ho584n8G1IHOI0mi1gjALEAIBD4uDZwWS%2B6ayXw9KGJdAunR%2FIlgQz0yjJVuHMOBI45%2BsRwY5SS%2B8sQb979rHMN%2Bz2fjxNw4clLIb%2BPB%2BkvxgwXK5w6RyRcgf8dqLAeRfSr3c1Q4dmxgkqaTXM1aJ2zNc7xKdP6dRWzbD6QOcHgFmqfuJXudO9Zb5fQ1Zz%2Ftbs3uI3XQe%2FLGqiFvgP7zGuWMKMOy9SxSHw4%2B%2FBzKHlfdQO%2FEJt06IFfTEtIx4QDILvZF2gHNJ2TF1CoXixNDSvlA%2BWKEBeScMASXnukGeX5XDhFKG3Uo3qNRVn%2FAp7owj%2B7ZyQY6pgGxQI4hLRt5TzpQsq3JGAZ7E1%2BSq%2B6m61tyMYTmvmj5G%2F8yVozzMvgDkl%2FwvqRtG8FHH2eHDx4lrQsb1l7gOAeV6nR%2BxQp2eRw%2Fp2i8%2BrLw7VrzkPpEWgomQ6l6haW3zBKynoQ53WDHj2pp1ggziuJ8sLJJf94v72WNjYH58Mw3lxf4QcU%2FM7%2BJKXeNbxRxijZc4CRLgh2ftyViFgtMjrJTG3IlZ54K&X-Amz-Signature=7535d0f45197585b7abd448f5c9fca319f7a72a7b99fdee514ec8d90a3075598&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

