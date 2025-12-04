---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WWMKMTK%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T051215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQDpiLwEsTNpmsA37c8QnEKDdpFljJlntMqBP1vqMtHtEwIhAM7WsFYx%2BS8JkocwXkIlmsIM7dAO34g022o9c8C9Wp%2FxKv8DCD4QABoMNjM3NDIzMTgzODA1Igzy2Z0mTKpRmFjzRTAq3ANdzMeObAXwG5Uy%2FJDtyU2pwcocZ8Ti3HZBQtyDIF1%2FjytLpqewC2J0kw%2FoDG58nuHP7vyeyC5uWFOl8UAwP%2FbgzAlCS24MySs1aKo2G0ARUvQ5cBeFcahbMjZYxdb01v%2BexMV07kHYpssXWVGm5Auiur4HrrhcFDz4X2fW8On0q2KM9H0g1eoRBFHdqRveQ%2BoYCpZ0P8Zg9IoTor%2FN2j4D74dTv54rhRgw%2BH%2BAdAAOobUKdVdGgRKz4xWHFiftCA4RHpnUgkvucCEwNo7MJLBAhWH7j%2FgdQtwYjK6HMdQmg8eAf2PnC6IzTcXeKYDQtJyYpSkHgEQD7Yaa%2FSjJCVXNsfdrVcJIw%2FIeJ%2BmW6jyQ1wqOHmuM6vibfh4taCLaD91PZcm1I4j6NE3iCvkFbBOO4yIYmWwm01j0jFyDrdSrUZ2G7L9wz5zqEuG7WCfgy8SkpvRf%2Bk98ErXQMO8cVC4xFKA%2BROd5Ps3hys7uU5J5N7dKBzk2RKQrqip5GB2kP8sTAbTDZaFsOhrStRWoUvHQy6LUn7pDaJRq5y5dHaawwWg4t8WHVuwLTMYrofrOyFp6Zjw6U0fUDFVUyWs9i%2FYxyl5wAYk6R2zEY1gZDlxfOpu2oBUqR1Rn1u2GGTCtrsTJBjqkAQeJ%2Fpt4tFLRQskbYddWU%2BgdKrwIaOe0GAxfc%2FC2NweemEXdVE8nyshAfvcR5ErefTW76kh0TrWTrB5hA8gYcWfa%2FeUYixkZjHXjn9rzDCxYAzf1yMov7wXwgmDruR49vHOxrWK0M%2B6UeC9sfhBiLEmFzzKvdx5N8%2BrNldTJQWSlci2WirCY09wPhjXMkd82wJ49NS6DoSVhWzgGpcswQvcYTdwz&X-Amz-Signature=8e24e9f5f4d86ca78aa099d54bcbefdd5b8fe829a7481aed5e2bed4ae365abea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WWMKMTK%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T051215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQDpiLwEsTNpmsA37c8QnEKDdpFljJlntMqBP1vqMtHtEwIhAM7WsFYx%2BS8JkocwXkIlmsIM7dAO34g022o9c8C9Wp%2FxKv8DCD4QABoMNjM3NDIzMTgzODA1Igzy2Z0mTKpRmFjzRTAq3ANdzMeObAXwG5Uy%2FJDtyU2pwcocZ8Ti3HZBQtyDIF1%2FjytLpqewC2J0kw%2FoDG58nuHP7vyeyC5uWFOl8UAwP%2FbgzAlCS24MySs1aKo2G0ARUvQ5cBeFcahbMjZYxdb01v%2BexMV07kHYpssXWVGm5Auiur4HrrhcFDz4X2fW8On0q2KM9H0g1eoRBFHdqRveQ%2BoYCpZ0P8Zg9IoTor%2FN2j4D74dTv54rhRgw%2BH%2BAdAAOobUKdVdGgRKz4xWHFiftCA4RHpnUgkvucCEwNo7MJLBAhWH7j%2FgdQtwYjK6HMdQmg8eAf2PnC6IzTcXeKYDQtJyYpSkHgEQD7Yaa%2FSjJCVXNsfdrVcJIw%2FIeJ%2BmW6jyQ1wqOHmuM6vibfh4taCLaD91PZcm1I4j6NE3iCvkFbBOO4yIYmWwm01j0jFyDrdSrUZ2G7L9wz5zqEuG7WCfgy8SkpvRf%2Bk98ErXQMO8cVC4xFKA%2BROd5Ps3hys7uU5J5N7dKBzk2RKQrqip5GB2kP8sTAbTDZaFsOhrStRWoUvHQy6LUn7pDaJRq5y5dHaawwWg4t8WHVuwLTMYrofrOyFp6Zjw6U0fUDFVUyWs9i%2FYxyl5wAYk6R2zEY1gZDlxfOpu2oBUqR1Rn1u2GGTCtrsTJBjqkAQeJ%2Fpt4tFLRQskbYddWU%2BgdKrwIaOe0GAxfc%2FC2NweemEXdVE8nyshAfvcR5ErefTW76kh0TrWTrB5hA8gYcWfa%2FeUYixkZjHXjn9rzDCxYAzf1yMov7wXwgmDruR49vHOxrWK0M%2B6UeC9sfhBiLEmFzzKvdx5N8%2BrNldTJQWSlci2WirCY09wPhjXMkd82wJ49NS6DoSVhWzgGpcswQvcYTdwz&X-Amz-Signature=15681952cf5204398d6d13f03b5b45e9346290e19a2048237ba2c0ab7d11af0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

