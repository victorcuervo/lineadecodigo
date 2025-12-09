---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJFBEDUR%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T042346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDfQk9efvT3pTdzNkvfmVlfoDTje2p5YGEkV9rsfrMuDAiEAi5XfScnEQidxgxE7VHvJx9QjSowabrCB8zTtvHzbTjIqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ5g65%2BgnTv2yp8TeCrcA5s9HXCp1fBkqSo%2Bq5QKPHfUw5GbPDdLDRFaX6nG9VDwRry2dlwVO8xD4eCEtfaCOKtJtqhZD81PW8Nj8%2BW5OM45dWUYkmS1jF8dVhD0yV27kiRrwQAjKYFlwu1nCTYfOKgXdMzqTTYPODt2Vrs7BNn5yPurgi78G79VqVN5pTg%2FITJ8l%2Fu1n5%2BR21qoI%2BtnJFptsUUpXzb3qtIXiEq0MoUCceA%2FhvU2jB7SNaSqrJcjvQdxcqC9oYzxZvNKrSKD06B6077ca3%2Bka5K2a4%2Fmi6XoSn9es6J%2BwtWQiTHENf%2F2J%2FOwOHPbAJ71TVHHV4meMau6edG%2FPWfs5f%2FtAwvWy%2FvjRyOy3nqWyLmopGqXChyKPN9cLkGkmM42wy1o5HurbsUuYU8Bh4KMCGPIbR4r3IF7uLIo5JzFgYG%2F9rJnkEqz0w7rYxLVw%2BDv4Xs4atRU%2FARPLDJlqhCFVdXr5TXrsYdVSr%2FJa5LwcJYGdED86XJlxxA3D1sl4o5v1cPrJf38ILXIGHs5ovllhU3cKxjq22YyTIbYMn10EF8xbvS7CwCTYTOyBfbKwtnuLBIhpYkaNbFCnxkzFWC2OaSCu2I%2FpgyyPgsjlm1mED4m%2BcAaL%2FfGjwGz%2FyaF0XKUHwtiMO%2Bt3skGOqUBSOlhkzKWiU8BBRZ15u8fq7KhmQ9I53UUe0cQXmBy%2FyBw%2FMyfD%2FjY%2Bi%2BMXOD%2BX3YQMeLH9Qo4yVWTguQjNVC4BV3ippx7LcDLJdrEpwMfXL94er%2BOjkBbpK9rHF%2Fj%2FY3l0my%2BVu5RtvtmkIsdgYetCiJRXDDEhXaS14yYko3zrf6HTlqqjD0p53L7283xXD7R%2FI8WnatHQ5nRBHLF2e34lXV2cGm2&X-Amz-Signature=e1b6e6a6e4c304dec12cffad5185c6511feea88148d103d9d75fef273bb64864&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJFBEDUR%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T042346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDfQk9efvT3pTdzNkvfmVlfoDTje2p5YGEkV9rsfrMuDAiEAi5XfScnEQidxgxE7VHvJx9QjSowabrCB8zTtvHzbTjIqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ5g65%2BgnTv2yp8TeCrcA5s9HXCp1fBkqSo%2Bq5QKPHfUw5GbPDdLDRFaX6nG9VDwRry2dlwVO8xD4eCEtfaCOKtJtqhZD81PW8Nj8%2BW5OM45dWUYkmS1jF8dVhD0yV27kiRrwQAjKYFlwu1nCTYfOKgXdMzqTTYPODt2Vrs7BNn5yPurgi78G79VqVN5pTg%2FITJ8l%2Fu1n5%2BR21qoI%2BtnJFptsUUpXzb3qtIXiEq0MoUCceA%2FhvU2jB7SNaSqrJcjvQdxcqC9oYzxZvNKrSKD06B6077ca3%2Bka5K2a4%2Fmi6XoSn9es6J%2BwtWQiTHENf%2F2J%2FOwOHPbAJ71TVHHV4meMau6edG%2FPWfs5f%2FtAwvWy%2FvjRyOy3nqWyLmopGqXChyKPN9cLkGkmM42wy1o5HurbsUuYU8Bh4KMCGPIbR4r3IF7uLIo5JzFgYG%2F9rJnkEqz0w7rYxLVw%2BDv4Xs4atRU%2FARPLDJlqhCFVdXr5TXrsYdVSr%2FJa5LwcJYGdED86XJlxxA3D1sl4o5v1cPrJf38ILXIGHs5ovllhU3cKxjq22YyTIbYMn10EF8xbvS7CwCTYTOyBfbKwtnuLBIhpYkaNbFCnxkzFWC2OaSCu2I%2FpgyyPgsjlm1mED4m%2BcAaL%2FfGjwGz%2FyaF0XKUHwtiMO%2Bt3skGOqUBSOlhkzKWiU8BBRZ15u8fq7KhmQ9I53UUe0cQXmBy%2FyBw%2FMyfD%2FjY%2Bi%2BMXOD%2BX3YQMeLH9Qo4yVWTguQjNVC4BV3ippx7LcDLJdrEpwMfXL94er%2BOjkBbpK9rHF%2Fj%2FY3l0my%2BVu5RtvtmkIsdgYetCiJRXDDEhXaS14yYko3zrf6HTlqqjD0p53L7283xXD7R%2FI8WnatHQ5nRBHLF2e34lXV2cGm2&X-Amz-Signature=06cecde244a146a6c25d0022722ebaaf19a97ffe2e2b075b11886dd6a34352cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

