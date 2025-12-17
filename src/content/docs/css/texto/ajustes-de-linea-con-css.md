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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUJTOMDI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T212631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGRvD2W1PkBwnH29hLscVnQYoy5ulUEt50oh6yDTetmEAiEAj2%2Bi1JnnfjnuGIqUXSozlsW%2BGb4UGrEx8nVN8Gn%2FfNAqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ2DeoOCSDLccAqSCyrcA6RWvaapQYwyBL%2FePhAPHY2np4SOMxOWy5FZFdnlHmOGGcWSltFmtv8kbH6nm27jedhgcH1xLKUCjOZf5XBOxwNn2wSeXcyTuTGQZBDNY1pU88RiV1oZ5d9oe%2B3CPV2wW2ytWhRshjueYMiDX%2FX6%2BTLG7xDvZc2AyW0xeK3RssnwEPZRW9DufSgce51ZHccEK1o0IX6qZYs0ikBpNhohwiK4NJKzHn80SrSeTnWleXoQ5K7y26Lhrtx8JmP0plO3MUjkk0ik%2FCHcijx2XxYDOWRbEJFlifne9fouoA%2F7xXtCsa2gEDPej7z4DAyDMs0fH7zwN1IYQKa%2FMQKL%2BxEMZl8MBf1olvfceGhXurz72vaG2NVe1buTCbSwjHWMIJ4ESX%2FeJuBeZRQbSsDoL5GmHiZqbgaNhnnNsj%2FXFp8DgNwzC7iEX5BDfcmOr%2BCLB4567MpFakR62fVhKh55tPn897ysUmfPAoAIIEMyWycYXBRX4Uf8t5OPeC6JmeK4QOIh1o3BjBQO5eBDT2fkYURpp1frvreduYw9G0iA%2BlYqzMtO03T8Mvx0r%2BXmt%2F37y2qCs08UIuoTs3v9HDKDVUs57zAMBzB1oFzz6PvBdF2SGDPwUqmRj0ZtlqNblcjwMJSujMoGOqUBCVc%2FIV3mss5v5MR1Uz1thweNOphv7Pc2%2FaPgbGBU6bzkl3GFaLe0%2BEL5dT%2FJE2Sws7rlOvqsmxK%2Fe8Z3usEW3d7n%2BwR4JruM7FJuqhA%2FXKhgwMMpFc0vrOIEK4AcsoseSly2tr8mOl0ZgNzgOld%2BxsPRKWVxWy9lPXQD3U4PLhPoNeirU99BXAFiX1aCHEnFfxFeH%2Bc%2B3GLdIB70lPDao%2FXUKXsa&X-Amz-Signature=dec28e42957088803c9b039b1c1e03f4341b6985a506294110d90e65e887b3bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUJTOMDI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T212631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGRvD2W1PkBwnH29hLscVnQYoy5ulUEt50oh6yDTetmEAiEAj2%2Bi1JnnfjnuGIqUXSozlsW%2BGb4UGrEx8nVN8Gn%2FfNAqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ2DeoOCSDLccAqSCyrcA6RWvaapQYwyBL%2FePhAPHY2np4SOMxOWy5FZFdnlHmOGGcWSltFmtv8kbH6nm27jedhgcH1xLKUCjOZf5XBOxwNn2wSeXcyTuTGQZBDNY1pU88RiV1oZ5d9oe%2B3CPV2wW2ytWhRshjueYMiDX%2FX6%2BTLG7xDvZc2AyW0xeK3RssnwEPZRW9DufSgce51ZHccEK1o0IX6qZYs0ikBpNhohwiK4NJKzHn80SrSeTnWleXoQ5K7y26Lhrtx8JmP0plO3MUjkk0ik%2FCHcijx2XxYDOWRbEJFlifne9fouoA%2F7xXtCsa2gEDPej7z4DAyDMs0fH7zwN1IYQKa%2FMQKL%2BxEMZl8MBf1olvfceGhXurz72vaG2NVe1buTCbSwjHWMIJ4ESX%2FeJuBeZRQbSsDoL5GmHiZqbgaNhnnNsj%2FXFp8DgNwzC7iEX5BDfcmOr%2BCLB4567MpFakR62fVhKh55tPn897ysUmfPAoAIIEMyWycYXBRX4Uf8t5OPeC6JmeK4QOIh1o3BjBQO5eBDT2fkYURpp1frvreduYw9G0iA%2BlYqzMtO03T8Mvx0r%2BXmt%2F37y2qCs08UIuoTs3v9HDKDVUs57zAMBzB1oFzz6PvBdF2SGDPwUqmRj0ZtlqNblcjwMJSujMoGOqUBCVc%2FIV3mss5v5MR1Uz1thweNOphv7Pc2%2FaPgbGBU6bzkl3GFaLe0%2BEL5dT%2FJE2Sws7rlOvqsmxK%2Fe8Z3usEW3d7n%2BwR4JruM7FJuqhA%2FXKhgwMMpFc0vrOIEK4AcsoseSly2tr8mOl0ZgNzgOld%2BxsPRKWVxWy9lPXQD3U4PLhPoNeirU99BXAFiX1aCHEnFfxFeH%2Bc%2B3GLdIB70lPDao%2FXUKXsa&X-Amz-Signature=41e97c69f5a96a5d6a56779b5022d92b0a52b14a7724ed5b8fa211344dacdd09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

