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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WK2GBPJW%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T112820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2BkUJCdef9txVD9WHkZrNMGgsCkaQ9Md09AxtuqoLLeAIgPdcspK20VXTrPk03Co2IHDVuBzJp5bTc4Q%2BJefyUSrAq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDCdGHtfH7vsv%2FoF8JircA9G3YNyysaVKnkklAN3j590geTBSLXUaxVZi%2FoTmmanqgnaRWnSnHKniQoKPaL%2FKoqEgTAf64UESUmpo4r9OVIYRkyqdICjTa5qjmIlT8pc%2FY7gxzo4DQYv5yvVfsVktev9w416CulyVI%2BIuIDlR3AEpGb%2F0L1i6qxEhPTPY8hKi46Ar2Uw6817FoU39Ux2llYyP1AuxzsUK0H6zq9iNICVkAeOkhxEhf3pDSAF5ncNGxuph5wbt1pFvdSAHni970r12OeEqY9VIepYu2so1RM3X9da1MIqVWKCfVK4tYOCoLiaVWrOs2xqGTbQbRE1xfYyDzOBbkUcyGMWAjz3YNSowYx2HeG6vTOKeP7RyZMoZbilwYxou3lgipK05poMV%2F9o3KkEk7tzOt2Y%2FW1V2ADSEr8pbWaSRA75sWGtk8%2F1wMgKEI9cPtP%2FDMcww8ijmj%2FZ8pSi62AcNryV6OQ8yXv6OI7ev0YwzKUhd5PAnf9L%2Bw3MUm4nvI7NLy0f%2BNLjDjwgvYrPzsD3s1oPEROFBsQXtJDUkCD%2BpiWFx4vqbd89qr%2FH6cbSt5Cp4lP%2BLAogK3xWcNFVTLzt72WZBlSLFt%2FOlR5NwuAbLD%2BhssGjFPkWUl%2FGz0wQ82Nn3QCIMMLW%2FyskGOqUBOx0bO5yF8P3sr1cKXRpZtZ7GTERzd1Ocw9wX1kO0phetcWxEwg0IYMf6F%2FQlq02R8NgHG3C9TCPgkUSrxJecEYNsOJKxkK9sHj0%2BH6ltdpxcemGQbgG2d7LJWk6mHigq%2FPez6dP2AjYpzvk4gtRjyofOdZxXGnVur6slcuZvoR%2BcNKoJPjYu3vLKp2sB5kAS%2BWY7MWvocK%2BjcMXchKFYMaT1ROw4&X-Amz-Signature=7f11d757b6789c0ff731f60073502dcc651979cc0cc9b9980b1c4a3ffc5756d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZF5F6TV%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T112820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEAOic%2BCl0xlNErV4nqEyj1XlodknW9Z4NxpcICI%2BhSIAiAxkLJipKIkeNQVxA%2ByiKWX7454YG%2BzgkGwIBtW%2FsIRaSr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIM0CYFO8sRadIpXZjkKtwDbU07mKgOqF1lKMN5a0%2BJBQKLN1nLHDDWo4qivhl6R26Zy2qf7b2PwVlWicF56l0TeQhFFij0xeh%2F2TGuA0lOH9zwwg0a545jqBboZgo38IDBQTU8fTUV8oVdwsxMDTX%2FLRlTCar6Md%2FQOEhgh1QmT3jms0n%2Ft39QG85CSz0aENZcryMeGA2YmUloxmVZL5R9F2CEl2qO7M3INaSqTa83SWqWLuWwsTrefNdOxYnnrJL3b0cfwhMPrTb5aBR%2BCpxMSrPGfwLC5LTvwDY9S%2BYWvazrUdQi0sjpQv9Zk6y3n1zXWE8hGJkipEDqqVA4RBOnS9BseN7nPrK7oVWQ9kZj%2Fll%2FPC3KZA%2FbwP9XnQMYU94n7IeAzP1Ow8KQ2Shv52sR%2Fqv8w4CHZtPAObsttVzoeZjwdF7xRgAJacHzLt9%2FKWQ52zO%2BaIZIr2hUri3l%2FoZnI7LpX3bLncK42C97IA%2BJ8ROgTLJoufUO1ZVa3tZRr2LeDeOPuLZjaXVic0WA37UpJlmzsq8tZfbCqbI9rc0jP7IcSu2q209LP%2BxdnqWD1%2ByaAtbTtLCE8ZNXeta6rtv1MIZlyCLLEwppQFohtkVy7VGNNv5UkLFxd4H1cUGcJmSlRtDj5cpk%2Fs9TQN0wh9DKyQY6pgHrFOatsATN2beGSj89Cdgm11k1cJQwQmgbM8qiS8M0tJMIwYGvowYmhuJ4zU0FBUK1NZY0nJKo9sv8MTWyxELpkTeOI%2B12f2zcR%2BKvhpDky6xMvTH9y2KHIW7Hg1SfPeVLeX5iVvKyyBC5yhpdySOPNq5yJHYl7SuF4UCE3a5MLZgEgO7HisiojtTZyAOVgu6KP9X3qo4y4VPHS3JbZu%2FsLl%2FJ5bOH&X-Amz-Signature=94b40d55abe942686b4f1161b87c4b07497d39fb73ae928c4b93b1aec4e4f43d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

