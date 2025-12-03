---
layout: post
title: Mensajes emergentes con popover en HTML5
excerpt: "Uso del atributo popover para poder generar mensajes emergentes con popover en HTML5 en los que se pueda incluir cualquier contenido."
categories: HTML5
tags: [html5 popover]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7OYYHTN%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T105607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQD8g4n3ZA%2FF6c0oRkRXgchgbcAOPojYE7RKJQDXT6CopAIgBFDaLXdDhhVRfPUNzISJlf0NjXlmhpCo4r25u6Ed%2BUwq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDPXmZPd89KrwOJAa7ircA0d%2BM%2FKjOsx6wxaMGWrFuqTzd21m8WsD6vSQ78zCQjpSBm%2FBiaZ3NrN44%2FBRHNXFf5%2B7yp%2BB13WdczV6CTUmyT%2FKmHV%2FfEGMwkaJWwstfJdvpS9iHGJIVHmAxrw9Ey3KCMFGn6enEzY8J5rHBOG7WLvZC5kLNeifkuqbccufy6NFoo4heQwoSEnwuwyt%2FruKWSqHGJo0%2BC2j6VwGKSR%2FUy1RvU46eHcf%2Bfezu65H7kb3WkY5T2fsM7onLBN82R%2B%2BJfeSjfrDwTTQcbsprW7HOevffMBBmjAz0iTbcDQQd%2BT3fOwYuv4X53bD1WcK4hvReZe66OUiMhoTxNsOCFQV1dKnCl%2FL1wk50Lb5JenqC9lWM6MRH31fUVE3N8VDAYGYux%2B2dcUuv8oy%2B8qFlQHJU3W9FD3dwh3h9YtUcQ41vz80bRZQqSp2k0xfVol488A3kBIBVK4S41xCVrLy9rcYw3U48rWq8pdAg%2BPosm2KJqdmgmJMGqav04vnhQbFUCUsH3ltZzQa1Z6oiaw60%2Bz0UAGwTHrcYm9Hl4Dil6xyYUbZu%2BaTEbIFusFAKrIUZGSqi%2FtyzVB%2FI6wO2Y8JzHdokpsvcDmHQtORq8oK8dkxFieQSBmZB3k4InlRZJyZMJKTwMkGOqUB1EVXWPjWz0hkZ%2FIt6Z9D2ejtpEzsDyZgPzY0Cqopxiag%2BcKb6nuhPCULEl7CpfnyfVLVnjG9WlE5vaFa%2B%2FgbDYzJyYdU%2FTaB9vVMyVtsaz1%2BVDthi94%2B%2BhMTb3mmPv2%2BpGwQEcO3PbSFfvGree87%2F3Ul7vVIg1%2Fgsa6PmKxBrN9T6aA3GOMSFtqGa9%2Bx%2BbrVXTV0%2FXwK72mDtDfkvEFx5uWfJOi%2F&X-Amz-Signature=2ae0f9e599d12167cadcbd7c99ae015ef9256364690126e855fd143097c3c387&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTJ7KTKS%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T105605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIHbRt5dm4NTWqLUvfV526BvvbVhgvy6lpOQ056%2FpqfTtAiEA5e92wLhmiv6ZVbB2%2BN88S9WhKFbQWD9BkrhGgaIrcIYq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDC21oQepRTNUZl91vyrcA%2FbHOyPYge6rBHQiJ6vMFud9Rf3Mm4YBcPkPuUov3phLMGt%2FYwQE%2FT5Ee1SMuAqy7dDV1q43I%2B%2FrEihYW%2FFh%2FrIVwNqQaTa64IpScBj5Yc%2F21QFDqbuoq3P5gH5nqLSKNYeC%2Bdo%2Fc93DLZfO94%2FLmIkeCfMz6WREoQHp3r8q0OWCQIuhGbswOtJIkbrpN820GpMG5VpDDrwDJc%2Bq0k0eGivgsfpXNLc2ymRN01%2BQUPNZkf056izGLJwUNRnHMQbFM4jQYLnsd8sc23GSMqT6BZyXuSjJDrD5atQcNwRfZge%2BF%2BHDDtUiZnt47GqjN0TwAV3Pogk9KubjBMTJOnO%2FG%2F0XzDGA0rXX21D%2Bw%2BoeXICfsS9llMCet7Ba5%2F43cdrTEDH%2B7ndmcldDo5TXckmdwfeTr61gVZtW98nPHe2vpB3LKlV81wpOVlLN5X5TghFIwAavNsIPrp9JFO95jaudO9b6O2P6QXmyHUDM7gu1uPgy3P671wrdkHUiWmIU04evqB%2B58BMS78DFomqxwUE4ZMPmySrsMoiLsQni%2BW%2FgMjK1v2L99NcOmNWOl4k%2BADPetvprEwULg2TlbmkUNp2ySrBfYpVpjB5piiKY%2FG%2FhPZ5ai%2BCzOpDBV1%2FjJdWNMLuSwMkGOqUBnmjRM0x31DbcDkbwpcHAI7TV21BN8n%2Bbj4XACU1aROuU%2FCqj%2B7BdWf%2ByLi%2Fg6LAVDYmVcsPecFw10V%2B2yiLmoq8jjSFFd7M1wRxPiTJckeG63irHlv7zBTT5sW8OD6jBxnQOEG4qvtG4nr4ui9xiiCOo7PsQgrn8R41Cjgxt0K%2FDj%2BaWRvQwwJ45BtunnVPN7OaglGbMm0WDQ7gEawXBWreIbNm%2B&X-Amz-Signature=cc564fada5672aad64553dccd77149b245a972d1ed67fa86406d43c6fa6331f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

