---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664V4TV3QD%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T135355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCNUywj%2FxQBzF%2BHFS%2B36eLfab81huQVQ6vTWobIP91%2B8gIhAP%2BA8IXn4r2hAXxSqFTkIAqT5BwehTJ4sz8GZI9cLsMJKv8DCEcQABoMNjM3NDIzMTgzODA1Igzodn5MgxEhnBN7nX4q3AN0pmZM80FvDVU3yLdPCYAcpYLLLSeH2bYeOX9GZypFPRkgFyC32i77mDAzY9UGt2SWLrw0e5TkyHiyeWnKUVbjDTwmMdso%2FLFt46eAnAN9TmzOhsNq3KbR3mAviP7NTrMV9jHyp0JHstMXVBvrBsvOlStcW9aoOhE%2BPC20CcZv4W1P4okpfNWINHo6IOfFLjjbfR2or7oPJQhwaOtKbxrp0dtlx7o5IQCevNBkRNg71vslpqSTcH%2BJjai7lKC5EgZhFdFxcTTsbAA0b6RfGeAxdAB1yTTR93csEUVa8XAmpk3cxlL8UPcNZLVD6h%2BxJ9Bp0b7SwU4fPsf6MsHpKN2DuOkVqWc%2BDJmpPvnpgz6oVlCSaDbFHt9S8ZSFSFsDzPUOXGVH%2FmH9nKmffYBc8lVzzi%2FRE5x74F%2BaU%2Bl8DKE%2BHBsV%2F%2BpIkh6me2C9Otz97Ql1uVf7PW0zqUMpw5EhMvNkWtR4jVdsxag%2BGiHZXqlgjyPMBUCmLRV3Pq2kSqZh6mjGtBY1xJiXqezl7CBxRssV6%2BaIAQg3kfVhICLnLhoW64G0z1Lsl39aviam%2FxgplaMuHWzDxcOVeV5t%2BQEHxMwbslibcO1oxegB6dxxk%2FTaQ77flDEEnyIQMPHjLTCYosbJBjqkAdIqbnpCpNcTUuGDsHg3qjRIwpnftmTXYu4VDZHlFsQoHNsTnW7dAPfXMUB2VL7ItdfXksJxGj%2FjDlF%2Fp8enweEAnhxlZv2vKkv%2BBeXnGikY0W9Yiguc5YpE6E5C6p5MnfEdCH1aG9%2Fuii%2BYuCHeNnT%2FjSJEuiJ%2Bs0WxsmLwyblWN4AZaK2fxelU2RGtFMrIlkbzHxd3lFt1x9RKGgMFDn2KbOHd&X-Amz-Signature=644f7579daed379dea7d4efa48a8f03cef5fa9da9d944095d603ab0ba0f3e75d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664V4TV3QD%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T135355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCNUywj%2FxQBzF%2BHFS%2B36eLfab81huQVQ6vTWobIP91%2B8gIhAP%2BA8IXn4r2hAXxSqFTkIAqT5BwehTJ4sz8GZI9cLsMJKv8DCEcQABoMNjM3NDIzMTgzODA1Igzodn5MgxEhnBN7nX4q3AN0pmZM80FvDVU3yLdPCYAcpYLLLSeH2bYeOX9GZypFPRkgFyC32i77mDAzY9UGt2SWLrw0e5TkyHiyeWnKUVbjDTwmMdso%2FLFt46eAnAN9TmzOhsNq3KbR3mAviP7NTrMV9jHyp0JHstMXVBvrBsvOlStcW9aoOhE%2BPC20CcZv4W1P4okpfNWINHo6IOfFLjjbfR2or7oPJQhwaOtKbxrp0dtlx7o5IQCevNBkRNg71vslpqSTcH%2BJjai7lKC5EgZhFdFxcTTsbAA0b6RfGeAxdAB1yTTR93csEUVa8XAmpk3cxlL8UPcNZLVD6h%2BxJ9Bp0b7SwU4fPsf6MsHpKN2DuOkVqWc%2BDJmpPvnpgz6oVlCSaDbFHt9S8ZSFSFsDzPUOXGVH%2FmH9nKmffYBc8lVzzi%2FRE5x74F%2BaU%2Bl8DKE%2BHBsV%2F%2BpIkh6me2C9Otz97Ql1uVf7PW0zqUMpw5EhMvNkWtR4jVdsxag%2BGiHZXqlgjyPMBUCmLRV3Pq2kSqZh6mjGtBY1xJiXqezl7CBxRssV6%2BaIAQg3kfVhICLnLhoW64G0z1Lsl39aviam%2FxgplaMuHWzDxcOVeV5t%2BQEHxMwbslibcO1oxegB6dxxk%2FTaQ77flDEEnyIQMPHjLTCYosbJBjqkAdIqbnpCpNcTUuGDsHg3qjRIwpnftmTXYu4VDZHlFsQoHNsTnW7dAPfXMUB2VL7ItdfXksJxGj%2FjDlF%2Fp8enweEAnhxlZv2vKkv%2BBeXnGikY0W9Yiguc5YpE6E5C6p5MnfEdCH1aG9%2Fuii%2BYuCHeNnT%2FjSJEuiJ%2Bs0WxsmLwyblWN4AZaK2fxelU2RGtFMrIlkbzHxd3lFt1x9RKGgMFDn2KbOHd&X-Amz-Signature=36e8279b41293bca6717ca7d0a520a7515a6d3e9cd1f96ec0156526571cdfdb5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

