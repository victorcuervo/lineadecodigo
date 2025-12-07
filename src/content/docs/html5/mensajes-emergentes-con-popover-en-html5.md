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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XUB5ATM%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T175252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGrr5aLrJUCxS45IyezZtjaBv4mVuWLgltFFxy2noHtuAiEAqpG3UuQFkFptx5Jwpb%2BkHOJjXi%2BYR4HkNp0i4HAKxhMqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEnRzPIMOqIIcExfhircA81kWancyGk%2FQDg0eM%2FAxjo2FS%2BsfcX0SVrQ2gox5iBfWLSB49FULlGua1PJ%2FmEtCDbhIsot0hsP2Fbfy6V2h4HMuSs1rilgptjHlh%2FobnuG7e0%2F1WlJLOldkIHjkszfM8G4Lte9t508vAjEV%2Ft6xRXZrRboYtstwgbiyC%2BDb7ZjrGa%2BDUpDRA6wet5KtXPKgJFUDArnllxhN5XucsBleiIpvPghw41bT2f0UVpskZAb0Jl7i%2BWRVByaAiGEC6ITKgBldnRH15DAJr7eSqOIK2oaNwPZT21L3UHPHs7nDSKtm1lo4dnihwTVVNKCbMeZpvWPeYsKZxUrP%2FW9h7V07yHLvc1tp3pPQGHgFgrNa5g%2Fk3XqZlWhEDuYhxzdUZSeHuvkZQR80FyVe20OIQ5oRhL%2BanK8FylU6rC4w3KkUcsaDPDdLnu3tbMomkj5WCABK84EcXY2pb13Blqz1hrUMr3VpcG2U7Q5ksKud6hsSB2WB248e2qOEfHg5bNzZ%2FZX6AFdD7yyNmTMNTc2wwp3My80RPvN79xaxlr5rxU90%2B79cFmBInC%2FsUJhkbeI16p%2FC2Y8UJH4A9ztMoiEqPM14UkSqCYbYFe8LZgNI9kZsgDbpeVoqeSuT6A0xGslMIi%2F1skGOqUBzroWeURXFEF%2BjpK8lJ9wwQn8b0iZqP%2F0q64h41o42AB1WUHHvBYPOj1%2FlZbwLlOydFIp%2FEV8G1ZnoQxAif1oUcN9dnsOiX%2FVJQG5M9KXNJvHr%2Fh9mpwEAgiBWDNVLcb%2B5n7Jf4VTzFQpaNbxiGZHjlPP85itgQUVtlGx0%2F1pycL50gmc7a7HUh%2F9QrM4AYMY5keVSUsBi0F%2BBDBdA0y9NNhc%2BM24&X-Amz-Signature=ae960f08a17129485e6880fb00c100bcd99cbdd87cec454bbce8f785b1f0033e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667O3FQWIP%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T175252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDI9xbMNLgF6%2Fsi%2BtKcFwWA8ufVsiL6FV5kfgmkUfdjUAiEAnyjkBkFLdWFT7W1nTvL%2FghK4F558PV4VrFXHmOQRqi4qiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJZ4lgEBaPDQjrQLpircA4azi%2F4WgLZKOIANv5RkTig6BByPyJ8h1PkbxcLhlLJYxwE7ZI5DllgTSRTWkHXgSa%2B%2FuCxG8zQk3RczTaHmFWOH89bweK926Y2%2FBt71JatXHsh2sYfCkMPEPQl8jnOorO40gfyaqezolObKow1NuwblxQ2a1Ko%2Bp0uvBSIPRS4pDt%2FxYDaOa3hpRcWgHDAV9Daq1XKRLG4QPUc8%2FbBOfsGPaT81o2TjjYK053BwTm9BoLMT3qDeD2fk8YkHAvle%2BoUcXgPAnZACWSZgIVK%2BbWaXtY4W4ujf4MEpW8Tv%2BDLO6T7w5jip864MzM7FcrxqiBc4C8GF91jbWJLubumNhbhy%2F9MqZdayoZzmZ6IRsp6Fhm7dpliZ3B3aE2X2fpzXGVFsKKoLSaWrN4rG8KEOJLzO%2FGQ1qv6%2B9WbMmzpje75Osgo2NAW2WE67qAZWLb430wnDast9Ea%2BaxLHCSERlOkmFkM6lLLmZeZwQhBv4G3L3xrNeCC2HYAuLP1pYXwUnJ7bf760LvrIVoXPNEko7Ht3PJ0zylLHVfALb3RG2HNz3SHNkM2JDMtLbROpJi35NLzcy2IlWe1Q56o3J8CbHkeZbJ4BO5PlvIzyh%2F%2Bcq6rnz6zB3CTVNXoS47k%2BlMIHA1skGOqUBEmeQRdbXvsmBlV38RZLKXLVfj5ObNPCKnruQuG687T0NotlcZeEH7yhxLYvQU25R8%2BWy6kl4nVwYJwprK%2F8R%2BrKcD48mx2w7HoBPcQUJCWr4HyRINAbWoDEmkXLCfBxAp1jLeq%2Bks%2FNy8xLet6%2FvVQgYVxiDAAkq50n2BMCgZ1QqQng3NgX60%2Bw0ZM2QFFdmLR4PxZjsOGderbrSUR8TuwK2s%2F8n&X-Amz-Signature=e14a9505e6ab6cfa7d701ce7cfd51b981ad905d423050da2f37075768be29f68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

