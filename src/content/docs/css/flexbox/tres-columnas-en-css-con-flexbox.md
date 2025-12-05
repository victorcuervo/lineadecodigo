---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627L6K7DW%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T054031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHA2TpBg3LX06Sdv%2F3Lm7zSXcEB8Yf%2BZ2gROjIM%2BhqxqAiBBFLrSCS74xWC3gOCu7TgWi2RtHSVmoLh9QwYntwsILir%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIM%2BCKRMWrbbXZaSxdnKtwDTKaxSi1PHn5oeesc9NYjIV240SO6LmH%2FuLTBlVq%2BXAcCJun0UWItbRovx8M985KKLThtFCpG4YAT%2FTd9emWODu8pnusQO5hozQtZYerFWSHDIGfAWzyKkiOaNyUdaA9quyOl6RtI4B6s4ht6YhDFaIwgPJaPsS5P0xl39dS5E5sxMJ9r%2BoX9HNdpsFiPgFt10wIWhgxaThXF3n3avOlZICJDIaCgZtEpLjsGyyuJdD9zE33DcsaD%2BbmRVwjhIJ%2FhqbqB5Lsm19EEb9Az%2By640B%2Fw0ZwTUrDYjJR1dID3zJtXx2c%2F4MrlY3uccN7hcCZcPJSqeEdhZXrFdQItiRKqmMRTI2mejeQOY91OfCZcs7Kkfm8G%2FAsXD5B0mphlL7qlg%2BlREL5GCG236Q6mYQOVHep6DRZJ1vqbfvKb1a0m4MdFAA%2Fp8sDO8buGaZVY1B2ra71oBUdTldfjWEgVz8Ayet05xVeXl9NgYor3NTbCGiG7mCdJkRrtl%2FACHpLz1GxCCEKEOJpyzFlgaRWf%2BBSFr8pdjJ8UJdCwtpA%2FmR1SiaVGHvHcbgMiM%2BPPmJ%2F81tiWuf%2FZMw26mBbkiKClaJtPHjWtCWSRTyijg4%2BCC36q3Gs2Da7DOT8RfDI1Rd4w5KnJyQY6pgGysBwq3RvAls9GcCThkDWouddVGZDsLs%2BK7Gwhydfc%2BcTz2foaKcF1kAJByS37W1lG7fSnH8gAad8oDBXQR89ag7KTd7XIK3R7vqJSoVHwe5tgbHeLgeNwXkghwQS2qvaGJ%2BIYD9eV3Yi2GDPw0%2BCUf%2BGBbKAU1eE6Osozk0jQCKuqIpG%2BpYSHZ%2Ftg4uE3fn%2FHYzhxAvNj%2B52dCEBmKrA8UzKcLsl2&X-Amz-Signature=1273bbbff50dc7bd68f9c8c3340e7bc5b840d979d35612d388250cfb03583cfc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627L6K7DW%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T054031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHA2TpBg3LX06Sdv%2F3Lm7zSXcEB8Yf%2BZ2gROjIM%2BhqxqAiBBFLrSCS74xWC3gOCu7TgWi2RtHSVmoLh9QwYntwsILir%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIM%2BCKRMWrbbXZaSxdnKtwDTKaxSi1PHn5oeesc9NYjIV240SO6LmH%2FuLTBlVq%2BXAcCJun0UWItbRovx8M985KKLThtFCpG4YAT%2FTd9emWODu8pnusQO5hozQtZYerFWSHDIGfAWzyKkiOaNyUdaA9quyOl6RtI4B6s4ht6YhDFaIwgPJaPsS5P0xl39dS5E5sxMJ9r%2BoX9HNdpsFiPgFt10wIWhgxaThXF3n3avOlZICJDIaCgZtEpLjsGyyuJdD9zE33DcsaD%2BbmRVwjhIJ%2FhqbqB5Lsm19EEb9Az%2By640B%2Fw0ZwTUrDYjJR1dID3zJtXx2c%2F4MrlY3uccN7hcCZcPJSqeEdhZXrFdQItiRKqmMRTI2mejeQOY91OfCZcs7Kkfm8G%2FAsXD5B0mphlL7qlg%2BlREL5GCG236Q6mYQOVHep6DRZJ1vqbfvKb1a0m4MdFAA%2Fp8sDO8buGaZVY1B2ra71oBUdTldfjWEgVz8Ayet05xVeXl9NgYor3NTbCGiG7mCdJkRrtl%2FACHpLz1GxCCEKEOJpyzFlgaRWf%2BBSFr8pdjJ8UJdCwtpA%2FmR1SiaVGHvHcbgMiM%2BPPmJ%2F81tiWuf%2FZMw26mBbkiKClaJtPHjWtCWSRTyijg4%2BCC36q3Gs2Da7DOT8RfDI1Rd4w5KnJyQY6pgGysBwq3RvAls9GcCThkDWouddVGZDsLs%2BK7Gwhydfc%2BcTz2foaKcF1kAJByS37W1lG7fSnH8gAad8oDBXQR89ag7KTd7XIK3R7vqJSoVHwe5tgbHeLgeNwXkghwQS2qvaGJ%2BIYD9eV3Yi2GDPw0%2BCUf%2BGBbKAU1eE6Osozk0jQCKuqIpG%2BpYSHZ%2Ftg4uE3fn%2FHYzhxAvNj%2B52dCEBmKrA8UzKcLsl2&X-Amz-Signature=62be012c20ed7b30edfb18296ba04a4d933fd84554529105636f47bac6f984fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

