---
title: Ajustes de línea con CSS
description: "Uso de las propiedades overflow-wrap y word-wrap para poder realizar ajustes de línea con CSS y evitar texto desbordado."
lastUpdated: 2025-12-17
slug: css/ajustes-de-linea-con-css
author: victor_cuervo
---

Cuando estamos trabajando con bloques e insertando texto dentro de ellos, tenemos que estar al tanto de qué sucede con nuestro texto. Saber si nuestro texto se desborda en el bloque, o el contenedor se ajusta al tamaño del texto. Es por ello que vamos a ver cómo podemos controlar los ajustes de línea con [CSS](https://www.manualweb.net/css/).


Pero vayamos por partes. Lo primero es crear un bloque o una capa mediante el típico elemento [`div`](https://www.w3api.com/HTML/div/) de [HTML](https://www.manualweb.net/html/). Dentro del elemento [`div`](https://www.w3api.com/HTML/div/) vamos a colocar el texto que queremos que se visualice.


```html
<div class="columna">
  Puede que la tarea que me he impuesto de escribir una historia completa
  del pueblo romano desde el comienzo mismo de su existencia me recompense
  por el trabajo invertido en ella, no lo sé con certeza, ni creo que pueda
  aventurarlo.
</div>
```


Lo siguiente será darle un tamaño a este bloque. Para ello jugamos con los estilos de CSS y en concreto con la propiedad [`with`](https://www.w3api.com/CSS/width/) la cual utilizaremos para dar un tamaño pequeño a la columna que nos ayude con la visualización del ejemplo.


```css
.columna {
  width: 50px;
  background-color: lightcoral;            
  margin: auto;
}
```


Hemos aprovechado que habíamos definido la clase “columna” mediante el atributo [`class`](https://www.w3api.com/HTML/class/) para poder aplicar el estilo sobre el bloque. De igual manera hemos incorporado otras propiedades dentro de la clase, no necesarias para el ejemplo, pero que nos ayudan para la estética del mismo, como son [`background-color`](https://www.w3api.com/CSS/background-color/) que nos ayuda a poner un color al fondo del bloque y [`margin`](https://www.w3api.com/CSS/margin/) que nos permite ajustar los márgenes alrededor del bloque, en este caso centrándolo.


Si  lo cargamos en el navegador veremos que las líneas, al haber definido un bloque muy pequeño, desbordan el contenido de las palabras fuera del contenedor. Dejando un efecto no deseado.


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2STU5DI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T080744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJ5YwovM6bS9J9Yice3utdMSYREIJ0%2FDmquCLIYi%2BIFgIgJ9GJsPbVZxzpi22c7cumJiWozboZxI5OZ3vT8QcZgkcq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDGXiaQSF%2BaITPjSvcSrcA35A8NLKigfkjlsYj31dFpHoAADIcAWUPCeFabMv0siyM3oiLCyWq%2BjWWtkw7zXsz4sBcWbCeaZFdhA1sLbRCu%2FXowfA%2BHJMspBhXwwfiVXN8j%2BseggpXX7O4SU64Sjhq1taYsLpQmFez5Wz3oxB2szPJBpqXdjfbsm3IrOBX5Yk7grOXTq3AhQk4ez%2FiUMwXBA%2BabB5Isl4SAjlUe2CXceLnbPuCVTRxP4Gy4D0kVPCJX9xTM4bpn9uaBu02ORM%2F9IYfy4NX82UBXZ9h35nb37txnPwH4mIwn6Imj5k793EIaWt6Uj6ED%2F86izcUFuyu3YupaCHxfgNW%2BQAv06a5r4f1XzkW8MzcxOUgu%2FtPeaLcm7apCx1CRxTrKUnUyj28GJ782Q2HOY2Xu46Z%2FyURlo3kHjZyQIakEVVk75X4Z2P6zjtUg6LD1JJcebwv%2FxbVXTU3r2K738LRTYen29aVPis3cmS44Uf68XrEHDzLobclHkZTwoLsAS8mjLvjvTH8lgcjs74uYlwARH0e2zMvj9wRH0bBUFG77FT%2B90GatgZPYK3eLG%2FcOVCaTLjTOqOcAG%2BHlhOVhK6i5LviA%2Fc2phXEnand1stU7u%2BMRY2L4vuffHGScmyVlbE%2B5FLMJi3icoGOqUBLZroZ%2BVUG2gBEcVf%2F4F2EjP4uTb6pEFzsRCm3oXJHaVYYSjvHUwuCkfn%2Fu0vuDWXyU3gOQPbJ2dmIGKjE9azm534acY8F0dvz8afs0D6TiIS1YxLUs3rNWVHVogmiu%2BpHGH%2BOjruEu6G5DTP6qt7YPK0glZYixCV3y1q7qGNVG4CfZaDoflWwNiFwwgQP90xTlNADsUYJO2Lu%2B94HRHGyFEcSXx7&X-Amz-Signature=74b3bfed2193ff46c5e6a7390c2c6526e4d98ae524a112bc367d591f8ad5c00b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Para poder solucionar esto tenemos que recurrir a la propiedad [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/), cuyo valor por defecto es **“normal”** y lo que está generando el anterior efecto. Y lo que tenemos que hacer es asignarle un valor de “break-word” que lo que hará será el dividir las palabras (cortarlas) cuando lleguen al borde de nuestro bloque.


Puede ser que el efecto sea raro en las palabras, pero gráficamente no veremos que se desbordan las líneas por fuera del contenedor.


Para ello definimos una nueva clase que la hemos llamado “texto-ajustado” de la siguiente forma:


```css
.texto-ajustado {
  overflow-wrap: break-word;
}

.texto-sinajustar {
  overflow-wrap: normal;
}
```


Ahora aplicamos estas clases sobre el bloque de texto, asignado la nueva clase en el atributo [`class`](https://www.w3api.com/HTML/class/) :


```html
<div class="columna texto-sin-ajustar">
  Puede que la tarea que me he impuesto de escribir una historia completa del
  pueblo romano desde el comienzo mismo de su existencia me recompense por el
  trabajo invertido en ella, no lo sé con certeza, ni creo que pueda
  aventurarlo.
</div>

<div class="columna texto-ajustado">
  Puede que la tarea que me he impuesto de escribir una historia completa del
  pueblo romano desde el comienzo mismo de su existencia me recompense por el
  trabajo invertido en ella, no lo sé con certeza, ni creo que pueda
  aventurarlo.
</div>
```


El efecto que veremos en el navegador será el siguiente:


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2STU5DI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T080744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJ5YwovM6bS9J9Yice3utdMSYREIJ0%2FDmquCLIYi%2BIFgIgJ9GJsPbVZxzpi22c7cumJiWozboZxI5OZ3vT8QcZgkcq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDGXiaQSF%2BaITPjSvcSrcA35A8NLKigfkjlsYj31dFpHoAADIcAWUPCeFabMv0siyM3oiLCyWq%2BjWWtkw7zXsz4sBcWbCeaZFdhA1sLbRCu%2FXowfA%2BHJMspBhXwwfiVXN8j%2BseggpXX7O4SU64Sjhq1taYsLpQmFez5Wz3oxB2szPJBpqXdjfbsm3IrOBX5Yk7grOXTq3AhQk4ez%2FiUMwXBA%2BabB5Isl4SAjlUe2CXceLnbPuCVTRxP4Gy4D0kVPCJX9xTM4bpn9uaBu02ORM%2F9IYfy4NX82UBXZ9h35nb37txnPwH4mIwn6Imj5k793EIaWt6Uj6ED%2F86izcUFuyu3YupaCHxfgNW%2BQAv06a5r4f1XzkW8MzcxOUgu%2FtPeaLcm7apCx1CRxTrKUnUyj28GJ782Q2HOY2Xu46Z%2FyURlo3kHjZyQIakEVVk75X4Z2P6zjtUg6LD1JJcebwv%2FxbVXTU3r2K738LRTYen29aVPis3cmS44Uf68XrEHDzLobclHkZTwoLsAS8mjLvjvTH8lgcjs74uYlwARH0e2zMvj9wRH0bBUFG77FT%2B90GatgZPYK3eLG%2FcOVCaTLjTOqOcAG%2BHlhOVhK6i5LviA%2Fc2phXEnand1stU7u%2BMRY2L4vuffHGScmyVlbE%2B5FLMJi3icoGOqUBLZroZ%2BVUG2gBEcVf%2F4F2EjP4uTb6pEFzsRCm3oXJHaVYYSjvHUwuCkfn%2Fu0vuDWXyU3gOQPbJ2dmIGKjE9azm534acY8F0dvz8afs0D6TiIS1YxLUs3rNWVHVogmiu%2BpHGH%2BOjruEu6G5DTP6qt7YPK0glZYixCV3y1q7qGNVG4CfZaDoflWwNiFwwgQP90xTlNADsUYJO2Lu%2B94HRHGyFEcSXx7&X-Amz-Signature=5f0af8adab3edd4e031594243992a2d7d72cf046a7f46054eea3c7aee9409d6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

