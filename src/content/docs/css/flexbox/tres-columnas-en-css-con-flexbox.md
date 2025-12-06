---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664D553ZO5%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T231840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2eA2m3ir3DM79CivgeGvXi1YagTrsAOgBR4JA5tF8UAIgQhu9iLiT9IPD6H8hwbB5tGAQBnT0vKcfPUqeyjyP2zIq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDLxfuvuoncEYrzl8JircA%2FKJWniLx0%2FVt4HyxtAScUtHNB%2Bw124vOPHT4kya%2FWG9t5NNfSv%2BYkYjKS3NV%2BcfIi10SZaxZu6is0GepExurUMkRyUt0lVyztN90zkuxBRRtSKv%2FGD2nWT%2FRUqv6u5Z8B4qzP1Ifv%2BEZ7pYJkegfQOPuAS92T8RVqUkca36xHQeTax9zK6Z4KVjdgD6plzi7IH9ffayB4ndBMjpzSuZv1rb824EtQulWUWVuzFgomW8ZeCa8pGHZlxL%2Fp%2Fb88Mfg6vQk5Ls42lCigQnDyyvU2w1bng71%2Bsgcm4U9S5NIu98qq7DHe%2FqECExUS%2B9stN8r9eU9TWqd6ir3C%2BVImDiiZ4naovE4eBR6YSv%2BccVFug%2Bjf8Y%2Fv5cZkwlmH8zDGUB0tagtWeq2WwrDcc4QoPjC9JRJV8GoaQFTzIzMjIKcTgq9WwOp9ITqgTOU%2FzCegbo0jDvcsz9jl5h0FScAqkgYNkidCaPO4WiRHzEljUl2NruxfuG1%2Bifk2lafeOIexSWlRVka%2FQN1LMzQnVJZbqaeEv6X4dP3zlRw8NEbjDVpgAyPB4Aa41Ho%2B%2FAXjhPb48JEbVeWIEKrfzWRdY3GSoofsEv91MqbIvPkQj36JOhgY8WuPHQXn0arfSCkM3nMM%2FU0skGOqUBJ%2FlKuFFteqrrjOfo0seKhS%2F6aNWnQS2ZBGPYjTXC2SkjhU5FBOdN6ocdolRdHe347bFFy2QYnRjegwTjSaqW17Ot6w2f8Rd9xWD0r46PWRq2g0r%2FdV80ukJXRu07fu3rQSieZDrQHs6ypsKBsYQXhQ%2FAJpa8k0SAwg8ICkmNv2LXUUjIcJiptxCZcJlFZPkouBSGTwavBa6xiXc78IHdemrMfK1i&X-Amz-Signature=4a3981d91c7b185e326fe61fec829891b7f012716b4d7678cf144d8388585b9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664D553ZO5%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T231840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2eA2m3ir3DM79CivgeGvXi1YagTrsAOgBR4JA5tF8UAIgQhu9iLiT9IPD6H8hwbB5tGAQBnT0vKcfPUqeyjyP2zIq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDLxfuvuoncEYrzl8JircA%2FKJWniLx0%2FVt4HyxtAScUtHNB%2Bw124vOPHT4kya%2FWG9t5NNfSv%2BYkYjKS3NV%2BcfIi10SZaxZu6is0GepExurUMkRyUt0lVyztN90zkuxBRRtSKv%2FGD2nWT%2FRUqv6u5Z8B4qzP1Ifv%2BEZ7pYJkegfQOPuAS92T8RVqUkca36xHQeTax9zK6Z4KVjdgD6plzi7IH9ffayB4ndBMjpzSuZv1rb824EtQulWUWVuzFgomW8ZeCa8pGHZlxL%2Fp%2Fb88Mfg6vQk5Ls42lCigQnDyyvU2w1bng71%2Bsgcm4U9S5NIu98qq7DHe%2FqECExUS%2B9stN8r9eU9TWqd6ir3C%2BVImDiiZ4naovE4eBR6YSv%2BccVFug%2Bjf8Y%2Fv5cZkwlmH8zDGUB0tagtWeq2WwrDcc4QoPjC9JRJV8GoaQFTzIzMjIKcTgq9WwOp9ITqgTOU%2FzCegbo0jDvcsz9jl5h0FScAqkgYNkidCaPO4WiRHzEljUl2NruxfuG1%2Bifk2lafeOIexSWlRVka%2FQN1LMzQnVJZbqaeEv6X4dP3zlRw8NEbjDVpgAyPB4Aa41Ho%2B%2FAXjhPb48JEbVeWIEKrfzWRdY3GSoofsEv91MqbIvPkQj36JOhgY8WuPHQXn0arfSCkM3nMM%2FU0skGOqUBJ%2FlKuFFteqrrjOfo0seKhS%2F6aNWnQS2ZBGPYjTXC2SkjhU5FBOdN6ocdolRdHe347bFFy2QYnRjegwTjSaqW17Ot6w2f8Rd9xWD0r46PWRq2g0r%2FdV80ukJXRu07fu3rQSieZDrQHs6ypsKBsYQXhQ%2FAJpa8k0SAwg8ICkmNv2LXUUjIcJiptxCZcJlFZPkouBSGTwavBa6xiXc78IHdemrMfK1i&X-Amz-Signature=83939974e4997421409e6a963390a7ecd89ab50922ddbd4e6145636990aecd6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

