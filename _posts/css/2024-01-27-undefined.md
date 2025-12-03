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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665X5VACKK%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T125055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQC7WI79p1sXV5zRVbmxA5dOrQ1v5DO0%2BNrPEgG5ftZExAIgCAlfl60aOThMUnA%2FGjUfQtbiJhdpL2ez%2FPi175Pgl%2Foq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDJpJl3cp82ywdxvHcCrcA49Ys%2FpMoi45OcsibtO%2F56pWppzlvpk52OIfvfwWBb8RfnOmRzvM84t5BEYdnRT7xgjWwA%2F17AChwLjL1cXqlan5LTpw4Rw1FCuKEwKKRqUdH9EDmhO1VFDGjsmjWjwjqB3A1vWeh94D8sEEl7hNAUl1NR54NumWLCAQBq2zhEZE74eaI5Khm7xrjO4wbjOoKmmA4AI4oWQb6z2GTG4ofouzvUX9jYUDBU0wQ6RDsO445G3KToKbOQ6GDv3mOwEV9a9EzIhfUAGyFE4r46tVGBTFMKcwmPVVbMUvIZF%2F0tdf1KtcnrDeAk%2B4uWijO%2BTcIfGxi5lJvsZ4H0DVZsATswBLQNQL7tXQxKRyHqrkOQNpoc%2BdCFLZbghZ%2FGkMylHpVSflSd%2BLMhj%2B0mbSHL8lJKEnI2hOCeBB2QpI0DxAWrTzPqtuDD2DwAAMsjHpm1vBzCzd3mBxJou0akk7xrLLGY5EkzPzNGvhdRnr5DUseAAk%2FO4WFR0KraSiycrmcPrc%2BVL4U75otfVJXOtwceLfd3%2BnX1X%2BY1mMH7ZrAtDiT2EADa1wh37vgDLABY%2BO4hZXUu2Y4TcotQvJn5OXRIaXXDW16oWHAOMtgL13Ibi27fG0AKCV%2F9Zy70YZixaeMIXNwMkGOqUBohGObOb4gOwN9%2BSt5bNWOf6XK%2FyB9pqvscgkfwwjYdbrb1IPgEUhuEoayK99tUj7hoe8%2BGJND7pIVQFSSnKZxismrHJwj8vxcIDGCP14VFnV6iITIqD6xYtfW2tHNsKjr5OvAPdsOaPDeY4Iu1FVtCQeBxSD6uYoImQmMtuC86AsQgd4uBV2tlNUe2GqxwJuczVtoU4SdfmX1kLAMLN9JJpwFshY&X-Amz-Signature=b75601b3ee90c32965e4ab35154ae75e1a29c589f5eed9400bde63fa2080703d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665X5VACKK%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T125055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQC7WI79p1sXV5zRVbmxA5dOrQ1v5DO0%2BNrPEgG5ftZExAIgCAlfl60aOThMUnA%2FGjUfQtbiJhdpL2ez%2FPi175Pgl%2Foq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDJpJl3cp82ywdxvHcCrcA49Ys%2FpMoi45OcsibtO%2F56pWppzlvpk52OIfvfwWBb8RfnOmRzvM84t5BEYdnRT7xgjWwA%2F17AChwLjL1cXqlan5LTpw4Rw1FCuKEwKKRqUdH9EDmhO1VFDGjsmjWjwjqB3A1vWeh94D8sEEl7hNAUl1NR54NumWLCAQBq2zhEZE74eaI5Khm7xrjO4wbjOoKmmA4AI4oWQb6z2GTG4ofouzvUX9jYUDBU0wQ6RDsO445G3KToKbOQ6GDv3mOwEV9a9EzIhfUAGyFE4r46tVGBTFMKcwmPVVbMUvIZF%2F0tdf1KtcnrDeAk%2B4uWijO%2BTcIfGxi5lJvsZ4H0DVZsATswBLQNQL7tXQxKRyHqrkOQNpoc%2BdCFLZbghZ%2FGkMylHpVSflSd%2BLMhj%2B0mbSHL8lJKEnI2hOCeBB2QpI0DxAWrTzPqtuDD2DwAAMsjHpm1vBzCzd3mBxJou0akk7xrLLGY5EkzPzNGvhdRnr5DUseAAk%2FO4WFR0KraSiycrmcPrc%2BVL4U75otfVJXOtwceLfd3%2BnX1X%2BY1mMH7ZrAtDiT2EADa1wh37vgDLABY%2BO4hZXUu2Y4TcotQvJn5OXRIaXXDW16oWHAOMtgL13Ibi27fG0AKCV%2F9Zy70YZixaeMIXNwMkGOqUBohGObOb4gOwN9%2BSt5bNWOf6XK%2FyB9pqvscgkfwwjYdbrb1IPgEUhuEoayK99tUj7hoe8%2BGJND7pIVQFSSnKZxismrHJwj8vxcIDGCP14VFnV6iITIqD6xYtfW2tHNsKjr5OvAPdsOaPDeY4Iu1FVtCQeBxSD6uYoImQmMtuC86AsQgd4uBV2tlNUe2GqxwJuczVtoU4SdfmX1kLAMLN9JJpwFshY&X-Amz-Signature=c1251faf15f82dc371d12cd9e9cd301ddbd58be2cf3494b6b15cf843e8af6c8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

