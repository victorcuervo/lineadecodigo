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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MKESYRZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T023239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHU1oLcxCSf0yAtXUHjU8kbwDgHF4veYWlpUyaV7IXFDAiB5DUZuCssCm23Jfh5aWXRu7TR3S%2Brw6yr3joBHT1Vtair%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMYDFKzk7wA%2FVSnsJ0KtwD3Hr29YiHjI0gq7vHJk6EEoMhaiTzcQmP0265QyO1Wfp7DwiqbV9rzZTkvgfkW5DgPmOhZxFSsk%2BlLCw5CnG5ZASe33PQxLrcmIYV%2BSS91W0luxLSJfB%2BWPY9VP5E6Ea1yC4Te%2FVIKf%2Fs%2B3QKPBEqcVt1a8M2mrOFnKufV2ZFtnDA7cy2kwRn2tBXi1NGZwu4Q3cI3H%2FP%2BfKWqGmmiuo1EkPXBXylwHV9jSzCnLt9mEEm7CwFiNw0tjkygb%2B41yF588uyCw5WgplN5xiOAw6eBSXHwEaHk2Uu5qbtQ%2BgrCy6cyiIXMLcRyZWMdY5E5Fyu7zFxapQlmECgIzsKu4%2B2peij4mniuXE6UPUxYC9MoZtDSSGjKzk0gQ8TBq8g58CeohMovpdEgbZVr0S%2FyWXksBkrU7U8CdBCCNCruwZVmX%2FQzj%2Bd%2FGmBAXy5bGXDu%2FZ20sfmICg1wtnxcVd15rXTdVVDBH8ygrf%2FrOP2SgXbsPTKWoZJ%2FvXcP%2BFafzvgPci7ZvbDvAqnxqKHU90OdcnWi9XNMrCIWcwVOqLGEaMGmWbhYJLZOY4MJQzATjjN6T7%2FLgQuoenRridPWm%2BFQf8T4HwA3k60dQOemVhBj0pyy22pdFIGEgPt8qhnC%2FEw2paIygY6pgHtdF3esQfwTW6raaeqwYruPkHq34VuDO2%2Fd54%2BaJB0Xy6cpNaVtIuuYL%2FY0ZWk%2Fmq6UT4ftF9ubnmdS0SE9Jiog9%2Ft%2FYiT0X1W3nfPXBcuJmg16aGCWTUrpUi5WgrAjJSV8%2FBUNvmWPnO9Gzwgj7Oa%2FGnj3iowxnHkQiMpPEBoQ%2FZV6O6VKDf%2FA7pAR1ijQwLV40xGPLjm%2BrGwpatEVgnkT3ySt46i&X-Amz-Signature=fce6fcac20cca20919040fc43da847cae0293bbc46018ea7629abcda533d04d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MKESYRZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T023239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHU1oLcxCSf0yAtXUHjU8kbwDgHF4veYWlpUyaV7IXFDAiB5DUZuCssCm23Jfh5aWXRu7TR3S%2Brw6yr3joBHT1Vtair%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMYDFKzk7wA%2FVSnsJ0KtwD3Hr29YiHjI0gq7vHJk6EEoMhaiTzcQmP0265QyO1Wfp7DwiqbV9rzZTkvgfkW5DgPmOhZxFSsk%2BlLCw5CnG5ZASe33PQxLrcmIYV%2BSS91W0luxLSJfB%2BWPY9VP5E6Ea1yC4Te%2FVIKf%2Fs%2B3QKPBEqcVt1a8M2mrOFnKufV2ZFtnDA7cy2kwRn2tBXi1NGZwu4Q3cI3H%2FP%2BfKWqGmmiuo1EkPXBXylwHV9jSzCnLt9mEEm7CwFiNw0tjkygb%2B41yF588uyCw5WgplN5xiOAw6eBSXHwEaHk2Uu5qbtQ%2BgrCy6cyiIXMLcRyZWMdY5E5Fyu7zFxapQlmECgIzsKu4%2B2peij4mniuXE6UPUxYC9MoZtDSSGjKzk0gQ8TBq8g58CeohMovpdEgbZVr0S%2FyWXksBkrU7U8CdBCCNCruwZVmX%2FQzj%2Bd%2FGmBAXy5bGXDu%2FZ20sfmICg1wtnxcVd15rXTdVVDBH8ygrf%2FrOP2SgXbsPTKWoZJ%2FvXcP%2BFafzvgPci7ZvbDvAqnxqKHU90OdcnWi9XNMrCIWcwVOqLGEaMGmWbhYJLZOY4MJQzATjjN6T7%2FLgQuoenRridPWm%2BFQf8T4HwA3k60dQOemVhBj0pyy22pdFIGEgPt8qhnC%2FEw2paIygY6pgHtdF3esQfwTW6raaeqwYruPkHq34VuDO2%2Fd54%2BaJB0Xy6cpNaVtIuuYL%2FY0ZWk%2Fmq6UT4ftF9ubnmdS0SE9Jiog9%2Ft%2FYiT0X1W3nfPXBcuJmg16aGCWTUrpUi5WgrAjJSV8%2FBUNvmWPnO9Gzwgj7Oa%2FGnj3iowxnHkQiMpPEBoQ%2FZV6O6VKDf%2FA7pAR1ijQwLV40xGPLjm%2BrGwpatEVgnkT3ySt46i&X-Amz-Signature=849aecd8771857d3ebb8d82bc9ad61156b1e1fbc5b36e4014a9df15cc810c39d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

