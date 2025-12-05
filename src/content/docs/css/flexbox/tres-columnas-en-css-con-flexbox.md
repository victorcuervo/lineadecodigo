---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674WFTTLG%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T205903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBrBnD5CsfT%2Fu25uMkJQsKfK51N%2BWNf5E2hChjuSj9mSAiEAuXyAJrFK20S8HNheuRhYB9JmFpBYoi3SwSyHP7F5fp4q%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDP9Tp%2FvZyKcsyb2cNyrcA0ECiHYoNTiPxbhPAJzNdQTHMUOyFvg%2FqprPGmYtA%2F42GdHDm%2BiKX%2F%2Bn%2FSq4b1HqRMz5qGTbe7EeEtOstDMq5Rt6Tgjq%2BDlNAd3gB1Xpz7DPABLaNbZvmVV9oEGCWaYo7aOw%2BViy1wynSEdAh2jewIZGFEkC2cZDfFfSoSoPekoldgmz795Cajwi%2BOheEj2K4Wal3FRe0t6Nmz1ZJaN6c%2BzkUvcrEAXehU6yEUd%2FtmKAG8X1fpIAyb6tBMBGPaZz6yCNMzsCxEMCmug%2F0%2BoG4ivQcG5sozhRX%2FhMvrhaQ6BWiZ%2BYY40mcUfseJq9JXSFLirdJk5HdJbh%2Fcs2XwDbABHWG8JvfbKdzdaZnVWwyolvIE4GMhI8Bj9gDyWDlL7l%2Bre3eF64BWqtdieu2DZzvX7WJihUz2RU0ub%2FRmBl1rDyMQHlf4LP9iMwHMyaourxw4qcr%2Fjb%2FsXBl%2BAkqiNw6jebuB16rHmTiCeQoUuYdPgYf4vtM%2FW5eu7IxlCbva2CTztWzR5q6G8yzrbXF3u0Kx69zuvb3PnGcDLis%2BkWGF%2B0nI%2BQAOsgkw5ixgg0wYLlWR5SLta7ma39%2BwR75pfJDjhmIWFsvWrE5gSdTByhWXBCl%2BKyvmo2XFai8LrTMNz2y8kGOqUBfcId%2F2%2BJ2Gtv4MnZKJY0NqcB8USseWQ45eTBZ%2F2XMJvihfkkFij7QKom1S4yk8nEYjfgYb%2Fya7I8jY2bF5VpLNIXC10e558i41EKXuL22KH21bUa4UDFnEoDIcZ%2BW1YJyPQUlAzir1KOl%2Fef5W%2BVcH%2FTNQs51SZLsHkk8dRRhPN6d0unDITNUxzsmkdsp23c1FvumoVHyuPuYEv0BlYofuWlBsQi&X-Amz-Signature=874ee4817f60f36813de3bee4727f6e20d6f1b923471b40c3063bf41fdfdccd9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674WFTTLG%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T205903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBrBnD5CsfT%2Fu25uMkJQsKfK51N%2BWNf5E2hChjuSj9mSAiEAuXyAJrFK20S8HNheuRhYB9JmFpBYoi3SwSyHP7F5fp4q%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDP9Tp%2FvZyKcsyb2cNyrcA0ECiHYoNTiPxbhPAJzNdQTHMUOyFvg%2FqprPGmYtA%2F42GdHDm%2BiKX%2F%2Bn%2FSq4b1HqRMz5qGTbe7EeEtOstDMq5Rt6Tgjq%2BDlNAd3gB1Xpz7DPABLaNbZvmVV9oEGCWaYo7aOw%2BViy1wynSEdAh2jewIZGFEkC2cZDfFfSoSoPekoldgmz795Cajwi%2BOheEj2K4Wal3FRe0t6Nmz1ZJaN6c%2BzkUvcrEAXehU6yEUd%2FtmKAG8X1fpIAyb6tBMBGPaZz6yCNMzsCxEMCmug%2F0%2BoG4ivQcG5sozhRX%2FhMvrhaQ6BWiZ%2BYY40mcUfseJq9JXSFLirdJk5HdJbh%2Fcs2XwDbABHWG8JvfbKdzdaZnVWwyolvIE4GMhI8Bj9gDyWDlL7l%2Bre3eF64BWqtdieu2DZzvX7WJihUz2RU0ub%2FRmBl1rDyMQHlf4LP9iMwHMyaourxw4qcr%2Fjb%2FsXBl%2BAkqiNw6jebuB16rHmTiCeQoUuYdPgYf4vtM%2FW5eu7IxlCbva2CTztWzR5q6G8yzrbXF3u0Kx69zuvb3PnGcDLis%2BkWGF%2B0nI%2BQAOsgkw5ixgg0wYLlWR5SLta7ma39%2BwR75pfJDjhmIWFsvWrE5gSdTByhWXBCl%2BKyvmo2XFai8LrTMNz2y8kGOqUBfcId%2F2%2BJ2Gtv4MnZKJY0NqcB8USseWQ45eTBZ%2F2XMJvihfkkFij7QKom1S4yk8nEYjfgYb%2Fya7I8jY2bF5VpLNIXC10e558i41EKXuL22KH21bUa4UDFnEoDIcZ%2BW1YJyPQUlAzir1KOl%2Fef5W%2BVcH%2FTNQs51SZLsHkk8dRRhPN6d0unDITNUxzsmkdsp23c1FvumoVHyuPuYEv0BlYofuWlBsQi&X-Amz-Signature=e2dd180081ba97216f64dc89988df012bbde445b317f82dd6afde3b5e17b458b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

