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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666K6VT7T4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T080455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCh6Uya4XTERjMCojXRKSHFRtXeg1XQdt3tM8zcSu6grQIgXdJOyeEx89quAM1Nv5w0cdY7BGaDs29HiPlnhAjQmbkq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDFgNCTkmO0omS9KzdSrcAz5fNt0Q9BszbLNAmVYKc7cB3sKCszub%2B%2B4EiHgZlCZmO%2BP5tfwffh04yphqICfBStpnkNC8%2Fo2P5rH1W0zNhasg5v4GvZdNBrSKvpRz0lZqnLfgfyAdoFMRtbCzMX7lXH%2BSEfGvCB0MOUv4vC5bPAaUrI6WvCtCT8dZ19KilcvHIFQEQzLmjTjW9sxrXLIueDOtxrkJvQ03gs6Dch2TE6qDvcrgz9clOKZrlYrIjbiHvAVn%2FmmlpNGpmWdt8LPR%2BSiN2g1US8gbHs7aLZYFynTIhWHkatEvSuA6xn6qm2TOmhT3DL8DcDopPFFApi3ei76wj0K1n0POECVjTX4QYAezttSrch8UETEcpW6GqmFw4e%2ByXYxit15P93YUFRIYVxFNWm44wnRm5vB864w0T7pjDrnDTC8kTaI6CNwkiCLOhnFtwzCf%2F1jPpSMm5XcYA3XKM%2BrrFneSzH1KG3YmgTFRAA4E1UxaWZuYxs%2BLEss9ug5HiaV%2B6sO4CeGFyZPVAM9OIK6hHTMxdcFRhXcgyucMjghUaqP7%2FR3dnKwq6ZPwZ5mv3UfDNiettUfDRQ9HCOy3Is0qihkCjvReaBvpOyM6KABQYSGTy88Fm%2FyNann92coIDBnQNPLS7FuWMKK3icoGOqUBDX2%2FzvHOfo0LjKHXY8RH%2BvrLJg1k%2FtLeMw6Ygp0h1qt6JYnCUzsXL8AE0btjtQo5eF0ryRURYvDmUk4XIpTWDdnASuIgyOUX7X16ftCF13Yzf1Xi4Hl5fA47CtGI%2BNUmlCVzSn4V0ULR3lCRiyENw7OMVj7Hz2bpchcdamJebO4eV0bJ3VATrzPi9CrQoeyFPU8hyAVJ14V9SfHBQ%2F7lVPSx18aZ&X-Amz-Signature=a6fc93a1e981072bacd5636e6bee94f7ef4fe41b3c36e428d1ffc308bf525b36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666K6VT7T4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T080455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCh6Uya4XTERjMCojXRKSHFRtXeg1XQdt3tM8zcSu6grQIgXdJOyeEx89quAM1Nv5w0cdY7BGaDs29HiPlnhAjQmbkq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDFgNCTkmO0omS9KzdSrcAz5fNt0Q9BszbLNAmVYKc7cB3sKCszub%2B%2B4EiHgZlCZmO%2BP5tfwffh04yphqICfBStpnkNC8%2Fo2P5rH1W0zNhasg5v4GvZdNBrSKvpRz0lZqnLfgfyAdoFMRtbCzMX7lXH%2BSEfGvCB0MOUv4vC5bPAaUrI6WvCtCT8dZ19KilcvHIFQEQzLmjTjW9sxrXLIueDOtxrkJvQ03gs6Dch2TE6qDvcrgz9clOKZrlYrIjbiHvAVn%2FmmlpNGpmWdt8LPR%2BSiN2g1US8gbHs7aLZYFynTIhWHkatEvSuA6xn6qm2TOmhT3DL8DcDopPFFApi3ei76wj0K1n0POECVjTX4QYAezttSrch8UETEcpW6GqmFw4e%2ByXYxit15P93YUFRIYVxFNWm44wnRm5vB864w0T7pjDrnDTC8kTaI6CNwkiCLOhnFtwzCf%2F1jPpSMm5XcYA3XKM%2BrrFneSzH1KG3YmgTFRAA4E1UxaWZuYxs%2BLEss9ug5HiaV%2B6sO4CeGFyZPVAM9OIK6hHTMxdcFRhXcgyucMjghUaqP7%2FR3dnKwq6ZPwZ5mv3UfDNiettUfDRQ9HCOy3Is0qihkCjvReaBvpOyM6KABQYSGTy88Fm%2FyNann92coIDBnQNPLS7FuWMKK3icoGOqUBDX2%2FzvHOfo0LjKHXY8RH%2BvrLJg1k%2FtLeMw6Ygp0h1qt6JYnCUzsXL8AE0btjtQo5eF0ryRURYvDmUk4XIpTWDdnASuIgyOUX7X16ftCF13Yzf1Xi4Hl5fA47CtGI%2BNUmlCVzSn4V0ULR3lCRiyENw7OMVj7Hz2bpchcdamJebO4eV0bJ3VATrzPi9CrQoeyFPU8hyAVJ14V9SfHBQ%2F7lVPSx18aZ&X-Amz-Signature=cf317729528c3786277becd75365e264d285b5b7139cb0f566b4521a56891aee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

