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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPCSUKPP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T120404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBs6bXaV73aAwpcuYJAP%2BAy%2FA9pojiXaaIU7VeGWPbW%2BAiEAx8%2FEYMudl38F%2BczAOyGpsgePioazacZBFDAbPAQGxUIq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDKqDJtp4inQoM47aFSrcA3ErTH%2F0lewpue2TIFOw%2BVZU5l5yvwEc819n%2B3bLlhXusLlx8tqn12c1EsKVwTbaosSiexHvaA5pB1%2BudNbmvbyZlaS5pN%2BEffei%2BkVeWFwifEiXL%2FB4dg05VJkkM87SFNyKmIgMGK%2FDGkP1vgqnOB8FmxIIUJXXFmaL4LWKoGGgpKi2q7gDAzBpVeJzuQA%2B3KVsZvbdXOXj12zo9HyV%2FvEtE9Sj35uy84HyNGWXwbrGjA0bfeexCwYZpf3UUKtKDPPXHdSO4pCub%2BkT7hLrOdI5tQZnQaYgs6uPOJd7jMCdndUX%2BvMpm58KulAaUGSi9jkx0J%2Fp1t8eKSs3IX8q1lzRExEyHGZrzO%2FXhJ4qcUTScWGMDdUpk3ETRjqrNhx4Sb1Dhy0p8L3Tg%2BjTChKgClpRi%2BtzNkYTWoEzHRj5Q8M4lYffZJLvaPY5YMFlqekLQQ1z1m2sSiD011hWreAemlrPiLdTZ0llvls1DaqXh5ZRVXANquX5%2BKtM9nuE%2FBHoHT6WIn0G0c4rWimViCImmT5wyOrWeO6Y5ovzlYBPerlUgIQeA%2BV5m%2BWp9nJjDEoSZPtEXpNb9hxFM%2BoqVcLkNZjk1EEjOw5KyCAo9RVl7M6ND%2B%2Fm%2B0pQBpw3bOQ3MMWqisoGOqUB2TTgc9GLujbiv%2F5uwhNaSPBrfhQmrFFfJlrqxK%2F8UybTsba3mvDfy8GY39GbacEii7LdkH0dVWLQKpv790aqivd3NTB%2BtSggwJJyzmpayYsl5spmTNHT3%2FOkW6todXalfZ5A3H6ezP7dMiPlUGliprQ%2BWH3PE%2BwzPSiLZK2A1DW2k%2F1LvdbcmMfDrmwtCZ0nEie4WZvZYIoyTpkqS2420Zun815H&X-Amz-Signature=5d8f4e1ab02643361edc66611fef139ef8d76f59b707c8da55b02a7d62b02a12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPCSUKPP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T120404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBs6bXaV73aAwpcuYJAP%2BAy%2FA9pojiXaaIU7VeGWPbW%2BAiEAx8%2FEYMudl38F%2BczAOyGpsgePioazacZBFDAbPAQGxUIq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDKqDJtp4inQoM47aFSrcA3ErTH%2F0lewpue2TIFOw%2BVZU5l5yvwEc819n%2B3bLlhXusLlx8tqn12c1EsKVwTbaosSiexHvaA5pB1%2BudNbmvbyZlaS5pN%2BEffei%2BkVeWFwifEiXL%2FB4dg05VJkkM87SFNyKmIgMGK%2FDGkP1vgqnOB8FmxIIUJXXFmaL4LWKoGGgpKi2q7gDAzBpVeJzuQA%2B3KVsZvbdXOXj12zo9HyV%2FvEtE9Sj35uy84HyNGWXwbrGjA0bfeexCwYZpf3UUKtKDPPXHdSO4pCub%2BkT7hLrOdI5tQZnQaYgs6uPOJd7jMCdndUX%2BvMpm58KulAaUGSi9jkx0J%2Fp1t8eKSs3IX8q1lzRExEyHGZrzO%2FXhJ4qcUTScWGMDdUpk3ETRjqrNhx4Sb1Dhy0p8L3Tg%2BjTChKgClpRi%2BtzNkYTWoEzHRj5Q8M4lYffZJLvaPY5YMFlqekLQQ1z1m2sSiD011hWreAemlrPiLdTZ0llvls1DaqXh5ZRVXANquX5%2BKtM9nuE%2FBHoHT6WIn0G0c4rWimViCImmT5wyOrWeO6Y5ovzlYBPerlUgIQeA%2BV5m%2BWp9nJjDEoSZPtEXpNb9hxFM%2BoqVcLkNZjk1EEjOw5KyCAo9RVl7M6ND%2B%2Fm%2B0pQBpw3bOQ3MMWqisoGOqUB2TTgc9GLujbiv%2F5uwhNaSPBrfhQmrFFfJlrqxK%2F8UybTsba3mvDfy8GY39GbacEii7LdkH0dVWLQKpv790aqivd3NTB%2BtSggwJJyzmpayYsl5spmTNHT3%2FOkW6todXalfZ5A3H6ezP7dMiPlUGliprQ%2BWH3PE%2BwzPSiLZK2A1DW2k%2F1LvdbcmMfDrmwtCZ0nEie4WZvZYIoyTpkqS2420Zun815H&X-Amz-Signature=2fe9f51da880991b7381d4973308ad6b52ea1dfcdae05ecc6873d8d017ad147d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

