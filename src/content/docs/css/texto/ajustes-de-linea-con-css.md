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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKUEY54C%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T181654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHOIrUDNFQiqVsz2pFJZBm2XNpU6i3sgvp6%2BASV%2Fs%2FzYAiEAkNWMHHO0YCr0BzscGh9FTngFONAN4SRs0LXPVUHV0esqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKCyxx6lYiY3drQbkircA60%2Bju8yt4euucDaj3%2BQ%2BHb6M90dsdfjnCwlq4G4dzUzA8uyS5UC63qHM9nlx37smiKuxZGt8GbRIPXsJQLRKyDeT%2BNbSYQQ%2B8RdJHTYEK5s7K2%2FpQ%2FYVxUCZ%2Bx0FerhuAdC%2BOm%2F9l5bib70eYuOcgoiZ3Z%2BfsvlAspBY88PoS0fWpoijEPdo2d5GpiOl7lFyN7%2B3eRqPMlIFICFoPeBktpRI95FjpassnCwlxvoty7BXzqKfEspIY25AUy8WDup6fS3L8F%2BJBEBJc16z9WsURVdzLfgT29jN2WhNw5sww5Yf6EpOjdG1GGylc4%2BXvNwn0QJri1bemvwo9zWOUEApNMqkkxwwc2KcthHF3i1RFGnSG6IjbJhSJaZ2a5g2M3gZi064cQf0%2F%2FD839AH9bqAS2WRIcdbA%2ByyuCmEZND%2BbdkJFj5xYBBjNjLXuIs5p8HoaaLRT02M6J5ESnMZpcuL%2FoMp8EnViylC5Md%2F0AJ%2B6hNvAtogkl8wpKISVc7kZO2FGCtKfgP%2BmZEV16kos6c8mfeUIvloyT4ekSPr83y1J91Ef2OA7QM%2BNPX%2BkPCj%2FrQc7y%2BfowXaXc7vOX33KnFIwb7G5NmgPT3JNjrnxtbHOq%2FNoNF26udWm0QX5w7MO6ei8oGOqUBHJPlYz4XglrOSD5XbjXKNpBmnsCwna%2FYDIMCtt5ZnIR7a0RevesE2SiPuM%2B5rKrPhM116AxJdiCwqcBvx4Zk%2BHMJoY6WhtjnGUw7uQGjs6Y%2FpiujEg1OGSVp4Pu%2FMUovFkRoy36SLAkD6IlrlpfojqYsNspnBGkGbCtKW4CRme9wimbtri4BaqzO%2BSz6KYh%2FFwRTpu2MvXc3viUrsNOCpICPaYb7&X-Amz-Signature=9a836512c794858033c87563962024bb7aae93bc9d8954505e113afb39dcae1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKUEY54C%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T181654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHOIrUDNFQiqVsz2pFJZBm2XNpU6i3sgvp6%2BASV%2Fs%2FzYAiEAkNWMHHO0YCr0BzscGh9FTngFONAN4SRs0LXPVUHV0esqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKCyxx6lYiY3drQbkircA60%2Bju8yt4euucDaj3%2BQ%2BHb6M90dsdfjnCwlq4G4dzUzA8uyS5UC63qHM9nlx37smiKuxZGt8GbRIPXsJQLRKyDeT%2BNbSYQQ%2B8RdJHTYEK5s7K2%2FpQ%2FYVxUCZ%2Bx0FerhuAdC%2BOm%2F9l5bib70eYuOcgoiZ3Z%2BfsvlAspBY88PoS0fWpoijEPdo2d5GpiOl7lFyN7%2B3eRqPMlIFICFoPeBktpRI95FjpassnCwlxvoty7BXzqKfEspIY25AUy8WDup6fS3L8F%2BJBEBJc16z9WsURVdzLfgT29jN2WhNw5sww5Yf6EpOjdG1GGylc4%2BXvNwn0QJri1bemvwo9zWOUEApNMqkkxwwc2KcthHF3i1RFGnSG6IjbJhSJaZ2a5g2M3gZi064cQf0%2F%2FD839AH9bqAS2WRIcdbA%2ByyuCmEZND%2BbdkJFj5xYBBjNjLXuIs5p8HoaaLRT02M6J5ESnMZpcuL%2FoMp8EnViylC5Md%2F0AJ%2B6hNvAtogkl8wpKISVc7kZO2FGCtKfgP%2BmZEV16kos6c8mfeUIvloyT4ekSPr83y1J91Ef2OA7QM%2BNPX%2BkPCj%2FrQc7y%2BfowXaXc7vOX33KnFIwb7G5NmgPT3JNjrnxtbHOq%2FNoNF26udWm0QX5w7MO6ei8oGOqUBHJPlYz4XglrOSD5XbjXKNpBmnsCwna%2FYDIMCtt5ZnIR7a0RevesE2SiPuM%2B5rKrPhM116AxJdiCwqcBvx4Zk%2BHMJoY6WhtjnGUw7uQGjs6Y%2FpiujEg1OGSVp4Pu%2FMUovFkRoy36SLAkD6IlrlpfojqYsNspnBGkGbCtKW4CRme9wimbtri4BaqzO%2BSz6KYh%2FFwRTpu2MvXc3viUrsNOCpICPaYb7&X-Amz-Signature=14c555743aef0494ef7a2b6c39decf55a48f45ac80cd1a22f53287505744d79c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

