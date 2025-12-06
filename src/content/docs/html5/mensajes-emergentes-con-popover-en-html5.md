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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHIOUEMZ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T004413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGm8%2FMg64LxjebUoVZVuriIGzhaXBDhg6WlUAbE%2F9bHMAiASpDCpa9KiFyiKgThgd%2FaaVOvNWN1A9gLuoa%2BjNaMrwCr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMygWLKoIdp39UPBDlKtwDbYEZwq9bg8gTnFSzIB2Sji%2FOTexyeSmDTqISy5Zb4I1p1aiJG67UxrnRJDpYYGauOA4l3g97LqtpXtPuA4%2FIzREstiuH04DOjNWzjwfybWglWawnS9ECGjIFq%2FKU40hQExN99WpiRPm5rFzlKD58CEAuAeTiBIs5fVdvJz4nmX%2B80%2BOM3vTZCiUsuqeD5%2FBG%2BmDrjZKoXyltMIOczRoqVZOcmvIcQ6CcmDViNfEy35rx0tOMBW69MabN1x6XGFgh8see6iSF9zqJjqpyXsVlM54MgjtdnQFCUzigf6sYgYT%2Bnjz2ugV79g03qYkpqY82Dm%2FpryKC0cOc59TH1oNO3irxap6%2FNx%2Be5yYtAEoStQqCcxHaGPuxrpK0fxM2Ve6T%2B8FG2sIvl6aOtPYFLwKba3UnDskfNYvj3437Ofj%2FNkjI2Kro0f9cOz2fdjOl%2BVwPNeIwlFfRhsop5yL%2FBxXuxQiHDnMNW%2Fga%2BZLx7mBBHhfol7cBM2Zv7i4scxVR4iQmS5C6HIQszbI76nKIi8WdN1%2BJOHl%2BDP9FG0ozcs%2F1r4WSym1VNQFqGLtDY2kOfV%2BJJk5u%2F%2Br0gbkdqLNTAiM30M9Hvx6uH%2BxQ3PCYpyqojKJdL2WBOabRkuXY6AowgunNyQY6pgG8Ol2Fpir6njLtwnGc%2BnISUf98ARhlFJ0fChHasFTl6APmeRyNg27NsNOC%2BiCJXVqhEPCXnuC2xPiy39P01dgclZCTj%2F23OntAPGaW4w5VoZkwTXb%2FkMdkNWTvEFQVY75xYwzJgxlPIQRctIw7SrHPDDWl%2BodNMacx%2BPNw4JDs%2FhYjOPPLjIv79ByZyfZb1%2FFHdgFeu1LmlxurR7bHuh1ssKrR9bFG&X-Amz-Signature=7095b2b841c84fced41fe7a988dc969ce4a7325fc67f1e03f48b0459a3086fe7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKQIBS26%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T004413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSGnII9Sl5yL0SsFik6rY2rE%2Bcz4%2B6XHrCz%2F8EuPY%2BdQIgPdEqI%2FvCtUG%2F3Uez%2BNs5IJNTAZUl8c5evpOvPDTfskkq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDIIpjubvSuhhiJC66CrcA1RBBcE%2BgTdDWC%2FwcWCCeR1qH3vqSs4AkPTPbHLsPc0GH9200p9q7lf9uZ01k9qPiuf1rORYazbc6Z%2BNmZYPWcukchKq88lCfXPVwj9Q%2B18RbcduDSOngDZaQ3SBAVseSms%2F9JbopChqsRXMH7i0VJ6SwKOn9b03VjbKU2uQ%2BYZYm%2Bg6mUUYTDBQntkPxsiEfmhUOPP%2BYRT91z%2BWxfd4aY5T96hpQn29Fr4%2BWSl2zxdMpYPIf59YTSOyH%2BZeQq9pb9cFFBI3JMnKJRrYDBK7gldhXqct047OYmc3lvCCAQthi90ANPoeZSToA%2BIk3aDgm4X3xA%2Fb6218%2F8GeMw%2FVVfmtO2ciLV2lxB19QTZwSDEiVSvFdCeeAF0C7kO79%2BoBC4i5KfCw7TDnRy5TjR1Q8rSWFwFNwdwr8ETl%2F6c4DJ1Uz8Ri9y4d9B6x21TLI7rds2EQxStM%2F%2FSNP5EpfKXzv0CX0CviXymo9QGa%2BqN3PEmFgEjOIupYthAGFRLEnx6J73xPChQr7mQzhjiCNgmPkoWr0u%2FjAYzZB6F27Z4utSUQHuukyJU88kqMOFPky0994Q%2FGdoqTWtAsxYyR1TZtm3yUNLydwe%2FiRUz2dVeuPZJ9WwVvQCmjx8rMMpZ4MK%2FozckGOqUBHfImNCWxQsa77iJ8odar%2FILb2TDvW07kzJLIz9a8L6CDehILhWCb0f6uvZoxdShIyUlxI%2FqFBVLYa2gOsBoQHX29dp70mPXZoX497t%2Fh3pt0B%2FmEIPa%2BqQAYZfTSbjaNuS5gianlRdsqO1iM7qbm1VUF3AokuplN46VRK6OypWMnc%2FZgBGW1voEn6CbbE4Hf9RkeDN9qSk3AyIFpMG56vVMM7wfQ&X-Amz-Signature=75aa583daa6a9a2f07e5010d44a2a797fd1035bd125e168642e7b1f936e85344&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

