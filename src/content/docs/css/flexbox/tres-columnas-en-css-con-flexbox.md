---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XFAV6GB%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T214404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChzQkWIaJqDCyzh8vkO3U0YOoYlZy4LqzyhcvNgXq6fQIhAPWl7tcFu4i21IT%2BxrIV2BkoNglmLyAkgxArCqQpODuHKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyiYqsm8Owyaci8k0sq3APsS0ZzmBdnnz5X3vIDoyAv6uRnzv3fJdVVAlhO8Osrwq%2Bi1qK25Ph871QNcuobQPleSO2wfE0plOmEH4tFoo5gGwFRxelLKViMB83bi1fZxpn%2B8XOOtfDOYLE7KBQMge0UQKX%2FbsPJ%2FeKJbxwSpCrXVi7BIOVm5F6jxe37LzYGhA7MBiX7vNRiZ1vynIU1t3LFEHUDk30n3dect6pm5tFr3FMGTR3jw%2FXQnvRKroVjayHT0L3LWSg78DoDbSLGeXdpe2tCc3xl6zEkYSavgaKH9Cp0OkUFI3dxfa9CjL1jPWViUlEZBgih6NZK2gAP8y%2FleGgGuB7c%2Bni7ZTrox9RgvVJGzh1Re%2B3jFG5MvuXTBxEBz6y6XoVk5L4D9RBRQzCAS3sX5i6MNzoDjlNmOvaRCG9g1udMhVWjQMncmQVAlkOkTFAG1%2Fimor%2FNTyhUplH3ZIXWJxJO%2BlmwFFYpLihUltGgeSkKll7RdKz9RGjK2tciRqAPoucs4T5uFClfYl1tH6vl0o3JvRxUNoMkbr7aldjKCV1jRcPmym1xBlenS%2BcIt8%2FPY3jh7G2cpxuIDaLtkBpY%2BvaRIELJ040i6pB99f7adRpGgXXRhIgszCJa8m2ueMh2hAlHNt%2BnRjD9%2F9zJBjqkAb%2B2PonnMa3pM7gWeFMpAzO3wVyEVoHUB2KEYXbshAAWO%2BZQ3a9TmDaY09HVCm%2FWw6hlNNBoVq2%2BPq6QsHH7QQK43WY1dmioF8JrdDh1OBbCVnwVuxrgQ6eopkoxaedsK3oIaQGyAKh3me8Mt2BIx466I2%2FZu5sEk72646gszrofLkDbDb%2BtRb99DtePTz6Un%2BtQI2zJ0ATuo5GhpGDjPxke5QKz&X-Amz-Signature=2c5eb6f2eebb4204247810e5af1c4e21e11c5e698d62ea590471ad918a05fdc0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XFAV6GB%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T214404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChzQkWIaJqDCyzh8vkO3U0YOoYlZy4LqzyhcvNgXq6fQIhAPWl7tcFu4i21IT%2BxrIV2BkoNglmLyAkgxArCqQpODuHKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyiYqsm8Owyaci8k0sq3APsS0ZzmBdnnz5X3vIDoyAv6uRnzv3fJdVVAlhO8Osrwq%2Bi1qK25Ph871QNcuobQPleSO2wfE0plOmEH4tFoo5gGwFRxelLKViMB83bi1fZxpn%2B8XOOtfDOYLE7KBQMge0UQKX%2FbsPJ%2FeKJbxwSpCrXVi7BIOVm5F6jxe37LzYGhA7MBiX7vNRiZ1vynIU1t3LFEHUDk30n3dect6pm5tFr3FMGTR3jw%2FXQnvRKroVjayHT0L3LWSg78DoDbSLGeXdpe2tCc3xl6zEkYSavgaKH9Cp0OkUFI3dxfa9CjL1jPWViUlEZBgih6NZK2gAP8y%2FleGgGuB7c%2Bni7ZTrox9RgvVJGzh1Re%2B3jFG5MvuXTBxEBz6y6XoVk5L4D9RBRQzCAS3sX5i6MNzoDjlNmOvaRCG9g1udMhVWjQMncmQVAlkOkTFAG1%2Fimor%2FNTyhUplH3ZIXWJxJO%2BlmwFFYpLihUltGgeSkKll7RdKz9RGjK2tciRqAPoucs4T5uFClfYl1tH6vl0o3JvRxUNoMkbr7aldjKCV1jRcPmym1xBlenS%2BcIt8%2FPY3jh7G2cpxuIDaLtkBpY%2BvaRIELJ040i6pB99f7adRpGgXXRhIgszCJa8m2ueMh2hAlHNt%2BnRjD9%2F9zJBjqkAb%2B2PonnMa3pM7gWeFMpAzO3wVyEVoHUB2KEYXbshAAWO%2BZQ3a9TmDaY09HVCm%2FWw6hlNNBoVq2%2BPq6QsHH7QQK43WY1dmioF8JrdDh1OBbCVnwVuxrgQ6eopkoxaedsK3oIaQGyAKh3me8Mt2BIx466I2%2FZu5sEk72646gszrofLkDbDb%2BtRb99DtePTz6Un%2BtQI2zJ0ATuo5GhpGDjPxke5QKz&X-Amz-Signature=038f694a361ee7c1b8f55c07d1dbf12065642c9b38cf20d06a23d36a5e663897&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

