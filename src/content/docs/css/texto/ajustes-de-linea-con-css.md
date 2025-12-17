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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BY2RII2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T032322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG6xH0KRF6n5CBu9yjzgoBcl7CCJz11hcnT2xcycXY6cAiEA3Yy7byvFvB%2BMHaHTvH148Xq05qmqXdxnp%2FHmdcs6WGIq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDGoCyWgG3PU%2BbYp7WSrcAzEoUxb6LjZPzdMG7cEmsKuTZLzELpMHCXlc3ZuBS62EKtqjnCYxf5fWFKV5kBn6gG70hYiv%2FYhJ6bqxh0u%2FoANBzyJ%2BUmXgBB4q%2Bw9XOgShXFkZDGdDfnGAhGItRqIFXqVbNapKfucOd%2BIEB2lPzoZd%2BWhUWix4VLC9FpsF%2FoDptl%2BmVeE%2BpCcwWWuq0zVA110f0XWwXqp%2FfmwucuxusdwpcJwZ%2BnngPWEHItpOSJWdfGylEVXi4uzTQuHjqYnU%2BubOygyHp7cgwGTqe%2FvuNGRMLCfmMZ4HBADZEpwhPBVMX1Nm03i1nV9w94jMCxmT9Giv6NYoW76im5ixfpVCfh4%2FLF9qhaR7cS2NtKAym8JpQpcKzlVjJO3dXasNyYMECwaOk9QVsneDJDwSNOjxU0iUoSgt8JuxvmjVeyTxYyAZRJr1bV%2FdTRB8Sw%2F7cjFpkXdnQ6f5Dc%2BdR0oVuPr5o3sdJ7UAZTFxX7oxb587QS74pEom66iIfBR2qZ%2FwpUXEPgVBsmuMLGWm3HCHLth4Kk%2Fi6VxUK987%2Fc9JWtQ2JshqMdD7r0Mfa79PeQpPt%2FpI3HsW22ZDynzu0OYeN8tXtFu3Ji%2BpuJWfHUQCWLqJLc3duVBGFwwEPWO1GitWML2xiMoGOqUBQR8u1x7mPP%2FV7fYuWQRqEye7ohcVdxnXgoXTuB3VO9sXxWDxXcU1%2B%2B1D5eu8HTS6acz4LsNnMsbwMjoo3c%2F3OppqXzYuAt0WaQRxXIR175uFQDU4TmicmYfL1mSegOZ1NXVHXub6Q%2FpTNyM10SfL%2BI34CI3JKctbjEpT%2BY%2FlS7qGQOVvfZtTIwj1SpbtXLByLvJpShgvJWe8KQNoyrVhTgbUPOzz&X-Amz-Signature=d1958f354d447460a108975684a8472db3b4da66dbb7f4926b7432c2dbc6b98e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BY2RII2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T032322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG6xH0KRF6n5CBu9yjzgoBcl7CCJz11hcnT2xcycXY6cAiEA3Yy7byvFvB%2BMHaHTvH148Xq05qmqXdxnp%2FHmdcs6WGIq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDGoCyWgG3PU%2BbYp7WSrcAzEoUxb6LjZPzdMG7cEmsKuTZLzELpMHCXlc3ZuBS62EKtqjnCYxf5fWFKV5kBn6gG70hYiv%2FYhJ6bqxh0u%2FoANBzyJ%2BUmXgBB4q%2Bw9XOgShXFkZDGdDfnGAhGItRqIFXqVbNapKfucOd%2BIEB2lPzoZd%2BWhUWix4VLC9FpsF%2FoDptl%2BmVeE%2BpCcwWWuq0zVA110f0XWwXqp%2FfmwucuxusdwpcJwZ%2BnngPWEHItpOSJWdfGylEVXi4uzTQuHjqYnU%2BubOygyHp7cgwGTqe%2FvuNGRMLCfmMZ4HBADZEpwhPBVMX1Nm03i1nV9w94jMCxmT9Giv6NYoW76im5ixfpVCfh4%2FLF9qhaR7cS2NtKAym8JpQpcKzlVjJO3dXasNyYMECwaOk9QVsneDJDwSNOjxU0iUoSgt8JuxvmjVeyTxYyAZRJr1bV%2FdTRB8Sw%2F7cjFpkXdnQ6f5Dc%2BdR0oVuPr5o3sdJ7UAZTFxX7oxb587QS74pEom66iIfBR2qZ%2FwpUXEPgVBsmuMLGWm3HCHLth4Kk%2Fi6VxUK987%2Fc9JWtQ2JshqMdD7r0Mfa79PeQpPt%2FpI3HsW22ZDynzu0OYeN8tXtFu3Ji%2BpuJWfHUQCWLqJLc3duVBGFwwEPWO1GitWML2xiMoGOqUBQR8u1x7mPP%2FV7fYuWQRqEye7ohcVdxnXgoXTuB3VO9sXxWDxXcU1%2B%2B1D5eu8HTS6acz4LsNnMsbwMjoo3c%2F3OppqXzYuAt0WaQRxXIR175uFQDU4TmicmYfL1mSegOZ1NXVHXub6Q%2FpTNyM10SfL%2BI34CI3JKctbjEpT%2BY%2FlS7qGQOVvfZtTIwj1SpbtXLByLvJpShgvJWe8KQNoyrVhTgbUPOzz&X-Amz-Signature=e1702fef37564b5c06a34e86039d2177acf70091b4fb5b215ad284184efda20c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

