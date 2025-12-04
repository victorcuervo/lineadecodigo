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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFSC2PCE%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T145448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQC8AALG968zMV50QH3QvfDX3g23frf24%2FlPNSBVLBor0AIhAMMy679HbDwPi5UieT8X7vtfz82Xa33M6eCmgjBlxWFXKv8DCEgQABoMNjM3NDIzMTgzODA1IgwZe55kxdyZtFQhwDMq3AOHLtRjU%2BC6sIpfJLT1ZNG%2F7h4RkxWGOw4rOwtfzaHjWOPFVH9GR02E3GeYq5s9FRDDoRQdhLWdFlkqt3Bs%2Fd4%2FSeo14Tx8AB7y7d3mypTNiCEWOx3qm9RyjS0PgLLGBxMWvFrDuzaZDMVS7tUNdcxLq98f5icK4ARo1EKgG%2FIDbxgqrQVbpBuHqNf5R%2FF9RM3Tap%2B5U33XboIrn1TeHOl%2B5NjgcN4d4Vl2pkShXtfORPwH1d8MmmRM55qusTGdITydetuEogJ3aTrdmdS7XJJiiLWFW0urmNY9e60ZL7nQWt1ObvM8e2nK8TE4bxLwrCqB2cGS4oanOvR4MZP1Z7XkQ8bfeFjDTkdSpyXDpLWPyEEeXId6uzcOCJIAbO6gijNpEKTMzm7qvl7OwhizyU6jUKKAOZiq1cIlo6ph8K2YK59gCCf65fZ4FX3iLtYHPfdVfLvXjGawKD8%2BJcslShG1fye6uvN0z6EmEjGbSlCIW4uVkYNwGQRBrGE5JJWB6toRictyRzD3pMYdtP518hwUxiwG8sm6FmZFGpajMDhlynLj8KZBzAP14VOrzpN9xCWStNGDwqRMcdmA0kA64oX%2BUWWmDAzIG9kAcvz%2BTukeQOlJByA2h%2BBq5zVWSDCav8bJBjqkAWz0IbLE15aJASrYy4I7VY5bj%2FFG2bhbbtyXjZoxku9YB0YzTDB0YbAFT5f4ZwG11m7TibyHLh0zvJEHeusBGstjXxQgK%2F2b7oW3s6yqFUnqWenEnO%2FCbwpmNAXduSnnZwPffxI1VH9rNCNAUEoUYFyyZzjz%2BwHhKkkFlbCX6wz7eU8TS6rSRU82QvI1PBVY3eRNMB3mxiwRSHolGh4MohCkra2d&X-Amz-Signature=4391b506973119c8dab29ff4f38460272bddadfd2ed137a93ff1de906126f6af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JAR2HPQ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T145448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJGMEQCIHxVkNEsBOMxJXFRg4sp6YDQ0aLbG5TSgzobHAjxI2G0AiBtgrZe7W5yxGxxKV1T58Tz72a%2BDrMNWBcn7Sj1s48jdir%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMBqnL0NYOKmSknE41KtwDuOvRJq0vu%2FeCJ6nFFLQ4kkASXsQaJxR8R24hmQUHWvpSToADLsiysTVqzGuNmyNnAPV3FFThOiCVcWU6tSMnCaQXWS3PYClIBUQ1dgbWVoKaJonLqawnOvpSSK9YhoewTT6X3t4jCqG1l7lt7TdNpT2hmOeqlY5j6Crp8mRfaEWK7Sqq1%2BEigLCC6M2jW%2B4uVoQlBnTBtA1cAuoCmkSFfwUZmBpxkR4U1G2V%2F292LySxQ%2BaPwRqxsNl%2BGJ2r7%2FLnF022DvC3MACNI0lFTN1AUeU73%2FXxrXfMTX%2FoNUQs4XP85XwvS8IIWXOoXFQp9FHQ24IDkYNCLP7gXDh%2FotG8oF7TSNR%2FnJ0BSFyVk4zsxEXMqrffnq65b3lrAvbN8PTpjG%2BZcPLxCu6ZMWspxR%2FiXto9qwMq98PDDpeNlEm9kj1neTOPu1l%2BdxA%2F7Q%2FRxvdvBm3QTWXoNXvym3bvpLMV3n8xs1vo15Bb4zvzcWDIv%2FrHpsaNfyEq6Vy9ugqc4FfOXDmavf2b2bNmEUGdnSOb0gTZgRpvF98IJ4RmXbtdnqXbKd2bSQWzolIYY0stYvjt39vPNkki9uIOTvZMDOXUmhlEV%2Fk7%2BR5ikLGQ5ReG9g%2B1JWiEVB9rbJXCtKwwtL7GyQY6pgGlqq%2F7hFm4pyf0dfX0ps%2BZCakCDidk1U5Lw1xiV9ckBuxsMMYeZQprbhKjJ%2FWlbgn%2FELRPusnv8sbq9enLamiLLXAncVSIErNLGKsO%2F%2Bi0Q4ieeiqWVhecoRa79dv%2F6X1A8%2B1VhaQlLidZM44GBvXkCvYLuKEeaALa%2FODS3fnwrQUMLocgpXPXU7q1I3%2FyU9C2GF6KzmvjYrRORrY%2B75sddZrqKX%2Fd&X-Amz-Signature=9eaa57e5c29d24629845c356c2220f2be17905123031292ce3a6e0e3e9be8bf4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

