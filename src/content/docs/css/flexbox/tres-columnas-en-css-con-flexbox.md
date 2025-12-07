---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFIRLFJ6%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T232244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEeyLJJiN6ILydAGOPBdHYb0fqAlDBTXpi%2F4p4MUnGOQAiEAv1Zv0lQH0ftCL0u4z8E3FSwRvwUP09ghGzFs6dNkuvIqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMJxV7E0AaEVykWY9ircAwYB06KWoWSp6nQpLXIRZ%2B0aiBinSeISge4e%2FzE7HbbMUY8uSDbkUBlNLEZJZPBJmZLI%2FYMBRC%2FGpaCUU1Q4TIVYW%2FQzDB5fdYquQU3bsg4C8doMo012jmYjCkM3l6kFGTm%2BgwiQGn7UctjJqPhPyrGI48yyCSanjjDbH3hazdhbZgqSUkGExZMCPBFbxy9tQgWsBaKhk4dm3lTkiGIUdv6YZ4cv8LG7BIbWAG%2FpdkKcr0r%2FDCFr182dtSBTzIww1VDqdBAWnMzC6RhcpM28qxYV3HLmsD8OB1I%2F%2FzSplRJUtlfb6e%2FfHHKsw4ANaiLJ5nh%2B6CpAXfVuKcAj69qx%2BmyjJbw3ho6dg6nK%2F%2BlWl650ef%2F6odFZEU2Yfz%2BfOSmKqN9zreZJQ88X57kwwSfvBLGga9ZpGAMbKsyOGnLUj8KOkmQbOWDKnVHfm5yyoPJKRU9XbPMrQCb1k8uLsB%2BkN%2FhBq4QH4SSH6BBKHNuRxs%2F%2FFVcw%2FuNfutImwtc%2BP2fChqKx%2BMNR%2FJEputFTYuL%2Bph7jHBNZA%2BwHIm7Z0iBePB%2BYaYbzwA4jXtzv7buKsqS9mGfJN3N5%2BTUkxDwLAXKyceuDE0iM8kbAOAHYmMFsmtdvtJe%2FC%2FjMS2wwMyt%2BMMeF2MkGOqUBIiWJ%2BkY6TaRDoLEXoML0qYKEvXdRJNcqVdYrGok%2FgBVewRCrCntXldDYuC2gV2aLrOGtkNytyryI3NZfmZy%2FHNJ34NthRpY70fDFH3MtiFYbJzg2%2F4mN0eGH53QkqJFKKBarXH7F2AOj%2FoIz742vx2qBkOuv21sBKFJV2tQ2NTYWQJpOw1jHNssCDXnZb1%2BpgNs9fbunEurkTesWwwxLaptTGunn&X-Amz-Signature=5a1c81cd38cf05a8d292ff0416e54ea357650c06ddf9503e2227df0221f79ba4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFIRLFJ6%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T232244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEeyLJJiN6ILydAGOPBdHYb0fqAlDBTXpi%2F4p4MUnGOQAiEAv1Zv0lQH0ftCL0u4z8E3FSwRvwUP09ghGzFs6dNkuvIqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMJxV7E0AaEVykWY9ircAwYB06KWoWSp6nQpLXIRZ%2B0aiBinSeISge4e%2FzE7HbbMUY8uSDbkUBlNLEZJZPBJmZLI%2FYMBRC%2FGpaCUU1Q4TIVYW%2FQzDB5fdYquQU3bsg4C8doMo012jmYjCkM3l6kFGTm%2BgwiQGn7UctjJqPhPyrGI48yyCSanjjDbH3hazdhbZgqSUkGExZMCPBFbxy9tQgWsBaKhk4dm3lTkiGIUdv6YZ4cv8LG7BIbWAG%2FpdkKcr0r%2FDCFr182dtSBTzIww1VDqdBAWnMzC6RhcpM28qxYV3HLmsD8OB1I%2F%2FzSplRJUtlfb6e%2FfHHKsw4ANaiLJ5nh%2B6CpAXfVuKcAj69qx%2BmyjJbw3ho6dg6nK%2F%2BlWl650ef%2F6odFZEU2Yfz%2BfOSmKqN9zreZJQ88X57kwwSfvBLGga9ZpGAMbKsyOGnLUj8KOkmQbOWDKnVHfm5yyoPJKRU9XbPMrQCb1k8uLsB%2BkN%2FhBq4QH4SSH6BBKHNuRxs%2F%2FFVcw%2FuNfutImwtc%2BP2fChqKx%2BMNR%2FJEputFTYuL%2Bph7jHBNZA%2BwHIm7Z0iBePB%2BYaYbzwA4jXtzv7buKsqS9mGfJN3N5%2BTUkxDwLAXKyceuDE0iM8kbAOAHYmMFsmtdvtJe%2FC%2FjMS2wwMyt%2BMMeF2MkGOqUBIiWJ%2BkY6TaRDoLEXoML0qYKEvXdRJNcqVdYrGok%2FgBVewRCrCntXldDYuC2gV2aLrOGtkNytyryI3NZfmZy%2FHNJ34NthRpY70fDFH3MtiFYbJzg2%2F4mN0eGH53QkqJFKKBarXH7F2AOj%2FoIz742vx2qBkOuv21sBKFJV2tQ2NTYWQJpOw1jHNssCDXnZb1%2BpgNs9fbunEurkTesWwwxLaptTGunn&X-Amz-Signature=062a946a6674c35fdbf6352ef0dae6d7629245b7d84aeb34f318f9442324b565&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

