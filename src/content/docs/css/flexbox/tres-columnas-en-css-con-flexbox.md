---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663POHTHII%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T033149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE8U9r0H16qBxm3lLAGVzp7YIT2fP0iXvPrOfKkYr5pQAiAlLGEGyUSD1VBeaRBt7aDLbhkv381%2BCaRu%2Fp2LsXVPWSr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIM7nButG7x6WKxvdInKtwDVsSrgwcITL9bMEcOFhEDzY0OcZkUwmPoWt%2BHmqC5qjQIo9PGTv3BiwhvpsY%2FxRLaBR0MG9RSPMJf2bxnsArlIK9hs9W9kHWTmhIqFQZFssRlo0oGTdOga7q1KkA0I55p%2FRyjit2h2Mr%2F9D%2BQ8VUoFrHJQTWBbF4aZKXKxpb7ecGiDnjqqTK1aZkElL%2Br2SznRfFH9HVySYqu2cb1HZv%2BP%2BBr5uNTJngATDVE6hwlvn1Yb5oapQgrB7NtdQ3G8obX7uPwWpeK%2Fu7Fdb%2BbBpbCGDcSggFxBn0Am2Y59R3i%2BiNoyR4jRTH8n%2Bw%2FwdnDkI9KN%2Bv5p81XWs%2FTtKmkPwzCRHu%2BO3pP2zlnPJygmT66o3AHy7dv04%2FJld1PFWSMGiyUD5jaA%2BlfANaMQi%2B3aBkkm1HMvtvUV3%2FjX5FzkFx0Cc6A%2B3Weh2F%2FHASLN9vhzWBFJUYitBfdMIKJmV78qBvDXw3xYGwitsHByzfJsBY%2BeeP96Ifscljeo264n4bwyIBpyAQUgJD2kXknpiPxN4Hp37o%2F29hzFWe5Kbt3KbXpLtCOSxYTJHpDIPCoEtXOwBjqLYKnaJFZWncbCa3H0mydScVKpXONm7s7tWtsi%2BER3Qp0E1UPkL53Aiz5xEQwiozIyQY6pgFo6WkcM%2BZ8%2Bsh0LebJGjhrAm0GE%2B5BWkxPszbGX6qmJuH3vgmpla%2Fe7UMpPh0nGZv6FM7W%2Fu7FPQfis6ohdGMxoODu%2B20utF24GYh6%2FxMVceAKcC1nrzdkQHaCt2gyT4ELhJ96DldoPdxwJ0YXApa9UIl9tPnX%2BbVoejfPp%2FHzlRSwM3GXaEGzvIokmaq90HYcQyCYliV9cL3ImtUI04L1F%2FOm4w1d&X-Amz-Signature=b62b79769f8a3d2644c116a01546968ca982e51dc33cc7eacb66643cf3e6194d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663POHTHII%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T033149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE8U9r0H16qBxm3lLAGVzp7YIT2fP0iXvPrOfKkYr5pQAiAlLGEGyUSD1VBeaRBt7aDLbhkv381%2BCaRu%2Fp2LsXVPWSr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIM7nButG7x6WKxvdInKtwDVsSrgwcITL9bMEcOFhEDzY0OcZkUwmPoWt%2BHmqC5qjQIo9PGTv3BiwhvpsY%2FxRLaBR0MG9RSPMJf2bxnsArlIK9hs9W9kHWTmhIqFQZFssRlo0oGTdOga7q1KkA0I55p%2FRyjit2h2Mr%2F9D%2BQ8VUoFrHJQTWBbF4aZKXKxpb7ecGiDnjqqTK1aZkElL%2Br2SznRfFH9HVySYqu2cb1HZv%2BP%2BBr5uNTJngATDVE6hwlvn1Yb5oapQgrB7NtdQ3G8obX7uPwWpeK%2Fu7Fdb%2BbBpbCGDcSggFxBn0Am2Y59R3i%2BiNoyR4jRTH8n%2Bw%2FwdnDkI9KN%2Bv5p81XWs%2FTtKmkPwzCRHu%2BO3pP2zlnPJygmT66o3AHy7dv04%2FJld1PFWSMGiyUD5jaA%2BlfANaMQi%2B3aBkkm1HMvtvUV3%2FjX5FzkFx0Cc6A%2B3Weh2F%2FHASLN9vhzWBFJUYitBfdMIKJmV78qBvDXw3xYGwitsHByzfJsBY%2BeeP96Ifscljeo264n4bwyIBpyAQUgJD2kXknpiPxN4Hp37o%2F29hzFWe5Kbt3KbXpLtCOSxYTJHpDIPCoEtXOwBjqLYKnaJFZWncbCa3H0mydScVKpXONm7s7tWtsi%2BER3Qp0E1UPkL53Aiz5xEQwiozIyQY6pgFo6WkcM%2BZ8%2Bsh0LebJGjhrAm0GE%2B5BWkxPszbGX6qmJuH3vgmpla%2Fe7UMpPh0nGZv6FM7W%2Fu7FPQfis6ohdGMxoODu%2B20utF24GYh6%2FxMVceAKcC1nrzdkQHaCt2gyT4ELhJ96DldoPdxwJ0YXApa9UIl9tPnX%2BbVoejfPp%2FHzlRSwM3GXaEGzvIokmaq90HYcQyCYliV9cL3ImtUI04L1F%2FOm4w1d&X-Amz-Signature=156c4996182269b74626b9fee3ee0c6742c20ebf44de16c468c5cfce8c94df65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

