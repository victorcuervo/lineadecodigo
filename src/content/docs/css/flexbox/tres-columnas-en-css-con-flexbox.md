---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466774OHLV4%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T045958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5%2B86LxQmxHJMjk6rA5Bc0Ek7WTGyzx4ka0%2BmfoNnO4wIgJNTs7iFSH50e9F1nAe5jn0NShP%2B8u7EwPBkt6Vh5yDkqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDESb%2B0TjRKUGTK3oXyrcAwfB9psm05MwKiZy%2Fb8kho5zO099PXH8LrA2%2FDa%2BL8wp6xx%2FUhYYPeXBrJtjQqq%2FcX2xVi2gutepH24dgQjnRDwMNevWfk6w51QnJ6e%2B4GiShU8xWU%2FFNFIjyHI2943RUnv8CAjAJiin8PogL5TbvlWXLMuXJiDYtd%2FBHtz086GKqB5T%2BhTWi54bWrqv2lhQ4mYXKCmrLIGT70xekpkEA5qo3NEqSDsa3CiBByZa9ieMx9Yv9%2B2Go0yZr9Kde234Lvvio5JfrIPhkL7839DvOXgTeZMD8HActD8hjC6WJcJWUx%2BOoShMjCFV5sCh3slJWbMiZUPrXixsjtE%2BU7pBvHFOh6tq5NQZewvLZUTSGZ0V71PSz6rEpZCgmKyqrQ7mP2L8foCHygXpcNtpqPX4%2Bg0WE%2F9P%2BRHgnUt%2Ff07C3xCF3fC5BTOK6RzDvAa7IlnG1cqR3p2IUSX27o%2FssmQt33G3c37Xv9OFDe20MGRuhpOPMJBcDUQ2dIo4joYvKxgNtBQum2j90%2F2sA6I1nwaYQQq3fDb1aOmTv8apY2%2BuRMv76IUH2N2sg3MFQXFMcs55RZ912tMIqeAP%2BCWDbxZ1J5tA19lRvu0%2FNUj2b92u90t6nm0sRSvx5LNca5reMK7%2B0skGOqUB8yI1t7wUD3eWzjFU%2F3d8nBivccD1FEo4qSuNOCekPOOWH%2FmdYg9Q40EZXoMYBWgdllnFInMZTbsCs4sYEa1%2BGVE4JACBEbX6I2kfQRwXcoLP8Nd5O4usrqpeGpn44xi83qcHydIDrOiE6kPqgFDyRiBtNqzalZ%2BfxO3hYSpbYdLujntdwsBwkDZAyZ%2Bf3uM9%2BIH8CM1jQfb4bqrd0oixQYR1ZxR3&X-Amz-Signature=d91c07cff2b0cda6d626dcc3f7741460dc1e732a8b9d5d4738c82094d4040cbc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466774OHLV4%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T045958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5%2B86LxQmxHJMjk6rA5Bc0Ek7WTGyzx4ka0%2BmfoNnO4wIgJNTs7iFSH50e9F1nAe5jn0NShP%2B8u7EwPBkt6Vh5yDkqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDESb%2B0TjRKUGTK3oXyrcAwfB9psm05MwKiZy%2Fb8kho5zO099PXH8LrA2%2FDa%2BL8wp6xx%2FUhYYPeXBrJtjQqq%2FcX2xVi2gutepH24dgQjnRDwMNevWfk6w51QnJ6e%2B4GiShU8xWU%2FFNFIjyHI2943RUnv8CAjAJiin8PogL5TbvlWXLMuXJiDYtd%2FBHtz086GKqB5T%2BhTWi54bWrqv2lhQ4mYXKCmrLIGT70xekpkEA5qo3NEqSDsa3CiBByZa9ieMx9Yv9%2B2Go0yZr9Kde234Lvvio5JfrIPhkL7839DvOXgTeZMD8HActD8hjC6WJcJWUx%2BOoShMjCFV5sCh3slJWbMiZUPrXixsjtE%2BU7pBvHFOh6tq5NQZewvLZUTSGZ0V71PSz6rEpZCgmKyqrQ7mP2L8foCHygXpcNtpqPX4%2Bg0WE%2F9P%2BRHgnUt%2Ff07C3xCF3fC5BTOK6RzDvAa7IlnG1cqR3p2IUSX27o%2FssmQt33G3c37Xv9OFDe20MGRuhpOPMJBcDUQ2dIo4joYvKxgNtBQum2j90%2F2sA6I1nwaYQQq3fDb1aOmTv8apY2%2BuRMv76IUH2N2sg3MFQXFMcs55RZ912tMIqeAP%2BCWDbxZ1J5tA19lRvu0%2FNUj2b92u90t6nm0sRSvx5LNca5reMK7%2B0skGOqUB8yI1t7wUD3eWzjFU%2F3d8nBivccD1FEo4qSuNOCekPOOWH%2FmdYg9Q40EZXoMYBWgdllnFInMZTbsCs4sYEa1%2BGVE4JACBEbX6I2kfQRwXcoLP8Nd5O4usrqpeGpn44xi83qcHydIDrOiE6kPqgFDyRiBtNqzalZ%2BfxO3hYSpbYdLujntdwsBwkDZAyZ%2Bf3uM9%2BIH8CM1jQfb4bqrd0oixQYR1ZxR3&X-Amz-Signature=35a0dca13b87dd890b8261419e4fcdb4bc0b753c09e3be7cd0b378e723489587&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

