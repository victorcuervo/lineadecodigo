---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQ5YEQTA%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T132515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwkZ3lexdjuw%2BmWJzsem2BwpQKmiCUmuP9WBYlHcIg%2BgIgH40BjBSzu61DKX8LJiTyQz4DR3iNJwMN8fHxQtQKlzkqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGg0ZPAmLDxBZMEx4ircA%2FkrI7ME53VLBDEUi5DFFzULMsyN20LmyrGjZS2fT68psIMpnp53QDCencMwY94Rb3p%2FR%2BM%2Fv7KGQzFY9LZbcSqGetbQgfoze9ifBdbWpnhif8szYhZROj4SnJLV4ZXmAyLDmqGbEpFh9V1MNBXNjb0tJZmijLN1FQNhjFLajEFkbLUAQlQ2rBkVGMYmvktzmlO%2FCGfVzlpZbyKkD2Omz4N7Kda0F0ZPYHTmQBNi4WtRyR8pZGCVkE7jGe7poGDMGXq6oQHltxxtHdqB3BVwt6FCOTN0125wIMfDZHec5rBKsDeuoHukBu9oeX1n2%2BWtkemSIZjOyu78mkmMmSBRipAGoNNUcJHjrF01IBB1MuQChTGwWWoTEkeXPBsVaxpfzSgQVNIdgAwxzVL1tFqmEodBzRO4Ip7zOKI5IbWGHGd1nEjUs4b%2BlqrhuWOsOdpXsJOKGtVLfxQe10T%2BiUcxZ6JTQRbZO%2FN9XI82JV2dmn9aaqJD2%2FXRygotETOuYbrdRL1gPsGHv9YZ6ocOunUGF1qFhJXeizgNuCtpOkMbg2MvXwNVo4esaWNwEkpPRroYvuGHHqk3pBplWlfM76qWZG9wT7Hj%2B2UuBernOi36GNnsitJNnN%2FurSUJ0zaiMKyZ1ckGOqUBn8VHKaCkP0%2Bq2lnYcThqOE%2B47DFrwH0bNyvPw2lFYtdsNnqszNm0SU0u6tDfKfCMzSSf8FUY4tDLR6WnRXCn9ujNX66Xsa5qqbqAtthA1bEoWy%2F0S3PxxGC445po5wG86%2FxiiUYtsipWQbayWSWoQ%2FALYzJ6DMaOFsr2n8FX6dz9b5NbWHzCHetKgzpz8rYUVgnRzySKgt1KInlK4UeykSRl5hS2&X-Amz-Signature=e54d362f7fe3ca4ff7f945db7deb2f98afcd1a9b51043f4cb6a3202e3258a48f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQ5YEQTA%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T132515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwkZ3lexdjuw%2BmWJzsem2BwpQKmiCUmuP9WBYlHcIg%2BgIgH40BjBSzu61DKX8LJiTyQz4DR3iNJwMN8fHxQtQKlzkqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGg0ZPAmLDxBZMEx4ircA%2FkrI7ME53VLBDEUi5DFFzULMsyN20LmyrGjZS2fT68psIMpnp53QDCencMwY94Rb3p%2FR%2BM%2Fv7KGQzFY9LZbcSqGetbQgfoze9ifBdbWpnhif8szYhZROj4SnJLV4ZXmAyLDmqGbEpFh9V1MNBXNjb0tJZmijLN1FQNhjFLajEFkbLUAQlQ2rBkVGMYmvktzmlO%2FCGfVzlpZbyKkD2Omz4N7Kda0F0ZPYHTmQBNi4WtRyR8pZGCVkE7jGe7poGDMGXq6oQHltxxtHdqB3BVwt6FCOTN0125wIMfDZHec5rBKsDeuoHukBu9oeX1n2%2BWtkemSIZjOyu78mkmMmSBRipAGoNNUcJHjrF01IBB1MuQChTGwWWoTEkeXPBsVaxpfzSgQVNIdgAwxzVL1tFqmEodBzRO4Ip7zOKI5IbWGHGd1nEjUs4b%2BlqrhuWOsOdpXsJOKGtVLfxQe10T%2BiUcxZ6JTQRbZO%2FN9XI82JV2dmn9aaqJD2%2FXRygotETOuYbrdRL1gPsGHv9YZ6ocOunUGF1qFhJXeizgNuCtpOkMbg2MvXwNVo4esaWNwEkpPRroYvuGHHqk3pBplWlfM76qWZG9wT7Hj%2B2UuBernOi36GNnsitJNnN%2FurSUJ0zaiMKyZ1ckGOqUBn8VHKaCkP0%2Bq2lnYcThqOE%2B47DFrwH0bNyvPw2lFYtdsNnqszNm0SU0u6tDfKfCMzSSf8FUY4tDLR6WnRXCn9ujNX66Xsa5qqbqAtthA1bEoWy%2F0S3PxxGC445po5wG86%2FxiiUYtsipWQbayWSWoQ%2FALYzJ6DMaOFsr2n8FX6dz9b5NbWHzCHetKgzpz8rYUVgnRzySKgt1KInlK4UeykSRl5hS2&X-Amz-Signature=16b1f7b256ad656b3960af234f31593a95026e1c8886ccee745b41e720a436e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

