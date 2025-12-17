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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667K3TJJTK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T013459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDb%2FsRy556P0m%2F2zlQHtzTPgMpaD9sQWM2r9PKThqfTAwIgY2NVUUhP5aEUtFr1A7rimzo3QmwnPncmPOyDC29S4Ygq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDAFm76T%2BY1%2FDq0liwSrcAzqb1jP4Yt6S5zLESgPyH2NVoUFGIeYcSNhIwqdGvEDBOud2P14c%2FiAK6yjp7rbi5H70W1Hkp8LVdElZvI4Jbac3JHEzrOpNS7MMDzIpN311rQNZHVbuV33km6pkPtAEW2Dq7b94%2BmskGWVebM0aHoqGZMm2o7oSKGkSJwOUUuYRZ5LEDsErsm7k0VhWrSvriDUYvF9OY%2B5kJ1rUCbK32eDJWGCXzjZQNOdJBSg25RHMp3s2gxzyOGSn4aOh05rCucHOlKSALSo5FoCub9dbsMF4GvzXs%2BJ4dP9nY7KIlRLQSCnTm3JaM4qa%2FHU9DdCHbSCfK2Otp0oayLC6rF1IkcEsZTLfnFre8LR2vPo47O86EWknHm%2Bc13xSk%2B55EUm3M%2FXXzWx0EC2%2BnHmcd6BDKacECViHy2QViaomq6WctYplHUskqackMSgdB3E8w2w53Uz0tVnYV8PI%2BQKcyqeFguJ8W3diK2YZNUrUbRjUiO8Yt50EwYC3UMjL6m4m79fo0WlMjrub%2FiN6nh8XLsRye3z1jK6kGnBU7QH1yjTz1BaU%2FadyVTARWNhOKiU0DHyKM3ufsq5m9GXpBajxY4BLoDSdVcgkBnNDimu7SUwL88%2FAUnKd4JzAEdDdTz11MNn7h8oGOqUB8v5pbLLaIiItc3tbq30SihjzsECJhZyeFzbmnxbaL7RnXiLGfIkzfoGjpYpT49ds1N0VQyt%2FuZvBcLoc5GHiMiOJQLxfHGISD8R2pAAveNyYZ1EISlK%2B0bKQP0VoA4Js2raTiC39%2F84%2Fu%2BCb2Z7b1Q%2BpjQ4nA0NoU5sJm84PooSnBsqMOT1EES3Wmn2qS9HhbNfIGgm6sPt1GB7%2BGeL4qz2oMQBw&X-Amz-Signature=846f9bcb75295649907ffa13c79ba0403359bd0d9801761928f69668ad4cefdc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667K3TJJTK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T013459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDb%2FsRy556P0m%2F2zlQHtzTPgMpaD9sQWM2r9PKThqfTAwIgY2NVUUhP5aEUtFr1A7rimzo3QmwnPncmPOyDC29S4Ygq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDAFm76T%2BY1%2FDq0liwSrcAzqb1jP4Yt6S5zLESgPyH2NVoUFGIeYcSNhIwqdGvEDBOud2P14c%2FiAK6yjp7rbi5H70W1Hkp8LVdElZvI4Jbac3JHEzrOpNS7MMDzIpN311rQNZHVbuV33km6pkPtAEW2Dq7b94%2BmskGWVebM0aHoqGZMm2o7oSKGkSJwOUUuYRZ5LEDsErsm7k0VhWrSvriDUYvF9OY%2B5kJ1rUCbK32eDJWGCXzjZQNOdJBSg25RHMp3s2gxzyOGSn4aOh05rCucHOlKSALSo5FoCub9dbsMF4GvzXs%2BJ4dP9nY7KIlRLQSCnTm3JaM4qa%2FHU9DdCHbSCfK2Otp0oayLC6rF1IkcEsZTLfnFre8LR2vPo47O86EWknHm%2Bc13xSk%2B55EUm3M%2FXXzWx0EC2%2BnHmcd6BDKacECViHy2QViaomq6WctYplHUskqackMSgdB3E8w2w53Uz0tVnYV8PI%2BQKcyqeFguJ8W3diK2YZNUrUbRjUiO8Yt50EwYC3UMjL6m4m79fo0WlMjrub%2FiN6nh8XLsRye3z1jK6kGnBU7QH1yjTz1BaU%2FadyVTARWNhOKiU0DHyKM3ufsq5m9GXpBajxY4BLoDSdVcgkBnNDimu7SUwL88%2FAUnKd4JzAEdDdTz11MNn7h8oGOqUB8v5pbLLaIiItc3tbq30SihjzsECJhZyeFzbmnxbaL7RnXiLGfIkzfoGjpYpT49ds1N0VQyt%2FuZvBcLoc5GHiMiOJQLxfHGISD8R2pAAveNyYZ1EISlK%2B0bKQP0VoA4Js2raTiC39%2F84%2Fu%2BCb2Z7b1Q%2BpjQ4nA0NoU5sJm84PooSnBsqMOT1EES3Wmn2qS9HhbNfIGgm6sPt1GB7%2BGeL4qz2oMQBw&X-Amz-Signature=5a96f773656ccf9ccb327533baa5187f7dc0ae7eb0c00cf16921a5d8f10c6ac4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

