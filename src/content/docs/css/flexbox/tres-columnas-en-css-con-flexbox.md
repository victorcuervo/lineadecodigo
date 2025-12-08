---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YI662HSU%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T181156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGKOAJ1mN6onF%2FLwJaGwkGk1MOxdSIWET%2BYRZ8mcBp3BAiEAngtQooDfX%2FeKSp5HjhGMas%2FEhQDlRaxdkCFRHTRb8QQqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAQVK2kpIipYri32VCrcA8%2FzFxr2vjMMH4gKY28YgI6JCHqw4nWhu1ssDJudDEbFWVSGXnClqVVd76tcXZsLZZ1Gqwxop3qFuPpGSyZZUMH%2Fay%2BCflpJrefgkzbSqb9RHQNHr%2FvIwIxdUdpzbb9xHCpRxBKWHQJCG19%2F35PyjOt0fHMR1c72qFYDeg9%2B%2BxIrh9bc9Q0%2FPIM6HNpxFL7k4I4f%2F81haivAK2Xz1zlSGCZQbJC6yVEaHQsZEIq15yQVvyGTeOpXxZby9Bzhvc9d16L1fR7o8ORyYoLpFkVCnIxUL0cX3NBRUawkSloTh2zliCa%2FOuFzuo7USsnnMBVxTxGmS3vt1ADlO%2FoM1jL3sMe9RYm9gFv1gEpgnNRIEQkxh7mAPu8njGO8qANSpBmPCApV1UoNTRrdDO41RuGcdWxQDbM0HEmtr2oXkYorZI99knO1fzUAyLv1N1q%2BNkxOjUw9%2FZz5R9Vvq6mRZbZ4QeVzEKSFLiPc%2FJacSrFIhQBCnvZbA2uG1ps46N1DmoYPYtI%2FWF%2BREoAEOtgRRNclLcoAo280foIkM3HXR24rQlstjR5ptAaXiNKibsM60XTAnCYBPi0FJFZJAHL6dijWvjnNwtFVJzgzvPXXfrwUbscFo2Xe4s1AdM5pnBmEMMKH3MkGOqUBdPyJqXEHJh6tQ6ZLHJ5vSb5bmnzgxnu9XGJNuYyr7%2BuGdhk3JtTexUqNHzCUY196t0SMLv6RZUjt3Gl7avADQ%2BTuX%2FCy%2B2VfdV3yCWLf3hSx8N0hEHFQglOGz9xr6WBQgV%2BgJ28%2FwL34HKnMwsQE%2FMKCNKUuCVUT%2F9JyLZOmQ7gjzBUlOn5pv061wE%2BgoKcIwQiYMkTJvGEtcF%2Fv0x%2F9f%2FnCAjad&X-Amz-Signature=c298ceb59480becd912ea1e1d089f2ad8a5b8e2674b8bf9f5da808ddca860831&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YI662HSU%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T181156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGKOAJ1mN6onF%2FLwJaGwkGk1MOxdSIWET%2BYRZ8mcBp3BAiEAngtQooDfX%2FeKSp5HjhGMas%2FEhQDlRaxdkCFRHTRb8QQqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAQVK2kpIipYri32VCrcA8%2FzFxr2vjMMH4gKY28YgI6JCHqw4nWhu1ssDJudDEbFWVSGXnClqVVd76tcXZsLZZ1Gqwxop3qFuPpGSyZZUMH%2Fay%2BCflpJrefgkzbSqb9RHQNHr%2FvIwIxdUdpzbb9xHCpRxBKWHQJCG19%2F35PyjOt0fHMR1c72qFYDeg9%2B%2BxIrh9bc9Q0%2FPIM6HNpxFL7k4I4f%2F81haivAK2Xz1zlSGCZQbJC6yVEaHQsZEIq15yQVvyGTeOpXxZby9Bzhvc9d16L1fR7o8ORyYoLpFkVCnIxUL0cX3NBRUawkSloTh2zliCa%2FOuFzuo7USsnnMBVxTxGmS3vt1ADlO%2FoM1jL3sMe9RYm9gFv1gEpgnNRIEQkxh7mAPu8njGO8qANSpBmPCApV1UoNTRrdDO41RuGcdWxQDbM0HEmtr2oXkYorZI99knO1fzUAyLv1N1q%2BNkxOjUw9%2FZz5R9Vvq6mRZbZ4QeVzEKSFLiPc%2FJacSrFIhQBCnvZbA2uG1ps46N1DmoYPYtI%2FWF%2BREoAEOtgRRNclLcoAo280foIkM3HXR24rQlstjR5ptAaXiNKibsM60XTAnCYBPi0FJFZJAHL6dijWvjnNwtFVJzgzvPXXfrwUbscFo2Xe4s1AdM5pnBmEMMKH3MkGOqUBdPyJqXEHJh6tQ6ZLHJ5vSb5bmnzgxnu9XGJNuYyr7%2BuGdhk3JtTexUqNHzCUY196t0SMLv6RZUjt3Gl7avADQ%2BTuX%2FCy%2B2VfdV3yCWLf3hSx8N0hEHFQglOGz9xr6WBQgV%2BgJ28%2FwL34HKnMwsQE%2FMKCNKUuCVUT%2F9JyLZOmQ7gjzBUlOn5pv061wE%2BgoKcIwQiYMkTJvGEtcF%2Fv0x%2F9f%2FnCAjad&X-Amz-Signature=9d0941da31321b7a087a7c97baee7b1f4af41fb2c52f50e184ecc0e4f39cc134&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

