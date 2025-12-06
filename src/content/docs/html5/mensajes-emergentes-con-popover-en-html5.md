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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWBKUGHN%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T104652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGajk%2FqwZgOBOAwjwfk%2BHGnhV9GESE2mbBp0qQvJ%2FfHRAiAQ%2FO5sAkeLg%2FgkUhvWARZih1TXKXuIQ23sHumEmRHCRCr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIMbLn9jRET4WcLCWS8KtwDSxH%2FzPPIAkP%2FYzVq2WxcpCoSBjnlk8E35vrCQwo89gCSP21y5Ecy%2BJ5MoX1%2B4yOXQg38SOdg1rf1b%2BQiLZthkXIP8iApDLlEs%2BVMcPdThHWOcDJgxwjne%2FSm4BioZ8B%2FKsTaJsoS2UGfw35R5zg7zTqZVPgH27VNDShElgHkLQ5OSrDtRiL115wBq7Ijcx8SPvtFjYB%2FcbWMpQbUqvTP0pQ96K3FpVwZhczPnmWY5t3oYEpirke7Db4g8HpWZJt377lhW5ylCJUGyozwVKtNpM6yu6Y8AaHj8awDA%2BF%2BHMgIiVdV1RH03Fg2YPz1sZ1p39DNT2yN7pN0UE3uNuX3Pvq9HX90%2Bdk5Z%2FBLwcTb0olhWDU5hvlGaDvqzZOLkiriP7lJMVXg%2FNHt6uWAXoRqGfrXeS7TKjQzmoUK1EnWbA377DQTczzM40a7HmNY%2BVuzRrAuSFdfzKi9o%2BmrwDFjhB9kNQR3uyL%2FD9%2FhSYJuVmR5LzE4BzQN39PJjqG5qWEmI%2FsHb6bGEx8wrkFBnCkNYqAG%2BfCMYjc9CimAcg%2Bg6fjuYLiIEf%2BNnpsEolGAXhXUTfF3%2B1H%2FPyrOZzyfuO6u7xUzbBFiPUOz5ufyvQiL4G6UPZsQE9%2FAKj92hV4wx4nQyQY6pgHuaBFVHP7nL%2BBgjbf8jR1%2FPrGRIVZxfnxKn2b7nMSNmuEquChcfToFWt5tBIgsEejbLmqOf7MI463bzJYcxXBPX54kzTLUkCVbvlu0BWCiM2KErRL09iX3wNdJn9TeEn4bcxZ8TlJSdO3VsK1ptOlKwuAkqyWcgPbBRoDwL5HyY3mJYJL4FCBMR%2F6a7W5MJosLOh9THbmCZVhkgpR%2B7XDBUb0thait&X-Amz-Signature=094a85bb3c58117b345d42ed3b73b2b56c211010b31a0a594e5b18cbc608a642&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IGK53TH%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T104652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE%2BzTUSDZXhJWhhS7BlLhIF73DgETwKLJwSTSil5iXdMAiA3Xhcyrdt5qaE4PmuT9HXDbTF3BHVClB%2BLNX35gZQwwyr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIMfIXL4Y%2FFxzyqE2oyKtwDDdOkS5iy%2BVxJONMu3DXMX57ZB5W0azgC0FoDO0xGLXPAgDIRWeGM3RU5Pl2ZrdMuI%2BPrvHqMVKHBLDWpUEEO8ypMlnEKOGXLrudyFeiuE4Nhez6KozvKL%2FjgB16yTshFApmZybKGxL1eGYa0Wic60HPmqHeL9za9szu4DtwPn7ddBY58AsD5F4R5LE8%2Fhz6s4VREPrfj%2FHKmAhHRXgmbBqAdlndnfOpGF4EVmQhMCFdZZlhhMPOeT1Jg2bJLByLQ6GEWJP7Rozm5%2FUJhT0TDvUnw7DP6vVw%2FZnvAIxtz3TfV0FmXdaDOR8jwUloyalFObMkcEWJJfMFoI0b5%2F8bGup8ZvOMVuH9fsBGIkcGr47OBKHF%2BPFvqBOLA%2B1zB4LRdKwv4GgAzLomcDipR2d3SVebHiMkZOsv46j2O8B6gDg3BOjTM2IcoOUlF75iEIxDd18Wu2WvBgNtvGgSDDECCV02AHjh2PxuxV91sqUAO5MdCCTEBHYmj8sWFqIdUMYKiR3a6JPQSr%2FiWIBFC7ghLap0QbLL9gx8k8KTn1UASg303%2F2aC4hHm5k31FuH0E2ySHtsjwMIdkP3TZKACs8uVv86PiL4DDt5RTwuvBfcD%2BHhnX23fO6jTc29GKE4wwYnQyQY6pgEQMJM4MdNhdlu%2FuUqlcRFrGm0TCnqGRrJVeeRsUdNjfT1HXcORCnlPBHIR4dhS4G%2FtHN6tTfzv4qPMAo8iZqJrZQ03FZCiK%2B5HCM8psi7aP5zdf9pF6NTF2jIo1lnBm5y5RTFPH44fa3%2BVfIdCx6ZnhqVi5IwzZ2W%2B9vVSe2IQxBaPdCYlMpCh2egrBa68C0%2BkVI0aPfFHlXFKlfmIpEHu5h7clww%2F&X-Amz-Signature=4e18a381a1f49ca8ca35c3bfcda8f1e9502fdc1acdd0c5e3cafdcb28af207046&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

