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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662L6DBFJ5%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T074922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIF0Y3zk1hjSRqOD3UOSGeHhUYPXVQZZ4N%2Fs3sQtOo2b4AiEA0wnpcv7TNc52hZO7%2FkRTBxoi3Vc8NQwibJB7OlZ8I2gq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDI5Hn7giQLuFENvZVyrcA1CVksf9%2FzR4Vo57kNhEAo0hLHyuIIPnQ2C0X2L5IpI8Mx7dj8jkU8zqJ1PmfWJyET7yPETowdri22VMiu3TqJrOUfsqQG4Iej5%2F73EQ%2BNYDLiODA1I9mVslDYHfNUim4GTRSoMZXIRZEt%2B5Bq35es2iZvvcLE%2FP%2B04Vn1CKWzUHQJgXN%2Bxwek6XbjrCtxBXVCncL5J3Er9lIoaopBfOxbqtUXD1XV%2Bf8PPaFBXDsM0y95ih17VxQ4zhTm%2B3kKijlIMEIFGuru7hZnmPxS7wN5ba9Iei%2B3O5bI%2FbspzTwmEGgOxXHfGNqnZd2HfqWAAL9yOtGxD%2F5MzvW3ZDeyYAp0OdLh5a14AKFklWly7qn%2FJ7wrCkbAmFe5okkdku275yhZNP0SLO%2BMIQ%2F%2BVLh%2BOaBuDco6jiv8BmzrplJsar7HAZtGvAHYH9Pus70pHNm5aUaBnIyAoHxBGpjV6dyzil%2Fgq4ZE3SBIUQyxsbbTgB2%2Bf%2FO5wFPsTSDGltoySPhC6IPzuu2GsVjtnQwMl8XKyTFkSbDbsGoQXTv1x5JNtiZwtK7BBI7ktR6SN4KNAOXa7RZdHPGLPE0LjjA66se1ku3Uh4Al811nWNq%2BKpAchSk45yVlqfUcNDy8OJs8MpMP7oxMkGOqUB2UZmZl1I7sqvIJIg7G3%2BRZvxlfNME8dguAzFRLEIvxPIUYXi6WuCfh3UdPtpIhuIR41XpYQlEchFiJguCsC%2BKu1QqUykXqt3g3Dv1AfUyCXIW%2FUKkh9SWkyBpKzhctg6UK%2B4WUKimMcCb8Ae4AJUSb%2FXPswC9bZqZ5fPalJuBExrZ7Pv7KhEq6vbLNIBLWBS04rMMaVt2HdrDqAK6UNznpi4yv3N&X-Amz-Signature=655a699dd3955eb3fe08b68211f7991ce6b08934b5cd439dcf61b2e418305734&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676TBVV3V%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T074921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCIANAnJexbp64sKkJCJ5Z7uC8oAEwJOqUD4djb60PxahoAiAOj35g8zmYPz213oHUsUP2X9CkLbajgNp3WYCoE6ZQzir%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMsbF1JP3ry%2BLYe2hYKtwDfXuhMLGMdnwbA49Hq1Uhw%2FWutyXfXJ7rPij8uLkl4stYA4Nz7xSiw7vsdIemCgX1nCVR5pzMkSk0R1voso4NnMeYHfC%2FPDAzRNDskYwFMHsyxhnuoRFAHfTEYqfOSeZMlJDccaxsc%2F5DIrFQ2nLiSgYC%2FnAf8moJTDsiJEP52vKlK%2FOdT7J8sW9AkDEQmzBgdbR1HXEL9tO4wq%2BObGsqFYQwawbFyrcRIHtz%2B4ibwCrp90dOpa34D0mds9lB8g4AAtfvVY2j7MaxRCnZFBswGn8qSQG%2B4qBUKS7su8vbu5Y6d%2F2EYbNYl4oFkzaUnDYHSJC7VldE1GkSoQlgyBg5E2Im0MxXxhiJHZjmXUMDo7VlTqLRpay0pxeDhUh1%2FFsp03prJTmB4p1ncVsXIgP8XNjJhTb%2FmA5DnN5fcBbG%2Bmykokida9W%2BoLVRbTVytftgvOO2%2FGCaIqNiutbPF%2FMBuxeINwtmZ7j%2B79fyay6d31hoWwnVRGnpGSOOrLA%2B0OnRVac1q7vSzDjPmw9gkSoqoG5Hr4n%2BUdKq%2Fzc1DLN19%2FC%2BdyNmwW9mwXm%2FXT4okt4YV2w6A8pbP5YTmUt%2FBqcWgKiJuaXOs5i0bE4ngv6vHvJNty93aE1R2MAxpXAwtujEyQY6pgG80TnfXB3XT77HNaTMrgw%2B32GGWQsopretigqQz5JzMe7LdRUKm5%2BPhwJvLqx7XCJXXpp4qVj6D%2FR5iS5FLGlZgvqsXcHJpnFAmDuvqxmFp5KvXOtvbKZnFQ2ALKgNCk1rprl2QXhsInAh%2FiNvM%2BAzaavy6eClNI066thxMtwG3NRyJ%2FhiRDA8AQ%2BEPXlMeOPDNp2tRUHguwtjVCIQkZvtGJVn9gF4&X-Amz-Signature=23e982af6d2bfd6c7cca368aae79a1061e632ad3d0cf847635ed3f47369761d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

