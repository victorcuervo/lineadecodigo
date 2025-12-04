---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2ZTVA5T%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T143251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIBXHQsYrcu3jIEiSGV0d3pfZo%2BdD1apWK%2FHpXe36GrycAiEA4L51pBq3BBY%2Bgrcqb%2FJAZDa%2B%2BI9NBGc9z3meLcAZV%2Fwq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDIEslMTf9rslj1k2MyrcA3bJPAFPcDTkkp%2FG%2B3fySsh6owLCXAzX68bdbOmEjcCgFjgrmViPIg29toVyqESJyoheNPPg56%2Bs835K6iU45vFmJDva%2FO%2BixJ4zbRNgW%2FqmhFXNEo7bcnb0I5hGaxwfYryPvwyGGPYQZEQIH%2BAeL0ZrCR6ssR9RXyCUBZJAmXg%2B4r6EMJPWLVx8NICGl%2B6XzFa9cfXRTBs7bJVcqPPjsz%2Fcntsu2KCDu2ZW66mWTRvSOxbGTBF4P9tCLzOCR1vz6cT3Oe3bviXalJF8iKxqvfdB5pyBhcslbu0I11FPi589RZPuFVNhBemxmudlDGDE5LH9GmOYOE0MUokbVnlt4qHpZPi5VFrCZlhpJFSu67BLPb%2F1luowwskk1AHIYMxcM37NPkJJ0WITZllcPf3ks9vQJ78kq%2FFVjxM7%2Fbmt9OsnADpWLHA50LKG3RaIIZZRC4dUXNdpvQ2m9Ix9madWKeVhfL1d8PYr2HOVDNRv1UiwZLGJeXhIpmXorMhYC%2BTYwqtPiKP1Yec7fQEsWXrqYneJbs9Sk6APwYPDhAIt0ZChrkrq9mWh16Os6kjVMKWgnS1TE1rF6hAWwuCb%2BQSwfoX60Bl7AAB96qQ7GCUtf5CnESCiFG7m8FycLyGXMMSixskGOqUBePqxCri5B3m6R38isACWaaF0YXyqForreWfHnGwjpTeR%2Bj9KfZOY4ti8GYSSl8fG0KUc7AYQ0asl%2FGKVr26QcbQLmHwcUPeP3356teqetu9lQb4IK%2BZ9H4%2BK60kFmUbJLSJI0LQaVh6PGMvtCjYenNZr3gDqX4elLmqGbQ4b5ej3ktq54cxNoYdX1D94cvcRmyXChy65Y15eqykYnfGiGT38%2BKBr&X-Amz-Signature=fab752a8aec93f31c957c1a93b5a73998366581d07b775fbcaa170e5e659acc7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2ZTVA5T%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T143251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIBXHQsYrcu3jIEiSGV0d3pfZo%2BdD1apWK%2FHpXe36GrycAiEA4L51pBq3BBY%2Bgrcqb%2FJAZDa%2B%2BI9NBGc9z3meLcAZV%2Fwq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDIEslMTf9rslj1k2MyrcA3bJPAFPcDTkkp%2FG%2B3fySsh6owLCXAzX68bdbOmEjcCgFjgrmViPIg29toVyqESJyoheNPPg56%2Bs835K6iU45vFmJDva%2FO%2BixJ4zbRNgW%2FqmhFXNEo7bcnb0I5hGaxwfYryPvwyGGPYQZEQIH%2BAeL0ZrCR6ssR9RXyCUBZJAmXg%2B4r6EMJPWLVx8NICGl%2B6XzFa9cfXRTBs7bJVcqPPjsz%2Fcntsu2KCDu2ZW66mWTRvSOxbGTBF4P9tCLzOCR1vz6cT3Oe3bviXalJF8iKxqvfdB5pyBhcslbu0I11FPi589RZPuFVNhBemxmudlDGDE5LH9GmOYOE0MUokbVnlt4qHpZPi5VFrCZlhpJFSu67BLPb%2F1luowwskk1AHIYMxcM37NPkJJ0WITZllcPf3ks9vQJ78kq%2FFVjxM7%2Fbmt9OsnADpWLHA50LKG3RaIIZZRC4dUXNdpvQ2m9Ix9madWKeVhfL1d8PYr2HOVDNRv1UiwZLGJeXhIpmXorMhYC%2BTYwqtPiKP1Yec7fQEsWXrqYneJbs9Sk6APwYPDhAIt0ZChrkrq9mWh16Os6kjVMKWgnS1TE1rF6hAWwuCb%2BQSwfoX60Bl7AAB96qQ7GCUtf5CnESCiFG7m8FycLyGXMMSixskGOqUBePqxCri5B3m6R38isACWaaF0YXyqForreWfHnGwjpTeR%2Bj9KfZOY4ti8GYSSl8fG0KUc7AYQ0asl%2FGKVr26QcbQLmHwcUPeP3356teqetu9lQb4IK%2BZ9H4%2BK60kFmUbJLSJI0LQaVh6PGMvtCjYenNZr3gDqX4elLmqGbQ4b5ej3ktq54cxNoYdX1D94cvcRmyXChy65Y15eqykYnfGiGT38%2BKBr&X-Amz-Signature=98e4531c0ca6039a08a4c4cdb5e27f3005e52f75465c317428db2e727317a8ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

