---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDBMFYR6%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T110855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH8QhwOPITytBbEQE%2BAafy3Fz%2BHbNwTJfTUeT1PnrdUdAiEAjH387jWqhB5PtMjp7FwmD6SJ6p%2BUtlh4uncRUjB1XcMq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDIR7GWnm%2By%2FNzKIOLircA3MiQwy5SEt%2BE2%2BmOOqhq9qNjhdBqWFc7bJOPM68Qhs9vdTldlZ3bvFf7gi9Q5f1ilxA0m3YSPAYoNxRHnv%2BBXcfVYgleiXmWgRN0dOGD3PE%2FCH6oz65mLIWvKcvjRzv2ijA8KJasE5xC4a8FO%2BQBk%2FfdXLyxi%2FDgqnM77MD%2BzOjuPuF8jUInac4kkZ6vC7xUW5G85CloGIdF4sOX9DxFK5odfF5ZUg9utkvZYLFfUD%2F42YEB8G45T%2BtQx8YurTAWAjO%2BvpQWWO%2FFTRoGDnki2i%2Bz0msKdCnE%2F7FQHoECLbC%2BNpJJuGA1zggnMK1bDtCfJvoruuWRzwbIypLWKSlVLg6X6eLX7lmJDfxSJ6plNolH3gtWAlX%2B5XdXTOsunVBwAhj%2FmFM0BLqL7hXrSbLME%2FFqLblzjAfOYWViMnAimZzyceGxM99%2BKQZdoc6v8UNKqDkHJJkDfvZ58K17%2BTTuJe8RoJ3aKAfpZ2wrkT1g9p9tBCprgT%2BIbfhJYA4nkwM0Ipom2LYbbqxijZ%2FPVXHApJLwh%2BJK26Td87gV4A3ufc7VBlgYYK5AEUAq3PYHeiPU0T9QvujiF%2Bb3xu9jMNSD%2BKqWSgMtTcgImFj4pehlpoFV%2BujlYVdDGdq0uPrMLPOyskGOqUB63umU3AAiB1bOzu3LHZwXZbCoSK8A6ZgbJoEB3v7SUg%2FX7NMUNLxmaCu6Ppif%2FhtGc4VxffSFZb2KHgUlHcNzDBKX6xsBcgOUvBRzGhKVGg%2Fv6ceWOp%2BAuwbcxbLFmwKeQXSSEKX39MuVHNkiZG0ET5a4X7CJBDH7v93BiOH9fhWPqNQPBlH71fKRHFaB2tUa4A5E1NezMok%2FNyOp8f7aMdIHsxU&X-Amz-Signature=cd840bb7d706e1ae89b98c3a4ea2ec0778a349eed5e59f092f12e1e4e0e6b8d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDBMFYR6%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T110855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH8QhwOPITytBbEQE%2BAafy3Fz%2BHbNwTJfTUeT1PnrdUdAiEAjH387jWqhB5PtMjp7FwmD6SJ6p%2BUtlh4uncRUjB1XcMq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDIR7GWnm%2By%2FNzKIOLircA3MiQwy5SEt%2BE2%2BmOOqhq9qNjhdBqWFc7bJOPM68Qhs9vdTldlZ3bvFf7gi9Q5f1ilxA0m3YSPAYoNxRHnv%2BBXcfVYgleiXmWgRN0dOGD3PE%2FCH6oz65mLIWvKcvjRzv2ijA8KJasE5xC4a8FO%2BQBk%2FfdXLyxi%2FDgqnM77MD%2BzOjuPuF8jUInac4kkZ6vC7xUW5G85CloGIdF4sOX9DxFK5odfF5ZUg9utkvZYLFfUD%2F42YEB8G45T%2BtQx8YurTAWAjO%2BvpQWWO%2FFTRoGDnki2i%2Bz0msKdCnE%2F7FQHoECLbC%2BNpJJuGA1zggnMK1bDtCfJvoruuWRzwbIypLWKSlVLg6X6eLX7lmJDfxSJ6plNolH3gtWAlX%2B5XdXTOsunVBwAhj%2FmFM0BLqL7hXrSbLME%2FFqLblzjAfOYWViMnAimZzyceGxM99%2BKQZdoc6v8UNKqDkHJJkDfvZ58K17%2BTTuJe8RoJ3aKAfpZ2wrkT1g9p9tBCprgT%2BIbfhJYA4nkwM0Ipom2LYbbqxijZ%2FPVXHApJLwh%2BJK26Td87gV4A3ufc7VBlgYYK5AEUAq3PYHeiPU0T9QvujiF%2Bb3xu9jMNSD%2BKqWSgMtTcgImFj4pehlpoFV%2BujlYVdDGdq0uPrMLPOyskGOqUB63umU3AAiB1bOzu3LHZwXZbCoSK8A6ZgbJoEB3v7SUg%2FX7NMUNLxmaCu6Ppif%2FhtGc4VxffSFZb2KHgUlHcNzDBKX6xsBcgOUvBRzGhKVGg%2Fv6ceWOp%2BAuwbcxbLFmwKeQXSSEKX39MuVHNkiZG0ET5a4X7CJBDH7v93BiOH9fhWPqNQPBlH71fKRHFaB2tUa4A5E1NezMok%2FNyOp8f7aMdIHsxU&X-Amz-Signature=3516f022937e105e509f090b9e9d8f46f941d4197f38d749c0d1c2c8d65bf860&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

