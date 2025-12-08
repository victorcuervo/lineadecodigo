---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRH43F26%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T070654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChsbrptucNK1R9XCHwyb2hoImL8DnTh5Bs49f9a2k5KwIhAN3Wu%2FmnjFteFiWShgdxMVoQguO9jV1y979pf9L2CM8%2FKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyAV2WBaedfgL6DAYsq3APvGRsv5%2FmSUzGBxcDsBcjJ8f30SUNYXzt0Zf34dyc4wijFmDGb3IhlrUnYp%2B2v6ZZOASx3AVAOxtM8gIlp7riTF%2BDUBlDwtSelB7VPgXIkMzOKBBplOrNqiXad8toFGMUoxoGj3cXZTvuUe%2BvdofTy6srvHKWHjFyy6BUquE1Fc1CT9%2FbnupGZFNAcrL22v%2BsSw%2Fz7cdWU%2F%2F16IOLNm%2FuLYBlD%2FQtXltxzPi%2B0Se6bvgzcN9VKmaaGopPaYoRzCuXdHhN6zN0Ohy73iMJbFIQ9YSv5%2FG8TsdhIfMg%2ByIEjYIZa8MyH%2BM1ffyDdAgmpfoz7z85S1Cv2PuyBWtGxCaraqwMbHc21SmDHBz%2BM2XvgN9G5fGIJw%2B78dUs0NyZD%2BnkcUggpdyR50tDxmKK2pYJ3iebYCl66pnoyqx2X5UQesReT%2FxwdZ%2FhjPt1v9MvfkI1EWU2ldWcRaMnFEPRZysE6h20QMqPpHV5VPOhy8ZLJMiDDEJ%2BD%2F%2Brg6xLA5h47qy64fPOkqdxAzQedH8xJyXtrl3RShYRRjghjqV%2BzSSQulFJHAKeZrDuLb4cSyqsim%2Fte6OqkFU4BYaRj9bz6lOxqMfsFZfZtlcvGwz64bRucH85lsM9MB4%2BRADrMwzDt7dnJBjqkAdtjDFUwl14HOAVkx%2BHQSgqAT3kLOcIg4JX0itiINVoD%2Fp93D1sfZRiGqNuPYsDZwwUQ9rQn31Mk6%2BRb6KJgQWy90FbB7hxqHwa%2FTIV6nkEMYl5aXA9rEi5Q8l0%2Fv%2Bt9vHwO8ACNzDBVdemtOE53zeM17aCSYzHkjpqVU7UPNAR3VaF32OJrzCS0BM9Js9vKhP5Rkww5n5rlwt2wAKsx7nCrbVYF&X-Amz-Signature=33c125cf27c0c0e9983c0afd355f9accd6db237a250705786df3a188f24d4d18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRH43F26%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T070654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChsbrptucNK1R9XCHwyb2hoImL8DnTh5Bs49f9a2k5KwIhAN3Wu%2FmnjFteFiWShgdxMVoQguO9jV1y979pf9L2CM8%2FKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyAV2WBaedfgL6DAYsq3APvGRsv5%2FmSUzGBxcDsBcjJ8f30SUNYXzt0Zf34dyc4wijFmDGb3IhlrUnYp%2B2v6ZZOASx3AVAOxtM8gIlp7riTF%2BDUBlDwtSelB7VPgXIkMzOKBBplOrNqiXad8toFGMUoxoGj3cXZTvuUe%2BvdofTy6srvHKWHjFyy6BUquE1Fc1CT9%2FbnupGZFNAcrL22v%2BsSw%2Fz7cdWU%2F%2F16IOLNm%2FuLYBlD%2FQtXltxzPi%2B0Se6bvgzcN9VKmaaGopPaYoRzCuXdHhN6zN0Ohy73iMJbFIQ9YSv5%2FG8TsdhIfMg%2ByIEjYIZa8MyH%2BM1ffyDdAgmpfoz7z85S1Cv2PuyBWtGxCaraqwMbHc21SmDHBz%2BM2XvgN9G5fGIJw%2B78dUs0NyZD%2BnkcUggpdyR50tDxmKK2pYJ3iebYCl66pnoyqx2X5UQesReT%2FxwdZ%2FhjPt1v9MvfkI1EWU2ldWcRaMnFEPRZysE6h20QMqPpHV5VPOhy8ZLJMiDDEJ%2BD%2F%2Brg6xLA5h47qy64fPOkqdxAzQedH8xJyXtrl3RShYRRjghjqV%2BzSSQulFJHAKeZrDuLb4cSyqsim%2Fte6OqkFU4BYaRj9bz6lOxqMfsFZfZtlcvGwz64bRucH85lsM9MB4%2BRADrMwzDt7dnJBjqkAdtjDFUwl14HOAVkx%2BHQSgqAT3kLOcIg4JX0itiINVoD%2Fp93D1sfZRiGqNuPYsDZwwUQ9rQn31Mk6%2BRb6KJgQWy90FbB7hxqHwa%2FTIV6nkEMYl5aXA9rEi5Q8l0%2Fv%2Bt9vHwO8ACNzDBVdemtOE53zeM17aCSYzHkjpqVU7UPNAR3VaF32OJrzCS0BM9Js9vKhP5Rkww5n5rlwt2wAKsx7nCrbVYF&X-Amz-Signature=5abfab653d8056ca5f322aeac70dfa5bc23ecb7d90dbc49747b81a3ea2ad9fda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

