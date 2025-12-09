---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QLZNZIW%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T015454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSJPtEdOX4NSXp8QQ2ZPRrBLq4ya8GeZvFVpdLwTSxuQIgAqsoXveo2kZl5Tym7OkcVPRjuytQONir1%2BbgKhLH22AqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC%2B6AhhfNQXCZvPHcCrcAwCxQpXcb%2B324VOlU6YbuwnPCGhE3SOlWy81GAfeqIq9TRe7GBMBriOEIuWX070%2BROdhf47fE64S%2Bvmh%2FHySlCG5dtjDKbJB31DmGg2swlAI6AwlkR0Mmd6slscNCD5q%2BlwdQRMrYHcn3bnd%2FNBbNhewkn1pqsBEwkfVVl2ZRe1B7C4VdW3OV6SYAOTlR9gcJOXpQHqYU1hvsQBotLlZLXGtaq2mMoNYRxiBXFe3QtRBw5B4babcxTC1qmgYW0a%2FrG336HhDlNDiFO3EhUbNlTJgczbhM6xZPaRF0z1NQDgX5sDKRwvUzCDkTb0V4oRVL33T0i9QXWPFKv%2FmnwXqycBpIUl51QeO0U2lJKVZL3Zzz9ibkKNlXIRihk5gQczMGxvhRVA3mkQ07asjXYetocM5BCt%2BnZHJblDFpbBzbseYebVLsRKDLEqzITK8mhDtHOtLtnu9mYt0vDHCBEAWuf9zzzIUGBzLZcR9RnQ1kjPww53iTxLErYBIJy1J9aSXGTM%2B3d2%2BjQJTcWn3t9bs7LfT4hoDL67Cw3BZ4XubWl0LCtmrAbhLsVq9UPFwbw4shKuxWYA8u9r%2Bi7Bwj3ZJhC1qF8jYcOwWHKM%2FAOGtNFubSCySOV%2Bwu2n%2BRYYfMO3o3ckGOqUBJu9fvh%2FrsMvKzTzQuefkgKoroKNYcK7tbj%2B9ItcfAlR688Dk2aEWiiXchMcFQ9un%2BGaK17ssY4IWEaLor%2FCj3CM%2B5MK80AQjFroK63iTlg74qpId4eN1dArVgo966IHZrTq2OS34HlGy9r5n36%2FVoj1djvLOptiI2%2Bj5NyDQrth6AQT3QklQ5nqTx8XITtqp221egSjBagVuHWu7UKW05HoTr%2FU1&X-Amz-Signature=1f7f9cd42aab8cd1bb60e6389ac512af2083aa53915375e98d7de4bfe1474b6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QLZNZIW%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T015454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSJPtEdOX4NSXp8QQ2ZPRrBLq4ya8GeZvFVpdLwTSxuQIgAqsoXveo2kZl5Tym7OkcVPRjuytQONir1%2BbgKhLH22AqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC%2B6AhhfNQXCZvPHcCrcAwCxQpXcb%2B324VOlU6YbuwnPCGhE3SOlWy81GAfeqIq9TRe7GBMBriOEIuWX070%2BROdhf47fE64S%2Bvmh%2FHySlCG5dtjDKbJB31DmGg2swlAI6AwlkR0Mmd6slscNCD5q%2BlwdQRMrYHcn3bnd%2FNBbNhewkn1pqsBEwkfVVl2ZRe1B7C4VdW3OV6SYAOTlR9gcJOXpQHqYU1hvsQBotLlZLXGtaq2mMoNYRxiBXFe3QtRBw5B4babcxTC1qmgYW0a%2FrG336HhDlNDiFO3EhUbNlTJgczbhM6xZPaRF0z1NQDgX5sDKRwvUzCDkTb0V4oRVL33T0i9QXWPFKv%2FmnwXqycBpIUl51QeO0U2lJKVZL3Zzz9ibkKNlXIRihk5gQczMGxvhRVA3mkQ07asjXYetocM5BCt%2BnZHJblDFpbBzbseYebVLsRKDLEqzITK8mhDtHOtLtnu9mYt0vDHCBEAWuf9zzzIUGBzLZcR9RnQ1kjPww53iTxLErYBIJy1J9aSXGTM%2B3d2%2BjQJTcWn3t9bs7LfT4hoDL67Cw3BZ4XubWl0LCtmrAbhLsVq9UPFwbw4shKuxWYA8u9r%2Bi7Bwj3ZJhC1qF8jYcOwWHKM%2FAOGtNFubSCySOV%2Bwu2n%2BRYYfMO3o3ckGOqUBJu9fvh%2FrsMvKzTzQuefkgKoroKNYcK7tbj%2B9ItcfAlR688Dk2aEWiiXchMcFQ9un%2BGaK17ssY4IWEaLor%2FCj3CM%2B5MK80AQjFroK63iTlg74qpId4eN1dArVgo966IHZrTq2OS34HlGy9r5n36%2FVoj1djvLOptiI2%2Bj5NyDQrth6AQT3QklQ5nqTx8XITtqp221egSjBagVuHWu7UKW05HoTr%2FU1&X-Amz-Signature=5e8017341a340f51c73a6e995c0943620c3bf11dafcfefc03a7403dc508cea57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

