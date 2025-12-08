---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6QJMD5N%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T023406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFDVBQJZcC36cifTFZe8s4OB2DV3p9q5nt1sMA3NjqG2AiEAzRqMgdr%2FLZsU4FwhQ6yCthW6QMy08yp2%2BY%2BvGPMjOiEqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDiMnQ0xYLMOLys0nCrcA2gxCrHkBablAjnDwGU18lrvOcKowHyASnGX0VGVFJ4dNLLonUMmrsKC2ExhNhBseM2oOId6zcuKypSoI%2Fa2c2nEPLedTpYAaApGyE9wJM%2FAwR5cI7O58ITawJg%2BlmWJ%2Fiv6Kjz8oIWNBqAOa2sBhRXhUGcn9BqGJ1AkLx3Q17KYCZkKveGCBv477qUBliFICEG0efUwo9xD2dCxYcW3Z%2BUXPvva9TQRGAgBuosYMwov2gZx%2FXdPzTxFmjwjS%2FmBI8I0kHXcEdJ7ibClpqBqMMBXeZvKsqKFCWztVF6FJ1gPka5jQEqJ%2FuXXHnS4Clk0aH5VjlLxWvK94SfesCC1tBI8Mx4FSuu%2FssA8pajDxOlwMFa%2BcOBYJa%2FisFWA9FPyhznjuTo5xN9DLlEFGu4jEz5T%2FYHsnu4qGkSQ0WRTcYtMM3ejkCavqxGDu%2Bn0nJjsirybmpF04oiY0JfVx%2F4%2FWtByTO8RhL7CUspKhtsODEpqs8NEL34Brv1%2BwWBUnta4a%2Fl8QPbrdTWZKqfVet9sK9ysHJ55Sz1LyV9dARTxV%2FU1%2BR9nlbvb6xR4Yx6d3h1JTsp3iIEXWN9IrnOm6Pb3auuo4OzNC96aXBufcUAXRk9fBzbWxOV6k3bnwuXYMNrv2MkGOqUBvqhzehinjJq53%2BVYaPEtl4WwBM1byfHKS9S2M40e5305adPKBfk9oQs%2F0%2FaxCGzGSLJ0Uo5ylsVTTnCugJav1VNLygjpk%2BMQsfGUmAz0HkIV0TK28dIMlyBYOpMupi7w7qzJoYyLUgr84nXryhDgmKcnyPCzidXRKgGZdN8cpjC3mCypSN5h4MYITHW9rBrdXrL8sVgXkqmfOnMgS7DqHDmgN3qF&X-Amz-Signature=4fb9f1a8bbcd8cc60eb58f4a6e14c26ff374c48a8998101267708a1dc58aad3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6QJMD5N%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T023406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFDVBQJZcC36cifTFZe8s4OB2DV3p9q5nt1sMA3NjqG2AiEAzRqMgdr%2FLZsU4FwhQ6yCthW6QMy08yp2%2BY%2BvGPMjOiEqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDiMnQ0xYLMOLys0nCrcA2gxCrHkBablAjnDwGU18lrvOcKowHyASnGX0VGVFJ4dNLLonUMmrsKC2ExhNhBseM2oOId6zcuKypSoI%2Fa2c2nEPLedTpYAaApGyE9wJM%2FAwR5cI7O58ITawJg%2BlmWJ%2Fiv6Kjz8oIWNBqAOa2sBhRXhUGcn9BqGJ1AkLx3Q17KYCZkKveGCBv477qUBliFICEG0efUwo9xD2dCxYcW3Z%2BUXPvva9TQRGAgBuosYMwov2gZx%2FXdPzTxFmjwjS%2FmBI8I0kHXcEdJ7ibClpqBqMMBXeZvKsqKFCWztVF6FJ1gPka5jQEqJ%2FuXXHnS4Clk0aH5VjlLxWvK94SfesCC1tBI8Mx4FSuu%2FssA8pajDxOlwMFa%2BcOBYJa%2FisFWA9FPyhznjuTo5xN9DLlEFGu4jEz5T%2FYHsnu4qGkSQ0WRTcYtMM3ejkCavqxGDu%2Bn0nJjsirybmpF04oiY0JfVx%2F4%2FWtByTO8RhL7CUspKhtsODEpqs8NEL34Brv1%2BwWBUnta4a%2Fl8QPbrdTWZKqfVet9sK9ysHJ55Sz1LyV9dARTxV%2FU1%2BR9nlbvb6xR4Yx6d3h1JTsp3iIEXWN9IrnOm6Pb3auuo4OzNC96aXBufcUAXRk9fBzbWxOV6k3bnwuXYMNrv2MkGOqUBvqhzehinjJq53%2BVYaPEtl4WwBM1byfHKS9S2M40e5305adPKBfk9oQs%2F0%2FaxCGzGSLJ0Uo5ylsVTTnCugJav1VNLygjpk%2BMQsfGUmAz0HkIV0TK28dIMlyBYOpMupi7w7qzJoYyLUgr84nXryhDgmKcnyPCzidXRKgGZdN8cpjC3mCypSN5h4MYITHW9rBrdXrL8sVgXkqmfOnMgS7DqHDmgN3qF&X-Amz-Signature=9b2f52af83f022542eb4691998cedbf636bedb660f63c0b0722c6df4a106b79e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

