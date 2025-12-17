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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KJX4P6V%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T023813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqDYd0PKDC1MvlEyzBNWqG69A21dwQwu2UyrQ%2BXYxLbgIgENKDMt9ydVcFWEDeyU85sKeUNF2%2FUYEltp1VE%2F9MQssq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDGhLg0QO7tYnyV%2Fs5CrcA3aOVAcmu1oL4HWGr5cL%2FpdJ1VPMD%2FCCWCcIHUZZmUwMod%2BkJkLorLqj2VL32g1b1svbWAPdSI%2FfgLa%2BkxFLAv7tiukkKhGjBvIx3Q%2BhKOQM5PXyVbxTpILoCtZOTeH1W2rwZuxdiZoBzaD%2Bf23sBPShlUm4tlzKpgcYFH5jjVdRiQuGXcQSAaviyXED0HA5feZa1vC1TB0lIsy54701Ob4e5yuGzllgjuoP3LzQqP5GB%2Fos%2BO0pMzE1d1ibVLqSX7VG4Eocbjhc%2Fbd5PWMWjHiGF15781QL0pMSl3HCPU%2FdQ55P6ZB4lE%2BlXLtssj4LpuiH6tiKeHcFG%2FlDCLbROoi8Hnu%2BmlN8B90kk5LtgWDBQ5H9AiFF4Jt4F4Cm%2Fi37gIAqvtAvca3fnnP8pDE%2FaciIMNhg77nVZXQsuB32RG9ti2hrJ7iCPuAx7t52Mg7GO%2BHG53x97men5n7DuvS9vKMdMekBjJVX9RbtbEQ1au5WSB6qWiHQJw6KNkvNQem%2B5QBr5kFSq1VTU1l87siT8Mfqhe0d6nxU%2BYN0YAV1OMGeZ4tBgOhB8vqvnsBODMKimq3Pz7LVBNpOOPkNn1v0EVUfrqaXsPZnHoVp7kUJ376q0%2BCyoH6wb8cuvFt1MOSWiMoGOqUBnESWFW53eiaE9mUUVp0dFN%2BA0LOL%2F6Y7mv3n5xz9tCgRWoZ4ZXCJHRLtXDoQ%2FbVmYz4W3FLde51x1FVSBQyH0u7%2F4bXyAhKmUzslWSsbYMVJw7CZKyNzGZzoOQHRgVhYsArav6brQSjMBjegjXbhTMR4Mg0SFhTf6N1zuQJ2%2F9h94EqZglq3dbyk4NW9NJ231pqw6hSWMzA2BIcKKWnYt4QHmmTY&X-Amz-Signature=b602a59a680ddff3ae82534e95edf5b66833bd0ddd818aed9971530bb1547416&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KJX4P6V%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T023813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqDYd0PKDC1MvlEyzBNWqG69A21dwQwu2UyrQ%2BXYxLbgIgENKDMt9ydVcFWEDeyU85sKeUNF2%2FUYEltp1VE%2F9MQssq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDGhLg0QO7tYnyV%2Fs5CrcA3aOVAcmu1oL4HWGr5cL%2FpdJ1VPMD%2FCCWCcIHUZZmUwMod%2BkJkLorLqj2VL32g1b1svbWAPdSI%2FfgLa%2BkxFLAv7tiukkKhGjBvIx3Q%2BhKOQM5PXyVbxTpILoCtZOTeH1W2rwZuxdiZoBzaD%2Bf23sBPShlUm4tlzKpgcYFH5jjVdRiQuGXcQSAaviyXED0HA5feZa1vC1TB0lIsy54701Ob4e5yuGzllgjuoP3LzQqP5GB%2Fos%2BO0pMzE1d1ibVLqSX7VG4Eocbjhc%2Fbd5PWMWjHiGF15781QL0pMSl3HCPU%2FdQ55P6ZB4lE%2BlXLtssj4LpuiH6tiKeHcFG%2FlDCLbROoi8Hnu%2BmlN8B90kk5LtgWDBQ5H9AiFF4Jt4F4Cm%2Fi37gIAqvtAvca3fnnP8pDE%2FaciIMNhg77nVZXQsuB32RG9ti2hrJ7iCPuAx7t52Mg7GO%2BHG53x97men5n7DuvS9vKMdMekBjJVX9RbtbEQ1au5WSB6qWiHQJw6KNkvNQem%2B5QBr5kFSq1VTU1l87siT8Mfqhe0d6nxU%2BYN0YAV1OMGeZ4tBgOhB8vqvnsBODMKimq3Pz7LVBNpOOPkNn1v0EVUfrqaXsPZnHoVp7kUJ376q0%2BCyoH6wb8cuvFt1MOSWiMoGOqUBnESWFW53eiaE9mUUVp0dFN%2BA0LOL%2F6Y7mv3n5xz9tCgRWoZ4ZXCJHRLtXDoQ%2FbVmYz4W3FLde51x1FVSBQyH0u7%2F4bXyAhKmUzslWSsbYMVJw7CZKyNzGZzoOQHRgVhYsArav6brQSjMBjegjXbhTMR4Mg0SFhTf6N1zuQJ2%2F9h94EqZglq3dbyk4NW9NJ231pqw6hSWMzA2BIcKKWnYt4QHmmTY&X-Amz-Signature=988c7695c095649bcd9fd83495bfb7d45e72a1f57ab8c4f2df29de2d786958c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

