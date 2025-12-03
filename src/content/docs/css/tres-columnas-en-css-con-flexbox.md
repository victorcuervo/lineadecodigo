---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastupdates: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T64OH7NZ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T213246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIATyndCQvMJCI918ORZ4u1Xz2txJ5L8HsrM8Jqn5yZ6aAiEA1Gjdn3a79x%2BZTIUuv2CvoyfyW2f0kt8UwO%2BdwOCVuukq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDOZdLB4O11MdgI%2FerCrcA9RRXNRVKxDshyjn0BcpDes7LIxLanQLVgSK86Ab3%2B%2B7pl6BH4S6HKioS1OrY7V0jczlMFa5C8BhebjOUxW00AcfBSTgnhR1GolXdr8C8vDqD3snYEHmJMBWzBqK%2BNyVdX9AOYC%2BIo5r7wKRl9oG1fOPhLk%2BloqdqlgHnhaXSccqvT8MRIavFXzsdIFsCWCjnRdOgZuoZHmvOvVyDvSGIbtle4s9JGv17Q%2FQgM0Jde8l8tktzho9q4%2BGBI%2Beeh5p7x48zD%2BErEXd2QfVO5NGusKxzSOjpOipi6GuWefvop%2BpI1SP5P2zQqufvkqdd%2BS3BEcrVYGK29ET4sZtgRqnpx0M6PrBS3Os4XnYHosrQBpaxs1oDZqxG8yVu7pbcghoH2y7mfBj5wkuBiecJgIX0QuacxtskgRCLivjLbuuWeD8yjbZdNtB19Q9GL0sykBv217%2Fc7LyGZ7XCX5lQJm2%2B%2Fl86VqrkWUBzNXQ2QYkcLX7mdSdKOxQoHxRwdo2yKVU4kfOzv%2Fjp0yt%2Ftulkwlt3oSuZd2Hu4%2BKfoA%2BmttJBHwRnYTNq09PUTF%2FTwsXWY7CvDaS0AXhFZ19fOR3DPqh2AkUTyQuuRkS2XaoE4eDPUmkb2o7OBMK9x%2FvkXpEMM%2B9wskGOqUBo6AxqBOT3MsCwcptexo6PVx2i60oAeYxXjlMl7xTjfljYkeQHwfd4KDb8R%2BLdxuSCRuetQvaMurOBPgxkNegEm5wn%2BnEn4iBdw%2B%2F6wavD%2FogMvYrYysR4WZPN5eAgnvw8YcjeZ4oi%2BfMPn7yx7WnDSyVAMf0y2J0CjgZM0iWvh5%2F4Ut2VqtpUgnSjJls%2F76q6Rm5tJ7KW5Er5MpwKVVpOOtVSiFz&X-Amz-Signature=da828a4bd2f91aebefde4570427c3275a96068fc80089873cf48f9c0371dc4d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T64OH7NZ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T213246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIATyndCQvMJCI918ORZ4u1Xz2txJ5L8HsrM8Jqn5yZ6aAiEA1Gjdn3a79x%2BZTIUuv2CvoyfyW2f0kt8UwO%2BdwOCVuukq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDOZdLB4O11MdgI%2FerCrcA9RRXNRVKxDshyjn0BcpDes7LIxLanQLVgSK86Ab3%2B%2B7pl6BH4S6HKioS1OrY7V0jczlMFa5C8BhebjOUxW00AcfBSTgnhR1GolXdr8C8vDqD3snYEHmJMBWzBqK%2BNyVdX9AOYC%2BIo5r7wKRl9oG1fOPhLk%2BloqdqlgHnhaXSccqvT8MRIavFXzsdIFsCWCjnRdOgZuoZHmvOvVyDvSGIbtle4s9JGv17Q%2FQgM0Jde8l8tktzho9q4%2BGBI%2Beeh5p7x48zD%2BErEXd2QfVO5NGusKxzSOjpOipi6GuWefvop%2BpI1SP5P2zQqufvkqdd%2BS3BEcrVYGK29ET4sZtgRqnpx0M6PrBS3Os4XnYHosrQBpaxs1oDZqxG8yVu7pbcghoH2y7mfBj5wkuBiecJgIX0QuacxtskgRCLivjLbuuWeD8yjbZdNtB19Q9GL0sykBv217%2Fc7LyGZ7XCX5lQJm2%2B%2Fl86VqrkWUBzNXQ2QYkcLX7mdSdKOxQoHxRwdo2yKVU4kfOzv%2Fjp0yt%2Ftulkwlt3oSuZd2Hu4%2BKfoA%2BmttJBHwRnYTNq09PUTF%2FTwsXWY7CvDaS0AXhFZ19fOR3DPqh2AkUTyQuuRkS2XaoE4eDPUmkb2o7OBMK9x%2FvkXpEMM%2B9wskGOqUBo6AxqBOT3MsCwcptexo6PVx2i60oAeYxXjlMl7xTjfljYkeQHwfd4KDb8R%2BLdxuSCRuetQvaMurOBPgxkNegEm5wn%2BnEn4iBdw%2B%2F6wavD%2FogMvYrYysR4WZPN5eAgnvw8YcjeZ4oi%2BfMPn7yx7WnDSyVAMf0y2J0CjgZM0iWvh5%2F4Ut2VqtpUgnSjJls%2F76q6Rm5tJ7KW5Er5MpwKVVpOOtVSiFz&X-Amz-Signature=30171a0553401fa85d1a453c6b80268168d9fb23eabc6c99dc9dcde89d016406&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

