---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X74IEH4F%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T095409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDnKnKC8pWbp%2FKCbTye8ArNRTPxazHQZG5Ts%2FBZ6sBH7wIhAPT9rz60zpajhOzENb35kxEVPEfhGUXayN0yljLd24KLKv8DCHIQABoMNjM3NDIzMTgzODA1Igxg8tgCgEaOMg%2FQuG4q3ANHMjJ%2Bjd9kZseDemRNnywiFbpUsspfbd7FYvWHoj2sJxD1A2aZ4yqztFaY7tHv731wcMpavQhZ9F1QYmzpyrLn2RSMYotPj8r6ky3T6uy8dyW7WJTz0MkfEuZgt67JLxh1V5d3OBS4%2BrViIgBwCUuvoYgdLt8qp5YNAV7wkHPpOO8iEKcblEflqOkUzcKAYrr%2BpwmuPyKdY2pRejvLNdWwP7NZX36%2BNQ008jVMJqoCd1NCZsAs2DVU7%2BkWUooGOGF6ctueMoCexUSebi33GT2w7GZ72VEsM7Rnz7zJuDBklv9wcmw%2F%2Fz4N4sQ7hQ3LF6YmGMKZLCwdgFGiW7ny7JNLDbFtcA39Vh8BViKSvHjESuZNLJGYXysWmi1TvKtsWjCYZkaf5Rx%2FxPB86Ea2SXMTEibRhqQ6dQ20Lo6nDOpj%2FOutwQbvUth4zFLQD33o0udHKscr6LtKYbKUVemw8R9gAFIpLpxkcGBahwajpqcskCynhaSinWq97%2BrpaWk7kPy7p%2BZYDyiL1NSN%2BI5GXrJa9RoNHRIBvUdZuTMIACBOqu1A%2B5N8sXec5YM1e2RJAsRZfrKVU2TnUokXoqSEh8x3UO2xGO0MBgQqfkZ%2BJEeunwnmxFIwQJJ8JYQ8EzCV68%2FJBjqkAdw3xjLzdLgYMSvGS1cSL86HsdPpDwee1UJuS4y3%2BHXQCicttSj5D4%2BhCJ36K%2FGVaSYeCgzoBw6ghyVWWcdcnhLGfiBFiTtyXQS9B3VjuCpr50yGkM9c4dxS2E1v139Z2LvJYOSqIbuxaKYrc7DKDsBsNa4pkqG28o3ycKYChVGzCRTnhEMJql1OOmlvkemVeMa6dlyW4VOYedc%2F%2F8LpEg9boDNA&X-Amz-Signature=11bc1048220dc10958a5b6facd3eb313c85dd266f1ad189313d630c0d335d237&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X74IEH4F%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T095409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDnKnKC8pWbp%2FKCbTye8ArNRTPxazHQZG5Ts%2FBZ6sBH7wIhAPT9rz60zpajhOzENb35kxEVPEfhGUXayN0yljLd24KLKv8DCHIQABoMNjM3NDIzMTgzODA1Igxg8tgCgEaOMg%2FQuG4q3ANHMjJ%2Bjd9kZseDemRNnywiFbpUsspfbd7FYvWHoj2sJxD1A2aZ4yqztFaY7tHv731wcMpavQhZ9F1QYmzpyrLn2RSMYotPj8r6ky3T6uy8dyW7WJTz0MkfEuZgt67JLxh1V5d3OBS4%2BrViIgBwCUuvoYgdLt8qp5YNAV7wkHPpOO8iEKcblEflqOkUzcKAYrr%2BpwmuPyKdY2pRejvLNdWwP7NZX36%2BNQ008jVMJqoCd1NCZsAs2DVU7%2BkWUooGOGF6ctueMoCexUSebi33GT2w7GZ72VEsM7Rnz7zJuDBklv9wcmw%2F%2Fz4N4sQ7hQ3LF6YmGMKZLCwdgFGiW7ny7JNLDbFtcA39Vh8BViKSvHjESuZNLJGYXysWmi1TvKtsWjCYZkaf5Rx%2FxPB86Ea2SXMTEibRhqQ6dQ20Lo6nDOpj%2FOutwQbvUth4zFLQD33o0udHKscr6LtKYbKUVemw8R9gAFIpLpxkcGBahwajpqcskCynhaSinWq97%2BrpaWk7kPy7p%2BZYDyiL1NSN%2BI5GXrJa9RoNHRIBvUdZuTMIACBOqu1A%2B5N8sXec5YM1e2RJAsRZfrKVU2TnUokXoqSEh8x3UO2xGO0MBgQqfkZ%2BJEeunwnmxFIwQJJ8JYQ8EzCV68%2FJBjqkAdw3xjLzdLgYMSvGS1cSL86HsdPpDwee1UJuS4y3%2BHXQCicttSj5D4%2BhCJ36K%2FGVaSYeCgzoBw6ghyVWWcdcnhLGfiBFiTtyXQS9B3VjuCpr50yGkM9c4dxS2E1v139Z2LvJYOSqIbuxaKYrc7DKDsBsNa4pkqG28o3ycKYChVGzCRTnhEMJql1OOmlvkemVeMa6dlyW4VOYedc%2F%2F8LpEg9boDNA&X-Amz-Signature=d762f47dffca5009284b0ba993d2c86a78141e5411c43d1644860308ba7dbd1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

