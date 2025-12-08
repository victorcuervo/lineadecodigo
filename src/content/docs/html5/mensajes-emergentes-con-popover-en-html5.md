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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3S3PW7F%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T063810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQFpvBLVs5A5Ury5dWrVGPJkp8QwPkmG9EAmKWtvAFIwIhAOScTKIEKV0p7LBe9HGrpbbK5KBCxpd2ZHhODLaFCDDNKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw6FTdBB2677y7vmfgq3APxNB%2BMela2Nmo9wSTP6qK5pdaxq%2BFGnL2GL5JeTaUfDVol8KAjXGzr9kH7oZVPn0rTNAImBhs2wMZDP%2BEREmqjGe%2FGEgWcqeMwUSKbb8Nhe6DgHLA2aAFfdD13lBvaUkMqptyYVngS%2B8QgMeW3r%2BlyDd411KW%2Fv36Wn78NvV%2B2S6w4XOrK5lZrMyYBr%2FUfbvEB6HdP%2F%2BNtQ6AryLLYtNB%2BpkvZUqI7shETXoypsXkFA8IPukvLnyXq1Kf11b3cvYit2ygRjZ9IRhVd23ti%2BU%2BesaMuW5KG7VOpri9DiEj%2Ft5GjK5uTi%2Fx8TDa4jj7qwLGk6dr1drXulmY8DHYo%2FYdRIthR390VwszNA1CQnPeMV%2FuZ4Ya%2BctaI%2F36fEp6aBPvqfTEmzRUbnDz2lepyCRSIlGjsp0vAkDuiihiNZg%2BzLlPsZPXVU5muRW4Cqn6v9s6TUT%2BsRXt9LXXav%2Fs28kC%2FKHChPldlOGHEALqvA9G1S20vX8CC8YHnAD0oPac3RIUfMFiFjCiDN1FYWbRsHaA%2FcGTxdgjfXi84TxC9thw2Y%2FQVSUVqBF2l1s6bFMpnl2Ui0RCxcfONFHL3r4wVughCjBR%2F8SfFmsU%2B%2FL9TtxBNI0BQ%2FFnAtCu3b2lGLDCR0dnJBjqkAXXT11%2BulNBqp0Ytcpa%2BiqFQurSzCeE2%2Bfgv2Ey2tAj8aY%2BeLQDuSYNhlgipYvgGrgK58azJyz1iUFZdhLAeuPnLMiyolW3o5HN5JFxJlwxnCYbJD2GffluWRya7HuJEReXjenBccVOqo57Oh%2B1RKo1tIHkg0LbldMfaNHC6Jg%2F9fPGrca71Z%2B0Kj%2Flb6wocEP2M8Gj3QccCWMD%2B%2FKXCcoVj8tjg&X-Amz-Signature=a8b71aa814324b028ae3061c5534248b6ef290802b4640111fb00ae6fef42ead&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KBEZE36%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T063810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCkPOqecipRKSCWkAyvziTCQcMnUQkK9L2IKR1tzceEgQIgd5%2Fn%2FXEgErWHiFfMuOJc%2BD2tZftuYIlOyR8gTdIviF0qiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLZxD7rAHik1GaxwtircA3KRoTZYaSpFjdpDDI9XABhbvFFQI%2FzSI5ihpRmwQkwyVFiWwiZTuGepsdxl6M3vM0Xo6XPVhrqVtj0IWPAuYL3jye6lAx90MNRR3tY6Gc002wxADZWyzyim65HAxs%2B07rCtMvMUWKJHjZ%2BuIvbyISQaSncy2Cgc20vpBq83UXmvkPO4vARvPgxm%2ByZdtzL%2B8Tg5%2FmU2LKXrtqIpCQ3Y%2F2UhgF2ATs5nep%2Fu5vwrEusMNxz2jqjPwAe0RYK2x3uNkruNM69U261PfkYKLf5QFriVOOVo3eBAx2KMEIBsJqHqeHVQ5dcjA8jv13BE3Ch0bcbSvTIh7ONFTHZPKfUs5VpjOaOwBkwqtwtnC4gjVrCYOdidrocTTUkn3ZAM7YsYr1wWcL%2FGL%2B4Xx5Y9VxNvpMX1Prd%2BQolieVzwK95rLbwHAdAcFtX%2FSlr%2FnP2Ay%2BI%2B4LDQGbeRo2jA%2B9QXFYMn6F5HxtlGRHGt1LyF31qv8f9PmHwfwTMLJ5H0MApyk6eQqsqyEdMHx0b5Gzkdd%2BFXHzVEMmb%2Bcd7h6qeRJ7rGEAi6XDkElMVaSR%2B7lpigzEtl4W5u6Oa7TaQFIBMoSffrasrSfROzT6s54RE3T1dklG9Ql5wZMcoxnUhg9QhVML3P2ckGOqUBHsRSwSbwOhd2b%2BrsdINNMPx5aMuacOTeEV1wkwyXxiHtxfEkE7z1TeffN7sqNrdpb1XqmEKsxrcz8hI2kl4FsC2eiHA5qImr1L4PeUNdpi4oNXQJgJeT2w7P%2BlJ2bJ1icXFj9TEFfYbwO7WWaJqm9a%2FlIL9HdTfSsUgcuyYgfthuWystFFJLz09f2RCjZIqTZC3ZQ0W3pxEK312LpVqJpPtT2oqU&X-Amz-Signature=0f33a6f8aac9460654955d0f55a649b0bf17b950acb32f61dc2b35cd5d2ba9c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

