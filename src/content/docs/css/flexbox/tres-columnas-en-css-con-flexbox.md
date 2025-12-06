---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXLFYUX2%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T034734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAvYz1sCgLreMMaLgGQLGJ7NvHpitSwaV0aQk107qY%2FkAiEA%2F1nbg%2FkpCID%2FvBuf8m24owEDepuaqGALlH0GCSHE2Wwq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDJ4zNQL%2FIv15IFgUqSrcAx%2BL9a7l1GxWBHVrb5rVKLsBORC9s4ylSP2E3B1iFyHO7kcK1xuQMEt6UD7mKUJR3lOPdZzDIpBeZ31DJRV%2BGGXlMNpjFxJjV5FIl9RBDwh74uk1xDah84rnp548eLdYyU2Q86InudJgiClyX%2Fpl%2BiUTzxTmym%2F7cbI6cw%2BuPAKe1JBEyKoq7qd%2FMRbuAM%2BGs1vjbcZGv3Kxze0UEZH%2FJOortky9ZhYx%2BI0gY8p03EdCOZw6pRugFtZnkE6ob62tn1mQrZU%2FzMJgiIqjMccXOy7HURpZv5zLUTWqm1icI3QpVyX%2FsbhvTKBYg7v7C37VXGA%2BM208m%2Fkh1ndmP9vn%2FKtjx%2Ffc%2B2mOEdfRvCcX2IDUy%2FOPLqUBbt5QpRV%2F6THnVuf5UHh6IQ2D0VUI3dUESfcaksvPHYeCoicIj5jbb1j%2BsLiS9Cw5s93YgEUE1Es9iz5jp8XouTwFfBR%2BwiOpsVn15r9JssV6pK1CktBxhhiBCV%2FuGiUbIb0Se4P7sDKJ2a2K1LDo1VI%2FtgHjx57tucwfzth8P8UYI3FWkv7LXX4iihTdoFPqbTXqjNS3zKiNBiXkca2B%2BCMv1LoPDlDZLUwTHgUjTb9T7kipI3OLmtO4yW%2FYDmbUM20lL0nvMOLDzskGOqUBRJ5nzY4AbeyAAh1T01I107yJZJJwzWTpRyAe7ZF0EkoDUjWw2QNy8DX%2F7LciqFGvgaS5m8gnVUTJwr%2FqxVm151F726wT1axbwCdehK7u1xzPQEkTRjdDZgyaxMkaMB392Iw078bPLe6KY95oWAaMtiKCLTHDiMK%2FKAK3lGJUY24ZCDdx0rQZ9xMtYlMWxRQrsEF3geHAf7nPIpFdBOdNJif%2BchWu&X-Amz-Signature=f4c213f3eec659249f64e8cdd14a02382d88ab12d159d13edee13ecec75aa504&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXLFYUX2%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T034734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAvYz1sCgLreMMaLgGQLGJ7NvHpitSwaV0aQk107qY%2FkAiEA%2F1nbg%2FkpCID%2FvBuf8m24owEDepuaqGALlH0GCSHE2Wwq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDJ4zNQL%2FIv15IFgUqSrcAx%2BL9a7l1GxWBHVrb5rVKLsBORC9s4ylSP2E3B1iFyHO7kcK1xuQMEt6UD7mKUJR3lOPdZzDIpBeZ31DJRV%2BGGXlMNpjFxJjV5FIl9RBDwh74uk1xDah84rnp548eLdYyU2Q86InudJgiClyX%2Fpl%2BiUTzxTmym%2F7cbI6cw%2BuPAKe1JBEyKoq7qd%2FMRbuAM%2BGs1vjbcZGv3Kxze0UEZH%2FJOortky9ZhYx%2BI0gY8p03EdCOZw6pRugFtZnkE6ob62tn1mQrZU%2FzMJgiIqjMccXOy7HURpZv5zLUTWqm1icI3QpVyX%2FsbhvTKBYg7v7C37VXGA%2BM208m%2Fkh1ndmP9vn%2FKtjx%2Ffc%2B2mOEdfRvCcX2IDUy%2FOPLqUBbt5QpRV%2F6THnVuf5UHh6IQ2D0VUI3dUESfcaksvPHYeCoicIj5jbb1j%2BsLiS9Cw5s93YgEUE1Es9iz5jp8XouTwFfBR%2BwiOpsVn15r9JssV6pK1CktBxhhiBCV%2FuGiUbIb0Se4P7sDKJ2a2K1LDo1VI%2FtgHjx57tucwfzth8P8UYI3FWkv7LXX4iihTdoFPqbTXqjNS3zKiNBiXkca2B%2BCMv1LoPDlDZLUwTHgUjTb9T7kipI3OLmtO4yW%2FYDmbUM20lL0nvMOLDzskGOqUBRJ5nzY4AbeyAAh1T01I107yJZJJwzWTpRyAe7ZF0EkoDUjWw2QNy8DX%2F7LciqFGvgaS5m8gnVUTJwr%2FqxVm151F726wT1axbwCdehK7u1xzPQEkTRjdDZgyaxMkaMB392Iw078bPLe6KY95oWAaMtiKCLTHDiMK%2FKAK3lGJUY24ZCDdx0rQZ9xMtYlMWxRQrsEF3geHAf7nPIpFdBOdNJif%2BchWu&X-Amz-Signature=9b26de8c9b2d663a58f7c4c56fe874c48a4ee8c7734fd9b0736967a074dc5221&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

