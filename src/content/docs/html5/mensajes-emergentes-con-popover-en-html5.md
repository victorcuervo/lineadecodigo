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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZF2QBV6A%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T195515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDptAVH6yYXvw3Rujo3CVQQcAqgbxKTpkEOutOWXNe%2BPgIhALG5DP5d7uFh%2BmiixJaam5BMUhtDS6L5c2aQclofZfinKv8DCHoQABoMNjM3NDIzMTgzODA1IgxrBK0qUavmkHKZ2coq3AM0E0hMQnfKd4cVl83st5HJ38%2FYVfU4HVVU8XVolsFlzsTQ0tNE7%2B40nUYiwrW4pznevMMxYyN1HRQXQ29E4%2FdNYWuc28pupwkIYxBIF2%2BnT6Wq7tEAafvt6kGywhvIDEw4rltgqzd9OgAe2zq4pAA07r91MblJS4pMbz07s3g0tJ6wM5KwI9LRRKs0e3Lwvy4hkuiox4fd2UxM3%2F2SLHhcLl0q9VQj%2FIWfZdCD7kEqUvi6uetnuPvNFM6TZe2k%2BaSmPiXTOVv0ezpDiJH8xc%2Fzgnx45pfPapOZMURbX8r53LkcTst6pVtMZIypJ%2F5iKeg1A7JMT802mKCJO2LgKnBx146BL8r%2FcPK%2BMNNiOMu%2BN36vBr0%2Bpf1wAVbXzsXS9otPc4wZqfrr8ax26vadrxSsf3AXexxNh42rlmZITtTL4QgNyEmQ6EhCLxUufec6YPcaLKaSOHH2JKblqeVvbDxDvmVNZ2V8I300qqfiF1vRwm4thyOEkzdDVrtbqrPVzU9EomYOdTcsdrHFosHCzY3X6YnshS48baEFO8oHLUin7RxQqoOd9TABDFsoFGPsq37y0YPdkLbYhT32L5WBQMFBVRM5rUGQTACIEpWs5WWvSi1dUrAApgUwPaX9TDCyx9HJBjqkAQotO9QJpp%2B2DQBU2xyPm%2FHv46kBpEviIlRjdM%2BOwYTq6JQPaVs%2FAD1k4FTMVG40nd8J3Cg0L%2B3OZzt1X878PIgmHa%2BFMtXDz2HQypmJZj3KGgLqp0qfdQkUO3UcD7NopdS16%2BiIpoNwxub3YHggRjnrA7Bn2uOKSnDibIcCCaPS1qTP02fDhOG0oBNI1zWKOUU2crdYqV%2F7PufibKNEC%2FwbxmFf&X-Amz-Signature=08ce8048c7a76c63a520ac48f10ddf54a95ebfdf3264ca66de8b09f1e78612ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZIJAHJK%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T195515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBhg10VQRMas6Y45OhqZCrv34X0dmT1mYCHgHLc2%2BSxpAiBV83OvqpaPvafZvOB1z29jbnwXNw50Vkjm35lBgu82lSr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMaE5x3%2BY9be%2FcWHxQKtwD6XY05p6lV55jsJ4YI5DC24eV%2FMWhha%2BPFWN2JDLHU2C%2BUWsGfnUwBlUUFr56%2BU2uF7v9MYoHg16fWofw0P8Ydjpe0XAvWECUf%2BfPwozv0t%2BGgaxQj%2FbOrZRfiuxcNtrl%2Fs%2F970f99HYIJMXO1AU6fS3W4Bw4t3o%2B5bqVGlpWKS83e4f%2F4IcFqk8xyWZlEDwxK2aimr%2FbNcCJfEamfZjRyaZ6Xx4U3FkJzven97T6yugO0Y8zTtGz2Pbzz8Bpb9R42I9%2BdD84hhTboWg73fhIrSrtkoLZzsG1qvYVViUmPLUq46ARLbvGo0fy0x%2F5q1OG88btFyqF%2FIs1qhjcN2e09Srfe73%2BxvfIOLSgjPlkSJqMZfTEUsNiy5XIJrZfBcMV%2FeU%2BOLhZw9QOwLvTOGDXOLPQLMqbmAMONLVOVss240qwbAvCN%2BB1GwOSczT5oONZUbZTi0iwG1qYQOXB9oV36TBay7Eu25cUGWYZEVOTdaPKPi5nEJ3VAMs1XZjZtuuINLS2Qg3aV%2B5ty7e2hnqihquPbl4pO%2Fv6b9d%2BcedfHDmW0vbW456cgbrPl4FodAPPVqtXmiXiCsHqZpvxy1htTpFUw7ZfrU0AwweyB9ilG7ExLtqeOmJuBqWoKTwwgMXRyQY6pgHBcRwny%2BKvGJi3Z9%2F4hNJuEivang1gn5XIe9Voif0b4O5T8bStE%2B4BnLBwmnKE6W7i7V1qyjW7wv3UbpchXBvKZnmPw%2Fw3jcoaE19OAisiax4lWNfUCV6bKcgsJclZEJPtU3zPTiUiyYPHLNh2sxiv5zqZoPAFG2oxmyrUygHBUGGt2jRnP9xX2i%2BAPY4K24PTt09sr7B%2B3MhI3BB6eoqtef0nnL%2FW&X-Amz-Signature=7428e9540561571c28018d1135346d8485589c772c08d31c65bb4145aadc8527&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

