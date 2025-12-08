---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZWVAYWD%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T035615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCF%2FpXySquJ9lJ20U8Bq1Sn2ZlpDud1l3%2BLWc7%2BDJy36gIhAIIVgG0Ku%2BUU5bVOwdQFJYDM4HytDwsXOqa8mRbKDBY3KogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyx1I6o%2B8xHP%2BkiMFIq3APfS6aoiSN2yMUW1CmmtoIVbce%2FYHQ5Bug0y1jW1kQX4SfUBfr42cWCYvE862r1niWtmLZMErKrNGEWGH%2F0hmeKwQI5EFFnPEWXHhr3FsHzhsH3FHBnDEZjBCm1rvwP6h5gjAHaXws828dLngTBIy%2BsKQNS1rOABHxpR5QiYztJz%2FGFHvMzZwdSG3RhNhnfGVfmbThoaXkUrMTsCZrXuODuWLBCQ%2F4oQBEwuUJBVzesU0WrqAI9JU4Ta2myzDHSmC8hpchq7%2F93qPBmhcol5v8vkGPHl5GeyrvsybOscsTRyBTyse1gMLIs0Z2gZfthea2HG2%2BIlRijMVfgBaOfDRimp2QkbABWS6%2BHYys0K%2BZUX2zWyHN%2FHNOAFql%2Bdx8MfnWTk9bw6LjkiaNRPEraB3mq2eWFhIPd5BSQUaB9mLLUhYM8T7Z1cfEJx25mZ7wvf0zs2hqG%2BdOhXVJTVWJWvSOymqr8Ew5l0EGIFTz1OiuRJTod9ZtqwIP6dwnCJAP0omaszFkdkab4QfLZcwopf7Ew2OJPbg7qrs38jg2E%2F%2FIh%2BftzxQtZoSEKDqWR4DO%2B1LgS5pGUNoItL6QGUJ1MWldJd1rGtsCd9%2B2UUKQEBhVu%2BzFFZVN%2BYJ0d24dvxzColNnJBjqkAVIrf6ZfDZen5XWiMnFqupEepsYlfDsuwdcwTMqzLBkSpec6fSHJd26%2Fm7%2FXPe3igbTqZAmZ%2FLTxaeOKJGNaiO1vxHdbe1d0B2lPfhNr3lR34Eq%2BDyPo1PDFCGSwgj3ffL%2FdYsuylNpTg4340NNxj5TObu0XaPJG3TaBhJM6BYFHQ2A4o4DcYSF%2BfigZgz9p6z%2FKcP0EOwaBXGhpKDBJ7V4Cz8rI&X-Amz-Signature=8c40ac9210221ae50d46cdb310ba19de03b2ea090ca44ca603618f1e4f1a3fe3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZWVAYWD%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T035615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCF%2FpXySquJ9lJ20U8Bq1Sn2ZlpDud1l3%2BLWc7%2BDJy36gIhAIIVgG0Ku%2BUU5bVOwdQFJYDM4HytDwsXOqa8mRbKDBY3KogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyx1I6o%2B8xHP%2BkiMFIq3APfS6aoiSN2yMUW1CmmtoIVbce%2FYHQ5Bug0y1jW1kQX4SfUBfr42cWCYvE862r1niWtmLZMErKrNGEWGH%2F0hmeKwQI5EFFnPEWXHhr3FsHzhsH3FHBnDEZjBCm1rvwP6h5gjAHaXws828dLngTBIy%2BsKQNS1rOABHxpR5QiYztJz%2FGFHvMzZwdSG3RhNhnfGVfmbThoaXkUrMTsCZrXuODuWLBCQ%2F4oQBEwuUJBVzesU0WrqAI9JU4Ta2myzDHSmC8hpchq7%2F93qPBmhcol5v8vkGPHl5GeyrvsybOscsTRyBTyse1gMLIs0Z2gZfthea2HG2%2BIlRijMVfgBaOfDRimp2QkbABWS6%2BHYys0K%2BZUX2zWyHN%2FHNOAFql%2Bdx8MfnWTk9bw6LjkiaNRPEraB3mq2eWFhIPd5BSQUaB9mLLUhYM8T7Z1cfEJx25mZ7wvf0zs2hqG%2BdOhXVJTVWJWvSOymqr8Ew5l0EGIFTz1OiuRJTod9ZtqwIP6dwnCJAP0omaszFkdkab4QfLZcwopf7Ew2OJPbg7qrs38jg2E%2F%2FIh%2BftzxQtZoSEKDqWR4DO%2B1LgS5pGUNoItL6QGUJ1MWldJd1rGtsCd9%2B2UUKQEBhVu%2BzFFZVN%2BYJ0d24dvxzColNnJBjqkAVIrf6ZfDZen5XWiMnFqupEepsYlfDsuwdcwTMqzLBkSpec6fSHJd26%2Fm7%2FXPe3igbTqZAmZ%2FLTxaeOKJGNaiO1vxHdbe1d0B2lPfhNr3lR34Eq%2BDyPo1PDFCGSwgj3ffL%2FdYsuylNpTg4340NNxj5TObu0XaPJG3TaBhJM6BYFHQ2A4o4DcYSF%2BfigZgz9p6z%2FKcP0EOwaBXGhpKDBJ7V4Cz8rI&X-Amz-Signature=13122fea0dd4ede6014bbdf53e326fc0bf86b1372ddba8a50cfa77e754a3265c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

