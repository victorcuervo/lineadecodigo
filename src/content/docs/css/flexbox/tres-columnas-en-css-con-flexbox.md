---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652YAD7VI%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T211457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6u%2Bcgx5m0p1v%2FOm1JuJ0bs%2FGFtYtQOA6ENJpQay2XvAIhANfQHoDGBwobhDgyHgGVQ4GQwjGwcezBMo72%2BDoYKsWrKv8DCHoQABoMNjM3NDIzMTgzODA1IgwbywRhz29FJvXhx0gq3APcE8wMQiW2VQPuS3HV7GW%2FhpxYSLWMbvqXlBzk5EhAv1W6RbCp3y%2FFKMBnbj88xKnT3DpeH31ZcY%2F9WySWoqHIfkoP5vMnCvVsh%2FYYwHSoiV89eCUyHmfjY0iRiPjV7QMheeXQb1ms6syyzCj3q7uO5O1qyALd0WTipyap8sUFWLp%2FdI1HlxbjfILp9ChENG1FAY6yLO5Vn3WjShFtMK2UslSKYSHi8dZVfl%2BDFSLervS1laFJdEMrzTS6li6xZXY1AYkWUSKvAJwVEmjyIAcI%2F5HVwdFpY6649wz51RVj0AL0%2Bhp7eeSwmitaOylNQOHiu97IwdQEt5B8V1guJdyTyrmr%2F8rSgYHgpll%2BemjHvziNqaprgeUqFRu2mH7h1uirZ1od%2BrXVoN9mQ%2F41g%2Bzd88ZQkEJgSn5xetbYka%2FTI55Ybv5Ur6zzpoJTQMeHX5si2XuUjXcROV9oCBsxlxrMcNf8FZ22EDa7dAcxPXOiPBwje%2FV6kpU9GZazBGbGlKqJY1XsCtXt9fZUKEyD3ObbbaGoyrnVTmi8UJqzlCaJMhM0S4tbDO24k6%2BuptvSFR%2BnK0SxH9GOj8A2h9uQkGg1K3%2Fo097O%2BCXKqTgZPBEdaD4c1UdxLg%2Boa3%2BsGDDRy9HJBjqkAYrxrVl9Dz08i6u1b7Cl09Xs3HzfMVmK9yIWltwSveHSURePr6AdEXNOFiAULzYavvuEC0HBKCYZjuJVrVJMeXaJWagYpAZ0TGcUCnAimMVkbzG8LKXEmh85hRSOITxcvrdHcBSwN07Ttd4vweJTSZ02rzp8Fb7SVbLN9awn85S2zeRZm5nkvE1%2BTY9GUGhncIPgDv%2B4gGzDprymj%2FohO9lkSgyN&X-Amz-Signature=baccc68adfbaf14698f728b8785016d307c57f08582235a0f49c91cd7b0d9d30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652YAD7VI%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T211457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6u%2Bcgx5m0p1v%2FOm1JuJ0bs%2FGFtYtQOA6ENJpQay2XvAIhANfQHoDGBwobhDgyHgGVQ4GQwjGwcezBMo72%2BDoYKsWrKv8DCHoQABoMNjM3NDIzMTgzODA1IgwbywRhz29FJvXhx0gq3APcE8wMQiW2VQPuS3HV7GW%2FhpxYSLWMbvqXlBzk5EhAv1W6RbCp3y%2FFKMBnbj88xKnT3DpeH31ZcY%2F9WySWoqHIfkoP5vMnCvVsh%2FYYwHSoiV89eCUyHmfjY0iRiPjV7QMheeXQb1ms6syyzCj3q7uO5O1qyALd0WTipyap8sUFWLp%2FdI1HlxbjfILp9ChENG1FAY6yLO5Vn3WjShFtMK2UslSKYSHi8dZVfl%2BDFSLervS1laFJdEMrzTS6li6xZXY1AYkWUSKvAJwVEmjyIAcI%2F5HVwdFpY6649wz51RVj0AL0%2Bhp7eeSwmitaOylNQOHiu97IwdQEt5B8V1guJdyTyrmr%2F8rSgYHgpll%2BemjHvziNqaprgeUqFRu2mH7h1uirZ1od%2BrXVoN9mQ%2F41g%2Bzd88ZQkEJgSn5xetbYka%2FTI55Ybv5Ur6zzpoJTQMeHX5si2XuUjXcROV9oCBsxlxrMcNf8FZ22EDa7dAcxPXOiPBwje%2FV6kpU9GZazBGbGlKqJY1XsCtXt9fZUKEyD3ObbbaGoyrnVTmi8UJqzlCaJMhM0S4tbDO24k6%2BuptvSFR%2BnK0SxH9GOj8A2h9uQkGg1K3%2Fo097O%2BCXKqTgZPBEdaD4c1UdxLg%2Boa3%2BsGDDRy9HJBjqkAYrxrVl9Dz08i6u1b7Cl09Xs3HzfMVmK9yIWltwSveHSURePr6AdEXNOFiAULzYavvuEC0HBKCYZjuJVrVJMeXaJWagYpAZ0TGcUCnAimMVkbzG8LKXEmh85hRSOITxcvrdHcBSwN07Ttd4vweJTSZ02rzp8Fb7SVbLN9awn85S2zeRZm5nkvE1%2BTY9GUGhncIPgDv%2B4gGzDprymj%2FohO9lkSgyN&X-Amz-Signature=0bbd072f6cba2f88eca55476705b3205e047abff2fa66e6c8686ba33cd9b797c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

