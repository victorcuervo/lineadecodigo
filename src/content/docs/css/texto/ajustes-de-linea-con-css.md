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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VONEMT7Y%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T152055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCY%2BRmLYgT%2Fv5P7o2ZbcZj%2BGNU%2B1Dpv6KJsJvjbyiz%2F1wIhANVUjwfRA3JkGqlWnthPSuiImG1I%2FTjvewOkMRT59gGPKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxcYR1GDXA8zHd9Dhoq3AOdWYTgW1dAvBnDOlwdd%2Bnt0FeJv1GxX6GYTD%2BCxvbvAVR1KtDt9cOXu4FRTjj3Q6ke4mhNy5J%2Bbzalo2cOaN0iS71aZiDnbBKTZ2tWttswSB9zPy00GQ8OXZpnMerWXm4mHIIgPMXwk9PPIZlHSji3CM0xBZafi1FE18INuBCfnIrox96Cl9GsQuVLiKkHeLSlVDyjLLWMFXHGiEBBaT6vsl9ZaiFY86ji92URLokIqxMkJndf%2BeQzuYoTVj3RuhW7TWQtRxVFGwXp7oNtq4oDDvqfS8UBRBoglLVK7iRre867Op%2FlkziSbjg6NRMK%2Bh2mObjvGL6E%2FWQdpgfuWDtKgAZpvfbdwKF0NsYIEsmR1NMG2BopZOXZh14UOfJ1peB6NqFQyNuHTpDIKoMbyjfO2WLfRDoE1%2Fa6ic%2BBpw%2BooKhO1A4ZVI%2BTckJs5wThGeetlGo12fUBso4sGG9GcxFwTwupF8teWQV%2B9azlssZsts59aGjeVnYdtNBNfFlAJEpydiVBgRWETxVaUboagmxxMFm1UoPI85g3MGEhsC9InhAQQUFtYtbzCfGzuwORBi9hCkISfEvtQTAGo4DTSZk%2Ffz9OhtYhPsgd453zsYxoxtewT1CYpCxaInrhiTDd%2F4rKBjqkAVAMTFHs3DQ%2BDzwIbUvNuXEaOCnzcCgrdwxF%2Fo6JM9rjuxer56sv7i%2BXVUDWBVkAzA9bmsRRNDq5DK6a1kvCkSqoCWjqTs7bi3idO1t%2FW3%2BET3jBCqB0tB4w2B%2BEYTEAHzKcUCgMgZb%2B%2BbzzcyES2ViSj1F5Uokmcp%2BfFnRIJ22tYUJz5sQnMsaJplrXF8oUJV00TYaWvc0glOMRACiQneu73XGp&X-Amz-Signature=f98db9d2a96c0bf4bf776a85d5955e1ac71152612987af0b1dddd1bd3b32e3df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VONEMT7Y%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T152055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCY%2BRmLYgT%2Fv5P7o2ZbcZj%2BGNU%2B1Dpv6KJsJvjbyiz%2F1wIhANVUjwfRA3JkGqlWnthPSuiImG1I%2FTjvewOkMRT59gGPKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxcYR1GDXA8zHd9Dhoq3AOdWYTgW1dAvBnDOlwdd%2Bnt0FeJv1GxX6GYTD%2BCxvbvAVR1KtDt9cOXu4FRTjj3Q6ke4mhNy5J%2Bbzalo2cOaN0iS71aZiDnbBKTZ2tWttswSB9zPy00GQ8OXZpnMerWXm4mHIIgPMXwk9PPIZlHSji3CM0xBZafi1FE18INuBCfnIrox96Cl9GsQuVLiKkHeLSlVDyjLLWMFXHGiEBBaT6vsl9ZaiFY86ji92URLokIqxMkJndf%2BeQzuYoTVj3RuhW7TWQtRxVFGwXp7oNtq4oDDvqfS8UBRBoglLVK7iRre867Op%2FlkziSbjg6NRMK%2Bh2mObjvGL6E%2FWQdpgfuWDtKgAZpvfbdwKF0NsYIEsmR1NMG2BopZOXZh14UOfJ1peB6NqFQyNuHTpDIKoMbyjfO2WLfRDoE1%2Fa6ic%2BBpw%2BooKhO1A4ZVI%2BTckJs5wThGeetlGo12fUBso4sGG9GcxFwTwupF8teWQV%2B9azlssZsts59aGjeVnYdtNBNfFlAJEpydiVBgRWETxVaUboagmxxMFm1UoPI85g3MGEhsC9InhAQQUFtYtbzCfGzuwORBi9hCkISfEvtQTAGo4DTSZk%2Ffz9OhtYhPsgd453zsYxoxtewT1CYpCxaInrhiTDd%2F4rKBjqkAVAMTFHs3DQ%2BDzwIbUvNuXEaOCnzcCgrdwxF%2Fo6JM9rjuxer56sv7i%2BXVUDWBVkAzA9bmsRRNDq5DK6a1kvCkSqoCWjqTs7bi3idO1t%2FW3%2BET3jBCqB0tB4w2B%2BEYTEAHzKcUCgMgZb%2B%2BbzzcyES2ViSj1F5Uokmcp%2BfFnRIJ22tYUJz5sQnMsaJplrXF8oUJV00TYaWvc0glOMRACiQneu73XGp&X-Amz-Signature=28501f0c34e7209cc0f5b79938857836bd770b53ae94474fc80bd2280cfc82fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

