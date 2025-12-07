---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHR77SNL%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T193314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEz%2BDTU1EARWALDajLtqsbfjYKSw0lTI7c5GVWGEeYGgIhAOXUOew5SaMpfDTlFnPHbDYUNWJ72P8L6%2B5WdI1TPdAcKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw9esOj0ZFLWKqwpCsq3AN02dhDjeJlBvotfjwFiCDIOpEULM6uvegdJfHBGzN3xZpmsH7QuyMIzyS7nSh3RW6F%2FsASA1xqiBZpTGjNSIwo4NdkU5ExHNDSAlu7bWUuQCH%2FUGoMy6BDOqHma2KHQwEQSO0%2FhwCz1DON84OPaDfcO0yyC2O7%2BiyGVa08xRxIUyf64qG2HvcPnmmseuMIOARxJv%2BGU%2Fi9leGJisfDYppDwUrGW3QBxkf4%2Bdk9bIxzD6TSpMlYi7xHjM7QeJuECzMM8F38wP2xBvVRESWHstI2aIKORDajtI4TpSfc%2Be5YgZwR65h0G0A6hXK9TsQmzFd12YW5IoLcq6FGvUTlyCmZxAMbU411rxYlbC5zllTk0kVEWJmA4U%2BQGLT0O%2B5hk4FwDXh08DKRq9ZOtUI%2B9qpjQkjNh94DJhPSqbGSv0lYgUaHzYj4%2BJaoP8Xku7povMCaGXuXuj5aZep%2BvarEc4TEWGHbLw7JveSPtUPFiGD7ZHuQ%2BYLgTVzMek6SLUzAd%2FEvrGVEH7dCnuxdIwg%2FNLijXUKE%2FgxWkdXyI3ucqATNtdAK6uszZQqILUz90089tkXXVTqf4nJ%2FXe6h1Ek%2FEOsV4igdhnFTEEdzcz1EqXpZ3WfSBdB0blSVLOHDATD%2BqNfJBjqkAUxtKuxwG8xzIroJz88nwx2po6KYH6AKYKsDlnlkTzba1ZMF6XKFXokAxu8HMmE6VK8hokSAJf9bpJ5oQgySHdsTp2mWGSC6AP7azc9KDuWiwbVZ1be8hTbby3MPI7CkpqVA7Vj9VVYS6IRmIcqq7NVHobJi43IJ6OITu%2B1k4sms1qHRtYhFP2PeVqAjeNqOg7Jt6VH9LF5vGEJ5R6Xlkw6SqSpR&X-Amz-Signature=8be6e3e0d456e099b942f6e6975984593a31cc906717c7dafe0f26e5e01b20cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHR77SNL%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T193314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEz%2BDTU1EARWALDajLtqsbfjYKSw0lTI7c5GVWGEeYGgIhAOXUOew5SaMpfDTlFnPHbDYUNWJ72P8L6%2B5WdI1TPdAcKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw9esOj0ZFLWKqwpCsq3AN02dhDjeJlBvotfjwFiCDIOpEULM6uvegdJfHBGzN3xZpmsH7QuyMIzyS7nSh3RW6F%2FsASA1xqiBZpTGjNSIwo4NdkU5ExHNDSAlu7bWUuQCH%2FUGoMy6BDOqHma2KHQwEQSO0%2FhwCz1DON84OPaDfcO0yyC2O7%2BiyGVa08xRxIUyf64qG2HvcPnmmseuMIOARxJv%2BGU%2Fi9leGJisfDYppDwUrGW3QBxkf4%2Bdk9bIxzD6TSpMlYi7xHjM7QeJuECzMM8F38wP2xBvVRESWHstI2aIKORDajtI4TpSfc%2Be5YgZwR65h0G0A6hXK9TsQmzFd12YW5IoLcq6FGvUTlyCmZxAMbU411rxYlbC5zllTk0kVEWJmA4U%2BQGLT0O%2B5hk4FwDXh08DKRq9ZOtUI%2B9qpjQkjNh94DJhPSqbGSv0lYgUaHzYj4%2BJaoP8Xku7povMCaGXuXuj5aZep%2BvarEc4TEWGHbLw7JveSPtUPFiGD7ZHuQ%2BYLgTVzMek6SLUzAd%2FEvrGVEH7dCnuxdIwg%2FNLijXUKE%2FgxWkdXyI3ucqATNtdAK6uszZQqILUz90089tkXXVTqf4nJ%2FXe6h1Ek%2FEOsV4igdhnFTEEdzcz1EqXpZ3WfSBdB0blSVLOHDATD%2BqNfJBjqkAUxtKuxwG8xzIroJz88nwx2po6KYH6AKYKsDlnlkTzba1ZMF6XKFXokAxu8HMmE6VK8hokSAJf9bpJ5oQgySHdsTp2mWGSC6AP7azc9KDuWiwbVZ1be8hTbby3MPI7CkpqVA7Vj9VVYS6IRmIcqq7NVHobJi43IJ6OITu%2B1k4sms1qHRtYhFP2PeVqAjeNqOg7Jt6VH9LF5vGEJ5R6Xlkw6SqSpR&X-Amz-Signature=aced3a993574a104c9916bcdcc3948d1916f77d9e7cfa95d42a438202594b193&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

