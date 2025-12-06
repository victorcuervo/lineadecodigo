---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCXYIZ6B%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T110039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCi7C1CIZPGxuOTkeMa1RHS6n4B7I5lUnpuqCufUjhghwIgP6Vtt9KYaWE3PD45ngjchZpUbjA3VVJxKry0d88SjLkq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDC5Sk7DpIlS0Xm2PdyrcA02xlw%2BfS7rUrblX88YXppc2xl%2F7h4vJWq7ePC4%2BQdloDF3LMjFWWyh12FMcPmy7Vw0EyP%2FyVH9EMhmDqEDHhlzBUXdgXH7zMz%2FTOU0em3iub8iJTO4gnlc6Dhq4kAwmi74bKAErqN8gEccOVssxLcSVyGIpvlYw9SEvUjQNQQjakZFPNyg27wA9J%2BAALls6rDM18TDuRv93ExnJI4DP2kjV9oWeptiLPWmxDcwn3jKS1apt9hgk5eKVNb%2BCd36VMz8uj47RGKIg%2FtLfeJ%2BNEi11SYI6jqGPOlTvADaC80au7Ju2EMqxJn8G3WOSPWhTxdh%2F2y3utaQxHiDTw4FVPeDxPKqG92Dn2%2BIzHH%2FyFQeDar5LgiMe6DUTV8ueTzR17A8MoU%2F9rnP8qTKjDsn6dI4QW3QxG9m6uSr%2BclgXLF27PfJQ%2BsRLR08tFmVZW7RrcWI2bOGPKfnWwbgSCBOfOezU9Ce08yX6yEWJtQakyqsysAx9kH11mQldq%2Bzd5URSnGVrkUXIWY%2FmYDOtJVICOmv3Ositrx%2BDc1koOnD96HO%2BzMyfULKJV0QIeMEPMl3DTFahHNuzLjAbYODGEPIJ%2F50E9By2XB2dBxBwUSxbXdRT2Tt1c8dOGZGFzLNWMN6J0MkGOqUBh3ULn44%2Fo3Fex00yvjlkJWB9IcxklRL%2FrNQ%2FHhrG5lSEEAUmr6HfYbyRru3luskq%2FEHNHecBPER2UJsa0bDNIl5QTF0ZPFKH9D3kjCqsU%2Bwfh%2FF5Xaa3OgVasYuc4P2Ang%2F7vQYZrc2Ao1pxYLbRJvu425Lr53XhqfMSR%2BTuYUrHui2JnxFd%2BoODGlNCuJuKO2SijW9VvTEPTWf7nfyg%2Fu9sQmdF&X-Amz-Signature=0d3325bf1201015fb5bcbe8c38ba120161d177e40fed410719a05f93776ffecc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCXYIZ6B%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T110039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCi7C1CIZPGxuOTkeMa1RHS6n4B7I5lUnpuqCufUjhghwIgP6Vtt9KYaWE3PD45ngjchZpUbjA3VVJxKry0d88SjLkq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDC5Sk7DpIlS0Xm2PdyrcA02xlw%2BfS7rUrblX88YXppc2xl%2F7h4vJWq7ePC4%2BQdloDF3LMjFWWyh12FMcPmy7Vw0EyP%2FyVH9EMhmDqEDHhlzBUXdgXH7zMz%2FTOU0em3iub8iJTO4gnlc6Dhq4kAwmi74bKAErqN8gEccOVssxLcSVyGIpvlYw9SEvUjQNQQjakZFPNyg27wA9J%2BAALls6rDM18TDuRv93ExnJI4DP2kjV9oWeptiLPWmxDcwn3jKS1apt9hgk5eKVNb%2BCd36VMz8uj47RGKIg%2FtLfeJ%2BNEi11SYI6jqGPOlTvADaC80au7Ju2EMqxJn8G3WOSPWhTxdh%2F2y3utaQxHiDTw4FVPeDxPKqG92Dn2%2BIzHH%2FyFQeDar5LgiMe6DUTV8ueTzR17A8MoU%2F9rnP8qTKjDsn6dI4QW3QxG9m6uSr%2BclgXLF27PfJQ%2BsRLR08tFmVZW7RrcWI2bOGPKfnWwbgSCBOfOezU9Ce08yX6yEWJtQakyqsysAx9kH11mQldq%2Bzd5URSnGVrkUXIWY%2FmYDOtJVICOmv3Ositrx%2BDc1koOnD96HO%2BzMyfULKJV0QIeMEPMl3DTFahHNuzLjAbYODGEPIJ%2F50E9By2XB2dBxBwUSxbXdRT2Tt1c8dOGZGFzLNWMN6J0MkGOqUBh3ULn44%2Fo3Fex00yvjlkJWB9IcxklRL%2FrNQ%2FHhrG5lSEEAUmr6HfYbyRru3luskq%2FEHNHecBPER2UJsa0bDNIl5QTF0ZPFKH9D3kjCqsU%2Bwfh%2FF5Xaa3OgVasYuc4P2Ang%2F7vQYZrc2Ao1pxYLbRJvu425Lr53XhqfMSR%2BTuYUrHui2JnxFd%2BoODGlNCuJuKO2SijW9VvTEPTWf7nfyg%2Fu9sQmdF&X-Amz-Signature=b8a69e25684bdb06d087a442424a52ea662db362a90c97b5ce74085e9a71c07f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

