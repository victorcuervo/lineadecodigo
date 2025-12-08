---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TGUA7I2%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T223722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDC9ChSTHH10Hg1aHQ24AtfUgEGN8iL81ijhrgd3FduLAiAyWKtnQKgcSSQVZzpRqbnJ5abx%2FtAAag%2BxDrPV5nqyniqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrjBeb0vzh9L6aouMKtwDcya7C1Eo%2FW5LpQcHgKR9%2F1CW%2FgZeGK5Q8zTE7fjv5LKneQiGnt654a%2BrxlcTK9dP41H4q3WuWHU%2F5i6ExmhcOzK4TewyDky4bCOGosjyHIey0edjuSxc4CLccvKIsEUDz29r9uzt5xDel7TSPBcvXUsri4xnwjJ9ToHcDko0kBrnse6JTtdQK4mv2CGiAthC4EN20MjX3wK%2FyV%2BeQUaKgsygflOtekQAXT%2BgpXFAx7G%2Fy1CctIwJn2bmiay4QXJ%2BrS6ytKvfTRpPae1xgwr6PGnjGs55LhmYLaAHkkYi6626CjXabgwa1Id9IEkuuF9AdlsBrjNrvAJhnckeSAXxZkk%2FUEOp%2BjXI7Lqcv4YZTb09aFC%2BJdFc82QmcGaVgg2FhtvmN8v7%2BYXD7yi4Ov4lWE52rJo5U7ltG2ltYd5po76CxjTlXVNbac%2BgSptUrSMaOi4TOjU7pp2%2BLslA79YW7khiAsDjXDZuiAfEWfCA%2FxhMmDKG48ENCk6cj%2FRBnAl5v1hc8a2YAyrRgIP46Cpc%2Bz6cikF6kxy9H8F3PXNE0aIhO1w8Ax64DbMbtpx6ckelIIQ7SLiFvSKFX%2FAxNGJyZVUoAv0T01lzp7gazzdh6Qj5ku8ebqJ%2BP91FI10w6qHdyQY6pgE3RfHXUno4UOi%2BODwftMa4PoA6TAgg%2B3kgCP7%2FcQlCkgfkathq9yVNI8cC%2FIsqxxNMfuIn55wkT2CxSj6gc5KjGtX5teXGO%2B%2FQIs8%2FmTzDFuaFR1%2BibQux3vgkDKnnUipE9aMWb6OWnbEOprs24DehCdRrRQAuTUWtPMqpG6RJ7S97XVswbWIpmD6AIG0uHWgQST3z89XSUbSSjeMNi5jKy3cfYvoT&X-Amz-Signature=b78bb05475de41821ac0a4d7ec0cdb9293db80f5cb3a25a257d0437619b7b611&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TGUA7I2%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T223722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDC9ChSTHH10Hg1aHQ24AtfUgEGN8iL81ijhrgd3FduLAiAyWKtnQKgcSSQVZzpRqbnJ5abx%2FtAAag%2BxDrPV5nqyniqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrjBeb0vzh9L6aouMKtwDcya7C1Eo%2FW5LpQcHgKR9%2F1CW%2FgZeGK5Q8zTE7fjv5LKneQiGnt654a%2BrxlcTK9dP41H4q3WuWHU%2F5i6ExmhcOzK4TewyDky4bCOGosjyHIey0edjuSxc4CLccvKIsEUDz29r9uzt5xDel7TSPBcvXUsri4xnwjJ9ToHcDko0kBrnse6JTtdQK4mv2CGiAthC4EN20MjX3wK%2FyV%2BeQUaKgsygflOtekQAXT%2BgpXFAx7G%2Fy1CctIwJn2bmiay4QXJ%2BrS6ytKvfTRpPae1xgwr6PGnjGs55LhmYLaAHkkYi6626CjXabgwa1Id9IEkuuF9AdlsBrjNrvAJhnckeSAXxZkk%2FUEOp%2BjXI7Lqcv4YZTb09aFC%2BJdFc82QmcGaVgg2FhtvmN8v7%2BYXD7yi4Ov4lWE52rJo5U7ltG2ltYd5po76CxjTlXVNbac%2BgSptUrSMaOi4TOjU7pp2%2BLslA79YW7khiAsDjXDZuiAfEWfCA%2FxhMmDKG48ENCk6cj%2FRBnAl5v1hc8a2YAyrRgIP46Cpc%2Bz6cikF6kxy9H8F3PXNE0aIhO1w8Ax64DbMbtpx6ckelIIQ7SLiFvSKFX%2FAxNGJyZVUoAv0T01lzp7gazzdh6Qj5ku8ebqJ%2BP91FI10w6qHdyQY6pgE3RfHXUno4UOi%2BODwftMa4PoA6TAgg%2B3kgCP7%2FcQlCkgfkathq9yVNI8cC%2FIsqxxNMfuIn55wkT2CxSj6gc5KjGtX5teXGO%2B%2FQIs8%2FmTzDFuaFR1%2BibQux3vgkDKnnUipE9aMWb6OWnbEOprs24DehCdRrRQAuTUWtPMqpG6RJ7S97XVswbWIpmD6AIG0uHWgQST3z89XSUbSSjeMNi5jKy3cfYvoT&X-Amz-Signature=432a0b6aa6e7b3601173dcb4f9e1e00e42b4245d8a7ddc53d7f86b5a0f16fa0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

