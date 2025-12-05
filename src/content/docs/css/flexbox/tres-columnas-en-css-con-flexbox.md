---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQLMNGS4%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T142526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4JTdo0g%2BeEJVpnEAqP7bkVEUT%2B7PPrBolkrM6fLIV5AIgdZb%2F9HyhbRur%2FxwdOJFlNUDc%2F6%2FluTlDYldFSRX64%2Foq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDJqFRJhObM%2BEp%2F1vHSrcA7HpMON04Q3Zh1q5xSTWnbMZBzfyvxieRVs2Rtlxv%2F0zPwUcUJh1MJfakFejJvGPsuNsrRmLRdYF3jE8tYqsDcrVOR11m4lcXk2RDx9ODH0n9%2FBcTamtAdMqKI5Dib1XAgOwDIAvh2qQxNImDXwr%2B6ebcnJYdO65DuSog%2Bdl63FBPbciK1rqszeEVP38lQw0Yp9ToNEKUHr4FD1RR82BxYQ1BU4edwbTG3DYiLhLTnWeMbfLXGGQqSpvlvlHUH2SrJq8XuqeTEzZlOziwSHlIITbcdd35pyQEm%2Fo0ALD6txJkn9kS50wGZzZXUtEIZ8DL4rh1RjLUiCSainLzvZcMqtEc0io08re3sQAN%2FOXwYXoSyeth89lmrH5fk7B5vYtBaWl66MabZ1v5EjY2vMwGiCrh4A1Kxz2ZYlm0Zc64q48%2Br6AopM9vDuXhvxLHz3Gw53fmvn40jgPuBTBlQfST2cGjYvmy0OvV4CS2wNXZNcSO5ONZVP7m%2FookZKTAyk9IMPmJ76%2Fxfgtod97wE6omO7SD9fSQlb1Aw1Cv4pZ83OrdzDxNPNE4SujT3cTyMUMmlvfl7y6J3wQJUwGZu8qAw1%2Fvnhw%2BXaAmrFKjuy5cRGDSxWwCdk8nyZXhWaAMIfQyskGOqUB5j26RjeebYHdt94GdGIXYarpWcggQWcAEDXbtPSRywV%2FrN7dCwpJI86BaXJ2KhJ3VgZ%2Fp6CqY4pQZ%2BwZFv1KldNAQpQJCdB3Y4%2BBnGuVW3LarYcA8X5eS4bqzHM1YjVKLTjjQNJd0ShaHDIcdyN8xb1KlJ50kaj6ZM0N1zDFbP6LDEVybwT%2BWX4DgviZIq99YgNOaXGg4deMfqMnQRnnCbmrQstL&X-Amz-Signature=97767c3362232a600d534a0d2529d7ef0510c0cc12a2e1665730a1c2108a42ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQLMNGS4%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T142526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4JTdo0g%2BeEJVpnEAqP7bkVEUT%2B7PPrBolkrM6fLIV5AIgdZb%2F9HyhbRur%2FxwdOJFlNUDc%2F6%2FluTlDYldFSRX64%2Foq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDJqFRJhObM%2BEp%2F1vHSrcA7HpMON04Q3Zh1q5xSTWnbMZBzfyvxieRVs2Rtlxv%2F0zPwUcUJh1MJfakFejJvGPsuNsrRmLRdYF3jE8tYqsDcrVOR11m4lcXk2RDx9ODH0n9%2FBcTamtAdMqKI5Dib1XAgOwDIAvh2qQxNImDXwr%2B6ebcnJYdO65DuSog%2Bdl63FBPbciK1rqszeEVP38lQw0Yp9ToNEKUHr4FD1RR82BxYQ1BU4edwbTG3DYiLhLTnWeMbfLXGGQqSpvlvlHUH2SrJq8XuqeTEzZlOziwSHlIITbcdd35pyQEm%2Fo0ALD6txJkn9kS50wGZzZXUtEIZ8DL4rh1RjLUiCSainLzvZcMqtEc0io08re3sQAN%2FOXwYXoSyeth89lmrH5fk7B5vYtBaWl66MabZ1v5EjY2vMwGiCrh4A1Kxz2ZYlm0Zc64q48%2Br6AopM9vDuXhvxLHz3Gw53fmvn40jgPuBTBlQfST2cGjYvmy0OvV4CS2wNXZNcSO5ONZVP7m%2FookZKTAyk9IMPmJ76%2Fxfgtod97wE6omO7SD9fSQlb1Aw1Cv4pZ83OrdzDxNPNE4SujT3cTyMUMmlvfl7y6J3wQJUwGZu8qAw1%2Fvnhw%2BXaAmrFKjuy5cRGDSxWwCdk8nyZXhWaAMIfQyskGOqUB5j26RjeebYHdt94GdGIXYarpWcggQWcAEDXbtPSRywV%2FrN7dCwpJI86BaXJ2KhJ3VgZ%2Fp6CqY4pQZ%2BwZFv1KldNAQpQJCdB3Y4%2BBnGuVW3LarYcA8X5eS4bqzHM1YjVKLTjjQNJd0ShaHDIcdyN8xb1KlJ50kaj6ZM0N1zDFbP6LDEVybwT%2BWX4DgviZIq99YgNOaXGg4deMfqMnQRnnCbmrQstL&X-Amz-Signature=4e97d3130a5bf3b1e836b46213e3641166391d12711b26f3e0679ca1da121528&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

