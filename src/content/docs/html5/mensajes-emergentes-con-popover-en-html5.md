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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMJEI5Q3%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T090213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCivgylwvMg3YJ4sniJKMiAfrJVHEvxQuwo6ethy%2B5eMAIhAIslX6CwiRkltscaS5j4rs03aAUfkiligkNM4uQC4Q6LKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyPr%2Fo%2BmEXC%2BTzj2Rgq3AM3FoCePG4fSdfIp3VOEkxyK9lKBsBVhtvxTsXm%2Frucjapau8GT3BP8tX8Mly3SF%2FIa6fwEaVvOkOGXk%2FcTtmMDjc9qa5pdug30cy0dM%2B0eciHxUCVW1RRNSDvQHSWMUKialcLKz73YbZ3DC4ku4nz9Qe8kksHfVKWXotfRqdRnofmo%2Fu3XYlc1B0zEj87GQF5y6yf6brOQ9RJqM9FDPHukjegaahveIFnJK78k2erttEXRl9nP2toUt6qaQCeDfZoPhXRLeGOZE42dCT1u6F2HrFfui0ObMlez6w5J9XG63uNPQFF1kGxlqx9SQV5evR7Uq%2BI5LnpcQhjqoZMu3bJAw%2FIMqFJlCZN2PnZ3kEgSObHDiUrlGt%2BzLycVIDN6dCecyR5n72u%2FNJfDng1yZtyheake5ZwMshDVOmTgHpe2mP2f230EMddjTc4CVYnFhTFeMdkyvj5bibh8tDOSyEmX1cXQqczVsLga7INkUUuzrqJ3vs%2FAFHtN53DWuT5efPF5st%2FU%2FQpQ5tFWzRKKmrvDQ6NhXUJ7mNKGA7G5iasUzjzCupVInT44Iu4G1fN1wIyKsKKpeI7guf0wv1TL2mGzmZwzsXQ1iuA%2FnJ2zTow6tuniNqlNAtEm%2BrQbWDCh7dnJBjqkATk8zzuB50SEsPv38ZukM7nVbI7VyMYnzcMs%2F8%2FR3VsbueBi8MeTxUBvHVYZOHGIa0LqgBvn%2BHDsngJf34IEyeUc9yecpP3id7Q4TpPNB6UmTqW%2Fe%2FsUz9ni5NBC4ZN3DtfY0FZANZqRHca6lOY%2Br6Lcin9jbWG1nhs4Pxhm3sFtyJpF5KlpLu4Q%2FQBSuMxRYlnawUfwNr7bJJ5rBEZ8d7t7oOFm&X-Amz-Signature=7781f0f7b691f20d9f82f3d00de0e449d0706932885fe44c8e5c686b6e410031&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RD3B6BMV%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T090211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGea%2FVsIuzgICYHDyv8pb97ejnJUw8boNqGD7ysxtKqoAiEAnN%2FlxmbsSdlDFSW%2Bxs0NM62xU%2B4LPKvl1vZDcRHVshQqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAJkr68kUEcx4FMzwCrcA7JVpACPL8VXDRF4cZWa%2FlIDqIUt8%2FKs5165YbiwqlJwwPa26E53N%2BV%2FSYtrDMl0AnXRsRoPNZVMmDcdbx4Ys0a%2BXTwgGxmANkG4u3t7RguCGlpHwACqbNgZ%2FX6EccU%2B95Qq4th%2BIKj7nCovsBLjXUPskI3MhjLwgBvDi4sKIR2nORyFcsqfc6WSbYpG2hG%2FmQH4%2FDn5iufoOhC%2B6FDruMROPwKFxUs3zapUkwU7GGKI7B2JrSYv93dIy19PJKk%2BavdKhBYJarngTuDet3NoibMGtMioXULZZT6khE0fKFtpD2pLR6xEPoFbUnLlbc6yZCM1X6fMdHT9XyMD4ZTYRY4ES3WzfSJeuRlCOOPeyvze2%2BuuGa3DQMHEYRU9hRsg8Y4CTi4aZF5S8bqhCW%2Ffh1Vv5UdZNaES6NQvDjh%2BMKekUpH9r4x8D65Qv3z7CZjVfBYqKLKCUXL12ITp2qRqQ0OKs%2B3L3V4aMZq7KypDG2fo2F47UpBBjsAySOUIv1XlROcrsseyZ8n4lxuEY3eN1sIw9nxGmyhVG7kwafdknGx0DE%2BYtanceT9RX57R4RFJM2EV8SZ4Ku9i3QxitnAIkN6us4ny9ssVfBUoIR2D%2FaCmX%2B1xaIcuM0GgU%2FtBMKjt2ckGOqUBJowukNPz35xBvYjgCfRoUh4tFanqCUaj3S5BDO6KvTrxFw9r0lEpcwJD8K5MZ5f7o9iZ0GL6XGp3n01%2FeSoYtH7ZPbqnyhybDO4NDqU2WqAgW6OxY477TWYEjXUyLm5L%2BR9Pn6sb%2FTysFCH9hMWldSHUR%2BL9mxgke3GDmndxqTr04AOtUEVy3WIxa3s4oaxOwRJLVveU1Fud3zOwId5djTiu39Wx&X-Amz-Signature=ffb21c83976aef0faa232f78db4639b3a58fa719a6a54f3df8785aa7e9ff3994&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

