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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZK5VLMQP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T114437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCAPFgCjpjm0iwXTHk6br08SX%2Fma6StmzBRF0ZUAanFIQIgV2FvPNnxWAa8FQcavJL59mZBp6TYxz9EDGbqwwxEZpIq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDMTd%2BDu1rPB2JlG6NSrcA6DatbsqQ0szrIOlTKGLKuNrIJ3y%2BjH%2BJZtc4c2MaPwBGa54Ei4tjF0CAYdaOiF%2Bd%2FCr9iJ0EqJY0NNFpJkVWdnomdMTfRPVqqNpDr8x5Ta9mvFtniPoWNJgcLHnyxsFaVhLbE67b5lMO%2Bl34%2F89lolUYljEpA2wvXt6wmoViNcuoRDep2256YqkiCP3hRUOAEnHEC2siPT%2FqjbNfQGbn6G3v%2F3H7PRqRWDhE7ULMcho2YYAhRwhJjxhNC%2FTcNrxP5NlRO%2Fcd1DRBaOLGGk0xpoyURDGbJUc%2FAdQwTDWyA9rTa8oziq6g6mIf6H7NHIm0qhWG1JQNPCcLTcOAu7Q9hmDAspwjVNHE%2BQuDnGdb5NsUBp4EdWpj7T0fhXFk3RE5nsg340PsgwU%2BaLW4%2B5hTUra9JHMI765d5gxASuQIFhlZtHE7UvcUXOlsHGELj4Wifrdo%2BkhpntWMJ4aXr2TblKNmi6rQkCJy3k2xymlWZhMD6p21GfajJalNyEot%2BU8JQSdEkNTFChvd07CecUuQMJjzIUOQdZAyWuE21f%2FfC8PXhu%2Bsd16bfygxcw7Eg337%2FC0mBr1fd7perhaEgOC67OuqmutkBaM07%2BNOEULao7LUUnjUatfnE8C6v16MLurisoGOqUBlb7N7a9igKNXZ1vIPFxyBCPxZWWmS9WF4Sb91ROTt%2F%2BMR67Ma2S19EcD9BojRubTJ22F5Zyv341rcIdizVdOndi29mb000nSylPvPNLoZMqUvEg8PaBRGIBPZTO5ct6BxcM3Q4CiMYqq5kaghOhFQlDaLHoRNr%2BZpnBaMxNwvR5B2gprtZdtnxTVDcpiNTiiVym1K%2BXC7tdqSyfNyTjLHk5S8SMT&X-Amz-Signature=e296f14c7dc4f10c429b5c85fae131ef0729f7e32fcd20e2e44f8cf35c9b73fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZK5VLMQP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T114437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCAPFgCjpjm0iwXTHk6br08SX%2Fma6StmzBRF0ZUAanFIQIgV2FvPNnxWAa8FQcavJL59mZBp6TYxz9EDGbqwwxEZpIq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDMTd%2BDu1rPB2JlG6NSrcA6DatbsqQ0szrIOlTKGLKuNrIJ3y%2BjH%2BJZtc4c2MaPwBGa54Ei4tjF0CAYdaOiF%2Bd%2FCr9iJ0EqJY0NNFpJkVWdnomdMTfRPVqqNpDr8x5Ta9mvFtniPoWNJgcLHnyxsFaVhLbE67b5lMO%2Bl34%2F89lolUYljEpA2wvXt6wmoViNcuoRDep2256YqkiCP3hRUOAEnHEC2siPT%2FqjbNfQGbn6G3v%2F3H7PRqRWDhE7ULMcho2YYAhRwhJjxhNC%2FTcNrxP5NlRO%2Fcd1DRBaOLGGk0xpoyURDGbJUc%2FAdQwTDWyA9rTa8oziq6g6mIf6H7NHIm0qhWG1JQNPCcLTcOAu7Q9hmDAspwjVNHE%2BQuDnGdb5NsUBp4EdWpj7T0fhXFk3RE5nsg340PsgwU%2BaLW4%2B5hTUra9JHMI765d5gxASuQIFhlZtHE7UvcUXOlsHGELj4Wifrdo%2BkhpntWMJ4aXr2TblKNmi6rQkCJy3k2xymlWZhMD6p21GfajJalNyEot%2BU8JQSdEkNTFChvd07CecUuQMJjzIUOQdZAyWuE21f%2FfC8PXhu%2Bsd16bfygxcw7Eg337%2FC0mBr1fd7perhaEgOC67OuqmutkBaM07%2BNOEULao7LUUnjUatfnE8C6v16MLurisoGOqUBlb7N7a9igKNXZ1vIPFxyBCPxZWWmS9WF4Sb91ROTt%2F%2BMR67Ma2S19EcD9BojRubTJ22F5Zyv341rcIdizVdOndi29mb000nSylPvPNLoZMqUvEg8PaBRGIBPZTO5ct6BxcM3Q4CiMYqq5kaghOhFQlDaLHoRNr%2BZpnBaMxNwvR5B2gprtZdtnxTVDcpiNTiiVym1K%2BXC7tdqSyfNyTjLHk5S8SMT&X-Amz-Signature=2fd351a07ccf9d8327fcfc6fa8e54e2e451d8865f03ee0390c31f8840c480951&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

