---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFMRQR36%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T211559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIVQFnuMiG79HYA7uaV8E%2BG%2BcghdjWH0J95Plne4mMQAIhANgDUWiMMTK4MDixTMQgX9giVRkH2JPbmt1dyTkCaD6VKv8DCGUQABoMNjM3NDIzMTgzODA1IgwCXyl6UVFTaLZJhBUq3AMZxaxDGEH2j6ZtxJYzn0yjISuGRLqsq5vPCWWxf5zaYO7DR%2FhditVkjAGkNj9GjdT7N%2FiSfBJjvvu4rNz6F2%2BdLiKOsGXKA2rG%2Fx8Dc%2B%2FTkgJEmyFRjo5pVtI6LGaqL1fN2zMYzUSI0dpc5DIizQd7lgRyQiG%2FQhvYXyQr8Dwp6LkrwLWRyYvOawSgN%2BwMGN%2FIIRKHjgXgXI2LoaZQiFqlzgdaIcHz5G184MYHu%2BTyiuHzshpX5oc2KPt2Ki85R6FUKOo3qQavK96VgP4PZCs7IdQp5sp0ksXkpkK0oLEWLdJoNeMeZin8Bzc5oQ%2FkY7hCBh2ICK7eLXe%2F6rRb8Gqojy5l%2FO91p%2BwZMIwpBYfwgcAdDIaD%2BRlYr7LGzQxcKF%2BfZB2z73KNWE%2BgcfN50mnLyXcWGL0xRSHsGFnvmJ7pCrhVsKjlyvILdm2g97MGZ9ZRwJRLh8eRrn5qnvWWY1RXsWkTMVqiuDpSVWQOWIL2omXFCTEVZz6n0xhHNIoX1N7TgyMqn0xD79Rycoom7X2v3B99CpAI9SHT%2BywhmESQaY2yw%2BmBDaP%2FDpVPSxGpoAcsc9jftd3ogyukqPfD4C8fue656NifCWLs9omX1Xd1IBX2GooBADaH9bocizCx7szJBjqkAbM7sicwdFYF%2BTMkHTzTLmuNsj32qFXs1GkLv68ToczOoxv2onulVw3dzeWkFJwYuQLc6odkMNxGet%2FT%2BEu1D%2BbqFobjeomfU1aq2uN5fLf4zJPw53titBHi5Ielg%2B8%2B8nvIzErg9CJ5%2FmaXz9mBkWclHykRKRfRQrB9Z3CkVGzy02C075eQh6iqbueY3fwJ5NZxEq4fR699k%2BTluQ9euhUI9jlI&X-Amz-Signature=b73e90a253047a744694a933954dcccf3773800b2ddec84b7a777cb49604c109&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFMRQR36%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T211559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIVQFnuMiG79HYA7uaV8E%2BG%2BcghdjWH0J95Plne4mMQAIhANgDUWiMMTK4MDixTMQgX9giVRkH2JPbmt1dyTkCaD6VKv8DCGUQABoMNjM3NDIzMTgzODA1IgwCXyl6UVFTaLZJhBUq3AMZxaxDGEH2j6ZtxJYzn0yjISuGRLqsq5vPCWWxf5zaYO7DR%2FhditVkjAGkNj9GjdT7N%2FiSfBJjvvu4rNz6F2%2BdLiKOsGXKA2rG%2Fx8Dc%2B%2FTkgJEmyFRjo5pVtI6LGaqL1fN2zMYzUSI0dpc5DIizQd7lgRyQiG%2FQhvYXyQr8Dwp6LkrwLWRyYvOawSgN%2BwMGN%2FIIRKHjgXgXI2LoaZQiFqlzgdaIcHz5G184MYHu%2BTyiuHzshpX5oc2KPt2Ki85R6FUKOo3qQavK96VgP4PZCs7IdQp5sp0ksXkpkK0oLEWLdJoNeMeZin8Bzc5oQ%2FkY7hCBh2ICK7eLXe%2F6rRb8Gqojy5l%2FO91p%2BwZMIwpBYfwgcAdDIaD%2BRlYr7LGzQxcKF%2BfZB2z73KNWE%2BgcfN50mnLyXcWGL0xRSHsGFnvmJ7pCrhVsKjlyvILdm2g97MGZ9ZRwJRLh8eRrn5qnvWWY1RXsWkTMVqiuDpSVWQOWIL2omXFCTEVZz6n0xhHNIoX1N7TgyMqn0xD79Rycoom7X2v3B99CpAI9SHT%2BywhmESQaY2yw%2BmBDaP%2FDpVPSxGpoAcsc9jftd3ogyukqPfD4C8fue656NifCWLs9omX1Xd1IBX2GooBADaH9bocizCx7szJBjqkAbM7sicwdFYF%2BTMkHTzTLmuNsj32qFXs1GkLv68ToczOoxv2onulVw3dzeWkFJwYuQLc6odkMNxGet%2FT%2BEu1D%2BbqFobjeomfU1aq2uN5fLf4zJPw53titBHi5Ielg%2B8%2B8nvIzErg9CJ5%2FmaXz9mBkWclHykRKRfRQrB9Z3CkVGzy02C075eQh6iqbueY3fwJ5NZxEq4fR699k%2BTluQ9euhUI9jlI&X-Amz-Signature=5a562b3b4560d5b75fd9f99ff562c66d5e1e4e1095f7f43cdb8117c6a55a5620&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

