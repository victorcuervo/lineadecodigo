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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UZZ63TP%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T232904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDY4uBfI6kOfn7WCosnUqmWGo942YTecHMK5nfXANiyawIgGe4w6I%2FVqc0%2FiXMhqCN70hM%2F4js2vSL4J9y%2B%2BCSOnHsq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDGg4dpml4WbRCsJMoSrcA23s2CeMVovyB4fzOgqylTFIEYUZwNExJKAfkNSY%2BR6C8QIEcifynKsk5NMH7hv%2BEeUtDvgyDkLJ0mQwg6nsjGM2jMvB%2FurGaA1hB23yhJUFB%2F1ABegQSR1lATMiTCRNi%2BwS8HEee6hStVJHDShexb7EgkPggrZWpmK9WR6jqa%2BubE7yvBv8dD49ITqRhKuAtYWs7EWCmv3Um%2FCa1G50zY2bzfJs4qDFfQWqSd0ONaHU5lnOlEwEPzhm2qnmWPfV%2FV%2FejZj5nWRB9ErIRfMun0aUq08K6QxKR4MrwsU0ARjdSN6IogGoxWXnwYBxS15Hvt3U7vDRa46tmIqrV4GWdGsMREKg5JFNU8wC5BflwLAmW8QGN1pkQ2y68739GGQXKdUkIbWpXETc2TSImT55EmrI2oqnjUqwOEbHW4oaS2Y9gz3pGZhMsWJx8dih6HgPqc4WhcGETSonrWWibC0pmXwdE4Q9RdcrBld2bJST00Aby0azoG5o5%2BTUkQmC5D22AtSd4a2CAYyIrbUnVZhY5eLsocuXo7i7%2F9XSUafbhWLYYdxVD00u6Iu%2FF4%2FTiSOEeDIlI6Tb4wr8rKE5cwPe6QgCRh6Q%2F%2FF9pzpCCHqX8LnIUvC%2BmqGaYc08qW4pMKbGzckGOqUBKK8Ro8QcXQYWqytZJOvdvrmHDm%2Fww3jEdJs50k0Aw%2B7CO%2FIZhupHVNNEa37EG2zoHT%2FynT%2Bl6HFL5e00ED5za%2B%2BbmF4%2Fu6z1xzY6njxKx%2BCjysgO3O1Xjr%2FdouM0am0TajSyDp1SJzJi5oXKU6aTBi4fr0tmDW6G5X1xm%2FWKtN5lf8e4L0crlhjOualXY2EBDnVmZEacqZMstz2z7sEgAempdliD&X-Amz-Signature=afe20fe4cf956e035350c2e3affcbfbbbd8d5ea51130b689603fbd6bd2c6e977&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOXGBXFV%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T232903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEhLdLxz2v7UK6R9jiImYaO9xFE89lr8nWwxK2x8MuxXAiB5VWAlHiHPSN9qBiA1udC24C%2FTIWpPFOqaUDQjDLJlhSr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIM%2Bn1zUlFJTMu7gtpmKtwDOgyv%2B%2B6kLssKavA3tG1MdLRoZPHoRE8ZyP%2FX2jNMHkI8ZtdUHVPialedUFGupzbSPlHKgsmYOm7mEV9I8%2ByAfa15UzczBDmjmQqUqlY9QAqdDsrHyZQG5NsR56LGwdiNCvdxioXjepZ3HN6X6BHPwgxfXKjkd3xjYTi4e0Ma2jmqZcGV%2FRV2eovkzP6q0DU4BTOu%2Buy%2FnjcPcb2XPLdAtnc3%2BOi%2F%2Fb%2BO8l9FLP8zX%2B4hIr6IeuCSxgzHbyaCjXj7llcT2Uwh9Lh7fbS5M8xipAi3kG%2Bw%2BVyvyTZliOuqN1G0Gfja3ICeouMjR7k4xLNTmcGrQRfRrcNfJQDpjq7gsb5jxU5l2TU7Z5Y1Axs6qbTJ9bilEAZFmMd571LIWM%2F1jySUJO%2Bu%2B4wC%2Fe%2BUy96tFQHqV7%2BbrGGE2%2BRTdhDm4ZvrBixpyVrlOKCffkZIlmdSoLlZWw0J0MYvkJTsFEgNqIC23EEpvmztCoedXjh58bui2nKNlPk1pJNIl7D1CnDJUK%2BWLIL8Bw2TiefPnhIyhRelGFf2NtpQLPJAvqubojsGx4HuCsXjqE9b3bvrXi0eTxcC3UKcnNu71QI%2BF2iK1j2j0JSIffOr9ozdmuI0N32lq313q1higpuXiMQwlMbNyQY6pgFealiLGItnFOiPbROu8J4JWk2JuDuzCn1V1jGND6PMeRHWUJr5Q1KRU8jQGIEifs24ThknG6OTMUEwf%2BxfeHkytwV1O6M3N3GOL1fJ%2FH4sNqk6szggJdN2M88tPccwK8FEjkDA7bCRtLPrKAR9EPBy5v9wBo%2FOxmn3to0my7cPfVI10uqoiWv9GVnQmqFdDTb8fqIis%2BG42FSTwbxXvMipfhs6u0bR&X-Amz-Signature=3e5a44d5f1c9c96cca237d02dd8f3c59b4a6e70ce824b976d77eecae46c94303&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

