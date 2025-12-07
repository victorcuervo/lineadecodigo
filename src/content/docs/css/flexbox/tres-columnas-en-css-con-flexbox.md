---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAQ4MMPP%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T235552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAm7DGLEoOom4bHtuouFXBbaict%2BbVSJc5RsZOxVmPYZAiA30ToYxRCDz%2F9T%2FZYULtBcmzOnavMQXs1Rde26N9bo0iqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMt2oX7gQelb7puvxIKtwDH6KFzdbYwp121g%2BSvgF6%2BwL1W64LNpwGt84lw1zx4vSBpdWGFLkWsOoAOk%2FoDVRpvKlcGlZgZa%2BCuDS%2BJEOr87r2DLUmdkgTHgNWswha5%2FhvjmeYmNyjl6f7XhuQtpZSLFXfmQvforiOnZb6fPvrVut2cS6qf82TVSBPwhA5Ibp6h%2BmlE833AeDjVxNs5r%2BuR65yVpJokP7QbgCmCQl42use4KVv1A50rgf%2B44cUNwiAHfLcZf0pDN2PbiEEGCQBQ0cWlFaEqZWOsDug3JVDxx%2FUwaf7KTq2X26Wr%2Bq6u8R1VEVnQgQsAYYO9ZCPX04KxvQJRlMmvt0DT9aYowHvzC3KUll7T1nRnIy24eAvQCM7ENgygZyt6tiAa9db2hERnSgdt90qJ5Gfw76Y58JWUchvArNY5px2P4iQ%2FWPNRCXpGpXwtkLVs1B69G0F1%2FxZzelFhGbPyzbdFNTFSgXMo%2F%2Fm%2FPoW21CI9d%2BhFURu0Mpp%2FE0wGVuONL55yYCI5gt38YH%2B9PoUxipQeNsPxzSztHE3r3gqlK51n0TzvWkDEbH9v2m%2BVE3RJfHns0S9fzcwxZMh%2FOd%2F%2Bs6hv9g94XFVITXIWgO66qhXQemTpz%2BMrGyclBQWxTRRsJNnCFYwzaHYyQY6pgHSWVy8zSNRjzaLbLb5ajF7sVftEorRJELC8s%2BjbwSCaCV9Nf4jMxTDEvNPGpSxJwRyy8w5d1JDs06uQdbYAwo4DcxJZcB4lCSzKObPVinGMdd%2FwMeL9pCoeh9rKDmQ2SPC9JHjNx32zWBX6XhIRuTywPJnnXGdNm5d1xSf0f5DX8qRMG067ZHJAo9EJeQYSaTtMJvKLldCWVnUEoU4KMb2I%2BNtvPR%2B&X-Amz-Signature=74ba9dc548b24944e7860a2ee95ddc948d9feaf6069949cd41195af3805c358a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAQ4MMPP%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T235552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAm7DGLEoOom4bHtuouFXBbaict%2BbVSJc5RsZOxVmPYZAiA30ToYxRCDz%2F9T%2FZYULtBcmzOnavMQXs1Rde26N9bo0iqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMt2oX7gQelb7puvxIKtwDH6KFzdbYwp121g%2BSvgF6%2BwL1W64LNpwGt84lw1zx4vSBpdWGFLkWsOoAOk%2FoDVRpvKlcGlZgZa%2BCuDS%2BJEOr87r2DLUmdkgTHgNWswha5%2FhvjmeYmNyjl6f7XhuQtpZSLFXfmQvforiOnZb6fPvrVut2cS6qf82TVSBPwhA5Ibp6h%2BmlE833AeDjVxNs5r%2BuR65yVpJokP7QbgCmCQl42use4KVv1A50rgf%2B44cUNwiAHfLcZf0pDN2PbiEEGCQBQ0cWlFaEqZWOsDug3JVDxx%2FUwaf7KTq2X26Wr%2Bq6u8R1VEVnQgQsAYYO9ZCPX04KxvQJRlMmvt0DT9aYowHvzC3KUll7T1nRnIy24eAvQCM7ENgygZyt6tiAa9db2hERnSgdt90qJ5Gfw76Y58JWUchvArNY5px2P4iQ%2FWPNRCXpGpXwtkLVs1B69G0F1%2FxZzelFhGbPyzbdFNTFSgXMo%2F%2Fm%2FPoW21CI9d%2BhFURu0Mpp%2FE0wGVuONL55yYCI5gt38YH%2B9PoUxipQeNsPxzSztHE3r3gqlK51n0TzvWkDEbH9v2m%2BVE3RJfHns0S9fzcwxZMh%2FOd%2F%2Bs6hv9g94XFVITXIWgO66qhXQemTpz%2BMrGyclBQWxTRRsJNnCFYwzaHYyQY6pgHSWVy8zSNRjzaLbLb5ajF7sVftEorRJELC8s%2BjbwSCaCV9Nf4jMxTDEvNPGpSxJwRyy8w5d1JDs06uQdbYAwo4DcxJZcB4lCSzKObPVinGMdd%2FwMeL9pCoeh9rKDmQ2SPC9JHjNx32zWBX6XhIRuTywPJnnXGdNm5d1xSf0f5DX8qRMG067ZHJAo9EJeQYSaTtMJvKLldCWVnUEoU4KMb2I%2BNtvPR%2B&X-Amz-Signature=fca8ca1db4fefd0e0613b197b7f5e19c9a28604f02dc33b52b87f73d529a12d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

