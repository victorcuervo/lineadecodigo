---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSNJSDHU%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T080942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBhIp7hmjnXeufHBdNxWTy3eaGoeDST598%2B%2BIVT1%2FhOnAiEA71hpeGgz09NxGEc%2Fogmtb2HgzTEzu22l48iRnFlgYkgqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBRpu5Mr2RhCLYgiYCrcA1DLRgPtlaNmjSC0w75yDISSgxAfQ8fqhiuce%2BWrzifY8ql17AQkypf88N32doTJ5AtVyxoFTz0MzhvaRRh5Sf55Xtw37KpI9rOW10NaLk26zrs80ryTOIGSswLT%2FJnUWfAcbD%2BkoMhdsuOJHZXa8bNIKe8Z1gD6BVCOt8XaixQvebFkI5D0%2FvSfXelr%2B7UZS2fdZpDqnCaE5LIi%2B1O4kA0X0qt4ESdWleQ0opekmVV7bPbsJmyF%2BjLsqOj%2BX%2BLkFiNBmN1zXDjxR3Xv%2B1ghVtnvnCLhL3isqileECyXJx%2BGaLKg8GsrRMbgQRSuryZMNh%2BSjBERscW3JzBpozZxOVLEg5QAKJ4FftxITprTOm7ViVFGlFcP5W8%2BR7ab3mHJfyo1Oh%2Bqv7Z2rn6ec4DeFyMIhhmsO1dCkhrgVVh2khCpNTrxvreboIf9a9%2B1t31CDWzYMjn0gpHHMzuTXHVcr87Ib9ogLhpOZVlL88%2BViPX4J9JykPDVv0JNiuhzQTYUK9imquqjrG8WqidOWEt4cR3W6oow1K5sUN%2BPa01NdAAIWqFvVtTlzvOy2dlVsAK2%2F2Rb7gBA2eKQTdXCpF%2BK1MCotp%2FOqztXcQFkHl9IRd4uEAy%2B3XJecwYQjXAYMM%2Ba1MkGOqUBv%2BevhzL9tcc%2FCkJhL17eNI5ANHFOvZq12jqpCWDQUTd4qxW7cduYnGX3spLciNsB5u4mHfIr1bt8fQwSWOzyccX1GaClYIoBvIgm8ffFWBpDtWdsW59LqhX6erDGDx3lSxgQlKwyLlVv%2F6e2XByObKPGK6uvXuIU9PevB6VQp4BRVdij0%2FPnqPk1QJkCzBCbw81CBG6tHissxyd%2B2dYHxOH45oMA&X-Amz-Signature=ed07fd364c7d000c5b2847f5ade1c15937df846a66e06496a0860d583ebfcb56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSNJSDHU%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T080942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBhIp7hmjnXeufHBdNxWTy3eaGoeDST598%2B%2BIVT1%2FhOnAiEA71hpeGgz09NxGEc%2Fogmtb2HgzTEzu22l48iRnFlgYkgqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBRpu5Mr2RhCLYgiYCrcA1DLRgPtlaNmjSC0w75yDISSgxAfQ8fqhiuce%2BWrzifY8ql17AQkypf88N32doTJ5AtVyxoFTz0MzhvaRRh5Sf55Xtw37KpI9rOW10NaLk26zrs80ryTOIGSswLT%2FJnUWfAcbD%2BkoMhdsuOJHZXa8bNIKe8Z1gD6BVCOt8XaixQvebFkI5D0%2FvSfXelr%2B7UZS2fdZpDqnCaE5LIi%2B1O4kA0X0qt4ESdWleQ0opekmVV7bPbsJmyF%2BjLsqOj%2BX%2BLkFiNBmN1zXDjxR3Xv%2B1ghVtnvnCLhL3isqileECyXJx%2BGaLKg8GsrRMbgQRSuryZMNh%2BSjBERscW3JzBpozZxOVLEg5QAKJ4FftxITprTOm7ViVFGlFcP5W8%2BR7ab3mHJfyo1Oh%2Bqv7Z2rn6ec4DeFyMIhhmsO1dCkhrgVVh2khCpNTrxvreboIf9a9%2B1t31CDWzYMjn0gpHHMzuTXHVcr87Ib9ogLhpOZVlL88%2BViPX4J9JykPDVv0JNiuhzQTYUK9imquqjrG8WqidOWEt4cR3W6oow1K5sUN%2BPa01NdAAIWqFvVtTlzvOy2dlVsAK2%2F2Rb7gBA2eKQTdXCpF%2BK1MCotp%2FOqztXcQFkHl9IRd4uEAy%2B3XJecwYQjXAYMM%2Ba1MkGOqUBv%2BevhzL9tcc%2FCkJhL17eNI5ANHFOvZq12jqpCWDQUTd4qxW7cduYnGX3spLciNsB5u4mHfIr1bt8fQwSWOzyccX1GaClYIoBvIgm8ffFWBpDtWdsW59LqhX6erDGDx3lSxgQlKwyLlVv%2F6e2XByObKPGK6uvXuIU9PevB6VQp4BRVdij0%2FPnqPk1QJkCzBCbw81CBG6tHissxyd%2B2dYHxOH45oMA&X-Amz-Signature=dad3425087947f349cb7e7ba3558ffebd4b6c4ba66b456e7848dc6c39660fed3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

