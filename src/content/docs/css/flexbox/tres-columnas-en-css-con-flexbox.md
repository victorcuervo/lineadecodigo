---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQT6PBSP%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T214811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCf%2B%2BIAKPy632sNZY3SC%2BfkqmVDXvdHevEHQlB8QtEOjgIhANo6n2vYpgCeWRV0XOzTYbf29JE%2BW%2FLpPk8cCan6Q%2BP4KogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx63%2BS2wCQOuQUdoAcq3APCnjLIUGtxRcoiEWob63rFdt8ywLWwvo9tuVOlXAvaUlLiwQzXF6kp3UzGp9VUdFoJXTF5egakkXTnKsoPZP8ueJen6AcjmXkJpyZIWESEqVxSrRtEAlBtR6Q5brvSrkvqHRilRueAuxIpcSVwkwzOKL%2FX2cKbs%2BNOnhNaExtlkJKO0yvicMyIaIjEMLqLyl3k6st9HeO%2FAxgBtnDKYZpoetYLFZlUiqPBQZEgDcY%2BD5BRxz0DDdMv6pQOydRlSOwhYlyqJ9OXhq%2BJCf0MXkX%2B1KzwFbKMowYy4XoD24qWj5SEjPENlRotqVr%2BmbqOsUtnfOIN2tfNm5AkD37ttvFwL8fGEOz4H3RHgMdBe971fC%2BtYR7oNNbFxfanmR00uwGTIS3XuIa3Idxn2RYtsFyfEUV1LLcdqaaL9rwFV9uOTIVpj7xttHikMiGxpkQF8uE6nR00v4RzleK%2F3GFBZBuYNs6Xp2bfWmUMtawfJgNzp0C2NSOrlUyzA6DuoJVEuAoi6rJWOdzqymhNitmQonF4aBm%2BE0JrxuJ8EFKpb%2FZpIkfJSRUwz7XwY%2FGaNkVidsKm1MVYme1dnKL%2F%2Fi%2BawSK%2BYuuMle1R7yfmYSqU0EA9SGlWsl1iGL7OoTqlajDn%2F9zJBjqkAVnastZvCHIKiLYE18OiqUcq7DK0f5exxDAeb6AljvjcsBMZiy7TTmyE0SdCrIvNXRceO7gnhEYe5IKdS34qXF1ci5blItLGUOSexUrQYew60iyF1EsXuessj9h2hV9fMhVvGiu9oPkB0Dc3I0gHsGgh3fkuhusqdyGc489z37HW29%2F0%2BoEmc%2BDGQMzES5U3IYzsjsx3kLVNm3zUt5G8MhYKCh4V&X-Amz-Signature=ac010ac897ef005cf4715339ce4aff6d9be0625aaeed9d4a6c9405d83a978939&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQT6PBSP%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T214811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCf%2B%2BIAKPy632sNZY3SC%2BfkqmVDXvdHevEHQlB8QtEOjgIhANo6n2vYpgCeWRV0XOzTYbf29JE%2BW%2FLpPk8cCan6Q%2BP4KogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx63%2BS2wCQOuQUdoAcq3APCnjLIUGtxRcoiEWob63rFdt8ywLWwvo9tuVOlXAvaUlLiwQzXF6kp3UzGp9VUdFoJXTF5egakkXTnKsoPZP8ueJen6AcjmXkJpyZIWESEqVxSrRtEAlBtR6Q5brvSrkvqHRilRueAuxIpcSVwkwzOKL%2FX2cKbs%2BNOnhNaExtlkJKO0yvicMyIaIjEMLqLyl3k6st9HeO%2FAxgBtnDKYZpoetYLFZlUiqPBQZEgDcY%2BD5BRxz0DDdMv6pQOydRlSOwhYlyqJ9OXhq%2BJCf0MXkX%2B1KzwFbKMowYy4XoD24qWj5SEjPENlRotqVr%2BmbqOsUtnfOIN2tfNm5AkD37ttvFwL8fGEOz4H3RHgMdBe971fC%2BtYR7oNNbFxfanmR00uwGTIS3XuIa3Idxn2RYtsFyfEUV1LLcdqaaL9rwFV9uOTIVpj7xttHikMiGxpkQF8uE6nR00v4RzleK%2F3GFBZBuYNs6Xp2bfWmUMtawfJgNzp0C2NSOrlUyzA6DuoJVEuAoi6rJWOdzqymhNitmQonF4aBm%2BE0JrxuJ8EFKpb%2FZpIkfJSRUwz7XwY%2FGaNkVidsKm1MVYme1dnKL%2F%2Fi%2BawSK%2BYuuMle1R7yfmYSqU0EA9SGlWsl1iGL7OoTqlajDn%2F9zJBjqkAVnastZvCHIKiLYE18OiqUcq7DK0f5exxDAeb6AljvjcsBMZiy7TTmyE0SdCrIvNXRceO7gnhEYe5IKdS34qXF1ci5blItLGUOSexUrQYew60iyF1EsXuessj9h2hV9fMhVvGiu9oPkB0Dc3I0gHsGgh3fkuhusqdyGc489z37HW29%2F0%2BoEmc%2BDGQMzES5U3IYzsjsx3kLVNm3zUt5G8MhYKCh4V&X-Amz-Signature=962b5c9de0ce1fe967d440236a6ab1453343c364c7b4d05c46db8d65d54465f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

