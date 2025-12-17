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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UK4DUSKD%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T061014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1r5L%2B3dz3ziCTF8kAh0MVH85wSvqUY%2Fd4ktjZcVw3lwIgFyQM4FsuoeEtgsoOT7bx99wrmiMc%2F447jm6gkdnhVIgq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDG7a0vcRAAnSOoqytSrcAxJrq4%2BFWalHg4z%2FKKtZfDlB%2BfmaK05H1%2BPZpn%2FQiFFzffu%2BnaihxhCqjZHHDrdp1SylmfSZlEtlWCJYdthg2YD6p2vRhQawk8j845K7T93jorSAgzTnK32Zp5cHKBQsNnD1jc1XsLkYZQi9If%2BzXt%2BvDIqxUQgK81n543v3FyTmzQxD4r7Zr2xoQUVaxboPHVZ9YEkWEwTleYc%2FdkEcn9RQ6iqMvWQPIb%2FfMpPprg8bRmgVJVSj6Gorekcl5x%2FTIZVo3Wso844t9VOCEklj9ttbEqKCOP7lEW%2BJyBfmxpWUIcxifZMrW8JPWPXaoahrzC1eOrOGnG2AzFXrVCnlzDpD79aEHGYY61u9CpwGdSwUnCHEul3oVzRmG1%2FCI4qN%2BXmlv8e8hoe2opNhBdX4Hkv6dPP5a38XKqZPuSAyB6ldo2rcJePki0KJZ64YorVPZMmzjvZN1SPsNbSntumOkQrd%2FU33TFHMHhBeBWwjNaMQYbnN4TWKAl89tQNOsToMD%2BhK0%2FdqmdFN%2Bc7X%2FeGNxt3jEyj0PTFkINyHAnYPn3fiGDVv%2B97elNksS2LYxLO0zEUz1lUW9NHgbe6z7Sf2eQx6TbITejRfon893sgRP%2BWGhn4W9NXy4QhAnflxMPOBicoGOqUBQfJNKJajcR8N6j6R5osVWLmmYc0S8vJ0YLig77ZfFHg%2FxYXbo7WiEwJuZivNEe7UdelGVTzsVTZxxFWkL4Q6ag7BfYwHpaRYFy1%2FY40OUPlyErODVrnih7lslGoOKA8SYMEnj%2FaxZgHrh1HlhBn%2F99IcOajWnFBHwdrDDJmcxzlT9eLUkU1tq1sjtbAoQSlfU2BpvE0wiA113P7pvz5ZvYjNRlRn&X-Amz-Signature=b71263cf0738bc88c88cd28a585aaaca2f8c48b29a797c5fac36d77521d78763&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UK4DUSKD%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T061014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1r5L%2B3dz3ziCTF8kAh0MVH85wSvqUY%2Fd4ktjZcVw3lwIgFyQM4FsuoeEtgsoOT7bx99wrmiMc%2F447jm6gkdnhVIgq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDG7a0vcRAAnSOoqytSrcAxJrq4%2BFWalHg4z%2FKKtZfDlB%2BfmaK05H1%2BPZpn%2FQiFFzffu%2BnaihxhCqjZHHDrdp1SylmfSZlEtlWCJYdthg2YD6p2vRhQawk8j845K7T93jorSAgzTnK32Zp5cHKBQsNnD1jc1XsLkYZQi9If%2BzXt%2BvDIqxUQgK81n543v3FyTmzQxD4r7Zr2xoQUVaxboPHVZ9YEkWEwTleYc%2FdkEcn9RQ6iqMvWQPIb%2FfMpPprg8bRmgVJVSj6Gorekcl5x%2FTIZVo3Wso844t9VOCEklj9ttbEqKCOP7lEW%2BJyBfmxpWUIcxifZMrW8JPWPXaoahrzC1eOrOGnG2AzFXrVCnlzDpD79aEHGYY61u9CpwGdSwUnCHEul3oVzRmG1%2FCI4qN%2BXmlv8e8hoe2opNhBdX4Hkv6dPP5a38XKqZPuSAyB6ldo2rcJePki0KJZ64YorVPZMmzjvZN1SPsNbSntumOkQrd%2FU33TFHMHhBeBWwjNaMQYbnN4TWKAl89tQNOsToMD%2BhK0%2FdqmdFN%2Bc7X%2FeGNxt3jEyj0PTFkINyHAnYPn3fiGDVv%2B97elNksS2LYxLO0zEUz1lUW9NHgbe6z7Sf2eQx6TbITejRfon893sgRP%2BWGhn4W9NXy4QhAnflxMPOBicoGOqUBQfJNKJajcR8N6j6R5osVWLmmYc0S8vJ0YLig77ZfFHg%2FxYXbo7WiEwJuZivNEe7UdelGVTzsVTZxxFWkL4Q6ag7BfYwHpaRYFy1%2FY40OUPlyErODVrnih7lslGoOKA8SYMEnj%2FaxZgHrh1HlhBn%2F99IcOajWnFBHwdrDDJmcxzlT9eLUkU1tq1sjtbAoQSlfU2BpvE0wiA113P7pvz5ZvYjNRlRn&X-Amz-Signature=cfea820252b414d7fa3c1ed58a1e3e569583d8ba5450e5c63224f853d27dca2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

