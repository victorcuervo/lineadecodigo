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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Q7GOWM5%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T095717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIC8ody7lrp6YIrwt0YjTQ5ZCWcAQ%2F%2B%2FwtlXhc53dbsDKAiBYdEN7kc5rkE0N77MLMEwU1VJ5jwe%2Fy5XcIHa6XShuqCr%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMZcGUn1CLeEosMUbVKtwDJjIq1HaVD7ny7pFjpmbi1Kc8yC75zUPvS%2FfInG667RkfZtm8I5BUUjYBRlQRcgB%2BPyjVwnH6x5Eebr8HtTD2pVDvLFZYficT1UibfTvBFffNIxzfh2FGtiEpsir1L0SyECaeXQoMM4oEL1iTlYN7qmTpKGGjBl70lkiRFIBWTpCBtDNNW4LaOuSZpL9IY%2FVUidTSPxbiLnl5kgASC6Q71zEd5nCIuT1X3C3a%2FygUxl7gHzdG9oylmvUI29mLABCNH8XylL1Ipg7LcpN9bYLL5LrnUKkAQGmx5n9mSOvy7n3AOPvovdouRm7Z41unj6bXjDMsR0qN0PX5mI%2F9xBNt2fYgAJaHIa6jQ14uvflx4x%2FxoSBMp2hd8Lotq509jMNcSD6oVCqY8%2BJagYgtyZMAB5DtRMp8Z6oxZA%2FeRqlxQeiVL1JdOD0iqMUO5LNldUqC8vbSjDQgVGee3juDMQo9i4Dtt%2FOVfGQ3u9onznsUXMG6AmQHdEbUgE7VfHJPfXUQksjWGBR5b7T3GjCw0qOpf4YPolbQYj6ZuQWXE5RPINmvpubT%2Fik76GtYfsXO9Pf%2BAgRA94rZdI5BaUyMhMk%2BQweOPQZHAmvK6u34S8Fnk7NOJ%2BnVGckl2xSwdYMwmazFyQY6pgGSH4v34j%2Bz9hsB6OePOcsVbiJbl7mgjeY2WlufPnr2ko6BfplcEEaTgpH4cDriovQQug4d2RxFUXqjUqp81Ha%2F52tVEE46trm3Mnp%2FS1OMY%2B8a%2BXbWQn9gmoJVyK8HqlWdAF5EspUo7i445kPOzVxeanozjcrJLT3UgvrYyYDQYM%2FGhXM3AFBE1%2B7aVMDUQVBYlfH1kdM7hxTmAm5o89HCpYAenQuU&X-Amz-Signature=a7d7575b5ab16f34f0111952899d0793b2ac8f94b6612603dd4a8e7609b88ae1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWQW74DA%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T095717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQCdmpks03I1EkFQSJzBFct6KKO6FW1IOOhJkIX9HM6PCAIgUOMNrNZUJCI30XOdO9xKNiDVWcNrnsQLoBpPXSGCGLEq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDIs49KDjurB3U5rzQSrcA0gCDADR18AYShrrEoa2iMJj7GUZTm6%2Bqy5Uy4hCbDrfWnZ5RwqLipYuEpjtJBV%2BeAy3qfGunmkw6FAXl2K%2BgGCpHJGLnkRz%2F8vnws6a0H9td%2BVo%2FsWR0%2FKUSo2ed5V%2FPEZn5JN61Dkw2b2eCTYazeyoXIAJgnXsHD7D4bPT7LiM9imc8T0tVlpIxRt%2FJ5t4FP6i8Ulmo5ktRnyn7RhX%2B5Scvw7mJUF%2B9scp%2Bk9GsH4wUEZS59zEVAowzkbzOw23QyRrMOyCesmY3C9%2FkQsINS6oIA3gyTPEvIOVtPTXflDzPSGEtQSN1fRfpQx%2FlTFnIy%2Fv3LWW%2BjIzcpiCH%2FE5uJ6g52v0RSajhdKxSeu3kMutHn%2FfBJvWDIvU0LmyZ%2FZQMyhcLphtsioLyOmrHfxz0BIABNbK7M8HJnAnlAB2J72iLcGdPN4TICXG%2BA%2BDXGtA971X43UyV%2BiDlBAU4dXmYeoqjoceqviyW%2FDjiUxDm4AebHFdePwkLzZNVEkgsW5FTrlwKEzm1HiVdWwxqtfo1wG6on1oSV2xjKeLS%2B2F3B1Psk63oiUtZPQ7OxsbvS1NF0o4sQlvs0cZwv7nU%2FpQbDGVtuhJr67AHB6GmEuczovaxr9zw1%2Fson%2FUug4tMJ6rxckGOqUBRNH%2F8l1eI2yC7iL%2FmK9lt%2FTgQZ6YLD9pTB3%2FRcuWDMfYfvmnPMD%2B99V4HwC0YqEY5RVH1MN1U22dEW3n5RQNF3wz%2BT94NRcBkfV6b1CB0uCw0WYfias%2BzsVAhk5mBYg3%2FXlwyLDfY8FSxwBJLW3WMsy3pvl7FF0wVmZHSr35tyQkukBMzcVYBpH2ygy3XbwMquBN8vK9PVPf5WPTBwSs%2BImer2Ut&X-Amz-Signature=11c776279a20325d5cb31e65c9b777cdc2f75fc9f337b1119d54ff7b463a1656&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

