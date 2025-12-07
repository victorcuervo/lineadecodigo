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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVS2N2NV%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T154400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7c76szFJF2J99ySnNeVCwPOsyYT3sMFu4MT4pmvTcUQIgRUrakrSOIRKNYfpIQPPteXfNsg8JZG9qQSSSg6EV9XYqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKZGfYrit9b355PwLCrcA%2F08ehG%2Fi0pIfvAaH%2B50KraHTLc3oVEr3fXnFv15WWQxrmyes%2FN4XVHIWace2gM4AaC2ytlXeabIm08sCSWk%2BEsSHZmV9VBrj3Yvu%2Bwx%2Bzfh5uxGoX9vzADZPTSbgMwQT8Sy%2FdWmfTCZjMDKHaQEN85d8hJV7ae%2BHoYQ0VP6%2FXkKfsmY02AvylpBeKtBwiKNDiqRHlsoAkViLi%2Fc4%2F9XBxCtXhvg8JO1%2BB3GeMOa2HB7I5hGZBFIGQthjU6PHVW5AypA9x64wxv0AkNLO9sUlJzbaUBvmwVRLwo1UCILSwdjbkRU3RwN3jCE6vsIFNYN69Ij%2BQH7%2BgWtlGuIOfTEKX5xcywsAxqkkZKjEGxYsbVi0DQ2vmIxsHdu0xmiQkDrzPw4CC%2F99MYvJ%2BnE9vXm%2FJ9vsy5iKI8DX6OXx6n%2FB%2F9LZAcYCEuuPloHCKsTzZxFz3DCHPVHzeteC6NsYmimfYZo0TmtvdF%2BK1cJ8k0G6NH8%2F7YOkEvzig4dSvmVK1b4hhwDuGz1eePp1rCo%2FEvbrp7GOZpZ6Wn3kcbdbIpwyFdbU5V7RgjI%2FUTUyxa1Lfh4iYcn0rAw9Zta4sCk8ljfHmN84RjrBEvcUA9m8ThQEqsKLdiZQRGWX5sMCGH4MLy31skGOqUBCixwM0Y%2BPrC%2FoCGySqfliAPrJ71E2jl9eGY8m96lztbZZM81G7%2BDA2ZnVrWGVB2TWW881DJ%2BL4YANb4wfXkNl5xjVOx88eOdfaE65tobiOkmAvntmr%2FvLo88M%2BL3iHzSBnxIaIs6ezf14foElBL38DZspRJUrg1gpGqRHHO4eOz253b5IkL%2Ba68EvZLPUdHVyjuqar%2B3b8hG%2BTifKkiSROFXS5s%2F&X-Amz-Signature=88d97eb51e02bf0adae14eee1851932d0a32917679959984c14cf7504ae61681&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RXA2ETS%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T154359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH7mOWlV%2FZhyQx6RX0rROn5cXLLm%2B2SV%2FPHT3%2FWb2ORDAiBYEGuuw7JFecpm%2BCEJZ5ofRhSR6SLsaV9fkkSUmRxHnSqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdjcUJgY3kMuFA9ifKtwD%2BMqixknFGXNrr0mPLOB0rHmGJh1BA7pd6zyEhmlLz9Uo4O1S%2Fe1%2BIG79yW1%2BmULAewdfyZyDPOc%2B0noBhpEInhm1vjr8vGUp3Nl6VC9ftr5zG5MRQKiJXgdHilytIVSsYUcD8HxqMqRe9MtSZMIko7P9MUtPyb10Bvh84JNX75MNBIfGsXAoAK7WBKEwRJ72fjr1LPd3cx%2Bbwwoe%2B5jYzrN9ZHUX8mohOALsMZSu1i8IB99p66M3JwZzJqx6dszdDq4AVVGzHm10LQqKM5Wgmx73V6EhVe%2Fqnnb9V34mzI1NSJYJE4ZZ0S0vA8Ozdt757P0R%2BkkmmB8m2mJMnscOYjT2hmqGdgKD9IrDV9mnvS5oIH1Shw5adJ6R9XNDM1%2F92WQkcDUlQNpMeJa15BMl0Vc9s5fHxu23Kp31%2FfOX0UrTyYJtKwYe3C3413SKofLh0tBhQLVY1vHQc0EYcu6fBnazqvTHjQKUvvD108WJS72yCDIkLMfD3w52ojLlCEyQ4hlK9ohIRBU%2FtXRrG23o1pfyys93P%2FucyyWtmearG%2BlzBZyKGdU71VsSjDxHGWchgITurrFbRQIjaeqOmnDm5uhNwTWBdqlwaGTRcKvQm9yM4%2FuMNN8ADlXH%2BhYwvr7WyQY6pgHIP5hEuK4h3Vtq1rGU%2BNW24SXhIukVVbhTol3KE2AUJjT%2B4tDxh21F03MQ%2F5o%2FgZTxbLq79J1FNZZFjXC%2BTFXrCEwrRwl5EaCoV0DTPW8OMigq6btK3PltZZbVu0dyojHvXLjwFjBnq6wMbUY8klLpt0585%2FAP%2B0lgY2xiFz%2B%2Fu%2FVgUDjzLiSCPuZd1tS%2B63XDL%2B9yJj4fBlS45ON4S42ULslkoLmt&X-Amz-Signature=1d4e9fa75ca959ea0577af2f602d410bbabca18b366a4f96407c881086c9d835&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

