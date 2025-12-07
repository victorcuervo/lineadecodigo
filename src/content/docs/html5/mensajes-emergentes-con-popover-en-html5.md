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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666URV7TP5%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T132657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7WpaVUD5OCgrvjGe2965UuK7zEC5%2BBM4WJB7nCOjAxwIgOUcDidluVv9WSJtWTaYPpgsaDi8dNtT8sGNid5JjTogqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDv3SIn1GqDGUsaxqircA2Ed2n6VCDOJKjZ3B3FGIM4VmdtFSw7c4ocLUr04XehBLgOANont8lEPBSkzyCT0NEt%2F%2BPpALdL0NfvHY2sAtQ2tKb2bY2B43JC1a3WZ5YQs%2B7frdXxHhl7qagfM6%2B6jMhhDyQwrbb95YItodtz5y7TdTjR%2F7MBSRnUIXCTVoZoIlmVkFBhvu4VM2f5M0bzRNLLtSHyTTEzCOKZF85vJLPO6HD9JHqERo1cWmfA8Pb1EiVQGXDL6ZMKmY6xYVMEEg%2FqEone2Z5iQTLQp85OcA9p5bMx3syFqOEUxtBnfFLkQSFsQCJzSmOBDRWLA42CAJUhVRaYsJbUevnkMTvRFGAD8dX%2BPIQBHfetInN7kl5FGx4AD0vtsGJI1LftKw6a1y0dUItVqou9tN49uEO2e972KttgTNLWtuQBfC4sUsrlb84x4UQZ7ThlGViogDcpE2wCkSwThhfxLMWxxwjLhgJJYP3PjhE5tGDyLOkPS6e0IDCkoxmGvQ5S%2BbOjp7W2KiF67y%2F6CMZ8rWJN7L6TURuT%2FBsaOPMnm%2B5ZbatjvIN4G%2FEUpGDzWZg1%2FB1f2yFdNbGk4KlwdkF1OdVggxV%2BZSBVSPBslSqQrUsY7qo87Nwivlv2B0Ms4TKtQDkepMMuZ1ckGOqUBn4fP1pXN9F3lDyNzMMmxaiuK%2FgliCplEaW%2B4%2B9unUYGvDGZSWhh0qI29FheW2ffiqF9S7ydm2O41lX6ZhhvpOgvBLRld92IiD9ksWgntMlv3xlsRkVGB8P6cEP5POPA71Lw7ctrPTZf9j0bnA7XDhRyfxDLlR9TLbf%2FddioFfBO3HBvWUk3FzqmBU6%2FrFGbXT3%2BqN1IXqiAj%2BewKVHhk1ci7Ccv0&X-Amz-Signature=b95e3d7838e70155a49b6710e9b89324ca9b573e957b07fe7ea5c0875bb4703c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4NJULJF%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T132657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKdaOlUm7OcrF02dTDhltOORLblBMrFg9oYf981JJ%2FgAIhAJ0SMpLSyxEZPedlvt2d3I0%2BXFEVxEYMqWHZ2wzmu1xaKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxDiWWCfiqYL2IjWQAq3AMJmjDnmXgwTPPDQ4DqGZHsyQgUfcVCe8qiii209l72KFG%2BrN%2FAqjeWEiec%2BJAXRnn0Sy5Ayq9Qmlx5d%2BivkVrReGcs7PMGql40QrVP%2BQDl2kIY9mbQL1zmw7erMFqpmpHcvA1rUz2S6QruT9YhkJuxIn2OKBerCBingEr4HheDUP6o5EfAN7v35i3qhbQaVQ0D30P%2Fyxske%2Bn2yucwSDNfxVWxO0udDpWvszlwKkSBcT3UR7C2S%2FusunN6BdoCg9fSgzNWBXDSWKCt6TX%2BxN%2FVrExWDA5TVIw2knyHdG6dzTla2WssD2qG1A7c0%2BRWAUVB8%2BF7EyiJ7wiyZB6h5ZKVk5i8wzvaUxdl9vFkVVtuvCImn9mx4VTgIMVSIsFvE8ZuD5pVIIxEYxScI9r0BAm%2FIoYOfLHrJ9m6M6yu4bm7FAEiaq9fB9nPNQdhzjwio4HVIXs%2FA9CnoxJnstNNnMVmDzBRes3CkEWk%2FcP6PN0W8juc0lssMKXQrgTGHSlJN1AI7l0ruscE0dB0MJG98bo9mePSkj7Z%2FR%2FP6I7cvOWohp0V0bLl0Tq0gcUktZwIdlXYfFbgXOpvjWGb8D0TrpJA4cRwoBPoIePSRMq4ibA19P0SUu%2Fdox0lnKJC3TC%2BmtXJBjqkAfk2i2Eix2J4xMiAjwFXc6UbtcberwML%2B1lffuilJ6qpdXULXcQdeeXxaHs5EJJcgskJXFM%2BURdjUPOoH%2BUhZ7%2BJSVXxRlsBJxYk9UPzN6kVrcyQT9keYS3PnoqQLcOAl7wovoyLOIUWHVsWfps5DHeMFiPhI2NtOOUT1nWHusU%2BIi%2F3LQeQ2X2kPqN70qkEdIAJ7Ygce7sxp%2Fo%2FM2SafMLwDDni&X-Amz-Signature=0ad7e101bc074531a857b5f4c08f2f9117be86da32c2a99bab47262c793c2962&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

