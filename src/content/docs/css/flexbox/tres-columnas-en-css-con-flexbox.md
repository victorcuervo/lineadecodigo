---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XAMFMDB%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T174208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHD5iD%2FTZapoFV22%2FhapUL77d4WQxoBmxSYsfxLRKWkpAiEA6p44A84ePP73YmA3Bdey3OpRKvyLY7a0ML5Qqr6ZWecq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDGX8LmCmPwo5E5peVCrcA7YdjcTPhJPfX32ARN2h4uvxiusvB%2FS9mOPMBmEn2Euv6ADa2EqPaR3dkE8Kzd4PwK8umS0oFYaiDDEC89YpPaes7MzRpcIxs9%2BsQpIp8O9sYr7SOR2UUvG6nceipvwCbwwGPqW8a4Gk7i59iS9Jjq16PvgSmDDjgmakLy6Y49Z2LemUSlCiMZ6l8tf2EX7SuHwWCUAjBTuFXzkBrP2w788IvAwdSA%2FTEKr0FbJmakIxu10bE46Z8cU7%2F6Iphj1pQbISjHpb9hPEO%2FXvfj9mGmu9EUA%2BFFDl7TpoX9enX9zror4huRZWk0L4cZR9IwBqDeUXqFW2DfvVZQzi76fQsn%2FRg1qRA%2FLCDVRald6%2BAFzlyhhPUpTGiJXNXnYvJJ%2FhmtmVSsjh8uWasaw8jLjEluXkVU5qdAalT%2Bc6VXsd2N2X%2FVLA9F%2FGw6Nu0CCMC7%2FefjYqS6np9vMvBOQ61oDIyvgTpVz7inOdN%2FflepImpdABqVOBOlw0rB5s7usUJsijP8K%2BztsFAtq2CcH9MV%2F%2FK6TfPMFEzBS1kFfp7E9%2F2rjB1LtGqmYqOzni5dnCcSnAGnqiG%2BVmNpIyWlOH8Ggpsjo8gMr4MOJHjN59lQEtNFrvA4tpXpAEZRHJOlv%2BMI3ty8kGOqUBKIsBPYhUcBibPqrPK1ms%2BDfBuoAphUBcbEx4CInyRXPDTwNCnpcHCuBrNBdMJUCxnPeFBALcj2aurAOqyclmVWbiTNq5eQmks9dl8MegadUnuhL4GTiLsnkQwIeGuysmNEUhpXkaakpR9U3QQvEVe2Z%2FtSzoSqSia2px30lN%2FmKqBAlg3f%2BPLvbOyALNOhMPMBpX0POZBmcJ3M7t%2B%2Fo%2Fij3ykJeb&X-Amz-Signature=124c65beae9f55f23414b5cd4ec40cc1811ef34f4f829d28627d9a0d04d2de0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XAMFMDB%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T174208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHD5iD%2FTZapoFV22%2FhapUL77d4WQxoBmxSYsfxLRKWkpAiEA6p44A84ePP73YmA3Bdey3OpRKvyLY7a0ML5Qqr6ZWecq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDGX8LmCmPwo5E5peVCrcA7YdjcTPhJPfX32ARN2h4uvxiusvB%2FS9mOPMBmEn2Euv6ADa2EqPaR3dkE8Kzd4PwK8umS0oFYaiDDEC89YpPaes7MzRpcIxs9%2BsQpIp8O9sYr7SOR2UUvG6nceipvwCbwwGPqW8a4Gk7i59iS9Jjq16PvgSmDDjgmakLy6Y49Z2LemUSlCiMZ6l8tf2EX7SuHwWCUAjBTuFXzkBrP2w788IvAwdSA%2FTEKr0FbJmakIxu10bE46Z8cU7%2F6Iphj1pQbISjHpb9hPEO%2FXvfj9mGmu9EUA%2BFFDl7TpoX9enX9zror4huRZWk0L4cZR9IwBqDeUXqFW2DfvVZQzi76fQsn%2FRg1qRA%2FLCDVRald6%2BAFzlyhhPUpTGiJXNXnYvJJ%2FhmtmVSsjh8uWasaw8jLjEluXkVU5qdAalT%2Bc6VXsd2N2X%2FVLA9F%2FGw6Nu0CCMC7%2FefjYqS6np9vMvBOQ61oDIyvgTpVz7inOdN%2FflepImpdABqVOBOlw0rB5s7usUJsijP8K%2BztsFAtq2CcH9MV%2F%2FK6TfPMFEzBS1kFfp7E9%2F2rjB1LtGqmYqOzni5dnCcSnAGnqiG%2BVmNpIyWlOH8Ggpsjo8gMr4MOJHjN59lQEtNFrvA4tpXpAEZRHJOlv%2BMI3ty8kGOqUBKIsBPYhUcBibPqrPK1ms%2BDfBuoAphUBcbEx4CInyRXPDTwNCnpcHCuBrNBdMJUCxnPeFBALcj2aurAOqyclmVWbiTNq5eQmks9dl8MegadUnuhL4GTiLsnkQwIeGuysmNEUhpXkaakpR9U3QQvEVe2Z%2FtSzoSqSia2px30lN%2FmKqBAlg3f%2BPLvbOyALNOhMPMBpX0POZBmcJ3M7t%2B%2Fo%2Fij3ykJeb&X-Amz-Signature=373fb66ccb2c5a5f29564bd374a79c82015eb490748c924fa502ee7611af9b31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

