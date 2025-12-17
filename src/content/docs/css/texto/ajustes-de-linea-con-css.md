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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJEFX7AF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T120014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZBV16Maq7rI7X4MPaqqe00DbiL%2Bym12T4SwgEHJ4GmAIhAKTGSBncuSTemF5FgM2Y%2FjmvCdqyV4%2BHvnjVn4MuFrOoKv8DCH0QABoMNjM3NDIzMTgzODA1Igw1IeATmhvzVsW4TNsq3AOjteGwkEDLkAeb%2Fmq8ZuiuW53ETCJVqMo%2BT6pMgAY2v9C5kodvf6MbT2ozPdRciGQHSoNN8yXIfjOEx%2BhPLHusulkySGrtS3ftYrsdzTdZhMAt%2F4a7fT%2BZheuL7WFQxLGHkZwjMYODvyTSz9bne3%2B97%2FXuHRDm2dCBvIDshAml1smAO%2B0V0Ho1AVEX5AAvcJfm2NSsVCw9ufyGjpH2NoPcV16X9Fr10KvSwtX3XWmFUEwQGZE2d47Y%2BwDuz7B1juHTIoSti21DspbAnS2BSTkZ7G%2BpFvnQ44oIe38DTL%2Fb547GGSYlzwvsJ%2FeCIaoe2bU%2BbigZq2JYzdKKKjuqJzV5AEc1cSp03t7aKZFu4yQplE3ncF9EjbQ3MmpSyzT2i14FSIH62S1oLd9ZDh0xdthn3DXnC2e1mSuWAzoFw709%2BqajpG3zri6u1yZwuwn1AGpFbi29zgxnY8kRev5G0sb7HQsZ29wTh7RTQ6i%2BU7lJrHP9ISp3DkMtB%2FpKJEmoPkA126i1EYi8mL%2B30Upc%2BmrX%2FpRBN4o9HY6Ehq7T1HcwOYGANXXEHd2YkgjYSikYbfNnn1oDnk%2BdRq1FGY6U%2BrgwkzmqJq3p2kd6NIBYK8bjs9%2BTPcAZhu8frPKuTDDHqorKBjqkAeQvYCrNVmwsIfxDRHT7iQbcilodT619yNLMG1I8SGT4dxGHcRtbe8jLMZfouXG6jO4uJIIaZJ2RUefpkcZWbDrHROA8LLse9abNsJyrF9xE90JI24qqaO3u69EziakBzMTF%2BmXUbzPK%2FNVcJDZv3h7jPmf5brr%2BZh5BzpArtGODkW09of6gFlQTd2pygdIy7X2Y61FKMRI%2FqxCq55XCxj%2BFIXTW&X-Amz-Signature=4af0978dee6244c2745ee82a6222c3cc112d2b4cfcf5e04354abb914e4c61053&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJEFX7AF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T120014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZBV16Maq7rI7X4MPaqqe00DbiL%2Bym12T4SwgEHJ4GmAIhAKTGSBncuSTemF5FgM2Y%2FjmvCdqyV4%2BHvnjVn4MuFrOoKv8DCH0QABoMNjM3NDIzMTgzODA1Igw1IeATmhvzVsW4TNsq3AOjteGwkEDLkAeb%2Fmq8ZuiuW53ETCJVqMo%2BT6pMgAY2v9C5kodvf6MbT2ozPdRciGQHSoNN8yXIfjOEx%2BhPLHusulkySGrtS3ftYrsdzTdZhMAt%2F4a7fT%2BZheuL7WFQxLGHkZwjMYODvyTSz9bne3%2B97%2FXuHRDm2dCBvIDshAml1smAO%2B0V0Ho1AVEX5AAvcJfm2NSsVCw9ufyGjpH2NoPcV16X9Fr10KvSwtX3XWmFUEwQGZE2d47Y%2BwDuz7B1juHTIoSti21DspbAnS2BSTkZ7G%2BpFvnQ44oIe38DTL%2Fb547GGSYlzwvsJ%2FeCIaoe2bU%2BbigZq2JYzdKKKjuqJzV5AEc1cSp03t7aKZFu4yQplE3ncF9EjbQ3MmpSyzT2i14FSIH62S1oLd9ZDh0xdthn3DXnC2e1mSuWAzoFw709%2BqajpG3zri6u1yZwuwn1AGpFbi29zgxnY8kRev5G0sb7HQsZ29wTh7RTQ6i%2BU7lJrHP9ISp3DkMtB%2FpKJEmoPkA126i1EYi8mL%2B30Upc%2BmrX%2FpRBN4o9HY6Ehq7T1HcwOYGANXXEHd2YkgjYSikYbfNnn1oDnk%2BdRq1FGY6U%2BrgwkzmqJq3p2kd6NIBYK8bjs9%2BTPcAZhu8frPKuTDDHqorKBjqkAeQvYCrNVmwsIfxDRHT7iQbcilodT619yNLMG1I8SGT4dxGHcRtbe8jLMZfouXG6jO4uJIIaZJ2RUefpkcZWbDrHROA8LLse9abNsJyrF9xE90JI24qqaO3u69EziakBzMTF%2BmXUbzPK%2FNVcJDZv3h7jPmf5brr%2BZh5BzpArtGODkW09of6gFlQTd2pygdIy7X2Y61FKMRI%2FqxCq55XCxj%2BFIXTW&X-Amz-Signature=36c921bf42393c9be51ac1b9b7c09f7570424af1a5a211a4fe11da0c8afb4a11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

