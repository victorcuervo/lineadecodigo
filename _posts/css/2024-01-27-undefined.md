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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HBORNQG%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T122941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIGnOjMAlmSweFFLAxJdArN9yXrcwR4WkaVmr2cu9ffl8AiATz3nNMOyu%2FXtoZdujiPzydN2TuSplqaliI1rGkNHLoSr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMYgY12u%2BS5HoWUPt2KtwDn8ngjHUpTDrqMvTkdMD1JHYh5GwA%2Bi5tK9mTfyrqIUlYLxq25%2FBLva9k2xX1vEX5GWTxc9gQjMath2ZQRGESOyEyYsxbnSqsrMaho%2BZNdAbtseFHwda%2FUO0eqD6jnCwXPB9TEzrMj96AWz43YXoeTb8hj7d81udLtYce4vLiS51hh4Tf9mdAQ359qrfE8mJKgjgeTmg4%2FKLm%2Flho6islsv7UF2yOFpuf56N57uNd6z3Zyp9hasdUwN%2FFXvUNvTRiodOo1A4xUezALl4adtjnbQsDLG2OwzD%2FQv6BE0AWhNv9M2fjUPnoGOvNNjUQj7nMljbt2slkG6Tw6uFOQQ2XI7Sut%2Bs0KDILwLjhmWORZKvwqEhACfiVttFWGp0nsC93cyzaRY4%2B7qzCCQD03GmVd%2FsZFVSix7u0T9XKdvLm2DNyelVfvsFHgpXq4z6bhtZBiY3N6wDgow2wuMwSM9egFFlD10THtOGP56qdAkvFLkuGoTaB5Gi1ZfylAaddvsYTRDRPkh7bnznzbvizbvmShsJmcPIyvN0jr2GKIWYr1WtAP30BD%2BwqykdVXu4yypg8A%2Fsx124Ws0foGJPAaTMs%2FPid2VcHlDm32spk%2FmHd2kLMcKeDpHG21frUqDEwzM3AyQY6pgEd3NfNcC4jkEphv1pOjU8MGCTx24rkDermyx40c7DXbiqcMR4CUlM%2Bnav9QgroAJpEyhiH3dCOJfGQBEJkfcsBFdOmN7YJmcmj9hrAkXCV2i8h%2BmYipVN9EuQVSGvrRepUm10UgvVw0ATjKBJ8xxcD5Ajrn3a7ud58esv1Eqt%2FsXZgAjj%2B%2BwSwMpvRwttHaWxmytsqGYnwrOmkUX%2Fk3d6HGrJKDZHs&X-Amz-Signature=1870d0b8d7ebad940806266b02a1234a0178c0f933a7524bfb94b6f2365f410b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HBORNQG%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T122941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIGnOjMAlmSweFFLAxJdArN9yXrcwR4WkaVmr2cu9ffl8AiATz3nNMOyu%2FXtoZdujiPzydN2TuSplqaliI1rGkNHLoSr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMYgY12u%2BS5HoWUPt2KtwDn8ngjHUpTDrqMvTkdMD1JHYh5GwA%2Bi5tK9mTfyrqIUlYLxq25%2FBLva9k2xX1vEX5GWTxc9gQjMath2ZQRGESOyEyYsxbnSqsrMaho%2BZNdAbtseFHwda%2FUO0eqD6jnCwXPB9TEzrMj96AWz43YXoeTb8hj7d81udLtYce4vLiS51hh4Tf9mdAQ359qrfE8mJKgjgeTmg4%2FKLm%2Flho6islsv7UF2yOFpuf56N57uNd6z3Zyp9hasdUwN%2FFXvUNvTRiodOo1A4xUezALl4adtjnbQsDLG2OwzD%2FQv6BE0AWhNv9M2fjUPnoGOvNNjUQj7nMljbt2slkG6Tw6uFOQQ2XI7Sut%2Bs0KDILwLjhmWORZKvwqEhACfiVttFWGp0nsC93cyzaRY4%2B7qzCCQD03GmVd%2FsZFVSix7u0T9XKdvLm2DNyelVfvsFHgpXq4z6bhtZBiY3N6wDgow2wuMwSM9egFFlD10THtOGP56qdAkvFLkuGoTaB5Gi1ZfylAaddvsYTRDRPkh7bnznzbvizbvmShsJmcPIyvN0jr2GKIWYr1WtAP30BD%2BwqykdVXu4yypg8A%2Fsx124Ws0foGJPAaTMs%2FPid2VcHlDm32spk%2FmHd2kLMcKeDpHG21frUqDEwzM3AyQY6pgEd3NfNcC4jkEphv1pOjU8MGCTx24rkDermyx40c7DXbiqcMR4CUlM%2Bnav9QgroAJpEyhiH3dCOJfGQBEJkfcsBFdOmN7YJmcmj9hrAkXCV2i8h%2BmYipVN9EuQVSGvrRepUm10UgvVw0ATjKBJ8xxcD5Ajrn3a7ud58esv1Eqt%2FsXZgAjj%2B%2BwSwMpvRwttHaWxmytsqGYnwrOmkUX%2Fk3d6HGrJKDZHs&X-Amz-Signature=04ea623758d1be8a4ba285370ef1b7a929fb08b3caf83ddcd52da56e605e9be6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

