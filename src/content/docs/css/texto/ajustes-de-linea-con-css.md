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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WI7AOBK4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T143413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDca8w9D%2BATKg71tHq0g4i7%2BygZPAuhEkdCL%2BmCeok64AiEAwk20%2FToYNIcYvs8GtZWyrqQFCCES72A265TJBETXQf4q%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDMAudiMmkbi0Xvrw6CrcA8eed744v8b7eUP1iv53xtgzfQp0iOB6XPfboJB1r2WE8Q0hTRNAWkWUpwRhcn%2B%2FEMGhnFoM9nD%2F5Y2SYezIgdI6L1Bxgvr%2BDFcSdVx%2FWX2xdqrEeV%2F86ygzIOvGyYBVWjIBr9YaJqOL7BdbV4Ly%2BcSFYK%2FuO5ym25IZVj9zBLfyxzvK1naLuid8lz8VNVYDZO5xUqgxywPQn12FoMwJ3%2FSxjUjS5KNhwEtR%2B3ysE2KThZ1uGrHwmAiEx00lwRG2Gn2%2B0ocC9BxlUQFREueB8FPY2deEFdXAmyKrpMDVngHBjtBVZvaRWNntmzYK4au9G%2Fb6dpvHIlZj9pfuke0ONNS2L5bd8OnDpzsN6R1h6RIa%2BzlBxrMGAn3c3a%2BNTJTvou42cZFsl8QUXEBV72iLIlH7ejuu8idXg5DwPlWxq9a9Jr9N4z2RfkRolygtNxjUHgmzX9aZ%2BxKFxNjaRSTz0nxT2z8QC%2F9%2BBGdYI9m35G%2BG9wty1jxUedAFNLfv2WzPFWAsIRmAiRrBAi0zQS28uiqEaIr2MY1OMVh8ut0cnk%2Fb7WQS9Rp7tTZsOTJbiRc%2B7zrTt8YbwE4%2BakXOAaNq%2BPYjM8XjwHv%2B8uR0xgfXxw9ru5R%2BgVxgyZz4W30uMNPhisoGOqUB4%2BE2dE88Vw6OmZBvxeUYMiqezR0yyl4c7ExWoQ12lUQRzDYJXz00HqnH51KEGgg2KuNheQgfweEFa8qDznsKIJGdZpgCyQ8MD016gMu0hAbCcor12bXm0Av3G7zVo6fm7ay9X0PRmTWbMMB1ztWu6qowohdrG85coZYZ5sYN9B50VO7D0rv58WeNxBchoW2AoVsGgXl5NimTpgk6zLyfyF61o%2FM9&X-Amz-Signature=619841d2529f2b27f05ae1a313cc2ed44b4351dbe2df22be2fdf614e54fa5af1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WI7AOBK4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T143413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDca8w9D%2BATKg71tHq0g4i7%2BygZPAuhEkdCL%2BmCeok64AiEAwk20%2FToYNIcYvs8GtZWyrqQFCCES72A265TJBETXQf4q%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDMAudiMmkbi0Xvrw6CrcA8eed744v8b7eUP1iv53xtgzfQp0iOB6XPfboJB1r2WE8Q0hTRNAWkWUpwRhcn%2B%2FEMGhnFoM9nD%2F5Y2SYezIgdI6L1Bxgvr%2BDFcSdVx%2FWX2xdqrEeV%2F86ygzIOvGyYBVWjIBr9YaJqOL7BdbV4Ly%2BcSFYK%2FuO5ym25IZVj9zBLfyxzvK1naLuid8lz8VNVYDZO5xUqgxywPQn12FoMwJ3%2FSxjUjS5KNhwEtR%2B3ysE2KThZ1uGrHwmAiEx00lwRG2Gn2%2B0ocC9BxlUQFREueB8FPY2deEFdXAmyKrpMDVngHBjtBVZvaRWNntmzYK4au9G%2Fb6dpvHIlZj9pfuke0ONNS2L5bd8OnDpzsN6R1h6RIa%2BzlBxrMGAn3c3a%2BNTJTvou42cZFsl8QUXEBV72iLIlH7ejuu8idXg5DwPlWxq9a9Jr9N4z2RfkRolygtNxjUHgmzX9aZ%2BxKFxNjaRSTz0nxT2z8QC%2F9%2BBGdYI9m35G%2BG9wty1jxUedAFNLfv2WzPFWAsIRmAiRrBAi0zQS28uiqEaIr2MY1OMVh8ut0cnk%2Fb7WQS9Rp7tTZsOTJbiRc%2B7zrTt8YbwE4%2BakXOAaNq%2BPYjM8XjwHv%2B8uR0xgfXxw9ru5R%2BgVxgyZz4W30uMNPhisoGOqUB4%2BE2dE88Vw6OmZBvxeUYMiqezR0yyl4c7ExWoQ12lUQRzDYJXz00HqnH51KEGgg2KuNheQgfweEFa8qDznsKIJGdZpgCyQ8MD016gMu0hAbCcor12bXm0Av3G7zVo6fm7ay9X0PRmTWbMMB1ztWu6qowohdrG85coZYZ5sYN9B50VO7D0rv58WeNxBchoW2AoVsGgXl5NimTpgk6zLyfyF61o%2FM9&X-Amz-Signature=7dde0835144588189a6d569831aec26a87c21c27418cbf3dba78bfca4ee4eb7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

