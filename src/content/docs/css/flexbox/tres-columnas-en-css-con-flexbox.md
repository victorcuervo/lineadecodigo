---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NSTUKP4%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T015640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCb9iHrzHFPc1iYA%2FWNQAwNT9zhn%2BPdfDqF77F9srlu7AIgAmyexx9%2FC504IVa6bj4Si%2BBAaeUI%2BIvrhTvLHw9wU6sqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIzCwwMXaGZIJi9mZyrcA6kCnK2Q5emTgUBkCe4mC%2FrpPdiqHwZuqvxXjf5cda2yFEgOaUg%2B3MXSSN%2BZw%2BdAnV%2FDk0GzvxvGjqZEY179teWGoi3rcoI174DMed8SNbvstEuLUY1KoCLb7tPiFrLSgSguXmqev%2FB%2F38QXoc%2FvUClBcuab9jzDrWkCuH93SLZGovBJRpkLA%2BtlRzneVn%2F9yc%2FwHgjg1oNtxcvEpXdGTm2UG8%2F5yDNBWr%2BT4yMj5GWLxySqhRnSnHCcnNhhOZUn%2BqtzLBqD%2F1oO%2Bc7K%2F3oyOOW%2Bn0v2Q88Ld6FpJPeiqqlJqmfEQ5Jqv4GjONHDfY4ufZ6%2BYRNm5B27lRRY9Yo2de9ZuGEn5PNMM6ZnuqwAFi0CAHvExS3INIVgp9ntqIMtBCIGuXmRbu1MutOc%2BoW9Lm1VMhPXatvbVsV8zGcah6TkMIrmHyxQxHjiO8JO70VUKqBNHcTA0qjI%2B8mvpF3mq2cBGHU3JZcxHJrssUbh8O6D0vSSrXrJwH%2BRnSQXGE0m6TwCl8rMGw%2F4b6wlEVMW8PPfuNmNj9F0tmC5zoPB4YG4m4DUFQMc6Q6NeH14xMTxoF8bBlYIYHaJT4jwlvgLZmtYTXYRvnbDOOluYflNm79IvjfoTFb7XRKagn9yMO7o3ckGOqUBaE49oLmD4pOLEqXb2mH8cyeNyi%2FU0vSeHApEZsXYyQLi7OdIKXr%2B7ZrGM3fADM%2B9L5ebCuEzVf3Cg5QMzXvZny%2Byqgz5hEp6g5cwCHksBxaUlm%2FaQVSTF4Y9rmrWm9wbYzSs%2F9S1w%2FDt355qhHdOe8vvj3OrhdnMfaoNqCTIsgUko6MkVkJEf5yGtcJ48zJJkMGnds%2FSEVAqZszXYKvXiM7RH7yc&X-Amz-Signature=625e9cc89ac834f599f70bf7fcdbe92e4bc0b211a149854e499243839a17ab6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NSTUKP4%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T015640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCb9iHrzHFPc1iYA%2FWNQAwNT9zhn%2BPdfDqF77F9srlu7AIgAmyexx9%2FC504IVa6bj4Si%2BBAaeUI%2BIvrhTvLHw9wU6sqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIzCwwMXaGZIJi9mZyrcA6kCnK2Q5emTgUBkCe4mC%2FrpPdiqHwZuqvxXjf5cda2yFEgOaUg%2B3MXSSN%2BZw%2BdAnV%2FDk0GzvxvGjqZEY179teWGoi3rcoI174DMed8SNbvstEuLUY1KoCLb7tPiFrLSgSguXmqev%2FB%2F38QXoc%2FvUClBcuab9jzDrWkCuH93SLZGovBJRpkLA%2BtlRzneVn%2F9yc%2FwHgjg1oNtxcvEpXdGTm2UG8%2F5yDNBWr%2BT4yMj5GWLxySqhRnSnHCcnNhhOZUn%2BqtzLBqD%2F1oO%2Bc7K%2F3oyOOW%2Bn0v2Q88Ld6FpJPeiqqlJqmfEQ5Jqv4GjONHDfY4ufZ6%2BYRNm5B27lRRY9Yo2de9ZuGEn5PNMM6ZnuqwAFi0CAHvExS3INIVgp9ntqIMtBCIGuXmRbu1MutOc%2BoW9Lm1VMhPXatvbVsV8zGcah6TkMIrmHyxQxHjiO8JO70VUKqBNHcTA0qjI%2B8mvpF3mq2cBGHU3JZcxHJrssUbh8O6D0vSSrXrJwH%2BRnSQXGE0m6TwCl8rMGw%2F4b6wlEVMW8PPfuNmNj9F0tmC5zoPB4YG4m4DUFQMc6Q6NeH14xMTxoF8bBlYIYHaJT4jwlvgLZmtYTXYRvnbDOOluYflNm79IvjfoTFb7XRKagn9yMO7o3ckGOqUBaE49oLmD4pOLEqXb2mH8cyeNyi%2FU0vSeHApEZsXYyQLi7OdIKXr%2B7ZrGM3fADM%2B9L5ebCuEzVf3Cg5QMzXvZny%2Byqgz5hEp6g5cwCHksBxaUlm%2FaQVSTF4Y9rmrWm9wbYzSs%2F9S1w%2FDt355qhHdOe8vvj3OrhdnMfaoNqCTIsgUko6MkVkJEf5yGtcJ48zJJkMGnds%2FSEVAqZszXYKvXiM7RH7yc&X-Amz-Signature=1b1017ecb32ec2134e852cd71a6cb5ad3f44e7001152c2b74883686af90eabac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

