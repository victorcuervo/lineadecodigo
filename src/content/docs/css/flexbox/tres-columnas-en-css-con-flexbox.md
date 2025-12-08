---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V72HY6MO%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T201419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGE26dhABXCm4vF3Cvx9amPsqw7o68sYV%2FCLrtAfHdMQIhANRnsX1x%2FSoV0Ff2hQaJmdzFH9TVk3MVufJvhz6T6utvKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzkgsNLd34oedE%2FtDsq3AOj8fgVQUwQEMsjjSKP4%2BXRfhcWItPtdRGzrLae2LBPO514hzfm2LGD%2B13eLcxknOmI%2FnZ1C68Vjewud3LnuVYzl%2BWEMQShuv0WeEfo6X%2FGFd06czI%2FH36eqOckd98i9WWKyRNvzxR4r0V9vKG7gRAQC464g0WJseFpqLWjiWuGnGOUmMNI2FtXVhZWVEK6CqaQxfZZEaliNhphBRk8RdF27Xq%2FOegbSj5owh%2F4f3sT%2FH5mTtezF6jfl7SEYxvkmarmuZM%2BGrTlBdoY358JZ6JmWOlnkBAU4VGV%2BpaeDzpdQQeX32cBB6BHHamZO1e%2BM5yNSupl6yrycESH6fbPiiMVn4v25grrIc%2BZjHbWisYmpm1QpySz5UuT0jmEtUj0dVPDcKCzZcA47H50jc2GYPJpzTh4XQW9br5X0UxEn7qt8%2Bxq75BY6fhEKd%2FTwyItF0EfqgKNioBQDcS5Y%2FYvuE6wufCSJ1WFeUrcFv7zTa8KGPpSZh%2FxuPBbyQS8vOpMa4RXBG9ghi8TNnlBG0CWs6AW20VZw%2FRp2%2FqjOHDeAVf3Z1T%2BxiDvPVH6%2FAkYk6IPu759WpwnY5NgXw%2FpEKRS%2F4sP5Ae%2F1ivRpD84cfm35awtXLVK1q6LeKaAuYMw9jCO3dzJBjqkAYPg4Ad9DQCm4e9Qq0mOlrS4aYY9uJ3b%2BUVlEIBlUTYle6SaJvQWZhhtrP1w3%2BmWY4YDsW%2BcsoEfpKjPu5%2B3WzYWUxzKZK%2FWeBJZqTjNcnK8vJXr1yCaVB%2FRnCoBrlBxSq13JU07i%2FSx3Cpslk4vAYlfKOtwAU7jU0JwZYpbqN7snP3ytZgjlxgCxM58gbg8HOLQZjVuMgiLLYX8nzySHS3ecXSk&X-Amz-Signature=57edad2943a23c60325dd050151b4d09eb6b3d00a820248c85d34ec61c64bd94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V72HY6MO%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T201419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGE26dhABXCm4vF3Cvx9amPsqw7o68sYV%2FCLrtAfHdMQIhANRnsX1x%2FSoV0Ff2hQaJmdzFH9TVk3MVufJvhz6T6utvKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzkgsNLd34oedE%2FtDsq3AOj8fgVQUwQEMsjjSKP4%2BXRfhcWItPtdRGzrLae2LBPO514hzfm2LGD%2B13eLcxknOmI%2FnZ1C68Vjewud3LnuVYzl%2BWEMQShuv0WeEfo6X%2FGFd06czI%2FH36eqOckd98i9WWKyRNvzxR4r0V9vKG7gRAQC464g0WJseFpqLWjiWuGnGOUmMNI2FtXVhZWVEK6CqaQxfZZEaliNhphBRk8RdF27Xq%2FOegbSj5owh%2F4f3sT%2FH5mTtezF6jfl7SEYxvkmarmuZM%2BGrTlBdoY358JZ6JmWOlnkBAU4VGV%2BpaeDzpdQQeX32cBB6BHHamZO1e%2BM5yNSupl6yrycESH6fbPiiMVn4v25grrIc%2BZjHbWisYmpm1QpySz5UuT0jmEtUj0dVPDcKCzZcA47H50jc2GYPJpzTh4XQW9br5X0UxEn7qt8%2Bxq75BY6fhEKd%2FTwyItF0EfqgKNioBQDcS5Y%2FYvuE6wufCSJ1WFeUrcFv7zTa8KGPpSZh%2FxuPBbyQS8vOpMa4RXBG9ghi8TNnlBG0CWs6AW20VZw%2FRp2%2FqjOHDeAVf3Z1T%2BxiDvPVH6%2FAkYk6IPu759WpwnY5NgXw%2FpEKRS%2F4sP5Ae%2F1ivRpD84cfm35awtXLVK1q6LeKaAuYMw9jCO3dzJBjqkAYPg4Ad9DQCm4e9Qq0mOlrS4aYY9uJ3b%2BUVlEIBlUTYle6SaJvQWZhhtrP1w3%2BmWY4YDsW%2BcsoEfpKjPu5%2B3WzYWUxzKZK%2FWeBJZqTjNcnK8vJXr1yCaVB%2FRnCoBrlBxSq13JU07i%2FSx3Cpslk4vAYlfKOtwAU7jU0JwZYpbqN7snP3ytZgjlxgCxM58gbg8HOLQZjVuMgiLLYX8nzySHS3ecXSk&X-Amz-Signature=4c293de9b656a4f967ed1c4420ca0062d42043911b850bf96fe48d1350c42287&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

