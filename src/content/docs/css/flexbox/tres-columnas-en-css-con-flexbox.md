---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PJ5QBT5%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T054233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCC%2FqGvbD5v3vBrjY3rBaOb1p5c7uOOab2VuJmrdlkGgIhANoEZZxIp387bA3kzX9tm%2FtPDqYhjh9IQ9dPUM6Hf37SKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwxpRvEtbheAQaBZeEq3APJC%2BRoJkUZubV2BS3aycD5kysT5MQnS9nQ%2B1QHW24yTgOQlV4gCgne4I4mWDtlwXJmKJxePr8wMjEsT1HVAzxPOGpxzRS0DGpsBEZyL3MkBMJTTir80G0glc542LIiokYmeTgnyuIGswxD8eCMUF3h7VPNrqtTOI7Vf2hHfPVJCZ5cT%2BvteQ6yup1euzVIXnn%2FPEt0pHLbagFv%2BKtgWaloqt0enbah3HJFD7uGh1dlDf6PoY7QkTFeoqD4oOngZkG1uVQzES5OwrpCycQHTbuHYzyrWgVS%2B4Uhtpw4oG9Zojp4ItqF%2BBclwWipM1j5LH3m8LAZOROE%2B6uSXaKt7Eq8KNwRtcqRU329ypMC2VYWQN5uq5%2FiYj9wfeE%2BsyczOuZTu3%2F3sUG4q3PpqGUZ%2FEprucajO7ix%2BnI3K9cB1W6R0nIN28ju7o8rIAf1HI25lfBhaO3FfDAg%2Bwx9hKCkuCKbEZCQke1g%2FwyJw5EQyqnrxlbGqF1b7aXHPggDp4qK7Wvizs%2B18XCEzmOxRui4qV0NVgAGcxL6fS%2Fa%2F0dXQrauOWXY1UxqRW4nbW6an3jJatTx3dRSh2Yy4fE%2FyqbdqBMiaetVbv80zwBB%2FZXWBdciyqf5hhhJtnkvTp9vSzDVtNnJBjqkAaDAvZovnF9QbwzOkcOBu950rMnWgqfmGEHkFQtuLgTNoHdCFIn%2FTjGtU711lwfqy6hsAGZXF5UKya0lv9gA%2B5VEeVKxZGJijUxnwrHvZxwLtOSmD3P722%2BLbBwzYGOtj50JvRtqLpF6yy3sKtP8TTBPeXQ9e26MHQvzGUajEhnx2ZYqtNi6k9XPa22MAJ8Sy0tcYsl4PpFnYmCvNkdYzIYeoLQV&X-Amz-Signature=d2443337e15eb0cc80e1003506d6286c06738b11c0f79448109749cd7ee6f34f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PJ5QBT5%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T054233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCC%2FqGvbD5v3vBrjY3rBaOb1p5c7uOOab2VuJmrdlkGgIhANoEZZxIp387bA3kzX9tm%2FtPDqYhjh9IQ9dPUM6Hf37SKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwxpRvEtbheAQaBZeEq3APJC%2BRoJkUZubV2BS3aycD5kysT5MQnS9nQ%2B1QHW24yTgOQlV4gCgne4I4mWDtlwXJmKJxePr8wMjEsT1HVAzxPOGpxzRS0DGpsBEZyL3MkBMJTTir80G0glc542LIiokYmeTgnyuIGswxD8eCMUF3h7VPNrqtTOI7Vf2hHfPVJCZ5cT%2BvteQ6yup1euzVIXnn%2FPEt0pHLbagFv%2BKtgWaloqt0enbah3HJFD7uGh1dlDf6PoY7QkTFeoqD4oOngZkG1uVQzES5OwrpCycQHTbuHYzyrWgVS%2B4Uhtpw4oG9Zojp4ItqF%2BBclwWipM1j5LH3m8LAZOROE%2B6uSXaKt7Eq8KNwRtcqRU329ypMC2VYWQN5uq5%2FiYj9wfeE%2BsyczOuZTu3%2F3sUG4q3PpqGUZ%2FEprucajO7ix%2BnI3K9cB1W6R0nIN28ju7o8rIAf1HI25lfBhaO3FfDAg%2Bwx9hKCkuCKbEZCQke1g%2FwyJw5EQyqnrxlbGqF1b7aXHPggDp4qK7Wvizs%2B18XCEzmOxRui4qV0NVgAGcxL6fS%2Fa%2F0dXQrauOWXY1UxqRW4nbW6an3jJatTx3dRSh2Yy4fE%2FyqbdqBMiaetVbv80zwBB%2FZXWBdciyqf5hhhJtnkvTp9vSzDVtNnJBjqkAaDAvZovnF9QbwzOkcOBu950rMnWgqfmGEHkFQtuLgTNoHdCFIn%2FTjGtU711lwfqy6hsAGZXF5UKya0lv9gA%2B5VEeVKxZGJijUxnwrHvZxwLtOSmD3P722%2BLbBwzYGOtj50JvRtqLpF6yy3sKtP8TTBPeXQ9e26MHQvzGUajEhnx2ZYqtNi6k9XPa22MAJ8Sy0tcYsl4PpFnYmCvNkdYzIYeoLQV&X-Amz-Signature=cf939b7b580e1c897a7f9c19e31ea66a318b542506b3a9049b8063830f9eff02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

