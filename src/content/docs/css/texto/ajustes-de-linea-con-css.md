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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3CXYXW7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T164942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG%2Bm0LBgyJe9EWu2A63eCTVOXvPcYdxKJLcoR0DbG1iFAiEA5QYx8llH%2BP30EbQTNleflGJvz2CThDju09fxfrB9S7wqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHFWFiUsU%2Fx8sIJOKSrcA%2F2HOFp93PSbNQDvKjXXBs45aYr4wBB0BLn%2Br%2FnfOKJJ5t6UNxe38smRXyssiGc7Telz9OE%2BLMREnpaNIghcBV%2F3T8v7gRdTzAdPNrdXkmbGDg9%2BCS8spTKcErITTasKrGAsmXUbAmwxW8ussEeCfTYTRWGAVvVyynq5xrd%2F2eUanrGIs4nV5mzuQWVzbMCRF9Ln%2B7iD2q4atNcwMqx%2F1j%2F95kfQv6bljYulM4D%2BCUyz5QNOmXU9X8uYxcMDXKR2k0xEGHpFYCcFjpgYqRJzWnPtpgXmVkZbBeLciodZPyQX3BrCUbp4NIMIZomsikAGqQTy9T1TjwNjfS9sPTfuGazIOzRG1UKPrq2T3TcZAFtiEVVi%2FhkQqazEYyEgGaSu4LQtQ60n4QXblmL6vAS47aot5K1cad01141bk83ESzVHnP1lLFc%2FBDvieJEymaFX%2FgH%2F%2Ffsv4H%2BCoxfRdtEWC81h5uZXKLMqKh8S1QQaNj0sH5iRJ%2FtByUoAXR%2BK1spJyV50%2BRxKNxdJhvYbCztxinpoEI0n97jbMZTiPfVn1zSNsOA6L23ZUMNo%2F%2FTSybR%2BdQ2gwbuu7LUaSKiwc%2B5khK5RSqKECnodyaxQHGda7Crr9qkKKIxT8sNuQKVpMKCgi8oGOqUBP5mKllrDFcHPy58iCKkw09HaAPucUcLsS1ZVZldtRtpl5rD9oqyrPnVBC5AIsZz1mDB3YnEq0LwyTi%2B%2FQwsj02lbet1IForHNZNKgi0R%2BOmzcTaxiv3ysSbr1whW2me83UjIF16wb3FAYSSlZlFOA%2BH4RscTrzUX0uDo5uyw0CAiWvZfkEQASNZGdwLvJV7lhXXuT7xxqcKT87v5JpVo6BP2BPTF&X-Amz-Signature=3e218f93df111ff6ab54492bcbe98a708be60ad33b174d1017c1b011698fdb0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3CXYXW7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T164942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG%2Bm0LBgyJe9EWu2A63eCTVOXvPcYdxKJLcoR0DbG1iFAiEA5QYx8llH%2BP30EbQTNleflGJvz2CThDju09fxfrB9S7wqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHFWFiUsU%2Fx8sIJOKSrcA%2F2HOFp93PSbNQDvKjXXBs45aYr4wBB0BLn%2Br%2FnfOKJJ5t6UNxe38smRXyssiGc7Telz9OE%2BLMREnpaNIghcBV%2F3T8v7gRdTzAdPNrdXkmbGDg9%2BCS8spTKcErITTasKrGAsmXUbAmwxW8ussEeCfTYTRWGAVvVyynq5xrd%2F2eUanrGIs4nV5mzuQWVzbMCRF9Ln%2B7iD2q4atNcwMqx%2F1j%2F95kfQv6bljYulM4D%2BCUyz5QNOmXU9X8uYxcMDXKR2k0xEGHpFYCcFjpgYqRJzWnPtpgXmVkZbBeLciodZPyQX3BrCUbp4NIMIZomsikAGqQTy9T1TjwNjfS9sPTfuGazIOzRG1UKPrq2T3TcZAFtiEVVi%2FhkQqazEYyEgGaSu4LQtQ60n4QXblmL6vAS47aot5K1cad01141bk83ESzVHnP1lLFc%2FBDvieJEymaFX%2FgH%2F%2Ffsv4H%2BCoxfRdtEWC81h5uZXKLMqKh8S1QQaNj0sH5iRJ%2FtByUoAXR%2BK1spJyV50%2BRxKNxdJhvYbCztxinpoEI0n97jbMZTiPfVn1zSNsOA6L23ZUMNo%2F%2FTSybR%2BdQ2gwbuu7LUaSKiwc%2B5khK5RSqKECnodyaxQHGda7Crr9qkKKIxT8sNuQKVpMKCgi8oGOqUBP5mKllrDFcHPy58iCKkw09HaAPucUcLsS1ZVZldtRtpl5rD9oqyrPnVBC5AIsZz1mDB3YnEq0LwyTi%2B%2FQwsj02lbet1IForHNZNKgi0R%2BOmzcTaxiv3ysSbr1whW2me83UjIF16wb3FAYSSlZlFOA%2BH4RscTrzUX0uDo5uyw0CAiWvZfkEQASNZGdwLvJV7lhXXuT7xxqcKT87v5JpVo6BP2BPTF&X-Amz-Signature=0a7b565ac2a096d7dc046d8b9e098b7521f5c575480abf365a422986228ad1e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

