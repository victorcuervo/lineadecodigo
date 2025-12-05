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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z25VT62L%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T051817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfrRrYqLYtq6r705OXsfo4XeeP2P66SpnHOBE%2Fol%2F5IQIgA6wB8MKDNHYLD5n4muABTrEgW0AbGimp07WhrrCuObwq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDCGNnMUS%2Bwaxnr8Y7yrcA2vibhU6r0EyHiBJ7rHZudt01i6a6CvmzdNqlINIHzy9eTfO5H1Abf9pUDTVrJr56vFOBq2xfW%2FaXxCItTHoifn5wEm9ZO24GLu1DDxFlbgi3EYmeyuTMedBhik%2FgKMg0efWRrjYQe7O1I1ut4c1DWt7PSkIjpdOTOqFmSGutRTdeADx1AbUGh%2F3wNjXtxr%2FonliJ6kf8sXDm0y8dyj3Z2IwkPnjqGRD6H9dlKIea5MqJV%2FVgPaibMqG4%2B8hnUEiDBUWmRJWkLUdGz0f9GBxe1lHEYZ1XUc%2FCdlqONTaoc8jMI9VS11ok1R4CY6StxNbhHguBizTd4Q3ENOUHHel%2Fe8J9TOmmT12NVVPAdQ6F5Y8454j50QvwiQSnyMg%2FmWc1Vxm%2B5vzIO3EN1DJmo6xc1%2FJFPSfoZXnI%2BE%2FVCyB9eFtZucLnHJL%2ByIfMnXAjGYIA5nS8S3RKDIkxhEj0P8Ff2uy91RO63%2FCWTe%2F1WTb9L8IgrqU0NbMdbcf%2Bvr5fTGPydRLZuYEuWMZcbWRekL6OjTVcFohKGEOollnKXjSVJn%2Flnw%2FFNixieyniZYek7lmSCMIH%2BhguxqNEKn2GSyS11ZhWQj9OXlRIRtjeDExRr839WUcBTKUq1MiC%2B%2BxMMCpyckGOqUBAyIZ81ogSK1mjsS%2FxFpZvp0G3TYZiFdsrTZhCpdeR6j2dIlDulI4M%2B55%2FN8vYu93DTf7tj0DW5VCN44m3J%2Fy8VBjxzLRfED4L7423nj7szqDeI5unC1P%2Ff6csK05rPe%2FDdhO86ff3kkQ4%2BWGpIIb1xiUdOS%2FUNWoe2m7Kcf%2BFRyXTHQnNTv6CoY%2BVzNT6umGQPovqE9Zc7VGskjpM2uBENMdvfAQ&X-Amz-Signature=951628ff2e89dda0a918d1f59de89cab2f156f58ba165f1f54634c744e2adfbd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBDQUEA7%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T051815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDeFBtc0E%2BDw1KN5DsZv2zmmSLlg4%2B%2FHKC%2FFUvi%2FV%2FIcgIhAIAorZTUpO4X1mjLlFauf0r8bjXDIL95a5NfJbcBrNZpKv8DCFUQABoMNjM3NDIzMTgzODA1IgzQ8zdnLixN%2FQ%2BlT2Yq3AO8pB1j2W0zHpnPxOqwFsmZQuwXt5BVeEzK6XBhjYlFO%2FSj6mhmPR3DAiWCF8olUex7U8jSrdMqWDkcuLwwol97y1F0IU1JM0%2FcZXmk3I9%2BQZ9A4DzZlk%2Buqt50uBuN4slcytAUACW1dNs1NXLoB21dwPTKYoSXdUPicSemo6Tg86szuWiXgtpqk0d%2BDegLrgmAmrHz%2Bt9E2i3IXnsr4axN%2B1utlA1QuUHEniEoeTSoAQ8hKTNIRiva9L5f5YqCswkOiQfxwDfxl42zMElR81Z2%2FQZd9IWiFSQeKloLsRL%2FTQ6gFChAaPAfdlfTnFpGJFzbWwz8yxj4fR7D0eyPwc%2BpiylCGhW7mblOB7tK8CZp%2FRYAXIwaXjygXJLcBuIz0qmbYWjo3MRofDKEsRK3z6NCvCXAdVieyE7I1Cs60pYQk9hOfY8tcZ8o0Rk6xROmc63dzjSGJ5iQHTYEtanbgJV0JvupEoH0bHxNWUjz0ZBuggHYRW4vLWz8lbnO3nrU080mRovphAq0JvdokPH3uwOeIfjvIl7ALDSGTDJQiOV2hIUoO2w444wVhd0%2Bsu2p%2BWEUvCCvvcROr%2BKp8WZzX04w%2F8De9BAeADPWLZE1ij1%2FuAvPRZgrCpdPm3XZGjDcrcnJBjqkAWy2qombjR2c10Bm%2BEXHhhqnqWsZIsqPZwQYDjxi1wOeTVQL6Reri8LucpGXi1ymMu%2FypWUsYgg2u5Kw1ktuGTFA%2BPCEIXw0r%2BY1P7Fp7AMjRasKoc1ScnkuY%2BKAi4t5oNuUjzyClF0GaBEATTcU7IgreFJ5iCLzLxNFuQCO4lB%2FzB%2F4tpafxsb7PlYaxERHB1Q6JKd4drYW9sgY6aoNKMVj1YfS&X-Amz-Signature=db7e3acc5b1809028cb9a0a2525494cf2c40106cddac8e45e75d32a9a6b3942b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

