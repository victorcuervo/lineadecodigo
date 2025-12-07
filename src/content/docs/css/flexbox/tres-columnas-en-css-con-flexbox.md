---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDJGLWU6%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T132638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQlFFEdLSwOVqTFS7FK4FKROiwWNVFeMtJcvNH3YHKEgIgIEQ40a5wn%2Fm6kHqE8aYTInzdGxbR%2BB3yCxOOR%2BKGQZQqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAtq0MgYblDtyd%2FtpircA5%2FJLPG1N4Lf7MWGBQyephNgWv59xg90CIJPsj6Xk5mLjNFS3uWWgOoSFORnqxxWDjJhp23GaXz73o0EsDDbI1a%2B0NzRAyeMJjMdOcMkG%2FuaU6C8bC1DQY5pacbkfhInXFbeHDA%2Bt%2FNfD00at%2F52wcLpVYKjeD0sNKhkbXaH%2BwCJQjkDIhxaI%2F6Rc%2FOsgVrda4Kau7dkMM9B7I4I7GFxmS3oJYM7dvkkONYg%2FFvaigSqbWRmrm50dsRy71R8cU9eF42mV5r%2BVypHGLRcADeRqfCDuGK0Q8sCsTRhTdCYyhF3EkF0og1Mjiw7Pw1QzdAaMLgCM8OeKSBF0cLZ%2FyiENHO0oANxxOn3xtSwhqtqFjckNhZDO5OStjmBkKnhP6R%2FrRpaWKlfRwrkVaoUdGzP%2F1nraau3iPtraEaeB9VG1GfUHglgj8EGEOGl5Ewkn1vqXTfcZJiPZ9izPV%2BA5ifp57N6E2a2bWS%2BJ7tCMMDkyqsHFCiUV22JUyh7B9Xe5SZqwB8UVudW6fJu00UguZTmekp4iik0upuSldo3iVW%2FS%2BYQMPgF0WdgeI8UImHLIN%2BeVwbeSocY%2F8XwAOYbglC1EaCTfcbp%2BIdTNW71C0n2OHj%2FUx2i0kT2qtgXgcndMLia1ckGOqUBH5zUL38weZCy3iIL%2FGxrjGCv2x%2B9dCXeG1lboE8MN0r9IW9wgXUITcNFYs2IdwhNCWdTHTpqDbW%2Fey9Cj%2FAxp%2B5cBs4bCiq6nHL1ATU4zcHIgpMuUQxYuP7WFQb6O%2FJcczVcb%2FoQfKlyvj4VQKccxeuoL1pl%2FMwAHzaYcDDgkEAZ97egjzLI8AyFy2aPv2s%2Fi%2BCbgvwab6oH8BHZuMsQTxgj4dzU&X-Amz-Signature=ad943a5486236c4bb82e51b086d61e3080327a772dae82e27f3e916017abe358&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDJGLWU6%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T132638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQlFFEdLSwOVqTFS7FK4FKROiwWNVFeMtJcvNH3YHKEgIgIEQ40a5wn%2Fm6kHqE8aYTInzdGxbR%2BB3yCxOOR%2BKGQZQqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAtq0MgYblDtyd%2FtpircA5%2FJLPG1N4Lf7MWGBQyephNgWv59xg90CIJPsj6Xk5mLjNFS3uWWgOoSFORnqxxWDjJhp23GaXz73o0EsDDbI1a%2B0NzRAyeMJjMdOcMkG%2FuaU6C8bC1DQY5pacbkfhInXFbeHDA%2Bt%2FNfD00at%2F52wcLpVYKjeD0sNKhkbXaH%2BwCJQjkDIhxaI%2F6Rc%2FOsgVrda4Kau7dkMM9B7I4I7GFxmS3oJYM7dvkkONYg%2FFvaigSqbWRmrm50dsRy71R8cU9eF42mV5r%2BVypHGLRcADeRqfCDuGK0Q8sCsTRhTdCYyhF3EkF0og1Mjiw7Pw1QzdAaMLgCM8OeKSBF0cLZ%2FyiENHO0oANxxOn3xtSwhqtqFjckNhZDO5OStjmBkKnhP6R%2FrRpaWKlfRwrkVaoUdGzP%2F1nraau3iPtraEaeB9VG1GfUHglgj8EGEOGl5Ewkn1vqXTfcZJiPZ9izPV%2BA5ifp57N6E2a2bWS%2BJ7tCMMDkyqsHFCiUV22JUyh7B9Xe5SZqwB8UVudW6fJu00UguZTmekp4iik0upuSldo3iVW%2FS%2BYQMPgF0WdgeI8UImHLIN%2BeVwbeSocY%2F8XwAOYbglC1EaCTfcbp%2BIdTNW71C0n2OHj%2FUx2i0kT2qtgXgcndMLia1ckGOqUBH5zUL38weZCy3iIL%2FGxrjGCv2x%2B9dCXeG1lboE8MN0r9IW9wgXUITcNFYs2IdwhNCWdTHTpqDbW%2Fey9Cj%2FAxp%2B5cBs4bCiq6nHL1ATU4zcHIgpMuUQxYuP7WFQb6O%2FJcczVcb%2FoQfKlyvj4VQKccxeuoL1pl%2FMwAHzaYcDDgkEAZ97egjzLI8AyFy2aPv2s%2Fi%2BCbgvwab6oH8BHZuMsQTxgj4dzU&X-Amz-Signature=d553b9ddc5b505c1233e3bc9c1d050f635d424e3f55c00879d46830f12d51027&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

