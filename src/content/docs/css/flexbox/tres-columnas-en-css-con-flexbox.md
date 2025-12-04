---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTNRX3YC%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T052101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQDzqFeOO8h4spfVXzhwEIB7HoXWwnpKDV3wMt9du%2BM7TAIhAJBGpJ6TJMLo0sh3yu%2Bd7SmtZio6cOdZLNpADBs0z%2BP6Kv8DCD4QABoMNjM3NDIzMTgzODA1IgxRgMA4XohVCBtQvUEq3APuwy8i9s4rqivSbgsDEqEqBc2bBwSObLmnwB09xZRTiusr6UARBolaokflQFi3bLJfPCIQ%2FVkITrRocNH%2BXkReQ4Yr4a9UOLcS%2Fk4pV4W4WSj3cgqQUT5ToTTd2GvGMi7aMScKGEvnTAx8bXtMVelZNrRJg6TunbQT8Fu3pDPCjPQaybwfsZSNZgqn68dG4SJV57Pt791dF8DVkrFLMgbXzivcHm3PeMucydZacTF9zGJO2ERrGugmLXkoRamGRPDzyXyD4kIvwPt4D3REbYNcBPUWQ2MkbLiDXyNeVwEtAzUJvGaASxkKhke2BW%2FcQjohd3wwQ%2FNQ0eHtT2hgvTIwvSGd3NkDJSUp9d%2BqQww43PHDpYTr%2Fom%2B2l1PLsdSL6Mu3t0M2Ptc94Z%2FOfLiun22cSvKhKTvxXBJgXRaIheZFq%2FuiH3r3VZaEWg7WXWYEInzQu%2FC2EuI9h0pEx%2Flacb%2FlyxMDyCNJXIny6nPE%2B4pLs6PaB%2Bewok00cuUNmpcZzu60FFNErSvXpYufXkRDUIFRoruYH3lB4n9LyZ%2BjZu6YOWU%2B2j4RlOe34IDodH0QgwWBvni7KvkQ0CixpDOXs0UT%2BkZvHDwzlxfU9hKhiw2f7NJBOGCDqWAdngI6zCSrsTJBjqkAbQNAIgB1SwpTU4LgDr%2F%2BcJ28YNkpVpH3W0PV2%2FSjqKaauX0tBvdanjfNT0LCQBddWZCaPexd5IS2rILuq3zthAkmILMvygeyVx6rOz132SmPeveUHYFcScotCIuXFLgqcynqXmH4m%2F%2BwJQ7Ud0T32QB4N6F2Ak8tlKjgTzrqOxpFmSEORDYpUpglUgpKuQ%2FScA9oek07kj8IPEfvzx7gHU6pEyP&X-Amz-Signature=d2aa9d5bfacfa18835d8c1e2ea4a8482b53048668c2be55b54f9895ead3d84fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTNRX3YC%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T052101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQDzqFeOO8h4spfVXzhwEIB7HoXWwnpKDV3wMt9du%2BM7TAIhAJBGpJ6TJMLo0sh3yu%2Bd7SmtZio6cOdZLNpADBs0z%2BP6Kv8DCD4QABoMNjM3NDIzMTgzODA1IgxRgMA4XohVCBtQvUEq3APuwy8i9s4rqivSbgsDEqEqBc2bBwSObLmnwB09xZRTiusr6UARBolaokflQFi3bLJfPCIQ%2FVkITrRocNH%2BXkReQ4Yr4a9UOLcS%2Fk4pV4W4WSj3cgqQUT5ToTTd2GvGMi7aMScKGEvnTAx8bXtMVelZNrRJg6TunbQT8Fu3pDPCjPQaybwfsZSNZgqn68dG4SJV57Pt791dF8DVkrFLMgbXzivcHm3PeMucydZacTF9zGJO2ERrGugmLXkoRamGRPDzyXyD4kIvwPt4D3REbYNcBPUWQ2MkbLiDXyNeVwEtAzUJvGaASxkKhke2BW%2FcQjohd3wwQ%2FNQ0eHtT2hgvTIwvSGd3NkDJSUp9d%2BqQww43PHDpYTr%2Fom%2B2l1PLsdSL6Mu3t0M2Ptc94Z%2FOfLiun22cSvKhKTvxXBJgXRaIheZFq%2FuiH3r3VZaEWg7WXWYEInzQu%2FC2EuI9h0pEx%2Flacb%2FlyxMDyCNJXIny6nPE%2B4pLs6PaB%2Bewok00cuUNmpcZzu60FFNErSvXpYufXkRDUIFRoruYH3lB4n9LyZ%2BjZu6YOWU%2B2j4RlOe34IDodH0QgwWBvni7KvkQ0CixpDOXs0UT%2BkZvHDwzlxfU9hKhiw2f7NJBOGCDqWAdngI6zCSrsTJBjqkAbQNAIgB1SwpTU4LgDr%2F%2BcJ28YNkpVpH3W0PV2%2FSjqKaauX0tBvdanjfNT0LCQBddWZCaPexd5IS2rILuq3zthAkmILMvygeyVx6rOz132SmPeveUHYFcScotCIuXFLgqcynqXmH4m%2F%2BwJQ7Ud0T32QB4N6F2Ak8tlKjgTzrqOxpFmSEORDYpUpglUgpKuQ%2FScA9oek07kj8IPEfvzx7gHU6pEyP&X-Amz-Signature=eb6e85f376ae8a884ead4ad565cb5de7d5f700ffa4be31e15f3804742fd26022&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

