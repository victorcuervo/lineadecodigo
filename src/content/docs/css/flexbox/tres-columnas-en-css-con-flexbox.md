---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7DLYD22%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T193129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtEwks8CA2kJZqLc1GGFS06Z80WZ8I4XuWiVFKM4Y2CAIhAKInFLuliSOnaUmtP9mXVObn%2Fldz%2BTmLqiZ9hzyB51%2BGKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2BvJh%2Birp9%2F7BxYcMq3AMw7ATWhmVFk3dC0XC4JcFmjQW1uMF7uctynxGrFTCR4FszywjHNCSZsklDj6uLu1IB2ZXIuIAY8n50A25RQ5h9oNY4pACFIu7kCQ5JZHZNYrPdoZhtI7%2BZOWy6QwOjC%2FLl8eyHYYquXHsLS180pK1ijtoC5WVCfTG%2BcvabbBQnI4hnmy3EeOqq8v2Stz9rUT2i5%2BkGJkEJfZBSDEug6Mt%2BeMfkPVB1nYosnyfch7hfPIwjyhVkMSubqnsv560P%2F9GuF4Ow4I6FS%2BO2iHo0Wem3%2BrbS1r%2FRkyuqrSKwDtOsSOEL4ErbLSToD%2B7bKr3HyzZd4pLSBfLIhUurupBSy1rTOe%2FqAc6w8POYCmSedXOC3X5OPTm8QKw%2Fn2N1v%2FK3asQQdXkPxhFWJi%2BWD8HdDrfw%2BDA0%2B7veLWlOoCDDhPuKweKrvZSAmnlEaKHrG%2F6M5KZkGVZrNeV1UWVCaJv2yHZ49GFOZpAbSYSVIOSyQ1%2B6PEaVuBuZ%2Fvl8H7otK8mFFZBx7rzTkNQ2XcwQQrjrTGksKew4SV4XJfYeLZIMNkihRfR0ximCv4RN7LNgJYvKvLrbbb14U7xsF78GtXsIHRXb3IoLaxPOdSNlAa11ltUmNUXVEQzLhzE8x%2Bca4jC6s9zJBjqkAQ39CoMTzf0HJRXX5HrSoopDZweYP8aTxgoCuvk8EOWj214XBBzXdEJiblKLRDZfLXmgFh2Tx2jb51n8xU7EnDg9WKoYU9kkTp3xZh7i0YYyrNpenCwUTVIUJkK956OiT9Fw9XZ4LOf2N3jBZSrsgBWK8%2FEBRfaFNEQMG9mT7Bs52y51P6Wxgiblp0W8t%2BCCLk1ImQ40FpA2VbNYGGZ0Ldr1IJAN&X-Amz-Signature=d3c05019041522920589f1281abedf9a69dc285493bbe016734fb3fc37835f4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7DLYD22%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T193129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtEwks8CA2kJZqLc1GGFS06Z80WZ8I4XuWiVFKM4Y2CAIhAKInFLuliSOnaUmtP9mXVObn%2Fldz%2BTmLqiZ9hzyB51%2BGKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2BvJh%2Birp9%2F7BxYcMq3AMw7ATWhmVFk3dC0XC4JcFmjQW1uMF7uctynxGrFTCR4FszywjHNCSZsklDj6uLu1IB2ZXIuIAY8n50A25RQ5h9oNY4pACFIu7kCQ5JZHZNYrPdoZhtI7%2BZOWy6QwOjC%2FLl8eyHYYquXHsLS180pK1ijtoC5WVCfTG%2BcvabbBQnI4hnmy3EeOqq8v2Stz9rUT2i5%2BkGJkEJfZBSDEug6Mt%2BeMfkPVB1nYosnyfch7hfPIwjyhVkMSubqnsv560P%2F9GuF4Ow4I6FS%2BO2iHo0Wem3%2BrbS1r%2FRkyuqrSKwDtOsSOEL4ErbLSToD%2B7bKr3HyzZd4pLSBfLIhUurupBSy1rTOe%2FqAc6w8POYCmSedXOC3X5OPTm8QKw%2Fn2N1v%2FK3asQQdXkPxhFWJi%2BWD8HdDrfw%2BDA0%2B7veLWlOoCDDhPuKweKrvZSAmnlEaKHrG%2F6M5KZkGVZrNeV1UWVCaJv2yHZ49GFOZpAbSYSVIOSyQ1%2B6PEaVuBuZ%2Fvl8H7otK8mFFZBx7rzTkNQ2XcwQQrjrTGksKew4SV4XJfYeLZIMNkihRfR0ximCv4RN7LNgJYvKvLrbbb14U7xsF78GtXsIHRXb3IoLaxPOdSNlAa11ltUmNUXVEQzLhzE8x%2Bca4jC6s9zJBjqkAQ39CoMTzf0HJRXX5HrSoopDZweYP8aTxgoCuvk8EOWj214XBBzXdEJiblKLRDZfLXmgFh2Tx2jb51n8xU7EnDg9WKoYU9kkTp3xZh7i0YYyrNpenCwUTVIUJkK956OiT9Fw9XZ4LOf2N3jBZSrsgBWK8%2FEBRfaFNEQMG9mT7Bs52y51P6Wxgiblp0W8t%2BCCLk1ImQ40FpA2VbNYGGZ0Ldr1IJAN&X-Amz-Signature=a691e7ebcc32f5becd19fad1d84feb1c616b88b6ecf6c5b256dfd04e61fc389a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

