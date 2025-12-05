---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIFZUOCV%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T230811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmjf71Lj5iqkGfKss9rL0fm9Pb3bh%2B3K7hMEueORyBUQIgK6GsiuUNLDo3llTaM%2BUnkwgnX5OI%2F%2Bn4%2BJhqJZY7nX8q%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDJTU68rY23TxbxS%2FdCrcA0QG%2BrSbQ77SOFhak8o4G78Tqyp6l2PA6%2FlknHQ4%2BJIRWU%2B1PHBQnQQXRoRL6%2FpkFgvg4yCHeBauDAWCvEqcgk96wS%2B11DR6kdCthoMRRSDDoN7oc%2FL3z4t3ivgGAfFlSJTY17%2FSK8kCnNCByDIxvO0dst%2FIr0Qy3yvwqPz8Mj5rGByXWuLfohlvyZMlS1OaDFsjqQL6gFGohTREqqeqtwIsixZ%2F854JGDqLZTLVknsvhQ%2FFVe8g9bRh1u5D4ZGswWtWOLzIF43PWs3TjndKALtrobgrLIp733R4eahjz5dUY4Y%2BPKAxX0E3PTEn7IDYe2d4D8tYeNl%2FsLk%2FDyE17lK9PTV%2Bca8m6G3WiIlvM9j7hmzXr8DClTYnbQxexWX%2BT0WlonW2fOhODAo8FLEvqQw1YtpHDifl%2F2d%2F8U4YcEg4vmuuEAvLEOzC2HoAjcqUyzZlf5CeXWsOJV5wYtI8ZyPeWrJ4iMb6R2r3qOcq4Vkxg63fkv%2BEWlsJUrvplV%2FujXfGw6%2Bqc3awtvsiOoSvZAbxzgLtTunLgMvBgMKk15M1Hs7FzEiJWr9iu4RZxlqzFjCDyECU%2FqXx%2BqkCaNf04ywSlsOrz25D0ucByOe1TCtjIz4KlE%2BIJpb0taa3MMDGzckGOqUBBiq5YozgVW7%2FUh7DuXc%2FQJafxcG2gxoABp6EvOWfOFYo2yxI4X7XDU9W%2FB6sOJJmkDC7CRQb5EfcZ06c%2BXDJ7n8DTRcHDv98%2FsR%2FgV7Wf30%2FFAkbsfi%2FiGkVVv5gMaB%2Bg7iJOwynvEPni7dA366vpYW5e%2BOW%2BJ6ZVPVcbKoiHO4CjlCnwIMC7CUnOF6fXUzEvTL71gMWWgC%2FdQlslpTFbDtaRGI%2F&X-Amz-Signature=9c92de5e89e6e41d2dd424edfd8a0bbc0c5e50aec3a1fd8d635072a14e56567f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIFZUOCV%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T230811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmjf71Lj5iqkGfKss9rL0fm9Pb3bh%2B3K7hMEueORyBUQIgK6GsiuUNLDo3llTaM%2BUnkwgnX5OI%2F%2Bn4%2BJhqJZY7nX8q%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDJTU68rY23TxbxS%2FdCrcA0QG%2BrSbQ77SOFhak8o4G78Tqyp6l2PA6%2FlknHQ4%2BJIRWU%2B1PHBQnQQXRoRL6%2FpkFgvg4yCHeBauDAWCvEqcgk96wS%2B11DR6kdCthoMRRSDDoN7oc%2FL3z4t3ivgGAfFlSJTY17%2FSK8kCnNCByDIxvO0dst%2FIr0Qy3yvwqPz8Mj5rGByXWuLfohlvyZMlS1OaDFsjqQL6gFGohTREqqeqtwIsixZ%2F854JGDqLZTLVknsvhQ%2FFVe8g9bRh1u5D4ZGswWtWOLzIF43PWs3TjndKALtrobgrLIp733R4eahjz5dUY4Y%2BPKAxX0E3PTEn7IDYe2d4D8tYeNl%2FsLk%2FDyE17lK9PTV%2Bca8m6G3WiIlvM9j7hmzXr8DClTYnbQxexWX%2BT0WlonW2fOhODAo8FLEvqQw1YtpHDifl%2F2d%2F8U4YcEg4vmuuEAvLEOzC2HoAjcqUyzZlf5CeXWsOJV5wYtI8ZyPeWrJ4iMb6R2r3qOcq4Vkxg63fkv%2BEWlsJUrvplV%2FujXfGw6%2Bqc3awtvsiOoSvZAbxzgLtTunLgMvBgMKk15M1Hs7FzEiJWr9iu4RZxlqzFjCDyECU%2FqXx%2BqkCaNf04ywSlsOrz25D0ucByOe1TCtjIz4KlE%2BIJpb0taa3MMDGzckGOqUBBiq5YozgVW7%2FUh7DuXc%2FQJafxcG2gxoABp6EvOWfOFYo2yxI4X7XDU9W%2FB6sOJJmkDC7CRQb5EfcZ06c%2BXDJ7n8DTRcHDv98%2FsR%2FgV7Wf30%2FFAkbsfi%2FiGkVVv5gMaB%2Bg7iJOwynvEPni7dA366vpYW5e%2BOW%2BJ6ZVPVcbKoiHO4CjlCnwIMC7CUnOF6fXUzEvTL71gMWWgC%2FdQlslpTFbDtaRGI%2F&X-Amz-Signature=05e982505594934382c17e06211fffb167c668cc14a9f7b10abb647a0373a338&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

