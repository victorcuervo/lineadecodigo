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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3DFLRO7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T003429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCjsEMpKZDzOGc6ehZugG9OIFCOps2evMvkJeTzx9jsAIhANAcHU5Lu6kPxrktWkFMvCarW9JGoEQCEIsiqnc9swDfKv8DCHEQABoMNjM3NDIzMTgzODA1IgzcVdBTN3nYQdgHiPMq3ANQkHdgBf2HtUI2oriMXp6V3pOz14Qgwwwb%2BjXCnfmwknE6x7T31GZznWliYdQWyVdTw68FiNxIHhE%2FLWkEYahkh2xZq%2Fb%2FttwVTxJeic6%2BJWeELHFmLkevot4UmlKXRC%2F5qaDDGxYAy20jth0VTQa16PSA0R2jKBCUYbKQZ%2BMuDq%2BjE9MkLsz2CE7R7Du8PsyPtE0GCz0g5cppDDxLKmiJeC26z7ZY9wwLehUFy6YEKEIAKZzalZMA33Po25eO9LP6ouTZ6H42d7jhwTq7uOnqTc2mxxgZR9%2Be%2Fdo6ssV2fRHZAaswCUPF4LVsw7W%2B991sV7xTcXfRF10GOEL8dW%2B2MUrfnsySIJadWbSG8JQbDf1BM7tk77cdmoggkl1T0079qEtfJvev7JcUAQDXVo73OO70Dn4HP99UsMO4ga8ZFu7YcLK0j1IQ2LHundNZbaIKE8CTAKnqlrGtMcJFy6CDG0cUIbthdgEJHwteF%2ByTMU0Mas7Lr2N%2BddjqXxNonNQ9mdLHwd5mUnfQ1gA2qB0H97BoyU%2B%2BQRBHErOsWZ4n28m3Pk2WutVti93PSQ9irra%2FiPGPEckK4NpRaZgszMKdWTvWcmf2hf8v6bHCiAAazdzap7Gm4LR0oiwqbTCL34fKBjqkATDusr6ZV4k9O2jGldYRN02CO2xiLr%2BWze4%2BXyZfuJBNIGZPbiaNZJwLesflvQBD2mXSfITAus2Ur0yKguDUs%2FERVV2xMHSXYg05OOCIeA%2FInotFy3IyvPC0O6%2F6bobNwJb%2FvJrCD%2Bq%2FziJsPndpxuTvLvisiGaGLHLW047aDLKutQTL8JQVdSNLRVOOpBUxhL9q5%2FYndPVEPUOnS%2FRWR8q1IbCZ&X-Amz-Signature=9e9d5bef3b0b9ef047bf2ff183415a417ab4cae8f50bbae1be00f3cb513064bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3DFLRO7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T003429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCjsEMpKZDzOGc6ehZugG9OIFCOps2evMvkJeTzx9jsAIhANAcHU5Lu6kPxrktWkFMvCarW9JGoEQCEIsiqnc9swDfKv8DCHEQABoMNjM3NDIzMTgzODA1IgzcVdBTN3nYQdgHiPMq3ANQkHdgBf2HtUI2oriMXp6V3pOz14Qgwwwb%2BjXCnfmwknE6x7T31GZznWliYdQWyVdTw68FiNxIHhE%2FLWkEYahkh2xZq%2Fb%2FttwVTxJeic6%2BJWeELHFmLkevot4UmlKXRC%2F5qaDDGxYAy20jth0VTQa16PSA0R2jKBCUYbKQZ%2BMuDq%2BjE9MkLsz2CE7R7Du8PsyPtE0GCz0g5cppDDxLKmiJeC26z7ZY9wwLehUFy6YEKEIAKZzalZMA33Po25eO9LP6ouTZ6H42d7jhwTq7uOnqTc2mxxgZR9%2Be%2Fdo6ssV2fRHZAaswCUPF4LVsw7W%2B991sV7xTcXfRF10GOEL8dW%2B2MUrfnsySIJadWbSG8JQbDf1BM7tk77cdmoggkl1T0079qEtfJvev7JcUAQDXVo73OO70Dn4HP99UsMO4ga8ZFu7YcLK0j1IQ2LHundNZbaIKE8CTAKnqlrGtMcJFy6CDG0cUIbthdgEJHwteF%2ByTMU0Mas7Lr2N%2BddjqXxNonNQ9mdLHwd5mUnfQ1gA2qB0H97BoyU%2B%2BQRBHErOsWZ4n28m3Pk2WutVti93PSQ9irra%2FiPGPEckK4NpRaZgszMKdWTvWcmf2hf8v6bHCiAAazdzap7Gm4LR0oiwqbTCL34fKBjqkATDusr6ZV4k9O2jGldYRN02CO2xiLr%2BWze4%2BXyZfuJBNIGZPbiaNZJwLesflvQBD2mXSfITAus2Ur0yKguDUs%2FERVV2xMHSXYg05OOCIeA%2FInotFy3IyvPC0O6%2F6bobNwJb%2FvJrCD%2Bq%2FziJsPndpxuTvLvisiGaGLHLW047aDLKutQTL8JQVdSNLRVOOpBUxhL9q5%2FYndPVEPUOnS%2FRWR8q1IbCZ&X-Amz-Signature=613d5ff54258c33e7d314db8598ebaf7c32ba0b4ba3ba797654d7df33e70df82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

