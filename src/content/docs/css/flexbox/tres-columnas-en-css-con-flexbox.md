---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645A6SM4L%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T143624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIS4TGpVtR8jngrwt2nTkGyF0prywgdeJpoSCnEVH1PAIgFf8vDOjdSLiyx7oI%2B%2FZa85gR14NYdYhiyGUYqSTtRTAq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDLy6OkzmZRNq%2FQYPxCrcA5P93huspyEcSBCpPNWG8XPKdLgVAiorspQbdS0qY1CJ1D0tjtFwLju5y0adu%2BI%2Bka%2FJWbigy2MlvPDp3ibt7L0fp7B5qnCq5qQybutdohWaqPdhLyv7r%2B8LH10nzscUDk6tPZKu2oBAOk1F%2BFpIU6zv1kYHbv6YOHs1Ct03Ckdo0hLLSjtE46xoActYSms020vayBiN7vADxmCl5rxauZkXxIx%2BsSA7fejHOarBQNu0yPlRdkvR5bffuXjpn6NKTSWnrTVn5%2BMNubvQCddxyPeTKHZdAmHnNjOWK%2FQKnugiOwwc1C4KTmg6sHukox3%2BmiCYG1Pf3hJiPZxWlPNbJ%2FEVlNyJxbFcSp7dwbYtA2KNnfc2%2BXCOdC2XBecgotysCqmKQ%2FmnQ5rqQ%2Fd%2F3kpOqEaTF3n1AIxuQUpCymBIwwxvbnu3HA3Wg1T57zzh0Xqe0QzOkVNz0nSbu%2FjKy%2FZ8cJ27zZenqzih86wTyofQtmc1sdyqBr%2FUFvE7KqgoHIUZ%2BxdsQ9ovPvu%2BfFng3W1%2BZ1p1A9VobkpjJU929gflG2W%2BZn1ul0uzxVD8eEkP808xBnhGvusWuUQyU7OtClJhS2%2Bn3THQonUky6EwODzysNEUUb%2FBJdrdKDZ3U1AZMKOm0MkGOqUBV8zjIapqmRhAmbLTfdB3%2FU5Ks7dTQs11RLBMliznqKmpg3Swuxc0730B72pmWXB%2Bxq7%2B%2F5hw5%2BCm1d17TQLXr%2FYFdlguc%2BJp5lO41HUDBOrlmG3Fo49MSDuTuHY%2BNTCSh0l9uK6ws1yhGaHhRF8HnAtRQVwXTJh8gFIfE3vadM%2Fuly1Ioqg5rlzKstAX92SNaoH8RQWTd%2B41J47aWK%2Ff9OlH7OUg&X-Amz-Signature=a6305ad2f941fbc91958aaf964f88be8792b57d1ab3c3ead166fe09490a63e74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645A6SM4L%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T143624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIS4TGpVtR8jngrwt2nTkGyF0prywgdeJpoSCnEVH1PAIgFf8vDOjdSLiyx7oI%2B%2FZa85gR14NYdYhiyGUYqSTtRTAq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDLy6OkzmZRNq%2FQYPxCrcA5P93huspyEcSBCpPNWG8XPKdLgVAiorspQbdS0qY1CJ1D0tjtFwLju5y0adu%2BI%2Bka%2FJWbigy2MlvPDp3ibt7L0fp7B5qnCq5qQybutdohWaqPdhLyv7r%2B8LH10nzscUDk6tPZKu2oBAOk1F%2BFpIU6zv1kYHbv6YOHs1Ct03Ckdo0hLLSjtE46xoActYSms020vayBiN7vADxmCl5rxauZkXxIx%2BsSA7fejHOarBQNu0yPlRdkvR5bffuXjpn6NKTSWnrTVn5%2BMNubvQCddxyPeTKHZdAmHnNjOWK%2FQKnugiOwwc1C4KTmg6sHukox3%2BmiCYG1Pf3hJiPZxWlPNbJ%2FEVlNyJxbFcSp7dwbYtA2KNnfc2%2BXCOdC2XBecgotysCqmKQ%2FmnQ5rqQ%2Fd%2F3kpOqEaTF3n1AIxuQUpCymBIwwxvbnu3HA3Wg1T57zzh0Xqe0QzOkVNz0nSbu%2FjKy%2FZ8cJ27zZenqzih86wTyofQtmc1sdyqBr%2FUFvE7KqgoHIUZ%2BxdsQ9ovPvu%2BfFng3W1%2BZ1p1A9VobkpjJU929gflG2W%2BZn1ul0uzxVD8eEkP808xBnhGvusWuUQyU7OtClJhS2%2Bn3THQonUky6EwODzysNEUUb%2FBJdrdKDZ3U1AZMKOm0MkGOqUBV8zjIapqmRhAmbLTfdB3%2FU5Ks7dTQs11RLBMliznqKmpg3Swuxc0730B72pmWXB%2Bxq7%2B%2F5hw5%2BCm1d17TQLXr%2FYFdlguc%2BJp5lO41HUDBOrlmG3Fo49MSDuTuHY%2BNTCSh0l9uK6ws1yhGaHhRF8HnAtRQVwXTJh8gFIfE3vadM%2Fuly1Ioqg5rlzKstAX92SNaoH8RQWTd%2B41J47aWK%2Ff9OlH7OUg&X-Amz-Signature=456cdf78a25bcee334befa30fdf5e235eec05e6179db91519241a71fec65b100&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

