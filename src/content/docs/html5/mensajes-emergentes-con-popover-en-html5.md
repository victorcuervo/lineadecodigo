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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCEA7XGU%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T042839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGjuRs%2FMa8khX31LEP1KCenlLpModeLQEz368QxeksIHAiEAmsSnvGtLjdO2gGcgXu3qTni%2FmhyDSt4dv0VYqs3nv9QqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPXDB97qExLdmWQgaircA%2B2Rrs9hl915hOtDGWmMBIAWDzCX78SMMwqU7LVXLwlnnjRkIHZMo7IQW%2Bw4AjQz23hoNbRbwxyjBNIksyGwUVDaI9jDBRSwBbSdPkcHu51kLLr9RQmnEBmFETy3qaH6n0sJ9SlOXQhZV5fvTFhQ7WxsCRQYfB8XgmFpKc2%2F7dbs54NCV5BwH4shaXe9VR27DHS76jGttuBdS%2BQO9KWLB1%2B4q7N0DPV96mSh1DsMgPxa%2BGQse1wsbG7pV0EG8ugTySMeMXW2tCsTjA23VpaQM%2FXKVK8BL5DoNS2UM6NZEtrlwEp2BP5Ax7gFbLtPlUgY%2Bmssym1%2Bf%2B5dTMT2RM1nfQh6ikwWA2jK6%2FeMlZJTR7egu0rrKwAVtVol9pJyy%2BCwk0AoyfftWNmpx9mzsJepJJa66c1QhjPQKw2SSn%2Fw%2FxmVlPzjua%2BaX%2BTWfeGrVZhxC5hukMl07SeffgulgWJVK%2BRDJaWzMHVrKWkpeRUjbtwO%2FWfsn92ZLFK4gvmPa3vnmt%2FXjKjoXp7MiIn3ojg026OQcOqqesLYJODtjoaUBcUDiYWd1Q45%2FIMzRqmbj68PWdoTVZWEWu9GR65qqHWw0Pw3w2B32IIStdE1uYljxBNQpwg2xmH4wXNdqIasMOT90skGOqUBszmI9LyRMtHzpEAZ6DgKuXS3MmvjH9N4RsrznBH2ttZpMM3zW%2BVsyYmwnNbjOOmPDX8Xm50mZ6VuIgOn52QDiK%2BW1E5ZITmVAVicxxjA%2FQPtw6ckXcuMFtGR7tWuSR%2BlM9CBTPaacvvvwGI7x8ESCAqtp0XG%2Fctr%2B1unY03H%2FFU9cG%2FpvXt9PPoUyW5sSs8pU8pwBWTkVUC5eLY83TWN8ULeWfDO&X-Amz-Signature=5fecfb4f6ebcf9c8b4921459d3d9642f4f3b49585fe628bb87b1ef9c1af76618&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NRARAZC%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T042838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICqiHJa0zmlYGkn8MItnCGQ5koM2a7dNpbLUb9jrCwBbAiEArnCzEY6jsblS6E8jFRtq8J1hT2P%2BF7rdZB3kr44nqUwqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAErX7KVbT3fXz9QuSrcA0K89i1K8Eo%2FDcCM8Plhlv1Fr3JNzWmn9EoGhbZb%2Fax%2FO7I%2F%2FLpFPLbCoMRGjR%2BUHzK3M0DXBRr7O1NSU6fVoj%2BULLpUMjrWfXeSavmCDh6hXtEQxHctHcHtgWDlIya1MSR0vti%2BIfqWnsngHVihiQRYc46WCtvKQv1r8OTzj0cBsmS7btRgsPbBnJYkQhNf8FLy2z7fmJrSn6Kq7kZ4tkvG%2BoB6SlZJ66lshgmmr58vgw9Tn2%2F21Ob3YjZn4mihtwz6psq3CgKAJBwTGBXEe2o6qJCpVwIab0IKIAq%2Fw5In1bWKsYqUcaiHPgJHG9idR9iZPdyezTEzGoNdlcFdX5o570lcCdxYH5%2FsqqgHWEOtJZt2jigc8QV%2Brxseb%2BCd%2F7EnSntNhDqZRfKaTKHjYrUYelEGiJkiAJ5DS8u2w6KpGJmx%2BD30S6wQjpaq4yQHGb4%2BQ4vH3BBPTuwhqRIaSZlnmSWLNYki8acX4YkqijO6HPWDosCWpgsnaeE4PKQOeIcJapmLkiXNUDXFDxg%2FZF2pfFTgMSGR%2FjAD6ykcVGrpZTU%2FDcb4lja%2BkPMxc9Wk1mPnyanieDJceiTGEZoPTKr0I9NdWbUZ3robm6P%2FvYMXPcZLRobVfgbbJasNMNT90skGOqUBanIcW0XOarwWUexK%2FkPq53Mwrv%2FxWGeIeWQMrF3ggp7Rnf22kV4sWEpaAjXNkRq3jYG0n%2BTOE%2BrRzb3La8yspn%2FHKo8AFr8tIaGMLeHLrvqej8FfeeGCSbz37G2%2FIfxa8UbQW7w1eIvIrJYhOPb0P6IFS9w6F5HDlGHyzmtMtdkPvOpceMcqwb0OnmGLP%2F96VuArXy9vE4slpkbae%2F3AxPKj2puw&X-Amz-Signature=c26b6aeb30c68edce43cd0de049890b3ff216b55f3574017267965ff9d45cc02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

