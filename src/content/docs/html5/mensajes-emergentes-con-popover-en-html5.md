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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WK66EXAC%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T112119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID%2FVK4Sj4obJ2nWnaxgymAcxvIZxCCwxrZK7oqIWkUteAiEA6ULUJn0rr%2Bxw5ZudieDQXIBFVhGUd5%2Fn2zDOeuWIz3sq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDB9f%2FHElPDgdDQoxACrcA5Xh%2F16jZjdV0byVwTQQGg%2F5eD%2Bkg47BXPruuDxSPxUXcbFkFCcV20FZ3AdcrFRiwtD1GHay3Y5DRprWv5yzSBs0baeshoIfp%2FqrOc6jR5d%2Bn0WX%2Fv7ejIbhNIzA8Kyon3jG5Vqaph2DevqmkvjVrC1ZbaHvG3m%2F%2FKdAbysaqpukqMq0YP0diqmdSMf3xfpbBKJqKg6DAlFMv8VCLvxDT2dB13HhmZEPIwDlFj%2BobkG77u9eqOTD6MnD%2Bn7XFbyx26rZFra3EJpkcKFiDxYqBOQ9ZLWFqYbvrAo8HtghIcF2vodIwisWx0nkkeqyfRiZ77EdS9d52%2FNPvHcm5W%2FPkWlNDmz8uiGpPkNhrzPkIcxoRACthEaBplwF4%2BWnoGGAvnc9eUL6roFzA4jSFmGtAO06M4Fn55rB45bPf0Cqj9dFKEJveUXu6nIXF7zqHGrmNlyDILPlIku4Lekv%2Bvz%2F5MQIh6Md7N%2BD50p%2BYVVh1VJItzBYhfMkPvb%2Bk7nUjrMvQQCWuzSblV7kEe%2FeLsP4Fe9rSZjAe%2F9feCx%2FDXribaXxg5dcV2hfE5itvmTzEJ5LTKUFG3sEFjZyTE30n%2Bv5LfjBoD0qaCbxSlMTRHBgA1wB3FFbVBoAVCVYJ0PEMJPKyskGOqUBI54g0MyrYzEaoqLtk52Q76IV3ZidezulnUcsu7hqJl2Id%2BUK7AC9tZreioO1nohnVbi%2B1EoMb%2FFPCPICz0T%2FVbYiu2COOqL5Z0QiNbYOApHqk9yT5WbrQ5%2BbBsS6G34jIEYmK0RTIqbWvIlIE6rrwX5L62O69SuJKI4z1x94Uir1oCRs0FDOJAzjmKoFkW7KwpA35XtbEKCPdMv34STSie2j%2BXnf&X-Amz-Signature=08f4d704579f9bf513fd944cdebb7fa9da1929c52c768f2c03a9d5a2f114240f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVRUO2SU%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T112119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4FRVrQKTdLGzvMBE7jUh5L0egnZaHui9%2Fe9Srvk9yUwIgbTNdeqBdw%2FTLDu5dxMmdb8ywolg8BrsgM4ovmorHqtMq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDCb6hE197%2FGKk%2FySJCrcA0zggiNgAhDKVwU039dVcz2BMhe5CFW9VlTCHti9wXhkTL5O%2FecrAj0%2BRAZfuIFdB35rzPw45iZWjMJCk1L7UDeWg4KsM78X%2Bfu6q6TsdbCD0nZOR8oaVPawZzs9nMnf4VRy0Yq%2Fk0QjU96hUVBQTWVezmjITWDaNjj6TwEqsSP50SAgYfIcEfLXuOvTvUifzJRTS05%2Fb3JZ0oNtRW%2Bd%2BiJ3AW%2BYBinftHqKip1tmLnj99dQJ2z3ritpYy5wA1pi5hhCX2HFk%2Ft5Wq5wp7Sg7W8%2BVY33%2FX1%2Bh%2FM86Wyg9rj2hsab3lz7gFyWklw%2FVCHZFk9yd2r90EBJ9%2BMzGfsDb62yPL%2ForxvAiONFmWbQ6JLSOswevc49PXYoPuCq6lh%2BTXRXzRbBx%2FpxvAEWIdSXKXdyYm0kascftzcrL3mOesA%2FXO3HZfNH918JpXd8IEh2GkcTuTDJkn1RM9IGHL4d18rB3%2Fj1hfr4qhu7AWborMgWCSOT0C22oWI1AxzqEYUsDslQa7IFU%2FgQuhiLNF4d5vyFNoroqMeSIMJvv8mwU8Wfl1H%2FpWRoQjTzocUjznDpbGU7LKeA2h06VWES6qkH7exvRYzHImAim7YO4IK6A3t91Z%2BDPss8HL1J5COvMNLAyskGOqUBIYRRQOcr5DDr178z3mpk15PsO%2BMbUmLnVkUc5oaDWr7O%2FUswaNbAGmd3uJDWMlOxpW3zt7KiFeaBQA3tW64LeywWnytVgg19Jn7rGfic79YrrrUDjQ0KImmoLcGb3mRldeDc2ezt4O889UIZyNAtYbgkB2pUgvuYJafvNlZW6P4aEvhYaVWj9SW5ySAOjeqXtP4oeeouRM%2BAz7tLn1eK1NMjt81d&X-Amz-Signature=d809fb912893d6dae214bd1d67669828e9c43e72be69d81e373a264076f58db8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

