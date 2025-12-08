---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWDT3SLO%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T055828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChRgTk1EhFcbQR%2BB%2FAtdZpLC77a0ogcK6mRqI5V32KNwIgLt%2FXu9fXyKpZZJLK%2BKDVZzp%2Flrge84U7opgVYQwdkRwqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLnG34fENbCmaxlAKyrcA1f138EvQOkA020%2F9tya0AclpbD4aeZ5g%2BLKDlXVAO0NdgCkoabG%2F2SJ5tlYwFvNFhr7I4qq3wwpdE%2F%2Bmfg1Z3VFNxdJydQwEth9JjgBlD%2B2raXjPsiLonzl0lT9BCMZ7DeePXahOwsH5fwzgfaB37bs6x623fkgD9hLI3Qb8ePQia4OYTR3VX9CgHgboRVqYLfWqSqS1hapB9Lm%2BTV7%2BmX2SMPnwbuNSTAco1%2BNDUHRvctXU7bXJnNLO81I9pJlSpwjOoVriTWyoNhQGWsMuPS4CL5tOqzqsFc00kb9rv1PACwzbFAdDw8rH5qKfWHB2UVutuXKguGLCuX4Dyg69eK98idBb6SliCvlR6RTFebbUjNeMWXKTxOO%2F50GBCTMwkXEuco0XS9IpK51CljZYnI4XeEnL52mtJGw08YA21xlqMxHtRom7SkmEoD8fCpVJvOwrve8HsbqQlVKymSa0Ai35so%2FIUQFb1zc%2BbYP1tbDuj4uXszlAovAMSjTJyaMGW1%2FPiQxPqNCOVcPFcOTdVUIGXZCMkiwfU90Wvak2ek9MW23%2BmMZ6LGSNAhk0PM1qaiCg25UFEDnBuD4syxs%2F32oQ3gGAJSfx6W43S3TlL9%2FMys0m1xWnPZ5nGvKMJ7Q2ckGOqUBpq%2FxKC%2FLbWiWLoNOZK3qXmBqQkymcwtnsfbYzbxgLJmN0fHo4vSpAILG2YsJYMbW7z2tVVprOFGAeb0VPq3KgOIfN1hsfuMw34foWizH8JFessHw48S2O48UzgFQcsoPOM25mTKxVNjPJMHzhrdXxwNRRck%2FcrAVWGnEzGOf76kE9YzPcLSzmTXiKnUnGzRaKKxYIoDlc3ZNusOEyYcy7IQbc%2Byp&X-Amz-Signature=788ed71424f1789656f93948407c13cba8202d3dffbae59f9ab4a8a91b37cffb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWDT3SLO%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T055828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChRgTk1EhFcbQR%2BB%2FAtdZpLC77a0ogcK6mRqI5V32KNwIgLt%2FXu9fXyKpZZJLK%2BKDVZzp%2Flrge84U7opgVYQwdkRwqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLnG34fENbCmaxlAKyrcA1f138EvQOkA020%2F9tya0AclpbD4aeZ5g%2BLKDlXVAO0NdgCkoabG%2F2SJ5tlYwFvNFhr7I4qq3wwpdE%2F%2Bmfg1Z3VFNxdJydQwEth9JjgBlD%2B2raXjPsiLonzl0lT9BCMZ7DeePXahOwsH5fwzgfaB37bs6x623fkgD9hLI3Qb8ePQia4OYTR3VX9CgHgboRVqYLfWqSqS1hapB9Lm%2BTV7%2BmX2SMPnwbuNSTAco1%2BNDUHRvctXU7bXJnNLO81I9pJlSpwjOoVriTWyoNhQGWsMuPS4CL5tOqzqsFc00kb9rv1PACwzbFAdDw8rH5qKfWHB2UVutuXKguGLCuX4Dyg69eK98idBb6SliCvlR6RTFebbUjNeMWXKTxOO%2F50GBCTMwkXEuco0XS9IpK51CljZYnI4XeEnL52mtJGw08YA21xlqMxHtRom7SkmEoD8fCpVJvOwrve8HsbqQlVKymSa0Ai35so%2FIUQFb1zc%2BbYP1tbDuj4uXszlAovAMSjTJyaMGW1%2FPiQxPqNCOVcPFcOTdVUIGXZCMkiwfU90Wvak2ek9MW23%2BmMZ6LGSNAhk0PM1qaiCg25UFEDnBuD4syxs%2F32oQ3gGAJSfx6W43S3TlL9%2FMys0m1xWnPZ5nGvKMJ7Q2ckGOqUBpq%2FxKC%2FLbWiWLoNOZK3qXmBqQkymcwtnsfbYzbxgLJmN0fHo4vSpAILG2YsJYMbW7z2tVVprOFGAeb0VPq3KgOIfN1hsfuMw34foWizH8JFessHw48S2O48UzgFQcsoPOM25mTKxVNjPJMHzhrdXxwNRRck%2FcrAVWGnEzGOf76kE9YzPcLSzmTXiKnUnGzRaKKxYIoDlc3ZNusOEyYcy7IQbc%2Byp&X-Amz-Signature=c78d6fc8167c7067183d57e2f96f55ea1722adfc4d22f4cb6e2394ec2e099d13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

