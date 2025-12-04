---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7TBPGB2%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T093615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCIFPWGwXFodJy6rKu3RVaOsllhPKgVY5EE057rtoSheqyAiBNa2zgW1Z2IJoxbPoBN%2FaI%2Ff5WHOj76DxRewD0nkGUDCr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMgmqMIbXwttU%2FZDvPKtwDUOHOKeCMiucUxbrdnv8pKUWHE2wIcpJdkai5w24AZTAcKmcIkKQpZJKH2%2FmAXMPAUKZr5Dek%2B74KpUxgDTGt2i%2FLDs%2BiXzA4b98V6H0h72%2F1QTlwRsrMB8iKYcz4LG0Ngmy9Ln7W7BrlnvukOq%2FD9q7KRQ6AA9Gu%2FB0mbSaNQk0HdFZBUbr4Y%2F8MIy1rpmqi9NXsq3X55kECdNgU9X8MGv%2B35yhRbYnYFQInqSDydW0aspTq5DCXJnfdihymyo1REOn81my8eYze%2FDjyv5erR39x%2FljtMYn0ctm%2BWUrQFsA6GY6X6VqjKcUj3qKj%2F3acISXsyjVK0nVaUxf1B0n30aXYy3W2wr0MOw20w03%2FeeE%2FR0xCa%2Fx4n3Y0HnCc9l39n0w0AwK%2B5Di%2Bqy18mdpYO%2BVjBaRWyrYPAA87ICsz2kVkxKZ9gKQ0sqolHCvnbygXlXU71JhEElo9qDqgtfWvlQ%2Fx%2FtwkFOtHCdD4GQqGMIHdYCf98xCqBv1JmRmUI%2BzXA6DBjqDpn6P04S9SMxu8FAcKftfdBRgW3DxqHAwoJwHvqNaJJRTWSAODrV2%2F8DD6lSAvfudaR3YrmFRe7MyEx7lhRe6Y3EZEHE0xbrX88xKi47ptUmhBlFRKwsMwkIbFyQY6pgEGn1f703D4QYp%2FJJZLFK7Ss0fLKrniGbowS7BV7TpOL%2BCKHs5stg0Lk7JZXmbBvVIIaoHC6AtlV16FssDRO0jsI%2FPWyJZx%2B8obLYcy9QlgplT2EBmWovQHIAe0mWiJNkMq%2Fu2yIQ%2BENvHPldbX2GpIwzgWmyhtx8ZlPoZMI%2BiHQaaY%2BAMgPRbdIL9%2B0PfwE222sYByokEi4M%2F4IOdVzb91AHewYFHA&X-Amz-Signature=5c527b9db007db76e088df36284dde5d574997a0da172caecd1174a504020c55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7TBPGB2%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T093615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCIFPWGwXFodJy6rKu3RVaOsllhPKgVY5EE057rtoSheqyAiBNa2zgW1Z2IJoxbPoBN%2FaI%2Ff5WHOj76DxRewD0nkGUDCr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMgmqMIbXwttU%2FZDvPKtwDUOHOKeCMiucUxbrdnv8pKUWHE2wIcpJdkai5w24AZTAcKmcIkKQpZJKH2%2FmAXMPAUKZr5Dek%2B74KpUxgDTGt2i%2FLDs%2BiXzA4b98V6H0h72%2F1QTlwRsrMB8iKYcz4LG0Ngmy9Ln7W7BrlnvukOq%2FD9q7KRQ6AA9Gu%2FB0mbSaNQk0HdFZBUbr4Y%2F8MIy1rpmqi9NXsq3X55kECdNgU9X8MGv%2B35yhRbYnYFQInqSDydW0aspTq5DCXJnfdihymyo1REOn81my8eYze%2FDjyv5erR39x%2FljtMYn0ctm%2BWUrQFsA6GY6X6VqjKcUj3qKj%2F3acISXsyjVK0nVaUxf1B0n30aXYy3W2wr0MOw20w03%2FeeE%2FR0xCa%2Fx4n3Y0HnCc9l39n0w0AwK%2B5Di%2Bqy18mdpYO%2BVjBaRWyrYPAA87ICsz2kVkxKZ9gKQ0sqolHCvnbygXlXU71JhEElo9qDqgtfWvlQ%2Fx%2FtwkFOtHCdD4GQqGMIHdYCf98xCqBv1JmRmUI%2BzXA6DBjqDpn6P04S9SMxu8FAcKftfdBRgW3DxqHAwoJwHvqNaJJRTWSAODrV2%2F8DD6lSAvfudaR3YrmFRe7MyEx7lhRe6Y3EZEHE0xbrX88xKi47ptUmhBlFRKwsMwkIbFyQY6pgEGn1f703D4QYp%2FJJZLFK7Ss0fLKrniGbowS7BV7TpOL%2BCKHs5stg0Lk7JZXmbBvVIIaoHC6AtlV16FssDRO0jsI%2FPWyJZx%2B8obLYcy9QlgplT2EBmWovQHIAe0mWiJNkMq%2Fu2yIQ%2BENvHPldbX2GpIwzgWmyhtx8ZlPoZMI%2BiHQaaY%2BAMgPRbdIL9%2B0PfwE222sYByokEi4M%2F4IOdVzb91AHewYFHA&X-Amz-Signature=4bbd62d3dd2584c82ff1e4dfd5a413356a1d26e68a99747e01ec26eedf6cb1b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

