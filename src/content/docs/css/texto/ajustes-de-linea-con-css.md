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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLLZ6MNU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T024105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyel7ZTtQLPbWsnz0AUhTxmMlWG85AuTriv5Vd6x7QjAIgC8AEu%2F0MscK%2BfeZV6u3OsbpYa1ybaYzzq8mCIL0WqBoq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDHqfdPya07yPu%2BF%2BsyrcA8Rrxr9sIjDQc7W11y2vZ98BEneGuq6pBUVpNdaS1iklFB91n2zr8qmrVLu4UaN%2FdK6UHBENqWcLN3wBpfw7A1MPoGNDiSatFq%2Bzw%2ByyWYyu8Bs7WxQ5TQOW3Y2kGnt7CXw%2Bntsh1cpe0Srjo0CPAwNTMYYXxdtnptYvozkZMvABgk82KNl5mlPcnmizmg3Qe8TUUImbtJne1a10yDaDB9QlV0YCt82Yz%2FYQ%2FKER8074GJcBykUm6o3kuvj29Oje1ILh3L62bzyw3ITrIuL5B5VzSrOCdkCNMXMWIfygTNPjQ5y%2BZ%2BEveW7wYfi9cDtSrcymBUvfyBL5wk%2Fq2cH3rLa5Mut193MmBLie6J8Cp5BjI4jYfJur7clizHeP6K5XUZE062ILF90uv61JfgT%2BrrRnfKk4aFnI6Bn0tgrtZVCwww0AupCu%2Fx8vsNDOdmRFmf05%2FnM14EGXeTz3ILCrXjevDVKoL9O1j%2BK9xkjFpUnn5DoiK6XVdcYfEGIyPF3HTTHysvdqpA%2B5Dr%2B8tYTKb710NtPsxmEKvtnDmWDW%2FxBgxc0VQPlG3l17aQ7Q22kQssKrT9PIpVsveM%2BNVo1aHANvTEAKjH49sd%2BaY%2FhaWJ9YpngDCdSGOCtjnt6oMOmXiMoGOqUB579nd9u%2B6GK20%2F2xZOPI9A6Ihx5Mrw%2BGZ1LYbI3zWckMUGo%2FKNzGvAS1JPbgvDxMyisuDYv%2BiFAqYTr%2BSPg98ORvRtqZcZ%2BULFMTgtKUbdrXtcGGiNSsKX3t2LTUk3TwPR9a4F6C0BGfjWR7EyC0%2BpgOzAgqRC%2BveFGj5o46vwUvOFu6rzMbXXxfOnXuoKdx2IUT1We5fN1HFI7iNx3yYCWLxEtN&X-Amz-Signature=164a38493aaa06f6350b5442d9e55eccf9acc080471146bbb1fbdbbc4744f37d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLLZ6MNU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T024105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyel7ZTtQLPbWsnz0AUhTxmMlWG85AuTriv5Vd6x7QjAIgC8AEu%2F0MscK%2BfeZV6u3OsbpYa1ybaYzzq8mCIL0WqBoq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDHqfdPya07yPu%2BF%2BsyrcA8Rrxr9sIjDQc7W11y2vZ98BEneGuq6pBUVpNdaS1iklFB91n2zr8qmrVLu4UaN%2FdK6UHBENqWcLN3wBpfw7A1MPoGNDiSatFq%2Bzw%2ByyWYyu8Bs7WxQ5TQOW3Y2kGnt7CXw%2Bntsh1cpe0Srjo0CPAwNTMYYXxdtnptYvozkZMvABgk82KNl5mlPcnmizmg3Qe8TUUImbtJne1a10yDaDB9QlV0YCt82Yz%2FYQ%2FKER8074GJcBykUm6o3kuvj29Oje1ILh3L62bzyw3ITrIuL5B5VzSrOCdkCNMXMWIfygTNPjQ5y%2BZ%2BEveW7wYfi9cDtSrcymBUvfyBL5wk%2Fq2cH3rLa5Mut193MmBLie6J8Cp5BjI4jYfJur7clizHeP6K5XUZE062ILF90uv61JfgT%2BrrRnfKk4aFnI6Bn0tgrtZVCwww0AupCu%2Fx8vsNDOdmRFmf05%2FnM14EGXeTz3ILCrXjevDVKoL9O1j%2BK9xkjFpUnn5DoiK6XVdcYfEGIyPF3HTTHysvdqpA%2B5Dr%2B8tYTKb710NtPsxmEKvtnDmWDW%2FxBgxc0VQPlG3l17aQ7Q22kQssKrT9PIpVsveM%2BNVo1aHANvTEAKjH49sd%2BaY%2FhaWJ9YpngDCdSGOCtjnt6oMOmXiMoGOqUB579nd9u%2B6GK20%2F2xZOPI9A6Ihx5Mrw%2BGZ1LYbI3zWckMUGo%2FKNzGvAS1JPbgvDxMyisuDYv%2BiFAqYTr%2BSPg98ORvRtqZcZ%2BULFMTgtKUbdrXtcGGiNSsKX3t2LTUk3TwPR9a4F6C0BGfjWR7EyC0%2BpgOzAgqRC%2BveFGj5o46vwUvOFu6rzMbXXxfOnXuoKdx2IUT1We5fN1HFI7iNx3yYCWLxEtN&X-Amz-Signature=94df7752de29ce19fd483e17b3e8d8759d2f4606fd84dcfacdafd65dea95e964&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

