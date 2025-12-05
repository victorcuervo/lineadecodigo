---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFBLRGWI%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T211903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCY4rAvwgEVreMosU9WkPjXP2Xr9ADW9INhw96vLC%2BJQIhANUdf4Trzr0NOLDGbxyRoFo8UbC3aJ6U9IpjfCaC9mmdKv8DCGEQABoMNjM3NDIzMTgzODA1IgzEskHwRW6aIVF%2Fr%2F4q3AOGF1ovlyoFdE2TKBHwdw0iBwctDVXlpiqiUf7wvnEfsgF2TH32nfz7qTsuJ7x3apC1wUNeLAvPykUd%2FnnnTMI5H8j5OTF2lIKuMY4YxzDKhRb6%2FnUDzS9NbyS4ZPP%2BkEusTIrEBEHOMfAWek7wB6sOkMg4PkMLg0fIm2UmBBDNKC5flWH%2B3g2ZokeT7hl4ODL7ET1vHqkWrMo5oRKlZ76TVxFSLjZHXNBumbjvSs0LAnljIQn9OQDKbUDKH5BzqTNH7%2F9RP1%2Fs7f0OSNul%2BCN%2Bd3ZpaD6vqz8PpsxLfkFLx7vBlIWbHql12MXAEFIfg8B3CEJ7qc5sJIoMff5Gf5v04DsMuORGU1OS%2BTODL2gfJtER8DOhJAOZQszr8Jwo58NDKOV%2BcYRzkOIkiFpjJELViOwtrgEdYgVwfevVzszFTgdlL%2BNjyU%2FV0udgtImmj7syn8t41tGjWQfCVT6EYYUhsY1knwkjkoYq0w1c%2BBWKBPZmtCOdfu%2F8Hss38FuqHWbw5UHdWx79htfbMpe%2FyNt9cf2i0fo%2F2k1zVVZCvPtj9vp4zFN%2Bi8d1IdVeN3HXnarBArHsouX5eXGsZNrWHmmXitmeMwhDlB7CbwJ2L%2B7%2Beu0F3BtkaWYg%2FRKEazCM88vJBjqkAdQJ%2B4IN5da4Uv1Nqkyx26jiiPYciSZY31y9%2B216pyQze0BVdJEa5xhW5FN3jt17nEYS91MaBmzomfeaItkhqJaQMOX%2BstNR0sQ6MOIx2rOp1PMtyyzcpYguit5RFjQ7M3%2FIDAofL7rFW3%2BU8Sbgs0JJTT3nMdspBYXFQZpKqVpbAb%2BZKLECsuZWLj3l3OeUGiUnac%2FUJcHeOOJHTdIqRmTN9RW%2F&X-Amz-Signature=153044a98b942f4801874ab2088f214a32ab169758c33b4ba9a0a081da507760&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFBLRGWI%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T211903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCY4rAvwgEVreMosU9WkPjXP2Xr9ADW9INhw96vLC%2BJQIhANUdf4Trzr0NOLDGbxyRoFo8UbC3aJ6U9IpjfCaC9mmdKv8DCGEQABoMNjM3NDIzMTgzODA1IgzEskHwRW6aIVF%2Fr%2F4q3AOGF1ovlyoFdE2TKBHwdw0iBwctDVXlpiqiUf7wvnEfsgF2TH32nfz7qTsuJ7x3apC1wUNeLAvPykUd%2FnnnTMI5H8j5OTF2lIKuMY4YxzDKhRb6%2FnUDzS9NbyS4ZPP%2BkEusTIrEBEHOMfAWek7wB6sOkMg4PkMLg0fIm2UmBBDNKC5flWH%2B3g2ZokeT7hl4ODL7ET1vHqkWrMo5oRKlZ76TVxFSLjZHXNBumbjvSs0LAnljIQn9OQDKbUDKH5BzqTNH7%2F9RP1%2Fs7f0OSNul%2BCN%2Bd3ZpaD6vqz8PpsxLfkFLx7vBlIWbHql12MXAEFIfg8B3CEJ7qc5sJIoMff5Gf5v04DsMuORGU1OS%2BTODL2gfJtER8DOhJAOZQszr8Jwo58NDKOV%2BcYRzkOIkiFpjJELViOwtrgEdYgVwfevVzszFTgdlL%2BNjyU%2FV0udgtImmj7syn8t41tGjWQfCVT6EYYUhsY1knwkjkoYq0w1c%2BBWKBPZmtCOdfu%2F8Hss38FuqHWbw5UHdWx79htfbMpe%2FyNt9cf2i0fo%2F2k1zVVZCvPtj9vp4zFN%2Bi8d1IdVeN3HXnarBArHsouX5eXGsZNrWHmmXitmeMwhDlB7CbwJ2L%2B7%2Beu0F3BtkaWYg%2FRKEazCM88vJBjqkAdQJ%2B4IN5da4Uv1Nqkyx26jiiPYciSZY31y9%2B216pyQze0BVdJEa5xhW5FN3jt17nEYS91MaBmzomfeaItkhqJaQMOX%2BstNR0sQ6MOIx2rOp1PMtyyzcpYguit5RFjQ7M3%2FIDAofL7rFW3%2BU8Sbgs0JJTT3nMdspBYXFQZpKqVpbAb%2BZKLECsuZWLj3l3OeUGiUnac%2FUJcHeOOJHTdIqRmTN9RW%2F&X-Amz-Signature=9472a2d00a5c7343e64bac2b22d2c3b843b04a83083d98b6765a251f0dbe72af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

