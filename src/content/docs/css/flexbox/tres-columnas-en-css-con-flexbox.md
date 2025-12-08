---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNSCBUXO%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T150923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDg9WEb%2BoFu5v9gv2xAnJhpzqIY96ntWY%2BnGF%2BIy9RA8QIgWTFI7BAhIlSK6gCM3pP1TbrP2w3Tu2U26EteYFHvw9MqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHgNC1CBI9K%2BC2xY0ircAwqrFZU5KRUFQmXYIu7fdjoXle3I1dIki26C9jbEvKgcsQTHSA%2F1zI%2FBVAnC%2Fp5S3jxR3exUAKDSvQ%2FgnDHH6E5BwCzT2sn06kXA1c1KkZ2UDp5oqTdzqsTWD%2BWVassP8Cy71GUxulbif%2BMZHIcLVzsLu%2B1v3UO3O7twvunufeHvsdP4EibTcivck1wInBZiz2Qb0XCzVCUTQTV3nZcnN709I4JZy96OG%2B%2BNoSXfS74vk2U0lQrc5V93skmdvvg7zPLo6skyCHiTLc3qr8Kq7VdvqwfdEs5F0qI%2FDLzL86DsmDBHAQP1MsYUlMfghsrgHRw6IeBoeIKA1Hu2hW1j6JzIS2XwjSRTt4rmBt0gEBT%2FveDlXKkhJG5ZtlO%2BlXpt2yd5YfEr6gu3CtAx2kKRtZhkF3A77HJsnpHtYvnkr%2BjS2OI7n1RijcZ5PFo869KuA9YF79haDe7u8hMsog1NrPtviVLHLgy7Q6geKFqymYjq01OmdeT3Vc4AuzqOSo7WrrDqWaghCe6Vv5SWgfJIvUszEsBMmLU32qxIsJaPG5xGddTDDwsmpJBPLG0USwDE4WMVQpO59h%2BwPsfMa8ScuONq7yhjy2nwnbNH%2F6Pa8MhV6CSU%2Buf1SLxTMuPYMK7B28kGOqUBI6pgVchiQFCgBAmfzdJSDKkDCrR8smc1f4T7eIcDKUWn5UOwBOgiz9B7BZzrXXGGd9w3%2FtzZKpLWQOZ44G1rP4bxeqq10dhZFBjh6%2BAUpdo%2FVLDDDyJdjmLoaHC9EZ0%2Bca8ESNOpTmqdeUkDF3eTz2mxx4y%2BjCitV%2BMGynyLHPBqoJ9e4sR4mWab6MdVwBk7tYCPv%2BLVzSA4onXTvp4eDAwPJ0nb&X-Amz-Signature=1b22abd06837b87a78f18f60ce95e88912ef6e0169f244e26d2d406c6520c4e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNSCBUXO%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T150923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDg9WEb%2BoFu5v9gv2xAnJhpzqIY96ntWY%2BnGF%2BIy9RA8QIgWTFI7BAhIlSK6gCM3pP1TbrP2w3Tu2U26EteYFHvw9MqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHgNC1CBI9K%2BC2xY0ircAwqrFZU5KRUFQmXYIu7fdjoXle3I1dIki26C9jbEvKgcsQTHSA%2F1zI%2FBVAnC%2Fp5S3jxR3exUAKDSvQ%2FgnDHH6E5BwCzT2sn06kXA1c1KkZ2UDp5oqTdzqsTWD%2BWVassP8Cy71GUxulbif%2BMZHIcLVzsLu%2B1v3UO3O7twvunufeHvsdP4EibTcivck1wInBZiz2Qb0XCzVCUTQTV3nZcnN709I4JZy96OG%2B%2BNoSXfS74vk2U0lQrc5V93skmdvvg7zPLo6skyCHiTLc3qr8Kq7VdvqwfdEs5F0qI%2FDLzL86DsmDBHAQP1MsYUlMfghsrgHRw6IeBoeIKA1Hu2hW1j6JzIS2XwjSRTt4rmBt0gEBT%2FveDlXKkhJG5ZtlO%2BlXpt2yd5YfEr6gu3CtAx2kKRtZhkF3A77HJsnpHtYvnkr%2BjS2OI7n1RijcZ5PFo869KuA9YF79haDe7u8hMsog1NrPtviVLHLgy7Q6geKFqymYjq01OmdeT3Vc4AuzqOSo7WrrDqWaghCe6Vv5SWgfJIvUszEsBMmLU32qxIsJaPG5xGddTDDwsmpJBPLG0USwDE4WMVQpO59h%2BwPsfMa8ScuONq7yhjy2nwnbNH%2F6Pa8MhV6CSU%2Buf1SLxTMuPYMK7B28kGOqUBI6pgVchiQFCgBAmfzdJSDKkDCrR8smc1f4T7eIcDKUWn5UOwBOgiz9B7BZzrXXGGd9w3%2FtzZKpLWQOZ44G1rP4bxeqq10dhZFBjh6%2BAUpdo%2FVLDDDyJdjmLoaHC9EZ0%2Bca8ESNOpTmqdeUkDF3eTz2mxx4y%2BjCitV%2BMGynyLHPBqoJ9e4sR4mWab6MdVwBk7tYCPv%2BLVzSA4onXTvp4eDAwPJ0nb&X-Amz-Signature=833fb35a8d543776a98c55f7f4a0f461facbfbe47ed10db2f48431a129bec2df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

