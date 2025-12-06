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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DPBHAOF%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T142019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAIy9MCSjUoYy7aIUyrkJa%2FzafLfZroSPlq228xyzNnxAiEA9IJgyhkwv7vSj0n7SdL9VkKfOitmlKVQRfM4UOvSmLsq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDAep649ANCAU4AhArCrcA%2Fk08GSvCf8dvNH34WBwJj9Hwb%2BXmof53ENp6sXdScVPVXc9PuV%2FnCmo5QRrx1lkdzjBGzOaf95hFgiDeRct5Z8Oz7VXE%2FRQAvoU12P5fs%2FvOSA27KdRoUEYdDqFsOEBDv19Ub3RNObBbHHcvXKI5vxM5PkkLNbc39ZstAFOFQ7%2FrmyVPOXGtdECfpnoo6FXsZPuW96twbUqDs4S10wfTSjxAiOA06ncWAJ6jjiJNRmA0G9tYC08hBH7Md32c8%2BdjfUYdTKM4bsMwepFeC1Jk%2FZE26p9xEi4Q3yEoMO8z7jwpOUk88zbARBC4pTydj9nSfozUF%2FU1oDNFTcDal2%2ByOMkUyyFifLJKMWmj%2FKBMtjnfBmYM28hFHiAyza2%2BFDZbTHBuDMCxE84YJCoSewqSAJmyZDTVavFNgH8gT8LvtzoLQTCAeKtZ2ExINIXBXWaVnbqpbpdg5gndAM198BZCO23xyVznc1SPJFMYXbqHyrjvIELVgzOdJMOYB5m1aWS5ZazIkhmx3kezwCv2bcF7RPILG7uqFN7tGUec5mgc6woVkKh5YMWLyDMVwufJ2UvH4tnMMy7SDX9H7vRVWCTQtsi9VtuUskXQqq2fxTImB9MJblXGRYEoa9C4RZHMI%2Bn0MkGOqUBbdUuvHmAEuQRzwhqD9mN4glniB0T3YmTkqsQg8e%2BXZodd6GHkof93%2BHCuKEzazqFATyy9Xyi4TxukVOOqNeHp6jHcoG8E0objVNPIVadI%2BoGZqnrFU4DgtL2c%2F2MIAmlDfmLAod2IAiNIqxnoEROK2aHtxXyqgZ4wBGDeZnh0Qf%2B7awkJ4vfW2oLNxiyAUChVUqUqIk5jrI%2B6vrjL36ogbooEVjn&X-Amz-Signature=c2485f12d0981f8569220fdfe927a5186d9a1a7c8c84522e48c72559f1d6e59c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635QNMFQU%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T142019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOhyGuq8RtmsCVzmlGE5p2YzLNOYJE%2BrlwxDrD%2F7hyGwIhANAxse1PP1DtW0kfdagRPsgVi046GM7ZZ4DIsEEVs4atKv8DCHUQABoMNjM3NDIzMTgzODA1IgwsfmaCcwU1f%2Fv5hqAq3ANzvibEsdAeJce%2F5GjKs9nIzj%2F1Br2Ku4OxmKg3rIAXwA07sm42p8d90YCdrF7fZXfsJMcLMGKpQlT%2BkujpsfTnJMTUcgVjXnbP%2BnM0MQ28QKLPT0qzyfe%2B%2FwpL9QGpIoQAJSBcQi0fUIkI1NPS3mpgrI92NefbrunKfSdJwDO9fkSjj6NV9NckWyDEWlfPBx6U0q9PdM5Imxmwh8eCqJ0zJAqTEuU2ZZBTrAT%2BnKmqwb6RjVCB2I9xvF7L%2FocYhlD%2FTFpcYWkuxeTbosx2pusNzakCxqqPOsAW9T2Kk6sjOlNi3dnZpJ%2BteLrJVZ10QxewYB3pzteS%2FRP7ggRa%2ByCebB0f8FAADsHKu44cO50Np%2FIouk%2B%2BNiZvKtZr9r2Q5V3E7SG3RQu1IxJ2V35CszElNlwT3yi9B4DfGv%2Bhw7%2Fx6810OTdHOV9F81Ust079x5ManLn655beAP2dr1wsP7GVUNIu1TeRUdtX%2BD5H%2B29fLcsFFDeW0982NgnP%2FdPcuVpbqHNJp%2Bmw9s%2BnMyt%2BDBI3jrPjcvoViJzLq4ORY0Mm%2FdZyhxetRnEkBmh6tUGzaKQfPMwRJLr6N%2BNhQaHWrsY6LJDn7RhovpWFqkxC9vgXZBj6yOoho6DiIpWPeTDtptDJBjqkAXTFLwSgxsGlJ26BdeRmqvDnTEnSMgRd8ljoK1fHiH9NSSZ8LiN9k2gaEVNAyr40DjIJKtjsjqiZOQuNUxnGVN3rqSZ%2FFNYyIM3IIvbUWIDc0cN5uoj1l8x%2B7p9yuJQQzgmOB%2Fl2JKNZHQX4oYE8oZXvof2h88v0sKUoraJDwouob90b6ogx%2FmaGWrjI7OGKpoX0D18Bp6m4BReLudSbKXlwy4YF&X-Amz-Signature=2e8cb531590ebf3f3ebf788c988b86a3b63b1be9fdbb53ac166707871db0c14b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

