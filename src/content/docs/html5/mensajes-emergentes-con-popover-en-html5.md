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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMXMIU5R%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T230805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIQCfPod3653qzhCQpy0ovtSARF7bP%2FeYH1F06eZhca2DoAIfJnVLszTlCB4vOt8VyyGQpovCss5q2WMdBol%2BXZNT8ir%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMnHSOkaWpo%2BKCbOswKtwDQyOwrV8l71j3JCFb8F71vaUs1rzfvi6bm1joUAFCLOWHAuu4ZQH9N9ngsgY15AGZiCQVEekZoVLLfdWKc1eDsLLt45ze7gs5vxRe99SFm7EOMUyJ5th31FBHxhzJdgY3bvuM6P%2BQ8CQm7oviXaCMimhdCKIL%2FdBDecAf9YhSMl9UaCWErKk1v6f3lhPCeSc6i2SU1ZovTOYmSCuq90O%2ByQ8BdySDEvZoiOIWmXCJ54puV7a62Jwr1daAde0a41xtPbrTkGx%2BRhk74c9JsDKZ3FVuo8QijKyxyUSg2Lp%2BlGrDHgPld%2FdEE%2FXM8s%2BLSCXHUHlFDf%2BBQ9A%2FxUxMrTNM9HJsilFcwMY9jGMZclPdbff8%2BeihUs5FqhkLbEf5IWa4VcHPsaeilkffEfnLNw8egUtb35%2BUp%2Fdzb7XKQGB35ElXkYrn9UISCnJibSrgO21Y0NTiWLeXIC7uLSwJstzKIO8kmt1YIZhw1OXNqUWry%2Fo03DUp8nala4sbxFTZEto7t7ahQqPZ296boHvlai%2B6fFeBlmI2DS6C8OLzpeVDg4MXrzyBkzNlGDAP46i9McZyxCu1hIG5FnlxtqA67fNOwLlri%2B%2BisQfKwpY3i4Zi30043VqhPV705xVHxrgwo9TSyQY6pgGKYOQ%2FKYIkEVyiyWDHeADZcf7gSaa0hQ7%2FH%2F2Z6D4ba5fqg7j5tI03rVWyOq7SzfaeQHWLGHrSu7FRMF9vbVg0aM5A1mOX6%2Fe3w6wWW7zFuAOR5lbS3nkDlSWBVSxJmoTl3%2FUTLZNWmV86rUV2GeNDVWP%2Fru1vShlXkJtC96%2BtmeRQMsEFzcukWRtu1oMC%2F4vCbxtUS6BONuEcoipL0UeD1vuxtX2v&X-Amz-Signature=c4cd397ae604e1a61b363cf43d71e53173b04f887fe444b01e9adda82b9166d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NHSPUMQ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T230805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZCd9dn3RkY9Gkqg837xaGhpnXKJol2X9vrTD%2F9LFq9gIhAIEjqzZobElHuwfwgzp0wYzGOUeVVfZV9piFfoRkAB9vKv8DCH8QABoMNjM3NDIzMTgzODA1IgyJJVHDDH3WasapzYEq3AMNALHPU1cfJ1bfJVEJV1nXRSd4YlNhrN5%2BqRqFLZuWjOOz8V1tFqWWWh%2BB2x%2FnktCyRGO0aJ9LBPC9qZ73ft4mYZO9U%2F%2BYrcN5Z37OP9g95aXycddC1%2BDpr9Ilv1LCbWiDmulAmM1Sti%2F4Df7MVvBgj3%2BzxuoHCWJkw%2B1RxAvbcDF7FaJDjb%2BH57fJNF5iQIRZ8Cz6WxoDj%2Fobx1oBHF41ADT00Gz%2B35QAb7dXI%2BON%2Flz94AdFbgZulfNKBHGX6amx1Rcdb3Cz%2FSljCc5kv%2BhPeAIDj63bXtYoqJ9qWxyW59IEIdDjgkHafKCoV%2BzeG4LNvZGVT74%2FZocFN%2FUokH4c9RuIZOeqOsT5QJM6%2B47BRq0Qzc8AoD4ds9scUDN%2BjqsJzLe%2FWN7K%2FX3KDCDRZOMEXCE0T17q5%2B5fyKY5NzFbREbprRpnVJqJX4F3BJwFu1%2F%2BLmWIIzutZgZwCIN0VDmIHNsywu6BVAEEJOYatuSpvfSnYygoas9h5%2F2iQYz6095204Zwh0d%2FN%2FpvK2Lk18jLE4GBKuiVx49VEPb8xXZXmUxAq56Tcvs2WFvlXurX037af1ZGvDHeDu6V7wlk8O8f6v9Tr3GEvqjaaf%2BImtt%2BK3WUyc8RByVnQPAaUTDN09LJBjqkAaaTbcnvGxxhYmlkC6DRmXDeFyUVrTZGX0AO1ew7UNMrHM23CbHiB4ND9DUcrpvaq50K7njB7lk69v396CMPU%2BXA7jGlmprk6t3RS6Q%2FkrW%2B1kzi1bXiWZrVn4pGODOiSva6LRhHALPE4uK4dZM17xcKguo%2Fkj6rOyz%2F%2Fwj7tfy38TOzHmb7KzfOgbsy4JCy%2BsZ2RQ129GkesreQ0Rx55aDufRqu&X-Amz-Signature=6f8e1d2cf5d91940488206aeba13daff4deaef3a9ebb01aa58f83582f8e91dfc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

