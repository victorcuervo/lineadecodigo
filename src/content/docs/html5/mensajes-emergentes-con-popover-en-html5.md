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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYQCQ7X5%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T053841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5NiEQtA0rdFFUnwJOZo4Pxnq3swB6TyOSOsJBdePWKgIgASJbBSloMDwnTmArWdOO992eti8QauJeJ2bitb0V2%2B4qiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMtPPn0FESDxp98r5ircAxQFeukhnTv2rIBolLI3mEt%2B6BJgWIbIm7PYOk7AuleZvi3%2B1lkdlAYX3CO%2FYXuKzPOEz8tr55N%2FZzGXSdNK1s3MSBho58V3r4nT51SxqTN6vvLE2FFZr70ex%2BDseaKDTwa6gtr2xDrF5E6aYSTYPXq2lVnZOZ4ZjDTGk7IA%2FE%2FHF0uH4Z0wKc6hFHZ%2FfgI4%2BHZcARSBg8kMra9jbJPvMYkT%2Fqx09wBxDFFnq8KDr6qVpTebVBqVUp0ZdxVsKykWNrimxACROlesZ06fx6txjWAFn7jXUPibZL3sJvdaDTMFEtLO4UjuU%2Ff6x2afeY2B02FybW8ggQsGhMz81EyalMedTObXSOy7Strt%2F9eebURi6qfmoOqivgpmU90ncAScH4SIMcH%2FCRWN%2BJw3zJvgP7RIFOhbFIEIVsQqJwRyhRijpOorxYuUMisy6hu3PhAjIqy6p5F6KpPWHRpnH%2BBkc0YAa1qlUH3GDobYZKowQH%2B46N9g2VpSFiJAX3HNcWQ1NyNXoeOlmv5%2BCTO6BW2HCdleVLB%2FusVByKCLQ2c%2B1q8eJQN2UigdnAjxll95WH%2BP7myOrqusMSXPH9JC1ROFCN58kdKMjX8JgpUduCA7nJm5U3RL7RfLrpRlFyb1MKK02ckGOqUB7dmEeMP7YBISTyDjez26Y2JaVNA26SDz0kVyxqfXBYQS%2B%2BzfDyiqAd7hV4FhUKhCo3Hmk8j62VcYVOkBG%2BodW6rF2HmA6vo34VjKYtDWOYZC0G4aajgHrIs2WSBHS3Aw%2FRq331ImiV2qqRoe5yHylCxA479ro2SJCFq3Z47GG%2FPN14aBWM79vKf1yN4thCuGLYfPvEtzJrMI6f%2BwlpNAuanb6bvy&X-Amz-Signature=9ca2f93579b2774616000445a7f9c57424d05e2af2c6125a93cf9c085e2cf908&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDOP76TK%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T053840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrJO%2FvzWlw8tx9ciX1uTwYOgY05qCnZ6gp3VTaZE8SAwIhAMRxeFdoCWeuKEvD4UREqgtbZqoXYLcmerJFgh3pEwDZKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxUS5PJBc%2BrJaNStpwq3ANwDW%2F%2FLKVH6yzKCZVXpk%2Fuz1EmAMMHrqi%2Bi66bauPN54lbwLbyibqXIxFZIFlg5DA3yY%2BJVHZrwgV3VLevcAC9LGlpf%2B8GE5CpsKlBmEXYRu4STF4it7kDeFiGgxZvRdtmUHkM96yIF9OH3MkhqbHOcpXF04D%2BMSYwNMSTtqfc0Kfo9Y9OBR%2FZQhp9%2FUavc6RiHDa2UoR7D%2BVsL5kzKryb%2F3SJjGJBgQdSc%2FB4gzYfOi2LOlL9EJMBUlmd%2BKKuY16BcbASaqJ338J%2FfsuULJUaX58ez7QdsuPwefHcSkAsr89yvYi55mT1h%2BC8dSDJOlHHRkxawL%2BLVt%2BFC6Ih5a%2FKpP1jb%2Bi0VXiltYW6zqAIEbiY7xvohTqywxQJiUHC6iumJRu94Q0NKwPLSKLV8DFD6zVRxguXFLZC5OZggXdA2T4NlMh1AQytdRJyRYkb4mcIiwa336Nx0cETiRmRlx0nVKLK7AXl0iWSDEhd1ka4feZ2csA%2FlJMfoPsK823N9hlMZc961Gl0%2FmtfF8GqEDinkUVCyrkpKIChZ3kkCocSrcEk4BiZAhw1UxEeU83uiY9V%2F%2Br4A%2B09BjcPHb%2B0Qnx52ceRQWap5cGm5ag5NXycgt0o2yCXliBdjEeEhjCQtNnJBjqkAfN3xd8wL%2BAi1KOuLM6PxzSs4BPkUnnubCPgE59F%2FYhCm%2FY0%2FnKHkqPMoLJr8tp9yY0tbMsgHZRhPEHaoa0YGbjjRHB%2B8ftY7oqKpgMvlHTCMfTjKFm%2BUavSxckwVBztk6L80dvk4Rk38osJqcGLlLfWLdELacULCKEV1cgp7OmwuE3j2uvt3Y7JYt4Yqkcobgecy9SgYwcIQV4IoEMLhNVziWH2&X-Amz-Signature=570b7d4008154b996d24bb381c342584546ce0440fbc840d34b7cc3948257b08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

