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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYCKNDAM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T081357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICDgdU%2FpLZv9B2cKPUV0klBgqgfz%2FgPTkEUlTmXO%2FJuDAiEAtdx%2FHyXfP2XU3b7FZk31eMqlG4Muljs2g9vYfCGFa%2Fwq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDLxF1H3Y9A6bN1b6tSrcA82SiQXX5gMsfv3D71yz6%2F1OENks7IYsff8%2FOF9b32CVQtwoI2Y2A%2Bb34v3q3lEg%2BbddUpmvz0CuLXHyfCfQ5Lr9uAftoQx8y1FiuImcrzcZ6M3rb1iOClph1XWjeV9McPsxHkEeP%2FXjq7jYkC3gBzyUYZy%2F1Diuom6xsQb2Um7fwKdT%2B3%2BZkBe8SeuM%2FaLEdN2hmkrIw0YN9SrMg61w1gaL%2B8QzC8T2io589A2gE2SLgqY4HNZ4xkrHAKP7XUA4tICaksL3sAc4S%2BTSPla6vE8Hysl%2F78dOjmQAn0sLETWmES3AKWatCu9H0TixV75RysqiG90ngs%2BEnhJROpgn6DV2sdpQYwm1WcfSuXHh%2FbXddpODgidVFjTnRKp%2Fv744NN870VGJZZIaAkhEiyND%2F9OxxWPl7khqQDTA2gBh9Nqk22LPqsuWcasRvCxoqVGoXqvuDXbGT91cVqMJm5azWlSHW0XpzxbCL7a0kJbzdT9JmKe9TbDHSJikMU35NsNqtjIUHo74hgwnkT%2FEmi3mgCpiZwI%2BdwK1peshmMGYrj%2Fg9D19o5uQ%2FQcuIu9g0thaRBSzHxKW29%2Bbiix3q0ebL0Y7txK9Mp04PMnpXFTt0omsl9mjilrl79B54GXXMLy3icoGOqUBwfPa1ZMGT8K4MFV8hFm%2BKJWY6DZe3d2T8BTlmi4REEWeWt4w3qPegG8LPjPPfZj%2B2tWRKPMMer5DN0kEzljiXkPb9UUMwKd4AiUmLKmh8%2FOc1BRRPNzLk7pVHyV1Nf7%2BDCg2waKiqvUk%2BD9AYUVtYOuL96jP60Q6p2sFGjjJr9XJ%2Bni52ZstJLH8yyVfWWHoBk6tqV7sTyQRowcxw85eBrUPL1NO&X-Amz-Signature=ae61a60c773baa161ff3dbe44f78b8db4f38da648ce6cd37531f2ae9b745b1d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYCKNDAM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T081357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICDgdU%2FpLZv9B2cKPUV0klBgqgfz%2FgPTkEUlTmXO%2FJuDAiEAtdx%2FHyXfP2XU3b7FZk31eMqlG4Muljs2g9vYfCGFa%2Fwq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDLxF1H3Y9A6bN1b6tSrcA82SiQXX5gMsfv3D71yz6%2F1OENks7IYsff8%2FOF9b32CVQtwoI2Y2A%2Bb34v3q3lEg%2BbddUpmvz0CuLXHyfCfQ5Lr9uAftoQx8y1FiuImcrzcZ6M3rb1iOClph1XWjeV9McPsxHkEeP%2FXjq7jYkC3gBzyUYZy%2F1Diuom6xsQb2Um7fwKdT%2B3%2BZkBe8SeuM%2FaLEdN2hmkrIw0YN9SrMg61w1gaL%2B8QzC8T2io589A2gE2SLgqY4HNZ4xkrHAKP7XUA4tICaksL3sAc4S%2BTSPla6vE8Hysl%2F78dOjmQAn0sLETWmES3AKWatCu9H0TixV75RysqiG90ngs%2BEnhJROpgn6DV2sdpQYwm1WcfSuXHh%2FbXddpODgidVFjTnRKp%2Fv744NN870VGJZZIaAkhEiyND%2F9OxxWPl7khqQDTA2gBh9Nqk22LPqsuWcasRvCxoqVGoXqvuDXbGT91cVqMJm5azWlSHW0XpzxbCL7a0kJbzdT9JmKe9TbDHSJikMU35NsNqtjIUHo74hgwnkT%2FEmi3mgCpiZwI%2BdwK1peshmMGYrj%2Fg9D19o5uQ%2FQcuIu9g0thaRBSzHxKW29%2Bbiix3q0ebL0Y7txK9Mp04PMnpXFTt0omsl9mjilrl79B54GXXMLy3icoGOqUBwfPa1ZMGT8K4MFV8hFm%2BKJWY6DZe3d2T8BTlmi4REEWeWt4w3qPegG8LPjPPfZj%2B2tWRKPMMer5DN0kEzljiXkPb9UUMwKd4AiUmLKmh8%2FOc1BRRPNzLk7pVHyV1Nf7%2BDCg2waKiqvUk%2BD9AYUVtYOuL96jP60Q6p2sFGjjJr9XJ%2Bni52ZstJLH8yyVfWWHoBk6tqV7sTyQRowcxw85eBrUPL1NO&X-Amz-Signature=16f5d77e38dffe24a85fbf541ad0619aabc0c236049bd008186d3b8584465bfd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

