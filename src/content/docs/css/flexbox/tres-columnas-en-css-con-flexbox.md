---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645PR4SVV%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChEaSNpOHEV56xdI8pQp1KI1yQe%2FGlCfYA81H06R74OgIhAPcwN996oiTqAtaaZKV2Q1WtOou4tjPy1woInG5ljleWKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxlKtK7PVQCgJpb%2BZMq3AOVY2x3hvC7GPpOvHeyoWyaJfob7rJHWTUiAvhSbjH964K8XcbycoyG97brGzM%2BPPMazROLBYc4rvTaeJx%2BLncnekFQImIFs%2FTNEYGL4NNxy3fttrASHU0G9JmfzSHlvFvHbRkBeP0W%2F5rvCKirB4TBaXu6vSDF%2Fh4Fs3QALwrefu%2FIzPBKWCCKFiSGerOUNQ0Jo1UcQOWE7IF%2FpXQ1b%2FYH2r6BmCTMpIHFLfvkg08iadRYm8tthGSjJpgN5gSBJA6uZxfssX%2FcSvJpeRBIhhEYnOkr7V34UDS1Xig9c5HGoSvApr6SQsOSShnyp%2FmWRMZfce%2FOU0AlRnc%2B5ir9CTEP8YAEuxYUuki1HKkkMbb5Mk6iM9ShfpU2g4YC3RQ4CwDMOEnYCxUe%2B8V4ugNLm1BIaDNNi3UMAbcMezy0r%2F7KCOkMtc9rsRS%2FDuWAOOHbHhWv%2BZNmLBemh5TPIIYSY4CxfCPy1k4G0wfyHpSF9%2BWN4LqZtAUnf7vqmvWfgpmWoxGxrEGtUGtcqmqx8DU4m2liK5dTveCVbZb13zFFZF8T84EcPkDJzaW94iCIooc2DCu0IjANvLu6gCRjV0ufcK4RzlUHYNy6YiHOsX%2Fzr32nZ4BAEC1wiJzx6yF%2FajD90NjJBjqkAWtqyHdDPI7yl%2BtveGDTElU2gcQD4i0B6J1ZCs0lAyhEu%2FKJxbz0T%2F%2Ft%2B%2FKrsVA8c9QDynmXmtUV9wfZlkibnJp%2FuI%2BIX0oKlhPK8uY5iCec5q6M5bAt1bQKdYZDSQIi%2BmDbBa375kPLDZzF7yQwn%2Fy3xGjETxQmUMiQqRGS7UQYgmIUXAbYEBNPd8L325dU9T45UaPowC06BO1rfIlm%2FVkN6ULZ&X-Amz-Signature=a038a5a5b4f84a0abd0a0dfe9ec0360a1fa769ca31c92cc86b3bdac4dbf9d25e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645PR4SVV%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChEaSNpOHEV56xdI8pQp1KI1yQe%2FGlCfYA81H06R74OgIhAPcwN996oiTqAtaaZKV2Q1WtOou4tjPy1woInG5ljleWKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxlKtK7PVQCgJpb%2BZMq3AOVY2x3hvC7GPpOvHeyoWyaJfob7rJHWTUiAvhSbjH964K8XcbycoyG97brGzM%2BPPMazROLBYc4rvTaeJx%2BLncnekFQImIFs%2FTNEYGL4NNxy3fttrASHU0G9JmfzSHlvFvHbRkBeP0W%2F5rvCKirB4TBaXu6vSDF%2Fh4Fs3QALwrefu%2FIzPBKWCCKFiSGerOUNQ0Jo1UcQOWE7IF%2FpXQ1b%2FYH2r6BmCTMpIHFLfvkg08iadRYm8tthGSjJpgN5gSBJA6uZxfssX%2FcSvJpeRBIhhEYnOkr7V34UDS1Xig9c5HGoSvApr6SQsOSShnyp%2FmWRMZfce%2FOU0AlRnc%2B5ir9CTEP8YAEuxYUuki1HKkkMbb5Mk6iM9ShfpU2g4YC3RQ4CwDMOEnYCxUe%2B8V4ugNLm1BIaDNNi3UMAbcMezy0r%2F7KCOkMtc9rsRS%2FDuWAOOHbHhWv%2BZNmLBemh5TPIIYSY4CxfCPy1k4G0wfyHpSF9%2BWN4LqZtAUnf7vqmvWfgpmWoxGxrEGtUGtcqmqx8DU4m2liK5dTveCVbZb13zFFZF8T84EcPkDJzaW94iCIooc2DCu0IjANvLu6gCRjV0ufcK4RzlUHYNy6YiHOsX%2Fzr32nZ4BAEC1wiJzx6yF%2FajD90NjJBjqkAWtqyHdDPI7yl%2BtveGDTElU2gcQD4i0B6J1ZCs0lAyhEu%2FKJxbz0T%2F%2Ft%2B%2FKrsVA8c9QDynmXmtUV9wfZlkibnJp%2FuI%2BIX0oKlhPK8uY5iCec5q6M5bAt1bQKdYZDSQIi%2BmDbBa375kPLDZzF7yQwn%2Fy3xGjETxQmUMiQqRGS7UQYgmIUXAbYEBNPd8L325dU9T45UaPowC06BO1rfIlm%2FVkN6ULZ&X-Amz-Signature=5b28327803a58854cac982bf4db8f35141f5bee33b0b187840cedf983e868037&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

