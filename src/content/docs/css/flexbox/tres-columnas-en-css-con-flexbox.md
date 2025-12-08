---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DLOJ3LQ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T013446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEIyNzzaGe%2B0tKXi3TT9phQjGqpvU3fWm%2FKV2hPRGaaiAiBCst3D7hQ16qx8Mw1%2BjnODqm13Pm0TaxJXThDCC9%2F5qCqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM97jhj3qEjPk5ub5pKtwDMP%2BUqL7NrIyYJLYpBINMbaS5uVfTS49uepEhJEuDJriJJzIFmtU8iGiLYC29j4wJfxz0KRhJMOAvv5E2zBXo6JVynrXpfIXSVQ1Ky979rxoo0Sooe7ehHLnE%2Bz1Mi69Q80CDohGrutT%2B%2BSeQr%2BP7aweo5TeIOeRLYJdXfC0IdmZLHjIFisiRYUO3xCGWE0P3SWgknUJ4ysSMwN44PUF0A1yYYFUUQt6mPoqUc1fDRqPEv9fErXiI0Un0vMog%2FXlOWxzHYuFPFCQ2KtIkIk5L6SD0hmBh32IyZ0nO5xs58zdI5B6fio1SpDiIAmA%2FqaAWIHioN6vAB2OmY07AxOS4mKYXeAQECGSFZf%2Bx6hNivmVPrBNNOCSLjToGtBbrT8NgG%2BhzU4WBiaWkIOL8XGWQGp7%2FvdBPO024n1v0dAsoJOU%2FmfyTf8CcvvXViyzWjxz43OKPGjnEum71HIn1w0EYxDJLSk3rp0A5qvovRgQyUaEMp5FRXyx1%2FY1YxuUVJ2gqohKa6sX4661URoE%2Bekss2Ue5pe1ia5tAUMp6vPhtWxJH9U0Xrz5B3upV9pd%2FDOPQhsEggPJ3ROQ2dzJ6Glvwm9gAi%2FPvFnFIWlK3WJyxQ5ZFR0IEenehqoKpJsAw%2BtDYyQY6pgGU2%2BT7Ll7gYMNhVHwu%2Fj5yKzFAzqqdXWud6qKcSn6%2B3WkVuxTxSFH93Ib7D8ZZC%2FPAludHFu9fva8etFSEcn8JyR1cUfdaCgpiAdia%2F9l%2FDkfksvk5DZ%2F5SZzm9MxqlM2CrSV6hNSubPOmucBikHK9ZBfB0QXn6K7gxFQl7itoJH7A6uJ7%2FVki%2Fk6CUZgPvbCJN7EjiToIRl0xk6%2FSCRevbqcYgXV6&X-Amz-Signature=962ef4fbc52189c137156cc97ec0be24f5cead3d5a270b6247ae11ffcf2f6523&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DLOJ3LQ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T013446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEIyNzzaGe%2B0tKXi3TT9phQjGqpvU3fWm%2FKV2hPRGaaiAiBCst3D7hQ16qx8Mw1%2BjnODqm13Pm0TaxJXThDCC9%2F5qCqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM97jhj3qEjPk5ub5pKtwDMP%2BUqL7NrIyYJLYpBINMbaS5uVfTS49uepEhJEuDJriJJzIFmtU8iGiLYC29j4wJfxz0KRhJMOAvv5E2zBXo6JVynrXpfIXSVQ1Ky979rxoo0Sooe7ehHLnE%2Bz1Mi69Q80CDohGrutT%2B%2BSeQr%2BP7aweo5TeIOeRLYJdXfC0IdmZLHjIFisiRYUO3xCGWE0P3SWgknUJ4ysSMwN44PUF0A1yYYFUUQt6mPoqUc1fDRqPEv9fErXiI0Un0vMog%2FXlOWxzHYuFPFCQ2KtIkIk5L6SD0hmBh32IyZ0nO5xs58zdI5B6fio1SpDiIAmA%2FqaAWIHioN6vAB2OmY07AxOS4mKYXeAQECGSFZf%2Bx6hNivmVPrBNNOCSLjToGtBbrT8NgG%2BhzU4WBiaWkIOL8XGWQGp7%2FvdBPO024n1v0dAsoJOU%2FmfyTf8CcvvXViyzWjxz43OKPGjnEum71HIn1w0EYxDJLSk3rp0A5qvovRgQyUaEMp5FRXyx1%2FY1YxuUVJ2gqohKa6sX4661URoE%2Bekss2Ue5pe1ia5tAUMp6vPhtWxJH9U0Xrz5B3upV9pd%2FDOPQhsEggPJ3ROQ2dzJ6Glvwm9gAi%2FPvFnFIWlK3WJyxQ5ZFR0IEenehqoKpJsAw%2BtDYyQY6pgGU2%2BT7Ll7gYMNhVHwu%2Fj5yKzFAzqqdXWud6qKcSn6%2B3WkVuxTxSFH93Ib7D8ZZC%2FPAludHFu9fva8etFSEcn8JyR1cUfdaCgpiAdia%2F9l%2FDkfksvk5DZ%2F5SZzm9MxqlM2CrSV6hNSubPOmucBikHK9ZBfB0QXn6K7gxFQl7itoJH7A6uJ7%2FVki%2Fk6CUZgPvbCJN7EjiToIRl0xk6%2FSCRevbqcYgXV6&X-Amz-Signature=6145a5ba1c94df596e58106f50ad53305901ef9e8bf6166d8440554fff652e09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

