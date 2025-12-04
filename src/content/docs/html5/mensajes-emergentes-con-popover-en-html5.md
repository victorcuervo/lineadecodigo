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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJLPZWZ7%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T050615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIGOyaS519cSn0GDo%2B06Ai7ronO4dttWp8FBmMXta%2F9NZAiAe%2FM94Pr1rK51WffVoHX4wyRoTCTxZ%2Bzk2mOoE9SM6vyr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMUj5YT5jpwjRDcNViKtwDcy9ijrvzrEvsTYCUp%2FuAuRyaVSNxKyyv9sMJAUKi4PaqYaz0yFcud%2BpKPyfI%2FAAmSWw5BUNCi35n0fqr8hW11hNUTomQdM9L1FRp%2F94EXvde0hPi1Gw9qslyvlUHb4Et8mJC9v0iJDxWrol4Mnol2Oq7HC6qbAzhOoiJw5z7MxBWt0%2F3ZWwsfCOfg8M5xzm5U2juOaGkpGFD6HwFzAiPmsDlRSDu67xJpGShVq8mgJKXhW3ZdSuDyxnaAVyZf7ngJHoCmhutSkws18XBG3GRFtBw7Sz8qMy%2FVfMEkjrC%2Bzay%2Bzoh42rISOmvXZZ7Gkdy7pF4HiQMIdokCLkFBVyxYGqF%2FrTF9ksRtPVt4HBtGsaiWRgxfra4ACBcEkzfHsrArNrU9Rq8%2FwPwKuhVkxZODzW5tLcDdrQw%2FetMHy80mL63i%2FFLv8fiQUIiK0lhUaNjNIksDMvJF3XVgTUlgGkpkTPm0KeefZQrHLDzZtuDXLEg5XBWWYjkrssVDUutD0iADdrtFySu6lV6Fez2zkRDca9BMNCpBR8C%2F6GkRGS%2Fs0ZTl%2BA82tQtBHJsyr1KcNgmhkeIjr8XM6TKBtf3dDlUR9uO9sSRAR3TGBp%2B3bDYsU%2BwrwEybl2%2FJ35tS5wwxZDEyQY6pgGCT8zqoexJeYCByj8GGfEscqEXhxluBCraq4XIBETACT9mQtkoU3OmTZ%2F5fG7X0r1kyO6WgOx0YN2pxQ%2FLqK1QJ3mdvQfYWtBGhKMsKSUUZ%2BGw2Vbr5AAhO1hoMKZOb%2FibZlz%2BuNVTfNVyZZQa9SKHUYUqXvfCuCVFjR4w9mh9fzyCMF5pGruHGbPUAcbukDFabAbd104p02PLn2qljRIBZid3z6KK&X-Amz-Signature=44433677c1f6dba56eaa01f45bb06b8875c7942396538e7d7a1d7c4dfcc4439e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJKOJT2J%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T050612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQDxIfb5abzT8%2Bu%2B38D8RNPnkdiyFoTOFSPJmDTy9KzOEgIhAMOwYH2k0wL40LUeqSr6IyBO3zjP4Rvk481pxmKF6imwKv8DCD0QABoMNjM3NDIzMTgzODA1Igz%2FaoNf4VdlQIHXH%2B0q3AMWpDbTTjFag8NoRysk8aBwNpppjWVO%2FQazw38Un8fenxav202RfI0QJmBc5clV5H8SHO%2FFQbDKBjzeqybO4Yq6jg00Eo1qmeWS9mZPY61SznDd320wKjh3%2FgVx6b%2FnnH5o85FicOmG7QMI1PZTOqjR5DxDz2YZVm9I3EL%2Bj8dQMah88Jvnr1JSCq1dVjY3VVWJVSKK9m%2FFNherhN64lmIvXJjmv3%2FghNmeW%2FJbq6zXhFApVjv6FaTDpUW%2FO9%2B4xtjAUYmtP1Haa8mBtOgUdyUmlT7d2V1GfzErMUywD%2F9xRqgY60wHe4WhzfK9ceJb4deSSW07ILis3HwFCo%2B7zELd4t3xnxc8qSLXfxGQu5xzbfWGA5C2tudMDjzWJzo4ScjLW0hL4AgM6AklGLpdKxoM8FyuhSh%2F90S5exkd%2FoSP6YsjjKYfQo7D8ghuh%2FZSSOTttn4FxYFjvw%2F60Tl1oD%2BDewlPQMIGhQnj%2FJYShB4c8nFCIjmrhspvFxUWccfjwcfDjoJSXSTTNf%2BqaTPT8yF97lZ8gzxuHi1gf5FTkvTLI8omj8d18%2BKr%2FWwN1f9rdfnRt0V%2F7L0uTrNcI%2BGgrjnmq2lcovK1BgD65iYiAb4YV0rohEr77HVqIe1m7zCMkMTJBjqkAd3ZUXL4RyGik7yfCdJup7gXaLNfgE330nhwzvBRETtCqNhV1PhmT%2FeoMVI5erPpWhzJWQGlCBPb43ICkeZAMh8TgpPfAo7j8Nt0sX78C2BnO2y05h7FzFWjeBJmWbP83%2BUU%2BhfMhX6YK9bPAp9VndOFSBPCTGFjpOI91dJJwUUqj%2Fl6hw7zE7Sr2npOqn6dc8O2VwROrSbHqFxwtEfgTZwire4G&X-Amz-Signature=a661bc876779bebb7ce31aa669511e143b94973c461f0dea7bf985965e0812f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

