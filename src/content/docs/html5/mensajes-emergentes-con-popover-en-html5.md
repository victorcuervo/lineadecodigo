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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QF3QKNPM%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T191912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGCqj6%2FMx9HYxj431CiWo80T0m5RjkUMcFrWJXE86Qi5AiAaRhh8Tvlb1r4sPdUngnuDAnhL5Lv6rg4E%2FLuOp0XLniqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYrVl8C1yBaNLmaBhKtwDvsGF7ltsSiJTyTclgKxYP5zg5lVuzHGLUbsBZ%2FWE%2FlFQpblWhJ%2FpdDVWdEIqoGDbpaWUXhz6oL9S4wzSGSi2kfyl1vTMb6vaAxMXIxaIRuh5ltrBkg0uZeBUj%2BSZHNkLjJ8PsnoU2bpMK83CUR73xkyLzINKUNEsrJFo3bYed1rBvvNc16NeDCIuWm5kGwjdMa%2FSAlrhtAXmg3Z5mzybhbAyPOOHLkoczp8%2FvcuQ7ku8REFWFDtpk70P2gxjwKin9wpNJtOFE4hywHNFm1b3rlz2UaBPhmHaPkTWspWbTsh90I7q%2FkKa8EFWvSlcgo58EBM%2FgyEQU1%2F76h9pbzSB0X13Ue3fXlL%2B%2BY09jwbmSVO8wIzwH9QS1aTqj2n3jTfxeg0DCEWc%2F%2FXB%2Bjg7fNPH3Bdpg9L0DeGR0KkATiNYwfWN%2Bw%2F%2BX5kHBSkTQyH41Tvt%2BvMcw%2FwAIxIMH7UoTB%2BMLj1c7I9swM%2BWsA%2F4%2FvL2U2KlEHAPwTgdZ1e%2BRVSabXnBt07VhQ4uyUtbBOUguxuJc4mknNUM8C1O%2FnuWycKHKoRyp2JJ6ukR%2FvDBIv9cAXvyEBbaHKX0nape4mtFM1GiCCp3VxPB2cjZIuBqMNiMPJw%2BHLgWVQNj0Hbi%2BcIw%2F7PcyQY6pgEBxfbWV%2Fa0GPgCwrmaz2oSzavZHhcojr%2Fs5DrPbZi%2F6uctripE94Ogg6RoRnvGoZy4RwN%2FpaOUl8uspds6S7dfAb10kO5nx25aHJUMm2h9EGQ77LYItSwgotsWgz0EQ36PtAfhn9vyvBQxR9hRU5pTBZSsB1uapGed%2BhFUA%2Fi3qTNWIWpE6NNJOQ56UMbKYk2F%2BpW5W2R8EwLr6oU3YKep3Rzzc6rn&X-Amz-Signature=1470d3b80e1a258c15a80c9ce04e0c4d02012883f57184de7d065b507837d6b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2UVA537%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T191912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVNcrWfdLwgGVzk9VzceDLxqaFvqcbS6y7UXS01OJ6rQIhAOBkdF5k21tQ4TwI15AUs3v3IvAy%2Fl9jKMcW2CEWX8C3KogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxBchnuuKTvmIGOcisq3AMJOauBapAdwYa%2Fzq0qd5gX7sQfRH33hM%2FR9WO6IwrtCUyPq%2FtUJEluygX8Cvh6PTyx8HRB%2F%2FkqvGZ9EyZ5GEyW5JRDq%2BAKl%2Fbzm%2Bi7KKVK27M4dtjR5Y0T0Y79mCF6meWEjlxzk7BwMCc7n7MPNa%2Fqk1eg0XpLrOaxpiWS0%2FvAZCXrcBVxW4eIY4mjtpBDtw9%2Bbj21d8DrxAQuyyXaqW2K2yAFIfrHTAHjvN02pE7kDeBc0ch1QxjEB8JWsG6c9Kwby0cV4ys%2BjUS28o%2FF5RhVWJeLTamd%2F2W48I5jVZR2Iqbvf1NLp0niCyS3ceRG%2Biy3JROTEuJ88vNTXWXzTpmJnLzEMVRfOPE5Sa0S4DbpviKMYskw3dIkSow57Ky6RkmOSKpLxKaJZZEzSUD%2FdppwCJxHJ5SMbGsk2uN1bd%2BYZ9JzxoVHJDkxICQndrkrGQNiGKv5qQuc7AEoUegWlj6bj7MYm4qbn6zn%2BmB5EliJMm5LFASTRWw5LdLhO3aBcnuvrHXJ6%2BSZThTk4eyY6zeb9bf%2FLueK2ALWJvXDh45JDOeAC%2Bm5qbfnOs%2B3lbPoqBOxZzNd1Ejc1yTbYRP%2FGyqc8DGbKuOl17KuRtsihyBaaI4lhMaI8dfsc%2B5heTC1s9zJBjqkAcv73QDFAMSnhor1%2FNpMpJt4V8Qo7tbbs5LSB9ImG5pYnPFlGO6ec5dAWFJMgDTYbv%2FzGC1Q5Fs35nuLsseQ3bKrnsRsGiHz9YTyvl9khmdmGqJD2TLTCxNkxT5yF4OLhve4y6rWxwizdSUCJB2bJxW3YF%2BDyYoxPZqAHoQnJejeYSbAjpMTgMk7JknTIkGMePoVkOIAfwBATRtX%2B5DrGXSAfY8Y&X-Amz-Signature=c4d0e1fa02c5de60b94ef27ec4b5959ce7b9ef2de293884bc4f47124ab35a364&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

