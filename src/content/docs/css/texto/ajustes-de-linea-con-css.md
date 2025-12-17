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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SG6ZSC6A%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T080925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDf77Z8DRbyT5Jg9EUZ1H46vva61D2d8QLsXwDSVWjeLQIgD%2FeJzt0teww2NbWzrVYqdBSLlM%2FzCacFhjEnLlg22SMq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDEIdEa1eYpOivupX9CrcA5mrsa0I7eDXUE0wck92pvIH1LEV8%2FV3Ttk0XL0qUiRCYIvUmzZXjqGFnStWWq2WvNFtZbDgF0egaeF7wh2CKvA4YtirZUR3qyYPsMbgQeG8ZohuuiHiaiK4Ni2fOG6NuDoHI3SIyiyaHjo1jIRZ46eQHzKSCf9kPvWW3VaPhli7QmvdMLG%2F9%2FoIObkwRSkSZgn8uJfvZmTShD56N6rlct3qmu8eIzswdnsgX9z3fCVnrsG4fkOy2su90Mi5TFhz7ZprCboc7CSrCp%2B3CB1gVr8864bZlev1eWC6Flk3og4mYRvUa92dq3U0LXLeB5Dwhtmo2kxBHOcp55iKtadYfzHbhb6aK%2F4sf%2F3JDTUOsaIp4B0dWXdJmryV%2F0EhtcBleqyq4%2BxrgM2RxPutY1HttxBsekdaFtLObJAUgc2uBIK2q%2F%2BrTXUOeQQF88YfWWclTUkj3Xt%2F9Cn925JabrglHVwqrWXGW43oPNrq%2F8CYrikwqd9MV%2BjqXA%2FWOLF4Ulwozv6YdR0j2eW1rYnfWE3TGkgUjfTjruBze24hsy8RcvnybsLtkLZUaQGZ5Hwv44R8wmG1a390dIjhZ6BaNZwThZ9OM1fgIKxCVyzKVY2oC7XBS6kydaCSvjl9%2FW%2BcMPm3icoGOqUBbmdMY86IysjrPIb%2BvVjZu%2BVGGmPB3MG2IWRoTEHfXPdylZ8W%2FkHco%2F%2B%2BYMBN0ZyDvfaTFgIDBR%2FeaGzvaFXdEyTXpexbv%2FY0WYPcZdVHXaoxFWbuWBI%2FDVw%2BJP%2FVYyaHcMKiLXSNKYoPPtfAewxfSSjjv1cl02SVxbhPtZRF%2B31DLPwyuKhBlCBo%2FDxpeFr73NMAUTxwWBNNt2L9MPEWSQ4GrqJ1&X-Amz-Signature=c428c60f8a47f0b39222d8dc7962ad6fb2091e0018da45c596f6a5f42838a84d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SG6ZSC6A%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T080925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDf77Z8DRbyT5Jg9EUZ1H46vva61D2d8QLsXwDSVWjeLQIgD%2FeJzt0teww2NbWzrVYqdBSLlM%2FzCacFhjEnLlg22SMq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDEIdEa1eYpOivupX9CrcA5mrsa0I7eDXUE0wck92pvIH1LEV8%2FV3Ttk0XL0qUiRCYIvUmzZXjqGFnStWWq2WvNFtZbDgF0egaeF7wh2CKvA4YtirZUR3qyYPsMbgQeG8ZohuuiHiaiK4Ni2fOG6NuDoHI3SIyiyaHjo1jIRZ46eQHzKSCf9kPvWW3VaPhli7QmvdMLG%2F9%2FoIObkwRSkSZgn8uJfvZmTShD56N6rlct3qmu8eIzswdnsgX9z3fCVnrsG4fkOy2su90Mi5TFhz7ZprCboc7CSrCp%2B3CB1gVr8864bZlev1eWC6Flk3og4mYRvUa92dq3U0LXLeB5Dwhtmo2kxBHOcp55iKtadYfzHbhb6aK%2F4sf%2F3JDTUOsaIp4B0dWXdJmryV%2F0EhtcBleqyq4%2BxrgM2RxPutY1HttxBsekdaFtLObJAUgc2uBIK2q%2F%2BrTXUOeQQF88YfWWclTUkj3Xt%2F9Cn925JabrglHVwqrWXGW43oPNrq%2F8CYrikwqd9MV%2BjqXA%2FWOLF4Ulwozv6YdR0j2eW1rYnfWE3TGkgUjfTjruBze24hsy8RcvnybsLtkLZUaQGZ5Hwv44R8wmG1a390dIjhZ6BaNZwThZ9OM1fgIKxCVyzKVY2oC7XBS6kydaCSvjl9%2FW%2BcMPm3icoGOqUBbmdMY86IysjrPIb%2BvVjZu%2BVGGmPB3MG2IWRoTEHfXPdylZ8W%2FkHco%2F%2B%2BYMBN0ZyDvfaTFgIDBR%2FeaGzvaFXdEyTXpexbv%2FY0WYPcZdVHXaoxFWbuWBI%2FDVw%2BJP%2FVYyaHcMKiLXSNKYoPPtfAewxfSSjjv1cl02SVxbhPtZRF%2B31DLPwyuKhBlCBo%2FDxpeFr73NMAUTxwWBNNt2L9MPEWSQ4GrqJ1&X-Amz-Signature=655a90f74b5aa4af31628fef1864ad98de2989e87d115902f669762d614bd7a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

