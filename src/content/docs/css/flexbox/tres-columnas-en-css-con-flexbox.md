---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642LJRNVI%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T170918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICkL1CM2MjV%2BTM1dn7ao8peIeM5tD2EhNAGPfCiM0wQXAiEAxZrs9eNUB7dVQ8YSi7F4%2Bumd6b0Z3yuyrPFNg0VceMIqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBIAKGbEXB0k79aARyrcA88N7qOc5gu%2Fvwwb2J%2FmLB0%2FhxetcF1%2BRKS1nkeN%2FMyqWJWW5vHCQJYo9eE9zRJgRkDiLTV1ZkoUesXVBodduQDnXJKuaV1rspp48u4qJd60qz3IEvYjI9v3ryhYjNxAxZK29qtHdFTk0xS32pi35AGiyD%2BiPVte%2BNeDCJUzv49n40KGkwk9BhKhXdoaT%2BEPMj5aoIG4SCagZsdaYweP01uqjmfzSyt87kPYbfqiaG3ioQdlJU6KNedb8Es57FsYSx78ATvjScDG7B9w%2B8AWAgisbM%2BWsiU4qymHjiq3kRHtAML8jAq4qZAzpu1ES4vXuVx4PvIgdPfQc43uEnbEBafYjloQPmtxdWYt5LWvVvuqbzuY%2BXQSvuNO4gpYAF8VXzqIyGzlkX4R3cgBvxPKuCc1P7Um0drzRXSLtxmT%2BkwrSbpATEKXp9PYekHJlXA7S3WKPN3kNHn8FGMXMz7ke120qlpqaQm3dOauf5GG9Z68MypAXEuKToLEM8yKibLqoN2nYLEsbVIInlwvlQBiaf9ZfySyeRY8Ggqiknu8T%2Fjt1vlChDroXR1WxfR1IEC5rAdJR3284gY0EXVm46rhU3DbalNGC6MOO87QyIPZAftAyZG3F32cEo9dXdpSMOaG3MkGOqUBba8Zfpeb0Us60FPx%2BcETjcBdbO27O9%2BAt0LUlxDgOF6coIxedTOT7vxKv%2B4VQmut5n8fbwEiUunpNZR3tGoW7K54heES%2FQXnm462HQEKeTmZuB1HjdkTiuMTcgKFoJIaKNfrUF9pA3TfXax24n82iigMONdmILKYQgfwPY2D1g2%2BN7c%2BUWCYVr9AcaGriJJaKVBvVf%2Bdo4uNKV7l2SB1rSZkLXlk&X-Amz-Signature=f6f387400fa37c9cb1c5548607c2a490460a816a584547cc6f0aeb61eb4e6fb1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642LJRNVI%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T170918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICkL1CM2MjV%2BTM1dn7ao8peIeM5tD2EhNAGPfCiM0wQXAiEAxZrs9eNUB7dVQ8YSi7F4%2Bumd6b0Z3yuyrPFNg0VceMIqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBIAKGbEXB0k79aARyrcA88N7qOc5gu%2Fvwwb2J%2FmLB0%2FhxetcF1%2BRKS1nkeN%2FMyqWJWW5vHCQJYo9eE9zRJgRkDiLTV1ZkoUesXVBodduQDnXJKuaV1rspp48u4qJd60qz3IEvYjI9v3ryhYjNxAxZK29qtHdFTk0xS32pi35AGiyD%2BiPVte%2BNeDCJUzv49n40KGkwk9BhKhXdoaT%2BEPMj5aoIG4SCagZsdaYweP01uqjmfzSyt87kPYbfqiaG3ioQdlJU6KNedb8Es57FsYSx78ATvjScDG7B9w%2B8AWAgisbM%2BWsiU4qymHjiq3kRHtAML8jAq4qZAzpu1ES4vXuVx4PvIgdPfQc43uEnbEBafYjloQPmtxdWYt5LWvVvuqbzuY%2BXQSvuNO4gpYAF8VXzqIyGzlkX4R3cgBvxPKuCc1P7Um0drzRXSLtxmT%2BkwrSbpATEKXp9PYekHJlXA7S3WKPN3kNHn8FGMXMz7ke120qlpqaQm3dOauf5GG9Z68MypAXEuKToLEM8yKibLqoN2nYLEsbVIInlwvlQBiaf9ZfySyeRY8Ggqiknu8T%2Fjt1vlChDroXR1WxfR1IEC5rAdJR3284gY0EXVm46rhU3DbalNGC6MOO87QyIPZAftAyZG3F32cEo9dXdpSMOaG3MkGOqUBba8Zfpeb0Us60FPx%2BcETjcBdbO27O9%2BAt0LUlxDgOF6coIxedTOT7vxKv%2B4VQmut5n8fbwEiUunpNZR3tGoW7K54heES%2FQXnm462HQEKeTmZuB1HjdkTiuMTcgKFoJIaKNfrUF9pA3TfXax24n82iigMONdmILKYQgfwPY2D1g2%2BN7c%2BUWCYVr9AcaGriJJaKVBvVf%2Bdo4uNKV7l2SB1rSZkLXlk&X-Amz-Signature=0b9d870b91b427ff981e4718156f6b8754ee9907398d2ba4e1aed18964512665&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

