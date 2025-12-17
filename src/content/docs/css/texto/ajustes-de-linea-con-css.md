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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4BE4OTD%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T004143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNka1KFLj3CC7TjVYw%2Ful2OtHuGpemOrPyVwnZP8%2B2hAIgdrBMLVFRHNPP90GoE6K%2FwVa6IC0z%2FqnEQHrc0lePVLUq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDE%2BImpyeJfcec07glCrcA3KNnMsh2Du3QWR5FkcQZoSuN%2Bq%2FardE%2FYOEeDSTj0UgC%2FEDuIZwrMOv8%2FikuJl2TyUpelj6td7VXdYyJcYUIEEIVNv9yviBRQS1I%2BQgFLXV26iBrESHEx5va3SRCH6rkygry2PlqYwkgIL2l%2BpSLQjvo4fz%2BMFeDRiOmRUvevmuPNUGNOORalTsHRAmeLMR34fj4JOEpg%2Bu9xyooiFNFnGqc9aeuxW9eu2aH7nsBU%2FCFLhoyn4IBpqDzLrb6SbrtMbKF%2Fx%2BwUutb35WFqWWtEOyzdbNfU80swqnhQqmuWu6miXpUGuYlHiKMBcR3MFSu3fXTtUw6mDVTJI4WQEkCuChKkSaCycrmF8uktleYjqgV3xlWoQehQSITcZIfNeRQYJSA%2FyUgQ6eOtpmm6ae%2FszBb%2F65fMUqCiuJDu%2FCrL4IuWlXjevD4reyS8wpVCA%2FKQpfO%2BcQ6dU99pGb8X11VFiHcYOi83fE4Eq2Nc4kt2FnwUD8vqZiTdkakFxUxYkkAbBXJoRcCh%2Bs7J71OhhUjsCkh8zyiXdr%2FpBgGsbP6vcL%2FIVhIe79g5SgYJTlctz%2FeR%2B5Pc9cckXB4iNm0ZHO4sIJ5d4pnyqipjqFbYx0gmLjOajoFXL2qhzBqpi1MMPfh8oGOqUBxvXtCvpXINTcJR6f%2Fv21aPBUw0Vc8dZ44CJljnAt6WKa35JfSqX9zHFDNaEVSRMcrOOJW5uLjN5gSCkrR3r7E1fUekToDRJLDhUbfyCVNnkEUTg5v9%2BIMtCyq4fkXF%2BnPNNcONfn3KUyg3xgvQTL1hHehP2zFKQ6d0iePRMtxdQgi7sQieo6CwEotnw45OgT2fg%2BO%2BcfGOxoMzApN94YCrQm9oL1&X-Amz-Signature=edde7e35df1c4ea92acf3d4f7d63e66072aa0e43183d9bf3f53628e5730b64de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4BE4OTD%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T004143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNka1KFLj3CC7TjVYw%2Ful2OtHuGpemOrPyVwnZP8%2B2hAIgdrBMLVFRHNPP90GoE6K%2FwVa6IC0z%2FqnEQHrc0lePVLUq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDE%2BImpyeJfcec07glCrcA3KNnMsh2Du3QWR5FkcQZoSuN%2Bq%2FardE%2FYOEeDSTj0UgC%2FEDuIZwrMOv8%2FikuJl2TyUpelj6td7VXdYyJcYUIEEIVNv9yviBRQS1I%2BQgFLXV26iBrESHEx5va3SRCH6rkygry2PlqYwkgIL2l%2BpSLQjvo4fz%2BMFeDRiOmRUvevmuPNUGNOORalTsHRAmeLMR34fj4JOEpg%2Bu9xyooiFNFnGqc9aeuxW9eu2aH7nsBU%2FCFLhoyn4IBpqDzLrb6SbrtMbKF%2Fx%2BwUutb35WFqWWtEOyzdbNfU80swqnhQqmuWu6miXpUGuYlHiKMBcR3MFSu3fXTtUw6mDVTJI4WQEkCuChKkSaCycrmF8uktleYjqgV3xlWoQehQSITcZIfNeRQYJSA%2FyUgQ6eOtpmm6ae%2FszBb%2F65fMUqCiuJDu%2FCrL4IuWlXjevD4reyS8wpVCA%2FKQpfO%2BcQ6dU99pGb8X11VFiHcYOi83fE4Eq2Nc4kt2FnwUD8vqZiTdkakFxUxYkkAbBXJoRcCh%2Bs7J71OhhUjsCkh8zyiXdr%2FpBgGsbP6vcL%2FIVhIe79g5SgYJTlctz%2FeR%2B5Pc9cckXB4iNm0ZHO4sIJ5d4pnyqipjqFbYx0gmLjOajoFXL2qhzBqpi1MMPfh8oGOqUBxvXtCvpXINTcJR6f%2Fv21aPBUw0Vc8dZ44CJljnAt6WKa35JfSqX9zHFDNaEVSRMcrOOJW5uLjN5gSCkrR3r7E1fUekToDRJLDhUbfyCVNnkEUTg5v9%2BIMtCyq4fkXF%2BnPNNcONfn3KUyg3xgvQTL1hHehP2zFKQ6d0iePRMtxdQgi7sQieo6CwEotnw45OgT2fg%2BO%2BcfGOxoMzApN94YCrQm9oL1&X-Amz-Signature=a764c8d20b9594bbc754a515ecc237a9296bb56e50de094dc85ab55e19bbc9b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

