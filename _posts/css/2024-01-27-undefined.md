---
layout: post
title: Tres Columnas en CSS con Flexbox
excerpt: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
categories: CSS
tags: [css flexbox]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HXDWAFF%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T132307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIEtP17f3w8Tn7Qnp41qgj6Bdudzwoy%2FXVqRc1NR%2BzfCNAiBU2yMuZeXe5ArJHDgUCZepebWhUYYKL%2Bkvun1mlbpxfCr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMp1sLIUry62qM5Y1gKtwDu26km9ybC2dbq62IDUccwBGqDq%2F%2B70gnINizgEbOTnQhTKtedKVL0kKfgrYQddFewENeqa617Jte1HR%2BI8%2Ffh7OeMKa48CdHAyrUyMI%2BwfHGJ1aNAaffFND89lgABkPq41u9SOQ8WXQUoC8pZXS3uy9tmErqJ2CSGu1ZF2IA%2BEyjYUUqQZACCVGYFLvNNNNBgW4nq6GVW2QR4TVUWwFwe3RjaG8BTp%2FephQk9noOZdpJQnoHBfWq8b4pOObJmJE4x0Cw%2BEBDA9dp9YyjvRPDRwnDW5L7LBgBFzmPZpJWunfC45eQiitqILgdD3pAD%2BVNy6%2Bk5eB4QDrBPqHDPQBDulvhDSoPOwLKe1LpjHbQXimB1cDeDe6KhoOr0GYsIPbhpJ89MIkufwRnCKEM0vjr%2BNlY%2F8HWz77ZioDT2kv6DvSL8CitYVz2dLsjcteE%2F9SXEEz%2F%2FXeYxcDcIZYpHSEmu9NAakslLKwTGA%2BQKhHV9lFL2oxG6NNvyWs2N2FDYnlPAbef1lequ5Joat92GSDVapyQrsXlJpydOIflolRQknFrAFCoa1GAwVA3HyjfT2Xb2HisX6jVYpz2slcuctm1dyA2wD6BVDxdkngOhtN9aekMJSKKd7Ph1BkJPfswqOvAyQY6pgGoJVCb2iO79VQ2sqFWb4Gg%2F3JzuDJnnXxKGRr1dPFUtSbnoMN7LAmdcHdvSgWJOmfqtjD9q20FXjx0TbsBpZjxDq6z%2Bxl%2BWXbC9BKq9BsI0q%2FEYFmTYE8Xm%2B%2B52FzTbSryETC6qIT6nbiX9ql%2BgFgJUnJEllAHYXFJItY3q76tOcPDPBPt5hpX4v1JG9c0eGVkkftkdyv6%2FOYLypfLwvnIIx7T9JTa&X-Amz-Signature=3e7ae5d6045ecd4fe17827c3583c549fa055e66d84f883f913299fe35b521ac6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HXDWAFF%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T132307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIEtP17f3w8Tn7Qnp41qgj6Bdudzwoy%2FXVqRc1NR%2BzfCNAiBU2yMuZeXe5ArJHDgUCZepebWhUYYKL%2Bkvun1mlbpxfCr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMp1sLIUry62qM5Y1gKtwDu26km9ybC2dbq62IDUccwBGqDq%2F%2B70gnINizgEbOTnQhTKtedKVL0kKfgrYQddFewENeqa617Jte1HR%2BI8%2Ffh7OeMKa48CdHAyrUyMI%2BwfHGJ1aNAaffFND89lgABkPq41u9SOQ8WXQUoC8pZXS3uy9tmErqJ2CSGu1ZF2IA%2BEyjYUUqQZACCVGYFLvNNNNBgW4nq6GVW2QR4TVUWwFwe3RjaG8BTp%2FephQk9noOZdpJQnoHBfWq8b4pOObJmJE4x0Cw%2BEBDA9dp9YyjvRPDRwnDW5L7LBgBFzmPZpJWunfC45eQiitqILgdD3pAD%2BVNy6%2Bk5eB4QDrBPqHDPQBDulvhDSoPOwLKe1LpjHbQXimB1cDeDe6KhoOr0GYsIPbhpJ89MIkufwRnCKEM0vjr%2BNlY%2F8HWz77ZioDT2kv6DvSL8CitYVz2dLsjcteE%2F9SXEEz%2F%2FXeYxcDcIZYpHSEmu9NAakslLKwTGA%2BQKhHV9lFL2oxG6NNvyWs2N2FDYnlPAbef1lequ5Joat92GSDVapyQrsXlJpydOIflolRQknFrAFCoa1GAwVA3HyjfT2Xb2HisX6jVYpz2slcuctm1dyA2wD6BVDxdkngOhtN9aekMJSKKd7Ph1BkJPfswqOvAyQY6pgGoJVCb2iO79VQ2sqFWb4Gg%2F3JzuDJnnXxKGRr1dPFUtSbnoMN7LAmdcHdvSgWJOmfqtjD9q20FXjx0TbsBpZjxDq6z%2Bxl%2BWXbC9BKq9BsI0q%2FEYFmTYE8Xm%2B%2B52FzTbSryETC6qIT6nbiX9ql%2BgFgJUnJEllAHYXFJItY3q76tOcPDPBPt5hpX4v1JG9c0eGVkkftkdyv6%2FOYLypfLwvnIIx7T9JTa&X-Amz-Signature=c55eb827620baef5307522b2da50cfb2feb2ad5bd57fd2581033e6259bfcd04c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

