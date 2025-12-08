---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAIKG5UF%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T120335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF3ZHlGEJNf3fZZR%2FcwIbuIConPZUut09AUUFS3UJRcoAiEA32FmZzjB1xpdg71RVz3JVu0kvKnDqL%2BmaZcTNrbM6EsqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJFerxq%2F0BgjTaNSxSrcAw4G1pUNygbAY54nJesUk2UmLNk2GLajZ0X%2BqCD9JSFeylQgdiUzp4GXRLdTU%2B3URKzMiTTkqenUlocGE%2FdvY4dB%2ByP4prJOPQsEkEcCEXijuh8wJnzAdYxmwwnQL2rst6N17E69ipQZCoYMtEOIP2zZyKFAWgLqe9ieHS74pl5pvJFeg%2F6VSr4%2FZUMxxzg%2BHcjWY1JCC%2FyEqYpKXN1dV6nCvO3dX2SkIrtlpGRSXj5ihRWb3YgOnAu6LpztQGBdyJDtJp18yls1uUetygnComGXILO5yWk6Aq5pJPDEOTiwcTIQmyapWTRf1CAkSXLm%2BJ4tdbHGnt4bu%2FVrLels3WrgJzOnd%2F0ctbXiwbtPXqeUDWMJEFhIpHGZRuXD49Ow2mHePvDXW96xszuN%2FlXYcYntVpDQ1v3NisVcrvkHLT1%2FfryhPvLGt8fbh4Q0%2BwJ4Ac6uZgsVvODr9NNWeQzubNUBnS56OBvA3GB0VklAUqdQz2xl7PduMGfbHLjEkiznzNukJ3SIibBlUOmU3cSbzPfpYJQ%2BDBMQgiikk28ZjnkC2%2F1q1q66VE%2Bay5jw%2B1vcipCuD8q3uWFl%2FX5RXEIgODo93kmj92Fm3rRotanu%2BJmgZELzYdiSCkAyYECPMKLz2skGOqUBWa%2B32L023SuXDlRZvAGHTr4N%2BAlPlJfQHAakg0YKlm0kC5bGGPX0N6f02T7KmpXiO5NZo2yRqhSOV7UaLbPTiSF3w4QfqSlJm6pgIV6d3Mi%2Fv4%2FXlflPf9g1ePL7KWB0L2d6h5aC8Cmh0CT5n%2BTDSosC9%2FBU35JLcYPkvZYyOQV3xRzF8H3coHLv7zlbbcOaTnAPXKtnRnGrGekZmyg9N0IclNYD&X-Amz-Signature=0c89caecaa6485a209ded25d8544ae220c33a48672f1d1e123bf74012e999448&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAIKG5UF%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T120335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF3ZHlGEJNf3fZZR%2FcwIbuIConPZUut09AUUFS3UJRcoAiEA32FmZzjB1xpdg71RVz3JVu0kvKnDqL%2BmaZcTNrbM6EsqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJFerxq%2F0BgjTaNSxSrcAw4G1pUNygbAY54nJesUk2UmLNk2GLajZ0X%2BqCD9JSFeylQgdiUzp4GXRLdTU%2B3URKzMiTTkqenUlocGE%2FdvY4dB%2ByP4prJOPQsEkEcCEXijuh8wJnzAdYxmwwnQL2rst6N17E69ipQZCoYMtEOIP2zZyKFAWgLqe9ieHS74pl5pvJFeg%2F6VSr4%2FZUMxxzg%2BHcjWY1JCC%2FyEqYpKXN1dV6nCvO3dX2SkIrtlpGRSXj5ihRWb3YgOnAu6LpztQGBdyJDtJp18yls1uUetygnComGXILO5yWk6Aq5pJPDEOTiwcTIQmyapWTRf1CAkSXLm%2BJ4tdbHGnt4bu%2FVrLels3WrgJzOnd%2F0ctbXiwbtPXqeUDWMJEFhIpHGZRuXD49Ow2mHePvDXW96xszuN%2FlXYcYntVpDQ1v3NisVcrvkHLT1%2FfryhPvLGt8fbh4Q0%2BwJ4Ac6uZgsVvODr9NNWeQzubNUBnS56OBvA3GB0VklAUqdQz2xl7PduMGfbHLjEkiznzNukJ3SIibBlUOmU3cSbzPfpYJQ%2BDBMQgiikk28ZjnkC2%2F1q1q66VE%2Bay5jw%2B1vcipCuD8q3uWFl%2FX5RXEIgODo93kmj92Fm3rRotanu%2BJmgZELzYdiSCkAyYECPMKLz2skGOqUBWa%2B32L023SuXDlRZvAGHTr4N%2BAlPlJfQHAakg0YKlm0kC5bGGPX0N6f02T7KmpXiO5NZo2yRqhSOV7UaLbPTiSF3w4QfqSlJm6pgIV6d3Mi%2Fv4%2FXlflPf9g1ePL7KWB0L2d6h5aC8Cmh0CT5n%2BTDSosC9%2FBU35JLcYPkvZYyOQV3xRzF8H3coHLv7zlbbcOaTnAPXKtnRnGrGekZmyg9N0IclNYD&X-Amz-Signature=edc14f3604b121729698f97f78ee4c14395152ae5ba93e7b6dcd6a68c41e49a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

