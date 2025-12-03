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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGS2553E%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T121310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCICjtiyE0JeBCkte2ZRmv6cT26pDcIQQJVrlTqL2q6nbdAiAoygd4FZp11xqR3xkcniuk1VGBdomkwH2nWrygPtlczSr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMWyR5QkB57UKGsNUdKtwDSWL6ptMm822yDAjQuMN36g7FczMrRyhvukk2glHdQl326QQGnKx0CylzopjxgO5D9A%2ByKWpdEZ81HDORlU%2Fv56TrrzHJ1z%2FO%2FrQ0fNS%2FKHvcvVdugweJNmiL9nLhzXxqyQxbCKQbIleObtltNEA7tTSWHO%2F%2B%2BTH7nwv57FsCNRotlceAw0nKSFLqf4PiTZqg2ka5DZumXvW8D8JD4E0ja6cBtGtdnKAcl1mnuoPoIZnO8gCvsBYNt4bS0AsszVYw8dr1wqjJDd%2BC%2FyhfKocraxwZb9LoovHllkloZ4lr6cfYzQJa8EazHj2HvKvgBJyAd8liBcLsQBnd%2FPFcLyuK10GfGe0ts%2BADT8PcGPJozilmXLRtBWc%2BOjvpe6yvLW%2FbZ14HF7KXspcqiUDX%2FAHJ8L3VvpM1G1gI2sNODu2qjGN0gXjuSzDkj%2BNjYXjIt1vtc%2Fe%2FjHm1tBeici0%2BRsiuxIifewy5XNrdV%2BmAuB78rzuQdwe6RFRWW2oyMpuybaePFhsoLX44ZPNSVWr8eA8Zsaxt8vqZH%2FIF0u7PKoiEAvPF1xGeweaoeSxegy30dH3%2FSNB1Xm6nWjbDMvurgMyJKXBHN%2FlwUFt4g9XjKHt9pNqVcl4BzabOzXf6SXowk83AyQY6pgHgDlbm3ta02qRF9iDbFNysWOdjXGIg8px4s1hXS2TdSbVA9eOpa%2B7VICCkMkBPEKL9O58XAJX6OESNpJR5xpcfTALPwRL%2F83zDBqtKjTgdbjIj7Xwkv9MYHkw0bokVirO2Aq91RafxeNaSHad7IXck2T3UDX4peQGQ8nnBGDCZRC8R1TeP9m43WQG7zIjTGwcjRTC0G5%2BytZDdNsEdpplyHCH21Lms&X-Amz-Signature=b7dedebd23897177a96bb52aa227b5425e19e74d0904207b5c8823d7f0d88f94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654HC4FLG%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T121310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIEzy73ZFXa6Xb1KvmA%2BgtoDN%2FoaT%2Fyr46DVRaUc3%2Fi1pAiAKY0u%2BDXXH5afhr02Yj9biLADen0Yq6mEL3yaPkYUBAir%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMt19ZDnHuSAr%2BjjKYKtwDuwH4Kkn0hNqnstvb5K5IfBPQ7UX42XA1nkyKiI18RxvnNsoD17mwSb1lpfhy%2BAyI7AEJcSKNm3kMBdHVkiKpkkn64vHGIXUqh1D%2BCDvAHUxGaaw%2BtOQeH7UQEI8DzmQGgnb71ESlKNuEU0aQSPjRXyrcNzJs9bTQejWoY1IMzuOGXtoANIhHp2TXrRjzcDE64KZFla3G2oQZ0Fehf%2FxyAiyeS7y%2BXPse7%2F5zzyZjqV7IuL6B7FuHLxnxqbi9usLMRU%2FCbIdI5HZejwIohT9QIXr9W%2BXk3H3LuAK20ZnMx6iQaTEY98zp19A%2FdE2UWKB%2F%2BTOMhls9Ewf7O6D09AbTTmtCwfy11oB%2BbXzChgbpiye20S8V3hvRDk33q%2BCGclKmO5SjkJxzJ%2BTPh0VqHt%2BdqbmJ2UIbIpzP0WRxMhQTanZGKwrbZMw8Czx%2Bd4W4fEZUmMkInqKaSRphJwyqJuTF%2BSoWMfaFeH25ad%2BG5n2tMMZrnXm68LU7wnvhSxbbmNwVYJ5Plg4u%2BweYPjiYeBwg4PkFlnhOSXkj2ZnFjLhCMP3L%2BXkoxulCldfhH%2F%2BOVv44bJBBGvAS3MGc2f9B25ftTp%2FPyd8l00jT19a0SjEkjyxBZ4d33Dii05NOy8cwqczAyQY6pgFUYu2JO5vfn8V85icWdfKlVqwFMN8ORo2JMpiIt91nOmvOIqoJ27hO75AU0xalK19v7f%2BzRHxcVx07MQsO7caMjCeek8hH0tQqFJZcJcSrTJ0gk0L69i7MfluKWAzlG4pxFUoCzwUAk4CV%2Bwnp%2FS8MKfB9eGF2lhxiLONo9hIssx7KZJb7uUHqAzqlkhglJNNmp5Mw5RHGfK16162Ok3qZ5cHKIn6E&X-Amz-Signature=f3fd5b2dbe979dacbc1fb8a87143112227424c754305a4e4df1ad27dec713582&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

