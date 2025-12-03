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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TD4B6ST%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T021502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIBd%2B26PFnM3TMnW0ErzYZxUZfEpfF9RkQNq5Mh6ww1HZAiEAm9pWykejTwbOPG%2FBdxO9Ae21XUys4essKFLNXZJVYSwq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDFUaPwpL%2BbW5H68McSrcA5gve3PObbMzasCHUOtwYBTiaWojYJliZ7SEMUWqX%2F7UXGLMSTS2n7OIKN4BnRKnB7zWaT1VXOCF3mjw84w%2FJdnAr3hoTOYOZe%2Bb6ydqMWEgqLyUPUO%2Bhx9O1ZU75P6o41UWv2pAI7GMSa8cfyEoYBSnT1rZkp4DQ1QW8k6XNX%2F4YlzW0cSnCf0heXhHYbtrjI%2FVkUPXv4a7MR9kXLF%2BLe%2BeHz%2FA9mJXBGrIjOLLaAOJSlCyXrwcFx41u1MqABCwJkIExhaxevg2aO75BUbJadm2ssntwCpmiTdh%2Fu3rYb4Lx%2FaFIswMKGjRebIqidS8q75VJzljp44p1SIuGk3aifBbK8CuAlYAqkbA46v0OiOf7s2VMV56CbE5Jn6HKBSa1pNgmQYfPO1i2iQsAZnq%2FZoZX7V830uIJLwvVqPMe8PdFhfMXK96qoZkhScsbfCkErMoSZLjYKaZxGCcRP1j296Io2VhfbFai%2FFYI6u4%2BwmmWnJRR7DlSUqWT1AvtVl5s%2Fx7tk7G0PzPFsU5nRpE7s4y1wI7X%2FNZP0RucjV2IAUf%2FJqN7IN%2FX2PdkzDzsJOG02EmlnE%2B5ZzWmtEibURkR0a4n%2B5TdHBjXqtSPF2tVf0R73xS4kNeV%2BfNB59GMP6VvskGOqUBl%2FTSUyUDcnF47MQqUIkrpBKyYZ4pXug2g7yN6thMy60iobY4xIAPn2lEdu9NbOlkjTWNgN3XBPZtE2qfDxmOUWTTBDL6877tL3MqIxywo6%2FZJXv7InPhIn%2F0orkOwkz%2BcwHRTos1MFqSCSkTQs2SeGthMzURkLUcVLbWDHPS6m7LGUCXaadrxrQhILHA8YtWwZtFJEBUN9UIBz5wWMrxfn4Sc8ip&X-Amz-Signature=ad4662ab72e3367f6a1cb749276b655abcc808eb3bf09f8793432352ec81e1e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653YRQM5J%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T021502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCICYpCjiBkE9Y5adbFnFIles7kztY9OHDtb7jnjzeKXwrAiEA9RLd3hBGLh2s6d4jXwg3ybRX576TMntVMt%2FFxlQWOEQq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDKS6hU%2BLzLp8VQr2oyrcA6pjvrzN9MnjJTc%2FKdka%2FGdRyky8Rl70U5J4mSCMjM%2BVNwPCw0xSScwUv44kUeZLwizN066GzB%2BCftGPeXY7qq%2FFrpZe8FtD1arXApaQFORIbUcsBoMTt3vsPIjO4l4QIOrae46P69FRu1Roi%2FRvEbk%2FIr%2FzRWSxpbhqrGpD1VZcDLjLSQcoeIDJ9V9AbKEb9wCjBV0HMvdg%2BJ7F0SF7qzkv6uyEiT2zOUuOnD%2BNlIsXIt9uNu7CAHC9PqukGuJn%2F9vpAKPxj%2FQIWroh%2Fd%2FKXcq0fSA9kSJ9fb4DKLKfygjb6GUVgl%2BOUPDsmC9bFa33iGgDvhf85I%2BxCzuEFphvnFrpUnNu31mX4CF%2BQOcTucXbsnnFbyCVJhZM5qBO7Je2ONMwNmQ1EOxbKHL90N7ocn%2FAuZk1Pdb3n08Cmv7hhRxU5vVyFDD%2Fu9ooVxfq8Tcm6iX73kzCsw0OXYklR3bXhfgK2a%2BbL49onu6IZldY5mtd2sdm5793OyEYL7qGurMZt88MiuvTrwjq0s3BunqeyNnCFeQjUfYxq1am3uI8vRAsjI3BM7lIs9ySN0aKQxzNKfozQny5VM8nFyGXn1SnDbAyMVTGDBG2gu6k6MFxbKpBMqTQrnipwffAvBK0MNiWvskGOqUBXP28%2FoPnuGnT1FqMBJXsKbwwj53fi72YopgkIfO%2BfVja3JLciYZ90OM0BlqdKa4rVMm9OxkE4geR9sX%2F%2BzhLubWxG%2Blxq9jwri8bYyRmb0O6Q03TYRqJmFkN7fmWHSBYgwtUEGmcITQXcKiq%2B0Amyfh1js1mEz0QOXE1MUJNrILYXSdlzN2hWoPqbXcR7qPyQP4Vw5UV8wMrEa4e4mVOc1Aa8jMY&X-Amz-Signature=bbc9515f63f7c3c990dbf9280882a14bc0961f31bef1e688c0ee379e10db78b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

