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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667B27A66G%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T183927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCuMXqFNPrBfni1%2Bkw5YRiPhZ2aGjHf7xmobEOiJZOtWQIgIgG0IKx%2Bzm9y%2Fp0vuOuLvQNh%2Bp%2Fs9NbY7odODytHQ70q%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDBB0fR5laWEtwd2qWSrcA5PFisBa5NxKpjhKR11YCtaBCAX%2FroPOB9Rc1OOh0h4xWRy1p48rMZJCBogfqzCnVg0MTNfR0jJtDa71Fr5A6a25wW0LX83jg3Yvbkadn4oCRPDEsGLf3WxrSbB1UqS1ZdC4l0px1iqmU1YZvOw1mEjcxn0I5%2B%2FqzTJAeCJ3qPDjxcaHozrh9wJipGbZtO66Q4cB6iLeiCtrC%2F%2FdKa9F%2BXAP%2B3D8abH7wQu2M%2BwdixUX927ypsSH5fW2VknE7GZhGfaC3T1nxZiajyVtFwUjsBoPG9LJKLhU4nDyDefmTu20Z2F8u2nwimw2c%2B%2FW2FHYNt5w%2F7uKntHDH26PvfmJKkotPuD57Qs%2F%2FCihtZDwGxb1cpinYMw83WzSv4Sjyx2ilMX3kqnuMCbPtW1eOuaFfb%2BLaPfNOLS1Jgn61PWuvxZwSJptwHZTzeyhA0xMw2pxUTQAaF4MsrpV5Tk4vwVQfN7wCNDTtRrPg%2FeXN0iFci%2FsJzmecr9Wtd21BfMQGR5E8jcwiw6kzVp%2F8%2B1zzLuv4lX6TzKcsiKXUMprC3li5mRFV9NMfhewp0kA9XdHeHhO0X%2Bi666Z1%2Bbv2eDsPcmc5mAu5TuoR7FfpmM%2Bd9bGet3O6iFPTiSc7A1amOLmMNHL0ckGOqUBbE%2BQfffztv2Wl3D7qLgIXIFPr%2BBrE8DA9r1ATn89UoRStZ%2BLHtVAnO9%2FqArXGGK5%2FAR9TPqxZ0A5F51ySxQdtPY9fmPWrNP4sr16qSGzgnUc3Al6qocpADGuEpOj%2FElfs%2F2fHUAbWdgWT8dld1MDJY6URfaTQQU0fwPAVnh%2BqfVvkp2vFetqUjKRWfo9mZbdu7t8tSFWGiVVOk7SHXnGKh6gfDyl&X-Amz-Signature=cee5860e0b3883ef46215de5ff6e0f9b3c27feac40ecffeafbcc3f5e33df67a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667O5LVTOR%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T183927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAWj13Tfe8pSfeFoU4NJH0Ts%2FakaWcEa6ZBJ1dIyxJKIAiEAtztyXJVAMAtqQNvgG8V7C94AgyGNf08lZSRYRzk4d8Eq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDGzBH%2BRAVsR8oYOqUCrcAxxlKknX2ZXDCOI63TXcFEesiuggfjeMOXwflDgrLrhkZh1CSf8l%2FL1QrXBpw%2Bx%2Fyh2qgqL3OjD2V4%2FTJgfHDn5efmbhFZS%2BKdkdsmbFnIDYr%2BRckAe1pI%2F0ScK0cpC43gNI8oC%2BD8JFlAcj2%2BK4nYfiuRrolJ1qzJP5e0ID8rB2y4jf%2BLFXQfVa1Ri1OHMOGbsNNhYVnqV9gU8eMgBLNO4JupXiJX6kkr3tx0QWyefk6w8GAkSBCCA28gHH4oUrkMQnHjTJvfaq%2FA7d567Eu2FgarsS3j2pOwInPk7B%2F8Vwjeb0J3VFbjsqk31XIT4Q0LkOxTXee6All%2F482FjF%2BoZI8bKEVTZ%2FKX7Fp7ZdNY8h%2BjAjL5hv1JhgNEkF%2BlxHdOUJXHvdnScFq4vrpAynCnI9KWlvLURwCo5AkQVI0MltuTv%2FpIZl%2F84tFeh3Tdz7Yup6Lq8%2F8%2BWX3C%2Blfht%2F%2BcTHr9wnE1szDeu%2F61NpA09NZIvZbdUs3zqzVUa1%2F1LD5%2FDKCqAzEumekv3TRF6Nwvhji69ONVedUn%2FVs7kM4DRScBvDBHFdQxfalEMsXgCmS3iE4UDdl7%2FSOBGWMmQb01kEXWHI4t0fmRhK0gy6EMPkJafv9N5ltCDY0HxTMKrH0ckGOqUBhpfEDWi0wNSyh7U4qsz09ciV4KJOa4AR33Aaj6z%2BeJuAdPMkvvNix4iCoAFY%2BH5SHsprDeoQmBFvJO80tkq2mC8s2nHHQ3IKhA4gEmmgFQ7PrXyXc0J%2FnzFZ2tAAguR4C01cP3c8O4Qd%2BcMq4ZHFiv32n%2BAkDEt37oL9xPqF1GR3DWoopgLJwEmnz7nqsigTftFghK26R3gytmflFtDO2TrVdvxF&X-Amz-Signature=edadee9fe192b73302852f134a53fba04f407eadbdd0538056f9e8e8fdc99081&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

