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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QRNUFZV%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T123406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpg3Aq%2FjItWIjRMvbr3mcY3EnKAiYbv%2FVzSP1ivfH2NwIgYFAg7joqpFaZLh%2B9GDNLXgHnkgtB%2FS4iRcDU4REQgP0q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDJ4ps696iKAuB%2F5LuSrcA%2BXO3XRz5HbgmdqeplTvA%2FxFV1%2BJbhV3XLX5lhnZvTzlg%2F3clZKmdZ%2B7EB%2BmP755Ww50HGLz4LIhIwG%2B%2FGDSGEHkONaWmohCnisFC8XBeig0B8zKyIQz8N5ZzccmQU3Ttdhs%2F1iXWdh0SLl03QMlXqk1tG0gg%2BJ6NmBAEJv2tT5HwMT7YSXCFRhSPHNy8npjWdl1zwlbt5aZkgPzv5ypu92I20a5oJU5%2B%2Fe4UwHklRYUc1VYPOxHMfzhhPtM7CZCLAwFb7ZttZ3NKkxeX%2F5twxovD%2FM5hgY92FrUIsodsLT9nhNC9ichfXX9EtVPTCoqLP6nCvbnDQacOJchwAIQLiJAJ5LlFSyZvZs0%2BFWOOEwXq%2BPPKCpKgD20kZvWEJLfUvTjbF8pAvu5gmn0nKaaXBzjcF4eFvFVTvXcE2Cr2ILCSwmoQ2RVEFs2U8BSwsHAuXfrrCmX35Cemd0FcyXJdMsY4qguWJXgUdTGL4vFSQ%2BQ2xxK4yFLKb%2Ffai%2Fp5r27WI%2B1ZJH48gr%2FbsqkYRNcZvejZAS8OcT6btnkqsVNOARXgLtM3DIA3oQUVf5CcW0I4VY7OJgJbC50h18pRpbEVVL0DpNkdVgZXA9c2PxwB0pSGKwON%2BTP%2BmNdM2ndMM2m0MkGOqUB6EnyexGqGDJmQS0Vayig4%2FNa%2F1q%2FEgTCyHjFvaUgxHzbtwmQDkP7QlDw6vZ7x3wlSGfDgaB8WDGUs8srIMHGyhbtBLQoC8y6%2BT1AwCAnDrNM7ze8sojPVsD1rpT60VwyNWysSH3fHaa0vfu8rZmGfiOXfBarTMkGWEv0GA3MChvRTky%2FBh58QRX3FDwZNAhzGvRrFrN6EH8UnIxOCHmJaregfp4X&X-Amz-Signature=f7a82a22e88902ebf001f05919edf00d05b9acb3fa231a0e0d61b88d8e9226ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCLTGJKT%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T123406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICPP2%2FOHnRnP37WT1ZcZghGZ20Md1ADsyBa1gfJ%2B1qCgAiEAygl718IR6iFDbeSPmJV%2B4jJNu%2FL7uHVYVf6Nt8ty%2BnMq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDCc9W1IjvxUNxjAb6yrcA3KRnAmg0r4utAbiQ7eBqbkOTxrV8GlxuZVvJOgmaKs%2F8zLaYd2aku%2BciLmeMP%2BLA96URNe3UQTtck%2BYMmkyf%2ByEtGhZnX22VerXW4FWI6hTq59lRelpyQmfOH3X5VDy2inRQg%2B5cn2E3cd6PouRgXJ6zhDOMISAxjfT5e3FYfAtItgDDMK1PFakMahNmAuwCSVVfto84Lsn1H%2Fbjcdv9hC%2BDkFoQz5uC2dRHpd02JGVfv7HTMaxhK79qohZ4ZoCdfzvT3dZ5L0iNgCh1hG2vBRXD34VXJMThHeWqIL%2Fhc6Wwte53QiMw81yfoPZ%2FKFg4AZ%2BdjODekBgU15h%2BsozhwNtnYG%2F5XAZtV7%2FPRXv%2BAw%2FrQlE69nbOF9OU4Ip6YJdtwuKkueYvBH68%2FopVB0eHg2J%2Fgsy%2FBpUiOLlvTSFX6T2Rc5GWjGOYUlq4BDYWNXBSTCcexrq56Trv8skQFoC4Na79nK0VpK5eLPo%2B%2Bk5XOr%2F2aTWMjqNWu0GSGVIj4Da7UH0AAZO%2FC4g4iLCaucb1xWavSpZ27NDiCltr5eqxvoTwRY2o5Lda2PJtHsRWJJ%2F4t9%2FhevkMtl60NskJmEHCysYcAXvM8%2FAJ6FfaK50Mqy9YXtBC1bzZ6PmbS%2F8MKim0MkGOqUBEbKfIWpO79TrocgFoQao3QKTvBLUHm6rp3ahTQMnacLD2enufUmQjXDE9Nuv40LA9wBmtDsA62vbKZU131Xj24PBPiBBS98cpdUhhVgL3p2tWgGFAF5b43lEQfN3fE5p6e%2FOTwnat2K1rCulWwj69bcvMyI3vkB9g3pKvZZVkuFbmwiA38IzpUmnPCms6Bmt2g8KOV0ObJTfphpMz5ByRcek%2FBAJ&X-Amz-Signature=e8c0e1c3ec4498bfc309b46cd7b11fdb860376698fc943f09145d690d730657a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

