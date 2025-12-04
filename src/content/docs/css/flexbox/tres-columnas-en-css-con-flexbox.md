---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645TRVZGU%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T090651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCIHmAB7Haf0SwwOcq1LQEKIkATLgOMuRuN1BBFEdIqASBAiBYu7PRRn5EJ75Za2%2FjHiWzYZjUKM5aRzPHKEob1gHfuSr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMAcbpKVP12I5%2BhOfuKtwDJdYwOElwY2IWYvJSmwQ1WSuN0QdEOhxo236hREvCJKna%2BhFrHuVTsYhucmFT03vZqtPpMHHeT0ylCuoAve3fzW760jXYli93Y9cjcSDSt8XXAm9dmXtDkZYnteJntHHBdQIBjRrnlqR%2F0A9r2QRtF%2FUQUuqtMLf1dUSehl%2Bi43xSVMTogp9Pnw%2B5hi3MBmtUAafJHaHhijV5vm%2BNJWnmjl6SrqRvjNo9i4DhjwCqfthLsykUNL0zEyk2CAT%2BVOZKbEjZO1j2gl6%2F6ictNUB%2FeoBh3dT1kp%2BxeSjJMC1Pn64m01f%2Bd%2B7hQ7LI3DBJ4MDQlpKXyUDCTpyjpYvVQJyBk%2FuXRyIUCZPGIgJPEscxl1LCBgIsDijRULRa0ZdM7S0LY%2FUnv%2Bplo0%2BJ68r4nKK9NifCARlKTw97EHB2j4X8bBNYkjLu9%2B6UNj9ypx4ooer%2FQJRLqmW32ZPnQ%2FmcyaVDCW7rmrkgqqv5KD65hlHRRRAmLGwaJ7c9M9zqmquBwN3MEEqlbpb7tnypAJ6gYwPqGxXJNlUBhTvANQzW%2FArFYo9Ptgnzd5r2gR3DUkUzYG5DkXkDjzagDLsJgLD%2F3cbVOlnz2dDpBfr2t4N0kOOozNscjxVcXm7c0rQXHtkwqIXFyQY6pgE3Thnu9ugDUZ3VeXgtKZfAmC%2F06uwZOQNN%2BVuMa9ynssXB40OdYOVohPuQFWyiC8d%2FYPS6ZgDtFaWI2LA7Ot6vBhBRcEBgxoFG7m0nlDy7dAVZLw6K%2BJddFdre1TPdMGAU3jnu%2BAKzWMD%2BnqrpWTIP0RwqDt%2B3m83XMiwgTFEkQuHF0ps8M0IxnnbPpuWA35h7FTUn%2BHUr7NZT9eiQm2xTjOEpukae&X-Amz-Signature=029b7e1e120ff3dc1d309a66d40d00bd67bd8d4e00460cff4024155ab4fd0a64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645TRVZGU%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T090651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCIHmAB7Haf0SwwOcq1LQEKIkATLgOMuRuN1BBFEdIqASBAiBYu7PRRn5EJ75Za2%2FjHiWzYZjUKM5aRzPHKEob1gHfuSr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMAcbpKVP12I5%2BhOfuKtwDJdYwOElwY2IWYvJSmwQ1WSuN0QdEOhxo236hREvCJKna%2BhFrHuVTsYhucmFT03vZqtPpMHHeT0ylCuoAve3fzW760jXYli93Y9cjcSDSt8XXAm9dmXtDkZYnteJntHHBdQIBjRrnlqR%2F0A9r2QRtF%2FUQUuqtMLf1dUSehl%2Bi43xSVMTogp9Pnw%2B5hi3MBmtUAafJHaHhijV5vm%2BNJWnmjl6SrqRvjNo9i4DhjwCqfthLsykUNL0zEyk2CAT%2BVOZKbEjZO1j2gl6%2F6ictNUB%2FeoBh3dT1kp%2BxeSjJMC1Pn64m01f%2Bd%2B7hQ7LI3DBJ4MDQlpKXyUDCTpyjpYvVQJyBk%2FuXRyIUCZPGIgJPEscxl1LCBgIsDijRULRa0ZdM7S0LY%2FUnv%2Bplo0%2BJ68r4nKK9NifCARlKTw97EHB2j4X8bBNYkjLu9%2B6UNj9ypx4ooer%2FQJRLqmW32ZPnQ%2FmcyaVDCW7rmrkgqqv5KD65hlHRRRAmLGwaJ7c9M9zqmquBwN3MEEqlbpb7tnypAJ6gYwPqGxXJNlUBhTvANQzW%2FArFYo9Ptgnzd5r2gR3DUkUzYG5DkXkDjzagDLsJgLD%2F3cbVOlnz2dDpBfr2t4N0kOOozNscjxVcXm7c0rQXHtkwqIXFyQY6pgE3Thnu9ugDUZ3VeXgtKZfAmC%2F06uwZOQNN%2BVuMa9ynssXB40OdYOVohPuQFWyiC8d%2FYPS6ZgDtFaWI2LA7Ot6vBhBRcEBgxoFG7m0nlDy7dAVZLw6K%2BJddFdre1TPdMGAU3jnu%2BAKzWMD%2BnqrpWTIP0RwqDt%2B3m83XMiwgTFEkQuHF0ps8M0IxnnbPpuWA35h7FTUn%2BHUr7NZT9eiQm2xTjOEpukae&X-Amz-Signature=6366aac79b14c8f6d236ebd00e7b89c0976ff44bc470edf844d8272ac2140811&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

