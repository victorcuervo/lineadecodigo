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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSLIGWDS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T084215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FVp3lsvo4LoTreFf1yi8WQlZ5cJrjhbUV8UwPPlmPPAIhAPc6IA7a1M%2B4aH4PkIAjeHcU0T6npyNdPo5zPYlhkdDrKv8DCHoQABoMNjM3NDIzMTgzODA1IgyffX%2FkNAyE%2Buyo%2BeUq3AMYJvKFFjJr9W70egY84so8Rp9htdq0RpoOHv1MEqTedV8IKedxH72KMqaJVStSsguKvwfJTaKxBUHnwxLPxY%2FRKKgHRCTT3%2BsqKa2zBjDHzQKJTx1npQoXRTae2ORq44Cyh8ym2n3a3pP%2FLkE2Ht4uI4ZLhewHP7XSasclNbc36F%2BEonLTgUDi%2BcO2%2FAuowWwrECQtOZ%2F%2BO9ssitKRfJwAQ4sZIG2dD9MctEZcY19MiWCrtpTLCTfVNeyf2%2FtaH46%2BHK2cIVvlVOrXNlev6NVOAOwPqQkNF%2B1QLi2%2Fv%2BAfL3WXmbh2ECjh1vRwlykTh1I9HWe1BLwwehDCGWTmOXrzqAB%2FsqLNZv%2FmJbzapgJMnqip1ph6UePpE2l31okXiMAXOLr2EEeMRv2HXVv4k66stUfHrdI02aMP5YgtnEJ7sRx%2F5cGpCi9p6xvmdGc3zA3OXQcB1lt2IeqwlzSUI3ug6HJZnPnV%2FVqvaWJz2zSx17V1mEWT3qztx9A3A%2BmkBrc4WW8N%2BDJPBHka%2FjTF8r%2BihreEm6DOhSfHzgyfUI%2B8FPjJmIVng%2FV7PCkokRfLW3o0zezk0HNLNAGy8iVaBxl74ohLzVcEzJseqG4hcmmJ4PGXNUQWtsq58JAaYzCN0onKBjqkAYg1naBtBJGzwJrlrZlXtZmFMz3K%2B%2FDyyOaBce202ExgkYofE7%2B041gr7TQEqOMohE9eG58N6pZ%2FWeU1Tdyg2IIv9bvAa1H5cVcxNto8cZOwfpPxKCYqi%2F4PxTgM5YcfPF7uC79RnX4jGiqYLZOtHF7RlLSRuAVqrzq4XgkNpqw0ScWe%2FlvrSKZ8%2BbQZ35VP4%2F7mrUs2APzHQWNQFo8j1TRKF3dG&X-Amz-Signature=67533365b35f3217c47bb244b7f1c28be4ed229e816b829b5b2fea2d23647079&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSLIGWDS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T084215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FVp3lsvo4LoTreFf1yi8WQlZ5cJrjhbUV8UwPPlmPPAIhAPc6IA7a1M%2B4aH4PkIAjeHcU0T6npyNdPo5zPYlhkdDrKv8DCHoQABoMNjM3NDIzMTgzODA1IgyffX%2FkNAyE%2Buyo%2BeUq3AMYJvKFFjJr9W70egY84so8Rp9htdq0RpoOHv1MEqTedV8IKedxH72KMqaJVStSsguKvwfJTaKxBUHnwxLPxY%2FRKKgHRCTT3%2BsqKa2zBjDHzQKJTx1npQoXRTae2ORq44Cyh8ym2n3a3pP%2FLkE2Ht4uI4ZLhewHP7XSasclNbc36F%2BEonLTgUDi%2BcO2%2FAuowWwrECQtOZ%2F%2BO9ssitKRfJwAQ4sZIG2dD9MctEZcY19MiWCrtpTLCTfVNeyf2%2FtaH46%2BHK2cIVvlVOrXNlev6NVOAOwPqQkNF%2B1QLi2%2Fv%2BAfL3WXmbh2ECjh1vRwlykTh1I9HWe1BLwwehDCGWTmOXrzqAB%2FsqLNZv%2FmJbzapgJMnqip1ph6UePpE2l31okXiMAXOLr2EEeMRv2HXVv4k66stUfHrdI02aMP5YgtnEJ7sRx%2F5cGpCi9p6xvmdGc3zA3OXQcB1lt2IeqwlzSUI3ug6HJZnPnV%2FVqvaWJz2zSx17V1mEWT3qztx9A3A%2BmkBrc4WW8N%2BDJPBHka%2FjTF8r%2BihreEm6DOhSfHzgyfUI%2B8FPjJmIVng%2FV7PCkokRfLW3o0zezk0HNLNAGy8iVaBxl74ohLzVcEzJseqG4hcmmJ4PGXNUQWtsq58JAaYzCN0onKBjqkAYg1naBtBJGzwJrlrZlXtZmFMz3K%2B%2FDyyOaBce202ExgkYofE7%2B041gr7TQEqOMohE9eG58N6pZ%2FWeU1Tdyg2IIv9bvAa1H5cVcxNto8cZOwfpPxKCYqi%2F4PxTgM5YcfPF7uC79RnX4jGiqYLZOtHF7RlLSRuAVqrzq4XgkNpqw0ScWe%2FlvrSKZ8%2BbQZ35VP4%2F7mrUs2APzHQWNQFo8j1TRKF3dG&X-Amz-Signature=60c1d38a53528f4c0e4865b0cde56aca7fe99164e01c5882f4861c875f7d7631&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

