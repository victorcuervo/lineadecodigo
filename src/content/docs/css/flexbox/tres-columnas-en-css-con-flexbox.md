---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676TBTCXV%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T034628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSn%2Fc4b98llB3gEaZdwzyXauTfaVUoq33EQMRpWDLc7AIhAIe4%2Bd1v4BLY5NS7o4Kss7ekD2bwJZWu3QuDNVBsB03mKv8DCG0QABoMNjM3NDIzMTgzODA1IgwlIbJiKW60fdvHS2cq3APKVpe%2B1XoKFj%2BfiCPQDk0UNi3ThELF69d1LVuyrNhEvL6RvZzKcU7tjBqFWu1Zmjb0ZZ7Kyp6QJu%2B0oRTE2yPgP6xs34o3edRf%2Fe1RnDWWIqdQSfZY3qXwJlcy6IkimyMMEeDGQj8KtNSVMtYIYJkzYhXeiWO5CuH73%2FNGyGk%2FjPXBwsSlqJnqI%2FYXO%2F3lvRmkm%2F%2B5YhrTs1R9gZmTq23VUnIOhZ%2BrXZKyQ88c%2B0vuViNwPFJ%2B2Gxoby93%2Fp4H2fS%2FnoTTg4xpqOVxGLWyyXWkNugSbjBDp4fSg3LVk3o3LKLeJoC9lUTmhwYGjXn%2BiTuq09yh78iiQ9aQddwPz6iJaqNm7KQ%2FrlF4ja5JPCYuNah05hFka5AqyfGn%2FlwAaq9kNJ1FuhkY3Qfv5bjAJtX1uR%2BmlaAW%2FnxBJNury7I7azpVA6GMYObFDNopi1F7y1L9dCYbHIoQnmUG%2BvLv7AYj%2F%2F%2FY40OYkcNTMxd8%2BWClcuRuaKm4ccqUzJosDGGFP7YIbqIMGVOFsbt8Zq09nsAxsolTI1ULJgd0GPsEaC%2FerAU3Wk8Il8UEtaYnctxYOSnHm1aKA6FXTQEu7ijNbxyzVcBkLjjhjMgnO8xufWxsuvDCmBDn1MeBP6LSQzCww87JBjqkAYPsQuq4dLWyUe3tdUW0GeqfUkJL9fmf1hk9kNMl4rUCAX3WhseiljatxU%2BB2HG14tTzkwKaVf34SwJUI0lENNat8LfvpeE%2B5UNvrIc8EzSnV263RlOQb4t89BuXEwvjN1PboYQhAD4Pzk3CCvowtW5KSr13hRVL1Ub398%2Bb7EwbIRUT4WazuFKpe%2F9bbAuR9oFJ4Hy8H1cyIXLb0ZWtC%2BlxoGyl&X-Amz-Signature=f5055c6950d579fe6d08db4c95fe207cbaf5f1c81646f1e2c8e6be6cd606687d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676TBTCXV%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T034628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSn%2Fc4b98llB3gEaZdwzyXauTfaVUoq33EQMRpWDLc7AIhAIe4%2Bd1v4BLY5NS7o4Kss7ekD2bwJZWu3QuDNVBsB03mKv8DCG0QABoMNjM3NDIzMTgzODA1IgwlIbJiKW60fdvHS2cq3APKVpe%2B1XoKFj%2BfiCPQDk0UNi3ThELF69d1LVuyrNhEvL6RvZzKcU7tjBqFWu1Zmjb0ZZ7Kyp6QJu%2B0oRTE2yPgP6xs34o3edRf%2Fe1RnDWWIqdQSfZY3qXwJlcy6IkimyMMEeDGQj8KtNSVMtYIYJkzYhXeiWO5CuH73%2FNGyGk%2FjPXBwsSlqJnqI%2FYXO%2F3lvRmkm%2F%2B5YhrTs1R9gZmTq23VUnIOhZ%2BrXZKyQ88c%2B0vuViNwPFJ%2B2Gxoby93%2Fp4H2fS%2FnoTTg4xpqOVxGLWyyXWkNugSbjBDp4fSg3LVk3o3LKLeJoC9lUTmhwYGjXn%2BiTuq09yh78iiQ9aQddwPz6iJaqNm7KQ%2FrlF4ja5JPCYuNah05hFka5AqyfGn%2FlwAaq9kNJ1FuhkY3Qfv5bjAJtX1uR%2BmlaAW%2FnxBJNury7I7azpVA6GMYObFDNopi1F7y1L9dCYbHIoQnmUG%2BvLv7AYj%2F%2F%2FY40OYkcNTMxd8%2BWClcuRuaKm4ccqUzJosDGGFP7YIbqIMGVOFsbt8Zq09nsAxsolTI1ULJgd0GPsEaC%2FerAU3Wk8Il8UEtaYnctxYOSnHm1aKA6FXTQEu7ijNbxyzVcBkLjjhjMgnO8xufWxsuvDCmBDn1MeBP6LSQzCww87JBjqkAYPsQuq4dLWyUe3tdUW0GeqfUkJL9fmf1hk9kNMl4rUCAX3WhseiljatxU%2BB2HG14tTzkwKaVf34SwJUI0lENNat8LfvpeE%2B5UNvrIc8EzSnV263RlOQb4t89BuXEwvjN1PboYQhAD4Pzk3CCvowtW5KSr13hRVL1Ub398%2Bb7EwbIRUT4WazuFKpe%2F9bbAuR9oFJ4Hy8H1cyIXLb0ZWtC%2BlxoGyl&X-Amz-Signature=e0c93f9710c8001d0ad6c26f6640395c1b2da3979879a7031593f930b28e7b59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

