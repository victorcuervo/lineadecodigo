---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466727ISQLR%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T083900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAt86paNT%2BZEZ5znzYY4aEx0FhqY5n3YWVqFF9HGrV6NAiAGrQtEYb4OVrfffTo5YWxatTSp38PmSAeUXuO5iwS5hSqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5%2FuWXIimYklwz4hIKtwDzCRh1vcUwp7tRUJ3cRUPxZyjPYhJn7YbQaL09ntl0ZjPj9RAgtiD9xyJv5PJTj1ogzFWdYXvcX3Q%2BcEq%2F3ysJZhVZB%2Bp9IvMsnJLHlzR2a0grPAPfbAjnRIy9m2abXP7AAXl7M44BsBloIUt5lDGPxh8qY1%2B5cLR6ZgQYIzvy5jB0UP5HwkJUR94w0td7%2FVaw6%2FFhpJqzoG0AnuRqDarebs44GlE%2BHxLB2LsnlEanfe7kh4QUDeVG7onwZ2RJvrCawx5Byxfgjy7zxuq0AN4RGXc%2FsalYsNt163c%2F3al1opmux%2FNgWcWkf2WVp5YjFYqr%2FaWCS1VywJF79%2BERh%2FDujlYKYVmiIj5HJnGfUWHHNIGmKhadDFwBpdG96197%2FOhor%2BLwq7GasO8gTyAaOUZQvrundy5grpl4pqQwamWyahofcCsrvTA9FqZ4pmwnm%2BBUGktdP3eaCZyaQFX2ghvwvbhKXKgf07v0iktJSg4GLin4bb5%2FIS24wcdi2HulpbASefMEaGocDIRDuQV2VbLxbDWV2iCqQoQI5sWGBrOfQVVxFZTp7NTwumIJkTVULD%2F0d5gA5rquojS5f7o18q14KgvjJ3rWd91zHW1rWpKmVpUv2cvfHC51fDVrVcwzazfyQY6pgH9yJIirtrx2rphTZrda8sM7an1k5bmEp6EAE2C0DosiiM7qMEhy2ddYXpToTNHoS9A5YXMFNt8gRa0n5F9M3jn%2B2ZPlxxjuxb87nMYVJIe4v0X9LznWtAU5D5ouHJpVyNg3v2pGCbfGGhuy8rA1mbeDP8ETTFMnez32OZ%2FNUF4yXYIFvuHkj8myKe878AyuiOffy0yQKFJj5gBF0HLyUlsxv5YEMIX&X-Amz-Signature=9dc67fcf9d8de446439688275a979fdc8274a32934f8b5a81b35b99b1e0ec45b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466727ISQLR%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T083900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAt86paNT%2BZEZ5znzYY4aEx0FhqY5n3YWVqFF9HGrV6NAiAGrQtEYb4OVrfffTo5YWxatTSp38PmSAeUXuO5iwS5hSqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5%2FuWXIimYklwz4hIKtwDzCRh1vcUwp7tRUJ3cRUPxZyjPYhJn7YbQaL09ntl0ZjPj9RAgtiD9xyJv5PJTj1ogzFWdYXvcX3Q%2BcEq%2F3ysJZhVZB%2Bp9IvMsnJLHlzR2a0grPAPfbAjnRIy9m2abXP7AAXl7M44BsBloIUt5lDGPxh8qY1%2B5cLR6ZgQYIzvy5jB0UP5HwkJUR94w0td7%2FVaw6%2FFhpJqzoG0AnuRqDarebs44GlE%2BHxLB2LsnlEanfe7kh4QUDeVG7onwZ2RJvrCawx5Byxfgjy7zxuq0AN4RGXc%2FsalYsNt163c%2F3al1opmux%2FNgWcWkf2WVp5YjFYqr%2FaWCS1VywJF79%2BERh%2FDujlYKYVmiIj5HJnGfUWHHNIGmKhadDFwBpdG96197%2FOhor%2BLwq7GasO8gTyAaOUZQvrundy5grpl4pqQwamWyahofcCsrvTA9FqZ4pmwnm%2BBUGktdP3eaCZyaQFX2ghvwvbhKXKgf07v0iktJSg4GLin4bb5%2FIS24wcdi2HulpbASefMEaGocDIRDuQV2VbLxbDWV2iCqQoQI5sWGBrOfQVVxFZTp7NTwumIJkTVULD%2F0d5gA5rquojS5f7o18q14KgvjJ3rWd91zHW1rWpKmVpUv2cvfHC51fDVrVcwzazfyQY6pgH9yJIirtrx2rphTZrda8sM7an1k5bmEp6EAE2C0DosiiM7qMEhy2ddYXpToTNHoS9A5YXMFNt8gRa0n5F9M3jn%2B2ZPlxxjuxb87nMYVJIe4v0X9LznWtAU5D5ouHJpVyNg3v2pGCbfGGhuy8rA1mbeDP8ETTFMnez32OZ%2FNUF4yXYIFvuHkj8myKe878AyuiOffy0yQKFJj5gBF0HLyUlsxv5YEMIX&X-Amz-Signature=7b0a43e36296b3f5c2ac32896b2e8207333e024e39e09762da1d25ffad717847&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

