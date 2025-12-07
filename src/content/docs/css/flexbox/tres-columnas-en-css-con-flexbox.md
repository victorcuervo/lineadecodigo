---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GMC2SQG%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T082239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBEzRbxBzHEspMhckJkVZq%2FDXhLi9rv3UFDTeoDNvM8JAiEAqIlY4z8vwCujL4eaNPXvNxdKP9%2BB2RJML0prlJ8ATcgqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGv69JQwWvqXiBZOpCrcAzf1GorkE5WR1ZRNuTNFSrDX7IOLRpFRxpPmJ9HazpHZT1z2%2FAUMLx8yb4350RRjPTSfWSDVhkstehuO%2BSAnvd6uUifJ8w5n5teJ7u8VFX6IXf15vhCQ9Rjw3PrqtjlNxbslxy%2F34eN%2FeJwK4vYv3vSnvIoP3WbOj3%2BBduAOWsxmYK48%2FXhbN27yCeHTmADcQheTPTKk00bIi9mn%2B6%2Bw5Xr%2BshyoMq9SIqvqEH3qzz3oGHhT3YWkBYk%2Fm1D8t3m6MGuO%2B%2FelRdPn0yMC9YMTcGwQqzO4V7XWlp%2F%2FxePkxNrDlteSuCdLVQO2BBRBxU02CX51AxCrqLK24ZtV5w3lNVPVAMOxICxw6UwIdbc8TfxSg7Q1g1E5XU0EyAz0KxvJvuKXuDeM7oHz75miigQUj22kZl%2By%2FMe2jGZ8ZLzXzivbdYBy0GPPg0%2Ft4h18NKR222DG%2Btw2KFSuueF0RSrDi12hjYMMdB1VIiLM4Oq3LQZeIJTmTYqKIiUkZ%2BKMdIyXuxVF8%2FS33dxV8lCHb7xd%2Be0IKNcWXrtAXx3dKeYb2RGP0SHI%2F3QuTQEmDndPd2%2FtTw1kuQDvzuA9lWewJUF3rMLngsMTOcWBq5lsww5wED9kInm1ReolmYLKjT4HMKWi1MkGOqUBkwjx0vg54s8lCmNDpjnPgGBfIL5XsffOXHAIWHP5%2FpUKkZu0BVEg7UrB2cLPIIjtklm7dkhgSAT3YDiZDmarqlurx9FON8US0jQ2ULqZiI%2B1UPvJSuThd3GiS3fcYf%2BEJO81HVunU8r7FUb%2FRT9JHdE1lObMhhvhBTn8fkcCDrf3fKBaz2F7dSUrzVzsqdocS5Wnkxp8CQjPElAch457EtI9fiq4&X-Amz-Signature=198533169de7b82439dccb82fd0521f5bcc505609785d6894339e063d191bf67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GMC2SQG%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T082239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBEzRbxBzHEspMhckJkVZq%2FDXhLi9rv3UFDTeoDNvM8JAiEAqIlY4z8vwCujL4eaNPXvNxdKP9%2BB2RJML0prlJ8ATcgqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGv69JQwWvqXiBZOpCrcAzf1GorkE5WR1ZRNuTNFSrDX7IOLRpFRxpPmJ9HazpHZT1z2%2FAUMLx8yb4350RRjPTSfWSDVhkstehuO%2BSAnvd6uUifJ8w5n5teJ7u8VFX6IXf15vhCQ9Rjw3PrqtjlNxbslxy%2F34eN%2FeJwK4vYv3vSnvIoP3WbOj3%2BBduAOWsxmYK48%2FXhbN27yCeHTmADcQheTPTKk00bIi9mn%2B6%2Bw5Xr%2BshyoMq9SIqvqEH3qzz3oGHhT3YWkBYk%2Fm1D8t3m6MGuO%2B%2FelRdPn0yMC9YMTcGwQqzO4V7XWlp%2F%2FxePkxNrDlteSuCdLVQO2BBRBxU02CX51AxCrqLK24ZtV5w3lNVPVAMOxICxw6UwIdbc8TfxSg7Q1g1E5XU0EyAz0KxvJvuKXuDeM7oHz75miigQUj22kZl%2By%2FMe2jGZ8ZLzXzivbdYBy0GPPg0%2Ft4h18NKR222DG%2Btw2KFSuueF0RSrDi12hjYMMdB1VIiLM4Oq3LQZeIJTmTYqKIiUkZ%2BKMdIyXuxVF8%2FS33dxV8lCHb7xd%2Be0IKNcWXrtAXx3dKeYb2RGP0SHI%2F3QuTQEmDndPd2%2FtTw1kuQDvzuA9lWewJUF3rMLngsMTOcWBq5lsww5wED9kInm1ReolmYLKjT4HMKWi1MkGOqUBkwjx0vg54s8lCmNDpjnPgGBfIL5XsffOXHAIWHP5%2FpUKkZu0BVEg7UrB2cLPIIjtklm7dkhgSAT3YDiZDmarqlurx9FON8US0jQ2ULqZiI%2B1UPvJSuThd3GiS3fcYf%2BEJO81HVunU8r7FUb%2FRT9JHdE1lObMhhvhBTn8fkcCDrf3fKBaz2F7dSUrzVzsqdocS5Wnkxp8CQjPElAch457EtI9fiq4&X-Amz-Signature=e3853ca9a9e30fdab2e1475f1a364fab37b2d4d9b1785236d9cff87d0e25cccd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

