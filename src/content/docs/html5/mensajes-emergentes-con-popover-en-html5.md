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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RU5PCYG%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T003655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDPuFOkYSPQlngXlN%2FawEu54S509KQs9LsYUW5Cgb5ZeAiEA8GYVRH6fpB12jPYtxGHC4NuG7cUrzKdJebrLXWSom1Yq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDHM2aTEdcZiZEL6UGircAwFhkiaAV75yp6J86B%2FlftL8PKkfPEa33cT5pO2bBvqGnQopoDXLmwD5Fs%2F35b3fFzcCENM%2FAiKS1MRzXB%2F4bxHZegadiEnDaLjCMzEwgdzj4KhBhTHWein2QtJyxX%2FAE8UHtg8jOzcha1hLzVAnKCRJb1OR9tp8CSwyhyJgZv1OPf97lC%2BXdyBCJM6AlbqwVLk9R01LRTYFcjVKa1RJqMoRb9EUx9gTMZQml14GNTTULVzueuyPk9U2H%2BF21qjDxOlXjlc%2FrG%2FJULJiIo%2BSn9lGb3tg462FPl79jW3LhEU40nXWC4ZDcf2N6Kmxmy1Wezo02OHWRjMz94skjcCQXFSrk3z8XV3X3MJNmZn3jT4hjw3wkbTsQKSnkqwz50bRtY1D1hVahQ5ypfD9ZQFAEkl3UrpTe9UdKuoMbbAbzNFH8A7EbDFZiT9Nx0a9kYOgjvKZFl74kBsi%2FpEQYQkKqm9ytnU%2FHIBv4BEw0z7Fbs2qKvNoOeC%2BljA3iKTKAKm0fjwE%2F055LloI9ENQBA15CuSIzDGXmtXomeTfoNGk5Vmp6TJwuk2JPe4rc%2BcGacUYnNRb5D7RQj5WI4Vh3qcqJEgs6hSW9fPWXSVXNF26Yj3TGtbIOSvGGbtFRVjyMIvozckGOqUBD9BT1yKa2PUZ3b8D7WAQN6V2AkWX32jEsJmG3PFhk70mOjUhX1EesdfbyC28TdHcEXgFqiCzCaKwRWcRpOmYoxVKsoqlngXWkqp1PCYvaDJA9S2G%2Fa7q8NJdg%2FWfXCCpZA0157AhKIA4ljBPB20233I4NRZfHf8x5GzeH36f32dJBkE2NbgwjGCa%2BMmRdiPnUcIStucXxhr04cLG4dy2C4Mlq%2BDn&X-Amz-Signature=5d9a14554292c916029ec0351c554942c46016b969966a54aaac2a223f21c763&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQ36BP7G%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T003655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBI9iB9MESh8YO4voDXrI9l3nQg9iu1KXTbRrSej4U3eAiASsJJ0qJ%2BoLKch6AD1982DeA2jYrP%2B1TI%2BVB4be9D8Mir%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMWt4vN5ER9NEUsL5GKtwDIWdZLUY2vUSvJaogub6k%2BwDwhTGrESUykC3DCsyzyj%2FC8aWXy757gCRxoF5BQjlHmsAZQuXaGvFZ6pOojqffQ3ATCgJKQUuWk9wNFFjBRGXKOIOX9pnDANCO4TKbucluLm5fUEMPE4GLeI64StI3iEngycBvANIxBiqGY4dPx%2F683xg0AFdm%2Feh6dwxqTz0uvCaxdZ2APpjFOW1xZ24YmYav2fhuIRMOTCIc%2Fa86G1Td%2BLRW2PdIUuOt%2B45guJ41xLkuwCQujvZ3E7XdQz4Bt3CL4irst%2Fbz5F%2BM%2BJKsR2QmKlnEDGfTxmLvmaU2u2ssEDTLjRhaFMRtUCQhZe1yrmbuBGR7ZJAmKSMR88Wz0EofC7KHDktOYj7TrDvkYWRWM%2BbLsrtuS1NbtAD%2FGV70ZCuUSD0vtwuB4MYHlS3OWUFkTPFocEjM10OCMuKS7rlFueoif2YzMteGrmLb2H9g5PmIvlIBIJjNvHAt5v9Hrx%2Fn8RmdLo5H7Cd%2BftBPG10jpasq9ex5Iy2e%2FhywF%2B8aRQ35tWEoYonPD4TZAihKTtnb%2Bhvmum6KtwTI3oLjVtRPbvQ%2BRKFwBbAlUbTtNyZVgApZxqi%2BT6SgMO%2FZL6djME3yZOvMnYt5aPasQ4Mw1OjNyQY6pgFVML8HhiLAnoiY%2BkIAbKjDlK8N4pHv%2Bc9QaebwXczx8yKDu4NaSJIDY%2FmFN6Ap5TfJeZ%2BPEXpu8pfKvu4xSj1VU6%2BR3pDW52FSCLA6%2B5d47YCaoeZszCJohQ9BIfgA1S5DXmjkDUeKqJPqMHLmMkiNUGfHeVRaKV%2BRY2%2FLzbDG8qraJoRN1xZ9%2F4Bs1AQjzEHfphAKafnw0%2F2g%2BEqL8xnbtNNQrNRY&X-Amz-Signature=396fb6a059adc91c4cdd500c3d0628d845cf740fa1ebd7303cb805a809fd0c7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

