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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3ZJBCGE%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T052421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAGBjQ2ZrjsCGD9yY%2Bf2SRv1k6l2EzvViypduwUiROnoAiEAumIdPYhsW94S5RG9jWc085RyQyQE%2BFNZOD9m1kXIk%2FQq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDAmaRMtADQExfWefmSrcA8C5cOV9D69vQx9j41kp%2BTzL3ChaE78qFKCCELtG%2BO4fAItSigNfG0HYle4W7szyd0X9H4pvAztLU141APR%2Fd9CI666iLmgs%2B6Z6G9jA7ik8XjucagXXPUXDp2PbYbR2h5rQ9kWNWEKAQB7Cg51wI4VAK4xK9pzPDoOfM5WwCpLwEGfogl1xfFvvNoAfvX%2FPkgY7woQFHmKYGbocFp%2BHBkYkwLUzFdbkvA62N7%2Bo7SfisMuF7Zmv%2BPmod2sEZBYn6DrecEg02xEK8uiP9bM9XzluIc56OQ5ZDIQ%2F8r6FQqzGcdzWKtyxf6D9ioWnkOytb%2FnNgthBut0%2FZ3Yi%2FhJ%2BxOsHHjPEcONOacdnYX3WPQDN0vIqK2NkYp95vjGJ1usPiacQf7Zs7OU1pZd2zsrtjLVaeUxcVbRFO2fRMEYy3zGvqklGUJeR1TAbNaKEedfu1pmOIH4mH7iAG6huTF6e%2FyLExsYN7%2BavX1MJE2Jk84L0d1YxDHLbV4ehsZQ8y5qIFPp5f%2BX8Iz%2B8I6tsZpNA5OgTuwPqGeSqDFF%2Bqu4E9TSujz%2FlvNT4%2BGNUho7Ifh5hmd5nk6ylbcoISZ2Py4TeQfOQU%2F8nFHdS4xhbZ67cPbaEjZG2KV%2Fgq5nycEvyMPfpiMoGOqUBKVLlpAkzbRxe6hTPtA3Sk5eH2sbn6ZJda0%2FT%2Fzy9zqP1GBPm5Y3aPCbsxwJOTSZZGmCXEkK1FAeGkYvhlzvZ5%2F1ySeGM5AyAMvyyiP4cjNrw6cH7WZzvM2%2F3Bq2TgXwBiXuA%2Fg7eP1YbpiECUS7XTIjpYeDKRNtqfhDOszYY79FFixC%2Fo8Z3%2FgJ8G4KG8oNMzBTi%2BkQG06r6cN8Qmx1F81h8x0Ad&X-Amz-Signature=3a80e1530a24ca0184255fa47c430b44008bbbe241bfc6415b9b9d11a3bb3c88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3ZJBCGE%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T052421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAGBjQ2ZrjsCGD9yY%2Bf2SRv1k6l2EzvViypduwUiROnoAiEAumIdPYhsW94S5RG9jWc085RyQyQE%2BFNZOD9m1kXIk%2FQq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDAmaRMtADQExfWefmSrcA8C5cOV9D69vQx9j41kp%2BTzL3ChaE78qFKCCELtG%2BO4fAItSigNfG0HYle4W7szyd0X9H4pvAztLU141APR%2Fd9CI666iLmgs%2B6Z6G9jA7ik8XjucagXXPUXDp2PbYbR2h5rQ9kWNWEKAQB7Cg51wI4VAK4xK9pzPDoOfM5WwCpLwEGfogl1xfFvvNoAfvX%2FPkgY7woQFHmKYGbocFp%2BHBkYkwLUzFdbkvA62N7%2Bo7SfisMuF7Zmv%2BPmod2sEZBYn6DrecEg02xEK8uiP9bM9XzluIc56OQ5ZDIQ%2F8r6FQqzGcdzWKtyxf6D9ioWnkOytb%2FnNgthBut0%2FZ3Yi%2FhJ%2BxOsHHjPEcONOacdnYX3WPQDN0vIqK2NkYp95vjGJ1usPiacQf7Zs7OU1pZd2zsrtjLVaeUxcVbRFO2fRMEYy3zGvqklGUJeR1TAbNaKEedfu1pmOIH4mH7iAG6huTF6e%2FyLExsYN7%2BavX1MJE2Jk84L0d1YxDHLbV4ehsZQ8y5qIFPp5f%2BX8Iz%2B8I6tsZpNA5OgTuwPqGeSqDFF%2Bqu4E9TSujz%2FlvNT4%2BGNUho7Ifh5hmd5nk6ylbcoISZ2Py4TeQfOQU%2F8nFHdS4xhbZ67cPbaEjZG2KV%2Fgq5nycEvyMPfpiMoGOqUBKVLlpAkzbRxe6hTPtA3Sk5eH2sbn6ZJda0%2FT%2Fzy9zqP1GBPm5Y3aPCbsxwJOTSZZGmCXEkK1FAeGkYvhlzvZ5%2F1ySeGM5AyAMvyyiP4cjNrw6cH7WZzvM2%2F3Bq2TgXwBiXuA%2Fg7eP1YbpiECUS7XTIjpYeDKRNtqfhDOszYY79FFixC%2Fo8Z3%2FgJ8G4KG8oNMzBTi%2BkQG06r6cN8Qmx1F81h8x0Ad&X-Amz-Signature=b717353b744acdd6169af6a919dab7826d351183f1723f67b0880c6892b133b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

