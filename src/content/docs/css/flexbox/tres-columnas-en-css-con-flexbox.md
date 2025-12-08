---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626YHDBGP%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T082534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9cnDp%2FbmXemKXwStMH7zAllrwtIwZwTFtgkKPpavnowIhAOuNmF87BKNryc7DBuETFYPwZ%2Fo3QNB3EbFOgKGqj9JwKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyyawPsWt6pPycOa2cq3AM3mGh3en8nC7h%2FtWRC3a6Lpk0UEsCfC7v2FavEj9EV%2Ft%2FLuQeWMU7vP4xpmEBfeefa1Kmk9y6ZQuLYHf6W50et1WP%2BBVb%2FOrrRlEvcE%2FGTkmFNGrdHHNfzjmi9Phgb4vR9%2Bdp8VANnzhJ9lqGJZ8HHAKtLvP4i0vE7PXdQTEHqyck4bVzfd%2BKdH8lZJ0sknnBZkiYJIAzqgayC2%2BH4LleveH4R2QHQ0Lqaq2nK746N2bk7Gr9GMr8FjFFmTjVKyX15NDh7pROug2aAdFBrkH%2FggPch0xI2aB63FLUdEkCbs6kuPRKvF66iWstMX%2FBomSG3Y2kofCMGRlp%2FC7tMvUSWSnyTCQyiNRY53vPGJ1oMc9%2FAqufOHC78d87ZDIir9rFS9lxvD5qU4dMn9KusJEJARDLfSFgzE1%2FtdPXfhnff4l8BtDGSdsy6X73WxiCCtLW4UrAFwhbXeYqkvUKT1UiYWoNbWUkKJk3RIb2hub0ucuvk4TafapW9VzSBxZuKGWlA6bTzLhjTTH97hAaHHNIBUxw%2FPVuzTb0LiIw96SNuYH%2BfysuugUm9Aoem%2FqmBtxFBxSwjTxuO6jjiBcyTv%2FxB7ah0blhSyM7dcchDBUN%2B9KjE7oKK%2B9sxla4THjCo7dnJBjqkAQQPp%2BJroHWfetnX3ti40fKAeApbKTYB2v8daGyczYiC%2FCpuluUyqiepzAxBL8sRpQ9ffs9d3J8FKhA%2FrOG5s8M1ZKMG1xjGaBPsUeAlwhZrpkzgUUrpZrJp7fqdsbc4YDLSYgur4Z52pAcdUABpKYCCjFHRmNohslN650SG2bnwX88OVoLaZH7IaoPCxI6512oJg9heplsqGSCL26VnpcHvW2h8&X-Amz-Signature=3bdfe7f0656f30d23dac0ecc403ec6125c592f24ba76f41606a2df3a9794d7ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626YHDBGP%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T082534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9cnDp%2FbmXemKXwStMH7zAllrwtIwZwTFtgkKPpavnowIhAOuNmF87BKNryc7DBuETFYPwZ%2Fo3QNB3EbFOgKGqj9JwKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyyawPsWt6pPycOa2cq3AM3mGh3en8nC7h%2FtWRC3a6Lpk0UEsCfC7v2FavEj9EV%2Ft%2FLuQeWMU7vP4xpmEBfeefa1Kmk9y6ZQuLYHf6W50et1WP%2BBVb%2FOrrRlEvcE%2FGTkmFNGrdHHNfzjmi9Phgb4vR9%2Bdp8VANnzhJ9lqGJZ8HHAKtLvP4i0vE7PXdQTEHqyck4bVzfd%2BKdH8lZJ0sknnBZkiYJIAzqgayC2%2BH4LleveH4R2QHQ0Lqaq2nK746N2bk7Gr9GMr8FjFFmTjVKyX15NDh7pROug2aAdFBrkH%2FggPch0xI2aB63FLUdEkCbs6kuPRKvF66iWstMX%2FBomSG3Y2kofCMGRlp%2FC7tMvUSWSnyTCQyiNRY53vPGJ1oMc9%2FAqufOHC78d87ZDIir9rFS9lxvD5qU4dMn9KusJEJARDLfSFgzE1%2FtdPXfhnff4l8BtDGSdsy6X73WxiCCtLW4UrAFwhbXeYqkvUKT1UiYWoNbWUkKJk3RIb2hub0ucuvk4TafapW9VzSBxZuKGWlA6bTzLhjTTH97hAaHHNIBUxw%2FPVuzTb0LiIw96SNuYH%2BfysuugUm9Aoem%2FqmBtxFBxSwjTxuO6jjiBcyTv%2FxB7ah0blhSyM7dcchDBUN%2B9KjE7oKK%2B9sxla4THjCo7dnJBjqkAQQPp%2BJroHWfetnX3ti40fKAeApbKTYB2v8daGyczYiC%2FCpuluUyqiepzAxBL8sRpQ9ffs9d3J8FKhA%2FrOG5s8M1ZKMG1xjGaBPsUeAlwhZrpkzgUUrpZrJp7fqdsbc4YDLSYgur4Z52pAcdUABpKYCCjFHRmNohslN650SG2bnwX88OVoLaZH7IaoPCxI6512oJg9heplsqGSCL26VnpcHvW2h8&X-Amz-Signature=fd89ec3c622691e624c80d64fd34c021e93170d997ade9de54c3c580669f46bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

