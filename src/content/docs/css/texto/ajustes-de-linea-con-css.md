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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SKMJY6R%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T140537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFQyh0bkB1CVGyoj4xUs5%2FSPAZLVcSzDT0Ezk5wMOeIGAiEA86rwKMKGLBfTHeeNJuAMMmQFkUx9I8r3W6%2BD05hkvn4q%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDAsanCfpUD5nKWFjhircAyELDPJpNUKJXyIlNUfuzrhvMO1WAUHN0ESM0wzedh3UvLxqXO9u55h7epr02gCb0sbtooByUGC5NDNuBkttA8Usx2WgynXeS%2BJZOSQMMHkSx%2BJrypMtNEdaGcYIt8o3Lk0%2Bw6EX4xdHDJeQwcl0Hp2XIHt0mQ59SJwcLUT2XX8t4KtrD6Q8%2F6LfIzlGU5igxxw7LIGdpayrcR8HkBDUVShd3y3bWwm8TIsQP%2F495J3blWNjWbSF%2BjVNmZ3cQTDU%2BiUCHH1GmfK%2FsxjnQB%2BZO%2F6x8fAZKD0neV3Y3LbWuzEEncFL7Qv1KPxg3OTlZcK3zcQ0BQGTp5pTOC97tvjlG6pCTXNTiW90sMvXB2LGeY6Luw%2Frs1UuOIbtfdnFOj77nXSvURoJdm8vkJCheKYIvkW7HCQ1BxemE7fpiARaR9m7SVPsc2MPz6CsI73%2FS7bNyhsveHVDh9SrMM7QpihVBun8DQnoqcyjHuLMrI051JY2jd5A0b8gpVMlKRwvp5HVp5g4hPcErTWjbUQZ%2BhSovhJqNXXDyifwl14mzXJVMpbIPwhychc0q%2Fp9%2BduYsojD7DJk6FI%2BrpAx4DYLhwKZ9VTYnlVSae9L9Y5NnabRjtZUnRbWxsFOJlVHf7%2BNMOLhisoGOqUBOIJSJjtyTJM%2BmunPgkn5yPec%2BYLi7Mr58Kf3qXdGP%2BqweIxC5tKr0ogejWYJDQnFPAlgncmdG3iyyTIBoNZvaoulZsSzWcHL%2FPnQPHdarL6V8mRozEv%2BXkvcnSQUf37tX7kKiK1D2bdAM4fZ%2FTLMUUE3qyg4p1z3CAMHGeo8cqHZqvwA7QRtB2rbUvsldXaWkl0KTHBHB62ABNC0duSJqa%2BXVTPL&X-Amz-Signature=653de65c141d6ca99f99bd6117b4b46e7adf63f9c252824102b89a951c60434c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SKMJY6R%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T140537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFQyh0bkB1CVGyoj4xUs5%2FSPAZLVcSzDT0Ezk5wMOeIGAiEA86rwKMKGLBfTHeeNJuAMMmQFkUx9I8r3W6%2BD05hkvn4q%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDAsanCfpUD5nKWFjhircAyELDPJpNUKJXyIlNUfuzrhvMO1WAUHN0ESM0wzedh3UvLxqXO9u55h7epr02gCb0sbtooByUGC5NDNuBkttA8Usx2WgynXeS%2BJZOSQMMHkSx%2BJrypMtNEdaGcYIt8o3Lk0%2Bw6EX4xdHDJeQwcl0Hp2XIHt0mQ59SJwcLUT2XX8t4KtrD6Q8%2F6LfIzlGU5igxxw7LIGdpayrcR8HkBDUVShd3y3bWwm8TIsQP%2F495J3blWNjWbSF%2BjVNmZ3cQTDU%2BiUCHH1GmfK%2FsxjnQB%2BZO%2F6x8fAZKD0neV3Y3LbWuzEEncFL7Qv1KPxg3OTlZcK3zcQ0BQGTp5pTOC97tvjlG6pCTXNTiW90sMvXB2LGeY6Luw%2Frs1UuOIbtfdnFOj77nXSvURoJdm8vkJCheKYIvkW7HCQ1BxemE7fpiARaR9m7SVPsc2MPz6CsI73%2FS7bNyhsveHVDh9SrMM7QpihVBun8DQnoqcyjHuLMrI051JY2jd5A0b8gpVMlKRwvp5HVp5g4hPcErTWjbUQZ%2BhSovhJqNXXDyifwl14mzXJVMpbIPwhychc0q%2Fp9%2BduYsojD7DJk6FI%2BrpAx4DYLhwKZ9VTYnlVSae9L9Y5NnabRjtZUnRbWxsFOJlVHf7%2BNMOLhisoGOqUBOIJSJjtyTJM%2BmunPgkn5yPec%2BYLi7Mr58Kf3qXdGP%2BqweIxC5tKr0ogejWYJDQnFPAlgncmdG3iyyTIBoNZvaoulZsSzWcHL%2FPnQPHdarL6V8mRozEv%2BXkvcnSQUf37tX7kKiK1D2bdAM4fZ%2FTLMUUE3qyg4p1z3CAMHGeo8cqHZqvwA7QRtB2rbUvsldXaWkl0KTHBHB62ABNC0duSJqa%2BXVTPL&X-Amz-Signature=3b71e9c208f6cb26300d8c50a002d38238cfbd6b0c52079faabeab02aee09578&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

