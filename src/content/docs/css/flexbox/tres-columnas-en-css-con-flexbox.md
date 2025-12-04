---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHPYDLKD%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T120941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQDm5FhyMNN1ZBOqk42HnqUlsqhEyjJkVDd5US3AQ5wLmAIhALj4G2SSNFhA%2FwPXq%2BgCUGjGXEWNMvU8m3B8FFVM6k0HKv8DCEUQABoMNjM3NDIzMTgzODA1IgwYs57fL%2BGYCBY%2BCRIq3APcTAF8qeD6gvJFGCR3L632pi6sOb6iAqUSMlPav%2FDXBFIt38FnaZDnQ1YP8O7%2Fq%2BQOJPanAnr9fIqTNlxc875hbjo3Ge9%2BJJ7UhGGmAWb6NZrzgpR9XgRZ%2BBEbKGNa2wpXJa4DWpfeQJgWVVomc4lZAGA9MmiXNayLsdV%2BiJT0FekoEA%2FJiil9jEI2iVdmZLGKLXeW64sW%2FKst2%2FE3d9FbGzQ0Me11Ql1ywdwW%2BFIYeg3ujpKKpU7iwgkUhfZXreRzNKEgsN%2BKzhL9QIXgMvqMNcGIPFMPiqZ%2BwBMsqlssonvOH1qO683kLM%2Bvevs%2FqFBNjnDQlJSQMRAEIZvQNsJ0Zx%2BzUBAH7b33hdfpD675Qmiap%2FkiDEOBuy948okSazsp3658pBLFoNVibEKUpJjvEfROG98bMKCRT%2Fh%2BTlcUB4hZmkkhwxderRcTPCx1vDLK7bRcS7%2FYDNeGO%2BMYt53Dshhk6W2CNHRLnRhPgoCW6uOt9NIUp9dfau6EcvTR66VPej1KeAd97fvzkeGt52Z6gvd00oayEKFSclfuNgLXC56OctYeF7JUlWS590ijw24JfhUIdvn1eUdWzB2o6t9ydTjEVoTpufZ0QYiv3Neg5dPgGuYY7%2BpNclqhBzCB58XJBjqkAdcGMkaxzCCARE9hkskj51OEcg0sZ7a6FhqS3h7cftKV1NvNpT49APheCM%2FzceWJuHzETyW5QnJW9CHbQ3u%2Fdq8ju%2BsAc89KYOQGfzfIy7Nx8NVOLIsIWb8a6ZFryoJgQCNySrOVeNhjgnhg1rfLd3cXbGvMtF8R9RqXYmjVLTzLteHG0Y3zLyIiZTvOaY8a6F77X1FYuwp5wC3i8nu7l%2FoGUt5f&X-Amz-Signature=eb17ee0db6ab87e2d78d7b10d2123bfb155127d374565232a7336f832566320f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHPYDLKD%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T120941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQDm5FhyMNN1ZBOqk42HnqUlsqhEyjJkVDd5US3AQ5wLmAIhALj4G2SSNFhA%2FwPXq%2BgCUGjGXEWNMvU8m3B8FFVM6k0HKv8DCEUQABoMNjM3NDIzMTgzODA1IgwYs57fL%2BGYCBY%2BCRIq3APcTAF8qeD6gvJFGCR3L632pi6sOb6iAqUSMlPav%2FDXBFIt38FnaZDnQ1YP8O7%2Fq%2BQOJPanAnr9fIqTNlxc875hbjo3Ge9%2BJJ7UhGGmAWb6NZrzgpR9XgRZ%2BBEbKGNa2wpXJa4DWpfeQJgWVVomc4lZAGA9MmiXNayLsdV%2BiJT0FekoEA%2FJiil9jEI2iVdmZLGKLXeW64sW%2FKst2%2FE3d9FbGzQ0Me11Ql1ywdwW%2BFIYeg3ujpKKpU7iwgkUhfZXreRzNKEgsN%2BKzhL9QIXgMvqMNcGIPFMPiqZ%2BwBMsqlssonvOH1qO683kLM%2Bvevs%2FqFBNjnDQlJSQMRAEIZvQNsJ0Zx%2BzUBAH7b33hdfpD675Qmiap%2FkiDEOBuy948okSazsp3658pBLFoNVibEKUpJjvEfROG98bMKCRT%2Fh%2BTlcUB4hZmkkhwxderRcTPCx1vDLK7bRcS7%2FYDNeGO%2BMYt53Dshhk6W2CNHRLnRhPgoCW6uOt9NIUp9dfau6EcvTR66VPej1KeAd97fvzkeGt52Z6gvd00oayEKFSclfuNgLXC56OctYeF7JUlWS590ijw24JfhUIdvn1eUdWzB2o6t9ydTjEVoTpufZ0QYiv3Neg5dPgGuYY7%2BpNclqhBzCB58XJBjqkAdcGMkaxzCCARE9hkskj51OEcg0sZ7a6FhqS3h7cftKV1NvNpT49APheCM%2FzceWJuHzETyW5QnJW9CHbQ3u%2Fdq8ju%2BsAc89KYOQGfzfIy7Nx8NVOLIsIWb8a6ZFryoJgQCNySrOVeNhjgnhg1rfLd3cXbGvMtF8R9RqXYmjVLTzLteHG0Y3zLyIiZTvOaY8a6F77X1FYuwp5wC3i8nu7l%2FoGUt5f&X-Amz-Signature=d1fe60c623d17417afac391f99bf68d0b88fe45e8bf0eb2948d3f2f98fc256a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

