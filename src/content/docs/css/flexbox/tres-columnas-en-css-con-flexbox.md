---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q25WV6EQ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T141739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3y9okQsUy7ubaq%2Fux6SMraRYSF3mmXEp0HAMky1P7bgIhAJ16Q0u6%2FFtydn5dFbhfXt0P4aegPlZVAEd2xyQhRGqqKv8DCF8QABoMNjM3NDIzMTgzODA1IgzOuG%2FnzR5BPoF6Qbgq3APTc03xnPcrrBpzHT2oPgoGz5gU11uFhQM3Tz7zF1g4roVe8Ev%2B16g729UfA5Bp36ufSDMo6muGTsX%2BQrRVEE04EhT1b6UJWuHEyABzsbNelMpJz0ysptHKX%2BGc3%2FlP9gHifY2Gm0Cx18l434QnRPT1%2FP4r8KUNGSjO%2Bd3g2eVfnSnerOtkEJE2edTTIOBfLHQFBydL1B3aGwF8t95i6tcpbGN5jHzVT9YEs3NyYw9QkajpQYi8oIyjroh2weyU9hw3CG7vRR5SNWnHnl8eOM5ntCon7wU5FD4dVOhqv%2BKseXFVA2pwLyxXcVfi2WSP4n9h7v27fOTjp454Mmz5jH6lzqHXTYRkIoUgBVJjIkENQHMPEo3MX3jk%2BvXUb2S8TghO8L3AKukl2mVYFBa9fnNGvjoGuzyuCRI0CbgztsHvLD86cDwH0eBXXpzPiNnnwBO7oYYCGoz8xRoAZxCqWhsroprlpNfAwQFV%2BFdtvssjJg5O7pShJcPtjfun3tZQ2mxmYmG2T1zFB2%2BuVobS4RojkGQ6FZaXtSkfVlXhmbdAhszlVwumdlJ27OyAaRkbIgc3OC9sN14vYviQzP85MDomILvPBV3WzCwJPkdRWsW4MF%2BdhDkAhQAy%2FbymRDDGycvJBjqkAdJf6lPnm93Id4j9d7YdLXbmiM5vq03b3ceTERla%2FA%2FOk7qMKD%2FF2wK2XGOZI72jZ53WxE%2Fz7L7A6bgKnxU0a4a0Vdr6oorYM83Es28NQ1IgjjPcdCyil5yxwH4zsE4C5JXmfclSQ%2FHJmJMTmRQ2UegpQvfT6u5jElNjdKWJuiSJIi5nO5jCLJeYLqU2LHVZp0jqw2752WhYZt9enGKTI8FoQcJb&X-Amz-Signature=87900634179d1b575ec61c90a4fa6ff6b6baa507fe651857ff56b6e10ed3ab31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q25WV6EQ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T141739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3y9okQsUy7ubaq%2Fux6SMraRYSF3mmXEp0HAMky1P7bgIhAJ16Q0u6%2FFtydn5dFbhfXt0P4aegPlZVAEd2xyQhRGqqKv8DCF8QABoMNjM3NDIzMTgzODA1IgzOuG%2FnzR5BPoF6Qbgq3APTc03xnPcrrBpzHT2oPgoGz5gU11uFhQM3Tz7zF1g4roVe8Ev%2B16g729UfA5Bp36ufSDMo6muGTsX%2BQrRVEE04EhT1b6UJWuHEyABzsbNelMpJz0ysptHKX%2BGc3%2FlP9gHifY2Gm0Cx18l434QnRPT1%2FP4r8KUNGSjO%2Bd3g2eVfnSnerOtkEJE2edTTIOBfLHQFBydL1B3aGwF8t95i6tcpbGN5jHzVT9YEs3NyYw9QkajpQYi8oIyjroh2weyU9hw3CG7vRR5SNWnHnl8eOM5ntCon7wU5FD4dVOhqv%2BKseXFVA2pwLyxXcVfi2WSP4n9h7v27fOTjp454Mmz5jH6lzqHXTYRkIoUgBVJjIkENQHMPEo3MX3jk%2BvXUb2S8TghO8L3AKukl2mVYFBa9fnNGvjoGuzyuCRI0CbgztsHvLD86cDwH0eBXXpzPiNnnwBO7oYYCGoz8xRoAZxCqWhsroprlpNfAwQFV%2BFdtvssjJg5O7pShJcPtjfun3tZQ2mxmYmG2T1zFB2%2BuVobS4RojkGQ6FZaXtSkfVlXhmbdAhszlVwumdlJ27OyAaRkbIgc3OC9sN14vYviQzP85MDomILvPBV3WzCwJPkdRWsW4MF%2BdhDkAhQAy%2FbymRDDGycvJBjqkAdJf6lPnm93Id4j9d7YdLXbmiM5vq03b3ceTERla%2FA%2FOk7qMKD%2FF2wK2XGOZI72jZ53WxE%2Fz7L7A6bgKnxU0a4a0Vdr6oorYM83Es28NQ1IgjjPcdCyil5yxwH4zsE4C5JXmfclSQ%2FHJmJMTmRQ2UegpQvfT6u5jElNjdKWJuiSJIi5nO5jCLJeYLqU2LHVZp0jqw2752WhYZt9enGKTI8FoQcJb&X-Amz-Signature=ce4f956f26372b1eef29bb844e6329e6f9d2a4afbedd51868759780846cacf57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

