---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YDNSI4W%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T072237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCID9g7wpYX2LlDWjUUSIsv%2Bzey8QVsmYGXKzSfLekuwFjAiA7zY0VCxFQnspsAFcf4j3TzynLlBiN4YMerRsY%2BG%2BGtCr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMZgqWNO66oYwQm6NIKtwDXgdt2DdSjeSShsxP7JPMFrWdAHwws0ZwcAHlTxy6W6PQtAaA90a0SZ%2FzVhx%2FbZJQN1u9JcJkI1hkT9sfQiFeqEhwSceA%2BI6DxNw2SzVv1mdrvrpBmN%2FCeBAwNKaudfzs973pqlVbBkXnKuV53uTCc4uDqVEoh9H6TQyNcGqBzuSGHNfXqSf6%2FJo%2FUruSZcGjofZWCA9MIMAruDhHHqnK%2Ff%2Bq1qev6r2y34uzoEsGPD9Y08hBsuNXjgpxM8U6nRSE9yEFXBZb3dCVbb%2F0nZeQgJvP%2F2gK8qF4sZQ102wOV7nY2nmZ0HiWQgD%2FjWgcc7eV%2BkKo5pHRU9%2Bj1dma%2FbPjPmWRB2rjFJsVh639DY19R3U0paYAVNU5UO4MFSKf0t3K711dy0k5jzs0btvXw%2F39a0L1sPGu8W0YS2nJ%2BzHfBBwplWUZqKdJISxrY1HLggULym34y79KQ%2BuyYVugjXEhuAHCOM3t8GdDfN%2BC%2F56mB%2BdliNAasItPpc6AnFpoTmC%2Fs69Ki4kznqBU%2B%2By9YnErRVOEc1eRp0enCc8z4M5HUU6jfq8YAnntAdF7TJ48JYaQw98D4Ykeiw7blY5CD8hAshRTWAqefkKkJriV9kBQclUeKOjuBVWTPmPUMoYwtujEyQY6pgFm%2FnSt8EosF067B0%2Fu1F5ONE8sekooFivILYbBfYfSYTxN8xXRAvgiSwD6UqHqBkX7e%2F9NtUy5KQW2i2vEybJ1VMA2zrKrC01MFADD0pktvTs2XzdmOCdxsBl0%2Fyl%2Bbz9p2D6%2BsbWBO4W6HF5JEnfhBsuvM%2Bdb9yF7DepYf249ada%2Bf8yof63IPjWFSXvlX%2FLBQdOXUi8rInhPujHL7ibBrtvUNCMi&X-Amz-Signature=cf1faddf94c680804d54b9cc2fb7b28a3aab2ddbadf2c12fd7475d0303fffbf3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YDNSI4W%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T072237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCID9g7wpYX2LlDWjUUSIsv%2Bzey8QVsmYGXKzSfLekuwFjAiA7zY0VCxFQnspsAFcf4j3TzynLlBiN4YMerRsY%2BG%2BGtCr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMZgqWNO66oYwQm6NIKtwDXgdt2DdSjeSShsxP7JPMFrWdAHwws0ZwcAHlTxy6W6PQtAaA90a0SZ%2FzVhx%2FbZJQN1u9JcJkI1hkT9sfQiFeqEhwSceA%2BI6DxNw2SzVv1mdrvrpBmN%2FCeBAwNKaudfzs973pqlVbBkXnKuV53uTCc4uDqVEoh9H6TQyNcGqBzuSGHNfXqSf6%2FJo%2FUruSZcGjofZWCA9MIMAruDhHHqnK%2Ff%2Bq1qev6r2y34uzoEsGPD9Y08hBsuNXjgpxM8U6nRSE9yEFXBZb3dCVbb%2F0nZeQgJvP%2F2gK8qF4sZQ102wOV7nY2nmZ0HiWQgD%2FjWgcc7eV%2BkKo5pHRU9%2Bj1dma%2FbPjPmWRB2rjFJsVh639DY19R3U0paYAVNU5UO4MFSKf0t3K711dy0k5jzs0btvXw%2F39a0L1sPGu8W0YS2nJ%2BzHfBBwplWUZqKdJISxrY1HLggULym34y79KQ%2BuyYVugjXEhuAHCOM3t8GdDfN%2BC%2F56mB%2BdliNAasItPpc6AnFpoTmC%2Fs69Ki4kznqBU%2B%2By9YnErRVOEc1eRp0enCc8z4M5HUU6jfq8YAnntAdF7TJ48JYaQw98D4Ykeiw7blY5CD8hAshRTWAqefkKkJriV9kBQclUeKOjuBVWTPmPUMoYwtujEyQY6pgFm%2FnSt8EosF067B0%2Fu1F5ONE8sekooFivILYbBfYfSYTxN8xXRAvgiSwD6UqHqBkX7e%2F9NtUy5KQW2i2vEybJ1VMA2zrKrC01MFADD0pktvTs2XzdmOCdxsBl0%2Fyl%2Bbz9p2D6%2BsbWBO4W6HF5JEnfhBsuvM%2Bdb9yF7DepYf249ada%2Bf8yof63IPjWFSXvlX%2FLBQdOXUi8rInhPujHL7ibBrtvUNCMi&X-Amz-Signature=e386ac7c707a5a69c7e9e677bc65239a4e4c6305f1fd364639fd26fe3bb410b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

