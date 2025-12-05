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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTWMMBC5%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T001731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDeuH0eRdiekXnuH0qZPO9WPPdp8IoSYvV9S8wwbMnxAIhAKx0%2BBdij4yszxQjnDKWCt2hTabT6kgvfz3KrmJUS29WKv8DCE8QABoMNjM3NDIzMTgzODA1Igy3SHodustEDjh4qpQq3APlutZYRM3pZzvMfBT8cEbBO5ZLGfJSCF%2FYw2%2FEe4oC8BPT%2Fd9E9AlFR7xu%2BfSbP2JntI2ekpawkaayK8Y4o635aR%2Fyiyt89X3LAc6Vb8RMZdkYejjM%2BDlDW4YRDf2JGHvL58SiMfMXQR7EXk5hNyOhPSqCaMYODMJZ3lPb72RghMpmBHz6IYHLw7GICoPXKq94vlb9mK%2FqF7LpMN6Zo7XbAETbHfMQ65AiST84GrRUYFR6Xoa1QJeK%2BFtPmzQ3WDZaZgOuyH3lXdSHUunPs4dm65ZB3uYu%2FFbi6RdUHl9tQ8tkLc4vix%2B07vOwPN7a8Q6neXmFotySTgABYL7dSAS4rBHbIPrVmGBfIvOxG6P5wc2ZiWhi2rdQA5hKxVSSmqMgAebm%2BiMhhpMcVJvr0VTBFbqlC6fp%2BtmnGoDU6oZd07Llw%2Fx9JDKylxKR77%2FbuOG7QEtMgLJX3iglBiXE8HIWYnq2xHdwhEQN1A0gwWiSbsw6pSmRTPW6sJChX8JrZAujBX2ox8%2FcbpOtp59bt6r%2B1E1bwgvnl%2FhJVSvjmQdkMAdFzdNLYIJvFK1cu491nlt9Mk76c8YW%2Bebut5hnSHB0XgNedqZyQNyEuDm72SVdQVIxWqdc0W%2FDgM63czDQjMjJBjqkAcceYRMmhD5zkjFVMBBA0iUgs47U7%2FymB1zqlnESecAZ1fy1rEzuMo3jfTa3Lqscb1%2FUwWZK6R1MBweU%2F%2Ff4YhPx4lpccxAiQz43VUtpSUOcnQ2S2DvXo%2ByuyGoX5AX8iSRJD%2FxtRmKkuE%2BpYej%2BXPjW4eQ9Hd%2Fg1FxGf3zqSrnLg1OFxvArIjFZf7ujpAgFNJGuLCxpr75tZQSZsVHYNgohx6oR&X-Amz-Signature=15e4e19a8ab8caeaa01871ca5bb28cc4544942837f20dd1844950b45ea6fb845&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKGSX4KU%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T001731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwXtevQmZqdoGM974uG9w5ACZj7G%2Fz%2F796jfIzAKoX7QIgIsDrWMxxVlnJP0%2FuZ55IG4lmp6XJWXIAZomCUXbQD%2Fkq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDOMPsXBea8y%2FavKTMyrcAxFbhiI1S%2FYOUnr%2BZR5VCnfA6ssPVbZh3gNBLl%2Btf5na5K77m9CU3ythKmrmK8D4TCSxgKrmRAWMkr7E3HUijUMSl0%2B2X%2BJYZ2BZnrplU3Tt909bCuANMsZSM36Q9ZK3JvCI%2FR7TODVDTu8uLFXL%2B08ZXd7NLz%2FQjDTWCXg6ZjyzbaQ84sOXixDpCdP944J82BdrEvN3qhDqew0QPaie5OofkpLudnaRVosNEwjygY2uTBzpESiWUIsULMotkjpapG16XjLyNQSFe0LH1u95FKkzoXN7zp0JPtmdvwcQxuVe%2FDzSwxBnlmLr%2BxzHk3yRLuZrRqeij49qtkxFxNkDIWstIym54x6R9ly%2F2lMG6zohtpnc1JYfqp7Pf7%2FV2eK50Y6Wu5hO91nMOU5MGxEPHFTB8NM90%2Fa41uWPQ67zTOe7lLTzi17BbUJdHo83PHe83vVUjqFgTDnKqGqjb1Us9Va2ZE%2FevuHGSpXibulLQhm9uxPE82zNUZpEdTmuesCCYDTJDkHmaAr2VIDi9R4Yccd1a1u9CkO6Oa%2Fu9XLPTUuws2RoZn7hDtm9ige%2FXetUA2OkcXe%2BtMNx0sjaRtmkargsg1Z7gk4dFwsE6t24Z5O%2BCUK%2BtPC%2F5Kj4CjXEMNaMyMkGOqUBMlyo3VC%2FC3l8RlJNFzK7FBCsvqaxkoTy2WbVag6kzCcbv%2BJv%2Fz0AvgsbxEDJXCWhs5zPxY07HBlZfffWGKW%2FjtiElOu2OcDvQyY%2BHyBG5xotQCwaGmQfGeyq23vVgXAu5UnTJPGarqPzd1U%2FfEt%2B9Q5q2hPfBCG1t8hwpUYUYd%2Bpun7yeFb0cr4tbrvFTuNsaf09Ltq4F7GICOZ1Z7Upjn01FBjm&X-Amz-Signature=4abbb93c8fbc8068d08e40a577eb03a19a4e569cd26624156c6e41bd923ed51e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

