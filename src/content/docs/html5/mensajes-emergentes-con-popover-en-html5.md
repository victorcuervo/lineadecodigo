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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEER4A4C%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T053118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDc2Rt1KD8V2ResBEbdGwTZ8F62S9fbP3R2t4nJ7cfN0QIgJmY1kOyP%2BtDlBdxNLLS0Sv9%2F2sdXoAGlgP7ND9yfMLIqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCCng4kED8bwJmP7DSrcA1dq79BR6ihT51V0W%2FYrdVbheUmAWgWg1Xf%2FTQeTOfal4FsNkOK5Qrr07ikEk6HezJgpnP5gcbnD5olJJ0cP7DINjHBTNdgqC88jxgzdmAsI7PLxpYiAVcef5KxwKW%2F9ZpyaYuuhsnbdMbMFmYnf52cPnwDZlry7tmdcnaclWn0HFKPraaBVzCHP54mtWXZy4WT%2BR6IU4IpB%2FcpTul7nsUOT13MCNPshzF4vQmOKuCG9Xega77H3MhKPxmBzoZ3lWWKu2s5NfeiUbd%2BvVbILJV3IDxIg5cDsfhCkKuc5tE7mc0bRmtRUPsPHL6%2B0NQV4pFnSux0BhH%2BCc%2B%2BvfQLU%2B%2B6l%2BEtwU8%2BZk2mGXtQZDX8C9qM14AbmFz0CKynA7pVQ8XmBY44T7EdEJfDL3UiS4mnytdLUjprPnsc7cDQ4j1M8hq%2B1%2BZivoRVAyYv7UgyyA4H%2FtpXWKO4ObVYg%2BLd6Ugi109o9QuKuwSkkHrudGe4P8OSa0ylvs4nYqzmIKkrKLmB2WNyQXEzo%2BzFINQIUeNxy1wrj8AuNZEsbe2m%2FMrA4O7vCyFzpdR7NnB7tnqTcp%2Bqsy8HDJjnjdkPqC%2BNLHJETld2S%2Bvs3YjsQ0zW18%2BaodGrm9B4TnL6aoSx3MNPl3skGOqUBDXda0meoH9%2F%2BVL%2BIOaeTl4yE15E5V0KdZPXg6FJcYZneO1kR%2FWtGDna9LW5MR7eXZwjZxf51KdC49kPQ%2BLq2h2HYCEbfLgA3CYPK%2FF71gqxo%2FVT23GuCp00VBWb1eRQOSnku6Elaiv2xzPmu6kEaabX39iJ2gV5iPgQUEjGUvaIlFbX4PLX6jMAKI%2FUREw0umeQ2lsFqDhNUv4710cYFH%2FC%2F5LCq&X-Amz-Signature=120bbce72e9ad86b1d909ff9ede25bca616b91383961e51ee076a10842f1d9c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XPUQ4BR%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T053116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCexU7EKX2Js68oYStFDfTJfJy3mECFnw0Vb1438qtX9AIhAIouAyqvPydz7oLPTsTFXbjyWrqJF07NXincRGbAU4MJKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzgiT1ydJ8h1c%2FpaoAq3ANnr6F7Du32EzGBhAsKODPahVRJ5FftH6ralkgIbUv857ImMfe9tjJdRk6hRrdbKiMGT9QEJF9mWNjz4E1MrylzDlod%2BFyXaf%2BecLJ4c6pu2avgRQsPo8skkdCW9d%2BqOMv5crRy5Sw2iwdVT%2B%2BItXnbMewqP0sUA9HX%2F8YZohEP2qm6ubywx4qZ40lQeEJFPL8j9%2BbGl9%2F86fUoqWTRgJA5B9d3kGywBcjA7SlOUqm5452YJ0IKAhHywV6tYmZxfTMpVVo6sbwSTAccrFKyFw7R324ZN9Vmw%2F7LjMIFX6sDXkh1P25KRYyTawnzx%2FEyJKoaUCq6Xsdjt8c8IooP0PsgEwUaxcIOy4FLcWj4j98IS1bq6UxfIjBymiGcKH0YNdK%2Fi0ETwjbQh8Fc7qZHMqRskkfSffgUjFsfwINyBStYaI3EkVydZLO17w5E%2BrikvnIqrrOvHziNBT3ZOnC1IgNFVWTgpn2NdejTuJcTZ%2FD%2FrLBJ67CspLT6%2B7wUtIFWUb79CazUymfuWPlLueJveXApaFcbtUYIQuNHa%2F4u22Y17fixxRSsDS7ZoJzWp2T0pA7FPhaZhDzCXB%2BYcYGR%2FaQMt%2F%2BjAFEfUMOmmaIwKFLNCeuUy3n8ShpfXbNF7TDZ5d7JBjqkAWOF3VM6gktRuk3EPIYHc%2FS5TMKKsLJrfZoUZQ0VhvTLbVsvn%2BuTALBl3oNpfTwSpYa%2BSgQy7D%2BjlgaymGb9R68IyrOTUb9ETcjEtm3jUzAjiKmesK3m5bYw4HC2OQ6gZraYmG0yXp11STxqPPF5t1n7QDkV2O3UGlj9KrYaQy4pBzUFa41Spp0rj%2FLkotO3GMMUN3Cep0mUS5mgDX0cNzdiEAPY&X-Amz-Signature=961320e8576dba77abe4a743e5f21514e5e574114e3cc3db8478eb29edaee8a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

