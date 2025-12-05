---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5S2QKWN%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T225731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFkJAbUU%2FLOGiRSFaYMGI0wFe8YpA6cITrMQlLuwOSsXAiEAzixhbBBPFEAylAe%2FGHWcP02U6GRgJ3Hz3lZu3hfb77gq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDMD0ZX2Bdx7EjMGF9CrcA4O%2FFQ4PulbVevh15pglIjpFGx4pBp7YhqxvtY6%2FMSyfyj30VPQjAaZdp9T8LgzWl0WHQcZ7f4jAYF8dEB%2Bqic8GE%2FqpMblIe%2BNJf5Ox0XJ92QEDccCrQbDHKhBut3EZGNHcX0r867MW%2B%2Fdt76A%2BwXQfj27vfDQLIWHJdpSy%2Bp%2BvRTm091Ao4KgNUcnSzksuneCKHMvxNLZqDdKsTiE2f7y3nFB3PupsHUcELVLcM4pxdcYMIR%2FlRDzrsyorFI9EIDQoGoiA%2Ba5KVapYAqrp%2BTkwdBYj%2BUjW9OENZfrNY99LgWQlm5QlNgH0UIfag%2FtlDTpA0lWkWSE97j9JRu%2FqruSNcmC0SwTDuBRDguK0V3mBAWsNwrq1LqNhxfvKGchb4tLwJ3U2Vn8GJfoeYwU8KuAWQ7X9jWb%2F9DH4V1zHNKhWKOzx6uiYJZ4biJx89feUpJy4uF93hzJgTXtlUFWCjMVHfsCsRUYBkiDcuYK%2FBHzVc3C2dNPBeY2G36ndN4X%2BOoPuw3d9jYeQNnfdofjJG64AE7uF3AOFcDT77TOCc2uM5O9qkFrdvzjHaXqrLr5xST4PXYQVi78ex4PGv07%2F8YP%2F1bUMOdjUPOdv2CqXUvh%2Fbyv7mJDIs2R8%2FmMsMMuazckGOqUB4XInduWs4MCa5g7Q4ydUxQttBOK3Vl6y99yoZOjNPyCMqjRPCdk49VHBFxyfqDdaW%2FM4brSpfkyHK%2BVNsOY6ub%2FzjmwOHLaPDUcWvei9jsVA7gN3o0frxzSedS3%2F1TEAf%2F9IAnOll5o81%2Bvx9VfrqhCBtO8vV1q5HksU%2Bg2bQfaZWU6TNXfiwvXG6WkqWPLr0PsyQ%2Fc8KGzor8osCN5IIe2r%2B0rJ&X-Amz-Signature=21403c59e27a5c1ffc321a3d3d16ed68594ced23929a73f9a38ab225cbb62b2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5S2QKWN%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T225731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFkJAbUU%2FLOGiRSFaYMGI0wFe8YpA6cITrMQlLuwOSsXAiEAzixhbBBPFEAylAe%2FGHWcP02U6GRgJ3Hz3lZu3hfb77gq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDMD0ZX2Bdx7EjMGF9CrcA4O%2FFQ4PulbVevh15pglIjpFGx4pBp7YhqxvtY6%2FMSyfyj30VPQjAaZdp9T8LgzWl0WHQcZ7f4jAYF8dEB%2Bqic8GE%2FqpMblIe%2BNJf5Ox0XJ92QEDccCrQbDHKhBut3EZGNHcX0r867MW%2B%2Fdt76A%2BwXQfj27vfDQLIWHJdpSy%2Bp%2BvRTm091Ao4KgNUcnSzksuneCKHMvxNLZqDdKsTiE2f7y3nFB3PupsHUcELVLcM4pxdcYMIR%2FlRDzrsyorFI9EIDQoGoiA%2Ba5KVapYAqrp%2BTkwdBYj%2BUjW9OENZfrNY99LgWQlm5QlNgH0UIfag%2FtlDTpA0lWkWSE97j9JRu%2FqruSNcmC0SwTDuBRDguK0V3mBAWsNwrq1LqNhxfvKGchb4tLwJ3U2Vn8GJfoeYwU8KuAWQ7X9jWb%2F9DH4V1zHNKhWKOzx6uiYJZ4biJx89feUpJy4uF93hzJgTXtlUFWCjMVHfsCsRUYBkiDcuYK%2FBHzVc3C2dNPBeY2G36ndN4X%2BOoPuw3d9jYeQNnfdofjJG64AE7uF3AOFcDT77TOCc2uM5O9qkFrdvzjHaXqrLr5xST4PXYQVi78ex4PGv07%2F8YP%2F1bUMOdjUPOdv2CqXUvh%2Fbyv7mJDIs2R8%2FmMsMMuazckGOqUB4XInduWs4MCa5g7Q4ydUxQttBOK3Vl6y99yoZOjNPyCMqjRPCdk49VHBFxyfqDdaW%2FM4brSpfkyHK%2BVNsOY6ub%2FzjmwOHLaPDUcWvei9jsVA7gN3o0frxzSedS3%2F1TEAf%2F9IAnOll5o81%2Bvx9VfrqhCBtO8vV1q5HksU%2Bg2bQfaZWU6TNXfiwvXG6WkqWPLr0PsyQ%2Fc8KGzor8osCN5IIe2r%2B0rJ&X-Amz-Signature=5e5c5ad363b61184d0d33775531560dd7b64a5f88ebb09c7727107fc2b2e23bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

