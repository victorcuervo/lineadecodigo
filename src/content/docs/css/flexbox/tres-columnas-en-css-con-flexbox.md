---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4AEQQBA%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T000606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDocZEDSrHfaXeaJ8lGb0L4YWnuG1UaTKgswK6rErciuwIgRv4EMgNRtiHhafMlhocWKnFjBhkrLZAmSZ6ZfGOoPbwqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB0%2BJwcKOHQm3CBUzCrcA%2B6U%2BJUdwoVQOj2v9FZr1pY0bxmlq05JTVCpARqd1aDPGI%2F%2FUfr9XgyKTR0bvP%2BpvPPGOAbuoXfL%2FFRuh0mdiJcsYyEuzGkx8LMK%2FaV2cOnySIr2f8eLmBLuJkX%2BJ0jg0j6e1ckUgNcKX%2FOh%2B%2FFjX2qQfIDOQrlOQmoDyAKEXyNoQjaqUQ1km4BkgphGPqsdevmrCahwvRePHwuXHxYbHeRCWBJg9Q%2BmGZEU87fhGTK9rhcFzFtb7a7xIGbvw5Uw4Yx2%2FEoPRjYfDpFhRU894z1l4fRpu7x4DgAlBoG%2Fhal8itmnPa9nRNjXqrvFsXe3u7L5yy8sJs8bMR2vbnaF7PmvuolXACaj59bVRUO495svXJTUTDauSGeivdRJQ2oueRfiD6L7B093YyEPRrToaWh7pp8ECs8dYWJy%2FbB%2BSdqmAJ831G9QCEu3SiyO4q9c8%2FjJwGP0wJcQkKrjrEw5gRLEeWtqXPcd4Lyg25uMV3ijUPeqQ3r%2FNBdxAqCAu7kYeH%2FCsVj94foZqcFBYiBKAMM78LyQ8%2FY3PJvQFPnPBTJcoO9f0eGQr%2BFVhuRSwnkKUC4cu%2F7qH6DWkLMXL4a74a9g9tw8Z9bg2VYgtciSIK23%2BMmd1CYaN0zl7GYAMJD90skGOqUB8ch0Ei%2FyulCMLXc0byFr%2BLF4QFk7byf2WBaSeoFRiqSuWAEogBGd19%2BVpRhIar1Jea1U64BYYDVfSWlQRm%2F7iYU40mmyCcjT3bwkbgfN3x8jKQVSOg8fRB6q7l0s3NhqtlXohojX4OI9KMgYsMgChhVy2zO6ei7b7P6X%2BGKnQ5LVfXDgfXTraLSHaX%2BU2StKHEeDjW10n4FrfkeazUSBYcStyph8&X-Amz-Signature=0acb3578760a324536424abc81ca6ce709fb4aecc644725ea869ade0d8165306&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4AEQQBA%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T000606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDocZEDSrHfaXeaJ8lGb0L4YWnuG1UaTKgswK6rErciuwIgRv4EMgNRtiHhafMlhocWKnFjBhkrLZAmSZ6ZfGOoPbwqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB0%2BJwcKOHQm3CBUzCrcA%2B6U%2BJUdwoVQOj2v9FZr1pY0bxmlq05JTVCpARqd1aDPGI%2F%2FUfr9XgyKTR0bvP%2BpvPPGOAbuoXfL%2FFRuh0mdiJcsYyEuzGkx8LMK%2FaV2cOnySIr2f8eLmBLuJkX%2BJ0jg0j6e1ckUgNcKX%2FOh%2B%2FFjX2qQfIDOQrlOQmoDyAKEXyNoQjaqUQ1km4BkgphGPqsdevmrCahwvRePHwuXHxYbHeRCWBJg9Q%2BmGZEU87fhGTK9rhcFzFtb7a7xIGbvw5Uw4Yx2%2FEoPRjYfDpFhRU894z1l4fRpu7x4DgAlBoG%2Fhal8itmnPa9nRNjXqrvFsXe3u7L5yy8sJs8bMR2vbnaF7PmvuolXACaj59bVRUO495svXJTUTDauSGeivdRJQ2oueRfiD6L7B093YyEPRrToaWh7pp8ECs8dYWJy%2FbB%2BSdqmAJ831G9QCEu3SiyO4q9c8%2FjJwGP0wJcQkKrjrEw5gRLEeWtqXPcd4Lyg25uMV3ijUPeqQ3r%2FNBdxAqCAu7kYeH%2FCsVj94foZqcFBYiBKAMM78LyQ8%2FY3PJvQFPnPBTJcoO9f0eGQr%2BFVhuRSwnkKUC4cu%2F7qH6DWkLMXL4a74a9g9tw8Z9bg2VYgtciSIK23%2BMmd1CYaN0zl7GYAMJD90skGOqUB8ch0Ei%2FyulCMLXc0byFr%2BLF4QFk7byf2WBaSeoFRiqSuWAEogBGd19%2BVpRhIar1Jea1U64BYYDVfSWlQRm%2F7iYU40mmyCcjT3bwkbgfN3x8jKQVSOg8fRB6q7l0s3NhqtlXohojX4OI9KMgYsMgChhVy2zO6ei7b7P6X%2BGKnQ5LVfXDgfXTraLSHaX%2BU2StKHEeDjW10n4FrfkeazUSBYcStyph8&X-Amz-Signature=6c2b58fd6106d73c7422082893bb85e8214e07604d00b4bd58940d04dd495d6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

