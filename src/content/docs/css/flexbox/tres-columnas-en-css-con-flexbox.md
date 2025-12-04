---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MLTETJU%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T080754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQDPOMib%2B3bulJi0WjWM%2BwKgTHTFJ4voShJM9UA9uwycLwIgZyCjPzgdUIur%2BnW1aT4%2FEdIS6yLd7koII%2F2%2BSfS4%2BAwq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDMfwYWY2x%2BO6xGoPSyrcA0bv8VY4nJLDDRQBoTGiTovzr0z6ZuHC7lemTq7Yx439ZE%2Bu54SabKcZmeBDlrHMhvikVjrnxMFP%2FZZqloKzeDwCtJns8bIDYljAGHvvdssrjWRsgwON9Z2guwgqyZbrUT4dJ0a8SAbQx0opayTxKYUVqn3HeOPuXUQQvehDbMuxr0teJrt63CjdXWmMFAMoU%2F8TSiMHmhinuhel9VEAedI0%2FxtJy%2FzrkKeb%2FP6SfwzIhGaM%2FKHcu3SfHWXgm5cBDEbNdI5yJdKDjdPFuNb5a%2BY5vvK%2BA1lQ5niNNlOdseHz0Kitg191QwBgfMkm4W0VT%2FAwzlAlPPOqXcEvhRrXkCEpQH4TrDvVVw8g3SHAjCJj4kt1Z%2BrUSV7wExJvU7rvS17eRSO65GbZND9BCyCycIIXXn7OJlnlv19OSrV9j7AA5rRmM00elt0IAoz28j4zoHGtMmoud%2FWORq65pNbTna0vJsSIdd3tWSKymgeztP3Kx3R77JiBfrzZSDYapMJlaX7IXQ3NoC7yinx%2BU30XcdnMiesemi1mN07ezXdYnTuJ1jhK%2B8fxRUskomWr4ndRPNJ89bqePN2Doz0fLslict%2FIcqydIkCx0VHczyQ5gIVNx4MtcJ8z3Uh%2Ffl9gMOroxMkGOqUBBxsBiV47wWvn7ZEFoj2Fx3z2%2F%2B3%2FPIY6ajz0u9by3V1rNRIUw5a6gLyDEKtFIdLk0Z288SggusnNhBn%2FtsTQ8bgIKnR5HTu%2F4y2NTOOr0JiNBXuuXyYUjLU9rifqfB%2FsIV1Ol5icyKTaY5OH93WvcL3OhWLbEq0dTrufeSoA7NN6tRwqC0wMXaOmkWrybtGLcb99t%2Fm94xs1CGJi0lw7glbSJjy4&X-Amz-Signature=26e01e6ff155a5de952f5ef4a56291bbcac1c87cc25001ffa704a953192ee56b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MLTETJU%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T080754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQDPOMib%2B3bulJi0WjWM%2BwKgTHTFJ4voShJM9UA9uwycLwIgZyCjPzgdUIur%2BnW1aT4%2FEdIS6yLd7koII%2F2%2BSfS4%2BAwq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDMfwYWY2x%2BO6xGoPSyrcA0bv8VY4nJLDDRQBoTGiTovzr0z6ZuHC7lemTq7Yx439ZE%2Bu54SabKcZmeBDlrHMhvikVjrnxMFP%2FZZqloKzeDwCtJns8bIDYljAGHvvdssrjWRsgwON9Z2guwgqyZbrUT4dJ0a8SAbQx0opayTxKYUVqn3HeOPuXUQQvehDbMuxr0teJrt63CjdXWmMFAMoU%2F8TSiMHmhinuhel9VEAedI0%2FxtJy%2FzrkKeb%2FP6SfwzIhGaM%2FKHcu3SfHWXgm5cBDEbNdI5yJdKDjdPFuNb5a%2BY5vvK%2BA1lQ5niNNlOdseHz0Kitg191QwBgfMkm4W0VT%2FAwzlAlPPOqXcEvhRrXkCEpQH4TrDvVVw8g3SHAjCJj4kt1Z%2BrUSV7wExJvU7rvS17eRSO65GbZND9BCyCycIIXXn7OJlnlv19OSrV9j7AA5rRmM00elt0IAoz28j4zoHGtMmoud%2FWORq65pNbTna0vJsSIdd3tWSKymgeztP3Kx3R77JiBfrzZSDYapMJlaX7IXQ3NoC7yinx%2BU30XcdnMiesemi1mN07ezXdYnTuJ1jhK%2B8fxRUskomWr4ndRPNJ89bqePN2Doz0fLslict%2FIcqydIkCx0VHczyQ5gIVNx4MtcJ8z3Uh%2Ffl9gMOroxMkGOqUBBxsBiV47wWvn7ZEFoj2Fx3z2%2F%2B3%2FPIY6ajz0u9by3V1rNRIUw5a6gLyDEKtFIdLk0Z288SggusnNhBn%2FtsTQ8bgIKnR5HTu%2F4y2NTOOr0JiNBXuuXyYUjLU9rifqfB%2FsIV1Ol5icyKTaY5OH93WvcL3OhWLbEq0dTrufeSoA7NN6tRwqC0wMXaOmkWrybtGLcb99t%2Fm94xs1CGJi0lw7glbSJjy4&X-Amz-Signature=033293ca3c4cbc8d456d38e29fb87477095a73dd02cd0c2bd2e650d361a0c3cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

