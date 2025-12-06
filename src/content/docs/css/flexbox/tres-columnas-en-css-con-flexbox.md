---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSPRIGRG%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T004035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDs68qGTofZJgZE0InlvTLI5v4I3bl4xO%2BC2fp1C3EYKgIgEbli7u5L1p1VeFPKSBsFN%2FQPr98U9VKvCvVRo7nU0n4q%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDAUShHlDrafCHH5LOyrcA9k%2FDfo0mBSMmsMc22hVelgtAq8z0FHZH8oE2fdeM%2BgdUR4PWAp5AO%2BOKD67cl3wwYvkTgAgaXdP0QPbpWfdqIzjFo%2BQuKuiAN2stVugLRbRL6dVwFNpACyzkDOvmptmhaut0OOqK6DDNpykjz7bSxoUCVKHUjKvizOZtsp2wOpB103ETHlhMuHJ1IIZPuaNKxFi1q4efbhQIQfvgjS4YwEa3pRGh983ev7qkfC4iz7CQj5EIJ3QlTRdqDAPi2lf1P0WTt0O66FyTKcoA3jzBO4fHHHU8s3ppqDwZmZvwdIhMJGjdncipKlzS3oimRM4wmUj1nOtd2CLiqmOc4nKO7EIN1ZWK7rtu%2BrncD9VswCgnNFlWPTjf3nGW3lXLFQ9KtKL4dzPuENIOYabfE8YbyfG52QytomWIAHWmC8yGZm5uDo%2F%2FxCDUGCD83Yq6W8FbcY0tfjKEVgRnes1eyqmRngc8ZfFN79az2HXi5QcW0wmpINlcclcX3Qjs4Vh2i0DT0kPcVoNuU7T3%2BlUu9c8bOFnj3kVfvnwiAHzewpRObufTEBQkzH32lF4lhH6nDD%2BlS%2F0Watzom6rQxmqBocUyLLwBx3d%2BVe8ingIw7k%2Fm4CswvugMf4cXSoZRkBRMMrozckGOqUBCHDpqKYJI%2BPdxIcOvhEktAHCd5O%2BxUnj66fF6bsXQ%2BXGLQFq8mN79AZ6fKFQHUeuYYYgl%2BIYVRxGi5d5sEx2mKBWLDfZci6jxBQras8KN12h%2FxMrdRXStXRbYcARLYG5vQAe2tndLECqU9FUHOys%2BTG0dvVmQR0tC83XHFwM%2BtZqWRBwj%2FG4I2reuQfcsdahCQUmSEqEXk5hhFpzBD%2FEiUzSJsaj&X-Amz-Signature=b080ec44ae0cab6810bf17b82ac74456e49b6c1acab5d2d5af59be795d263041&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSPRIGRG%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T004035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDs68qGTofZJgZE0InlvTLI5v4I3bl4xO%2BC2fp1C3EYKgIgEbli7u5L1p1VeFPKSBsFN%2FQPr98U9VKvCvVRo7nU0n4q%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDAUShHlDrafCHH5LOyrcA9k%2FDfo0mBSMmsMc22hVelgtAq8z0FHZH8oE2fdeM%2BgdUR4PWAp5AO%2BOKD67cl3wwYvkTgAgaXdP0QPbpWfdqIzjFo%2BQuKuiAN2stVugLRbRL6dVwFNpACyzkDOvmptmhaut0OOqK6DDNpykjz7bSxoUCVKHUjKvizOZtsp2wOpB103ETHlhMuHJ1IIZPuaNKxFi1q4efbhQIQfvgjS4YwEa3pRGh983ev7qkfC4iz7CQj5EIJ3QlTRdqDAPi2lf1P0WTt0O66FyTKcoA3jzBO4fHHHU8s3ppqDwZmZvwdIhMJGjdncipKlzS3oimRM4wmUj1nOtd2CLiqmOc4nKO7EIN1ZWK7rtu%2BrncD9VswCgnNFlWPTjf3nGW3lXLFQ9KtKL4dzPuENIOYabfE8YbyfG52QytomWIAHWmC8yGZm5uDo%2F%2FxCDUGCD83Yq6W8FbcY0tfjKEVgRnes1eyqmRngc8ZfFN79az2HXi5QcW0wmpINlcclcX3Qjs4Vh2i0DT0kPcVoNuU7T3%2BlUu9c8bOFnj3kVfvnwiAHzewpRObufTEBQkzH32lF4lhH6nDD%2BlS%2F0Watzom6rQxmqBocUyLLwBx3d%2BVe8ingIw7k%2Fm4CswvugMf4cXSoZRkBRMMrozckGOqUBCHDpqKYJI%2BPdxIcOvhEktAHCd5O%2BxUnj66fF6bsXQ%2BXGLQFq8mN79AZ6fKFQHUeuYYYgl%2BIYVRxGi5d5sEx2mKBWLDfZci6jxBQras8KN12h%2FxMrdRXStXRbYcARLYG5vQAe2tndLECqU9FUHOys%2BTG0dvVmQR0tC83XHFwM%2BtZqWRBwj%2FG4I2reuQfcsdahCQUmSEqEXk5hhFpzBD%2FEiUzSJsaj&X-Amz-Signature=bb813c49edf7d023a7ebd2f047da7ea07e21a15c5a93df77d231b07724d0f41d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

