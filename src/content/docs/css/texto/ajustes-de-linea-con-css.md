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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWW36NXV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T090342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBTRp6bH4eKpTekywqI30LD%2FolQ51veTsJb%2F3GtEBXLCAiEAlQTGPsYVWekPmX0K0WWj9d99uERmQG8U7gWRZjEKGZIq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDD%2BnHAIyFoKRXQHYNSrcA3AeI2Dbp%2Bkclz01iGPZd22lOBLXIbSnIZnWkKzMoP575fcxUXkGSoQSf6K94h5zcTDf%2BWls35OqkAR4JkhB1SjJ%2BvMOJfa%2BLtFWj9JGqHI0KLtFWm1LdePsaUlIzTgOdLQ8BF53%2FDGPxKuTp1BTBYIQvcrYyXnd5LAhgoShHlESo98BvlnFgL%2Fb5CdQCxOqneBBtcQ8HtgR8aQXipqqD1lgK%2FHDRSN8TY2GmBCrt%2FsEPVvfJoOqlYtBmSzCX%2BvFtjXY7T40u9ZkHoVJ%2FvPLw9jva62nZuF1Dspk4d07LkFeNwWUYlKmUSljwnK2ydNYAYUz%2Fkn6sfZ5n4taXPDCYFLFG46KvfQNXPM7U3Y6ZP55eQlYZ5%2BG4ZuHfIxR2iPcxISUQHincH%2FLi3EMNLX5NUihGWWjDpJc1GlnKq46kWsRCb%2BJ8JwbaHu4JZ1gz%2BQtCGbwxIALtFK6YSxYrxEehFSRbt3xeiGB%2BtwQbkjsiCRYU38ERNFw6Oam7H%2FpoJ1kMU42NC02bNQY9CYQVu9Vq8rKgfPn8SJ9f09FZG4eJ1cOUfHlWdAhc21NmDYmF6kiM7X0QJ2N3ZMfzxkaqYq5Njx0vEHdjsuquWJZWR6KxMPkdr%2FV4Fke4bePIGuhMJnRicoGOqUBpEwaEvVLqqqnT6dnZumWg0APDCfadjEma23KdCWiXLFd04gJc%2B%2FCmmdGrW4e9udYAWgTH2asH3XSApxwG7m2A5gwguB7yM2kiTe44Gi8HHYe57WC6DR1SMnlB%2BWRdDMBrWnm5DTxpRVHpe9ibrYuO2EzAgki%2BfS5j7UkluYRIw2kuUDEqMf7DJ5OShLZiiNR14J%2BNi8j33gsqXUXjTwinpUvqkyp&X-Amz-Signature=051c744eae8ec13730a893c7a789887b1be09bc29e2f4bb057686e4a8d276fa0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWW36NXV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T090342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBTRp6bH4eKpTekywqI30LD%2FolQ51veTsJb%2F3GtEBXLCAiEAlQTGPsYVWekPmX0K0WWj9d99uERmQG8U7gWRZjEKGZIq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDD%2BnHAIyFoKRXQHYNSrcA3AeI2Dbp%2Bkclz01iGPZd22lOBLXIbSnIZnWkKzMoP575fcxUXkGSoQSf6K94h5zcTDf%2BWls35OqkAR4JkhB1SjJ%2BvMOJfa%2BLtFWj9JGqHI0KLtFWm1LdePsaUlIzTgOdLQ8BF53%2FDGPxKuTp1BTBYIQvcrYyXnd5LAhgoShHlESo98BvlnFgL%2Fb5CdQCxOqneBBtcQ8HtgR8aQXipqqD1lgK%2FHDRSN8TY2GmBCrt%2FsEPVvfJoOqlYtBmSzCX%2BvFtjXY7T40u9ZkHoVJ%2FvPLw9jva62nZuF1Dspk4d07LkFeNwWUYlKmUSljwnK2ydNYAYUz%2Fkn6sfZ5n4taXPDCYFLFG46KvfQNXPM7U3Y6ZP55eQlYZ5%2BG4ZuHfIxR2iPcxISUQHincH%2FLi3EMNLX5NUihGWWjDpJc1GlnKq46kWsRCb%2BJ8JwbaHu4JZ1gz%2BQtCGbwxIALtFK6YSxYrxEehFSRbt3xeiGB%2BtwQbkjsiCRYU38ERNFw6Oam7H%2FpoJ1kMU42NC02bNQY9CYQVu9Vq8rKgfPn8SJ9f09FZG4eJ1cOUfHlWdAhc21NmDYmF6kiM7X0QJ2N3ZMfzxkaqYq5Njx0vEHdjsuquWJZWR6KxMPkdr%2FV4Fke4bePIGuhMJnRicoGOqUBpEwaEvVLqqqnT6dnZumWg0APDCfadjEma23KdCWiXLFd04gJc%2B%2FCmmdGrW4e9udYAWgTH2asH3XSApxwG7m2A5gwguB7yM2kiTe44Gi8HHYe57WC6DR1SMnlB%2BWRdDMBrWnm5DTxpRVHpe9ibrYuO2EzAgki%2BfS5j7UkluYRIw2kuUDEqMf7DJ5OShLZiiNR14J%2BNi8j33gsqXUXjTwinpUvqkyp&X-Amz-Signature=1245db123cbc162dbaeadbee700d17b32127353d97fff42908f7b28a7386686b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

