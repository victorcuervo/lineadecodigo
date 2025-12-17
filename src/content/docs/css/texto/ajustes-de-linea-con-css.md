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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRWJBZLA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T060244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG1ObizOUDBsYcTqdY7pGgYRlyPvt7%2BexC9uhPSdQYXeAiEA0UAvuRRqLnv716z0lpHSyANvqz24Vf%2B%2FOl6H4xuEsuEq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDBH7ptM23kVEl6bUYSrcA5pHYS%2BcEAn%2BcPrjX2w90%2FZRN%2F9iakJ7X1r4dRv4mgehW7NBAo5ha7Y7l2X%2FuoYZpYTUAwZvLcSCEaRheHbnciLD2TsYGb7NNBo%2BaPaII4GB2bMtKRCirSOGLfM%2BZ4qn87IRnKyEsXFIRWBTd4TVYb78kf8SvZ78mBJHmWuyqnfGs1gP8mqPKkwDypJ9STvAArLyVmEH1I28OZawLF6UlkH0lfLwsxnqlCrPtw8dwlccajYKaHsMacAlrFfgUVVt4AFk43c4%2F6w2JmAg497wmzCcqMBGWiLDqQAI64pDicRyhCZjhbmNhdW%2FCD6Ud%2Fg39JfmEx5neVRI3qFhHjuxgFzT4OiS5j1%2FBCLWUyVj8H6n8CZGNCm1PIzTU%2FtYhf6dotc5zUz%2BZP5HGrxJG25VXXdASz9O56zU8UL3PX6spAvNb638JFgYgwCuEZekECFlp8SaY6%2BTeTmfr6kmzbJCVv66DoIfX3hjaa%2BXaMwYTdCpDybvauZRL6Qx1ThuOJ%2BtaWtyksvpe2TOyuJhkD%2B%2B2xmRwYpBiVo98ZMtKDmfLkfkdp9MpWsDr2X23EIW%2F5inPAsv8BJaQ5pfIK8gaq6oYUB3d9EMR0o9tHICoQc1%2FJDLKtTw%2BM38gnpzTRvqMI2CicoGOqUB9e5KHIb0uHVxM5hgrK%2Buzb76OpVGcI0h6l8wgskq%2BveRE8D%2FJ9WKPQJk3PbfyoWCeSsSLAc%2FgBG2zYPBfG1czsEnXhVoEl9K3d8NzOq4NIpTmbAfb%2FBmt%2FCjgGqqpnG8MI83zDroL3nqhTqoBZ9q8aHnQOrC2rTEf2QFqhdTpc9EJ7VXhbyBKMzKq0N1tSBRH6kf1712A%2FmiqbMYjudyTtoKbv%2BW&X-Amz-Signature=8fbd08317d53923ba05cd857f3cce7bbee1df158f036e7a9305247fbc5f9905b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRWJBZLA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T060244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG1ObizOUDBsYcTqdY7pGgYRlyPvt7%2BexC9uhPSdQYXeAiEA0UAvuRRqLnv716z0lpHSyANvqz24Vf%2B%2FOl6H4xuEsuEq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDBH7ptM23kVEl6bUYSrcA5pHYS%2BcEAn%2BcPrjX2w90%2FZRN%2F9iakJ7X1r4dRv4mgehW7NBAo5ha7Y7l2X%2FuoYZpYTUAwZvLcSCEaRheHbnciLD2TsYGb7NNBo%2BaPaII4GB2bMtKRCirSOGLfM%2BZ4qn87IRnKyEsXFIRWBTd4TVYb78kf8SvZ78mBJHmWuyqnfGs1gP8mqPKkwDypJ9STvAArLyVmEH1I28OZawLF6UlkH0lfLwsxnqlCrPtw8dwlccajYKaHsMacAlrFfgUVVt4AFk43c4%2F6w2JmAg497wmzCcqMBGWiLDqQAI64pDicRyhCZjhbmNhdW%2FCD6Ud%2Fg39JfmEx5neVRI3qFhHjuxgFzT4OiS5j1%2FBCLWUyVj8H6n8CZGNCm1PIzTU%2FtYhf6dotc5zUz%2BZP5HGrxJG25VXXdASz9O56zU8UL3PX6spAvNb638JFgYgwCuEZekECFlp8SaY6%2BTeTmfr6kmzbJCVv66DoIfX3hjaa%2BXaMwYTdCpDybvauZRL6Qx1ThuOJ%2BtaWtyksvpe2TOyuJhkD%2B%2B2xmRwYpBiVo98ZMtKDmfLkfkdp9MpWsDr2X23EIW%2F5inPAsv8BJaQ5pfIK8gaq6oYUB3d9EMR0o9tHICoQc1%2FJDLKtTw%2BM38gnpzTRvqMI2CicoGOqUB9e5KHIb0uHVxM5hgrK%2Buzb76OpVGcI0h6l8wgskq%2BveRE8D%2FJ9WKPQJk3PbfyoWCeSsSLAc%2FgBG2zYPBfG1czsEnXhVoEl9K3d8NzOq4NIpTmbAfb%2FBmt%2FCjgGqqpnG8MI83zDroL3nqhTqoBZ9q8aHnQOrC2rTEf2QFqhdTpc9EJ7VXhbyBKMzKq0N1tSBRH6kf1712A%2FmiqbMYjudyTtoKbv%2BW&X-Amz-Signature=920aebdc27232badd63d74959f360820513735cc8ebe950d8c5243edfbe9256c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

