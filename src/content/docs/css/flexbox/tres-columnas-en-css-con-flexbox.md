---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Q2GFOQE%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T100440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICWQsCw308cr0BZKEW5yu8Hb%2BhvyTHL12RZH3sU1ENSsAiA9r9ZA32CcAsrKgi5INdNf1Y%2FiW455SXDE1zrVFtriair%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMYeofyjmwgQiwOPN9KtwDNqieTu0CXdjv8WYDuJmhQadg16ioB35JuALJ%2BW5%2B8SitoXsVK7y%2BleNCzU0YMest8no6FETuscqOaaI1tQHIHMv2WRs%2BIsAAFElERf%2FnEnDgcagdc66%2FjBjcWxDuu46ZLXGXECMlXlKo%2FOdyG42kjQeAVyDejRPObcNd54AqD%2BzzwlyprMT4bD7qomPTIwDzC7JiWk%2FJOKDH9JdF0Aem6hFScA47zQLQXmBfF8VPrP4QUaX0i%2BS%2Bn8gNYHu2DptNueg3rKqGCrE6eB6dXbbbcNdSlN%2BI1d7cVIh%2FZOkCtXSKngoL17uzvB%2BeLfAIxSFW9XNG131VWTBZAWRMb22wEQqrQtBcTjj0nKRcSML2wTXpfVNhhZuNcjiouIHa2b3Zq7efYUFqTXenX776oJQaFrD0e94DejviGXKjxYHXfywXMuyTpmr9j9pxzd9D5dzeGI6CM86cFLN7N%2BgTj%2F4%2F1EwUz4YurwXSEzXOCvk01b5TD0WD%2Bdlko5Z%2BTH3HiGs2ME4svmgXT1VRuFuvGlgTcyuR5THY%2BzWQBQIXZp53r93WfxHZLhjjwqPehfBGSTLxztkTKPhGG2NhXloCCybhMLOixjHwp%2FGBjBN4K8LPhHVDhoqVzStR8zwYwagw5uvPyQY6pgGUPFL8s0fwv%2BMyCrZtkhtLj4w6P2P0hI58hVuKaFWaPv3X%2BJTHodmuzR%2BwxQGMb9rwMyeJfWXWaLgJ8yb%2Bz3BvCVKjY2FButcwqapa7Kpwhbebv4dTNA1%2B6jpUpBBHv9T41TDWY0lJa%2FUSe4BKWSn8J2no%2FbjbhMgkFz4v%2FtZeQNRhIy8yDSKtZhRs4D5Lsku%2F1tUTj7QX%2B4ra3Kzb9U6OoWI7PadT&X-Amz-Signature=1715143363c11e383100b072f1ed695c61cbaacf5a7c2a04344c0dbc69dfc782&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Q2GFOQE%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T100440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICWQsCw308cr0BZKEW5yu8Hb%2BhvyTHL12RZH3sU1ENSsAiA9r9ZA32CcAsrKgi5INdNf1Y%2FiW455SXDE1zrVFtriair%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMYeofyjmwgQiwOPN9KtwDNqieTu0CXdjv8WYDuJmhQadg16ioB35JuALJ%2BW5%2B8SitoXsVK7y%2BleNCzU0YMest8no6FETuscqOaaI1tQHIHMv2WRs%2BIsAAFElERf%2FnEnDgcagdc66%2FjBjcWxDuu46ZLXGXECMlXlKo%2FOdyG42kjQeAVyDejRPObcNd54AqD%2BzzwlyprMT4bD7qomPTIwDzC7JiWk%2FJOKDH9JdF0Aem6hFScA47zQLQXmBfF8VPrP4QUaX0i%2BS%2Bn8gNYHu2DptNueg3rKqGCrE6eB6dXbbbcNdSlN%2BI1d7cVIh%2FZOkCtXSKngoL17uzvB%2BeLfAIxSFW9XNG131VWTBZAWRMb22wEQqrQtBcTjj0nKRcSML2wTXpfVNhhZuNcjiouIHa2b3Zq7efYUFqTXenX776oJQaFrD0e94DejviGXKjxYHXfywXMuyTpmr9j9pxzd9D5dzeGI6CM86cFLN7N%2BgTj%2F4%2F1EwUz4YurwXSEzXOCvk01b5TD0WD%2Bdlko5Z%2BTH3HiGs2ME4svmgXT1VRuFuvGlgTcyuR5THY%2BzWQBQIXZp53r93WfxHZLhjjwqPehfBGSTLxztkTKPhGG2NhXloCCybhMLOixjHwp%2FGBjBN4K8LPhHVDhoqVzStR8zwYwagw5uvPyQY6pgGUPFL8s0fwv%2BMyCrZtkhtLj4w6P2P0hI58hVuKaFWaPv3X%2BJTHodmuzR%2BwxQGMb9rwMyeJfWXWaLgJ8yb%2Bz3BvCVKjY2FButcwqapa7Kpwhbebv4dTNA1%2B6jpUpBBHv9T41TDWY0lJa%2FUSe4BKWSn8J2no%2FbjbhMgkFz4v%2FtZeQNRhIy8yDSKtZhRs4D5Lsku%2F1tUTj7QX%2B4ra3Kzb9U6OoWI7PadT&X-Amz-Signature=6dabacc8f178fab50d670f625b318b628a308b0fc4c898bec300c725d6e78f43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

