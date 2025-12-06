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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOSIEEFZ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T081214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDYG4ov65iP%2Bq9KJOSS5Sc8eJXZ2ZbUJJds7p7kbSciFQIgaoDpJkL4dce5ha24JpQz4djx%2BGeXi0FeLcSFhOeht1cq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDD2XiAEfd8RvjTL0zSrcAxsaGDIsLThS2hx4rOsHFQLHLio6TjVLI0nKJ52ttdQGwcCsr82%2BkySaIFesioDEo9VBFnbE8fds1gjwB7UwGU5YPMBkBAcHfwOurmDCv0zm1B9y38w%2BWptGyUGdS4lJ43OPxqwDc8ul3RGxiEvLsi6L8hTrFPPooRpQvOLOuPF6dXUIDnefH05%2FtfQbwAzaW%2BTQSmPnJdL7q3MCs00XIK%2F0lSGzLMD9xIelKNIg60%2BNheDy%2FA2xiuT4aDxz69sqKTjP2RGA0K0q4oDgq8Xa4s8AHy7GFzVM1e5HO1dCM9NttHPdyD9I5RkT%2Fyi5HzmahSxzQF%2B7jSaZA1MmQ5ZCSf04aedBT0G6%2BwPkGjlMXBnMWRaLAc7k0iuKIsG7gFkWigtN3%2BsJTPsh85H3taJYl2cfp8Pa0uyWCyNtU7hmxu3hTdIWa79xr5ctl%2Bh8s%2FX%2BBGghRCxxwMrGx0ldno9berKn88NlVDQRLAG7c2YipHjRTKxrw00s7h%2FKgmSi8C%2FqN21JmHGILitLiiMqyMzUi54nZxwwYvlHR89780RLJ9SNu3pt5s4lr2LU%2BNELvH61G4iZNA0k9CsJTHhUdySJ%2FZKoLFYVORqs89KNUmR7nJ5B1FDBc7Hcc4oybrj8MNy8z8kGOqUBd3NN3FDzdr13cXn0yd6kEowxP5JJDmwcN4PXrVok%2FwpC8dI%2Fv47%2FU%2BugKU88%2FUvkYDg2lCZ8jhSnoWyeeKDw0yWuPyGnKlOCvD1H3StXdSwsFNqCz5n3MadLtjz9rdaqvaVRW51ZwS3iQqNIOHiE3%2BYTov2OZRQqVzCjuZOPVvRche2W%2FHOihU3t57cbuqQpboZ8XnJDzZeRCtnI%2F2qLZs0r3%2Bqi&X-Amz-Signature=baf945c7a87bf337d3f92dd4e78d3f97e8837d54ae82c6f7295e291bcf6ab34e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AOXXTX7%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T081214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBAW3%2FYDhHFxxmgWn84CLwXRHn1SNjr%2F490UB3En08UhAiA9RwG0T97upCwCOWA3xUTwHj6qP7ylUP5SlPDXhWzJmSr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMVbjMyLoxaFME2cpyKtwDlgTgbg9cxpnxvO%2F0xpXjDsUx3MMgQVyf%2BcPyBu7hEiagB1%2BadOFgxhpbRk0vXAKRzPEqkE0%2BqreGgtTzMCo%2B0If1MRjnnrrCfBuLQte8mjpqqpnr37JWNAb%2BvOJBNQC4aVg%2FFrqmO7zxiwOto59SVSEveCf7StIk9VuVqCZCtJvV0r1WNO5kDl8T07X%2B%2Bi3bJf%2Bh6Ry66YOpDyaCXnBHE1iCNNKjeSlSJ5p9XQefkDa%2B3l3YBeeBCxgKp0GOVYLS2ROh3gj19ll63txswA%2FoWpkIJAfpiMA4VK3WDHuwu6TPUBXIwOxqotmiehexHN1qA4tiHafGYaTfI8iXV%2FNHEGTBloaIlbEj7uTieZRcs2Z7TQSNA%2BbOdQhB74QRtu0FkKRQD4xZVQbqvmHpDq4DmMSks3VN5ylMP6huS%2FT5V2zU6eFZOjAE6NZLEODM2fM1%2BBX1eJsSa%2Fq5tXKrYdKIaJNspX5xeznfdrz901jHGmiKcH%2Ff3FAQFPOYd3jwM9DwXdCvfXsGyK2GsvMYmomORPRLMTJ1lLX7%2BBGTjuDlCpv4MHtL8Y2%2Bqdde64T4q9cEvPw2hgroMQjPGUVRNocJVxMPBZf%2BW45RFRCYY%2FuJriWfMmYyRPg8R7TibwAw5rzPyQY6pgEv3NuQiDAY9yu2e6gkih1pvVn1z6mWAz0241MpKX4xVSvKpK4Iv%2BXOJ6tvSMqzAhaHuuHBiHvjEzlMsQSRCDkanCVglcs%2B0DjgxUL7DRdR6tiHCa4YaeqwZslzgIDQQE%2FaxRCRXYlexB%2FPqEy4niCsmZKuHxbaiZ3nlXZINpYRI%2FBPee3pFuyoZ1fJcHJVq5vA0eT6GbYOT5b%2Fs9qrT2XVIUIwPIzE&X-Amz-Signature=6aaed954d486a08b1099079514560db72ccbcb16b5c86ce86eafb83bdd1c2700&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

