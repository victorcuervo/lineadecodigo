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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663732ZOA5%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T212055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGV%2BxOOgfyD93WaILNu%2BqlY0fdsbC8A2aBXj93s34YFTAiBpcPLQEZj3p4u4GtNKuFXcBhia%2BLXE9j1z5lceG3tpHiqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuG7CuzqNAXveg%2B01KtwDyUD9RLMr5Xt4sdHrSPlQtx7OPET%2Bs5bw1wyVgI0HEBmMw5DEId35vL2f1MriGEzSG97AxqkFnNSyEF1d76gTplB%2B%2Fj0T%2B4ZHEjgJKEhzroSCqxwtS4t8qOq2xCcztAKP7kWlbcKCQFTdqqIVbi%2FqH%2BOS5sKyy2qH5du8a%2Bwy8xtym3K8hT96AslONSp4iHTDF4%2BG8MoA7otKgnebzc7jZqyCYzzsarEkrEsXEYEAKoBOElsgT9lClSHRSQ3frwhTVeHZcOf%2BYO6xb%2BkAg9mTLsVYBEZ%2BSG17teF42W4EKfBR0U%2FlzcAe5P5FrdB0TjPc1bsKKAH1D%2BXR%2BmaYCANpzVE%2Fm8grmVw3R5AaeQMjIkjiVmUkD8gGk6GOhMIUR3dkYnI%2B1Vv%2BEuy9hD5YGU40eVpATg40kyj2YzFqHWoYJF2Ir8xTBtoAZOPsXAquJp1J7ESH%2FVlrwuik%2FMnPBHuOkLNqWmtB2pv%2FVkUeqthI%2FZp1JgBUxTrRtfQoyIZvgOdZi5mLPt%2FIzXlrdp5%2BK0U9XNnNwc6BkAUfpupmKO6YBHitunNozb8BCTxYqDPx9rVAjVpzoOlVGLOKfl%2BzAuWYg4%2FUI59yrHtW01BMgLLQ%2FoFXtGZaV%2BTnL%2BtHDN0wxsfXyQY6pgHoStu%2FqrHvTqavmgff5WP150HZolzrpHjADONbPu5PxEv8c5SNnWpv4AuRrCSJZhQ5KXIWBKdv1pjenzirgQnhXn12lDKmmD0mHIkdpxwdSbxPdf%2FsfiqXRp4CVy1dfZQqxkr19copvHmATPjLenXdaDvLPm9jugomS03VUbnErKw45uIQUy3XF8MGzM%2FVgX%2BIAGKJfkEjZxm%2BwoJHOwt1Ry%2FDbpqf&X-Amz-Signature=e6797ab1798643483a6a89932b769cb9fb8c3314666e9077028d1e1d5897a6d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IPHRPMC%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T212052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCyBxAmH2lr8WZCogCPP%2FjgCPouPkKbC3%2BwhdpK2dKgfwIhAPAnPBzU5sdGiXwGpz0%2FSqFsSnH9QaIg%2FDCTP2R8yiOIKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyCSZpe7cLQ3N4c4LMq3AOVp2dNmmaK7DJn0DfsatgfKYHA0u5PDp8IAtAOarBZXAlqBrEbiv0g9tGfGpp72bNsaLaM3Jsjk537zMlt32fN7SEfyjHYz2FWLqMY1GXx57aa8nSS4P1rpr5U%2BpauShypOfliKvf3V0pIa2YdOwx%2BYEa18faL0LStbo3aNmG97C4aQnxVb%2BfJgZCChtJPSCj%2B7ZYx7ZFYckyQsnKkubiSSsGJpKcmvhgvmHt8%2FBd5c5Bz3zX5EFbW4pegRT9JxOaPYebjy%2BmyWErMLqE%2FODKtd%2FA0K5xlirIYJMhz%2FWb42LmOmik7KRGKuSSfY01l9RvHjohjum%2BK8dBH%2FWU91%2B2WGdhWLEn1EEWI8AmgPYeXybBZxvgZvDOHnJWAyVgDp3gGCBINLGUJ6%2FSOXR9Og9yXZJTscCm6UylQGnjtLJS49qJnTrN%2Bs7%2FIpB1xtXeDbk8R1tRb%2B2Z3qIcLrWjqNu1FAp9vvk5TqHZC0XG2TGx7LT3%2FWRh6plH1M3YbuLFop25Ftibp5JWPDm4CzYjTr68AD8WIGv4spi%2FqVLjTCbdZeno%2Bu3wIgXd4VqIHfRYdMUA19E%2BzQqbLrZm1L6Wqdm187H5mrywQLOAZ%2B1ywub2Jp%2F2xCTmLBFOAhda6IDDHx9fJBjqkAYUATek3f2ZJH%2Bg3%2F1YaUtnFnTNPT1c8qz6FUGMZATmVV9iR%2Bce9RZ6a7K5HpwY9w%2Fd4v6QoIz4xg33jG0t5tZ0aovi0WNhGFGTCfYLmPplHsO7P3s0DCoUaCcqr%2BkY1jWJrdQkYmC2ATil%2BBOK%2FCQvM8mFclolMtoIlChD5%2BePQRUev1KYOlrvWdh4tFkdwuvWPVkNeiJga9M2aHvkkDeRtB7M7&X-Amz-Signature=21da188d454bae7ef8a4290a865d691de2b663664c837cf8d4e96ac33fba27a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

