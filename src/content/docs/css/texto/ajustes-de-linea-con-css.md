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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKOMZZ6Y%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T150559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCREYf0xU7%2BTGqYO7OYDvacfSl91QEEdh1rPMvu9hInkAIhALP2Ar9%2Fm4ebrVOno2laQO6%2BD%2F%2F84MnLL1CXCKztZZHkKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2BO4B0uf5DFEnQTy0q3AMilqW0bGxWfBqRyK1nTQWNh%2BIs83scz%2Fil2Dj2bGCso7dlFgiPGh09EwNdfHP8GcsqXCb%2Bl05yffn9WL9rZcMJ6L0ak64wYQ724hvQCS5ZOgSIZlh8tPQxGrgQhvlsrFcSs1lfvxD9TrNIbGNy7rEeQzDtyhUPb%2FJmryST66tdWXfdch1yZjjPz%2B8KdOOoqs6P1Vc%2F2dsaDFqLO38lw8XUm%2FTRtfKWuwGJUXHOwLDy5eACyE66xiNtqlxKMZ5RMtUz3BBkFMSPfJz%2FrOP1hJHDa1Xtj%2FAIckLaTdDCxmFKs%2Fisq3%2F%2FDWm6TaGauOH%2Fgnn1n%2FQ7AhDzYCfXL%2B06CS%2FxfdIr1bveA6Go1gn%2FIl6UP7zLKAUO8tztggiKSyN0iRtRZ6Gi9MLTFY2BuuR42ivRRLfdeWa0iPdnjgCLlvpa%2FAFld2k0RH3Wg1xhXcQkhuTSIRN24TAiProH%2FFmj2gvd20vJ9ggHGom1uvVPtNPCP7GWCTytECQkLGaBW6b%2FWUXLRcd0wFg1kcdw9MJvVGtNo3JN2G6lHMFWdOW%2B4pEnnAayTRuHhBlotUp22qZ1buu4y9y7h1g6vZ5z2iHnSb1eGYti9v5xc9rqL7KGeCuTo7tjX%2BnKTwKUolf2QTDU%2F4rKBjqkAfcOgFKf9PvczWLCxiPsl%2BX%2FpOYpBnNO8FaDDxDuMh2g1LQCs5ElEuJXmWOx5fflsX3RkeMxwlCnXYpuAes5pr3y1F4x7TNibhz09YfewwOPbfEEUDAXpv26zMTX6RtFmxUISTBHZe1pzyklT8YDwBhV1sPqw1CgmpkCZebBXpnfh6nVXOMbHTxQaSERuHytkksyebU%2BgsDDlJSvxbC0jEKEHvZw&X-Amz-Signature=cb3dac4efb3d3601c42572d2d016bbe25aa371840c55d34e082ca425a3c1ec8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKOMZZ6Y%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T150559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCREYf0xU7%2BTGqYO7OYDvacfSl91QEEdh1rPMvu9hInkAIhALP2Ar9%2Fm4ebrVOno2laQO6%2BD%2F%2F84MnLL1CXCKztZZHkKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2BO4B0uf5DFEnQTy0q3AMilqW0bGxWfBqRyK1nTQWNh%2BIs83scz%2Fil2Dj2bGCso7dlFgiPGh09EwNdfHP8GcsqXCb%2Bl05yffn9WL9rZcMJ6L0ak64wYQ724hvQCS5ZOgSIZlh8tPQxGrgQhvlsrFcSs1lfvxD9TrNIbGNy7rEeQzDtyhUPb%2FJmryST66tdWXfdch1yZjjPz%2B8KdOOoqs6P1Vc%2F2dsaDFqLO38lw8XUm%2FTRtfKWuwGJUXHOwLDy5eACyE66xiNtqlxKMZ5RMtUz3BBkFMSPfJz%2FrOP1hJHDa1Xtj%2FAIckLaTdDCxmFKs%2Fisq3%2F%2FDWm6TaGauOH%2Fgnn1n%2FQ7AhDzYCfXL%2B06CS%2FxfdIr1bveA6Go1gn%2FIl6UP7zLKAUO8tztggiKSyN0iRtRZ6Gi9MLTFY2BuuR42ivRRLfdeWa0iPdnjgCLlvpa%2FAFld2k0RH3Wg1xhXcQkhuTSIRN24TAiProH%2FFmj2gvd20vJ9ggHGom1uvVPtNPCP7GWCTytECQkLGaBW6b%2FWUXLRcd0wFg1kcdw9MJvVGtNo3JN2G6lHMFWdOW%2B4pEnnAayTRuHhBlotUp22qZ1buu4y9y7h1g6vZ5z2iHnSb1eGYti9v5xc9rqL7KGeCuTo7tjX%2BnKTwKUolf2QTDU%2F4rKBjqkAfcOgFKf9PvczWLCxiPsl%2BX%2FpOYpBnNO8FaDDxDuMh2g1LQCs5ElEuJXmWOx5fflsX3RkeMxwlCnXYpuAes5pr3y1F4x7TNibhz09YfewwOPbfEEUDAXpv26zMTX6RtFmxUISTBHZe1pzyklT8YDwBhV1sPqw1CgmpkCZebBXpnfh6nVXOMbHTxQaSERuHytkksyebU%2BgsDDlJSvxbC0jEKEHvZw&X-Amz-Signature=a98311caccf316ae5bb1daae17a063130e3723a2ca1bd1eb2b883fbdc1245364&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

