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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLNXJXIQ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T212724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDe1K3KhlGT9fdn1I%2F72nHlwDfSWfuMFQeBdiC3Jg71fAiEAlw%2FEcLnsJaKi80g25HCSYk4jy%2FwyRmifR1lvaLRNe5Eq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDOTkz5YfrQhqGVIgNircAxQHTQkV87Z9Dnxtm9CmJkHAKGHoIBiA97itglfR%2FPwMoJGJz0vSwNQaz6BryRlj6ptpl9bH%2B6gtoRR4Tizf73NwlRcxkeAo0so0K3QajeT3gYiZrqlBPpkI7b53VVoEhiN5yp7k1exWsdZ8YzlLFuD0Bch8afhbQuTrW9OAwpnR2d0B8Tzh4YEdkO8KWeOV7aS3%2BpcC%2FiVg3yIEENvpw%2ByLpCkXlYhcQNGT5JcI2B4LE63KNokFD5RdMp1M3lucv9nhXEvhvRRrjDtvM0DZYq%2BDiJteJy9h1u0PDmgqGQfFlp9tKWX6Jb2RgWvQ5meXNPE7ISsseWvB7yvM1twTPQ38I2g7tBF5n5k3%2FnjrhZmnhBATziBSlvlL%2Bf2uVoz94OZfOnAOI2T1eMgwgl%2BVom2g%2Fo4Im6K9BXwIK2R95r%2FRybftD%2BFu2rb3WBJZQo%2BYVWjxZKVSD847M6YK8bqkbHe0yYR1DH34laK6%2FjcW4fhVbOKJtcoHKJ02iC88TvzvIGdvu6cpR4iBWdIu6r5hNyUTthx3DuBfirhj06vcYdGDrK3IjkqXviYDoVjTlj5io88qMfL%2BauMmu3VzeTIq6UFuFBi998bmbgdirTvjCB2ihkVYneGmLRqTnb3sMMeQzckGOqUB%2BuwKKc77B7rejT32gI0l0WSLiylUonKKnVN31L1mkrG0ucSnp19spOVSG8%2FE2S0gASxAmtgSjQ%2BUqDp0WEaYa2zNku0wdg9KZ0z1WPTYwvYxQAfZcLupjAOmjuiVIsC1%2B3yiYvG527tfjpCf8Q5kbz%2BP06155UGzNF0qGShXLYyspDGI3VqMTY8boEVcmB6YeunXTkpQD95FahBlnrlYCcKkbp6O&X-Amz-Signature=0942e67ff0c4a1e0397b770f9996668767964545007a69d36768f848d3eba3e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNLSMXMM%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T212724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2F0MZ8P7X0HieMWqJYHB62xrvXdYQKLIKQ6TYmr%2B4dQAiEAtpuftjGaADbqO585lVTgaWOZcofEkoNzCv%2BGUji%2Bxacq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDLglFnQOlWDAZNW%2FPCrcA317y8DOqz7yO1okugY976j97ZcpXy2gQN7D%2FFM99xZ%2FqKxIzYa%2BylgMnGzRvTZCCH1UKWOAzT0F%2FHBbWFNt5Nj0yFa8TIqxZASUpWOJOI1V6Vp6bg5ayc%2BA%2BVb%2BmHWXgwBpH11fWmD%2Bc1%2Be5jKSH1FqXRGaDd5yQwbDde59ZSL73bDNE%2Fe%2FBZC%2B3FUh%2FPdIX5OnxmSDza5g2%2FW3z1gUs%2FyO6Icm55Zqfnebl6g35qYFfz0etm02Rt57lioUpTH1%2Bh6CUMeJ6n8tkR4QFbxjwQ4I7v17icRdOYfKX3UOB7cnEB%2BG6tS8hh16RUK2oC3iE3hCFo43SCMwtI7QYJ%2FXMfgcLjzjd17REMl14VW91iLViYFx4XkMLwuQuFJciykRBBV50BZp6f3SinMi5nPtrTpUKSsL0QnTIN2wFprgbGT53Wc%2FDBZXjEEQ7LgZlQ0CHbQLkXJew4sU%2BdcL7ql2oGoJZzJwet8AcKI%2Fex5lAggxb1nPh5oKRPLLlni%2FR%2BKopp5kzc%2FCU33P0zPsspkFCgwNuA1aeP9JdZKKCwzTGOV3J3T072yvK43%2F4cJdHZPsonm1gy8RmzRhCXUutcQa9z1S2zx4PGLArjfRtai%2FQ8DcxnLgVZ67kXomqT79MOmAzckGOqUBtkSzSiMAp%2BQksAodborORpjoFy6fMPDUeX7cg7oW7XUFwl9AyDcHqMq5NVgRQuETRgaIc5JY6x%2F4SgmL9vI2NcyuCKIbC7x03ceQtv4NcKzGykPwb%2FNmiDIsAsThI5CSPuQjqVi5CofGv3q2pkT2xiZhV1GV5%2FVz1ru%2FoQwrmvHXLfFFA%2BfkcS5YTOtF397LKnNnUJDVEfgX9JWF4K5uIPutZX9y&X-Amz-Signature=15a16160880f5d23390fb192eeb841b1ee2d6e628e29336738e6124416eb1823&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

