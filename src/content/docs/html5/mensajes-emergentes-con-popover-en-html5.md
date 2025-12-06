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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IW3DL7E%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T100354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICTbH35jbZZ02cBC6LBgA0Qys%2FgnSnsWds13a9s0TVVxAiBDNZEYoGQg5HOFU39a3nyS7Lo3W3KmMPzp8EXLdOf%2BCir%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMHrdEI692XBnn80LcKtwDBYNMjQQCvbjfDwU5w5rj4BWWaHWV7at7gnBZMcjDx2zXypkg28xA05NoRnl9nH5YvcExHudxKaHFvBQtL5N6DZmR%2FOTgGSi4OfbJDyUtbgJ9PX9798UEu95X%2F2WtL9K%2FDKY7bykFmcrHwpsc9t3T74ZnQHvNfp4Mt5jnvBeW3ZsTUwhNm%2FJnP5HzcPqma8t3ZSBkqgMmuKxb%2F837U9oPLUlJQwut6DZWlUv2v2NyMwYoECkK8ksDqc7gSI8n2dJMVaunq2c00CazcAYZYtDFGo6jeu0xZbKCMN%2F3L2UIc%2FhIwaYLT6KS0nmTwOpDQMfdN4EeRfcYvUbdOk6FsiNGoYsT6lZ6l9m1ifEeyAuilRLll04l6ZDjwyP%2F%2FUdYqujCDcy0OMUhUvnOgxn6330bRFhW1DLoZ1wNu5nNX6loBrYt7wJMtbtDKlB1gNgVwroIyN6tXcx00X7X%2BL7yLn6RLXn3n4NYwy%2FksEiMryDl0S89Rqm5dBQRVEft%2FojWLj3jV0MTmiHe%2B5SHKfpuIyebRDT8hlmSUxipIbw%2F5ItdbvD51zDwlqX7fBzA6nsGV01fUlf6CZt6Wq%2F7vz1B%2BorajOT7nSlZ9cSA0kagp0dtF1IufZApIMpU8QVtgHswvOvPyQY6pgGlgNJJL4cjhxduP8vHCZ1MEGCfu9bZDRQ5yWwOwdV7LtK4CfZ0k8T1VtUO3RlXRbBtRUfh8cO1i5IO4wWz2N6w9nj%2BIO26Hr1ScPTx%2FmBBp2EBbUrseOMycQeMJuZhcOepYFIn3lCwosGn22wrLEwSO84oUDOlBEIzWEaE%2BRQOPPQJ3jH2qB7YL4KDqjYSsE0gsMu1qWtB%2BvnVoUApqv4dgK2uh9ji&X-Amz-Signature=a00e616cd4599e05c2584551bfae1a79a897a2538bee6938533f7635c44846ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MVMDDR7%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T100353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC8LqoXBnQtG%2Fx%2FAwebWPkdrevxWE6nrXkw8IPFFFodtAiBQE5%2FcdhaXUonfjYGLDPSwVwHv1NaxJ%2FYm6%2FDMG6bFcCr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIM1gQydsIa1zLpf8LfKtwDjoxW4zdZLjWlePKh4WRNNqlw%2FVEz6TGfBuFS9oq3ym4Qooxe55Pff1b9mR01PRRaipSx4OLFXtPHotQk9CCQ2PgD9%2FbapaawpPVt3opPTP9wJjgSjvKeeuGjLn64gb%2FU7HUVcLVqhh%2BnuWFHPcATLTwdTwRiiFEqd31qfdRnYHiTYN3Y2sl1S7vbRKBXPBVnytP%2FbuokBHnMxBuvcDim%2BvlhlEeOpiIfjsBB9Sod7k2BHQJhI7c2tqE34Mq1eOVtC70LWCjmkCB%2B%2Bmn0zozHn4wrFiEwzbtv9HvpnOnIASNTv%2FtBRlwxET%2Bf0CLxpBArpYNULhTlbCl0bZE5l99lC48FLvVaTg1Sx9riRmzXbq%2BaQs1b3UJHpriAG7cr8JyBEJA1p9a8m2wOK2DGSc%2BaeG1%2FA4OWBVcjTbVTV0biuTpJ1Vt7eT8YBeJX4rv9McXOmEz0vPYVDQpPgu208Gvg6XKK40EEKTCbpUY05Crp%2FZhNlUw%2BpVh7dGE9L2PchpU%2BIT8KGEfCFXbkAFyIWT%2BrZCuewvWk7vPUkqrxv0ue6stFVku1%2Bc1z8gFAZLYhZYRQ%2Bpfkc7AztM5A464tK5hGZecSl91j71Gw8qhwyvQEt2KwFHbuAfo%2BnSlzeNUwvOvPyQY6pgHfUxe8ga2P%2Ff3LV1kTjjPz2eF%2BxcuSwQL%2BloJJ8252g9akG%2BHnevrgZUjiBgpw1ZawVSroIvmQ5KkmCWGh9eFqTRdeKfeBhqi%2BsD1RDSxJpmuP%2FgW%2FDENz%2FsczlEDZbT56z9ozqgWsLO5neZkNt1qF9am8zlzBP1i8BVpjAHKtmFFMBpKlcliUd5deUzVVoNmuKDZqCmUldrtqSJ3G7m66weUtRGJh&X-Amz-Signature=066ef12cf7d2f7ee2b36426a77ce7f84ba0649803a863cfd87b86bb8551da270&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

