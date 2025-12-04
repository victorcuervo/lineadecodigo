---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UUIL3B2%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T032735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQDnN5i3%2Bt2P8WWVXce7c6G%2FkqV65GfkWmZfNWQi1k4ANQIhANzM0zZ2UQoSaiuHCul7nFxgvLLoXwfwbm8OxzG468tqKv8DCDwQABoMNjM3NDIzMTgzODA1Igw8G85URG1aF5a2bb8q3ANs25R8Url7wkMSuYdWiMB5AOEJ2cOlPu2NacMkeSPf3Wt%2FxIQFcr2ZB8aqqnt2qdzzaZeNvlNSxqXuz5VIXSCHNfkvJx3uot7TzC%2F8xHPg%2FXi%2FsyzigAgijp5N4h%2FFNZaxTW%2FKXMV9a5i3MfUMKMiIItVSac1Y0sw7euQwiDT2kE7FDOvQUt6zFdZlWPFZNZBL0Zy5iCgNzESizNzVNXHDgTRImd%2Bbx5UYVfvO9HffQ0HVPEa6biLjBwsQXrBnBp6hxJmHGWsSHp754XW0fvWrqSvLV5RcsOB6mT64EZdDnS3aNvVkjZibbsJf6xLuBGVcqv3mj4iU0YnjvvD5gyb84i0yLubNclWPtL9pMRCgjHzwQnu266mA4amGSALkOZskjrnmn%2FP%2F4AgfG7WrU%2FvP65jvbBoEGhkBbnpElpEgyeHsmN0uSTDWMgB0P0%2FX5yueHxMtQ8Tx2F00mhPL2DcS7qmFdQZoA0ZblQX8x4ib4UOu6Y9dJnHUb3X9CJ4sNCxo1aN5v6%2F19P6EGOyFgQZ3bgYZZFfoU%2B9lIvy7AWCaMoUaQgql8QtfGKpvOr%2FztRmSAQOHzV1fcxGCAJst5i9RhFwh94jAjuqEaXaiFcSxMHqMLNRPP%2B6O0RC0mTC38sPJBjqkAUTp2ZMugLqhM7bmGfPxVNOV1GIGnJ%2BDzpXSvoy7Ml%2BnZq%2F4T0juTS%2FNjk0vEfKpeYt8V0oBPXozQRrcedtDDKpMwFP9CAx3YBP8ls1xGmcJbtCEO5thVPVlQa6DpRL6wCHu5dlCNFufRKa1RlOp9cwXHEcpgCSdpipy9ViqTFNP9zqioH4%2Bxo0eEfXxe7wJYdd9pVZ5TSlk7ESyAeIpPyt1R1Iu&X-Amz-Signature=051ad5650facee68d514ac7e9b56770e68c04d221a1350d6605f91706761dccc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UUIL3B2%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T032735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQDnN5i3%2Bt2P8WWVXce7c6G%2FkqV65GfkWmZfNWQi1k4ANQIhANzM0zZ2UQoSaiuHCul7nFxgvLLoXwfwbm8OxzG468tqKv8DCDwQABoMNjM3NDIzMTgzODA1Igw8G85URG1aF5a2bb8q3ANs25R8Url7wkMSuYdWiMB5AOEJ2cOlPu2NacMkeSPf3Wt%2FxIQFcr2ZB8aqqnt2qdzzaZeNvlNSxqXuz5VIXSCHNfkvJx3uot7TzC%2F8xHPg%2FXi%2FsyzigAgijp5N4h%2FFNZaxTW%2FKXMV9a5i3MfUMKMiIItVSac1Y0sw7euQwiDT2kE7FDOvQUt6zFdZlWPFZNZBL0Zy5iCgNzESizNzVNXHDgTRImd%2Bbx5UYVfvO9HffQ0HVPEa6biLjBwsQXrBnBp6hxJmHGWsSHp754XW0fvWrqSvLV5RcsOB6mT64EZdDnS3aNvVkjZibbsJf6xLuBGVcqv3mj4iU0YnjvvD5gyb84i0yLubNclWPtL9pMRCgjHzwQnu266mA4amGSALkOZskjrnmn%2FP%2F4AgfG7WrU%2FvP65jvbBoEGhkBbnpElpEgyeHsmN0uSTDWMgB0P0%2FX5yueHxMtQ8Tx2F00mhPL2DcS7qmFdQZoA0ZblQX8x4ib4UOu6Y9dJnHUb3X9CJ4sNCxo1aN5v6%2F19P6EGOyFgQZ3bgYZZFfoU%2B9lIvy7AWCaMoUaQgql8QtfGKpvOr%2FztRmSAQOHzV1fcxGCAJst5i9RhFwh94jAjuqEaXaiFcSxMHqMLNRPP%2B6O0RC0mTC38sPJBjqkAUTp2ZMugLqhM7bmGfPxVNOV1GIGnJ%2BDzpXSvoy7Ml%2BnZq%2F4T0juTS%2FNjk0vEfKpeYt8V0oBPXozQRrcedtDDKpMwFP9CAx3YBP8ls1xGmcJbtCEO5thVPVlQa6DpRL6wCHu5dlCNFufRKa1RlOp9cwXHEcpgCSdpipy9ViqTFNP9zqioH4%2Bxo0eEfXxe7wJYdd9pVZ5TSlk7ESyAeIpPyt1R1Iu&X-Amz-Signature=f37b1e5db96cbe942d0b1e009f573e91ec18da3fb537e2a08437dd5c1daa307f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

