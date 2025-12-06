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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HNSLNIQ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T084736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIN%2BddBzIZIpncYIO5SDkseaFE%2Bfv5sUzEypviSY0qJQIgTTIFuHuTopMjL0Wu80ZtkQWRnBVeAuHGhoPO3pnDwUIq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDHIrZoGUSg0YRpkEcyrcA%2BeqQ9t2%2FEfjYD9gsAlwaXG9g%2BUkSVNddP3u9hicyxfgaYwExdJ2jTqOT8dKbwbFv8LAzMtXLn9DGACYpNDHSce8mWOlH447TzXh2AOtb96R7SNJYUPmBx2Ndhx2j0RW8I0jS6Q8n%2BYUOGJ3uh%2B1CljKPo1RkVA4v%2BEf1lxQMDodPwkC7bb5rmWXIl8FmJ%2FA03xV0TceXU2KmgcBeXxfBCsKblO0%2BJ9VXeeVEdCHCyhvkJ3T5vcd%2FlVEkXZU1Ivlj7kO8x1gmXqLnYoQD4LAnqWG2Mp776%2FaHMqwq4O7sAWhFpzOpewpLyyjcRj%2F3TmEeEHWe4nwwiJitlHCL8x5yvBBmgcodSs0TuaomXzvdW7404wr%2BBVNEDfyTU%2FY%2F3qHUUm7NMw%2BQFz7CxLHjMNhofXnHlf9cK1%2F5ne%2BdFTnbPEh3ea3GJ3k95F4MzwxVUzZi%2FvtV5BIo%2FodAf7mFIpSD%2Br7COtL3EIHYC39IbImrRoH10M5opyB47p7irb78Oz3AVwTCPL84ynjNiWVaKZPYEDmFMpAFAipGO6hBothCL%2B33r1v36rKMlt6vPBwK7ZviJDsHFriOOeaZ0jppg06huy2IHLMGYsr1libxvhlvVFCsGQVxbFrDSgqwbpYMMC8z8kGOqUBH8CW5jYc9xJ2pfcBi1IK5a6vAHvLc2W6GCOYv%2BZm0R%2FFfXBrXCBr7rhZJEHyQ15c8w5jBX1sHHa4TpHxZxNwWMym47e%2FjCa0mAmltggJuY5fyl75cZ%2FKST80NUNQRtyqwgTGy6Mabx7uXfGKyzlkSxE5FZWbUungTq2vuojxQSoKQ%2By9YbFOiIeX%2Fb8EL6ZqfxP68cd2t8tqS%2F8oqXs35IiQv6v0&X-Amz-Signature=77c96c142b887a3b844b5cab59c117dd45c231cefa853f083cba27a6a043c3ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFSXSADR%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T084735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDPvG%2BA79u%2F2XMKBARY%2FuTrMyR7sSf4AGV49IBe25d8fAiEAzoxTiPDEAB4HHwcC3pQahVo%2BNOEEO3drwRMcd3lwNikq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDFsLmFifs7zIiLmgWCrcA58VIE610%2B03XZOoBxUd7CIWWoVltvak4zoASXGWAUn0By1gep73CTUc6C%2BIxpZrbMIQVA8IEw9HKh1yiyxgy%2F1PVSJqgQz87Hzls821vO2KpAG5tWn3UOloKLMBWP3TEYrrgHSgN3NTHdiwiXn3vi9MOsQCXo4NEVZxq%2Fr%2FO6jdIJV0hGKxbluz9fyf5oSItxrSzFeB7SY%2FHpYJPKMd86Wz27kJUP%2B3X7MuYKRJpt8AeQe3LV34EDvwGoNHMSvR%2FIFCEINKqNJImR39QxQLMdbJuBubqLoFz955EjojvUZY%2Bnl42%2BgPtzqKn%2Fd%2Bwf6xqlMgdQl%2FNXoN6Sry6IGIIV4AnIhO9xuuGw7QWJhy1cIJ7RSyDVJH2TKQRF7iE8uKTMsC7%2B5blTi7Tc1%2FJdCeOVdaYyrFsV9LbYXFVUbd6wYKX3yGwMtzl9%2FFzysMXMLHHPYruKMImJN%2FbKoWKNz3O%2FefjovTgkm5uiFWgRcKwdxyVD6U8LAYeAtuDEPIAvduXCvgLYfXdDbmf44OXHjxCBkOgeCC8QVIPa6nf5u6YT5SbbExiQoe%2B6Hl9z4KsYiI2hTU1B7mmNwG6IppLsVs%2BFDdopiS4XER2QZ%2FjOi8HjbK3NOwGQiQnLAWFPsiMIu8z8kGOqUB%2BEI1zYURZADS3VB5zYhz5k4WEY0RkIXWQ7%2BybKNkkcKZJ9MLYT6OUaBpLIajCB2mO4pD0vDfaIpDbRUaLmHp6HKFw%2BwhtwKNqevRK8R4ptMWKr8dZqxO8DAWEAIjoHjjS6LdMrCEbeosYbiU0mKLm4HVowxYhS1I%2Ftpn4q3hv7jtyfws4qc8kMNmjaSce59VvDdwCJ405MpUCl%2FBjkbAG07ig%2Bu0&X-Amz-Signature=74b4c2a0c5c053acf094ec27bfef6fea0d0ade38d9bf5f4e8304fcbe6cf49020&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

