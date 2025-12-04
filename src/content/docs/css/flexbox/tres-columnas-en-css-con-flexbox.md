---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4O5ONQM%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T101332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIDNDrO4vf8w%2BTYo9D8f361JyxSVpMgQK14OTcoVqJLP%2BAiEA8epXTvM75U6tio3lJ1v44O6aAcp1clncHlN%2BaayzIe0q%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDG9k4pS5EHz1DtdXCSrcA5T%2BnEAJMTdIRVUFZpr7P0n0UyQX3XYv9TfXaG8yRry8vceefQ2VBhDru6Hc3abNZaZB7m8Jsgyv2kX%2FVsgIzobHyvOl1xh3xACObD1dfDFykhU%2FAf%2BkyK%2FyJ9EbwM56z9lu4yOwChLzfStZidKMDlZ7KUU%2BauzlgKP%2BVmCV7wSwqW4QUSzPEHnPhzNeeqHnx%2FXMsZfpjdE%2BKsJWLb8oAPA7Z33y2qpIgYSgcaawDo4Q357Tj7tKWnDs27dRzgizJ2qvc4Z8EWAyP3Rx%2BNQ33iCSIZgzl0TfflM2Idk3uNh2RIWflb%2B%2BP%2BvIiINF6jG2E59h9uHUWFPU7L0FzdFnVqt6QAn846y7uWpVaBq5a6blkD8Eef8OmKE3H5Fk47wm5hvJWlcFzxsF3Jy6OjzeEmtO%2B0TEYvA18ihIa7Ypng0VC1ITODT5sK1giYaAiyRDy33PsZPlz2VZXs8wcRkOZq8WU9umCTAH%2Fo003BCPbLvz1nJYkb3y2sXkk5w%2Bc6pWHMSaUcs6Trkx2S3F%2FcdKUyxHBE1mLN5UEAKvVtByKOOXMPrF0tY68rh%2Foo3YygWPn08KuU8PVHm%2BMsYxwCBetSslW%2Fr%2F1mtl1HkOoqh8sbFhlS1dKUZr%2B1nCiAe3MJmrxckGOqUBaoNP%2Bq%2BfQBx2IzlwsVsL4%2Fw4jUp95MBeH1nmgPXnq98nx5OhJB%2B%2BjiG9WQ%2Bxx3XqhVNX8GDm0OdPCLmT0Hm848%2FmAU5vTcyS6lgUmXv4hWYvDipnRl1O%2FzkH5cWSA5T4q7BAdylJwUSv8AicGtNeXOUShto2y%2FqckjLB9EO9v%2FHA%2BeuGwtqIEbzGn6%2BEbf1YZgaMjueSoMncJJIbX7CNkjXRxg2O&X-Amz-Signature=c41ce632dbe081eb5fe5f86135cc41e7cf53e2f1b81dad1dc8b92a3ff767e08b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4O5ONQM%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T101332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIDNDrO4vf8w%2BTYo9D8f361JyxSVpMgQK14OTcoVqJLP%2BAiEA8epXTvM75U6tio3lJ1v44O6aAcp1clncHlN%2BaayzIe0q%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDG9k4pS5EHz1DtdXCSrcA5T%2BnEAJMTdIRVUFZpr7P0n0UyQX3XYv9TfXaG8yRry8vceefQ2VBhDru6Hc3abNZaZB7m8Jsgyv2kX%2FVsgIzobHyvOl1xh3xACObD1dfDFykhU%2FAf%2BkyK%2FyJ9EbwM56z9lu4yOwChLzfStZidKMDlZ7KUU%2BauzlgKP%2BVmCV7wSwqW4QUSzPEHnPhzNeeqHnx%2FXMsZfpjdE%2BKsJWLb8oAPA7Z33y2qpIgYSgcaawDo4Q357Tj7tKWnDs27dRzgizJ2qvc4Z8EWAyP3Rx%2BNQ33iCSIZgzl0TfflM2Idk3uNh2RIWflb%2B%2BP%2BvIiINF6jG2E59h9uHUWFPU7L0FzdFnVqt6QAn846y7uWpVaBq5a6blkD8Eef8OmKE3H5Fk47wm5hvJWlcFzxsF3Jy6OjzeEmtO%2B0TEYvA18ihIa7Ypng0VC1ITODT5sK1giYaAiyRDy33PsZPlz2VZXs8wcRkOZq8WU9umCTAH%2Fo003BCPbLvz1nJYkb3y2sXkk5w%2Bc6pWHMSaUcs6Trkx2S3F%2FcdKUyxHBE1mLN5UEAKvVtByKOOXMPrF0tY68rh%2Foo3YygWPn08KuU8PVHm%2BMsYxwCBetSslW%2Fr%2F1mtl1HkOoqh8sbFhlS1dKUZr%2B1nCiAe3MJmrxckGOqUBaoNP%2Bq%2BfQBx2IzlwsVsL4%2Fw4jUp95MBeH1nmgPXnq98nx5OhJB%2B%2BjiG9WQ%2Bxx3XqhVNX8GDm0OdPCLmT0Hm848%2FmAU5vTcyS6lgUmXv4hWYvDipnRl1O%2FzkH5cWSA5T4q7BAdylJwUSv8AicGtNeXOUShto2y%2FqckjLB9EO9v%2FHA%2BeuGwtqIEbzGn6%2BEbf1YZgaMjueSoMncJJIbX7CNkjXRxg2O&X-Amz-Signature=d959dd9066d9b85d37d36561a357abc42163b73ddc7eca4400e42313dc998433&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

