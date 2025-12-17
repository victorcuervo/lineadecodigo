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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XSKKEFJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T010315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtW7JT%2FTqg86m3BaHftMHk5ltGsfcGxpHvdBELyqCmTAIgCpOH0Iy1xWvSNbYzOIGfflfHJfbLyMiURQtxYEcCKiAq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDNGe9tU0mXwZkt32wircAxXFEYMMRcN24j8D8Xz6oJj847%2FCESmj4TWei1mJa6QrywpaTaqvAPmPbK5ieAIQYEDwYkIbhZpTYRU4Zryt1Su8%2FV6ktvMj40QT7KVnu8FCs2BPoRbUe9T0jyrWYp3HSJ1EjJhF%2FYbcxUVcYUik1dXPp9kuK1TwJRLw7dFtDnequBP%2B9iIuUK3JtXDVOCVhVc6lcS7IWYInTLt2zCn3A5qOseZIyWLez89A1Tpa03khO0P4LuDjZf3CoV1LmWhH1NxBvmkgQjPqmv5KR5WP0UhZW2yscAg%2ByW3nAn%2BvCFAWCsOCcJeiatvWDiOimz%2B%2BbXNsPw%2Fdoa8LfXjorp0bSBanSK7DTr5NTRyjdWmBZmEjZ4cavG1VDQgOJsku1iMor%2BsnKdOOjB37h5XNpCwSjODWlOgBIUdgP2lqGcLGb37UeqG%2Bc2r88Wqh%2FEsLu%2BNKVYsemJCsMb%2FrwWvI84vR2T2YFyaLNVwQJJtbgUZ58SKMVJaGAApiuLLS4SToDYLd2Si%2BHp1S%2BQgzPL1bOt4PGOHZA4TRSCMHeD50phB3B%2BYFjQ2TXG%2FaqUiuJqZWt4qNPQItdeuUQ78QaCk91s%2FJiqsegtSbbr8F2G7lHk8EKz4iapmoSrRmrrlBp37QMJn7h8oGOqUBSoWSerGC7vT%2Bx8E0XHCMQz1sOPs9R26MIWr%2FoBkt%2FKU7e3EX%2F%2FTSHsxRT4HlSiOvktpuW5XHzzV1cdwENAre4yIe23OPL6eg%2FRq7V1BXD77fSV%2BUcVK%2BNpgZ36VFwj%2FSYJfF4S%2BstDCCHyTxWp95p9U%2BKb7y3hWkBD6Nx6uxj%2F9GbNSy7pFBapEpfSYZyjkbYjXl8MlubcHftUmoTSkZrN023Pt5&X-Amz-Signature=0c7ea31f2b7c0f1d4d411990205eacea599fb5b5de906073704f89ee7f282660&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XSKKEFJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T010315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtW7JT%2FTqg86m3BaHftMHk5ltGsfcGxpHvdBELyqCmTAIgCpOH0Iy1xWvSNbYzOIGfflfHJfbLyMiURQtxYEcCKiAq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDNGe9tU0mXwZkt32wircAxXFEYMMRcN24j8D8Xz6oJj847%2FCESmj4TWei1mJa6QrywpaTaqvAPmPbK5ieAIQYEDwYkIbhZpTYRU4Zryt1Su8%2FV6ktvMj40QT7KVnu8FCs2BPoRbUe9T0jyrWYp3HSJ1EjJhF%2FYbcxUVcYUik1dXPp9kuK1TwJRLw7dFtDnequBP%2B9iIuUK3JtXDVOCVhVc6lcS7IWYInTLt2zCn3A5qOseZIyWLez89A1Tpa03khO0P4LuDjZf3CoV1LmWhH1NxBvmkgQjPqmv5KR5WP0UhZW2yscAg%2ByW3nAn%2BvCFAWCsOCcJeiatvWDiOimz%2B%2BbXNsPw%2Fdoa8LfXjorp0bSBanSK7DTr5NTRyjdWmBZmEjZ4cavG1VDQgOJsku1iMor%2BsnKdOOjB37h5XNpCwSjODWlOgBIUdgP2lqGcLGb37UeqG%2Bc2r88Wqh%2FEsLu%2BNKVYsemJCsMb%2FrwWvI84vR2T2YFyaLNVwQJJtbgUZ58SKMVJaGAApiuLLS4SToDYLd2Si%2BHp1S%2BQgzPL1bOt4PGOHZA4TRSCMHeD50phB3B%2BYFjQ2TXG%2FaqUiuJqZWt4qNPQItdeuUQ78QaCk91s%2FJiqsegtSbbr8F2G7lHk8EKz4iapmoSrRmrrlBp37QMJn7h8oGOqUBSoWSerGC7vT%2Bx8E0XHCMQz1sOPs9R26MIWr%2FoBkt%2FKU7e3EX%2F%2FTSHsxRT4HlSiOvktpuW5XHzzV1cdwENAre4yIe23OPL6eg%2FRq7V1BXD77fSV%2BUcVK%2BNpgZ36VFwj%2FSYJfF4S%2BstDCCHyTxWp95p9U%2BKb7y3hWkBD6Nx6uxj%2F9GbNSy7pFBapEpfSYZyjkbYjXl8MlubcHftUmoTSkZrN023Pt5&X-Amz-Signature=15a377f20102f2100b4ad14e399a198398057acfde89b995bd8839974a514168&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

