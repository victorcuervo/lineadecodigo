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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4KYJ6AR%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T010042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHJhUIaPzSnXAS35XkwPls0pLA7ceDJ%2FdxuJBA4WBqH6AiEAribfSKsgqi0iNR53m%2FIpa6MajqqP3cB%2FSQMz4UoYgFMq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDG9P03acq990zDm2hircA3pAh%2BUz7AnOZ8mBRQRg%2BOtLQAGn14kj%2BJoeeNzyhwmUKXsfkvPWAkVnTaoCVqraxmaAl8AnilKhu0PAEpM1w4HiDmS7CN%2BRo9EZO5wDt65fuAvmH79tgyeqZmZ%2F1Ub%2BESmr94izjv4hLJGpUaMKTsaNI6JQZ7%2Bh5AsPeDzdBkrOx7Dd9GgxBJylmU%2Fqse%2BtXXlE7w%2FOPmArYagWwn85vV6Ftdcm2TGQb2wwCgr%2FNaOfoq6MZ1avvSHEilXmOFwZqsJPqegGCZJva%2F8w%2B0WCLrS%2BI2x0MjMztgCLKX8i%2BNUhkMqqCHA6vM151t9foxaLsM0y3jHN5k9%2F6T%2Buwi%2Fl82WrEVao%2FGAC8Xb%2FCaBZRc7Yg6hVcU9Hyfz1vbJUiwjnfJqcM%2FTSRHxS09Ec7OUtkKV%2FZVHMFB6zAdiZiosgzKczEjzWCVS3bK4V7pWseQgYU5MpHewRe2chzlj1Q9k71KzkJMs2HXvMo38yYyY8X3JeZiZLUXu%2F%2FTKt2ikWYEkL6JgbFBy7BSpQboJGVhCZeLdma6Rs4urMBIN9UnONoIO4z5yKYuoX%2B4HeKA%2BvSj0axnfe9GGf87P4SlO2oPUzr6N8U4pw4v0MnT0MJ1y1PTfXws51EyAViLqJ2%2FVRMOb7h8oGOqUBoiJmpIRspaRHaU0MlEQOqm14SX%2FzFBh%2FLZLajxvTDeN30GbLyjRjr2ByowPut9GX4oPICDctTHQqMrsuIQo%2FY1olIXTIvhEpz8zRaNJ1OGAMFaAkKyptqOiWisGBeYPG7iq9MVgzUc9Q4oITb7h0k8qP1%2BrUxzNsqSSAtmSFRkYsOAgn%2FUP4O80IDlgaKg%2FyeES8JsaUnURjA3CnomqV01Y5LLr8&X-Amz-Signature=a5f4667ebf18c1cb58ed89679a098d9d9793e480e57fc64699d2e7d1cd253237&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4KYJ6AR%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T010042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHJhUIaPzSnXAS35XkwPls0pLA7ceDJ%2FdxuJBA4WBqH6AiEAribfSKsgqi0iNR53m%2FIpa6MajqqP3cB%2FSQMz4UoYgFMq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDG9P03acq990zDm2hircA3pAh%2BUz7AnOZ8mBRQRg%2BOtLQAGn14kj%2BJoeeNzyhwmUKXsfkvPWAkVnTaoCVqraxmaAl8AnilKhu0PAEpM1w4HiDmS7CN%2BRo9EZO5wDt65fuAvmH79tgyeqZmZ%2F1Ub%2BESmr94izjv4hLJGpUaMKTsaNI6JQZ7%2Bh5AsPeDzdBkrOx7Dd9GgxBJylmU%2Fqse%2BtXXlE7w%2FOPmArYagWwn85vV6Ftdcm2TGQb2wwCgr%2FNaOfoq6MZ1avvSHEilXmOFwZqsJPqegGCZJva%2F8w%2B0WCLrS%2BI2x0MjMztgCLKX8i%2BNUhkMqqCHA6vM151t9foxaLsM0y3jHN5k9%2F6T%2Buwi%2Fl82WrEVao%2FGAC8Xb%2FCaBZRc7Yg6hVcU9Hyfz1vbJUiwjnfJqcM%2FTSRHxS09Ec7OUtkKV%2FZVHMFB6zAdiZiosgzKczEjzWCVS3bK4V7pWseQgYU5MpHewRe2chzlj1Q9k71KzkJMs2HXvMo38yYyY8X3JeZiZLUXu%2F%2FTKt2ikWYEkL6JgbFBy7BSpQboJGVhCZeLdma6Rs4urMBIN9UnONoIO4z5yKYuoX%2B4HeKA%2BvSj0axnfe9GGf87P4SlO2oPUzr6N8U4pw4v0MnT0MJ1y1PTfXws51EyAViLqJ2%2FVRMOb7h8oGOqUBoiJmpIRspaRHaU0MlEQOqm14SX%2FzFBh%2FLZLajxvTDeN30GbLyjRjr2ByowPut9GX4oPICDctTHQqMrsuIQo%2FY1olIXTIvhEpz8zRaNJ1OGAMFaAkKyptqOiWisGBeYPG7iq9MVgzUc9Q4oITb7h0k8qP1%2BrUxzNsqSSAtmSFRkYsOAgn%2FUP4O80IDlgaKg%2FyeES8JsaUnURjA3CnomqV01Y5LLr8&X-Amz-Signature=5ce092a4a08148d7e652e2ed43e31c528ebd0eca187c2ddf3f659a02678b4cc6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

