---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662N7FMS5X%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T063007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAHmnO2Ys1WMkwvN%2BBdSroIeEDkNf58suTSf%2Fvuo6tRUAiBVFNuBSVM9RNl13kQ1JICn4JoNmDgfckhtKHCJrrgBpCr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIM2S%2BKY8DBOD69wpZvKtwD9onQlCW%2F1rPe%2FY7n%2B5sAPSBziZhtD1GVQdjDQ7g8i7I7mDuzcZ%2FJ4xxxmk2uFrQx1yKh9Dz8qc4hM8GeP60hwqcHorr%2FxtEdGwpHJI3Wb%2FYZRpMy4Hfus8MXhQxzRt%2FszZGf1pi0SWi%2FqoHv4fIgErJ%2BARCHn1PxDm2VSIAG9IUXgdouyhmVvElqU7aLOcc4O5OohwP6razD11sfdRJsAJWMj0AIsk39JV0SW9fk9qXCooBriNkcj%2B0QPsA4UBP7lOfgxtnTFETglSJe5%2FqNs6ixNSWOaprim71S10AEZ5IFdQwpMBVYpxHC6iOqjGy3z9IYkpZzf%2B0%2BWXzJlWEs6Kv82T0lahko52TEyZaAqeTIbeHyz8ctNP0fLXXNFkG%2Be1ohwNdbgjmVc41brqwbedGvQQIKvDRl%2F4Mh58Lq%2BKTIOpoCtzoZYoraNLr5mvjVx79iQnwtu8zEWI9PHdQjPi0w7zpo7MCbjl%2FeC47EYqfgLs6khSXOj4LyG1GX2pbTckiNw7tEfgezBIx90OW0OfPGg%2BPUaTtHyRpUAeJ1cN%2Bs4J4ZtLvJpZdYCREfDN7a15dMHCOI%2FFLkCm5ySQI%2FtdPq%2BRh9oZwU0xjKE2MdHaDj4rYR2doQDA%2Bn0Uow2qrJyQY6pgFC4k5HxWJXY5fXGmOYsqpciQxFSv3HvapmWk34%2FY6G9Kr5aOvObeohEpbBy0bNWI8Jb5ILkKzqCeLX8Lw%2BfVeBJxLOAJwg0l9U55Dg7mfPhB5dC4FmSqY%2FyCQzHtdttPatS6fbJ0qYLgpy%2F9Dcy296axROqb5P4aUtqKdrMPYOq3KcFtQBL3F2BGGs6yIQxqL0ibZf4hwQ7HjJMb1znQDwOeUB0e6T&X-Amz-Signature=e9d065ef2c823953ff5f8b839abbdd457834f78f041f550cbc7b1fbf02cbd385&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662N7FMS5X%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T063007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAHmnO2Ys1WMkwvN%2BBdSroIeEDkNf58suTSf%2Fvuo6tRUAiBVFNuBSVM9RNl13kQ1JICn4JoNmDgfckhtKHCJrrgBpCr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIM2S%2BKY8DBOD69wpZvKtwD9onQlCW%2F1rPe%2FY7n%2B5sAPSBziZhtD1GVQdjDQ7g8i7I7mDuzcZ%2FJ4xxxmk2uFrQx1yKh9Dz8qc4hM8GeP60hwqcHorr%2FxtEdGwpHJI3Wb%2FYZRpMy4Hfus8MXhQxzRt%2FszZGf1pi0SWi%2FqoHv4fIgErJ%2BARCHn1PxDm2VSIAG9IUXgdouyhmVvElqU7aLOcc4O5OohwP6razD11sfdRJsAJWMj0AIsk39JV0SW9fk9qXCooBriNkcj%2B0QPsA4UBP7lOfgxtnTFETglSJe5%2FqNs6ixNSWOaprim71S10AEZ5IFdQwpMBVYpxHC6iOqjGy3z9IYkpZzf%2B0%2BWXzJlWEs6Kv82T0lahko52TEyZaAqeTIbeHyz8ctNP0fLXXNFkG%2Be1ohwNdbgjmVc41brqwbedGvQQIKvDRl%2F4Mh58Lq%2BKTIOpoCtzoZYoraNLr5mvjVx79iQnwtu8zEWI9PHdQjPi0w7zpo7MCbjl%2FeC47EYqfgLs6khSXOj4LyG1GX2pbTckiNw7tEfgezBIx90OW0OfPGg%2BPUaTtHyRpUAeJ1cN%2Bs4J4ZtLvJpZdYCREfDN7a15dMHCOI%2FFLkCm5ySQI%2FtdPq%2BRh9oZwU0xjKE2MdHaDj4rYR2doQDA%2Bn0Uow2qrJyQY6pgFC4k5HxWJXY5fXGmOYsqpciQxFSv3HvapmWk34%2FY6G9Kr5aOvObeohEpbBy0bNWI8Jb5ILkKzqCeLX8Lw%2BfVeBJxLOAJwg0l9U55Dg7mfPhB5dC4FmSqY%2FyCQzHtdttPatS6fbJ0qYLgpy%2F9Dcy296axROqb5P4aUtqKdrMPYOq3KcFtQBL3F2BGGs6yIQxqL0ibZf4hwQ7HjJMb1znQDwOeUB0e6T&X-Amz-Signature=891945eafed58ed151b81bbe2b00bece7dfd090ef11ea7dbdeea9bb0fca025af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

