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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6I2AWAG%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T041911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIGqS2%2FWgp6l2ZNPcg6phgE9kAAgz5gbnKXS4JnC5dKooAiAdpYfnqB20UE%2F6UM6KMWm4RmQR5SHJ0xUGIddcGp5d4yr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMyU2zZPpt5JkConDBKtwD%2FrH7LtflVCkmi0AoGwGIbFiO%2FTy1vFlaH3ulrvXbvu25%2BZnJsmc6KdKDUMmx3cRrNWSCR2ItoIEi9El1Kb%2B8iuQeocZttHC3qLp4mmq%2FMI3EVbSNh4xzDQNgCogRFUqb1a8wzDSAfl31NMvS%2BLuktebNBjlDTstiBDAJ6W1X2mSBgrx9HxLKXvWSnBDCTbFZrLU28G9VQvx%2B8ojIuoGg7YkzH6zNfEtBnjN%2FQsAqmM%2BKTi1j%2Bc1m1hLSJp4ISWwtJips8dLAJnENA8yVxw4FzHAhX7LqgCPRNZeiFUh0rAGYpptgTcZsJW9Mh3F6cG7iqfdykUs4w9knALI%2F9Nhff7xyKvoHqHcCEQAItnSMG%2FclxIbssxR8DNY4CHnYW43abqP%2Fyh%2FXBop%2FlAEmGuSCkkGe3MN6X9reIpfWwOFLkly0b%2BHyxd%2BiXNFRGg0Mn6hl5bhkhdueAioDEfJ61lnLTkqaR1xcUY%2B2fa8KOeeZ9WxPMhkxA15oRTl8xuHhFpQTPFgSKaJ46z1zTdHhnnHsJ%2BJIMBt%2BzBo9u45OMh%2BylcEtqMuMQuetZ9I7S2PVKu9DK636KzFVDsCSU2ZaSsb%2BG1F98mPnovqvfcXOauG%2FuGb89rsuo3RK1R%2FCCAkwjJHEyQY6pgHcBCTokQnq4f3D7L9vfDuva9TNXrR7OeaPaX0nFl0BnV36biIKGNMWjejxmAPfkN1z%2BeeIcuTxIjLWxFzQ4fs4uIqVE2Pi9PtosPAL4OgwyNEPM3xo0Tp7feeF5vCcV0wzZ2xR5IdxotOErhSEJEdRClx7n9LehSWhwvBp3FewT%2Ba%2F%2FxfkDrVeCXBSVMz0tkt6DrgfMgdy6zziJyyMohuj1alkLdSD&X-Amz-Signature=01eba4f33404ea30280b840ab777329c70f3fa7dc35b7058d2ed235358de4b80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZANCGDMX%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T041911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIBZTFawn%2FO3ow7yjOeet8SS35WSbb2YQD1N2zo7%2FvArrAiEAh6sNWZkxS57DAUwE7HJ9kdfjAxBx51fdtXo1bFdhI%2Foq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDKgz5vyBRJ0xOjemdCrcAyV5S0%2BxGSfa4A78E02QW1sXfAlTLZf3XCRq3o68PZpfb10ybKr%2BfxmPOwgt5fu5DSl9OFTmX%2BrG2cp5zakuvWm0o4p3JJsKNjRM%2BiwfW3TPYo8hNpgjUXfru3ryuG5pgr3jjw6tW42Y1K0NihVrUCezi%2BhUZmckN95BLDS4QfdoKgqvk8Z4di9i9Ma9Uu%2Fd2WkYHb5UR0poWPDVLD4mx8MW2lS0hsFT0tRChkY%2FlUxQ2mvOAm%2FQLCsUsHGDsx6U%2BKREjuKae6ADaMSJbB6NuyA900pT%2BHoJca94KqlBrUli6TcTsqazGiGQSvDpa4Vg5zEh3wNzWL7DcIr5HdPAs4NX0%2BcIcFYwEIHW9mBOJqDR1WEsjQ93Uy5OHl4ZspI8tzN3TcCy3WIh9sFiZKLUazmAOBiGbwXnzYSWmKfojLgNscRgN7i%2F7Jv62I%2FoUcOilIATrOLt%2BUuczENW3YcwGfBpXXKWNnkM0kgY8q66B1Oo8AxDh4z02jHWarmCQgfhdmBUR3vqQe1hLaaUJv7pTKQ5WGLAhx2KBEOKMrA0V4M4AqPP2n39zgnQznMcE412z3W3pU1ryi3g7Ib7JVDGP5%2BMu00OZocF07xs7vbcUr77wNOzoJXN8WBJ%2B8ksMJeRxMkGOqUBO%2B5NRizvrIgSCQWb8VpLvVi2lXnw%2FzDktmkifi%2FW31e7Pcx0kxt03%2BoST8qYP5VddtHEZjoR970TmCZoaVpdjggHSlPcXJr6EDMhyEiOdneO9CJS4IZDYTPdy7ek%2FQ8UgyTSAcwfk9s%2Bc5lUH62uImZbKOK7dvlFUa7xGLdYBq3TrePz7Zo1AbQD%2BEjyagwmBWUuUv%2BhO2QDDbi9wO6eEpEcfZik&X-Amz-Signature=5f7435164f9e5d2af9b9292546872b0053ab865ab55d54003120d3b9c2e5b904&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

