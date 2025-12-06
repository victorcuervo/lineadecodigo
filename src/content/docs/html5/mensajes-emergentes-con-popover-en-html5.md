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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKTNIAR5%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T025432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHk3VxdKm06AuQK1B1%2B1%2FneroYcHpj3ntWcGm1k28IsZAiAp5vByBSuYu9v%2BrGQ90Q5UWk5wCp2cb%2Bywv1QUqDay4ir%2FAwhrEAAaDDYzNzQyMzE4MzgwNSIMFMvUjj8Ns4kiGnVmKtwD13Z%2FwiSC%2FGLxz%2FKsQfIIJtxdTLq88TznStV17zf1oDy1yGqso3d1QrU2CV677eLGTSVGVbfyhW7IcHXl8YkWEhgO%2BWy9UnL2rWYFHuyJ8Hdot7xVVRytdAfIBk9rYjsQ3J8A1DnXqxYWk9vi19LqaXAS1ddquXH%2FYV3mC4rQuC1xbFOCp%2BemSjfNJBbUkpZmkcw4bqhyiabNnyIhopWOvbF8RsFq%2FSxS5BHKy91%2F6KYbh%2BM%2BkfGTxlj8I46ktpWLOhPS9PhFM8ZymXzvabdxQpLA5yrd2UUR8MCyw7%2B2dO9SIU68tr0SVVz1CQ%2FlMcV5uPrF64VFbnsgAnQa1gBWWagy5PaY455azQahWXQV6AMpkMWL6MffZxIUXws8PvGRtOUj4xx4kxybs24CFyCI9%2Bk70BTK%2BCtcpkaBlUukJ07lUyM4cM%2FT9ZEUXw4%2BCeMKKfTIvTj9VsTBJiZoYnaBVN7zx%2BSJzHvs3Mh%2BQEYVHmRCNcE%2Bxu47RSEoXobTXyh8iZd1ho9EA9gtCIZHIm5%2BQjrvFqR2gfxpcWuix%2FbWFnmAtgJFxKNLXXl2H5VtaZetXPVCPhJ9nKNTTzy%2BeNdGhrHQue8IfTMZtpT7BaZZqaoU4%2FdUMFdfI%2BXnojUwt6fOyQY6pgGdcvspY%2BsOo28LQ3cGezsuJmc2WnGvyxlE6oZmMtsOdFSi8rdbgCa6hmqQeEvbLKEqAZn%2BwqBPXw5WO846G0d%2BwAUGGTZsfCdBUE%2BUht7lSc1HALQFkle2eOSVrlGeS1cdJQAW23lp9Z9EevhppmxCF6bfNitNgt%2BZ30JqFt5xDlzGZOW7%2FyBCOP5WDd5sRQN1R1ppn%2FGCZ%2FVvxSK49Mm89fyF1xkN&X-Amz-Signature=cb20dd8dddcba2443c343e9dd09f37537697dd69cc8b51c37cc27a68fd33cfff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGK4DHSO%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T025431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIApD26cKFstS9xLUraEeU5hEBfks1VRLgAU6IUxeo3%2BfAiABkvDY6yMGzcaOpXbI%2FjrEy3y%2FV2mZP1tYJqb7dhs0jCr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMf48DRQbZPyFhbMnpKtwDPOY5nrLvO7oLAw0YFb41voyZ%2B%2BZqjosLXoSB25yjlwDy3C5Q9Hv4NYjOoUGSVA01nQAu1mcEnQ7yLVdHdZsd3mv6VTO3n9oE0w5yO%2FD1pcz%2FDzQzeDIRgNq1493siZIkzCYX3rC6%2BX5Np%2BhFEHO8Mm%2FmMYKel6L451I6agt5nTSkm1muinmPUzqCUjT0EXAE4AimLcqO3eJ0fpFmKkQRluo6LCUGMAd7Uciqh1hepcZJapl3BWji0CtTFZFX4D0iOdwtEbk%2BOUK6rCBTg3llx2%2FBfct%2FjqGLauF5WqLBNIXQA6rdTQTzIx7t2kGbRp4PeiEN4DBR%2FaCkf7mgdS578cpT%2FtQBOq%2BGke8seQNEJLPNL7XxJiGIRyFbgSbPTUUY44jyJNBMw58IlKXgV5jA24VS7CpowWEsiUeMBCFbb08xHA2xcd45bH%2FlAZ73YOCXl7bNa5h7xB9Mi0ioVFKt6MX%2F0iuEAf0GZsqVMk7jo8IxT7eWuo5Q3OLXRKW1ViOCHy3nY8ODwhShZEONRA3UsXGylu4elJjWWNY5kiGuQBWlsmCcwCXMI9h6UaSO8YnT%2FZ4MjXxI7GyVNt3VHKkNvi7bCI%2Bw%2FvDk7g0cvoCI%2BFffBSA7UfgGZwne0lkwjafOyQY6pgHydl%2FN4lMQH%2FraNM8h2CugRP1xcdECStGA7PVGWwy5EdoJmNilMoBLZN8nHN%2FNBPVewbYv7gn%2BjyKc718XkmOEqqj3jHny4Hh1l7aTrYnZC7qX%2Ft4NCEcg3pL1QK2yn2s%2Fa82He1h2RO6eNCXbSNm6BOAeaN1rhjTFmBGaISbpBumQmGuqPimxNceGdk4juOv7XpwOo8QuJ8XcKai2OMdBdedp4Yy%2B&X-Amz-Signature=00933279d84e88d2255be5234ad5150d5b82d6e1ed7bb7e3c6a40b1069c91d77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

