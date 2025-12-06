---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665P52Q4X6%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T113228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD41mwjuQPDEkCctvLqaHoA8lM1oF0XjtMMlRKOi81b3wIgWxjNG8Vrz3nU4Lak9JoYgSEdd6lUO8uFDd25AS%2FBJMoq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDIRd0Jw0VgqpTFXkKCrcA9aPFUnBmb12CRye3VRppxt4e6HcCmOK1wZ3jHLUwaImKzxMRDs782h8zcIP%2BwmAF8NMpPe7986CoxERPToJG2k0LKDhcATGzvNsjP1Nr6R2qluXQQCDd7vYf3%2FnEgdnmWnke0CGPeso%2BfbT68PXQlzAYQBqcfxO8qdbNKa6WKKzTuPxiRY1GzzWr1GjEleyvhFhtUpXs%2B6C26%2FiaTgR4yl26pax7PcCN42itoazff8d9ENdAkh5vDjyvIQk23td5NUtlLxYMLWmoRrK7j2bkfqRWF0R7Eg3VbnBjX9v7vWzCXWpkIzrKQ0c73rYIhcxQOP0qQ7p%2FIiGgR4lJed73lXU4oC%2FlBKlMfySipNfoftBatHl4lmDNQdaOBr3ZImkTVRkviUThrfrZ3Q2%2BpUV%2FFDmlVbKMw%2BrLN13reVst0x8ERyPVwNVeM12R%2Brczvy%2FXtFSo7nYegNp9TokwsHWTy4G8tr5eK6UZIyWKEu4%2F8fGu1FYc%2Bn6h9rBiU2Xgn%2BbpwVcAxfBmHIVz2XAHnM%2Bco34GSXeYzONW%2FWdWdrbPaTZotU4Bh67epTn8HOjLq%2Bx25apYbDwBCPZEleozCJMtJAaLW1EeWf4rxD0I5I8%2FAmKOFVC1Sdfuwt%2F2GpkMNim0MkGOqUBicJn5djdy6DlAuR08lhkqnx1%2FMWJv8LflKzHrD36IeamnAh9eesUY0zjR%2FeC0WTfTt9hfHGGqzl5alechXjWOJoz2kNRQilk1olp1x%2BPSsaV3NXEFWxLf6K7w1QU0wZH09WKv12KwLroscwrzQxSmBakmU410JBsOc8x6Y%2Bdhf%2B0mkLXpbpbZyLoqrvF3781c0Ors1soTDcFNX4G1XPhpRZyX9ZX&X-Amz-Signature=a2c948d43a2c952b3b1dcad9eee47f7ff7579e0e0b196b90501163b524b16a18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665P52Q4X6%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T113228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD41mwjuQPDEkCctvLqaHoA8lM1oF0XjtMMlRKOi81b3wIgWxjNG8Vrz3nU4Lak9JoYgSEdd6lUO8uFDd25AS%2FBJMoq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDIRd0Jw0VgqpTFXkKCrcA9aPFUnBmb12CRye3VRppxt4e6HcCmOK1wZ3jHLUwaImKzxMRDs782h8zcIP%2BwmAF8NMpPe7986CoxERPToJG2k0LKDhcATGzvNsjP1Nr6R2qluXQQCDd7vYf3%2FnEgdnmWnke0CGPeso%2BfbT68PXQlzAYQBqcfxO8qdbNKa6WKKzTuPxiRY1GzzWr1GjEleyvhFhtUpXs%2B6C26%2FiaTgR4yl26pax7PcCN42itoazff8d9ENdAkh5vDjyvIQk23td5NUtlLxYMLWmoRrK7j2bkfqRWF0R7Eg3VbnBjX9v7vWzCXWpkIzrKQ0c73rYIhcxQOP0qQ7p%2FIiGgR4lJed73lXU4oC%2FlBKlMfySipNfoftBatHl4lmDNQdaOBr3ZImkTVRkviUThrfrZ3Q2%2BpUV%2FFDmlVbKMw%2BrLN13reVst0x8ERyPVwNVeM12R%2Brczvy%2FXtFSo7nYegNp9TokwsHWTy4G8tr5eK6UZIyWKEu4%2F8fGu1FYc%2Bn6h9rBiU2Xgn%2BbpwVcAxfBmHIVz2XAHnM%2Bco34GSXeYzONW%2FWdWdrbPaTZotU4Bh67epTn8HOjLq%2Bx25apYbDwBCPZEleozCJMtJAaLW1EeWf4rxD0I5I8%2FAmKOFVC1Sdfuwt%2F2GpkMNim0MkGOqUBicJn5djdy6DlAuR08lhkqnx1%2FMWJv8LflKzHrD36IeamnAh9eesUY0zjR%2FeC0WTfTt9hfHGGqzl5alechXjWOJoz2kNRQilk1olp1x%2BPSsaV3NXEFWxLf6K7w1QU0wZH09WKv12KwLroscwrzQxSmBakmU410JBsOc8x6Y%2Bdhf%2B0mkLXpbpbZyLoqrvF3781c0Ors1soTDcFNX4G1XPhpRZyX9ZX&X-Amz-Signature=7daa45852991e8d2b6dce81b2636f992883ec0264b1aae1075836a4124cae3f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

