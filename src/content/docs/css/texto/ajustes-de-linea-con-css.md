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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CQI6CHV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T074348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDaJFRaqBZXWWVi9lW90AEGxgJ28eonxA2a6IGXNL%2BqIAiEA0knESWocBVT8dS7%2BAY9pto7cV9UsCM6rydocgFqmBJMq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDJjzfpw1mp%2FCWUuWPCrcA3EPPkwGX3M4F3vrBSaicy1HnoNmCTBL3AKvpu06Iyz9NdITB324pWJ7jLiUlhMYHLxoFLEm8tLLdrksbAQb%2BzYh8fb1M4nHSm9d16JUPBfu5c0631%2FJUGlqPdB14lhk%2F4bFXYqeh6%2BeDYDzUATq1V0G5WVVhKaAFOo0f4grXyysMR13Xfl%2B66Mjhi2DgOQR30lGbys4RdOUC6NVji7RABgYwzLnAZ%2BzYuvJzZA8x8ta546X7oEh%2B3dt25TZgwNhuUeHccmaJXEwNwNE0W0qwoQ5dwD5CnvPze6Qpfe1xwu0Hr2cKbu2%2B9ZnUcx44%2FrCLAK4V8MDOeVhi28xtZdOp3VUQ2nX8LV9PKHKf5Kuk%2BGyhtRTYX7aZ7rbGyNiLPAukenOqrdy58zRltc3VPFtIQJKs77o%2BeOLGiGgQeAVU9WOOBE2%2Bz63UCb9ao6jZDrrxlY6g9xsldO%2Fg2LEiyvuLIlwZ2BsQCF5SZJBE9dcAzGr1RVRwplI382SZMZnX%2FLGsY8mxZW8ZX7%2F9COxJx0%2FpR%2FH5jYirCRyF%2Blr0eU4ggAc9uugyCpKDzi7EmQDLBsUyx8HD6qecJjsjs2KxKKVbn%2Fawy%2BWv76DgdnEzf%2FHIp57sSj9xofOAGmwpp3fMLG3icoGOqUBJ9X4hSPRfTddOhSXVZSGN40yU9F1q3Ye%2BTawCvulCUS%2FORYUtfroKPh4Oi%2FZdIJaLFhi92R675CfDyWqp4vClmtBeu33p9Fv609kELR2XkTZuvkkcwA0HittcYZh150RwWsLC1tqKaB3n%2B2ZXZeW8e4pRvJ8MYPQb6ao%2FgcYUgwz6Y9FyCACYH9MTt%2FQbTNVTZOzrBoeOjVYoxBU7EvEwCNJFeDb&X-Amz-Signature=54e4a450f8dc8746190974533e9437ad5bb5723665af82a7999b9107c9a8baf5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CQI6CHV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T074348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDaJFRaqBZXWWVi9lW90AEGxgJ28eonxA2a6IGXNL%2BqIAiEA0knESWocBVT8dS7%2BAY9pto7cV9UsCM6rydocgFqmBJMq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDJjzfpw1mp%2FCWUuWPCrcA3EPPkwGX3M4F3vrBSaicy1HnoNmCTBL3AKvpu06Iyz9NdITB324pWJ7jLiUlhMYHLxoFLEm8tLLdrksbAQb%2BzYh8fb1M4nHSm9d16JUPBfu5c0631%2FJUGlqPdB14lhk%2F4bFXYqeh6%2BeDYDzUATq1V0G5WVVhKaAFOo0f4grXyysMR13Xfl%2B66Mjhi2DgOQR30lGbys4RdOUC6NVji7RABgYwzLnAZ%2BzYuvJzZA8x8ta546X7oEh%2B3dt25TZgwNhuUeHccmaJXEwNwNE0W0qwoQ5dwD5CnvPze6Qpfe1xwu0Hr2cKbu2%2B9ZnUcx44%2FrCLAK4V8MDOeVhi28xtZdOp3VUQ2nX8LV9PKHKf5Kuk%2BGyhtRTYX7aZ7rbGyNiLPAukenOqrdy58zRltc3VPFtIQJKs77o%2BeOLGiGgQeAVU9WOOBE2%2Bz63UCb9ao6jZDrrxlY6g9xsldO%2Fg2LEiyvuLIlwZ2BsQCF5SZJBE9dcAzGr1RVRwplI382SZMZnX%2FLGsY8mxZW8ZX7%2F9COxJx0%2FpR%2FH5jYirCRyF%2Blr0eU4ggAc9uugyCpKDzi7EmQDLBsUyx8HD6qecJjsjs2KxKKVbn%2Fawy%2BWv76DgdnEzf%2FHIp57sSj9xofOAGmwpp3fMLG3icoGOqUBJ9X4hSPRfTddOhSXVZSGN40yU9F1q3Ye%2BTawCvulCUS%2FORYUtfroKPh4Oi%2FZdIJaLFhi92R675CfDyWqp4vClmtBeu33p9Fv609kELR2XkTZuvkkcwA0HittcYZh150RwWsLC1tqKaB3n%2B2ZXZeW8e4pRvJ8MYPQb6ao%2FgcYUgwz6Y9FyCACYH9MTt%2FQbTNVTZOzrBoeOjVYoxBU7EvEwCNJFeDb&X-Amz-Signature=20007a9ba2c5ce41b54fca664516fbc1e2d00163cb459111af7be5b8d09693e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

