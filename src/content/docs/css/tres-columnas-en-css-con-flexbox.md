---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4LRW4A5%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T225450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQDsxayo5wGaoPDvIYG8ywXXzJH93j6CH2%2FUDyf%2BuMoHsgIhAOvmTP5OOTmx8WMYngXTMdV0BE10hGeCS6aqKxW1gi1cKv8DCDgQABoMNjM3NDIzMTgzODA1IgyjuTPUbfqF%2FEChhlYq3ANhvIMuEXRSsBqpUFtDh1aAtEI3xOzPzmQSFQr51mI%2FoGNbpjx6RtUhfOBi0fmPQsMd4QrIT0%2FshilsvZXNolLe2LUO%2Bl1%2FgI9iZ1anriK%2Fv8YH3rpHmFOteSeonXEnudLfcBf5OmhKHirZ%2FUZFeoG9CKNYfiFlC0WTsiBFl5PI9oGV49qUw5PNYVw63e3MRr%2Fx%2FQo2f38VVv0RFkCb6lvRrAyzM6dxeoFZjwyFoSYfpPR3N20LKWuApQzuTqSzUAyL1KhysvS8ffj2KUwfsHthlSyJSU%2FPj1hUGS87dclUJyG51ti2TFOyJHUdnao2Nhp%2ButSw%2BSZKpiRj0BCzyDlWf9YR6OAXr2iHD%2FL%2Fl0BsemLEJjxmItKCPkOD0BGAXYjLtuSewrjaFFBW9XEs9rNFQyisJHXGA0xMTGzgMYEXNDHHJ%2BYaQ9ChdETmb7u0Ds3LLvvywGniSefmKHC5KTPW%2BV0pRdAa53Y8nBgrcBpQYIZkkgqNU4ZVXaivIu9yd7OLlRSmU67M8uHPcgw8PxKzMIhtxm8aJ%2BmzT9G0CUL900y%2FWtry9w867QMpbUUlodU6RIKcM%2Bb3FR1lM4nVaNY47LFpyXG1St79p2GrBTQWIAL6Kpk7yHKEqXs1NzDO%2BMLJBjqkAfW90o1yiAFyAqdNTeRbpk6NNgpKtIm%2FI1j4W7SBsmjx%2B0gEAZA8xgKO%2B8BMuYA3xGKPTLglyKgQ5y7059johqQCNnhEFA2ItjFB4omm6siiSulm16TMRhPebJsUyl4Rvxhqz%2BkKzRyPujvi3yFD7ENWqYfhuZ%2BYjnIssLJcyTsS4fxqlemueUh64Z29zNQFAuoXW%2FhY2pbEITQhBhnMY2sWvNMt&X-Amz-Signature=500f4d7e42dbeaefda5441c9c319da07a06b3ed453a898c0467686a47f887690&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4LRW4A5%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T225450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQDsxayo5wGaoPDvIYG8ywXXzJH93j6CH2%2FUDyf%2BuMoHsgIhAOvmTP5OOTmx8WMYngXTMdV0BE10hGeCS6aqKxW1gi1cKv8DCDgQABoMNjM3NDIzMTgzODA1IgyjuTPUbfqF%2FEChhlYq3ANhvIMuEXRSsBqpUFtDh1aAtEI3xOzPzmQSFQr51mI%2FoGNbpjx6RtUhfOBi0fmPQsMd4QrIT0%2FshilsvZXNolLe2LUO%2Bl1%2FgI9iZ1anriK%2Fv8YH3rpHmFOteSeonXEnudLfcBf5OmhKHirZ%2FUZFeoG9CKNYfiFlC0WTsiBFl5PI9oGV49qUw5PNYVw63e3MRr%2Fx%2FQo2f38VVv0RFkCb6lvRrAyzM6dxeoFZjwyFoSYfpPR3N20LKWuApQzuTqSzUAyL1KhysvS8ffj2KUwfsHthlSyJSU%2FPj1hUGS87dclUJyG51ti2TFOyJHUdnao2Nhp%2ButSw%2BSZKpiRj0BCzyDlWf9YR6OAXr2iHD%2FL%2Fl0BsemLEJjxmItKCPkOD0BGAXYjLtuSewrjaFFBW9XEs9rNFQyisJHXGA0xMTGzgMYEXNDHHJ%2BYaQ9ChdETmb7u0Ds3LLvvywGniSefmKHC5KTPW%2BV0pRdAa53Y8nBgrcBpQYIZkkgqNU4ZVXaivIu9yd7OLlRSmU67M8uHPcgw8PxKzMIhtxm8aJ%2BmzT9G0CUL900y%2FWtry9w867QMpbUUlodU6RIKcM%2Bb3FR1lM4nVaNY47LFpyXG1St79p2GrBTQWIAL6Kpk7yHKEqXs1NzDO%2BMLJBjqkAfW90o1yiAFyAqdNTeRbpk6NNgpKtIm%2FI1j4W7SBsmjx%2B0gEAZA8xgKO%2B8BMuYA3xGKPTLglyKgQ5y7059johqQCNnhEFA2ItjFB4omm6siiSulm16TMRhPebJsUyl4Rvxhqz%2BkKzRyPujvi3yFD7ENWqYfhuZ%2BYjnIssLJcyTsS4fxqlemueUh64Z29zNQFAuoXW%2FhY2pbEITQhBhnMY2sWvNMt&X-Amz-Signature=5609b64e87258e1ef98fd29ee527e2d4438fcf45a20b215ee97976e2ee087f23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

