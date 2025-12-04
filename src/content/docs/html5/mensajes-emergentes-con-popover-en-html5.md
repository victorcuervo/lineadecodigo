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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665X2ENIF5%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T064657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQCgMKGsOpNlr6zHLBMRIRnA7aJdNMW6%2Fa0aWrCjLbV2PwIhANTL%2Fsy6zPktIJTpRe3Kcx%2FLEwpUQjI%2BF7XsRKRmGabGKv8DCD8QABoMNjM3NDIzMTgzODA1Igw6ohYNzA02K%2FPTvCwq3AO1%2BGwHad3e0Jdjwl%2FAqjPdTBh7ksJFK4s8FktUqAQleUZrpievmg00%2F2yp9Hdd1RERzKFie%2F2vrRwKiXUHLxFFHJ3AtIF1wKZTBwGXZK16sCJlnjVpoosFktxEhtkzIVYSucnbrNpJYF0uRhIYq5GrVdsQXt7whGIZnJy8m2J1FsLuZhKLlOvuv%2FyXY%2Bh6STNZHl43NpDTl2mLz1bfOuiIyBENzyiqJmT35OrZUU%2BmBZgKEAgkSg4tZcp5h9Ra%2FBFyUQ3z1aRx4Hzz3k%2Ff2MmnBnNcEWdzEFWkhFHnIvfdsUW041jDm8qZnISLZNaGCWC%2FF%2FQvqjpU3XKHM5azgrNBI1wpcpIPsOgIU%2BoqRdfxIUvRsw5f%2FdbqQs78ZdI3pKWZPBqPOWwt31lfGe2zjsvpdYzM81KsvYaJy0QZb7hI4ObfkjFL8FBY3%2Fw4R8gggxsR6R5xFRKXCispkLdrwjjBNf2b%2BpDgzZW14Ua%2BF0qIOQzI5%2Fzbg9IszGZ4uhonlcYagZmBtUCa%2F7g7OJjm7XVoI%2BhuPH4QCxq6UfQjrx7Y%2ByOM6ZOr50Btf7QnWM5waO%2F7grcl5dUwlq%2B%2BiWRAMRy6dd0P2kp02ZGAqXAwM6gPqhdrUexpu7sOBUBlGTCNy8TJBjqkAfFu1c%2FLBJEIIb%2FToCE7PZzXlpYowdfdDeB%2B4Hu6NTxofZNr1%2FfAcXiIWkeE4kOSZkqq6Vr%2Bl9yp0eBrU7GHc6NdSLkC%2B3dZ6bKbqgSbzcojptPSKelcD8LDvQACOfeIIsRK92C6HAsAsy%2BwlMdZGdkgPe1zL5vP2VhiX1Cldl1W%2FesMZpSRkHVnbh2xdBSD%2F7%2FkNoNKjmtBWXt0ZfD9n7MlHhek&X-Amz-Signature=012d7b9fb7e63a0b3bfd64033d331bc09da6446ff6d56f4afc1a3dda711b8a69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIV4MV5B%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T064657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIHNdhMODSHlL1b3oSlTsqQEJxujfSCnhgX9GHgFlCbriAiEAjE6KM74WBZ4F2gwW2Mc0CGkT6W5Hl%2B7a2QgBnZZWBlMq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDD%2BWlsVmL3stXog7lSrcA9jRJLcFjsTGXP4cgdqaquP2Yh5EqeTcWT1O1OHklqKjijplXxhPaUhvyMD1hPKJpPJLqM3ovPC86qtMUgyJfglly%2BnfpP4nVfLtLJezluSkuJbBrVe1JUZWLyk2irwDhmO7APcvOQl2FNd%2BoIvjt%2B4eD9YXEohOCd18wdEkSAQdHL1b8IdWHJuACsezjGp71wrTVX7zeZq7UQB29ayqxbeFx3cmHKIGmweemf9zt1DpGL3JU7MbBE4HOcKGgdZotlWNx7D5kfV2Jd9YFYv5iM4D4dAEKNv5oCbtpjMacw%2Fa8aiPTp%2Fte%2FhSSzZb7QlVNYEGWhOJVk7MPPQhRjaZ%2BExtEaH1hYvnC%2BRpBOZ5cOAc4Dtfuxh9UbpOxH9n2k%2F3gufsjW2nwmzlLJ5m3NglgGXpfXqE3Lu0VM3E4KcAXtnUDOorx24uek%2Fe7IOw20UTtqPXXGEg8zAbxNcjIEhe%2FQWJ7GS9r1tZ7drsLu5%2BYMIv0CWTzVivgYRfsXw3I3pS3%2BxlL8Q%2Bd5%2FxusYHnovf1xLzLUi3EUe838LUxNait913S59ijvfgsH%2B9i3QRBx37IDdREi6etQ8Y%2BWtld26l4yQJTRPsc%2B3FLIKYIExYM0p28Kil2RxvvrKjZ09tMN7MxMkGOqUBSq%2FAwWA8Bh4uwN8k01vXGmgM2LtHSKBKmkkrBJxR8ijt5cIq8YWymBmPjxbUfHRErH%2BxHOLNNoCckueu8qa%2BA0TMjzssRui3C0LQc%2B38YcPeoXV52pnquLG9rnFVryn46v5D0wD4%2BPHEiatA%2FPl8pWIv%2FU0lmG%2BhpvAd5IdylLwxRsJNn%2Bom8oTt1LC2I4Euw1tUnBQUH3OJhOWuoy%2By7y7DdwsX&X-Amz-Signature=e455991229b368a8dee27a7926cfc9f107fb339b2e50b2f65873b2bbc9f294c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

