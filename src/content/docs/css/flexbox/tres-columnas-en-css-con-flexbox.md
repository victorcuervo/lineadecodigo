---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFDOLCHB%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T194443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWfgRS2s0NDo1DdKbDaSMRavDm7H%2FprZsmxJddoTnU3gIhAP%2B2ilp7OHCpXSc6gDrFi912EE3gnrohxQlXf9DT7U83Kv8DCGAQABoMNjM3NDIzMTgzODA1IgzQiqLCzjojVg8%2B4vIq3ANkciwyYO0%2B4xvIEXt%2BY7bCtNQBBytk6%2Fbp2PXz78f2Y%2B%2F8BM4wRiz9BPpAYIb89ecEM5n0Z%2BOBP8I3hhBirUbvddEh32mXMpFuWXSMoafreckPc2SPi5FuKXzR2NBcwerHRVE%2FhBzKp4sH84XEhE8qx36g%2BMae8U0hJAMj9tVIpLEN5IOrYfMTL5ammSglOU5Krli0lwDf%2FiTTMvDUeOIxv56BV%2BxGYoTClLR%2Bw3fCLIay1p1NVPNJwIoTxtdg8xCkCTTCFwXQDDVPk7ZjcCGzcndz%2B74xEbXEQRrqr%2B4%2FBeE9MIwgsLAdIDazsM1y%2BtgJi3wW1ez9VqVKBPh32aRqnDebiJjs%2BKayEwwnWfFrxkCnswdMF%2Fhi6KR6cDgvbOF8Sx%2FOlriKflZRl5lsRx7Q50gDDiSn5WLwq%2FAs6SR6eB131mXe7xBBINOQIo2OTms08Rry2zzBZ4jsxHjO7RkYaCZ0nxX54nd97Xdt%2BHJSG8hAidfb6GFwsULaLUmRAki0KbwQofTEmHyTWV0Y4botpCLYffm0G0NEg3Sss4qIn%2BXTWGJS2z7vNgqNq2DC6FOhlMbPFno2vTiLkU4vQANJK7Q52Pdtwf8c0nLcO8MczODrPGVdm3a98hwsFTD%2B6cvJBjqkASHqZ0C5RrY9CSX4azumM5JzFbzoRQyV9R1yw4r0M1MoTqB%2Bzt9g%2BnfYDN7gaUwnkCkz5QzkzSEb0u8bjlCPepqR2jOemsxTv3PkwfLhMZwJP22e2D%2B31ANRSNsnAVpQiMikFQaTy4zY%2FrwhU5bLy0pVhrhytdxbrVrHa3SKVa1sBjEMcey3t7WZv1ZNOr6JL60VYkSv7v%2BFxRLoeKTc60m4shyS&X-Amz-Signature=cf2e728a58bad2977c7f04ca9457f56e97ea35d26f96b629debce7f394b21876&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFDOLCHB%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T194443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWfgRS2s0NDo1DdKbDaSMRavDm7H%2FprZsmxJddoTnU3gIhAP%2B2ilp7OHCpXSc6gDrFi912EE3gnrohxQlXf9DT7U83Kv8DCGAQABoMNjM3NDIzMTgzODA1IgzQiqLCzjojVg8%2B4vIq3ANkciwyYO0%2B4xvIEXt%2BY7bCtNQBBytk6%2Fbp2PXz78f2Y%2B%2F8BM4wRiz9BPpAYIb89ecEM5n0Z%2BOBP8I3hhBirUbvddEh32mXMpFuWXSMoafreckPc2SPi5FuKXzR2NBcwerHRVE%2FhBzKp4sH84XEhE8qx36g%2BMae8U0hJAMj9tVIpLEN5IOrYfMTL5ammSglOU5Krli0lwDf%2FiTTMvDUeOIxv56BV%2BxGYoTClLR%2Bw3fCLIay1p1NVPNJwIoTxtdg8xCkCTTCFwXQDDVPk7ZjcCGzcndz%2B74xEbXEQRrqr%2B4%2FBeE9MIwgsLAdIDazsM1y%2BtgJi3wW1ez9VqVKBPh32aRqnDebiJjs%2BKayEwwnWfFrxkCnswdMF%2Fhi6KR6cDgvbOF8Sx%2FOlriKflZRl5lsRx7Q50gDDiSn5WLwq%2FAs6SR6eB131mXe7xBBINOQIo2OTms08Rry2zzBZ4jsxHjO7RkYaCZ0nxX54nd97Xdt%2BHJSG8hAidfb6GFwsULaLUmRAki0KbwQofTEmHyTWV0Y4botpCLYffm0G0NEg3Sss4qIn%2BXTWGJS2z7vNgqNq2DC6FOhlMbPFno2vTiLkU4vQANJK7Q52Pdtwf8c0nLcO8MczODrPGVdm3a98hwsFTD%2B6cvJBjqkASHqZ0C5RrY9CSX4azumM5JzFbzoRQyV9R1yw4r0M1MoTqB%2Bzt9g%2BnfYDN7gaUwnkCkz5QzkzSEb0u8bjlCPepqR2jOemsxTv3PkwfLhMZwJP22e2D%2B31ANRSNsnAVpQiMikFQaTy4zY%2FrwhU5bLy0pVhrhytdxbrVrHa3SKVa1sBjEMcey3t7WZv1ZNOr6JL60VYkSv7v%2BFxRLoeKTc60m4shyS&X-Amz-Signature=071c510fb75482056602c5428db0e30f0d7f395dad6171f37d73298553786e5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

