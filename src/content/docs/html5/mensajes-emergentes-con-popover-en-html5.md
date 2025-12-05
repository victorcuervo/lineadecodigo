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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIW6JJVE%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T211326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5FXyKfpq69XimJQEQ5pv2xVYOqYBOEr1sO%2BkmlxQmKAIgdK1P3IZdFYIoM7W301FqWwJDFcJ4yAm6xPNDCnAhMNEq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDGlgUC7Qc%2Bi%2BqX41tSrcA8tN%2FrwR0aHBW1JG%2BhzlJF6hCCr6TQHKF2okdUbkTebWJu11QXBxlccxE9PwXfkM41EhPKsENx5ctNgkaS9t3Y0ReD6BWbt76eMg2%2F%2F6REEQhwJXblmi6jJqwXMKfHL2DLDG8bWhjoi3fJ2loJ5jXUGti8Ah263TzfC8uqYno6JX6IZOvvUgQOtCR6sMTjVlyTVS77xC2STK1hIbXa61%2BCesu2fZXf1dyo95e5tGf3LxXr6ENSlU3HrN1Iecp9Fy%2BTaJnujfgbGFem%2FBnZXaiLth%2FunzMtUsHla5eqIXBzqwl4hIf9dy4Z8vSnXQrIbNd9TDO0JKWwbkVznwb2l%2BFXD%2Bmuc1B0h2NNGaB6x9OEtlqWEMbQqepDqcRxMvc2R%2BfvEdKqMhJ17DCJa6WEHxhLr2bwS0aHQTWDGT4Py60jNs7UX4SEdJR5Jxk1CPqXmpNkPa3er4Lnos%2B64sWQK9rrnJK1%2FKYztF8e6%2BeXs1eKLKk72rZ%2Ber7e4btPW3QgBBcl1n1BhvoFXN4yigNi2LMs86i6gD7geCJDY1Zk9UoBht9xIfQsbALgAp1CC6bUCeRgmV5iGp%2B6dWkkL3qo9V1XRVfmdlmiyhWNftRqEHbeH578w3EZuGIR43N8H0MNuIzckGOqUBd7XlNh1tngMggU3wOgFzqDPvghamM3Yfr8HIpkRsC30CNrRC9XNg7Cl7kmyPNr2Pbowts1dFdvQWsAyXR%2FL29b%2BCbkPIBPuot%2F15UpFWp6D8lrw2UiQv2OYm4hKBVx2EPMX1zI98nJR4fIZdMBcgFgzqv21MjNJOWrYi8dypmtAJ8IVjFXKBOuAYnT4Sdl0Z6YGXIwBDUrq0DJvK1iNJ1eeauPKh&X-Amz-Signature=83fdafa59f22f81c9f977c610ba6d973ac3e857d892ebb036460fc93b171b310&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDZQAMKN%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T211326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiTf4UZ73%2FcF%2BQkeFtoZZZ8xuhqATC8SaMdvYP49gqowIgdxnoOn257nsJt8%2BwihyWiu0cdqPz4ONKkM93dnTT278q%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDB2kgELoxRYnE9fTPCrcA4TEpyjnSon1YV7LvJU2evsY4l5Q9WxnExlyc6dLSb7hfEFGCWeGUOMOq7zTdoEI3Ry6rV9T2BvtzAcZKLy5gyq1GbYHtLdl6PlDJRWIQ%2FysIJRoAL5CSzf3MU0E0bkrnVaiTpf5uEs%2Fr7zFuRteXIBW18pObR7x%2Frz6qsjAALYcaVS2wI71pSZ2%2BBsrMzsoAk79g7uSCScWLvxFRhUvR%2FNFnUUcADxZGksC7XQ813l6dGyKNHhRyOX1YGs83yA5%2BLuyBw6aaK5XuI5Z%2FcUAlqGaYy7tgH3eJmySWsnMs%2BC4v8h1Y8VxwE6MQ82gW0MYv12OjHzUeopHOC1%2BU8kw56LSK8yd11EmnowUKoLqkwh0D9NjYPAw1%2F9hB0owfS6rTzrLekRDP8IpwgJmlUwrjq2%2F49D%2FVZOKcV%2FEcDFsYdCEd22cs01ADK57filERGhlaqruhKTlrnbgjtxFYSwdmxslhilqhzvc8W02EvGMIfRvz04iBFSK3BTdoMARtQffRfYGH6M7QXS0OCuUGo67igM67TMqH8CznF4QzsMHCZwJDLZYBo0qS9gZi3Lc%2F8xsmvE6WchrAaTNqe%2F62OJk8npj5YtHGBl9bLwZ%2Bc6Vr4%2Fp9nyWmXT77QtUGUnLMOiGzckGOqUBcvGDpSfaSLn37qZkAi0VEZ1Zm3cyKhy6Fn4e2PxhAmmT608SfmDdbQKaz7%2BMfN%2BUGpQ6do%2F5pa4drPfbIJyJ4Gh%2FPm7sWdf1UktXUbtITuzjWK2ADG4Xg%2BiraON2lXi9oqDDKPn5xTMyg9jeGSkkec60KYwVp4zAOV%2Bep8IbqVzB7ZuvvDJLgWbHWwaZ4jdUNdhZ2Fj4%2FdxFOfWOoDYbbRWiQYXP&X-Amz-Signature=3345e06c83dfd215c3ce5c701c7ca993d1d022bf1d9fd238d3627b269e8560d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

