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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3USAZFP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T045103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIExXjCJgQE6PjreeF15LIWwmgYl20wGM5phsjjctPnxuAiEA5s3fNc1K4AIwcz0ttau3XgaiSpDr7Fi%2FCuiyLPxyRVsq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDAI97Cr3hjYwiTGpDyrcAxeKisYnlzpOBCwLemE22ho4xFOxqZGqZLYRhk%2BaM3Jhx8CY7C9OcjSuQFxsSVg7r52%2Br5n7jOg6cxcLIWGyTyQMpPNdnhO2%2BKL6OTigLcUISQTa1dM%2B%2F42ykbEc67aCGfq3stTy8qqb8VrPjdrORZfSh0NXPKqBt7yyA63yNZhhr6lZ%2BXk7QMhhnmDTYwnwAaiIH2GzuDLCObEdtXa9A5FKu%2BHOFUgQBqA49eR0IUFqiTj9A8AS0hz15Bkjmj2VIg505ci%2FIuySsqjwsYreG%2BdgOuXLOxzZXWgnGdIwcme%2FXjeJM5q0nv2FvXZF6KVGAyKzFev%2B1K5S2XPM0iPtiViDMfAsub%2F%2FH2yVoEsBDgsPJth6226pCDMc16bhwYX33aEB0uekuR%2BtTOrHDHETazo6iXH1tD1FffDrW5%2Fqjqwcuwx1i0n6iHPPUYyBTDrLcWfhmh%2Fa41xf%2F5nJa28HANsurjVHrA5iV7jRTb8qWreOJYGxzHo4uCVwjvapvUCFFzr58kuc1%2BUx1eT0fLlumisaMf8r%2Bpt5SdMMhQEfLN%2FNuuWhoHZZOJLQ9Fo4oLeHKWlQoJ4%2F333voE3b8oNW4JEerROKX2MAmveuNioG0oeBN%2F%2BIqYP%2FaCGK27t%2BMI7qiMoGOqUByK5kxV1VCnVRApm6%2BQarwOE6chrzVnAuAc7yxltXSVLsFxiTKRIpHUooyNgJkKcafFXBXIC5BR5AvR%2BJ3f3vzeLf2CnxfuzTr8SxhTWJXpD4JKGOcmjHdvdb41hJBKrvCA9kmkGWqrdnVDnndFhQIrU3TBD7wq8k7XrZbAzjlRFSjBNod8NlvJV9LbkPbD%2F63PFs9FWDqtRNDPNa2wu4UaTyFiSz&X-Amz-Signature=ab18de73e652ee9c7d3b68d73e536c85e46d4a9bdc283c34367ee4a9ecb7b683&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3USAZFP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T045103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIExXjCJgQE6PjreeF15LIWwmgYl20wGM5phsjjctPnxuAiEA5s3fNc1K4AIwcz0ttau3XgaiSpDr7Fi%2FCuiyLPxyRVsq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDAI97Cr3hjYwiTGpDyrcAxeKisYnlzpOBCwLemE22ho4xFOxqZGqZLYRhk%2BaM3Jhx8CY7C9OcjSuQFxsSVg7r52%2Br5n7jOg6cxcLIWGyTyQMpPNdnhO2%2BKL6OTigLcUISQTa1dM%2B%2F42ykbEc67aCGfq3stTy8qqb8VrPjdrORZfSh0NXPKqBt7yyA63yNZhhr6lZ%2BXk7QMhhnmDTYwnwAaiIH2GzuDLCObEdtXa9A5FKu%2BHOFUgQBqA49eR0IUFqiTj9A8AS0hz15Bkjmj2VIg505ci%2FIuySsqjwsYreG%2BdgOuXLOxzZXWgnGdIwcme%2FXjeJM5q0nv2FvXZF6KVGAyKzFev%2B1K5S2XPM0iPtiViDMfAsub%2F%2FH2yVoEsBDgsPJth6226pCDMc16bhwYX33aEB0uekuR%2BtTOrHDHETazo6iXH1tD1FffDrW5%2Fqjqwcuwx1i0n6iHPPUYyBTDrLcWfhmh%2Fa41xf%2F5nJa28HANsurjVHrA5iV7jRTb8qWreOJYGxzHo4uCVwjvapvUCFFzr58kuc1%2BUx1eT0fLlumisaMf8r%2Bpt5SdMMhQEfLN%2FNuuWhoHZZOJLQ9Fo4oLeHKWlQoJ4%2F333voE3b8oNW4JEerROKX2MAmveuNioG0oeBN%2F%2BIqYP%2FaCGK27t%2BMI7qiMoGOqUByK5kxV1VCnVRApm6%2BQarwOE6chrzVnAuAc7yxltXSVLsFxiTKRIpHUooyNgJkKcafFXBXIC5BR5AvR%2BJ3f3vzeLf2CnxfuzTr8SxhTWJXpD4JKGOcmjHdvdb41hJBKrvCA9kmkGWqrdnVDnndFhQIrU3TBD7wq8k7XrZbAzjlRFSjBNod8NlvJV9LbkPbD%2F63PFs9FWDqtRNDPNa2wu4UaTyFiSz&X-Amz-Signature=297185571977e68975fcad6eb67b138af2286240d12d3d66e1d5ddbbdfe07a19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

