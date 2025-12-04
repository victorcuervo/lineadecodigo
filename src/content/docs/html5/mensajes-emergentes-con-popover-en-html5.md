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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TOEAMRA%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T061318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQD9kPXGOlS4aBcOfhE0wReH0hi9tvkPB0RC09tRjdFPOAIgVtuefTGbRHXQqdME%2FbvnwPFt3SbUN9NHCOgY1pxlO4Yq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDDcYzALVjYC01Sv1RSrcA%2FUXekaD%2Bypigm9dgR3saGQVUefK1A2Plg2gTagVgWstQkUEJ1pnLKS3bhMz8vEUnxGvyadVZwLvuIHFpSmDOAb6JwDr3zF%2F4eyl1WelMO85cgeSQ%2BbNz8I6ZVRP3sr0XDfzsa0bIeyDOKBg9I0PpSRrzUXHVRwpRjRYOq1ryKCUJV1jjJQRNjxvrRTlV1UDSXLJfyZ0Rc2Me598ZLFzL3%2Bz57r%2FaBrQHRhjy0N8HrhWng4eCw6rMNxBdAa0eGVWl6P%2FZDY08%2FuU3UCKasC9wh0SFGM10nwABBeVbomsPSTEh67sW73OROCEHiKs8M9VbOYfnf308ZAiTCexSLZCkJdU5HQvreJYXRAj1OHDn7%2Boc9qCwHZfYG5aixxoU%2Fudi%2BJoCyjxokvmDTlidpWbN9HW8LW%2BZFPVbXA704nQmbfXm1ei64QqboARzzHN7H%2FzpK24dANUcg5rIikCPVcF3ZR448mR5ePsjN0xh4wGqw7HEgoIzT8wKROo1Vxi0jbxJKB2nQnoLZ6hpbXrqhpLqg01lI8GAhJ4zdHweZi5dazIar9YGeL%2FvEX6B8Z8UjYGjJykqthlV%2BtC25AygPK2a8u8YlUvD4pKd89yORPrCZVeq%2BKwydIrDr9ocd%2FDMLHKxMkGOqUBr0otKc88xloTaSF806ODAQkct%2FOOtTsM%2FILOD2LRpp%2Bb6ih6P0ihqDvV7RcbZzz2h9liPN3Sb12Jn2fen3QD6IZDKddbD75qGmdZn%2BPKYohJdeaBmCeDO%2B78OZfmkYLjLIOEjN3NoVzC%2FHHfSw7jAOQVj9iT96vGeH5ebMQx52ws%2B4Enc5fvFQgAEme4JPjdz1gCP6iE4SaADFLGSHAp5KKhyjdM&X-Amz-Signature=f4e60821d7e06c106ad4e8bea0a084588c7cc1de3d5af6bfe9c9b6f6a251f96d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LAM33L3%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T061318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQD%2F9RfI0TBIrIGSXHlSVEG1O0DmAj2wyxunq7y6BvN3fwIhANPTeQ9vSNJZU27gRU9MqoCgyouWlvparwSeqRrj3qFNKv8DCD8QABoMNjM3NDIzMTgzODA1IgyQrM5m%2FVU%2FzfrsZuAq3AMA7nF%2B2IWF4Co622IKpbcf99sfoyind%2FqU6bC2XQi75olA1DVGYIPTuHXNWNPzks44LK3U6qlVM06%2F4YIbG6Yd991UOaQpWAcLqZ%2B5EK7epo2yNUfto8cecePF%2BqArmjp6Uy2u286Qp%2BBX29bCoABqTCUTlgQ0UmyjYYTX3dqt1byt1QDzM7n9qT97G084Y9dcKZ5ujCxuEYB%2BTScae5j%2BDuyjwc4wbyGh9rJ%2BZv9ONe21HL8hs42RI%2F9LKifi%2F3JKBXSc9kz%2Fzzfk0jce1oPLeZ4nOC4K0zF0MFD6wLiQKsNEuVv7225YkrVKsKSDRURmUPCuLU2fdI5BOFP7kXC1Yf83V40mE6tx6p8w9Ocyc%2BINQBHeZOD0wwq9z9KM61JkLGdCtHcDT6MWVZMDQCaDHkRkRX1jLV%2FXzorvAtzOpXxcOlJKaQSS%2BBWwF%2BjKbSoJnq10KjJZfiLWuj9iJxjwiW8WQs5NM0Mzs79KcQJ0yCgkgjkoJz%2BA%2FK9iBk3S%2FSVfg%2FTW5VR7fXjs34hwuNWe9gYGmvX6wiy0fGrcqvoiqgozCyutLWHDn%2FljI2HOQWcSk0F0fDetanVwKsD20LdJxwCkrtytZbuEpq4gqvoJHUew%2FYKCLFtDLZ%2FAcTDNy8TJBjqkAUZLMC5mdeBacBPX%2BEnmmZSit%2Ffq3CjE6qI17Elv%2FI3WiFVCHeyhM18wRIR0cf2fS%2BQsNcjQVIlfEwbCtcEVUyRPATFGCgwvPAF%2FzPAPVk4v6s6jTXEXjR8F7G0GyJRaa%2Fnhq1cHlyzkBTot2aD3lnRZaGtSp4HAyzPFFX7QFS7T8NBr75Fg%2FAMJJ7B6M0wwxKhpZM9FRX1dXgrfqcTzAC5dS8mp&X-Amz-Signature=531ae6e1e4afc74521eacdb1dceb3696cad23dc38cc4e31bb512fa3d18ac260d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

