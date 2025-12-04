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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJUSGT7A%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T085448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIA0VGTCfwpahZVTyRr%2BsXlRTdi2WijJuS2ozljQiVxEMAiEA0hmM33hxPYX29hC3b58QiQgL1MgzvWPrC1vak5hne5wq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDBM9UMxhRYIVQSdA%2ByrcA0WABeGzyLUBfTsF4zX5bXf%2Bh2WnDi7A9DMTqkClu1cng0j1QREHfCD9lyQpEDKfjSyxGSU1iCNChy2CLrcOuKou9mRhOK7uGrmzQCzbhaCGUdW9XvQuV6hQNvKz4QVwOLITt9LyaKTCnf%2F%2FualyjVxazp3r8zZUDDZ%2BccGdfH%2Br1PFD%2Bmfie20Af%2BXFfyfxNq1O85fhAE%2B4YNSOTHvc%2BPCXTUEQvyJHzovpDbV35qrHo0RARCOuYsXKGqPPixzMxUi9MddVmrNk%2FEIUsSTaLmZK%2FRaJST8LRQYAntxLfvvHYtNaiB8ADNX5RRIbJRmmUBB7sp9X7PMKFmE6Hgsp6otj4QLqxwYajNip8fBdc6pZMIv3bk14HKV8k1sYBYqVuedTjtApiJSptc130paVvnYiqcN7nIJI800JxV5kKwqZVkNxnMT6E%2BdLoEQ6I8%2Bfe%2B1Q%2FdaPKCUcuhBTURqUK25Jy2XfqrQ15O2FS2rqX%2BJ%2FCnptC%2B1pdQuUBCqezDQdFRFqxkjHkBW9aj2N1BCqMS2Y84lFH%2F7dIuPlNHkvPSPNMuuLTb6a1r0dMWls35yvy0ue9iXjqLk0t0L6sAF9QLWLVm%2FXWGyRPwsxieADmbYm6UytiGzxo5sV5DXUMOKExckGOqUBIKOS1qVoPUCMXswrya%2FJpk8DGHE0YKjMkCq3xO14Z3bAnGgYGx2vEjiCgvPLH33gGecJZMj45a94D9%2FeKwdPeE3mV2h9KE%2BVSCwjxlEurJrRg29P32sb2VQJUfUXSuWxSpMBvSK%2FJy8SVGBGniD9WsCJoED4sLqcicNBZAnZMLUX2bACHfdCOwOLjXOH5e6WOysiS6BouPqK0ACJ6BoXmNtM7L95&X-Amz-Signature=9ff2643ec9c60d5ceb73a14583d1492f77c26cb7e4f9bdafbf59807527fb607d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWNGU6ZB%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T085447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCICAlobZYZFngN3K0xdeLFWW0eFce%2BMmNgKN0ug2xLSIzAiBb5m8Q9hsIXpwRBQx%2FT9bv8ccQ1QSookrUUmyd8b%2FzICr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMIQiMGW0f3GdeC4dJKtwDs8CATmhZKalEUL16s4ldjTWeYx0jAQMfopaV%2FQ1K1fHhBDpAdjAb9pOZlcVhtf1gPNv%2F44nvi8v6Uf2GmiVc7Cu3zJCpmuQ5%2BkNwJd2YYXEhdQYKE8Koto42%2FfOibCkTF%2BZT1D9AcVOix0AxmQvR3T4OdNoD2fYgLQhMgUtbR2gstHMlgzym7dUpP%2F6fKAwH3mfnP6uJltMsNLLzah4YrvQfBpXmuN4HfzyMysnR0rTMGfJZcz8YrMRglgDzHd7l5%2BST6bCkqcA8ljqwHtW%2BMMpj44ezGeObM1Rz6LM893zne0qIHl9SR76t6LPWbkO0dWLj3caFyD2bTYCkdCeak1Vnf3e5HgUXlge8i4hnDT%2B1Xkef1OVmLhaUKtzb6GPMeT7D9frgWKgX6ZMc9pJyt1hQD8oNTBB%2BMXRV0aPufrY2Mz84%2FiklbWbzIx2esSJtqONHljWf%2BTaupZnpYhOC4fKGBuoIIYoQqw1oUHZKkcqi04zPb9nmYYm2VkrZTyQQgC%2FLUtOlbPyFkWvf7ez7DwWteoB2LKB7gxCZGXGyM5tj4zS4aj9grvlnhy6x01H0OHh0h8H1JgkXnK0m8ED0WRcdErsoOxzbRO0kiVc3Permc9rAkor60yYHnD4w4YXFyQY6pgE0l0Gn1j8mVI1oAosWvzYEMu4nCK0cwDAKwwEUUB9cZfOp0nutT3uo7hd5Po4sFEJcPkcmSCQ12Tjxl7z12ep8dT1x5Qy314S2Hf954%2FNdnSUzKLlr50o06jJF57g3vt7GTgZ0%2BDPtiuMVTD5MlhnCIZcd3jvzME1SJedV9vURiCwOnDLyV9Hf8sdbj%2BH2vuxPyfiLeHoIdxn95QSd7gaQQfqwf0os&X-Amz-Signature=6380f72171eb80c58bc032f3fc63fc517ed7ec7e515862d4b6b1d8b100eeffa6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

