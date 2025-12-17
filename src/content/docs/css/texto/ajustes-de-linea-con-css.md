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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKH55PYR%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T122739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBKS3Wxa5siMhamv%2BDlknEGLPPCbvdKOXd%2B9L7XiKt%2BuAiEA9846vML950JWa4mTHYE1uBANvJnk8v4PHalASJ4H1isq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDOJHYlQ194hMrUAWdircA%2FWbQPVbwve4eneif6VK%2B3L4AcJCAvbbYWRBoT9kXrhXbhY1wEXQuCUZw4oxcCEhOrWpN%2B7aTWiBNz7M640pxxvtxwy1Iw7kFOaLqXYZEBWkBHpO%2FQ%2FWG9Gd961yZPpgMgVj2dt4eN3ZUt81osXym%2FdtZ7VzgVHmOVRlL7hsiAGNjFg%2FZ2maNvk7s17r2T62wJfkC88qsQLlKnbhXLzQvzgRCpviz4rcNIUxczsnRRiIcf%2F0LiFV%2FFtMx5mvEMY8ugB4E7mcsAxRKltpo3kKp2EDCNrz5hhAGGXlAYtE5EhLF1MVkhfG3G9228MAFeSVVhMjbhgpGaPArE0ANkR9tn5JXp6pydAoGnb9JIlYb1SFzAvbULQcZ3zfBAw4JgOwniSmK1hYx0KyJjUfvo%2BRl39sjd1KFBQyJA7mUFSby5RauWAiieLXtKYw3gKNrY2%2BwooIB0DGn%2BJKTf7SNlyEfdnka8mOEzTpStdtnNS2jeLc1Bl9T4aedsUewurXkrMIccqQ9jJrDXTdqUv8BYIzdgEQPMJufq2wK4V2fFRNyuRvNGMSZ9E7uSyUHLYy8xlwrkSgk2bsw3VLiMc55OSfLonsD%2BFXSFtk%2BDRPLdpaywt1fIFbxQoxT7GiFas2MMiqisoGOqUBv8h1Ui1y00k0FYgihPgLOdkj%2FyKEsGXpita1E7%2BsxQ8OIWcpvyaO%2FSmKFPYfc%2BzmGwWCmbeRctPji3mDsdx3d4imADxNVcklojV%2FF1II1ay5iqiqbMA0RhhCkHJZK56n%2BoQ9vfGbABgnElifF9NFQ%2BGrBaIEc3TwEYBp4JrEPt0pscA1jPElqcUYbs%2Fvi0t9stfDy4hn26PlpXDdXSM47HPcIca5&X-Amz-Signature=505c40c333f2a19c932b087eeaca0c2396f1e0b77bfed9a98350f374d0a5cad5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKH55PYR%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T122739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBKS3Wxa5siMhamv%2BDlknEGLPPCbvdKOXd%2B9L7XiKt%2BuAiEA9846vML950JWa4mTHYE1uBANvJnk8v4PHalASJ4H1isq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDOJHYlQ194hMrUAWdircA%2FWbQPVbwve4eneif6VK%2B3L4AcJCAvbbYWRBoT9kXrhXbhY1wEXQuCUZw4oxcCEhOrWpN%2B7aTWiBNz7M640pxxvtxwy1Iw7kFOaLqXYZEBWkBHpO%2FQ%2FWG9Gd961yZPpgMgVj2dt4eN3ZUt81osXym%2FdtZ7VzgVHmOVRlL7hsiAGNjFg%2FZ2maNvk7s17r2T62wJfkC88qsQLlKnbhXLzQvzgRCpviz4rcNIUxczsnRRiIcf%2F0LiFV%2FFtMx5mvEMY8ugB4E7mcsAxRKltpo3kKp2EDCNrz5hhAGGXlAYtE5EhLF1MVkhfG3G9228MAFeSVVhMjbhgpGaPArE0ANkR9tn5JXp6pydAoGnb9JIlYb1SFzAvbULQcZ3zfBAw4JgOwniSmK1hYx0KyJjUfvo%2BRl39sjd1KFBQyJA7mUFSby5RauWAiieLXtKYw3gKNrY2%2BwooIB0DGn%2BJKTf7SNlyEfdnka8mOEzTpStdtnNS2jeLc1Bl9T4aedsUewurXkrMIccqQ9jJrDXTdqUv8BYIzdgEQPMJufq2wK4V2fFRNyuRvNGMSZ9E7uSyUHLYy8xlwrkSgk2bsw3VLiMc55OSfLonsD%2BFXSFtk%2BDRPLdpaywt1fIFbxQoxT7GiFas2MMiqisoGOqUBv8h1Ui1y00k0FYgihPgLOdkj%2FyKEsGXpita1E7%2BsxQ8OIWcpvyaO%2FSmKFPYfc%2BzmGwWCmbeRctPji3mDsdx3d4imADxNVcklojV%2FF1II1ay5iqiqbMA0RhhCkHJZK56n%2BoQ9vfGbABgnElifF9NFQ%2BGrBaIEc3TwEYBp4JrEPt0pscA1jPElqcUYbs%2Fvi0t9stfDy4hn26PlpXDdXSM47HPcIca5&X-Amz-Signature=fd5cb6a22fe6c5157a865765b3ccc9ae67f81ddddad0c05efa9a1e5ee8e04cf8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

