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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMA2Q3AV%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T155510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQa5o6bBDUoMKJlWUrFSHML1gEcBuyKWAJk6dfsgSBUgIhAP4TYFFw9QyRpHdz4gBkL%2BZqPF4i0W5MjJj%2F14qdO1NxKv8DCEkQABoMNjM3NDIzMTgzODA1Igx5O40TKcZoHPgfapcq3AP3%2FyW3g7%2FJf%2FwGGm5jr16oHiCDC7ly8tlBDWboI3YSl6V8Z5fAlJai%2BhWU9Rztm7e6jcRkRTxV58dk2WfbEPiRdBi8DEb2W7L0ygl2OljINaglPfYV2suWLHCx71daDOui5NgLVhEemcLUmt5DQslYJqHse8XrweTYTCImoKgrFCBdt2FXeIsK1phiT%2Bo1Lv8pwNmCcv0ZmWHUJwkPeuvxaTvgOTjlNfvv1r41%2B15uDu1crnJzli96J2YCL0U4cvmDmFUPwW9%2FK4OjxaQAc4mgB%2BNb%2FQNPYmI3k%2Bat0snRbU%2BAnXUVp4%2FK7poRT8EDGZCPds8wO0Ns6DwGnNCb4lbgIsA0fh4ndNZbBgmcSu1o7Y8fuEVD5moGh%2F6EVdoNaxnxlQA6%2FGGi2Df1mLQJgB5LupewZO49i8c8B%2F5yAX0b%2BiF2P87I8qFZlAyYvTnJl%2BoyOb9qR1r2eD7CNO%2FCLJEP0AtjaWlEz0s3NSm%2FzpPeMxFCU5QvzAkPIRzvKuWVcC0Sg6z1Tud%2BkthggrQpvvTfUJEeR7dhWDoIAw3q3NXhuloOlehac0iaXx99iVDunfnASbhKMkwFdOkJuy5qFJ6BbyUMdSycH9gLoMxhuT73ZFEZ2ITIMGBb0Yv0wTC%2F3MbJBjqkATfslGVD4I99gbKWge9eHnUbrRbN6VJLzD%2BbjAMJBaaOXoWoXUBy9I618EMblvm09KQDcAYgF1LT87cXwAk34LGpb4Pn8VlO4g6MhgDcI7OkStHoe1pl385%2FDxf9zWqdeA2%2BQNTdrZ7jbiFaivXVkFJ3SVjQ8exdMy%2BMF24NtRHoq9EQ9xaNTVfEqXHxcJdt0gOkG9CfvDD%2F%2F2DkvTWTsdwo3ddd&X-Amz-Signature=9a6d0dad1447b11070dd6b3ee186eea36ef676d420fa07a87f291819b5d4039d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2FF4TSB%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T155510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCI4citXnMRDLfZ9lorD2mMviX%2B45OJ9ryaXuz5fcagBgIgQaYdwN5en2H4ZKuYnMZt1moBj2k6U2XPRr499Fc%2Fk38q%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDLcMgKbmYX2SWmsRsCrcA5u%2B5SrFvJm7zsMa4rkpBt%2B8aXOXmRGa1K0Ksa9ulWsamYzBfDyrgpvHhgmV5RbCzUkmOuuNZXIPFZkCspty6w61YLpLvscYil7cCRTXPBptpUQmHABFLgr%2F4dIFEWqv0jOeTnLGBDgS%2Bo%2BNBHArXnmh8ah22fcC1tOaNjM5bh%2BVNUizwmYBXIzNctqoBZzfzEH3b4Fa4hIOu2v9G6mRtwyv3r6rMXabzx3WOO1sXlpl8%2F%2F%2F%2FQ5WJ52yt%2BxiQDSRWie1ieBweq0arqm5U2BbKGk1OxVGdn%2BJCqOgu3bU54ZX4z2S2womVpwTvANq3HJ%2FDXllNS7rGdeGv6f3WzwKAvxjbKwxmyjFfNUYvmDLLUmR54HdeEnfW4JDRLRedrqQ2Lm1ec8PXRGoXJaMBMAwsUKXEMnSSwGzkIpZ%2FGRHn7NSE6J7R9S6e1uO7cCtxHQd1zVUYkLhvqf4flbnT1Ec%2BUVmHctf0MLoVbtQZtnVnBiRrl3ww48bFD9W81WsotkyXDft%2FyqEYE3HBpFsck8%2FhAACcLRVWWA9YmivKrtvofHZDs2vV3akHPjSeMAfMLDq4KnSZE0r%2Fw%2FgKF1xEKIGmYAmDMhWBC1DjTc7Xp1D4CXb%2Fb%2BsbHVvlk5JUtG5MKrcxskGOqUBa3syryWRPHGJ8nI188Bk%2BPq2AdUuNQ9qn00agM6h6JQ01weM0Hnt6lPRUIpTUokK40RHKQTAxJeJxY4FUCDuI%2FpqV7EI26I0tJ91bub%2FCTsSyzFnHMNpodOiG%2F%2F6gaFqxd7vj0p%2FSJws6wN2RxWLQIXdsRyRonwu3wtT1mIX0Zem1n9EKFpVXlvx%2FVBzFnqGSNnEDLYUqeZB5dn3pUDwqJGvtUFA&X-Amz-Signature=64c87210a0b50cf6a59633d59d4ca0b712e48db131c12c080b585b7cf9a6909a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

