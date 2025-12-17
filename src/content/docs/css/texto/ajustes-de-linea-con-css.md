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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WACYKJP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T022436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFbkVM1HAEXgoGSrQbBQ4yCzIsQat%2F8NastZIPWHFtgXAiBaWhNGqD7c1EBaaCvhHK7i%2F3A0QDKsC%2FHUYphUgG5yJCr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIM4S576pcVXzfmJLoIKtwDBFlzVUEnyfOm%2FTvRjj0vHxMN8kVtWm15U1d8FbYWxWMl0lLsJVwJsSr2luKVmPvUGi2Wq2z62HhCCWr%2FW0K1uOlWxud3amPDb%2B5VDedHCV7G9hwpJppDm5Y7y99j0YT0qulbcdHsJMM6yA9czP71dDldvyjqF6bQAjN7MeeUaBUjN6zBnHc0hhkaAHiuHUJvNw7r0%2FfZzHvbvUA%2BD9y6aBw%2BeUyR%2FnzVYjeTDTwYwQ8GYa9ccdao64aO%2FN1%2BbJPF8eBUxI23LOzENa2q8d07oT4%2BxNSJaY4wa%2B31PONqs1K58liHZSOOLpaSBJhDoNGtGdip0o7P1bqY4oK%2FuROS2iCLE1CZWq1f4InywuGsZcNWf9MsSdBJdD2Mg6zI5gXydtxIRZJG22HE5fH6a8agX6SiEHFxUgJu%2BuDBiPF2yZVTy%2F2XS8W9EDZzden2LHMNHtjZ4%2B%2BzUCGw6zeBJfNVNNpaG3JRCCjWtf0vARBMEhimZlcEs39HVfrjc1YZiHQx8Cw383kawKlpQE%2BX1VYV9CzpcdXaiy4DZQD215ZChQMWLotzEZjndK1Fizmk486b85GEGwtwx%2BKPFZBakEir%2FJUYLNHj0de3JTPnH1v2TCi4F2N6qhIZnEfLFRUwl5iIygY6pgEXHj9LmFbvOwC%2BjeUvY4eefF2OiNToBIlnwdS2eG3QP1%2BpSJIyz7lSNyjzvAlkb5d6JzJ4VS9%2B1iZhABrurIZCupDIJHefhMCnURPFSGxp0PLNVBlpDsPY9XB661VbuaVrmRJS8eWPdI4n0zlARUwU7DQVk736EmKlPOcqV0%2BmecRXeEGVKDuLvK0DydS38BEPbJHIiuT9dcVfCFiIUiUhCkQ2Yr6S&X-Amz-Signature=fe46be3acd01318afbdeb946d090c11f93a01bb8a47386402f147b762e65d5ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WACYKJP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T022436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFbkVM1HAEXgoGSrQbBQ4yCzIsQat%2F8NastZIPWHFtgXAiBaWhNGqD7c1EBaaCvhHK7i%2F3A0QDKsC%2FHUYphUgG5yJCr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIM4S576pcVXzfmJLoIKtwDBFlzVUEnyfOm%2FTvRjj0vHxMN8kVtWm15U1d8FbYWxWMl0lLsJVwJsSr2luKVmPvUGi2Wq2z62HhCCWr%2FW0K1uOlWxud3amPDb%2B5VDedHCV7G9hwpJppDm5Y7y99j0YT0qulbcdHsJMM6yA9czP71dDldvyjqF6bQAjN7MeeUaBUjN6zBnHc0hhkaAHiuHUJvNw7r0%2FfZzHvbvUA%2BD9y6aBw%2BeUyR%2FnzVYjeTDTwYwQ8GYa9ccdao64aO%2FN1%2BbJPF8eBUxI23LOzENa2q8d07oT4%2BxNSJaY4wa%2B31PONqs1K58liHZSOOLpaSBJhDoNGtGdip0o7P1bqY4oK%2FuROS2iCLE1CZWq1f4InywuGsZcNWf9MsSdBJdD2Mg6zI5gXydtxIRZJG22HE5fH6a8agX6SiEHFxUgJu%2BuDBiPF2yZVTy%2F2XS8W9EDZzden2LHMNHtjZ4%2B%2BzUCGw6zeBJfNVNNpaG3JRCCjWtf0vARBMEhimZlcEs39HVfrjc1YZiHQx8Cw383kawKlpQE%2BX1VYV9CzpcdXaiy4DZQD215ZChQMWLotzEZjndK1Fizmk486b85GEGwtwx%2BKPFZBakEir%2FJUYLNHj0de3JTPnH1v2TCi4F2N6qhIZnEfLFRUwl5iIygY6pgEXHj9LmFbvOwC%2BjeUvY4eefF2OiNToBIlnwdS2eG3QP1%2BpSJIyz7lSNyjzvAlkb5d6JzJ4VS9%2B1iZhABrurIZCupDIJHefhMCnURPFSGxp0PLNVBlpDsPY9XB661VbuaVrmRJS8eWPdI4n0zlARUwU7DQVk736EmKlPOcqV0%2BmecRXeEGVKDuLvK0DydS38BEPbJHIiuT9dcVfCFiIUiUhCkQ2Yr6S&X-Amz-Signature=c384d3af9183e0ae7379e3232e0c286585c2bf497adf3e10b6056684db34cf73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

