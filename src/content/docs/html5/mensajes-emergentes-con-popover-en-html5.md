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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZWMJWEZ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T201454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGNssxYIZS%2BFszWVMckBn7n%2B1s3OtbDMRTP0MCdA89AhAiBXqENrIKqDBm%2B%2F%2F2eWQowdpABrTqSLwSY7zNI%2Bmjw7jyr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMB7TOvfrQ4sH%2Fi5odKtwDb6aWRbLzx%2BsXiJRFD0zw%2Bnkc7494GoMCgnBd6Gwe%2BrSCgjcZc2ymn5lLGUG9WKpHpE8vWNpIVjtgmGxblAWsEzA31%2F7LM4cYpiFUXG93aQ5NDR0Ynex0e%2BWp3IFOwzOHvSnDwtXBUzHZg0ZKPeJ6gNtHe%2BNtGjfyZzOxccBuj0reyI2RFvV4l8KCmo88Jzo22zNdm24ioNuuSzHM1S3xyCeTYRCtohTsZHUhVJszLFHI%2F3h%2Fz3s27COuEcu1lCY6ID4LaQvFvCAxkvsZu2oY6JgKBo%2FNuItR8G0OWDowZlVxtVTed6JGtppu%2FqzDusGg2jznUh53xNJui%2FUaRKnZyajrSh0nqVCktBAwsU7PcWcI2EY340rnJ0FHVmRGf8%2FPsETXRDIQQ8TKmf3UtX5n2Ri%2F02svQraTQ9TnvFKDbdRF8dSUKCN7YhlFQGcbhCuOTNC%2FrecATHduNt3TQSjrAd%2F4XiQguTKnKBN3P82pCi8ss94H048opQW4X92Mo79K73dx%2FE%2BTBdkg4eGV1gN%2FAjf6r3FaR3UpbVL8HGhXWNf4iiWDzB6oTCITluXM91wq0c3mr90ZPWBE9HeVBibjCiPR6Tz%2Fgb5WwuQffsc1xductPJPdqK96xg%2Fc7owhMfRyQY6pgEn0IrnUBO2OKICRte3Hf1FUunu0NaQ2PKN6ijJQnfgbDCwTPeG69IyYnfyorix3HTX0HC5S%2F19syu%2B2muGwOBVI8s4veUV2a0S8cQzfleF8MN4HjyIeNOiFFrv%2FAPXSD%2Fjymjy5kKr5CVRvxGQrYP8VWhbMRjX4CXznW02BBM2RAVcM5O5%2FTirxc3I0x4rWrHr3spt3ahh5itgfDmJPMHUf9DEti3z&X-Amz-Signature=1c46278e5ab85baaca646f238c4d38482e090f78d4dd1ae4e605c808c4ef2b11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7NMLHRZ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T201454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDMlmf2wZoktIcwKy2%2FZOpLYn5hZ3eOBtgQUKgnnJR8EAiEA1NraOf698X50%2F9X49E23WlwBH9KIh1IEJI4yPXiXZRwq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDFrq3h6lVnhAXhXbnCrcA%2F38Lg2m7oubsxPjGAL0wr%2FxmJjMaOxk2IF2Kld41YPKDkOsYzuNYtUEwJBspTzYqyQerye37cjdOh0x%2FvvnNslKzQeUlpRmBz3KWrj1%2F8glNk%2BkwaQV6Q1KUVUz%2BfhKFNpjdmtdTQP6dFJHmJvLSW%2F749rhLboCcC2sQj%2FfBSJv4LLT2L49ryQA9jZNG0afojFgJ36OzcWzQPhIfe7U7KC1VI55ZcMWAIH%2FIjqum8hAc%2FQ%2F3Dt7OQVV2suX7fskujP1l9mbefFn4uYOgt1OKdrWGpicX1y%2FXHjhN3kuZ6n4tgYTLD8YRqMfLGjxhmvNlhL7GWsz9BFEPYCoaviVf7y5fYrstL0j0%2FS2odoqglxWi0JBGltdfO5eAji6NdaNNICdiIfdIOcxnWHerhJ13fFA4RmB88Tp3wcoCxA6e2AslUg6yGgDox68Bf8xr5AdphMJ%2BnSWBkXl5WjcrI5xySRMRp%2Boci6GBGb6Os2TwiWL7LUiL2iNkXoMCZCxeGcWVi4iQQ2tApBIPf%2BbY6EFQulsXU3q6RTSM3Od%2FLCPlyvUPYqxp7ScVazVlInayaavFFGVryf3T5CLrgTNgtIPElr2Q8yjc2oSzlzaLOV0ngu3vS00KQW0Mu4kOquDMKDL0ckGOqUBxr0l91L8ufRh%2FIfaPa%2ByL%2BDRIDdpAD13LBvBrL4GXtrS3nsC1wz%2B%2Bl%2F%2Fz%2BfuaM2NEG9DX9nS3XAeyUDsq7%2FTGYz2JK0Y%2B4KPy%2FggDt6UNPef4%2B5d%2BTx0HeDXC73mFZj7KD0kA3T5vMkywcN0VDjb82jJfAbLjFofvyqr8qkQztaBqwSVuikxYVnEN1ZrzxlTjqAffnBEQFarQ7N5OUwqtmYXadox&X-Amz-Signature=cff21bc990bbce2da2b5ff9fb513d5cca9836c927a4b00471a9381e1eff78700&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

