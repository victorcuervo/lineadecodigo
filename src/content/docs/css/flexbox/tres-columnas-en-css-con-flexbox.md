---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TB3DRNET%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T025413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH1o7ZjJxmnwoTqW6DSwrjxvrY2TQaycUz97byWHg40OAiEAibIv12PL5u85P%2BVUqm7b3K8E08gspnrEQsDSBZ8x%2BxgqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDATh%2BzsW4KHrdBWJjCrcA9KMpK7rGC6YvWPRmOu77DxyUp7WjCF5OmaZd4og3FrG6tQtIfK40%2FKVyQGaS%2B%2F3JuMCrCNqR%2FhcizNrl1MJQ5oZIvhrmXPxuW0a0Mv0hBMNgYshBa%2F%2BcHy8wizUXfg1WIOwrZtC%2B3i1TAIKC79xw7NfrxguLXVEjj3wGZxhDwmB4e%2Fsd0ib8sFdkwTWR7M9HIS64ClhYdAPu03cVDBAHfoXXiz5ytpj2SoDmZJ0bCKNRYl6uAH8gpO92gtVy2oSotHJAOMQXrUt10%2BSIqFHNZb6cd3pBly46u75BWA%2BfxaDDwP2hn46wCMFHjrKL%2BQezd7TvUa1XpFzxnJ4KT5XBbZN194JWJ5bGwGyDdvCaJ35K5QGoPWoijXQ0AVD%2FdVP%2Ff4SOdeslFEDhmfN%2FIyquEjBK5KFc%2Bb3l2QkvcTQOMiRwMGZ%2FJHRjKTk4pEpQ3BmgS7w4ejxaSppxNwTV0wLzKVDp%2FIQRaAfEjMaqGlDe%2FNYy6jNr80GusBiU7tumwn%2B8QF1I0FkWBZHNYy%2B6A8cXW7feAQBnFZ%2B1ol1Hr2vIcMPTHvuOBpagEIqVxOUeALYWK2yNtaENrXf7YwZJIOYVS6amem8LmqICsvUW%2BYbmL2LJiKmfUHYfwUVKEPiMJbv2MkGOqUBLbn7Dp%2BTBVFuTyuxGY7j8q5rqKjG9M87DLVBlqL94oAzEA9zvRWcZtVqjUSbQp%2FNyVHL3F%2Ft6erHth9Vu%2BnPXI4Iko8uY0UpF0qW%2BDw%2FjVlqbcvqfZqbCuTeOMlkMfmoiX1fOMiF4H1gyZf0p4MDKYxs9Crh7nIMrBXe78AE4xdyMxLbt2XSdntcgFOtsX2BmwEwppxz%2Bjb17BKWKoZ6SsIKq9Kx&X-Amz-Signature=ed9e329cf40c2eb565689763ae3bd63c2423db6864340bdce74091845f743b12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TB3DRNET%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T025413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH1o7ZjJxmnwoTqW6DSwrjxvrY2TQaycUz97byWHg40OAiEAibIv12PL5u85P%2BVUqm7b3K8E08gspnrEQsDSBZ8x%2BxgqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDATh%2BzsW4KHrdBWJjCrcA9KMpK7rGC6YvWPRmOu77DxyUp7WjCF5OmaZd4og3FrG6tQtIfK40%2FKVyQGaS%2B%2F3JuMCrCNqR%2FhcizNrl1MJQ5oZIvhrmXPxuW0a0Mv0hBMNgYshBa%2F%2BcHy8wizUXfg1WIOwrZtC%2B3i1TAIKC79xw7NfrxguLXVEjj3wGZxhDwmB4e%2Fsd0ib8sFdkwTWR7M9HIS64ClhYdAPu03cVDBAHfoXXiz5ytpj2SoDmZJ0bCKNRYl6uAH8gpO92gtVy2oSotHJAOMQXrUt10%2BSIqFHNZb6cd3pBly46u75BWA%2BfxaDDwP2hn46wCMFHjrKL%2BQezd7TvUa1XpFzxnJ4KT5XBbZN194JWJ5bGwGyDdvCaJ35K5QGoPWoijXQ0AVD%2FdVP%2Ff4SOdeslFEDhmfN%2FIyquEjBK5KFc%2Bb3l2QkvcTQOMiRwMGZ%2FJHRjKTk4pEpQ3BmgS7w4ejxaSppxNwTV0wLzKVDp%2FIQRaAfEjMaqGlDe%2FNYy6jNr80GusBiU7tumwn%2B8QF1I0FkWBZHNYy%2B6A8cXW7feAQBnFZ%2B1ol1Hr2vIcMPTHvuOBpagEIqVxOUeALYWK2yNtaENrXf7YwZJIOYVS6amem8LmqICsvUW%2BYbmL2LJiKmfUHYfwUVKEPiMJbv2MkGOqUBLbn7Dp%2BTBVFuTyuxGY7j8q5rqKjG9M87DLVBlqL94oAzEA9zvRWcZtVqjUSbQp%2FNyVHL3F%2Ft6erHth9Vu%2BnPXI4Iko8uY0UpF0qW%2BDw%2FjVlqbcvqfZqbCuTeOMlkMfmoiX1fOMiF4H1gyZf0p4MDKYxs9Crh7nIMrBXe78AE4xdyMxLbt2XSdntcgFOtsX2BmwEwppxz%2Bjb17BKWKoZ6SsIKq9Kx&X-Amz-Signature=54a7ed3087f1f34f5b4cc434e0e45f8604d54570e65b8d74837bb56245e94f71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

