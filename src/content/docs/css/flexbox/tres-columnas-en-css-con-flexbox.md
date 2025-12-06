---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643HNQO2E%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T113104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGbfLaRmXBEWkV%2BYY0OM6neWRc0fBxgK84TnuFQ48DFyAiB5FsmOAparU%2Bydwwa%2BjKtT3DOmIexAd0e2XUv1JUFuCyr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMLq%2Fr4IrkYrTXwLdgKtwDwlhexpbFjUHpiqFxCx83kBd4h8fsPd%2B%2B4v2hFy56CXst7TPI2oxL2mRVA5LI6cbGQunEzQfeE1d5OKYqZKR76PyTi8nIxHTxgSF9p4mRlf0jD92PHtdiwuLQV%2BLIeOZY2NXXlqYijDpgMCeu8D1EIDTWUrT0ooi56tbeW6Zq7mWnXMtzrXn4kvAkvKpLDXo57F2%2FFFE%2B20SE3WhlQNSX9b1Q%2Bnth5cCiTeYxbgSlQz%2FEEPKXng5G7J%2BJcEsABmVEhUMCx34%2FxC9CrwkkPiNFsvgDoIBP%2BI2qiHC%2Fhv75G8PXbYgIzeJYqTEkrnuIzcn1bHu2nGvz%2F1POPlKjwXZ%2BQuFOYhIjuxiDHwBqyqnWxgPIbNyJQa22%2F%2FkfQXqQ%2FdnLkoY8i1HtR2U1vioWMMMj3neTQ%2Bluw2tkT5wxQeMi6F9oIuPCMuTNuyCtitbk5dCR%2BURhccaWUk%2FlUkI6fQRWScDE5n9661vvhJoiYI4IGvh79DDuNnZmrcL9kCU4ni8U%2FRjfgoATjbtyrt70ytj%2FlS0uSAkd95BqP2OT6Nnb99E2D5PieP5SzPicJ1QjYBn7rqx%2Fna%2BsGJNxGFvHw0cWH0WHndHVByn8DOxLvi7AuSdhQczfXlhFcgT21SswhKfQyQY6pgH1tfqGNYSWtMIgr3PaYHVbkm0NWi7GGpZB7S5Xwg86sm833VTl3GIUvHuUuGrqys77Ua9NAo0rigvtaUOdo4Qz47H0uOU4Qk4dKDHs9fto5XHiyPs9goWQQI2%2Bn7XEBDGE0qYIk%2FVrmavSu4WbuONLUQ5hEq8WT4i66rMwxyXs5FbkuM3MJLlifi1PdfbAC8hf99SPGFzGXNg%2FxpL%2B%2BFPCPRTBG8bh&X-Amz-Signature=e30656d8c7d2bea0be067b95d1831b47b6d7ae278333565a6b0ca9c7db0559e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643HNQO2E%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T113104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGbfLaRmXBEWkV%2BYY0OM6neWRc0fBxgK84TnuFQ48DFyAiB5FsmOAparU%2Bydwwa%2BjKtT3DOmIexAd0e2XUv1JUFuCyr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMLq%2Fr4IrkYrTXwLdgKtwDwlhexpbFjUHpiqFxCx83kBd4h8fsPd%2B%2B4v2hFy56CXst7TPI2oxL2mRVA5LI6cbGQunEzQfeE1d5OKYqZKR76PyTi8nIxHTxgSF9p4mRlf0jD92PHtdiwuLQV%2BLIeOZY2NXXlqYijDpgMCeu8D1EIDTWUrT0ooi56tbeW6Zq7mWnXMtzrXn4kvAkvKpLDXo57F2%2FFFE%2B20SE3WhlQNSX9b1Q%2Bnth5cCiTeYxbgSlQz%2FEEPKXng5G7J%2BJcEsABmVEhUMCx34%2FxC9CrwkkPiNFsvgDoIBP%2BI2qiHC%2Fhv75G8PXbYgIzeJYqTEkrnuIzcn1bHu2nGvz%2F1POPlKjwXZ%2BQuFOYhIjuxiDHwBqyqnWxgPIbNyJQa22%2F%2FkfQXqQ%2FdnLkoY8i1HtR2U1vioWMMMj3neTQ%2Bluw2tkT5wxQeMi6F9oIuPCMuTNuyCtitbk5dCR%2BURhccaWUk%2FlUkI6fQRWScDE5n9661vvhJoiYI4IGvh79DDuNnZmrcL9kCU4ni8U%2FRjfgoATjbtyrt70ytj%2FlS0uSAkd95BqP2OT6Nnb99E2D5PieP5SzPicJ1QjYBn7rqx%2Fna%2BsGJNxGFvHw0cWH0WHndHVByn8DOxLvi7AuSdhQczfXlhFcgT21SswhKfQyQY6pgH1tfqGNYSWtMIgr3PaYHVbkm0NWi7GGpZB7S5Xwg86sm833VTl3GIUvHuUuGrqys77Ua9NAo0rigvtaUOdo4Qz47H0uOU4Qk4dKDHs9fto5XHiyPs9goWQQI2%2Bn7XEBDGE0qYIk%2FVrmavSu4WbuONLUQ5hEq8WT4i66rMwxyXs5FbkuM3MJLlifi1PdfbAC8hf99SPGFzGXNg%2FxpL%2B%2BFPCPRTBG8bh&X-Amz-Signature=1381c85c8c77546abb49736165a5e5c3cbe491e3d7866a5c825853226b1511ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

