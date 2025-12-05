---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667T2GVA7H%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T082821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGPsJ9p%2FK3aY1F798iMAu0gklhkCyWNat3mccIo9myFBAiAgI5V36bZ03Ofm1cxwDsqGOBSFGu6gQJdWmfrYsdjVdCr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMRKvaf%2F1m2xuCUvPfKtwDPH75wkWOrBIv0eQjE8%2FMshYouvVDFBM8md%2BdPD7tOt8h%2FaefHyuTcX%2FJE3BNuBGStLZRkRTZoeLIQVoGCKkiNQqzCxGU9CtNq4iKnlrNe454BHYPWFh9wxCTLayLgzTYrDltGRLeNM6TBuVpRnYm4YxMgW6%2BuTqS49JKSpectyOfVCXDHRRGL51iAUQbtOx9jur2J6Pe4Pi8Cv2fhDEeBxAxPLHQE82qZIcYFx43jH2jnbO7nq3mlLc52Y0Sn82rVyTUOqx4lCj4qV74QNyTunvApBcDEgT8x%2Fnfk7y2nijLpqRMTA%2BU3K%2FL29UnQcg%2Bev%2BKGHjT0jpWoRP3adHo2XttD%2FfUzFTU0L1eAQ9qmWPMhxAXdWgt8jaX%2FuuBPXL8hS%2BiFycYeRjkW0IvO3394%2BBeCnDruYNZ7NKVEtgWRmvJYpQnXQ4VHrgX3wjFG3YYIt3nDrugNdfc7G5PmeTj7vuEvxg5CO304wsziQ90TErEMd3HrGRYjntSdL68QkvIb3EbTgsqLWciNC9hLtmz4iyoa%2FyIV72qYZdDQ1DcisZ7G32W%2FjRK5GpyRZgUHRoeF40g1IGZgRi2eeojt8j2nyIcAUMzlazBXhiFNRUqcG1GD9gNNUx58TMSLUEw3K3JyQY6pgGQWt%2FtPgnO0NOyqjUEGy%2FoyV63Oo4OyXNOtAqbN4lMxtkg04yXSKFPJzgSq8DcjaW4Wqn0uF2CpnDiVIUlJHA3CPz1MLd0NHdohsL1P6GN3q6gIjzSgima%2BtFdZaQDgjzfMfNZ15SEYKsDnwXB874adnWEAiKO8TSG%2Bv9KGsotkZjwc2HO38L2iS0EzGqK7a%2BSQfACHPMnkwPWGhIIrnINvlWIWihp&X-Amz-Signature=42375ad023cc65d4e26704f85e44f94ade002ce33f29703cda4c4e3ca0cf2c5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667T2GVA7H%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T082821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGPsJ9p%2FK3aY1F798iMAu0gklhkCyWNat3mccIo9myFBAiAgI5V36bZ03Ofm1cxwDsqGOBSFGu6gQJdWmfrYsdjVdCr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMRKvaf%2F1m2xuCUvPfKtwDPH75wkWOrBIv0eQjE8%2FMshYouvVDFBM8md%2BdPD7tOt8h%2FaefHyuTcX%2FJE3BNuBGStLZRkRTZoeLIQVoGCKkiNQqzCxGU9CtNq4iKnlrNe454BHYPWFh9wxCTLayLgzTYrDltGRLeNM6TBuVpRnYm4YxMgW6%2BuTqS49JKSpectyOfVCXDHRRGL51iAUQbtOx9jur2J6Pe4Pi8Cv2fhDEeBxAxPLHQE82qZIcYFx43jH2jnbO7nq3mlLc52Y0Sn82rVyTUOqx4lCj4qV74QNyTunvApBcDEgT8x%2Fnfk7y2nijLpqRMTA%2BU3K%2FL29UnQcg%2Bev%2BKGHjT0jpWoRP3adHo2XttD%2FfUzFTU0L1eAQ9qmWPMhxAXdWgt8jaX%2FuuBPXL8hS%2BiFycYeRjkW0IvO3394%2BBeCnDruYNZ7NKVEtgWRmvJYpQnXQ4VHrgX3wjFG3YYIt3nDrugNdfc7G5PmeTj7vuEvxg5CO304wsziQ90TErEMd3HrGRYjntSdL68QkvIb3EbTgsqLWciNC9hLtmz4iyoa%2FyIV72qYZdDQ1DcisZ7G32W%2FjRK5GpyRZgUHRoeF40g1IGZgRi2eeojt8j2nyIcAUMzlazBXhiFNRUqcG1GD9gNNUx58TMSLUEw3K3JyQY6pgGQWt%2FtPgnO0NOyqjUEGy%2FoyV63Oo4OyXNOtAqbN4lMxtkg04yXSKFPJzgSq8DcjaW4Wqn0uF2CpnDiVIUlJHA3CPz1MLd0NHdohsL1P6GN3q6gIjzSgima%2BtFdZaQDgjzfMfNZ15SEYKsDnwXB874adnWEAiKO8TSG%2Bv9KGsotkZjwc2HO38L2iS0EzGqK7a%2BSQfACHPMnkwPWGhIIrnINvlWIWihp&X-Amz-Signature=df56cf6eb85070740022b009c21baa896cae72adfc836045e913777d7c5cbe4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

