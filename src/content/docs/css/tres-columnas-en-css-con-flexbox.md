---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastupdates: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RD4TA5SJ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T210728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQCJ2txdXcC0XoF1ywZAdEOqjdDC93TnhXycjA5ULD9rNwIhAOCwJDnbxJY2DGGHxICWBzYwZIlXBOVOShpRo0FMEZRXKv8DCDYQABoMNjM3NDIzMTgzODA1IgwyoMWI1EsrkeyNv28q3AM6qKw5AeKFfWowUxB7OJPKOJKnSL8%2B092%2BWb4AEGzKQYje6d3tanbZegesJQlCdEI%2B1RUL97aDKhB1JScpd2z8YlyezVNF6a%2B0LpPA6MpF%2BSU6Qh%2FGqaLpU3KV37I97R%2FutLxzisE4w2LxKOc1yFfhG4FJThC%2FxMvr897x0EqqLsfVSlUG9MwUbMYYVMlpEYcrFpDHiQe1aGx7UrxATrWVTnYRtce5s43C2ivCy1nxbhihzfd%2FSdkq9MHL18Woa%2BmoinpYj2eOtlCXiSBZe1NZnUXgkGCerDQWxuI5DWD34bS1t27hQpabinCYATSgNi9ng8dpuWcbSDC12oI22yj5a8wzs4VZrZEuaE1pQ4kmxLELHx4yTovhyniaiQf5Qd%2FxtAaIXMv5cSfavm%2FCMmcSIW1jkkd2yI8sMnjHJI2nGTwmJfrSFN3DM1qjprAdcvln4NWA2qW02IO%2FjlqT29BhJY16oRSYDlOjc6uFViUoJz7JbEUy9eahPwFmjNMtZ1O2zVQclTViiMk73jEExwASg6ALK%2FliFLfeJcmXEx7b0d1Z8p%2BM%2Fb8ZgXiSEsZcH8z3QLWLFHqNyNYB688Ika3W07kqoFvwdXoDaIPvLrKyhJJIZDCXuQ0fTMNZLzCvvcLJBjqkAXEp0GywqAOsuwrCj%2F%2BB0SurMQUv%2FnlD%2FXaUVgdeKk54ES0nlva%2FXfi3x2cIFocKIb8IXSHtNCoNoYGye0fiW3QJboLaAGooIGsjuFQXgkMdd7B1HZwdZLccHYMQGDyepzyFp7mkqnENFUMMX7ulEGRZPq1pZjXI4i%2FgVmY%2BTVwDazHTxv41UpkTaqqEu3uH%2FLK26Xvew05l4Weh7azj3b7BnfVz&X-Amz-Signature=66bdfd3c8596d63fe11b2ba8fc691d09300dbe0a922e8a7c38c7346da2dec886&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RD4TA5SJ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T210728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQCJ2txdXcC0XoF1ywZAdEOqjdDC93TnhXycjA5ULD9rNwIhAOCwJDnbxJY2DGGHxICWBzYwZIlXBOVOShpRo0FMEZRXKv8DCDYQABoMNjM3NDIzMTgzODA1IgwyoMWI1EsrkeyNv28q3AM6qKw5AeKFfWowUxB7OJPKOJKnSL8%2B092%2BWb4AEGzKQYje6d3tanbZegesJQlCdEI%2B1RUL97aDKhB1JScpd2z8YlyezVNF6a%2B0LpPA6MpF%2BSU6Qh%2FGqaLpU3KV37I97R%2FutLxzisE4w2LxKOc1yFfhG4FJThC%2FxMvr897x0EqqLsfVSlUG9MwUbMYYVMlpEYcrFpDHiQe1aGx7UrxATrWVTnYRtce5s43C2ivCy1nxbhihzfd%2FSdkq9MHL18Woa%2BmoinpYj2eOtlCXiSBZe1NZnUXgkGCerDQWxuI5DWD34bS1t27hQpabinCYATSgNi9ng8dpuWcbSDC12oI22yj5a8wzs4VZrZEuaE1pQ4kmxLELHx4yTovhyniaiQf5Qd%2FxtAaIXMv5cSfavm%2FCMmcSIW1jkkd2yI8sMnjHJI2nGTwmJfrSFN3DM1qjprAdcvln4NWA2qW02IO%2FjlqT29BhJY16oRSYDlOjc6uFViUoJz7JbEUy9eahPwFmjNMtZ1O2zVQclTViiMk73jEExwASg6ALK%2FliFLfeJcmXEx7b0d1Z8p%2BM%2Fb8ZgXiSEsZcH8z3QLWLFHqNyNYB688Ika3W07kqoFvwdXoDaIPvLrKyhJJIZDCXuQ0fTMNZLzCvvcLJBjqkAXEp0GywqAOsuwrCj%2F%2BB0SurMQUv%2FnlD%2FXaUVgdeKk54ES0nlva%2FXfi3x2cIFocKIb8IXSHtNCoNoYGye0fiW3QJboLaAGooIGsjuFQXgkMdd7B1HZwdZLccHYMQGDyepzyFp7mkqnENFUMMX7ulEGRZPq1pZjXI4i%2FgVmY%2BTVwDazHTxv41UpkTaqqEu3uH%2FLK26Xvew05l4Weh7azj3b7BnfVz&X-Amz-Signature=aa49ebefc5639ba67d6643605979d58979ca27ab31a0ef0e80038c56185b73e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

