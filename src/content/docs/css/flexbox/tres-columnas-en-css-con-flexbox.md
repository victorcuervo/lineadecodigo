---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDWBJPDI%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T113011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqHUTZ6XjZ7VIMSv8KoBsd3hpeIMTOA9XRcB%2FR2wAmxwIhALa6GTDMaGfZLR5JRs7d6okhBH%2BALC%2BeBlbvzIWak9ZuKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxNukbo%2Fa%2BlAvPdEnMq3AMw9hjN6cE2%2FRCf969z5uo4JCZqN8N%2F8FUeuW3W%2BhQ2gHyPhqP%2BdLRMVUIYc8g%2F7XR%2B9Mdh%2Blu46pPkr5%2B%2B7Wv8hTzJEw3%2FKz8wMvyarHW%2Bqg0atgA7pqcOSsZGUMD5NtsRGbzLacpehA5f4R7dT1uZ6%2BHaGM%2F4x045Lvl2OTDZXd7DfwqB4%2BN2dy0DiR03C48mqcnobPpgrqho20cBFvcGiGmV4XEz48liCTHV4U9lL7a7U3LnaecacTulolXZjeE3Nwi6wqVqjtzjo%2FV18gnnSCPqsJmdKM5AE2ArCdu5FDdM%2BqG5eTDgWqGAWRmPcbYdZ3xJdrXUEfWy2qSH%2FJgECllOCiiiGuekX%2Fk8BtE7AJcXIgqzmo%2BfbQK%2Bj6uyELQQQZuyZIa3XYkWMBiIIsQ%2FsV8cSqwDYYEYtxhTW2iBQCtgYGBgVHbEe0IvroaB4tbbXzTPx9cFLUm9JJ0mPDYM4qA%2BifJ%2BONQWF4vGeBtaHA9HQIpdg1UyenkjISFwGQ%2BqVPklmPGcAHYE474Rkb01kr%2FPx4DSx2K9cyNzBbfrezBW7FOEi0bgr5n49eejxJtR5PVAEg0aSHuv1SUeAwWeYnAsTnMulHMJ4Qg6MswjKOqmhMuf905wVK%2BU%2BTDlrtrJBjqkAQKMUdDSHZiWaTlLS%2BjD07OKHjyLEVN6r%2Fbl3KOBdh%2BktO40q%2BKn8rO5Y%2BC5ZHcBBIwWyt%2FjfrnDKp6jw2D4nSvhapWQH9z1xNHmmVr%2Ba%2BSpjxJH7x68TvRI7vf1y1HzT8V%2BoWNFh5SlSts%2FoFmms6u3sKQuAB0MGIhejgldvuBPzJUI3cETtYK65ropXLb4o5Jq3Ue8TtvcZaD0OVwyHovAnVZX&X-Amz-Signature=4fcab191a6328855187f2c5847a44529c5ddb518cca81800a3e1a03765167a02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDWBJPDI%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T113011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqHUTZ6XjZ7VIMSv8KoBsd3hpeIMTOA9XRcB%2FR2wAmxwIhALa6GTDMaGfZLR5JRs7d6okhBH%2BALC%2BeBlbvzIWak9ZuKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxNukbo%2Fa%2BlAvPdEnMq3AMw9hjN6cE2%2FRCf969z5uo4JCZqN8N%2F8FUeuW3W%2BhQ2gHyPhqP%2BdLRMVUIYc8g%2F7XR%2B9Mdh%2Blu46pPkr5%2B%2B7Wv8hTzJEw3%2FKz8wMvyarHW%2Bqg0atgA7pqcOSsZGUMD5NtsRGbzLacpehA5f4R7dT1uZ6%2BHaGM%2F4x045Lvl2OTDZXd7DfwqB4%2BN2dy0DiR03C48mqcnobPpgrqho20cBFvcGiGmV4XEz48liCTHV4U9lL7a7U3LnaecacTulolXZjeE3Nwi6wqVqjtzjo%2FV18gnnSCPqsJmdKM5AE2ArCdu5FDdM%2BqG5eTDgWqGAWRmPcbYdZ3xJdrXUEfWy2qSH%2FJgECllOCiiiGuekX%2Fk8BtE7AJcXIgqzmo%2BfbQK%2Bj6uyELQQQZuyZIa3XYkWMBiIIsQ%2FsV8cSqwDYYEYtxhTW2iBQCtgYGBgVHbEe0IvroaB4tbbXzTPx9cFLUm9JJ0mPDYM4qA%2BifJ%2BONQWF4vGeBtaHA9HQIpdg1UyenkjISFwGQ%2BqVPklmPGcAHYE474Rkb01kr%2FPx4DSx2K9cyNzBbfrezBW7FOEi0bgr5n49eejxJtR5PVAEg0aSHuv1SUeAwWeYnAsTnMulHMJ4Qg6MswjKOqmhMuf905wVK%2BU%2BTDlrtrJBjqkAQKMUdDSHZiWaTlLS%2BjD07OKHjyLEVN6r%2Fbl3KOBdh%2BktO40q%2BKn8rO5Y%2BC5ZHcBBIwWyt%2FjfrnDKp6jw2D4nSvhapWQH9z1xNHmmVr%2Ba%2BSpjxJH7x68TvRI7vf1y1HzT8V%2BoWNFh5SlSts%2FoFmms6u3sKQuAB0MGIhejgldvuBPzJUI3cETtYK65ropXLb4o5Jq3Ue8TtvcZaD0OVwyHovAnVZX&X-Amz-Signature=18bc958f04e322f4e9ed7a6fc543f2daaa01c40ed8172a31e8e863e81a1be511&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

