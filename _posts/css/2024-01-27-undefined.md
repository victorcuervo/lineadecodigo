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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QMAWONP%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T002632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQCP2oRdRL%2BxSy2kygly4Qzp59RFFc1eEcvBCRR4%2FZomygIhAOfZSiL6Fr7eONnrpojP1FXCposTAC0NSUu9hTeeDJ3%2FKv8DCCEQABoMNjM3NDIzMTgzODA1IgxYqvExwbwDVhmaVioq3ANz566fGZ80AC9g%2BSso%2FJ1rjnLybwJlEmOsSfR16fXl2PymOCz8W96CLPhwXdY6IzixIh5WlBhhTmug4%2FuewyQrN3nVZfoJo2CkyCiK%2Bysd3yjeIM%2Bxkywe3biBqlSS%2Fwqj2dsGINuDKWkRY4V4iCQtJQryOOFAj9uX6qfU4DDZzONlbhwxRbQFm5vMjxpKl9CzwPo8KFNpzZLxb%2FhfXIoMrxGJlUyC2HdUBqCHUv%2BEqKrAGMSTxOvl8pWWxFBHtz633veOLJZm%2BjUlFAITAmoKpAll5idXUrM1frLvmvrU2RdLr5iZrOVhnHp3J0HCk6UQBaFI19nzjcyyLiyoWkE1dWdBmqOJxoZQB9XEGwW%2Bq9kRhiW4RT%2BKkEswQzU1C2yxvgjHZrDSmBkUD6DQotBaLTzykJGvFya642FsqGNN9d0u%2Bjl%2Flb75eAXqsdSA5%2FpNy6XkhnCPQYQS%2BtNn2RjD0AZ7v9UfrtLXQqtaKsVrKdDn15Q2jQmPw7c312ptYqbpUJXscQSVhzHa2BzxY%2FYRE7eIKMWYmwKZllHvHEeLN4c2hmp0DT0%2FmWdOjfkHqAt3yvdW9UqUSKgNxLdgLyQ%2FwbIBzWHpSAJ1QBlyrHHNMN8Lz%2F%2Bd%2FVJ0m6M5yzDh%2Fr3JBjqkAWKDk0B0RnPP%2FdaqUCKOkyi34sU02YD01kaULn6sP2OBiEecaggg3jyAgc3UjO5MPdR9An5JK8aY31HmcuvCoaosbK6ETp53rsbBF3t5zl1zen1gF3LVUksTGCS52BJMs4iAARMbvGcUQw9lS6fS4C2Hm4UkM05BUiyJhvXv1zL3RRNxBfvKEDABo8QTJcGTa%2F%2BkNpig1p%2BMXnqgbRRRygzoRXEh&X-Amz-Signature=8a0b039a389136a74d360f0850684c7ce25ab5290bcbbceb06514cda6ec54411&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QMAWONP%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T002632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQCP2oRdRL%2BxSy2kygly4Qzp59RFFc1eEcvBCRR4%2FZomygIhAOfZSiL6Fr7eONnrpojP1FXCposTAC0NSUu9hTeeDJ3%2FKv8DCCEQABoMNjM3NDIzMTgzODA1IgxYqvExwbwDVhmaVioq3ANz566fGZ80AC9g%2BSso%2FJ1rjnLybwJlEmOsSfR16fXl2PymOCz8W96CLPhwXdY6IzixIh5WlBhhTmug4%2FuewyQrN3nVZfoJo2CkyCiK%2Bysd3yjeIM%2Bxkywe3biBqlSS%2Fwqj2dsGINuDKWkRY4V4iCQtJQryOOFAj9uX6qfU4DDZzONlbhwxRbQFm5vMjxpKl9CzwPo8KFNpzZLxb%2FhfXIoMrxGJlUyC2HdUBqCHUv%2BEqKrAGMSTxOvl8pWWxFBHtz633veOLJZm%2BjUlFAITAmoKpAll5idXUrM1frLvmvrU2RdLr5iZrOVhnHp3J0HCk6UQBaFI19nzjcyyLiyoWkE1dWdBmqOJxoZQB9XEGwW%2Bq9kRhiW4RT%2BKkEswQzU1C2yxvgjHZrDSmBkUD6DQotBaLTzykJGvFya642FsqGNN9d0u%2Bjl%2Flb75eAXqsdSA5%2FpNy6XkhnCPQYQS%2BtNn2RjD0AZ7v9UfrtLXQqtaKsVrKdDn15Q2jQmPw7c312ptYqbpUJXscQSVhzHa2BzxY%2FYRE7eIKMWYmwKZllHvHEeLN4c2hmp0DT0%2FmWdOjfkHqAt3yvdW9UqUSKgNxLdgLyQ%2FwbIBzWHpSAJ1QBlyrHHNMN8Lz%2F%2Bd%2FVJ0m6M5yzDh%2Fr3JBjqkAWKDk0B0RnPP%2FdaqUCKOkyi34sU02YD01kaULn6sP2OBiEecaggg3jyAgc3UjO5MPdR9An5JK8aY31HmcuvCoaosbK6ETp53rsbBF3t5zl1zen1gF3LVUksTGCS52BJMs4iAARMbvGcUQw9lS6fS4C2Hm4UkM05BUiyJhvXv1zL3RRNxBfvKEDABo8QTJcGTa%2F%2BkNpig1p%2BMXnqgbRRRygzoRXEh&X-Amz-Signature=568446ded1b4c8d7f4e17a7b5b4a6cf373c82dacfa09add0461fdcb161771b13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

