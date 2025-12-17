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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZE2GQTKO%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T021233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGDki9aE4xqkur5MBJ1WaFPXbRtS3z73bWk8q8Opb4JrAiEArTtdIXS%2BnRRS8jD848qPLLbwzPMPjd2nYChnqbXvbLgq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDBJoya8mhz00BzqbLSrcA46Rzh4bj1oBpViIikc5jnFi4Eh%2FnoQ5VAa7huaDfoppBdG4F4p4EdcYCCJkQ58RNOdJjTxS6xfqQ%2BQkoXdVTRHS7L1bHOi9jmkg7n%2FUTBaGWTRAuqN5O4IUn5MFBrdo2vh%2FMoavCC6zqgLBCEXMSFvo1%2BOYWwfKqJl6t%2BrRjuT%2B%2BoGdQs64sTV9jouqGYf5UKHPrMPVLbG2jlXY61K8CsRDGHLuTXPFCr%2BxphQ9C%2FHUf8%2BqT5nchDjyp0qWmU0qiJs4d2FRs8amjgWmarph9cHNItfIDUgy0Hd002Y0CGrJpxWwipsmZuAGq1zbx1xdRgxDFGTLbT9EUd%2BDT61yIEuqtGIpQk0CFvyt78cb9UwbLKxlnUwXUqVyhs80aGLoBg%2Bi0%2FIEhFao9oobp1333e5413MK9IfmVgrNdLOS65KyxoKXTcKGLhcTGN3MNz%2F9UReMWbnNf%2FGn3NBIq2foCuWVJ6xVEEy5ZNMYwjJlji7rpT5y%2F5%2BKAPG6%2Bk1lVZRDLghlUaYV9anJ5ZiQn%2Ffto9qdx0wzOqy818TVvezBuahasYq2S%2F35SPbEqmCPRp5%2FVgV0%2FfpC%2BtZPUIX1Gpw3PZ7JS%2Bs3XXbzfuE8BRzu1P4yPY0E77AC%2F%2FkeOjU0MKOWiMoGOqUBMBM5VqsyxbrUAiq4YJzmXcpspvYrjDoGAFe%2FKx2oU1v%2Bngr5eMPsxel3bMOVajdaTbXaGUYU3xMpu4X5dCL29B9947%2B%2B0zl9gsAuL%2Fjq%2FYkTe3qWRoUkhDtUv2HygsrTxudBR2kCn8FL%2BmxsbSA%2B6BkRlPEFjIgjB2Mv5trMH4tM03Vc0UH7UTCNY3r4v6uiJ%2BYZspEMLbVIItU0k0E6aEurBOw2&X-Amz-Signature=ad193e80a1ce32ef1f969151f643ca92277a7bb8d0978928c9e73b47c8993d0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZE2GQTKO%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T021233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGDki9aE4xqkur5MBJ1WaFPXbRtS3z73bWk8q8Opb4JrAiEArTtdIXS%2BnRRS8jD848qPLLbwzPMPjd2nYChnqbXvbLgq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDBJoya8mhz00BzqbLSrcA46Rzh4bj1oBpViIikc5jnFi4Eh%2FnoQ5VAa7huaDfoppBdG4F4p4EdcYCCJkQ58RNOdJjTxS6xfqQ%2BQkoXdVTRHS7L1bHOi9jmkg7n%2FUTBaGWTRAuqN5O4IUn5MFBrdo2vh%2FMoavCC6zqgLBCEXMSFvo1%2BOYWwfKqJl6t%2BrRjuT%2B%2BoGdQs64sTV9jouqGYf5UKHPrMPVLbG2jlXY61K8CsRDGHLuTXPFCr%2BxphQ9C%2FHUf8%2BqT5nchDjyp0qWmU0qiJs4d2FRs8amjgWmarph9cHNItfIDUgy0Hd002Y0CGrJpxWwipsmZuAGq1zbx1xdRgxDFGTLbT9EUd%2BDT61yIEuqtGIpQk0CFvyt78cb9UwbLKxlnUwXUqVyhs80aGLoBg%2Bi0%2FIEhFao9oobp1333e5413MK9IfmVgrNdLOS65KyxoKXTcKGLhcTGN3MNz%2F9UReMWbnNf%2FGn3NBIq2foCuWVJ6xVEEy5ZNMYwjJlji7rpT5y%2F5%2BKAPG6%2Bk1lVZRDLghlUaYV9anJ5ZiQn%2Ffto9qdx0wzOqy818TVvezBuahasYq2S%2F35SPbEqmCPRp5%2FVgV0%2FfpC%2BtZPUIX1Gpw3PZ7JS%2Bs3XXbzfuE8BRzu1P4yPY0E77AC%2F%2FkeOjU0MKOWiMoGOqUBMBM5VqsyxbrUAiq4YJzmXcpspvYrjDoGAFe%2FKx2oU1v%2Bngr5eMPsxel3bMOVajdaTbXaGUYU3xMpu4X5dCL29B9947%2B%2B0zl9gsAuL%2Fjq%2FYkTe3qWRoUkhDtUv2HygsrTxudBR2kCn8FL%2BmxsbSA%2B6BkRlPEFjIgjB2Mv5trMH4tM03Vc0UH7UTCNY3r4v6uiJ%2BYZspEMLbVIItU0k0E6aEurBOw2&X-Amz-Signature=4adb34d62e06a52c573e8414a3419a4a0e4862356c3ca26fc8d7f3d31e652dd9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

