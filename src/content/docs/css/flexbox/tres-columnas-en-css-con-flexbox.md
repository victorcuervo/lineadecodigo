---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VQACIKI%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T001048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDtcoTkXfhQZIVgB%2Fos5pwR7PX%2B1SSHC1VC8cmlInGTwIgRegP%2BVTf1%2BLuCTQv2uJOWByCxkhqe%2FIzC0EOaIe6A0wq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDJvEOeCas7Rc6YGYaSrcA14C17Emvlu02cfdZawQo%2Bv4o5L14qePsakuKDFz4St5KK4qKQxr%2FrVh0sXLx%2BiMR3OnVlKoONhC2%2FAGhi22wMoSgbdgqlvb327gQ%2FP6B2pgI6RLt9gRZtPg4QId5AWo0GYRbw3XnTEt61sX09nqloEX5gH%2FrneKAGLmAcHvNBk2DYWQqnndDo4IYA6ifZhJALYLrz0CcLtbcv2KBgfIV0MP4qnFp%2BXmb6cqJvhosoyf2X4x48gabgd7RNtnK9w9UPZGROXkkOZNUhx0ySn5YRlGlxq1iWIb%2B%2Fn%2BxA9YKsKmpeC9umH8272W89wDRmnyWXlpSjJgYoViO1B6MSPM3AZXMdnYxzijKU0hQ1JyYDSvfRV%2FGRBS5dlW3Is8M9cp5Vp9kK1cEKjLzjoVnDyzS%2BpJOeoUjP4r0Q6cJ0SSj3KkkkBh8mrDEmFX6%2BO90HdRME8UQ6Y3soefjGVuAuVEDSspiLXeNHgtJ%2FZow7SvjMWndF1bbVOXlp8cwH%2FMI9nfv%2BFYzInXDP5LWh6Wr5l7LTmB69wGBybJyXAd4fTIc1%2BwfW%2Bk8QnMqLunRWjSqmw9QYogz9vZk%2Bw4jbQaK2KkyS8VKMjAPSy5IstW5algyNEsRzhyb7jRiW5I5bMcMKrGzckGOqUBCHorWraka2s3bcCSsCI6vgM7lfqAJHxD1WTPJPrFUZljLNKJuz4Fw%2BU3Y62ylJjpfKqSHs2JVuvJbPP0aR8oeshcFjsaRRHztVmVxW21UqpQzTEfzJ8OyHC%2FVWdg1JxlBnRH6qlEfzzmkzFVRouvG7%2FR9yr5ZcHju71vMxd1CDR7hbo%2F69RGCF90eFP3Zcjl3vbHlOCIQIVE4bT88kCYLIV5ZQaY&X-Amz-Signature=173056b468626ee15f285fac194a84f9ef4d31af7a15328a1db15ae0258e1736&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VQACIKI%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T001048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDtcoTkXfhQZIVgB%2Fos5pwR7PX%2B1SSHC1VC8cmlInGTwIgRegP%2BVTf1%2BLuCTQv2uJOWByCxkhqe%2FIzC0EOaIe6A0wq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDJvEOeCas7Rc6YGYaSrcA14C17Emvlu02cfdZawQo%2Bv4o5L14qePsakuKDFz4St5KK4qKQxr%2FrVh0sXLx%2BiMR3OnVlKoONhC2%2FAGhi22wMoSgbdgqlvb327gQ%2FP6B2pgI6RLt9gRZtPg4QId5AWo0GYRbw3XnTEt61sX09nqloEX5gH%2FrneKAGLmAcHvNBk2DYWQqnndDo4IYA6ifZhJALYLrz0CcLtbcv2KBgfIV0MP4qnFp%2BXmb6cqJvhosoyf2X4x48gabgd7RNtnK9w9UPZGROXkkOZNUhx0ySn5YRlGlxq1iWIb%2B%2Fn%2BxA9YKsKmpeC9umH8272W89wDRmnyWXlpSjJgYoViO1B6MSPM3AZXMdnYxzijKU0hQ1JyYDSvfRV%2FGRBS5dlW3Is8M9cp5Vp9kK1cEKjLzjoVnDyzS%2BpJOeoUjP4r0Q6cJ0SSj3KkkkBh8mrDEmFX6%2BO90HdRME8UQ6Y3soefjGVuAuVEDSspiLXeNHgtJ%2FZow7SvjMWndF1bbVOXlp8cwH%2FMI9nfv%2BFYzInXDP5LWh6Wr5l7LTmB69wGBybJyXAd4fTIc1%2BwfW%2Bk8QnMqLunRWjSqmw9QYogz9vZk%2Bw4jbQaK2KkyS8VKMjAPSy5IstW5algyNEsRzhyb7jRiW5I5bMcMKrGzckGOqUBCHorWraka2s3bcCSsCI6vgM7lfqAJHxD1WTPJPrFUZljLNKJuz4Fw%2BU3Y62ylJjpfKqSHs2JVuvJbPP0aR8oeshcFjsaRRHztVmVxW21UqpQzTEfzJ8OyHC%2FVWdg1JxlBnRH6qlEfzzmkzFVRouvG7%2FR9yr5ZcHju71vMxd1CDR7hbo%2F69RGCF90eFP3Zcjl3vbHlOCIQIVE4bT88kCYLIV5ZQaY&X-Amz-Signature=2b28091c6a35c982ec5eac85e969fd8f23f9bf06ce1a1ee254edc85b6d0a3ed7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

