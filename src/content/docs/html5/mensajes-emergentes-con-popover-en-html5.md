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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7LJUQ4Q%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T120203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFaPL0IpE980BWSpDNFJimzQinmI2IGWSIcH0xXGfa%2F7AiBsa2qD7l%2BFevsZK6961D9hTvU6C4zl0hHAn2gBRIGWSCr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMEH%2FGJHwEKCAtZR7TKtwDqDSe7Re1DyFyr%2FjxQIN9wvpOHTjB5%2BA3IlzyJfzTxHyVdgHUeiSOsOmbY9Tlyi3pVoipbxqYwpUeWORM06Kf4OV8SA6dFwLfLMkqqFzPTMXEFCOkRfegGKxn5kk%2F9yE4v7PedjMKPMMOwTTDLEDX4X3QUi7au3SRYH0jIV%2BDVT3jJPGleCYlfxnSdo5jQyLSAX3GcQvVRtESWHdAIoUafbx1w99TyDl5BVZ0yXy4ruO%2B0F%2FS2PEOAa7M0hizvVE3ym6FjNbYoDKpcEcl7V%2BlXf63ZsVQpw49fSJdvWGFIVbCvQTnO2BBb%2BVCJAwdje4AMOWXVo0v25TXz8YuEZZKBrhyyi9gJ0%2BmL0mpDeW0XvV4CmGzMxZOvC9hpVoG%2FqE9GDjzA%2Bl7QHqhchAubgBSYgRy1B8n8Dc7woTftdGEosIwMwJiGuSSOZufyKEUzWPcvb7Xvvl5bs6Cw5eLBde7mK6D0s1kbxEA1FDZS7v6GbZ9H3caY50Goeo7CcgKO5gxwVUrCzdq3mqAHGTHeeiTs1EowRSDtOMjDxR%2BkBLhjsmVxu1uRw1kqPhL0zdcbw7Z8KdJcdjS7AZpXvJIIhlRqak%2Fb8ce5H36coT3yAjIXgJNhJunRWEKo2XBwOgw483KyQY6pgE0hLo4tF%2FZiYpKFcqhUmcOFaU3A%2B1hjGZds7YhL0l9F1Jt661giu4bI6sfaj6VcWnqEaz9KY4GqB7mw3h24Jf65uVgwKbQ7wKZL0fjBW1G9nPO7v7J%2BV64tmOioVtoUEv880ch6Ghvo5LROTM9l%2BaDUHOqnrEm9V%2B1iSK1W3pgMflSyVuUT4gRVQZg3SjVfPXYafzHIvWrmr6As6ufs6hj5futrDOI&X-Amz-Signature=aa2ea41959bfac48a7f8c69f1ade7af0dfdefec663f5d0af140bb0edd9b168f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VG5XKAOZ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T120203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGHEze%2FllrPNrO66NyRzntGvGCLjGL14rn0MWC8t9nd%2FAiBmEHiUokvv2WkegI%2FHVbIaBDkgL%2Fr4AqFCwe1QQ7l5WCr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMTdC1QjXKDR%2BVcc06KtwDeZcKnaqe2vxuI7hBqdKczcbp4P89gAPpQoJZIWMHyn0lXjQKU5qhk1%2F%2FPpAxOI4Ug9yBJN4XVS9L%2FtzpU5TwqcoEnHfKUPhcEWhwpIfMWDsQcBeRgkM3W1h5TXQaFk4AxfvwmOU7OeRyUUrqSUIAbYu%2Fvnh%2BHkQq8Wwf2HwN0fb1hHg8pNLTB4BQHbaUTU8JGHGGLcsnsdWYbx5nZXUle95Rug0OhAUX9HyZSz9X9qLZVJ3mTsKn5AzeSoOEdCp8hnLeaW%2FnwOz2MyM6XhLPwXl33gYgp0%2BLgz4bDUtLT6BME%2BQ1IDQEHdyKW5wkVLx0g9TehFKKOOu3AADbsd8nur3zULtJ23EpXyIzd0WWeBdyDizPlSWO1wq501tYcmMi6yn%2B2kLDSgfM35%2F7CuQ0sSt41B%2B4e%2FvlCvXhWGf6FR4rV6xHgQaNtdw5633ATzbgcsjR4cle%2F08KDPJAuCU4qRiYdf3QoSogukPEZAzc%2Bdm3AlnjapScEvxIIlF1w5JeW5vQCm0ADBQpQpwaDcw5Y5grKS7tHDTFFT6gkxHScRpcUsICfDd58Au1uupnCTDAowvdKBFF4N8ODji77DfCcLOuV8aW5wlQgz1PO9zOtJx%2B8LgxzlysJCsOvycw79PKyQY6pgFtO%2FySVqV6OjO6Abwx5yV%2BbZOma1emvS0pcJ0h7kdfqQNjmPx8WILxyr1KCx0fcqtgmPGdlJp%2BhVDXqclAuQruiygylCVKoDYtY2LptJa%2BaVnfX75iQO04EOguN7pEN4QJGZywomQJEv%2F%2FFlGrPuT1WY9DgZwCRWNeoJyH9anB1pWxtW%2Bsy2NI2nOcQjcT%2B6ntWi5SQsXnpKOY0FbRZ%2FvAoYybSHEp&X-Amz-Signature=5e50be0d6a04c5ac0cbc1c04ae66050c738963382aaf28f28cad6d7739ad1499&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

