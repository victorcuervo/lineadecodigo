---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YVLEYAA%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T081845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIf3dkWsxWSLGYtQHNF%2BdngVw1qDgVkADfFedf2QDSMQIgCE0itaGtlV6k3cfvUG7XbWbuIsD%2BGSZ93cDaokH4QyQq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDELfRBbWbr3DG8SXuCrcA2iSSSt0DRK%2FReB9KvrVULSSScvLy%2BRP6TmvZj6sXTc3FiP2WDac17%2FlFq0jEa%2Fju4R71RPZWpH9HR30F7SLbDSW%2BaVAikwS5dSW1AhPdohM0JoeMqSlxrU5nCocBXvuBGac486ah%2BufC1HASMwiT5ApIB7LTZW63NSLdqkm4NbU7%2FFJ%2FhGXFEB0yIEsy43UTKGRRsGnTCbdlIIIOrmJ2mc%2FsA0gt8p%2FhK5zZgje6n%2B%2BqDZEOD1fRaWLJ8bILuoPyEG1jd5HRZJN8%2FtZLx9b9AWFzxD7Lz0RIYuVkMP5EMj3369Z%2F2oT8EcoFTzc3wPddELnkedioXgguWPXN2crbaA82mlESaItEKUnH2%2Fz92T8%2B2tTNRS93f3PIxy2rGujfjsKijlUrheuviLFEeVnpDPB2Km2gBs50uEO2%2BWo0ooEPLDZ3Gdh6TAi2Lqx4az3HcDOCJyQDsIioNBMr1cyu7o42N%2F1Ot2MMP%2FihQHUnTkRco4AuzpYwB3WOkhhW3Cz9YxM3bmhBd4mtOceuzYzwAZnMcgQmoIOmP6W%2FprhrffhLivZ%2Fau3HkHifTVXiJvkjupBuJqAtY6nqEZE498JgpPzW1jNK3zPmxfcdjvvNL%2B08TLS2x0zEFefQpFFMMqyyckGOqUBNd9jnI0MIMs3WHxKX3sT8eBFppw2032RvdvcDu4S5HAEttkgc2qdf3CWNBxiIJloBahRbofIGq2Yetv04hKZOm3ItJyiBGkFHnRxJy7cytjCgpDqtogRLRLBRuT0uCrAteZg7ZXVUa8%2BRLdpf6JSZ5XJVT3lOCmj4pjrfIkWNi92AUK2SPMfLTZv6xvGOMYfusyFywGXH7CGLm%2FLfQt9TrQmnsZf&X-Amz-Signature=54688b3cb6bb1ecfa9aa959e0451571fc0fa5a15c126f2729995aa626321d9ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YVLEYAA%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T081845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIf3dkWsxWSLGYtQHNF%2BdngVw1qDgVkADfFedf2QDSMQIgCE0itaGtlV6k3cfvUG7XbWbuIsD%2BGSZ93cDaokH4QyQq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDELfRBbWbr3DG8SXuCrcA2iSSSt0DRK%2FReB9KvrVULSSScvLy%2BRP6TmvZj6sXTc3FiP2WDac17%2FlFq0jEa%2Fju4R71RPZWpH9HR30F7SLbDSW%2BaVAikwS5dSW1AhPdohM0JoeMqSlxrU5nCocBXvuBGac486ah%2BufC1HASMwiT5ApIB7LTZW63NSLdqkm4NbU7%2FFJ%2FhGXFEB0yIEsy43UTKGRRsGnTCbdlIIIOrmJ2mc%2FsA0gt8p%2FhK5zZgje6n%2B%2BqDZEOD1fRaWLJ8bILuoPyEG1jd5HRZJN8%2FtZLx9b9AWFzxD7Lz0RIYuVkMP5EMj3369Z%2F2oT8EcoFTzc3wPddELnkedioXgguWPXN2crbaA82mlESaItEKUnH2%2Fz92T8%2B2tTNRS93f3PIxy2rGujfjsKijlUrheuviLFEeVnpDPB2Km2gBs50uEO2%2BWo0ooEPLDZ3Gdh6TAi2Lqx4az3HcDOCJyQDsIioNBMr1cyu7o42N%2F1Ot2MMP%2FihQHUnTkRco4AuzpYwB3WOkhhW3Cz9YxM3bmhBd4mtOceuzYzwAZnMcgQmoIOmP6W%2FprhrffhLivZ%2Fau3HkHifTVXiJvkjupBuJqAtY6nqEZE498JgpPzW1jNK3zPmxfcdjvvNL%2B08TLS2x0zEFefQpFFMMqyyckGOqUBNd9jnI0MIMs3WHxKX3sT8eBFppw2032RvdvcDu4S5HAEttkgc2qdf3CWNBxiIJloBahRbofIGq2Yetv04hKZOm3ItJyiBGkFHnRxJy7cytjCgpDqtogRLRLBRuT0uCrAteZg7ZXVUa8%2BRLdpf6JSZ5XJVT3lOCmj4pjrfIkWNi92AUK2SPMfLTZv6xvGOMYfusyFywGXH7CGLm%2FLfQt9TrQmnsZf&X-Amz-Signature=4165b7fd9351a67d8eccb5a371f453e5d6f6546eb2347374b455cfef5bd2b7b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

