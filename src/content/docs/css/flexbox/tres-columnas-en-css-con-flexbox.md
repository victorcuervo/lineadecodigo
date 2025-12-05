---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PFEMZHD%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T140448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHLFXHQyYQIClgUk8mM7SIucz7AuOyksn74EVK5uCS3gIgCe1DR29OsnZ2zFWu3LlkiTyTDVuvl3Mnqsw5KgM0cBEq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDO0sxez63b8%2BJebB6CrcA9jZtwpmeg1kyuVLJlH4HteeWx74CA12vUD1Dda8bRu3cOslxzRKd0FhHUG6vU87BWZaM%2BEl4XTBTJIeBWsqj8Hz1InWWCF%2FcMpOoIcBXNeViSChd7DVdzmAkqwxe9W6lJxfwBlviTlgX0A%2BzoReJ87h5HI4NfupttwcA3znrElNAUlFTwd5thcBdzn8RzpF49iZIRX7IH6SiN%2FGj5rEe2iS7kJ%2B0b6rts9HHXuY4OiUGNdj8FG%2Bn8uwJ7QXjcr5sw3gy44lVSwHrD04kNRkDlmjEfxWDb76muhmA8CUafgXze%2BMl%2FTNmZXLVswor3d0otQ8BkPfpYn0HZmHqELXddjyyYH%2BmQXHnP2cZV4vSaR8i%2BL%2FyFv64qAlo8wwH30An5pyRC9Hsp4OCvXUSmHafNJ5%2FcU3YkxS1rBkXupLaySRuqJ3Wgn9A%2B5hC3sP0w0V3Y%2BdzdmoUTRNyau5hDLdnhn3NHCVvOp9XXYryVR6ASngIZwE7jcFCTE6qN5MRm%2FdI3EW5BRDSyZ5X41cwU78QnHdSgcJreyOSqpYXUBqIRwtNOv0sV0l058HEF4oz7LgYZEv%2B%2Bmrza5avQg4Kcg09DRs8IW1f%2F3YR1YJdmw1EA9qplgKAkEwwUMWtEoZMJzNyskGOqUBc3BC2fZ5BVLGX8G1W0Hbcw62waYocY0YKO9QBBX6qY%2FucxMk7j6%2FtXS2oKo1Pk6Jr0qoXHNP%2F7EGMWkrLQBF6YbZesbejQZI7IFOIvIpeAJRawJtw9VCpNpUT9Wh2lPdhCb5oJ1PEwTdeVYgGZ41yTBxq%2BVzf2lEL4GIdWNY12TcVe85vDQAeWYuLbyJ3%2BY3GBkIzrqMIQLDQbemfL6dgWDQD0uG&X-Amz-Signature=970292ebd9bd62ee1d38d6e8dea2b195482583f7dbb5f2de6a2a209d48573890&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PFEMZHD%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T140448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHLFXHQyYQIClgUk8mM7SIucz7AuOyksn74EVK5uCS3gIgCe1DR29OsnZ2zFWu3LlkiTyTDVuvl3Mnqsw5KgM0cBEq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDO0sxez63b8%2BJebB6CrcA9jZtwpmeg1kyuVLJlH4HteeWx74CA12vUD1Dda8bRu3cOslxzRKd0FhHUG6vU87BWZaM%2BEl4XTBTJIeBWsqj8Hz1InWWCF%2FcMpOoIcBXNeViSChd7DVdzmAkqwxe9W6lJxfwBlviTlgX0A%2BzoReJ87h5HI4NfupttwcA3znrElNAUlFTwd5thcBdzn8RzpF49iZIRX7IH6SiN%2FGj5rEe2iS7kJ%2B0b6rts9HHXuY4OiUGNdj8FG%2Bn8uwJ7QXjcr5sw3gy44lVSwHrD04kNRkDlmjEfxWDb76muhmA8CUafgXze%2BMl%2FTNmZXLVswor3d0otQ8BkPfpYn0HZmHqELXddjyyYH%2BmQXHnP2cZV4vSaR8i%2BL%2FyFv64qAlo8wwH30An5pyRC9Hsp4OCvXUSmHafNJ5%2FcU3YkxS1rBkXupLaySRuqJ3Wgn9A%2B5hC3sP0w0V3Y%2BdzdmoUTRNyau5hDLdnhn3NHCVvOp9XXYryVR6ASngIZwE7jcFCTE6qN5MRm%2FdI3EW5BRDSyZ5X41cwU78QnHdSgcJreyOSqpYXUBqIRwtNOv0sV0l058HEF4oz7LgYZEv%2B%2Bmrza5avQg4Kcg09DRs8IW1f%2F3YR1YJdmw1EA9qplgKAkEwwUMWtEoZMJzNyskGOqUBc3BC2fZ5BVLGX8G1W0Hbcw62waYocY0YKO9QBBX6qY%2FucxMk7j6%2FtXS2oKo1Pk6Jr0qoXHNP%2F7EGMWkrLQBF6YbZesbejQZI7IFOIvIpeAJRawJtw9VCpNpUT9Wh2lPdhCb5oJ1PEwTdeVYgGZ41yTBxq%2BVzf2lEL4GIdWNY12TcVe85vDQAeWYuLbyJ3%2BY3GBkIzrqMIQLDQbemfL6dgWDQD0uG&X-Amz-Signature=2ed841b8f2f88c922a889827e34ad08618186d8382cea38e34612bc1fbbfbd26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

