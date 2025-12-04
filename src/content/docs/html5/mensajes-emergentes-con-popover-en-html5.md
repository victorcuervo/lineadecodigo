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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ACYIS7Z%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T120546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIGVP1hKhxfz930q8eJNUoJzXDgbAO7eW%2F3h%2F2EnffZe6AiBF1rtelDYAubjHVn%2BJy9%2FIAYS7YxiO4lAR%2BEYYenKMlyr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMZ7WSVzhfaUJcLlALKtwDeU1bBArFwqnwa9RcMKEncyV03txJsyzo2llbQrLncaXePFJjWvr0w2T9ojQMfrPgnL%2Bp72N%2F%2BmLRtiLGfZ1ur0epEnB91rsJFKuVS8ycVbwa6IHE4%2Bz2XW7DdZMsnvCuGXgoM4gWeOOMfn%2BOOSXbbfzWKvXz2akmGCOuIpBslHEhy3VRpcLG2a10Wq77nDge0zQ%2BV8nTC7lw3Ko2j5680oJ24XR90OgQT8mUjY6yPgxzDq8cgKL2zjZduzB%2Br5dT9E0Xn0eyJ7h%2Bmdc5RFeckDjqbTz5N2JXh%2FbPlPwadgLXRcKJD4p58Ktb68DA%2BAk%2Bc86hqZIWgh%2FPQ1RUd0DZ27j0DwddxwAQ7R9Z6ROGwfI9I%2BRTEQ6QBbgdX65pb5f23l1QZNQWEyIsbEIU2PKkRvezp5XI9zPixmIqewD8dDWw4sNIVDMdsV4aTQoQQePF%2FwfEUoMnZDrUfyIMSyG1RA6mX2ypVhrYincDHIJ7Xb8B5%2Fnht1i2gL25vYqHlf1ADByMTo2jqt5ndtwQkaF2f9shI%2FOXv9jttFpis08NrBMeZoYyokSqIHqvutnQ3WhBwyJxLonX0q18nltAutzT6Yb47lvzYkNtbxx984%2FAJ70iYiYIyZ2c%2Bme7e2Mw%2F%2BbFyQY6pgH5YKM67w5psdVtE2NtwdvOQPl5TBl5Hvn7Y09AXfGEkmIGsC9i%2FcarBCRqT21CZtxxo%2Bj3Xpe8HpEuE9JS%2FWFkgE%2Fseih25NuQDi5yYMtVGh8KJXJqgL%2BoaLKH17y8zOedCVGtYDzXSwE1hiIxvjQKf6bd4N5neKpqq9UmyJuiYAn67mypyvYy1N765VuFLCBkkTRydy1mJtQGDJjBVZVrg9z73MN2&X-Amz-Signature=3fd86d015ac9648a9abf2d2724cd1559994a0f2d33c8506da8c648ec5fa83f46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666U3KXC33%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T120546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIHwVcOQvplkRF27%2Bao415N6rUEkJ3CNStqIFQ1V69XpYAiBZAkFLKtfXzbUWuzDrZROFdx37FpQMHumLhxrMmOev1Sr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMDqt9qnByh2Jr13k1KtwDvqBAmHh61TUMD9DPBWSl7WXSMw54tCcDuRMBu4fRCmXQ%2BHgst3nMzBG9r5P2X29%2FJwU8MUVhRtwVq6rkTw9My873oF1ay73aNLYdZia76IOOeujErdiu%2B4X2SrGDeKMa3uPjKO0kUzY8BC2q8%2BQri8q8mISY%2BuzOCFd5fZNndK2Xl7YmB7JII0%2BWr1lNG7yC8F98y4y3A3UmYCDfy55L5PmLVHpvzeLHdy%2Ftvr7v8ja3IT%2FG4JGIm7sHXyVd7T5Q%2FNvVBrUFFpkFFK%2B%2FUVVO6T1PHqbxsQWezUdWvcaSJ04Hap6grKz267NiV7CefxyfefSbr%2Bn5br68y%2BiRIhI%2Ff%2B4hqUcQN6kR9jkydAMiIDw1z%2Fo3CiXxd66xSEsmqYS%2FyFB05ypr%2BorQODDDVOMW5N%2BAoxB%2BVwlDsqfCMYliGn%2BIAbYcQMQZgHUgTuBPsIy%2Fe0BTiWRrHoFWeqb%2BqUMXhEngl2TpAI0bbirbY111KT2gwbP9xtiZ4ozVTGrvVfITUMtU2v3MMFGMFvZvHGQq3wIvqQb9%2F4bO1YXPBL1FVCSbYJK06AZ%2BmcO%2B8fVhUbXSrVXOwLqdDaEJ%2BQoHkO7GChTv1vj26KESoLqMxexiC%2FxMmkyrwGeTs%2FuZaKUwjOfFyQY6pgGx57cgwDiaCzjvgDoCLRyEyNMXrcMnPYIXS05xU6A%2FrYSMFLwWGbpJXxZPDv58QlVRXuFV4cG%2FS3LwjAt1rD9M9OvA1ZPZh06gJrh%2B6kWwucL7aBpwj8osIRjQW8Xad2nvvw8GZtj1enQlnFu6r0EgHp1qbAWentNzFXXlw7T2twNjeuoordqs7OxuIc2SqW7bjdQeiyidXMDwS6l0Hne52FdA27AB&X-Amz-Signature=b7b3484bd66724dd36184aa6732f9e8deb8594928f1c234de5c5d4236028e113&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

