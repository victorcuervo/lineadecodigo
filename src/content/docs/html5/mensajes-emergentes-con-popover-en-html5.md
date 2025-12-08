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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EKWITCF%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T115653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHCoyn%2Fa1y%2Bz0xElViAcQQ24Mv2gOOt3c9RiqtH1xc%2BEAiEA7IQn%2BVr4RILyoCyLEAtkDuNny%2F0W0THmoS9hDyPM8PIqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO7esnnUT80LwLYFpircA2dDPX24VNsRfvFDfA0vu26QS%2FTk7BDnAVjVRs7F5AQ28E%2FbLGwB644bb%2BFPxLvmy8jBqqSWty3hNVQxZqffvpYsX%2B4Fud%2BFJn%2BNmuq%2FEVKcvGzhLQI%2FuLVfrw%2F0Ei9Sop3VNR%2FWK9PadPcphRlhpjDOhQQGCbUTC32jevPNlu9gEiX7C%2BDDrUoARq7wT5uq51VebWwuiJgiIa2EVdTKXC3CDoeH9nUtNtCQrOOB7XXjA1D6wrknUZfeACx24dqJ5VkAarGQNciKYZoFe3fPdLALQdCOOKbYkECMQX3EmA937BFc2UHucxTpn77JO%2BFio82Nznw2uM%2BNW3LGnal5c7Nq61dGVj%2Bf9DFEuVqnIovMD5397zyQ8zT46D%2FmVdJt1%2FrXp40Em9xh7KWjxZmuxCT6k8Gq2Cxq6Dk22BUaLKrQRNi%2FqdPpB%2Fsgvk2bz8lf8tAqZeXVN%2B0r3s4mEtuv9NVs%2Fvncf%2B7TVhbdN%2FrytWwpismKlxU0FIJRe3r%2BP6JRTsojjLuLL%2B9FFmleJOAJj6XWMfDidMoF53kC3A7TqXMD8tFDcIzCiD56Zij6KlxGqXrsNagAflycJTgOUUFqtaB6YcYryvze10SnltU9oXI8illVYCg%2FjmPYmUKBMP%2Fy2skGOqUBoY3RGk2EG%2Fq0m4QbjOBgXcYOZJtcRq4IMoCEKFlVv0%2FVgx78740GdNCNxCZkjcxzpCfHK%2Fu%2Ft3%2F%2B0Jg6pj59wO3mLS9x%2FQr2dCk6lw6yYqQDv7JbeGS033DAz49wbcXeDYlPQZ774Zjuj6IgyhI4r%2FouufO5%2BjpJkJev3o5HOf0giS%2BziUwgvCtLynuwrS3jAGgkT4BgrSH4ft2EUWqxGATH1wqv&X-Amz-Signature=3d830ea5d0265ec8d3e6345a34755cc5af62199f8ec728e5a2fa55127a251344&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STIPWU4E%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T115653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCudvcEw7lBVE4cxcH1Kv44713Quih2geyBK4aPzOo3HgIhAOnXN8Awaq2i8sjhDRcHLj0qOYgRW%2F9Pfh4d7%2BuO5Q%2FRKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzciZ%2BEP7b8hQq7GaIq3ANMXI6m9grpgwkytPce0gFLCJyE6QyEiGW%2Bmn2BT%2BhK4LJkcluGxzs8sZnFYW2pXh%2BVNfVUDKR0zZASvqG40I%2F917fgP%2Bl4PQJP1Coyxiltr9zvOOC0%2FubrfLvzx7VmSOryUacdHPEsXUO%2BHXI0o7Yf1JGt5GMzw3L91OITLZ60KZnnB7kY1ScuUOW4A1jTcxJdeqrB6JajS1%2FbL1kh6U1H8nqV2RmZDETYDdGbcbcrsepLaBEdNM71Gk1BIGxs74517dfA3M%2FCxmJJXnrVsfKFQ8AQ0xN9cEZcLKwqVkzrhWN6HtGKwH3sn%2Bdee3qcyBn06jGs9jyJH%2BlgqZn76nZq5GHfePfUmQih2EBt%2FRAjSKba2lJTtgtB96VEtyvmTuM55D1fGK3BBMmYltgT4KVBVibTj4aSKP3ti1%2BLHAUg7jHrdHOo0ADmc35ShQxReIaHEGicpHpGLMrHHkEaJWPoOzAFwiLHIa3X8xt4JkPaRdV6bCNwslA9dfczTNC6I00HQmnUi5t1tfGrjUK369RIGTQs8dccEf4c0Iva6wjsbLHrtw6B36a03ykVbiuabhITw7GeMklJivsiLUxTPYmVWjpjMOhB4yXpTZ%2BlpjPFYdjh94xHPxxct1yw3TCX89rJBjqkAa2SgjnNQe61JH48%2BtiXY7HR0451gdkp%2FNEIuTAPKfMYj4wvhbBrHQcRsAT2oyCVMo6Ho%2F4GIvNM0oHFArg8jZPwIf5iXXc7TKibRQd0aw8YhE%2B5LMxLJSRNAwiChNRhIt0kI9ah5GI2p5VCU3MqxRstR3iaS0ZiTHNVgaxNcxHOJEVN1u3i0AsxdrqBXCqBR0eFJCHuulCmnF1%2Fup1j6zDzyde6&X-Amz-Signature=80519847be074c9ea8289124cec0214d654dd135bf89752159160cc5065bf6a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

