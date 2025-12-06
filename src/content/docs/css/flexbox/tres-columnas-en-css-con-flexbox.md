---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TY45XZCG%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T151725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBorx43bR2BCsLYf9PglFj6w6PbgF2eKhDAkTdkzHkzXAiBV7Gl01lxl5wdfiqINU3jKjLoS%2FxHNoBksrw6mUTsLzyr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMgm1ommSMsiuhBLNnKtwDqNSjvBITq7J8fqwtTnJGl7CN5%2BXQrsoByHfpy2KdM%2F%2BWwwRVAv7BgLYZV4ffUJlI%2F6kVARRL%2Bzi7SvXRD%2FXHxiO8VbsaiweP9a8xoH8IapkQbuFcGRet7v9Rr4JUKLIDwc2t0d83ehJ9vI1SY87J9luxe0tm3N4uiT%2FXPqSYH%2BfT6iO%2BSS%2BcxNHdGrVMYjeXUj%2BhDIessi1HrMz6fwHRyps6tTkF4fy9KDVtGydTOO3NgeuPQ85wDMoFy1wGQsjgpnxTKjLw3wTveMFUzxmWB5gRBz1t2r1lnplsW%2ByZBoltr%2BUed22vtew%2FIJsNBWcOt5skrQS2%2BZsVnGxTZ0M98QAIPZqqTtz2xTHx4Zup6hPGZK4uXreMmp3WiFAkPIW69xoQMQRPj4iq7r5clAJBwKy9SRo7qGDm94b57AobH7msT2hUHUTTNLmZYH2ZvJV0efnpWSOAAyHBNqJAZdT5cppwEJPvZZrlsdF5AcSlq2gJJdpM3rwYxYJybF6qqMOSALU6JcL9UQ3x9t2%2BOkojA7KNzB84aSsCL%2FQRnshfPDN7OCLZsOM1DfRV5pJMpsG5ttUg%2B3Rp7JEofwBEZXUBQFj7NPpkHGDqRfaluIK53KtrXjcTnAvb1Waull0wj6fQyQY6pgGh523GS7nAnUy9KSRRm778FmaGLvCA4PZgTzzDVjQL6kcspIamGkKb5MTmb%2F4nRJmY911DXMo8XsmIl51Irl%2F932kPQbotbF1LYJttFKFYMITU8JX5KfdEVChV83XAI8yxjxYf2uSrPOKN7TUMzG64YYXeE3O9yQjLc6rNqZo9zAoemgfZhlyb3nRv%2Fp4UhKh8dW0GYiw060VwxReS7NoNl4vjsXpM&X-Amz-Signature=f978d4458cd1ef037a894bfd1dc15d87506c274078986be245c181591bcb623a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TY45XZCG%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T151725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBorx43bR2BCsLYf9PglFj6w6PbgF2eKhDAkTdkzHkzXAiBV7Gl01lxl5wdfiqINU3jKjLoS%2FxHNoBksrw6mUTsLzyr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMgm1ommSMsiuhBLNnKtwDqNSjvBITq7J8fqwtTnJGl7CN5%2BXQrsoByHfpy2KdM%2F%2BWwwRVAv7BgLYZV4ffUJlI%2F6kVARRL%2Bzi7SvXRD%2FXHxiO8VbsaiweP9a8xoH8IapkQbuFcGRet7v9Rr4JUKLIDwc2t0d83ehJ9vI1SY87J9luxe0tm3N4uiT%2FXPqSYH%2BfT6iO%2BSS%2BcxNHdGrVMYjeXUj%2BhDIessi1HrMz6fwHRyps6tTkF4fy9KDVtGydTOO3NgeuPQ85wDMoFy1wGQsjgpnxTKjLw3wTveMFUzxmWB5gRBz1t2r1lnplsW%2ByZBoltr%2BUed22vtew%2FIJsNBWcOt5skrQS2%2BZsVnGxTZ0M98QAIPZqqTtz2xTHx4Zup6hPGZK4uXreMmp3WiFAkPIW69xoQMQRPj4iq7r5clAJBwKy9SRo7qGDm94b57AobH7msT2hUHUTTNLmZYH2ZvJV0efnpWSOAAyHBNqJAZdT5cppwEJPvZZrlsdF5AcSlq2gJJdpM3rwYxYJybF6qqMOSALU6JcL9UQ3x9t2%2BOkojA7KNzB84aSsCL%2FQRnshfPDN7OCLZsOM1DfRV5pJMpsG5ttUg%2B3Rp7JEofwBEZXUBQFj7NPpkHGDqRfaluIK53KtrXjcTnAvb1Waull0wj6fQyQY6pgGh523GS7nAnUy9KSRRm778FmaGLvCA4PZgTzzDVjQL6kcspIamGkKb5MTmb%2F4nRJmY911DXMo8XsmIl51Irl%2F932kPQbotbF1LYJttFKFYMITU8JX5KfdEVChV83XAI8yxjxYf2uSrPOKN7TUMzG64YYXeE3O9yQjLc6rNqZo9zAoemgfZhlyb3nRv%2Fp4UhKh8dW0GYiw060VwxReS7NoNl4vjsXpM&X-Amz-Signature=bccf52082f3099253b627289466cf79609fc352eeec88d192af099ea55962ad9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

