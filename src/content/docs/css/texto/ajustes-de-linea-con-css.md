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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TS6G5GH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T181028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FHK4lPAAp9R%2FKixRtsHVx%2FAjK7jKLhzUyY2rO5Pz3DgIgYdH6jb9YqoehsRphuOgpak920n21a7E151qG1C1bYicqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI4g09i4KgPYNY62ZCrcAyNjqW%2FmzMP4mVszB0wMhcnNozONxmPYnScwlQN4fQGuqRMtPE2H5KmNCWGsMwrTH0zpnfnO7vUtlMk0NAz9dHoXyI1vbO%2F22cBSnegxitESLkQWpAYTq94Zm8%2FnWjlcP3vwuSFy7SUihkoIYzxBLLABYh1%2FRJDuKwQfQrCuqIGyKbnXbLMWi%2FdjuxtNLA5zMD02C591baiNBvlAIDWCotLVEiCwO1XwbdQ5AfaUSGWu7EU5ZE89JHoFkl8P1jjVqiTuh7p7KbjmKbgi9%2BXOcQOvsHWb1Q7%2FWp%2BShuJOyb%2Fa2rbGLTuIKMb8YFqgPSSPEjxt8sEyEWM7qdhQHSjB%2BkZCZgrZ1fyTZ75wKSpEYJ4af%2FVNrM23u59VOWfEU5WQCrlWIlZsY%2Fy4%2B6t4bSpCsbL8xIawe0%2BLh5h3faG8zua2SJmaX1OWxHTNjooTsbXtsHJTjFUi8HvLYm%2F%2BjWsGKjU7%2BxLm5Sn8tPmpqncGhNllt6u%2B3OWz5izzJjdf%2FTnmAyMQVsq%2BOBTlKXTNsHspUbh3XADIfZgo0gk6hiNV2IEEdqhxs3fZl%2Bl8HVFwswyGF2Wu%2B5MEr4TplJyf3RLGgSywF8rqB6jalbVhQkIkgGLsF2GTOu4tLAOcftoVMKGfi8oGOqUB0SQDKvTh9bqQ5XzML%2B4dYQiuE0tgr4y4HP2R6aALcLN23%2BabdkWYTc%2B0ATTpge%2FMx2tv%2ByLaAbb8%2FVUEiP8GTfpivMeUaGDN5YaK5TNI9EKdSwi5rHWiKkE%2FLoEDRzUSfJENn%2B3NbqQMOZBEVFSZis4Vhcj43m2RYzQhwiYgAXNFvzPRoPGmvbIJ3QXPLcKsxqA9SjCZ34coQT3LcrSkrmpfJc%2FI&X-Amz-Signature=24622a368d517072a40ac5f1cbc1b0effce6ba5fcffc3fec6a2c8bced6d363b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TS6G5GH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T181028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FHK4lPAAp9R%2FKixRtsHVx%2FAjK7jKLhzUyY2rO5Pz3DgIgYdH6jb9YqoehsRphuOgpak920n21a7E151qG1C1bYicqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI4g09i4KgPYNY62ZCrcAyNjqW%2FmzMP4mVszB0wMhcnNozONxmPYnScwlQN4fQGuqRMtPE2H5KmNCWGsMwrTH0zpnfnO7vUtlMk0NAz9dHoXyI1vbO%2F22cBSnegxitESLkQWpAYTq94Zm8%2FnWjlcP3vwuSFy7SUihkoIYzxBLLABYh1%2FRJDuKwQfQrCuqIGyKbnXbLMWi%2FdjuxtNLA5zMD02C591baiNBvlAIDWCotLVEiCwO1XwbdQ5AfaUSGWu7EU5ZE89JHoFkl8P1jjVqiTuh7p7KbjmKbgi9%2BXOcQOvsHWb1Q7%2FWp%2BShuJOyb%2Fa2rbGLTuIKMb8YFqgPSSPEjxt8sEyEWM7qdhQHSjB%2BkZCZgrZ1fyTZ75wKSpEYJ4af%2FVNrM23u59VOWfEU5WQCrlWIlZsY%2Fy4%2B6t4bSpCsbL8xIawe0%2BLh5h3faG8zua2SJmaX1OWxHTNjooTsbXtsHJTjFUi8HvLYm%2F%2BjWsGKjU7%2BxLm5Sn8tPmpqncGhNllt6u%2B3OWz5izzJjdf%2FTnmAyMQVsq%2BOBTlKXTNsHspUbh3XADIfZgo0gk6hiNV2IEEdqhxs3fZl%2Bl8HVFwswyGF2Wu%2B5MEr4TplJyf3RLGgSywF8rqB6jalbVhQkIkgGLsF2GTOu4tLAOcftoVMKGfi8oGOqUB0SQDKvTh9bqQ5XzML%2B4dYQiuE0tgr4y4HP2R6aALcLN23%2BabdkWYTc%2B0ATTpge%2FMx2tv%2ByLaAbb8%2FVUEiP8GTfpivMeUaGDN5YaK5TNI9EKdSwi5rHWiKkE%2FLoEDRzUSfJENn%2B3NbqQMOZBEVFSZis4Vhcj43m2RYzQhwiYgAXNFvzPRoPGmvbIJ3QXPLcKsxqA9SjCZ34coQT3LcrSkrmpfJc%2FI&X-Amz-Signature=7baf0e19a895aa9cd09c9b6c743ccfa1dded3ef6acef407a0cedff3b22401ec2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

