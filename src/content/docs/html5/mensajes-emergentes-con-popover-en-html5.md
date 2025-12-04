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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBCWJAZH%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T142507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCRKP%2FV4nIgxQ0JKoYYlAGOnr33F%2FzNDYQot86K2JlZqAIhAMJZBqmQBg5Ve4jPbR9NIZislnE57HFmtTdz7IoMZA6oKv8DCEcQABoMNjM3NDIzMTgzODA1Igz4fkVeZUzunvKtthgq3AMgtx3ElhAvqCAASn%2FaLuHJoSBz4Mom%2Br8yft6s5Ynzew%2BpkVfi7qYkWZe5bHwcI%2BIOUyWNsuSxn3nuRTtgHkNR%2B24j3l2xP92JmvKXXTpoWgQXo5Q7NpvFvyCAv61%2F%2BiG0aHwN7cxKZ04KH7X0FpiJhX8yRl7RRpDP5UPQOYQA7AIhdH5QaiBzSwGeaUYREyALzwHYTmzibN43VVDMbmgGWfXLI3SqF50TDZf6GSVC3GW8kbumBCL9ntWmfCtUTFnM6hSE4JU%2BP5BUIE%2BdmK%2FZPzXKuxobyB%2FXIyggXdTaibjb4pVeDXESKcDiGa1wpv9Njs9%2B9gbgJptZxmMaQ5CShYCBEdY%2FHzDgK8KVVkl%2FOF2Wr7BNe%2FgNks8palmuYvw4t%2F1WT5NMaIcgPzLIvKQSrXmNwTsgTYy5IILGjKcQAEdRybDWmOdPC2DD1kR9GKb%2BPgfeAswGnk9BkcP3vFs8CxmA%2FUxkObHPyy7cV%2FGqNJSOAkIFA4Ad8F8ORt4BPvoUVe7hfhlCELTfBaed5J%2F6TDn8j142uB8UWXp5JcRneOcUpwAcaJH%2B3veSu3O1DXnrh4wZgMF4WMRXBYYI12r9uykhcJFSCVmWDDASJPUbZi9L8LA6Q%2FFrUSkv4DDPoMbJBjqkARoaoCHikFr7n7OKIUAsBLzo1YO5PxUCiCJmuX1nE8mPHqXvXw3Mp%2Bj5b3DbOK3%2FOljZW5CSN%2BDDptSfaUAaDROy%2BAWRPzRuhKsICqqGd5Q5hwuqLcMyHfrvzIbVCyAdreHY6Pv%2Bvoskf83ZmWELmqNLoalSY9AbHcBy%2BnfrHE3OsX6ibdwMmnJQ1jWMGtLkEM3X6jgi3gqgR8W6Dbj1mzYJ9kN%2F&X-Amz-Signature=2fa8af011297806d00678c2ec3efc107f1ea3f0be781354d9e02af86ba8bdc12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBQXH3NR%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T142507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCICZa8aCa46loV4z3man%2ByXvnG6hxXSIOW6KUcqK%2BziVZAiEAhMCoUuU5CD4HCanaYSW4lKGHjJsfSj5KX9%2FmAnKnyV4q%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDDyezOkFjBkabbF2VSrcA9B%2F2brqDxGYgDvVLWyjD2hMqveUUUy8scfW1AEqEaruvdws94dvveCyFuOqGm3bLvoqWVmCUuytmn2TciGWEWwUhvlNFaVRu752qi7%2BnQX0Jb2D1R5LbB3ef6IVs3YzON1tHwCrhkOh%2B9RVcoJa%2FYBOyza2QpCZFD31YBUtrBt6RSSo9oF%2B23hHfZsuAety0KmL852CU7RmI5L%2B3QZNL10sqn7vR51VzeeutvalW%2BGIjUOd5ysc76bFOuMlvUSvfJItk5jNakbHUuU7hhSTaGzCwNEdtDBk28adlpsZbE5EJMWDYZdZmrUAE6LtB99WWTmB5Iyjl%2Fy5fwBd2870UlEJoDkf9dYy6jDaldbIH7Jrfxtb8IyAN2G7j%2FzVhbIUwQJb03vO9COkxJXnEREQmAeVuq%2FM7ZZHhBqI5owqTvoCdGL%2BVjtCfZb6e%2BLAZlbosOORLanpMYmZt0ZHbTI4muaUX%2FLHkW%2FNyC%2FigWQ%2FRR022anE1NTM7e5llF3sGB062OJpM0Y4YJ9Ywu7LmWYBZTx0hmw5DnmRtiraS19VEtgviPAZeBmVo1EnKf0lyuaKtn47TMYXNP2mZ1C7LjACBW73RLqmPJBHp1UIdCeZAmWpf%2FWJiHqGOp6YjprsML2hxskGOqUBZgurktm%2BCA7nsQ1SEKoBR4JML849FMuOBu8s0QJZ1B4kjfjGXWQy0GSqjJ3reFAK%2FF0v%2FoiIuKgibIcev2JeTlhKo%2Bnbi54NVzrL7mclgp8HSJqOZ%2FbpjZGb85Bq3CjKr5jAAzIFwd2JEZOJTrymMSw%2BQBXL9aPgbus6h243gERCmtDeWnpogONBwNSnHS2QiF2%2Fglh3CK%2FYX%2BAhE8laS3LwzEMN&X-Amz-Signature=2e654cfa452224236840aab14497a214525e83c3f70f44109ae12236c161caf5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

