---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXQZO4MJ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T060441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQCoeyh6j428vIoESWAvWiSysgUWBYV9idyL7y04JxKYSwIgQCx8FUVErbOJ%2FqPtoiV8UrXYHNHFYT1sTuRXb%2B%2BZIAwq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDNKsM0VaBA4gkWRYbircA7mA%2FpNMZCdy43Mh1ylRf4WIeFc3YQbETiukY%2BeEyXLisUrPlGdcfN6V0sRXIwSy7wAdux9dj5xIzCHRX1znoa68RrjvHc9wgISkGauMigKn41tykfQoL2KKnhWS1LNnAuWfYrBWHTwuplhJvKDf5e1t%2F5sjQmU4p6hB0Nlav3laxfO%2BQpw8Bnic6G30583EN7F9C6Rgbb37JzQAkozT49q5rXSNlKA0O67lrf6Y8eYyA%2B9F8EGmE5XHLilJjq15EfAaFN7gQchvT34fG%2FpyV6D3i1AxeUmebp7m4aW8nLju1wYDI%2FMwM0w4zDKnP5Vqgqwir6ya%2Fg1zGYLIG64%2BMxJZn016ttSIX0pPwjHy9MqWv0BF71KYxiTttM4d%2BesXWhd3BOlj5gyq7BsLmCpLfKmHL5fQFoP6M5%2Fhs0E6qMR51DUHvupwBxEvkuYCFSGBBx8X41y9daWHAX5iuhJYxgWVklb86fx95oA1XtZ37%2FB8GOsVvtrCSTbI%2BXkXrJdE6waBcwv5a%2BgT%2FxRndB%2BB3HBzjNABUWZZouML5ukXPdEJe0RjriB3itDiT34XHWhjCbFgQKolawFOiLE5%2B0PBcYitP0rCSAMrGRqPwF7unA%2FhPndUDqcJ4w%2BK287ZMJeuxMkGOqUBdgfGo4DB3xFtqNlL5Zg%2B1YN9oxq9uVMXRf%2Br6NPqWSQlbarHl33BetTc0VVhu97MPbBjl6qLp1u4MRjo6PdEh%2BtW4%2B6zEqYZVKTtLvI7p6lJD7t8k0Iwlt5zWrkWOKsxD44%2B%2FWMw1vn2J%2FNRCOuOroB%2B89UqPE00PsfK3xM7ofv0r1fwY5x6t2xWuUtnbDszZKQcXqymiRvycM%2BTz2xN1FSbQf%2FB&X-Amz-Signature=99bf652c74b19aee6a8fcd6f0252021085d2fd229d3b20b5a37738f3872882f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Por lo tanto lo que haremos para crear una página con tres columnas, lo que tendremos que hacer es crear el contenedor y tres elementos, cada uno de los elementos será una columna.


Si revisamos el código [HTML](https://www.manualweb.net/html/) será algo de la siguiente forma:


```html
<div class="contenedor">
  <div class="columna">
    <!-- Contenido -->
  </div>

  <div class="columna">
    <!-- Contenido -->
  </div>

  <div class="columna">
    <!-- Contenido -->
  </div>
</div>
```


Ahora pasaremos a darle el estilo mediante [CSS](https://www.manualweb.net/css/) para que las tres columnas queden de la forma correcta.


Lo primero será centrarnos en el contenedor. El contenedor será sobre el que indiquemos que vamos a aplicar el modelo de cajas flexibles, esto lo hacemos utilizando la propiedad [`display`](https://www.w3api.com/CSS/display/), a la cual asignamos el valor de `flex`. 


Además trabajaremos tres propiedades más, para darle forma al contenedor. La primera será [`flex-direction`](https://www.w3api.com/CSS/flex-direction/), la cual nos permitirá indicar cómo se organizan los elementos dentro del contenedor. El valor que asignamos el `row`, que nos indica que los elemento se distribuyen como una columna de izquierda a derecha.


La segunda será la propiedad [`flex-wrap`](https://www.w3api.com/CSS/flex-wrap/). En este caso la propiedad [`flex-wrap`](https://www.w3api.com/CSS/flex-wrap/) nos permite indicar si queremos que los elementos salten o no de línea. En nuestro caso no nos interesa que salte de línea ante una redimensión de la pantalla. Por lo que le asignamos el valor de `nowrap`.


Y la tercera será [`justify-content`](https://www.w3api.com/CSS/justify-content/) que va a permitir realizar la colocación de los elementos dentro del contenedor. En este caso le asignamos un valor de space-between que hará que los elementos se distribuyan equitativamente a lo largo del contenedor, de un lado a otro.


```css
.contenedor {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
```


Lo siguiente será centrarnos en los elementos, que serán las columnas de nuestra página. En este caso lo único que haremos será asignarles un 30% del espacio de la página, para que entre los tres elementos se repartan el 90% del contenido. Esto lo conseguimos mediante la propiedad [`width`](https://www.w3api.com/CSS/width/).


```css
.columna {
    width: 30%;
    background-color: #a5d8ff;  
	  padding: 20px;                        
}
```


Por elementos meramente estéticos lo que haremos será añadir un fondo de color azulado mediante la propiedad [`background-color`](https://www.w3api.com/CSS/background-color/) y un poco de espacio dentro del elemento mediante la propiedad [`padding`](https://www.w3api.com/CSS/padding/).


Si cargamos la página en nuestro [navegador web](https://www.ayudaenlaweb.com/navegadores/) veremos el siguiente efecto con las tres columnas:


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXQZO4MJ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T060441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQCoeyh6j428vIoESWAvWiSysgUWBYV9idyL7y04JxKYSwIgQCx8FUVErbOJ%2FqPtoiV8UrXYHNHFYT1sTuRXb%2B%2BZIAwq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDNKsM0VaBA4gkWRYbircA7mA%2FpNMZCdy43Mh1ylRf4WIeFc3YQbETiukY%2BeEyXLisUrPlGdcfN6V0sRXIwSy7wAdux9dj5xIzCHRX1znoa68RrjvHc9wgISkGauMigKn41tykfQoL2KKnhWS1LNnAuWfYrBWHTwuplhJvKDf5e1t%2F5sjQmU4p6hB0Nlav3laxfO%2BQpw8Bnic6G30583EN7F9C6Rgbb37JzQAkozT49q5rXSNlKA0O67lrf6Y8eYyA%2B9F8EGmE5XHLilJjq15EfAaFN7gQchvT34fG%2FpyV6D3i1AxeUmebp7m4aW8nLju1wYDI%2FMwM0w4zDKnP5Vqgqwir6ya%2Fg1zGYLIG64%2BMxJZn016ttSIX0pPwjHy9MqWv0BF71KYxiTttM4d%2BesXWhd3BOlj5gyq7BsLmCpLfKmHL5fQFoP6M5%2Fhs0E6qMR51DUHvupwBxEvkuYCFSGBBx8X41y9daWHAX5iuhJYxgWVklb86fx95oA1XtZ37%2FB8GOsVvtrCSTbI%2BXkXrJdE6waBcwv5a%2BgT%2FxRndB%2BB3HBzjNABUWZZouML5ukXPdEJe0RjriB3itDiT34XHWhjCbFgQKolawFOiLE5%2B0PBcYitP0rCSAMrGRqPwF7unA%2FhPndUDqcJ4w%2BK287ZMJeuxMkGOqUBdgfGo4DB3xFtqNlL5Zg%2B1YN9oxq9uVMXRf%2Br6NPqWSQlbarHl33BetTc0VVhu97MPbBjl6qLp1u4MRjo6PdEh%2BtW4%2B6zEqYZVKTtLvI7p6lJD7t8k0Iwlt5zWrkWOKsxD44%2B%2FWMw1vn2J%2FNRCOuOroB%2B89UqPE00PsfK3xM7ofv0r1fwY5x6t2xWuUtnbDszZKQcXqymiRvycM%2BTz2xN1FSbQf%2FB&X-Amz-Signature=f5fb483af0b7f05a33c1a54dcb984544d8d55125c8746cc0a0d895a372166320&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

