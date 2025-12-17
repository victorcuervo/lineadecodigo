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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WJGF5SP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T034511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAjngt1P0ZnVTc6AePPRV32ZTAi%2FmhSNhXx5anE11nlhAiB2pH%2FIKV2FkSLpmgjlnhB45FRgsaVjBx9MLCN6I6QLHyr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIM7OX%2B73y%2FHxiEaaikKtwDtBagldpPyprd7NfiXFSGc3mdecEwotdBnRzagsWcab%2F%2BxRAGQ6qXMoBxLa5%2Fr3HwxLTiv%2FD7CmGc739JJiGohb%2BqsRCbSVfiVmSCuQvmmX2A0Y9KFtR3FmSvYnKwwBckPB9qAar7getXUBaFS6hAwa3Jao0YoWx5yeuxPuFCSI9P38AtBy3OtM3uRZm%2FIxvXG82Y2QzxLtCPR99fnFIH5u8M0g9KbwSDMgZRysG535vXPMiVpiWe%2By%2F2gzWRIbYoPvxj%2BkDOvfNgLodmCZDeeVN7BHl2MKrK2AgcEYDCx3oKZlqpRl5lhlgUwiaNwy%2BIiITIRwnWscDU0xjJ77%2BkLR%2Bad2L44vH88xumvIR%2FEu5j%2B0%2BOgR%2BekczppSi6abXC7wSvkvrIhwKnD4j6wHmOBg2FDueONb8PY7Hjau0Nz35doe%2Bl5LrhcfOgMKyHIMSPXa5c2vBgmPtBlg4AN%2FVwz%2F1Dalia%2F04ifKaCnZaOskhsVCO0pOFAkrQci%2F8Tea8mjmZw1bOc8FeTXb0knBUnaraCNVUYLI8MU%2BrjcGW95guJl5h4aSVtvV5A6Yb9P2DFarH%2FiM%2FPNjztTHcCpCQWyzGogbKwr%2FLWvmu7CNt%2Bk9MsXBPok9Le8h33nDgw%2FbGIygY6pgFl5BLRgQoPtB54azvgwSRin1uf9JOI9wC6U8pc7dIL9JsGWEI37D05eWt323UrEH1qy%2B29%2F%2B5w8WZxpX%2F4KfhYfyyfZUR4rxguKcAj1fOYrpuLpRnADefqZmMcGF7uuziIQsXgF6Z8hIHHOsX4PTgWm01nhC3Aw1XygHw1pq%2BPJGiwsJpEL5430e8aSkcjBM7jBGmKqiYt9yWqp%2BgY9q0cG9c7MQ6u&X-Amz-Signature=4e1d248d193494ba1d7566542eeebd01b0c0adb2f1d841b2c7e3208e5a0660ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WJGF5SP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T034511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAjngt1P0ZnVTc6AePPRV32ZTAi%2FmhSNhXx5anE11nlhAiB2pH%2FIKV2FkSLpmgjlnhB45FRgsaVjBx9MLCN6I6QLHyr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIM7OX%2B73y%2FHxiEaaikKtwDtBagldpPyprd7NfiXFSGc3mdecEwotdBnRzagsWcab%2F%2BxRAGQ6qXMoBxLa5%2Fr3HwxLTiv%2FD7CmGc739JJiGohb%2BqsRCbSVfiVmSCuQvmmX2A0Y9KFtR3FmSvYnKwwBckPB9qAar7getXUBaFS6hAwa3Jao0YoWx5yeuxPuFCSI9P38AtBy3OtM3uRZm%2FIxvXG82Y2QzxLtCPR99fnFIH5u8M0g9KbwSDMgZRysG535vXPMiVpiWe%2By%2F2gzWRIbYoPvxj%2BkDOvfNgLodmCZDeeVN7BHl2MKrK2AgcEYDCx3oKZlqpRl5lhlgUwiaNwy%2BIiITIRwnWscDU0xjJ77%2BkLR%2Bad2L44vH88xumvIR%2FEu5j%2B0%2BOgR%2BekczppSi6abXC7wSvkvrIhwKnD4j6wHmOBg2FDueONb8PY7Hjau0Nz35doe%2Bl5LrhcfOgMKyHIMSPXa5c2vBgmPtBlg4AN%2FVwz%2F1Dalia%2F04ifKaCnZaOskhsVCO0pOFAkrQci%2F8Tea8mjmZw1bOc8FeTXb0knBUnaraCNVUYLI8MU%2BrjcGW95guJl5h4aSVtvV5A6Yb9P2DFarH%2FiM%2FPNjztTHcCpCQWyzGogbKwr%2FLWvmu7CNt%2Bk9MsXBPok9Le8h33nDgw%2FbGIygY6pgFl5BLRgQoPtB54azvgwSRin1uf9JOI9wC6U8pc7dIL9JsGWEI37D05eWt323UrEH1qy%2B29%2F%2B5w8WZxpX%2F4KfhYfyyfZUR4rxguKcAj1fOYrpuLpRnADefqZmMcGF7uuziIQsXgF6Z8hIHHOsX4PTgWm01nhC3Aw1XygHw1pq%2BPJGiwsJpEL5430e8aSkcjBM7jBGmKqiYt9yWqp%2BgY9q0cG9c7MQ6u&X-Amz-Signature=010fb549fb460e6119d8949fa982e80f505a1bd1fabe40a2b7c8f41704d9c511&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

