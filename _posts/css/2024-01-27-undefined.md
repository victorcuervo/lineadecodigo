---
layout: post
title: Tres Columnas en CSS con Flexbox
excerpt: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
categories: CSS
tags: [css flexbox]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662E2VCVF%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T084857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJIMEYCIQCEn5If5pYYqGAhxwTIfkqGY8JX0gH4zvaaad55VjLFuQIhANtELMyGFw1382i7JBePU7ZTKD9IJmomiBFBXWtidS3KKv8DCCkQABoMNjM3NDIzMTgzODA1IgzOr68iLNbzPjxvMLIq3AOTY0r4T56lqkdFxigCY912GLn8Uy2x99CH%2BUzVabzHPDLH9Jn1quNhrZQGWWq6uN99v1kVhtJTaT1UXpRPxgEu4qaislpbFKublJ9cWM9jhrOAEKRDdx0Qlje6siKYmzHQ6L5kXjNYuH3alVpdeGlLHP%2BZmcsKAXpjsMpzz3WERA3BHxjzXXYoa5vu%2BXCairInb%2BCIkMfmBrXGtdGpN%2F4gUgVekbFa7tQgJYmQxWw6kJ3FmZOaVz1H6u5KqNx8sMSnrbUncmuElmp0EYC2Z7myr1Sv23s%2B2uoNumQ1pUd8LXw46o3jmFDAnpPyCWWwz6eywRmgq32%2Fovnoxl8szOkSzNfjbiJhWnKgt45DqHGi7OiLSVoHFF9cUj6lYOxU5XHIksPHHO6RUeIfE8mhbgMByxgpedid62lQfYfN2ApmfHhkJppsXMI06aZBDWHIkaW3oDl7I7qEYtIBC15%2Fu8cV4AVZu0f6SM7GwpujZpCTVPsCLZcUjmGYpCN0FWoT1ajNbft%2F6xNq%2BbiG0q5PrRLWLeXq%2BeIwnKLt1%2FkmedbCVd4irDsQ9cumgkD1rHomp6r%2F1a2ZL4h7jbXZkb2mud6Vu4t5bdnXpMa%2BM27gq%2BBmy3NDrC%2F5PHiazLzMyjDN1L%2FJBjqkAV4iGahyswMOHYn03x5PEau4zpZTSZNYitGFPQOAyJedWVvVKpu0H%2BV7NXUiWnJB7BERSRcjfIGIJopPzWekXFqgmlENXyeFkkSioJPqcoxvpgJBqFUX18AJBgGvp3rNYRjRMx7FOE5YsyfllMhcQ%2BW%2B5YDfaPK04E7i6Wrwa2%2FLAMjzYo3uhdItR2vbquR2I8UNMdWuLWlsNs9yKJgBcaWSIyho&X-Amz-Signature=06768b0d421fbc1beb4672dedd877e204a2a9bac2af8317b77ca6175078991f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662E2VCVF%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T084857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJIMEYCIQCEn5If5pYYqGAhxwTIfkqGY8JX0gH4zvaaad55VjLFuQIhANtELMyGFw1382i7JBePU7ZTKD9IJmomiBFBXWtidS3KKv8DCCkQABoMNjM3NDIzMTgzODA1IgzOr68iLNbzPjxvMLIq3AOTY0r4T56lqkdFxigCY912GLn8Uy2x99CH%2BUzVabzHPDLH9Jn1quNhrZQGWWq6uN99v1kVhtJTaT1UXpRPxgEu4qaislpbFKublJ9cWM9jhrOAEKRDdx0Qlje6siKYmzHQ6L5kXjNYuH3alVpdeGlLHP%2BZmcsKAXpjsMpzz3WERA3BHxjzXXYoa5vu%2BXCairInb%2BCIkMfmBrXGtdGpN%2F4gUgVekbFa7tQgJYmQxWw6kJ3FmZOaVz1H6u5KqNx8sMSnrbUncmuElmp0EYC2Z7myr1Sv23s%2B2uoNumQ1pUd8LXw46o3jmFDAnpPyCWWwz6eywRmgq32%2Fovnoxl8szOkSzNfjbiJhWnKgt45DqHGi7OiLSVoHFF9cUj6lYOxU5XHIksPHHO6RUeIfE8mhbgMByxgpedid62lQfYfN2ApmfHhkJppsXMI06aZBDWHIkaW3oDl7I7qEYtIBC15%2Fu8cV4AVZu0f6SM7GwpujZpCTVPsCLZcUjmGYpCN0FWoT1ajNbft%2F6xNq%2BbiG0q5PrRLWLeXq%2BeIwnKLt1%2FkmedbCVd4irDsQ9cumgkD1rHomp6r%2F1a2ZL4h7jbXZkb2mud6Vu4t5bdnXpMa%2BM27gq%2BBmy3NDrC%2F5PHiazLzMyjDN1L%2FJBjqkAV4iGahyswMOHYn03x5PEau4zpZTSZNYitGFPQOAyJedWVvVKpu0H%2BV7NXUiWnJB7BERSRcjfIGIJopPzWekXFqgmlENXyeFkkSioJPqcoxvpgJBqFUX18AJBgGvp3rNYRjRMx7FOE5YsyfllMhcQ%2BW%2B5YDfaPK04E7i6Wrwa2%2FLAMjzYo3uhdItR2vbquR2I8UNMdWuLWlsNs9yKJgBcaWSIyho&X-Amz-Signature=1f363e6bb9e8de79aee3f5e7e19fc362ac633bd3cafb5df0e4a6b825779be14f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

