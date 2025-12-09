---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFLNVBPI%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T034508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDN9%2BJwfVThr6NG%2B4QD9CTAyovHOuLQDjZ%2F1FZ8SlEmgwIhAOJhAHueIiva3udyj4skNOls%2FGUpsnXHWX9TyQuJNt%2BSKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwPHhmazzshk1mcJn8q3AMd25ioa%2F8uV2WsnkzwjiL3sgSXDrIB%2B9rGt8wUqR%2FHzmFwDaeFohbUQ6WUrJaRp6x53R5luXTU2eTwOpYHV8A7qKkcDG38zV2BqqJNVpNKJTW41zzMBDMXOf5Oyq1UHRT7Ers2hbudxuiaZoPz%2FR9fBRCcWHg1Y7O67FkVZXrD5zQIwLtqi8Y0rgeVK0XCpde2xq5UYsWsFTkVoEqFJh%2Fr9MVgHxbgbOcddxxxakp4zf0nbseDN5qrze5tlSH2beh26Lc4GetM7iEzWDlpDgsY11laKJsD0Zj2RgJcnNx64NdaiMATmP00pcLSetV34ABCQ6OfIqDNcphIfQ5OkH7t24NTql%2FhH905rYinXBmGVD6%2BdFEm2aXMF9f%2B2BHxDucjRETI1n4I1olLZZGEN1c3L%2B306P6PVkDOuYH9RcAS3ROJDQ4JqSwcO%2FTSKdEec77VGJGoOWsSMpg0ZS5ySAbKKDR7vnTLV%2BrvJfYoa5th2lWUyH5rWPA7xX%2FrrWKERdTv4LCThlS74tWQYwEVn1YU%2BIya4lEtmDXXEM0LJVhzrI6SNUO%2FLmr5fXGaliuXYHlU3bJyriTNrXe%2F9UAgVgX51W%2FCxy2u0LNmirNY%2BCZdK2Yn8GU4W05dku4gnTDmrd7JBjqkATjk01wieZeRZq278ZtCgbhhJB9fSeAflGJejbACza9EAckwMuClPwkX74jYXnEcYECJQoXVmCL9Yf4YMKI71GfgD%2FO8usA0YYifC1C41bRVuN5o4rdHIdq8d1Oe7QXiW%2FyNfx74q6TPZr7VmCG1GDnLYi5xovLpAZHINsVYDxJMpMOjLZGWlJpAzOSirTq9t5QIA%2F9QPqG%2BwRX4iYwBP0DsT8qF&X-Amz-Signature=9ecedcddb68a5d3aedfb52d199738668455b600d8cb526dddcbfd192dc3d02a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFLNVBPI%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T034508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDN9%2BJwfVThr6NG%2B4QD9CTAyovHOuLQDjZ%2F1FZ8SlEmgwIhAOJhAHueIiva3udyj4skNOls%2FGUpsnXHWX9TyQuJNt%2BSKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwPHhmazzshk1mcJn8q3AMd25ioa%2F8uV2WsnkzwjiL3sgSXDrIB%2B9rGt8wUqR%2FHzmFwDaeFohbUQ6WUrJaRp6x53R5luXTU2eTwOpYHV8A7qKkcDG38zV2BqqJNVpNKJTW41zzMBDMXOf5Oyq1UHRT7Ers2hbudxuiaZoPz%2FR9fBRCcWHg1Y7O67FkVZXrD5zQIwLtqi8Y0rgeVK0XCpde2xq5UYsWsFTkVoEqFJh%2Fr9MVgHxbgbOcddxxxakp4zf0nbseDN5qrze5tlSH2beh26Lc4GetM7iEzWDlpDgsY11laKJsD0Zj2RgJcnNx64NdaiMATmP00pcLSetV34ABCQ6OfIqDNcphIfQ5OkH7t24NTql%2FhH905rYinXBmGVD6%2BdFEm2aXMF9f%2B2BHxDucjRETI1n4I1olLZZGEN1c3L%2B306P6PVkDOuYH9RcAS3ROJDQ4JqSwcO%2FTSKdEec77VGJGoOWsSMpg0ZS5ySAbKKDR7vnTLV%2BrvJfYoa5th2lWUyH5rWPA7xX%2FrrWKERdTv4LCThlS74tWQYwEVn1YU%2BIya4lEtmDXXEM0LJVhzrI6SNUO%2FLmr5fXGaliuXYHlU3bJyriTNrXe%2F9UAgVgX51W%2FCxy2u0LNmirNY%2BCZdK2Yn8GU4W05dku4gnTDmrd7JBjqkATjk01wieZeRZq278ZtCgbhhJB9fSeAflGJejbACza9EAckwMuClPwkX74jYXnEcYECJQoXVmCL9Yf4YMKI71GfgD%2FO8usA0YYifC1C41bRVuN5o4rdHIdq8d1Oe7QXiW%2FyNfx74q6TPZr7VmCG1GDnLYi5xovLpAZHINsVYDxJMpMOjLZGWlJpAzOSirTq9t5QIA%2F9QPqG%2BwRX4iYwBP0DsT8qF&X-Amz-Signature=92acd639d76eaf786239ddb351405f85466d89bdfc7a6890926448979a1a0e19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

