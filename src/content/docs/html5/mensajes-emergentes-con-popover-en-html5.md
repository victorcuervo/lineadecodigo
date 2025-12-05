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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VFNZ2PH%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T104840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHpOTKLDkpS2zQk%2FmEQp8LgOPdEUYrY0qdeIbtYiZHzLAiEAjHjOKrGQtY8qgJksFGTA93gqxIwDdHFsIydaGNB5Cu8q%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDJqt%2B8t3OXBgLsrHaircA2HP49mWTK%2FVt0KGFViyDzgfU86EH%2Fg1BnJowRK42o%2B1wXMYRB3kG57n9CpFQwgWbLX7dmDACdtU11Pdms4SZOEzDthNmE8Pd49ME5tQ2WiG%2FS3UX%2F%2Fu6f9TolHC09%2Fhcm1%2FSzl%2Fqw7H2fIRpOSCfRVrbQCpOQHYraNbYRO21dEkLAkFXQOGRWBdY3fZ7ac5ulYqpbjhhbC4r4lLaFjP5cDPZ5uI1%2BFcpfOj407w%2BesbsV%2BVGF4V%2BZScPNBQ0F0ps%2FK8KTSr79%2BcCvVmfYBcquh4OL98lPA3LULOnbO8Lm1bnq66WuIRhL%2BCqUFqMOBtB32%2FSqiu0dd8XhdQNO7V%2BD9UbiG5Oajgz%2F%2FTvhNQfvoI3o3KQzFc%2FWrCsCNgke1GkU2gCTLr71wLi6ArU9l9XwpLDcJQps7v6Xa3jGqhlSmJe2GxAOY2WzTpeJc6g5YZhX578hv98Ct38LvMrOAIxMqQvlXjbavFOmgjP2BgURcZDjP0c2daFTWPTg3sbYhnP7ijusJiK0%2F4FYZWUZFp6skLFZ7R%2BOaSHgGyOn4ARcvJRrLlR2acX9zxSXvaLUV%2F1YlN41MPKebFSJmdzpVjKyKxPIPuvVVF4GKi2fL%2BQP3Hre73wLjepm4j3WQWMOzKyskGOqUBTyeUAJNKaz3onvyiun0%2BORNYzKHruEZKgCoSYFQg3aThwEAzN700%2BExliM2lJi8nrHkm%2BkdMsr436XCJVHyB7VE4r7cKJB9uGxNHcgDETL8MYyi3PAHb4mIZCirEl2N0MJ4wyypBNdrta2I8alLsaR0XfdtdLv6G5pbcgBMMotlw7dp6%2Ff0DpqWMbV5mRHDvS85XY8pSCxk4zFiwNy5PRALXTYbY&X-Amz-Signature=37ef96d275c4c6eb46814fcf3fea40a884a8591b7b515cbe4ba771380f34c982&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDY2CWLR%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T104840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrGP3jyI%2BS4lkO339DpLRcMuJ3xZlhqdsykqPecSxQ9AIhALlfnldg00Lbw3B8ZOVQNNcWPU4%2BZt%2B%2BPoqo2oq1FxrdKv8DCFsQABoMNjM3NDIzMTgzODA1IgwJ7lkwH8gMtSdBH8sq3ANyZ8v2qMAE2Lvt%2B0NouvMSq%2F5MlhqTrRLaLYm5H2jtnGLPXmLbZbHsORnUk8Uj5ykztqbqzuTTLGcc8lpgrBS9TFZ4jz0XKSIq2qLBuEmbLfYaS4gI%2F%2BL1TIbLdrQ8HI7o7Lyq9b2ms0umjDkU1LTe25N0qkx2OJaUhYS%2BXLUia%2BHP50gN9N9vR1pb85klcFTsb6bKK07TM2joflm736tG1UbB6pb%2BuLJI05uErqxN8wMaMpmsqW4tbaB8iRw1FmfgoJPD2dRHl7Xs6uEYqTvH1%2BdroDlud1eUqSqbPHXeS7%2F846rrYcGqly6ne%2Bgh6E5FjA5pMUExlnUW4Pyn%2B2PgEYZBRaac8sSJWfemo6HU49FpT9QSZQV700WXAn7DSa9SYIdaZ81Fmh%2B21LktJxISo9fszo60mf68fvbkyBv7tMexppOWoc%2FF1MATadwB00X%2BHs4eO%2BW9BIP7Ppe5gcCSX%2BOw2bjZny5mCLBgCMT%2Bc9e0jk4ArnBNSPBBv7TrZzMbOOWbdLmUlQgxN3AB%2BLW532vtdIOHpqsHrj%2FvXSlcUQrC0N%2BCiNe9tWwRnZEJ0eEs7F1Xmu6xfu6aGWBEAxVsTmgGoI3Om8RLZBLjbnsbDqV3Boyki2xshY2oNjDzzMrJBjqkAUHqxoTxnbeTjt93FrdNe7m4n4bEff3sAbBYfWbJxGhPuO8g7PcxoZpbJ9UUMB6%2F6kgR6XdJKJxiv35pdzh0yqg1223LawfLLtyklDybMYeXDXCCbXM277bybSszO2lvrI64ijaxb7HWFXkvTFp5n1m8XdRuRl79kzAjA6fxUpfYZzW1o8ybJ621YsP6eZoIcmNztguYprnvVSDxDjskzcgn84NV&X-Amz-Signature=2cbbb6a4181747bad7713059f724838a5622c27c4fa91a63b70dead45563f072&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

