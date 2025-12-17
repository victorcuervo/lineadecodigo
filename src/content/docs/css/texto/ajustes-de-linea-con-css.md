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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3QC7A6C%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T133954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGTXtujZ5TFkLvjQ0zwPX98A77P5yUdjiqVqegILMFUdAiBDlH5SKUftEbNUxHHnzL95Y4mDaWQ9BvoM4d3mTNip8yr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMkuFWUG%2B%2Fp1E8x%2FWoKtwDsx0E765IeiQPAoBrKFkGQ45230ZC64jK9E009NFMgOwIMIGHi0uWS5n%2Bs%2BsrZb3JQ61vccyawKgNd0rYYWXdLPCzr4KKvJhJ9p2s82ZJRymuSRT%2BXpiGZDPGDXZA77UCXx7y7mSkmACNtqYjIRwQOiPX26QEY6YtHbF4bwyaVf6AOxZLDewu%2BZ8NVtlnXACCS5cCchHypm092tFGAWz2puRs6urpkYcL5PZmbMtFAZbh2Ql4JeuaEY4a4X9FORevRE%2F%2F0m%2Fy6qackFRUbPgIkqU8oBEFok8wck3XQyh3HBShV%2FMi%2Bh93Wz4mj8KR%2Fcz0KzQepkNkge7I8vtNBH1WoIyUg%2Bkhm6nbehKj4IupA9FgxOlHqmFUfp%2FkAl590q650WLjFUX1mAQmb%2FdjcW0b5MMFh3xwnyElbFHxhiqb4IMtWIh0LiS1X6Q5tv8OrNFrDu0vL3BpAHDXc%2B9PUC3kB6N%2BqhFBpgH6StdHlOyakMv3sixJuYO%2F4%2FlFYVFXpaHoY9G0iPD0M8uXHS9D%2BflfcVDwppsMW8Y9XzQq%2B0B2Z47a%2FgoYr%2F%2FMcFkm%2Bf3%2FoGpwS8t8PzvIEnOcjj3MnvUXmw4Qk7qgeHuGriDA64VWj75wyTfyAYnAta5hptkw5%2BGKygY6pgEe0Xkiyg3dkhFACCMm3B5KvPUCfS3enjz8e7ddyX9BrH83pKr4M6g%2Fe2MMCBUlcJ4G9ylaMV2kv4uh4OOrNwlGOzwnnegyaWyfm6KgTzhg1%2BbcxpR39W0wyoFw6TOaE6LJn%2Byv5c%2FsMWs70GcJqZf%2F6VP4OUwSHF%2BzO3JYDErxiozXY5ANWup3mE4y%2FN8yR8dzFl1VJgxLkkQi79cAFTCX1mC5U809&X-Amz-Signature=c95cf82eab9cfec407b92f9b4d2be1568424d29f1185821425e9dca0e31be5fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3QC7A6C%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T133954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGTXtujZ5TFkLvjQ0zwPX98A77P5yUdjiqVqegILMFUdAiBDlH5SKUftEbNUxHHnzL95Y4mDaWQ9BvoM4d3mTNip8yr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMkuFWUG%2B%2Fp1E8x%2FWoKtwDsx0E765IeiQPAoBrKFkGQ45230ZC64jK9E009NFMgOwIMIGHi0uWS5n%2Bs%2BsrZb3JQ61vccyawKgNd0rYYWXdLPCzr4KKvJhJ9p2s82ZJRymuSRT%2BXpiGZDPGDXZA77UCXx7y7mSkmACNtqYjIRwQOiPX26QEY6YtHbF4bwyaVf6AOxZLDewu%2BZ8NVtlnXACCS5cCchHypm092tFGAWz2puRs6urpkYcL5PZmbMtFAZbh2Ql4JeuaEY4a4X9FORevRE%2F%2F0m%2Fy6qackFRUbPgIkqU8oBEFok8wck3XQyh3HBShV%2FMi%2Bh93Wz4mj8KR%2Fcz0KzQepkNkge7I8vtNBH1WoIyUg%2Bkhm6nbehKj4IupA9FgxOlHqmFUfp%2FkAl590q650WLjFUX1mAQmb%2FdjcW0b5MMFh3xwnyElbFHxhiqb4IMtWIh0LiS1X6Q5tv8OrNFrDu0vL3BpAHDXc%2B9PUC3kB6N%2BqhFBpgH6StdHlOyakMv3sixJuYO%2F4%2FlFYVFXpaHoY9G0iPD0M8uXHS9D%2BflfcVDwppsMW8Y9XzQq%2B0B2Z47a%2FgoYr%2F%2FMcFkm%2Bf3%2FoGpwS8t8PzvIEnOcjj3MnvUXmw4Qk7qgeHuGriDA64VWj75wyTfyAYnAta5hptkw5%2BGKygY6pgEe0Xkiyg3dkhFACCMm3B5KvPUCfS3enjz8e7ddyX9BrH83pKr4M6g%2Fe2MMCBUlcJ4G9ylaMV2kv4uh4OOrNwlGOzwnnegyaWyfm6KgTzhg1%2BbcxpR39W0wyoFw6TOaE6LJn%2Byv5c%2FsMWs70GcJqZf%2F6VP4OUwSHF%2BzO3JYDErxiozXY5ANWup3mE4y%2FN8yR8dzFl1VJgxLkkQi79cAFTCX1mC5U809&X-Amz-Signature=2c612ab386aff0dec9711abd4f835122e3c8ca8a843a899fecc6f6fe89c6b99b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

