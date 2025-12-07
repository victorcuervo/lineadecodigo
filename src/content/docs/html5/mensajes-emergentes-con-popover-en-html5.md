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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KQ5PEN2%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T192536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoClgkT2S3sh2Vd67hOBJDDMKFhee6BzF0n2Oe9lhoswIgSDsbd2Q1uXndXv%2Flp%2FVZFBMcQXOSwIp0CxZbSGBvHgAqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPEwHdiLaztYq4HeHSrcA0nvJMVSR2Wvdx4uiR4%2Bjj5ePUDGDox1%2BaU9Iqh2wMjTga8d3r6NpKcUIL%2Fwv4boBVbMxH3dvtUOdaqwgnEL10MXreX5cU8rE59lRnXueZ9Lj1bHyg1mHJiFmwBv2Thsx979UcQBa%2BRilQq60fogNQGLJy6GXC%2FVz9nifpvEB2M09s08sq0%2FnFwTA6W4KMgPfnx3shWcJFQSeYrCiVZkcmhIwnyUAsdgVUvYzSTOg1xez6yGPSzoSX%2B4PPIO9mapHOz6V%2F7nOtaONT96hFe3LTK9FZkk7ASt%2B9gknrkceCRHQIOfyfP5GPv9VRxiu8JuOA4MX1tCuz%2BDHEEZta44Nz0AdzqYE1%2FBUEQ0daYh6fg9syyLNv%2BQfYDdQ1j6yOqs9ht%2BoIw1tM8H9AOpWA5hRt9aGPv1A%2F25QJFKCVqqmNHZy37khn77NUE3C3IdAtmJLo7vyV21%2FOlAdAysuWz%2B1N0wI7CkTY%2FVNzPcLCT2b9ibsr%2BgedC7RrvYUuQjLW%2BvwnzU4DVtRURra0yfZ6SQC1y92am3wOjinjLL46gaD00zdqMOMjCZey5uPNNsFnYJiVA7jOuJX3nj2JRncqTSPnnbVg2nlig1Y%2FplFJNABxc8WwEij1f5RJYCWyEHMMmz1skGOqUBdMF01TtexDThq4pJzRlafc9qVZHLT%2F4f9vCrkLWR1NCgn8jsOwOK%2Fl3A9re8NubczkF3WWxiudq2Nk0lXxDtEfCB0vfN0Q6H6ZqOUtrq%2BK56qF%2Bbh7fwE3%2FBvLVjdS2tUrAIQKHXt1X3PmXxF6ULCW2cVBfud0ETYE9SPNjuJ%2FJDCB2vr0OHecrHHVG2YCqumSR%2BhQGnPdSxq%2FYRffP6oiwjcc91&X-Amz-Signature=8107a718c6972d950861d85dfc393c66dab291b8574e4281b324b799bf0a81c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663I6GY443%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T192534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDHf2yN1b%2Bid%2Fm1F7fbvqxYqG7uKA%2B23%2FI6iOrzgsr5DQIgDluVVeB1MVPEyUahlecOvt0Gx2b4XWCpBJwUFdjELgcqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE3Nwk6STTcjvPtGyyrcAxSh1CgwT%2BTO5nd4xYE8%2ByaHP6oQKQSanhlsus7yN1yY1gSa6%2B8%2FE%2F2FOsY7Qdl7ICWa5mFKZCQaCht7xu3nR2CZ%2FPvbYedJGbViitMq3ejVYOSQN4n%2F0F2AQf5Kzi6FBhFUdrv4xkec7h77xGpyJTegNnKqRb7zP%2BDBsR3CquLM%2FUpxb3WThcBJRE4851beR7fCicXEU4mjCazSYEqnRIHxCLqr2swGsUGFENF7KhP5UbYf6UrkO1E6AK4C%2Fe6BMBWfJnuP8wqYnoVmil7QA9DYQ0D6soU9BIMtHn%2BC5eXMBzQBL8FE%2BfuBxeJq5KXDEOxZ4ZdZEaAOCtvL3q7agnZAbJ3UIQdYewGpg1RvDoXcUI5%2BIer7hVRIoaFF7VkIx0WIMbiwYGrZMKj9OWz1hNzq2xyYDypQnNMrEMan0uPVv2yGxlwgNAoqVT0nL%2FBUdZz6Goa0nZFdamfohq5dNFXn6KB1v98JmE0ftZAXIN5LA2HC7S7qX%2FPySZ1r4f%2B5kV0Buhg%2BRPkJ76xqMa6V170OninM08f%2Fwhe0CivarCEmi2S832YNoE5yeyGW4LhhCnSJmzLOIPEqzY2XdvnWzxbZDAKfW01NaH7yF3CX5Dau1ccSD12MW8mApaqQMLWo18kGOqUBRvzATZyrGWtshwk4bY8ZbnEuFWyepoE9gM76Ch%2FW3stfZ4VhA%2F%2B0U1A9Zr%2ByTipjA%2FdaxebLCSgbip%2Fv5ciNUTvDrekq4oUuEUA93uaRd9X952%2F%2BDdfYN6xAnR3xlG8aiC3Pk%2FgrhpVwS98xOxbifv9j60Iyhyb%2BLwnI%2FfvindwhXxKFSCFx8yZ2zzKERpwpcwjIxkWDLwDDU7M%2FYGa2GWAZKSdA&X-Amz-Signature=3e5d476ff29a3bef49380428e924e6ec028563e8ba7dbc1eb488fc46303cfe91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

