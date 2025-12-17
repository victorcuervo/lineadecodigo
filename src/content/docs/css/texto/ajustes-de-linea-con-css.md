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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667P5FQKKQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T043830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDlzC2vfdh4NUgPBCnO7nha77Q4aLTU3MBSq59mf9c%2BkAiEAjmot9O8wd0OEX1EKfwRnhx4T4exMTVZ73GMLr2V9Ft0q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDHCCm7rf3sZXIYZwYircA8XPYkUtv2UEaFkhzM8O5ewbAIwGJkbonbNM2dqKIHRVPO%2FmO%2FlYq2%2Bc8jiyAxplA%2BFG47t6ysdfvNTdBh%2BmBXG9QAhwG2KATSXX04gajjuVfHBrSC4Rib7Be7G11dpoyGKudFEAkKLtum4QMoEU92WDRJdW3gXtorHr%2FhoLK%2B8ViXc5134e6rMkhwW7IZoy6izhUz%2BFefHpmHdvWe%2BATiZTQWSjDqTkWJqOOH%2FoQV01dc6oDAVWR0eePfkfuux5TgX7dhEvC2fmhmnF6LYthJb0RQOhh6BtuhHTAi914DP6fTKWUORgWQPnuqeKrTPKFdMk9bjvdPkBJO0%2FpPhkZy%2FUrndwnJdkINf4BMXy%2FEV92BF5nyFSHkO7xl1ZZcMC37O83JuQX3Ry%2B0o78XpuXASJUICgsg1EJUG8LznASqPadrK%2FITcHv8Ns3ORhIEh3fGcX6vMKBf8APA0kjPr7E%2BgUVMZWbWQpGyH%2FCzFIPYme4sigj8QZWzw1pAu8qnPUxDOegkrgd8hJd4EwfCsWJmUEirdupigJaqm1U%2FPTUjolq1OW3d%2B8QqeWQJSptBvUuFYBgq%2B2EV5Hw2tEjoX6BOV2f8Eic3%2BilsjeYNcAPodm4GYLZu%2BLeuUemVGQMJHOiMoGOqUBybl7MZuORcmDm99gjU5dkuRzGfQBdxpmeYmWAztea%2B4MhUq4E4O5X2TVfeI9%2F%2BvIyMx3PHpYaa5fihASO1zibpcNRx9mFsJvhBCECh%2Bk8caVCRw1E%2FIakkF4Q2zr2ZPapZ1qaWDAGqV0XtwhfRIYB6uXLrHcszdaDBi7vitpfra0fAgBIPBWBnlIvlRfW7yAxxZx%2FcHV%2BEcJ1x390Q3cECWJ11iy&X-Amz-Signature=2b1f46e5b7ea93d178bbbfab827fb4692cf40b712f8803474c49e03056d8526d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667P5FQKKQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T043830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDlzC2vfdh4NUgPBCnO7nha77Q4aLTU3MBSq59mf9c%2BkAiEAjmot9O8wd0OEX1EKfwRnhx4T4exMTVZ73GMLr2V9Ft0q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDHCCm7rf3sZXIYZwYircA8XPYkUtv2UEaFkhzM8O5ewbAIwGJkbonbNM2dqKIHRVPO%2FmO%2FlYq2%2Bc8jiyAxplA%2BFG47t6ysdfvNTdBh%2BmBXG9QAhwG2KATSXX04gajjuVfHBrSC4Rib7Be7G11dpoyGKudFEAkKLtum4QMoEU92WDRJdW3gXtorHr%2FhoLK%2B8ViXc5134e6rMkhwW7IZoy6izhUz%2BFefHpmHdvWe%2BATiZTQWSjDqTkWJqOOH%2FoQV01dc6oDAVWR0eePfkfuux5TgX7dhEvC2fmhmnF6LYthJb0RQOhh6BtuhHTAi914DP6fTKWUORgWQPnuqeKrTPKFdMk9bjvdPkBJO0%2FpPhkZy%2FUrndwnJdkINf4BMXy%2FEV92BF5nyFSHkO7xl1ZZcMC37O83JuQX3Ry%2B0o78XpuXASJUICgsg1EJUG8LznASqPadrK%2FITcHv8Ns3ORhIEh3fGcX6vMKBf8APA0kjPr7E%2BgUVMZWbWQpGyH%2FCzFIPYme4sigj8QZWzw1pAu8qnPUxDOegkrgd8hJd4EwfCsWJmUEirdupigJaqm1U%2FPTUjolq1OW3d%2B8QqeWQJSptBvUuFYBgq%2B2EV5Hw2tEjoX6BOV2f8Eic3%2BilsjeYNcAPodm4GYLZu%2BLeuUemVGQMJHOiMoGOqUBybl7MZuORcmDm99gjU5dkuRzGfQBdxpmeYmWAztea%2B4MhUq4E4O5X2TVfeI9%2F%2BvIyMx3PHpYaa5fihASO1zibpcNRx9mFsJvhBCECh%2Bk8caVCRw1E%2FIakkF4Q2zr2ZPapZ1qaWDAGqV0XtwhfRIYB6uXLrHcszdaDBi7vitpfra0fAgBIPBWBnlIvlRfW7yAxxZx%2FcHV%2BEcJ1x390Q3cECWJ11iy&X-Amz-Signature=1c447e7ca00e5dc1ec667a7ba24f4e84d2741c8523b7c306e878c90e9da68ee8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

