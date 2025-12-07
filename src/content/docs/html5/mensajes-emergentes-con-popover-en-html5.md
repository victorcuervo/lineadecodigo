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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637CJ4EWD%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T233921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEvTzzb8TrtENy98yVS26rZDRQ8zsepfIKjhCXclTu04AiA5PDzpgPNyan1Ai9cXyK6xgxpVo9TEf89B0fZPoXbjeSqIBAiY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMa6V8LNU3CuLymVqGKtwDIALDFjnFQPK%2BIokMn5iZ6bVvZ4CbgQVg5XC8xoQnm1PXA0usdTqo8OBCqk1trRtQTctKYUSY9zF9S7gBgftYRjjJuK5U6a2mCKD1IZuEsTx8c4T%2FlnU8qitD4hdt7vLcnydF0Y70rgLV%2BMm%2BWJlg23rO%2Bwn5WMUJvCvFX7%2BURcTWSjD8Kn4B3lsbKghMlJt98jf0AyhAN3Sfr%2Fpw8Nn412wNQt8%2FfoyqE5Xh4h%2Bvr33JV8mynxSA4hqUiwl6nhzYBYJlepzd4ebnotIuV5e4j0vequ3q%2F8QobQ2RkvaEr7Y3K9OAKESIgnEgUAty%2F%2FjE8mI3xxnJGKM3nq0andCInhC2bm%2B1FR1%2B7VRcI93pHHfnuOJRMbdytXzz6vsRT78T9t5kny%2BjzqmnJWAS9OAx50V%2FIVhpS7nOEToiqEJEP1e0NJkhN9RsWbOCfXCRmoJg%2BDNMPBhbOydUuUQycFhfFocgM%2FMylFgCnGfCrkdY%2B2MKz0k4RtDLgphLtYDKWjp22f3gpqbKxImoxnLwhxu0QllANb0qF8C0Kgx1BSeUEPPQcHEtbCwIPGqzC%2BVOmYsiaL4D%2Fx%2F034nTwLVdTsr9Rtqj6%2FANhk2nV4ZSU2NVypdoXoo5YBftsz2QKb8wgYXYyQY6pgHk4x9Aoopkln1DnRAa1Ayr80Z2WuCJza35KmYvJvVITBUTDJU%2BCsFAC0vLMB0fdloRpOwf8WQ8LoxqY2Wh%2FmJYDoiqa9Myu%2FH4zbzTGS5%2FAY3glB8QG2oyFoX%2F6EZ29YklAPbWKoSLyCXauTgDQn0uZctsfb2HYkLgWgVXPTCKH23%2FcvJA6xRsiB%2Fcxr1fTWBzxkVTGRMXZMmzptkgbewEWbHfYapz&X-Amz-Signature=2174997956769b2659f2210ce358ba839004cbaed0d97765455cc9073f61d029&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6MXQORM%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T233919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjeOKbIKgZ53bpyn0b91L7kJozsEA4r7ZqrTeLWpdvVwIgW75nBw54V1n31pWnF6ZqjUcg6DuHgYiuRLEzYQwXiv0qiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOmoXXySccs%2BXgoGqyrcA%2BckmHf%2BIL%2F98dR5wdD5sJHepRiHqAmTRb18i%2FxAjXra6cGlWI0w0HIqBKRsq%2Bnibkm3sIGU2T%2BNBdcmEsUUWRS6oQ6r%2BOzYMijDXru4UL5nZ0YouF3C6CriYbUo1IgGOykkGcS8YkSGvUlkt6Gm%2FYy3HKsK6WRgttq0tfBR9I6yjQhF8haTXqZCPv%2Fo2nc8oeqkAsWIR%2BMfWG2MRbUupqFmw%2FIPkZpA9rMwZvzCRYSLuz71BnMahCBk7Ef27B2ostoJ5LlZfS4ocpnGMFQv37f6BGiLWURRDsTFpz5CjJHqvfufmLVL6V6%2F8OF5vhmfVHpL7XB4kDn6aFkI4CnCI2SvE%2BmxzY2asI402HPPGxfU6j68P4HpYQJR5eE%2FCP%2BmVMiPNUhQnf2URDIOlo6uFxorjj6Ig0V4q%2FvMByalquMRrYDvmvbuH1vMDT1gBk1o%2F0BaMX8eSwODnLZ0o%2FQLsxnL18cZYvxPmv8KLl5zH0VSQVQzXGhJsmBsJ20b%2BlAHERt3faa6jX7Usm1fv1UEPUiuDsIMyyt83Avm38zOFCqupaRmwVKrcVTUyJr8ZhxMDvIm632pCBnZBrK7jp7qISXLWG29QztYuYUbFn8BVh1%2FgXLSb0Fkpf0XGS99MJ6F2MkGOqUBC4dU3%2Bhmmh%2BbXxUrn0%2Fnc5xt1OvglZUOaoEr5boUTXqMg61XVy07feElDutLnijP19TUKfH9jKzw%2FOYJjlcQUAM5ZAd4i6UACJBwCuDegQHGnw%2F3CMXNU9rJmIiVylrnV3TVxgXd38R%2F8md16U6jyCJvdlPN2aOZOGXP%2FqVHvQK1Tl56Aza%2FCeZQI4deSSF8mONP63gd61eEwErcax96KcZCb%2F9V&X-Amz-Signature=ed0041fbd253742b52f7324745ac15a59d8804c7d2c1a9a35ab7c57dd770d329&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

