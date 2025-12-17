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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HQCMBJT%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHpM1Sr5T3CNYoltW%2BdwspYl5U2J%2FL4bNUt67%2BWDaxgTAiBuHFFJlRGf%2FAYepHwRNCa%2FrXLVi%2F2d9Dpl%2FpNKK%2B9ptir%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMmQ%2ByRIozlATBv2MeKtwD44uqXyZq7ygK4QPvdjdDSdYuTH%2B0%2FBaYajIAWIOUr%2BVLpLK5ILjziG%2Fi%2FT23juRrLxrZg8VbO7Zo4MxYRBfIkRiTH4SAdQLBlTMZ3xLtJjMj6eGgKTkYKEwr3rHTIlsZVWKrd0IyZSwEXbIDSSdTMkGnOgcefxNNUR9aD1N9gAiSpQje0%2FAf0rO2b2cGRpWczsQTQj6%2F7247rPSvTSakhNhptcqXvhRch5AQuBM5auHCK2GLMiOtIbnlI1YwrocFZHkfEKmdp1GMW%2B5wkFBXw9Mi6ifQ%2BDW2k1BTdFsmNbxJg0nxff9UyIBgojiXxlG3G9JXrhQWE1gQpi9Iwo5kMJaC4TzQ0XTTfFCyJx6zPGOlIxWKM3xRFxFLcRSmwwGI1UXgkiwYqj4zz%2BPSpGCz9fnS45vTu%2FpzgxUiKAMI34QGZtWCoijMtBWY%2Bd2ZuY5nwDJr994024uZaeIEdkcQENAcLxpA6V3NZiG4WU8nPRj2DmNySUaLiQ%2BOdaY4kws4iSf%2BGIP7LadRiJ8%2B1G0xlShgw9dutzCNmotwPKKL3CDE567QWDKp%2FrdxuJZYD58ufJEL%2F1Q6i8AohfnXIGuHII39Y%2FxRVghthjlfjo%2Fy%2FK4%2FJ%2BwHBJ%2BixaNO9z8w0fuHygY6pgHpmJ85Wz5O5Qo2pA9ovqB%2BXHB1q5%2Fqb46Ehg105hPTNanyn47To6DaSBEcDXGRglQonarUaJERRADq8wBu7OABI9FaaWlmwor5xmNbfsN2%2Biz97zA96%2BPBUPO8PUB3EceJlkNOiTpt798HhF%2F%2BvHBW9JpPWAzmmjQAnsqD0KFwEfAJjtKUqkGtQR3RTyAcd3ho5tQDaKGuJd2tUp8UbuzugtX5c2D%2F&X-Amz-Signature=027266083d40f91dd09a1fb6a703aa6c1e60c03552f250dd1fd8f16e81f4950b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HQCMBJT%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHpM1Sr5T3CNYoltW%2BdwspYl5U2J%2FL4bNUt67%2BWDaxgTAiBuHFFJlRGf%2FAYepHwRNCa%2FrXLVi%2F2d9Dpl%2FpNKK%2B9ptir%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMmQ%2ByRIozlATBv2MeKtwD44uqXyZq7ygK4QPvdjdDSdYuTH%2B0%2FBaYajIAWIOUr%2BVLpLK5ILjziG%2Fi%2FT23juRrLxrZg8VbO7Zo4MxYRBfIkRiTH4SAdQLBlTMZ3xLtJjMj6eGgKTkYKEwr3rHTIlsZVWKrd0IyZSwEXbIDSSdTMkGnOgcefxNNUR9aD1N9gAiSpQje0%2FAf0rO2b2cGRpWczsQTQj6%2F7247rPSvTSakhNhptcqXvhRch5AQuBM5auHCK2GLMiOtIbnlI1YwrocFZHkfEKmdp1GMW%2B5wkFBXw9Mi6ifQ%2BDW2k1BTdFsmNbxJg0nxff9UyIBgojiXxlG3G9JXrhQWE1gQpi9Iwo5kMJaC4TzQ0XTTfFCyJx6zPGOlIxWKM3xRFxFLcRSmwwGI1UXgkiwYqj4zz%2BPSpGCz9fnS45vTu%2FpzgxUiKAMI34QGZtWCoijMtBWY%2Bd2ZuY5nwDJr994024uZaeIEdkcQENAcLxpA6V3NZiG4WU8nPRj2DmNySUaLiQ%2BOdaY4kws4iSf%2BGIP7LadRiJ8%2B1G0xlShgw9dutzCNmotwPKKL3CDE567QWDKp%2FrdxuJZYD58ufJEL%2F1Q6i8AohfnXIGuHII39Y%2FxRVghthjlfjo%2Fy%2FK4%2FJ%2BwHBJ%2BixaNO9z8w0fuHygY6pgHpmJ85Wz5O5Qo2pA9ovqB%2BXHB1q5%2Fqb46Ehg105hPTNanyn47To6DaSBEcDXGRglQonarUaJERRADq8wBu7OABI9FaaWlmwor5xmNbfsN2%2Biz97zA96%2BPBUPO8PUB3EceJlkNOiTpt798HhF%2F%2BvHBW9JpPWAzmmjQAnsqD0KFwEfAJjtKUqkGtQR3RTyAcd3ho5tQDaKGuJd2tUp8UbuzugtX5c2D%2F&X-Amz-Signature=4ac6dbd71aa5f72a3dd3542f13de39d3f3c7d2c22c667b5b8ebe9ac452e36cee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

