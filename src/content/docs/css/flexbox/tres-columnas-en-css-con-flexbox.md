---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJS6IZJV%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T195813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFrj4Cggp%2BhzE55JmYEmB7cp%2FsvMtfThFIDLqlHGQ248AiAQircHvZNikupx8C%2Bc6bABko6U63I5V7j3ZofiJpEmhiqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0z5LAEmUT94tYsmWKtwDaADOKRJ0HUkv4yl93R5RrcOPmm70MZI3U4owqevysgH005tUorLr%2F%2BC5wdba41BcLP2u7aSWBYY5bTQjtUOabdlR0fQJRGbHrnL0RECYTmh%2B6szQoxOYxCrNoiYzQIYepWB8BCrmHESp%2FvjuHOhsMuz29%2Fppgmdgq8rFd7NbQm7BJ5RxtQL9O2jN6EjrUG19FYNeWe6%2BFwhcwQwuXMrES1cVwASsuEe%2FBoqzR5a39PkKYMM3lm%2B8uKVYhoBEdJHr%2BoKphjf3Z81NiZEoE5ybNiNPkZqEtq%2FIEgf8PAANyoE1OkC8Sw6j8pN9sIcRDRn5S0a%2BCzRyg3aHTs3qRoaP94lAicQA9hecUOpzhQaW%2FTrlXDdbvCIBYJE7DrDnWqyMvqLypnZfOgaR62y7C57O8MBqjWydwM%2BNiZKmPJa1t0%2FtAWqCiiC1p2e182it50M1%2FYrWYN%2FDDA4FPwrmwPKSdxbw1qrOxvBgmo2tRzIzioX0apQI7VZFTsaZikdzBBI%2FWFLXaPceBeZs2oqRFjY9hOzprTK%2FtnhwBpucZ%2F7MDOPRGXCvpQo71kwrvRn3byN%2FNDvCc6T%2B944pa7y96%2FHAaI2iONJqB1Zcb5a9U1s9ob8HkOxxHHq7WZJBgOAwn7TcyQY6pgHTuA2H%2F2YPh52RsEIIgYMPflyNI2IulfZfeux9ToRDYh9ZnGA8b9vxqKiszpP6eLV5h1tU4UR%2F%2FJFaH9Lnosc6souJWFOnJciVlbVtXTvHOX7rQ%2F4tJkLKKhY3ipn1nBMrvSDLTLCbGxwhu%2Bxe%2FhpQbQXIDD%2FCan2eWp7N%2BZU10s1RROcfZEJuPZmddF3QiKvyd3vH3ag69aoxBdnPkSHUvqu90Bq3&X-Amz-Signature=f488d59f4c8dc233d75c555709e45d6c69c7ec7fb416f5d5d0e385ca4bbe3750&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJS6IZJV%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T195813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFrj4Cggp%2BhzE55JmYEmB7cp%2FsvMtfThFIDLqlHGQ248AiAQircHvZNikupx8C%2Bc6bABko6U63I5V7j3ZofiJpEmhiqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0z5LAEmUT94tYsmWKtwDaADOKRJ0HUkv4yl93R5RrcOPmm70MZI3U4owqevysgH005tUorLr%2F%2BC5wdba41BcLP2u7aSWBYY5bTQjtUOabdlR0fQJRGbHrnL0RECYTmh%2B6szQoxOYxCrNoiYzQIYepWB8BCrmHESp%2FvjuHOhsMuz29%2Fppgmdgq8rFd7NbQm7BJ5RxtQL9O2jN6EjrUG19FYNeWe6%2BFwhcwQwuXMrES1cVwASsuEe%2FBoqzR5a39PkKYMM3lm%2B8uKVYhoBEdJHr%2BoKphjf3Z81NiZEoE5ybNiNPkZqEtq%2FIEgf8PAANyoE1OkC8Sw6j8pN9sIcRDRn5S0a%2BCzRyg3aHTs3qRoaP94lAicQA9hecUOpzhQaW%2FTrlXDdbvCIBYJE7DrDnWqyMvqLypnZfOgaR62y7C57O8MBqjWydwM%2BNiZKmPJa1t0%2FtAWqCiiC1p2e182it50M1%2FYrWYN%2FDDA4FPwrmwPKSdxbw1qrOxvBgmo2tRzIzioX0apQI7VZFTsaZikdzBBI%2FWFLXaPceBeZs2oqRFjY9hOzprTK%2FtnhwBpucZ%2F7MDOPRGXCvpQo71kwrvRn3byN%2FNDvCc6T%2B944pa7y96%2FHAaI2iONJqB1Zcb5a9U1s9ob8HkOxxHHq7WZJBgOAwn7TcyQY6pgHTuA2H%2F2YPh52RsEIIgYMPflyNI2IulfZfeux9ToRDYh9ZnGA8b9vxqKiszpP6eLV5h1tU4UR%2F%2FJFaH9Lnosc6souJWFOnJciVlbVtXTvHOX7rQ%2F4tJkLKKhY3ipn1nBMrvSDLTLCbGxwhu%2Bxe%2FhpQbQXIDD%2FCan2eWp7N%2BZU10s1RROcfZEJuPZmddF3QiKvyd3vH3ag69aoxBdnPkSHUvqu90Bq3&X-Amz-Signature=1d3fd3505b9db1ed7eb95bf191abb96708ee61f20fce03894357a2682b511761&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

