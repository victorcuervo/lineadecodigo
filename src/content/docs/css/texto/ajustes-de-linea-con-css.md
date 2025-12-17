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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDVJEUDE%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T145324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDO0HDP8CdF%2FZ66x2PikHqq4ilcKB2o3s%2F08ni7eI7%2FoQIhAJqUF2uqbKGjoBamz3nnhDGE5sW%2BY1IMQ7DaARDcSJ96KogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzdV3N33BUeDU2a9Y0q3AOSTBqxK8gnQcBn1ExwZKTHnlaifwU6R%2BEdl58XE5n6z7aky87BlXNr%2BVPaEaMg9oNAEDdAmP%2FzFsPIi7GmBKWH2f24I55O4VflQepvbyTGrgHSJY3iT3gu5Pxi0Qg0T2majj8qFch3j42e8jPuzrReOEqqcuwxmo32hirSj%2BhDuEhfUDwJ21kdetSOT5tFqf22maSqRfYGT8D%2F6QqMRoNltnJ%2FdR11tgVl8GF8cbPMs4HFYSQo%2BrxVgWHgYaZiLztWGZOkOG02e%2BQxKi6J8s0%2BZxVUTi5yFQUL5V2hMLTC6eDtXARubf%2FuPlXx0RlkiD63xAvB%2Fetp26G4Fvvg%2BnMb3v6JKvOFWKeLdSd4T%2BPCV3eDtOuglhgNn%2BT1ooPrM3FBsWr%2B9SMV4J%2FtbjshCpZSQ8Zf2sZkodP8F3bDfZ%2FQJAfT6Da85g5R%2F5%2B72LPIQpsHL3rv7EFpUloReGTOIcAe98NqCqUC4qsREQj%2BV00%2FjqdD6jFYgjoeCV1oQt%2BNlLKxSb6AxFQMsZZUqNcMvOZSq9JTSeI7OYHz%2Fpalu7FKn%2B9jtQ8bavmwQtCX1qWHLwnKJPn83fFW%2BnWpd2LaBrxMvlXFhUg6ZWNkQFBYpBIqpfD10tcbEmGSkeFY0jDtgYvKBjqkAQOL1fbIvKmyy1mFL7UrUdin5XMAQ1biLSPF5TiPfoxTvkFvkSlSNxX0HyWklHwh0zvHAWQh8F9v2vJW4IAczjjxs8gkyrMXWEInU8LzoFk7dkDO5J1FrTSoF6C5f%2Bi3iAISCbDI%2FuLWthZYfaEf2xlKIZXnrC8C%2FgOGcAICrEY%2Bjuk8LT7mXky5hyWC7nSm2RhYKFjqf41TU%2FBogHo4cVQhVIh0&X-Amz-Signature=3ea08bb83ce32c0a092a6779d0dc7a95ff7305a8bdf511e6354573a63a14cae7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDVJEUDE%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T145324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDO0HDP8CdF%2FZ66x2PikHqq4ilcKB2o3s%2F08ni7eI7%2FoQIhAJqUF2uqbKGjoBamz3nnhDGE5sW%2BY1IMQ7DaARDcSJ96KogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzdV3N33BUeDU2a9Y0q3AOSTBqxK8gnQcBn1ExwZKTHnlaifwU6R%2BEdl58XE5n6z7aky87BlXNr%2BVPaEaMg9oNAEDdAmP%2FzFsPIi7GmBKWH2f24I55O4VflQepvbyTGrgHSJY3iT3gu5Pxi0Qg0T2majj8qFch3j42e8jPuzrReOEqqcuwxmo32hirSj%2BhDuEhfUDwJ21kdetSOT5tFqf22maSqRfYGT8D%2F6QqMRoNltnJ%2FdR11tgVl8GF8cbPMs4HFYSQo%2BrxVgWHgYaZiLztWGZOkOG02e%2BQxKi6J8s0%2BZxVUTi5yFQUL5V2hMLTC6eDtXARubf%2FuPlXx0RlkiD63xAvB%2Fetp26G4Fvvg%2BnMb3v6JKvOFWKeLdSd4T%2BPCV3eDtOuglhgNn%2BT1ooPrM3FBsWr%2B9SMV4J%2FtbjshCpZSQ8Zf2sZkodP8F3bDfZ%2FQJAfT6Da85g5R%2F5%2B72LPIQpsHL3rv7EFpUloReGTOIcAe98NqCqUC4qsREQj%2BV00%2FjqdD6jFYgjoeCV1oQt%2BNlLKxSb6AxFQMsZZUqNcMvOZSq9JTSeI7OYHz%2Fpalu7FKn%2B9jtQ8bavmwQtCX1qWHLwnKJPn83fFW%2BnWpd2LaBrxMvlXFhUg6ZWNkQFBYpBIqpfD10tcbEmGSkeFY0jDtgYvKBjqkAQOL1fbIvKmyy1mFL7UrUdin5XMAQ1biLSPF5TiPfoxTvkFvkSlSNxX0HyWklHwh0zvHAWQh8F9v2vJW4IAczjjxs8gkyrMXWEInU8LzoFk7dkDO5J1FrTSoF6C5f%2Bi3iAISCbDI%2FuLWthZYfaEf2xlKIZXnrC8C%2FgOGcAICrEY%2Bjuk8LT7mXky5hyWC7nSm2RhYKFjqf41TU%2FBogHo4cVQhVIh0&X-Amz-Signature=0b2e117b375c970cc24b6742f3676bf27253c077172b2bec53bbe1bce8547f8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

