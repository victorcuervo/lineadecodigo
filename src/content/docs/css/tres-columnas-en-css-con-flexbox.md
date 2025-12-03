---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastupdates: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUKUSU2N%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T215509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIDwb01ltbRRFHUEejP0kHtjOLzdC1%2FqMuqJYMtpU7YI9AiBVZyageokl7CuxMIQlv%2FXKROXnktQXFFNuCMrsPOV0pir%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMtcpVbHvEVfytHAGsKtwDZT3JIvKOeCsCR4hQqoNGT5XFfpmwxaCau5%2F8AKrfree1pJAtqAw%2BaNeOZmhyw%2FBOZLQQiZFr%2F9S%2FKQo8%2B56zzNmIO5ymix4Yx%2Fe44E4eu3sGJzzuLypHOI0rvhiJa6FPzaolnEqrO%2BWbovKTMt6hPbe2DaASnysYpOpR2FtjLUe5PJvQIwkJmY1zODB%2FEi8JfP4LMFruDt7SZHnXLeF%2FUnRCEhguH2g7LcgOAwBsiljVWNPrj%2FHL1AMJuCH%2F8nfxcrJxmJyOf1PPKCKC0qihNV3BBbA%2BBnxveXL%2BdIQqbuN1AxNU9LkqHWIVfY%2F2pRAWcCEWIGpMdpnA2XOtbymYVEWYby53W%2Bu1mbi%2B6hEBMzbDRcGfrVWWFNMOJyfNZb1dTX8ktAMLOunO%2FA%2BGCS1Xo5TyEHZjb56i8ZSmTvOneYQ8hYbFrfSnDHrreLGwU9gWR5MqJnOHRt63cYAVrV1GTY1DNCQh7C%2FwNk3RDzMENKlJ7oqED0eVxCDNPKyzngiofAenxdkrGK9G%2BrLtXqTDl33TjXjEhH%2BXiS1l0sxNoWQaDJSnubfz4bMj4AN8TGayGpVYSngigbHHtMviVWtp3HxNCTW4%2BMQ77xOHcpAJ262FixEqCeoc39f0Meww%2B9zCyQY6pgHtloBVCp1habvie6Djp%2B0%2BDB1tTcqhw%2Fr6Eq23vBnTFSKc88O5EUgX00IO9c%2FkjIaFp7asYMxPxq4S5sXXcmsaDFN6a5ODn3zDl20O91e5Tq9j%2FWLeSbQx7WVuzCWYINZCE1vUdu64PtDfr8SqrYULqTtTHaovHw1rPVApz7DCBiPvoqxbBklcBHy4lUjewticPsV%2FKiY2Wua%2BRr3Gdk5I2%2F6ZZ4DB&X-Amz-Signature=246f290f729c675d8223925fba024fd30aacec414161dd629bc00c05356c1a7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUKUSU2N%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T215509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIDwb01ltbRRFHUEejP0kHtjOLzdC1%2FqMuqJYMtpU7YI9AiBVZyageokl7CuxMIQlv%2FXKROXnktQXFFNuCMrsPOV0pir%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMtcpVbHvEVfytHAGsKtwDZT3JIvKOeCsCR4hQqoNGT5XFfpmwxaCau5%2F8AKrfree1pJAtqAw%2BaNeOZmhyw%2FBOZLQQiZFr%2F9S%2FKQo8%2B56zzNmIO5ymix4Yx%2Fe44E4eu3sGJzzuLypHOI0rvhiJa6FPzaolnEqrO%2BWbovKTMt6hPbe2DaASnysYpOpR2FtjLUe5PJvQIwkJmY1zODB%2FEi8JfP4LMFruDt7SZHnXLeF%2FUnRCEhguH2g7LcgOAwBsiljVWNPrj%2FHL1AMJuCH%2F8nfxcrJxmJyOf1PPKCKC0qihNV3BBbA%2BBnxveXL%2BdIQqbuN1AxNU9LkqHWIVfY%2F2pRAWcCEWIGpMdpnA2XOtbymYVEWYby53W%2Bu1mbi%2B6hEBMzbDRcGfrVWWFNMOJyfNZb1dTX8ktAMLOunO%2FA%2BGCS1Xo5TyEHZjb56i8ZSmTvOneYQ8hYbFrfSnDHrreLGwU9gWR5MqJnOHRt63cYAVrV1GTY1DNCQh7C%2FwNk3RDzMENKlJ7oqED0eVxCDNPKyzngiofAenxdkrGK9G%2BrLtXqTDl33TjXjEhH%2BXiS1l0sxNoWQaDJSnubfz4bMj4AN8TGayGpVYSngigbHHtMviVWtp3HxNCTW4%2BMQ77xOHcpAJ262FixEqCeoc39f0Meww%2B9zCyQY6pgHtloBVCp1habvie6Djp%2B0%2BDB1tTcqhw%2Fr6Eq23vBnTFSKc88O5EUgX00IO9c%2FkjIaFp7asYMxPxq4S5sXXcmsaDFN6a5ODn3zDl20O91e5Tq9j%2FWLeSbQx7WVuzCWYINZCE1vUdu64PtDfr8SqrYULqTtTHaovHw1rPVApz7DCBiPvoqxbBklcBHy4lUjewticPsV%2FKiY2Wua%2BRr3Gdk5I2%2F6ZZ4DB&X-Amz-Signature=2f5f69d08ef3acfbc87abd29cc7ec1badbd19ce874313a53be8bbcf37d5a830c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

