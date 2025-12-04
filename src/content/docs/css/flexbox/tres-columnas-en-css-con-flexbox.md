---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WMNGAXR%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T060928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIDk1lRrtsQnV9wMRJimnQEsuqb8t4pfd69Il4I00T9gHAiBgNgCvgYNIc8AyYZ38TVl7ry0TQIpwq1t0pzNaZgEU0yr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIM%2F7Z0t3%2FkEj3Ii0i9KtwDtny7eiCmzmzoXQzGk79m2kTR5hNbAR33skvcnYroL%2B6qMq%2FaQZh2ZBQczJcFs1uOaedxSBSEiOHuDbKADRg2z8%2F0LFn4eWDf15H%2FiL3QuaKcysx5%2FJCrYJHy95i%2B0%2B6WN275wG2bXgbvtrT1Occ5MiQkq%2B6f9v10Af39e6QG6OqmusLEDmjAshytoGEQXgeJOIBbovKx0FaFyaBZiJajirlcC%2BVfSbgeE6ccSpoIprH6Z6GJ8%2BjEmZYT%2BBmQlyeBBudbPJ0BORkzkeV9yKfTIDfxwJVAVOuilR3nxob1wK0HH%2BNFpXEbZZJ6BMKkjoA2WN8Ruky%2FWpicm%2BXlSOFNRKfaEDDcPJJEOIMhQQnQQkJWdSfnbm%2Bo67YvfEJHMaeEe1fazOIQ68Ry1iiEJe0te3GoR3JQjDiSOBOxn9vGU%2FDJopNw2X1Kmr%2BDeWUVfcCfY%2BLN6d3CDajtBNmbnFHW25sJ0qdkD0Rm%2F1cWbRQclW2rI63JhCRDjvRoD7toYIpyI5HO1qkDxV%2FZfES7qOihJmllh6YtohFJxpNuMRPuFPgf44G507gsYkYsVTfO4qt9bo1bMrVHaGNmG9pyIexwdX1UjAWuA73VQQW3KtPdcdCTTfBckzMmTQ92nkkwka7EyQY6pgF4RyTuy2ASCgNARBcC7KgO9kp95kvRqISD1obtiF3XGlNUJL%2FQ8whKLfF6S5W8pRPp%2BAVptPg52rjE9Zo56y4d25ALmsOCTXGXEe9JfDpqEKVqs4BFEBLLLFO0Gk4%2Be0BqD%2F7c5u0n%2BB4wz8mMeYDI9ECua4GmiD6JPVOA67zLsu3STFIsngdOzfNxEkL0AqUc5lC55Ox5tZmcTHhdbgZQ%2Bnd%2BV4Wb&X-Amz-Signature=e0863603a1a1d3d1e3aceab9aa0d94cee6a460a0bbb2857ca930b1c1341bcea1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WMNGAXR%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T060928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIDk1lRrtsQnV9wMRJimnQEsuqb8t4pfd69Il4I00T9gHAiBgNgCvgYNIc8AyYZ38TVl7ry0TQIpwq1t0pzNaZgEU0yr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIM%2F7Z0t3%2FkEj3Ii0i9KtwDtny7eiCmzmzoXQzGk79m2kTR5hNbAR33skvcnYroL%2B6qMq%2FaQZh2ZBQczJcFs1uOaedxSBSEiOHuDbKADRg2z8%2F0LFn4eWDf15H%2FiL3QuaKcysx5%2FJCrYJHy95i%2B0%2B6WN275wG2bXgbvtrT1Occ5MiQkq%2B6f9v10Af39e6QG6OqmusLEDmjAshytoGEQXgeJOIBbovKx0FaFyaBZiJajirlcC%2BVfSbgeE6ccSpoIprH6Z6GJ8%2BjEmZYT%2BBmQlyeBBudbPJ0BORkzkeV9yKfTIDfxwJVAVOuilR3nxob1wK0HH%2BNFpXEbZZJ6BMKkjoA2WN8Ruky%2FWpicm%2BXlSOFNRKfaEDDcPJJEOIMhQQnQQkJWdSfnbm%2Bo67YvfEJHMaeEe1fazOIQ68Ry1iiEJe0te3GoR3JQjDiSOBOxn9vGU%2FDJopNw2X1Kmr%2BDeWUVfcCfY%2BLN6d3CDajtBNmbnFHW25sJ0qdkD0Rm%2F1cWbRQclW2rI63JhCRDjvRoD7toYIpyI5HO1qkDxV%2FZfES7qOihJmllh6YtohFJxpNuMRPuFPgf44G507gsYkYsVTfO4qt9bo1bMrVHaGNmG9pyIexwdX1UjAWuA73VQQW3KtPdcdCTTfBckzMmTQ92nkkwka7EyQY6pgF4RyTuy2ASCgNARBcC7KgO9kp95kvRqISD1obtiF3XGlNUJL%2FQ8whKLfF6S5W8pRPp%2BAVptPg52rjE9Zo56y4d25ALmsOCTXGXEe9JfDpqEKVqs4BFEBLLLFO0Gk4%2Be0BqD%2F7c5u0n%2BB4wz8mMeYDI9ECua4GmiD6JPVOA67zLsu3STFIsngdOzfNxEkL0AqUc5lC55Ox5tZmcTHhdbgZQ%2Bnd%2BV4Wb&X-Amz-Signature=8dc63a96151deb45b8951a6622a219ac9c5643acc3cb9ef6c5121e7d0d5013a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

