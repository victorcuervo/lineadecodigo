---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYHCARWF%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T134847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbz2mQd6AADOsvTVy4GeqFpHS5jw6dI%2BRERgS%2FbR43uQIhAK0IjeUJ2fKZNlrZv8HdJ%2BhLmeiYk7xeorwH57Bb5AUkKv8DCHUQABoMNjM3NDIzMTgzODA1IgwZy57AhVTvg3TB%2BwAq3AM5CoUctOK0%2FeO3w3kuiCeGKZA9F2syt%2FjvGcLK5oFRyl1D3ar%2Bgi4myxSYMjUxOUzyyotHO2zj6Vez6m2ZUZKwQXKeAB3APVpnyH%2BsdQDhO%2BpA0CFKs3UPfXGK1imV1pPcN5v1WbzOQwm1s4YVioyKcHhXI%2FIYQU1%2FqsukdNyu7BePFIEBGNANZmr75XTuIE3CTgdIXNxB775hshPiuy04WH6GTgWgOrbihaJPpDRSvEZHuN4G5lAwBq6RXZOuvmiJs0lqw3yuBfCVkkvWbF64tCWcj4w%2B%2FEllWzECgoftKENoSZFYG8Za99um5woQmljD2AUlUEGKW8uM7Klj3cSJLOUxnmdaEkfRKLU1Qec0HQh7BfbkqovfC%2BtR4tiQKZCekhJg0k%2Fq59vVu6%2FKGa%2FTI1Zufu3mn%2FMzf0PhEh2XCU9QSYfA4yglnmZR6YfDhdsC9q6bjsHfUY1wfFXfzhglEygZ%2Bmn9qyOVGCKsLkA2tAwON2Gg%2FRhu8KI%2BhChzfgv4v07Gx23GTZ%2FmMQ%2BzAhP%2BWTU36%2BnaWVZ2Mq2I92obdviccfj3oDjHSqc4llyLHXvge1IGQyCWKbdIAORWdkvllXCbzqXEvDlh%2BAVqRYWBQXrUXF4HL9e04%2Bw9eDChptDJBjqkAZSy9MReDB%2Fp8fbPH59CtxTAhDAfMgvkTUKhBIMBa7%2B96fN%2FbJ3rWy%2B74r8xpWhXW9yKl1rvojol8zDY8ZZkxAUAhzOryExVxTLbVfGjbnOLBPitYOeicqgz%2FT26oKw5gTeVPRA3bAai6IGs8O6mumOyM3bKjKdSqBfrn5aS6Y7BJlV4IYZYUVye%2Fab2sTlqtxES5gfDeh9J3SVzGVVGqwmQb2LT&X-Amz-Signature=48b3a793adde58911290d2f5bab6ee79c6ec230ca56ca960cfd26b22850c7e17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYHCARWF%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T134847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbz2mQd6AADOsvTVy4GeqFpHS5jw6dI%2BRERgS%2FbR43uQIhAK0IjeUJ2fKZNlrZv8HdJ%2BhLmeiYk7xeorwH57Bb5AUkKv8DCHUQABoMNjM3NDIzMTgzODA1IgwZy57AhVTvg3TB%2BwAq3AM5CoUctOK0%2FeO3w3kuiCeGKZA9F2syt%2FjvGcLK5oFRyl1D3ar%2Bgi4myxSYMjUxOUzyyotHO2zj6Vez6m2ZUZKwQXKeAB3APVpnyH%2BsdQDhO%2BpA0CFKs3UPfXGK1imV1pPcN5v1WbzOQwm1s4YVioyKcHhXI%2FIYQU1%2FqsukdNyu7BePFIEBGNANZmr75XTuIE3CTgdIXNxB775hshPiuy04WH6GTgWgOrbihaJPpDRSvEZHuN4G5lAwBq6RXZOuvmiJs0lqw3yuBfCVkkvWbF64tCWcj4w%2B%2FEllWzECgoftKENoSZFYG8Za99um5woQmljD2AUlUEGKW8uM7Klj3cSJLOUxnmdaEkfRKLU1Qec0HQh7BfbkqovfC%2BtR4tiQKZCekhJg0k%2Fq59vVu6%2FKGa%2FTI1Zufu3mn%2FMzf0PhEh2XCU9QSYfA4yglnmZR6YfDhdsC9q6bjsHfUY1wfFXfzhglEygZ%2Bmn9qyOVGCKsLkA2tAwON2Gg%2FRhu8KI%2BhChzfgv4v07Gx23GTZ%2FmMQ%2BzAhP%2BWTU36%2BnaWVZ2Mq2I92obdviccfj3oDjHSqc4llyLHXvge1IGQyCWKbdIAORWdkvllXCbzqXEvDlh%2BAVqRYWBQXrUXF4HL9e04%2Bw9eDChptDJBjqkAZSy9MReDB%2Fp8fbPH59CtxTAhDAfMgvkTUKhBIMBa7%2B96fN%2FbJ3rWy%2B74r8xpWhXW9yKl1rvojol8zDY8ZZkxAUAhzOryExVxTLbVfGjbnOLBPitYOeicqgz%2FT26oKw5gTeVPRA3bAai6IGs8O6mumOyM3bKjKdSqBfrn5aS6Y7BJlV4IYZYUVye%2Fab2sTlqtxES5gfDeh9J3SVzGVVGqwmQb2LT&X-Amz-Signature=fd5a050f8b8d3577c8f83da15da81863b3aecd6508d7411aaa3c4860293de9f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

