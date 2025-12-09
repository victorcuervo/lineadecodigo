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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667X6H4IAF%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T024847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHrjh3egK9binv1g0KPbPi6BriiMsSuA%2FPF4q76xqDNRAiEAgKkg0yCrQQzMkSSPTirBi58s0RoJZ%2FQ%2FDiaGUGJ%2FEvgqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLryuvV0dxM8UocbJircA2Ed1XD2pRJd1z%2B1ZQNNa%2Bjp4O6hDxD6kSBF9CoK8cT6VgXpiUM8jfUB6BmDRkT70esGtm9GlD0ki25JSpvYTi9PeHPn6dkpldir%2BrGgqLjhLOKNRpdmAfUAyVcOXVU2MJO2S4IFZm4L1Nb2d6%2BZL%2BzVhBnCyxknsyzob2Zt4Hahl%2FX6hJGU2V70qaKyMILxn%2FaiMB2g2Ie6qUwlzW704cqT%2BUHF67LMPVKXJqYtBU2JrhqERXe%2FZRD6Zk9c1oIjPzO3CVBP2s0qEMypPIDlWzvbLN7yk6M4ocXOpfKE1QhQHqRqQrYZDZdoQw0MsmRUzaLMo2wJt3ZeA%2FrwXafkYcSET28wm5HPEz1OT2HHRttAfyAw%2BTRrr9JIv0CGt0FPa6EO61OKOm0BbrXVcxjzYfHbpYWaLyXK5DLFHf0OmUNgelZWTJ%2FMjKBCIedA%2BF%2Btfuqc8XZjiBISzJNBuz55m3jWCp5qHUUpoInYXr%2FXlyUPc0m2R1Q0t11b71Zf%2FDRkeFfRWM7ISFUxcKANExBxSYAmmXhvB2YrNkLHKc2MTjyl61UK0aN6mrZ6R1BxjB2tzp9HN%2B8szbsMXZFnY%2BhjAztTwGTvpVv4E3qHlLQNWNKMYzCVEegVN%2BaqXT%2FWMNON3skGOqUB1OLrkaXaM9ZYwHjcokgkPCOURUKkuTktkSebyLfw3DgarNTnBM0vJIXXPXJWb0MC5UgtHKzciJUQIZlUGZcl98s7UrNGfdWBSF9IoTv5pVWU2tcpamgNX2YXaGnVpwgqgdK8WsqIjwQ8nR7uw%2BfBMngZlJd1y1MgSWbPqfTu3fqAehin%2BtPF4VDwxJeQkWfjRxoMebVB23MadJhaQR5Nzt%2BIVqUq&X-Amz-Signature=baba68ac93e952ddbc1f8d146c572efc9f8e6f63f16383576c0c37c6a5572e3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672EK3ANL%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T024847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCI27PZ7mZkgPA2NyXSjcbsuJ%2FUI4Zeg2%2F8qbBER7wj3AIhAJnz6Wg2bNwXlyA6oE0nNMUg6r1bVAByKMOgwDgOa%2FWdKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzRazddAFTzNDFwa1kq3AMVvNgYMhRlRAUCMjdRVjhM0Qd4D5Bz9rsZ1xzsQQNn%2FgEVZ4Q0SLsVrnczNk2cbOoIJ6xC33eZDvi66kBVETyiPmTi1hOOtqqyup%2Fa7O2%2Bo5sTfwpJPSspHlI2WiJ6tb8aedkWEdBm%2BfWBYQPjrYsiwZoD1Ahx0j4xJQNJO96dxpxUCkft2taIG%2BjwnpBZXqJjyRu0SRbhYqA62LSQrMoPqRZj8LqXfOGfsz%2FX3qalIkrkgX9%2By5XodV%2BgqdfVWhobLB6Rx1MsP5SDBO2%2Fxlai6roZAI%2Bwb4mXv2rep5igEbDqtzG%2FvZ9tr0Ao62Jo2DgwrCyTn1uynJ31Sp3yWpcmV4cyxy1K%2F%2BX5mt%2BhsWLC01mVRGrwsEV%2B0cMIc7Ta%2BZsjo2NSUJcfceqU7LpEJenLFbOAIwuAAePItxRR3%2BtixRjCkkUjGRsltzM3766C82ma2H2rFUiFk0eZDQzagfExCfOaMgS7%2FhKrBYjURhpw%2FciEm7cIg3Q7nwT0v84NxEJfxPmkp1Ginoysvh%2BvWbRoUf7JbkPM5k2eWRSMKuMfKTsJ34y6MVrL2Qsg5aaWRZwmcyRfrwikTzi2vuuCcdX5mytPdaJQdg1AOw8FUXZbgegbRlMa3%2FmUd06ocDD6jd7JBjqkAZ0Lzmr%2F61LuHBkruldXE8wNE5y%2BB1TLo5l3J%2BOwQR51hX8XCiiYRAq5GAmqmbN3zSoUiljIy%2Fl4TvbLhAQ9RUlkI6P%2F%2Ff2qI8rm%2B6aA7z%2BteZnn5aTn9KHmIGEtnpPfoTHsmBLWzL%2BDvqGhBVgkB5MWSa7yjDtukH5O0ms0ULclAKsuANSYn46w7sQoOKvzlbxAWYOf1FxsTj5njgqMsFIoJUDL&X-Amz-Signature=92684dc83b265181fe16f919fd160ce0cef2968b32c41ca2d8af2bbb3c2b7b9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

